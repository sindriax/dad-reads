"use client";

import Image from "next/image";

export default function ToyotaYarisCrosAd() {
  return (
    <section className="py-8 bg-white w-[80%] mx-auto rounded-lg shadow-xl">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-shrink-0">
          <Image
            src="/images/car.png"
            alt="Toyota Yaris Cros"
            width={400}
            height={240}
            className="rounded-lg px-6"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            <p>Toyota Yaris Cros</p>
            <p>Patrocinador Oficial de Anselmo Reads</p>
          </h2>
          <p className="text-lg text-gray-600">
            Descubre la perfecta fusión de estilo y eficiencia con el Toyota
            Yaris Cros. Este innovador vehículo, patrocinador oficial de Anselmo
            Reads, te invita a disfrutar de cada trayecto con la mejor
            tecnología y un diseño inigualable. ¡Conduce la excelencia y vive la
            experiencia!
          </p>
        </div>
      </div>
    </section>
  );
}
