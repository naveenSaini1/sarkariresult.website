export default function RecruitmentInfo() {
  // Displays recruitment information for Zilla Parishad, Malkangiri Gram Rozgar Sevak vacancy.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Zilla Parishad, Malkangiri Gram Rozgar Sevak Vacancy 2024</h1>
      <p className="text-gray-700 mb-4">
        <span className="font-bold text-green-500">Name of the Post: </span>
        Zilla Parishad, Malkangiri Gram Rozgar Sevak Offline Form 2024
      </p>
      <p className="text-gray-700 mb-4">
        <span className="font-bold text-green-500">Post Date: </span>
        23-08-2024
      </p>
      <p className="text-gray-700 mb-4">
        <span className="font-bold text-green-500">Total Vacancy: </span>
        88
      </p>
      <p className="text-gray-700 mb-4">
        <span className="font-bold text-red-500">Brief Information:</span>
        Zilla Parishad, Malkangiri has invites an application for the recruitment of Gram Rozgar Sevak Vacancy on Contract Basis. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply.
      </p>
      <div className="mb-4">
        <p className="text-center font-bold text-red-500">Important Dates</p>
        <ul className="list-disc pl-6">
          <li className="text-gray-700">Starting Date for the receipt of Application: 24-08-2024</li>
          <li className="text-gray-700">Last Date for the receipt of Application: 26-09-2024</li>
        </ul>
      </div>
      <div className="mb-4">
        <p className="text-center font-bold text-red-500">Age Limit (as on 01-08-2024)</p>
        <ul className="list-disc pl-6">
          <li className="text-gray-700">Minimum Age Limit: 18 Years</li>
          <li className="text-gray-700">Maximum Age Limit: 40 Years</li>
          <li className="text-gray-700">Age relaxation is applicable as per rules.</li>
        </ul>
      </div>
      <div className="mb-4">
        <p className="text-center font-bold text-red-500">Qualification</p>
        <ul className="list-disc pl-6">
          <li className="text-gray-700">Candidates Should Possess 10+2 or its equivalent</li>
        </ul>
      </div>
      <table className="table-auto w-full text-center mb-4">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 font-bold text-red-500">Post Name</th>
            <th className="px-4 py-2 font-bold text-red-500">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">Gram Rozgar Sevak</td>
            <td className="px-4 py-2">88</td>
          </tr>
        </tbody>
      </table>
      <p className="text-center text-blue-500 font-bold mb-4">
        Interested Candidates Can Read the Full Notification Before Apply
      </p>
      <p className="text-center font-bold text-red-500 mb-4">Important Links</p>
      <table className="table-auto w-full text-center">
        <tbody>
          <tr>
            <td className="px-4 py-2 font-bold text-green-500">Notification</td>
            <td className="px-4 py-2">
              <a href="https://img.freejobalert.com/uploads/2024/08/Notification-ZP-Malkangiri-Gram-Rozgar-Sevak-Post-2024.pdf" target="_blank" rel="nofollow" className="text-blue-500">
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 font-bold text-green-500">Official Website</td>
            <td className="px-4 py-2">
              <a href="https://malkangiri.odisha.gov.in/" target="_blank" rel="nofollow" className="text-blue-500">
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 font-bold text-red-500">Buy Current Affairs Book (ENGLISH MEDIUM)</td>
            <td className="px-4 py-2">
              <a href="https://www.amazon.in/dp/B0DBQW76SJ/?smid=A5G76JX0GL72Y" target="_blank" rel="nofollow" className="text-blue-500">
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 font-bold text-red-500">Download Mobile App</td>
            <td className="px-4 py-2">
              <a href="https://play.google.com/store/apps/details?id=com.freejobalert" target="_blank" rel="nofollow" className="text-blue-500">
                Click Here
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}