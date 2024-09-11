export default function RecruitmentInfo() {
  // Displays recruitment information for DLSA, Dumka Para Legal Volunteer Offline Form 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        DLSA, Dumka Para Legal Volunteer Offline Form 2024
      </h1>
      <div className="flex flex-col gap-2 mb-4">
        <p className="text-gray-700">
          <span className="font-bold text-green-500">Name of the Post:</span>{' '}
          DLSA, Dumka Para Legal Volunteer Offline Form 2024
        </p>
        <p className="text-gray-700">
          <span className="font-bold text-green-500">Post Date:</span>{' '}
          <strong>10-09-2024</strong>
        </p>
        <p className="text-gray-700">
          <span className="font-bold text-green-500">Total Vacancy:</span>{' '}
          <strong>96</strong>
        </p>
      </div>
      <p className="text-gray-700 mb-4">
        <span className="font-bold text-red-500">Brief Information:</span>{' '}
        District Legal Service Authority (DLSA), Dumka has invites an
        application for the recruitment of Para Legal Volunteer Vacancy. Those
        Candidates who are interested in the vacancy details & completed all
        eligibility criteria can read the Notification & Apply.
      </p>
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          District Legal Service Authority (DLSA), Dumka
        </h2>
        <p className="text-gray-700 text-center font-bold text-pink-500 mb-2">
          Advt No. 04/2024
        </p>
        <p className="text-gray-700 text-center font-bold text-green-500 mb-2">
          Para Legal Volunteer Vacancy 2024
        </p>
        <p className="text-gray-700 text-center">
          <a
            href="https://www.freejobalert.com"
            target="_blank"
            rel="noopener"
            className="text-blue-500 hover:underline"
          >
            
          </a>
        </p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-bold text-red-500 mb-2">Important Dates</h3>
        <ul className="list-disc ml-4">
          <li className="text-gray-700">
            Last Date for receipt of application: <strong>18-09-2024</strong>
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-bold text-red-500 mb-2">
          Age Limit (as on 01-09-2024)
        </h3>
        <ul className="list-disc ml-4">
          <li className="text-gray-700">
            Minimum Age Limit: <strong>18 Years</strong>
          </li>
          <li className="text-gray-700">
            Maximum Age Limit: <strong>50 Years</strong>
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-bold text-red-500 mb-2">Qualification</h3>
        <ul className="list-disc ml-4">
          <li className="text-gray-700">
            Candidates Should Possess 10th Class
          </li>
        </ul>
      </div>
      <table className="table-auto w-full text-center mb-4">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 font-bold text-gray-800">Post Name</th>
            <th className="px-4 py-2 font-bold text-gray-800">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white hover:bg-gray-100">
            <td className="px-4 py-2">Para Legal Volunteer</td>
            <td className="px-4 py-2">96</td>
          </tr>
        </tbody>
      </table>
      <p className="text-gray-700 text-center font-bold text-blue-500 mb-4">
        Interested Candidates Can Read the Full Notification Before Apply
      </p>
      <h3 className="text-xl font-bold text-red-500 mb-2">Important Links</h3>
      <table className="table-auto w-full text-center mb-4">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 font-bold text-gray-800">Link</th>
            <th className="px-4 py-2 font-bold text-gray-800">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white hover:bg-gray-100">
            <td className="px-4 py-2 text-green-500">Notification</td>
            <td className="px-4 py-2">
              <a
                href="https://img.freejobalert.com/uploads/2024/09/Notification-DLSA-Dumka-Para-Legal-Volunteer-Posts.pdf"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 hover:underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="bg-white hover:bg-gray-100">
            <td className="px-4 py-2 text-green-500">Official Website</td>
            <td className="px-4 py-2">
              <a
                href="https://dumka.dcourts.gov.in/"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 hover:underline"
              >
                Link 1
              </a>{' '}
              |{' '}
              <a
                href="https://jhalsa.org/dlsa_dumka"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 hover:underline"
              >
                Link 2
              </a>
            </td>
          </tr>
          <tr className="bg-white hover:bg-gray-100">
            <td className="px-4 py-2 text-pink-500">
              Buy Current Affairs Book (ENGLISH MEDIUM)
            </td>
            <td className="px-4 py-2">
              <a
                href="https://www.amazon.in/dp/B0DBQW76SJ/?smid=A5G76JX0GL72Y"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 hover:underline"
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