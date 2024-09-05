export default function RecruitmentInfo() {
  // Displays recruitment information for Guru Nanak Institute of Engineering and Technology Nagpur (GNIET Nagpur)
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">
        GNIET, Nagpur Various Vacancy Offline Form 2024
      </h1>
      <div className="flex justify-between mb-4">
        <p className="text-gray-600">
          <strong className="text-green-500">Name of the Post:</strong>{' '}
          GNIET, Nagpur Various Vacancy Offline Form 2024
        </p>
        <p className="text-gray-600">
          <strong className="text-green-500">Post Date:</strong> 02-09-2024
        </p>
      </div>
      <p className="text-gray-600">
        <strong className="text-green-500">Total Vacancy:</strong> 115
      </p>
      <p className="text-gray-600">
        <strong className="text-red-500">Brief Information:</strong>{' '}
        Guru Nanak Institute of Engineering and Technology Nagpur (GNIET
        Nagpur) has published a Notification for the recruitment of Professor,
        Associate Professor & Assistant Professor Vacancy. Those Candidates who
        are interested in the vacancy details & completed all eligibility criteria
        can read the Notification & Apply.
      </p>
      <h2 className="text-2xl font-bold text-center mb-4">
        Guru Nanak Institute of Engineering and Technology Nagpur (GNIET Nagpur)
      </h2>
      <p className="text-center text-gray-600">
        <strong className="text-green-500">Various Vacancy 2024</strong>
      </p>
      <p className="text-center">
        <a
          href="https://www.freejobalert.com"
          target="_blank"
          rel="noopener"
          className="text-blue-500 hover:underline"
        >
          
        </a>
      </p>
      <h3 className="text-xl font-bold text-center mb-4">Important Dates</h3>
      <ul className="list-disc pl-5 text-gray-600">
        <li>
          Last Date to Receipt of Application:
          <strong>within 15 days from the of publication</strong>
        </li>
      </ul>
      <h3 className="text-xl font-bold text-center mb-4">Qualification</h3>
      <ul className="list-disc pl-5 text-gray-600">
        <li>
          Candidates Should Possess as per AICTE and RTM Nagpur Universky Norms
        </li>
      </ul>
      <h3 className="text-xl font-bold text-center mb-4">Vacancy Details</h3>
      <table className="table-auto w-full text-center border-collapse border-2 border-gray-400">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b border-gray-400 text-purple-500">
              Sl No
            </th>
            <th className="px-4 py-2 border-b border-gray-400 text-purple-500">
              Post Name
            </th>
            <th className="px-4 py-2 border-b border-gray-400 text-purple-500">
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border-b border-gray-400">1.</td>
            <td className="px-4 py-2 border-b border-gray-400">Professor</td>
            <td className="px-4 py-2 border-b border-gray-400">08</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b border-gray-400">2.</td>
            <td className="px-4 py-2 border-b border-gray-400">
              Associate Professor
            </td>
            <td className="px-4 py-2 border-b border-gray-400">14</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b border-gray-400">3.</td>
            <td className="px-4 py-2 border-b border-gray-400">
              Assistant Professor
            </td>
            <td className="px-4 py-2 border-b border-gray-400">93</td>
          </tr>
        </tbody>
      </table>
      <p className="text-center text-blue-500 mt-4">
        Interested Candidates Can Read the Full Notification Before Apply
      </p>
      <h3 className="text-xl font-bold text-center mb-4">Important Links</h3>
      <table className="table-auto w-full text-center border-collapse border-2 border-gray-400">
        <tbody>
          <tr>
            <td
              colSpan="2"
              className="px-4 py-2 border-b border-gray-400 text-green-500"
            >
              Notification
            </td>
            <td className="px-4 py-2 border-b border-gray-400">
              <a
                href="https://img.freejobalert.com/uploads/2024/09/Notification-GNIET-Professor-Posts.png"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 hover:underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td
              colSpan="2"
              className="px-4 py-2 border-b border-gray-400 text-green-500"
            >
              Official Website
            </td>
            <td className="px-4 py-2 border-b border-gray-400">
              <a
                href="https://gnietedu.com/"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 hover:underline"
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