export default function RecruitmentInformation() {
  // This component displays recruitment information for RRC, North Western Railway Sports Person Online Form 2024.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">RRC, North Western Railway Sports Person Online Form 2024</h1>
      <div className="mb-4">
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Name of the Post:</span> RRC, North Western Railway Sports Person Online Form 2024
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Post Date:</span> <span className="text-black">13-09-2024</span>
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Total Vacancy:</span> <span className="text-black">51</span>
        </p>
      </div>
      <p className="text-lg mb-4">
        <span className="text-red-500">Brief Information:</span> Railway Recruitment Cell (RRC), North Western Railway, has given an employment notification for the recruitment of Sports Person Vacancy. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the notification & Apply Online.
      </p>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Application Fee</h2>
        <ul className="list-disc pl-6">
          <li className="mb-2">All Other Candidates: <strong className="text-red-500">Rs. 500/-</strong></li>
          <li className="mb-2">SC/ST/Women/Minorities/ EBC Candidates: <strong className="text-red-500">Rs. 250/-</strong></li>
          <li className="mb-2">Mode of Payment: <strong className="text-red-500">Through Net Banking or Debit/Credit Card/Gateway</strong></li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Important Dates</h2>
        <ul className="list-disc pl-6">
          <li className="mb-2">Date of Publication of Notification: <strong className="text-red-500">06-09-2024</strong></li>
          <li className="mb-2">Starting Date for Apply Online & Payment of Fee: <strong className="text-red-500">09-09-2024</strong></li>
          <li className="mb-2">Last Date for Apply Online & Payment of Fee: <strong className="text-red-500">09-10-2024 (23.59 Hrs)</strong></li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Age Limit (as on 01-01-2025)</h2>
        <ul className="list-disc pl-6">
          <li className="mb-2">Minimum Age Limit: <strong className="text-red-500">18 Years</strong></li>
          <li className="mb-2">Maximum Age Limit: <strong className="text-red-500">25 Years</strong></li>
          <li className="mb-2">i.e must have been born not earlier than 02.01.2000 and not later than 01.01.2007.</li>
          <li className="mb-2">Age relaxation is applicable as per rules.</li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Qualification</h2>
        <ul className="list-disc pl-6">
          <li className="mb-2">Candidate Should Posses 10th, ITI, 12th, Degree, B.Sc, Graduation from any of the recognized boards or Universities</li>
        </ul>
      </div>
      <h2 className="text-2xl font-bold mb-2">Vacancy Details</h2>
      <table className="table-auto w-full border-collapse border border-gray-300 mb-4">
        <thead>
          <tr>
            <th className="text-center py-2 bg-gray-100" colspan="2">
              <span className="text-red-500 font-bold">Sports Person</span>
            </th>
          </tr>
          <tr>
            <th className="text-center py-2 bg-gray-100"><span className="text-pink-500 font-bold">Game Name</span></th>
            <th className="text-center py-2 bg-gray-100"><span className="text-pink-500 font-bold">Total</span></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center py-2 border border-gray-300">Athletics</td>
            <td className="text-center py-2 border border-gray-300">04</td>
          </tr>
          <tr>
            <td className="text-center py-2 border border-gray-300">Badminton</td>
            <td className="text-center py-2 border border-gray-300">05</td>
          </tr>
          <tr>
            <td className="text-center py-2 border border-gray-300">Basketball</td>
            <td className="text-center py-2 border border-gray-300">06</td>
          </tr>
          <tr>
            <td className="text-center py-2 border border-gray-300">Table Tennis</td>
            <td className="text-center py-2 border border-gray-300">03</td>
          </tr>
          <tr>
            <td className="text-center py-2 border border-gray-300">Wrestling</td>
            <td className="text-center py-2 border border-gray-300">06</td>
          </tr>
          <tr>
            <td className="text-center py-2 border border-gray-300">Volleyball</td>
            <td className="text-center py-2 border border-gray-300">01</td>
          </tr>
          <tr>
            <td className="text-center py-2 border border-gray-300">Boxing</td>
            <td className="text-center py-2 border border-gray-300">01</td>
          </tr>
          <tr>
            <td className="text-center py-2 border border-gray-300">Cricket</td>
            <td className="text-center py-2 border border-gray-300">06</td>
          </tr>
          <tr>
            <td className="text-center py-2 border border-gray-300">Kabaddi</td>
            <td className="text-center py-2 border border-gray-300">01</td>
          </tr>
          <tr>
            <td className="text-center py-2 border border-gray-300" colspan="2">For More vacancy Details Refer the Notification</td>
          </tr>
        </tbody>
      </table>
      <p className="text-lg mb-4">
        <span className="text-blue-500 font-bold">Interested Candidates Can Read the Full Notification & Apply Online</span>
      </p>
      <h2 className="text-2xl font-bold mb-2">Important Links</h2>
      <table className="table-auto w-full border-collapse border border-gray-300 mb-4">
        <tbody>
          <tr>
            <td className="text-center py-2 border border-gray-300">
              <span className="text-green-500 font-bold">Apply Online</span>
            </td>
            <td className="text-center py-2 border border-gray-300">
              <a href="https://iroams.com/rrc_nwr_sports_2024/index.php" target="_blank" rel="nofollow" className="text-blue-500 underline">Click Here</a>
            </td>
          </tr>
          <tr>
            <td className="text-center py-2 border border-gray-300">
              <span className="text-green-500 font-bold">Notification</span>
            </td>
            <td className="text-center py-2 border border-gray-300">
              <a href="https://img.freejobalert.com/uploads/2024/09/Notification-RRC-North-Western-Railway-Sports-Person-Posts.pdf" target="_blank" rel="nofollow" className="text-blue-500 underline">Click Here</a>
            </td>
          </tr>
          <tr>
            <td className="text-center py-2 border border-gray-300">
              <span className="text-green-500 font-bold">Official Website</span>
            </td>
            <td className="text-center py-2 border border-gray-300">
              <a href="https://www.rrcjaipur.in/" target="_blank" rel="nofollow" className="text-blue-500 underline">Click Here</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}