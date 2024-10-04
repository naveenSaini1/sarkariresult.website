export default function RecruitmentInformation() {
  // This component displays recruitment information for Senior Resident/ Senior Demonstrator positions at UCMS, Delhi.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        <span className="text-green-500">Name of the Post:</span>{' '}
        UCMS, Delhi Senior Resident/ Senior Demonstrator Online Form 2024
      </h1>
      <p className="text-justify mb-4">
        <span className="text-green-500">Post Date:</span>{' '}
        <span>04-10-2024</span>
      </p>
      <p className="text-justify mb-4">
        <span className="text-green-500">Total Vacancy:</span>{' '}
        <span>96</span>
      </p>
      <p className="text-justify mb-4">
        <span className="text-red-500">Brief Information:</span>{' '}
        University College of Medical Sciences (UCMS) has given a Notification
        for the Recruitment of Senior Resident/ Senior Demonstrator Vacancy.
        Those Candidates who are interested in the vacancy details & completed
        all eligibility criteria can read the Notification Apply Online.
      </p>

      <table className="table-auto w-full border-collapse border border-gray-300 text-center mb-4">
        <thead>
          <tr>
            <th
              colSpan={2}
              className="px-4 py-2 bg-gray-100 text-gray-600 font-bold uppercase"
            >
              <span className="text-red-500">University College of Medical Sciences (UCMS), Delhi</span>
            </th>
          </tr>
          <tr>
            <th
              colSpan={2}
              className="px-4 py-2 bg-gray-100 text-gray-600 font-bold uppercase"
            >
              <span className="text-green-500">Senior Resident/ Senior Demonstrator Vacancy 2024</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={2} className="px-4 py-2">
              <a href="https://www.freejobalert.com/" target="_blank" rel="noopener" className="text-blue-500">
                
              </a>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="px-4 py-2">
              <strong className="text-red-500">Application Fee</strong>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="px-4 py-2">
              <ul>
                <li>
                  For UR/OBC/EWS Category: <strong className="text-red-500">Rs. 500/-</strong>
                </li>
                <li>
                  For SC/ST/PwBD Category: <strong className="text-red-500">Nil</strong>
                </li>
                <li>Payment Mode: Through Online</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="px-4 py-2">
              <strong className="text-red-500">Important Dates</strong>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="px-4 py-2">
              <ul>
                <li>
                  Last Date for Apply Online & Payment of Fee: <strong className="text-red-500">16-10-2024</strong>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="px-4 py-2">
              <strong className="text-red-500">Age Limit</strong>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="px-4 py-2">
              <ul>
                <li>
                  For Post-graduate & Post-Doctoral Degree Holders : <strong className="text-red-500">45 Years</strong>
                </li>
                <li>Age Relaxation is Applicable As Per Rules.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="px-4 py-2">
              <strong className="text-red-500">Qualification</strong>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="px-4 py-2">
              <ul>
                <li>
                  Candidates Should Possess Postgraduate Degree/Diploma (Concerned Specialty)
                </li>
                <li>For More Details Refer Notification.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="px-4 py-2">
              <strong className="text-red-500">Vacancy Details</strong>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">
              <strong className="text-pink-500">Post Name</strong>
            </td>
            <td className="px-4 py-2">
              <strong className="text-pink-500">Total</strong>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">Senior Resident/ Senior Demonstrator</td>
            <td className="px-4 py-2">96</td>
          </tr>
          <tr>
            <td colSpan={2} className="px-4 py-2">
              <strong className="text-blue-500">Interested Candidates Can Read the Full Notification Before Apply Online</strong>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="px-4 py-2">
              <strong className="text-red-500">Important Links</strong>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">
              <span className="text-green-500">Apply Online</span>
            </td>
            <td className="px-4 py-2">
              <a href="https://www.ucms.ac.in/ucmsSRSD2024/index.html" target="_blank" rel="nofollow" className="text-blue-500">
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">
              <span className="text-green-500">Notification</span>
            </td>
            <td className="px-4 py-2">
              <a href="https://img.freejobalert.com/uploads/2024/10/Notification-UCMS-Senior-Resident-Senior-Demonstrator-Posts.pdf" target="_blank" rel="nofollow" className="text-blue-500">
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">
              <span className="text-green-500">Official Website</span>
            </td>
            <td className="px-4 py-2">
              <a href="https://www.ucms.ac.in/" target="_blank" rel="nofollow" className="text-blue-500">
                Click Here
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}