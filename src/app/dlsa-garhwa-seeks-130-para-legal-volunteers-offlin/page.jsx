export default function RecruitmentInfo() {
  // This component displays recruitment information for the DLSA, Garhwa Para Legal Volunteer Offline Form 2024.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">DLSA, Garhwa Para Legal Volunteer Offline Form 2024</h1>
      <div className="mb-4">
        <p className="font-medium text-green-500 mb-1">Name of the Post:</p>
        <p className="text-gray-700">DLSA, Garhwa Para Legal Volunteer Offline Form 2024</p>
      </div>
      <div className="mb-4">
        <p className="font-medium text-green-500 mb-1">Post Date:</p>
        <p className="text-gray-700">09-09-2024</p>
      </div>
      <div className="mb-4">
        <p className="font-medium text-green-500 mb-1">Total Vacancy:</p>
        <p className="text-gray-700">130</p>
      </div>
      <div className="mb-4">
        <p className="font-medium text-red-500 mb-1">Brief Information:</p>
        <p className="text-gray-700">District Legal Service Authority (DLSA), Garhwa has published a notification for the recruitment of Para Legal Volunteer Vacancy. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply.</p>
      </div>
      <h2 className="text-2xl font-bold mb-4">Important Details</h2>
      <div className="mb-4">
        <p className="font-medium text-red-500 mb-1">Important Dates</p>
        <ul className="list-disc ml-6">
          <li className="text-gray-700">Last Date for Receipt of Application: <strong>13-09-2024</strong></li>
        </ul>
      </div>
      <div className="mb-4">
        <p className="font-medium text-red-500 mb-1">Qualification</p>
        <ul className="list-disc ml-6">
          <li className="text-gray-700">Candidates Should Possess 10th Class/ SSLC.</li>
        </ul>
      </div>
      <h3 className="text-xl font-bold mb-4">Vacancy Details</h3>
      <table className="table-auto w-full border-collapse mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-left font-medium text-gray-900">Post Name</th>
            <th className="px-4 py-2 text-left font-medium text-gray-900">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 text-gray-700">Para Legal Volunteer</td>
            <td className="px-4 py-2 text-gray-700">130</td>
          </tr>
        </tbody>
      </table>
      <div className="mb-4">
        <p className="text-blue-500">Interested Candidates Can Read the Full Notification Before Apply</p>
      </div>
      <h4 className="text-xl font-bold mb-4">Important Links</h4>
      <table className="table-auto w-full border-collapse mb-4">
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 text-gray-700">Notification</td>
            <td className="px-4 py-2">
              <a href="https://img.freejobalert.com/uploads/2024/09/Notification-DLSA-Garhwa-Para-Legal-Volunteer-Posts.pdf" target="_blank" rel="nofollow" className="text-blue-500 underline">Click Here</a>
            </td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 text-gray-700">Official Website</td>
            <td className="px-4 py-2">
              <a href="https://jhalsa.org/dlsa_garhwa" target="_blank" rel="nofollow" className="text-blue-500 underline">Link 1</a> | <a href="https://garhwa.dcourts.gov.in/#circular-notice" target="_blank" rel="nofollow" className="text-blue-500 underline">Link 2</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}