export default function TNPWDApprenticeRecruitment() {
  // This component displays recruitment information for TN PWD Apprentice 2024.  It includes details about the post, important dates, vacancy details, and frequently asked questions.  All styling is done using Tailwind CSS.

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">TN PWD Apprentice Recruitment 2024</h1>

      <p className="text-justify mb-4">
        This recruitment drive offers exciting opportunities for apprentices in the Tamil Nadu Public Works Department (TN PWD).  Applicants should review the eligibility criteria and application process carefully.
      </p>

      <h2 className="text-2xl font-bold mb-2">Key Highlights</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Post Name: TN PWD Apprentice</li>
        <li>Total Vacancies: 760</li>
        <li>Application Start Date: 25-11-2024</li>
        <li>Application Deadline: 31-12-2024</li>
      </ul>

      <h2 className="text-xl font-bold mb-2">Post Details</h2>
      <div className="mb-4">
        <p className="font-bold text-green-600">Name of the Post:</p>
        <p>TN PWD Apprentice 2024 Online Form</p>
        <p className="font-bold text-green-600">Post Date:</p>
        <p>20-11-2024</p>
        <p className="font-bold text-green-600">Total Vacancy:</p>
        <p>760</p>
        <p className="font-bold text-red-600">Brief Information:</p>
        <p>The Tamil Nadu Public Works Department (TN PWD) is recruiting apprentices.  Interested and eligible candidates can apply online.</p>
      </div>

      <h2 className="text-xl font-bold mb-2">Important Dates</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Starting Date for Apply Online: 25-11-2024</li>
        <li>Last Date to Apply Online: 31-12-2024</li>
        <li>Declaration of Shortlisted list: 08-01-2025</li>
        <li>Verification of certificates for shortlisted candidates at PWD, Chennai: 21-01-2025 to 24-01-2025</li>
      </ul>

      <h2 className="text-xl font-bold mb-2">Age Limit</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Age limit will be followed as per Apprenticeship Rules</li>
      </ul>

      <h2 className="text-xl font-bold mb-2">Vacancy Details</h2>
      <table className="table-auto w-full border-collapse border border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-center text-purple-600">Post Name</th>
            <th className="border border-gray-300 px-4 py-2 text-center text-purple-600">Total</th>
            <th className="border border-gray-300 px-4 py-2 text-center text-purple-600">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-50">
            <td className="border border-gray-300 px-4 py-2 text-center">Graduate Apprentice</td>
            <td className="border border-gray-300 px-4 py-2 text-center">500</td>
            <td className="border border-gray-300 px-4 py-2 text-center">Degree (Engineering or Technology)</td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="border border-gray-300 px-4 py-2 text-center">Technician (Diploma) Apprentice</td>
            <td className="border border-gray-300 px-4 py-2 text-center">160</td>
            <td className="border border-gray-300 px-4 py-2 text-center">Diploma (Engineering or Technology)</td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="border border-gray-300 px-4 py-2 text-center">Non-Engineering Graduate Apprentice</td>
            <td className="border border-gray-300 px-4 py-2 text-center">100</td>
            <td className="border border-gray-300 px-4 py-2 text-center">Degree (Arts/ Science/ Commerce/Humanities BA/ B.Sc / B.Com/ BBA / BBM/ BCA etc)</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-xl font-bold mb-2">Application Fee</h2>
      <p>There is no fee.</p>

      <h2 className="text-xl font-bold mb-2">Important Links</h2>
      <table className="table-auto w-full border-collapse border border-gray-300 mb-4">
        <tbody>
          <tr className="hover:bg-gray-50">
            <td className="border border-gray-300 px-4 py-2 text-center text-green-600">Notification</td>
            <td className="border border-gray-300 px-4 py-2 text-center"><a className="text-blue-500" href="https://img.freejobalert.com/uploads/2024/11/Notification-TN-PWD-Apprentice-Posts.pdf" target="_blank" rel="noopener noreferrer">Click Here</a></td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="border border-gray-300 px-4 py-2 text-center text-green-600">Official Website</td>
            <td className="border border-gray-300 px-4 py-2 text-center"><a className="text-blue-500" href="https://www.tn.gov.in/" target="_blank" rel="noopener noreferrer">Click Here</a></td>
          </tr>
        </tbody>
      </table>


      <h2 className="text-xl font-bold mb-2">FAQs</h2>
      <dl className="mb-4">
        <dt className="font-bold">What is the starting date to apply online for TN PWD Apprentice 2024?</dt>
        <dd>Starting Date to apply online is 25-11-2024.</dd>
        <dt className="font-bold">What is the last date to apply online TN PWD Apprentice 2024?</dt>
        <dd>Last Date for apply online is 31-12-2024.</dd>
        <dt className="font-bold">What is the Eligibility to apply for TN PWD Apprentice 2024?</dt>
        <dd>Diploma/ Degree (Relevant Discipline).</dd>
        <dt className="font-bold">How many vacancies are being recruited by TN PWD Apprentice 2024?</dt>
        <dd>Total 760 Vacancies.</dd>
        <dt className="font-bold">How much fee to pay to apply for TN PWD Apprentice 2024?</dt>
        <dd>There is no Fee.</dd>
      </dl>

      <p className="text-xs text-gray-500">Keywords: TN PWD, Apprentice, Recruitment, 2024, Application, Vacancy, Tamil Nadu, Jobs, Online Form</p>
    </div>
  );
}