#!/usr/bin/env node
/** Remove Brand Studio HTML from production dist (defense in depth). */
import { rmSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const target = path.join(root, 'dist', 'brand-studio');
if (existsSync(target)) {
	rmSync(target, { recursive: true, force: true });
	console.log('strip-brand-studio: removed dist/brand-studio');
} else {
	console.log('strip-brand-studio: nothing to remove');
}
// legacy path if ever present
const legacy = path.join(root, 'dist', '__brand');
if (existsSync(legacy)) {
	rmSync(legacy, { recursive: true, force: true });
	console.log('strip-brand-studio: removed dist/__brand');
}
