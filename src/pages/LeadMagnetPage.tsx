import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Heart, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function PetHealthCalculator() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    petType: '',
    age: '',
    weight: '',
    activityLevel: '',
    email: '',
    name: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call to save lead
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className="pt-24 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-6">
            <Calculator className="w-8 h-8 text-teal-600" />
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl font-display mb-4">
            Free Pet Health & Nutrition Calculator
          </h1>
          <p className="text-xl text-gray-600">
            Get a personalized health profile and nutrition guide for your furry friend in just 2 minutes.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-12 text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">Your Report is Ready!</h2>
              <p className="text-lg text-gray-600 mb-8">
                We've sent the personalized health and nutrition guide to <strong>{formData.email}</strong>.
              </p>
              <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100 mb-8">
                <h3 className="font-bold text-teal-900 mb-2">Need immediate advice?</h3>
                <p className="text-teal-800 mb-4">Our expert vets are available for home visits in your area.</p>
                <a href="tel:+918448449955" className="inline-block bg-teal-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-teal-700 transition-colors">
                  Call to Book a Visit
                </a>
              </div>
            </motion.div>
          ) : (
            <div className="p-8 sm:p-12">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm font-medium text-gray-500 mb-2">
                  <span>Step {step} of 3</span>
                  <span>{Math.round((step / 3) * 100)}% Completed</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2.5">
                  <div 
                    className="bg-teal-600 h-2.5 rounded-full transition-all duration-500" 
                    style={{ width: `${(step / 3) * 100}%` }}
                  ></div>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Tell us about your pet</h3>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">I have a...</label>
                        <div className="grid grid-cols-2 gap-4">
                          <button
                            type="button"
                            onClick={() => setFormData({ ...formData, petType: 'Dog' })}
                            className={`p-4 border-2 rounded-xl text-center font-medium transition-all ${formData.petType === 'Dog' ? 'border-teal-600 bg-teal-50 text-teal-700' : 'border-gray-200 hover:border-teal-300 text-gray-600'}`}
                          >
                            🐶 Dog
                          </button>
                          <button
                            type="button"
                            onClick={() => setFormData({ ...formData, petType: 'Cat' })}
                            className={`p-4 border-2 rounded-xl text-center font-medium transition-all ${formData.petType === 'Cat' ? 'border-teal-600 bg-teal-50 text-teal-700' : 'border-gray-200 hover:border-teal-300 text-gray-600'}`}
                          >
                            🐱 Cat
                          </button>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">Age (in years)</label>
                        <input
                          type="number"
                          id="age"
                          name="age"
                          value={formData.age}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                          placeholder="e.g. 3"
                          required
                        />
                      </div>
                      <button
                        type="button"
                        onClick={handleNext}
                        disabled={!formData.petType || !formData.age}
                        className="w-full flex items-center justify-center px-8 py-4 bg-teal-600 text-white rounded-xl font-medium hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Next Step <ArrowRight className="ml-2 w-5 h-5" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Physical Details</h3>
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-2">Weight (in kg)</label>
                        <input
                          type="number"
                          id="weight"
                          name="weight"
                          value={formData.weight}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                          placeholder="e.g. 15"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="activityLevel" className="block text-sm font-medium text-gray-700 mb-2">Activity Level</label>
                        <select
                          id="activityLevel"
                          name="activityLevel"
                          value={formData.activityLevel}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                          required
                        >
                          <option value="">Select activity level</option>
                          <option value="low">Low (Mostly indoors, short walks)</option>
                          <option value="moderate">Moderate (Daily walks, some play)</option>
                          <option value="high">High (Very active, running, long play sessions)</option>
                        </select>
                      </div>
                      <div className="flex gap-4">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="w-1/3 px-6 py-4 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors"
                        >
                          Back
                        </button>
                        <button
                          type="button"
                          onClick={handleNext}
                          disabled={!formData.weight || !formData.activityLevel}
                          className="w-2/3 flex items-center justify-center px-8 py-4 bg-teal-600 text-white rounded-xl font-medium hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Next Step <ArrowRight className="ml-2 w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Where should we send the report?</h3>
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                          placeholder="john@example.com"
                          required
                        />
                        <p className="mt-2 text-sm text-gray-500 flex items-center">
                          <Heart className="w-4 h-4 mr-1 text-teal-500" /> We respect your privacy. No spam.
                        </p>
                      </div>
                      <div className="flex gap-4">
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="w-1/3 px-6 py-4 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          disabled={!formData.name || !formData.email}
                          className="w-2/3 flex items-center justify-center px-8 py-4 bg-teal-600 text-white rounded-xl font-medium hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Get My Free Report
                        </button>
                      </div>
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
