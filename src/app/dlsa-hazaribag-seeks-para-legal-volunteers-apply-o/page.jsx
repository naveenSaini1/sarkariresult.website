export default function RecruitmentInformation() {
  // This component displays recruitment information for the DLSA, Hazaribag Para Legal Volunteer position.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        DLSA, Hazaribag Para Legal Volunteer Offline Form 2024
      </h1>
      <div className="mb-4">
        <p className="font-bold">
          <span className="text-green-500">Name of the Post:</span>{' '}
          <span className="text-gray-700">
            DLSA, Hazaribag Para Legal Volunteer Offline Form 2024
          </span>
        </p>
        <p className="text-justify font-bold">
          <span className="text-green-500">Post Date:</span> 10-09-2024
        </p>
        <p className="text-justify font-bold">
          <span className="text-green-500">Total Vacancy:</span>{' '}
          <span className="text-gray-700">155</span>
        </p>
      </div>
      <p className="text-justify font-bold mb-4">
        <span className="text-red-500">Brief Information:</span>{' '}
        <span className="text-gray-700">
          District Legal Service Authority (DLSA), Hazaribag has published a
          notification for the recruitment of Para Legal Volunteer Vacancy. Those
          Candidates who are interested in the vacancy details & completed all
          eligibility criteria can read the Notification & Apply.
        </span>
      </p>
      <table className="table-auto w-full border-collapse border border-gray-300 mb-4">
        <thead>
          <tr>
            <th
              colSpan={2}
              className="text-center font-bold text-red-500 border border-gray-300 p-2"
            >
              District Legal Service Authority (DLSA), Hazaribag
            </th>
          </tr>
          <tr>
            <th
              colSpan={2}
              className="text-center font-bold text-pink-500 border border-gray-300 p-2"
            >
              Advt No. 01/2024
            </th>
          </tr>
          <tr>
            <th
              colSpan={2}
              className="text-center font-bold text-green-500 border border-gray-300 p-2"
            >
              Para Legal Volunteer Vacancy 2024
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              colSpan={2}
              className="text-center font-bold text-red-500 border border-gray-300 p-2"
            >
              Important Dates
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="border border-gray-300 p-2">
              <ul>
                <li className="font-bold">
                  Starting Date for Receipt of Application: 06-09-2024
                </li>
                <li className="font-bold">
                  Last Date for Receipt of Application: 17-09-2024
                </li>
                <li className="font-bold">
                  Date of Walk in Interview: 20, 21, 22-09-2024
                </li>
                <li>
                  Application Submission Time during Office hours from 10:30 AM
                  to 05:00 PM
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td
              colSpan={2}
              className="text-center font-bold text-red-500 border border-gray-300 p-2"
            >
              Age Limit (as on 01-01-2024)
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="border border-gray-300 p-2">
              <ul>
                <li>Minimum Age Limit: 18 Years</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td
              colSpan={2}
              className="text-center font-bold text-red-500 border border-gray-300 p-2"
            >
              Qualification
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="border border-gray-300 p-2">
              <ul>
                <li>Candidates Should Possess 10th Class</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td
              colSpan={2}
              className="text-center font-bold text-red-500 border border-gray-300 p-2"
            >
              Vacancy Details
            </td>
          </tr>
          <tr>
            <td
              className="text-center font-bold text-pink-500 border border-gray-300 p-2"
            >
              Post Name
            </td>
            <td
              className="text-center font-bold text-pink-500 border border-gray-300 p-2"
            >
              Total
            </td>
          </tr>
          <tr>
            <td
              className="text-center text-green-500 border border-gray-300 p-2"
            >
              Para Legal Volunteer
            </td>
            <td className="text-center border border-gray-300 p-2">
              155
            </td>
          </tr>
          <tr>
            <td
              colSpan={2}
              className="text-center font-bold text-blue-500 border border-gray-300 p-2"
            >
              Interested Candidates Can Read the Full Notification Before Apply
            </td>
          </tr>
          <tr>
            <td
              colSpan={2}
              className="text-center font-bold text-red-500 border border-gray-300 p-2"
            >
              Important Links
            </td>
          </tr>
          <tr>
            <td
              className="text-center font-bold text-green-500 border border-gray-300 p-2"
            >
              Detail Notification
            </td>
            <td className="text-center border border-gray-300 p-2">
              <a
                href="https://img.freejobalert.com/uploads/2024/09/Detail-Notification-DLSA-Hazaribag-Para-Legal-Volunteer-Posts.pdf"
                className="text-blue-500 underline"
                target="_blank"
                rel="nofollow"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td
              className="text-center font-bold text-green-500 border border-gray-300 p-2"
            >
              Short Notification
            </td>
            <td className="text-center border border-gray-300 p-2">
              <a
                href="https://img.freejobalert.com/uploads/2024/09/Short-Notification-DLSA-Hazaribag-Para-Legal-Volunteer-Posts.pdf"
                className="text-blue-500 underline"
                target="_blank"
                rel="nofollow"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td
              className="text-center font-bold text-green-500 border border-gray-300 p-2"
            >
              Official Website
            </td>
            <td className="text-center border border-gray-300 p-2">
              <a
                href="https://ramgarh.dcourts.gov.in/"
                className="text-blue-500 underline"
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