import React, { useState, useCallback } from 'react';
import { FirmCard } from './components/FirmCard';
import { SearchFilters } from './components/SearchFilters';
import { Building, ChevronDown, Mail, Phone } from 'lucide-react';
import type { Firm } from './types';
import { FirmDetails } from './components/FirmDetails';
import { SAMPLE_FIRMS } from './data/firms';

function App() {
  const [selectedFirm, setSelectedFirm] = useState<Firm | null>(null);
  const [activeFilters, setActiveFilters] = useState({
    location: '',
    specialization: '',
    projectSize: ''
  });

  const handleFilterChange = useCallback((filterType: string, value: string) => {
    setActiveFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  }, []);

  const filteredFirms = SAMPLE_FIRMS.filter(firm => {
    if (activeFilters.location && firm.location !== activeFilters.location) return false;
    if (activeFilters.specialization && !firm.specializations.includes(activeFilters.specialization)) return false;
    if (activeFilters.projectSize && firm.projectSize !== activeFilters.projectSize) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-white">AX</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900">ArchX</h1>
            </a>
            <nav className="flex items-center gap-6">
              <div className="relative group">
                <button 
                  className="flex items-center gap-1 text-gray-600 hover:text-gray-900"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  Browse Firms
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full right-0 w-48 bg-white shadow-lg rounded-lg py-2 hidden group-hover:block">
                  <a href="#residential" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Residential</a>
                  <a href="#commercial" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Commercial</a>
                  <a href="#sustainable" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Sustainable</a>
                  <a href="#urban" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Urban Planning</a>
                </div>
              </div>
              <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition-all">
                List Your Firm
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <section className="relative bg-blue-900 text-white py-20">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80"
              alt="Architecture background"
              className="w-full h-full object-cover opacity-20"
              loading="lazy"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold mb-4">Find Your Perfect Architecture Firm</h2>
              <p className="text-xl text-blue-100 mb-8">Browse through our curated list of top architecture firms.</p>
              <SearchFilters onFilterChange={handleFilterChange} activeFilters={activeFilters} />
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredFirms.map(firm => (
                <FirmCard key={firm.id} firm={firm} onClick={() => setSelectedFirm(firm)} />
              ))}
            </div>
          </div>
        </section>

        {selectedFirm && <FirmDetails firm={selectedFirm} onClose={() => setSelectedFirm(null)} />}
      </main>

      <footer className="bg-gray-900 text-white py-12 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Browse Firms</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Projects</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2025 ArchX. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
