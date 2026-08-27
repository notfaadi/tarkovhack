/**
 * SINGLE SOURCE OF TRUTH for template rebrands.
 * Employees: use Brand Studio at http://localhost:4321/brand-studio/ during `astro dev`.
 * Do not scatter brand strings across components.
 */
export const brand = {
	/** Public brand name (nav, footer, H1 hero, schema Organization) */
	name: 'Tarkov Hack',
	/** Short product label if needed */
	shortName: 'Tarkov Hack',
	/** Canonical origin — no trailing slash */
	url: 'https://tarkovhack.org',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@tarkovhack.org',
	/**
	 * Google Search Console HTML-tag verification token (content= value only).
	 * Leave empty if you verify via DNS TXT on the Domain property.
	 */
	googleSiteVerification: '',
	checkoutUrl: 'https://zadeyo.com/go/QRH?to=%2Fproducts%2Fescape-from-tarkov',

	/** Game this template instance targets */
	game: 'Escape from Tarkov',
	/** Anti-cheat name used in Status / FAQ copy */
	antiCheat: 'BattlEye',

	logo: '/images/tarkov-cheats-logo.webp',
	logoRaster: '/images/tarkov-cheats-logo.png',
	logoRasterWidth: 512,
	logoRasterHeight: 512,
	logoAlt: 'TarkovHack logo',
	defaultOgImage: '/images/tarkov-cheats-hero-1024w.webp',
	heroImage: '/images/tarkov-cheats-hero-1024w.webp',

	plans: [
		{ id: 'monthly', label: 'Monthly', price: 35, duration: 'P30D' },
		{ id: 'lifetime', label: 'Lifetime', price: 150, duration: 'P99Y' },
	] as const,
	currency: 'USD',
	platforms: ['Windows PC'] as const,

	/**
	 * Site color tones — accent + canvas + soft/deep/hover/panel.
	 * Edit in Brand Studio → Colors (tones are fully customizable).
	 */
	theme: {
		accent: '#5311ee',
		bg: '#0a0811',
		soft: '#c3aef4',
		deep: '#4907df',
		hover: '#a07bf4',
		panel: '#0a080c',
	},

	/**
	 * Keyword system — primary drives titles; list feeds meta keywords + schema targeting.
	 */
	keywords: {
		primary: 'tarkov hacks',
		list: [
			'tarkov hacks',
			'escape from tarkov cheats',
			'eft hacks',
			'tarkov cheats',
			'eft cheats',
			'escape from tarkov hacks',
			'tarkov aimbot',
			'tarkov esp',
			'tarkov radar hack',
			'tarkov wallhack',
			'best tarkov hacks 2025',
			'undetected tarkov cheats',
			'tarkov hacks free download',
			'how to hack escape from tarkov',
			'tarkov cheat codes',
			'tarkov item esp',
			'tarkov loot esp',
			'tarkov extraction esp',
			'tarkov player esp',
			'tarkov no recoil hack',
			'tarkov speed hack',
			'tarkov god mode',
			'tarkov infinite stamina',
			'tarkov unlock all',
			'tarkov flea market hack',
			'tarkov aimbot esp',
			'tarkov silent aim',
			'tarkov trigger bot',
			'tarkov bone aimbot',
			'tarkov smooth aim',
			'tarkov weapon esp',
			'tarkov container esp',
			'tarkov loot radar',
			'tarkov extraction radar',
			'tarkov night vision hack',
			'tarkov thermal vision cheat',
			'tarkov no sway hack',
			'tarkov instant examine',
			'tarkov fast loot',
			'tarkov loot through walls',
			'undetected eft cheats',
			'safe tarkov hacks',
			'tarkov ban bypass',
			'tarkov anti cheat bypass',
			'tarkov battleye bypass',
			'tarkov kernel cheat',
			'tarkov external hack',
			'tarkov internal cheat',
			'tarkov private cheats',
			'tarkov slot limited hack',
			'tarkov hwid spoofer',
			'tarkov cleaner',
			'tarkov pvp hacks',
			'tarkov pve cheats',
			'tarkov arena hacks',
			'tarkov labs cheats',
			'tarkov customs hack',
			'tarkov shoreline esp',
			'tarkov interchange cheats',
			'tarkov reserve hacks',
			'tarkov woods esp',
			'tarkov lighthouse cheats',
			'buy tarkov hacks',
			'tarkov cheat subscription',
			'cheap eft cheats',
			'premium tarkov hacks',
			'tarkov lifetime cheats',
			'tarkov cheat reseller',
			'tarkov hack provider',
			'tarkov private hack discord',
			'tarkov cheat forum',
			'tarkov hack shop',
			'how to install tarkov hacks',
			'tarkov cheat tutorial',
			'tarkov hack setup guide',
			'tarkov cheat loader',
			'tarkov injector',
			'tarkov dll hack',
			'tarkov memory hack',
			'tarkov dma cheats',
			'tarkov radar download',
			'tarkov esp overlay',
			'skeet tarkov',
			'neverlose tarkov',
			'onetap tarkov',
			'gamesense tarkov',
			'lucky charma tarkov',
			'vortex tarkov',
			'hyperion tarkov',
			'midnight tarkov',
			'tarkov hacks new wipe',
			'tarkov cheats 0.15',
			'tarkov arena cheats',
			'tarkov hacks working 2025',
			'tarkov cheats after update',
			'tarkov wipe hacks',
			'tarkov early wipe cheats',
			'tarkov hax',
			'eft aimbot',
			'eft esp',
			'eft radar',
			'escape tarkov hacks',
			'eft cheat',
			'tarkov chams',
			'tarkov glow esp',
			'tarkov box esp',
			'tarkov skeleton esp',
			'undetected eft hacks',
			'secure tarkov cheats',
			'professional tarkov developers',
			'24/7 tarkov support',
			'instant tarkov download',
			'regular tarkov updates',
			'private tarkov community',
			'trusted tarkov provider',
			'premium tarkov features',
			'safe eft cheating',
		] as const,
	},

	/**
	 * Editable SEO meta — tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 * Aim ~50–60 chars titles, ~140–160 chars descriptions.
	 */
	seo: {
		/** Titles ≤60 chars; descriptions ~140–160 (Google SERP display). */
		/** Home = brand hub. Money URL /tarkov-cheats/ owns the head term. */
		homeTitle: 'Tarkov ESP & Aimbot - Undetected Hacks | tarkovhack.org',
		homeDescription:
			'Undetected tarkov hacks for Escape from Tarkov — ESP, aimbot, radar, wallhack, and BattlEye updates. Buy premium eft cheats with instant delivery.',
		featuresTitle: '{game} Features | {brand}',
		featuresDescription:
			'Everything in one {game} license for Windows PC — ESP, soft aim, radar, loot tools, and patch updates after {antiCheat}. See what is included.',
		storeTitle: '{game} Store | {brand}',
		storeDescription:
			'Monthly and lifetime {game} plans for Windows PC. Same ESP, aimbot, and radar features on both. Instant delivery after payment checkout.',
		statusTitle: '{game} Status | {brand}',
		statusDescription:
			'Live undetected status for {brand} after {game} or {antiCheat} patches. Check here before you queue a raid on Windows PC today.',
		/** Money page meta — primary target for "tarkov hacks". */
		previewTitle: 'Tarkov ESP & Aimbot - Undetected Hacks | tarkovhack.org',
		previewDescription:
			'Buy undetected tarkov cheats and eft hacks for Escape from Tarkov on Windows PC. ESP, soft aim, radar, wallhack, and BattlEye patch updates with instant delivery.',
		setupTitle: '{game} Setup | {brand}',
		setupDescription:
			'Install and launch {brand} on Windows PC after checkout. Short setup steps so you can raid faster. Follow each step in order before your first match.',
		supportTitle: '{game} Support | {brand}',
		supportDescription:
			'Get help with {brand} on Windows PC. Email {email} with your order ID for setup, delivery, or billing help after you buy.',
		faqTitle: '{game} FAQ | {brand}',
		faqDescription:
			'Short answers about {brand} for Escape from Tarkov — delivery, setup, {antiCheat} updates, refunds, and Windows PC system notes before you buy.',
		reviewsTitle: '{brand} Reviews | Buyer Feedback',
		reviewsDescription:
			'Buyer reviews for {brand} — ESP, soft aim, radar, and patch updates for Escape from Tarkov on Windows PC. Real feedback from license holders.',
		blogTitle: '{game} Intel | {brand}',
		blogDescription:
			'Guides and notes for {game} — raid tips, ESP, aimbot, loot routes, and {antiCheat} update coverage for Windows PC players who raid.',
	},

	/** On-page marketing copy (tokens allowed) */
	copy: {
		tagline: 'Undetected {primaryKeyword} — ESP, aimbot, and radar for PC',
		summary:
			'{brand} is an undetected {game} cheat package for Windows PC. Includes ESP, soft aim, and radar, with {antiCheat} maintenance after patches.',
		heroLede:
			'Escape from Tarkov hacks — tarkov esp, tarkov aimbot, tarkov radar hack, and tarkov wallhack for Windows PC.',
		blogLabel: 'Tarkov Intel',
		ctaBuy: 'Get Access',
		ctaBuyShort: 'Buy',
		featuresIntro: 'Everything included in one license for {game} on Windows PC.',
		storeIntro: 'Pick a plan. Same features on both. Instant delivery after payment.',
		statusIntro: 'Check here after a {game} or {antiCheat} patch before you raid.',
		previewIntro:
			'{brand} for Escape from Tarkov — ESP wallhack, soft aim, 2D radar, and BattlEye rebuilds after patches.',
		setupIntro: 'Install {brand} on Windows PC after you buy. Follow these short steps.',
		supportIntro: 'Need help with {brand}? Email {email} with your order ID.',
		faqIntro: 'Short answers about delivery, setup, updates, and refunds.',
		reviewsIntro: 'Feedback from {brand} buyers — ESP, soft aim, radar, and support.',
		chipEsp: 'ESP / wallhack',
		chipAim: 'Soft aim',
		chipRadar: '2D radar',
		chipUpdates: 'Patch updates',
		navPreview: 'Hacks',
		navFeatures: 'Features',
		navStore: 'Store',
		navStatus: 'Status',
		navReviews: 'Reviews',
	},

	/**
	 * Sitemap labels — XML is generated at build/dev from routes + these strings.
	 * Domain comes from `url` (also written to robots.txt via sync:brand).
	 * Tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 */
	sitemap: {
		/** YYYY-MM-DD — Brand Studio can bump this on save to refresh crawl dates */
		contentLastmod: '2026-08-13',
		blogImageTitle: '{brand} blog',
		blogImageCaption: 'Tips and updates for {primaryKeyword}',
		reviewsImageTitle: '{brand} reviews',
		reviewsImageCaption: 'What buyers say about {primaryKeyword}',
		images: [
			{
				src: '/images/tarkov-cheats-esp.webp',
				title: 'ESP overlay in Escape from Tarkov',
				caption: 'Player ESP boxes and distance readouts during a raid',
			},
			{
				src: '/images/tarkov-cheats-wallhack.webp',
				title: 'Wallhack visibility for Tarkov raids',
				caption: 'PMC and Scav outlines through walls and terrain',
			},
			{
				src: '/images/tarkov-cheats-aimbot.webp',
				title: 'Soft aim assist for Tarkov',
				caption: 'Configurable soft aim FOV and bone priority',
			},
			{
				src: '/images/tarkov-cheats-aimbot-view.webp',
				title: 'Aimbot view in TarkovHack',
				caption: 'In-menu aimbot controls for Windows PC',
			},
			{
				src: '/images/tarkov-cheats-radar.webp',
				title: '2D radar threat overlay',
				caption: 'Radar cues for flanks near extracts',
			},
			{
				src: '/images/tarkov-cheats-raid.webp',
				title: 'TarkovHack license plans',
				caption: 'Monthly and lifetime plans for Windows PC',
			},
		],
	},
} as const;

export type Brand = typeof brand;

/** Replace {brand} {game} {antiCheat} {email} {primaryKeyword} {checkout} */
export function fillBrandTokens(input: string): string {
	return input
		.replaceAll('{brand}', brand.name)
		.replaceAll('{game}', brand.game)
		.replaceAll('{antiCheat}', brand.antiCheat)
		.replaceAll('{email}', brand.supportEmail)
		.replaceAll('{primaryKeyword}', brand.keywords.primary)
		.replaceAll('{checkout}', brand.checkoutUrl);
}

/** Locked title formula fallback: `{Game} {Topic} | {Brand}` */
export function seoTitle(topic: string): string {
	const title = `${brand.game} ${topic} | ${brand.name}`;
	return title.length <= 60 ? title : `${topic} | ${brand.name}`;
}

/** Keep descriptions short; tokens allowed. */
export function seoDescription(template: string): string {
	const text = fillBrandTokens(template).trim();
	return text.length <= 160 ? text : `${text.slice(0, 157).trim()}…`;
}

/** Resolved EN home meta from brand.seo (title clamp lives in site-core.seoPageTitle). */
export function homeSeo() {
	return {
		title: fillBrandTokens(brand.seo.homeTitle),
		description: seoDescription(brand.seo.homeDescription),
	};
}
