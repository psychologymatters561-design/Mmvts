import { Heart, Clock, UserCheck, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    name: 'Stress-Free',
    description: 'No cars, no waiting rooms, no fear for your beloved pet. They stay relaxed in their own territory.',
    icon: Heart,
  },
  {
    name: 'Convenient',
    description: 'Skip the commute and save precious time. We work around your schedule, bringing the clinic to you.',
    icon: Clock,
  },
  {
    name: 'Personalized',
    description: 'One-on-one care in a familiar environment allows our vets to understand your pet better.',
    icon: UserCheck,
  },
  {
    name: 'Trusted',
    description: 'Backed by decades of veterinary excellence. Our team consists of highly qualified and experienced professionals.',
    icon: Shield,
  },
];

export default function Features() {
  return (
    <div id="why-us" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Why Choose MaxPetZ@Home</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl font-display">
            No more stress, just compassionate care
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Experience the difference of exceptional veterinary medicine delivered right to your living room.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 lg:mb-0 relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=2070&auto=format&fit=crop" 
                alt="Compassionate vet examining a dog" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative blob */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-teal-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob -z-10"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-yellow-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000 -z-10"></div>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="absolute -top-5 left-6">
                  <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-teal-600 text-white shadow-lg">
                    <feature.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-bold text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
