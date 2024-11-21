export default function HaryanaKaushalRozgarNigamRecruitment() {
  // This component displays recruitment information for the Haryana Kaushal Rozgar Nigam (HKRN).  It includes details about the organization, registration process, vacancy information, and selection criteria.  All styling is done using Tailwind CSS.

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Haryana Kaushal Rozgar Nigam (HKRN) Recruitment 2024</h1>

      <p className="mb-4">
        The Haryana Government's Haryana Kaushal Rozgar Nigam Limited (HKRNL) manages contractual and outsourced manpower for government entities.  This initiative aims to streamline recruitment, increase transparency, and reduce corruption. HKRNL handles all contract/DC rate recruitments within Haryana.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Key Highlights</h2>
        <ul className="list-disc list-inside">
          <li>Organization: Haryana Government</li>
          <li>Department: Haryana Skill Development and Industrial Training</li>
          <li>Portal: hkrnl.itiharyana.gov.in</li>
          <li>Age Limit: 18-42 years (Preference given to 30-36 years)</li>
          <li>Application Process: Online via the official portal</li>
        </ul>
      </section>


      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Organization Details</h2>
        <table className="table-auto w-full mb-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Category</th>
              <th className="px-4 py-2 text-left">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2">Organization</td>
              <td className="px-4 py-2">Haryana Government</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Department</td>
              <td className="px-4 py-2">Haryana Skill Development and Industrial Training</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Portal Name</td>
              <td className="px-4 py-2">Haryana Kaushal Rozgar Nigam (HKRN) Limited</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Official Website</td>
              <td className="px-4 py-2"><a href="https://hkrnl.itiharyana.gov.in/index" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">hkrnl.itiharyana.gov.in</a></td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Selection Criteria</h2>
        <p>Candidates are evaluated based on financial condition, education, and socioeconomic factors.</p>
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Category</th>
              <th className="px-4 py-2 text-left">Marks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2">Family Annual Income &lt; Rs. 80000/-</td>
              <td className="px-4 py-2">40</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Family Annual Income &lt; Rs. 200000/-</td>
              <td className="px-4 py-2">30</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Family Annual Income &lt; Rs. 300000/-</td>
              <td className="px-4 py-2">20</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Family Annual Income &lt; Rs. 400000/-</td>
              <td className="px-4 py-2">10</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Special Qualification/Course</td>
              <td className="px-4 py-2">20</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Common Eligibility Test (CET) Score</td>
              <td className="px-4 py-2">10</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Widow/Orphan</td>
              <td className="px-4 py-2">5</td>
            </tr>
            <tr>
              <td className="px-4 py-2"> District</td>
              <td className="px-4 py-2">5</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Current Vacancies</h2>
        <p>Check the official portal for the most up-to-date vacancy information.</p>
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Post Name</th>
              <th className="px-4 py-2 text-left">Qualification</th>
              <th className="px-4 py-2 text-left">Last Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2">104 Types Various Posts</td>
              <td className="px-4 py-2">Check Notice</td>
              <td className="px-4 py-2">21 Nov 2024</td>
            </tr>
             <tr>
              <td className="px-4 py-2">Various Posts</td>
              <td className="px-4 py-2">Check Notice</td>
              <td className="px-4 py-2">15 November 2024</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Important Links</h2>
        <table className="table-auto w-full">
          <tbody>
            <tr>
              <td className="px-4 py-2">Notification</td>
              <td className="px-4 py-2"><a href="https://haryanajobs.org/wp-content/uploads/2024/11/HKRN-104-Type-Post-Recruitment-2024-Notice-New.pdf" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Notification</a></td>
            </tr>
            <tr>
              <td className="px-4 py-2">Apply Online</td>
              <td className="px-4 py-2"><a href="https://hkrnl.itiharyana.gov.in/VacantJobs" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Apply Online</a></td>
            </tr>
            <tr>
              <td className="px-4 py-2">Marks (Score Calculator)</td>
              <td className="px-4 py-2"><a href="https://hkrnl.itiharyana.gov.in/scorecalculator" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Marks</a></td>
            </tr>
          </tbody>
        </table>
      </section>

      <p className="text-gray-600">Keywords: Haryana Kaushal Rozgar Nigam, HKRN, Recruitment, Haryana Jobs, Contractual Jobs, Government Jobs, India Jobs</p>
    </div>
  );
}