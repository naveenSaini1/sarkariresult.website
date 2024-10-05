export default function RecruitmentInformation() {
  // Displays recruitment information for CMWSSB Apprentice 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        CMWSSB Apprentice 2024 Online Form
      </h1>
      <div className="mb-4">
        <p className="text-gray-600">
          <span className="font-medium text-green-500">
            Name of the Post:
          </span>
          CMWSSB Apprentice 2024 Online Form
        </p>
        <p className="text-gray-600">
          <span className="font-medium text-green-500">Post Date: </span>
          05-10-2024
        </p>
        <p className="text-gray-600">
          <span className="font-medium text-green-500">Total Vacancy: </span>
          108
        </p>
        <p className="text-gray-600">
          <span className="font-medium text-red-500">
            Brief Information:
          </span>{' '}
          Chennai Metropolitan Water Supply and Sewerage Board (CMWSSB) has
          Announced notification for the recruitment of Graduate Apprentice &
          Technician (Diploma) Apprentice Vacancy. Those Candidates who are
          interested in the vacancy details & completed all eligibility criteria
          can read the Notification & Apply Online.
        </p>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Important Dates
        </h2>
        <ul className="list-disc pl-5 text-gray-600">
          <li>
            Starting Date for Apply Online: <strong>30-09-2024</strong>
          </li>
          <li>
            Last date for enrolling in NATS portal in order to apply to Chennai
            Metropolitan Water Supply and Sewerage Board: <strong>
              21-10-2024
            </strong>
          </li>
          <li>Declaration of Shortlisted list: <strong>28-10-2024</strong></li>
          <li>
            Verification of certificates for shortlisted candidates: <strong>
              07-11-2024 & 08-11-2024 (Tentatively)
            </strong>
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Age Limit</h2>
        <ul className="list-disc pl-5 text-gray-600">
          <li>As Per Apprenticeship Rules</li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Qualification</h2>
        <ul className="list-disc pl-5 text-gray-600">
          <li>Candidates Should Possess Diploma/ Degree (Relevant Engg).</li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Vacancy Details
        </h2>
        <table className="table-auto w-full text-gray-600">
          <thead>
            <tr>
              <th className="text-left px-4 py-2">Post Name</th>
              <th className="text-center px-4 py-2">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100">
              <td className="text-left px-4 py-2">
                Civil Engineering / Mechanical Engineering
              </td>
              <td className="text-center px-4 py-2">52</td>
            </tr>
            <tr>
              <td className="text-left px-4 py-2">
                Electrical and Electronics Engineering
              </td>
              <td className="text-center px-4 py-2">24</td>
            </tr>
            <tr className="bg-gray-100">
              <td
                colSpan="2"
                className="text-center px-4 py-2 font-bold text-gray-800"
              >
                Technician (Diploma) Apprentices
              </td>
            </tr>
            <tr>
              <td className="text-left px-4 py-2">Civil Engineering</td>
              <td className="text-center px-4 py-2">10</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="text-left px-4 py-2">
                Electrical and Electronics Engineering
              </td>
              <td className="text-center px-4 py-2">22</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mb-4">
        <p className="text-blue-500 font-medium">
          Interested Candidates Can Read the Full Notification Before Apply
          Online
        </p>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Important Links
        </h2>
        <table className="table-auto w-full text-gray-600">
          <tbody>
            <tr>
              <td className="text-left px-4 py-2">
                <span className="font-medium text-green-500">Apply Online</span>
              </td>
              <td className="text-center px-4 py-2">
                <a
                  href="https://nats.education.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  Click Here
                </a>
              </td>
            </tr>
            <tr>
              <td className="text-left px-4 py-2">
                <span className="font-medium text-green-500">Notification</span>
              </td>
              <td className="text-center px-4 py-2">
                <a
                  href="https://img.freejobalert.com/uploads/2024/10/Notification-CMWSSB-Apprentice-Posts.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  Click Here
                </a>
              </td>
            </tr>
            <tr>
              <td className="text-left px-4 py-2">
                <span className="font-medium text-green-500">
                  Official Website
                </span>
              </td>
              <td className="text-center px-4 py-2">
                <a
                  href="https://cmwssb.tn.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  Click Here
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}