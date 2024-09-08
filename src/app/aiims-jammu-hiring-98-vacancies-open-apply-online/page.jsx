export default function RecruitmentInformation() {
  // Displays recruitment information for AIIMS Jammu Various Vacancy 2024.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">AIIMS Jammu Various Vacancy Online Form 2024</h1>
      <div className="mb-4">
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Name of the Post:</span> AIIMS Jammu Various Vacancy Online Form 2024
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Post Date:</span> 20-08-2024
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Total Vacancy:</span> 98
        </p>
      </div>
      <p className="text-lg mb-4">
        <span className="text-red-500">Brief Information:</span> All India India Institutes of Medical Science (AIIMS) Jammu has invites an application for the recruitment of Professor, Additional Professor, Associate Professor & Assistant Professor Vacancy. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply online.
      </p>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">All India India Institutes of Medical Science (AIIMS) Jammu</h2>
        <p className="text-lg font-medium mb-2 text-purple-500">Advt No. 03/2024</p>
        <p className="text-lg font-medium mb-2 text-green-500">Various Vacancy 2024</p>
        <p className="text-lg font-medium mb-2"><a href="https://www.freejobalert.com" target="_blank" rel="noopener" className="text-blue-500"></a></p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2 text-red-500">Application Fee</h3>
        <ul className="list-disc pl-6">
          <li className="mb-2">
            <span>For General/ OBC Candidates:</span> Rs. 3000/-
          </li>
          <li className="mb-2">
            For EWS Candidates: Rs. 2400/-
          </li>
          <li className="mb-2">
            <span>For SC/ ST Candidates: </span> Rs. 2400/-
          </li>
          <li>Payment Mode: Through Online</li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2 text-red-500">Important Dates</h3>
        <ul className="list-disc pl-6">
          <li className="mb-2">
            Starting Date for Apply Online: 12-08-2024
          </li>
          <li className="mb-2">
            Last Date to Apply Online: 02-09-2024
          </li>
          <li>Last Date for Submission of Hard Copy: 07-09-2024 (Saturday)</li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2 text-red-500">Age Limit (as on 02-09-2024)</h3>
        <ul className="list-disc pl-6">
          <li className="mb-2">
            Maximum Age Limit: 50 Years
          </li>
          <li>Age relaxation is applicable as per rules.</li>
        </ul>
      </div>
      <h3 className="text-xl font-bold mb-2 text-red-500">Vacancy Details</h3>
      <table className="table-auto w-full border-collapse border border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 text-center text-purple-500 font-medium">Post Name</th>
            <th className="py-2 px-4 text-center text-purple-500 font-medium">Total</th>
            <th className="py-2 px-4 text-center text-purple-500 font-medium">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-300">
            <td className="py-2 px-4 text-center">Professor</td>
            <td className="py-2 px-4 text-center">29</td>
            <td className="py-2 px-4 text-center" rowSpan="3">DM/M.Ch/MD/MS (Relevant Discipline)<br/></td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="py-2 px-4 text-center">Additional Professor</td>
            <td className="py-2 px-4 text-center">17</td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="py-2 px-4 text-center">Associate Professor</td>
            <td className="py-2 px-4 text-center">22</td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="py-2 px-4 text-center">Assistant Professor</td>
            <td className="py-2 px-4 text-center">30</td>
            <td className="py-2 px-4 text-center">MBBS&nbsp;</td>
          </tr>
        </tbody>
      </table>
      <p className="text-lg font-medium mb-4 text-purple-500">Interested Candidates Can Read the Full Notification Before Apply Online</p>
      <h3 className="text-xl font-bold mb-2 text-red-500">Important Links</h3>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <tbody>
          <tr className="border-b border-gray-300">
            <td className="py-2 px-4 text-center text-green-500 font-medium" colSpan="2">Apply Online</td>
            <td className="py-2 px-4 text-center"><a href="https://exams.aiimsjammu.edu.in/login" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a></td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="py-2 px-4 text-center text-green-500 font-medium" colSpan="2">Notification</td>
            <td className="py-2 px-4 text-center"><a href="https://img.freejobalert.com/uploads/2024/08/Notification-AIIMS-Jammu-Professor-Assistant-Professor-Other-2024.pdf" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a></td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="py-2 px-4 text-center text-green-500 font-medium" colSpan="2">Official Website</td>
            <td className="py-2 px-4 text-center"><a href="https://www.aiimsjammu.edu.in/" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}