import site from "../../data/site.json";
import { getCollection } from "astro:content";

import rss from "@astrojs/rss";
const posts = await getCollection("blog");

export async function GET() {
	return rss({
		title: site.site_title,
		description: site.description,
		site: "https://muggy-fish.cloudvent.net",
		items: posts.map((post) => ({
			link: `/blog/${post.slug}`,
			title: post.data.title,
			pubDate: post.data.published_date,
		})),
		customData: `<language>en-us</language>`,
	});
}
