export default function RecruitmentInfo() {
  // Displays recruitment information for Sanjay Gandhi Memorial Hospital (SGMH), Delhi Junior Resident Walk in 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        <span className="text-green-500">Name of the Post</span>: SGMH, Delhi Junior Resident Walk in 2024
      </h1>

      <div className="mb-4">
        <p className="text-gray-600 font-medium">
          <span className="text-green-500">Post Date:</span> 06-08-2024
        </p>
        <p className="text-gray-600 font-medium">
          <span className="text-green-500">Total Vacancy:</span> 50
        </p>
      </div>

      <p className="text-gray-600 mb-4">
        <span className="text-red-500 font-bold">Brief Information:</span> Sanjay Gandhi Memorial Hospital (SGMH), Delhi has published a notification for the recruitment of Junior Resident vacancy on Regular Basis. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Attend.
      </p>

      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Important Dates</h2>
        <ul className="list-disc text-gray-600">
          <li>Date of Walk in Interview: <strong className="text-red-500">12-08-2024</strong></li>
          <li>
            If required, Interview may continue on next working day i.e, 13-08-2024 for the candidates who get enrolled on 12-08-2024 only but did not get time for interview
          </li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Age Limit (as on 12-08-2024)</h2>
        <ul className="list-disc text-gray-600">
          <li>
            Maximum Age Limit for UR Category: <strong className="text-black">30 Years</strong>
          </li>
          <li>Maximum Age Limit for OBC Category: <strong className="text-black">33 Years</strong></li>
          <li>Maximum Age Limit for SC Category: <strong className="text-black">35 Years</strong></li>
          <li>Maximum Age Limit for EWS Category: <strong className="text-black">30 Years</strong></li>
          <li>Maximum Age Limit for PH Category: <strong className="text-black">40 Years</strong></li>
          <li>Maximum Age Limit for General Category: <strong className="text-black">40 Years</strong></li>
          <li>For more details refer the notification</li>
          <li>Age relaxation is applicable as per rules.</li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Qualification</h2>
        <ul className="list-disc text-gray-600">
          <li>Candidates should possess MBBS</li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Vacancy Details</h2>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="text-center py-2 px-4 border border-gray-300 bg-gray-100 text-blue-500 font-medium">Post Name</th>
              <th className="text-center py-2 px-4 border border-gray-300 bg-gray-100 text-blue-500 font-medium">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center py-2 px-4 border border-gray-300">Junior Resident</td>
              <td className="text-center py-2 px-4 border border-gray-300">50</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-blue-500 mb-4 text-center">
        <strong>Interested Candidates Can Read the Full Notification Before Attend</strong>
      </p>

      <h2 className="text-2xl font-bold mb-2">Important Links</h2>

      <table className="w-full table-auto border-collapse">
        <tbody>
          <tr>
            <td className="text-center py-2 px-4 border border-gray-300 bg-gray-100 text-green-500 font-medium">
              Notification
            </td>
            <td className="text-center py-2 px-4 border border-gray-300">
              <a className="text-blue-500" href="https://img.freejobalert.com/uploads/2024/08/Notification-SGMH-Delhi-Junior-Resident-Posts.pdf" target="_blank" rel="nofollow">
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="text-center py-2 px-4 border border-gray-300 bg-gray-100 text-green-500 font-medium">
              Official Website
            </td>
            <td className="text-center py-2 px-4 border border-gray-300">
              <a className="text-blue-500" href="https://sgmh.delhi.gov.in/" target="_blank" rel="nofollow">
                Click Here
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}