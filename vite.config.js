import { defineConfig } from 'vite';
import { resolve } from 'path';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
export default defineConfig({
  base: "./",
  root: 'src',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        favorites: resolve(__dirname, 'src/favorites.html'),
        read: resolve(__dirname, 'src/read.html'),
      },
    },
    outDir: '../dist',
  },
  plugins: [react(), injectHTML(), FullReload(['./src/**/**.html'])],
});
