export default function KarnatakaBankRecruitment() {
  // This component displays recruitment information for Karnataka Bank Customer Service Associate positions.  It includes key details like job description, application deadlines, fees, eligibility criteria, and selection process.

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Karnataka Bank Recruitment 2024 - Customer Service Associates</h1>

      <p className="text-lg mb-4">
        Karnataka Bank Ltd. is hiring Customer Service Associates (CSAs) / Clerks across India.  This is an excellent opportunity for graduates seeking a career in banking.  The application window is open for a limited time, so apply now!
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Key Highlights</h2>
        <ul className="list-disc list-inside">
          <li><strong>Job Title:</strong> Customer Service Associate (CSA) / Clerk</li>
          <li><strong>Location:</strong> All India</li>
          <li><strong>Application Deadline:</strong> November 30, 2024</li>
          <li><strong>Exam Date:</strong> December 15, 2024</li>
          <li><strong>Salary:</strong> CTC Rs. 59,000/- per month</li>
        </ul>
      </section>


      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Application Fee</h2>
        <table className="table-auto w-full border-collapse mb-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left">Category</th>
              <th className="px-4 py-2 text-left">Application Fee</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">General, EWS, OBC</td>
              <td className="border px-4 py-2">Rs. 700/-</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">SC, ST, PWD</td>
              <td className="border px-4 py-2">Rs. 600/-</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Mode of Payment</td>
              <td className="border px-4 py-2">Online</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Important Dates</h2>
        <table className="table-auto w-full border-collapse mb-4">
          <thead>
            <tr className="bg-gray-200">
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
              <td className="border px-4 py-2">November 20, 2024</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Apply Last Date</td>
              <td className="border px-4 py-2">November 30, 2024</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Exam Date</td>
              <td className="border px-4 py-2">December 15, 2024</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Vacancy Details & Eligibility</h2>
        <p className="mb-2"><strong>Age Limit:</strong> 18-26 years (as of November 1, 2024)</p>
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left">Post Name</th>
              <th className="px-4 py-2 text-left">Vacancy</th>
              <th className="px-4 py-2 text-left">Qualification</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Customer Service Associate (CSA)</td>
              <td className="border px-4 py-2">Not Disclosed</td>
              <td className="border px-4 py-2">Any Graduate</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Selection Process</h2>
        <ol className="list-decimal list-inside">
          <li>Computer Based Test (CBT) Written Exam</li>
          <li>Document Verification</li>
          <li>Medical Examination</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Apply Now</h2>
        <a href="https://karnatakabankcsa.azurewebsites.net/" target="_blank" rel="noopener" className="text-blue-500 underline">Apply Online</a>
        <br/>
        <a href="https://karnatakabank.com/careers" target="_blank" rel="noopener" className="text-blue-500 underline">Official Website</a>
      </section>

      <p className="text-gray-600 text-sm mt-8">
        Keywords: Karnataka Bank, Recruitment, Customer Service Associate, Clerk, Jobs, Banking, Application, Online, India
      </p>
    </div>
  );
}