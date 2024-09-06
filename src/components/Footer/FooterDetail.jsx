export default function FooterDetails(){
    return(
        <>
        
        <footer className="bg-gray-100 text-gray-800 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          {/* Central circle */}
          <div className="w-48 h-48 rounded-full bg-[rgb(80,216,144)] text-white flex items-center justify-center mb-8 md:mb-0 shadow-lg">
            <div className="text-center">
              <h2 className="text-2xl font-bold">Sarkari Result</h2>
              <p className="text-sm">Est. 2012</p>
            </div>
          </div>
          
          {/* Main description */}
          <div className="md:w-2/3 text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4 text-[rgb(80,216,144)]">The Ultimate Guide for Securing Indian Government Jobs</h3>
            <p className="mb-4">
              Sarkari Result Website is a one-stop destination for millions of Indian job seekers aspiring to land a stable and well-paying government job, or Sarkari Naukri. We simplify the complex process of applying for these jobs by providing all the necessary information in one place.
            </p>
            <p>
              Whether you're looking for information on the latest government job vacancies, important exam dates, eligibility criteria, or detailed guides on how to apply, Sarkari Result website is here to help you every step of the way.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[rgb(80,216,144)]">Why is a Sarkari Naukri So Desirable?</h4>
            <p>
              In India, government jobs have long been revered for their job security, comprehensive benefits, and sense of duty to the nation. The term "Sarkari Naukri" embodies this prestigious career path, offering stability in a world where private-sector jobs may not offer the same reliability.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[rgb(80,216,144)]">How We Help You Secure a Government Job</h4>
            <ul className="list-disc list-inside">
              <li>Finding the Latest Government Job Vacancies</li>
              <li>Understanding Job Requirements and Eligibility</li>
              <li>Tracking Important Dates</li>
              <li>Accessing Exam Details and Preparation Resources</li>
            </ul>
          </div>
        </div>

        <div className="text-center mb-8">
          <h4 className="text-lg font-semibold mb-4 text-[rgb(80,216,144)]">Popular Government Job Categories</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {['IAS & IFS', 'Banking Jobs', 'Defense Jobs', 'SSC Exams', 'State-Level Exams', 'UPSC Exams'].map((category) => (
              <a key={category} href="#" className="text-sm bg-white text-[rgb(80,216,144)] border border-[rgb(80,216,144)] px-4 py-2 rounded-full hover:bg-[rgb(80,216,144)] hover:text-white transition-all duration-300">
                {category}
              </a>
            ))}
          </div>
        </div>

       
      </div>
    </footer>
        </>
    )
}