export default function RecruitmentInformation() {
  // This component displays recruitment information for Zilla Parishad, Palghar Primary Teacher Vacancy. 
  // It includes details such as post name, important dates, vacancy details, and relevant links.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Zilla Parishad, Palghar Primary Teacher Vacancy 2024</h1>
      <p className="mb-4">
        <span className="font-bold text-green-500">Name of the Post:</span> Zilla Parishad, Palghar Primary Teacher Offline Form 2024
      </p>
      <p className="mb-4">
        <span className="font-bold text-green-500">Post Date: </span>
        <span className="text-gray-600">19-08-2024</span>
      </p>
      <p className="mb-4">
        <span className="font-bold text-green-500">Total Vacancy: </span>1891
      </p>
      <p className="mb-4">
        <span className="font-bold text-red-500">Brief Information:</span> Zilla Parishad, Palghar has given a notification for the recruitment of Primary Teacher Vacancy on a temporary contract basis. 
        Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply.
      </p>

      <table className="table-auto w-full mt-4 border-collapse border border-gray-300 text-center">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 font-bold text-gray-600" colSpan="2">
              <span className="text-red-500 font-bold">Zilla Parishad, Palghar</span>
            </th>
          </tr>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 font-bold text-gray-600" colSpan="2">
              <span className="font-bold text-green-500">Primary Teacher Vacancy 2024</span>
            </th>
          </tr>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 font-bold text-gray-600" colSpan="2">
              <span className="text-blue-500 font-bold"></span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 font-bold text-red-500" colSpan="2">Important Dates</th>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b border-gray-300">Starting Date for Receipt of Application:</td>
            <td className="px-4 py-2 border-b border-gray-300 font-bold">16-08-2024</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b border-gray-300">Last Date for Receipt of Application:</td>
            <td className="px-4 py-2 border-b border-gray-300 font-bold">23-08-2024</td>
          </tr>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 font-bold text-red-500" colSpan="2">Vacancy Details</th>
          </tr>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 font-bold text-blue-500">Post Name</th>
            <th className="px-4 py-2 font-bold text-blue-500">Total</th>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b border-gray-300">Primary Teacher</td>
            <td className="px-4 py-2 border-b border-gray-300">1891</td>
          </tr>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 font-bold text-blue-500" colSpan="2">Interested Candidates Can Read the Full Notification Before Apply</th>
          </tr>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 font-bold text-red-500" colSpan="2">Important Links</th>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b border-gray-300">Notification</td>
            <td className="px-4 py-2 border-b border-gray-300">
              <a href="https://img.freejobalert.com/uploads/2024/08/Notification-Zilla-Parishad-Palghar-Primary-Teacher-Posts.pdf" target="_blank" rel="nofollow" className="text-blue-500 font-bold">
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b border-gray-300">Official Website</td>
            <td className="px-4 py-2 border-b border-gray-300">
              <a href="https://www.zppalghar.gov.in/home" target="_blank" rel="nofollow" className="text-blue-500 font-bold">
                Click Here
              </a>
            </td>
          </tr>
          {/* Removed links to social media, Play Store, and the "Buy Current Affairs Book" link */}
        </tbody>
      </table>
    </div>
  );
}