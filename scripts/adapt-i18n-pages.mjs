#!/usr/bin/env node
/** Adapt pages-en.mjs and pages-i18n.mjs from Tarkov source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_PAGE_KEYS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['tarkov-esp', 'tarkov-esp'],
	['tarkov-aimbot', 'tarkov-aimbot'],
	["'battleye'", "'battleye'"],
	['battleye-bypass', 'battleye-bypass'],
	['undetected-tarkov-cheats', 'undetected-tarkov-cheats'],
	['tarkov-wallhack', 'tarkov-wallhack'],
	['tarkov-radar-hack', 'tarkov-radar-hack'],
	['tarkov-cheats-2026', 'tarkov-cheats-2026'],
	['escape-from-tarkov-cheats', 'escape-from-tarkov-cheats'],
	['escape-from-tarkov', 'tarkov'],
	['Escape from Tarkov', 'Escape from Tarkov'],
	['Escape from Tarkov', 'Escape from Tarkov'],
	['TarkovHack', 'TarkovHack'],
	['TarkovHack', 'TarkovHack'],
	['Tarkov cheat', 'Tarkov cheat'],
	['Tarkov ESP', 'Escape from Tarkov ESP'],
	['Tarkov Aimbot', 'Escape from Tarkov Aimbot'],
	['Tarkov wallhack', 'Escape from Tarkov wallhack'],
	['Tarkov radar', 'Escape from Tarkov radar'],
	['Tarkov firefights', 'Escape from Tarkov firefights'],
	['Tarkov combat', 'Escape from Tarkov combat'],
	['Tarkov patches', 'Escape from Tarkov patches'],
	['Tarkov updates', 'Escape from Tarkov updates'],
	['Tarkov setup', 'Escape from Tarkov setup'],
	['Tarkov license', 'Escape from Tarkov license'],
	['Tarkov licenses', 'Escape from Tarkov licenses'],
	['Tarkov sessions', 'Escape from Tarkov sessions'],
	['in Tarkov', 'in Escape from Tarkov'],
	['for Tarkov', 'for Escape from Tarkov'],
	['Tarkov on', 'Escape from Tarkov on'],
	['Tarkov or', 'Escape from Tarkov or'],
	['Tarkov\'s', 'Escape from Tarkov\'s'],
	['Tarkov ', 'Escape from Tarkov '],
	['BattlEye anti-cheat', 'BattlEye anti-cheat'],
	['BattlEye maintenance', 'BattlEye maintenance'],
	['BattlEye bypass', 'BattlEye bypass'],
	['BattlEye Bypass', 'BattlEye Bypass'],
	['BattlEye', 'BattlEye anti-cheat'],
	['battleye', 'battleye'],
	['support@tarkovhack.com', 'support@tarkovhack.com'],
	['Customs, Woods, and Streets of Tarkov', 'Customs, Woods, and Streets of Tarkov'],
	['Customs, Woods and Streets of Tarkov', 'Customs, Woods and Streets of Tarkov'],
	['extract fights', 'extract fights'],
	['extract fight', 'extract fight'],
	['raid rounds', 'raid rounds'],
	['extract', 'extract'],
	['PMCs', 'players'],
	['operator', 'player'],
	['PMCs', 'Players'],
	['Operator', 'Player'],
	['extract timer', 'extract timer'],
	['PMC raids and Scav runs', 'PMC raids and Scav runs'],
	['PMC raids and Scav runs', 'PMC raids and Scav runs'],
	['PMC & Scav', 'PMC & Scav'],
	['high-value loot', 'high-value loot'],
	['high-value loot', 'high-value loot'],
	['contracts', 'chests'],
	['contract', 'chest'],
	['Activision\'s', 'Epic Games\''],
	['Call of Duty combat pace', 'Escape from Tarkov combat pace'],
	['COD', 'Escape from Tarkov'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageObjectBlocks(content) {
	let r = content;
	for (const key of REMOVE_PAGE_KEYS) {
		const quoted = `'${key}'`;
		const patterns = [
			new RegExp(`\\t${quoted}: \\{[\\s\\S]*?\\},\\n`, 'g'),
			new RegExp(`\\t${key.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		];
		for (const p of patterns) r = r.replace(p, '');
	}
	return r;
}

async function adaptFile(rel) {
	let content = await readFile(path.join(SRC, rel), 'utf8');
	content = apply(content);
	content = removePageObjectBlocks(content);
	await writeFile(path.join(ROOT, rel), content);
	console.log('Adapted', rel);
}

await adaptFile('scripts/i18n-data/pages-en.mjs');
await adaptFile('scripts/i18n-data/pages-i18n.mjs');
await adaptFile('scripts/i18n-data/phrases.mjs');

// Patch phrases KW object
let phrases = await readFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), 'utf8');
phrases = phrases.replace(
	/const KW = \{[\s\S]*?\};/,
	`const KW = {
	esp: 'ESP wallhack',
	radar: 'radar hack',
	aimbot: 'Aimbot',
	product: 'TarkovHack',
	game: 'Escape from Tarkov',
	checkout: 'Zadeyo',
	battleye: 'BattlEye anti-cheat',
};`,
);
phrases = phrases.replace(/KW\.battleye/g, 'KW.battleye');
phrases = phrases.replace(/maps: '[^']*'/g, "maps: 'Customs, Woods, and Streets of Tarkov'");
await writeFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), phrases);

console.log('Done adapting i18n pages.');
