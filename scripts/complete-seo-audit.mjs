#!/usr/bin/env node
/**
 * Completes escape-from-tarkov-cheats SEO audit: add missing pages, fix leftovers, strip Zadeyo from meta.
 * Run: node scripts/complete-seo-audit.mjs
 */
import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const NODE = 'C:\\Program Files\\nodejs\\node.exe';

const EXTRA_PAGES = [
	{ id: 'hacks', dir: 'tarkov-cheats', pageId: 'hacks' },
	{ id: 'cheat-download', dir: 'tarkov-cheat-download', pageId: 'cheat-download' },
	{ id: 'mod-menu', dir: 'tarkov-mod-menu', pageId: 'mod-menu' },
	{ id: 'soft-aim', dir: 'tarkov-soft-aim', pageId: 'soft-aim' },
	{ id: 'best-cheats', dir: 'best-tarkov-cheats', pageId: 'best-cheats' },
	{ id: 'aimbot-hack', dir: 'tarkov-aimbot-hack', pageId: 'aimbot-hack' },
	{ id: 'esp-hack', dir: 'tarkov-esp-hack', pageId: 'esp-hack' },
	{ id: 'unlock-all', dir: 'tarkov-unlock-all', pageId: 'unlock-all' },
];

const GLOBAL_REPLACEMENTS = [
	[/tarkov-tarkov/g, 'tarkov'],
	[/battleye-bypass-tarkov/g, 'battleye-bypass'],
	[/Escape from Tarkov/g, 'Escape from Tarkov'],
	[/Escape from Tarkov/g, 'Escape from Tarkov'],
	[/Call of Duty/g, 'Escape from Tarkov'],
	[/Tarkov Wallhack/g, 'Escape from Tarkov Wallhack'],
	[/Tarkov Radar Hack/g, 'Escape from Tarkov Radar Hack'],
	[/Tarkov Cheat Features/g, 'Escape from Tarkov Cheat Features'],
	[/Tarkov Cheat Pricing/g, 'Escape from Tarkov Cheat Pricing'],
	[/Tarkov Cheat Setup/g, 'Escape from Tarkov Cheat Setup'],
	[/Tarkov Cheat Status/g, 'Escape from Tarkov Cheat Status'],
	[/Tarkov Cheat Support/g, 'Escape from Tarkov Cheat Support'],
	[/Tarkov squad fight/g, 'Escape from Tarkov squad fight'],
	[/Tarkov squad builder/g, 'Escape from Tarkov loadout builder'],
	[/Tarkov store header/g, 'Escape from Tarkov header'],
	[/Tarkov wasteland combat/g, 'Escape from Tarkov battle royale combat'],
	[/Tarkov loadout builder/g, 'Escape from Tarkov loadout builder'],
	[/Tarkov pricing/g, 'Escape from Tarkov pricing'],
	[/Tarkov BattlEye anti-cheat/g, 'Escape from Tarkov BattlEye anti-cheat'],
	[/on Tarkov/g, 'on Escape from Tarkov'],
	[/for Tarkov/g, 'for Escape from Tarkov'],
	[/Tarkov guides/g, 'Escape from Tarkov guides'],
	[/Tarkov guide/g, 'Escape from Tarkov guide'],
	[/Tarkov hileleri/g, 'Escape from Tarkov hileleri'],
	[/Tarkov hile/g, 'Escape from Tarkov hile'],
	[/Tarkov hileleri/g, 'Escape from Tarkov hileleri'],
	[/cheatów Tarkov/g, 'cheatów Escape from Tarkov'],
	[/cheat Tarkov/g, 'cheat Escape from Tarkov'],
	[/cheats Tarkov/g, 'cheats Escape from Tarkov'],
	[/trucos Tarkov/g, 'trucos Escape from Tarkov'],
	[/triche Tarkov/g, 'triche Escape from Tarkov'],
	[/trucchi Tarkov/g, 'trucchi Escape from Tarkov'],
	[/Wallhack Tarkov/g, 'Escape from Tarkov Wallhack'],
	[/cheat Tarkov undetected/g, 'cheat Escape from Tarkov undetected'],
	[/cheats Tarkov undetected/g, 'cheats Escape from Tarkov undetected'],
	[/Verdansk beams/g, 'long-range AR beams'],
	[/scav-run room clears/g, 'close-quarters room clears'],
	[/Verdansk and Urzikstan/g, 'Verdansk and scav-run'],
	[/Verdansk, Urzikstan/g, 'Verdansk, scav-run'],
	[/raid and scav-run/g, 'raid and scav-run'],
	[/Activision's anti-cheat/g, "Epic Games' anti-cheat"],
	[/Activision anti-cheat/g, 'Epic Games anti-cheat'],
	[/Activision ships/g, 'Epic Games ships'],
	[/Activision security/g, 'Epic Games security'],
	[/Activision bans/g, 'Epic Games bans'],
	[/Activision/g, 'Epic Games'],
	[/battleye/gi, 'battleye'],
	[/BattlEye/g, 'BattlEye anti-cheat'],
	[/escape-from-tarkov-cheats/g, 'escape-from-tarkov-cheats'],
	[/escape-from-tarkov/g, 'tarkov'],
	[/Undetected Wallhack for Call of Duty/g, 'Undetected Wallhack for Escape from Tarkov'],
	[/How ESP wallhack, radar, and Aimbot rebuild after Call of Duty anti-cheat/g,
		'How ESP wallhack, radar, and Aimbot rebuild after Escape from Tarkov anti-cheat'],
];

/** Remove Zadeyo from meta description/title strings only */
function stripZadeyoFromMeta(text) {
	return text
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout en Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*with Zadeyo checkout\.?/gi, '.')
		.replace(/\s*via Zadeyo checkout\.?/gi, '.')
		.replace(/\s*Checkout via Zadeyo\.?/gi, '')
		.replace(/\s*Zadeyo checkout,?\s*/gi, ' ')
		.replace(/\s*Zadeyo delivery\.?/gi, 'instant digital delivery.')
		.replace(/\s*and Zadeyo delivery\.?/gi, ' and instant digital delivery.')
		.replace(/\|\s*Instant Zadeyo Delivery/g, '| Instant Digital Delivery')
		.replace(/Buy on Zadeyo/g, 'Buy TarkovHack')
		.replace(/\s{2,}/g, ' ')
		.trim();
}

async function walkFiles(dir, exts, files = []) {
	const entries = await import('node:fs/promises').then((fs) => fs.readdir(dir, { withFileTypes: true }));
	for (const e of entries) {
		if (e.name === 'node_modules' || e.name === 'dist' || e.name === '.git') continue;
		const full = path.join(dir, e.name);
		if (e.isDirectory()) await walkFiles(full, exts, files);
		else if (exts.some((x) => e.name.endsWith(x))) files.push(full);
	}
	return files;
}

async function applyGlobalFixes() {
	const targets = await walkFiles(path.join(ROOT, 'src'), ['.ts', '.astro']);
	targets.push(
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-en.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-i18n.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part1.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part2.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'phrases.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'gallery-ui.ts'),
		path.join(ROOT, 'src', 'data', 'i18n', 'gallery-ui.ts'),
		path.join(ROOT, 'functions', '_middleware.js'),
	);

	for (const file of targets) {
		try {
			await access(file);
		} catch {
			continue;
		}
		let content = await readFile(file, 'utf8');
		const original = content;
		for (const [pattern, replacement] of GLOBAL_REPLACEMENTS) {
			content = content.replace(pattern, replacement);
		}
		if (file.endsWith('pages-en.mjs')) {
			// Strip Zadeyo from description: and title: lines
			content = content.replace(/(description:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripZadeyoFromMeta(body) + post,
			);
			content = content.replace(/(title:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripZadeyoFromMeta(body) + post,
			);
		}
		if (content !== original) {
			await writeFile(file, content, 'utf8');
			console.log(`Fixed: ${path.relative(ROOT, file)}`);
		}
	}
}

async function createExtraPages() {
	const template = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="PAGE_ID" />
`;
	for (const page of EXTRA_PAGES) {
		const dir = path.join(ROOT, 'src', 'pages', page.dir);
		await mkdir(dir, { recursive: true });
		const file = path.join(dir, 'index.astro');
		try {
			await access(file);
		} catch {
			await writeFile(file, template.replace('PAGE_ID', page.pageId), 'utf8');
			console.log(`Created page: src/pages/${page.dir}/index.astro`);
		}
	}
}

async function fixLocalesBlogUi() {
	const file = path.join(ROOT, 'src', 'data', 'i18n', 'locales.ts');
	let content = await readFile(file, 'utf8');
	content = content.replace(/Tarkov guides/g, 'Escape from Tarkov guides');
	content = content.replace(/Tarkov guide/g, 'Escape from Tarkov guide');
	content = content.replace(/Tarkov hileleri/g, 'Escape from Tarkov hileleri');
	content = content.replace(/Tarkov hile/g, 'Escape from Tarkov hile');
	content = content.replace(/cheat Tarkov/g, 'cheat Escape from Tarkov');
	content = content.replace(/cheats Tarkov/g, 'cheats Escape from Tarkov');
	content = content.replace(/trucos Tarkov/g, 'trucos Escape from Tarkov');
	content = content.replace(/triche Tarkov/g, 'triche Escape from Tarkov');
	content = content.replace(/trucchi Tarkov/g, 'trucchi Escape from Tarkov');
	content = content.replace(/cheatów Tarkov/g, 'cheatów Escape from Tarkov');
	content = content.replace(/читов Tarkov/g, 'читов Escape from Tarkov');
	content = content.replace(/читів Tarkov/g, 'читів Escape from Tarkov');
	content = content.replace(/Tarkovチート/g, 'Escape from Tarkovチート');
	content = content.replace(/Tarkov 치트/g, 'Escape from Tarkov 치트');
	content = content.replace(/Tarkov作弊/g, 'Escape from Tarkov作弊');
	content = content.replace(/Tarkov rehberleri/g, 'Escape from Tarkov rehberleri');
	content = content.replace(/Tarkov gidsen/g, 'Escape from Tarkov gidsen');
	content = content.replace(/Tarkov průvodce/g, 'Escape from Tarkov průvodce');
	content = content.replace(/Tarkov guider/g, 'Escape from Tarkov guider');
	content = content.replace(/Tarkov related/g, 'Escape from Tarkov related');
	content = content.replace(/Tarkov ガイド/g, 'Escape from Tarkov ガイド');
	content = content.replace(/Tarkov 가이드/g, 'Escape from Tarkov 가이드');
	content = content.replace(/Tarkov指南/g, 'Escape from Tarkov指南');
	content = content.replace(/Tarkov गाइड/g, 'Escape from Tarkov गाइड');
	content = content.replace(/Tarkov panduan/g, 'Escape from Tarkov panduan');
	content = content.replace(/Tarkov คู่มือ/g, 'Escape from Tarkov คู่มือ');
	content = content.replace(/Tarkov hướng dẫn/g, 'Escape from Tarkov hướng dẫn');
	await writeFile(file, content, 'utf8');
	console.log('Fixed locales.ts blogUi');
}

console.log('=== TarkovHack SEO completion ===\n');
await applyGlobalFixes();
await createExtraPages();
await fixLocalesBlogUi();
console.log('\nDone. Next: update routing.ts manually, then run generate:i18n, fetch:images, build:validate');
