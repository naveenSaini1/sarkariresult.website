export default function RecruitmentInformation() {
  // This component displays recruitment information for the MPPGCL ITI Apprentice 2024 position.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">MPPGCL ITI Apprentice 2024</h1>
      <div className="mb-4">
        <p className="text-gray-700">
          <span className="font-bold text-green-500">Name of the Post:</span> MPPGCL ITI Apprentice 2024
        </p>
        <p className="text-gray-700">
          <span className="font-bold text-green-500">Post Date:</span> 07-08-2024
        </p>
        <p className="text-gray-700">
          <span className="font-bold text-green-500">Total Vacancy:</span> 95
        </p>
      </div>
      <p className="text-gray-700 mb-4">
        <span className="font-bold text-red-500">Brief Information:</span> Madhya Pradesh Power Generating Company Limited (MPPGCL) has published a Notification for the recruitment of ITI Apprentice (Fitter, Electrician, Turner & Other) Vacancy. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply Online/Offline.
      </p>
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Important Dates</h2>
        <ul className="list-disc text-gray-700">
          <li>Last Date to Apply Online: 21-08-2024</li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Age Limit (as on 01-07-2024)</h2>
        <ul className="list-disc text-gray-700">
          <li>Minimum Age in All categories: 18 Years</li>
          <li>Maximum Age Limit for General Candidates: 25 Years</li>
          <li>Age relaxation is applicable as per rules.</li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Qualification</h2>
        <ul className="list-disc text-gray-700">
          <li>Candidates Should Possess ITI (Relevant Trade), NCVT, SCVT</li>
        </ul>
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Vacancy Details</h2>
      <table className="table-auto w-full text-gray-700 border border-gray-300 mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2 text-center font-bold bg-gray-200">Sl No</th>
            <th className="px-4 py-2 text-center font-bold bg-gray-200">Post Name</th>
            <th className="px-4 py-2 text-center font-bold bg-gray-200">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 text-center">1</td>
            <td className="px-4 py-2 text-center">Fitter</td>
            <td className="px-4 py-2 text-center">12</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center">2</td>
            <td className="px-4 py-2 text-center">Electrician</td>
            <td className="px-4 py-2 text-center">28</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center">3</td>
            <td className="px-4 py-2 text-center">Turner</td>
            <td className="px-4 py-2 text-center">07</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center">4</td>
            <td className="px-4 py-2 text-center">Welder</td>
            <td className="px-4 py-2 text-center">18</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center">5</td>
            <td className="px-4 py-2 text-center">Instrument Mechanic</td>
            <td className="px-4 py-2 text-center">07</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center">6</td>
            <td className="px-4 py-2 text-center">Computer Operator & Programming Assistant</td>
            <td className="px-4 py-2 text-center">17</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center">7</td>
            <td className="px-4 py-2 text-center">Electronics Mechanic</td>
            <td className="px-4 py-2 text-center">06</td>
          </tr>
        </tbody>
      </table>
      <p className="text-blue-500 text-center mb-4">Interested Candidates Can Read the Full Notification Before Apply Online</p>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Important Links</h2>
      <table className="table-auto w-full text-gray-700 border border-gray-300 mb-4">
        <tbody>
          <tr>
            <td className="px-4 py-2 text-center font-bold bg-gray-200">Apply Online</td>
            <td className="px-4 py-2 text-center"><a href="https://www.apprenticeshipindia.gov.in/" className="underline text-blue-500">Click Here</a></td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center font-bold bg-gray-200">Notification</td>
            <td className="px-4 py-2 text-center"><a href="https://img.freejobalert.com/uploads/2024/08/Notification-MPPGCL-ITI-Apprentice-Posts.pdf" className="underline text-blue-500">Click Here</a></td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center font-bold bg-gray-200">Official Website</td>
            <td className="px-4 py-2 text-center"><a href="https://www.mppgcl.mp.gov.in/" className="underline text-blue-500">Click Here</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}