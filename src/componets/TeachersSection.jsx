import React from 'react';
import ImagePlaceholder from './ImagePlaceholder';

const TeachersSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Dedicated Team</h2>
          <p className="text-xl text-gray-600">Experienced educators committed to your child's success</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Image */}
          <ImagePlaceholder height="h-96" label="Teachers/Staff Group Photo or Principal" />

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
