export default function RPSCAgricultureOfficerRecruitment() {
  // This component displays information about the RPSC Agriculture Officer recruitment.  It includes key details like application deadlines, eligibility criteria, and vacancy numbers.  All styling is done using Tailwind CSS.

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">RPSC Agriculture Officer Recruitment 2024</h1>

      <p className="mb-4">
        The Rajasthan Public Service Commission (RPSC) is recruiting Agriculture Officers.  The application period has reopened with increased vacancies. This is a fantastic opportunity for qualified candidates seeking a permanent government position in Rajasthan.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Key Highlights</h2>
        <ul className="list-disc list-inside">
          <li><strong>Organization:</strong> Rajasthan Public Service Commission (RPSC)</li>
          <li><strong>Post Name:</strong> Agriculture Officer (AO)</li>
          <li><strong>Total Vacancies:</strong> 52</li>
          <li><strong>Application Deadline:</strong> December 13, 2024</li>
          <li><strong>Job Location:</strong> Rajasthan</li>
          <li><strong>Job Type:</strong> Permanent</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Application Fee</h2>
        <table className="table-auto w-full mb-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Application Fee</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-2">General, EWS, OBC</td>
              <td className="px-4 py-2">Rs. 600/-</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">SC, ST, PWD</td>
              <td className="px-4 py-2">Rs. 400/-</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">Mode of Payment</td>
              <td className="px-4 py-2">Online</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Important Dates</h2>
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">Event</th>
              <th className="px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-2">Notification Date</td>
              <td className="px-4 py-2">November 20, 2024</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">Online Application Start Date</td>
              <td className="px-4 py-2">November 29, 2024</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">Online Application End Date</td>
              <td className="px-4 py-2">December 13, 2024</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">Exam Date</td>
              <td className="px-4 py-2">April 20, 2025</td>
            </tr>
          </tbody>
        </table>
      </section>


      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Vacancy Details & Eligibility</h2>
        <p className="mb-2"><strong>Age Limit:</strong> 20-40 years (as of January 1, 2025)</p>
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">Post Name</th>
              <th className="px-4 py-2">Vacancy</th>
              <th className="px-4 py-2">Qualification</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-2">Agriculture Officer (AO)</td>
              <td className="px-4 py-2">52</td>
              <td className="px-4 py-2">M.Sc. (Agriculture/Horticulture)</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Selection Process</h2>
        <ol className="list-decimal list-inside">
          <li>Written Exam</li>
          <li>Document Verification</li>
          <li>Medical Examination</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Apply Now</h2>
        <p>
          <a href="https://sso.rajasthan.gov.in/signin" target="_blank" rel="noopener" className="text-blue-500 underline">Apply Online</a>
        </p>
        <p>
          <a href="https://rpsc.rajasthan.gov.in/home" target="_blank" rel="noopener" className="text-blue-500 underline">RPSC Official Website</a>
        </p>
      </section>


      <p className="text-gray-600 text-sm mt-8">Keywords: RPSC, Agriculture Officer, Recruitment, Rajasthan, Government Jobs, Application, Vacancy</p>
    </div>
  );
}