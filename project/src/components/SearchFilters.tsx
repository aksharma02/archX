import React from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';

interface SearchFiltersProps {
  onFilterChange: (filterType: string, value: string) => void;
  activeFilters: {
    location: string;
    specialization: string;
    projectSize: string;
    priceRange: string;
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
          {["location", "specialization", "projectSize", "priceRange"].map((filter) => (
            <select 
              key={filter}
              className="px-4 py-2 border border-gray-200 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-[140px] text-black"
              value={activeFilters[filter] || ""}
              onChange={(e) => onFilterChange(filter, e.target.value)}
            >
              <option value="">{filter.charAt(0).toUpperCase() + filter.slice(1)}</option>
              {filter === "location" && ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad"].map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
              {filter === "specialization" && ["Residential", "Commercial", "Sustainable", "Urban Planning", "Historical", "Industrial", "Landscape", "Interior Design"].map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
              {filter === "projectSize" && [
                { value: "small", label: "Small (<10,000 sq ft)" },
                { value: "medium", label: "Medium (10,000-50,000 sq ft)" },
                { value: "large", label: "Large (>50,000 sq ft)" },
                { value: "xlarge", label: "Extra Large (>100,000 sq ft)" }
              ].map(({ value, label }) => (
                <option key={value} value={value}>{label}</option>
              ))}
              {filter === "priceRange" && [
                { value: "low", label: "Low (<$100K)" },
                { value: "medium", label: "Medium ($100K-$500K)" },
                { value: "high", label: "High ($500K-$1M)" },
                { value: "premium", label: "Premium (>$1M)" }
              ].map(({ value, label }) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
          ))}
          
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
            <SlidersHorizontal className="w-5 h-5" />
            <span>More Filters</span>
          </button>
        </div>
      </div>

      {Object.values(activeFilters).some(value => value) && (
        <div className="flex flex-wrap gap-2 mt-4">
          {Object.entries(activeFilters).map(([key, value]) => (
            value && (
              <div key={key} className="flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
                <button 
                  className="hover:text-blue-900"
                  onClick={() => onFilterChange(key, '')}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )
          ))}
        </div>
      )}
    </div>
  );
}
