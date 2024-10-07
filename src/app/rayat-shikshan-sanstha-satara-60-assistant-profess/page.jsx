export default function RecruitmentInformation() {
  // Displays recruitment information for Rayat Shikshan Sanstha, Satara Assistant Professor 2024 Walk in
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Rayat Shikshan Sanstha, Satara Assistant Professor 2024 Walk in</h1>
      <p className="mb-2">
        <span className="text-green-500 font-bold">Name of the Post:</span> Rayat Shikshan Sanstha, Satara Assistant Professor 2024 Walk in
      </p>
      <p className="mb-2 text-justify">
        <span className="text-green-500 font-bold">Post Date: </span>
        <span className="text-black-500">07-10-2024</span>
      </p>
      <p className="mb-2 text-justify">
        <span className="text-green-500 font-bold">Total Vacancy: </span> 60
      </p>
      <p className="mb-4 text-justify">
        <span className="text-red-500 font-bold">Brief Information: </span> Rayat Shikshan Sanstha, Satara has published a notification for the recruitment of Assistant Professor Vacancy on a Temporary basis. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification and Attend.
      </p>
      <div className="mb-4">
        <table className="table-auto border-collapse border-2 border-gray-300 w-full text-center">
          <thead>
            <tr className="bg-gray-100">
              <th colSpan={2} className="py-2">
                <span className="text-red-500 font-bold">Rayat Shikshan Sanstha, Satara</span>
              </th>
            </tr>
            <tr className="bg-gray-100">
              <th colSpan={2} className="py-2">
                <span className="text-green-500 font-bold">Assistant Professor Vacancy 2024</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th colSpan={2} className="py-2">
                <span className="text-red-500 font-bold">Application Fee</span>
              </th>
            </tr>
            <tr>
              <td colSpan={2} className="py-2">
                <ul>
                  <li>For All Candidates: <strong>Rs.100/-</strong></li>
                  <li>Payment Mode: <strong>Through Offline</strong></li>
                </ul>
              </td>
            </tr>
            <tr>
              <th colSpan={2} className="py-2">
                <span className="text-red-500 font-bold">Important Dates</span>
              </th>
            </tr>
            <tr>
              <td colSpan={2} className="py-2">
                <ul>
                  <li>Date of Walk in Interview: <strong>09-10-2024 (at 09:00AM)</strong></li>
                </ul>
              </td>
            </tr>
            <tr>
              <th colSpan={2} className="py-2">
                <span className="text-red-500 font-bold">Qualification</span>
              </th>
            </tr>
            <tr>
              <td colSpan={2} className="py-2">
                <ul>
                  <li>Candidates should possess as per rules prescribed by UGC, Gov. of Maharashtra and the Savitribai Phule Pune University, Pune</li>
                </ul>
              </td>
            </tr>
            <tr>
              <th colSpan={2} className="py-2">
                <span className="text-red-500 font-bold">Vacancy Details</span>
              </th>
            </tr>
            <tr className="bg-gray-100">
              <th className="py-2">
                <span className="text-pink-500 font-bold">Post Name</span>
              </th>
              <th className="py-2">
                <span className="text-pink-500 font-bold">Total</span>
              </th>
            </tr>
            <tr>
              <td className="py-2">Assistant Professor</td>
              <td className="py-2">60</td>
            </tr>
            <tr>
              <th colSpan={2} className="py-2">
                <span className="text-blue-500 font-bold">Interested Candidates Can Read the Full Notification Before Attend</span>
              </th>
            </tr>
            <tr>
              <th colSpan={2} className="py-2">
                <span className="text-red-500 font-bold">Important Links</span>
              </th>
            </tr>
            <tr>
              <td className="py-2">
                <span className="text-green-500 font-bold">Notification</span>
              </td>
              <td className="py-2">
                <a href="https://img.freejobalert.com/uploads/2024/10/Notification-Rayat-Shikshan-Sanstha-Satara-Asst-Professor-Posts.pdf" className="text-blue-500" target="_blank" rel="nofollow">
                  <b>Click Here</b>
                </a>
              </td>
            </tr>
            <tr>
              <td className="py-2">
                <span className="text-green-500 font-bold">Official Website</span>
              </td>
              <td className="py-2">
                <a href="http://rayatshikshan.edu/" className="text-blue-500" target="_blank" rel="nofollow">
                  <strong>Click Here</strong>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}