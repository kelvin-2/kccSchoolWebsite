import React from 'react';
import HeroSection from '../componets/home/HeroSection';
import StatsSection from '../componets/home/StatsSection';
import ImageGallery from '../componets/home/ImageGallery';
import FeaturesSection from '../componets/home/FeaturesSection';
import BoardingTransportSection from '../componets/home/BoardingTransportSection';
import AcademicProgramsSection from '../componets/home/AcademicProgramsSection';
import TeachersSection from '../componets/home/TeachersSection';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <StatsSection />
      {/* <ImageGallery /> */}
      <FeaturesSection />
      <BoardingTransportSection />
      <AcademicProgramsSection />
      <TeachersSection />
    </div>
  );
};

export default HomePage;
