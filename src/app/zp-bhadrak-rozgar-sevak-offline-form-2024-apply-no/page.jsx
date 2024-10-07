export default function RecruitmentInformation() {
  // Displays recruitment information for ZP Bhadrak Gram Rozgar Sevak 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">ZP Bhadrak Gram Rozgar Sevak Recruitment 2024</h1>
      <div className="mb-4">
        <p className="text-gray-700 mb-2">
          <span className="font-bold text-green-500">Name of the Post:</span> ZP Bhadrak Gram Rozgar Sevak Offline Form 2024
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-bold text-green-500">Post Date:</span> 07-10-2024
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-bold text-green-500">Total Vacancy:</span> 146
        </p>
        <p className="text-gray-700">
          <span className="font-bold text-red-500">Brief Information:</span> Zilla Parishad Bhadrak has announced notification for the recruitment of Gram Rozgar Sevak Vacancy on Contractual basis. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply.
        </p>
      </div>
      <div className="mb-4">
        <table className="w-full border-collapse border border-gray-300">
          <tbody>
            <tr className="bg-gray-100">
              <td colSpan={2} className="text-center py-2">
                <p className="font-bold text-red-500">Zilla Parishad Bhadrak</p>
                <p className="font-bold text-green-500">Gram Rozgar Sevak Vacancy 2024</p>
                <p className="text-gray-700"><a href="https://www.freejobalert.com" target="_blank" rel="noopener" className="text-blue-500 underline"></a></p>
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="text-center py-2">
                <p className="font-bold text-red-500">Important Dates</p>
                <ul className="list-disc pl-6">
                  <li className="text-gray-700">Starting Date for Apply Offline: 05-10-2024</li>
                  <li className="text-gray-700">Last Date to Apply Offline: 05-11-2024 (05:30 PM)</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="text-center py-2">
                <p className="font-bold text-red-500">Age Limit (as on 01-10-2024)</p>
                <ul className="list-disc pl-6">
                  <li className="text-gray-700">Minimum Age: 18 Years</li>
                  <li className="text-gray-700">Maximum Age: 40 Years</li>
                  <li className="text-gray-700">Age relaxation is applicable as per rules.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="text-center py-2">
                <p className="font-bold text-red-500">Qualification</p>
                <ul className="list-disc pl-6">
                  <li className="text-gray-700">Candidates Should Possess 10+2 or its Equivalent.</li>
                </ul>
              </td>
            </tr>
            <tr className="bg-gray-100">
              <td colSpan={2} className="text-center py-2">
                <p className="font-bold text-red-500">Vacancy Details</p>
              </td>
            </tr>
            <tr>
              <td className="text-center py-2">
                <span className="font-bold text-pink-500">Post Name</span>
              </td>
              <td className="text-center py-2">
                <span className="font-bold text-pink-500">Total</span>
              </td>
            </tr>
            <tr>
              <td className="text-center py-2">Gram Rozgar Sevak</td>
              <td className="text-center py-2">146</td>
            </tr>
            <tr className="bg-gray-100">
              <td colSpan={2} className="text-center py-2">
                <p className="font-bold text-blue-500">Interested Candidates Can Read the Full Notification Before Apply</p>
              </td>
            </tr>
            <tr className="bg-gray-100">
              <td colSpan={2} className="text-center py-2">
                <p className="font-bold text-red-500">Important Links</p>
              </td>
            </tr>
            <tr>
              <td className="text-center py-2">
                <span className="font-bold text-green-500">Notification</span>
              </td>
              <td className="text-center py-2">
                <a href="https://img.freejobalert.com/uploads/2024/10/Notification-ZP-Bhadrak-Gram-Rozgar-Sevak-Posts.pdf" target="_blank" rel="nofollow" className="text-blue-500 underline">Click Here</a>
              </td>
            </tr>
            <tr>
              <td className="text-center py-2">
                <span className="font-bold text-green-500">Official Website</span>
              </td>
              <td className="text-center py-2">
                <a href="https://bhadrak.odisha.gov.in/" target="_blank" rel="nofollow" className="text-blue-500 underline">Click Here</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}