export default function RecruitmentInfo() {
  // This component displays recruitment information for the ZP Balasore Gram Rozgar Sevak position. 
  // It includes details like post name, important dates, age limit, qualification, and vacancy details.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">ZP, Balasore Gram Rozgar Sevak Offline Form 2024</h1>
      <div className="mb-4">
        <p className="text-gray-600">
          <span className="font-bold text-green-500">Name of the Post:</span> ZP, Balasore Gram Rozgar Sevak Offline Form 2024
        </p>
        <p className="text-gray-600">
          <span className="font-bold text-green-500">Post Date:</span> 
          <span className="text-gray-800">23-08-2024</span>
        </p>
        <p className="text-gray-600">
          <span className="font-bold text-green-500">Total Vacancy:</span> 327
        </p>
        <p className="text-gray-600">
          <span className="font-bold text-red-500">Brief Information: </span>
          Zilla Parishad, Balasore, Odisha has given a notification for the recruitment of Gram Rozgar Sevak (GRS) Vacancy on Contractual Basis. 
          Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply.
        </p>
      </div>
      <table className="table-auto border border-gray-300 w-full mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th colSpan={2} className="text-center font-bold text-gray-800 py-2">
              <span className="text-red-500">Zilla Parishad, Balasore</span>
            </th>
          </tr>
          <tr className="bg-gray-100">
            <th colSpan={2} className="text-center font-bold text-green-500 py-2">
              Gram Rozgar Sevak Vacancy 2024
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={2} className="text-center py-2">
              <p className="text-red-500 font-bold">Important Dates</p>
              <ul className="list-disc pl-6">
                <li className="text-gray-600">Starting Date for Receipt of Application: <strong>22-08-2024</strong></li>
                <li className="text-gray-600">Last Date for Receipt of Application: <strong>21-09-2024</strong></li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center py-2">
              <p className="text-red-500 font-bold">Age limit (as on 01-08-2024)</p>
              <ul className="list-disc pl-6">
                <li className="text-gray-600">Minimum Age limit: <strong>Must have 18 Years</strong></li>
                <li className="text-gray-600">Maximum Age limit: <strong>Must not be above 40 Years</strong></li>
                <li className="text-gray-600">Age Relaxation is Applicable as per Rules.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center py-2">
              <p className="text-red-500 font-bold">Qualification</p>
              <ul className="list-disc pl-6">
                <li className="text-gray-600">Candidates Should Posses 10+2 pass or its equivalent.</li>
                <li className="text-gray-600">Candidates shall be able to speak, read and write Odia fluently.</li>
                <li className="text-gray-600">For More Details Refer Notification.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center py-2">
              <p className="text-red-500 font-bold">Vacancy Details</p>
            </td>
          </tr>
          <tr className="bg-gray-100">
            <th className="text-center text-blue-500 font-bold py-2">Trade Name</th>
            <th className="text-center text-blue-500 font-bold py-2">Total</th>
          </tr>
          <tr>
            <td className="text-center py-2">Gram Rozgar Sevak (GRS)</td>
            <td className="text-center py-2">327</td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center py-2">
              <p className="text-blue-500 font-bold">Interested Candidates Can Read the Full Notification Before Apply</p>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center py-2">
              <p className="text-red-500 font-bold">Important Links</p>
            </td>
          </tr>
          <tr>
            <td className="text-center py-2">
              <span className="font-bold text-green-500">Notification</span>
            </td>
            <td className="text-center py-2">
              <a href="https://img.freejobalert.com/uploads/2024/08/Notfication-ZP-Balasore-Gram-Rozgar-Sevak-Posts.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Click Here</a>
            </td>
          </tr>
          <tr>
            <td className="text-center py-2">
              <span className="font-bold text-green-500">Official Website</span>
            </td>
            <td className="text-center py-2">
              <a href="https://balasore.odisha.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Click Here</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}