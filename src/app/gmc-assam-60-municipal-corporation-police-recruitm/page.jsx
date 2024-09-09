export default function RecruitmentInformation() {
  // Displays recruitment information for GMC, Assam Municipal Corporation Police 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">Guwahati Municipal Corporation, Assam</h1>
      <h2 className="text-2xl font-bold text-center mb-4">Municipal Corporation Police Vacancy 2024</h2>
      <p className="text-center mb-4">
        <a href="https://www.freejobalert.com" target="_blank" rel="noopener" className="text-blue-500">
          
        </a>
      </p>
      <div className="flex flex-col md:flex-row justify-between mb-4">
        <div className="md:w-1/3">
          <h3 className="text-xl font-bold mb-2">Post Details</h3>
          <ul>
            <li className="mb-2">
              <span className="font-bold">Name of the Post:</span> GMC, Assam Municipal Corporation Police 2024 Offline Form
            </li>
            <li className="mb-2">
              <span className="font-bold">Post Date:</span> 05-08-2024
            </li>
            <li className="mb-2">
              <span className="font-bold">Total Vacancy:</span> 60
            </li>
          </ul>
        </div>
        <div className="md:w-2/3">
          <h3 className="text-xl font-bold mb-2">Brief Information</h3>
          <p>
            Guwahati Municipal Corporation, Assam has published a notification for the recruitment of Municipal Corporation Police Vacancy on contract basis. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply
          </p>
        </div>
      </div>
      <h3 className="text-xl font-bold mb-2">Important Dates</h3>
      <ul className="list-disc pl-6">
        <li>Last Date for submission of application form: 31-08-2024</li>
      </ul>
      <h3 className="text-xl font-bold mb-2">Age Limit (as on 01-01-2024)</h3>
      <ul className="list-disc pl-6">
        <li>Minimum Age Limit: 18 Years</li>
        <li>Maximum Age Limit: 25 Years</li>
      </ul>
      <h3 className="text-xl font-bold mb-2">Qualification</h3>
      <ul className="list-disc pl-6">
        <li>Candidates should possess HSSLC/12th class.</li>
      </ul>
      <h3 className="text-xl font-bold mb-2">Physical Standards</h3>
      <ul className="list-disc pl-6">
        <li className="mb-2">
          <span className="font-bold">Height (Minimum)</span>
          <ul className="list-disc pl-6">
            <li>Male: 162.56cm</li>
            <li>Female: 154.94cm</li>
          </ul>
        </li>
        <li className="mb-2">
          <span className="font-bold">Chest (For Male Candidates only):</span>
          <ul className="list-disc pl-6">
            <li>Normal: 80cm</li>
            <li>Expanded: 85cm</li>
          </ul>
        </li>
      </ul>
      <h3 className="text-xl font-bold mb-2">Vacancy Details</h3>
      <table className="table-auto w-full mb-4">
        <thead>
          <tr>
            <th className="text-center font-bold px-4 py-2">Post Name</th>
            <th className="text-center font-bold px-4 py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center px-4 py-2">Municipal Corporation Police</td>
            <td className="text-center px-4 py-2">60</td>
          </tr>
        </tbody>
      </table>
      <p className="text-blue-500 text-center mb-4">Interested Candidates Can Read the Full Notification Before Apply</p>
      <h3 className="text-xl font-bold mb-2">Important Links</h3>
      <table className="table-auto w-full">
        <tbody>
          <tr>
            <td className="text-center font-bold px-4 py-2">Notification</td>
            <td className="text-center px-4 py-2">
              <a href="https://img.freejobalert.com/uploads/2024/08/Notification-GMC-Assam-Municipal-Corporation-Police-2024.pdf" target="_blank" rel="nofollow" className="text-blue-500">
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="text-center font-bold px-4 py-2">Official Website</td>
            <td className="text-center px-4 py-2">
              <a href="https://gmc.assam.gov.in/" target="_blank" rel="nofollow" className="text-blue-500">
                Click Here
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}