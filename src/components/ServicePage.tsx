import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, PhoneCall } from 'lucide-react';

const serviceData: Record<string, any> = {
  'vaccinations': {
    title: 'At-Home Pet Vaccinations',
    subtitle: 'Keep your pet protected without the clinic stress.',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2000&auto=format&fit=crop',
    bluf: 'We provide comprehensive vaccination schedules for dogs and cats in the comfort of your home. Protect your pet from rabies, parvovirus, distemper, and more without the anxiety of a waiting room.',
    benefits: [
      'Zero travel stress for anxious pets',
      'Reduced risk of exposure to other sick animals',
      'Personalized vaccination schedule based on lifestyle',
      'Complete health checkup included'
    ]
  },
  'minor-illness': {
    title: 'Minor Illness & Injury Treatment',
    subtitle: 'Expert care for common ailments, right at your doorstep.',
    image: 'https://images.unsplash.com/photo-1537151608804-ea2aa1427189?q=80&w=2000&auto=format&fit=crop',
    bluf: 'Is your pet feeling under the weather? Our experienced vets can diagnose and treat ear infections, skin allergies, minor wounds, and gastrointestinal issues directly in your home.',
    benefits: [
      'Immediate attention in a familiar environment',
      'Thorough physical examination',
      'Prescription medications provided on the spot',
      'Follow-up care and monitoring'
    ]
  },
  'diagnostics': {
    title: 'At-Home Diagnostics & Blood Collection',
    subtitle: 'Accurate testing without the trauma of a clinic visit.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2000&auto=format&fit=crop',
    bluf: 'We offer stress-free blood sample collection, urine analysis, and other essential diagnostics at home. Get accurate results quickly to ensure your pet\'s health is on track.',
    benefits: [
      'Calm environment leads to more accurate baseline results',
      'Ideal for senior pets or those with mobility issues',
      'Comprehensive lab panels available',
      'Quick turnaround time for results'
    ]
  },
  'physiotherapy': {
    title: 'Pet Physiotherapy & Rehabilitation',
    subtitle: 'Restoring mobility and comfort in their own territory.',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2000&auto=format&fit=crop',
    bluf: 'Help your pet recover from surgery, manage arthritis, or improve mobility with our at-home physiotherapy sessions. We design custom exercise plans suited to your home environment.',
    benefits: [
      'Exercises tailored to your specific home layout',
      'Pain management and laser therapy available',
      'Improved joint health and muscle mass',
      'Better compliance and comfort for the pet'
    ]
  }
};

export default function ServicePage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? serviceData[serviceId] : null;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Service not found</h1>
          <Link to="/" className="text-teal-600 hover:underline">Return to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/" className="inline-flex items-center text-teal-400 hover:text-teal-300 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-display tracking-tight mb-4">
              {service.title}
            </h1>
            <p className="text-xl text-gray-300 font-medium">
              {service.subtitle}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {/* BLUF Statement */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Bottom Line</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {service.bluf}
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose At-Home Care?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {service.benefits.map((benefit: string, index: number) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sticky Sidebar CTA */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 bg-teal-900 rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4 font-display">Ready to book?</h3>
              <p className="text-teal-100 mb-8">
                Schedule your {service.title.toLowerCase()} today. Our expert vets are ready to help.
              </p>
              
              <div className="space-y-4">
                <a 
                  href="tel:+918448449955" 
                  className="w-full flex items-center justify-center px-6 py-4 border-2 border-white/20 text-base font-bold rounded-xl text-white bg-white/10 hover:bg-white/20 transition-all"
                >
                  <PhoneCall className="w-5 h-5 mr-2" />
                  Call Now
                </a>
                <a 
                  href="/#book" 
                  className="w-full flex items-center justify-center px-6 py-4 border border-transparent text-base font-bold rounded-xl text-teal-900 bg-teal-400 hover:bg-teal-300 transition-all shadow-lg"
                >
                  Book Online
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
