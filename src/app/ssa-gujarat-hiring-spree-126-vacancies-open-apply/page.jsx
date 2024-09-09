export default function RecruitmentInfo() {
  // Displays recruitment information for SSA Gujarat Various Vacancy 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">SSA Gujarat Various Vacancy 2024</h1>
      <div className="mb-4">
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Name of the Post:</span> SSA Gujarat
          Various Vacancy 2024 Online Form
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Post Date:</span> 29-09-2024
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Total Vacancy:</span> 126
        </p>
      </div>
      <p className="mb-4">
        <span className="text-red-500 font-bold">Brief Information:</span>
        Samagra Shiksha Abhiyan (SSA) Gujarat has published a notification for the
        recruitment of Warden, Asst Warden & Accountant vacancy. Those
        Candidates who are interested in the vacancy details & completed all
        eligibility criteria can read the Notification & Apply Online.
      </p>
      <h2 className="text-2xl font-bold mb-4">Important Dates</h2>
      <ul className="list-disc pl-6">
        <li className="mb-2">
          Starting Date for Apply Online: 27-07-2024 (Starting from 12:00 PM)
        </li>
        <li>Last Date for Apply Online: 07-08-2024 (Up to 17:00 Hrs)</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Age Limit (as on 07-08-2024)</h2>
      <ul className="list-disc pl-6">
        <li className="mb-2">Maximum Age limit: 40 Years</li>
        <li>Age relaxation is applicable as per rules.</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>
      <table className="table-auto w-full text-center mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-gray-200">
              <span className="text-pink-500 font-bold">Post Name</span>
            </th>
            <th className="px-4 py-2 bg-gray-200">
              <span className="text-pink-500 font-bold">Total</span>
            </th>
            <th className="px-4 py-2 bg-gray-200">
              <span className="text-pink-500 font-bold">Qualification</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">
              Warden (Householder) – Resident (Male Candidates Only)
            </td>
            <td className="px-4 py-2">14</td>
            <td className="px-4 py-2">Any Degree/B.Ed</td>
          </tr>
          <tr>
            <td className="px-4 py-2">
              Asst Warden (Assistant Householder) – Resident (Male Candidates
              Only)
            </td>
            <td className="px-4 py-2">14</td>
            <td className="px-4 py-2">Any Degree/B.Ed</td>
          </tr>
          <tr>
            <td className="px-4 py-2">
              Accountant (Non Resident Female/Male Candidate (For Boys Hostel))
            </td>
            <td className="px-4 py-2">14</td>
            <td className="px-4 py-2">B.Com/BBA (Accountancy)</td>
          </tr>
          <tr>
            <td className="px-4 py-2">
              Accountant (Non-Resident (Only for Female Candidates-KGBV))
            </td>
            <td className="px-4 py-2">84</td>
            <td className="px-4 py-2">B.Com/BBA (Accountancy)</td>
          </tr>
        </tbody>
      </table>
      <p className="text-blue-500 font-bold mb-4">
        Interested Candidates Can Read the Full Notification Before Apply
        Online
      </p>
      <h2 className="text-2xl font-bold mb-4">Important Links</h2>
      <table className="table-auto w-full text-center mb-4">
        <tbody>
          <tr>
            <td className="px-4 py-2">
              <span className="text-green-500 font-bold">Apply Online</span>
            </td>
            <td className="px-4 py-2 col-span-2">
              <a
                href="https://ssarms.gipl.in/"
                className="text-blue-500 underline"
                rel="nofollow"
                target="_blank"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">
              <span className="text-green-500 font-bold">Notification</span>
            </td>
            <td className="px-4 py-2 col-span-2">
              <a
                href="https://img.freejobalert.com/uploads/2024/07/Notification-SSA-Gujarat-Warden-Asst-Warden-Accountant-Posts.pdf"
                className="text-blue-500 underline"
                rel="nofollow"
                target="_blank"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">
              <span className="text-green-500 font-bold">Official Website</span>
            </td>
            <td className="px-4 py-2 col-span-2">
              <a
                href="https://ssarms.gipl.in/"
                className="text-blue-500 underline"
                rel="nofollow"
                target="_blank"
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