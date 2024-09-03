// Footer.js
export default function Footer() {
    return (
      <footer className="bg-secondaryBgColor mt-20 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Stay Updated with Sarkari Result</h3>
              <p className="text-base">
                Get comprehensive details and timely notifications for all government job openings across India. Never miss out on your dream job opportunity. Subscribe now and be the first to know about new opportunities!
              </p>
              <div className="mt-6">
                <button className="bg-white text-[#9F1E35] px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition-colors duration-300">
                  Subscribe Now
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-base">© 2024 Sarkari Result</p>
              </div>
              <div className="space-x-6">
                <a href="#" className="hover:text-gray-300 transition-colors duration-300">
                  About
                </a>
                <a href="#" className="hover:text-gray-300 transition-colors duration-300">
                  Contact
                </a>
                <a href="#" className="hover:text-gray-300 transition-colors duration-300">
                  Privacy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }