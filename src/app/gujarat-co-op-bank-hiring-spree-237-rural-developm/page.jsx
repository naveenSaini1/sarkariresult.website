export default function RecruitmentInformation() {
  // Displays recruitment information for Gujarat State Co-Operative Agricultural & Rural Development Bank Ltd
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Gujarat State Co-Operative Agricultural & Rural Development Bank Ltd</h1>
      <h2 className="text-2xl font-bold mb-4 text-center">Various Vacancy 2024</h2>

      <div className="mb-4">
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Name of the Post:</span> Gujarat State Co-Operative Agricultural & Rural Development Bank Ltd Various Vacancy Offline Form 2024
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Post Date:</span> 26-07-2024
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Total Vacancy:</span> 237
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-red-500">Brief Information:</span> The Gujarat State Co-Operative Agricultural And Rural Development Bank Ltd has given a notification for the recruitment Assistant General Manager, Manager, Assistant Manager, Office Assistant & Other of vacancy. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">Application Fee</h3>
        <ul className="list-disc pl-5">
          <li>Fee for SI No. 1 to 6: <strong>Rs. 300/-</strong></li>
          <li>Fee for SI No. 7 & 8: <strong>Rs. 150/-</strong></li>
          <li>Payment Mode:&nbsp;<strong>Through QR code of the&nbsp;</strong><b>bank</b></li>
          <li>For More Details Refer Notification.</li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">Important Dates</h3>
        <ul className="list-disc pl-5">
          <li>Last Date for Receipt of Application: <strong>16-08-2024</strong></li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">Vacancy Details</h3>
        <table className="table-auto w-full text-center border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2">SI No</th>
              <th className="border px-4 py-2">Post Name</th>
              <th className="border px-4 py-2">Total</th>
              <th className="border px-4 py-2">Age Limit</th>
              <th className="border px-4 py-2">Qualification</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">1.</td>
              <td className="border px-4 py-2">Assistant General Manger</td>
              <td className="border px-4 py-2">04</td>
              <td className="border px-4 py-2">32 Years / 35 Years</td>
              <td className="border px-4 py-2">CA</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">2.</td>
              <td className="border px-4 py-2">Manager</td>
              <td className="border px-4 py-2">22</td>
              <td className="border px-4 py-2">32 Years</td>
              <td className="border px-4 py-2">Intermediate, CA, Any Degree/ MBA (HR)</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">3.</td>
              <td className="border px-4 py-2">Assistant Manager</td>
              <td className="border px-4 py-2">01</td>
              <td className="border px-4 py-2">35 Years</td>
              <td className="border px-4 py-2">MBA</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">4.</td>
              <td className="border px-4 py-2">Assistant Manager (IT)</td>
              <td className="border px-4 py-2">05</td>
              <td className="border px-4 py-2" rowSpan={3}>32 Years</td>
              <td className="border px-4 py-2">Computer Engineer/ Software Engineer/ MCA</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">5.</td>
              <td className="border px-4 py-2">Front Desk Officer Grade-A</td>
              <td className="border px-4 py-2">50</td>
              <td className="border px-4 py-2" rowSpan={2}>Any Degree, PGDCA/DCA/DCS/ccc+</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">6.</td>
              <td className="border px-4 py-2">Front Desk Officer Grade-B</td>
              <td className="border px-4 py-2">60</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">7.</td>
              <td className="border px-4 py-2">Technical Assistant (Driver)</td>
              <td className="border px-4 py-2">20</td>
              <td className="border px-4 py-2">40 Years</td>
              <td className="border px-4 py-2" rowSpan={2}>10th Pass</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">8.</td>
              <td className="border px-4 py-2">Office Assistant (Peon)</td>
              <td className="border px-4 py-2">75</td>
              <td className="border px-4 py-2">32 Years</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-blue-500 text-center mb-4">Interested Candidates Can Read the Full Notification Before Apply</p>

      <h3 className="text-xl font-bold mb-4">Important Links</h3>
      <div className="flex flex-col space-y-2">
        <a href="https://img.freejobalert.com/uploads/2024/07/Application-Form-The-Gujarat-State-Co-Operative-Agricultural-And-Rural-Development-Bank-Ltd-Various-Vacancy-2024.pdf" target="_blank" className="text-blue-500 hover:underline">
          <span className="text-green-500">Application Form</span>
        </a>
        <a href="https://img.freejobalert.com/uploads/2024/07/Notification-The-Gujarat-State-Co-Operative-Agricultural-And-Rural-Development-Bank-Ltd-Various-Vacancy-2024.pdf" target="_blank" className="text-blue-500 hover:underline">
          <span className="text-green-500">Notification</span>
        </a>
        <a href="https://khetibank.org/" target="_blank" className="text-blue-500 hover:underline">
          <span className="text-green-500">Official Website</span>
        </a>
      </div>
    </div>
  );
}