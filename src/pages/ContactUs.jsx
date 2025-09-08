import React, { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  School, 
  FileText, 
  DollarSign, 
  Calendar,
  Send,
  CheckCircle,
  ArrowRight,
  Facebook,
  Instagram,
  Twitter,
  MessageCircle,
  Map,
  User,
  Building,
  GraduationCap,
  Users
} from "lucide-react";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    inquiryType: 'general',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        inquiryType: 'general',
        message: ''
      });
      setTimeout(() => setIsSubmitted(false), 4000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "Main Office: 035 550 3144 ",
        
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      hoverColor: "hover:bg-blue-100"
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        "kccschool@telkomsa.net"
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      hoverColor: "hover:bg-purple-100"
    },
    {
      icon: MapPin,
      title: "Physical Address",
      details: [
        "59 Salinga Road",
        "Mtubatuba, 3935",
        "KwaZulu-Natal, South Africa"
      ],
      color: "from-green-500 to-teal-500",
      bgColor: "bg-green-50",
      hoverColor: "hover:bg-green-100"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Friday: 7:30 AM - 4:00 PM",
        
      ],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      hoverColor: "hover:bg-orange-100"
    }
  ];

  const quickActions = [
    { 
      title: "Schedule a Visit", 
      icon: School, 
      action: "Book a tour of our facilities",
      color: "text-blue-600 bg-blue-100"
    },
    { 
      title: "Apply Now", 
      icon: FileText, 
      action: "Start your application process",
      color: "text-green-600 bg-green-100"
    },
    { 
      title: "Fee Information", 
      icon: DollarSign, 
      action: "Get detailed fee structure",
      color: "text-purple-600 bg-purple-100"
    },
    { 
      title: "Academic Calendar", 
      icon: Calendar, 
      action: "View important dates",
      color: "text-orange-600 bg-orange-100"
    }
  ];

  const departments = [
    { name: "Admissions Office", icon: GraduationCap, contact: "admissions@kingdomcc.co.za" },
    { name: "Academic Department", icon: Building, contact: "academics@kingdomcc.co.za" },
    { name: "Student Affairs", icon: Users, contact: "students@kingdomcc.co.za" },
    { name: "Principal's Office", icon: User, contact: "principal@kingdomcc.co.za" }
  ];

  const faqs = [
    "What are the admission requirements for different grades?",
    "What is the complete fee structure and payment options?",
    "Do you provide school transportation services?",
    "What extracurricular activities and sports are available?",
    "What is the student-to-teacher ratio?",
    "How do I schedule a school visit or tour?"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 mt-10 pt-20 ">
      {/* Enhanced Hero Section */}
      <div className="relative bg-gradient-to-r from-red-700 via-red-600 to-red-500 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white bg-opacity-5 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-white border-opacity-20 rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-15 rounded-full mb-6">
            <MessageCircle className="w-10 h-10" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl opacity-95 max-w-3xl mx-auto leading-relaxed">
            We're here to help and answer any questions you might have about Kingdom Christian College
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        
        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <div key={index} className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 overflow-hidden border border-gray-100 ${info.hoverColor}`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                <div className="relative p-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${info.bgColor} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-gray-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm leading-relaxed">{detail}</p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Form and Map Section */}
        <div className=" gap-12">
          
          {/* Enhanced Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg mr-4">
                <Send className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Send us a Message</h2>
            </div>
            
            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-xl">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 mr-3 text-green-600" />
                  <div>
                    <p className="font-semibold">Message Sent Successfully!</p>
                    <p className="text-sm text-green-700">We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="+27 XX XXX XXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Inquiry Type</label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="admissions">Admissions</option>
                    <option value="academics">Academics</option>
                    <option value="fees">Fees & Finance</option>
                    <option value="facilities">Facilities</option>
                    <option value="transport">Transportation</option>
                    <option value="extracurricular">Extracurricular Activities</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  placeholder="Brief subject of your inquiry"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 resize-vertical bg-gray-50 focus:bg-white"
                  placeholder="Please describe your inquiry or question in detail..."
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className={`w-full bg-gradient-to-r from-red-600 to-red-500 text-white font-bold py-4 px-6 rounded-xl hover:from-red-700 hover:to-red-600 transform transition-all duration-200 hover:scale-105 focus:ring-4 focus:ring-red-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center ${isLoading ? 'animate-pulse' : ''}`}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </div>
                )}
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}