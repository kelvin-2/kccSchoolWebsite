import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Calendar, Users, BookOpen, Trophy, Heart, ChevronRight, Star, Home, Bus } from 'lucide-react';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', href: '#home', active: true },
    { name: 'About Us', href: '#about' },
    { name: 'Academics', href: '#academics' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Activities', href: '#activities' },
    { name: 'Contact', href: '#contact' }
  ];

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

  const testimonials = [
    {
      name: "Sarah Mthembu",
      role: "Parent",
      content: "KCC has provided my children with not just excellent education, but also strong moral foundation. The teachers truly care about each student's growth."
    },
    {
      name: "David Nkomo",
      role: "Alumni Parent",
      content: "Both my children graduated from KCC and are now successful in their careers. The values they learned here shaped who they are today."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-red-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">KCC</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-red-700">Kingdom Christian College</h1>
                <p className="text-sm text-gray-600">Academic Excellence • Grade R to 12</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    item.active
                      ? 'bg-red-700 text-white'
                      : 'text-gray-700 hover:text-red-700 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                Apply Now
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-red-700"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
                {navigationItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      item.active
                        ? 'bg-red-700 text-white'
                        : 'text-gray-700 hover:text-red-700 hover:bg-white'
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
                <button className="w-full mt-4 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-red-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to 
              <span className="text-red-700"> Kingdom Christian College</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Nurturing minds, building character, and inspiring faith in Mthethwa, KwaZulu-Natal
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-700 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-red-800 transition-colors flex items-center justify-center">
                Learn More <ChevronRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-red-700 text-red-700 px-8 py-3 rounded-lg text-lg font-medium hover:bg-red-700 hover:text-white transition-colors">
                Schedule a Visit
              </button>
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

      {/* Features Section */}
      <section id="about" className="py-20 bg-white">
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
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow">
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
              <div className="flex items-center mb-6">
                <div className="bg-red-700 p-3 rounded-lg mr-4">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Boarding House</h3>
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
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 p-3 rounded-lg mr-4">
                  <Bus className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">School Transport</h3>
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
                  Multiple routes covering KwaZulu-Natal
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  GPS tracking for parent peace of mind
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
      <section id="academics" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Academic Programs
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive education from foundation to matriculation
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-red-700 mb-4">Foundation Phase</h3>
              <p className="text-gray-600 mb-4">Grade R - 3</p>
              <p className="text-gray-700">
                Building strong foundations in literacy, numeracy, and Christian values through play-based learning and structured activities.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-red-700 mb-4">Intermediate Phase</h3>
              <p className="text-gray-600 mb-4">Grade 4 - 6</p>
              <p className="text-gray-700">
                Developing critical thinking skills while maintaining strong emphasis on character development and biblical principles.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-red-700 mb-4">Senior Phase</h3>
              <p className="text-gray-600 mb-4">Grade 7 - 12</p>
              <p className="text-gray-700">
                Preparing students for higher education and careers while deepening their faith and leadership abilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Families Say
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg">"{testimonial.content}"</p>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-red-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-red-100">
              Ready to join our school community? We'd love to hear from you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center text-white">
              <Phone className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-red-100">+27 (0)XX XXX XXXX</p>
            </div>
            <div className="text-center text-white">
              <Mail className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-red-100">info@kingdomchristian.co.za</p>
            </div>
            <div className="text-center text-white">
              <MapPin className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-red-100">Mthethwa, KwaZulu-Natal</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-white text-red-700 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-50 transition-colors">
              Schedule a School Visit
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-red-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">KCC</span>
                </div>
                <span className="text-lg font-bold">Kingdom Christian College</span>
              </div>
              <p className="text-gray-400">
                Excellence in Christian education since our founding.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#academics" className="text-gray-400 hover:text-white transition-colors">Academics</a></li>
                <li><a href="#admissions" className="text-gray-400 hover:text-white transition-colors">Admissions</a></li>
                <li><a href="#activities" className="text-gray-400 hover:text-white transition-colors">Activities</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Mthethwa, KwaZulu-Natal</li>
                <li>+27 (0)XX XXX XXXX</li>
                <li>info@kingdomchristian.co.za</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">School Hours</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Monday - Friday: 7:00 AM - 3:00 PM</li>
                <li>Office Hours: 7:30 AM - 4:00 PM</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Kingdom Christian College. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;