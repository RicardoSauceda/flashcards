import FlashCardForm from "./components/FlashCardForm";
import Flashcard from "./components/FlashCard";

export default function Home() {
  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-neutral-50 via-white to-neutral-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <FlashCardForm />

        <main className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Flashcard
              question="¿Cómo funciona el método map en JavaScript?"
              answer="El método map en JavaScript es un método de arrays que crea un nuevo array con los resultados de aplicar una función a cada elemento del array original."
              category="JavaScript"
            />
          </div>
        </main>
      </div>
    </div>
  );
}
