export default function RecruitmentInformation() {
  // This component displays recruitment information for Anganwadi Worker and Helper positions,
  // extracted from HTML content. It includes title, post details, brief information, 
  // important dates, and vacancy details. 
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Anganwadi Worker & Helper Recruitment</h1>

      {/* Recruitment information section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">WCD, Gadag Anganwadi Worker & Helper Online Form 2024</h2>
        <p className="text-gray-600 mb-2">
          <span className="font-bold">Post Date:</span> 29-08-2024
        </p>
        <p className="text-gray-600 mb-2">
          <span className="font-bold">Total Vacancy: </span>45
        </p>
        <p className="text-gray-600 mb-4">
          <span className="font-bold">Brief Information: </span>Women & Child Development, Gadag has published a Notification for the recruitment of Anganwadi Worker & Anganwadi Helper Vacancy. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the notification & Apply Online.
        </p>

        {/* Important Dates table */}
        <table className="w-full table-auto border-collapse mb-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left py-2 px-4 font-bold">Important Dates</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 text-gray-600">Starting Date for Apply Online: 17-08-2024</td>
            </tr>
            <tr>
              <td className="py-2 px-4 text-gray-600">Last Date for Apply Online: 17-09-2024</td>
            </tr>
          </tbody>
        </table>

        {/* Vacancy Details table */}
        <table className="w-full table-auto border-collapse mb-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left py-2 px-4 font-bold">Post Name</th>
              <th className="text-left py-2 px-4 font-bold">Total</th>
              <th className="text-left py-2 px-4 font-bold">Qualification</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 text-gray-600">Anganwadi Worker</td>
              <td className="py-2 px-4 text-gray-600">05</td>
              <td className="py-2 px-4 text-gray-600">10th, 12th, ECCE Diploma, JOC, N.T.T. Courses from D.S.E.R.T</td>
            </tr>
            <tr>
              <td className="py-2 px-4 text-gray-600">Anganwadi Helper</td>
              <td className="py-2 px-4 text-gray-600">40</td>
              <td className="py-2 px-4 text-gray-600">10th Class</td>
            </tr>
          </tbody>
        </table>

        {/* Important Links table */}
        <table className="w-full table-auto border-collapse mb-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left py-2 px-4 font-bold">Important Links</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 text-gray-600">
                <a href="https://karnemakaone.kar.nic.in/abcd/ApplicationForm_JA_org.aspx" target="_blank" rel="nofollow" className="text-blue-500">Apply Online</a>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 text-gray-600">
                <a href="https://img.freejobalert.com/uploads/2024/08/Notification-WCD-Gadag-Anganwadi-Worker-Helper-Posts.pdf" target="_blank" rel="nofollow" className="text-blue-500">Notification</a>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 text-gray-600">
                <a href="https://karnemakaone.kar.nic.in/abcd/" target="_blank" rel="nofollow" className="text-blue-500">Official Website</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* More recruitment information sections - Repeat for each recruitment  */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">WCD, Vijayanagara Anganwadi Worker & Helper Offline Form 2024</h2>
        <p className="text-gray-600 mb-2">
          <span className="font-bold">Post Date:</span> 28-08-2024
        </p>
        <p className="text-gray-600 mb-2">
          <span className="font-bold">Total Vacancy: </span>297
        </p>
        <p className="text-gray-600 mb-4">
          <span className="font-bold">Brief Information: </span>Women & Child Development, Vijayanagara has given an employment Notification for the recruitment of Anganwadi Worker & Anganwadi Helper Vacancy. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the notification & Apply.
        </p>

        {/* Important Dates table */}
        <table className="w-full table-auto border-collapse mb-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left py-2 px-4 font-bold">Important Dates</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 text-gray-600">Starting Date for Apply Online: 12-08-2024</td>
            </tr>
            <tr>
              <td className="py-2 px-4 text-gray-600">Last Date for Apply Online: 12-09-2024</td>
            </tr>
          </tbody>
        </table>

        {/* Vacancy Details table */}
        <table className="w-full table-auto border-collapse mb-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left py-2 px-4 font-bold">Post Name</th>
              <th className="text-left py-2 px-4 font-bold">Total</th>
              <th className="text-left py-2 px-4 font-bold">Qualification</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 text-gray-600">Anganwadi Worker</td>
              <td className="py-2 px-4 text-gray-600">58</td>
              <td className="py-2 px-4 text-gray-600">10th, 12th, ECCE Diploma, JOC, N.T.T. Courses from D.S.E.R.T</td>
            </tr>
            <tr>
              <td className="py-2 px-4 text-gray-600">Anganwadi Helper</td>
              <td className="py-2 px-4 text-gray-600">239</td>
              <td className="py-2 px-4 text-gray-600">10th Class</td>
            </tr>
          </tbody>
        </table>

        {/* Important Links table */}
        <table className="w-full table-auto border-collapse mb-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left py-2 px-4 font-bold">Important Links</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 text-gray-600">
                <a href="https://karnemakaone.kar.nic.in/abcd/ApplicationForm_JA_org.aspx" target="_blank" rel="nofollow" className="text-blue-500">Application Form</a>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 text-gray-600">
                <a href="https://img.freejobalert.com/uploads/2024/08/Short-Notification-WCD-Vijayanagara-Anganwadi-Worker-Helper-Posts.png" target="_blank" rel="nofollow" className="text-blue-500">Notification - Link 1</a>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 text-gray-600">
                <a href="https://img.freejobalert.com/uploads/2024/08/Notification-WCD-Vijayanagara-Anganwadi-Worker-Helper-Posts.pdf" target="_blank" rel="nofollow" className="text-blue-500">Notification - Link 2</a>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 text-gray-600">
                <a href="https://karnemakaone.kar.nic.in/abcd/" target="_blank" rel="nofollow" className="text-blue-500">Official Website</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ... Repeat for remaining recruitment information sections ... */}
    </div>
  );
}