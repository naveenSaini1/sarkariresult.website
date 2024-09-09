export default function RecruitmentInfo() {
  // Displays recruitment information for Bhandara DCCB Clerk & Sepoy Vacancy 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Bhandara DCCB Clerk & Sepoy Vacancy 2024</h1>
      <p className="mb-4">
        <span className="text-green-500 font-bold">Name of the Post:</span> Bhandara DCCB Clerk & Sepoy Online Form 2024
      </p>
      <p className="mb-4 text-justify">
        <span className="text-green-500 font-bold">Post Date:</span> <span className="text-black">25-07-2024</span>
      </p>
      <p className="mb-4 text-justify">
        <span className="text-green-500 font-bold">Total Vacancy:</span> <span className="text-black">118</span>
      </p>
      <p className="mb-4 text-justify">
        <span className="text-red-500 font-bold">Brief Information:</span> Bhandara District Central Co-Operative Bank (Bhandara DCCB) has published a notification for the recruitment of Clerk & Sepoy Vacancy. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply Online.
      </p>
      <h2 className="text-2xl font-bold mb-4">Important Details</h2>
      <table className="table-auto w-full border-collapse mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-left text-gray-700 uppercase font-bold">Category</th>
            <th className="px-4 py-2 text-left text-gray-700 uppercase font-bold">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2 text-left">Application Fee</td>
            <td className="border px-4 py-2 text-left">
              <ul>
                <li>For General/Open Category candidates: <strong>Rs.885/- (Rs.750/- + 135 (GST) )</strong></li>
                <li>For Reserved Category candidates: <strong>Rs.767/- (Rs.650/- + 117 (GST) )</strong></li>
                <li>Payment Mode: <strong>Through Online</strong></li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2 text-left">Important Dates</td>
            <td className="border px-4 py-2 text-left">
              <ul>
                <li>Starting Date for Apply Online & Payment of Fee: <strong>24-07-2024</strong></li>
                <li>Last Date to Apply Online & Payment of Fee: <strong>02-08-2024</strong></li>
                <li>Date of Online Exam : <strong>It will be published separately on the website of the bank</strong></li>
                <li>Date of Downloading Admit Card : <strong>It will be published separately on the website of the bank</strong></li>
                <li>Date of DV & Interview : <strong>It will be published separately on the website of the bank</strong></li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2 text-left">Age Limit (as on 23-07-2024)</td>
            <td className="border px-4 py-2 text-left">
              <ul>
                <li>Minimum Age Limit of Open Category/Reserved Category Candidates for Clerk : <strong>21 Years</strong></li>
                <li>Maximum Age Limit of Open Category for Clerk : <strong>40 Years</strong></li>
                <li>Maximum Age Limit of Reserved Category for Clerk : <strong>45 Years</strong></li>
                <li>Minimum Age Limit of Open Category/Reserved Category Candidates for Sepoy : <strong>18 Years</strong></li>
                <li>Maximum Age Limit of Open Category for Sepoy : <strong>40 Years</strong></li>
                <li>Maximum Age Limit of Reserved Category for Sepoy : <strong>45 Years</strong></li>
                <li>Age Relaxation is Applicable as per Rules</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>
      <table className="table-auto w-full border-collapse mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-left text-gray-700 uppercase font-bold">SI No</th>
            <th className="px-4 py-2 text-left text-gray-700 uppercase font-bold">Post Name</th>
            <th className="px-4 py-2 text-left text-gray-700 uppercase font-bold">Total</th>
            <th className="px-4 py-2 text-left text-gray-700 uppercase font-bold">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2 text-left">1.</td>
            <td className="border px-4 py-2 text-left">Clerk</td>
            <td className="border px-4 py-2 text-left">99</td>
            <td className="border px-4 py-2 text-left">Any Degree</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 text-left">2.</td>
            <td className="border px-4 py-2 text-left">Sepoy/Peon</td>
            <td className="border px-4 py-2 text-left">19</td>
            <td className="border px-4 py-2 text-left">10th Pass</td>
          </tr>
        </tbody>
      </table>
      <p className="mb-4 text-blue-500">Interested Candidates Can Read the Full Notification Before Apply Online</p>
      <h2 className="text-2xl font-bold mb-4">Important Links</h2>
      <table className="table-auto w-full border-collapse mb-4">
        <tbody>
          <tr>
            <td className="border px-4 py-2 text-left">Apply Online</td>
            <td className="border px-4 py-2 text-left"><a href="https://bhandaradccb.in/" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a></td>
          </tr>
          <tr>
            <td className="border px-4 py-2 text-left">Notification</td>
            <td className="border px-4 py-2 text-left"><a href="https://img.freejobalert.com/uploads/2024/07/Notification-Bhandara-DCCB-Clerk-Sepoy-2024.pdf" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a></td>
          </tr>
          <tr>
            <td className="border px-4 py-2 text-left">Official Website</td>
            <td className="border px-4 py-2 text-left"><a href="https://bhandaradccb.com/" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}