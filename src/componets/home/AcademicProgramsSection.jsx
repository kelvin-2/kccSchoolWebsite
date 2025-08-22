import React, { useEffect, useState } from 'react';
import ImagePlaceholder from './ImagePlaceholder';
import { client, urlFor } from "../../lib/sanityClient"; 

const programs = [
  {
    title: "Foundation Phase",
    grades: "Grade RRR - 3",
    description: "Building strong foundations in literacy, numeracy, and Christian values through play-based learning and structured activities.",
    imageLabel: "Foundation Phase Students Learning",
    sanityKey: "foundationPhase" // Key to match Sanity document
  },
  {
    title: "Intermediate Phase",
    grades: "Grade 4 - 6",
    description: "Developing critical thinking skills while maintaining strong emphasis on character development and biblical principles.",
    imageLabel: "Intermediate Phase Classroom",
    sanityKey: "intermediatePhase"
  },
  {
    title: "Senior Phase",
    grades: "Grade 7 - 12",
    description: "Preparing students for higher education and careers while deepening their faith and leadership abilities.",
    imageLabel: "Senior Phase/Matric Students",
    sanityKey: "seniorPhase"
  }
];

const AcademicProgramsSection = ({ preview = true }) => {
  const [images, setImages] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Fetch program images from Sanity (with preview support for real-time updates)
        const query = `*[_type == "programImages"]{
          foundationPhase,
          intermediatePhase,
          seniorPhase
        }[0]`;
        
        const options = preview ? { perspective: "previewDrafts" } : {};
        const result = await client.fetch(query, {}, options);
        
        if (result) {
          setImages(result);
        }
      } catch (error) {
        console.error('Error fetching program images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();

    // Set up real-time preview updates if in preview mode
    if (preview) {
      const subscription = client
        .listen('*[_type == "programImages"]')
        .subscribe({
          next: (update) => {
            if (update.result) {
              setImages(update.result);
            }
          },
          error: (err) => console.error('Preview subscription error:', err)
        });

      return () => subscription.unsubscribe();
    }
  }, [preview]);

  return (
    <section id="academics" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Academic Programs</h2>
          <p className="text-xl text-gray-600">Comprehensive education from foundation to matriculation</p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              {/* Dynamic Image or Placeholder */}
              {loading ? (
                <div className="h-40 bg-gray-200 rounded-lg mb-6 animate-pulse" />
              ) : images[program.sanityKey] ? (
                <img 
                  src={urlFor(images[program.sanityKey]).width(400).height(240).url()}
                  alt={program.imageLabel}
                  className="w-full h-40 object-cover rounded-lg mb-6"
                />
              ) : (
                <ImagePlaceholder height="h-40" label={program.imageLabel} className="mb-6" />
              )}
              
              <h3 className="text-2xl font-bold text-red-700 mb-4">{program.title}</h3>
              <p className="text-gray-600 mb-4">{program.grades}</p>
              <p className="text-gray-700">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicProgramsSection;