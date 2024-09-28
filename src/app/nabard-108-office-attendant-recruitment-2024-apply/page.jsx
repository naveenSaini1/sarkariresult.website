export default function NABARDRecruitment() {
  // This component displays recruitment information for NABARD Office Attendant position.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">NABARD Office Attendant Recruitment 2024</h1>
      <div className="mb-4">
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Name of the Post:</span> NABARD Office Attendant Online Form 2024
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Post Date:</span> 28-09-2024
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Total Vacancy:</span> 108
        </p>
      </div>
      <p className="text-lg mb-4">
        <span className="text-red-500 font-medium">Brief Information:</span> National Bank for Agriculture and Rural Development (NABARD) has given a Notification for the recruitment of Office Attendant – Group C Vacancy. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification &amp; Apply Online.
      </p>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Important Details</h2>
        <div className="flex flex-col gap-4">
          <div className="bg-gray-100 p-4 rounded-md">
            <p className="text-lg font-medium mb-2">
              <span className="text-red-500 font-medium">Application Fee</span>
            </p>
            <ul className="list-disc pl-5">
              <li className="text-lg">Available on 02-10-2024</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded-md">
            <p className="text-lg font-medium mb-2">
              <span className="text-red-500 font-medium">Important Dates</span>
            </p>
            <ul className="list-disc pl-5">
              <li className="text-lg">
                Starting Date for Apply Online &amp; Payment of Fee: <strong>02-10-2024</strong>
              </li>
              <li className="text-lg">
                Last Date to Apply Online &amp; Payment of Fee: <strong>21-10-2024</strong>
              </li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded-md">
            <p className="text-lg font-medium mb-2">
              <span className="text-red-500 font-medium">Age Limit (as on 01-10-2024)</span>
            </p>
            <ul className="list-disc pl-5">
              <li className="text-lg">Minimum Age Limit: <strong>18 Years</strong></li>
              <li className="text-lg">Maximum Age Limit: <strong>30 Years</strong></li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded-md">
            <p className="text-lg font-medium mb-2">
              <span className="text-red-500 font-medium">Qualification</span>
            </p>
            <ul className="list-disc pl-5">
              <li className="text-lg">Candidates should possess 10th Std. (SSC/ Matriculation).</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Vacancy Details</h2>
        <table className="table-auto w-full text-center text-lg border-collapse border-2 border-gray-400">
          <thead>
            <tr>
              <th className="px-4 py-2 font-medium text-blue-500">Sl No</th>
              <th className="px-4 py-2 font-medium text-blue-500">Post Name</th>
              <th className="px-4 py-2 font-medium text-blue-500">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2">1.</td>
              <td className="px-4 py-2">Office Attendant – Group C</td>
              <td className="px-4 py-2">108</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mb-4">
        <p className="text-lg font-medium mb-2 text-blue-500">
          Interested Candidates Can Read the Full Notification Before Apply Online
        </p>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Important Links</h2>
        <table className="table-auto w-full text-center text-lg border-collapse border-2 border-gray-400">
          <tbody>
            <tr>
              <td className="px-4 py-2 font-medium text-green-500" colSpan={2}>
                Apply Online
              </td>
              <td className="px-4 py-2">Available on 02-10-2024</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium text-green-500" colSpan={2}>
                Detail Notification
              </td>
              <td className="px-4 py-2">Available on 02-10-2024</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium text-green-500" colSpan={2}>
                Short Notification
              </td>
              <td className="px-4 py-2">
                <a
                  href="https://img.freejobalert.com/uploads/2024/09/Short-Notice-NABARD-Office-Attendant-Posts.png"
                  target="_blank"
                  rel="nofollow"
                  className="text-blue-500"
                >
                  Click Here
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium text-green-500" colSpan={2}>
                Official Website
              </td>
              <td className="px-4 py-2">
                <a href="https://www.nabard.org/" target="_blank" rel="nofollow" className="text-blue-500">
                  Click Here
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-medium text-blue-500" colSpan={2}>
                Buy Current Affairs Book (ENGLISH MEDIUM)
              </td>
              <td className="px-4 py-2">
                <a
                  href="https://www.amazon.in/dp/B0DBQW76SJ/?smid=A5G76JX0GL72Y"
                  target="_blank"
                  rel="nofollow noopener"
                  className="text-blue-500"
                >
                  Click Here
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}