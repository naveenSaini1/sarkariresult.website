export default function CLATRecruitmentInfo() {
  // This component displays information about the CLAT 2025 recruitment process.
  // It includes details such as important dates, application fees, qualification criteria, and selection process.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        CLAT 2025: Eligibility, Dates, Application Process
      </h1>
      <p className="text-gray-600 mb-6">
        The Consortium of National Law Universities (NLUs) has announced the
        Common Law Admission Test (CLAT) for 2025. This national-level exam is
        conducted for admission to undergraduate (UG) and postgraduate (PG) law
        programs offered by 22 National Law Universities in India.
      </p>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Highlights</h2>
      <ul className="list-disc ml-6 text-gray-600 mb-6">
        <li>CLAT 2025 notification released on July 7, 2024.</li>
        <li>
          Online applications are open from July 15, 2024, to October 15, 2024.
        </li>
        <li>The exam is scheduled for December 1, 2024.</li>
        <li>Admissions to both 5-year integrated L.L.B. and L.L.M. programs.</li>
      </ul>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Application Details</h2>
      <div className="mb-6">
        <p className="text-gray-600 mb-2">Application Fees:</p>
        <table className="table-auto w-full text-gray-600">
          <thead>
            <tr>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Fee</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">General/ OBC/ EWS</td>
              <td className="border px-4 py-2">Rs. 4000/-</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">SC/ ST/ PWD/ BPL</td>
              <td className="border px-4 py-2">Rs. 3500/-</td>
            </tr>
          </tbody>
        </table>
        <p className="text-gray-600 mt-2">Mode of Payment: Online</p>
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Important Dates</h2>
      <div className="mb-6">
        <table className="table-auto w-full text-gray-600">
          <thead>
            <tr>
              <th className="px-4 py-2">Event</th>
              <th className="px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Application Start Date</td>
              <td className="border px-4 py-2">July 15, 2024</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Application Last Date</td>
              <td className="border px-4 py-2">October 15, 2024</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Exam Date</td>
              <td className="border px-4 py-2">December 1, 2024</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Eligibility Criteria</h2>
      <div className="mb-6">
        <p className="text-gray-600 mb-2">
          There is no age limit for the CLAT 2025.
        </p>
        <table className="table-auto w-full text-gray-600">
          <thead>
            <tr>
              <th className="px-4 py-2">Course Name</th>
              <th className="px-4 py-2">Qualification</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">LLB (5-Years)</td>
              <td className="border px-4 py-2">
                12th Pass with 45% Marks (40% for SC/ ST/ PWD)
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">LLM (1-Year)</td>
              <td className="border px-4 py-2">
                LLB with 50% Marks (45% SC/ ST/ PWD)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Selection Procedure
      </h2>
      <p className="text-gray-600 mb-6">
        The selection process for CLAT 2025 involves the following steps:
      </p>
      <ul className="list-disc ml-6 text-gray-600 mb-6">
        <li>Stage-1: Written Exam</li>
        <li>Stage-2: Counseling</li>
        <li>Stage-3: Document Verification</li>
        <li>Stage-4: Medical Examination</li>
      </ul>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Application Process</h2>
      <p className="text-gray-600 mb-6">
        To apply for CLAT 2025, follow these steps:
      </p>
      <ol className="list-decimal ml-6 text-gray-600 mb-6">
        <li>
          Verify your eligibility based on the CLAT 2025 notification.
        </li>
        <li>
          Visit the official website: consortiumofnlus.ac.in.
        </li>
        <li>Fill out the online application form.</li>
        <li>Upload the required documents.</li>
        <li>Pay the application fee online.</li>
        <li>Download and print a copy of your application form.</li>
      </ol>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Important Links</h2>
      <div className="mb-6">
        <table className="table-auto w-full text-gray-600">
          <thead>
            <tr>
              <th className="px-4 py-2">Link</th>
              <th className="px-4 py-2">Resource</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">
                <a
                  href="https://consortiumofnlus.ac.in/clat-2025/"
                  className="text-blue-500 underline"
                  target="_blank"
                  rel="noopener"
                >
                  Apply Online
                </a>
              </td>
              <td className="border px-4 py-2">Official Application Portal</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
      <div className="mb-6">
        <dl className="list-disc ml-6 text-gray-600">
          <dt className="font-bold">How to apply for CLAT 2025?</dt>
          <dd>Apply Online from the website consortiumofnlus.ac.in</dd>
          <dt className="font-bold">
            What is the last date to apply for CLAT 2025?
          </dt>
          <dd>October 15, 2024</dd>
        </dl>
      </div>
      <p className="text-gray-600 mb-4">
        For more detailed information and updates, please visit the official CLAT
        website: consortiumofnlus.ac.in.
      </p>
      <div className="text-gray-500 text-sm">
        {/* Keywords for SEO */}
        Keywords: CLAT, CLAT 2025, Common Law Admission Test, National Law
        Universities, LLB, LLM, Admission, Recruitment, Eligibility, Dates,
        Application, Process, India
      </div>
    </div>
  );
}