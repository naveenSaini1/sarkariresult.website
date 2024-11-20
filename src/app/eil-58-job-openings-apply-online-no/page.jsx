export default function EILRecruitment() {
  // This component displays recruitment information for Engineers India Limited (EIL) various vacancies in 2024.  It includes details about the positions, important dates, eligibility criteria, and application links.

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Engineers India Limited (EIL) Various Vacancies 2024</h1>

      <p className="text-lg mb-4">Engineers India Limited (EIL) is recruiting for various positions, including Deputy Manager, Manager, Senior Manager, and Engineer.  This is a great opportunity for skilled professionals to join a leading engineering consultancy.</p>

      <h2 className="text-2xl font-bold mb-4">Key Highlights</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Post Date:</strong> 16-11-2024</li>
        <li><strong>Latest Update:</strong> 20-11-2024</li>
        <li><strong>Total Vacancies:</strong> 58</li>
        <li><strong>Application Start Date:</strong> 19-11-2024</li>
        <li><strong>Application Deadline:</strong> 02-12-2024</li>
      </ul>


      <h2 className="text-2xl font-bold mb-4">Brief Information</h2>
      <p className="text-lg mb-4">Engineers India Limited (EIL) has announced recruitment for Deputy Manager, Manager, Senior Manager & Other Vacancies.  Interested and eligible candidates are encouraged to apply online.</p>

      <h2 className="text-2xl font-bold mb-4">Important Dates</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Starting Date for Apply Online: 19-11-2024</li>
        <li>Last Date to Apply Online: 02-12-2024</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>
      <table className="table-auto w-full mb-4">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">Post Name</th>
            <th className="px-4 py-2 text-left">Total</th>
            <th className="px-4 py-2 text-left">Upper Age Limit (as on 31-10-2024)</th>
            <th className="px-4 py-2 text-left">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">Engineer</td>
            <td className="px-4 py-2">06</td>
            <td className="px-4 py-2">28 Years</td>
            <td className="px-4 py-2">B.Arch/ B.E/B.Tech/B.Sc (Relevant Discipline)</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Deputy Manager</td>
            <td className="px-4 py-2">24</td>
            <td className="px-4 py-2">32 Years</td>
            <td className="px-4 py-2">Any Degree/ B.E/B.Tech/B.Sc/ B.Arch/ M.Arch/ M.Tech/PG</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Manager</td>
            <td className="px-4 py-2">24</td>
            <td className="px-4 py-2">36 Years</td>
            <td className="px-4 py-2">B.E/B.Tech/B.Sc (Relevant Discipline)</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Senior Manager</td>
            <td className="px-4 py-2">03</td>
            <td className="px-4 py-2">40 Years</td>
            <td className="px-4 py-2">B.E/B.Tech/B.Sc (Chemical Engineering)</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Assistant General Manager</td>
            <td className="px-4 py-2">01</td>
            <td className="px-4 py-2">44 Years</td>
            <td className="px-4 py-2">B.E/B.Tech/B.Sc (Chemical Engineering)</td>
          </tr>
        </tbody>
      </table>

      <p className="text-lg mb-4">Interested candidates can read the full notification before applying online.</p>

      <h2 className="text-2xl font-bold mb-4">Important Links</h2>
      <ul className="list-disc list-inside mb-4">
        <li><a href="https://recruitment.eil.co.in/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Apply Online</a></li>
        <li><a href="https://img.freejobalert.com/uploads/2024/11/Detailed-Notification-EIL-Various-Vacancy-Posts.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Detailed Notification</a></li>
        <li><a href="https://engineersindia.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Official Website</a></li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">FAQs</h2>
      <ul className="list-disc list-inside mb-4">
          <li><strong>What is the starting date to apply online?</strong> 19-11-2024</li>
          <li><strong>What is the last date to apply online?</strong> 02-12-2024</li>
          <li><strong>What is the eligibility to apply?</strong> Degree/ PG (Relevant Discipline)</li>
          <li><strong>What is the age limit as on date?</strong> 31-10-2024</li>
          <li><strong>How many vacancies are there?</strong> 58</li>
      </ul>

      <p className="text-sm text-gray-500 mt-4">Keywords: EIL, Engineers India Limited, Recruitment, Jobs, Vacancies, Deputy Manager, Manager, Senior Manager, Engineer, Application, Online Application</p>
    </div>
  );
}