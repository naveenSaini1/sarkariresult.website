export default function RecruitmentInformation() {
  // This component displays recruitment information for the ICDS, Patna Anganwadi Worker vacancy.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        ICDS, Patna Anganwadi Worker Online Form 2024
      </h1>
      <p className="mb-4">
        <span className="text-green-500 font-bold">Name of the Post:</span> ICDS,
        Patna Anganwadi Worker Online Form 2024
      </p>
      <p className="mb-4">
        <span className="text-green-500 font-bold">Post Date:</span> 17-09-2024
      </p>
      <p className="mb-4">
        <span className="text-green-500 font-bold">Total Vacancy:</span> 55
      </p>
      <p className="mb-4">
        <span className="text-red-500 font-bold">Brief Information:</span> District
        Programme Office, Integrated Child Development Services (ICDS), Patna
        has invites an application for the recruitment of Anganwadi Worker
        Vacancy. Those Candidates who are interested in the vacancy details &
        completed all eligibility criteria can read the Notification & Apply
        Online.
      </p>
      <table className="table-auto w-full border-collapse border border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-center font-bold">
              <span className="text-red-500">
                Integrated Child Development Services (ICDS), Patna
              </span>
            </th>
          </tr>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-center font-bold">
              <span className="text-pink-500">Advt No. 09/2024</span>
            </th>
          </tr>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-center font-bold">
              <span className="text-green-500">
                Anganwadi Worker Vacancy 2024
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 text-center font-bold">
              <span className="text-red-500">Important Dates</span>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">
              <ul className="list-disc pl-8">
                <li>
                  Starting Date for Apply Online: <strong>09-09-2024</strong>
                </li>
                <li>
                  Last Date to Apply Online: <strong>
                    05-10-2024 (05:00 PM)
                  </strong>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center font-bold">
              <span className="text-red-500">Age Limit (as on 01-01-2024)</span>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">
              <ul className="list-disc pl-8">
                <li>
                  <span className="text-black">Minimum Age Limit:</span>
                  <strong>21 Years</strong>
                </li>
                <li>
                  <span className="text-black">Maximum Age Limit:</span>
                  <strong>45 Years</strong>
                </li>
                <li>
                  <span className="text-black">Age relaxation is admissible as
                  per rules</span>
                  .
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center font-bold">
              <span className="text-red-500">Qualification</span>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">
              <ul className="list-disc pl-8">
                <li>Candidates Should Possess 10th Class or Equivalent</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center font-bold">
              <span className="text-red-500">Vacancy Details</span>
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="px-4 py-2 text-center font-bold">
              <span className="text-pink-500">Post Name</span>
            </td>
            <td className="px-4 py-2 text-center font-bold">
              <span className="text-pink-500">Total</span>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center">Anganwadi Worker</td>
            <td className="px-4 py-2 text-center">
              <span className="text-black">55</span>
            </td>
          </tr>
          <tr>
            <td
              colSpan={2}
              className="px-4 py-2 text-center font-bold"
            >
              <span className="text-blue-500">
                Interested Candidates Can Read the Full Notification Before
                Apply Online
              </span>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center font-bold">
              <span className="text-red-500">Important Links</span>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center">
              <span className="text-green-500">Apply Online</span>
            </td>
            <td className="px-4 py-2 text-center">
              <a
                href="http://125.16.175.140:88/Default.aspx#"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center">
              <span className="text-green-500">Notification</span>
            </td>
            <td className="px-4 py-2 text-center">
              <a
                href="https://img.freejobalert.com/uploads/2024/09/Notification-ICDS-Patna-Anganwadi-Worker-Posts.pdf"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center">
              <span className="text-green-500">Official Website</span>
            </td>
            <td className="px-4 py-2 text-center">
              <a
                href="https://patna.nic.in/"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
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