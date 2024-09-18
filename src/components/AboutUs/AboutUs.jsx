import { clientEndPoints } from "@/constant/ClientUrl";
import Link from "next/link";

const AboutUs = () => {
    return (
      <div className="w-[95%] mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      {/* Section: Welcome Message */}
      <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
        About Us
      </h1>
      <p className="text-gray-700 leading-relaxed mb-6">
        Welcome to <span className="font-semibold">SarkariResult.website</span>, your trusted platform for all things related to government jobs in India. Since our inception, we have been committed to helping millions of job seekers across the nation navigate the complexities of government job applications, competitive exams, and recruitment processes. Our mission is simple: to be the one-stop destination for all your Sarkari Naukri needs, ensuring you have the information, resources, and support to land your dream job in the government sector.
      </p>

      {/* Section: Who We Are */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-secondaryTxtColor mb-4">Who We Are</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          At <span className="font-semibold">SarkariResult.website</span>, we understand the importance of government jobs in India. We know how competitive and overwhelming the Sarkari job market can be, and that’s why we are dedicated to making the process easier for you. Whether you’re a fresh graduate looking to start your career or an experienced professional seeking stability, our platform is designed to simplify your job search and application journey.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Our team consists of experts with years of experience in the recruitment and government job sectors. We work tirelessly to provide you with accurate, up-to-date information on all the latest government job openings, exam dates, admit cards, results, and other critical details. We strive to ensure that you never miss an opportunity.
        </p>
      </section>

      {/* Section: What We Do */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-secondaryTxtColor mb-4">What We Do</h2>
        <ul className="list-disc list-inside space-y-4 text-gray-700">
          <li>
            <span className="font-semibold">Job Listings:</span> We provide a regularly updated list of the latest government job openings across various sectors, including administrative services, law enforcement, banking, defense, education, and more.
          </li>
          <li>
            <span className="font-semibold">Exam Notifications and Results:</span> Stay informed about upcoming government exams, application deadlines, exam dates, and result announcements.
          </li>
          <li>
            <span className="font-semibold">Application Guidance:</span> Our step-by-step guides help you through the entire process, from filling out online applications to submitting documents and preparing for exams.
          </li>
          <li>
            <span className="font-semibold">Exam Preparation Resources:</span> We provide valuable study materials, including previous years' question papers, exam syllabi, and preparation tips, to help you succeed in competitive government exams.
          </li>
        </ul>
      </section>

      {/* Section: Why Choose Us? */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-secondaryTxtColor mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside space-y-4 text-gray-700">
          <li>
            <span className="font-semibold">Accurate & Timely Information:</span> We ensure our job listings and exam notifications are accurate and updated regularly.
          </li>
          <li>
            <span className="font-semibold">User-Friendly Interface:</span> Our website is designed with simplicity in mind, making it easy to navigate and find relevant information.
          </li>
          <li>
            <span className="font-semibold">Comprehensive Coverage:</span> We cover jobs from all sectors of the Indian government, ensuring access to the widest range of opportunities possible.
          </li>
          <li>
            <span className="font-semibold">Dedicated Support:</span> We offer comprehensive guides and support to help you succeed in your Sarkari Naukri journey.
          </li>
        </ul>
      </section>

      {/* Section: Mission */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-secondaryTxtColor mb-4">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          Our mission at <span className="font-semibold">SarkariResult.website</span> is to empower Indian job seekers by providing them with the most reliable, up-to-date, and comprehensive information about government jobs. We are committed to helping you find the right job that not only offers financial stability but also aligns with your passion to serve the nation.
        </p>
      </section>

      {/* Section: Vision */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-secondaryTxtColor mb-4">Our Vision</h2>
        <p className="text-gray-700 leading-relaxed">
          We envision a future where every eligible and deserving candidate in India has access to the best government job opportunities without the hassle of navigating multiple sources. We aim to make <span className="font-semibold">SarkariResult.website</span> the go-to platform for accurate, timely, and valuable information that will lead you to your dream government job.
        </p>
      </section>

      {/* Section: Connect With Us */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-secondaryTxtColor mb-4">Connect With Us</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          We’re here to help you every step of the way. If you have any questions, need more information, or want to stay updated on the latest job postings, feel free to reach out to us. You can also follow us on our social media channels to stay updated with the latest Sarkari Naukri news and notifications.
        </p>
        <p className="text-gray-700 mb-4">
        <span className="font-semibold">Email Us</span> <Link href={clientEndPoints.contact} className="text-blue-500">Message Us</Link>
        </p>
       
        <p className="text-gray-700">
          Follow us on: <a href="https://www.facebook.com/people/Sarkariresultwebsite/61566030113654/" target="_blank" className="text-secondaryTxtColor hover:underline">Facebook</a>, <a href="https://www.linkedin.com/company/sarkariresultwebsite" className="text-secondaryTxtColor hover:underline" target="_blank">Linkdin</a>,
           <a href="https://t.me/sarkariresultwebsiteme" className="text-secondaryTxtColor hover:underline">Telegrame</a>
           <a href="https://whatsapp.com/channel/0029VajLEvd9WtCC6t3RNM3c" className="text-secondaryTxtColor hover:underline">Whatsapp</a>

       
        </p>
      </section>

      {/* Closing */}
      <p className="text-center text-gray-700 mt-8">
        Thank you for choosing <span className="font-semibold">SarkariResult.website</span>. We are honored to be a part of your journey toward securing a government job and a better future.
      </p>
    </div>
    );
  };
  
  export default AboutUs;