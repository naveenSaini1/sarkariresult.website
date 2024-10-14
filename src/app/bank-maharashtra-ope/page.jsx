export default function BankOfMaharashtraApprenticeRecruitment() {
  // This component displays recruitment information for the Bank of Maharashtra Apprentice program. 
  // It includes details like application deadlines, eligibility criteria, and vacancy information.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">Bank of Maharashtra Apprentice Recruitment</h1>
      <p className="text-gray-600 text-center mb-4">
        The Bank of Maharashtra has announced recruitment for Apprentice positions for the upcoming session. 
        Find all the important information about the application process, eligibility, and vacancies here.
      </p>

      <h2 className="text-2xl font-bold mb-2">Key Highlights</h2>
      <ul className="list-disc list-inside text-gray-600">
        <li>Total Vacancies: 600</li>
        <li>Application Period: October 14, 2024, to October 24, 2024</li>
        <li>Stipend: Rs. 9000/- per month</li>
        <li>Eligibility: Any Graduate + Local Language Proficiency</li>
      </ul>

      <h2 className="text-2xl font-bold mb-2">Application Fee</h2>
      <table className="table-auto w-full mt-4">
        <thead>
          <tr className="bg-gray-100 text-gray-600">
            <th className="px-4 py-2 text-left">Category</th>
            <th className="px-4 py-2 text-left">Application Fee</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">General, EWS, OBC</td>
            <td className="px-4 py-2">RS. 150/- + GST</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">SC, ST</td>
            <td className="px-4 py-2">Rs. 100/- + GST</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">PwBD</td>
            <td className="px-4 py-2">Rs. 0/-</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mb-2">Important Dates</h2>
      <table className="table-auto w-full mt-4">
        <thead>
          <tr className="bg-gray-100 text-gray-600">
            <th className="px-4 py-2 text-left">Event</th>
            <th className="px-4 py-2 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Notification Released</td>
            <td className="px-4 py-2">11 October 2024</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Application Start Date</td>
            <td className="px-4 py-2">14 October 2024</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Application Last Date</td>
            <td className="px-4 py-2">24 October 2024</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Exam Date</td>
            <td className="px-4 py-2">To be announced</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mb-2">Vacancy Details</h2>
      <table className="table-auto w-full mt-4">
        <thead>
          <tr className="bg-gray-100 text-gray-600">
            <th className="px-4 py-2 text-left">Post Name</th>
            <th className="px-4 py-2 text-left">Vacancies</th>
            <th className="px-4 py-2 text-left">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Apprentice</td>
            <td className="px-4 py-2">600</td>
            <td className="px-4 py-2">Any Graduate + Local Language Proficiency</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mb-2">Selection Process</h2>
      <ol className="list-decimal list-inside text-gray-600">
        <li>Merit List based on Academic Performance (Degree/ Diploma/ 12th Grade)</li>
        <li>Local Language Proficiency Test</li>
        <li>Document Verification</li>
        <li>Medical Examination</li>
      </ol>

      <h2 className="text-2xl font-bold mb-2">Notification and Application Link</h2>
      <table className="table-auto w-full mt-4">
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Notification PDF</td>
            <td className="px-4 py-2">
              <a href="#" className="text-blue-500 hover:underline">
                Notification
              </a>
            </td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Online Application Form</td>
            <td className="px-4 py-2">
              <a href="#" className="text-blue-500 hover:underline" target="_blank" rel="noopener">
                Apply Online
              </a>
            </td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Bank of Maharashtra Official Website</td>
            <td className="px-4 py-2">
              <a href="#" className="text-blue-500 hover:underline" target="_blank" rel="noopener">
                Bank of Maharashtra
              </a>
            </td>
          </tr>
        </tbody>
      </table>

      <p className="mt-4 text-gray-600">
        For any further details or clarifications, please refer to the official notification.
      </p>

      <h2 className="text-xl font-bold mt-4">Keywords</h2>
      <p className="text-gray-600">
        Bank of Maharashtra, Apprentice Recruitment, Apprentice Vacancies, Application, Eligibility, 
        Selection Process, Important Dates, Notification, Online Application, Bank Jobs
      </p>
    </div>
  );
}