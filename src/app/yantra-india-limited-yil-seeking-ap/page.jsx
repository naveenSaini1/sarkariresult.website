export default function YantraApprenticeRecruitment() {
  // This component displays recruitment information for Yantra India Limited (YIL) Apprentice positions.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Yantra India Limited (YIL) Apprentice Recruitment
      </h1>

      <p className="text-gray-600 mb-4">
        Yantra India Limited (YIL) has announced the recruitment of apprentices
        for various positions within the company. This is an excellent opportunity
        for individuals seeking to begin their careers in the skilled trades.
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Highlights</h2>

      <ul className="list-disc pl-6 text-gray-600 mb-4">
        <li>Total Vacancies: 3883</li>
        <li>Application Dates: October 22, 2024 - November 21, 2024</li>
        <li>Application Fee: Rs. 200/- (General, OBC, EWS), Rs. 100/- (SC, ST, PWD, Female)</li>
        <li>Selection Process: Merit List, Document Verification, Medical Examination</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Important Dates</h2>

      <table className="table-auto w-full text-gray-600 mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left font-bold">Event</th>
            <th className="px-4 py-2 text-left font-bold">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">Notification Release Date</td>
            <td className="px-4 py-2">October 22, 2024</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Online Application Start Date</td>
            <td className="px-4 py-2">October 22, 2024</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Online Application Last Date</td>
            <td className="px-4 py-2">November 21, 2024</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Result Announcement Date</td>
            <td className="px-4 py-2">To be announced later</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Vacancies and Eligibility
      </h2>

      <p className="text-gray-600 mb-4">
        The recruitment process includes positions for both ITI and Non-ITI
        candidates.
      </p>

      <table className="table-auto w-full text-gray-600 mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left font-bold">Position Name</th>
            <th className="px-4 py-2 text-left font-bold">Vacancies</th>
            <th className="px-4 py-2 text-left font-bold">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">Non-ITI Posts</td>
            <td className="px-4 py-2">1385</td>
            <td className="px-4 py-2">10th Pass</td>
          </tr>
          <tr>
            <td className="px-4 py-2">ITI Posts</td>
            <td className="px-4 py-2">2498</td>
            <td className="px-4 py-2">10th Pass + ITI</td>
          </tr>
        </tbody>
      </table>

      <p className="text-gray-600 mb-4">
        Age Limit: The age limit for applying to YIL Apprentice Recruitment
        is 14-18 Years. The cutoff date for age calculation is 21.11.2024. Age
        relaxation may be provided as per the rules.
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Selection Process
      </h2>

      <ol className="list-decimal pl-6 text-gray-600 mb-4">
        <li>Merit List based on 10th Class/ITI Marks</li>
        <li>Document Verification</li>
        <li>Medical Examination</li>
      </ol>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Notification and Application Link
      </h2>

      <table className="table-auto w-full text-gray-600 mb-4">
        <tbody>
          <tr>
            <td className="px-4 py-2">
              Yantra India Limited Apprentice Recruitment Notification PDF
            </td>
            <td className="px-4 py-2">
              <a
                href="https://pmsuryaghar.org.in/wp-content/uploads/2024/10/YIL-Apprentice-Recruitment-2024-Notification-PDF.pdf"
                className="text-blue-500 underline"
              >
                Notification
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">
              Yantra India Limited Apprentice Recruitment Online Form
            </td>
            <td className="px-4 py-2">
              <a
                href="https://www.recruit-gov.com/Yantra2024/"
                target="_blank"
                rel="noopener"
                className="text-blue-500 underline"
              >
                Apply Online
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">Yantra India Limited Official Website</td>
            <td className="px-4 py-2">
              <a
                href="https://www.recruit-gov.com/Yantra2024/"
                target="_blank"
                rel="noopener"
                className="text-blue-500 underline"
              >
                Yantra
              </a>
            </td>
          </tr>
        </tbody>
      </table>

      <p className="text-gray-600 mb-4">
        **Keywords:** YIL Apprentice Recruitment, Apprentice Jobs, Yantra India
        Limited, Apprenticeship, Trade Apprentices, Non-ITI, ITI, Recruitment
        2024, Online Application, Notification.
      </p>
    </div>
  );
}