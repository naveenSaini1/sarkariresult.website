export default function RecruitmentInformation() {
  // Displays recruitment information for DEE, Assam Assistant Teacher & Science Graduate Teacher 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        DEE, Assam Assistant Teacher & Science Graduate Teacher Online Form 2024
      </h1>

      <div className="mb-4">
        <p className="text-lg font-medium mb-1">
          <span className="text-green-500">Name of the Post:</span> DEE, Assam
          Assistant Teacher & Science Graduate Teacher Online Form 2024
        </p>
        <p className="text-lg font-medium mb-1">
          <span className="text-green-500">Post Date:</span> 06-08-2024
        </p>
        <p className="text-lg font-medium mb-1">
          <span className="text-green-500">Total Vacancy:</span> 35,133
        </p>
      </div>

      <p className="text-lg mb-4">
        <span className="text-red-500">Brief Information:</span> Directorate of
        Elementary Education (DEE), Assam has given a Notification for the
        recruitment of Assistant Teacher of Lower Primary, Assistant Teacher of
        Upper Primary and Science Graduate Teacher in Upper Primary Vacancy as
        Contractual and State Pool Contractual teachers under SSA. Those
        Candidates who are interested in the vacancy details & completed all
        eligibility criteria can read the notification & Apply Online.
      </p>

      <h2 className="text-2xl font-bold mb-4">Important Details</h2>

      <div className="mb-4">
        <p className="text-lg font-medium mb-1">
          <span className="text-red-500">Important Dates</span>
        </p>
        <ul className="list-disc pl-5">
          <li className="text-lg">
            Starting Date for Apply Online: 06-08-2024 from 10:00 AM
          </li>
          <li className="text-lg">
            Last Date to Apply Online: 12-08-2024 to Midnight
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>

      <table className="table-auto w-full text-center mb-4">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2">
              <span className="text-blue-500 font-bold">Post Name</span>
            </th>
            <th className="px-4 py-2">
              <span className="text-blue-500 font-bold">Total</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Assistant Teacher of Lower Primary</td>
            <td className="border px-4 py-2" rowSpan="3">
              35,133
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">
              Assistant Teacher of Upper Primary
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">
              Science Graduate Teacher in Upper Primary
            </td>
          </tr>
        </tbody>
      </table>

      <p className="text-lg font-medium mb-4">
        Interested Candidates Can Read the Full Notification Before Apply
        Online
      </p>

      <h2 className="text-2xl font-bold mb-4">Important Links</h2>

      <table className="table-auto w-full text-center mb-4">
        <tbody>
          <tr>
            <td className="border px-4 py-2">
              <span className="text-green-500 font-bold">Apply Online</span>
            </td>
            <td className="border px-4 py-2">
              <a
                href="https://rectteduassam.in/elementary2024/contractual_and_state_pool/"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">
              <span className="text-green-500 font-bold">Notification</span>
            </td>
            <td className="border px-4 py-2">
              <a
                href="https://img.freejobalert.com/uploads/2024/08/Notification-DEE-Assam-Assistant-Teacher-and-Science-Graduate-Teacher-Posts.pdf"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">
              <span className="text-green-500 font-bold">Official Website</span>
            </td>
            <td className="border px-4 py-2">
              <a
                href="https://dee.assam.gov.in/"
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