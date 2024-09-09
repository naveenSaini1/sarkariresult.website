export default function RecruitmentInfo() {
  // Displays recruitment information for Office of the District Judge, Amritsar Clerk vacancy.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        Office of the District Judge, Amritsar Clerk Vacancy 2024
      </h1>
      <p className="text-lg mb-4">
        <span className="font-bold text-green-500">
          Name of the Post:
        </span>{' '}
        <span className="text-gray-700">
          Office of the District Judge, Amritsar Clerk Offline Form 2024
        </span>
      </p>
      <p className="text-lg mb-4">
        <span className="font-bold text-green-500">Post Date: </span>
        <span className="text-gray-700">05-08-2024</span>
      </p>
      <p className="text-lg mb-4">
        <span className="font-bold text-green-500">
          Total Vacancy:
        </span>{' '}
        <span className="text-gray-700">54</span>
      </p>
      <p className="text-lg mb-4">
        <span className="font-bold text-red-500">Brief Information: </span>
        <span className="text-gray-700">
          Office of the District Judge, Amritsar has given an employment
          notification for the recruitment of Clerk vacancy. Those Candidates
          who are interested in the vacancy details & completed all eligibility
          criteria can read the Notification & Apply.
        </span>
      </p>
      <h2 className="text-2xl font-bold mb-4">Important Details</h2>
      <div className="mb-4">
        <table className="table-auto w-full text-center border-collapse border border-gray-300">
          <tbody>
            <tr>
              <th
                colSpan={2}
                className="p-2 text-left font-bold text-red-500"
              >
                Important Dates
              </th>
            </tr>
            <tr>
              <td className="p-2 text-left">
                Last Date for Apply (Offline):
              </td>
              <td className="p-2 text-left">12-08-2024 (05:00 pm)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mb-4">
        <table className="table-auto w-full text-center border-collapse border border-gray-300">
          <tbody>
            <tr>
              <th
                colSpan={2}
                className="p-2 text-left font-bold text-red-500"
              >
                Age limit (as on 01-07-2024)
              </th>
            </tr>
            <tr>
              <td className="p-2 text-left">Minimum Age limit:</td>
              <td className="p-2 text-left">18 Years</td>
            </tr>
            <tr>
              <td className="p-2 text-left">Maximum Age limit:</td>
              <td className="p-2 text-left">37 Years</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mb-4">
        <table className="table-auto w-full text-center border-collapse border border-gray-300">
          <tbody>
            <tr>
              <th
                colSpan={2}
                className="p-2 text-left font-bold text-red-500"
              >
                Qualification
              </th>
            </tr>
            <tr>
              <td className="p-2 text-left">
                Candidates Should Posses B.A or B.Sc
              </td>
              <td className="p-2 text-left" />
            </tr>
            <tr>
              <td className="p-2 text-left" colSpan={2}>
                The Candidates Should have Passed Punjab Language as a subject in
                Matriculation Examination or Its Equivalent Standard and Having
                Proficiency in Operation of Computers.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>
      <table className="table-auto w-full text-center border-collapse border border-gray-300">
        <tbody>
          <tr>
            <th className="p-2 text-left font-bold text-pink-500">
              Post Name
            </th>
            <th className="p-2 text-left font-bold text-pink-500">
              Total
            </th>
          </tr>
          <tr>
            <td className="p-2 text-left">Clerk</td>
            <td className="p-2 text-left">54</td>
          </tr>
        </tbody>
      </table>
      <p className="text-lg mb-4 text-blue-500">
        Interested Candidates Can Read the Full Notification Before Apply
      </p>
      <h2 className="text-2xl font-bold mb-4">Important Links</h2>
      <table className="table-auto w-full text-center border-collapse border border-gray-300">
        <tbody>
          <tr>
            <td className="p-2 text-left font-bold text-green-500">
              Notification
            </td>
            <td className="p-2 text-left">
              <a
                href="https://img.freejobalert.com/uploads/2024/08/Notification-Office-of-the-District-Judge-Amritsar-Clerk-2024.pdf"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here
              </a>
            </td>
          </tr>
          <tr>
            <td className="p-2 text-left font-bold text-green-500">
              Official Website
            </td>
            <td className="p-2 text-left">
              <a
                href="https://amritsar.dcourts.gov.in/"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}