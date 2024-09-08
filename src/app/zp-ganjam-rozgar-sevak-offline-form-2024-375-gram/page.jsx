export default function RecruitmentInformation() {
  // Displays recruitment information for ZP, Ganjam Gram Rozgar Sevak Offline Form 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">ZP, Ganjam Gram Rozgar Sevak Offline Form 2024</h1>

      <div className="mb-4">
        <p className="text-lg font-medium text-gray-700 mb-2">
          <span className="text-green-500">Name of the Post:</span> ZP, Ganjam Gram Rozgar Sevak Offline Form 2024
        </p>
        <p className="text-lg font-medium text-gray-700 mb-2">
          <span className="text-green-500">Post Date:</span>{' '}
          <span className="text-gray-600">22-08-2024</span>
        </p>
        <p className="text-lg font-medium text-gray-700 mb-2">
          <span className="text-green-500">Total Vacancy: </span>375
        </p>
      </div>

      <p className="text-gray-600 mb-4">
        <span className="text-red-500 font-medium">Brief Information: </span>
        Zilla Parishad, Ganjam, Odisha has published a notification for the recruitment of Gram Rozgar Sevak (GRS) Vacancy on Contract Basis.
        Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply.
      </p>

      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Important Dates</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Starting Date for Receipt of Application: <strong>21-08-2024</strong></li>
          <li>Last Date for Receipt of Application: <strong>21-09-2024</strong></li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Age Limit (as on 01-08-2024)</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Minimum Age limit: <strong>Must have 18 Years</strong></li>
          <li>Maximum Age limit: <strong>Must not be above 40 Years</strong></li>
          <li>Age Relaxation is Applicable as per Rules.</li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Qualification</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Candidates Should Posses 10+2 or Its Equivalent</li>
          <li>Candidates Shell be able to speak, read and Write Odia fluently</li>
          <li>For More Details Refer the Notification</li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Vacancy Details</h2>
        <table className="table-auto w-full text-gray-600 border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left font-bold">Trade Name</th>
              <th className="px-4 py-2 text-left font-bold">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 text-left">Gram Rozgar Sevak (GRS)</td>
              <td className="px-4 py-2 text-left">375</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-blue-500 mb-4">
        <strong>Interested Candidates Can Read the Full Notification Before Apply</strong>
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mb-2">Important Links</h2>
      <table className="table-auto w-full text-gray-600 border border-gray-300">
        <tbody>
          <tr>
            <td className="px-4 py-2 text-left font-bold">Notification</td>
            <td className="px-4 py-2 text-left">
              <a href="https://img.freejobalert.com/uploads/2024/08/Notification-ZP-Ganjam-Gram-Rozgar-Sevak-2024.pdf" target="_blank" rel="noopener" className="text-blue-500">
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-left font-bold">Official Website</td>
            <td className="px-4 py-2 text-left">
              <a href="https://ganjam.odisha.gov.in/" target="_blank" rel="noopener" className="text-blue-500">
                Click Here
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}