import React from "react";

export default function OurStory() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Story</h2>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-red-600">Founded on Faith</h3>
          <p className="text-gray-700 mb-4">
            Kingdom Christian College was established with a vision to provide quality Christian
            education in the heart of Mthethwa, KwaZulu-Natal. Our founders recognized the need for
            an educational institution that would not only excel academically but also nurture the
            spiritual and moral development of young people.
          </p>
          <p className="text-gray-700">
            From our humble beginnings, we have grown into a thriving educational community that
            serves families throughout the region, maintaining our commitment to Christ-centered
            education while achieving remarkable academic success.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-red-600">Growing Together</h3>
          <p className="text-gray-700 mb-4">
            What started as a small school with big dreams has evolved into a comprehensive
            educational institution serving students from Pre-Primary through to Matric. Our growth
            has been guided by our unwavering commitment to providing excellent education within a
            Christian framework.
          </p>
          <p className="text-gray-700">
            Today, we are proud to be a beacon of hope and excellence in our community, preparing
            students not just for academic success, but for life as compassionate, principled
            leaders.
          </p>
        </div>
      </div>

      <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center border-2 border-dashed border-gray-300">
        <div className="text-center text-gray-500">
          <div className="text-3xl mb-2">🏫</div>
          <p className="text-sm">Add image: Historical photos or school development over the years</p>
        </div>
      </div>
    </div>
  );
}
