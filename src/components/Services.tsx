import { motion } from 'framer-motion';
import { Syringe, Stethoscope, TestTube, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'vaccinations',
    title: 'Vaccinations',
    description: 'Keep your pet protected with routine vaccinations administered safely at home.',
    icon: Syringe,
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'minor-illness',
    title: 'Minor Illness & Injury',
    description: 'Expert consultations for common ailments, skin issues, ear infections, and minor injuries.',
    icon: Stethoscope,
    image: 'https://images.unsplash.com/photo-1537151608804-ea2aa1427189?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'blood-collection',
    title: 'Blood Sample Collection',
    description: 'Stress-free diagnostic sample collection without the anxiety of a clinic visit.',
    icon: TestTube,
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'physiotherapy',
    title: 'Physiotherapy',
    description: 'Rehabilitation and mobility support tailored to your pet\'s home environment.',
    icon: Activity,
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1000&auto=format&fit=crop',
  },
];

export default function Services() {
  return (
    <div id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">What We Offer</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl font-display">
            Comprehensive Care at Home
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 bg-white flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 z-20 bg-white p-2 rounded-lg shadow-md">
                  <service.icon className="w-6 h-6 text-teal-600" />
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 flex-1">{service.description}</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <Link to={`/services/${service.id}`} className="text-teal-600 font-medium hover:text-teal-700 flex items-center">
                    Learn more
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
