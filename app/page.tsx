export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-4xl font-bold font-mono">FLASHCARDS</h1>
        <aside>
          <form className="flex flex-col gap-4">

            {/* Card Title */}
            <div className="group relative flex flex-col gap-2">
              <label
                className="text-sm font-bold tracking-tight text-neutral-600 dark:text-neutral-400 transition-colors duration-200 group-focus-within:text-black dark:group-focus-within:text-white"
                htmlFor="title">
                CARD TITLE
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Enter title..."
                  className="w-full px-4 py-3 text-base font-medium text-black dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-600 bg-transparent border-2 border-neutral-200 dark:border-neutral-800 rounded-lg transition-all duration-200 ease-out focus:outline-none focus:border-black dark:focus:border-white focus:ring-0"
                />
              </div>
            </div>

            {/* Card Ask*/}
            <div className="group relative flex flex-col gap-2">
              <label
                className="text-sm font-bold tracking-tight text-neutral-600 dark:text-neutral-400 transition-colors duration-200 group-focus-within:text-black dark:group-focus-within:text-white"
                htmlFor="ask">
                ASK
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="ask"
                  id="ask"
                  placeholder="How works the Map Method in JS?"
                  className="w-full px-4 py-3 text-base font-medium text-black dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-600 bg-transparent border-2 border-neutral-200 dark:border-neutral-800 rounded-lg transition-all duration-200 ease-out focus:outline-none focus:border-black dark:focus:border-white focus:ring-0"
                />
              </div>
            </div>

            {/* Card Answer*/}
            <div className="group relative flex flex-col gap-2">
              <label
                className="text-sm font-bold tracking-tight text-neutral-600 dark:text-neutral-400 transition-colors duration-200 group-focus-within:text-black dark:group-focus-within:text-white"
                htmlFor="answer">
                ANSWER / CONTENT
              </label>
              <div className="relative">
                <textarea
                  rows={6}
                  name="answer"
                  id="answer"
                  placeholder="A partir de un arreglo existente recorre y crea uno nuevo ..."
                  className="resize-none w-full px-4 py-3 text-base font-medium text-black dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-600 bg-transparent border-2 border-neutral-200 dark:border-neutral-800 rounded-lg transition-all duration-200 ease-out focus:outline-none focus:border-black dark:focus:border-white focus:ring-0"
                />
              </div>
            </div>
          </form>
        </aside>
      </main>
    </div>
  );
}
