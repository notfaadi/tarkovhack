#!/usr/bin/env node
/** Fix remaining i18n key mismatches and ui-strings. */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const UI_REPLACEMENTS = [
	['TarkovHack', 'TarkovHack'],
	['TarkovHack', 'TarkovHack'],
	['TarkovHack', 'TarkovHack'],
	['Escape from Tarkov', 'Escape from Tarkov'],
	['Escape from Tarkov', 'Escape from Tarkov'],
	['Call of Duty', 'Escape from Tarkov'],
	['Tarkov PC', 'Escape from Tarkov PC'],
	['for Tarkov', 'for Escape from Tarkov'],
	['Tarkov ', 'Escape from Tarkov '],
	['tarkov ', 'tarkov '],
	['BattlEye maintenance', 'BattlEye maintenance'],
	['BattlEye anti-cheat', 'BattlEye anti-cheat'],
	['BattlEye', 'BattlEye anti-cheat'],
	['operatorEsp', 'playerEsp'],
	['extractFight', 'rebootFight'],
	['alMazrah', 'battleRoyaleIsland'],
	['PMCs', 'players'],
	['operator', 'player'],
	['PMCs', 'Players'],
	['Operator', 'Player'],
	['Al Mazrah', 'Verdansk'],
	['Verdansk', 'Verdansk'],
	['scav-run', 'scav-run'],
	['extract', 'extract'],
	['tarkovhack.com', 'tarkovhack.com'],
	['Trucos Tarkov', 'Trucos Escape from Tarkov'],
	['Triches Tarkov', 'Triches Escape from Tarkov'],
	['Cheats Tarkov', 'Cheats Escape from Tarkov'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of UI_REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

// Rebuild ui-strings from clean source
for (const file of ['ui-strings-part1.mjs', 'ui-strings-part2.mjs']) {
	let content = await readFile(path.join(SRC, 'scripts/i18n-data', file), 'utf8');
	content = apply(content);
	await writeFile(path.join(ROOT, 'scripts/i18n-data', file), content);
	console.log('Fixed', file);
}

// Fix pages-en battleye key
let pagesEn = await readFile(path.join(ROOT, 'scripts/i18n-data/pages-en.mjs'), 'utf8');
pagesEn = pagesEn.replace(/\tbattleye: \{/, "\t'battleye': {");
pagesEn = pagesEn.replace(/Escape from Tarkov Tarkov/g, 'Escape from Tarkov');
pagesEn = pagesEn.replace(/for Escape from Tarkov Tarkov/g, 'for Escape from Tarkov');
await writeFile(path.join(ROOT, 'scripts/i18n-data/pages-en.mjs'), pagesEn);

// Fix pages-i18n
let pagesI18n = await readFile(path.join(ROOT, 'scripts/i18n-data/pages-i18n.mjs'), 'utf8');
pagesI18n = apply(pagesI18n);
pagesI18n = pagesI18n.replace(/'battleye'/g, "'battleye'");
pagesI18n = pagesI18n.replace(/battleye:/g, "'battleye':");
await writeFile(path.join(ROOT, 'scripts/i18n-data/pages-i18n.mjs'), pagesI18n);

// Fix generate-i18n pages count
let gen = await readFile(path.join(ROOT, 'scripts/generate-i18n-content.mjs'), 'utf8');
gen = gen.replace('Pages per locale: 25', 'Pages per locale: 17');
await writeFile(path.join(ROOT, 'scripts/generate-i18n-content.mjs'), gen);

console.log('Fixed i18n keys.');
