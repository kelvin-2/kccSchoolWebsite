import React from "react";
import { Shield, Award, BookOpen } from "lucide-react";

export default function Accreditation() {
  const items = [
    {
      title: "CAPS Curriculum",
      icon: <Award className="h-10 w-10 text-red-600 mx-auto mb-3" />,
      desc: "Following the official Curriculum Assessment Policy Statements as prescribed by the Department of Basic Education."
    },
    {
      title: "NSC Matric",
      icon: <BookOpen className="h-10 w-10 text-red-600 mx-auto mb-3" />,
      desc: "Authorized to offer the National Senior Certificate, ensuring our graduates meet national standards."
    },
    {
      title: "Registered School",
      icon: <Shield className="h-10 w-10 text-red-600 mx-auto mb-3" />,
      desc: "Fully registered with the KwaZulu-Natal Department of Education, ensuring compliance with all educational standards."
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
      <div className="text-center mb-8">
        <Shield className="h-12 w-12 text-red-600 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-800">Accreditation & Quality Assurance</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {items.map(({ title, icon, desc }) => (
          <div key={title} className="text-center bg-gray-50 rounded-lg p-6">
            {icon}
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
