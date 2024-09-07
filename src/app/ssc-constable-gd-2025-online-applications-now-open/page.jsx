export default function RecruitmentInfo() {
  // This component displays information about the SSC Constable GD 2025 recruitment.
  // It includes details on the post, application fees, important dates, eligibility criteria, and vacancy details.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">SSC Constable GD 2025 Recruitment</h1>
      <div className="mb-4">
        <p className="text-lg font-medium text-green-500 mb-2">Name of the Post:</p>
        <p>SSC Constable GD 2025 Online Form</p>
      </div>
      <div className="mb-4">
        <p className="text-lg font-medium text-green-500 mb-2">Post Date:</p>
        <p>06-09-2024</p>
      </div>
      <div className="mb-4">
        <p className="text-lg font-medium text-green-500 mb-2">Total Vacancy:</p>
        <p>39481</p>
      </div>
      <div className="mb-4">
        <p className="text-lg font-medium text-red-500 mb-2">Brief Information:</p>
        <p>
          Staff Selection Commission (SSC) has published a notification for the
          recruitment of Constable (GD) in Central Armed Police Forces (CAPFs),
          SSF, and Rifleman (GD) in Assam Rifles Examination, 2025. Those
          Candidates who are interested in the vacancy details &amp; completed
          all eligibility criteria can read the Notification &amp; Apply Online.
        </p>
      </div>
      <h2 className="text-2xl font-bold mb-4">Application Details</h2>
      <div className="mb-4">
        <p className="text-lg font-medium text-red-500 mb-2">Application Fee</p>
        <ul className="list-disc ml-6">
          <li>For all Candidates: <strong>Rs. 100/-</strong></li>
          <li>
            For Women/ SC/ ST/ Ex Serviceman Candidates: <strong>&nbsp;Nil</strong>
          </li>
          <li>
            Payment Mode: <strong>
              Through BHIM UPI, Net Banking, by using Visa, Mastercard, Maestro,
              RuPay Credit or Debit cards
            </strong>
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <p className="text-lg font-medium text-red-500 mb-2">Important Dates</p>
        <ul className="list-disc ml-6">
          <li>
            Starting Date to Apply Online: <strong>05-09-2024</strong>
          </li>
          <li>
            Last Date to Apply Online: <strong>14-10-2024&nbsp; (23:00) </strong>
          </li>
          <li>
            Last date and time for making online fee payment: <strong>
              15-10-2024 (23:00)
            </strong>
          </li>
          <li>
            Dates of ‘Window for Application Form Correction’ and online
            payment of Correction Charges: <strong>
              05-11-2024 to 07-11-2024 (23:00)
            </strong>
          </li>
          <li>
            Tentative Schedule of Computer Based Examination: <strong>
              January – February 2025
            </strong>
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <p className="text-lg font-medium text-red-500 mb-2">
          Age Limit (as on 01-01-2025)
        </p>
        <ul className="list-disc ml-6">
          <li>Minimum Age:&nbsp;<strong>18 Years</strong></li>
          <li>Maximum Age:&nbsp;<strong>23 Years</strong></li>
          <li>
            Candidates should not have been born earlier than 02-01-2002 and
            later than 01-01-2007 in normal course.
          </li>
          <li>Age relaxation is applicable as per rules.</li>
        </ul>
      </div>
      <div className="mb-4">
        <p className="text-lg font-medium text-red-500 mb-2">
          Qualification (as on 01-01-2025)
        </p>
        <ul className="list-disc ml-6">
          <li>
            Candidates should possess Matriculation or 10th Class Examination
            from a recognized Board/ University
          </li>
        </ul>
      </div>
      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>
      <table className="table-auto w-full text-center border-collapse border border-gray-300">
        <thead>
          <tr>
            <th
              className="py-2 px-4 border border-gray-300"
              colSpan="3"
            >
              <span className="text-red-500">Force</span>
            </th>
            <th className="py-2 px-4 border border-gray-300">
              <span className="text-red-500">Male</span>
            </th>
            <th className="py-2 px-4 border border-gray-300">
              <span className="text-red-500">Female</span>
            </th>
            <th
              className="py-2 px-4 border border-gray-300"
              colSpan="5"
            >
              <span className="text-red-500">Grand Total</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-gray-300">
            <td
              className="py-2 px-4 border border-gray-300"
              colSpan="3"
            >
              BSF
            </td>
            <td className="py-2 px-4 border border-gray-300">13306</td>
            <td className="py-2 px-4 border border-gray-300">2348</td>
            <td
              className="py-2 px-4 border border-gray-300"
              colSpan="5"
            >
              15654
            </td>
          </tr>
          <tr className="border-t border-gray-300">
            <td
              className="py-2 px-4 border border-gray-300"
              colSpan="3"
            >
              CISF
            </td>
            <td className="py-2 px-4 border border-gray-300">6430</td>
            <td className="py-2 px-4 border border-gray-300">715</td>
            <td
              className="py-2 px-4 border border-gray-300"
              colSpan="5"
            >
              7145
            </td>
          </tr>
          <tr className="border-t border-gray-300">
            <td
              className="py-2 px-4 border border-gray-300"
              colSpan="3"
            >
              CRPF
            </td>
            <td className="py-2 px-4 border border-gray-300">11299</td>
            <td className="py-2 px-4 border border-gray-300">242</td>
            <td
              className="py-2 px-4 border border-gray-300"
              colSpan="5"
            >
              11541
            </td>
          </tr>
          <tr className="border-t border-gray-300">
            <td
              className="py-2 px-4 border border-gray-300"
              colSpan="3"
            >
              SSB
            </td>
            <td className="py-2 px-4 border border-gray-300">819</td>
            <td className="py-2 px-4 border border-gray-300">0</td>
            <td
              className="py-2 px-4 border border-gray-300"
              colSpan="5"
            >
              819
            </td>
          </tr>
          <tr className="border-t border-gray-300">
            <td
              className="py-2 px-4 border border-gray-300"
              colSpan="3"
            >
              ITBP
            </td>
            <td className="py-2 px-4 border border-gray-300">2564</td>
            <td className="py-2 px-4 border border-gray-300">453</td>
            <td
              className="py-2 px-4 border border-gray-300"
              colSpan="5"
            >
              3017
            </td>
          </tr>
          <tr className="border-t border-gray-300">
            <td
              className="py-2 px-4 border border-gray-300"
              colSpan="3"
            >
              AR
            </td>
            <td className="py-2 px-4 border border-gray-300">1148</td>
            <td className="py-2 px-4 border border-gray-300">100</td>
            <td
              className="py-2 px-4 border border-gray-300"
              colSpan="5"
            >
              1248
            </td>
          </tr>
          <tr className="border-t border-gray-300">
            <td
              className="py-2 px-4 border border-gray-300"
              colSpan="3"
            >
              SSF
            </td>
            <td className="py-2 px-4 border border-gray-300">35</td>
            <td className="py-2 px-4 border border-gray-300">0</td>
            <td
              className="py-2 px-4 border border-gray-300"
              colSpan="5"
            >
              35
            </td>
          </tr>
          <tr className="border-t border-gray-300">
            <td
              className="py-2 px-4 border border-gray-300 font-bold"
              colSpan="3"
            >
              Total
            </td>
            <td className="py-2 px-4 border border-gray-300">11</td>
            <td className="py-2 px-4 border border-gray-300">11</td>
            <td
              className="py-2 px-4 border border-gray-300 font-bold"
              colSpan="5"
            >
              22
            </td>
          </tr>
        </tbody>
      </table>
      <p className="text-blue-500 mt-4">
        Interested Candidates Can Read the Full Notification Before Apply Online
      </p>
      <h2 className="text-2xl font-bold mb-4">Important Links</h2>
      <table className="table-auto w-full text-center border-collapse border border-gray-300">
        <tbody>
          <tr className="border-t border-gray-300">
            <td
              className="py-2 px-4 border border-gray-300"
              colSpan="2"
            >
              <span className="text-green-500">Tentative Vacancies</span>
            </td>
            <td
              className="py-2 px-4 border border-gray-300"
              colSpan="8"
            >
              <a
                className="text-blue-500"
                href="https://img.freejobalert.com/uploads/2024/09/Tentative-Vacancy-SSC-Consatable-GD-2025.pdf"
                target="_blank"
                rel="noopener"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="border-t border-gray-300">
            <td
              className="py-2 px-4 border border-gray-300"
              colSpan="2"
            >
              <span className="text-green-500">Apply Online</span>
            </td>
            <td
              className="py-2 px-4 border border-gray-300"
              colSpan="8"
            >
              <a
                className="text-blue-500"
                href="https://ssc.gov.in/login"
                target="_blank"
                rel="noopener"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="border-t border-gray-300">
            <td
              className="py-2 px-4 border border-gray-300"
              colSpan="2"
            >
              <span className="text-green-500">Notification</span>
            </td>
            <td
              className="py-2 px-4 border border-gray-300"
              colSpan="8"
            >
              <a
                className="text-blue-500"
                href="https://img.freejobalert.com/uploads/2024/09/Notification-SSC-Constable-GD-2025.pdf"
                target="_blank"
                rel="noopener"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="border-t border-gray-300">
            <td
              className="py-2 px-4 border border-gray-300"
              colSpan="2"
            >
              <span className="text-green-500">Eligibility Details</span>
            </td>
            <td
              className="py-2 px-4 border border-gray-300"
              colSpan="8"
            >
              <a
                className="text-blue-500"
                href="https://www.freejobalert.com/ssc-constable-eligibility/513389/"
                target="_blank"
                rel="noopener"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="border-t border-gray-300">
            <td
              className="py-2 px-4 border border-gray-300"
              colSpan="2"
            >
              <span className="text-green-500">Exam Pattern</span>
            </td>
            <td
              className="py-2 px-4 border border-gray-300"
              colSpan="8"
            >
              <a
                className="text-blue-500"
                href="https://www.freejobalert.com/ssc-constable-exam-pattern/513461/"
                target="_blank"
                rel="noopener"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="border-t border-gray-300">
            <td
              className="py-2 px-4 border border-gray-300"
              colSpan="2"
            >
              <span className="text-green-500">Selection Process</span>
            </td>
            <td
              className="py-2 px-4 border border-gray-300"
              colSpan="8"
            >
              <a
                className="text-blue-500"
                href="https://www.freejobalert.com/ssc-constable-selection-process/513451/"
                target="_blank"
                rel="noopener"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="border-t border-gray-300">
            <td
              className="py-2 px-4 border border-gray-300"
              colSpan="2"
            >
              <span className="text-green-500">Syllabus</span>
            </td>
            <td
              className="py-2 px-4 border border-gray-300"
              colSpan="8"
            >
              <a
                className="text-blue-500"
                href="https://www.freejobalert.com/ssc-constable-syllabus/513433/"
                target="_blank"
                rel="noopener"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="border-t border-gray-300">
            <td
              className="py-2 px-4 border border-gray-300"
              colSpan="2"
            >
              <span className="text-green-500">Official Website</span>
            </td>
            <td
              className="py-2 px-4 border border-gray-300"
              colSpan="8"
            >
              <a
                className="text-blue-500"
                href="https://ssc.gov.in/"
                target="_blank"
                rel="noopener"
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