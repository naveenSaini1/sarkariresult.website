export default function RRCRecruitmentInfo() {
  // This component displays information about a recruitment opportunity for the South Western Railway (SWR), 
  // focusing on key details like important dates, application fees, eligibility, and vacancy details.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">South Western Railway (SWR) Sportsperson Recruitment 2024</h1>

      <div className="mb-4">
        <p className="text-gray-700">The South Western Railway (SWR) is seeking talented sportspersons to fill various positions through a dedicated recruitment drive. The opportunity is open to individuals with a passion for sports and who meet the eligibility criteria.</p>
        <p className="text-gray-700">This recruitment program provides a chance for skilled sportspersons to join the SWR and contribute their abilities while pursuing a rewarding career.</p>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-2">Key Highlights</h2>
      <ul className="list-disc text-gray-700 mb-4">
        <li>Application period: October 19, 2024 - November 19, 2024 (5:45 PM)</li>
        <li>Application mode: Offline</li>
        <li>Application fee: No fee for any category</li>
        <li>Selection process: Sports trials, physical fitness test, document verification, medical examination</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-800 mb-2">Vacancy Details</h2>
      <table className="table-auto w-full mb-4">
        <thead>
          <tr className="bg-gray-200 text-gray-800">
            <th className="px-4 py-2 text-left">Position</th>
            <th className="px-4 py-2 text-left">Vacancies</th>
            <th className="px-4 py-2 text-left">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-2">Level 4, 5 Posts</td>
            <td className="px-4 py-2">5</td>
            <td className="px-4 py-2">Graduate + Sportsperson</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-2">Level 2, 3 Posts</td>
            <td className="px-4 py-2">16</td>
            <td className="px-4 py-2">12th Pass + Sportsperson</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-2">Level 1 Posts</td>
            <td className="px-4 py-2">25</td>
            <td className="px-4 py-2">10th Pass + Sportsperson</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold text-gray-800 mb-2">Eligibility Criteria</h2>
      <p className="text-gray-700 mb-4">Age Limit: 18-25 years (as on 01.01.2025) Age relaxation may be applicable based on specific categories.</p>

      <h2 className="text-2xl font-bold text-gray-800 mb-2">Important Dates</h2>
      <table className="table-auto w-full mb-4">
        <thead>
          <tr className="bg-gray-200 text-gray-800">
            <th className="px-4 py-2 text-left">Event</th>
            <th className="px-4 py-2 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-2">Notification Released</td>
            <td className="px-4 py-2">October 15, 2024</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-2">Application Period Begins</td>
            <td className="px-4 py-2">October 19, 2024</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-2">Application Deadline</td>
            <td className="px-4 py-2">November 19, 2024 (5:45 PM)</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-2">Application Deadline (Far-Flung Areas)</td>
            <td className="px-4 py-2">December 4, 2024 (5:45 PM)</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-2">Sports Trials Date</td>
            <td className="px-4 py-2">To be announced later</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold text-gray-800 mb-2">Apply Now</h2>
      <table className="table-auto w-full mb-4">
        <tbody>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-2">SWR Recruitment Notice</td>
            <td className="px-4 py-2"><a href="#" className="text-blue-500 hover:underline">Download Notice</a></td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-2">SWR Recruitment Notification (PDF)</td>
            <td className="px-4 py-2"><a href="#" className="text-blue-500 hover:underline">Download Notification</a></td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-2">Offline Application Form</td>
            <td className="px-4 py-2"><a href="#" className="text-blue-500 hover:underline">Access Application Form</a></td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-2">SWR Official Website</td>
            <td className="px-4 py-2"><a href="#" className="text-blue-500 hover:underline">Visit SWR Website</a></td>
          </tr>
        </tbody>
      </table>

      <p className="text-gray-700 mb-4">For further details and instructions, refer to the official notification and website. </p>

      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Keywords</h3>
        <p className="text-gray-700">SWR Recruitment, Sports Quota Recruitment, Railway Recruitment, Sportsperson Recruitment, Offline Application, India Recruitment</p>
      </div>
    </div>
  );
}