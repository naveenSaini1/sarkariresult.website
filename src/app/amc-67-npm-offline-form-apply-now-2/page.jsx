export default function RecruitmentInformation() {
  // This component displays recruitment information for the AMC NPM (Nurse Practitioner in Midwifery) position, including key details, eligibility criteria, and application links.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">AMC NPM (Nurse Practitioner in Midwifery) Recruitment 2024</h1>

      <p className="text-gray-600 mb-4">
        The Ahmedabad Municipal Corporation (AMC) has announced recruitment for the position of NPM (Nurse Practitioner in Midwifery) on a Contract Basis. This is an excellent opportunity for qualified candidates seeking a fulfilling career in the healthcare sector.
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Highlights</h2>
      <ul className="list-disc ml-6 text-gray-600">
        <li><strong>Post Name:</strong> AMC NPM (Nurse Practitioner in Midwifery)</li>
        <li><strong>Total Vacancy:</strong> 67</li>
        <li><strong>Post Date:</strong> 14-10-2024</li>
        <li><strong>Starting Date for Apply Online:</strong> 11-10-2024</li>
        <li><strong>Last Date to Apply Online:</strong> 19-10-2024 (up 6:00 pm)</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Brief Information</h2>
      <p className="text-gray-600 mb-4">
        The Ahmedabad Municipal Corporation (AMC) is seeking qualified candidates to fill the NPM (Nurse Practitioner in Midwifery) positions on a Contract Basis. Interested candidates who meet the eligibility criteria can apply online through the official AMC website.
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Eligibility Criteria</h2>
      <ul className="list-disc ml-6 text-gray-600">
        <li>Candidates should possess a Post Basic Diploma in Nurse Practitioner in Midwifery.</li>
        <li>Maximum Age Limit: 40 Years</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Vacancy Details</h2>
      <table className="table-auto w-full text-gray-600">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b text-left">Post Name</th>
            <th className="px-4 py-2 border-b text-center">Total Vacancies</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border-b text-left">NPM (Nurse Practitioner in Midwifery)</td>
            <td className="px-4 py-2 border-b text-center">67</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Important Links</h2>
      <ul className="list-disc ml-6 text-gray-600">
        <li>
          <a href="https://img.freejobalert.com/uploads/2024/10/Application-Form-AMC-NPM-Nurse-Practitioner-in-Midwifery-Posts.pdf" target="_blank" rel="noopener" className="text-blue-500 hover:underline">
            Application Form
          </a>
        </li>
        <li>
          <a href="https://img.freejobalert.com/uploads/2024/10/Notification-AMC-NPM-Nurse-Practitioner-in-Midwifery-Posts.pdf" target="_blank" rel="noopener" className="text-blue-500 hover:underline">
            Notification
          </a>
        </li>
        <li>
          <a href="http://ahmedabadcity.gov.in/" target="_blank" rel="noopener" className="text-blue-500 hover:underline">
            Official Website
          </a>
        </li>
      </ul>

      <p className="text-gray-600 mt-4">
        Please refer to the official notification for detailed information about the application process, eligibility criteria, and selection procedure.
      </p>

      {/* Keywords for SEO */}
      <p className="text-gray-600 mt-8">
        <strong>Keywords:</strong> AMC, Ahmedabad Municipal Corporation, NPM, Nurse Practitioner in Midwifery, Recruitment, 2024, Job, Vacancy, Application, Notification, Eligibility, Criteria, Apply Online
      </p>
    </div>
  );
}