import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import process from 'node:process';

const cwd = process.cwd();
const roots = [
  join(cwd, 'src/generated/prisma'),
  join(cwd, 'dist/src/generated/prisma'),
];

function walk(dir) {
  const entries = readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(fullPath));
    } else if (entry.isFile() && /\.(mjs|cjs|js|ts)$/.test(entry.name)) {
      files.push(fullPath);
    }
  }

  return files;
}

const regex = /(from\s+['"]|import\s*\(\s*['"]|import\s+['"])(\.{1,2}\/[^'"]+)(['"])/g;

for (const root of roots) {
  if (!statSync(root, { throwIfNoEntry: false })) continue;
  for (const file of walk(root)) {
    const content = readFileSync(file, 'utf8');
    const updated = content.replace(regex, (match, prefix, specifier, quote) => {
      if (
        specifier.endsWith('.js') ||
        specifier.endsWith('.ts') ||
        specifier.endsWith('.mjs') ||
        specifier.endsWith('.cjs') ||
        specifier.endsWith('.json') ||
        specifier.endsWith('/')
      ) {
        return match;
      }

      return `${prefix}${specifier}.js${quote}`;
    });

    if (updated !== content) {
      writeFileSync(file, updated);
    }
  }
}
