export default function RecruitmentInformation() {
  // This component displays recruitment information for Hotel Corporation of India Limited (HCIL)
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">HCIL Various Vacancy Walk In 2024</h1>
      <div className="mb-4">
        <p className="font-bold text-green-500 mb-1">Name of the Post:</p>
        <p className="text-justify font-bold">HCIL Various Vacancy Walk In 2024</p>
      </div>
      <div className="mb-4">
        <p className="font-bold text-green-500 mb-1">Post Date:</p>
        <p className="text-justify font-bold">06-09-2024</p>
      </div>
      <div className="mb-4">
        <p className="font-bold text-green-500 mb-1">Total Vacancy:</p>
        <p className="text-justify font-bold">96</p>
      </div>
      <p className="font-bold text-red-500 mb-4">Brief Information:</p>
      <p className="text-justify">
        Hotel Corporation of India Limited (HCIL) has given an employment
        notification for the recruitment of Packers & Loaders, Supervisors, Unit
        Head FHU, Duty Manager & Other Vacancy. Those Candidates who are
        interested in the vacancy details & completed all eligibility criteria
        can read the Notification & Attend.
      </p>
      <h2 className="text-2xl font-bold mb-4">Important Dates</h2>
      <ul className="list-disc pl-5">
        <li className="mb-2">
          Date of Walk In Interview for Head Operation & Duty Manager Posts:
          <strong>04-09-2024</strong>
        </li>
        <li className="mb-2">
          Date of Walk In Interview for Asst Manager & SAP Operator Posts:
          <strong>05-09-2024</strong>
        </li>
        <li className="mb-2">
          Date of Walk In Interview for Supervisor Posts: <strong>06-09-2024</strong>
        </li>
        <li className="mb-2">
          Date of Walk In Interview for Packer & Loader Posts:
          <strong>07-09-2024</strong>
        </li>
        <li>Reporting Time: From: 10:00 AM to 02:00 PM</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Age Limit (as on 01-09-2024)</h2>
      <ul className="list-disc pl-5">
        <li className="mb-2">
          Upper Age Limit: <strong>55 Years</strong>
        </li>
        <li>Age Relaxation is applicable as per rules.</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>
      <table className="table-auto w-full text-center border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 font-bold text-pink-500">
              Post Name
            </th>
            <th className="px-4 py-2 font-bold text-pink-500">Total</th>
            <th
              colSpan={6}
              className="px-4 py-2 font-bold text-pink-500"
            >
              Qualification
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border-b border-gray-300">Unit Head FHU</td>
            <td className="px-4 py-2 border-b border-gray-300">01</td>
            <td
              colSpan={6}
              className="px-4 py-2 border-b border-gray-300"
            >
              Any Degree (Fluent In English & Hindi)
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b border-gray-300">
              Duty Manager (Shift Incharge & Airline Co-ordinator)
            </td>
            <td className="px-4 py-2 border-b border-gray-300">04</td>
            <td
              colSpan={6}
              className="px-4 py-2 border-b border-gray-300"
            >
              Any Degree (Fluent In English & Hindi)
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b border-gray-300">
              Asst. Mgr. Operations & Coordination (Duty Officer & Shift
              Co-ordinator)
            </td>
            <td className="px-4 py-2 border-b border-gray-300">05</td>
            <td
              colSpan={6}
              className="px-4 py-2 border-b border-gray-300"
            >
              Any Degree (Fluent In English & Hindi)
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b border-gray-300">
              Asst. Mgr Stores & Billing
            </td>
            <td className="px-4 py-2 border-b border-gray-300">01</td>
            <td
              colSpan={6}
              className="px-4 py-2 border-b border-gray-300"
            >
              Any Degree (Fluent In English & Hindi)
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b border-gray-300">Supervisor</td>
            <td className="px-4 py-2 border-b border-gray-300">22</td>
            <td
              colSpan={6}
              className="px-4 py-2 border-b border-gray-300"
            >
              12th Pass (Fluent In English & Hindi)
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b border-gray-300">
              SAP Operator (Inventory Management)
            </td>
            <td className="px-4 py-2 border-b border-gray-300">04</td>
            <td
              colSpan={6}
              className="px-4 py-2 border-b border-gray-300"
            >
              12th Pass (Fluent In use of computers & English & Hindi)
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b border-gray-300">
              Packer & Loader
            </td>
            <td className="px-4 py-2 border-b border-gray-300">59</td>
            <td
              colSpan={6}
              className="px-4 py-2 border-b border-gray-300"
            >
              10th Pass (Fluent In English & Hindi)
            </td>
          </tr>
        </tbody>
      </table>
      <p className="text-blue-500 font-bold mb-4">
        Interested Candidates Can Read the Full Notification Before Attend
      </p>
      <h2 className="text-2xl font-bold mb-4">Important Links</h2>
      <table className="table-auto w-full text-center border-collapse border border-gray-300">
        <tbody>
          <tr>
            <td className="px-4 py-2 border-b border-gray-300 font-bold text-green-500">
              Notification
            </td>
            <td className="px-4 py-2 border-b border-gray-300">
              <a
                href="https://img.freejobalert.com/uploads/2024/09/Notification-Hotel-Corporation-of-India-Ltd-Various-Vacancy.pdf"
                target="_blank"
                rel="nofollow"
                className="text-blue-500"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b border-gray-300 font-bold text-green-500">
              Official Website
            </td>
            <td className="px-4 py-2 border-b border-gray-300">
              <a
                href="https://www.centaurhotels.com/"
                target="_blank"
                rel="nofollow"
                className="text-blue-500"
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