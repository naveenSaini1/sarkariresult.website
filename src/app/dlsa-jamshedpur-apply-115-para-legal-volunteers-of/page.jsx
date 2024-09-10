export default function RecruitmentInformation() {
  // Displays recruitment information for DLSA, Jamshedpur Para Legal Volunteer Offline Form 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">
        DLSA, Jamshedpur Para Legal Volunteer Offline Form 2024
      </h1>
      <div className="flex justify-between mb-4">
        <p className="text-lg font-bold">
          <span className="text-green-500">Name of the Post:</span> DLSA,
          Jamshedpur Para Legal Volunteer Offline Form 2024
        </p>
        <p className="text-lg font-bold">
          <span className="text-green-500">Post Date:</span> 10-09-2024
        </p>
      </div>
      <div className="flex justify-between mb-4">
        <p className="text-lg font-bold">
          <span className="text-green-500">Total Vacancy:</span> 115
        </p>
      </div>
      <p className="text-lg mb-4">
        <span className="text-red-500 font-bold">Brief Information:</span> District
        Legal Service Authority (DLSA), Jamshedpur has given an employment
        notification for the recruitment of Para Legal Volunteer Vacancy. Those
        Candidates who are interested in the vacancy details & completed all
        eligibility criteria can read the Notification & Apply.
      </p>
      <div className="mb-4">
        <table className="w-full text-center border-collapse border border-gray-300">
          <thead>
            <tr>
              <th colSpan={2} className="p-2 font-bold text-red-500">
                District Legal Service Authority (DLSA), Jamshedpur
                <br/> Para Legal Volunteer Vacancy 2024
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th colSpan={2} className="p-2 font-bold text-red-500">
                Important Dates
              </th>
            </tr>
            <tr>
              <td colSpan={2} className="p-2">
                Last Date to Apply Receipt of Application: 13-09-2024 (04:30
                PM)
              </td>
            </tr>
            <tr>
              <th colSpan={2} className="p-2 font-bold text-red-500">
                Age Limit (as on 01-01-2024)
              </th>
            </tr>
            <tr>
              <td colSpan={2} className="p-2">
                Minimum Age: 18 Years
              </td>
            </tr>
            <tr>
              <th colSpan={2} className="p-2 font-bold text-red-500">
                Qualification
              </th>
            </tr>
            <tr>
              <td colSpan={2} className="p-2">
                Candidates Should Possess 10th Class.
              </td>
            </tr>
            <tr>
              <th colSpan={2} className="p-2 font-bold text-red-500">
                Vacancy Details
              </th>
            </tr>
            <tr>
              <th className="p-2 font-bold text-pink-500">Post Name</th>
              <th className="p-2 font-bold text-pink-500">Total</th>
            </tr>
            <tr>
              <td className="p-2">Para Legal Volunteer</td>
              <td className="p-2">115</td>
            </tr>
            <tr>
              <th colSpan={2} className="p-2 font-bold text-blue-500">
                Interested Candidates Can Read the Full Notification Before Apply
              </th>
            </tr>
            <tr>
              <th colSpan={2} className="p-2 font-bold text-red-500">
                Important Links
              </th>
            </tr>
            <tr>
              <td className="p-2 font-bold text-green-500">Notification</td>
              <td className="p-2">
                <a
                  className="text-blue-500 underline"
                  href="https://img.freejobalert.com/uploads/2024/09/Notificatio-DLSA-Jamshedpur-Para-Legal-Volunteer-Posts.pdf"
                  target="_blank"
                  rel="nofollow"
                >
                  Click Here
                </a>
              </td>
            </tr>
            <tr>
              <td className="p-2 font-bold text-green-500">Official Website</td>
              <td className="p-2">
                <a
                  className="text-blue-500 underline"
                  title="DLSA"
                  href="https://jhalsa.org/"
                  target="_blank"
                  rel="nofollow"
                >
                  Link 1
                </a>{" "}
                |{" "}
                <a
                  className="text-blue-500 underline"
                  href="https://jamshedpur.dcourts.gov.in/"
                  target="_blank"
                  rel="nofollow"
                >
                  Link 2
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}