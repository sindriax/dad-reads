"use client";

import { Gift } from "lucide-react";

export default function AnnouncementBanner() {
  return (
    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-4 px-6 rounded-md mx-4 my-4 shadow-lg text-center flex items-center justify-center gap-2">
      <p className="text-xl font-bold">
        🎉 ¡Enhorabuena! Como primer visitante, has ganado una de nuestras
        famosas trilogías.
      </p>
      <Gift className="h-6 w-6" style={{ animation: "shake 0.5s infinite" }} />
      <style jsx>{`
        @keyframes shake {
          0% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-5px);
          }
          50% {
            transform: translateX(5px);
          }
          75% {
            transform: translateX(-5px);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
