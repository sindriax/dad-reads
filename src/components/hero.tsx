import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-12 text-center flex flex-col items-center justify-center">
      <h1 className="text-6xl font-black mb-4 text-[#8aac92]">
        Bienvenido, Anselmo!
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Descubre tu próximo libro favorito para tu Kindle en
      </p>
      <Image
        src="/images/anselmo-bg.png"
        alt="Anselmo logo"
        width={200}
        height={200}
      />
    </section>
  );
}
