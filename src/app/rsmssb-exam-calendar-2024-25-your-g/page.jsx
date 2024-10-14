export default function RecruitmentInformation() {
  // This component displays recruitment information for the Rajasthan Staff Selection Board (RSMSSB). It includes details about the exam calendar, key dates, and official website.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">RSMSSB Recruitment Information</h1>
      <p className="text-gray-600 mb-4">
        The Rajasthan Staff Selection Board (RSMSSB) has announced the exam calendar for various recruitment posts.
        The board will conduct written examinations based on the schedule outlined in the RSMSSB Exam Calendar.
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Highlights</h2>
      <ul className="list-disc ml-6 text-gray-600">
        <li>The exam calendar outlines the schedule for multiple recruitment posts.</li>
        <li>The RSMSSB will conduct written exams as per the schedule provided in the calendar.</li>
        <li>Candidates can access the RSMSSB Exam Calendar from the official website.</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Download the RSMSSB Exam Calendar</h2>
      <table className="table-auto w-full text-gray-600">
        <thead>
          <tr>
            <th className="px-4 py-2 font-medium text-left">Document</th>
            <th className="px-4 py-2 font-medium text-left">Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">RSMSSB Exam Calendar PDF</td>
            <td className="px-4 py-2">
              <a href="https://pmsuryaghar.org.in/wp-content/uploads/2024/10/RSMSSB-Exam-Calendar-2024-2025-2026.pdf" className="text-blue-500 hover:underline">
                Download Calendar
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">RSMSSB Official Website</td>
            <td className="px-4 py-2">
              <a href="https://rsmssb.rajasthan.gov.in/page?menuName=ApBuI6wdvnNKC6MoOgFsfXwFRsE7cKLr" target="_blank" rel="noopener" className="text-blue-500 hover:underline">
                Visit Website
              </a>
            </td>
          </tr>
        </tbody>
      </table>

      <p className="text-gray-600 mt-4">
        For the most up-to-date information and any further updates, please refer to the official RSMSSB website.
      </p>

      <p className="text-gray-600 mt-4">
        <strong>Keywords:</strong> RSMSSB, Exam Calendar, Recruitment, Rajasthan, Government Jobs, Exam Schedule, PDF Download
      </p>
    </div>
  );
}