import React from 'react';
import { Camera } from 'lucide-react';

const ImagePlaceholder = ({ width = "w-full", height = "h-64", label, className = "" }) => (
  <div className={`${width} ${height} bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex flex-col items-center justify-center text-gray-600 ${className}`}>
    <Camera className="w-12 h-12 mb-2 text-gray-400" />
    <p className="text-sm font-medium text-center px-4">{label}</p>
  </div>
);

export default ImagePlaceholder;
