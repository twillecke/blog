import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";

export default defineConfig({
  site: "https://twillecke.github.io/",
  base: "/site/", 
  integrations: [mdx(), sitemap(), tailwind(), partytown({config: {forward: ['dataLayer.push']}})],
});
