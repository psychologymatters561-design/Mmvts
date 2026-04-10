import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="font-bold text-2xl text-gray-900 tracking-tight">MaxPetZ<span className="text-teal-600">@Home</span></span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="/#services" className="text-gray-600 hover:text-teal-600 font-medium transition-colors">Services</a>
            <a href="/#why-us" className="text-gray-600 hover:text-teal-600 font-medium transition-colors">Why Us</a>
            <Link to="/pet-health-calculator" className="text-gray-600 hover:text-teal-600 font-medium transition-colors">Free Health Check</Link>
            
            <div className="flex items-center gap-4 ml-4">
              <div className="flex flex-col items-end">
                <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">North India</span>
                <a href="tel:+918448449955" className="text-sm font-bold text-gray-900 hover:text-teal-600 transition-colors">+91 8448449955</a>
              </div>
              <a href="tel:+918448449955" className="bg-red-50 text-red-700 border border-red-200 px-6 py-2.5 rounded-full font-medium hover:bg-red-100 transition-colors shadow-sm hover:shadow-md flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Emergency
              </a>
              <a href="/#book" className="bg-teal-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-teal-700 transition-colors shadow-sm hover:shadow-md">
                Book Visit
              </a>
            </div>
          </div>

          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/#services" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md">Services</a>
            <a href="/#why-us" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md">Why Us</a>
            <Link to="/pet-health-calculator" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md">Free Health Check</Link>
            <div className="mt-4 pt-4 border-t border-gray-100 px-3">
              <div className="mb-4">
                <span className="block text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">North India</span>
                <a href="tel:+918448449955" className="flex items-center text-gray-900 font-bold">
                  <Phone className="w-4 h-4 mr-2 text-teal-600" />
                  +91 8448449955
                </a>
              </div>
              <div className="mb-4">
                <span className="block text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Mumbai & Goa</span>
                <a href="tel:+918447842852" className="flex items-center text-gray-900 font-bold">
                  <Phone className="w-4 h-4 mr-2 text-teal-600" />
                  +91 8447842852
                </a>
              </div>
              <a href="tel:+918448449955" className="block w-full text-center bg-red-50 text-red-700 border border-red-200 px-6 py-3 rounded-xl font-medium hover:bg-red-100 transition-colors mb-2">
                Emergency Call
              </a>
              <a href="/#book" className="block w-full text-center bg-teal-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-teal-700 transition-colors">
                Book Home Visit
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
