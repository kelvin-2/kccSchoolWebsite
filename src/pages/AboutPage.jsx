import React from 'react';
import { Users, Award, Heart, MapPin, Phone, Mail, Calendar, Target, Shield, BookOpen, Clock, Star } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 mt-10 pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-800 to-red-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Kingdom Christian College</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Nurturing minds, building character, and inspiring faith in Mtubatuba, KwaZulu-Natal
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">Pre-Primary to Matric</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">CAPS Curriculum</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">100% Matric Pass Rate</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">Registered School</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-4">
              <Target className="h-8 w-8 text-red-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To provide quality Christian education that nurtures young minds, builds godly character, 
              and equips students with academic excellence while instilling biblical values and preparing 
              them to be leaders in their communities and beyond.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-4">
              <Heart className="h-8 w-8 text-red-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Our Vision</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To be a leading Christian educational institution that transforms lives through Christ-centered 
              learning, producing graduates who excel academically and demonstrate integrity, compassion, 
              and servant leadership in all aspects of life.
            </p>
          </div>
        </div>

        {/* Achievement Highlight */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg p-8 mb-16 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white bg-opacity-20 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Award className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">100% Matric Pass Rate</h2>
            <p className="text-lg md:text-xl opacity-90">
              We are proud of our outstanding academic achievement. Every student who completed their 
              National Senior Certificate with us has successfully passed, demonstrating our commitment 
              to academic excellence and individual student support.
            </p>
            
            {/* Image placeholder */}
            <div className="mt-8 bg-white bg-opacity-10 rounded-lg p-8 border-2 border-dashed border-white border-opacity-30">
              <div className="text-center text-white opacity-70">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  📸
                </div>
                <p className="text-sm">Image placeholder: Matric graduation ceremony or celebrating students</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Core Values */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Academic Excellence</h3>
              <p className="text-gray-600">Committed to providing high-quality education that challenges and inspires students to reach their full potential.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Christian Values</h3>
              <p className="text-gray-600">Integrating biblical principles into all aspects of learning and daily life to build strong moral character.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">Building a supportive, inclusive environment where every student, family, and staff member feels valued and connected.</p>
            </div>
          </div>
        </div>

        {/* Our Story Section - New Content */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Story</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-red-600">Founded on Faith</h3>
              <p className="text-gray-700 mb-4">
                Kingdom Christian College was established with a vision to provide quality Christian education 
                in the heart of Mthethwa, KwaZulu-Natal. Our founders recognized the need for an educational 
                institution that would not only excel academically but also nurture the spiritual and moral 
                development of young people.
              </p>
              <p className="text-gray-700">
                From our humble beginnings, we have grown into a thriving educational community that serves 
                families throughout the region, maintaining our commitment to Christ-centered education while 
                achieving remarkable academic success.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-red-600">Growing Together</h3>
              <p className="text-gray-700 mb-4">
                What started as a small school with big dreams has evolved into a comprehensive educational 
                institution serving students from Pre-Primary through to Matric. Our growth has been guided 
                by our unwavering commitment to providing excellent education within a Christian framework.
              </p>
              <p className="text-gray-700">
                Today, we are proud to be a beacon of hope and excellence in our community, preparing 
                students not just for academic success, but for life as compassionate, principled leaders.
              </p>
            </div>
          </div>
          
          {/* Story Image placeholder */}
          <div className="mt-8 bg-blue-50 rounded-lg p-6 border-2 border-dashed border-blue-200">
            <div className="text-center text-blue-600">
              <div className="w-16 h-16 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center text-2xl">
                🏫
              </div>
              <p className="text-sm">Image placeholder: Historical photos or school development over the years</p>
            </div>
          </div>
        </div>

        {/* Sports & Extracurricular Activities */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Sports & Activities</h2>
          
          {/* Sports Image placeholder */}
          <div className="mb-8 bg-green-50 rounded-lg p-6 border-2 border-dashed border-green-200">
            <div className="text-center text-green-600">
              <div className="w-16 h-16 bg-green-100 rounded-lg mx-auto mb-4 flex items-center justify-center text-2xl">
                ⚽
              </div>
              <p className="text-sm">Image placeholder: Students participating in sports activities</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-red-600">Sports Programs</h3>
              <p className="text-gray-700 mb-4">
                We believe in developing the whole child through physical activity and team sports. 
                Our sports programs build character, teamwork, and healthy lifestyle habits.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Soccer and netball teams</li>
                <li>Athletics and track events</li>
                <li>Swimming programs</li>
                <li>Inter-school competitions</li>
                <li>Physical education classes</li>
                <li>Sports coaching and development</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-red-600">Extracurricular Activities</h3>
              <p className="text-gray-700 mb-4">
                Beyond academics and sports, we offer various activities to help students discover 
                their talents and develop their interests in a supportive Christian environment.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Choir and music programs</li>
                <li>Drama and performing arts</li>
                <li>Debate and public speaking</li>
                <li>Art and creative workshops</li>
                <li>Leadership development clubs</li>
                <li>Community service projects</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Accreditation & Quality Assurance */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <div className="text-center mb-8">
            <Shield className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800">Accreditation & Quality Assurance</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center bg-gray-50 rounded-lg p-6">
              <Award className="h-10 w-10 text-red-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">CAPS Curriculum</h3>
              <p className="text-gray-600">Following the official Curriculum Assessment Policy Statements as prescribed by the Department of Basic Education.</p>
            </div>
            
            <div className="text-center bg-gray-50 rounded-lg p-6">
              <BookOpen className="h-10 w-10 text-red-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">NSC Matric</h3>
              <p className="text-gray-600">Authorized to offer the National Senior Certificate, ensuring our graduates meet national standards.</p>
            </div>
            
            <div className="text-center bg-gray-50 rounded-lg p-6">
              <Shield className="h-10 w-10 text-red-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Registered School</h3>
              <p className="text-gray-600">Fully registered with the KwaZulu-Natal Department of Education, ensuring compliance with all educational standards.</p>
            </div>
          </div>
        </div>

        {/* Facilities & Environment */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Learning Environment</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-red-600">Modern Facilities</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>Well-equipped classrooms</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>Computer laboratory</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>Science laboratories</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>Library and media center</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>Sports facilities</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>Chapel for worship</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-red-600">Safe & Supportive</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>Secure campus environment</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>Small class sizes for personalized attention</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>Dedicated pastoral care</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>Student counseling services</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>Parent-teacher partnership</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>Christian mentorship programs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Location & Contact */}
        {/* <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Visit Our Campus</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-start mb-4">
                <MapPin className="h-6 w-6 text-red-600 mr-3 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Location</h3>
                  <p className="text-gray-600">
                    Mthethwa, KwaZulu-Natal<br />
                    South Africa
                  </p>
                </div>
              </div>
              
              <div className="flex items-start mb-4">
                <Calendar className="h-6 w-6 text-red-600 mr-3 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">School Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 7:30 AM - 2:30 PM<br />
                    Saturday: Sports & Activities (Optional)
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 text-center">Schedule a Campus Visit</h3>
                <p className="text-gray-600 text-center mb-4">
                  Experience our Christian learning environment firsthand. We'd love to show you around our campus and answer any questions about our programs.
                </p>
                <div className="text-center">
                  <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold">
                    Book a Visit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}