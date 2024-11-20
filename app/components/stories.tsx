import Image from "next/legacy/image";

export default function Stories() {
    return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mb-10">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Customer stories</h2>
            <p className="mt-1 text-gray-600 dark:text-neutral-400">See how game-changing companies are making the most of every engagement with Preline.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <a className="group block rounded-xl focus:outline-none" href="#">
                <div className="relative w-full h-40">
                    <Image 
                        className="w-full object-cover rounded-xl" 
                        src="https://images.unsplash.com/photo-1668869713519-9bcbb0da7171?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" 
                        alt="Blog Image" 
                        layout="fill"
                    />
                </div>
                <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 group-focus:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white dark:group-focus:text-white">
                    Unity’s inside sales team drives 80% of its revenue with Preline.
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                    September 12, 2022
                </p>
            </a>
            <a className="group block rounded-xl focus:outline-none" href="#">
                <div className="relative w-full h-40">
                    <Image 
                        className="w-full object-cover rounded-xl" 
                        src="https://images.unsplash.com/photo-1668584054035-f5ba7d426401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" 
                        alt="Blog Image" 
                        layout="fill"
                    />
                </div>
                <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 group-focus:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white dark:group-focus:text-white">
                    Living Spaces creates a unified experience across the customer journey.
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                    September 12, 2022
                </p>
            </a>
            <a className="group block rounded-xl focus:outline-none" href="#">
                <div className="relative w-full h-40">
                    <Image 
                        className="w-full object-cover rounded-xl" 
                        src="https://images.unsplash.com/photo-1668863699009-1e3b4118675d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" 
                        alt="Blog Image" 
                        layout="fill"
                    />
                </div>
                <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 group-focus:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white dark:group-focus:text-white">
                    Atlassian powers sales and support at scale with Preline.
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                    September 12, 2022
                </p>
            </a>
            <a className="group block rounded-xl focus:outline-none" href="#">
                <div className="relative w-full h-40">
                    <Image 
                        className="w-full object-cover rounded-xl" 
                        src="https://images.unsplash.com/photo-1668584054131-d5721c515211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" 
                        alt="Blog Image" 
                        layout="fill"
                    />
                </div>
                <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 group-focus:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white dark:group-focus:text-white">
                    Everything you need to know about Preline Pro.
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                    September 12, 2022
                </p>
            </a>
        </div>
    </div>
    )
}