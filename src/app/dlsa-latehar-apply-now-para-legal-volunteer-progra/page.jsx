export default function RecruitmentInformation() {
  // Displays recruitment information for DLSA, Latehar Para Legal Volunteer Offline Form 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">DLSA, Latehar Para Legal Volunteer Offline Form 2024</h1>

      <div className="mb-4">
        <p className="font-bold text-green-500">Name of the Post: </p>
        <p className="text-gray-700">DLSA, Latehar Para Legal Volunteer Offline Form 2024</p>
      </div>

      <div className="mb-4">
        <p className="font-bold text-green-500">Post Date: </p>
        <p className="text-gray-700">10-09-2024</p>
      </div>

      <div className="mb-4">
        <p className="font-bold text-green-500">Total Vacancy: </p>
        <p className="text-gray-700">88</p>
      </div>

      <div className="mb-4">
        <p className="font-bold text-red-500">Brief Information: </p>
        <p className="text-gray-700">District Legal Service Authority (DLSA), Latehar has published a notification for the recruitment of Para Legal Volunteer Vacancy. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply.</p>
      </div>

      <h2 className="text-2xl font-bold mb-4">Important Dates</h2>
      <ul className="list-disc text-gray-700 ml-6">
        <li>Last Date for Receipt of Application: <strong>16-09-2024 (up to 04:30 PM)</strong></li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Qualification</h2>
      <ul className="list-disc text-gray-700 ml-6">
        <li>Candidates Should Possess 10th Class</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-center font-bold text-red-500 p-2">Post Name</th>
            <th className="text-center font-bold text-red-500 p-2">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-300">
            <td className="text-center text-green-500 p-2">Para Legal Volunteer</td>
            <td className="text-center p-2">88</td>
          </tr>
        </tbody>
      </table>

      <p className="text-blue-500 font-bold mb-4">Interested Candidates Can Read the Full Notification Before Apply</p>

      <h2 className="text-2xl font-bold mb-4">Important Links</h2>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <tbody>
          <tr className="border-b border-gray-300">
            <td className="text-center text-green-500 p-2">Notification</td>
            <td className="text-center p-2"><a className="text-blue-500" href="https://img.freejobalert.com/uploads/2024/09/Notification-DLSA-Latehar-Para-Legal-Volunteer-Posts.pdf" target="_blank" rel="nofollow">Click Here</a></td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="text-center text-green-500 p-2">Official Website</td>
            <td className="text-center p-2"><a className="text-blue-500" href="https://latehar.dcourts.gov.in/" target="_blank" rel="nofollow">Click Here</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}