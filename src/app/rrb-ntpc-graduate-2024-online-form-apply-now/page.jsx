export default function RRBRecruitmentInfo() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6 text-blue-800">
        RRB NTPC (Graduate) Recruitment 2024
      </h1>

      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6">
        <p className="font-bold">Important Announcement:</p>
        <p>
          Railway Recruitment Board has released 8,113 NTPC Graduate vacancies
          for 2024.
        </p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">
          Key Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <p className="font-bold text-blue-600">Recruitment Name:</p>
            <p>RRB NTPC (Graduate) 2024</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p className="font-bold text-blue-600">Application Dates:</p>
            <p>14-09-2024 to 13-10-2024</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p className="font-bold text-blue-600">Total Vacancies:</p>
            <p>8,113 Positions</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p className="font-bold text-blue-600">Location:</p>
            <p>Pan India (21 RRB Regions)</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">
          Vacancy Details
        </h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-100">
              <th className="border border-gray-300 p-2">Post Name</th>
              <th className="border border-gray-300 p-2">Total Vacancies</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">
                Commercial cum Ticket Supervisor
              </td>
              <td className="border border-gray-300 p-2 text-center">1736</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">Station Master</td>
              <td className="border border-gray-300 p-2 text-center">994</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">
                Goods Train Manager
              </td>
              <td className="border border-gray-300 p-2 text-center">3144</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">
                Junior Account Assistant cum Typist
              </td>
              <td className="border border-gray-300 p-2 text-center">1507</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">
                Senior Clerk cum Typist
              </td>
              <td className="border border-gray-300 p-2 text-center">732</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">
          Application Fee
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            For all candidates: <span className="font-bold">Rs. 500/-</span>
          </li>
          <li>
            For SC/ST/Ex-Servicemen/Female/Transgender/Minorities/EBC:{" "}
            <span className="font-bold">Rs. 250/-</span>
          </li>
          <li>
            Payment Mode: <span className="font-bold">Online</span>
          </li>
        </ul>
        <p className="mt-2 text-sm text-gray-600">
          Note: Fee refund available on appearing for CBT, subject to
          conditions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">
          Age Limit (as on 01-01-2025)
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Minimum Age: <span className="font-bold">18 Years</span>
          </li>
          <li>
            Maximum Age: <span className="font-bold">36 Years</span>
          </li>
          <li>Age relaxation applicable as per rules</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">
          Important Links
        </h2>
        <div className="space-y-2">
          <p>
            <span className="font-bold text-blue-600">Apply Online:</span>{" "}
            Available from 14-09-2024
          </p>
          <p>
            <span className="font-bold text-blue-600">
              Detailed Notification:
            </span>{" "}
            Available from 14-09-2024
          </p>
          <p>
            <span className="font-bold text-blue-600">Official Website:</span>{" "}
            <a
              href="https://indianrailways.gov.in/railwayboard/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Click Here
            </a>
            
          </p>
        </div>
        <div className="mb-4">
          <p className="font-bold text-green-500 mb-1">Short Notification</p>
          <a
            href="https://img.freejobalert.com/uploads/2024/09/Notification-RRB-NTPC-Grduate-and-Undergraduate-Posts-2024.pdf"
            target="_blank"
            rel="nofollow"
            className="text-blue-500 underline"
          >
            Click Here
          </a>
        </div>

        <div className="mb-4">
          <p className="font-bold text-green-500 mb-1">Syllabus</p>
          <a
            href="https://www.freejobalert.com/rrb-ntpc-syllabus/774299/"
            target="_blank"
            rel="noopener"
            className="text-blue-500 underline"
          >
            Click Here
          </a>
        </div>
      </section>
    </div>
  );
}
