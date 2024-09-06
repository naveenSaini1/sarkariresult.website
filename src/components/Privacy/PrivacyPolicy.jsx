import { clientEndPoints } from '@/constant/ClientUrl';
import Link from 'next/link';
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="w-[95%] mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
    {/* Title */}
    <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
      Privacy Policy
    </h1>
    
    {/* Introduction */}
    <p className="text-gray-700 leading-relaxed mb-6">
      At <span className="font-semibold">SarkariResult.website</span>, we value and respect the privacy of our users. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our website, in compliance with applicable data protection laws, including the General Data Protection Regulation (GDPR) and Google's AdSense program policies.
    </p>
    <p className="text-gray-700 leading-relaxed mb-6">
      By using <span className="font-semibold">SarkariResult.website</span>, you agree to the collection and use of information in accordance with this policy.
    </p>

    {/* Section: Information We Collect */}
    <section className="mb-8">
      <h2 className="text-2xl font-semibold text-secondaryTxtColor mb-4">1. Information We Collect</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        When you visit <span className="font-semibold">SarkariResult.website</span>, we may collect two types of information:
      </p>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Personal Information</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        We collect personal information that you voluntarily provide to us when you:
      </p>
      <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
        <li>Subscribe to our newsletter</li>
        <li>Fill out a form on the website</li>
        <li>Contact us via email or our contact form</li>
        <li>Comment on blog posts or content</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        The types of personal information may include your name, email address, and any other information you choose to provide.
      </p>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Non-Personal Information</h3>
      <p className="text-gray-700 leading-relaxed">
        We also collect non-personal information automatically when you interact with our website, such as:
      </p>
      <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
        <li>
          <span className="font-semibold">Cookies and tracking technologies:</span> We may use cookies, web beacons, and similar technologies to enhance user experience, analyze site traffic, and for targeted advertising.
        </li>
        <li>
          <span className="font-semibold">Log data:</span> This includes your browser type, device information, IP address, pages visited, time spent on pages, and other diagnostic data.
        </li>
      </ul>
    </section>

    {/* Section: How We Use Your Information */}
    <section className="mb-8">
      <h2 className="text-2xl font-semibold text-secondaryTxtColor mb-4">2. How We Use Your Information</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        We use the information we collect for the following purposes:
      </p>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>To provide, operate, and maintain our website</li>
        <li>To improve our website</li>
        <li>To send periodic emails</li>
        <li>To personalize user experience</li>
        <li>For advertising and analytics</li>
      </ul>
    </section>

    {/* Section: Google AdSense & Cookies */}
    <section className="mb-8">
      <h2 className="text-2xl font-semibold text-secondaryTxtColor mb-4">3. Google AdSense & Cookies</h2>
      <p className="text-gray-700 leading-relaxed">
        <span className="font-semibold">SarkariResult.website</span> uses Google AdSense, a third-party service, to display ads on our website. Google AdSense uses cookies to serve ads based on your prior visits to our website or other websites. You can opt out of the use of the DART cookie by visiting the Google Ads Settings.
      </p>
    </section>

    {/* Section: Data Protection & Security */}
    <section className="mb-8">
      <h2 className="text-2xl font-semibold text-secondaryTxtColor mb-4">4. Data Protection & Security</h2>
      <p className="text-gray-700 leading-relaxed">
        We take the security of your personal information seriously and use industry-standard practices, including SSL encryption and secure server protocols. However, no method of transmission over the Internet or electronic storage is 100% secure.
      </p>
    </section>

    {/* Section: Sharing Your Information */}
    <section className="mb-8">
      <h2 className="text-2xl font-semibold text-secondaryTxtColor mb-4">5. Sharing Your Information</h2>
      <p className="text-gray-700 leading-relaxed">
        We do not sell, trade, or rent your personal information to third parties. We may share information with third-party service providers who assist us in operating our website or serving you, provided they agree to keep your information confidential.
      </p>
    </section>

    {/* Section: Third-Party Links and Services */}
    <section className="mb-8">
      <h2 className="text-2xl font-semibold text-secondaryTxtColor mb-4">6. Third-Party Links and Services</h2>
      <p className="text-gray-700 leading-relaxed">
        Our website may contain links to third-party websites, services, or offers. These sites operate independently of our privacy policy, and we encourage you to review their privacy policies.
      </p>
    </section>

    {/* Section: Children's Privacy */}
    <section className="mb-8">
      <h2 className="text-2xl font-semibold text-secondaryTxtColor mb-4">7. Children's Privacy</h2>
      <p className="text-gray-700 leading-relaxed">
        <span className="font-semibold">SarkariResult.website</span> is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13 years of age.
      </p>
    </section>

    {/* Section: Your Data Rights */}
    <section className="mb-8">
      <h2 className="text-2xl font-semibold text-secondaryTxtColor mb-4">8. Your Data Rights</h2>
      <p className="text-gray-700 leading-relaxed">
        If you are located in the European Economic Area (EEA), you have certain rights under data protection laws, including the right to access, correct, delete, or restrict the processing of your data.
      </p>
    </section>

    {/* Section: Changes to Our Privacy Policy */}
    <section className="mb-8">
      <h2 className="text-2xl font-semibold text-secondaryTxtColor mb-4">9. Changes to Our Privacy Policy</h2>
      <p className="text-gray-700 leading-relaxed">
        <span className="font-semibold">SarkariResult.website</span> reserves the right to update or change this Privacy Policy at any time. We encourage you to review this page periodically to stay informed about how we protect your information.
      </p>
    </section>

    {/* Section: Contact Us */}
    <section>
      <h2 className="text-2xl font-semibold text-secondaryTxtColor mb-4">10. Contact Us</h2>
      <p className="text-gray-700 leading-relaxed">
        If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
      </p>
      <p className="text-gray-700 mb-4">
        <span className="font-semibold">Email Us</span> <Link href={clientEndPoints.contact} className="text-blue-500">Message Us</Link>
      </p>
      <p className="text-gray-700">
        <span className="font-semibold">Phone:</span> +91-XXXXXXXXXX
      </p>
    </section>
  </div>
  );
};

export default PrivacyPolicy;