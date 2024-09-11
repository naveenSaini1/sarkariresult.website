export default function GESCOMApprenticeRecruitment() {
  // Displays recruitment information for GESCOM Apprentice Offline Form 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">GESCOM Apprentice Offline Form 2024</h1>
      <p className="mb-4">
        <span className="text-green-500 font-bold">Name of the Post:</span>{' '}
        <span className="font-bold">GESCOM Apprentice Offline Form 2024</span>
      </p>
      <p className="mb-4 text-justify">
        <span className="text-green-500 font-bold">Post Date: </span>
        <span className="font-bold">11-09-2024</span>
      </p>
      <p className="mb-4 text-justify">
        <span className="text-green-500 font-bold">Total Vacancy:</span>
        <span>221</span>
      </p>
      <p className="mb-4 text-justify">
        <span className="text-red-500 font-bold">Brief Information:</span>{' '}
        Gulbarga Electricity Supply Company Limited (GESCOM) has announced
        notification for the recruitment of Apprentice vacancy. Those Candidates
        who are interested in the vacancy details & completed all eligibility
        criteria can read the Notification & Apply.
      </p>
      <div className="mb-4">
        {/* Placeholder for dynamic content, similar to the original script */}
      </div>
      <table className="table-auto w-full text-center mb-4 border-collapse border border-gray-300">
        <thead>
          <tr>
            <th
              colSpan={2}
              className="p-2 bg-red-500 text-white font-bold"
            >
              Gulbarga Electricity Supply Company Limited (GESCOM)
            </th>
          </tr>
          <tr>
            <th
              colSpan={2}
              className="p-2 bg-green-500 text-white font-bold"
            >
              Apprentice Vacancy 2024
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={2} className="p-2 font-bold">
              Important Dates
            </td>
          </tr>
          <tr>
            <td className="p-2">
              Starting Date for Apply Offline: 23-08-2024
            </td>
            <td className="p-2">Last Date to Apply Offline: 13-09-2024</td>
          </tr>
          <tr>
            <td colSpan={2} className="p-2 font-bold">
              Age Limit (as on 13-09-2024)
            </td>
          </tr>
          <tr>
            <td className="p-2">Minimum Age: 16 Years</td>
            <td className="p-2">Maximum Age: 25 Years</td>
          </tr>
          <tr>
            <td colSpan={2} className="p-2">
              Age relaxation is admissible as per rules.
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="p-2 font-bold">
              Qualification
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="p-2">
              Candidates Should Possess SSLC/ ITI (NCVT/ SCVT).
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="p-2 font-bold">
              Vacancy Details
            </td>
          </tr>
          <tr>
            <td className="p-2 font-bold">Post Name</td>
            <td className="p-2 font-bold">Total</td>
          </tr>
          <tr>
            <td className="p-2">Apprentice</td>
            <td className="p-2">221</td>
          </tr>
          <tr>
            <td colSpan={2} className="p-2">
              Interested Candidates Can Read the Full Notification Before Apply
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="p-2 font-bold">
              Important Links
            </td>
          </tr>
          <tr>
            <td className="p-2 font-bold">Application Form</td>
            <td className="p-2">
              <a
                href="https://gescom.karnataka.gov.in/storage/pdf-files/Apprentice/ApprenticeApplicationFormat.pdf"
                target="_blank"
                rel="noopener"
                className="text-blue-500 underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="p-2 font-bold">Notification</td>
            <td className="p-2">
              <a
                href="https://img.freejobalert.com/uploads/2024/09/Notification-GESCOM-Apprentice-Posts.pdf"
                target="_blank"
                rel="noopener"
                className="text-blue-500 underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="p-2 font-bold">Official Website</td>
            <td className="p-2">
              <a
                href="https://gescom.karnataka.gov.in/english"
                target="_blank"
                rel="noopener"
                className="text-blue-500 underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="p-2 font-bold">Buy Current Affairs Book</td>
            <td className="p-2">
              <a
                href="https://www.amazon.in/dp/B0DBQW76SJ/?smid=A5G76JX0GL72Y"
                target="_blank"
                rel="noopener"
                className="text-blue-500 underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="p-2 font-bold">Download Mobile App</td>
            <td className="p-2">
              <a
                href="https://play.google.com/store/apps/details?id=com.freejobalert"
                target="_blank"
                rel="noopener"
                className="text-blue-500 underline"
              >
                Click Here
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}