import { build } from 'vite';
import { cp, copyFile, mkdir, stat } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
await mkdir(dist, { recursive: true });

// Compila o projeto Three.js original da Técnica Alpha com base relativa para /demo4/.
await build({
  configFile: false,
  root: path.join(root, 'demo4'),
  base: './',
  build: {
    outDir: path.join(dist, 'demo4'),
    emptyOutDir: true,
    chunkSizeWarningLimit: 1400,
    target: 'es2022'
  }
});

// Mantém as demais três demonstrações 100% estáticas e independentes.
const staticFiles = [
  'index.html',
  'styles.css',
  'app.js',
  'demo2.html',
  'demo2-cscell.css',
  'demo2-cscell.js',
  'demo3.html',
  'demo3.css',
  'demo3.js'
];
for (const name of staticFiles) {
  await stat(path.join(root, name));
  await copyFile(path.join(root, name), path.join(dist, name));
}
await cp(path.join(root, 'assets'), path.join(dist, 'assets'), { recursive: true });
console.log('RNCWeb: 4 demonstrativos compilados em dist/.');
