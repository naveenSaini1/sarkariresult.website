export default function RecruitmentInfo() {
  // This component displays recruitment information for GSERC Juna Shikshak (Old Teacher) 2024.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">GSERC Juna Shikshak (Old Teacher) Online Form 2024</h1>
      <p className="text-lg mb-4">
        <span className="text-green-500 font-bold">Name of the Post:</span> GSERC Juna Shikshak (Old Teacher) Online Form 2024
      </p>
      <p className="text-lg mb-4">
        <span className="text-green-500 font-bold">Post Date:</span> 03-08-2024
      </p>
      <p className="text-lg mb-4">
        <span className="text-green-500 font-bold">Total Vacancy:</span> 4000
      </p>
      <p className="text-lg mb-4">
        <span className="text-red-500 font-bold">Brief Information:</span> Gujarat State Secondary &amp; Higher Secondary Education Staff Recruitment Selection Committee (GSERC) has given an employment notification for the recruitment of Juna Shikshak (Old Teacher) Vacancy. Eligible Candidates who are interested in the Vacancy details &amp; completed all eligibility criteria can read the notification &amp; Apply Online.
      </p>
      <h2 className="text-2xl font-bold mb-4">Important Details</h2>
      <div className="mb-4">
        <p className="text-lg font-bold text-red-500 mb-2">Application Fee</p>
        <ul className="list-disc ml-6">
          <li>Available on 12-09-2024</li>
        </ul>
      </div>
      <div className="mb-4">
        <p className="text-lg font-bold text-red-500 mb-2">Important Dates</p>
        <ul className="list-disc ml-6">
          <li>Starting Date to Apply Online: <strong>12-09-2024</strong></li>
          <li>Last Date to Apply Online for Higher: <strong>26-09-2024 (up to 11:59 PM)</strong></li>
        </ul>
      </div>
      <div className="mb-4">
        <p className="text-lg font-bold text-red-500 mb-2">Qualification</p>
        <ul className="list-disc ml-6">
          <li>Available on 12-09-2024</li>
        </ul>
      </div>
      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>
      <table className="table-auto w-full text-center border-collapse border border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 font-bold text-sm">Advertisement No</th>
            <th className="px-4 py-2 font-bold text-sm">Section</th>
            <th className="px-4 py-2 font-bold text-sm col-span-2">Medium (Gujarati/ English/ Hindi) Total Established Vacancy</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">02/2024</td>
            <td className="px-4 py-2">Medium</td>
            <td className="px-4 py-2 col-span-2">2000</td>
          </tr>
          <tr>
            <td className="px-4 py-2">03/2024</td>
            <td className="px-4 py-2">Higher Secondary</td>
            <td className="px-4 py-2 col-span-2">2000</td>
          </tr>
        </tbody>
      </table>
      <p className="text-blue-500 mb-4">Interested Candidates Can Read the Full Notification Before Apply Online</p>
      <h2 className="text-2xl font-bold mb-4">Important Links</h2>
      <table className="table-auto w-full text-center border-collapse border border-gray-300 mb-4">
        <tbody>
          <tr>
            <td className="px-4 py-2 col-span-3"><span className="text-green-500 font-bold">Apply Online</span></td>
            <td className="px-4 py-2">Available on 12-09-2024</td>
          </tr>
          <tr>
            <td className="px-4 py-2 col-span-3"><span className="text-green-500 font-bold">Detail Notification</span></td>
            <td className="px-4 py-2">Available on 12-09-2024</td>
          </tr>
          <tr>
            <td className="px-4 py-2 col-span-3"><span className="text-green-500 font-bold">Short Notification</span></td>
            <td className="px-4 py-2"><a href="https://img.freejobalert.com/uploads/2024/09/Short-Notification-GSERC-Juna-Shikshak-Old-Teacher-Posts.jpg" target="_blank" rel="noopener" className="text-blue-500">Click Here</a></td>
          </tr>
          <tr>
            <td className="px-4 py-2 col-span-3"><span className="text-green-500 font-bold">Official Website</span></td>
            <td className="px-4 py-2"><a href="https://www.gserc.in/" target="_blank" rel="noopener" className="text-blue-500">Click Here</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}