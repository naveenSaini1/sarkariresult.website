export default function NarnaulCourtRecruitment() {
  // This component displays recruitment information for Narnaul Court Clerk positions.  It includes details about the job, application process, important dates, and vacancy specifics.  All styling is done using Tailwind CSS.

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Narnaul Court Clerk Recruitment 2024</h1>
      <p className="mb-4">The District and Sessions Judge, Narnaul, has announced the recruitment of 17 Clerk positions on an ad-hoc basis.  Interested and eligible candidates can apply offline by submitting a completed application form.</p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Key Highlights</h2>
        <ul className="list-disc list-inside">
          <li><strong>Job Title:</strong> Clerk</li>
          <li><strong>Vacancies:</strong> 17</li>
          <li><strong>Application Deadline:</strong> November 30, 2024</li>
          <li><strong>Application Method:</strong> Offline</li>
          <li><strong>Salary:</strong> Rs. 25500/-</li>
          <li><strong>Location:</strong> Haryana</li>
        </ul>
      </section>


      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Application Fees</h2>
        <table className="table-auto w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border border-gray-300 text-left">Category</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Fee</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border border-gray-300">Gen/ OBC/ EWS</td>
              <td className="px-4 py-2 border border-gray-300">Rs. 0/-</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border border-gray-300">SC/ ST/ PWD</td>
              <td className="px-4 py-2 border border-gray-300">Rs. 0/-</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Important Dates</h2>
        <table className="table-auto w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border border-gray-300 text-left">Event</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border border-gray-300">Application Start Date</td>
              <td className="px-4 py-2 border border-gray-300">November 18, 2024</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border border-gray-300">Application Deadline</td>
              <td className="px-4 py-2 border border-gray-300">November 30, 2024, up to 05:00 pm</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border border-gray-300">Exam/ CPT Date</td>
              <td className="px-4 py-2 border border-gray-300">To be announced</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Vacancy Details and Qualifications</h2>
        <table className="table-auto w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border border-gray-300 text-left">Post Name</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Vacancy</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Qualification</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border border-gray-300">Clerk</td>
              <td className="px-4 py-2 border border-gray-300">17 (UR-8, Gen PH-1, Gen ESM-2, SC-3, BCA-2, BCB-1)</td>
              <td className="px-4 py-2 border border-gray-300">Graduate in Any Stream</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-2"><strong>Age Limit:</strong> 18-42 years (as of January 1, 2024). Age relaxation applies as per rules.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Selection Process</h2>
        <ul className="list-disc list-inside">
          <li>Written Exam</li>
          <li>Computer Proficiency Test (CPT)</li>
          <li>Document Verification</li>
          <li>Medical Examination</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">How to Apply</h2>
        <ol className="list-decimal list-inside">
          <li>Review the eligibility criteria in the official notification.</li>
          <li>Download the application form (link below).</li>
          <li>Complete and attach necessary documents.</li>
          <li>Clearly label the envelope with "APPLICATION FOR THE POST OF CLERK".</li>
          <li>Mail the application to: Superintendent, Office of the District and Sessions Judge, Narnaul, Haryana-123001</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Important Links</h2>
        <table className="table-auto w-full border border-gray-300">
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border border-gray-300">Notification and Application Form</td>
              <td className="px-4 py-2 border border-gray-300"><a href="https://haryanajobs.org/wp-content/uploads/2024/11/Narnaul-Court-Clerk-Recruitment-2024-Notification-and-Application-Form.pdf" target="_blank" rel="noopener" className="text-blue-500 underline">Download</a></td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border border-gray-300">Narnaul Court Official Website</td>
              <td className="px-4 py-2 border border-gray-300"><a href="https://narnaul.dcourts.gov.in/notice-category/recruitments/" target="_blank" rel="noopener" className="text-blue-500 underline">Narnaul Court</a></td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">FAQs</h2>
        <dl className="mt-2">
          <dt className="font-bold">How to apply for Narnaul Court Recruitment 2024?</dt>
          <dd>Apply Offline by sending the duly filled application form to the address of District and Sessions Judge, Narnaul.</dd>
          <dt className="font-bold">What is the last date to apply for Narnaul Court Clerk Recruitment 2024?</dt>
          <dd>November 30, 2024, up to 05:00 pm.</dd>
        </dl>
      </section>

      <p className="text-gray-600 text-sm">Keywords: Narnaul Court, Clerk Recruitment, Haryana Jobs, Government Jobs, Application Form, Offline Application</p>
    </div>
  );
}