export default function RecruitmentInformation() {
  // This component displays recruitment information for Railway Recruitment Board (RRB) Junior Engineer (JE)
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Railway Recruitment Board (RRB) Junior Engineer (JE) Exam Details
      </h1>

      <div className="mb-4">
        <p className="text-gray-600">
          The Railway Recruitment Board (RRB) has announced the exam date for the recruitment of
          Junior Engineer (JE), Depot Material Superintendent, and Chemical & Metallurgical Assistant
          positions. A total of 7934 vacancies are available.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Important Dates</h2>

      <table className="table-auto w-full text-sm text-gray-500 border border-gray-200 rounded-lg mb-4">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left font-bold text-gray-900 uppercase bg-gray-50 border-b border-gray-200">
              Event
            </th>
            <th className="px-6 py-3 text-left font-bold text-gray-900 uppercase bg-gray-50 border-b border-gray-200">
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-6 py-4 border-b border-gray-200">Application Start</td>
            <td className="px-6 py-4 border-b border-gray-200">30 July 2024</td>
          </tr>
          <tr>
            <td className="px-6 py-4 border-b border-gray-200">Application Last Date</td>
            <td className="px-6 py-4 border-b border-gray-200">29 August 2024</td>
          </tr>
          <tr>
            <td className="px-6 py-4 border-b border-gray-200">Correction Portal</td>
            <td className="px-6 py-4 border-b border-gray-200">30 Aug - 8 Sep 2024</td>
          </tr>
          <tr>
            <td className="px-6 py-4 border-b border-gray-200">Exam Date</td>
            <td className="px-6 py-4 border-b border-gray-200">6 - 13 December 2024</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Application Fee</h2>

      <p className="text-gray-600 mb-4">
        The application fee is ₹500/- for General, OBC, and EWS candidates. The application fee for SC, ST,
        ESM, Female, and Transgender is ₹250/-.
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Vacancies and Eligibility</h2>

      <table className="table-auto w-full text-sm text-gray-500 border border-gray-200 rounded-lg mb-4">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left font-bold text-gray-900 uppercase bg-gray-50 border-b border-gray-200">
              Post Name
            </th>
            <th className="px-6 py-3 text-left font-bold text-gray-900 uppercase bg-gray-50 border-b border-gray-200">
              Vacancy
            </th>
            <th className="px-6 py-3 text-left font-bold text-gray-900 uppercase bg-gray-50 border-b border-gray-200">
              Qualification
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-6 py-4 border-b border-gray-200">
              Junior Engineer (JE), etc.
            </td>
            <td className="px-6 py-4 border-b border-gray-200">7934</td>
            <td className="px-6 py-4 border-b border-gray-200">
              B.E/ B.Tech Degree or Diploma in Related Discipline
            </td>
          </tr>
        </tbody>
      </table>

      <p className="text-gray-600 mb-4">
        The age limit for the recruitment is 18-36 Years. The crucial date for calculating the age limit
        is 1 January 2025. Relaxation in the upper age limit will be given as per the rules.
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Selection Process</h2>

      <p className="text-gray-600 mb-4">
        The selection process includes the written exam (Computer Based Test) CBT Stage-I and Stage-II.
        After that, the Document Verification and Medical Examination process will be completed before
        the final appointment.
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Important Links</h2>

      <table className="table-auto w-full text-sm text-gray-500 border border-gray-200 rounded-lg mb-4">
        <tbody>
          <tr>
            <td className="px-6 py-4 border-b border-gray-200">Exam Date Notice</td>
            <td className="px-6 py-4 border-b border-gray-200">
              <a
                href="https://pmsuryaghar.org.in/wp-content/uploads/2024/10/HaryanaJobs.in-RRB-Exam-Date-Notice.pdf"
                className="text-blue-500 hover:underline"
              >
                Exam Date
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 border-b border-gray-200">Notification (English)</td>
            <td className="px-6 py-4 border-b border-gray-200">
              <a
                href="https://pmsuryaghar.org.in/wp-content/uploads/2024/07/RRB-JE-2024-Notification-English.pdf"
                className="text-blue-500 hover:underline"
              >
                Notification
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 border-b border-gray-200">Notification (Hindi)</td>
            <td className="px-6 py-4 border-b border-gray-200">
              <a
                href="https://pmsuryaghar.org.in/wp-content/uploads/2024/07/RRB-JE-2024-Notification-Hindi.pdf"
                className="text-blue-500 hover:underline"
              >
                Notification
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 border-b border-gray-200">Apply Online</td>
            <td className="px-6 py-4 border-b border-gray-200">
              <a
                href="https://www.rrbapply.gov.in/"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener"
              >
                Apply Online
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 border-b border-gray-200">FAQs</td>
            <td className="px-6 py-4 border-b border-gray-200">
              <a
                href="https://pmsuryaghar.org.in/wp-content/uploads/2024/07/RRB-JE-FAQs-2024.pdf"
                className="text-blue-500 hover:underline"
              >
                FAQs
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 border-b border-gray-200">RRB Regional Websites Links</td>
            <td className="px-6 py-4 border-b border-gray-200">
              <a
                href="https://indianrailways.gov.in/railwayboard/view_section.jsp?lang=0&amp;id=0,7,1281"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener"
              >
                RRBs
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}