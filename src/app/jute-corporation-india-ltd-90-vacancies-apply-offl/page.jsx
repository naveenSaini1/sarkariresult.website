export default function RecruitmentInfo() {
  // This component displays recruitment information for JUTE Corporation of India Ltd.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">JUTE Corporation of India Ltd - Various Vacancy 2024</h1>
      <div className="flex justify-between mb-4">
        <p className="text-lg font-medium">
          <span className="text-green-500">Name of the Post:</span> JUTE Corporation of India Ltd Various Vacancy Offline Form 2024
        </p>
        <p className="text-lg font-medium">
          <span className="text-green-500">Post Date:</span> 05-09-2024
        </p>
      </div>
      <p className="text-lg font-medium">
        <span className="text-green-500">Total Vacancy:</span> 90
      </p>
      <p className="text-lg mb-4">
        <span className="text-red-500">Brief Information:</span> JUTE Corporation of India Limited has announced notification for the recruitment of Various Vacancy on Regular basis. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply.
      </p>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Important Details</h2>
        <table className="table-auto w-full border border-gray-300 text-center">
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">
                <span className="text-red-500 font-bold">Application Fee</span>
              </td>
              <td className="border border-gray-300 p-2">
                Available Soon
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">
                <span className="text-red-500 font-bold">Important Date</span>
              </td>
              <td className="border border-gray-300 p-2">
                Last Date of receipt of Application: 27-09-2024
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">
                <span className="text-red-500 font-bold">Age Limit</span>
              </td>
              <td className="border border-gray-300 p-2">
                Available Soon
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">
                <span className="text-red-500 font-bold">Qualification</span>
              </td>
              <td className="border border-gray-300 p-2">
                Available Soon
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Vacancy Details</h2>
        <table className="table-auto w-full border border-gray-300 text-center">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">
                <span className="text-pink-500 font-bold">Post Name</span>
              </th>
              <th className="border border-gray-300 p-2">
                <span className="text-pink-500 font-bold">Total</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">Jr. Assistant</td>
              <td className="border border-gray-300 p-2">25</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Accountant</td>
              <td className="border border-gray-300 p-2">23</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Jr. Inspector</td>
              <td className="border border-gray-300 p-2">42</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-lg text-blue-500 mb-4">Interested Candidates Can Read the Full Notification Before Apply</p>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Important Links</h2>
        <table className="table-auto w-full border border-gray-300 text-center">
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">
                <span className="text-green-500 font-bold">Notification</span>
              </td>
              <td className="border border-gray-300 p-2">
                <a href="https://img.freejobalert.com/uploads/2024/09/Notification-JUTE-Corporation-Various-Vacancy-Post.pdf" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">
                <span className="text-green-500 font-bold">Official Website</span>
              </td>
              <td className="border border-gray-300 p-2">
                <a href="https://www.jutecorp.in/" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}