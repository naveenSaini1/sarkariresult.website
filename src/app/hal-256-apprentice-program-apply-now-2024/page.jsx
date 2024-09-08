export default function HALApprenticeRecruitment() {
  // This component displays recruitment information for HAL Apprentice Online Form 2024.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        <span className="text-green-500">Name of the Post</span>: HAL Apprentice Online Form 2024
      </h1>

      <div className="mb-4">
        <p className="text-justify">
          <span className="text-green-500">Post Date:</span>{' '}
          <span className="text-black">12-08-2024</span>
        </p>
        <p className="text-justify">
          <span className="text-green-500">Total Vacancy:</span>{' '}
          <span className="text-black">256</span>
        </p>
      </div>

      <p className="text-justify">
        <span className="text-red-500">Brief Information:</span> Hindustan
        Aeronautics Ltd (HAL), Aircraft Division, Nasik has published a
        notification for the recruitment of Apprentices (Engineering Graduate,
        Diploma & Non-Technical Graduate Apprentice) Vacancy. Those Candidates
        who are interested in the vacancy details & completed all eligibility
        criteria can read the Notification & Apply Online.
      </p>

      <h2 className="text-2xl font-bold mb-4">Important Dates</h2>

      <ul className="list-disc ml-6">
        <li>Date for Publish of Advertisement: <strong>08-08-2024</strong></li>
        <li>Last Date for Apply Online: <strong>31-08-2024</strong></li>
        <li>
          Date of Physical Document Verification of shortlisted candidates:
          <strong>2/3rd Week of Sept. 2024 (Tentative Date)</strong>
        </li>
        <li>
          Date of Publish of Shortlisted Candidate’s list:
          <strong>4th week of Sept. 2024 (Tentative Date)</strong>
        </li>
        <li>
          Date of Joining: <strong>2nd week of Oct. 2024 (Tentative Date)</strong>
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>

      <table className="table-auto w-full text-center border-collapse mb-4">
        <thead>
          <tr>
            <th className="border p-2">Trade Name</th>
            <th className="border p-2">Total</th>
            <th className="border p-2">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">Engineering Graduate Apprentice</td>
            <td className="border p-2">105</td>
            <td className="border p-2">B.E/B.Tech/B.Pharm Degree (Respective Branch)</td>
          </tr>
          <tr>
            <td className="border p-2">Diploma Apprentice</td>
            <td className="border p-2">71</td>
            <td className="border p-2">Diploma (Relevant Engg)</td>
          </tr>
          <tr>
            <td className="border p-2">Non-Technical Graduate Apprentice</td>
            <td className="border p-2">80</td>
            <td className="border p-2">Any Degree</td>
          </tr>
        </tbody>
      </table>

      <p className="text-blue-500">
        <strong>
          Interested Candidates Can Read the Full Notification Before Apply
          Online
        </strong>
      </p>

      <h2 className="text-2xl font-bold mb-4">Important Links</h2>

      <table className="table-auto w-full text-center border-collapse">
        <tbody>
          <tr>
            <td className="border p-2">
              <span className="text-green-500">Apply Online</span>
            </td>
            <td className="border p-2" colSpan={2}>
              <a
                href="https://nats.education.gov.in/"
                className="text-blue-500"
                target="_blank"
                rel="noopener"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="border p-2">
              <span className="text-green-500">Notification</span>
            </td>
            <td className="border p-2" colSpan={2}>
              <a
                href="https://img.freejobalert.com/uploads/2024/08/Notification-HAL-Graduate-Diploma-Apprentice-Posts.pdf"
                className="text-blue-500"
                target="_blank"
                rel="noopener"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="border p-2">
              <span className="text-green-500">Official Website</span>
            </td>
            <td className="border p-2" colSpan={2}>
              <a
                href="https://hal-india.co.in"
                className="text-blue-500"
                target="_blank"
                rel="noopener"
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