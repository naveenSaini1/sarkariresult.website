export default function RohtakCourtRecruitment() {
  // This component displays information about the Rohtak Court Recruitment 2024. 
  // It includes details about the recruitment process, important dates, application fee, vacancies, and eligibility criteria. 
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Rohtak Court Recruitment 2024</h1>
      <div className="mb-4">
        <p className="text-gray-600">
          The District and Sessions Judge, Rohtak has announced the recruitment of 22 positions, including 21 Clerks and 1 driver position, on an ad-hoc basis. 
          The Rohtak Court Notification was released on September 24, 2024, and applications can be submitted offline until October 14, 2024. 
          Candidates can download the Rohtak Court Clerk Vacancy 2024 Notification and Application Form in PDF format from the direct link provided below or visit the website rohtak.dcourts.gov.in.
        </p>
      </div>
      <div className="mb-4">
        <p className="text-gray-600">
          The selected candidates will receive a consolidated monthly pay of Rs. 25000/- in the Rohtak District and Sessions Court, Rohtak, Haryana.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Important Dates</h2>
      <div className="mb-4">
        <table className="table-auto w-full text-left whitespace-no-wrap">
          <thead>
            <tr>
              <th className="px-4 py-3 text-gray-800 font-bold text-left">Event</th>
              <th className="px-4 py-3 text-gray-800 font-bold text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-3 text-gray-700">Application Start</td>
              <td className="px-4 py-3 text-gray-700">September 24, 2024</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-gray-700">Application Last Date</td>
              <td className="px-4 py-3 text-gray-700">October 14, 2024, up to 05:00 pm.</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-gray-700">Exam Date</td>
              <td className="px-4 py-3 text-gray-700">To be Notified Later</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Application Fee</h2>
      <div className="mb-4">
        <p className="text-gray-600">There is no application fee required to apply for the Rohtak Court Clerk Recruitment 2024.</p>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Vacancies and Eligibility</h2>
      <div className="mb-4">
        <p className="text-gray-600">
          <strong>Age Limit:</strong> The age limit to apply for the Rohtak Court Recruitment 2024 is 18-42 Years. The cutoff date for age calculation is January 1, 2024. 
          Age relaxation will be provided as per the rules.
        </p>
        <table className="table-auto w-full text-left whitespace-no-wrap">
          <thead>
            <tr>
              <th className="px-4 py-3 text-gray-800 font-bold text-left">Post Name</th>
              <th className="px-4 py-3 text-gray-800 font-bold text-left">Vacancy</th>
              <th className="px-4 py-3 text-gray-800 font-bold text-left">Qualification</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-3 text-gray-700">Clerk</td>
              <td className="px-4 py-3 text-gray-700">21</td>
              <td className="px-4 py-3 text-gray-700">Any Graduate + Typing</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-gray-700">Driver</td>
              <td className="px-4 py-3 text-gray-700">1</td>
              <td className="px-4 py-3 text-gray-700">8th Pass + LTV Driving License + 2 Yrs. Exp.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Selection Process</h2>
      <div className="mb-4">
        <p className="text-gray-600">The selection process for the Rohtak Court Recruitment 2024 includes the following stages:</p>
        <ol className="list-decimal list-inside text-gray-600">
          <li>Written Exam + Typing Test (For Clerk)</li>
          <li>Interview + Driving Test (For Driver)</li>
          <li>Document Verification</li>
          <li>Medical Examination</li>
        </ol>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Notification and Application Form Link</h2>
      <div className="mb-4">
        <p className="text-gray-600">The direct link to the Rohtak Court Recruitment 2024 Notification and Application Form is given below.</p>
        <table className="table-auto w-full text-left whitespace-no-wrap">
          <tbody>
            <tr>
              <td className="px-4 py-3 text-gray-700">Rohtak Court Recruitment 2024 Notification and Application Form PDF</td>
              <td className="px-4 py-3 text-gray-700"><a href="https://pmsuryaghar.org.in/wp-content/uploads/2024/09/HaryanaJobs.in-Rohtak-Court-Recruitment-2024-Notification-and-Application-Form-PDF.pdf" className="text-blue-500">Notification & Application Form</a></td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-gray-700">Rohtak Court Official Website</td>
              <td className="px-4 py-3 text-gray-700"><a href="https://rohtak.dcourts.gov.in/notice-category/recruitments/" target="_blank" rel="noopener" className="text-blue-500">RTK Court</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}