#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const SIMPLE =
	"images: { hero: 'TarkovHack', espWallhack: 'TarkovHack wallhack', aimbotCombat: 'TarkovHack aimbot', squadFight: 'TarkovHack', playerEsp: 'TarkovHack esp', headerArt: 'TarkovHack aimbot', cheatsPackage: 'TarkovHack radar', rebootFight: 'TarkovHack aimbot', battleRoyale: 'TarkovHack', battleRoyaleIsland: 'TarkovHack esp' }";

const re =
	/images: \{ hero: '[^']+', espWallhack: '[^']+', aimbotCombat: '[^']+', squadFight: '[^']+', playerEsp: '[^']+', headerArt: '[^']+', cheatsPackage: '[^']+', rebootFight: '[^']+', battleRoyale: '[^']+', battleRoyaleIsland: '[^']+' \}/g;

for (const f of ['scripts/i18n-data/ui-strings-part1.mjs', 'scripts/i18n-data/ui-strings-part2.mjs']) {
	const c = readFileSync(f, 'utf8');
	const n = c.replace(re, SIMPLE);
	writeFileSync(f, n);
	console.log(f, (c.match(re) || []).length, 'image blocks simplified');
}

const altMap = [
	["imageAlt: 'Tarkov ESP player tags hack'", "imageAlt: 'TarkovHack esp'"],
	["imageAlt: 'Tarkov ESP radar hack'", "imageAlt: 'TarkovHack radar'"],
	["imageAlt: 'Tarkov aimbot sniper kill'", "imageAlt: 'TarkovHack aimbot'"],
	["imageAlt: 'Tarkov aimbot skeleton targeting'", "imageAlt: 'TarkovHack aimbot'"],
	["imageAlt: 'TarkovHack ADS combat'", "imageAlt: 'TarkovHack'"],
	["imageAlt: 'TarkovHack setup PC activation'", "imageAlt: 'TarkovHack'"],
	["imageAlt: 'TarkovHack updates BattlEye maintenance'", "imageAlt: 'TarkovHack'"],
	["imageAlt: 'TarkovHack FAQ ESP aimbot'", "imageAlt: 'TarkovHack'"],
	["imageAlt: 'TarkovHack support license help'", "imageAlt: 'TarkovHack'"],
	["imageAlt: 'Undetected TarkovHack ESP wallhack'", "imageAlt: 'undetected TarkovHack'"],
	["imageAlt: 'Tarkov wallhack skeleton ESP'", "imageAlt: 'TarkovHack wallhack'"],
	["imageAlt: 'BattlEye bypass tarkov ESP aimbot'", "imageAlt: 'TarkovHack battleye'"],
	["imageAlt: 'TarkovHack 2026 ESP aimbot'", "imageAlt: 'TarkovHack'"],
	["imageAlt: 'TarkovHack combat aimbot'", "imageAlt: 'TarkovHack'"],
	["imageAlt: 'Tarkov cheat download ESP aimbot'", "imageAlt: 'TarkovHack download'"],
	["imageAlt: 'Tarkov mod menu ESP aimbot'", "imageAlt: 'TarkovHack mod menu'"],
	["imageAlt: 'Tarkov soft aim aimbot settings'", "imageAlt: 'TarkovHack soft aim'"],
	["imageAlt: 'Best TarkovHack 2026 ESP'", "imageAlt: 'best TarkovHack'"],
	["imageAlt: 'Tarkov aimbot hack combat'", "imageAlt: 'TarkovHack aimbot'"],
	["imageAlt: 'Tarkov ESP hack wallhack'", "imageAlt: 'TarkovHack esp'"],
	["imageAlt: 'Tarkov unlock all ESP aimbot guide'", "imageAlt: 'TarkovHack'"],
	["imageAlt: 'TarkovHack privacy policy'", "imageAlt: 'TarkovHack'"],
	["imageAlt: 'TarkovHack refund policy'", "imageAlt: 'TarkovHack'"],
	["imageAlt: 'TarkovHack terms of use'", "imageAlt: 'TarkovHack'"],
];

let pages = readFileSync('scripts/i18n-data/pages-en.mjs', 'utf8');
for (const [from, to] of altMap) pages = pages.split(from).join(to);
writeFileSync('scripts/i18n-data/pages-en.mjs', pages);
console.log('pages-en imageAlts simplified');

// productPage() imageAlt template in pages-i18n
let i18n = readFileSync('scripts/i18n-data/pages-i18n.mjs', 'utf8');
i18n = i18n
	.split("imageAlt: `Tarkov ${meta.altKeyword}`")
	.join("imageAlt: 'TarkovHack'")
	.split("galleryTitle: `TarkovHack ${topicName}`")
	.join("galleryTitle: 'TarkovHack'")
	.split("imageAlt: `TarkovHack ${kind} policy`")
	.join("imageAlt: 'TarkovHack'")
	.split("galleryTitle: `TarkovHack ${kind} resources`")
	.join("galleryTitle: 'TarkovHack'");
writeFileSync('scripts/i18n-data/pages-i18n.mjs', i18n);
console.log('pages-i18n image alts simplified');
