import { sampleProperties } from '../data/sampleData';
import SearchBar from '../components/search/SearchBar';
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import PropertyCard from '../components/property/PropertyCard';

const LuxuryHomesPage = () => {
  const luxuryHomes = sampleProperties.filter(property => 
    property.price >= 10000000 || property.title.toLowerCase().includes('luxury')
  );

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center text-sm text-gray-500">
            <Link to="/" className="hover:text-blue-600 flex items-center">
              <Home size={14} className="mr-1" /> Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Luxury Homes</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Luxury Homes
            </h1>
            <p className="text-lg mb-8">
              Experience unparalleled luxury living
            </p>
            <SearchBar variant="dark" />
          </div>
        </div>
      </div>

      {/* Properties Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Featured Luxury Homes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {luxuryHomes.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LuxuryHomesPage;