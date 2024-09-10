export default function RecruitmentInfo() {
  // This component displays recruitment information for DLSA, Bokaro Para Legal Volunteer Offline Form 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">
        DLSA, Bokaro Para Legal Volunteer Offline Form 2024
      </h1>
      <div className="flex justify-between mb-4">
        <p className="text-lg font-medium text-green-500">
          Name of the Post: DLSA, Bokaro Para Legal Volunteer Offline Form 2024
        </p>
        <p className="text-lg font-medium">Post Date: 10-09-2024</p>
      </div>
      <div className="flex justify-between mb-4">
        <p className="text-lg font-medium text-green-500">
          Total Vacancy: 107
        </p>
      </div>
      <p className="text-lg mb-4">
        <span className="font-bold text-red-500">Brief Information:</span> District
        Legal Service Authority (DLSA), Bokaro has invites an application for the
        recruitment of Para Legal Volunteer Vacancy. Those Candidates who are
        interested in the vacancy details & completed all eligibility criteria
        can read the Notification & Apply.
      </p>
      <table className="table-auto w-full border-collapse border-2 border-gray-300 mb-4">
        <thead>
          <tr>
            <th
              colSpan="2"
              className="text-center font-bold text-red-500 py-2 px-4"
            >
              District Legal Service Authority (DLSA), Bokaro
            </th>
          </tr>
          <tr>
            <th
              colSpan="2"
              className="text-center font-bold text-green-500 py-2 px-4"
            >
              Para Legal Volunteer Vacancy 2024
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="2" className="text-center py-2 px-4">
              <a
                href="https://www.freejobalert.com"
                target="_blank"
                className="underline text-blue-500"
              >
                
              </a>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="text-center py-2 px-4">
              <span className="font-bold text-red-500">Important Dates</span>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="py-2 px-4">
              <ul>
                <li>
                  Last Date for receipt of application:
                  <strong>17-09-2024</strong>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="text-center py-2 px-4">
              <span className="font-bold text-red-500">Age Limit</span>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="py-2 px-4">
              <ul>
                <li>Minimum Age Limit: <strong>18 Years</strong></li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="text-center py-2 px-4">
              <span className="font-bold text-red-500">Qualification</span>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="py-2 px-4">
              <ul>
                <li>Candidates Should Possess 10th Class.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="text-center py-2 px-4">
              <span className="font-bold text-red-500">Vacancy Details</span>
            </td>
          </tr>
          <tr>
            <th className="text-center font-bold text-pink-500 py-2 px-4">
              Post Name
            </th>
            <th className="text-center font-bold text-pink-500 py-2 px-4">
              Total
            </th>
          </tr>
          <tr>
            <td className="text-center py-2 px-4">Para Legal Volunteer</td>
            <td className="text-center py-2 px-4">107</td>
          </tr>
          <tr>
            <td colSpan="2" className="text-center py-2 px-4">
              <span className="font-bold text-blue-500">
                Interested Candidates Can Read the Full Notification Before Apply
              </span>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="text-center py-2 px-4">
              <span className="font-bold text-red-500">Important Links</span>
            </td>
          </tr>
          <tr>
            <td className="text-center py-2 px-4">
              <span className="font-bold text-green-500">Notification</span>
            </td>
            <td className="text-center py-2 px-4">
              <a
                href="https://img.freejobalert.com/uploads/2024/09/Notification-DLSA-Bokaro-Para-Legal-Volunteer-Posts.pdf"
                target="_blank"
                className="underline text-blue-500"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="text-center py-2 px-4">
              <span className="font-bold text-green-500">Official Website</span>
            </td>
            <td className="text-center py-2 px-4">
              <a
                href="https://bokaro.dcourts.gov.in/document-category/notification/#"
                target="_blank"
                className="underline text-blue-500"
              >
                Link 1
              </a>{" "}
              |{" "}
              <a
                href="https://jhalsa.org/dlsa_bokaro"
                target="_blank"
                className="underline text-blue-500"
              >
                Link 2
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}