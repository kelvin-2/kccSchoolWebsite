import React from "react";
import { Target, Heart } from "lucide-react";

export default function MissionVision() {
  const items = [
    {
      title: "Our Mission",
      icon: <Target className="h-8 w-8 text-red-600 mr-3" />,
      text: "To provide quality Christian education that nurtures young minds, builds godly character, and equips students with academic excellence while instilling biblical values and preparing them to be leaders in their communities and beyond."
    },
    {
      title: "Our Vision",
      icon: <Heart className="h-8 w-8 text-red-600 mr-3" />,
      text: "To be a leading Christian educational institution that transforms lives through Christ-centered learning, producing graduates who excel academically and demonstrate integrity, compassion, and servant leadership in all aspects of life."
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8 mb-16">
      {items.map(({ title, icon, text }) => (
        <div key={title} className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center mb-4">
            {icon}
            <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">{text}</p>
        </div>
      ))}
    </div>
  );
}
