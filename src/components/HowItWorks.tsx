import { motion } from 'framer-motion';
import { CalendarCheck, Car, HeartHandshake } from 'lucide-react';

const steps = [
  {
    title: 'Book an Appointment',
    description: 'Call us or book online. Choose a time that works best for you and your pet.',
    icon: CalendarCheck,
  },
  {
    title: 'Vet Arrives',
    description: 'Our experienced veterinarian arrives at your doorstep fully equipped.',
    icon: Car,
  },
  {
    title: 'Happy Pet',
    description: 'Your pet receives top-notch care in the comfort and safety of their own home.',
    icon: HeartHandshake,
  },
];

export default function HowItWorks() {
  return (
    <div id="how-it-works" className="py-24 bg-teal-900 text-white relative overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-base text-teal-300 font-semibold tracking-wide uppercase">Simple Process</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl font-display">
            How MaxPetZ@Home Works
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative mb-12 lg:mb-0">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-12 bottom-12 w-0.5 bg-teal-700 z-0"></div>

            <div className="space-y-12 relative z-10">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 w-24 h-24 rounded-full bg-teal-800 border-4 border-teal-600 flex items-center justify-center mr-6 shadow-xl relative">
                    <step.icon className="w-10 h-10 text-teal-300" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold text-sm border-2 border-teal-900">
                      {index + 1}
                    </div>
                  </div>
                  <div className="pt-4">
                    <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="text-teal-100 text-lg">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-teal-800/50">
              <img 
                src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=2070&auto=format&fit=crop" 
                alt="Vet arriving at home" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating Element */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 text-gray-900 hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="bg-teal-100 p-3 rounded-full">
                  <Car className="w-8 h-8 text-teal-600" />
                </div>
                <div>
                  <p className="font-bold text-lg">Fully Equipped</p>
                  <p className="text-gray-500">Mobile Clinic Setup</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
