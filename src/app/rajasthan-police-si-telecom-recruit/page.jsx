export default function RPSCRecruitment() {
  // This component displays recruitment information for RPSC Rajasthan Police SI Telecom Recruitment 2024.  It includes key details like eligibility, application process, important dates, and vacancy information.  All styling is done using Tailwind CSS.

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">RPSC Rajasthan Police SI Telecom Recruitment 2024</h1>

      <p className="text-lg mb-4">
        The Rajasthan Public Service Commission (RPSC) invites applications for the Sub-Inspector (Telecom) position in the Rajasthan Police Department.  This is a fantastic opportunity for qualified individuals seeking a career in law enforcement.  The application period is open for a limited time.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Key Highlights</h2>
        <ul className="list-disc list-inside">
          <li><strong>Organization:</strong> Rajasthan Public Service Commission (RPSC)</li>
          <li><strong>Post Name:</strong> Sub-Inspector (SI) - Telecom</li>
          <li><strong>Vacancies:</strong> 98</li>
          <li><strong>Application Deadline:</strong> December 27, 2024</li>
          <li><strong>Job Location:</strong> Rajasthan</li>
        </ul>
      </section>


      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Application Fee</h2>
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Category</th>
              <th className="px-4 py-2 text-left">Application Fee</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">General, EWS, OBC</td>
              <td className="border px-4 py-2">Rs. 600/-</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">SC, ST, PWD</td>
              <td className="border px-4 py-2">Rs. 400/-</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Mode of Payment</td>
              <td className="border px-4 py-2">Online</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Important Dates</h2>
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Event</th>
              <th className="px-4 py-2 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Notification Date</td>
              <td className="border px-4 py-2">November 20, 2024</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Apply Online Start Date</td>
              <td className="border px-4 py-2">November 28, 2024</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Apply Last Date</td>
              <td className="border px-4 py-2">December 27, 2024</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Exam Date</td>
              <td className="border px-4 py-2">To be announced</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Vacancy Details & Eligibility</h2>
        <p className="mb-2"><strong>Age Limit:</strong> 20-25 years (as of January 1, 2025)</p>
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Post Name</th>
              <th className="px-4 py-2 text-left">Vacancy</th>
              <th className="px-4 py-2 text-left">Qualification</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Sub-Inspector (Telecom)</td>
              <td className="border px-4 py-2">98</td>
              <td className="border px-4 py-2">B.Sc. with Physics &amp; Maths/ B.E./ B.Tech (EE/ ECE)</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Selection Process</h2>
        <ol className="list-decimal list-inside">
          <li>Written Exam</li>
          <li>Physical Efficiency Test (PET) and Physical Standards Test (PST)</li>
          <li>Interview</li>
          <li>Document Verification</li>
          <li>Medical Examination</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Application Information</h2>
        <table className="table-auto w-full border-collapse">
          <tbody>
            <tr>
              <td className="border px-4 py-2">Notification</td>
              <td className="border px-4 py-2"><a href="https://haryanajobs.org/wp-content/uploads/2024/11/RPSC-Rajasthan-Police-SI-Telecom-2024-Notification-PDF.pdf" target="_blank" rel="noopener" className="text-blue-500 underline">Notification</a></td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Apply Online</td>
              <td className="border px-4 py-2"><a href="https://sso.rajasthan.gov.in/signin" target="_blank" rel="noopener" className="text-blue-500 underline">Apply Online</a></td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Official Website</td>
              <td className="border px-4 py-2"><a href="https://rpsc.rajasthan.gov.in/" target="_blank" rel="noopener" className="text-blue-500 underline">RPSC</a></td>
            </tr>
          </tbody>
        </table>
      </section>

      <p className="text-sm text-gray-600 mt-4">Keywords: RPSC, Rajasthan Police, SI Telecom, Recruitment, 2024, Application, Jobs, Vacancy</p>
    </div>
  );
}