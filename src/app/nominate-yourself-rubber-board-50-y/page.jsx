export default function RubberBoardRecruitment() {
  // This component displays recruitment information for the Rubber Board Young Professional position, including key details such as application dates, eligibility criteria, and vacancy breakdown.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        The Rubber Board Young Professional Online Form 2024
      </h1>
      <p className="text-gray-600 mb-4">
        The Rubber Board has announced recruitment for Young Professionals in
        Extension Services on a Contract Basis. This opportunity is open to
        candidates who meet the eligibility criteria and are interested in the
        vacancy details.
      </p>
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Post Details</h2>
        <ul className="list-disc text-gray-600">
          <li>
            <span className="font-medium">Name of the Post:</span> The Rubber
            Board Young Professional Online Form 2024
          </li>
          <li>
            <span className="font-medium">Post Date:</span> 17-10-2024
          </li>
          <li>
            <span className="font-medium">Total Vacancy:</span> 50
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Key Highlights
        </h2>
        <ul className="list-disc text-gray-600">
          <li>Application Fee: Nil</li>
          <li>Starting Date for Apply Online: 01-10-2024</li>
          <li>
            Last Date for Apply Online: 13-11-2024, 23:59 PM
          </li>
          <li>
            Examination Centre: Selected centres at
            Agartala/Guwahati/Mangalore
          </li>
          <li>
            Age Limit (as on 01-10-2024): Not more than 30 Years
          </li>
          <li>
            Qualification: Candidates should possess a Degree (Agriculture,
            Horticulture, Forestry) or PG (Botany/Plant Science)
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Vacancy Details
        </h2>
        <table className="table-auto w-full text-gray-600">
          <thead>
            <tr>
              <th className="text-left px-4 py-2">Sl No</th>
              <th className="text-left px-4 py-2">Post Name</th>
              <th className="text-left px-4 py-2">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-left px-4 py-2" colSpan="3">
                Young Professional
              </td>
            </tr>
            <tr>
              <td className="text-left px-4 py-2">1.</td>
              <td className="text-left px-4 py-2">
                North Eastern Region
              </td>
              <td className="text-left px-4 py-2">40</td>
            </tr>
            <tr>
              <td className="text-left px-4 py-2">2.</td>
              <td className="text-left px-4 py-2">
                Non-Traditional Region (Other States)
              </td>
              <td className="text-left px-4 py-2">10</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Important Links
        </h2>
        <ul className="list-disc text-gray-600">
          <li>
            <span className="font-medium">Apply Online:</span>{' '}
            <a
              href="https://recruitments.rubberboard.org.in/login.php"
              className="text-blue-500 underline"
              target="_blank"
              rel="nofollow"
            >
              Click Here
            </a>
          </li>
          <li>
            <span className="font-medium">Notification:</span>{' '}
            <a
              href="https://img.freejobalert.com/uploads/2024/10/Notification-The-Rubber-Board-Young-Professional-Posts.pdf"
              className="text-blue-500 underline"
              target="_blank"
              rel="nofollow"
            >
              Click Here
            </a>
          </li>
          <li>
            <span className="font-medium">Official Website:</span>{' '}
            <a
              href="https://rubberboard.gov.in/public"
              className="text-blue-500 underline"
              target="_blank"
              rel="nofollow"
            >
              Click Here
            </a>
          </li>
        </ul>
      </div>
      <p className="text-gray-600 mb-4">
        Interested Candidates are advised to read the complete notification
        carefully before applying online.
      </p>
      <div className="text-gray-600">
        <p>Keywords: Rubber Board, Young Professional, Recruitment, 2024</p>
      </div>
    </div>
  );
}