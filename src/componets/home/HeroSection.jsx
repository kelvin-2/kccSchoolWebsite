import React, { useEffect, useState } from "react";
import { client, urlFor } from "../../lib/sanityClient";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  const [hero, setHero] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "heroSection"][0]{
          title,
          subtitle,
          image
        }`
      )
      .then((data) => setHero(data))
      .catch(console.error);
  }, []);

  if (!hero) return <p className="text-center py-20">Loading...</p>;

  return (
    <section
      id="home"
      className="pt-32 bg-gradient-to-br from-red-50 via-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {hero.title && (
              <>
                Welcome to{" "}
                <span className="text-red-700">{hero.title}</span>
              </>
            )}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            {hero.subtitle}
          </p>
        </div>

        {/* Image */}
        {hero.image ? (
          <img
            src={urlFor(hero.image).url()}
            alt={hero.title}
            className="h-96 shadow-2xl mx-auto rounded-lg"
          />
        ) : (
          <div className="h-96 flex items-center justify-center bg-gray-200 rounded-lg shadow-2xl">
            <span className="text-gray-500">No Image Added</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
