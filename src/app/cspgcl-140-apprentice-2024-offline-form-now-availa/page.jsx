export default function RecruitmentInformation() {
  // This component displays recruitment information for CSPGCL Apprentice 2024.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">CSPGCL Apprentice 2024 Offline Form</h1>
      <p className="mb-4">
        <strong className="text-green-500">Name of the Post:</strong>{' '}
        <strong>CSPGCL Apprentice 2024 Offline Form</strong>
      </p>
      <p className="mb-4">
        <strong className="text-green-500">Post Date:</strong>{' '}
        14-09-2024
      </p>
      <p className="mb-4">
        <strong className="text-green-500">Total Vacancy:</strong>{' '}
        <strong>140</strong>
      </p>
      <p className="mb-4">
        <strong className="text-red-500">Brief Information:</strong>{' '}
        Chhattisgarh State Power Generation Company Limited (CSPGCL) has announced
        notification for the recruitment of Apprentice Vacancy. Those Candidates
        who are interested in the vacancy details & completed all eligibility
        criteria can read the Notification & Apply.
      </p>
      <h2 className="text-2xl font-bold mb-4">Important Dates</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Last Date to Apply Offline: 30-10-2024 (10:00 to 5:30pm)</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>
      <table className="table-auto w-full mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left text-gray-700 font-bold">
              Post Name
            </th>
            <th className="px-4 py-2 text-left text-gray-700 font-bold">
              Total
            </th>
            <th className="px-4 py-2 text-left text-gray-700 font-bold">
              Qualification
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-gray-200">
            <td className="px-4 py-2">Civil Engineering</td>
            <td className="px-4 py-2">05</td>
            <td className="px-4 py-2" rowspan="4">
              Degree (Relevant Engg)
            </td>
          </tr>
          <tr className="border-t border-gray-200">
            <td className="px-4 py-2">Mechanical Engineering</td>
            <td className="px-4 py-2">25</td>
          </tr>
          <tr className="border-t border-gray-200">
            <td className="px-4 py-2">Electrical Engineering</td>
            <td className="px-4 py-2">25</td>
          </tr>
          <tr className="border-t border-gray-200">
            <td className="px-4 py-2">CSE/ EEE/ IT</td>
            <td className="px-4 py-2">10</td>
          </tr>
          <tr className="border-t border-gray-200">
            <td className="px-4 py-2" colSpan={3}>
              <strong>Diploma Apprentice</strong>
            </td>
          </tr>
          <tr className="border-t border-gray-200">
            <td className="px-4 py-2">Civil Engineering</td>
            <td className="px-4 py-2">05</td>
            <td className="px-4 py-2" rowspan="4">
              Diploma (Engg)
            </td>
          </tr>
          <tr className="border-t border-gray-200">
            <td className="px-4 py-2">Mechanical Engineering</td>
            <td className="px-4 py-2">25</td>
          </tr>
          <tr className="border-t border-gray-200">
            <td className="px-4 py-2">Electrical Engineering</td>
            <td className="px-4 py-2">20</td>
          </tr>
          <tr className="border-t border-gray-200">
            <td className="px-4 py-2">CSE/ EEE/ IT</td>
            <td className="px-4 py-2">05</td>
          </tr>
          <tr className="border-t border-gray-200">
            <td className="px-4 py-2" colSpan={3}>
              <strong>General Degree Apprentice</strong>
            </td>
          </tr>
          <tr className="border-t border-gray-200">
            <td className="px-4 py-2">BSC</td>
            <td className="px-4 py-2">10</td>
            <td className="px-4 py-2" rowspan="2">
              Degree (BSC/ BCA/ BBA)
            </td>
          </tr>
          <tr className="border-t border-gray-200">
            <td className="px-4 py-2">BCA/ BBA</td>
            <td className="px-4 py-2">10</td>
          </tr>
        </tbody>
      </table>
      <p className="mb-4 text-blue-500">
        <strong>Interested Candidates Can Read the Full Notification Before Apply</strong>
      </p>
      <h2 className="text-2xl font-bold mb-4">Important Links</h2>
      <table className="table-auto w-full mb-4">
        <tbody>
          <tr className="border-t border-gray-200">
            <td className="px-4 py-2 text-left text-gray-700 font-bold">
              <strong className="text-green-500">Apprentice Portal</strong>
            </td>
            <td className="px-4 py-2 text-left">
              <a
                href="https://portal.mhrdnats.gov.in/boat/login/user_login.action"
                className="text-blue-500"
                target="_blank"
                rel="nofollow"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="border-t border-gray-200">
            <td className="px-4 py-2 text-left text-gray-700 font-bold">
              <strong className="text-green-500">Application Form</strong>
            </td>
            <td className="px-4 py-2 text-left">
              <a
                href="https://img.freejobalert.com/uploads/2024/09/Notification-CSPGCL-Apprentice-Application-Form.pdf"
                className="text-blue-500"
                target="_blank"
                rel="nofollow"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="border-t border-gray-200">
            <td className="px-4 py-2 text-left text-gray-700 font-bold">
              <strong className="text-green-500">Notification</strong>
            </td>
            <td className="px-4 py-2 text-left">
              <a
                href="https://img.freejobalert.com/uploads/2024/09/Notification-CSPGCL-Apprentice-Posts.pdf"
                className="text-blue-500"
                target="_blank"
                rel="nofollow"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="border-t border-gray-200">
            <td className="px-4 py-2 text-left text-gray-700 font-bold">
              <strong className="text-green-500">Official Website</strong>
            </td>
            <td className="px-4 py-2 text-left">
              <a
                href="https://cspc.co.in/cspc/"
                className="text-blue-500"
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
  );
}