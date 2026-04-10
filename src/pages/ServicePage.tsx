import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Clock, Star, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const servicesData: Record<string, any> = {
  'vaccinations': {
    title: 'At-Home Pet Vaccinations',
    description: 'Keep your pet protected from preventable diseases without the stress of a clinic visit. We offer core and non-core vaccines for dogs and cats.',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2000&auto=format&fit=crop',
    benefits: [
      'No exposure to sick animals in waiting rooms',
      'Reduced anxiety for your pet',
      'Personalized vaccination schedule',
      'Complete health checkup included'
    ]
  },
  'minor-illness': {
    title: 'Minor Illness & Injury Treatment',
    description: 'Prompt, professional care for ear infections, skin issues, minor cuts, and gastrointestinal upset in the comfort of your home.',
    image: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=2070&auto=format&fit=crop',
    benefits: [
      'Fast relief for your pet',
      'Thorough diagnostic examination',
      'Medications dispensed on-site',
      'Follow-up care plan'
    ]
  },
  'blood-collection': {
    title: 'At-Home Blood Sample Collection',
    description: 'Stress-free blood draws for routine screening, senior wellness panels, or diagnostic testing. We handle the samples with care and deliver fast results.',
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=2070&auto=format&fit=crop',
    benefits: [
      'Calm environment for accurate results',
      'Quick and gentle collection process',
      'Comprehensive lab testing',
      'Detailed report explanation'
    ]
  },
  'physiotherapy': {
    title: 'Pet Physiotherapy & Rehabilitation',
    description: 'Improve mobility, manage pain, and speed up recovery from surgery or injury with customized in-home physiotherapy sessions.',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2000&auto=format&fit=crop',
    benefits: [
      'Tailored exercise programs',
      'Pain management techniques',
      'Post-operative rehabilitation',
      'Senior pet mobility support'
    ]
  }
};

export default function ServicePage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? servicesData[serviceId] : null;

  if (!service) {
    return (
      <div className="pt-32 pb-24 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Service Not Found</h1>
        <Link to="/" className="text-teal-600 hover:underline flex items-center">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Services
        </Link>

        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl font-display mb-6">
              {service.title}
            </h1>
            
            {/* BLUF Statement for Service */}
            <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100 mb-8">
              <p className="text-lg text-gray-800 font-medium leading-relaxed">
                {service.description}
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why choose at-home care?</h2>
            <ul className="space-y-4 mb-10">
              {service.benefits.map((benefit: string, index: number) => (
                <li key={index} className="flex items-start">
                  <ShieldCheck className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-lg">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#book" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-teal-600 hover:bg-teal-700 transition-all shadow-md hover:shadow-lg">
                Book Appointment
              </a>
              <a href="tel:+918448449955" className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-200 text-base font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 transition-all">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 lg:mt-0 relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-auto object-cover aspect-4/3"
              />
            </div>
            
            {/* Trust Signals */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden sm:block">
              <div className="flex items-center gap-4 mb-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <span className="font-bold text-gray-900">4.9/5 Rating</span>
              </div>
              <p className="text-sm text-gray-500">Based on 500+ home visits</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
