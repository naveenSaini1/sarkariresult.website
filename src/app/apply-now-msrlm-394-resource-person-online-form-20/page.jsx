export default function RecruitmentInformation() {
  // Displays recruitment information for MSRLM Resource Person vacancy
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">MSRLM Resource Person Vacancy 2024</h1>
      <p className="text-lg mb-4">
        <span className="text-green-500 font-bold">Name of the Post:</span> MSRLM
        Resource Person Online Form 2024
      </p>
      <p className="text-lg mb-4">
        <span className="text-green-500 font-bold">Post Date: </span>
        <strong>16-08-2024</strong>
      </p>
      <p className="text-lg mb-4">
        <span className="text-green-500 font-bold">Total Vacancy:</span>
        <span className="text-black">394</span>
      </p>
      <p className="text-lg mb-4">
        <span className="text-red-500 font-bold">Brief Information:</span>{' '}
        Maharashtra State Rural Livelihoods Mission (MSRLM) has published a
        Notification for the Recruitment of Resource Person Vacancy. Those
        Candidates who are interested in the vacancy details & completed all
        eligibility criteria can read the Notification & Apply Online.
      </p>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Important Dates</h2>
        <ul className="list-disc ml-4">
          <li>
            Last Date to Apply Online: <strong>30-09-2024 (till 11:59 PM)</strong>
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Age Limit (01-08-2024)</h2>
        <ul className="list-disc ml-4">
          <li>
            Maximum Age Limit: <strong>not more than 60 Years</strong>
          </li>
          <li>
            Maximum Age for Retired Government and Bank employee:
            <strong>not more than 65 Years</strong>
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Qualification</h2>
        <ul className="list-disc ml-4">
          <li>
            Candidates should possess Any Degree, MSW/MBA/PG Diploma/Degree
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Vacancy Details</h2>
        <table className="table-auto w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-center p-2 border border-gray-300">
                <span className="text-pink-500 font-bold">Post Name</span>
              </th>
              <th className="text-center p-2 border border-gray-300">
                <span className="text-pink-500 font-bold">Total</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="p-2 border border-gray-300">Resource Person</td>
              <td className="p-2 border border-gray-300">
                <span className="text-black">394</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-lg mb-4">
        Interested Candidates Can Read the Full Notification Before Apply Online
      </p>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Important Links</h2>
        <table className="table-auto w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-center p-2 border border-gray-300">
                <span className="text-green-500 font-bold">Link</span>
              </th>
              <th className="text-center p-2 border border-gray-300">
                <span className="text-green-500 font-bold">Action</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="p-2 border border-gray-300">
                Apply Online
              </td>
              <td className="p-2 border border-gray-300">
                <a
                  href="https://www.umed.in/enplanement_of_state_resource_person.php"
                  className="text-blue-500 underline"
                  target="_blank"
                  rel="nofollow"
                >
                  Click Here
                </a>
              </td>
            </tr>
            <tr className="text-center">
              <td className="p-2 border border-gray-300">
                Notification
              </td>
              <td className="p-2 border border-gray-300">
                <a
                  href="https://www.umed.in/enplanement_of_state_resource_person.php"
                  className="text-blue-500 underline"
                  target="_blank"
                  rel="nofollow"
                >
                  Click Here
                </a>
              </td>
            </tr>
            <tr className="text-center">
              <td className="p-2 border border-gray-300">
                Official Website
              </td>
              <td className="p-2 border border-gray-300">
                <a
                  href="https://www.umed.in/"
                  className="text-blue-500 underline"
                  target="_blank"
                  rel="nofollow"
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