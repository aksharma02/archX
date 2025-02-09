import React, { useState } from 'react';
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

  const handleFilterChange = (filterType: string, value: string) => {
    setActiveFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const filteredFirms = SAMPLE_FIRMS.filter(firm => {
    if (activeFilters.location && firm.location !== activeFilters.location) return false;
    if (activeFilters.specialization && !firm.specializations.includes(activeFilters.specialization)) return false;
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
                <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
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
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
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
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold mb-4">Find Your Perfect Architecture Firm</h2>
              <p className="text-xl text-blue-100 mb-8">Browse through our curated list of top architecture firms. Compare, analyze, and find the perfect match for your project.</p>
              <SearchFilters onFilterChange={handleFilterChange} activeFilters={activeFilters} />
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredFirms.map((firm) => (
                <FirmCard 
                  key={firm.id} 
                  firm={firm} 
                  onClick={() => setSelectedFirm(firm)}
                />
              ))}
            </div>
          </div>
        </section>

        {selectedFirm && (
          <FirmDetails 
            firm={selectedFirm} 
            onClose={() => setSelectedFirm(null)} 
          />
        )}

        <section id="about" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">About ArchX</h2>
                <p className="text-gray-600 mb-4">
                  ArchX is the premier platform connecting visionary clients with leading architecture firms. We're transforming how architectural services are discovered and engaged.
                </p>
                <p className="text-gray-600 mb-4">
                  Our curated directory features top firms across various specializations, from sustainable design to urban planning, making it easier than ever to find the perfect match for your project.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold text-2xl text-blue-600 mb-2">500+</h3>
                    <p className="text-gray-600">Architecture Firms</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold text-2xl text-blue-600 mb-2">5000+</h3>
                    <p className="text-gray-600">Completed Projects</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1631193816258-28b44b21e78b?auto=format&fit=crop&q=80"
                  alt="Modern architecture"
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                  <p className="text-lg font-semibold text-gray-900 mb-2">Trusted by Industry Leaders</p>
                  <p className="text-gray-600">Join hundreds of successful architecture firms on ArchX</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-600">123 Architecture Avenue<br />New York, NY 10001</p>
              </div>
              <div className="text-center p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-gray-600">contact@archx.com<br />support@archx.com</p>
              </div>
              <div className="text-center p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600">+1 (555) 123-4567<br />Mon-Fri 9am-6pm EST</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-white">AX</span>
                </div>
                <span className="text-xl font-bold">ArchX</span>
              </div>
              <p className="text-gray-400">Connecting visionary clients with leading architecture firms.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Browse Firms</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Projects</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Residential Design</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Commercial Projects</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Urban Planning</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Sustainable Design</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-400">Have questions? Get in touch with our team.</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Contact Support
              </button>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 ArchX. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;