import Header from "./components/header";
import Image from "next/image";

const iconBlocks = [
  { title: "Creative minds", icon: <rect width="18" height="10" x="3" y="11" rx="2" /> },
  { title: "Effortless updates", icon: <path d="m7.5 4.27 9 5.15" /> },
  { title: "Strong empathy", icon: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /> },
  { title: "Conquer the best", icon: <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /> },
  { title: "Designing for people", icon: <circle cx="9" cy="7" r="4" /> },
  { title: "Simple and affordable", icon: <path d="M7 10v12" /> },
  { title: "Get freelance work", icon: <path d="M2 3h20" /> },
  { title: "Sell your goods", icon: <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /> },
];

export default function Home() {
  return (
    <div>
      <Header />
        {/* <!-- Hero --> */}
        <div className="bg-gradient-to-b from-violet-600/10 via-transparent">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
        <div className="flex justify-center">

        </div>
        {/* <!-- Title --> */}
        <div className="max-w-3xl text-center mx-auto">
          <h1 className="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Now it's easier than ever to build products
          </h1>
        </div>
        <div className="max-w-3xl text-center mx-auto">
          <p className="text-lg text-white/70">Preline is a large open-source project, crafted with Tailwind CSS framework by Hmlstream.</p>
        </div>
        {/* <!-- Buttons --> */}
        <div className="text-center">
          <a className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:shadow-blue-700/50 py-3 px-6" href="#">
            Get started
            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </a>
        </div>
      </div>
    </div>
    {/* <!-- End Hero --> */}
    {/* <!-- Card Blog --> */}
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
      {/* <!-- End Card Blog --> */}
      {/* <!-- Box Icon --> */}    
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {iconBlocks.map((block, index) => (
          <div
            key={index}
            className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-neutral-700"
            >
            <div className="flex justify-center items-center size-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-lg mx-auto">
              <svg
                className="shrink-0 size-7 text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                >
                {block.icon}
              </svg>     
            </div>
            <div className="mt-3">
              <h3 className="text-sm sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                {block.title}
              </h3>
            </div>
          </div>
          ))}
        </div>
      </div>
      {/* <!-- End Box Icon --> */}
      {/* // <!-- FAQ --> */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <div className="max-w-xs">
              <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Frequently asked questions</h2>
              <p className="mt-1 hidden md:block text-gray-600 dark:text-neutral-400">Answers to the most frequently asked questions.</p>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="hs-accordion-group divide-y divide-gray-200 dark:divide-neutral-700">
              <div className="hs-accordion pb-3 active" id="hs-basic-with-title-and-arrow-stretched-heading-one">
                <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" aria-expanded="true" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
                  Can I cancel at anytime?
                  <svg className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  <svg className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
                </button>
                <div id="hs-basic-with-title-and-arrow-stretched-collapse-one" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
                  <p className="text-gray-600 dark:text-neutral-400">
                    Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if you will give us some feedback.
                  </p>
                </div>
              </div>

              <div className="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-two">
                <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" aria-expanded="false" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two">
                  My team has credits. How do we use them?
                  <svg className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  <svg className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
                </button>
                <div id="hs-basic-with-title-and-arrow-stretched-collapse-two" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two">
                  <p className="text-gray-600 dark:text-neutral-400">
                    Once your team signs up for a subscription plan. This is where we sit down, grab a cup of coffee and dial in the details.
                  </p>
                </div>
              </div>

              <div className="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-three">
                <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" aria-expanded="false" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three">
                  How does Preline's pricing work?
                  <svg className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  <svg className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
                </button>
                <div id="hs-basic-with-title-and-arrow-stretched-collapse-three" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three">
                  <p className="text-gray-600 dark:text-neutral-400">
                    Our subscriptions are tiered. Understanding the task at hand and ironing out the wrinkles is key.
                  </p>
                </div>
              </div>

              <div className="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-four">
                <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" aria-expanded="false" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four">
                  How secure is Preline?
                  <svg className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  <svg className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
                </button>
                <div id="hs-basic-with-title-and-arrow-stretched-collapse-four" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four">
                  <p className="text-gray-600 dark:text-neutral-400">
                    Protecting the data you trust to Preline is our first priority. This part is really crucial in keeping the project in line to completion.
                  </p>
                </div>
              </div>

              <div className="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-five">
                <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" aria-expanded="false" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five">
                  How do I get access to a theme I purchased?
                  <svg className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  <svg className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
                </button>
                <div id="hs-basic-with-title-and-arrow-stretched-collapse-five" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five">
                  <p className="text-gray-600 dark:text-neutral-400">
                    If you lose the link for a theme you purchased, don't panic! We've got you covered. You can login to your account, tap your avatar in the upper right corner, and tap Purchases. If you didn't create a login or can't remember the information, you can use our handy Redownload page, just remember to use the same email you originally made your purchases with.
                  </p>
                </div>
              </div>

              <div className="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-six">
                <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" aria-expanded="false" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six">
                  Upgrade License Type
                  <svg className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  <svg className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
                </button>
                <div id="hs-basic-with-title-and-arrow-stretched-collapse-six" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six">
                  <p className="text-gray-600 dark:text-neutral-400">
                    There may be times when you need to upgrade your license from the original type you purchased and we have a solution that ensures you can apply your original purchase cost to the new license purchase.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End FAQ --> */}
    </div>
  );
}
