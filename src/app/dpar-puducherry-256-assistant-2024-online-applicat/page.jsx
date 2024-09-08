export default function RecruitmentInformation() {
  // Displays recruitment information for DPAR, Puducherry Assistant vacancy
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        <span className="text-green-500">Name of the Post:</span> DPAR, Puducherry Assistant
        Online Form 2024
      </h1>
      <p className="text-justify mb-4">
        <span className="text-green-500">Post Date: </span> 24-08-2024
      </p>
      <p className="text-justify mb-4">
        <span className="text-green-500">Total Vacancy: </span>
        <strong>256</strong>
      </p>
      <p className="text-justify mb-4">
        <span className="text-red-500">Brief Information:</span> Department of Personnel &amp;
        Administrative Reforms (DPAR), Puducherry has invites an application for the
        recruitment of Assistant vacancy. Those Candidates who are interested in the
        vacancy details &amp; completed all eligibility criteria can read the
        Notification &amp; Apply Online.
      </p>
      <h2 className="text-2xl font-bold mb-4">
        <span className="text-red-500">Important Dates</span>
      </h2>
      <ul className="list-disc ml-6 mb-4">
        <li>
          Starting Date for Apply Online: <strong>23-08-2024 (10:00 AM)</strong>
        </li>
        <li>
          Last Date to Apply Online: <strong>20-09-2024 (05:00 PM)</strong>
        </li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">
        <span className="text-red-500">Age Limit (as on 24-04-2024)</span>
      </h2>
      <ul className="list-disc ml-6 mb-4">
        <li>
          <span className="text-black">Maximum Age Limit: </span>
          <strong>30 Years</strong>
        </li>
        <li>
          <span className="text-black">Age relaxation is applicable as per rules</span>.
        </li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">
        <span className="text-red-500">Qualification</span>
      </h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Candidates Should Possess Any Degree</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">
        <span className="text-red-500">Vacancy Details</span>
      </h2>
      <table className="table-auto w-full text-center mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-gray-300">
              <span className="text-pink-500">Post Name</span>
            </th>
            <th className="px-4 py-2 border border-gray-300">
              <span className="text-pink-500">Total</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border border-gray-300">
              <span className="text-black">Assistant</span>
            </td>
            <td className="px-4 py-2 border border-gray-300">
              <span className="text-black">256</span>
            </td>
          </tr>
        </tbody>
      </table>
      <p className="text-blue-500 text-center mb-4">
        <strong>
          Interested Candidates Can Read the Full Notification Before Apply Online
        </strong>
      </p>
      <h2 className="text-2xl font-bold mb-4">
        <span className="text-red-500">Important Links</span>
      </h2>
      <table className="table-auto w-full text-center mb-4">
        <tbody>
          <tr>
            <td className="px-4 py-2 border border-gray-300">
              <span className="text-green-500">Apply Online</span>
            </td>
            <td className="px-4 py-2 border border-gray-300">
              <a
                href="https://recruitment.py.gov.in/recruitment/ASST2024/register-applicant"
                target="_blank"
                rel="nofollow"
                className="text-blue-500"
              >
                Register
              </a>{" "}
              |{" "}
              <a
                href="https://recruitment.py.gov.in/login"
                target="_blank"
                rel="nofollow"
                className="text-blue-500"
              >
                Login
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">
              <span className="text-green-500">Notification</span>
            </td>
            <td className="px-4 py-2 border border-gray-300">
              <a
                href="https://img.freejobalert.com/uploads/2024/08/Notification-DPAR-Puducherry-Assistant-Post-2024.pdf"
                target="_blank"
                rel="nofollow"
                className="text-blue-500"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">
              <span className="text-green-500">Official Website</span>
            </td>
            <td className="px-4 py-2 border border-gray-300">
              <a
                href="https://recruitment.py.gov.in/"
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