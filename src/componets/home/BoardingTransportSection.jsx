import React, { useEffect, useState } from "react";
import { ChevronRight, Home, Bus } from "lucide-react";
import { client, urlFor } from "../../lib/sanityClient"; // make sure you have these

const BoardingTransportSection = () => {
  const [images, setImages] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "boardingTransport"][0]{
        boardingImage,
        transportImage
      }`,
        {},
        preview ? { perspective: "previewDrafts" } : {}
      )
      .then((data) => setImages(data))
      .catch(console.error);
  }, []);

  if (!images) return null; // loading state

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Boarding & Transport Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Flexible accommodation options to suit your family's needs
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Boarding */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            {images.boardingImage ? (
              <img
                src={urlFor(images.boardingImage).width(800).url()}
                alt="Boarding House Dormitory/Common Room"
                className="h-48 w-full object-cover rounded-xl mb-6"
              />
            ) : (
              <div className="h-48 bg-gray-200 rounded-xl mb-6"></div>
            )}
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
              {[
                "Comfortable dormitory accommodation",
                "Dedicated house parents providing pastoral care",
                "Nutritious meals and supervised study time",
                "Weekend activities and spiritual development programs",
                "24/7 security and medical support"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-red-700 mr-2 mt-0.5" />{" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Transport */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            {images.transportImage ? (
              <img
                src={urlFor(images.transportImage).width(800).url()}
                alt="School Bus/Transport Vehicle"
                className="h-48 w-full object-cover rounded-xl mb-6"
              />
            ) : (
              <div className="h-48 bg-gray-200 rounded-xl mb-6"></div>
            )}
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
              {[
                "Modern, well-maintained school buses",
                "Experienced, licensed drivers",
                "Multiple routes covering Mthubathuba",
                "Competitive rates and flexible payment options"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />{" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BoardingTransportSection;
