import React from 'react';
import { BookOpen, Award, Target, Users, Calendar, Star, Trophy, GraduationCap, FileText, Clock, CheckCircle, TrendingUp, Brain, Globe, Calculator, Beaker } from 'lucide-react';

export default function AcademicPage() {
  return (
    <div className="min-h-screen bg-gray-50 mt-10 pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 to-indigo-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Academic Excellence</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Comprehensive education from Pre-Primary to Matric with outstanding results
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">CAPS Curriculum</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">NSC Matric</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">100% Pass Rate</span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">University Ready</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Achievement Highlight
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg p-8 mb-16 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white bg-opacity-20 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Trophy className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">100% Matric Pass Rate</h2>
            <p className="text-lg md:text-xl opacity-90 mb-6">
              Every student who completed their National Senior Certificate with us has successfully passed, 
              with many achieving bachelor's degree passes for university entrance.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm opacity-90">Pass Rate</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="text-2xl font-bold">50%+</div>
                <div className="text-sm opacity-90">Average Pass Mark</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="text-2xl font-bold">85%</div>
                <div className="text-sm opacity-90">Bachelor Pass Rate</div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Academic Programs by Phase */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Academic Programs by Phase</h2>
          
          <div className="space-y-8">
            {/* Pre-Primary */}
            <div className="border-l-4 border-red-500 pl-6 bg-red-50 p-6 rounded-r-lg">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="text-2xl font-semibold text-red-600">Pre-Primary (RRR)</h3>
                <span className="ml-auto bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">Ages 4-5</span>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-gray-800">Learning Areas:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Early literacy and phonics</li>
                    <li>Number concepts and counting</li>
                    <li>Life skills and social development</li>
                    <li>Creative arts and music</li>
                    <li>Physical development and health</li>
                    <li>Beginning writing skills</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-gray-800">Key Focus Areas:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Play-based learning approach</li>
                    <li>Social and emotional development</li>
                    <li>School readiness preparation</li>
                    <li>Christian values introduction</li>
                    <li>Fine and gross motor skills</li>
                    <li>Communication and language skills</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Foundation Phase */}
            <div className="border-l-4 border-blue-500 pl-6 bg-blue-50 p-6 rounded-r-lg">
              <div className="flex items-center mb-4">
                <BookOpen className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-semibold text-blue-600">Foundation Phase (Grade R-3)</h3>
                <span className="ml-auto bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">Ages 5-9</span>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-gray-800">Core Subjects:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Home Language (English/Zulu)</li>
                    <li>First Additional Language</li>
                    <li>Mathematics</li>
                    <li>Life Skills</li>
                    <li>Creative Arts</li>
                    <li>Physical Education</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-gray-800">Assessment Methods:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Continuous assessment</li>
                    <li>Portfolio development</li>
                    <li>Practical demonstrations</li>
                    <li>Oral presentations</li>
                    <li>Creative projects</li>
                    <li>Progress reports (4 times per year)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Intermediate Phase */}
            <div className="border-l-4 border-green-500 pl-6 bg-green-50 p-6 rounded-r-lg">
              <div className="flex items-center mb-4">
                <Calculator className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-semibold text-green-600">Intermediate Phase (Grade 4-6)</h3>
                <span className="ml-auto bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">Ages 9-12</span>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-gray-800">Subject Areas:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Home Language</li>
                    <li>First Additional Language</li>
                    <li>Mathematics</li>
                    <li>Natural Sciences and Technology</li>
                    <li>Social Sciences (History & Geography)</li>
                    <li>Life Orientation</li>
                    <li>Economic and Management Sciences</li>
                    <li>Arts and Culture</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-gray-800">Skills Development:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Critical thinking and problem-solving</li>
                    <li>Research and inquiry skills</li>
                    <li>Technology integration</li>
                    <li>Independent learning</li>
                    <li>Group work and collaboration</li>
                    <li>Presentation and communication</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Senior Phase */}
            <div className="border-l-4 border-purple-500 pl-6 bg-purple-50 p-6 rounded-r-lg">
              <div className="flex items-center mb-4">
                <Beaker className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-2xl font-semibold text-purple-600">Senior Phase (Grade 7-9)</h3>
                <span className="ml-auto bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-semibold">Ages 12-15</span>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-gray-800">Compulsory Subjects:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Home Language</li>
                    <li>First Additional Language</li>
                    <li>Mathematics</li>
                    <li>Natural Sciences</li>
                    <li>Social Sciences</li>
                    <li>Life Orientation</li>
                    <li> Agricultural Sciences</li>
                    <li>Technology</li>
                    <li>Arts and Culture</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-gray-800">Preparation Focus:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>FET Phase readiness</li>
                    <li>Subject choice guidance</li>
                    <li>Study skills development</li>
                    <li>Career exploration</li>
                    <li>Leadership opportunities</li>
                    <li>Academic rigor increase</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FET Phase */}
            <div className="border-l-4 border-indigo-500 pl-6 bg-indigo-50 p-6 rounded-r-lg">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-8 w-8 text-indigo-600 mr-3" />
                <h3 className="text-2xl font-semibold text-indigo-600">FET Phase (Grade 10-12)</h3>
                <span className="ml-auto bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-semibold">Ages 15-18</span>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-gray-800">Core Subjects (All Students):</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Home Language (English)</li>
                    <li>First Additional Language (Zulu)</li>
                    <li>Mathematics or Mathematical Literacy</li>
                    <li>Life Orientation</li>
                  </ul>
                  <h4 className="font-semibold mb-2 mt-4 text-gray-800">Elective Options:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Physical Sciences</li>
                    <li>Life Sciences</li>
                    <li>Accounting</li>
                    <li>Business Studies</li>
                    <li>Economics</li>
                    <li>Geography</li>
                    <li>History</li>
                    <li>Tourism</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-gray-800">University Preparation:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>NSC qualification preparation</li>
                    <li>University application guidance</li>
                    <li>Bursary and scholarship assistance</li>
                    <li>Career counseling sessions</li>
                    <li>Study method workshops</li>
                    <li>Exam preparation strategies</li>
                  </ul>
                  <h4 className="font-semibold mb-2 mt-4 text-gray-800">Assessment:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Continuous Assessment (25%)</li>
                    <li>Final NSC Examinations (75%)</li>
                    <li>Portfolio assessments</li>
                    <li>Practical assessments</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Accreditation & Quality Assurance */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-16">
          <div className="text-center mb-8">
            <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800">Accreditation & Quality Assurance</h2>
            <p className="text-gray-600 mt-2">Maintaining the highest educational standards</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center bg-white rounded-lg p-6 shadow-md">
              <CheckCircle className="h-10 w-10 text-blue-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">CAPS Curriculum</h3>
              <p className="text-gray-600 text-sm">Following the official Curriculum Assessment Policy Statements as prescribed by the Department of Basic Education.</p>
            </div>
            
            <div className="text-center bg-white rounded-lg p-6 shadow-md">
              <GraduationCap className="h-10 w-10 text-blue-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">NSC Certification</h3>
              <p className="text-gray-600 text-sm">Authorized to offer the National Senior Certificate, ensuring our graduates meet national university entrance requirements.</p>
            </div>
            
            <div className="text-center bg-white rounded-lg p-6 shadow-md">
              <Star className="h-10 w-10 text-blue-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Department Registration</h3>
              <p className="text-gray-600 text-sm">Fully registered with the KwaZulu-Natal Department of Education, ensuring compliance with all educational standards and regulations.</p>
            </div>
          </div>
        </div>

        {/* Academic Support Services */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Academic Support Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Brain className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Remedial Support</h3>
              <p className="text-gray-600 text-sm">Extra help for students who need additional support in specific subjects or learning areas.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Enrichment Programs</h3>
              <p className="text-gray-600 text-sm">Advanced learning opportunities for gifted students to reach their full potential.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Peer Tutoring</h3>
              <p className="text-gray-600 text-sm">Senior students mentor younger ones, fostering community and academic excellence.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Target className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Career Guidance</h3>
              <p className="text-gray-600 text-sm">Professional counseling to help students make informed decisions about their future careers.</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">After Care Program</h3>
              <p className="text-gray-600 text-sm">Safe, supervised care for students after school hours with homework assistance and activities.</p>
            </div>
          </div>
        </div>

        {/* Learning Resources & Facilities */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Learning Resources & Facilities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-red-600">Academic Facilities</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>Modern, well-equipped classrooms with digital boards</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>Fully equipped science laboratories for Physics, Chemistry, and Biology</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>Computer laboratory with high-speed internet access</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>Comprehensive library with digital and physical resources</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>Mathematics resource center</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>Art and music studios</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-red-600">Learning Resources</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>Current CAPS-aligned textbooks for all subjects</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>Online learning platforms and educational software</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>Digital library with e-books and research databases</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>Educational videos and multimedia content</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>Practice examination papers and study guides</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>Christian educational materials and devotional resources</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}