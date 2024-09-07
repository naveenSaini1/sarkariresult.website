export default function RecruitmentInfo() {
  // This component displays recruitment information for SSC Constable GD 2025.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">SSC Constable GD 2025</h1>
      <div className="mb-4">
        <p className="font-bold text-green-500">Name of the Post:</p>
        <p>SSC Constable GD 2025 Online Form</p>
      </div>
      <div className="mb-4">
        <p className="font-bold text-green-500">Post Date:</p>
        <p>06-09-2024</p>
      </div>
      <div className="mb-4">
        <p className="font-bold text-green-500">Total Vacancy:</p>
        <p>39481</p>
      </div>
      <p className="font-bold text-red-500 mb-4">Brief Information:</p>
      <p>
        Staff Selection Commission (SSC) has published a notification for the
        recruitment of Constable (GD) in Central Armed Police Forces (CAPFs),
        SSF, and Rifleman (GD) in Assam Rifles Examination, 2025. Those
        Candidates who are interested in the vacancy details &amp; completed all
        eligibility criteria can read the Notification &amp; Apply Online.
      </p>
      <h2 className="text-2xl font-bold mb-4">Important Details</h2>
      <div className="mb-4">
        <p className="font-bold text-red-500">Application Fee</p>
        <ul className="list-disc pl-6">
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
        <p className="font-bold text-red-500">Important Dates</p>
        <ul className="list-disc pl-6">
          <li>Starting Date to Apply Online: <strong>05-09-2024</strong></li>
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
        <p className="font-bold text-red-500">Age Limit (as on 01-01-2025)</p>
        <ul className="list-disc pl-6">
          <li>Minimum Age: <strong>18 Years</strong></li>
          <li>Maximum Age: <strong>23 Years</strong></li>
          <li>
            Candidates should not have been born earlier than 02-01-2002 and
            later than 01-01-2007 in normal course.
          </li>
          <li>Age relaxation is applicable as per rules.</li>
        </ul>
      </div>
      <div className="mb-4">
        <p className="font-bold text-red-500">Qualification (as on 01-01-2025)</p>
        <ul className="list-disc pl-6">
          <li>
            Candidates should possess Matriculation or 10th Class Examination
            from a recognized Board/ University
          </li>
        </ul>
      </div>
      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>
      <table className="table-auto border-collapse border border-gray-300 w-full">
        <thead>
          <tr>
            <th
              colSpan={3}
              className="text-center border border-gray-300 px-4 py-2"
            >
              Force
            </th>
            <th className="text-center border border-gray-300 px-4 py-2">
              Male
            </th>
            <th className="text-center border border-gray-300 px-4 py-2">
              Female
            </th>
            <th
              colSpan={5}
              className="text-center border border-gray-300 px-4 py-2"
            >
              Grand Total
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td colSpan={3} className="border border-gray-300 px-4 py-2">
              BSF
            </td>
            <td className="border border-gray-300 px-4 py-2">13306</td>
            <td className="border border-gray-300 px-4 py-2">2348</td>
            <td colSpan={5} className="border border-gray-300 px-4 py-2">
              15654
            </td>
          </tr>
          <tr className="text-center">
            <td colSpan={3} className="border border-gray-300 px-4 py-2">
              CISF
            </td>
            <td className="border border-gray-300 px-4 py-2">6430</td>
            <td className="border border-gray-300 px-4 py-2">715</td>
            <td colSpan={5} className="border border-gray-300 px-4 py-2">
              7145
            </td>
          </tr>
          <tr className="text-center">
            <td colSpan={3} className="border border-gray-300 px-4 py-2">
              CRPF
            </td>
            <td className="border border-gray-300 px-4 py-2">11299</td>
            <td className="border border-gray-300 px-4 py-2">242</td>
            <td colSpan={5} className="border border-gray-300 px-4 py-2">
              11541
            </td>
          </tr>
          <tr className="text-center">
            <td colSpan={3} className="border border-gray-300 px-4 py-2">
              SSB
            </td>
            <td className="border border-gray-300 px-4 py-2">819</td>
            <td className="border border-gray-300 px-4 py-2">0</td>
            <td colSpan={5} className="border border-gray-300 px-4 py-2">
              819
            </td>
          </tr>
          <tr className="text-center">
            <td colSpan={3} className="border border-gray-300 px-4 py-2">
              ITBP
            </td>
            <td className="border border-gray-300 px-4 py-2">2564</td>
            <td className="border border-gray-300 px-4 py-2">453</td>
            <td colSpan={5} className="border border-gray-300 px-4 py-2">
              3017
            </td>
          </tr>
          <tr className="text-center">
            <td colSpan={3} className="border border-gray-300 px-4 py-2">
              AR
            </td>
            <td className="border border-gray-300 px-4 py-2">1148</td>
            <td className="border border-gray-300 px-4 py-2">100</td>
            <td colSpan={5} className="border border-gray-300 px-4 py-2">
              1248
            </td>
          </tr>
          <tr className="text-center">
            <td colSpan={3} className="border border-gray-300 px-4 py-2">
              SSF
            </td>
            <td className="border border-gray-300 px-4 py-2">35</td>
            <td className="border border-gray-300 px-4 py-2">0</td>
            <td colSpan={5} className="border border-gray-300 px-4 py-2">
              35
            </td>
          </tr>
          <tr className="text-center font-bold">
            <td colSpan={3} className="border border-gray-300 px-4 py-2">
              Total
            </td>
            <td className="border border-gray-300 px-4 py-2">11</td>
            <td className="border border-gray-300 px-4 py-2">11</td>
            <td colSpan={5} className="border border-gray-300 px-4 py-2">
              22
            </td>
          </tr>
        </tbody>
      </table>
      <p className="text-blue-500 mt-4">
        Interested Candidates Can Read the Full Notification Before Apply Online
      </p>
      <h2 className="text-2xl font-bold mb-4">Important Links</h2>
      <table className="table-auto border-collapse border border-gray-300 w-full">
        <tbody>
          <tr className="text-center">
            <td
              colSpan={2}
              className="border border-gray-300 px-4 py-2 text-green-500"
            >
              Tentative Vacancies
            </td>
            <td
              colSpan={8}
              className="border border-gray-300 px-4 py-2 text-blue-500"
            >
              <a
                href="https://img.freejobalert.com/uploads/2024/09/Tentative-Vacancy-SSC-Consatable-GD-2025.pdf"
                target="_blank"
                rel="nofollow"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="text-center">
            <td
              colSpan={2}
              className="border border-gray-300 px-4 py-2 text-green-500"
            >
              Apply Online
            </td>
            <td
              colSpan={8}
              className="border border-gray-300 px-4 py-2 text-blue-500"
            >
              <a href="https://ssc.gov.in/login" target="_blank" rel="nofollow">
                Click Here
              </a>
            </td>
          </tr>
          <tr className="text-center">
            <td
              colSpan={2}
              className="border border-gray-300 px-4 py-2 text-green-500"
            >
              Notification
            </td>
            <td
              colSpan={8}
              className="border border-gray-300 px-4 py-2 text-blue-500"
            >
              <a
                href="https://img.freejobalert.com/uploads/2024/09/Notification-SSC-Constable-GD-2025.pdf"
                target="_blank"
                rel="nofollow"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="text-center">
            <td
              colSpan={2}
              className="border border-gray-300 px-4 py-2 text-green-500"
            >
              Eligibility Details
            </td>
            <td
              colSpan={8}
              className="border border-gray-300 px-4 py-2 text-blue-500"
            >
              <a
                href="https://www.freejobalert.com/ssc-constable-eligibility/513389/"
                target="_blank"
                rel="noopener"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="text-center">
            <td
              colSpan={2}
              className="border border-gray-300 px-4 py-2 text-green-500"
            >
              Exam Pattern
            </td>
            <td
              colSpan={8}
              className="border border-gray-300 px-4 py-2 text-blue-500"
            >
              <a
                href="https://www.freejobalert.com/ssc-constable-exam-pattern/513461/"
                target="_blank"
                rel="noopener"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="text-center">
            <td
              colSpan={2}
              className="border border-gray-300 px-4 py-2 text-green-500"
            >
              Selection Process
            </td>
            <td
              colSpan={8}
              className="border border-gray-300 px-4 py-2 text-blue-500"
            >
              <a
                href="https://www.freejobalert.com/ssc-constable-selection-process/513451/"
                target="_blank"
                rel="noopener"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="text-center">
            <td
              colSpan={2}
              className="border border-gray-300 px-4 py-2 text-green-500"
            >
              Syllabus
            </td>
            <td
              colSpan={8}
              className="border border-gray-300 px-4 py-2 text-blue-500"
            >
              <a
                href="https://www.freejobalert.com/ssc-constable-syllabus/513433/"
                target="_blank"
                rel="noopener"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="text-center">
            <td
              colSpan={2}
              className="border border-gray-300 px-4 py-2 text-green-500"
            >
              Official Website
            </td>
            <td
              colSpan={8}
              className="border border-gray-300 px-4 py-2 text-blue-500"
            >
              <a href="https://ssc.gov.in/" target="_blank" rel="nofollow">
                Click Here
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}