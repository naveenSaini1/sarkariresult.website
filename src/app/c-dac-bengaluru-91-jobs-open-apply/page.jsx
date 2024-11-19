export default function CDACBengaluruRecruitment() {
  // This component displays recruitment information for C-DAC, Bengaluru's various vacancies in 2024.  It includes details about the positions, application deadlines, eligibility criteria, and more.  The information is presented in a clear, structured format using Tailwind CSS for styling.

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">C-DAC, Bengaluru Recruitment 2024</h1>
      <p className="text-lg mb-4">
        C-DAC, Bengaluru is recruiting for various positions on a contractual basis.  This includes Project Engineer, Project Manager, and Senior Project Engineer roles.  Interested and eligible candidates are encouraged to apply online.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Key Highlights</h2>
        <ul className="list-disc list-inside">
          <li><strong>Post Name:</strong> Various Vacancies</li>
          <li><strong>Total Vacancies:</strong> 91</li>
          <li><strong>Application Deadline:</strong> 05-12-2024</li>
          <li><strong>Application Fee:</strong> Nil</li>
          <li><strong>Eligibility:</strong> BE/B.Tech, ME/M.Tech, PG (Science/Computer Application), Ph.D (Relevant Discipline)</li>
        </ul>
      </section>


      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Post Details</h2>
        <p className="mb-2"><strong>Name of the Post:</strong> C-DAC, Bengaluru Various Vacancy Online Form 2024</p>
        <p className="mb-2"><strong>Post Date:</strong> 19-11-2024</p>
        <p className="mb-2"><strong>Total Vacancy:</strong> 91</p>
        <p className="mb-2"><strong>Brief Information:</strong> Centre for Development of Advanced Computing (C-DAC), Bengaluru has published a notification for the recruitment of Project Engineer, Project Manager &amp; Senior Project Engineer Vacancy on Contractual Basis.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Important Dates</h2>
        <ul className="list-disc list-inside">
          <li>Starting Date for Apply Online: 16-11-2024 (00:00 hrs)</li>
          <li>Last Date for Apply Online: 05-12-2024 (18:00 hrs)</li>
          <li>Date for Interview /Written test: Will be Communicated by email only</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Application Fee</h2>
        <p>Nil</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Qualification</h2>
        <ul className="list-disc list-inside">
          <li>Candidates Should possess BE/B.Tech, ME/M.Tech, PG (Science/Computer Application), Ph.D (Relevant Discipline)</li>
        </ul>
      </section>


      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Vacancy Details</h2>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">Post Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Total</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Age limit (as on 05-12-2024)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border border-gray-300 px-4 py-2">Project Engineer</td>
              <td className="border border-gray-300 px-4 py-2">52</td>
              <td className="border border-gray-300 px-4 py-2">35 Years</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">Project Manager / Program Manager / Program Delivery Manager / Knowledge Partner</td>
              <td className="border border-gray-300 px-4 py-2">04</td>
              <td className="border border-gray-300 px-4 py-2">56 Years</td>
            </tr>
            <tr className="bg-white">
              <td className="border border-gray-300 px-4 py-2">Senior Project Engineer / Module Lead / Project Leader – System Software/ Compiler/ Debugger</td>
              <td className="border border-gray-300 px-4 py-2">35</td>
              <td className="border border-gray-300 px-4 py-2">40 Years</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Important Links</h2>
        <ul className="list-disc list-inside">
          <li>
            <a href="https://careers.cdac.in/advt-details/BLK-13112024-EPPW0" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Apply Online</a>
          </li>
          <li>
            <a href="https://careers.cdac.in/advt-details/BLK-13112024-EPPW0" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Notification</a>
          </li>
          <li>
            <a href="https://www.cdac.in/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Official Website</a>
          </li>
        </ul>
      </section>

      <p className="text-sm text-gray-600">
        {/* Keywords for SEO */}
        Keywords: CDAC, Bengaluru, Recruitment, Jobs, Project Engineer, Project Manager, Senior Project Engineer, Vacancy, 2024, Application, Online,  India
      </p>
    </div>
  );
}