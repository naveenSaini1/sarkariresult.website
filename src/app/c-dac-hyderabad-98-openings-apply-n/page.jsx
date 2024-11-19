export default function CDACRecruitment() {
  // This component displays recruitment information for C-DAC Hyderabad's various vacancies in 2024.  It includes details about the positions, important dates, eligibility criteria, and application process.  Social media links and irrelevant scripts have been removed.

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">C-DAC Hyderabad Recruitment 2024</h1>

      <p className="mb-4">
        C-DAC Hyderabad is recruiting for various positions. This is a great opportunity for those seeking roles in project management, engineering, and other related fields.  The application process is online, and there is no application fee.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Key Highlights</h2>
        <ul className="list-disc list-inside">
          <li>Post Date: 19-11-2024</li>
          <li>Total Vacancies: 98</li>
          <li>Application Start Date: 16-11-2024</li>
          <li>Application Deadline: 05-12-2024 (18:00 Hrs)</li>
          <li>Application Fee: Nil</li>
        </ul>
      </section>


      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Brief Information</h2>
        <p className="text-justify">
          Centre for Development of Advanced Computing, Hyderabad (C-DAC, Hyderabad) is recruiting for Project Associate, Project Engineer, and other vacancies.  Interested and eligible candidates can apply online.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Vacancy Details</h2>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">Post Name</th>
              <th className="border border-gray-300 px-4 py-2 text-center">Total</th>
              <th className="border border-gray-300 px-4 py-2 text-center">Age Limit</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Qualification</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-300">
              <td className="border border-gray-300 px-4 py-2">Project Associate (Fresher)</td>
              <td className="border border-gray-300 px-4 py-2 text-center">08</td>
              <td className="border border-gray-300 px-4 py-2 text-center">30 Years</td>
              <td className="border border-gray-300 px-4 py-2">B.E/B/Tech/M.E/M.Tech/PG Degree (Relevant Discipline)</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="border border-gray-300 px-4 py-2">Project Engineer (Fresher/Experienced)</td>
              <td className="border border-gray-300 px-4 py-2 text-center">33</td>
              <td className="border border-gray-300 px-4 py-2 text-center">30 &amp; 45 Years</td>
              <td className="border border-gray-300 px-4 py-2">B.E/B/Tech/M.E/M.Tech/PG Degree (Relevant Discipline)</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="border border-gray-300 px-4 py-2">Project Engineer (Fresher)</td>
              <td className="border border-gray-300 px-4 py-2 text-center">06</td>
              <td className="border border-gray-300 px-4 py-2 text-center">30 Years</td>
              <td className="border border-gray-300 px-4 py-2">B.E/B/Tech/M.E/M.Tech/PG Degree/Ph.D (Relevant Discipline)</td>
            </tr>
            {/* Add remaining rows similarly */}
            <tr className="border-b border-gray-300">
              <td className="border border-gray-300 px-4 py-2">Project Engineer/PS&amp;O Executive (Experienced)</td>
              <td className="border border-gray-300 px-4 py-2 text-center">13</td>
              <td className="border border-gray-300 px-4 py-2 text-center">45 Years</td>
              <td className="border border-gray-300 px-4 py-2">B.E/B/Tech/M.E/M.Tech/PG Degree/Ph.D (Relevant Discipline)</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="border border-gray-300 px-4 py-2">Project Manager/Program Manager /Program Delivery Manager/Knowledge Partner</td>
              <td className="border border-gray-300 px-4 py-2 text-center">07</td>
              <td className="border border-gray-300 px-4 py-2 text-center">56 Years</td>
              <td className="border border-gray-300 px-4 py-2">B.E/B/Tech/M.E/M.Tech/PG Degree/Ph.D (Relevant Discipline)</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="border border-gray-300 px-4 py-2">Project Officer (Content Writer)</td>
              <td className="border border-gray-300 px-4 py-2 text-center">01</td>
              <td className="border border-gray-300 px-4 py-2 text-center">50 Years</td>
              <td className="border border-gray-300 px-4 py-2">MA (English/Mass Communication/Journalism/Psychology)</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="border border-gray-300 px-4 py-2">Project Officer (Outreach)</td>
              <td className="border border-gray-300 px-4 py-2 text-center">01</td>
              <td className="border border-gray-300 px-4 py-2 text-center">50 Years</td>
              <td className="border border-gray-300 px-4 py-2">MBA/PG (Business Management)/MA (Mass Communication/Journalism)</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="border border-gray-300 px-4 py-2">Senior Project Engineer/Module Lead/Project Leader</td>
              <td className="border border-gray-300 px-4 py-2 text-center">29</td>
              <td className="border border-gray-300 px-4 py-2 text-center">40 Years</td>
              <td className="border border-gray-300 px-4 py-2">B.E/B/Tech/M.E/M.Tech/PG Degree/Ph.D (Relevant Discipline)</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Important Links</h2>
        <ul className="list-disc list-inside">
          <li>
            <a href="https://careers.cdac.in/advt-details/HY-12112024-1UXD8" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Apply Online</a>
          </li>
          <li>
            <a href="https://careers.cdac.in/advt-details/HY-12112024-1UXD8" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Notification</a>
          </li>
          <li>
            <a href="https://careers.cdac.in/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Official Website</a>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">FAQs</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Q: What is the starting date to apply online?</strong><br/>
            <strong>A:</strong> 16-11-2024
          </li>
          <li>
            <strong>Q: What is the last date to apply online?</strong><br/>
            <strong>A:</strong> 05-12-2024
          </li>
          <li>
            <strong>Q: What is the eligibility to apply?</strong><br/>
            <strong>A:</strong> Degree/PG/Ph.D (Relevant Discipline)
          </li>
          <li>
            <strong>Q: How many vacancies are there?</strong><br/>
            <strong>A:</strong> 98
          </li>
          <li>
            <strong>Q: How much is the application fee?</strong><br/>
            <strong>A:</strong> Nil
          </li>
        </ul>
      </section>

      <p className="text-sm text-gray-500">Keywords: CDAC, Hyderabad, Recruitment, Project Associate, Project Engineer, Jobs, Vacancies, Application, 2024</p>
    </div>
  );
}