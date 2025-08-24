import React from "react";

import HeroSection from "../componets/about/HeroSection";
import MissionVision from "../componets/about/MissionVision";
import AchievementHighlight from "../componets/about/AchievementHighlight";
import CoreValues from "../componets/about/CoreValues";
import OurStory from "../componets/about/OurStory";
import Principals from "../componets/about/Principals";
import SportsActivities from "../componets/about/SportsActivities";
import Accreditation from "../componets/about/Accreditation";
import Facilities from "../componets/about/Facilities";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 mt-10 pt-20">
      <HeroSection />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <MissionVision />
        <AchievementHighlight />
        <CoreValues />
        <OurStory />
        <Principals />
        {/* <SportsActivities /> */}
        <Accreditation />
        <Facilities />
      </div>
    </div>
  );
}
