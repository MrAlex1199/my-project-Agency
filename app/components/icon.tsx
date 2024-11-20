
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

export default function BoxIcon() {
    return (
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
    )
}