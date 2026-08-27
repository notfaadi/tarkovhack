#!/usr/bin/env node
/** Rebuild routing.ts and constants.mjs from clean Tarkov source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_IDS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['tarkov-esp', 'tarkov-esp'],
	['tarkov-aimbot', 'tarkov-aimbot'],
	['battleye', 'battleye'],
	['undetected-tarkov-cheats', 'undetected-tarkov-cheats'],
	['tarkov-wallhack', 'tarkov-wallhack'],
	['tarkov-radar-hack', 'tarkov-radar-hack'],
	['tarkov-cheats-2026', 'tarkov-cheats-2026'],
	['battleye-bypass', 'battleye-bypass'],
	['tarkovhack.com', 'tarkovhack.com'],
	['trucos-tarkov', 'trucos-tarkov'],
	['triche-tarkov', 'triche-tarkov'],
	['tarkov-cheats', 'escape-from-tarkov-cheats'],
	['cheats-tarkov', 'cheats-tarkov'],
	['trucchi-tarkov', 'trucchi-tarkov'],
	['cheaty-tarkov', 'cheaty-tarkov'],
	['chity-tarkov', 'chity-tarkov'],
	['chitov-tarkov', 'chitov-tarkov'],
	['chitiv-tarkov', 'chitiv-tarkov'],
	['cheatow-tarkov', 'cheatow-tarkov'],
	['hile-tarkov', 'hile-tarkov'],
	['tarkov-hile', 'tarkov-hile'],
	['tarkov-esp-chity', 'tarkov-esp-chity'],
	['tarkov-aimbot-chity', 'tarkov-aimbot-chity'],
	['unentdeckte-tarkov-cheats', 'unentdeckte-escape-from-tarkov-cheats'],
	['cheats-tarkov-indetectaveis', 'cheats-tarkov-indetectaveis'],
	['trucchi-tarkov-indetectabili', 'trucchi-tarkov-indetectabili'],
	['niewykrywalne-cheats-tarkov', 'niewykrywalne-cheats-tarkov'],
	['nedecektiruemye-chity-tarkov', 'nedecektiruemye-chity-tarkov'],
	['tespit-edilemeyen-tarkov-hileleri', 'tespit-edilemeyen-tarkov-hileleri'],
	['nedecektovani-chity-tarkov', 'nedecektovani-chity-tarkov'],
	['cheats-tarkov-nedetectabile', 'cheats-tarkov-nedetectabile'],
	['basta-tarkov-cheats', 'basta-escape-from-tarkov-cheats'],
	['battleye-bypass-trucos-tarkov', 'battleye-bypass-trucos-tarkov'],
	['battleye-bypass-triche-tarkov', 'battleye-bypass-triche-tarkov'],
	['battleye-bypass-cheats-tarkov', 'battleye-bypass-cheats-tarkov'],
	['battleye-bypass-chity-tarkov', 'battleye-bypass-chity-tarkov'],
	['battleye-bypass-tarkov', 'battleye-bypass'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageBlocks(content, pageId) {
	const keyPatterns = [
		new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': \\{[\\s\\S]*?\\},\\n`, 'g'),
	];
	let r = content;
	for (const p of keyPatterns) r = r.replace(p, '');
	// Remove from PageId union
	r = r.replace(new RegExp(`\\s*\\|\\s*'${pageId}'`, 'g'), '');
	// Remove from englishPaths single line
	r = r.replace(new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: '[^']*',\\n`, 'g'), '');
	r = r.replace(new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': '[^']*',\\n`, 'g'), '');
	return r;
}

async function fixRouting() {
	let content = await readFile(path.join(SRC, 'src/data/i18n/routing.ts'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) content = removePageBlocks(content, id);
	// Fix battleye key in englishPaths
	content = content.replace(/\tbattleye: '/, "\t'battleye': '");
	await writeFile(path.join(ROOT, 'src/data/i18n/routing.ts'), content);
	console.log('Fixed routing.ts');
}

async function fixConstants() {
	const heroImages = `/** Hero image per page topic — keyword-rich escape-from-tarkov-cheats paths. */
export const HERO_IMAGES = {
	home: '/images/escape-from-tarkov-cheats-hero.webp',
	'tarkov-esp': '/images/escape-from-tarkov-cheats-esp-wallhack.webp',
	'tarkov-aimbot': '/images/escape-from-tarkov-cheats-aimbot-combat.webp',
	features: '/images/escape-from-tarkov-cheats-package.webp',
	pricing: '/images/escape-from-tarkov-cheats-cover.webp',
	setup: '/images/tarkov-loadout-builder.webp',
	updates: '/images/tarkov-header-art.webp',
	faq: '/images/tarkov-squad-fight.webp',
	support: '/images/escape-from-tarkov-cheats-package.webp',
	undetected: '/images/tarkov-battle-royale-combat.webp',
	wallhack: '/images/escape-from-tarkov-cheats-esp-wallhack.webp',
	radar: '/images/tarkov-player-esp.webp',
	'battleye': '/images/tarkov-reboot-van-fight.webp',
	'cheats-2026': '/images/escape-from-tarkov-cheats-hero.webp',
	privacy: '/images/escape-from-tarkov-cheats-aimbot-combat.webp',
	refund: '/images/escape-from-tarkov-cheats-cover.webp',
	terms: '/images/escape-from-tarkov-cheats-package.webp',
};`;

	let content = await readFile(path.join(SRC, 'scripts/i18n-data/constants.mjs'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) {
		content = content.replace(new RegExp(`'${id}',\\s*`, 'g'), '');
	}
	content = content.replace(
		/export const PAGE_IDS = \[[\s\S]*?\];/,
		`export const PAGE_IDS = [\n\t'home', 'tarkov-esp', 'tarkov-aimbot', 'features', 'pricing', 'setup',\n\t'updates', 'faq', 'support', 'undetected', 'wallhack', 'radar', 'battleye',\n\t'cheats-2026', 'privacy', 'refund', 'terms',\n];`,
	);
	content = content.replace(/\/\*\* Hero image[\s\S]*?};/, heroImages);
	content = content.replace(
		/export type PageId = [^;]+;/,
		"export type PageId = 'home' | 'tarkov-esp' | 'tarkov-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'battleye' | 'cheats-2026' | 'privacy' | 'refund' | 'terms';",
	);
	content = content.replace(/operatorEsp/g, 'playerEsp');
	content = content.replace(/extractFight/g, 'rebootFight');
	content = content.replace(/alMazrah/g, 'battleRoyaleIsland');
	await writeFile(path.join(ROOT, 'scripts/i18n-data/constants.mjs'), content);
	console.log('Fixed constants.mjs');
}

await fixRouting();
await fixConstants();
