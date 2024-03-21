import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    // vite:{
    //     build: {
    //         rollupOptions: {
    //             external: ['main.js', 'main.css']
    //         }
    //     }
    // },
  integrations: [react(), tailwind()]
});

// import { defineConfig } from 'astro/config';
// import tailwind from "@astrojs/tailwind";
// import react from "@astrojs/react";
// import netlify from "@astrojs/netlify/functions";
// import compress from "astro-compress";
// import sitemap from "@astrojs/sitemap";
//
// // https://astro.build/config
// export default defineConfig({
//     site: 'https://maria-louisa.com',
//     name: 'manifest', 'astro:build:ssr': async ({ manifest }) => {
//         console.log(manifest);
//     },
//     integrations: [tailwind(), react(), compress(), sitemap({
//         filter: page => page !== 'https://maria-louisa.com'
//     }),],
//     output: "server",
//     adapter: netlify(),
// });
