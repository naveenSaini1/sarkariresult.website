export default function RecruitmentInformation() {
  // This component displays recruitment information for the Deputy Commissioner cum District Magistrate Office, Bokaro Chowkidar position.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Deputy Commissioner cum District Magistrate Office, Bokaro Chowkidar Recruitment 2024</h1>

      <div className="mb-4">
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500 font-bold">Name of the Post:</span> Deputy Commissioner cum District Magistrate Office, Bokaro Chowkidar Offline Form 2024
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500 font-bold">Post Date:</span> 30-07-2024
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500 font-bold">Total Vacancy:</span> 163
        </p>
      </div>

      <p className="text-lg mb-4">
        <span className="text-red-500 font-bold">Brief Information:</span> Deputy Commissioner cum District Magistrate Office, Bokaro has published a notification for the recruitment of Chowkidar Vacancy.
        Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply.
      </p>

      <table className="table-auto w-full text-center border-collapse border-2 border-gray-300 mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-gray-100 text-left" colSpan="2">
              <span className="text-red-500 font-bold">Deputy Commissioner cum District Magistrate Office, Bokaro</span>
            </th>
          </tr>
          <tr>
            <th className="px-4 py-2 bg-gray-100 text-left" colSpan="2">
              <span className="text-pink-500 font-bold">Advt No. 01/2024</span>
            </th>
          </tr>
          <tr>
            <th className="px-4 py-2 bg-gray-100 text-left" colSpan="2">
              <span className="text-green-500 font-bold">Chowkidar Vacancy 2024</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border" colSpan="2">
              <p className="text-red-500 font-bold">Application Fee</p>
              <ul className="list-disc pl-6">
                <li>For Unreserved/Backward/Other Backward Class: <span className="font-bold">Rs. 200/-</span></li>
                <li>For Scheduled Tribe/Scheduled Caste: <span className="font-bold">Rs. 100/-</span></li>
                <li>Payment Mode: <span className="font-bold">Through Indian Postal Order/Bank Draft</span></li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border" colSpan="2">
              <p className="text-red-500 font-bold">Important Dates</p>
              <ul className="list-disc pl-6">
                <li>Last Date for Receipt of Application: <span className="font-bold">14-08-2024</span></li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border" colSpan="2">
              <p className="text-red-500 font-bold">Age limit (as on 01-07-2024)</p>
              <ul className="list-disc pl-6">
                <li>Minimum Age Limit: <span className="font-bold">18 Years</span></li>
                <li>Maximum Age Limit for Unreserved: <span className="font-bold">35 Years</span></li>
                <li>Maximum Age Limit for Backward Class/Extremely Backward Class: <span className="font-bold">37 Years</span></li>
                <li>Maximum Age Limit for Female (Unreserved/Backward Class/Extremely Backward Class): <span className="font-bold">38 Years</span></li>
                <li>Maximum Age Limit for Scheduled Caste/Scheduled Tribe (Male/ Female): <span className="font-bold">40 Years</span></li>
                <li>Age Relaxation is Applicable as per rules.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border" colSpan="2">
              <p className="text-red-500 font-bold">Qualification</p>
              <ul className="list-disc pl-6">
                <li>Candidates Should Possess 10th Class.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border" colSpan="2">
              <p className="text-red-500 font-bold">Vacancy Details</p>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border"><span className="text-pink-500 font-bold">Post Name</span></td>
            <td className="px-4 py-2 border"><span className="text-pink-500 font-bold">Total</span></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border"><span className="text-black font-bold">Chowkidar</span></td>
            <td className="px-4 py-2 border"><span className="text-black font-bold">163</span></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border" colSpan="2">
              <p className="text-blue-500 font-bold">Interested Candidates Can Read the Full Notification Before Apply</p>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border" colSpan="2">
              <p className="text-red-500 font-bold">Important Links</p>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border"><span className="text-green-500 font-bold">Notification</span></td>
            <td className="px-4 py-2 border"><a className="text-blue-500" href="https://img.freejobalert.com/uploads/2024/07/Notification-Deputy-Commissioner-cum-District-Magistrate-Office-Bokaro-Chowkidar-Posts.pdf" target="_blank" rel="nofollow">Click Here</a></td>
          </tr>
          <tr>
            <td className="px-4 py-2 border"><span className="text-green-500 font-bold">Official Website</span></td>
            <td className="px-4 py-2 border"><a className="text-blue-500" href="https://bokaro.nic.in/" target="_blank" rel="nofollow">Click Here</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}