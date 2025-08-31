import React from "react";
import { ChevronRight, Home, Bus, Shield, Users, Clock, MapPin, Award, Heart } from "lucide-react";

const BoardingTransportSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Boarding & Transport Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Flexible accommodation options to suit your family's needs
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Boarding */}
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            {/* Hero Visual Section */}
            <div className="bg-gradient-to-r from-red-700 to-red-800 rounded-xl p-8 mb-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full translate-y-12 -translate-x-12"></div>
              <div className="flex items-center justify-between relative z-10">
                <div>
                  <Home className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold">Boarding House</h3>
                  <p className="text-red-100 mt-2">Your home away from home</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-sm text-red-100">Care & Support</div>
                </div>
              </div>
            </div>

            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              Our boarding facilities provide a safe, nurturing environment where students can focus on their studies while developing independence and lifelong friendships.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center p-3 bg-red-50 rounded-lg">
                <Shield className="w-5 h-5 text-red-700 mr-2" />
                <span className="text-sm font-medium text-gray-800">24/7 Security</span>
              </div>
              <div className="flex items-center p-3 bg-red-50 rounded-lg">
                <Users className="w-5 h-5 text-red-700 mr-2" />
                <span className="text-sm font-medium text-gray-800">House Parents</span>
              </div>
              <div className="flex items-center p-3 bg-red-50 rounded-lg">
                <Clock className="w-5 h-5 text-red-700 mr-2" />
                <span className="text-sm font-medium text-gray-800">Study Time</span>
              </div>
              <div className="flex items-center p-3 bg-red-50 rounded-lg">
                <Heart className="w-5 h-5 text-red-700 mr-2" />
                <span className="text-sm font-medium text-gray-800">Pastoral Care</span>
              </div>
            </div>

            <ul className="space-y-3 text-gray-700">
              {[
                "Comfortable dormitory accommodation",
                "Nutritious meals and supervised study time", 
                "Weekend activities and spiritual development programs",
                "Medical support and wellness programs"
              ].map((item, i) => (
                <li key={i} className="flex items-start group">
                  <ChevronRight className="w-5 h-5 text-red-700 mr-3 mt-0.5 group-hover:translate-x-1 transition-transform" />
                  <span className="group-hover:text-gray-900 transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Transport */}
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            {/* Hero Visual Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 mb-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full translate-y-12 -translate-x-12"></div>
              <div className="flex items-center justify-between relative z-10">
                <div>
                  <Bus className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold">School Transport</h3>
                  <p className="text-blue-100 mt-2">Safe & reliable journeys</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm text-blue-100">Safety Record</div>
                </div>
              </div>
            </div>

            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              Safe and reliable transport services for day scholars, making quality Christian education accessible to families across the region.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                <Award className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-sm font-medium text-gray-800">Licensed Drivers</span>
              </div>
              <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                <Shield className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-sm font-medium text-gray-800">Modern Fleet</span>
              </div>
              <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-sm font-medium text-gray-800">Multiple Routes</span>
              </div>
              <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                <Clock className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-sm font-medium text-gray-800">On-Time Service</span>
              </div>
            </div>

            <ul className="space-y-3 text-gray-700">
              {[
                "Modern, well-maintained school buses",
                "Experienced, licensed drivers",
                "Multiple routes covering Mthubathuba", 
                "Competitive rates and flexible payment options"
              ].map((item, i) => (
                <li key={i} className="flex items-start group">
                  <ChevronRight className="w-5 h-5 text-blue-600 mr-3 mt-0.5 group-hover:translate-x-1 transition-transform" />
                  <span className="group-hover:text-gray-900 transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BoardingTransportSection;