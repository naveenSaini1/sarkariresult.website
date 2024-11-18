export default function KGMURecruitment() {
  // This component displays recruitment information for KGMU Non-Teaching positions.  It includes key details like job title, number of vacancies, application deadlines, and fee structure.  The information is presented in a clear and SEO-friendly manner using Tailwind CSS for styling.

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">KGMU Non-Teaching Recruitment 2024</h1>

      <p className="mb-4">
        King George Medical University (KGMU), Lucknow, Uttar Pradesh, is recruiting for 332 non-teaching positions.  This is a fantastic opportunity to join a prestigious university.  The application process is online, and the deadline is December 31, 2024.
      </p>

      <section className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Key Highlights</h2>
        <ul className="list-disc list-inside">
          <li><strong>Organization:</strong> King George Medical University (KGMU), Lucknow</li>
          <li><strong>Positions:</strong> 332 Non-Teaching (Group B & C)</li>
          <li><strong>Application Deadline:</strong> December 31, 2024</li>
          <li><strong>Application Mode:</strong> Online</li>
          <li><strong>Job Location:</strong> Uttar Pradesh</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-bold mb-2">Application Fee</h2>
        <table className="table-auto w-full mb-4">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Category</th>
              <th className="px-4 py-2 text-left">Fee</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">General, EWS, OBC</td>
              <td className="border px-4 py-2">Rs. 2360/-</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">SC, ST</td>
              <td className="border px-4 py-2">Rs. 1416/-</td>
            </tr>
          </tbody>
        </table>
        <p>Payment Method: Online</p>
      </section>


      <section className="mb-4">
        <h2 className="text-xl font-bold mb-2">Important Dates</h2>
        <table className="table-auto w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Event</th>
              <th className="px-4 py-2 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Notification Release</td>
              <td className="border px-4 py-2">November 17, 2024</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Online Application Start</td>
              <td className="border px-4 py-2">Update Soon</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Online Application End</td>
              <td className="border px-4 py-2">December 31, 2024</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Exam Date</td>
              <td className="border px-4 py-2">To be announced</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-bold mb-2">Vacancy Details & Eligibility</h2>
        <p><strong>Age Limit:</strong> 18-40 years (as of July 1, 2024). Age relaxation as per rules.</p>
        <table className="table-auto w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Post Name</th>
              <th className="px-4 py-2 text-left">Vacancies</th>
              <th className="px-4 py-2 text-left">Qualification</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Various Posts</td>
              <td className="border px-4 py-2">332</td>
              <td className="border px-4 py-2">See Notification</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-bold mb-2">Selection Process</h2>
        <ol className="list-decimal list-inside">
          <li>Written Exam</li>
          <li>Skills Test (as required)</li>
          <li>Document Verification</li>
          <li>Medical Examination</li>
        </ol>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-bold mb-2">Application & Notification</h2>
        <table className="table-auto w-full">
          <tbody>
            <tr>
              <td className="px-4 py-2">
                <a href="https://haryanajobs.org/wp-content/uploads/2024/11/KGMU-Non-Teaching-Recruitment-2024-Notification-PDF.pdf" target="_blank" rel="noopener" className="text-blue-500 underline">Notification</a>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">
                <a href="https://www.kgmu.org/recruitment_non-teaching.php" target="_blank" rel="noopener" className="text-blue-500 underline">Apply Online</a>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">
                <a href="https://www.kgmu.org/job.php" target="_blank" rel="noopener" className="text-blue-500 underline">KGMU Official Website</a>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <p className="text-sm text-gray-600">Keywords: KGMU, Recruitment, Non-Teaching, Jobs, Uttar Pradesh, Application, Notification, 2024</p>
    </div>
  );
}