export default function RecruitmentInfo() {
  // This component displays recruitment information for the DLSA, Godda Para Legal Volunteer Offline Form 2024.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">DLSA, Godda Para Legal Volunteer Offline Form 2024</h1>
      <div className="mb-4">
        <p className="text-lg font-medium mb-1">
          <span className="text-green-500">Name of the Post:</span> DLSA, Godda Para Legal Volunteer Offline Form 2024
        </p>
        <p className="text-lg font-medium mb-1">
          <span className="text-green-500">Post Date: </span>10-09-2024
        </p>
        <p className="text-lg font-medium mb-1">
          <span className="text-green-500">Total Vacancy: </span>
          <span className="text-gray-600">86</span>
        </p>
      </div>
      <p className="text-lg mb-4">
        <span className="text-red-500 font-medium">Brief Information:</span> District Legal Service Authority (DLSA), Godda has invites an
        application for the recruitment of Para Legal Volunteer Vacancy. Those Candidates who are interested in the vacancy details &
        completed all eligibility criteria can read the Notification & Apply.
      </p>
      <table className="table-auto w-full border border-gray-300 mb-4">
        <tbody>
          <tr>
            <td colSpan={2} className="text-center py-2">
              <p className="text-red-500 font-bold">District Legal Service Authority (DLSA), Godda</p>
              <p className="text-pink-500 font-bold">Advt No. 02/2024</p>
              <p className="text-green-500 font-bold">Para Legal Volunteer Vacancy 2024</p>
              <p className="text-center">
                <a href="https://www.freejobalert.com" target="_blank" rel="noopener" className="text-blue-500">
                  
                </a>
              </p>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center py-2">
              <p className="text-red-500 font-bold">Application Fee</p>
              <ul className="list-disc pl-6">
                <li>
                  <span className="text-gray-600">For Gen/2A/2B/OBC: Rs. 100/-</span>
                </li>
                <li>
                  <span className="text-gray-600">For SC/ ST: Rs. 50/-</span>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center py-2">
              <p className="text-red-500 font-bold">Important Dates</p>
              <ul className="list-disc pl-6">
                <li>Starting Date for Apply: 07-09-2024</li>
                <li>Last Date for the receipt of application: 18-09-2024 (04:00 PM)</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center py-2">
              <p className="text-red-500 font-bold">Age Limit (as on 01-09-2024)</p>
              <ul className="list-disc pl-6">
                <li>
                  <span className="text-gray-600">Minimum Age Limit: 15 Years</span>
                </li>
                <li>
                  <span className="text-gray-600">Maximum Age Limit: 50 Years</span>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center py-2">
              <p className="text-red-500 font-bold">Qualification</p>
              <ul className="list-disc pl-6">
                <li>Candidates Should Possess 10th Class.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center py-2">
              <p className="text-red-500 font-bold">Vacancy Details</p>
            </td>
          </tr>
          <tr>
            <td className="text-center py-2">
              <p className="text-pink-500 font-bold">Post Name</p>
            </td>
            <td className="text-center py-2">
              <p className="text-pink-500 font-bold">Total</p>
            </td>
          </tr>
          <tr>
            <td className="text-center py-2">Para Legal Volunteer</td>
            <td className="text-center py-2">
              <span className="text-gray-600">86</span>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center py-2">
              <p className="text-blue-500 font-bold">Interested Candidates Can Read the Full Notification Before Apply</p>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center py-2">
              <p className="text-red-500 font-bold">Important Links</p>
            </td>
          </tr>
          <tr>
            <td className="text-center py-2">
              <p className="text-green-500 font-bold">Notification</p>
            </td>
            <td className="text-center py-2">
              <a
                href="https://img.freejobalert.com/uploads/2024/09/Notification-DLSA-Godda-Para-Legal-Volunteer-Posts.pdf"
                target="_blank"
                rel="nofollow"
                className="text-blue-500"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="text-center py-2">
              <p className="text-green-500 font-bold">Official Website</p>
            </td>
            <td className="text-center py-2">
              <a href="https://godda.dcourts.gov.in/" target="_blank" rel="nofollow" className="text-blue-500">
                Link 1
              </a>
              <span className="text-gray-600">|</span>
              <a href="https://jhalsa.org/" target="_blank" rel="nofollow" className="text-blue-500">
                Link 2
              </a>
            </td>
          </tr>
          <tr>
            <td className="text-center py-2">
              <p className="text-pink-500 font-bold">Buy Current Affairs Book (ENGLISH MEDIUM)</p>
            </td>
            <td className="text-center py-2">
              <a
                href="https://www.amazon.in/dp/B0DBQW76SJ/?smid=A5G76JX0GL72Y"
                target="_blank"
                rel="nofollow"
                className="text-blue-500"
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