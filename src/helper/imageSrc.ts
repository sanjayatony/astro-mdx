import type { ImageMetadata } from "astro";

export function getImageSrc(imagePath: string) {
    const images = import.meta.glob<{ default: ImageMetadata }>(
        "/src/assets/**/*.{jpeg,jpg,png,gif,svg}",
        { eager: true },
    );
    const imageSrc = images[imagePath]?.default;
    const src =
        typeof imageSrc === "string"
            ? (imageSrc as string).replace(/^\./, "/_cloudcannon")
            : imageSrc ?? imagePath;

    if (!src) {
        // throw new Error(
        //     `"${imagePath}" does not exist in glob: "src/assets/**/*.{jpeg,jpg,png,gif,svg}"`,
        // );
        return null;
    }

    return src;
}
