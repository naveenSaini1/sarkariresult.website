export default function RecruitmentInformation() {
  // Displays recruitment information for DLSA, Dhanbad Para Legal Volunteer Offline Form 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">DLSA, Dhanbad Para Legal Volunteer Offline Form 2024</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <p className="text-lg font-bold mb-2">Name of the Post:</p>
          <p>DLSA, Dhanbad Para Legal Volunteer Offline Form 2024</p>
        </div>
        <div>
          <p className="text-lg font-bold mb-2">Post Date:</p>
          <p>10-09-2024</p>
        </div>
      </div>

      <p className="text-lg font-bold mb-2">Total Vacancy: </p>
      <p>131</p>

      <p className="text-lg font-bold mb-2">Brief Information:</p>
      <p>District Legal Service Authority (DLSA), Dhanbad has announced notification for the recruitment of Para Legal Volunteer Vacancy. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply.</p>

      <h2 className="text-2xl font-bold text-center mb-4">Important Information</h2>

      <table className="table-auto w-full text-center border-collapse border border-gray-400 mb-6">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Important Dates</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">Last Date to Apply Receipt of Application: 13-09-2024</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold text-center mb-4">Qualification</h2>

      <ul className="list-disc pl-8 mb-6">
        <li>Candidates Should Possess 10th Class.</li>
      </ul>

      <h2 className="text-2xl font-bold text-center mb-4">Vacancy Details</h2>

      <table className="table-auto w-full text-center border-collapse border border-gray-400 mb-6">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Post Name</th>
            <th className="px-4 py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">Para Legal Volunteer</td>
            <td className="px-4 py-2">131</td>
          </tr>
        </tbody>
      </table>

      <p className="text-center mb-6">Interested Candidates Can Read the Full Notification Before Apply</p>

      <h2 className="text-2xl font-bold text-center mb-4">Important Links</h2>

      <table className="table-auto w-full text-center border-collapse border border-gray-400">
        <tbody>
          <tr>
            <td className="px-4 py-2">Notification</td>
            <td className="px-4 py-2"><a href="https://img.freejobalert.com/uploads/2024/09/Notification-DLSA-Dhanbad-Para-Legal-Volunteer-Posts.pdf" target="_blank" rel="nofollow" className="underline text-blue-500">Click Here</a></td>
          </tr>
          <tr>
            <td className="px-4 py-2">Official Website</td>
            <td className="px-4 py-2"><a href="https://dhanbad.dcourts.gov.in/" target="_blank" rel="nofollow" className="underline text-blue-500">Click Here</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}