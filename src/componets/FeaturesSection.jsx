import React from 'react';
import { BookOpen, Heart, Home, Bus, Users, Trophy } from 'lucide-react';

const features = [
  { icon: <BookOpen className="w-8 h-8" />, title: "Academic Excellence", description: "Quality Christian education..." },
  { icon: <Heart className="w-8 h-8" />, title: "Christian Values", description: "Nurturing students..." },
  { icon: <Home className="w-8 h-8" />, title: "Boarding Facilities", description: "Safe, comfortable..." },
  { icon: <Bus className="w-8 h-8" />, title: "School Transport", description: "Convenient and safe..." },
  { icon: <Users className="w-8 h-8" />, title: "Small Class Sizes", description: "Personalized attention..." },
  { icon: <Trophy className="w-8 h-8" />, title: "Holistic Development", description: "Developing the whole child..." }
];

const FeaturesSection = () => (
  <section id="about" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Kingdom Christian College?</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">We're committed to quality education...</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <div key={i} className="text-center p-6 rounded-xl bg-white hover:shadow-lg transition-shadow">
            <div className="text-red-700 mb-4 flex justify-center">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
