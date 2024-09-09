export default function SAILApprenticeRecruitment() {
  // This component displays recruitment information for SAIL, Rourkela Apprentice 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">SAIL, Rourkela Apprentice 2024</h1>

      <div className="mb-4">
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Name of the Post:</span>
          <span>SAIL, Rourkela Apprentice 2024 Online Form</span>
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Post Date:</span>
          <span><strong>27-07-2024</strong></span>
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Total Vacancy:</span>
          <span>400</span>
        </p>
      </div>

      <h2 className="text-2xl font-bold mb-4">Brief Information</h2>
      <p className="mb-4">
        Steel Authority of India Limited (SAIL), Rourkela Steel Plant has advertised a notification for the
        recruitment of Graduate/Technician/Trade Apprentice Vacancy. Those Candidates who are interested in
        the vacancy details &amp; completed all eligibility criteria can read the Notification &amp; Apply
        online.
      </p>

      <h2 className="text-2xl font-bold mb-4">Important Dates</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Last Date to Apply Online: <strong>10-08-2024</strong></li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Age Limit (as on 10-08-2024)</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Minimum Age Limit: <strong>18 Years</strong></li>
        <li>Maximum Age Limit: <strong>28 Years</strong></li>
        <li>Age relaxation is admissible for as per rules.</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Qualification</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Candidates Should possess ITI/Diploma/ B.Tech (Relevant Engg)</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>
      <table className="table-auto w-full mb-4">
        <thead>
          <tr className="text-center">
            <th className="text-pink-500">Sl No</th>
            <th className="text-pink-500">Trade Name</th>
            <th className="text-pink-500">Diploma</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td>1</td>
            <td>Trade Apprentice</td>
            <td>213</td>
          </tr>
          <tr className="text-center">
            <td>2</td>
            <td>Technician Apprentice</td>
            <td>136</td>
          </tr>
          <tr className="text-center">
            <td>3</td>
            <td>Graduate Apprentice</td>
            <td>51</td>
          </tr>
        </tbody>
      </table>

      <p className="text-blue-500 mb-4">Interested Candidates Can Read the Full Notification Before Apply Online</p>

      <h2 className="text-2xl font-bold mb-4">Important Links</h2>
      <table className="table-auto w-full mb-4">
        <tbody>
          <tr className="text-center">
            <td className="text-green-500">Apply Online</td>
            <td>
              <a className="text-blue-500" href="https://portal.mhrdnats.gov.in/boat/login/user_login.action" target="_blank" rel="nofollow">
                Click Here
              </a>
            </td>
          </tr>
          <tr className="text-center">
            <td className="text-green-500">Notification</td>
            <td>
              <a className="text-blue-500" href="https://img.freejobalert.com/uploads/2024/07/Notification-SAIL-Rourkela-Steel-Plant-Apprentice-Posts.pdf" target="_blank" rel="nofollow">
                Click Here
              </a>
            </td>
          </tr>
          <tr className="text-center">
            <td className="text-green-500">Official Website</td>
            <td>
              <a className="text-blue-500" href="https://www.sail.co.in/en/plants/about-rourkela-steel-plant" target="_blank" rel="nofollow">
                Click Here
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}