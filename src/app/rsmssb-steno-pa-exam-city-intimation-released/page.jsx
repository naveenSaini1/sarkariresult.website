export default function RecruitmentInformation() {
  // This component displays recruitment information for Rajasthan Staff Selection Board (RSMSSB) Stenographer and Personal Assistant (PA) Grade-II positions.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        RSMSSB Stenographer Recruitment Information
      </h1>

      {/* Post Details */}
      <div className="mb-6">
        <p className="text-gray-600">
          The Rajasthan Staff Selection Board (RSMSSB) has released the exam date
          for the recruitment of Stenographers and Personal Assistants (PA)
          Grade-II. The written exam for this recruitment will be held on{' '}
          <span className="font-bold">October 5, 2024</span>.
        </p>
      </div>

      {/* Brief Information */}
      <div className="mb-6">
        <p className="text-gray-600">
          Candidates can download the admit card from the official RSMSSB
          website. The recruitment process involves several stages, including a
          written exam, skill test, document verification, and medical
          examination.
        </p>
      </div>

      {/* Important Dates */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Important Dates</h2>
        <table className="table-auto w-full text-gray-600">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="text-left px-4 py-2">Event</th>
              <th className="text-left px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-300">
              <td className="text-left px-4 py-2">Start of Application Period</td>
              <td className="text-left px-4 py-2">February 29, 2024</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="text-left px-4 py-2">Last Date to Apply</td>
              <td className="text-left px-4 py-2">March 29, 2024</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="text-left px-4 py-2">Exam Date</td>
              <td className="text-left px-4 py-2">October 5, 2024</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Application Fees */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Application Fees</h2>
        <table className="table-auto w-full text-gray-600">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="text-left px-4 py-2">Category</th>
              <th className="text-left px-4 py-2">Fee</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-300">
              <td className="text-left px-4 py-2">General/OBC/EWS</td>
              <td className="text-left px-4 py-2">Rs. 600/-</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="text-left px-4 py-2">SC/ST/PWD</td>
              <td className="text-left px-4 py-2">Rs. 400/-</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Vacancy Details */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Vacancy Details and Eligibility
        </h2>
        <p className="text-gray-600 mb-2">
          The age limit for this recruitment is 18-40 years, calculated as of
          January 1, 2025. Age relaxation is provided as per government rules.
        </p>
        <table className="table-auto w-full text-gray-600">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="text-left px-4 py-2">Post Name</th>
              <th className="text-left px-4 py-2">Vacancy</th>
              <th className="text-left px-4 py-2">Qualification</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-300">
              <td className="text-left px-4 py-2">Stenographer</td>
              <td className="text-left px-4 py-2">194</td>
              <td className="text-left px-4 py-2">
                12th Pass + Stenography + Computer Course
              </td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="text-left px-4 py-2">PA Grade-II</td>
              <td className="text-left px-4 py-2">280</td>
              <td className="text-left px-4 py-2">
                12th Pass + Stenography + Computer Course
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Selection Process */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Selection Process
        </h2>
        <ul className="list-disc text-gray-600 pl-6">
          <li>Written Exam</li>
          <li>Skill Test</li>
          <li>Document Verification</li>
          <li>Medical Examination</li>
        </ul>
      </div>

      {/* How to Download Admit Card */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          How to Download the Admit Card
        </h2>
        <ul className="list-disc text-gray-600 pl-6">
          <li>Visit the official website: sso.rajasthan.gov.in</li>
          <li>Login using your SSO ID and Password</li>
          <li>
            Go to the recruitment section and click on the Admit Card Download
            Link.
          </li>
          <li>Download the admit card and take a printout.</li>
        </ul>
      </div>

      {/* Important Links */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Important Links</h2>
        <table className="table-auto w-full text-gray-600">
          <tbody>
            <tr className="border-b border-gray-300">
              <td className="text-left px-4 py-2">Admit Card Instructions</td>
              <td className="text-left px-4 py-2">
                <a
                  href="https://pmsuryaghar.org.in/wp-content/uploads/2024/09/RSMSSB-Steno-Exam-City-Intimation-Notice-2024.pdf"
                  className="text-blue-500 hover:underline"
                >
                  Notice
                </a>
              </td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="text-left px-4 py-2">
                Admit Card/ Exam City Download Link
              </td>
              <td className="text-left px-4 py-2">
                <a
                  href="https://sso.rajasthan.gov.in/signin"
                  target="_blank"
                  rel="noopener"
                  className="text-blue-500 hover:underline"
                >
                  Admit Card/Exam City
                </a>
              </td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="text-left px-4 py-2">Exam Date Notice</td>
              <td className="text-left px-4 py-2">
                <a
                  href="https://pmsuryaghar.org.in/wp-content/uploads/2024/09/RSMSSB-Stenograher-Exam-Schedule-2024-Notice.pdf"
                  className="text-blue-500 hover:underline"
                >
                  Notice
                </a>
              </td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="text-left px-4 py-2">Notification PDF</td>
              <td className="text-left px-4 py-2">
                <a
                  href="https://pmsuryaghar.org.in/wp-content/uploads/2024/09/RSMSSB-Stenographer-and-PA-Recruitment-2024-Notification.pdf"
                  className="text-blue-500 hover:underline"
                >
                  Notification
                </a>
              </td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="text-left px-4 py-2">Official Website</td>
              <td className="text-left px-4 py-2">
                <a
                  href="https://rsmssb.rajasthan.gov.in/page?menuName=ApBuI6wdvnNKC6MoOgFsfXwFRsE7cKLr"
                  target="_blank"
                  rel="noopener"
                  className="text-blue-500 hover:underline"
                >
                  RSMSSB
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* FAQs */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">FAQs</h2>
        <div className="border rounded-md p-4">
          <p className="text-gray-600 mb-2 font-bold">
            How to download the RSMSSB Stenographer Admit Card 2024?
          </p>
          <p className="text-gray-600">
            You can download the Stenographer Admit Card 2024 from the
            website: sso.rajasthan.gov.in.
          </p>
        </div>
        <div className="border rounded-md p-4 mt-4">
          <p className="text-gray-600 mb-2 font-bold">
            What is the exam date for RSMSSB Stenographer Recruitment 2024?
          </p>
          <p className="text-gray-600">The exam date is October 5, 2024.</p>
        </div>
      </div>
    </div>
  );
}