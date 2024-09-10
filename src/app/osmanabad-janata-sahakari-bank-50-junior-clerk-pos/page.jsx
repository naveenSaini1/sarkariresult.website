export default function RecruitmentInformation() {
  // This component displays recruitment information for Osmanabad Janata Sahakari Bank Ltd, Osmanabad Junior Clerk Online Form 2024.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Osmanabad Janata Sahakari Bank Ltd, Osmanabad Junior Clerk Online Form 2024
      </h1>
      <div className="mb-4">
        <p className="text-gray-700 mb-2">
          <span className="font-bold text-green-500">Name of the Post:</span>{' '}
          Osmanabad Janata Sahakari Bank Ltd, Osmanabad Junior Clerk Online Form 2024
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-bold text-green-500">Post Date: </span>10-09-2024
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-bold text-green-500">Total Vacancy: </span>50
        </p>
      </div>
      <p className="text-gray-700 mb-4">
        <span className="font-bold text-red-500">Brief Information:</span> Osmanabad
        Janata Sahakari Bank Ltd, Osmanabad has given a notification for the
        recruitment of Junior Clerk Vacancy. Those Candidates who are interested
        in the vacancy details & completed all eligibility criteria can read the
        Notification & Apply Online.
      </p>

      <table className="w-full border-collapse border border-gray-300 text-center">
        <thead>
          <tr className="bg-gray-100">
            <th
              colSpan={4}
              className="text-left p-2 border border-gray-300 text-lg"
            >
              <p className="font-bold text-red-500">
                Osmanabad Janata Sahakari Bank Ltd, Osmanabad
              </p>
              <p className="font-bold text-purple-500">Advt No. 120/2024-25</p>
              <p className="font-bold text-green-500">
                Junior Clerk Vacancy 2024
              </p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-left p-2 border border-gray-300">
            <td colSpan={4}>
              <p className="font-bold text-red-500">Application Fee</p>
              <ul className="list-disc ml-4">
                <li>
                  Exam fee:
                  <span className="font-bold">Rs. 800/- plus 18% GST total of Rs. 944/-</span>
                </li>
                <li>Payment Mode: <span className="font-bold">Through Online</span></li>
              </ul>
            </td>
          </tr>
          <tr className="text-left p-2 border border-gray-300">
            <td colSpan={4}>
              <p className="font-bold text-red-500">Important Dates</p>
              <ul className="list-disc ml-4">
                <li>
                  Starting Date for Apply Online & Payment of Fee:
                  <span className="font-bold">06-09-2024 at 11:00 am</span>
                </li>
                <li>
                  Last Date for Apply Online & Payment of Fee:
                  <span className="font-bold">20-09-2024 11.59 pm</span>
                </li>
                <li>
                  Date of Exam: <span className="font-bold">06-10-2024</span>
                </li>
                <li>
                  Date of downloading Exam Admit Card:
                  <span className="font-bold">Will be published on the website</span>
                </li>
                <li>
                  Date of Interview:
                  <span className="font-bold">Will be published on the website</span>
                </li>
              </ul>
            </td>
          </tr>
          <tr className="text-left p-2 border border-gray-300">
            <td colSpan={4}>
              <span className="font-bold text-red-500">Vacancy Details</span>
            </td>
          </tr>
          <tr className="text-left p-2 border border-gray-300">
            <th className="font-bold text-purple-500">Post Name</th>
            <th className="font-bold text-purple-500">Total</th>
            <th className="font-bold text-purple-500">Age Limit (as on 06-09-2024)</th>
            <th className="font-bold text-purple-500">Qualification</th>
          </tr>
          <tr className="text-left p-2 border border-gray-300">
            <td>Junior Clerk</td>
            <td>50</td>
            <td>Min 22 to Max 38 Years</td>
            <td>Any Degree, MS-CIT Course</td>
          </tr>
          <tr className="text-left p-2 border border-gray-300">
            <td colSpan={4}>
              <span className="font-bold text-blue-500">
                Interested Candidates Can Read the Full Notification Before Apply
              </span>
            </td>
          </tr>
          <tr className="text-left p-2 border border-gray-300">
            <td colSpan={4}>
              <span className="font-bold text-red-500">Important Links</span>
            </td>
          </tr>
          <tr className="text-left p-2 border border-gray-300">
            <td className="font-bold text-green-500">Apply Online</td>
            <td colSpan={3}>
              <a
                href="https://mucbf.in/exam-120"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="text-left p-2 border border-gray-300">
            <td className="font-bold text-green-500">Detailed Notification</td>
            <td colSpan={3}>
              <a
                href="https://img.freejobalert.com/uploads/2024/09/Notification-Osmanabad-Janata-Sahakari-Bank-Ltd-Osmanabad-Junior-Clerk-Posts.pdf"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="text-left p-2 border border-gray-300">
            <td className="font-bold text-green-500">Short Notification</td>
            <td colSpan={3}>
              <a
                href="https://mucbf.in/exam-120"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="text-left p-2 border border-gray-300">
            <td className="font-bold text-green-500">Official Website</td>
            <td colSpan={3}>
              <a
                href="https://ojsbankltd.com/"
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