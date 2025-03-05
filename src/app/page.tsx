import Header from "@/components/header/Header";
import RandomBooks from "@/components/month-books.tsx/RandomBooks";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto p-4">
        <section className="text-center mt-10">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            ¡Bienvenido al buscador de libros!
          </h1>
          <p className="text-lg mb-8 text-gray-600">
            En este buscador podrás encontrar tu próximo libro para tu Kindle.
            Solo tienes que buscar el título o el autor, y pedirlo para que
            aparezca en tu Kindle.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Libros al azar
          </h2>
          <RandomBooks />
        </section>
      </main>
    </div>
  );
}
