export default function RecruitmentInfo() {
  // Displays recruitment information for SAIL, Rourkela Apprentice 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">SAIL, Rourkela Apprentice 2024</h1>
      <p className="text-lg mb-4">
        <span className="font-bold text-green-500">Name of the Post:</span> SAIL,
        Rourkela Apprentice 2024 Online Form
      </p>
      <p className="text-lg mb-4">
        <span className="font-bold text-green-500">Post Date: </span>
        <span className="font-bold">19-09-2024</span>
      </p>
      <p className="text-lg mb-4">
        <span className="font-bold text-green-500">Total Vacancy:</span>
        <span>356</span>
      </p>
      <p className="text-lg mb-4">
        <span className="font-bold text-red-500">Brief Information:</span> Steel
        Authority of India Limited (SAIL), Rourkela Steel Plant has advertised a
        notification for the recruitment of Graduate/Technician/Trade Apprentice
        Vacancy. Those Candidates who are interested in the vacancy details &
        completed all eligibility criteria can read the Notification & Apply
        online.
      </p>

      <table className="table-auto w-full border-collapse border border-gray-300 mt-8">
        <thead>
          <tr className="bg-gray-100">
            <th
              className="py-2 px-4 text-left font-bold"
              colSpan="3"
            >
              <span className="text-red-500 font-bold">
                Steel Authority of India Limited (SAIL), Rourkela
              </span>
              <br/>
              <span className="text-green-500 font-bold">
                Apprentice Vacancy 2024
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              className="py-2 px-4 text-center"
              colSpan="3"
            >
              <span className="text-red-500 font-bold">Important Dates</span>
            </td>
          </tr>
          <tr>
            <td className="py-2 px-4 text-center" colSpan="3">
              <ul>
                <li>Last Date to Apply Online: <strong>30-09-2024</strong></li>
              </ul>
            </td>
          </tr>
          <tr>
            <td
              className="py-2 px-4 text-center"
              colSpan="3"
            >
              <span className="text-red-500 font-bold">
                Age Limit (as on 30-09-2024)
              </span>
            </td>
          </tr>
          <tr>
            <td className="py-2 px-4 text-center" colSpan="3">
              <ul>
                <li>Minimum Age Limit: <strong>18 Years</strong></li>
                <li>Maximum Age Limit: <strong>28 Years</strong></li>
                <li>
                  <span className="text-gray-600">
                    Age relaxation is admissible for as per rules
                  </span>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td
              className="py-2 px-4 text-center"
              colSpan="3"
            >
              <span className="text-red-500 font-bold">Qualification</span>
            </td>
          </tr>
          <tr>
            <td className="py-2 px-4 text-left" colSpan="3">
              <ul>
                <li>
                  Candidates Should possess ITI/Diploma/ B.Tech (Relevant Engg)
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td
              className="py-2 px-4 text-center"
              colSpan="3"
            >
              <span className="text-red-500 font-bold">Vacancy Details</span>
            </td>
          </tr>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 text-center">
              <span className="text-pink-500 font-bold">Sl No</span>
            </th>
            <th className="py-2 px-4 text-center">
              <span className="text-pink-500 font-bold">Trade Name</span>
            </th>
            <th className="py-2 px-4 text-center">
              <span className="text-pink-500 font-bold">Diploma</span>
            </th>
          </tr>
          <tr>
            <td className="py-2 px-4 text-center">1</td>
            <td className="py-2 px-4 text-center">Trade Apprentice</td>
            <td className="py-2 px-4 text-center">168</td>
          </tr>
          <tr>
            <td className="py-2 px-4 text-center">2</td>
            <td className="py-2 px-4 text-center">Technician Apprentice</td>
            <td className="py-2 px-4 text-center">135</td>
          </tr>
          <tr>
            <td className="py-2 px-4 text-center">3</td>
            <td className="py-2 px-4 text-center">Graduate Apprentice</td>
            <td className="py-2 px-4 text-center">53</td>
          </tr>
          <tr>
            <td
              className="py-2 px-4 text-center"
              colSpan="3"
            >
              <span className="text-blue-500 font-bold">
                Interested Candidates Can Read the Full Notification Before Apply
                Online
              </span>
            </td>
          </tr>
          <tr>
            <td
              className="py-2 px-4 text-center"
              colSpan="3"
            >
              <span className="text-red-500 font-bold">Important Links</span>
            </td>
          </tr>
          <tr>
            <td
              className="py-2 px-4 text-center"
              colSpan="2"
            >
              <span className="text-green-500 font-bold">Apply Online</span>
            </td>
            <td className="py-2 px-4 text-center">
              <a
                href="https://www.apprenticeshipindia.gov.in/candidate-login"
                className="underline text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                NAPS
              </a>
              {' | '}
              <a
                href="https://nats.education.gov.in/student_type.php"
                className="underline text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                NATS
              </a>
            </td>
          </tr>
          <tr>
            <td
              className="py-2 px-4 text-center"
              colSpan="2"
            >
              <span className="text-green-500 font-bold">Notification</span>
            </td>
            <td className="py-2 px-4 text-center">
              <a
                href="https://img.freejobalert.com/uploads/2024/09/Notification-SAIL-Rourkela-Apprentice-Posts.png"
                className="underline text-blue-500"
                title="SAIL, Rourkela Steel Plant"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td
              className="py-2 px-4 text-center"
              colSpan="2"
            >
              <span className="text-green-500 font-bold">
                Official Website
              </span>
            </td>
            <td className="py-2 px-4 text-center">
              <a
                href="https://www.sail.co.in/en"
                className="underline text-blue-500"
                title="SAIL, Rourkela Steel Plant"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}