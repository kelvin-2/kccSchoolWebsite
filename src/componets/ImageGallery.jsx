import React from 'react';
import ImagePlaceholder from './ImagePlaceholder';

const galleryItems = [
  "Students in Chapel/Assembly",
  "Sports Activities/Field Day",
  "Students in Science Lab"
];

const ImageGallery = () => (
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Life at Kingdom Christian College</h2>
        <p className="text-lg text-gray-600">Experience our vibrant school community</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {galleryItems.map((label, i) => (
          <ImagePlaceholder key={i} height="h-64" label={label} className="hover:shadow-lg transition-shadow" />
        ))}
      </div>
    </div>
  </section>
);

export default ImageGallery;
