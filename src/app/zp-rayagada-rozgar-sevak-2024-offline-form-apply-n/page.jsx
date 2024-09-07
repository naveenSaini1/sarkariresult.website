export default function RecruitmentInfo() {
  // This component displays recruitment information for the ZP Rayagada Gram Rozgar Sevak Offline Form 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">ZP Rayagada Gram Rozgar Sevak Offline Form 2024</h1>

      <div className="mb-4">
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Name of the Post:</span> ZP, Rayagada Gram Rozgar Sevak Offline Form 2024
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Post Date:</span> 05-09-2024
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Total Vacancy:</span> 130
        </p>
      </div>

      <p className="text-lg mb-4">
        <span className="text-red-500 font-bold">Brief Information:</span> Zilla Parishad, Rayagada, Odisha has invites an application for the recruitment of Gram Rozgar Sevak Vacancy. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply.
      </p>

      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Important Dates</h2>
        <ul className="list-disc pl-6">
          <li>Starting Date for Apply (Offline): 30-08-2024</li>
          <li>Last Date to Apply (Offline): 30-09-2024 (Before 05:30 PM)</li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Age Limit (as on 01-08-2024)</h2>
        <ul className="list-disc pl-6">
          <li>Minimum Age: 18 Years</li>
          <li>Maximum Age: 40 Years</li>
          <li>Age relaxation is applicable as per rules.</li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Qualification</h2>
        <ul className="list-disc pl-6">
          <li>Candidates Should Possess 10+2 Pass or equivalent.</li>
          <li>Candidates shall be able to speak, read and write Odia fluently.</li>
          <li>For More Details Refer Notification.</li>
        </ul>
      </div>

      <table className="table-auto w-full mb-4 border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="text-left px-4 py-2 font-medium text-red-500">Post Name</th>
            <th className="text-left px-4 py-2 font-medium text-red-500">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="text-left px-4 py-2">Gram Rozgar Sevak</td>
            <td className="text-left px-4 py-2">130</td>
          </tr>
        </tbody>
      </table>

      <p className="text-lg font-medium text-blue-500 mb-4">Interested Candidates Can Read the Full Notification Before Apply</p>

      <h2 className="text-2xl font-bold mb-2">Important Links</h2>
      <table className="table-auto w-full border-collapse">
        <tbody>
          <tr>
            <td className="text-left px-4 py-2 font-medium text-green-500">Notification</td>
            <td className="text-left px-4 py-2"><a href="https://rayagada.odisha.gov.in/sites/default/files/2024-09/9069%20-GRS.pdf" target="_blank" rel="noopener" className="text-blue-500">Click Here</a></td>
          </tr>
          <tr>
            <td className="text-left px-4 py-2 font-medium text-green-500">Official Website</td>
            <td className="text-left px-4 py-2"><a href="https://rayagada.odisha.gov.in/" target="_blank" rel="noopener" className="text-blue-500">Click Here</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}