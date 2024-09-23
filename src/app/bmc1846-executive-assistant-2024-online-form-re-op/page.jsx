export default function RecruitmentInfo() {
  // This component displays recruitment information for the BMC Executive Assistant Vacancy 2024.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">BMC Executive Assistant Vacancy 2024</h1>

      <div className="mb-4">
        <p className="text-lg font-medium text-gray-700 mb-2">
          <span className="text-green-500">Name of the Post: </span>
          BMC Executive Assistant 2024 Re Open Online Form
        </p>
        <p className="text-lg font-medium text-gray-700 mb-2">
          <span className="text-green-500">Post Date: </span>
          22-08-2024
        </p>
        <p className="text-lg font-medium text-gray-700 mb-2">
          <span className="text-green-500">Latest Update: </span>
          23-09-2024
        </p>
        <p className="text-lg font-medium text-gray-700 mb-2">
          <span className="text-green-500">Total Vacancy: </span>
          1846
        </p>
      </div>

      <p className="text-gray-600 mb-4">
        <span className="text-red-500 font-medium">Brief Information: </span>
        Brihanmumbai Municipal Corporation (BMC) has given an employment notification for the recruitment of Executive Assistant Vacancy. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply Online.
      </p>

      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Application Fee</h2>
        <ul className="list-disc text-gray-600">
          <li>For Unreserved (Open) Category: Rs.1000/- (Including GST)</li>
          <li>For Backward Category: Rs.900/- (Including GST)</li>
          <li>Payment Mode: Through Online</li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Important Dates</h2>
        <p className="text-gray-600 mb-2">Re Open Online Dates</p>
        <ul className="list-disc text-gray-600">
          <li>Starting Date for Apply Online and Payment of Fee: 21-09-2024</li>
          <li>Last Date for Apply Online and Payment of Fee: 11-10-2024 (11:59 PM)</li>
        </ul>
        <p className="text-gray-600 mb-2">Old Dates</p>
        <ul className="list-disc text-gray-600">
          <li>Starting Date for Apply Online and Payment of Fee: 20-08-2024</li>
          <li>Last Date for Apply Online and Payment of Fee: 09-09-2024 (11:59 PM)</li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Age Limit (14-08-2024)</h2>
        <ul className="list-disc text-gray-600">
          <li>Minimum Age limit: 18 Years</li>
          <li>Maximum Age limit for Unreserved (Open) Category: 38 Years</li>
          <li>Maximum Age limit for Back Ward Category: 43 Years</li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Qualification</h2>
        <ul className="list-disc text-gray-600">
          <li>Candidate Should Possess 10th Class, Any Degree</li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Vacancy Details</h2>
        <table className="table-auto w-full text-gray-600">
          <thead>
            <tr>
              <th className="text-left px-4 py-2 font-bold text-gray-800">Post Name</th>
              <th className="text-left px-4 py-2 font-bold text-gray-800">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2">Executive Assistant</td>
              <td className="px-4 py-2">
                <span className="text-green-500">1846</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-blue-500 font-medium mb-4">Interested Candidates Can Read the Full Notification Before Apply Online</p>

      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Important Links</h2>
        <table className="table-auto w-full text-gray-600">
          <tbody>
            <tr>
              <td className="text-left px-4 py-2 font-bold text-gray-800">Re Open Apply Online (23-09-2024)</td>
              <td className="text-left px-4 py-2">
                <a href="https://cdn3.digialm.com//EForms/configuredHtml/32839/90687/Index.html" className="text-blue-500 hover:underline" target="_blank" rel="nofollow">Click Here</a>
              </td>
            </tr>
            <tr>
              <td className="text-left px-4 py-2 font-bold text-gray-800">Re Open Online Dates (23-09-2024)</td>
              <td className="text-left px-4 py-2">
                <a href="https://img.freejobalert.com/uploads/2024/09/Re-Open-Online-Dates-BMC-Executive-Assistant-Posts.pdf" className="text-blue-500 hover:underline" target="_blank" rel="nofollow">Click Here</a>
              </td>
            </tr>
            <tr>
              <td className="text-left px-4 py-2 font-bold text-gray-800">Apply Online</td>
              <td className="text-left px-4 py-2">
                <a href="https://cdn3.digialm.com//EForms/configuredHtml/32839/90687/Index.html" className="text-blue-500 hover:underline" target="_blank" rel="nofollow">Click Here</a>
              </td>
            </tr>
            <tr>
              <td className="text-left px-4 py-2 font-bold text-gray-800">Notification</td>
              <td className="text-left px-4 py-2">
                <a href="https://img.freejobalert.com/uploads/2024/08/Notification-BMC-Executive-Assistant-Posts.pdf" className="text-blue-500 hover:underline" target="_blank" rel="nofollow">Click Here</a>
              </td>
            </tr>
            <tr>
              <td className="text-left px-4 py-2 font-bold text-gray-800">Official Website</td>
              <td className="text-left px-4 py-2">
                <a href="https://portal.mcgm.gov.in/irj/portal/anonymous" className="text-blue-500 hover:underline" target="_blank" rel="nofollow">Click Here</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}