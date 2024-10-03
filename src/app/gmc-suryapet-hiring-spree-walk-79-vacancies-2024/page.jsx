export default function RecruitmentInfo() {
  // Displays recruitment information for GMC, Suryapet Various Vacancy Walk in 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        GMC, Suryapet Various Vacancy Walk in 2024
      </h1>
      <p className="text-gray-600 mb-4">
        <span className="font-bold text-green-500">Name of the Post:</span> GMC,
        Suryapet Various Vacancy Walk in 2024
      </p>
      <p className="text-gray-600 mb-4">
        <span className="font-bold text-green-500">Post Date:</span> 03-10-2024
      </p>
      <p className="text-gray-600 mb-4">
        <span className="font-bold text-green-500">Total Vacancy:</span> 79
      </p>
      <p className="text-gray-600 mb-4">
        <span className="font-bold text-red-500">Brief Information:</span>
        Government Medical College (GMC), Suryapet has invites an application
        for the recruitment of Sr Resident, Tutor &amp; Other Vacancy on
        Contract Basis. Those Candidates who are interested in the vacancy
        details &amp; completed all eligibility criteria can read the
        Notification &amp; Walk in.
      </p>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Important Dates
      </h2>
      <ul className="list-disc ml-6 text-gray-600 mb-4">
        <li>Date of Walk in Interview: 04-10-2024 (Time 11:00 AM)</li>
      </ul>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Age Limit (as on 31-07-2024)
      </h2>
      <ul className="list-disc ml-6 text-gray-600 mb-4">
        <li>Maximum Age Limit: 69 Years</li>
      </ul>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Qualification</h2>
      <ul className="list-disc ml-6 text-gray-600 mb-4">
        <li>
          Candidates Should Possess MBBS/MD/MS/DNB/M.Sc/Ph.D (Relevant Subject).
        </li>
      </ul>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Vacancy Details
      </h2>
      <table className="w-full text-center border-collapse border border-gray-400 mb-4">
        <thead>
          <tr>
            <th className="border border-gray-400 p-2">
              <span className="text-red-500 font-bold">Post Name</span>
            </th>
            <th className="border border-gray-400 p-2">
              <span className="text-red-500 font-bold">Total</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 p-2">Professor</td>
            <td className="border border-gray-400 p-2">02</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2">Associate Professor</td>
            <td className="border border-gray-400 p-2">18</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2">Assistant Professor</td>
            <td className="border border-gray-400 p-2">17</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2">Senior Resident</td>
            <td className="border border-gray-400 p-2">22</td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2">Tutor</td>
            <td className="border border-gray-400 p-2">20</td>
          </tr>
        </tbody>
      </table>
      <p className="text-gray-600 mb-4">
        <span className="text-blue-500 font-bold">
          Interested Candidates Can Read the Full Notification Before Walk in
        </span>
      </p>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Important Links
      </h2>
      <table className="w-full text-center border-collapse border border-gray-400 mb-4">
        <tbody>
          <tr>
            <td className="border border-gray-400 p-2">
              <span className="text-green-500 font-bold">Application Form</span>
            </td>
            <td className="border border-gray-400 p-2">
              <a
                href="https://img.freejobalert.com/uploads/2024/10/Application-Form-GMC-Suryapet-Professor-Tutor-and-Other-Posts.pdf"
                className="text-blue-500"
                target="_blank"
                rel="nofollow"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2">
              <span className="text-green-500 font-bold">Notification</span>
            </td>
            <td className="border border-gray-400 p-2">
              <a
                href="https://img.freejobalert.com/uploads/2024/10/Notification-GMC-Suryapet-Professor-Tutor-and-Other-Posts.pdf"
                className="text-blue-500"
                target="_blank"
                rel="nofollow"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400 p-2">
              <span className="text-green-500 font-bold">Official Website</span>
            </td>
            <td className="border border-gray-400 p-2">
              <a
                href="http://www.gmcsuryapet.org/"
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