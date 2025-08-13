import React from 'react';
import { Phone, Mail, MapPin, Calendar, Users, BookOpen, Trophy, Heart, ChevronRight, Star, Home, Bus, Camera } from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Academic Excellence",
      description: "Quality Christian education from Grade R to 12 with a focus on both academic achievement and character development."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Christian Values",
      description: "Nurturing students in a Christ-centered environment where faith, love, and service are at the heart of learning."
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Boarding Facilities",
      description: "Safe, comfortable boarding house accommodation with dedicated house parents providing a home away from home."
    },
    {
      icon: <Bus className="w-8 h-8" />,
      title: "School Transport",
      description: "Convenient and safe transport services available for day scholars from various locations around KwaZulu-Natal."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Small Class Sizes",
      description: "Personalized attention with small class sizes ensuring every student receives the support they need to thrive."
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Holistic Development",
      description: "Developing the whole child through academics, sports, arts, and spiritual growth for well-rounded individuals."
    }
  ];

  const ImagePlaceholder = ({ width = "w-full", height = "h-64", label, className = "" }) => (
    <div className={`${width} ${height} bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex flex-col items-center justify-center text-gray-600 ${className}`}>
      <Camera className="w-12 h-12 mb-2 text-gray-400" />
      <p className="text-sm font-medium text-center px-4">{label}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Added top padding to account for fixed navbar */}
      <section id="home" className="pt-32 bg-gradient-to-br from-red-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Welcome to 
                <span className="text-red-700"> Kingdom Christian College</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl">
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
            
            {/* Hero Image */}
            <div className="lg:order-last">
              <ImagePlaceholder 
                height="h-96" 
                label="School Campus Main Building or Students in Classroom"
                className="shadow-2xl"
              />
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-700">Grade R-12</div>
              <div className="text-gray-600">Complete Education</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-700">Boarding &<br/>Day Options</div>
              <div className="text-gray-600">Flexible Learning</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-700">Experienced</div>
              <div className="text-gray-600">Teachers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-700">Christ-Centered</div>
              <div className="text-gray-600">Education</div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Life at Kingdom Christian College</h2>
            <p className="text-lg text-gray-600">Experience our vibrant school community</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <ImagePlaceholder 
              height="h-64" 
              label="Students in Chapel/Assembly"
              className="hover:shadow-lg transition-shadow duration-300"
            />
            <ImagePlaceholder 
              height="h-64" 
              label="Sports Activities/Field Day"
              className="hover:shadow-lg transition-shadow duration-300"
            />
            <ImagePlaceholder 
              height="h-64" 
              label="Students in Science Lab"
              className="hover:shadow-lg transition-shadow duration-300"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Kingdom Christian College?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to providing quality Christian education that prepares students for success in life and service to God.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-white hover:shadow-lg transition-shadow">
                <div className="text-red-700 mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Boarding & Transport Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Boarding & Transport Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Flexible accommodation options to suit your family's needs
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Boarding House */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="mb-6">
                <ImagePlaceholder 
                  height="h-48" 
                  label="Boarding House Dormitory/Common Room"
                  className="mb-6"
                />
                <div className="flex items-center">
                  <div className="bg-red-700 p-3 rounded-lg mr-4">
                    <Home className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Boarding House</h3>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                Our boarding facilities provide a safe, nurturing environment where students can focus on their studies while developing independence and lifelong friendships.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-red-700 mr-2 mt-0.5 flex-shrink-0" />
                  Comfortable dormitory accommodation
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-red-700 mr-2 mt-0.5 flex-shrink-0" />
                  Dedicated house parents providing pastoral care
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-red-700 mr-2 mt-0.5 flex-shrink-0" />
                  Nutritious meals and supervised study time
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-red-700 mr-2 mt-0.5 flex-shrink-0" />
                  Weekend activities and spiritual development programs
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-red-700 mr-2 mt-0.5 flex-shrink-0" />
                  24/7 security and medical support
                </li>
              </ul>
              <button className="mt-6 bg-red-700 text-white px-6 py-3 rounded-lg hover:bg-red-800 transition-colors">
                Learn More About Boarding
              </button>
            </div>

            {/* Transport Services */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="mb-6">
                <ImagePlaceholder 
                  height="h-48" 
                  label="School Bus/Transport Vehicle"
                  className="mb-6"
                />
                <div className="flex items-center">
                  <div className="bg-blue-600 p-3 rounded-lg mr-4">
                    <Bus className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">School Transport</h3>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                Safe and reliable transport services for day scholars, making quality Christian education accessible to families across the region.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  Modern, well-maintained school buses
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  Experienced, licensed drivers
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  Multiple routes covering Mthubathuba
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  Competitive rates and flexible payment options
                </li>
              </ul>
              <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                View Transport Routes
              </button>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 mb-6">
              Whether your child boards with us or travels daily, we ensure they receive the same quality care and education.
            </p>
            <button className="bg-gray-900 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors">
              Contact Us for More Information
            </button>
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section id="academics" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Academic Programs
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive education from foundation to matriculation
            </p>
          </div>
          
          {/* Academic Programs with Images */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <ImagePlaceholder 
                height="h-40" 
                label="Foundation Phase Students Learning"
                className="mb-6"
              />
              <h3 className="text-2xl font-bold text-red-700 mb-4">Foundation Phase</h3>
              <p className="text-gray-600 mb-4">Grade R - 3</p>
              <p className="text-gray-700">
                Building strong foundations in literacy, numeracy, and Christian values through play-based learning and structured activities.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <ImagePlaceholder 
                height="h-40" 
                label="Intermediate Phase Classroom"
                className="mb-6"
              />
              <h3 className="text-2xl font-bold text-red-700 mb-4">Intermediate Phase</h3>
              <p className="text-gray-600 mb-4">Grade 4 - 6</p>
              <p className="text-gray-700">
                Developing critical thinking skills while maintaining strong emphasis on character development and biblical principles.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <ImagePlaceholder 
                height="h-40" 
                label="Senior Phase/Matric Students"
                className="mb-6"
              />
              <h3 className="text-2xl font-bold text-red-700 mb-4">Senior Phase</h3>
              <p className="text-gray-600 mb-4">Grade 7 - 12</p>
              <p className="text-gray-700">
                Preparing students for higher education and careers while deepening their faith and leadership abilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teachers & Staff Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Dedicated Team
            </h2>
            <p className="text-xl text-gray-600">
              Experienced educators committed to your child's success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ImagePlaceholder 
                height="h-96" 
                label="Teachers/Staff Group Photo or Principal"
              />
            </div>
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

    
    </div>
  );
};

export default HomePage;