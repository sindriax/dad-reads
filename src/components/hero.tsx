export default function Hero() {
  return (
    <section
      className="relative h-[95vh] flex items-center justify-start bg-cover bg-center"
      style={{ backgroundImage: "url(/images/banner.jpg)" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 text-left px-4 w-[60%] ml-20">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white">
          Descubre tu próximo libro favorito para tu Kindle
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Encuentra recomendaciones personalizadas y sumérgete en nuevas
          lecturas.
        </p>
        <button className="bg-[#8aac92] hover:bg-[#7aa384] text-white font-bold py-3 px-6 rounded-full">
          Explora ahora
        </button>
      </div>
    </section>
  );
}
