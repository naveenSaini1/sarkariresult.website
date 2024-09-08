export default function RecruitmentInformation() {
  // This component displays recruitment information for the Naval Ship Repair Yard, Kochi Apprentice position.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Naval Ship Repair Yard, Kochi Apprentice Recruitment 2024</h1>
      <div className="mb-4">
        <p className="text-gray-700 mb-1">
          <span className="font-bold text-green-500">Name of the Post:</span> Naval Ship Repair Yard, Kochi Apprentice Offline Form 2024
        </p>
        <p className="text-gray-700 mb-1">
          <span className="font-bold text-green-500">Post Date: </span>
          <span className="text-gray-900">19-08-2024</span>
        </p>
        <p className="text-gray-700 mb-1">
          <span className="font-bold text-green-500">Total Vacancy: </span>240
        </p>
      </div>
      <p className="text-gray-700 mb-4">
        <span className="font-bold text-red-500">Brief Information:</span> Naval Ship Repair Yard, Kochi and Naval Aircraft Yard, Kochi have given a notification for the recruitment of Apprentice vacancy. Those Candidates who are interested in the vacancy details and completed all eligibility criteria can read the Notification and Apply.
      </p>
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Important Dates</h2>
        <ul className="list-disc text-gray-700">
          <li>Last Date for Receipt of Application: <strong className="font-bold">16-09-2024</strong></li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Age Limit (as on 01-02-2025)</h2>
        <ul className="list-disc text-gray-700">
          <li>Upper Age Limit: <strong className="font-bold">21 Years</strong></li>
          <li>Age Relaxation is Applicable as per Rules.</li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Qualification</h2>
        <ul className="list-disc text-gray-700">
          <li>Candidates Should Possess Matriculation/ Std X &amp; ITI (Relevant Trade).</li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Vacancy Details</h2>
        <table className="table-auto w-full text-center border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 font-bold text-pink-500">Sl. No.</th>
              <th className="px-4 py-2 font-bold text-pink-500">Post Name</th>
              <th className="px-4 py-2 font-bold text-pink-500">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-200">
              <td className="px-4 py-2">1.</td>
              <td className="px-4 py-2">Apprentice</td>
              <td className="px-4 py-2">240</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-blue-500 text-center mb-4">
        <strong>Interested Candidates Can Read the Full Notification Before Apply Online</strong>
      </p>
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Important Links</h2>
        <table className="table-auto w-full text-center border border-gray-300">
          <tbody>
            <tr>
              <td className="px-4 py-2 font-bold text-green-500">Notification</td>
              <td className="px-4 py-2"><a href="https://img.freejobalert.com/uploads/2024/08/Notification-Naval-Ship-Repair-Yard-Kochi-Apprentice-Posts-1.png" target="_blank" rel="nofollow" className="text-blue-500 underline">Click Here</a></td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-bold text-green-500">Official Website</td>
              <td className="px-4 py-2"><a href="https://www.joinindiannavy.gov.in/" target="_blank" rel="nofollow" className="text-blue-500 underline">Click Here</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}