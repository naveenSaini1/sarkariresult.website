export default function RecruitmentInformation() {
  // Displays recruitment information for GMC, Rajanna Sircilla Various Vacancy Walk In 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        GMC, Rajanna Sircilla Various Vacancy Walk In 2024
      </h1>
      <div className="mb-4">
        <p className="text-gray-700">
          <span className="font-bold text-green-500">Name of the Post:</span> GMC,
          Rajanna Sircilla Various Vacancy Walk In 2024
        </p>
        <p className="text-gray-700">
          <span className="font-bold text-green-500">Post Date:</span> 18-09-2024
        </p>
        <p className="text-gray-700">
          <span className="font-bold text-green-500">Total Vacancy: </span>
          <strong>69</strong>
        </p>
      </div>
      <p className="text-gray-700 mb-4">
        <span className="font-bold text-red-500">Brief Information:</span>{' '}
        Government Medical College (GMC), Rajanna Sircilla has invites an
        application for the recruitment of Professor, Asst Professor & Other
        Vacancy on Contract Basis. Those Candidates who are interested in the
        vacancy details & completed all eligibility criteria can read the
        Notification & Walk in.
      </p>

      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Important Dates</h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>
            Date of Walk In Interview: 19-09-2024 (11:00 AM Onwards)
          </li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Vacancy Details
        </h2>
        <table className="table-auto w-full text-gray-700">
          <thead>
            <tr>
              <th className="px-4 py-2 text-center">
                <span className="font-bold text-pink-500">Post Name</span>
              </th>
              <th className="px-4 py-2 text-center">
                <span className="font-bold text-pink-500">Total</span>
              </th>
              <th className="px-4 py-2 text-center">
                <span className="font-bold text-pink-500">Qualification</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 text-center">Professor</td>
              <td className="px-4 py-2 text-center">13</td>
              <td className="px-4 py-2 text-center" rowSpan={2}>
                MD/MS/DNB (Concerned Subject)
                <br/>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">Associate Professor</td>
              <td className="px-4 py-2 text-center">11</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">Assistant Professor</td>
              <td className="px-4 py-2 text-center">19</td>
              <td className="px-4 py-2 text-center">
                MD/MS/DNB/M.Sc/Ph.D (Relevant Subject)
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">Senior Resident</td>
              <td className="px-4 py-2 text-center">26</td>
              <td className="px-4 py-2 text-center">
                MD/MS/DNB (Concerned Subject)
              </td>
            </tr>
          </tbody>
        </table>
        <p className="text-gray-700 mt-2">
          <span className="font-bold text-pink-500">
            Interested Candidates Can Read the Full Notification Before Walk In
          </span>
        </p>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-2">Important Links</h2>

      <table className="table-auto w-full text-gray-700">
        <tbody>
          <tr>
            <td className="px-4 py-2" colSpan={2}>
              <span className="font-bold text-green-500">Application Form</span>
              <br/>
            </td>
            <td className="px-4 py-2 text-center">
              <a
                href="https://img.freejobalert.com/uploads/2024/09/Application-Form-GMC-Rajanna-Sircilla-Professor-Asst-Professor-Other-Posts.pdf"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 hover:underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2" colSpan={2}>
              <span className="font-bold text-green-500">
                Detailed Notification
              </span>
              <br/>
            </td>
            <td className="px-4 py-2 text-center">
              <a
                href="https://img.freejobalert.com/uploads/2024/09/Notification-GMC-Rajanna-Sircilla-Professor-Asst-Professor-Other-Posts.pdf"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 hover:underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2" colSpan={2}>
              <span className="font-bold text-green-500">Short Notification</span>
              <br/>
            </td>
            <td className="px-4 py-2 text-center">
              <a
                href="https://img.freejobalert.com/uploads/2024/09/Short-Notification-GMC-Rajanna-Sircilla-Professor-Asst-Professor-Other-Posts.pdf"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 hover:underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2" colSpan={2}>
              <span className="font-bold text-green-500">
                Official Website
              </span>
              <br/>
            </td>
            <td className="px-4 py-2 text-center">
              <b>
                <a
                  href="https://rajannasircilla.telangana.gov.in/"
                  target="_blank"
                  rel="nofollow"
                  className="text-blue-500 hover:underline"
                >
                  Link 1
                </a>{' '}
                <a
                  href="https://gmcrajannasircilla.org/"
                  target="_blank"
                  rel="nofollow"
                  className="text-blue-500 hover:underline"
                >
                  | Link 2
                </a>
              </b>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}