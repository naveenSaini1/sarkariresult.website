export default function RecruitmentInformation() {
  // This component displays recruitment information for MTC Chennai ITI Apprentice 2024 Walk-in.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">MTC Chennai ITI Apprentice 2024 Walk-in</h1>
      <p className="mb-4">
        <strong className="text-green-500">Name of the Post:</strong> MTC Chennai ITI Apprentice Graduate & Technician Apprentice 2024 Walk-in
      </p>
      <div className="mb-4">
        <p className="text-green-500 font-bold">Post Date:</p>
        <p>19-09-2024</p>
      </div>
      <div className="mb-4">
        <p className="text-green-500 font-bold">Total Vacancy:</p>
        <p>500</p>
      </div>
      <p className="mb-4">
        <span className="text-red-500 font-bold">Brief Information:</span> Metropolitan Transport Corporation Chennai Limited (MTC Chennai) has advertised a notification for the recruitment of ITI Apprentice Vacancy. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Attend.
      </p>
      <h2 className="text-2xl font-bold mb-4">Important Information</h2>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Important Dates</h3>
        <ul className="list-disc ml-6">
          <li>Date of notification: 05-09-2024</li>
          <li>Date of Walk in: 26-09-2024</li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Age Limit</h3>
        <ul className="list-disc ml-6">
          <li>Age limit will be followed as per Apprenticeship Rules.</li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Qualification</h3>
        <ul className="list-disc ml-6">
          <li>Candidates Should Possess ITI (Relevant trade).</li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Vacancy Details</h3>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-center py-2 px-4 font-bold text-blue-500">Post Name</th>
              <th className="text-center py-2 px-4 font-bold text-blue-500">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-200">
              <td className="text-center py-2 px-4">Mechanic Motor Vehicle</td>
              <td className="text-center py-2 px-4">250</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="text-center py-2 px-4">Mechanic Diesel</td>
              <td className="text-center py-2 px-4">90</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="text-center py-2 px-4">Electrician</td>
              <td className="text-center py-2 px-4">32</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="text-center py-2 px-4">Auto Electrician</td>
              <td className="text-center py-2 px-4">32</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="text-center py-2 px-4">Welder</td>
              <td className="text-center py-2 px-4">30</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="text-center py-2 px-4">Fitter</td>
              <td className="text-center py-2 px-4">52</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="text-center py-2 px-4">Turner</td>
              <td className="text-center py-2 px-4">04</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="text-center py-2 px-4">Painter</td>
              <td className="text-center py-2 px-4">10</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-4 text-blue-500">Interested Candidates Can Read the Full Notification Before Attend</p>
      <h3 className="text-xl font-bold mb-2">Important Links</h3>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <tbody>
          <tr className="border-t border-gray-200">
            <td className="text-center py-2 px-4 text-green-500 font-bold">Notification</td>
            <td className="text-center py-2 px-4"><a href="https://img.freejobalert.com/uploads/2024/09/Notification-MTC-Chennai-ITI-Apprentice-Posts.jpg" className="text-blue-500" target="_blank" rel="nofollow">Click Here</a></td>
          </tr>
          <tr className="border-t border-gray-200">
            <td className="text-center py-2 px-4 text-green-500 font-bold">Official Website</td>
            <td className="text-center py-2 px-4"><a href="https://mtcbus.tn.gov.in/" className="text-blue-500" title="TNSTC" target="_blank" rel="nofollow">Click Here</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}