import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Menu, X, BookOpen, Award, Calendar,
  Home, Info, GraduationCap, UserCheck, Activity, Contact
} from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();
  
  // Determine active section based on current route
  const getActiveSection = () => {
    const path = location.pathname;
    if (path === '/' || path === '/home') return 'home';
    if (path.startsWith('/about')) return 'about';
    if (path.startsWith('/academics')) return 'academics';
    if (path.startsWith('/admissions')) return 'admissions';
    if (path.startsWith('/activities')) return 'activities';
    if (path.startsWith('/contact')) return 'contact';
    return 'home';
  };

  const handleNavigation = (item) => {
    if (item.path) {
      navigate(item.path);
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home', path: "/", icon: Home },
    { id: 'about', label: 'About Us', path: "/about", icon: Info },
    { id: 'academics', label: 'Academics', path: "/academics", icon: GraduationCap },
    { id: 'admissions', label: 'Admissions', path: "/admissions", icon: UserCheck },
    { id: 'activities', label: 'Activities', path: "/activities", icon: Activity },
    { id: 'contact', label: 'Contact', path: "/contact", icon: Contact }
  ];

  const activeSection = getActiveSection();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-2xl border-b border-red-100'
          : 'bg-white shadow-xl border-b-2 border-red-900'
      }`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4 lg:py-6">

          {/* Logo Section - More spacious */}
          <div
            className="flex items-center gap-3 sm:gap-4 lg:gap-6 cursor-pointer group flex-shrink-0"
            onClick={() => handleNavigation({ id: 'home', path: '/' })}
          >
            {/* Logo Icon */}
            <div className="relative flex-shrink-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-18 lg:h-18 bg-gradient-to-br from-red-900 via-red-800 to-red-700 rounded-xl flex items-center justify-center text-white text-sm sm:text-lg lg:text-xl font-bold shadow-2xl group-hover:scale-105 transition-all duration-300 border-3 border-white ring-2 ring-red-100">
                <span className="font-extrabold tracking-tight">KCC</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg ring-2 ring-white">
                <BookOpen className="h-2 w-2 sm:h-2.5 sm:w-2.5 lg:h-3 lg:w-3 text-white" />
              </div>
            </div>

            {/* School Name - Better Typography */}
            <div className="hidden sm:block min-w-0 flex-1">
              <h1 className="text-red-900 text-lg sm:text-xl lg:text-2xl xl:text-2xl font-bold leading-tight group-hover:text-red-800 transition-colors duration-300 tracking-tight">
                Kingdom Christian College
              </h1>
              <p className="text-gray-600 text-xs sm:text-sm lg:text-sm font-medium flex items-center gap-2 mt-1">
                <Award className="h-3 w-3 sm:h-4 sm:w-4 lg:h-4 lg:w-4 text-blue-600 flex-shrink-0" />
                <span className="whitespace-nowrap">Academic Excellence</span>
                <span className="hidden lg:inline">•</span>
                <span className="whitespace-nowrap">Grade R to 12</span>
              </p>
            </div>
          </div>

          {/* Desktop Navigation - Better Spacing */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6 flex-shrink-0">
            <nav>
              <ul className="flex gap-1 xl:gap-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => handleNavigation(item)}
                        className={`flex items-center gap-2 font-semibold py-2.5 px-3 xl:px-4 rounded-lg border-2 transition-all duration-300 text-sm xl:text-base whitespace-nowrap ${
                          isActive
                            ? 'bg-red-900 text-white border-red-900 shadow-lg transform scale-105'
                            : 'text-gray-700 border-transparent hover:bg-blue-50 hover:text-blue-900 hover:border-blue-200 hover:shadow-md'
                        }`}
                      >
                        <Icon className="h-4 w-4 flex-shrink-0" />
                        <span>{item.label}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* CTA Button - More Prominent */}
            <button
              onClick={() => handleNavigation({ id: 'admissions', path: '/admissions' })}
              className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white px-4 xl:px-6 py-2.5 rounded-lg font-bold hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 text-sm xl:text-base whitespace-nowrap transform hover:scale-105"
            >
              <Calendar className="h-4 w-4 flex-shrink-0" />
              Apply Now
            </button>
          </div>

          {/* Mobile menu button - Better Design */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl hover:bg-red-50 transition-all duration-300 shadow-lg border-2 border-gray-200 hover:border-red-300 bg-white flex-shrink-0"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-red-900" />
            ) : (
              <Menu className="h-6 w-6 text-red-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation - Enhanced */}
        {isMenuOpen && (
          <div className="lg:hidden pb-6 px-2">
            <div className="bg-gradient-to-br from-white via-gray-50 to-blue-50 rounded-2xl shadow-2xl border-2 border-gray-100 overflow-hidden">
              
              {/* Mobile School Name */}
              <div className="sm:hidden px-6 py-4 bg-gradient-to-r from-red-900 to-red-800 text-white">
                <h2 className="text-lg font-bold leading-tight">Kingdom Christian College</h2>
                <p className="text-red-100 text-sm flex items-center gap-2 mt-1">
                  <Award className="h-4 w-4" />
                  Academic Excellence • Grade R to 12
                </p>
              </div>

              <nav className="p-4">
                <ul className="flex flex-col gap-2">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;
                    return (
                      <li key={item.id}>
                        <button
                          onClick={() => handleNavigation(item)}
                          className={`w-full flex items-center gap-3 text-left font-semibold py-3 px-4 rounded-xl transition-all duration-300 ${
                            isActive
                              ? 'bg-red-900 text-white shadow-lg transform scale-105'
                              : 'text-gray-700 hover:bg-blue-100 hover:text-blue-900 hover:shadow-md'
                          }`}
                        >
                          <Icon className="h-5 w-5 flex-shrink-0" />
                          <span>{item.label}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
                
                {/* Mobile CTA */}
                <div className="pt-4 mt-4 border-t border-gray-200">
                  <button
                    onClick={() => handleNavigation({ id: 'admissions', path: '/admissions' })}
                    className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-3 px-4 rounded-xl font-bold hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 transition-all duration-300 shadow-lg flex items-center justify-center gap-2 transform hover:scale-105"
                  >
                    <Calendar className="h-5 w-5" />
                    Apply Now
                  </button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;