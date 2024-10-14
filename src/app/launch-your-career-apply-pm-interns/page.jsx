export default function InternshipScheme() {
  // This component displays information about the Prime Minister's Internship Scheme,
  // highlighting key details like eligibility, benefits, application process, and important links.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Prime Minister's Internship Scheme
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        The Prime Minister's Internship Scheme, launched by the Ministry of Corporate Affairs, offers
        opportunities for young professionals to gain valuable experience in top Indian companies.
        This program provides exposure to real-world business practices and helps individuals develop
        their skills in a practical setting.
      </p>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Highlights</h2>
      <ul className="list-disc ml-6 text-gray-600">
        <li>
          The program offers a year-long internship experience (12 months) in a diverse range of sectors.
        </li>
        <li>
          Open to individuals between the ages of 21 and 24 years old (as of the application deadline).
        </li>
        <li>
          Monthly stipend of ₹5000/- and a one-time grant of ₹6000/- are provided to participating
          interns.
        </li>
        <li>
          The scheme aims to provide one crore internship opportunities to youth over the next five
          years.
        </li>
      </ul>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Eligibility</h2>
      <ul className="list-disc ml-6 text-gray-600">
        <li>
          Must be a citizen of India.
        </li>
        <li>
          Age must be between 21 and 24 years as of the application deadline.
        </li>
        <li>
          Must have completed a minimum of 10th standard or equivalent.
        </li>
        <li>
          Must not be currently engaged in full-time employment or education.
        </li>
      </ul>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Ineligibility</h2>
      <ul className="list-disc ml-6 text-gray-600">
        <li>
          Individuals under 21 years of age or over 24 years of age (as of the application deadline).
        </li>
        <li>
          Individuals currently in full-time employment or education.
        </li>
        <li>
          Graduates from certain institutions like IITs, IIMs, National Law Universities, IISER, NIDs,
          or IIITs.
        </li>
        <li>
          Individuals holding qualifications like CA, CMA, CS, MBBS, BDS, MBA, PhD, or any master's
          or higher degree (recognized by the UGC).
        </li>
        <li>
          Individuals undergoing any skill, apprenticeship, internship, or training program under a
          Central or State Government scheme.
        </li>
        <li>
          Individuals who have already completed an apprenticeship under the National
          Apprenticeship Training Scheme (NATS) or National Apprenticeship Promotion Scheme (NAPS).
        </li>
        <li>
          Individuals whose family income (self, parents, or spouse) exceeds ₹8 lakh for FY 2023-24.
        </li>
        <li>
          Individuals whose family (self, parents, or spouse) has a permanent/regular government
          employee (excluding contractual employees). "Government" includes Central and State
          Governments, Union Territory administrations, Central and State Public Sector Undertakings
          (PSUs), statutory organizations, and local bodies.
        </li>
      </ul>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Vacancies</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-gray-600">
          <thead>
            <tr className="text-left bg-gray-100 font-bold">
              <th>Post Name</th>
              <th>Vacancy</th>
              <th>Qualification</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-left">
              <td>Apprentice</td>
              <td>80000+</td>
              <td>10th/ 12th/ ITI/ Polytechnic/ Diploma/ Graduate</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Application Process</h2>
      <p className="text-gray-600 mb-4">
        Candidates can apply online for the Prime Minister's Internship Scheme through the official
        website:
      </p>
      <a
        href="https://pminternship.mca.gov.in/login/"
        target="_blank"
        rel="noopener"
        className="text-blue-500 hover:underline"
      >
        PM Internship Scheme Official Website
      </a>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Important Resources</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-gray-600">
          <tbody>
            <tr className="text-left">
              <td>
                <span className="font-bold">Apply Online</span>
              </td>
              <td>
                <a
                  href="https://pminternship.mca.gov.in/login/"
                  target="_blank"
                  rel="noopener"
                  className="text-blue-500 hover:underline"
                >
                  Registration
                </a>
              </td>
              <td>
                <a
                  href="https://pminternship.mca.gov.in/login/"
                  target="_blank"
                  rel="noopener"
                  className="text-blue-500 hover:underline"
                >
                  Login
                </a>
              </td>
            </tr>
            <tr className="text-left">
              <td>
                <span className="font-bold">User Manual</span>
              </td>
              <td>
                <a
                  href="https://pmsuryaghar.org.in/wp-content/uploads/2024/10/PM-Internship-Scheme-User-Manual-English.pdf"
                  target="_blank"
                  rel="noopener"
                  className="text-blue-500 hover:underline"
                >
                  English
                </a>
              </td>
              <td>
                <a
                  href="https://pmsuryaghar.org.in/wp-content/uploads/2024/10/PM-Internship-Scheme-User-Manual-Hindi.pdf"
                  target="_blank"
                  rel="noopener"
                  className="text-blue-500 hover:underline"
                >
                  Hindi
                </a>
              </td>
            </tr>
            <tr className="text-left">
              <td>
                <span className="font-bold">FAQs</span>
              </td>
              <td>
                <a
                  href="https://pmsuryaghar.org.in/wp-content/uploads/2024/10/PM-Internship-Scheme-FAQs-English.pdf"
                  target="_blank"
                  rel="noopener"
                  className="text-blue-500 hover:underline"
                >
                  English
                </a>
              </td>
              <td>
                <a
                  href="https://pmsuryaghar.org.in/wp-content/uploads/2024/10/PM-Internship-Scheme-FAQs-Hindi.pdf"
                  target="_blank"
                  rel="noopener"
                  className="text-blue-500 hover:underline"
                >
                  Hindi
                </a>
              </td>
            </tr>
            <tr className="text-left">
              <td>
                <span className="font-bold">Scheme Guidelines</span>
              </td>
              <td>
                <a
                  href="https://pmsuryaghar.org.in/wp-content/uploads/2024/10/PM-Internship-Scheme-Guidelines-English.pdf"
                  target="_blank"
                  rel="noopener"
                  className="text-blue-500 hover:underline"
                >
                  English
                </a>
              </td>
              <td>
                <a
                  href="https://pmsuryaghar.org.in/wp-content/uploads/2024/10/PM-Internship-Scheme-Guidelines-Hindi.pdf"
                  target="_blank"
                  rel="noopener"
                  className="text-blue-500 hover:underline"
                >
                  Hindi
                </a>
              </td>
            </tr>
            <tr className="text-left">
              <td>
                <span className="font-bold">Registration Video</span>
              </td>
              <td>
                <a
                  href="https://www.youtube.com/watch?v=OU6aPWZ6au4&ab_channel=MinistryofCorporateAffairs"
                  target="_blank"
                  rel="noopener"
                  className="text-blue-500 hover:underline"
                >
                  English
                </a>
              </td>
              <td>
                <a
                  href="https://www.youtube.com/watch?v=WrCEpQ6BzNU"
                  target="_blank"
                  rel="noopener"
                  className="text-blue-500 hover:underline"
                >
                  Hindi
                </a>
              </td>
            </tr>
            <tr className="text-left">
              <td>
                <span className="font-bold">List of Participating Companies</span>
              </td>
              <td colSpan={2}>
                <a
                  href="https://pmsuryaghar.org.in/wp-content/uploads/2024/10/PM-Internship-Scheme-List-of-Companies-14-Oct-2024.pdf"
                  target="_blank"
                  rel="noopener"
                  className="text-blue-500 hover:underline"
                >
                  List
                </a>
              </td>
            </tr>
            <tr className="text-left">
              <td>
                <span className="font-bold">Official Website</span>
              </td>
              <td colSpan={2}>
                <a
                  href="https://pminternship.mca.gov.in/"
                  target="_blank"
                  rel="noopener"
                  className="text-blue-500 hover:underline"
                >
                  PMIS
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        <div>
          <h3 className="font-bold text-gray-800">How to apply for the PM Internship Scheme?</h3>
          <p className="text-gray-600">
            Apply online through the official website:
            <a
              href="https://pminternship.mca.gov.in/login/"
              target="_blank"
              rel="noopener"
              className="text-blue-500 hover:underline"
            >
              pminternship.mca.gov.in
            </a>
          </p>
        </div>
        <div>
          <h3 className="font-bold text-gray-800">
            How many companies are participating in the PM Internship Scheme?
          </h3>
          <p className="text-gray-600">
            India's Top 500 companies are participating in the Prime Minister's Internship Scheme.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-gray-800">
            When did the PM Internship Registration start?
          </h3>
          <p className="text-gray-600">
            The registration process for the Prime Minister's Internship Scheme began on October 12,
            2024, at 05:00 PM.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-gray-800">What is the stipend for the PM Internship Scheme?</h3>
          <p className="text-gray-600">
            The scheme offers a monthly stipend of ₹5000/- and a one-time grant of ₹6000/-.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-gray-800">
            What is the duration of the PM Internship Scheme?
          </h3>
          <p className="text-gray-600">The program duration is one year (12 months).</p>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Keywords</h2>
        <p className="text-gray-600">
          Prime Minister Internship Scheme, PMIS, Internship, India, Ministry of Corporate
          Affairs, MCA, Government of India, Top Companies, Youth, Skill Development, Job
          Opportunities, Stipend, Registration, Apply Online, FAQs
        </p>
      </div>
    </div>
  );
}