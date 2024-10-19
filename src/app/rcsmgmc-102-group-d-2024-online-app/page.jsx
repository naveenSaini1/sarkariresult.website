export default function RecruitmentInformation() {
  // This component displays recruitment information for Rajarshi Chhatrapati Shahu Maharaj Government Medical College Group D Vacancy 2024.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        RCSMGMC Group D Vacancy 2024
      </h1>
      <p className="text-gray-600 mb-4">
        Rajarshi Chhatrapati Shahu Maharaj Government Medical College has announced
        notification for the recruitment of Group D Vacancy. Those Candidates
        who are interested in the vacancy details &amp; completed all eligibility
        criteria can read the Notification &amp; Apply Online.
      </p>

      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Post Details
        </h2>
        <ul className="list-disc ml-4">
          <li className="text-gray-600">
            <span className="font-bold text-green-500">Name of the Post:</span>{' '}
            RCSMGMC Group D 2024 Online Form
          </li>
          <li className="text-gray-600">
            <span className="font-bold text-green-500">Post Date:</span> 19-10-2024
          </li>
          <li className="text-gray-600">
            <span className="font-bold text-green-500">Total Vacancy:</span> 102
          </li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Key Highlights</h2>
        <ul className="list-disc ml-4">
          <li className="text-gray-600">
            Application Fee: Rs. 1000/- for all candidates, Rs. 900/- for BC
            Candidates.
          </li>
          <li className="text-gray-600">
            Starting Date for Apply Online: 31-10-2024
          </li>
          <li className="text-gray-600">
            Last Date to Apply Online &amp; Payment Fee: 20-11-2024
          </li>
          <li className="text-gray-600">
            Minimum Age: 18 Years
          </li>
          <li className="text-gray-600">
            Maximum Age: 38 Years
          </li>
          <li className="text-gray-600">
            Qualification: Candidates Should Possess 10th Class.
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
              <th className="px-4 py-2 text-left font-bold">Post Name</th>
              <th className="px-4 py-2 text-center font-bold">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 text-left">Group D</td>
              <td className="px-4 py-2 text-center">102</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Important Links
        </h2>
        <ul className="list-disc ml-4">
          <li className="text-gray-600">
            <span className="font-bold text-green-500">Apply Online:</span>
            Available on 31-10-2024
          </li>
          <li className="text-gray-600">
            <span className="font-bold text-green-500">Notification:</span>{' '}
            <a
              href="https://img.freejobalert.com/uploads/2024/10/Notification-RCSMGMC-For-Group-D-Posts.pdf"
              className="text-blue-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here
            </a>
          </li>
          <li className="text-gray-600">
            <span className="font-bold text-green-500">Official Website:</span>{' '}
            <a
              href="https://rcsmgmc.ac.in/"
              className="text-blue-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here
            </a>
          </li>
        </ul>
      </div>

      <p className="text-gray-600 mb-4">
        Interested Candidates Can Read the Full Notification Before Apply
        Online.
      </p>

      <p className="text-gray-600">
        Keywords: RCSMGMC, Group D, Vacancy, Recruitment, Government Job,
        Medical College, Maharashtra
      </p>
    </div>
  );
}