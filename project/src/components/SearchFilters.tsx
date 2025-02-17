import React from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';

interface SearchFiltersProps {
  onFilterChange: (filterType: string, value: string) => void;
  activeFilters: {
    location: string;
    specialization: string;
    projectSize: string;
  };
}

export function SearchFilters({ onFilterChange, activeFilters }: SearchFiltersProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search architecture firms..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
          />
        </div>
        
        <div className="flex flex-wrap gap-4">
          <select 
            className="px-4 py-2 border border-gray-200 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-[140px] text-black"
            value={activeFilters.location}
            onChange={(e) => onFilterChange('location', e.target.value)}
          >
            <option value="">Location</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Chennai">Chennai</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Pune">Pune</option>
            <option value="Ahmedabad">Ahmedabad</option>
          </select>
          
          <select 
            className="px-4 py-2 border border-gray-200 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-[140px] text-black"
            value={activeFilters.specialization}
            onChange={(e) => onFilterChange('specialization', e.target.value)}
          >
            <option value="">Specialization</option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Sustainable">Sustainable</option>
            <option value="Urban Planning">Urban Planning</option>
            <option value="Historical">Historical</option>
            <option value="Industrial">Industrial</option>
            <option value="Landscape">Landscape</option>
            <option value="Interior Design">Interior Design</option>
          </select>

          <select 
            className="px-4 py-2 border border-gray-200 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-[140px] text-black"
            value={activeFilters.projectSize}
            onChange={(e) => onFilterChange('projectSize', e.target.value)}
          >
            <option value="">Project Size</option>
            <option value="small">Small (&lt;10,000 sq ft)</option>
            <option value="medium">Medium (10,000-50,000 sq ft)</option>
            <option value="large">Large (&gt;50,000 sq ft)</option>
            <option value="xlarge">Extra Large (&gt;100,000 sq ft)</option>
          </select>
          
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
            <SlidersHorizontal className="w-5 h-5" />
            <span>More Filters</span>
          </button>
        </div>
      </div>

      {(activeFilters.location || activeFilters.specialization || activeFilters.projectSize) && (
        <div className="flex flex-wrap gap-2 mt-4">
          {activeFilters.location && (
            <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
              Location: {activeFilters.location}
              <button 
                className="hover:text-blue-900"
                onClick={() => onFilterChange('location', '')}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
          {activeFilters.specialization && (
            <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
              Specialization: {activeFilters.specialization}
              <button 
                className="hover:text-blue-900"
                onClick={() => onFilterChange('specialization', '')}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
          {activeFilters.projectSize && (
            <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
              Project Size: {activeFilters.projectSize}
              <button 
                className="hover:text-blue-900"
                onClick={() => onFilterChange('projectSize', '')}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
