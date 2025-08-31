import React, { useEffect, useState } from "react";
import { client, urlFor } from "../../lib/sanityClient";
import { ChevronRight, ChevronLeft } from "lucide-react";

const HeroSection = ({ preview }) => {
  const [hero, setHero] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "heroSection"][0]{
          title,
          subtitle,
          images[]
        }`,
        {},
        preview ? { perspective: "previewDrafts" } : {}
      )
      .then((data) => setHero(data))
      .catch(console.error);
  }, [preview]);

  // Auto-slide functionality
  useEffect(() => {
    if (!hero?.images || hero.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === hero.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [hero?.images]);

  const nextImage = () => {
    if (!hero?.images) return;
    setCurrentImageIndex((prevIndex) => 
      prevIndex === hero.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    if (!hero?.images) return;
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? hero.images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

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

        {/* Image Slider */}
        <div className="relative">
          {hero.images && hero.images.length > 0 ? (
            <div className="relative h-96 overflow-hidden rounded-lg shadow-2xl">
              {/* Images */}
              <div 
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
              >
                {hero.images.map((image, index) => (
                  <img
                    key={index}
                    src={urlFor(image).url()}
                    alt={`${hero.title} - Image ${index + 1}`}
                    className="w-full h-full object-cover flex-shrink-0"
                  />
                ))}
              </div>

              {/* Navigation Arrows - Only show if more than 1 image */}
              {hero.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                    aria-label="Next image"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}

              {/* Dots Indicator - Only show if more than 1 image */}
              {hero.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {hero.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentImageIndex
                          ? "bg-white shadow-lg"
                          : "bg-white/50 hover:bg-white/80"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="h-96 flex items-center justify-center bg-gray-200 rounded-lg shadow-2xl">
              <span className="text-gray-500">No Images Added</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;