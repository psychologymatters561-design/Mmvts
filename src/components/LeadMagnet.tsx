import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function LeadMagnet() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <div id="health-calculator" className="py-24 bg-teal-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-800 mb-6 shadow-lg border border-teal-700">
            <Calculator className="w-8 h-8 text-teal-300" />
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl font-display mb-4">
            Free Pet Health & Nutrition Calculator
          </h2>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">
            Answer 3 quick questions to get a personalized health and nutrition guide for your pet, designed by our expert veterinarians.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden text-gray-900 max-w-2xl mx-auto">
          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-12 text-center"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Your Guide is on the Way!</h3>
              <p className="text-gray-600 mb-8">
                We've sent your personalized pet health and nutrition guide to <strong>{email}</strong>. Check your inbox in a few minutes.
              </p>
              <button 
                onClick={() => { setStep(1); setSubmitted(false); setEmail(''); }}
                className="text-teal-600 font-medium hover:text-teal-700"
              >
                Calculate for another pet
              </button>
            </motion.div>
          ) : (
            <div className="p-8 sm:p-12">
              {/* Progress Bar */}
              <div className="flex items-center justify-between mb-8 relative">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-100 rounded-full -z-10"></div>
                <div 
                  className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-teal-500 rounded-full -z-10 transition-all duration-500"
                  style={{ width: `${((step - 1) / 3) * 100}%` }}
                ></div>
                
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-colors ${
                      step >= i ? 'bg-teal-500 border-teal-500 text-white' : 'bg-white border-gray-200 text-gray-400'
                    }`}
                  >
                    {i}
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                    <h3 className="text-xl font-bold mb-6">What kind of pet do you have?</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <button onClick={handleNext} className="p-6 border-2 border-gray-100 rounded-2xl hover:border-teal-500 hover:bg-teal-50 transition-all text-center group">
                        <span className="text-4xl block mb-2 group-hover:scale-110 transition-transform">🐶</span>
                        <span className="font-medium text-gray-900">Dog</span>
                      </button>
                      <button onClick={handleNext} className="p-6 border-2 border-gray-100 rounded-2xl hover:border-teal-500 hover:bg-teal-50 transition-all text-center group">
                        <span className="text-4xl block mb-2 group-hover:scale-110 transition-transform">🐱</span>
                        <span className="font-medium text-gray-900">Cat</span>
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                    <h3 className="text-xl font-bold mb-6">How old is your pet?</h3>
                    <div className="space-y-3">
                      {['Puppy/Kitten (0-1 year)', 'Adult (1-7 years)', 'Senior (7+ years)'].map((age) => (
                        <button key={age} onClick={handleNext} className="w-full p-4 text-left border-2 border-gray-100 rounded-xl hover:border-teal-500 hover:bg-teal-50 transition-all font-medium text-gray-700">
                          {age}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                    <h3 className="text-xl font-bold mb-6">What is your primary health concern?</h3>
                    <div className="space-y-3">
                      {['General Wellness & Nutrition', 'Joints & Mobility', 'Skin & Coat', 'Digestion', 'Other'].map((concern) => (
                        <button key={concern} onClick={handleNext} className="w-full p-4 text-left border-2 border-gray-100 rounded-xl hover:border-teal-500 hover:bg-teal-50 transition-all font-medium text-gray-700">
                          {concern}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                    <h3 className="text-xl font-bold mb-2">Your guide is ready!</h3>
                    <p className="text-gray-600 mb-6">Where should we send your personalized pet health report?</p>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="email" className="sr-only">Email address</label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="block w-full rounded-xl border-gray-300 px-4 py-4 text-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500 border bg-gray-50"
                          placeholder="Enter your email address"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-white bg-teal-600 hover:bg-teal-700 transition-all shadow-md hover:shadow-lg"
                      >
                        Get My Free Guide
                        <ChevronRight className="ml-2 w-5 h-5" />
                      </button>
                      <p className="text-xs text-center text-gray-500 mt-4">
                        We respect your privacy. No spam, ever.
                      </p>
                    </div>
                  </motion.div>
                )}
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
