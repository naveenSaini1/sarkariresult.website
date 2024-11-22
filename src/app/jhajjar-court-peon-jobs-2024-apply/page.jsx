export default function JhajjarCourtRecruitment() {
  // This component displays recruitment information for Peon positions at Jhajjar Court.  It includes details about the application process, deadlines, qualifications, and vacancy breakdown.

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Jhajjar Court Recruitment 2024: Peon Positions</h1>
      <p className="mb-4">
        The District and Sessions Judge, Jhajjar District Courts, has announced the recruitment of 10 Peon positions on a temporary basis.  This is an excellent opportunity for candidates seeking government employment in Haryana.  The application process is offline and is open until December 12, 2024.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Key Highlights</h2>
        <ul className="list-disc list-inside">
          <li><strong>Organization:</strong> District and Sessions Judge, Jhajjar</li>
          <li><strong>Post Name:</strong> Peon</li>
          <li><strong>Vacancies:</strong> 10</li>
          <li><strong>Salary:</strong> Rs. 16900-53500/-</li>
          <li><strong>Location:</strong> Haryana</li>
          <li><strong>Application Fee:</strong> Rs. 0/-</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Important Dates</h2>
        <table className="table-auto w-full mb-4">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2">Event</th>
              <th className="px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2">Application Start</td>
              <td className="px-4 py-2">November 22, 2024</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Application Deadline</td>
              <td className="px-4 py-2">December 12, 2024, up to 05:00 pm</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Interview Date</td>
              <td className="px-4 py-2">To be announced</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Vacancy Details and Qualifications</h2>
        <table className="table-auto w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2">Post Name</th>
              <th className="px-4 py-2">Vacancy</th>
              <th className="px-4 py-2">Qualification</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2">Peon</td>
              <td className="px-4 py-2">10 (UR-4, BCA ESM-1, SC-3, PWD LLD-1, BCB ESM-1)</td>
              <td className="px-4 py-2">8th Pass</td>
            </tr>
          </tbody>
        </table>
        <p className="mb-2"><strong>Age Limit:</strong> 18-42 years (as of January 1, 2024). Age relaxation as per rules.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Selection Process</h2>
        <ol className="list-decimal list-inside">
          <li>Scrutiny of Application Forms</li>
          <li>Interview</li>
          <li>Document Verification</li>
          <li>Medical Examination</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">How to Apply</h2>
        <ol className="list-decimal list-inside">
          <li>Check eligibility criteria in the notification.</li>
          <li>Download the application form from the link below or jhajjar.dcourts.gov.in</li>
          <li>Fill out the form and attach required documents.</li>
          <li>Write the Post Name on the application envelope.</li>
          <li>Send the completed application to: Office of District and Sessions Judge, Judicial Courts Complex, Gurugram Road, Jhajjar, Haryana</li>
        </ol>
        <a href="https://haryanajobs.org/wp-content/uploads/2024/11/Jhajjar-Court-Peon-Notification-and-Application-Form-22-Nov-2024.pdf" target="_blank" rel="noopener" className="text-blue-500 underline">Download Notification and Application Form</a>
        <a href="https://jhajjar.dcourts.gov.in/notice-category/recruitments/" target="_blank" rel="noopener" className="text-blue-500 underline ml-4">Jhajjar Court Official Website</a>
      </section>

      <p className="text-gray-600 text-sm mt-8">Keywords: Jhajjar Court, Recruitment, Peon, Haryana Jobs, Government Jobs, Application Form, 2024</p>
    </div>
  );
}