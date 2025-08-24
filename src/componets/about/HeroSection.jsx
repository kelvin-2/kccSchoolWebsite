import React, { useState, useEffect } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentHighlight, setCurrentHighlight] = useState(0);
  
  const highlights = ["Excellence", "Faith", "Character", "Innovation"];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentHighlight((prev) => (prev + 1) % highlights.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const achievements = [
    { text: "Pre-Primary to Matric", color: "hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-500" },
    { text: "CAPS Curriculum", color: "hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500" },
    { text: "100% Matric Pass Rate", color: "hover:bg-gradient-to-r hover:from-green-400 hover:to-teal-500" },
    { text: "Registered School", color: "hover:bg-gradient-to-r hover:from-pink-400 hover:to-red-500" }
  ];

  return (
    <div className="relative bg-gradient-to-br from-red-800 via-red-700 to-red-600 text-white py-20 overflow-hidden">
      {/* Animated Background Elements - The Fire Effect! */}
      <div className="absolute inset-0">
        {/* Large floating orbs */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-15 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-32 h-32 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-20 animate-bounce" style={{animationDelay: '1s', animationDuration: '3s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full opacity-25 animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Medium floating elements */}
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-bounce" style={{animationDelay: '0.5s', animationDuration: '4s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-16 h-16 bg-gradient-to-r from-yellow-300 to-red-400 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1.5s'}}></div>
        
        {/* Geometric shapes for extra flair */}
        <div className="absolute top-1/4 left-1/2 w-12 h-12 border-4 border-white border-opacity-20 transform rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-1/4 right-10 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 transform rotate-12 opacity-30 animate-pulse" style={{animationDelay: '3s'}}></div>
        
        {/* Small sparkle effects */}
        <div className="absolute top-1/2 left-20 w-6 h-6 bg-white rounded-full opacity-40 animate-ping" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-20 right-1/4 w-4 h-4 bg-yellow-300 rounded-full opacity-50 animate-ping" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-40 right-1/3 w-5 h-5 bg-orange-300 rounded-full opacity-45 animate-ping" style={{animationDelay: '1s'}}></div>
        
        {/* Additional depth layers */}
        <div className="absolute inset-0 bg-gradient-to-t from-red-900 via-transparent to-transparent opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-orange-500 to-transparent opacity-5"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        {/* Animated Title */}
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            About{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-400 bg-clip-text text-transparent animate-pulse">
              Kingdom Christian College
            </span>
          </h1>
        </div>

        {/* Dynamic Subtitle */}
        <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <p className="text-xl md:text-2xl mb-2 opacity-95">
            Nurturing minds, building{" "}
            <span className="inline-block min-w-32 text-yellow-300 font-bold transition-all duration-500 transform">
              {highlights[currentHighlight]}
            </span>
          </p>
          <p className="text-lg md:text-xl mb-10 opacity-90">
            and inspiring faith in Mtubatuba, KwaZulu-Natal
          </p>
        </div>

        {/* Enhanced Achievement Badges */}
        <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            {achievements.map((item, index) => (
              <span
                key={item.text}
                className={`group relative bg-white bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-full border border-white border-opacity-30 transform transition-all duration-300 hover:scale-110 hover:bg-opacity-30 cursor-pointer font-medium ${item.color} hover:text-white hover:border-opacity-50 hover:shadow-lg`}
                style={{
                  animationDelay: `${index * 200}ms`,
                  animation: `fadeInUp 0.6s ease-out ${index * 200}ms both`
                }}
              >
                <span className="relative z-10">{item.text}</span>
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm bg-gradient-to-r from-yellow-400 to-orange-500"></div>
              </span>
            ))}
          </div>
        </div>

        {/* Call to Action - Optional */}
        <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} mt-8`}>
          <button className="group relative px-8 py-3 bg-white bg-opacity-15 text-white font-semibold rounded-full border border-white border-opacity-30 hover:bg-opacity-25 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
            <span className="relative z-10">Learn More About Us</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      {/* Bottom gradient overlay for smoother transition */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-red-700 to-transparent opacity-50"></div>
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}