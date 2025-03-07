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
      className="bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer transform hover:scale-[1.03] hover:-translate-y-2"
      onClick={onClick}
      role="button"
      aria-label={`View details for ${firm?.name}`}
    >
      {/* Featured Project Image */}
      <div className="relative h-52 overflow-hidden rounded-t-xl">
        {firm?.featuredProjects?.[0]?.imageUrl && (
          <img
            src={firm.featuredProjects[0].imageUrl}
            alt={`${firm?.name} featured project`}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
        )}
        {/* Rating Badge */}
        {firm?.rating && (
          <div className="absolute top-4 left-4 bg-white/80 px-3 py-1 rounded-full shadow-md backdrop-blur-md">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500" />
              <span className="font-medium text-gray-900">{firm.rating.toFixed(1)}</span>
            </div>
          </div>
        )}
      </div>

      {/* Firm Details */}
      <div className="p-6">
        {/* Firm Name & Location */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-500 transition-colors">
              {firm?.name || "Unknown Firm"}
            </h3>
            {firm?.location && (
              <div className="flex items-center gap-2 text-gray-700 mt-1">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span className="text-sm">{firm.location}</span>
              </div>
            )}
          </div>
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors">
            <Building2 className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
          </div>
        </div>

        {/* Firm Description */}
{firm?.description && (
  <p className="text-gray-700 text-sm mb-4 line-clamp-2" title={firm.description}>
    {firm.description}
  </p>
)}


        {/* Projects & Established Year */}
        <div className="flex items-center gap-4 text-sm text-gray-700 mb-4">
          {firm?.projectCount !== undefined && (
            <div className="flex items-center gap-1">
              <Award className="w-5 h-5 text-yellow-500" />
              <span>{firm.projectCount} Projects</span>
            </div>
          )}
          {firm?.establishedYear && (
            <div>
              <span className="font-medium">Since {firm.establishedYear}</span>
            </div>
          )}
        </div>

        {/* Specializations */}
        {firm?.specializations?.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {firm.specializations.map((spec, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm group-hover:bg-blue-500 group-hover:text-white transition-colors"
              >
                {spec}
              </span>
            ))}
          </div>
        )}

        {/* View Profile Button */}
        <button 
          className="w-full mt-2 flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg group-hover:bg-blue-600 shadow-md hover:shadow-lg transition-all"
          aria-label={`View ${firm?.name} profile`}
        >
          View Profile
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
