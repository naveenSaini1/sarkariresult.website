export default function RecruitmentInformation() {
  // Displays recruitment information for DLSA, Chatra Para Legal Volunteer Offline Form 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">
        DLSA, Chatra Para Legal Volunteer Offline Form 2024
      </h1>
      <div className="flex justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold mb-2">Post Details</h2>
          <p className="mb-1">
            <span className="font-bold">Name of the Post: </span>
            DLSA, Chatra Para Legal Volunteer Offline Form 2024
          </p>
          <p className="mb-1">
            <span className="font-bold">Post Date: </span>
            10-09-2024
          </p>
          <p className="mb-1">
            <span className="font-bold">Total Vacancy: </span>
            57
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">Important Dates</h2>
          <ul className="list-disc pl-5">
            <li className="mb-1">
              Last Date for Receipt of Application: 17-09-2024 (up to 4:30)
            </li>
          </ul>
        </div>
      </div>
      <p className="mb-4">
        <span className="font-bold">Brief Information: </span>
        District Legal Service Authority (DLSA), Chatra has announced notification
        for the recruitment of Para Legal Volunteer Vacancy. Those Candidates
        who are interested in the vacancy details & completed all eligibility
        criteria can read the Notification & Apply.
      </p>
      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>
      <table className="table-auto w-full text-center border-collapse mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-gray-300">
              <span className="font-bold">Post Name</span>
            </th>
            <th className="px-4 py-2 border border-gray-300">
              <span className="font-bold">Total</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border border-gray-300">
              Para Legal Volunteer
            </td>
            <td className="px-4 py-2 border border-gray-300">57</td>
          </tr>
        </tbody>
      </table>
      <p className="mb-4">
        Interested Candidates Can Read the Full Notification Before Apply
      </p>
      <h2 className="text-2xl font-bold mb-4">Important Links</h2>
      <table className="table-auto w-full text-center border-collapse mb-4">
        <tbody>
          <tr>
            <td className="px-4 py-2 border border-gray-300">
              <span className="font-bold">Notification </span>
            </td>
            <td className="px-4 py-2 border border-gray-300">
              <a
                href="https://img.freejobalert.com/uploads/2024/09/Notification-DLSA-Chatra-Para-Legal-Volunteer-Posts.pdf"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">
              <span className="font-bold">Official Website</span>
            </td>
            <td className="px-4 py-2 border border-gray-300">
              <a
                href="https://chatra.dcourts.gov.in/"
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