export default function RecruitmentInformation() {
  // Displays recruitment information for BFUHS Medical Officer (General) position.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">BFUHS Medical Officer (General) Recruitment 2024</h1>
      <p className="text-gray-600 text-center mb-4">
        <span className="font-bold text-green-500">Name of the Post:</span> BFUHS Medical Officer (General) Online Form 2024
      </p>
      <div className="flex justify-between mb-4">
        <p className="text-gray-600">
          <span className="font-bold text-green-500">Post Date:</span> 26-08-2024
        </p>
        <p className="text-gray-600">
          <span className="font-bold text-green-500">Latest Update:</span> 05-09-2024
        </p>
      </div>
      <p className="text-gray-600 mb-4">
        <span className="font-bold text-green-500">Total Vacancy:</span> 400
      </p>
      <p className="text-gray-600 mb-4">
        <span className="font-bold text-red-500">Brief Information:</span> Baba Farid University of Health Science (BFUHS) has given an employment notification for the recruitment of Medical Officer (General). Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply Online.
      </p>

      <h2 className="text-2xl font-bold mb-4">Important Dates</h2>
      <ul className="list-disc ml-6">
        <li className="text-gray-600">
          Starting Date for Apply Online: <strong>23-08-2024</strong>
        </li>
        <li className="text-gray-600">
          Last Date to Apply Online & Payment of Fee: <strong>10-09-2024</strong>
        </li>
        <li className="text-gray-600">Date of Correction: <strong>08-09-2024</strong></li>
        <li className="text-gray-600">Date of CBT Exam: <strong>14-09-2024</strong></li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>
      <table className="table-auto w-full border border-gray-300 mb-4">
        <thead>
          <tr>
            <th className="text-center px-4 py-2 bg-gray-100 border border-gray-300">
              <span className="font-bold text-pink-500">Post Name</span>
            </th>
            <th className="text-center px-4 py-2 bg-gray-100 border border-gray-300">
              <span className="font-bold text-pink-500">Total</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center px-4 py-2 border border-gray-300">Medical Officer (General)</td>
            <td className="text-center px-4 py-2 border border-gray-300">400</td>
          </tr>
        </tbody>
      </table>
      <p className="text-blue-500 text-center mb-4">Interested Candidates Can Read the Full Notification Before Apply Online</p>

      <h2 className="text-2xl font-bold mb-4">Important Links</h2>
      <table className="table-auto w-full border border-gray-300">
        <tbody>
          <tr>
            <td className="text-center px-4 py-2 border border-gray-300">
              <span className="font-bold text-green-500">Last Date Extended (05-09-2024)</span>
            </td>
            <td className="text-center px-4 py-2 border border-gray-300">
              <a href="https://img.freejobalert.com/uploads/2024/09/Last-Date-Extended-BFUHS-Medical-Officer-Posts-2024.pdf" target="_blank" rel="nofollow" className="text-blue-500 underline">
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="text-center px-4 py-2 border border-gray-300">
              <span className="font-bold text-green-500">Apply Online</span>
            </td>
            <td className="text-center px-4 py-2 border border-gray-300">
              <a href="https://bfuhs.eenroll.in/instructions" target="_blank" rel="nofollow" className="text-blue-500 underline">
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="text-center px-4 py-2 border border-gray-300">
              <span className="font-bold text-green-500">Other Details</span>
            </td>
            <td className="text-center px-4 py-2 border border-gray-300">
              <a href="https://bfuhs.ac.in/careers/pbcareers.asp" target="_blank" rel="nofollow" className="text-blue-500 underline">
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="text-center px-4 py-2 border border-gray-300">
              <span className="font-bold text-green-500">Notification</span>
            </td>
            <td className="text-center px-4 py-2 border border-gray-300">
              <a href="https://img.freejobalert.com/uploads/2024/08/Notification-BFUHS-Medical-Officer-General-Posts.pdf" target="_blank" rel="nofollow" className="text-blue-500 underline">
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="text-center px-4 py-2 border border-gray-300">
              <span className="font-bold text-green-500">Official Website</span>
            </td>
            <td className="text-center px-4 py-2 border border-gray-300">
              <a href="https://www.bfuhs.ac.in/" target="_blank" rel="nofollow" className="text-blue-500 underline">
                Click Here
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}