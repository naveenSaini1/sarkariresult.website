export default function RecruitmentInformation() {
  // This component displays recruitment information for SEBI Young Professional 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">SEBI Young Professional 2024 Online Form</h1>

      <div className="mb-4">
        <p className="text-green-500 font-bold">Name of the Post: SEBI Young Professional 2024 Online Form</p>
      </div>

      <div className="mb-4">
        <p className="text-gray-700">
          <strong>Post Date:</strong> <span className="text-gray-900">28-08-2024</span>
        </p>
      </div>

      <div className="mb-4">
        <p className="text-gray-700">
          <strong>Total Vacancy:</strong> <span className="text-gray-900">54</span>
        </p>
      </div>

      <div className="mb-4">
        <p className="text-gray-700">
          <strong className="text-red-500">Brief Information:</strong> Securities and Exchange Board of India (SEBI), has published a notification for the recruitment of Young Professional Vacancy. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply Online.
        </p>
      </div>

      <h2 className="text-2xl font-bold mb-4">Important Information</h2>

      <div className="mb-4">
        <p className="text-gray-700">
          <strong className="text-red-500">Important Dates</strong>
        </p>
        <ul className="list-disc pl-6">
          <li>Last Date for Apply Online: <strong>The application form shall be open for 21 days from the date of publication of the advertisement</strong></li>
        </ul>
      </div>

      <div className="mb-4">
        <p className="text-gray-700">
          <strong className="text-red-500">Age Limit (as on 09-08-2024)</strong>
        </p>
        <ul className="list-disc pl-6">
          <li>
            <span className="text-gray-900">Maximum Age limit:</span> <strong>not more than 30 years</strong>
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>

      <table className="table-auto w-full text-center mb-4">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2">Post Name</th>
            <th className="px-4 py-2">Total</th>
            <th className="px-4 py-2">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">Young Professional (Securities Market Operations)</td>
            <td className="px-4 py-2">17</td>
            <td className="px-4 py-2">CA, CMA, PG (Management)</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Young Professional (Information Technology)</td>
            <td className="px-4 py-2">37</td>
            <td className="px-4 py-2">B.E. / B. Tech (Electronics /<br/> Electronics and Communication<br/> / IT /<br/> Computer Science)/MCA / MSc / MBA<br/> (Systems /Analytics)/M. Tech/MS</td>
          </tr>
        </tbody>
      </table>

      <div className="mb-4">
        <p className="text-blue-500">Interested Candidates Can Read the Full Notification Before Apply Online</p>
      </div>

      <h2 className="text-2xl font-bold mb-4">Important Links</h2>

      <table className="table-auto w-full text-center mb-4">
        <tbody>
          <tr>
            <td className="px-4 py-2">
              <strong className="text-green-500">Apply Online</strong>
            </td>
            <td className="px-4 py-2" colSpan="2">
              <a href="https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doYoungProfessional2024=yes" target="_blank" rel="nofollow" className="text-blue-500 underline">
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">
              <strong className="text-green-500">Notification</strong>
            </td>
            <td className="px-4 py-2" colSpan="2">
              <a href="https://img.freejobalert.com/uploads/2024/08/Notification-SEBI-Young-Professional-2024.pdf" target="_blank" rel="nofollow" className="text-blue-500 underline">
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">
              <strong className="text-green-500">Official Website</strong>
            </td>
            <td className="px-4 py-2" colSpan="2">
              <a href="https://www.sebi.gov.in/index.html" target="_blank" rel="nofollow" className="text-blue-500 underline">
                Click Here
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}