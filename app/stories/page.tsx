import Header from "@/app/components/Home/header";
import Footer from "@/app/components/Home/footer";
import Stories from "@/app/components/Home/stories";
import Image from "next/legacy/image";

export default function StoriesPage() {
    return (
        <div>
            <Header />
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="md:grid md:grid-cols-2 md:gap-10 lg:gap-16 md:items-center">
                    <div className="hidden md:block mb-24 md:mb-0 sm:px-6">
                        <Image
                            className="rounded-xl"
                            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=500&h=600&q=80"
                            alt="Avatar"
                            layout="responsive"
                            width={500}
                            height={600}
                        />
                        {/* SVG circle pattern omitted for brevity */}
                    </div>
                    <div>
                        <blockquote className="relative">
                            {/* Quote SVG and text */}
                            <p className="text-xl font-medium italic text-gray-800 md:text-2xl md:leading-normal xl:text-3xl xl:leading-normal dark:text-neutral-200">
                                To say that switching to Preline has been life-changing is an understatement. My business has tripled and I got my life back.
                            </p>
                            <footer className="mt-6">
                                {/* User details */}
                            </footer>
                            <a className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:text-neutral-800" href="#">
                                Read the story
                            </a>
                        </blockquote>
                    </div>
                </div>
            </div>
            <Stories />
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto grid grid-cols-2 sm:grid-cols-3 gap-2">
                {/* Project images grid, repeated structure for each image */}
                <a className="group block relative overflow-hidden rounded-lg" href="#">
                    <Image 
                        className="w-full size-40 object-cover bg-gray-100 rounded-lg dark:bg-neutral-800"
                        src="https://images.unsplash.com/photo-1656618724305-a4257e46e847?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Project"
                        width={500}
                        height={400}
                    />
                    {/* View button */}
                </a>
                <a className="group block relative overflow-hidden rounded-lg" href="#">
                    <Image 
                        className="w-full size-40 object-cover bg-gray-100 rounded-lg dark:bg-neutral-800"
                        src="https://images.unsplash.com/photo-1656618724305-a4257e46e847?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Project"
                        width={500}
                        height={400}
                    />
                    {/* View button */}
                </a>
                <a className="group block relative overflow-hidden rounded-lg" href="#">
                    <Image 
                        className="w-full size-40 object-cover bg-gray-100 rounded-lg dark:bg-neutral-800"
                        src="https://images.unsplash.com/photo-1656618724305-a4257e46e847?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Project"
                        width={500}
                        height={400}
                    />
                    {/* View button */}
                </a>
                <a className="group block relative overflow-hidden rounded-lg" href="#">
                    <Image 
                        className="w-full size-40 object-cover bg-gray-100 rounded-lg dark:bg-neutral-800"
                        src="https://images.unsplash.com/photo-1656618724305-a4257e46e847?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Project"
                        width={500}
                        height={400}
                    />
                    {/* View button */}
                </a>
                <a className="group block relative overflow-hidden rounded-lg" href="#">
                    <Image 
                        className="w-full size-40 object-cover bg-gray-100 rounded-lg dark:bg-neutral-800"
                        src="https://images.unsplash.com/photo-1656618724305-a4257e46e847?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Project"
                        width={500}
                        height={400}
                    />
                    {/* View button */}
                </a>
                <a className="group block relative overflow-hidden rounded-lg" href="#">
                    <Image 
                        className="w-full size-40 object-cover bg-gray-100 rounded-lg dark:bg-neutral-800"
                        src="https://images.unsplash.com/photo-1656618724305-a4257e46e847?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Project"
                        width={500}
                        height={400}
                    />
                    {/* View button */}
                </a>
                {/* Repeat for other images */}
            </div>
            <Footer />
        </div>
    );
}