export default function IDBIRecruitment() {
  // This component displays recruitment information for IDBI Bank's Executive- Sales and Operations (ESO) role.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        IDBI Bank Announces Recruitment for Executive Sales and Operations
      </h1>
      <p className="text-gray-600 mb-4">
        IDBI Bank has announced the recruitment of Executive - Sales and
        Operations (ESO) for the year 2024. This opportunity presents a chance
        to join one of India's leading financial institutions and contribute to its
        growth.
      </p>

      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Key Highlights
        </h2>
        <ul className="list-disc text-gray-600">
          <li>Total Vacancies: 1000</li>
          <li>Contractual Job</li>
          <li>Monthly Salary: Rs. 29000/-</li>
          <li>Application Deadline: 16 November 2024</li>
          <li>Apply Online: idbibank.in</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Important Dates
      </h2>
      <table className="table-auto w-full text-gray-600 border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Event</th>
            <th className="px-4 py-2 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">Notification Release Date</td>
            <td className="px-4 py-2">6 November 2024</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Application Start Date</td>
            <td className="px-4 py-2">7 November 2024</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Application End Date</td>
            <td className="px-4 py-2">16 November 2024</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Exam Date</td>
            <td className="px-4 py-2">1 December 2024</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Application Fee
      </h2>
      <table className="table-auto w-full text-gray-600 border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Category</th>
            <th className="px-4 py-2 text-left">Application Fee</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">General, EWS, OBC</td>
            <td className="px-4 py-2">Rs. 1050/-</td>
          </tr>
          <tr>
            <td className="px-4 py-2">SC, ST, PWD</td>
            <td className="px-4 py-2">Rs. 250/-</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Mode of Payment</td>
            <td className="px-4 py-2">Online</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Vacancies and Eligibility
      </h2>
      <p className="text-gray-600 mb-4">
        The age limit for this recruitment is between 20 and 25 years as of
        01.10.2024. Age relaxations will be provided as per the rules.
      </p>

      <table className="table-auto w-full text-gray-600 border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Post Name</th>
            <th className="px-4 py-2 text-left">Vacancy</th>
            <th className="px-4 py-2 text-left">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">Executive - Sales and Operations (ESO)</td>
            <td className="px-4 py-2">1000</td>
            <td className="px-4 py-2">Any Graduate</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Selection Process
      </h2>
      <p className="text-gray-600 mb-4">
        The selection process involves the following stages:
      </p>
      <ol className="list-decimal text-gray-600">
        <li>Written Exam</li>
        <li>Personal Interview</li>
        <li>Document Verification</li>
        <li>Medical Examination</li>
      </ol>

      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Notification and Application Links
      </h2>
      <table className="table-auto w-full text-gray-600 border border-gray-300">
        <tbody>
          <tr>
            <td className="px-4 py-2 text-left">
              IDBI Bank ESO Recruitment Notification PDF
            </td>
            <td className="px-4 py-2">
              <a
                href="https://pmsuryaghar.org.in/wp-content/uploads/2024/11/IDBI-ESO-Recruitment-2024-Notification-PDF.pdf"
                className="text-blue-500 hover:underline"
              >
                Notification
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-left">
              IDBI Bank ESO Recruitment Online Form
            </td>
            <td className="px-4 py-2">
              <a
                href="https://ibpsonline.ibps.in/idbesooct24/"
                target="_blank"
                rel="noopener"
                className="text-blue-500 hover:underline"
              >
                Apply Online
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-left">
              IDBI Bank Official Website
            </td>
            <td className="px-4 py-2">
              <a
                href="https://www.idbibank.in/idbi-bank-careers-current-openings.aspx"
                target="_blank"
                rel="noopener"
                className="text-blue-500 hover:underline"
              >
                IDBI Bank
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <p className="text-gray-600 mt-4">
        Keywords: IDBI Bank, ESO, Recruitment, Executive Sales and Operations,
        Banking, Financial Institution, Job Opportunities, Apply Online
      </p>
    </div>
  );
}