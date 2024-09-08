export default function RecruitmentInformation() {
  // This component displays recruitment information for the RMC Safai Kamdar position.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">RMC Safai Kamdar Offline Form 2024</h1>
      <p className="mb-4">
        <span className="text-green-500 font-bold">Name of the Post:</span> RMC Safai Kamdar Offline Form 2024
      </p>
      <div className="flex mb-4">
        <p className="text-green-500 font-bold mr-2">Post Date:</p>
        <p>19-08-2024</p>
      </div>
      <div className="flex mb-4">
        <p className="text-green-500 font-bold mr-2">Total Vacancy:</p>
        <p>532</p>
      </div>
      <p className="mb-4">
        <span className="text-red-500 font-bold">Brief Information: </span>
        Rajkot Municipal Corporation (RMC) has given an employment Notification for the recruitment of Safai Kamdar Vacancy. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply.
      </p>
      <h2 className="text-2xl font-bold mb-4">Important Details</h2>
      <table className="table-auto w-full mb-4 border border-gray-300">
        <tbody>
          <tr>
            <th colSpan={2} className="text-center text-red-500 font-bold py-2">Rajkot Muncipal Corporation (RMC)</th>
          </tr>
          <tr>
            <th colSpan={2} className="text-center text-green-500 font-bold py-2">Safai Kamdar Vacancy 2024</th>
          </tr>
          <tr>
            <th colSpan={2} className="text-center py-2">
              <a href="https://www.freejobalert.com" target="_blank" rel="noopener" className="text-blue-500">
                
              </a>
            </th>
          </tr>
          <tr>
            <th colSpan={2} className="text-center text-red-500 font-bold py-2">Important Dates</th>
          </tr>
          <tr>
            <td className="py-2">Starting Date for Apply</td>
            <td className="py-2">21-08-2024</td>
          </tr>
          <tr>
            <td className="py-2">Last Date for Apply</td>
            <td className="py-2">13-09-2024</td>
          </tr>
          <tr>
            <th colSpan={2} className="text-center text-red-500 font-bold py-2">Age Limit (as on 13-09-2024)</th>
          </tr>
          <tr>
            <td className="py-2">Minimum Age Limit</td>
            <td className="py-2">18 Years</td>
          </tr>
          <tr>
            <td className="py-2">Maximum Age Limit</td>
            <td className="py-2">45 Years</td>
          </tr>
          <tr>
            <th colSpan={2} className="text-center text-red-500 font-bold py-2">Vacancy Details</th>
          </tr>
          <tr>
            <th className="text-center text-pink-500 font-bold py-2">Post Name</th>
            <th className="text-center text-pink-500 font-bold py-2">Total</th>
          </tr>
          <tr>
            <td className="text-center py-2">Safai Kamdar</td>
            <td className="text-center py-2"><span className="text-green-500">532</span></td>
          </tr>
          <tr>
            <th colSpan={2} className="text-center text-blue-500 font-bold py-2">Interested Candidates Can Read the Full Notification Before Apply</th>
          </tr>
          <tr>
            <th colSpan={2} className="text-center text-red-500 font-bold py-2">Important Links</th>
          </tr>
          <tr>
            <td className="text-center py-2">Notification</td>
            <td className="text-center py-2">
              <a href="https://img.freejobalert.com/uploads/2024/08/Notification-RMC-Safai-Kamdar-Posts.pdf" target="_blank" rel="nofollow" className="text-blue-500">
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="text-center py-2">Official Website</td>
            <td className="text-center py-2">
              <a href="https://www.rmc.gov.in/" target="_blank" rel="nofollow" title="RMC" className="text-blue-500">
                Click Here
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}