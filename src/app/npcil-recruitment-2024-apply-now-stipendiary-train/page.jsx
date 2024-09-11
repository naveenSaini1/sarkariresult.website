export default function RecruitmentInformation() {
  // This component displays recruitment information for a nuclear power corporation. 
  // It includes details like job title, eligibility, application process, and important dates. 
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">Nuclear Power Corporation Recruitment</h1>
      <div className="text-center mb-4">
        <p className="text-gray-500">
          <span className="font-semibold">Organization:</span> Nuclear Power Corporation of India Limited (NPCIL)
        </p>
        <p className="text-gray-500">
          <span className="font-semibold">Location:</span> Rawatbhata, Rajasthan
        </p>
      </div>

      <p className="text-lg mb-4">
        The Nuclear Power Corporation of India Limited (NPCIL) is hiring for
        279 Stipendiary Trainee positions in Rawatbhata, Rajasthan. The
        application window is open from August 22nd to September 11th, 2024.
      </p>

      <h2 className="text-2xl font-bold mb-4">Important Dates</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Application Start Date: August 22nd, 2024</li>
        <li>Application End Date: September 11th, 2024</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Application Fee</h2>
      <p className="mb-4">
        The application fee for General, OBC, and EWS candidates is Rs. 100/-.
        SC, ST, PWD, ESM, and Female candidates are exempted from the fee.
      </p>

      <h2 className="text-2xl font-bold mb-4">Vacancies and Eligibility</h2>
      <table className="table-auto w-full text-center mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2">Post Name</th>
            <th className="px-4 py-2">Vacancy</th>
            <th className="px-4 py-2">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">Stipendiary Trainee (Operator)</td>
            <td className="px-4 py-2">153</td>
            <td className="px-4 py-2">12th with Science (50% Marks)</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Stipendiary Trainee (Maintainer)</td>
            <td className="px-4 py-2">126</td>
            <td className="px-4 py-2">10th with 50% Marks + ITI in Related Field</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mb-4">Selection Process</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Written Exam (Stage-I, and Stage-II)</li>
        <li>Physical Standards Test (PST)</li>
        <li>Document Verification</li>
        <li>Skill Test (Only for Maintainer Posts)</li>
        <li>Medical Examination</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">How to Apply</h2>
      <ol className="list-decimal list-inside mb-4">
        <li>Visit the website <a href="https://www.npcilcareers.co.in/" className="text-blue-500">npcilcareers.co.in</a>.</li>
        <li>Click on the "Apply Online" link for the recruitment notification.</li>
        <li>Fill out the application form and upload the required documents.</li>
        <li>Pay the application fee and submit the form.</li>
      </ol>

      <h2 className="text-2xl font-bold mb-4">Notification and Application Link</h2>
      <table className="table-auto w-full text-center mb-4">
        <tbody>
          <tr>
            <td className="px-4 py-2">Recruitment Notification PDF</td>
            <td className="px-4 py-2">
              <a href="https://example.com" className="text-blue-500">
                Download Notification
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">Online Application Form</td>
            <td className="px-4 py-2">
              <a href="https://example.com" className="text-blue-500">
                Apply Online
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">NPCIL Official Website</td>
            <td className="px-4 py-2">
              <a href="https://www.npcilcareers.co.in/" className="text-blue-500">
                NPCIL
              </a>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mb-4">FAQs</h2>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">What is the last date to apply?</h3>
        <p>The last date to apply is September 11th, 2024.</p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">How to apply for the recruitment?</h3>
        <p>You can apply online through the NPCIL website.</p>
      </div>
    </div>
  );
}