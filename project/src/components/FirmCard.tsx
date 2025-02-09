import React from 'react';
import { Building2, MapPin, Star, Award, ArrowRight } from 'lucide-react';
import type { Firm } from '../types';

interface FirmCardProps {
  firm: Firm;
  onClick: () => void;
}

export function FirmCard({ firm, onClick }: FirmCardProps) {
  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden">
        {firm.featuredProjects[0] && (
          <img
            src={firm.featuredProjects[0].imageUrl}
            alt={`${firm.name} featured project`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        )}
        <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full shadow-md">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500" />
            <span className="font-medium">{firm.rating.toFixed(1)}</span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              {firm.name}
            </h3>
            <div className="flex items-center gap-2 text-gray-600 mt-1">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{firm.location}</span>
            </div>
          </div>
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-blue-50 transition-colors">
            <Building2 className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{firm.description}</p>
        
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <Award className="w-4 h-4" />
            <span>{firm.projectCount} Projects</span>
          </div>
          <div>
            <span className="font-medium">Since {firm.establishedYear}</span>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {firm.specializations.map((spec, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>

        <button className="w-full mt-2 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
          View Profile
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}