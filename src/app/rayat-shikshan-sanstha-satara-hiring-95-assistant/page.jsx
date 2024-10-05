export default function RecruitmentInformation() {
  // Displays recruitment information for Rayat Shikshan Sanstha, Satara Assistant Professor vacancy.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Rayat Shikshan Sanstha, Satara Assistant Professor Vacancy 2024</h1>

      <div className="mb-4">
        <p className="text-lg font-medium text-gray-800 mb-2">
          <span className="text-green-500">Name of the Post:</span> Rayat Shikshan Sanstha, Satara Assistant Professor 2024 Walk in
        </p>
        <p className="text-lg font-medium text-gray-800 mb-2">
          <span className="text-green-500">Post Date: </span>
          <span className="text-gray-900">05-10-2024</span>
        </p>
        <p className="text-lg font-medium text-gray-800 mb-2">
          <span className="text-green-500">Total Vacancy: </span>95
        </p>
      </div>

      <p className="text-lg font-medium text-gray-800 mb-4">
        <span className="text-red-500">Brief Information: </span>Rayat Shikshan Sanstha, Satara has published a notification for the recruitment of Assistant Professor Vacancy on a Temporary basis. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification and Attend.
      </p>

      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Application Fee</h2>
        <ul className="list-disc pl-5">
          <li className="text-gray-800 mb-1">For All Candidates: Rs.100/-</li>
          <li className="text-gray-800 mb-1">Payment Mode: Through Offline</li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Important Dates</h2>
        <ul className="list-disc pl-5">
          <li className="text-gray-800 mb-1">Date of Walk in Interview: 07-10-2024</li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Qualification</h2>
        <ul className="list-disc pl-5">
          <li className="text-gray-800 mb-1">Candidates should possess as per rules prescribed by UGC, Gov. of Maharashtra and the Savitribai Phule Pune University, Pune</li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Vacancy Details</h2>
        <table className="table-auto w-full text-center">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Post Name</th>
              <th className="px-4 py-2">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-300">
              <td className="px-4 py-2">Assistant Professor</td>
              <td className="px-4 py-2">95</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-800 mb-4">Interested Candidates Can Read the Full Notification Before Attend</p>

      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Important Links</h2>
        <table className="table-auto w-full text-center">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Link</th>
              <th className="px-4 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-300">
              <td className="px-4 py-2">
                <a href="https://img.freejobalert.com/uploads/2024/10/Notification-Rayat-Shikshan-Sanstha-Satara-Assistant-Professor-Posts.pdf" target="_blank" rel="noopener" className="text-blue-500">
                  Click Here
                </a>
              </td>
              <td className="px-4 py-2">Notification</td>
            </tr>
            <tr className="border-t border-gray-300">
              <td className="px-4 py-2">
                <a href="http://rayatshikshan.edu/" target="_blank" rel="noopener" className="text-blue-500">
                  Click Here
                </a>
              </td>
              <td className="px-4 py-2">Official Website</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}