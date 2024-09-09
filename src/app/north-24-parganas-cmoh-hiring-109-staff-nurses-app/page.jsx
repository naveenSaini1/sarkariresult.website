export default function RecruitmentInfo() {
  // This component displays recruitment information for the CMOH, North 24 Parganas Staff Nurse position.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        CMOH, North 24 Parganas Staff Nurse Online Form 2024
      </h1>
      <p className="text-gray-600 mb-4">
        <span className="font-bold text-green-500">Name of the Post:</span> CMOH,
        North 24 Parganas Staff Nurse Online Form 2024
      </p>
      <p className="text-gray-600 mb-4">
        <span className="font-bold text-green-500">Post Date:</span>
        <span className="font-bold">23-07-2024</span>
      </p>
      <p className="text-gray-600 mb-4">
        <span className="font-bold text-green-500">Latest Update:</span>
        25-07-2024
      </p>
      <p className="text-gray-600 mb-4">
        <span className="font-bold text-green-500">Total Vacancy:</span> 109
      </p>
      <p className="text-gray-600 mb-4">
        <span className="font-bold text-red-500">Brief Information:</span> Chief
        Medical Officer of Health, North 24 Parganas has given an employment
        notification for the recruitment of Staff Nurse on Contract Basis. Those
        Candidates who are interested in the vacancy details &amp; completed all
        eligibility criteria can read the Notification &amp; Apply Online
      </p>
      <h2 className="text-2xl font-bold mb-4">Important Details</h2>
      <table className="table-auto w-full border border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left">Details</th>
            <th className="px-4 py-2 text-left">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-gray-300">
            <td className="px-4 py-2 text-gray-600">
              <span className="font-bold text-red-500">Important Dates</span>
            </td>
            <td className="px-4 py-2 text-gray-600">
              <ul>
                <li>
                  Starting Date for Apply Online:{" "}
                  <strong className="font-bold">25-07-2024</strong>
                </li>
                <li>
                  Last Date to Apply Online:{" "}
                  <strong className="font-bold">03-08-2024</strong>
                </li>
              </ul>
            </td>
          </tr>
          <tr className="border-t border-gray-300">
            <td className="px-4 py-2 text-gray-600">
              <span className="font-bold text-red-500">Age limit (01-01-2024)</span>
            </td>
            <td className="px-4 py-2 text-gray-600">
              Maximum Age Limit: <strong className="font-bold">40 Years</strong>
            </td>
          </tr>
          <tr className="border-t border-gray-300">
            <td className="px-4 py-2 text-gray-600">
              <span className="font-bold text-red-500">Qualification</span>
            </td>
            <td className="px-4 py-2 text-gray-600">
              Candidates Should Possess GNM (Training Course)/B.Sc Nursing Course
            </td>
          </tr>
        </tbody>
      </table>
      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>
      <table className="table-auto w-full border border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left">Post Name</th>
            <th className="px-4 py-2 text-left">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-gray-300">
            <td className="px-4 py-2 text-gray-600">Staff Nurse</td>
            <td className="px-4 py-2 text-gray-600">109</td>
          </tr>
        </tbody>
      </table>
      <p className="text-gray-600 mb-4">
        <span className="font-bold text-blue-500">
          Interested Candidates Can Read the Full Notification Before Apply
          Online
        </span>
      </p>
      <h2 className="text-2xl font-bold mb-4">Important Links</h2>
      <table className="table-auto w-full border border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left">Link</th>
            <th className="px-4 py-2 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-gray-300">
            <td className="px-4 py-2 text-gray-600">
              <span className="font-bold text-green-500">Apply Online</span>
            </td>
            <td className="px-4 py-2 text-gray-600">
              <a
                href="https://north24parganashealth.org/recruitment/322/apply"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="border-t border-gray-300">
            <td className="px-4 py-2 text-gray-600">
              <span className="font-bold text-green-500">Notification</span>
            </td>
            <td className="px-4 py-2 text-gray-600">
              <a
                href="https://img.freejobalert.com/uploads/2024/07/Notification-CMOH-North-24-Parganas-Staff-Nurse-Posts.pdf"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="border-t border-gray-300">
            <td className="px-4 py-2 text-gray-600">
              <span className="font-bold text-green-500">
                Official Website
              </span>
            </td>
            <td className="px-4 py-2 text-gray-600">
              <a
                title="CMOH, North 24 Paraganas"
                href="https://north24parganashealth.org/"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
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