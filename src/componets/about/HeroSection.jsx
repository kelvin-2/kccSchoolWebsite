import React from "react";

export default function HeroSection() {
  return (
    <div className="bg-gradient-to-r from-red-800 to-red-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Kingdom Christian College</h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Nurturing minds, building character, and inspiring faith in Mtubatuba, KwaZulu-Natal
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
          {["Pre-Primary to Matric", "CAPS Curriculum", "100% Matric Pass Rate", "Registered School"].map((item) => (
            <span key={item} className="bg-white bg-opacity-20 px-4 py-2 rounded-full">{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
