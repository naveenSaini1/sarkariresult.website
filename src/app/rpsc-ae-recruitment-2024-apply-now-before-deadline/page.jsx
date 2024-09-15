export default function RecruitmentInformation() {
  // This component displays recruitment information for the Rajasthan Public Service Commission (RPSC) Assistant Engineer (AE) Recruitment 2024.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">RPSC AE Recruitment 2024</h1>

      <div className="mb-4">
        <p className="text-gray-600">
          The Rajasthan Public Service Commission (RPSC) has announced the recruitment of 1014 Assistant
          Engineers (AE) through the Assistant Engineer Combined Competitive Examination 2024.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Important Dates</h2>
        <ul className="list-disc pl-6">
          <li>Notification Release Date: 5 August 2024</li>
          <li>Online Application Start Date: 14 August 2024</li>
          <li>Online Application Last Date: 15 September 2024</li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Application Fee</h2>
        <p className="text-gray-600">
          The application fee is Rs. 600/- for the General, OBC (CL), and EBC (CL) categories. The application
          fee for SC, ST, BC (NCL), EBC (NCL), EWS, and PWD candidates is Rs. 400/-.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Vacancies and Eligibility</h2>
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
              <td className="px-4 py-2">Assistant Engineer (AE)</td>
              <td className="px-4 py-2">1014</td>
              <td className="px-4 py-2">B.Tech/ B.E. in Related Field</td>
            </tr>
          </tbody>
        </table>
        <p className="text-gray-600">
          Age Limit: The Age Limit for the RPSC AE Recruitment 2024 is 21-40 Years. The cutoff date for
          the calculation of the age limit is 1 January 2025. Age relaxation will be given as per rules.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Selection Process</h2>
        <ul className="list-disc pl-6">
          <li>Prelims Written Exam</li>
          <li>Mains Written Exam</li>
          <li>Interview</li>
          <li>Document Verification</li>
          <li>Medical Examination</li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">How to Apply</h2>
        <ul className="list-disc pl-6">
          <li>Visit the website rpsc.rajasthan.gov.in or sso.rajasthan.gov.in</li>
          <li>Complete the one-time registration process if not already registered.</li>
          <li>Login and fill out the application form.</li>
          <li>Upload required documents and pay the application fee.</li>
          <li>Submit the application form and take a printout.</li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Important Links</h2>
        <table className="table-auto w-full border-collapse">
          <tbody>
            <tr>
              <td className="px-4 py-2">Online Application Form</td>
              <td className="px-4 py-2">
                <a
                  href="https://sso.rajasthan.gov.in/signin"
                  target="_blank"
                  rel="noopener"
                  className="text-blue-500 underline"
                >
                  Apply Online
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">Official Website</td>
              <td className="px-4 py-2">
                <a
                  href="https://rpsc.rajasthan.gov.in/"
                  target="_blank"
                  rel="noopener"
                  className="text-blue-500 underline"
                >
                  RPSC
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">FAQs</h2>
        <ul className="list-disc pl-6">
          <li>
            <span className="font-bold">How to apply for RPSC AEN Recruitment 2024?</span>
            <br/>
            Apply online from the website sso.rajasthan.gov.in
          </li>
          <li>
            <span className="font-bold">What is the last date to apply for RPSC AE Recruitment 2024?</span>
            <br/>
            15 September 2024, 11:59 pm.
          </li>
          <li>
            <span className="font-bold">When was the RPSC AE 2024 Notification released?</span>
            <br/>
            The RPSC AE Notificaiton was released on 5 August 2024.
          </li>
          <li>
            <span className="font-bold">When did the RPSC AEN 2024 Apply Online Start?</span>
            <br/>
            14 August 2024.
          </li>
        </ul>
      </div>
    </div>
  );
}