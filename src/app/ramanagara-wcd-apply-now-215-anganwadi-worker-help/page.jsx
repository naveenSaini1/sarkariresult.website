export default function RecruitmentInformation() {
  // Displays recruitment information for Anganwadi Worker and Helper vacancies in Ramanagara, Karnataka
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        WCD, Ramanagara Anganwadi Worker & Helper Online Form 2024
      </h1>
      <p className="mb-4">
        <span className="text-green-500 font-bold">Name of the Post:</span>{' '}
        <strong>WCD, Ramanagara Anganwadi Worker & Helper Online Form 2024</strong>
      </p>
      <p className="mb-4 text-justify">
        <span className="text-green-500 font-bold">Post Date: </span>
        <span className="text-black">10-09-2024</span>
      </p>
      <p className="mb-4 text-justify">
        <span className="text-green-500 font-bold">Total Vacancy: </span>
        <span className="text-black">217</span>
      </p>
      <p className="mb-4 text-justify">
        <span className="text-red-500 font-bold">Brief Information: </span>
        Women & Child Development, Ramanagara has given an employment
        Notification for the recruitment of Anganwadi Worker, Anganwadi Helper
        Vacancy. Those Candidates who are interested in the vacancy details &
        completed all eligibility criteria can read the notification & Apply
        Online.
      </p>
      <h2 className="text-2xl font-bold mb-4">Important Details</h2>
      <table className="table-auto w-full border-collapse border border-gray-300 mb-4">
        <tbody>
          <tr>
            <td colSpan={3} className="p-2 text-center">
              <p className="text-red-500 font-bold">
                Women & Child Development, Ramanagara
              </p>
              <p className="text-green-500 font-bold">
                Anganwadi Worker & Helper Vacancy 2024
              </p>
              <p className="text-center">
                <a
                  href="https://www.freejobalert.com"
                  target="_blank"
                  rel="noopener"
                  className="text-blue-500 underline"
                >
                  
                </a>
              </p>
            </td>
          </tr>
          <tr>
            <td colSpan={3} className="p-2 text-center">
              <p className="text-red-500 font-bold">Important Dates</p>
              <ul>
                <li>
                  Last Date for Apply Online: <strong>30-09-2024</strong>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={3} className="p-2 text-center">
              <p className="text-red-500 font-bold">Age Limit</p>
              <ul>
                <li className="text-left">
                  Minimum Age limit: <strong>19 Years</strong>
                </li>
                <li className="text-left">
                  Maximum Age limit: <strong>35 Years</strong>
                </li>
                <li className="text-left">
                  Age relaxation is applicable as per rules.
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={3} className="p-2 text-center">
              <p className="text-red-500 font-bold">Vacancy Details</p>
            </td>
          </tr>
          <tr>
            <td className="p-2 text-center">
              <span className="text-pink-500 font-bold">Post Name</span>
            </td>
            <td className="p-2 text-center">
              <span className="text-pink-500 font-bold">Total</span>
            </td>
            <td className="p-2 text-center">
              <span className="text-pink-500 font-bold">Qualification</span>
            </td>
          </tr>
          <tr>
            <td className="p-2 text-center">Anganwadi Worker</td>
            <td className="p-2 text-center">80</td>
            <td className="p-2 text-center">
              10th, 12th, ECCE Diploma, JOC, N.T.T. Courses from D.S.E.R.T
            </td>
          </tr>
          <tr>
            <td className="p-2 text-center">Anganwadi Helper</td>
            <td className="p-2 text-center">137</td>
            <td className="p-2 text-center">10th Class</td>
          </tr>
          <tr>
            <td colSpan={3} className="p-2 text-center">
              <span className="text-blue-500 font-bold">
                Interested Candidates Can Read the Full Notification Before Apply
                Online
              </span>
            </td>
          </tr>
          <tr>
            <td colSpan={3} className="p-2 text-center">
              <p className="text-red-500 font-bold">Important Links</p>
            </td>
          </tr>
          <tr>
            <td className="p-2 text-center">
              <span className="text-green-500 font-bold">Apply Online</span>
            </td>
            <td colSpan={2} className="p-2 text-center">
              <a
                href="https://karnemakaone.kar.nic.in/abcd/ApplicationForm_JA_org.aspx"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="p-2 text-center">
              <span className="text-green-500 font-bold">Notification</span>
            </td>
            <td colSpan={2} className="p-2 text-center">
              <a
                href="https://img.freejobalert.com/uploads/2024/09/Notification-WCD-Ramanagara-Anganwadi-Worker-Helper-Posts.png"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
              >
                Link 1
              </a>
              {' | '}
              <a
                href="https://img.freejobalert.com/uploads/2024/08/Notification-WCD-Ballari-Anganwadi-Worker-Anganwadi-Helper-Posts.png"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
              >
                Link 2
              </a>
            </td>
          </tr>
          <tr>
            <td className="p-2 text-center">
              <span className="text-green-500 font-bold">Official Website</span>
            </td>
            <td colSpan={2} className="p-2 text-center">
              <a
                href="https://karnemakaone.kar.nic.in/"
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