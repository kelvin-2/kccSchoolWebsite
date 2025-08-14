import React from 'react';
import { client, urlFor } from '../../lib/sanityClient';
import { ChevronRight } from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="pt-32 bg-gradient-to-br from-red-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-red-700"> Kingdom Christian College</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Nurturing minds, building character, and inspiring faith in Mthethwa, KwaZulu-Natal
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-red-700 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-red-800 transition-colors flex items-center justify-center">
              Learn More <ChevronRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border-2 border-red-700 text-red-700 px-8 py-3 rounded-lg text-lg font-medium hover:bg-red-700 hover:text-white transition-colors">
              Schedule a Visit
            </button>
          </div>
        </div>

        {/* Image */}
        <ImagePlaceholder height="h-96" label="School Campus Main Building or Students in Classroom" className="shadow-2xl" />
      </div>
    </section>
  );
};

export default HeroSection;
