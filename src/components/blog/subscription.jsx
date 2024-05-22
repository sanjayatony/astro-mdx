import site from "../../../data/site.json";
export default function Subscription() {
    return (
        <>
            <div class="p-6 border border-gray-300 rounded-md">
                <h3 className="mb-2">{site.subscription.heading}</h3>
                <p className="mb-4">{site.subscription.content}</p>
                <form action="#">
                    <div className="items-center max-w-screen-sm mx-auto space-y-2 flex flex-col">
                        <div className="relative w-full">
                            <label
                                for="email"
                                className="hidden mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">
                                Email address
                            </label>
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg
                                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                            </div>
                            <input
                                className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Your email"
                                type="email"
                                id="email"
                                required=""
                            />
                        </div>
                        <button
                            aria-label="Subscribe"
                            type="submit"
                            className="w-full px-5 py-3 text-sm font-medium text-center text-white rounded-lg cursor-pointer bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                            Subscribe
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
