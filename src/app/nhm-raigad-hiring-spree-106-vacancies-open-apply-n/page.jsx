export default function RecruitmentInfo() {
  // Displays recruitment information for NHM, Raigad Various Vacancy 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">NHM, Raigad Various Vacancy 2024</h1>

      <div className="flex justify-between items-center mb-4">
        <p className="text-lg font-medium text-green-500">
          <span>Name of the Post:</span> NHM, Raigad Various Vacancy 2024
        </p>
        <p className="text-lg font-medium">Post Date: <span className="text-gray-800">17-08-2024</span></p>
      </div>

      <p className="text-gray-600 mb-4">
        <span className="font-medium text-red-500">Brief Information:</span> National Health Mission (NHM), Raigad has given an employment Notification for the recruitment of Staff Nurse, Laboratory Technician, Senior Treatment Supervisor &amp; Other Vacancy. Those Candidates who are interested in the vacancy details &amp; completed all eligibility criteria can read the Notification &amp; Apply.
      </p>

      <h2 className="text-2xl font-bold text-center mb-4">Important Dates</h2>

      <ul className="list-disc ml-8 mb-4">
        <li className="text-gray-700">Starting Date for receipt of Application: <strong>08-08-2024</strong></li>
        <li className="text-gray-700">Last Date for receipt of Application: <strong>20-08-2024</strong></li>
      </ul>

      <h2 className="text-2xl font-bold text-center mb-4">Age Limit (as on 01-09-2024)</h2>

      <ul className="list-disc ml-8 mb-4">
        <li className="text-gray-700">Maximum Age limit: <span className="text-red-500"><strong>38 years</strong></span></li>
        <li className="text-gray-700">For more details refer the notification</li>
      </ul>

      <h2 className="text-2xl font-bold text-center mb-4">Vacancy Details</h2>

      <table className="table-auto w-full text-center mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2 font-medium text-blue-500">Post Name</th>
            <th className="px-4 py-2 font-medium text-blue-500">Total</th>
            <th className="px-4 py-2 font-medium text-blue-500">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">Staff Nurse</td>
            <td className="px-4 py-2">66</td>
            <td className="px-4 py-2">GNM/ B.Sc (Nursing)</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Multi-Purpose Health Personnel</td>
            <td className="px-4 py-2">27</td>
            <td className="px-4 py-2">12th Pass (Science)</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Statistical Investigator</td>
            <td className="px-4 py-2">01</td>
            <td className="px-4 py-2">Degree (Statistics)</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Laboratory Technician</td>
            <td className="px-4 py-2">06</td>
            <td className="px-4 py-2">12th, Diploma</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Senior Treatment Supervisor</td>
            <td className="px-4 py-2">01</td>
            <td className="px-4 py-2">Degree</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Tuberculosis Health Visitor (TBHV)</td>
            <td className="px-4 py-2">02</td>
            <td className="px-4 py-2">Degree (Science)</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Para Medical Worker (PMW)</td>
            <td className="px-4 py-2">02</td>
            <td className="px-4 py-2">12th + PMW (Certificate)</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Malaria Technical Supervisor (MTS)</td>
            <td className="px-4 py-2">01</td>
            <td className="px-4 py-2">Degree (Science)</td>
          </tr>
        </tbody>
      </table>

      <p className="text-blue-500 text-center mb-4">
        <strong>Interested Candidates Can Read the Full Notification Before Apply</strong>
      </p>

      <h2 className="text-2xl font-bold text-center mb-4">Important Links</h2>

      <table className="table-auto w-full text-center mb-4">
        <tbody>
          <tr>
            <td className="px-4 py-2 font-medium text-green-500">Notification</td>
            <td className="px-4 py-2"><a href="https://img.freejobalert.com/uploads/2024/08/Notification-NHM-Raigad-Various-Vacancy.pdf" target="_blank" rel="noopener" className="text-blue-500">Click Here</a></td>
          </tr>
          <tr>
            <td className="px-4 py-2 font-medium text-green-500">Official Website</td>
            <td className="px-4 py-2"><a href="https://nrhm.maharashtra.gov.in/raigad.aspx" target="_blank" rel="noopener" className="text-blue-500">Click Here</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}