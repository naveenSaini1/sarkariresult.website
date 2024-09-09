export default function RecruitmentInformation() {
  // This component displays recruitment information for WCD, Belagavi Anganwadi Worker & Helper vacancy.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">WCD, Belagavi Anganwadi Worker & Helper Offline Form 2024</h1>
      <p className="mb-2">
        <span className="text-green-500 font-bold">Name of the Post:</span> WCD, Belagavi Anganwadi Worker & Helper Offline Form 2024
      </p>
      <p className="mb-2 text-justify">
        <span className="text-green-500 font-bold">Post Date:</span> <span className="text-black">19-07-2024</span>
      </p>
      <p className="mb-2 text-justify">
        <span className="text-green-500 font-bold">Total Vacancy:</span> 313
      </p>
      <p className="mb-4 text-justify">
        <span className="text-red-500 font-bold">Brief Information:</span> Women & Child Development, Belagavi has published a Notification for the recruitment of Anganwadi Worker, Anganwadi Helper Vacancy. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the notification & Apply.
      </p>

      <h2 className="text-2xl font-bold mb-4">Important Information</h2>

      <table className="table-auto w-full border-collapse border-2 border-gray-400 mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-center font-bold">Important Dates</th>
            <th className="px-4 py-2 text-center font-bold">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 text-center">Starting Date for Receipt of Application Form</td>
            <td className="px-4 py-2 text-center">10-07-2024</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center">Last Date for Receipt of Application Form</td>
            <td className="px-4 py-2 text-center">04-08-2024</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mb-4">Age Limit</h2>

      <ul className="list-disc pl-5 mb-4">
        <li className="mb-1">Minimum Age limit: <strong>19 Years</strong></li>
        <li className="mb-1">Maximum Age limit: <strong>35 Years</strong></li>
        <li>Age relaxation is applicable as per rules.</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>

      <table className="table-auto w-full border-collapse border-2 border-gray-400 mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-center font-bold">Post Name</th>
            <th className="px-4 py-2 text-center font-bold">Total</th>
            <th className="px-4 py-2 text-center font-bold">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 text-center">Anganwadi Worker</td>
            <td className="px-4 py-2 text-center">61</td>
            <td className="px-4 py-2 text-center">10th, 12th, ECCE Diploma Course</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center">Anganwadi Helper</td>
            <td className="px-4 py-2 text-center">252</td>
            <td className="px-4 py-2 text-center">10th Class</td>
          </tr>
        </tbody>
      </table>

      <p className="mb-4 text-blue-500 font-bold">Interested Candidates Can Read the Full Notification Before Apply</p>

      <h2 className="text-2xl font-bold mb-4">Important Links</h2>

      <table className="table-auto w-full border-collapse border-2 border-gray-400 mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-center font-bold">Link</th>
            <th className="px-4 py-2 text-center font-bold">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 text-center">
              <span className="text-green-500 font-bold">Application Form</span>
            </td>
            <td className="px-4 py-2 text-center">
              <a href="https://karnemakaone.kar.nic.in/abcd/ApplicationForm_JA_org.aspx" className="text-blue-500" target="_blank" rel="noopener">Click Here</a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center">
              <span className="text-green-500 font-bold">Notification</span>
            </td>
            <td className="px-4 py-2 text-center">
              <a href="https://img.freejobalert.com/uploads/2024/07/Notification-WCD-Belagavi-Anganwadi-Worker-Helper-Posts.pdf" className="text-blue-500" target="_blank" rel="noopener">Click Here</a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center">
              <span className="text-green-500 font-bold">Official Website</span>
            </td>
            <td className="px-4 py-2 text-center">
              <a href="https://dwcd.karnataka.gov.in/english" className="text-blue-500" target="_blank" rel="noopener">Click Here</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}