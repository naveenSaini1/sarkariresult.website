export default function RecruitmentInformation() {
  // This component displays recruitment information for NTPC Ltd Deputy Manager position.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">NTPC Ltd Deputy Manager Online Form 2024</h1>

      <div className="mb-4">
        <p className="text-green-500 font-bold">Name of the Post:</p>
        <p>NTPC Ltd Deputy Manager Online Form 2024</p>
      </div>

      <div className="mb-4">
        <p className="text-green-500 font-bold">Post Date:</p>
        <p>09-09-2024</p>
      </div>

      <div className="mb-4">
        <p className="text-green-500 font-bold">Total Vacancy:</p>
        <p>250</p>
      </div>

      <div className="mb-4">
        <p className="text-red-500 font-bold">Brief Information:</p>
        <p>National Thermal Power Corporation (NTPC) Limited has given an employment notification for the recruitment of Deputy Manager Vacancy. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply Online.</p>
      </div>

      <div className="mb-4">
        <p className="text-red-500 font-bold">Application Fee</p>
        <ul>
          <li>Available on 14-09-2024</li>
        </ul>
      </div>

      <div className="mb-4">
        <p className="text-red-500 font-bold">Important Dates</p>
        <ul>
          <li>Starting Date for Apply Online: 14-09-2024</li>
          <li>Last Date to Apply Online & Payment of Fee: 28-09-2024</li>
        </ul>
      </div>

      <div className="mb-4">
        <p className="text-red-500 font-bold">Age Limit</p>
        <ul>
          <li>Available on 14-09-2024</li>
        </ul>
      </div>

      <div className="mb-4">
        <p className="text-red-500 font-bold">Qualification</p>
        <ul>
          <li>Available on 14-09-2024</li>
        </ul>
      </div>

      <table className="table-auto w-full mb-4">
        <thead>
          <tr className="bg-gray-200 text-gray-600 text-left">
            <th className="px-4 py-2">Post Name</th>
            <th className="px-4 py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Electrical Erection</td>
            <td className="px-4 py-2">45</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Mechanical Erection</td>
            <td className="px-4 py-2">95</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">C & I Erection</td>
            <td className="px-4 py-2">35</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Civil Constrution</td>
            <td className="px-4 py-2">75</td>
          </tr>
        </tbody>
      </table>

      <p className="text-blue-500 mb-4">Interested Candidates Can Read the Full Notification Before Apply Online</p>

      <table className="table-auto w-full mb-4">
        <thead>
          <tr className="bg-gray-200 text-gray-600 text-left">
            <th className="px-4 py-2">Important Links</th>
            <th className="px-4 py-2">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Apply Online</td>
            <td className="px-4 py-2">Available on 14-09-2024</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Detail Notification</td>
            <td className="px-4 py-2">Available on 14-09-2024</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Short Notification</td>
            <td className="px-4 py-2"><a href="https://img.freejobalert.com/uploads/2024/09/Notification-NTPC-Ltd-Deputy-Manager-Posts.pdf" target="_blank" rel="noopener" className="text-blue-500">Click Here</a></td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Official Website</td>
            <td className="px-4 py-2"><a href="https://www.ntpc.co.in/" target="_blank" rel="noopener" className="text-blue-500">Click Here</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}