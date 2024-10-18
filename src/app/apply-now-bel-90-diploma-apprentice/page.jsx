export default function BELDiplomaApprenticeship() {
  // This component displays recruitment information for the BEL Diploma Apprenticeship program,
  // including important dates, eligibility criteria, vacancy details, and application links.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">BEL Diploma Apprenticeship Program 2024</h1>
      <p className="text-center mb-4">
        Bharat Electronics Limited (BEL) is inviting applications for the recruitment of Diploma Apprentice vacancies.
      </p>

      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Key Highlights</h2>
        <ul className="list-disc ml-6">
          <li>Post Name: BEL Diploma Apprenticeship Program 2024</li>
          <li>Total Vacancies: 90</li>
          <li>Application Period: 15-10-2024 to 04-11-2024</li>
          <li>Maximum Age Limit: 25 Years (as on 01-10-2024)</li>
          <li>Qualification: Diploma (Relevant Branch)</li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Important Dates</h2>
        <ul className="list-disc ml-6">
          <li>Starting Date for Apply Online: 15-10-2024</li>
          <li>Last Date to Apply Online: 04-11-2024</li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Vacancy Details</h2>
        <table className="table-auto w-full text-center border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 border border-gray-300">Trade Name</th>
              <th className="px-4 py-2 border border-gray-300">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Mechanical Engg</td>
              <td className="px-4 py-2 border border-gray-300">30</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Computer Science</td>
              <td className="px-4 py-2 border border-gray-300">20</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Electronics</td>
              <td className="px-4 py-2 border border-gray-300">30</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Civil Engg</td>
              <td className="px-4 py-2 border border-gray-300">10</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Important Links</h2>
        <ul className="list-disc ml-6">
          <li>
            <a href="https://nats.education.gov.in/" className="text-blue-500 hover:underline">
              Apply Online
            </a>
          </li>
          <li>
            <a href="https://img.freejobalert.com/uploads/2024/10/Notification-BEL-Diploma-Apprentice-Posts.pdf" className="text-blue-500 hover:underline">
              Notification
            </a>
          </li>
          <li>
            <a href="https://bel-india.in/" className="text-blue-500 hover:underline">
              Official Website
            </a>
          </li>
        </ul>
      </div>

      <p className="text-center mt-4">
        For further information and application details, please visit the official website.
      </p>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Keywords</h2>
        <p>BEL, Diploma Apprenticeship, Apprenticeship Program, Vacancy, Recruitment, Bharat Electronics Limited, Engineering, Apply Online, Notification, Important Dates, Eligibility Criteria</p>
      </div>
    </div>
  );
}