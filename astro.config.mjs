import { defineConfig } from 'astro/config';

// Sitio de organización: no requiere `base` porque se publica en la raíz.
export default defineConfig({
  site: 'https://fec-luz-computacion.github.io',
  output: 'static',
});
