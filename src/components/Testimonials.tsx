import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    content: "MaxPetZ@Home was a lifesaver! My cat gets extremely anxious in the car. Having the vet come to our living room made the vaccination process completely stress-free.",
    author: "Priya S.",
    role: "Pet Parent to Luna (Cat)",
    rating: 5,
  },
  {
    content: "The convenience is unmatched. I work long hours and finding time for clinic visits was tough. The vet was professional, thorough, and my dog loved him!",
    author: "Rahul M.",
    role: "Pet Parent to Max (Golden Retriever)",
    rating: 5,
  },
  {
    content: "We needed regular physiotherapy for our senior dog. The at-home sessions have improved his mobility significantly without the trauma of travel.",
    author: "Anita K.",
    role: "Pet Parent to Bruno (Labrador)",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl font-display">
            Loved by Pets and Parents
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative"
            >
              <div className="flex text-yellow-400 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6 relative z-10">
                "{testimonial.content}"
              </p>
              <div className="mt-auto">
                <p className="font-bold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
              
              {/* Decorative quote mark */}
              <div className="absolute top-4 right-6 text-8xl text-gray-50 font-serif leading-none select-none pointer-events-none">
                "
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
