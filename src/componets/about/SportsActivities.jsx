import React from "react";

export default function SportsActivities() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Sports & Activities</h2>

      <div className="mb-8 bg-gray-100 rounded-lg h-48 flex items-center justify-center border-2 border-dashed border-gray-300">
        <div className="text-center text-gray-500">
          <div className="text-3xl mb-2">⚽</div>
          <p className="text-sm">Add image: Students participating in sports activities</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-red-600">Sports Programs</h3>
          <p className="text-gray-700 mb-4">
            We believe in developing the whole child through physical activity and team sports.
            Our sports programs build character, teamwork, and healthy lifestyle habits.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Soccer and netball teams</li>
            <li>Athletics and track events</li>
            <li>Swimming programs</li>
            <li>Inter-school competitions</li>
            <li>Physical education classes</li>
            <li>Sports coaching and development</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-red-600">Extracurricular Activities</h3>
          <p className="text-gray-700 mb-4">
            Beyond academics and sports, we offer various activities to help students discover
            their talents and develop their interests in a supportive Christian environment.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Choir and music programs</li>
            <li>Drama and performing arts</li>
            <li>Debate and public speaking</li>
            <li>Art and creative workshops</li>
            <li>Leadership development clubs</li>
            <li>Community service projects</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
