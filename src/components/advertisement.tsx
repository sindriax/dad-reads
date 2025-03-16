"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ToyotaYarisCrosAd() {
  return (
    <section className="py-10 bg-gradient-to-r from-[#bcd1c1] via-white to-[#bcd1c1] w-[80%] mx-auto rounded-lg shadow-2xl overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/car.png"
            alt="Toyota Yaris Cros"
            width={400}
            height={240}
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Toyota Yaris Cros
          </h2>
          <p className="text-xl font-semibold text-gray-700 mb-4">
            Patrocinador Oficial de Anselmo Reads
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Descubre la perfecta fusión de estilo y eficiencia con el Toyota
            Yaris Cros. Este innovador vehículo, patrocinador oficial de Anselmo
            Reads, te invita a disfrutar de cada trayecto con la mejor
            tecnología y un diseño inigualable. ¡Conduce la excelencia y vive la
            experiencia!
          </p>
          <button className="bg-[#8aac92] hover:bg-[#7aa384] text-white font-bold py-3 px-6 rounded-full">
            Descubre más
          </button>
        </motion.div>
      </div>
    </section>
  );
}
