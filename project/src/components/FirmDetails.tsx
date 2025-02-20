import React from 'react';
import { X, MapPin, Calendar, Users, Award, Star } from 'lucide-react';
import type { Firm } from '../types';

interface FirmDetailsProps {
  firm: Firm;
  onClose: () => void;
}

export function FirmDetails({ firm, onClose }: FirmDetailsProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold">{firm.name}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 text-gray-600 mb-4">
                <MapPin className="w-5 h-5" />
                <span>{firm.location}</span>
              </div>
              <p className="text-gray-700 mb-6">{firm.description}</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <Calendar className="w-5 h-5" />
                    <span>Established</span>
                  </div>
                  <p className="text-lg font-semibold">{firm.establishedYear}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <Users className="w-5 h-5" />
                    <span>Projects</span>
                  </div>
                  <p className="text-lg font-semibold">{firm.projectCount}+</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Specializations</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {firm.specializations.map((spec, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                    {spec}
                  </span>
                ))}
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold">Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold">{firm.rating.toFixed(1)}</span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < Math.floor(firm.rating) ? 'text-yellow-400' : 'text-gray-300'}`} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
