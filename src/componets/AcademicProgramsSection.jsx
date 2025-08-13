import React from 'react';
import ImagePlaceholder from './ImagePlaceholder';

const programs = [
  {
    title: "Foundation Phase",
    grades: "Grade R - 3",
    description: "Building strong foundations in literacy, numeracy, and Christian values through play-based learning and structured activities.",
    imageLabel: "Foundation Phase Students Learning"
  },
  {
    title: "Intermediate Phase",
    grades: "Grade 4 - 6",
    description: "Developing critical thinking skills while maintaining strong emphasis on character development and biblical principles.",
    imageLabel: "Intermediate Phase Classroom"
  },
  {
    title: "Senior Phase",
    grades: "Grade 7 - 12",
    description: "Preparing students for higher education and careers while deepening their faith and leadership abilities.",
    imageLabel: "Senior Phase/Matric Students"
  }
];

const AcademicProgramsSection = () => (
  <section id="academics" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Academic Programs</h2>
        <p className="text-xl text-gray-600">Comprehensive education from foundation to matriculation</p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {programs.map((program, i) => (
          <div key={i} className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <ImagePlaceholder height="h-40" label={program.imageLabel} className="mb-6" />
            <h3 className="text-2xl font-bold text-red-700 mb-4">{program.title}</h3>
            <p className="text-gray-600 mb-4">{program.grades}</p>
            <p className="text-gray-700">{program.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AcademicProgramsSection;
