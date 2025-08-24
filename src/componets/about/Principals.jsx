import React from "react";

export default function Principals() {
  const principals = [
    {
      title: "Mrs. [Principal Name]",
      role: "Primary School Principal",
      email: "primary@kingdomchristiancollege.co.za",
      ext: "101",
      placeholder: "👩‍🏫",
      desc: "With [X] years of experience in Christian education, Mrs. [Name] leads our primary school with passion and dedication. She believes in nurturing young minds through a blend of academic excellence and Christian values, ensuring every child feels loved and supported in their learning journey."
    },
    {
      title: "Mr. [Principal Name]",
      role: "High School Principal",
      email: "highschool@kingdomchristiancollege.co.za",
      ext: "102",
      placeholder: "👨‍🏫",
      desc: "Mr. [Name] brings [X] years of educational leadership to our high school. His commitment to academic excellence and character development has been instrumental in achieving our 100% matric pass rate. He is dedicated to preparing students for tertiary education and life beyond school."
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Meet Our Principals</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {principals.map(({ title, role, email, ext, placeholder, desc }) => (
          <div key={title} className="text-center">
            <div className="bg-gray-100 rounded-lg h-80 w-64 mx-auto mb-6 flex items-center justify-center border-2 border-dashed border-gray-300">
              <div className="text-center text-gray-500">
                <div className="text-4xl mb-2">{placeholder}</div>
                <p className="text-sm">Add photo: {role}</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
            <p className="text-red-600 font-semibold mb-4">{role}</p>
            <p className="text-gray-600 leading-relaxed">{desc}</p>

            <div className="mt-4 text-sm text-gray-500">
              <p className="mb-1">📧 Email: {email}</p>
              <p>📞 Ext: {ext}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gray-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-center text-red-600 mb-4">Our Leadership Philosophy</h3>
        <p className="text-gray-700 text-center leading-relaxed">
          Our principals work hand-in-hand to ensure a seamless educational experience from
          pre-primary through matric. Together, they foster an environment where academic excellence
          meets Christian character development, preparing students for success in all areas of life.
        </p>
      </div>
    </div>
  );
}
