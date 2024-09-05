export default function RecruitmentInformation() {
  // Displays recruitment information for the BFUHS Medical Officer (General) position
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        BFUHS Medical Officer (General) Online Form 2024
      </h1>
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div>
          <p className="font-bold text-gray-700 mb-1">
            <span className="text-green-500">Name of the Post:</span>
            BFUHS Medical Officer (General)
          </p>
          <p className="font-bold text-gray-700 mb-1">
            <span className="text-green-500">Post Date:</span>
            26-08-2024
          </p>
          <p className="font-bold text-gray-700 mb-1">
            <span className="text-green-500">Latest Update:</span>
            05-09-2024
          </p>
        </div>
        <div>
          <p className="font-bold text-gray-700 mb-1">
            <span className="text-green-500">Total Vacancy:</span>
            400
          </p>
        </div>
      </div>
      <p className="text-gray-700 mb-4">
        <span className="font-bold text-red-500">Brief Information:</span> Baba Farid
        University of Health Science (BFUHS) has given an employment
        notification for the recruitment of Medical Officer (General). Those
        Candidates who are interested in the vacancy details &amp; completed all
        eligibility criteria can read the Notification &amp; Apply Online.
      </p>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Important Dates</h2>
      <ul className="list-disc ml-4 text-gray-700">
        <li>
          Starting Date for Apply Online: <strong>23-08-2024</strong>
        </li>
        <li>
          Last Date to Apply Online &amp; Payment of Fee:
          <strong>10-09-2024</strong>
        </li>
        <li>Date of Correction: <strong>08-09-2024</strong></li>
        <li>Date of CBT Exam: <strong>14-09-2024</strong></li>
      </ul>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Vacancy Details</h2>
      <table className="table-auto w-full text-gray-700 mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2 font-bold text-center">Post Name</th>
            <th className="px-4 py-2 font-bold text-center">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 text-center">Medical Officer (General)</td>
            <td className="px-4 py-2 text-center">400</td>
          </tr>
        </tbody>
      </table>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Important Links</h2>
      <table className="table-auto w-full text-gray-700 mb-4">
        <tbody>
          <tr>
            <td className="px-4 py-2 font-bold text-center">
              <span className="text-green-500">Last Date Extended (05-09-2024)</span>
            </td>
            <td className="px-4 py-2 text-center">
              <a
                href="https://img.freejobalert.com/uploads/2024/09/Last-Date-Extended-BFUHS-Medical-Officer-Posts-2024.pdf"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="nofollow"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 font-bold text-center">
              <span className="text-green-500">Apply Online</span>
            </td>
            <td className="px-4 py-2 text-center">
              <a
                href="https://bfuhs.eenroll.in/instructions"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="nofollow"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 font-bold text-center">
              <span className="text-green-500">Other Details</span>
            </td>
            <td className="px-4 py-2 text-center">
              <a
                href="https://bfuhs.ac.in/careers/pbcareers.asp"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="nofollow"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 font-bold text-center">
              <span className="text-green-500">Notification</span>
            </td>
            <td className="px-4 py-2 text-center">
              <a
                href="https://img.freejobalert.com/uploads/2024/08/Notification-BFUHS-Medical-Officer-General-Posts.pdf"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="nofollow"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 font-bold text-center">
              <span className="text-green-500">Official Website</span>
            </td>
            <td className="px-4 py-2 text-center">
              <a
                href="https://www.bfuhs.ac.in/"
                className="text-blue-500 hover:underline"
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