import React, { useEffect, useState } from "react";
import { client, urlFor } from "../../lib/sanityClient";
import { Target, Heart } from "lucide-react";

export default function MissionVision() {
  const [data, setData] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "missionVision"][0]{
          missionTitle,
          missionText,
          visionTitle,
          visionText
        }`
      )
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return null; // or a loading spinner

  return (
    <div className="grid md:grid-cols-2 gap-8 mb-16">
      {/* Mission Card */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-4">
          <Target className="h-8 w-8 text-red-600 mr-3" />
          <h2 className="text-2xl font-bold text-gray-800">
            {data.missionTitle}
          </h2>
        </div>
        <p className="text-gray-600 leading-relaxed">{data.missionText}</p>
      </div>

      {/* Vision Card */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-4">
          <Heart className="h-8 w-8 text-red-600 mr-3" />
          <h2 className="text-2xl font-bold text-gray-800">
            {data.visionTitle}
          </h2>
        </div>
        <p className="text-gray-600 leading-relaxed">{data.visionText}</p>
      </div>
    </div>
  );
}
