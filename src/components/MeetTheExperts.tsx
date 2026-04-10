import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Award } from 'lucide-react';

const doctors = [
  {
    name: "Dr. Manmohan Sharma",
    role: "Mentor",
    experience: "50 Yrs",
    image: "https://api.maxpetz.com/api/image?key=uploads%2F1758222320401-619731368.webp"
  },
  {
    name: "Dr. Leena Dalal",
    role: "Head of Oncology and Oncosurgery",
    experience: "35 Yrs",
    image: "https://api.maxpetz.com/api/image?key=uploads%2F1758222630734-899003114.webp"
  },
  {
    name: "Dr. Kunal Dev Sharma",
    role: "Sr. Orthopaedic Surgeon",
    experience: "20 Yrs",
    image: "https://api.maxpetz.com/api/image?key=uploads%2F1758223033452-434615764.webp"
  },
  {
    name: "Dr. Bhanu Dev Sharma",
    role: "Clinical/Interventional Cardiologist",
    experience: "19 Yrs",
    image: "https://maxpetz-backend.webadmin-701.workers.dev/api/image?key=uploads%2F1765334920984-295878816.webp"
  },
  {
    name: "Dr. Deep Vasudeo",
    role: "Neurologist and Physiotherapist",
    experience: "14 Yrs",
    image: "https://api.maxpetz.com/api/image?key=uploads%2F1758224858248-998620206.webp"
  },
  {
    name: "Dr. Sunaina Gupta",
    role: "Ophthalmology, Avian & Exotic Medicine",
    experience: "12 Yrs",
    image: "https://api.maxpetz.com/api/image?key=uploads%2F1758225222226-926763444.webp"
  },
  {
    name: "Dr. Anil K. Sood",
    role: "Senior Veterinary Consultant",
    experience: "38 Yrs",
    image: "https://api.maxpetz.com/api/image?key=uploads%2F1758225026868-871580932.webp"
  },
  {
    name: "Dr. Sudhir Singh",
    role: "Internal medicine, Orthopaedics & Neurology",
    experience: "11 Yrs",
    image: "https://api.maxpetz.com/api/image?key=uploads%2F1758225294114-279147331.webp"
  },
  {
    name: "Dr. Akhiyar Khan",
    role: "Internal Medicine",
    experience: "10 Yrs",
    image: "https://api.maxpetz.com/api/image?key=uploads%2F1758225494702-645741420.webp"
  },
  {
    name: "Dr. Faiza Farooq",
    role: "Veterinary Medicine and Surgery",
    experience: "9 Yrs",
    image: "https://api.maxpetz.com/api/image?key=uploads%2F1758226081413-709770707.webp"
  }
];

export default function MeetTheExperts() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div id="experts" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Our Team</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl font-display">
              Meet the Experts
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500">
              Highly qualified and experienced veterinarians dedicated to your pet's health.
            </p>
          </div>
          <div className="hidden md:flex gap-2">
            <button 
              onClick={() => scroll('left')}
              className="p-2 rounded-full border border-gray-200 hover:bg-teal-50 hover:text-teal-600 hover:border-teal-200 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-2 rounded-full border border-gray-200 hover:bg-teal-50 hover:text-teal-600 hover:border-teal-200 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.name}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-none w-[280px] sm:w-[320px] snap-start"
              >
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    <img 
                      src={doctor.image} 
                      alt={doctor.name} 
                      className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{doctor.name}</h3>
                    <p className="text-teal-600 font-medium text-sm mb-4 line-clamp-2">{doctor.role}</p>
                    
                    <div className="mt-auto pt-4 border-t border-gray-100 flex items-center text-gray-500">
                      <Award className="w-4 h-4 mr-2 text-teal-500" />
                      <span className="text-sm font-medium">Experience: {doctor.experience}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="mt-8 text-center md:hidden">
           <p className="text-sm text-gray-500">Swipe to see more experts &rarr;</p>
        </div>
      </div>
    </div>
  );
}
