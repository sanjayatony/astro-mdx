import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import bookshop from "@bookshop/astro-bookshop";
import tailwind from "@astrojs/tailwind";
import pagefind from "astro-pagefind";

import mdx from "@astrojs/mdx";
import remarkAutoImport from "@cloudcannon/remark-auto-import";

// https://astro.build/config
export default defineConfig({
	// change when go live
	site: "http:localhost:4321",
	integrations: [
		react(),
		tailwind({
			nesting: true,
		}),
		bookshop(),
		pagefind(),
		mdx(),
	],
	markdown: {
		remarkPlugins: [remarkAutoImport],
	},
});
