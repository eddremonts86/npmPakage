#!/usr/bin/env node

/**
 * CSS Build Script - Generates static CSS file for the package
 * This ensures all styles are bundled with the package
 */

import { mkdirSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { generateCompleteCSS } from '../src/styles/css-generator';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const outputDir = join(__dirname, '../dist');
const outputFile = join(outputDir, 'schilling-widgets.css');

// Ensure output directory exists
mkdirSync(dirname(outputFile), { recursive: true });

// Generate and write CSS
const css = generateCompleteCSS();
writeFileSync(outputFile, css, 'utf-8');

console.log('✅ CSS generated successfully!');
console.log(`📁 Output: ${outputFile}`);
console.log(`📊 Size: ${(css.length / 1024).toFixed(2)} KB`);
