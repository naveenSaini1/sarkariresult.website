export default function RecruitmentInformation() {
  // Displays recruitment information for Women & Child Development, Nandyal - Various Vacancy 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">Women & Child Development, Nandyal - Various Vacancy 2024</h1>
      <div className="flex justify-between mb-4">
        <p className="text-lg font-medium">
          <span className="text-green-500">Name of the Post:</span> WCD, Nandyal Various Vacancy 2024 Offline Form
        </p>
        <p className="text-lg font-medium">
          <span className="text-green-500">Post Date:</span> 10-10-2024
        </p>
      </div>
      <p className="text-lg font-medium">
        <span className="text-green-500">Total Vacancy:</span> 68
      </p>
      <p className="text-lg mb-4">
        <span className="text-red-500 font-bold">Brief Information:</span> Women & Child Development, Nandyal has invited applications for the recruitment of Anganwadi Worker, Mini Anganwadi Worker &amp; Other Vacancy. Those Candidates who are interested in the vacancy details &amp; completed all eligibility criteria can read the Notification &amp; Apply.
      </p>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Important Dates</h2>
        <ul className="list-disc pl-6">
          <li className="mb-1">Starting Date for receipt of Application: 10-10-2024 (10:30 AM)</li>
          <li>Last Date for receipt of Application: 21-10-2024 (05:00 PM)</li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Age Limit (as on 01-07-2024)</h2>
        <ul className="list-disc pl-6">
          <li className="mb-1">Minimum Age Limit: 21 Years</li>
          <li>Maximum Age Limit: 35 Years</li>
          <li>For More Details Refer Notification.</li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Qualification</h2>
        <ul className="list-disc pl-6">
          <li>Candidates Should Possess 10th Class.</li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Vacancy Details</h2>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 text-center text-blue-500 font-bold border border-gray-300">Post Name</th>
              <th className="px-4 py-2 text-center text-blue-500 font-bold border border-gray-300">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 text-center border border-gray-300">Anganwadi Worker</td>
              <td className="px-4 py-2 text-center border border-gray-300">06</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center border border-gray-300">Mini Anganwadi Worker</td>
              <td className="px-4 py-2 text-center border border-gray-300">02</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center border border-gray-300">Anganwadi Ayah</td>
              <td className="px-4 py-2 text-center border border-gray-300">60</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-blue-500 font-medium mb-4">Interested Candidates Can Read the Full Notification Before Apply</p>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Important Links</h2>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <tbody>
            <tr>
              <td className="px-4 py-2 text-center text-green-500 font-bold border border-gray-300">Notification</td>
              <td className="px-4 py-2 text-center border border-gray-300"><a href="https://img.freejobalert.com/uploads/2024/10/Notification-WCD-Nandyal-Main-Anganwadi-Worker-Mini-Anganwadi-Worker-Other-Posts.pdf" target="_blank" rel="nofollow" className="text-blue-500 underline">Click Here</a></td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center text-green-500 font-bold border border-gray-300">Official Website</td>
              <td className="px-4 py-2 text-center border border-gray-300"><a href="https://nandyal.ap.gov.in/" target="_blank" rel="nofollow" className="text-blue-500 underline">Click Here</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}