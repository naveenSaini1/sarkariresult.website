export default function RecruitmentInformation() {
  // Displays recruitment information for CMPFO Group B & C Vacancy 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">CMPFO Group B & C Vacancy 2024</h1>

      <div className="mb-4">
        <p className="text-lg font-medium text-green-500">Name of the Post: CMPFO Group B & C Online Form 2024</p>
        <p className="text-lg font-medium text-green-500">Post Date: 10-08-2024</p>
        <p className="text-lg font-medium text-green-500">Total Vacancy: <span className="text-black">136</span></p>
      </div>

      <p className="text-lg mb-4">
        <span className="text-red-500 font-bold">Brief Information:</span> Coal Mines Provident Fund Organisation (CMPFO) has given an employment notification for the recruitment of Group B & C (Junior Hindi Translator & Social Security Assistant) Vacancy. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply Online.
      </p>

      <h2 className="text-2xl font-bold mb-4">Important Details</h2>

      <div className="mb-4">
        <p className="text-lg font-medium text-red-500">Application Fee</p>
        <ul className="list-disc ml-6">
          <li>There would be no application fee for applying the posts of Junior Hindi Translator and Social Security Assistant in CMPFO</li>
        </ul>
      </div>

      <div className="mb-4">
        <p className="text-lg font-medium text-red-500">Important Dates</p>
        <ul className="list-disc ml-6">
          <li className="text-black">Last Date to Apply Online: <strong>06-09-2024</strong></li>
        </ul>
      </div>

      <div className="mb-4">
        <p className="text-lg font-medium text-red-500">Age Limit</p>
        <ul className="list-disc ml-6">
          <li>Minimum Age Limit: <strong>18 Years</strong></li>
          <li>Maximum Age Limit for Junior Hindi Translator (Group B) Posts : <strong>30 Years</strong></li>
          <li>Maximum Age Limit for Social Security Assistant (Group C) Posts : <strong>27 Years</strong></li>
          <li className="text-black">Age relaxation is Applicable as per rules.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>

      <table className="table-auto w-full border-collapse border border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-center text-sm font-medium text-red-500">Post Name</th>
            <th className="px-4 py-2 text-center text-sm font-medium text-red-500">Total</th>
            <th className="px-4 py-2 text-center text-sm font-medium text-red-500">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 text-center text-red-400">Junior Hindi Translator</td>
            <td className="px-4 py-2 text-center text-red-400">10</td>
            <td className="px-4 py-2 text-center text-red-400">Master’s Degree</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center text-red-400">Social Security Assistant (SSA)</td>
            <td className="px-4 py-2 text-center text-red-400">126</td>
            <td className="px-4 py-2 text-center text-red-400">Any Degree, typing speed 35 wpm (English) or 30 wpm (Hindi) on computer</td>
          </tr>
        </tbody>
      </table>

      <p className="text-lg font-medium text-blue-500 mb-4">Interested Candidates Can Read the Full Notification Before Apply Online</p>

      <h2 className="text-2xl font-bold mb-4">Important Links</h2>

      <table className="table-auto w-full border-collapse border border-gray-300">
        <tbody>
          <tr>
            <td className="px-4 py-2 text-center text-green-500">Apply Online</td>
            <td className="px-4 py-2 text-center"><a href="https://starrating.coal.gov.in/cmpfo/signup.php" className="underline text-blue-500" target="_blank" rel="noopener">Click Here</a></td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center text-green-500">Notification</td>
            <td className="px-4 py-2 text-center"><a href="https://img.freejobalert.com/uploads/2024/08/Notification-CMPFO-Group-B-C-2024.pdf" className="underline text-blue-500" target="_blank" rel="noopener">Click Here</a></td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center text-green-500">Official Website</td>
            <td className="px-4 py-2 text-center"><a href="https://starrating.coal.gov.in/cmpfo/" className="underline text-blue-500" target="_blank" rel="noopener">Click Here</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}