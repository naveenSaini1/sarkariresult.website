export default function RecruitmentInfo() {
  // This component displays recruitment information for the DLSA, Deoghar Para Legal Volunteer position.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">DLSA, Deoghar Para Legal Volunteer Offline Form 2024</h1>
      <div className="mb-4">
        <p className="text-lg font-medium text-gray-700 mb-1">
          <span className="text-green-500">Name of the Post:</span> DLSA, Deoghar Para Legal Volunteer Offline Form 2024
        </p>
        <p className="text-lg font-medium text-gray-700 mb-1">
          <span className="text-green-500">Post Date:</span> 10-09-2024
        </p>
        <p className="text-lg font-medium text-gray-700 mb-1">
          <span className="text-green-500">Total Vacancy:</span> 75
        </p>
      </div>
      <p className="text-lg font-medium text-gray-700 mb-4">
        <span className="text-red-500">Brief Information:</span> District Legal Service Authority (DLSA), Deoghar has announced notification for the recruitment of Para Legal Volunteer Vacancy. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply.
      </p>
      <table className="w-full border-collapse border border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-center py-2 px-4" colSpan={2}>
              <span className="text-red-500 font-bold">District Legal Service Authority (DLSA), Deoghar</span>
            </th>
          </tr>
          <tr className="bg-gray-100">
            <th className="text-center py-2 px-4" colSpan={2}>
              <span className="text-pink-500 font-bold">Advt.No 02/2024</span>
            </th>
          </tr>
          <tr className="bg-gray-100">
            <th className="text-center py-2 px-4" colSpan={2}>
              <span className="text-green-500 font-bold">Para Legal Volunteer Vacancy 2024</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center py-2 px-4" colSpan={2}>
              <span className="text-red-500 font-bold">Important Dates</span>
            </td>
          </tr>
          <tr>
            <td className="text-center py-2 px-4" colSpan={2}>
              <ul className="list-disc">
                <li>Last Date to Apply Receipt of Application: 13-09-2024</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="text-center py-2 px-4" colSpan={2}>
              <span className="text-red-500 font-bold">Qualification</span>
            </td>
          </tr>
          <tr>
            <td className="text-center py-2 px-4" colSpan={2}>
              <ul className="list-disc">
                <li>Candidates Should Possess 10th Class.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="text-center py-2 px-4" colSpan={2}>
              <span className="text-red-500 font-bold">Vacancy Details</span>
            </td>
          </tr>
          <tr>
            <td className="text-center py-2 px-4">
              <span className="text-pink-500 font-bold">Post Name</span>
            </td>
            <td className="text-center py-2 px-4">
              <span className="text-pink-500 font-bold">Total</span>
            </td>
          </tr>
          <tr>
            <td className="text-center py-2 px-4">Para Legal Volunteer</td>
            <td className="text-center py-2 px-4">75</td>
          </tr>
          <tr>
            <td className="text-center py-2 px-4" colSpan={2}>
              <span className="text-blue-500 font-bold">Interested Candidates Can Read the Full Notification Before Apply</span>
            </td>
          </tr>
          <tr>
            <td className="text-center py-2 px-4" colSpan={2}>
              <span className="text-red-500 font-bold">Important Links</span>
            </td>
          </tr>
          <tr>
            <td className="text-center py-2 px-4">
              <span className="text-green-500 font-bold">Notification</span>
            </td>
            <td className="text-center py-2 px-4">
              <a href="https://img.freejobalert.com/uploads/2024/09/Notification-DLSA-Deoghar-Para-Legal-Volunteer-Post.pdf" target="_blank" rel="nofollow" className="text-blue-500 font-bold">
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="text-center py-2 px-4">
              <span className="text-green-500 font-bold">Official Website</span>
            </td>
            <td className="text-center py-2 px-4">
              <a href="https://deoghar.dcourts.gov.in/" target="_blank" rel="nofollow" className="text-blue-500 font-bold">
                Click Here
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}