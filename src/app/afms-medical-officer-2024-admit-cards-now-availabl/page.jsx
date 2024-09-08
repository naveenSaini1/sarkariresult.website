export default function RecruitmentInformation() {
  // Displays recruitment information for AFMS Medical Officer 2024. Includes post details, brief information, application fee, important dates, and vacancy details.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">AFMS Medical Officer 2024</h1>

      <div className="mb-4">
        <p className="font-bold text-green-500">Name of the Post:</p>
        <p>AFMS Medical Officer 2024 Admit Card Download</p>
      </div>

      <div className="mb-4">
        <p className="font-bold text-green-500">Post Date:</p>
        <p>06-07-2024</p>
      </div>

      <div className="mb-4">
        <p className="font-bold text-green-500">Latest Update:</p>
        <p>22-08-2024</p>
      </div>

      <div className="mb-4">
        <p className="font-bold text-green-500">Total Vacancy:</p>
        <p>450</p>
      </div>

      <p className="mb-4">
        <span className="font-bold text-red-500">Brief Information:</span>
        Armed Forces Medical Services (AFMS) has published a Notification for the recruitment of Medical Officer Vacancy. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply Online.
      </p>

      <h2 className="text-2xl font-bold mb-4">Important Information</h2>

      <div className="mb-4">
        <p className="font-bold text-red-500">Application Fee</p>
        <ul className="list-disc ml-6">
          <li>Fee for all Candidates: Rs. 200/-</li>
          <li>Payment Mode: Through Online (internet banking/Credit Card/Debit Card)</li>
        </ul>
      </div>

      <div className="mb-4">
        <p className="font-bold text-red-500">Important Dates</p>
        <ul className="list-disc ml-6">
          <li>Starting Date for Apply Online: 16-07-2024</li>
          <li>Last Date for Apply Online: 04-08-2024</li>
          <li>Date of Interview: 28-08-2024 (Tentatively)</li>
        </ul>
      </div>

      <div className="mb-4">
        <p className="font-bold text-red-500">Age Limit (as on 31-12-2024)</p>
        <ul className="list-disc ml-6">
          <li>Age Limit for MBBS Degree Candidates: 30 Years (only those born on or after 02 Jan 1995 are eligible)</li>
          <li>Age Limit for PG Degree Candidates: 35 Years (only those born on or after 02 Jan 1990 are eligible)</li>
        </ul>
      </div>

      <div className="mb-4">
        <p className="font-bold text-red-500">Qualification</p>
        <ul className="list-disc ml-6">
          <li>Candidates should possess MBBS</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>

      <table className="table-auto w-full border border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left font-bold text-purple-500">Post Name</th>
            <th className="px-4 py-2 text-left font-bold text-purple-500">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 text-center">Medical Officer</td>
            <td className="px-4 py-2 text-center">450</td>
          </tr>
        </tbody>
      </table>

      <p className="mb-4">
        <span className="font-bold text-blue-500">Interested Candidates Can Read the Full Notification Before Attend</span>
      </p>

      <h2 className="text-2xl font-bold mb-4">Important Links</h2>

      <table className="table-auto w-full border border-gray-300">
        <tbody>
          <tr>
            <td className="px-4 py-2 text-left font-bold text-green-500">Eligible & Short Listed/ Not Eligible Candidates List (22-08-2024)</td>
            <td className="px-4 py-2 text-center"><a href="https://amcsscentry.gov.in/faq/implinks/" target="_blank" rel="noopener" className="underline text-blue-500">Click Here</a></td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-left font-bold text-green-500">Admit Card (20-08-2024)</td>
            <td className="px-4 py-2 text-center"><a href="https://www.amcsscentry.gov.in/oletter" target="_blank" rel="noopener" className="underline text-blue-500">Click Here</a></td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-left font-bold text-green-500">Apply Online (16-07-2024)</td>
            <td className="px-4 py-2 text-center"><a href="https://www.amcsscentry.gov.in/" target="_blank" rel="noopener" className="underline text-blue-500">Click Here</a></td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-left font-bold text-green-500">Detail Notification (16-07-2024)</td>
            <td className="px-4 py-2 text-center"><a href="https://img.freejobalert.com/uploads/2024/07/Detail-Notification-AFMS-Medical-Officer-2024.pdf" target="_blank" rel="noopener" className="underline text-blue-500">Click Here</a></td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-left font-bold text-green-500">Shot Notification</td>
            <td className="px-4 py-2 text-center"><a href="https://img.freejobalert.com/uploads/2024/07/Short-Notification-AFMS-Medical-Officer-Posts.jpg" target="_blank" rel="noopener" className="underline text-blue-500">Click Here</a></td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-left font-bold text-green-500">Official Website</td>
            <td className="px-4 py-2 text-center"><a href="https://www.amcsscentry.gov.in/" target="_blank" rel="noopener" className="underline text-blue-500">Click Here</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}