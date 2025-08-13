import React from 'react';

const stats = [
  { value: "Grade R-12", label: "Complete Education" },
  { value: "Boarding &\nDay Options", label: "Flexible Learning" },
  { value: "Experienced", label: "Teachers" },
  { value: "Christ-Centered", label: "Education" }
];

const StatsSection = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
      {stats.map((stat, i) => (
        <div key={i} className="text-center">
          <div className="text-3xl font-bold text-red-700 whitespace-pre-line">{stat.value}</div>
          <div className="text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
