import React, { useState } from 'react';
import { ChevronRight, Calendar, FileText, Users, Award, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

const AdmissionsSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedGrade, setSelectedGrade] = useState('');

  const admissionSteps = [
    {
      title: "Submit Application",
      description: "Complete our comprehensive online application form with all required documents.",
      icon: FileText,
      details: ["Application form", "Birth certificate", "Previous school reports", "Passport photos"]
    },
    {
      title: "Assessment & Interview",
      description: "Schedule an assessment and meet with our admissions team.",
      icon: Users,
      details: ["Academic assessment", "Parent interview", "Student interview", "Campus tour"]
    },
    {
      title: "Review & Decision",
      description: "Our team reviews your application and provides admission decision.",
      icon: Award,
      details: ["Application review", "Academic evaluation", "Admission decision", "Welcome package"]
    }
  ];

  const gradeOptions = [
    { value: "pre-primary", label: "Pre-Primary (RRR-RR)", ages: "Ages 4-5" },
    { value: "primary", label: "Primary Phase (R-3)", ages: "Ages 5-9" },
    { value: "intermediate", label: "Intermediate Phase (4-6)", ages: "Ages 10-12" },
    { value: "senior", label: "Senior Phase (7-9)", ages: "Ages 13-15" },
    { value: "fet", label: "FET Phase (10-12)", ages: "Ages 16-18" }
  ];

  const requirements = [
    "Completed application form",
    "Birth certificate (certified copy)",
    "Previous academic records",
    "Immunization records",
    "Two passport-sized photographs",
    "Transfer letter (if applicable)"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Join Our Academic Excellence
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Begin your child's journey toward academic excellence and Christian character development at Kingdom Christian College
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
                <CheckCircle className="w-4 h-4 text-green-300" />
                <span>100% Pass Rate</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
                <CheckCircle className="w-4 h-4 text-green-300" />
                <span>Grade R to 12</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
                <CheckCircle className="w-4 h-4 text-green-300" />
                <span>University Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Quick Application Form */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-16 border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Start Your Application</h2>
            <p className="text-gray-600">Select your child's grade level to begin the admission process</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Select Grade Level
              </label>
              <div className="space-y-3">
                {gradeOptions.map((option) => (
                  <div
                    key={option.value}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                      selectedGrade === option.value
                        ? 'border-blue-500 bg-blue-50 shadow-md'
                        : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                    }`}
                    onClick={() => setSelectedGrade(option.value)}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-semibold text-gray-800">{option.label}</div>
                        <div className="text-sm text-gray-600">{option.ages}</div>
                      </div>
                      <div className={`w-4 h-4 rounded-full border-2 ${
                        selectedGrade === option.value ? 'bg-blue-500 border-blue-500' : 'border-gray-300'
                      }`}>
                        {selectedGrade === option.value && (
                          <div className="w-full h-full bg-white rounded-full scale-50"></div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Required Documents</h3>
              <div className="space-y-3">
                {requirements.map((req, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{req}</span>
                  </div>
                ))}
              </div>

              <button 
                className={`w-full mt-6 py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  selectedGrade 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                disabled={!selectedGrade}
              >
                Continue Application
                <ChevronRight className="inline-block w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Admission Process Steps */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Admission Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our streamlined three-step admission process ensures a smooth transition for your child
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {admissionSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-2 ${
                    activeStep === index ? 'border-blue-500 bg-blue-50' : 'border-gray-100 hover:border-blue-200'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      activeStep === index ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="ml-3">
                      <div className="text-sm font-semibold text-blue-600">Step {index + 1}</div>
                      <h3 className="font-bold text-gray-800">{step.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  
                  {activeStep === index && (
                    <div className="space-y-2 animate-fadeIn">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl text-white p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Need Assistance?</h2>
            <p className="text-blue-100">Our admissions team is here to help you through every step of the process</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-blue-100">+27 11 123 4567</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-blue-100">admissions@kcc.co.za</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="text-blue-100">Schedule a campus tour</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg">
              Schedule Campus Visit
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default AdmissionsSection;