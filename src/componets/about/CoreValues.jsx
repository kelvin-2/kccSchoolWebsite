import React from "react";
import { BookOpen, Heart, Users } from "lucide-react";

export default function CoreValues() {
  const values = [
    {
      title: "Academic Excellence",
      icon: <BookOpen className="h-8 w-8 text-red-600" />,
      text: "Committed to providing high-quality education that challenges and inspires students to reach their full potential."
    },
    {
      title: "Christian Values",
      icon: <Heart className="h-8 w-8 text-red-600" />,
      text: "Integrating biblical principles into all aspects of learning and daily life to build strong moral character."
    },
    {
      title: "Community",
      icon: <Users className="h-8 w-8 text-red-600" />,
      text: "Building a supportive, inclusive environment where every student, family, and staff member feels valued and connected."
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Core Values</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {values.map(({ title, icon, text }) => (
          <div key={title} className="text-center">
            <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              {icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
