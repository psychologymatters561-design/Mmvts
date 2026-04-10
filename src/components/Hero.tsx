import { motion } from 'framer-motion';
import { ArrowRight, Star, ShieldCheck, Clock, PhoneCall } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gray-900 pt-32 pb-32 overflow-hidden min-h-[90vh] flex items-center">
      {/* Full background image of vet treating a pet */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2070&auto=format&fit=crop" 
          alt="Expert veterinarian treating a dog" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-8 lg:text-left"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-500/20 text-teal-300 font-medium text-sm mb-6 border border-teal-500/30 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-teal-400 mr-2 animate-pulse"></span>
              Emergency Vet & Premium Care in Delhi, Mumbai & Goa
            </div>
            
            {/* BLUF Statement */}
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-display mb-6">
              <span className="block">Expert Veterinarians.</span>
              <span className="block text-teal-400">Right at Your Doorstep.</span>
            </h1>
            
            <div className="mt-6 text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl leading-relaxed max-w-3xl">
              <p className="mb-4 font-medium text-white">We are MaxPetZ@Home, providing stress-free, expert veterinary care for dogs and cats directly in your home across North India, Mumbai, and Goa.</p>
              <ul className="space-y-2 text-gray-300 text-base sm:text-lg">
                <li className="flex items-center"><ShieldCheck className="w-5 h-5 text-teal-400 mr-2 flex-shrink-0" /> <strong>Comprehensive Care:</strong> Vaccinations, diagnostics, and minor illnesses.</li>
                <li className="flex items-center"><Clock className="w-5 h-5 text-teal-400 mr-2 flex-shrink-0" /> <strong>Zero Stress:</strong> No waiting rooms, no travel anxiety for your pet.</li>
                <li className="flex items-center"><Star className="w-5 h-5 text-teal-400 mr-2 flex-shrink-0" /> <strong>Trusted Experts:</strong> Highly qualified vets with decades of experience.</li>
              </ul>
            </div>
            
            <div className="mt-10 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#book" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-xl text-gray-900 bg-teal-400 hover:bg-teal-300 md:text-lg transition-all shadow-lg hover:shadow-teal-500/25 hover:-translate-y-0.5">
                  Book a Home Visit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a href="tel:+918448449955" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 text-base font-bold rounded-xl text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm md:text-lg transition-all">
                  <PhoneCall className="mr-2 w-5 h-5" />
                  Emergency Call
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
