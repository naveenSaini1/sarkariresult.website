export default function RecruitmentInformation() {
  // This component displays recruitment information for the Deputy Commissioner cum District Magistrate Office, Chatra Chowkidar position.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Deputy Commissioner cum District Magistrate Office, Chatra Chowkidar Recruitment 2024</h1>

      <div className="mb-4">
        <p className="font-bold text-green-500">
          Name of the Post: Deputy Commissioner cum District Magistrate Office, Chatra Chowkidar Offline Form 2024
        </p>
        <p className="font-bold text-green-500">Post Date: 18-08-2024</p>
        <p className="font-bold text-green-500">Total Vacancy: 154</p>
      </div>

      <p className="text-justify mb-4">
        <span className="font-bold text-red-500">Brief Information:</span> Deputy Commissioner cum District Magistrate Office, Chatra has published a notification for the recruitment of Chowkidar Vacancy. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply.
      </p>

      <h2 className="text-2xl font-bold mb-4">Important Details</h2>

      <table className="table-auto w-full border-collapse border border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-center text-gray-600 font-bold">Category</th>
            <th className="px-4 py-2 text-center text-gray-600 font-bold">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 text-center text-red-500 font-bold">Important Dates</td>
            <td className="px-4 py-2 text-center">Last Date for Receipt of Application: 31-08-2024</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center text-red-500 font-bold">Age Limit (as on 01-08-2024)</td>
            <td className="px-4 py-2 text-center">
              <ul>
                <li>Minimum Age Limit: 18 Years</li>
                <li>Maximum Age Limit for Unreserved/Economically Weaker Section: 35 Years</li>
                <li>Maximum Age Limit for Backward Class/Extremely Backward Class: 37 Years</li>
                <li>Maximum Age Limit for Female (Unreserved/Backward Class/Extremely Backward Class): 38 Years</li>
                <li>Maximum Age Limit for Scheduled Caste/Scheduled Tribe (Male/ Female): 40 Years</li>
                <li>Age Relaxation is Applicable as per rules.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center text-red-500 font-bold">Qualification</td>
            <td className="px-4 py-2 text-center">Candidates Should Possess 10th Class.</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>

      <table className="table-auto w-full border-collapse border border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-center text-gray-600 font-bold">Post Name</th>
            <th className="px-4 py-2 text-center text-gray-600 font-bold">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 text-center text-blue-500">Chowkidar</td>
            <td className="px-4 py-2 text-center text-blue-500">154</td>
          </tr>
        </tbody>
      </table>

      <p className="text-center mb-4 text-blue-500 font-bold">Interested Candidates Can Read the Full Notification Before Apply</p>

      <h2 className="text-2xl font-bold mb-4">Important Links</h2>

      <table className="table-auto w-full border-collapse border border-gray-300 mb-4">
        <tbody>
          <tr>
            <td className="px-4 py-2 text-center text-green-500 font-bold">Notification</td>
            <td className="px-4 py-2 text-center">
              <a href="https://img.freejobalert.com/uploads/2024/08/Notification-Deputy-Commissioner-cum-District-Magistrate-Office-Chatra-Chowkidar-Posts.pdf" target="_blank" rel="noopener" className="text-blue-500 hover:underline">
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center text-green-500 font-bold">Official Website</td>
            <td className="px-4 py-2 text-center">
              <a href="https://chatra.nic.in/" target="_blank" rel="noopener" className="text-blue-500 hover:underline">
                Click Here
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}