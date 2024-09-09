export default function RecruitmentInformation() {
  // This component displays recruitment information for Deputy Commissioner cum District Magistrate Office, Latehar Chowkidar Vacancy. 
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Deputy Commissioner cum District Magistrate Office, Latehar Chowkidar Vacancy 2024</h1>
      <div className="mb-4">
        <p className="text-gray-700 mb-2">
          <span className="font-bold text-green-500">Name of the Post:</span> Deputy Commissioner cum District Magistrate Office, Latehar Chowkidar Offline Form 2024
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-bold text-green-500">Post Date:</span> 02-08-2024
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-bold text-green-500">Total Vacancy:</span> 100
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-bold text-red-500">Brief Information:</span> Deputy Commissioner cum District Magistrate Office, Latehar has published a notification for the recruitment of Chowkidar Vacancy. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply.
        </p>
      </div>
      <table className="table-auto w-full text-center border-collapse border-2 border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th colSpan={2} className="py-2">
              <p className="font-bold text-red-500">Deputy Commissioner cum District Magistrate Office, Latehar</p>
              <p className="font-bold text-pink-500">Advt No. 01/2024</p>
              <p className="font-bold text-green-500">Chowkidar Vacancy 2024</p>
              <p className="font-bold">
                <a href="https://www.freejobalert.com" target="_blank" rel="noopener" className="text-blue-500 underline"></a>
              </p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th colSpan={2} className="py-2">
              <p className="font-bold text-red-500">Application Fee</p>
              <ul className="list-disc list-inside">
                <li>For Unreserved/Backward/Other Backward Class: <strong>Rs. 200/-</strong></li>
                <li>For Scheduled Tribe/Scheduled Caste: <strong>Rs. 100/-</strong></li>
                <li>Payment Mode: <strong>Through Indian Postal Order/Bank Draft</strong></li>
              </ul>
            </th>
          </tr>
          <tr>
            <th colSpan={2} className="py-2">
              <p className="font-bold text-red-500">Important Dates</p>
              <ul className="list-disc list-inside">
                <li>Last Date for Receipt of Application: <strong>18-08-2024</strong></li>
              </ul>
            </th>
          </tr>
          <tr>
            <th colSpan={2} className="py-2">
              <p className="font-bold text-red-500">Age limit (as on 01-07-2024)</p>
              <ul className="list-disc list-inside">
                <li>Minimum Age Limit: <strong>18 Years</strong></li>
                <li>Maximum Age Limit for Unreserved: <strong>35 Years</strong></li>
                <li>Maximum Age Limit for Backward Class/Extremely Backward Class: <strong>37 Years</strong></li>
                <li>Maximum Age Limit for Female (Unreserved/Backward Class/Extremely Backward Class): <strong>38 Years</strong></li>
                <li>Maximum Age Limit for Scheduled Caste/Scheduled Tribe (Male/ Female): <strong>40 Years</strong></li>
                <li>Age Relaxation is Applicable as per rules.</li>
              </ul>
            </th>
          </tr>
          <tr>
            <th colSpan={2} className="py-2">
              <p className="font-bold text-red-500">Qualification</p>
              <ul className="list-disc list-inside">
                <li>Candidates Should Possess 10th Class.</li>
              </ul>
            </th>
          </tr>
          <tr>
            <th colSpan={2} className="py-2 font-bold text-red-500">Vacancy Details</th>
          </tr>
          <tr>
            <th className="py-2 font-bold text-pink-500">Post Name</th>
            <th className="py-2 font-bold text-pink-500">Total</th>
          </tr>
          <tr>
            <td className="py-2">
              <span className="text-black">Chowkidar</span>
            </td>
            <td className="py-2">
              <span className="text-black">100</span>
            </td>
          </tr>
          <tr>
            <th colSpan={2} className="py-2 font-bold text-blue-500">Interested Candidates Can Read the Full Notification Before Apply</th>
          </tr>
          <tr>
            <th colSpan={2} className="py-2 font-bold text-red-500">Important Links</th>
          </tr>
          <tr>
            <td className="py-2 font-bold text-green-500">Notification</td>
            <td className="py-2">
              <a href="https://img.freejobalert.com/uploads/2024/08/Notification-Deputy-Commissioner-cum-District-Magistrate-Office-Latehar-Chowkidar-Posts.pdf" target="_blank" rel="nofollow" className="text-blue-500 underline">Click Here</a>
            </td>
          </tr>
          <tr>
            <td className="py-2 font-bold text-green-500">Official Website</td>
            <td className="py-2">
              <a href="https://latehar.nic.in/" target="_blank" rel="nofollow" className="text-blue-500 underline">Click Here</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}