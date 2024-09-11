export default function RecruitmentInfo() {
  // Displays recruitment information for DLSA, Gumla Para Legal Volunteer Offline Form 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        DLSA, Gumla Para Legal Volunteer Offline Form 2024
      </h1>
      <div className="mb-4">
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Name of the Post:</span>{' '}
          <span className="text-gray-600">
            DLSA, Gumla Para Legal Volunteer Offline Form 2024
          </span>
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Post Date:</span> 11-09-2024
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Total Vacancy:</span>{' '}
          <span className="text-gray-600">92</span>
        </p>
      </div>
      <p className="text-lg mb-4">
        <span className="text-red-500">Brief Information:</span> District Legal
        Service Authority (DLSA), Gumla has published a notification for the
        recruitment of Para Legal Volunteer Vacancy. Those Candidates who are
        interested in the vacancy details & completed all eligibility criteria
        can read the Notification & Apply.
      </p>
      <h2 className="text-2xl font-bold mb-4">Important Details</h2>
      <table className="table-auto w-full text-center mb-4">
        <thead>
          <tr>
            <th colSpan={2} className="text-red-500 font-bold p-2">
              District Legal Service Authority (DLSA), Gumla
            </th>
          </tr>
          <tr>
            <th colSpan={2} className="text-pink-500 font-bold p-2">
              Advt No. 03/2024
            </th>
          </tr>
          <tr>
            <th colSpan={2} className="text-green-500 font-bold p-2">
              Para Legal Volunteer Vacancy 2024
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={2} className="p-2">
              <ul>
                <li>
                  <span className="text-red-500 font-bold">
                    Last Date for Receipt of Application:
                  </span>{' '}
                  <strong>12-09-2024 (up to 05:00 PM)</strong>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="p-2">
              <span className="text-red-500 font-bold">Age Limit</span>
              <ul>
                <li>
                  Minimum Age Limit: <strong>18 Years</strong>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="p-2">
              <span className="text-red-500 font-bold">Qualification</span>
              <ul>
                <li>Candidates Should Possess 10th Class.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="p-2">
              <span className="text-red-500 font-bold">
                Vacancy Details
              </span>
            </td>
          </tr>
          <tr>
            <td className="p-2">
              <span className="text-pink-500 font-bold">Post Name</span>
            </td>
            <td className="p-2">
              <span className="text-pink-500 font-bold">Total</span>
            </td>
          </tr>
          <tr>
            <td className="p-2">
              <span className="text-green-500">
                <span className="text-gray-600">
                  Para Legal Volunteer
                </span>
              </span>
            </td>
            <td className="p-2">92</td>
          </tr>
          <tr>
            <td colSpan={2} className="p-2">
              <span className="text-blue-500 font-bold">
                Interested Candidates Can Read the Full Notification Before
                Apply
              </span>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="p-2">
              <span className="text-red-500 font-bold">
                Important Links
              </span>
            </td>
          </tr>
          <tr>
            <td className="p-2">
              <span className="text-green-500 font-bold">
                Notification
              </span>
            </td>
            <td className="p-2">
              <a
                className="text-blue-500 font-bold"
                href="https://img.freejobalert.com/uploads/2024/09/DLSA-Gumla-Para-Legal-Volunteer-Post.pdf"
                target="_blank"
                rel="nofollow"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="p-2">
              <span className="text-green-500 font-bold">
                Official Website
              </span>
            </td>
            <td className="p-2">
              <a
                className="text-blue-500 font-bold"
                href="https://gumla.dcourts.gov.in/"
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