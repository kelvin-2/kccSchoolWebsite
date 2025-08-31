import React from "react";

export default function Facilities() {
  const facilities = [
    "Well-equipped classrooms",
    "Computer laboratory",
    "Science laboratories",
    "Library and media center",
    "Sports facilities",
    "Chapel for worship"
  ];

  const supportive = [
    "Secure campus environment",
    "Small class sizes for personalized attention",
    "Dedicated pastoral care",
    "Student counseling services",
    "Parent-teacher partnership",
    "Christian mentorship programs"
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Learning Environment</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-red-600">Modern Facilities</h3>
          <ul className="space-y-2 text-gray-600">
            {facilities.map((f) => (
              <li key={f} className="flex items-center">
                <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>{f}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-red-600">Safe & Supportive</h3>
          <ul className="space-y-2 text-gray-600">
            {supportive.map((s) => (
              <li key={s} className="flex items-center">
                <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>{s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
