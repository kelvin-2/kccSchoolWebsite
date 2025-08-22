import React, { useEffect, useState } from 'react';
import { client, urlFor } from "../../lib/sanityClient";

const TeachersSection = ({preview}) => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    client.fetch(`*[_type == "teacher"]{
      name,
      role,
      image
    }`,
        {},
        preview ? { perspective: "previewDrafts" } : {})
        .then((data) => setTeachers(data));
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Dedicated Team</h2>
          <p className="text-xl text-gray-600">Experienced educators committed to your child's success</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Images from Sanity */}
          <div className="grid gap-4">
            {teachers.map((teacher) => (
              <img
                key={teacher.name}
                src={urlFor(teacher.image).width(600).height(400).url()}
                alt={teacher.name}
                className="rounded-lg shadow-lg"
              />
            ))}
          </div>

          {/* Text */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Excellence in Education</h3>
            <p className="text-gray-700 text-lg">
              Our qualified and passionate teachers bring years of experience and a heart for Christian education. 
              They are committed to nurturing each student's academic, spiritual, and personal growth.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-2xl font-bold text-red-700">15+</div>
                <div className="text-gray-600">Years Average Experience</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-2xl font-bold text-red-700">100%</div>
                <div className="text-gray-600">Qualified Teachers</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TeachersSection;
