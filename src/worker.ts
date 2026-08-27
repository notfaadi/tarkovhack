/**
 * Cloudflare Worker — host canonicalization before static assets.
 * Canonical site: https://tarkovhack.org (matches brand.url)
 *
 * Requires DNS + Workers custom domain for BOTH:
 * - tarkovhack.org
 * - www.tarkovhack.org
 * Otherwise www is NXDOMAIN and Seobility fails the www/non-www check.
 */
export interface Env {
	ASSETS: Fetcher;
}

const CANONICAL_HOST = 'tarkovhack.org';
const CANONICAL_ORIGIN = `https://${CANONICAL_HOST}`;

/** Hosts that must 301 → https://tarkovhack.org (same path + query). */
const REDIRECT_HOSTS = new Set([
	`www.${CANONICAL_HOST}`,
	'tarkovhack.com',
	'www.tarkovhack.com',
	'tarkovcheats.org',
	'www.tarkovcheats.org',
	'besttarkovcheats.com',
	'www.besttarkovcheats.com',
]);

function redirectTarget(request: Request): string | null {
	const url = new URL(request.url);
	const host = (request.headers.get('host') || url.hostname).split(':')[0].toLowerCase();
	let needsRedirect = false;

	if (url.protocol === 'http:') {
		needsRedirect = true;
	}

	if (REDIRECT_HOSTS.has(host) || REDIRECT_HOSTS.has(url.hostname.toLowerCase())) {
		needsRedirect = true;
	}

	if (!needsRedirect) return null;

	const target = new URL(url.pathname + url.search, CANONICAL_ORIGIN);
	return target.toString();
}

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const location = redirectTarget(request);
		if (location && location !== request.url) {
			return Response.redirect(location, 301);
		}

		// Force https on apex if edge somehow still sees http
		const url = new URL(request.url);
		if (url.protocol === 'http:' && url.hostname === CANONICAL_HOST) {
			url.protocol = 'https:';
			return Response.redirect(url.toString(), 301);
		}

		return env.ASSETS.fetch(request);
	},
};
