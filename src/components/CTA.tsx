import { Phone } from 'lucide-react';

export default function CTA() {
  return (
    <div id="book" className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2000&auto=format&fit=crop" 
              alt="Happy dog" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-teal-900/80 mix-blend-multiply"></div>
          </div>

          <div className="relative px-6 py-16 sm:p-16 lg:p-20 text-center z-10">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl font-display">
              <span className="block">Comfort for Your Pet.</span>
              <span className="block text-teal-300 mt-2">Convenience for You.</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-teal-50 max-w-2xl mx-auto">
              Experience the difference of compassionate veterinary care—delivered right to your home. Call us today to schedule your visit.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href="tel:+918448449955" 
                className="flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl text-teal-900 bg-white hover:bg-gray-50 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5 mr-2" />
                North India: +91 8448449955
              </a>
              <a 
                href="tel:+918447842852" 
                className="flex items-center justify-center px-8 py-4 border-2 border-white/30 text-lg font-bold rounded-xl text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all"
              >
                <Phone className="w-5 h-5 mr-2" />
                Mumbai & Goa: +91 8447842852
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
