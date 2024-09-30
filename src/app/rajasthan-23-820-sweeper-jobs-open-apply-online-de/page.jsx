export default function RecruitmentInformation() {
  // This component displays recruitment information for the Dept of Local Self Govt Rajasthan Sweeper 2024 vacancy
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Dept of Local Self Govt Rajasthan Sweeper 2024</h1>

      <p className="text-gray-600 mb-4">
        <span className="font-bold text-green-500">Name of the Post:</span> Dept of Local Self Govt Rajasthan Sweeper 2024 Online Form
      </p>
      <p className="text-gray-600 mb-4">
        <span className="font-bold text-green-500">Post Date:</span> 28-09-2024
      </p>
      <p className="text-gray-600 mb-4">
        <span className="font-bold text-green-500">Total Vacancy:</span> 23820
      </p>
      <p className="text-gray-600 mb-4">
        <span className="font-bold text-red-500">Brief Information:</span> Dept of Local Self Govt Rajasthan has advertised a notification for the recruitment of Sweeper Vacancy. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply Online.
      </p>

      <table className="w-full table-auto border-collapse border border-gray-300 mt-6">
        <thead>
          <tr className="bg-gray-100">
            <th colSpan={3} className="text-center py-2 font-bold text-gray-800">Dept of Local Self Govt Rajasthan</th>
          </tr>
          <tr className="bg-gray-100">
            <th colSpan={3} className="text-center py-2 font-bold text-gray-800">Advt No 02/2024</th>
          </tr>
          <tr className="bg-gray-100">
            <th colSpan={3} className="text-center py-2 font-bold text-green-500">Sweeper Vacancy 2024</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={3} className="text-center py-2 font-bold text-red-500">Application Fee</td>
          </tr>
          <tr>
            <td colSpan={3} className="py-2">
              <ul>
                <li>Application fee for General Candidates: <strong>Rs. 600/-</strong></li>
                <li>Application fee for Reserved, PWD Candidates: <strong>Rs. 400/-</strong></li>
                <li>Mode of Payment: <strong>Through Online</strong></li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={3} className="text-center py-2 font-bold text-red-500">Important Dates</td>
          </tr>
          <tr>
            <td colSpan={3} className="py-2">
              <ul>
                <li>Starting Date for Apply Online: <strong>07-10-2024</strong></li>
                <li>Last Date for Apply Online: <strong>06-11-2024</strong></li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={3} className="text-center py-2 font-bold text-red-500">Age Limit (01-01-2025)</td>
          </tr>
          <tr>
            <td colSpan={3} className="py-2">
              <ul>
                <li>Minimum Age: <strong>18 Years</strong></li>
                <li>Maximum Age: <strong>40 Years</strong></li>
                <li>Age relaxation is admissible for SC/ST/OBC/ PH/ Ex-servicemen candidates as per rules.</li>
                <li>For More Details Refer the Notification</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={3} className="text-center py-2 font-bold text-pink-500">Qualification</td>
          </tr>
          <tr>
            <td colSpan={3} className="py-2">
              <ul>
                <li>As per Rajasthan Self Government Department official notification</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={3} className="text-center py-2 font-bold text-red-500">Vacancy Details</td>
          </tr>
          <tr>
            <th className="text-center py-2 font-bold text-pink-500">Sl No</th>
            <th className="text-center py-2 font-bold text-pink-500">District Name</th>
            <th className="text-center py-2 font-bold text-pink-500">Total</th>
          </tr>
          <tr>
            <td className="text-center py-2">1</td>
            <td className="text-center py-2">Sweeper</td>
            <td className="text-center py-2"><span className="text-green-500">23820</span></td>
          </tr>
          <tr>
            <td colSpan={3} className="text-center py-2">For More Details refer the notification</td>
          </tr>
          <tr>
            <td colSpan={3} className="text-center py-2">Interested Candidates Can Read the Full Notification Before Apply Online</td>
          </tr>
          <tr>
            <td colSpan={3} className="text-center py-2 font-bold text-red-500">Important Links</td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center py-2 font-bold text-green-500">Apply Online</td>
            <td className="text-center py-2">Available on 07-10-2024</td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center py-2 font-bold text-green-500">Detail Notification</td>
            <td className="text-center py-2">
              <a href="https://lsg.urban.rajasthan.gov.in/content/dam/raj/udh/lsgs/lsg-jaipur/Order/Order2024/September/Safai%20Bharti%20Detailed%20Advertisement%20skb2024.pdf" target="_blank" rel="noopener" className="text-blue-500 underline">Click Here</a>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center py-2 font-bold text-green-500">Short Notification</td>
            <td className="text-center py-2">
              <a href="https://img.freejobalert.com/uploads/2024/09/Short-Notification-Dept-of-Local-Self-Government-Rajasthan-Sweeper-Posts.pdf" target="_blank" rel="noopener" className="text-blue-500 underline">Click Here</a>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center py-2 font-bold text-green-500">Official Website</td>
            <td className="text-center py-2">
              <a href="https://lsg.urban.rajasthan.gov.in/content/raj/udh/lsg-jaipur/en/home.html" target="_blank" rel="noopener" className="text-blue-500 underline">Click Here</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}