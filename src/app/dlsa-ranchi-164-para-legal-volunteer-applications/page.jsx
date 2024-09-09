export default function RecruitmentInfo() {
  // Displays recruitment information for DLSA, Ranchi Para Legal Volunteer position
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">DLSA, Ranchi Para Legal Volunteer Offline Form 2024</h1>
      <div className="mb-4">
        <p className="text-gray-700 mb-2">
          <span className="font-bold text-green-500">Name of the Post:</span> DLSA, Ranchi Para Legal Volunteer Offline Form 2024
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-bold text-green-500">Post Date: </span>
          <strong>09-09-2024</strong>
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-bold text-green-500">Total Vacancy: </span>
          <strong>164</strong>
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-bold text-red-500">Brief Information:</span> District Legal Service Authority (DLSA), Ranchi has invites an application for the recruitment of Para Legal Volunteer Vacancy. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply.
        </p>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Important Dates</h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Last Date for the receipt of Application: <strong>13-09-2024 (05:00 PM)</strong></li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Age Limit</h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Minimum Age Limit: <strong>18 Years</strong></li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Qualification</h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Candidates Should Possess 10th Class</li>
        </ul>
      </div>
      <h2 className="text-2xl font-bold mb-2">Vacancy Details</h2>
      <table className="table-auto w-full border-collapse border border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-left px-4 py-2 font-bold">Post Name</th>
            <th className="text-left px-4 py-2 font-bold">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="text-left px-4 py-2">Para Legal Volunteer</td>
            <td className="text-left px-4 py-2">164</td>
          </tr>
        </tbody>
      </table>
      <p className="text-gray-700 mb-2">
        <span className="text-blue-500 font-bold">Interested Candidates Can Read the Full Notification Before Apply</span>
      </p>
      <h2 className="text-2xl font-bold mb-2">Important Links</h2>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="text-left px-4 py-2"><span className="text-green-500 font-bold">Notification</span></td>
            <td className="text-left px-4 py-2"><a href="https://img.freejobalert.com/uploads/2024/09/Notification-DLSA-Ranchi-Para-Legal-Volunteer-Posts.pdf" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a></td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="text-left px-4 py-2"><span className="text-green-500 font-bold">Official Website</span></td>
            <td className="text-left px-4 py-2">
              <a href="https://ranchi.dcourts.gov.in/district-legal-services-authority/" target="_blank" rel="nofollow" className="text-blue-500">Link 1</a>
              <span className="mx-2">|</span>
              <a href="https://jhalsa.org/" target="_blank" rel="nofollow" className="text-blue-500">Link 2</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}