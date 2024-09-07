export default function RecruitmentInformation() {
  // This component displays recruitment information for the RPSC RAS/ RTS 2024 exam.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">RPSC RAS/ RTS 2024 Exam Date Announced</h1>

      <div className="mb-4">
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Name of the Post:</span> RPSC RAS/ RTS 2024 Exam Date Announced
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Post Date: </span>
          <span className="text-gray-900">02-09-2024</span>
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Latest Update:</span> 04-09-2024
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Total Vacancy: </span>
          <span className="text-gray-900">733</span>
        </p>
      </div>

      <p className="text-lg mb-4">
        <span className="text-red-500 font-medium">Brief Information:</span> Rajasthan Public Service Commission (RPSC) has given a notification for Conducting the RAS/ RTS Combined Competitive Exam 2024 vacancies on direct recruitment basis. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the notification & apply online.
      </p>

      <h2 className="text-2xl font-bold mb-4">Important Details</h2>

      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Application Fee</h3>
        <ul className="list-disc pl-5">
          <li>For General (UR)/ BC/ EBC (Creamy Layer) candidates: <strong>Rs. 600/-</strong></li>
          <li>For Reserved Category (SC/ ST/ BC/ EBC (Non-Creamy Layer)/ EWS/ Sahariya Area)/ Divyang: <strong>Rs. 400/-</strong></li>
          <li>Fee for all types of permitted amendments: <strong>Rs. 500/-</strong></li>
          <li>Payment Mode: <strong>Through Online</strong></li>
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Important Dates</h3>
        <ul className="list-disc pl-5">
          <li>Date of Notification: <strong>02-09-2024</strong></li>
          <li>Starting Date for Apply Online & Payment of Fee: <strong>19-09-2024</strong></li>
          <li>Last Date to Apply Online & Payment of Fee: <strong>18-10-2024 till 12:00 midnight</strong></li>
          <li>Date of Exam: <strong>02-02-2025</strong></li>
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Age Limit (as on 01-01-2025)</h3>
        <ul className="list-disc pl-5">
          <li>Minimum Age Limit: <strong>21 Years</strong></li>
          <li>Maximum Age Limit: <strong>40 Years</strong></li>
          <li>For Non Gazetted Employees: <strong>25 to 45 Years</strong></li>
          <li>Age Relaxation is admissible as per rules.</li>
          <li>For More Details Refer Notification.</li>
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Qualification</h3>
        <ul className="list-disc pl-5">
          <li>Candidates should possess Any Degree.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>

      <table className="table-auto w-full text-center mb-4">
        <thead>
          <tr>
            <th className="border px-4 py-2">Post Name</th>
            <th className="border px-4 py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">State Service Posts (RAS)</td>
            <td className="border px-4 py-2">346</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Subordinate Service Posts (RTS)</td>
            <td className="border px-4 py-2">387</td>
          </tr>
        </tbody>
      </table>

      <p className="text-blue-500 text-center mb-4">Interested Candidates Can Read the Full Notification Before Apply Online</p>

      <h2 className="text-2xl font-bold mb-4">Important Links</h2>

      <table className="table-auto w-full text-center mb-4">
        <tbody>
          <tr>
            <td className="border px-4 py-2">
              <span className="text-green-500">Apply Online</span>
            </td>
            <td className="border px-4 py-2">Available on 19-09-2024</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">
              <span className="text-green-500">Exam Date (04-09-2024)</span>
            </td>
            <td className="border px-4 py-2">
              <a href="https://img.freejobalert.com/uploads/2024/09/Exam-Date-RPSC-RAS-or-RTS-2024.pdf" target="_blank" rel="noopener" className="text-blue-500 hover:underline">Click Here</a>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">
              <span className="text-green-500">Notification</span>
            </td>
            <td className="border px-4 py-2">
              <a href="https://img.freejobalert.com/uploads/2024/09/Notification-RPSC-RAS-RTS-Exam-2024.pdf" target="_blank" rel="noopener" className="text-blue-500 hover:underline">Click Here</a>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">
              <span className="text-green-500">Official Website</span>
            </td>
            <td className="border px-4 py-2">
              <a href="https://rpsc.rajasthan.gov.in/" target="_blank" rel="noopener" className="text-blue-500 hover:underline">Click Here</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}