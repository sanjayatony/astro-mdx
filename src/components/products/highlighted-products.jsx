export default function HighlightedProducts({ posts }) {
    const featuredProducts = posts.filter((post) => post.data.is_featured);
    const chunkSize = 3;
    const chunkSizeMobile = 1;
    const chunks = Array.from({ length: Math.ceil(featuredProducts.length / chunkSize) }, (_, i) =>
        featuredProducts.slice(i * chunkSize, i * chunkSize + chunkSize),
    );
    const chunksMobile = Array.from(
        { length: Math.ceil(featuredProducts.length / chunkSizeMobile) },
        (_, i) =>
            featuredProducts.slice(i * chunkSizeMobile, i * chunkSizeMobile + chunkSizeMobile),
    );
    return (
        <>
            {featuredProducts.length > 0 && (
                <div id="products-carousel" className="relative mb-12" data-carousel="slide">
                    <div className="flex justify-between items-center">
                        <h2>More for you</h2>
                        <div>
                            <div class="flex justify-center items-center">
                                <button
                                    type="button"
                                    aria-label="Previous"
                                    class="flex justify-center items-center mr-4 h-full cursor-pointer group focus:outline-none"
                                    data-carousel-prev>
                                    <span class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                                        <svg
                                            class="w-6 h-6"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fill-rule="evenodd"
                                                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                        <span class="hidden">Previous</span>
                                    </span>
                                </button>
                                <button
                                    type="button"
                                    aria-label="Next"
                                    class="flex justify-center items-center h-full cursor-pointer group focus:outline-none"
                                    data-carousel-next>
                                    <span class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                                        <svg
                                            class="w-6 h-6"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fill-rule="evenodd"
                                                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                        <span class="hidden">Next</span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:block overflow-x-hidden overflow-y-visible relative mx-auto h-[36rem]">
                        {chunks.map((chunk, index) => (
                            <div
                                className={`grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-6 mt-6`}
                                key={index}
                                data-carousel-item>
                                {chunk.map((post, index) => (
                                    <div className="border border-gray-300 p-6" key={index}>
                                        <div className="max-w-full">
                                            <img
                                                src={post.data.thumbnail_image}
                                                className="object-cover w-full aspect-square"
                                            />
                                        </div>
                                        <h2 className="text-gray-900 text-xl font-semibold mt-4">
                                            {post.data.title}
                                        </h2>
                                        <div className="flex flex-row gap-1 mt-2 items-center">
                                            {Array.from({ length: post.data.rating }, (_, i) => (
                                                <svg
                                                    key={i}
                                                    className="w-4 h-4 fill-yellow-300"
                                                    viewBox="0 0 16 17"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_548_163314)">
                                                        <path d="M15.9385 6.5179C15.8687 6.29021 15.7387 6.08768 15.5636 5.93356C15.3884 5.77945 15.1751 5.68 14.9482 5.64663L10.9074 5.03407L9.10022 1.21432C8.99895 0.999927 8.84216 0.819393 8.64762 0.69315C8.45308 0.566908 8.22854 0.5 7.99943 0.5C7.77032 0.5 7.54579 0.566908 7.35124 0.69315C7.1567 0.819393 6.99992 0.999927 6.89865 1.21432L5.09147 5.03407L1.05072 5.64663C0.824147 5.68111 0.611332 5.78099 0.436302 5.93498C0.261272 6.08897 0.130998 6.29095 0.0601918 6.5181C-0.0106144 6.74525 -0.0191329 6.98853 0.0355982 7.22046C0.0903293 7.4524 0.20613 7.66375 0.369924 7.83066L3.29469 10.8042L2.6043 15.002C2.56494 15.2376 2.58972 15.48 2.67582 15.7016C2.76193 15.9233 2.9059 16.1153 3.09139 16.2559C3.27688 16.3964 3.49644 16.4799 3.72512 16.4968C3.95381 16.5137 4.18245 16.4633 4.38508 16.3514L7.99943 14.3694L11.6138 16.3514C11.8165 16.4623 12.0449 16.5119 12.2732 16.4945C12.5014 16.4772 12.7205 16.3937 12.9057 16.2533C13.0909 16.113 13.2348 15.9215 13.3212 15.7004C13.4075 15.4793 13.433 15.2374 13.3946 15.002L12.7042 10.8042L15.6289 7.82982C15.7936 7.66362 15.9099 7.45238 15.9647 7.22033C16.0194 6.98828 16.0104 6.74483 15.9385 6.5179Z" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_548_163314">
                                                            <rect
                                                                width="16"
                                                                height="16"
                                                                fill="white"
                                                                transform="translate(0 0.5)"
                                                            />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            ))}
                                            <span className="text-sm">
                                                {post.data.rating} (Google)
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between mt-6">
                                            <span className="text-2xl font-bold">
                                                ${post.data.price}
                                            </span>
                                            <a
                                                href={`/products/${post.slug}`}
                                                className="border border-gray-300 p-2 text-sm">
                                                View details
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="md:hidden overflow-x-hidden overflow-y-visible relative mx-auto h-[36rem] mt-6">
                        {featuredProducts.map((post, index) => (
                            <div
                                className="border border-gray-300 p-6"
                                key={index}
                                data-carousel-item>
                                <div className="max-w-full">
                                    <img
                                        src={post.data.thumbnail_image}
                                        className="object-cover w-full aspect-square"
                                    />
                                </div>
                                <h2 className="mt-4">{post.data.title}</h2>
                                <div className="flex flex-row gap-1 mt-2 items-center">
                                    {Array.from({ length: post.data.rating }, (_, i) => (
                                        <svg
                                            key={i}
                                            className="w-4 h-4 fill-yellow-300"
                                            viewBox="0 0 16 17"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_548_163314)">
                                                <path d="M15.9385 6.5179C15.8687 6.29021 15.7387 6.08768 15.5636 5.93356C15.3884 5.77945 15.1751 5.68 14.9482 5.64663L10.9074 5.03407L9.10022 1.21432C8.99895 0.999927 8.84216 0.819393 8.64762 0.69315C8.45308 0.566908 8.22854 0.5 7.99943 0.5C7.77032 0.5 7.54579 0.566908 7.35124 0.69315C7.1567 0.819393 6.99992 0.999927 6.89865 1.21432L5.09147 5.03407L1.05072 5.64663C0.824147 5.68111 0.611332 5.78099 0.436302 5.93498C0.261272 6.08897 0.130998 6.29095 0.0601918 6.5181C-0.0106144 6.74525 -0.0191329 6.98853 0.0355982 7.22046C0.0903293 7.4524 0.20613 7.66375 0.369924 7.83066L3.29469 10.8042L2.6043 15.002C2.56494 15.2376 2.58972 15.48 2.67582 15.7016C2.76193 15.9233 2.9059 16.1153 3.09139 16.2559C3.27688 16.3964 3.49644 16.4799 3.72512 16.4968C3.95381 16.5137 4.18245 16.4633 4.38508 16.3514L7.99943 14.3694L11.6138 16.3514C11.8165 16.4623 12.0449 16.5119 12.2732 16.4945C12.5014 16.4772 12.7205 16.3937 12.9057 16.2533C13.0909 16.113 13.2348 15.9215 13.3212 15.7004C13.4075 15.4793 13.433 15.2374 13.3946 15.002L12.7042 10.8042L15.6289 7.82982C15.7936 7.66362 15.9099 7.45238 15.9647 7.22033C16.0194 6.98828 16.0104 6.74483 15.9385 6.5179Z" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_548_163314">
                                                    <rect
                                                        width="16"
                                                        height="16"
                                                        fill="white"
                                                        transform="translate(0 0.5)"
                                                    />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    ))}
                                    <span className="text-sm">{post.data.rating} (Google)</span>
                                </div>
                                <div className="flex items-center justify-between mt-6">
                                    <span className="text-2xl font-bold">${post.data.price}</span>
                                    <a
                                        href={`/products/${post.slug}`}
                                        className="border border-gray-300 p-2 text-sm">
                                        View details
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
