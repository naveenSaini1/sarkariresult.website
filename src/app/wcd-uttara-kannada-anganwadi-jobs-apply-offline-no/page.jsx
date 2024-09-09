export default function RecruitmentInfo() {
  // Displays recruitment information for Anganwadi Worker & Helper positions in Uttara Kannada.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        <span className="text-green-500">Name of the Post:</span> WCD, Uttara Kannada Anganwadi Worker & Helper Offline Form 2024
      </h1>
      <p className="text-justify mb-2">
        <span className="text-green-500">Post Date:</span> <span className="text-black">23-07-2024</span>
      </p>
      <p className="text-justify mb-4">
        <span className="text-green-500">Total Vacancy:</span> 344
      </p>
      <p className="text-justify mb-4">
        <span className="text-red-500">Brief Information:</span> Women & Child Development, Uttara Kannada has published a Notification for the recruitment of Anganwadi Worker, Anganwadi Helper Vacancy. Those Candidates who are interested in the vacancy details &amp; completed all eligibility criteria can read the notification &amp; Apply.
      </p>
      <table className="table-auto border-collapse border-2 w-full mt-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="text-center py-2 px-4" colSpan="3">
              <span className="text-red-500 font-bold">Women & Child Development, Uttara Kannada</span>
            </th>
          </tr>
          <tr className="bg-gray-200">
            <th className="text-center py-2 px-4" colSpan="3">
              <span className="text-green-500 font-bold">Anganwadi Worker & Helper Vacancy 2024</span>
            </th>
          </tr>
          <tr className="bg-gray-200">
            <th className="text-center py-2 px-4" colSpan="3">
              <a href="https://www.freejobalert.com" target="_blank" rel="noopener" className="text-blue-500"></a>
            </th>
          </tr>
          <tr className="bg-gray-200">
            <th className="text-center py-2 px-4" colSpan="3">
              <span className="text-red-500">Important Dates</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center py-2 px-4" colSpan="3">
              <ul className="list-disc">
                <li>Starting Date for Receipt of Application Form: <strong>12-07-2024</strong></li>
                <li>Last Date for Receipt of Application Form: <strong>12-08-2024</strong></li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="text-center py-2 px-4" colSpan="3">
              <span className="text-red-500 font-bold">Age Limit</span>
            </td>
          </tr>
          <tr>
            <td className="text-left py-2 px-4" colSpan="3">
              <ul className="list-disc">
                <li>Minimum Age limit: <strong>19 Years</strong></li>
                <li>Maximum Age limit: <strong>35 Years</strong></li>
                <li>Age relaxation is applicable as per rules.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="text-center py-2 px-4" colSpan="3">
              <span className="text-red-500 font-bold">Vacancy Details</span>
            </td>
          </tr>
          <tr className="bg-gray-200">
            <th className="text-center py-2 px-4"><span className="text-red-500 font-bold">Post Name</span></th>
            <th className="text-center py-2 px-4"><span className="text-red-500 font-bold">Total</span></th>
            <th className="text-center py-2 px-4"><span className="text-red-500 font-bold">Qualification</span></th>
          </tr>
          <tr>
            <td className="text-center py-2 px-4">Anganwadi Worker</td>
            <td className="text-center py-2 px-4">81</td>
            <td className="text-center py-2 px-4">10th, 12th, ECCE Diploma Course</td>
          </tr>
          <tr>
            <td className="text-center py-2 px-4">Anganwadi Helper</td>
            <td className="text-center py-2 px-4">263</td>
            <td className="text-center py-2 px-4">10th Class</td>
          </tr>
          <tr>
            <td className="text-center py-2 px-4" colSpan="3">
              <span className="text-blue-500 font-bold">Interested Candidates Can Read the Full Notification Before Apply</span>
            </td>
          </tr>
          <tr>
            <td className="text-center py-2 px-4" colSpan="3">
              <span className="text-red-500 font-bold">Important Links</span>
            </td>
          </tr>
          <tr>
            <td className="text-center py-2 px-4"><span className="text-green-500 font-bold">Application Form</span></td>
            <td className="text-center py-2 px-4" colSpan="2">
              <a href="https://karnemakaone.kar.nic.in/abcd/ApplicationForm_JA_org.aspx" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a>
            </td>
          </tr>
          <tr>
            <td className="text-center py-2 px-4"><span className="text-green-500 font-bold">Notification</span></td>
            <td className="text-center py-2 px-4" colSpan="2">
              <a href="https://img.freejobalert.com/uploads/2024/07/Notification-WCD-Belagavi-Anganwadi-Worker-Helper-Posts.pdf" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a>
            </td>
          </tr>
          <tr>
            <td className="text-center py-2 px-4"><span className="text-green-500 font-bold">Official Website</span></td>
            <td className="text-center py-2 px-4" colSpan="2">
              <a href="https://dwcd.karnataka.gov.in/english" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}