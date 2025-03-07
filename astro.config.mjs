import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import expressiveCode from 'astro-expressive-code';
// import remarkMath from 'remark-math';
// import rehypeMathJax from 'rehype-mathjax/svg';

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  markdown: {
    // remarkPlugins: [remarkMath],
    // rehypePlugins: [rehypeMathJax]
  },
  integrations: [
    // astroExpressiveCode({
    //   // You can use any of the themes bundled with Shiki by name,
    //   // specify a path to JSON theme file, or pass an instance
    //   // of the `ExpressiveCodeTheme` class here:
    //   themes: ['dracula', 'solarized-light'],
    //   shiki: {
    //     // You can pass additional plugin options here,
    //     // e.g. to load custom language grammars:
    //     langs: [
    //       // import('./some-exported-grammar.mjs'),
    //       // JSON.parse(fs.readFileSync('./some-json-grammar.json', 'utf-8'))
    //     ],
    //   },
    // }),
    preact(), expressiveCode()]
});