'use client';

export default function FlashCardForm() {
    return (
        <aside className="lg:col-span-1">
            <div className="p-8 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-sm hover:shadow-md dark:shadow-neutral-950/50 transition-shadow duration-300 sticky top-6">
                <h1 className="text-4xl font-bold tracking-tight mb-2 bg-linear-to-r from-black to-neutral-700 dark:from-white dark:to-neutral-300 bg-clip-text text-transparent">
                    FLASHCARDS
                </h1>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-8">Create your learning cards</p>

                <form className="flex flex-col gap-6">
                    {/* Card Title */}
                    <div className="group relative flex flex-col gap-2">
                        <label
                            className="text-xs font-bold tracking-wider text-neutral-500 dark:text-neutral-400 transition-colors duration-200 group-focus-within:text-black dark:group-focus-within:text-white uppercase"
                            htmlFor="title">
                            Card Title
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                name="title"
                                id="title"
                                placeholder="JavaScript Basics"
                                className="w-full px-4 py-3 text-base font-medium text-black dark:text-white placeholder:text-neutral-300 dark:placeholder:text-neutral-600 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl transition-all duration-200 ease-out focus:outline-none focus:border-black dark:focus:border-white focus:ring-2 focus:ring-black/5 dark:focus:ring-white/5 hover:border-neutral-300 dark:hover:border-neutral-700"
                            />
                        </div>
                    </div>

                    {/* Card Ask*/}
                    <div className="group relative flex flex-col gap-2">
                        <label
                            className="text-xs font-bold tracking-wider text-neutral-500 dark:text-neutral-400 transition-colors duration-200 group-focus-within:text-black dark:group-focus-within:text-white uppercase"
                            htmlFor="ask">
                            Question
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                name="ask"
                                id="ask"
                                placeholder="How does the map method work?"
                                className="w-full px-4 py-3 text-base font-medium text-black dark:text-white placeholder:text-neutral-300 dark:placeholder:text-neutral-600 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl transition-all duration-200 ease-out focus:outline-none focus:border-black dark:focus:border-white focus:ring-2 focus:ring-black/5 dark:focus:ring-white/5 hover:border-neutral-300 dark:hover:border-neutral-700"
                            />
                        </div>
                    </div>

                    {/* Card Answer*/}
                    <div className="group relative flex flex-col gap-2">
                        <label
                            className="text-xs font-bold tracking-wider text-neutral-500 dark:text-neutral-400 transition-colors duration-200 group-focus-within:text-black dark:group-focus-within:text-white uppercase"
                            htmlFor="answer">
                            Answer
                        </label>
                        <div className="relative">
                            <textarea
                                rows={6}
                                name="answer"
                                id="answer"
                                placeholder="The map method creates a new array by applying a function to each element..."
                                className="resize-none w-full px-4 py-3 text-base font-medium text-black dark:text-white placeholder:text-neutral-300 dark:placeholder:text-neutral-600 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl transition-all duration-200 ease-out focus:outline-none focus:border-black dark:focus:border-white focus:ring-2 focus:ring-black/5 dark:focus:ring-white/5 hover:border-neutral-300 dark:hover:border-neutral-700"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="group relative mt-2 w-full px-6 py-3.5 bg-black dark:bg-white text-white dark:text-black font-bold text-sm tracking-wide rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                    >
                        <span className="relative z-10">CREATE FLASHCARD</span>
                        <div className="absolute inset-0 bg-linear-to-r from-neutral-800 to-black dark:from-neutral-200 dark:to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                </form>
            </div>
        </aside>
    )
}