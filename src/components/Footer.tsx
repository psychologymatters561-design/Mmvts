export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="font-bold text-xl tracking-tight">MaxPetZ<span className="text-teal-400">@Home</span></span>
            </div>
            <p className="text-gray-400 text-base leading-relaxed max-w-xs">
              Expert clinical care at your doorstep. Making veterinary visits stress-free for pets and convenient for pet parents.
            </p>
            <div className="text-gray-400 text-sm">
              <p className="font-bold text-gray-300 mb-1">Corporate Office:</p>
              <p>Safdarjung Enclave, New Delhi</p>
              <p>Delhi 110029, India</p>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Services</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="/services/vaccinations" className="text-base text-gray-400 hover:text-white transition-colors">Vaccinations</a></li>
                  <li><a href="/services/minor-illness" className="text-base text-gray-400 hover:text-white transition-colors">Consultations</a></li>
                  <li><a href="/services/blood-collection" className="text-base text-gray-400 hover:text-white transition-colors">Blood Collection</a></li>
                  <li><a href="/services/physiotherapy" className="text-base text-gray-400 hover:text-white transition-colors">Physiotherapy</a></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#" className="text-base text-gray-400 hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#" className="text-base text-gray-400 hover:text-white transition-colors">Locations</a></li>
                  <li><a href="#" className="text-base text-gray-400 hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="text-base text-gray-400 hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Contact Us</h3>
                <ul className="mt-4 space-y-4">
                  <li className="text-base text-gray-400">
                    <span className="block text-gray-300 font-medium">North India</span>
                    <a href="tel:+918448449955" className="hover:text-white transition-colors">+91 8448449955</a>
                  </li>
                  <li className="text-base text-gray-400">
                    <span className="block text-gray-300 font-medium">Mumbai & Goa</span>
                    <a href="tel:+918447842852" className="hover:text-white transition-colors">+91 8447842852</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2025 MaxPetZ. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
