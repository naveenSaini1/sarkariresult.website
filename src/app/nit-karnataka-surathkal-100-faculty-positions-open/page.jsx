export default function RecruitmentInformation() {
  // This component displays recruitment information for NIT Karnataka, Surathkal Faculty Online Form 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">NIT Karnataka, Surathkal Faculty Online Form 2024</h1>

      <div className="mb-4">
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Name of the Post:</span> NIT Karnataka, Surathkal Faculty Online Form 2024
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Post Date:</span>
          <span className="text-gray-600">09-08-2024</span>
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Total Vacancy:</span>
          <span className="text-gray-600">100</span>
        </p>
      </div>

      <p className="text-gray-600 mb-4">
        <span className="text-red-500 font-medium">Brief Information:</span> National Institute of Technology Karnataka (NITK), Surathkal has given a notification for the recruitment Faculty Vacancy. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply Online.
      </p>

      <h2 className="text-2xl font-bold mb-4">Application Details</h2>

      <table className="table-auto w-full text-center mb-4">
        <thead>
          <tr>
            <th colSpan="2" className="text-lg font-medium text-red-500">National Institute of Technology Karnataka (NITK), Surathkal</th>
          </tr>
          <tr>
            <th colSpan="2" className="text-lg font-medium text-pink-500">Advt No. 5210-Advt./Faculty-NITK-Estt./2024/B1</th>
          </tr>
          <tr>
            <th colSpan="2" className="text-lg font-medium text-green-500">Faculty Vacancy 2024</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th colSpan="2" className="text-lg font-medium text-red-500">Application Fee</th>
          </tr>
          <tr>
            <td colSpan="2">
              <ul className="list-disc pl-6">
                <li>For General & OBC candidates: <strong>Rs. 2500/-</strong></li>
                <li>For SC, ST & PwD candidates: <strong>Nil</strong></li>
                <li>Payment Mode: <strong>Through Online from a bank, or through NEFT/RTGS.</strong></li>
              </ul>
            </td>
          </tr>
          <tr>
            <th colSpan="2" className="text-lg font-medium text-red-500">Important Dates</th>
          </tr>
          <tr>
            <td colSpan="2">
              <ul className="list-disc pl-6">
                <li>Starting Date for Apply Online & Payment of Fee: <strong>27-07-2024</strong></li>
                <li>Last Date for Apply Online & Payment of Fee: <strong>17-08-2024 (Till 5:00 p.m.)</strong></li>
                <li>Last date for submission of hardcopy of the application: <strong>23-08-2024 (Till 5:00 p.m.)</strong></li>
              </ul>
            </td>
          </tr>
          <tr>
            <th colSpan="2" className="text-lg font-medium text-red-500">Age Limit</th>
          </tr>
          <tr>
            <td colSpan="2">
              <ul className="list-disc pl-6">
                <li>Fresh appointments beyond the age of 60 years are encouraged only for distinguished candidates.</li>
                <li>For More Details Refer Notification.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <th colSpan="2" className="text-lg font-medium text-red-500">Qualification</th>
          </tr>
          <tr>
            <td colSpan="2">
              <ul className="list-disc pl-6">
                <li>Candidates Should Posses Degree, PG, Ph. D (Relevant Discipline).</li>
              </ul>
            </td>
          </tr>
          <tr>
            <th colSpan="2" className="text-lg font-medium text-red-500">Vacancy Details</th>
          </tr>
          <tr>
            <th className="text-lg font-medium text-pink-500">Post Name</th>
            <th className="text-lg font-medium text-pink-500">Total</th>
          </tr>
          <tr>
            <td colSpan="2" className="text-lg font-medium">Faculty</td>
          </tr>
          <tr>
            <td className="text-lg font-medium">Assistant Professor (Regular)</td>
            <td className="text-lg font-medium">87</td>
          </tr>
          <tr>
            <td className="text-lg font-medium">Assistant Professor (Backlog)</td>
            <td className="text-lg font-medium">09</td>
          </tr>
          <tr>
            <td className="text-lg font-medium">Associate Professor</td>
            <td className="text-lg font-medium">02</td>
          </tr>
          <tr>
            <td className="text-lg font-medium">Professor</td>
            <td className="text-lg font-medium">02</td>
          </tr>
          <tr>
            <td colSpan="2" className="text-lg font-medium text-blue-500">Interested Candidates Can Read the Full Notification Before Apply Online</td>
          </tr>
          <tr>
            <th colSpan="2" className="text-lg font-medium text-red-500">Important Links</th>
          </tr>
          <tr>
            <td className="text-lg font-medium text-green-500">Apply Online</td>
            <td className="text-lg font-medium">
              <a href="https://recruit.nitk.ac.in/" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a>
            </td>
          </tr>
          <tr>
            <td className="text-lg font-medium text-green-500">Notification</td>
            <td className="text-lg font-medium">
              <a href="https://img.freejobalert.com/uploads/2024/08/Notification-NIT-Karnataka-Faculty-Posts.pdf" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a>
            </td>
          </tr>
          <tr>
            <td className="text-lg font-medium text-green-500">Official Website</td>
            <td className="text-lg font-medium">
              <a href="https://www.nitk.ac.in/" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}