export default function RecruitmentInformation() {
  // Displays recruitment information for NIT Nagpur Various Vacancy 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">NIT Nagpur Various Vacancy 2024</h1>
      <div className="mb-4">
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Name of the Post:</span> NIT Nagpur Various Vacancy 2024 Offline Form
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Post Date: </span>23-08-2024
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Total Vacancy: </span>63
        </p>
      </div>
      <p className="text-lg mb-4">
        <span className="text-red-500">Brief Information:</span> Nagpur Institute of Technology (NIT Nagpur) has published a notification for the recruitment of Professor, Associate Professor & Assistant Professor vacancy. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply.
      </p>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Important Dates</h2>
        <ul className="list-disc pl-4">
          <li className="text-lg mb-2">Last Date for Receipt of Application: 02-09-2024</li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Qualification</h2>
        <ul className="list-disc pl-4">
          <li className="text-lg mb-2">Candidates should Possess B.Tech (Relevant Engg)</li>
          <li className="text-lg mb-2">For More Details Refer Notification</li>
        </ul>
      </div>
      <h2 className="text-2xl font-bold mb-2">Vacancy Details</h2>
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-left px-4 py-2 font-medium text-blue-500">Post Name</th>
            <th className="text-left px-4 py-2 font-medium text-blue-500">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="text-left px-4 py-2">Professor</td>
            <td className="text-left px-4 py-2">05</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="text-left px-4 py-2">Associate Professor</td>
            <td className="text-left px-4 py-2">17</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="text-left px-4 py-2">Assistant Professor</td>
            <td className="text-left px-4 py-2">41</td>
          </tr>
        </tbody>
      </table>
      <p className="text-lg mt-4 text-blue-500 font-medium">Interested Candidates Can Read the Full Notification Before Apply</p>
      <h2 className="text-2xl font-bold mb-2 mt-4">Important Links</h2>
      <table className="w-full table-auto border-collapse border border-gray-300">
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="text-left px-4 py-2"><span className="text-green-500">Notification</span></td>
            <td className="text-left px-4 py-2"><a href="https://img.freejobalert.com/uploads/2024/08/Notification-NIT-Nagpur-Professor-Posts.png" target="_blank" rel="nofollow" className="text-blue-500 hover:underline">Click Here</a></td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="text-left px-4 py-2"><span className="text-green-500">Official Website</span></td>
            <td className="text-left px-4 py-2"><a href="https://nit.edu.in/" target="_blank" rel="nofollow" className="text-blue-500 hover:underline">Click Here</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}