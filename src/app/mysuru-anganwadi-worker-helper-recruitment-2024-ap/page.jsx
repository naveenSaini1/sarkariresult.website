export default function RecruitmentInformation() {
  // Displays recruitment information for Anganwadi Worker & Helper Vacancy in Mysuru
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">WCD, Mysuru Anganwadi Worker & Helper Online Form 2024</h1>

      <div className="mb-4">
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Name of the Post:</span> WCD, Mysuru Anganwadi Worker & Helper Online Form 2024
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Post Date:</span> 28-09-2024
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Total Vacancy:</span> 412
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-red-500">Brief Information:</span> Women & Child Development, Mysuru has announced notification for the recruitment of Anganwadi Worker & Anganwadi Helper Vacancy. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply Online.
        </p>
      </div>

      <table className="w-full text-center border-collapse border-2 border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 font-medium" colSpan={2}>
              <span className="text-red-500 font-bold">Women & Child Development, Mysuru</span>
            </th>
          </tr>
          <tr className="bg-gray-100">
            <th className="p-2 font-medium" colSpan={2}>
              <span className="text-green-500 font-bold">Anganwadi Worker & Helper Vacancy 2024</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2" colSpan={2}>
              <p className="text-center font-medium">
                <span className="text-red-500 font-bold">Important Dates</span>
              </p>
              <ul className="list-disc pl-6">
                <li>
                  Starting Date for Apply Online: 25-09-2024
                </li>
                <li>
                  Last Date to Apply Online: 19-10-2024
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="p-2" colSpan={2}>
              <p className="text-center font-medium">
                <span className="text-red-500 font-bold">Age Limit</span>
              </p>
              <ul className="list-disc pl-6">
                <li>
                  Minimum Age limit: 19Years
                </li>
                <li>
                  Maximum Age limit: 35Years
                </li>
                <li>
                  Age relaxation is applicable as per rules.
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="p-2" colSpan={2}>
              <p className="text-center font-medium">
                <span className="text-red-500 font-bold">Qualification</span>
              </p>
              <ul className="list-disc pl-6">
                <li>Candidates Should Possess 10th/ 12th Class.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="p-2" colSpan={2}>
              <span className="text-red-500 font-bold">Vacancy Details</span>
            </td>
          </tr>
          <tr className="bg-gray-100">
            <th className="p-2 font-medium">
              <span className="text-blue-500 font-bold">Post Name</span>
            </th>
            <th className="p-2 font-medium">
              <span className="text-blue-500 font-bold">Total</span>
            </th>
          </tr>
          <tr>
            <td className="p-2">Anganwadi Worker</td>
            <td className="p-2">83</td>
          </tr>
          <tr>
            <td className="p-2">Anganwadi Helper</td>
            <td className="p-2">329</td>
          </tr>
          <tr>
            <td className="p-2" colSpan={2}>
              <span className="text-blue-500 font-bold">Interested Candidates Can Read the Full Notification Before Apply Online</span>
            </td>
          </tr>
          <tr>
            <td className="p-2" colSpan={2}>
              <span className="text-red-500 font-bold">Important Links</span>
            </td>
          </tr>
          <tr>
            <td className="p-2">
              <span className="text-green-500 font-bold">Apply Online</span>
            </td>
            <td className="p-2">
              <a className="text-blue-500" href="https://karnemakaone.kar.nic.in/abcd/ApplicationForm_JA_org.aspx" target="_blank" rel="nofollow">
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="p-2">
              <span className="text-green-500 font-bold">Notification</span>
            </td>
            <td className="p-2">
              <a className="text-blue-500" href="https://img.freejobalert.com/uploads/2024/09/Notification-WCD-Mysuru-Anganwadi-Worker-Helper-Posts.png" target="_blank" rel="nofollow">
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="p-2">
              <span className="text-green-500 font-bold">Official Website</span>
            </td>
            <td className="p-2">
              <a className="text-blue-500" href="https://karnemakaone.kar.nic.in/" target="_blank" rel="nofollow">
                Click Here
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}