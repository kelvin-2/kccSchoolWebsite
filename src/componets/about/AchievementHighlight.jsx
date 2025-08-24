import React from "react";
import { Award } from "lucide-react";

export default function AchievementHighlight() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-16 text-center">
      <div className="bg-red-50 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
        <Award className="h-10 w-10 text-red-600" />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">100% Matric Pass Rate</h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
        We are proud of our outstanding academic achievement. Every student who completed their
        National Senior Certificate with us has successfully passed, demonstrating our commitment
        to academic excellence and individual student support.
      </p>
      <div className="bg-gray-100 rounded-lg h-64 md:h-80 flex items-center justify-center border-2 border-dashed border-gray-300">
        <div className="text-center text-gray-500">
          <div className="text-4xl mb-2">📸</div>
          <p className="text-sm">Add image: Matric graduation ceremony or celebrating students</p>
        </div>
      </div>
    </div>
  );
}
