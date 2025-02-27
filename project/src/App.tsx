import React, { useState, useMemo } from "react";
import { FirmCard } from "./components/FirmCard";
import { SearchFilters } from "./components/SearchFilters";
import { Building, ChevronDown, Mail, Phone } from "lucide-react";
import type { Firm } from "./types";
import { FirmDetails } from "./components/FirmDetails";
import { SAMPLE_FIRMS } from "./data/firms";

function App() {
  const [selectedFirm, setSelectedFirm] = useState<Firm | null>(null);
  const [activeFilters, setActiveFilters] = useState({
    location: "",
    specialization: "",
  });

  const handleFilterChange = (filterType: string, value: string) => {
    setActiveFilters((prev) => ({ ...prev, [filterType]: value }));
  };

  const filteredFirms = useMemo(
    () =>
      SAMPLE_FIRMS.filter(
        (firm) =>
          (!activeFilters.location || firm.location === activeFilters.location) &&
          (!activeFilters.specialization || firm.specializations.includes(activeFilters.specialization))
      ),
    [activeFilters]
  );

  const contactInfo = [
    { icon: Building, title: "Visit Us", info: "123 Architecture Ave, NY 10001" },
    { icon: Mail, title: "Email Us", info: "contact@archx.com" },
    { icon: Phone, title: "Call Us", info: "+1 (555) 123-4567" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-xl font-bold text-white">AX</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">ArchX</h1>
          </a>
          <nav className="flex items-center gap-6">
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
                Browse Firms <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full right-0 w-48 bg-white shadow-lg rounded-lg py-2 hidden group-hover:block">
                {["Residential", "Commercial", "Sustainable", "Urban Planning"].map((category) => (
                  <a key={category} href={`#${category.toLowerCase()}`} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    {category}
                  </a>
                ))}
              </div>
            </div>
            {["Projects", "About"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-gray-900">
                {item}
              </a>
            ))}
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              List Your Firm
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80"
            alt="Architecture background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">Find Your Perfect Architecture Firm</h2>
          <p className="text-xl text-blue-100 mb-8">Browse through top architecture firms. Compare, analyze, and find the perfect match for your project.</p>
          <SearchFilters onFilterChange={handleFilterChange} activeFilters={activeFilters} />
        </div>
      </section>

      {/* Firms Listing */}
      <section className="py-16 bg-white max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFirms.map((firm) => (
            <FirmCard key={firm.id} firm={firm} onClick={() => setSelectedFirm(firm)} />
          ))}
        </div>
      </section>

      {/* Firm Details Modal */}
      {selectedFirm && <FirmDetails firm={selectedFirm} onClose={() => setSelectedFirm(null)} />}

      {/* Contact Section */}
      <section className="py-16 bg-gray-50 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {contactInfo.map(({ icon: Icon, title, info }) => (
            <div key={title} className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{info}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 text-center">
        <p>&copy; 2025 ArchX. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
