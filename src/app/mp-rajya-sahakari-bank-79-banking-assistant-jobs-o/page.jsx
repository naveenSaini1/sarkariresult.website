export default function RecruitmentInformation() {
  // Displays recruitment information for MP Rajya Sahakari Bank Banking Assistant 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">MP Rajya Sahakari Bank Banking Assistant 2024</h1>

      <div className="mb-4">
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Name of the Post:</span> MP Rajya Sahakari Bank Banking Assistant 2024 Online Form
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Post Date:</span> 07-08-2024
        </p>
        <p className="text-lg font-medium">
          <span className="text-green-500">Total Vacancy:</span> 79
        </p>
      </div>

      <p className="mb-4">
        <span className="text-red-500 font-medium">Brief Information:</span> MP Rajya Sahakari Bank Mydt has published a Notification for the recruitment of Banking Assistant Vacancy. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply Online.
      </p>

      <h2 className="text-2xl font-bold mb-4">Important Details</h2>

      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Application Fee</h3>
        <ul className="list-disc pl-6">
          <li>For Others: <strong>Rs.1200/- (+18% GST)</strong></li>
          <li>for SC/ST/PwBD candidates: <strong>Rs.900/- (+18% GST)</strong></li>
          <li>Payment Mode (Online): <strong>Through Online (Debit Cards (RuPay/Visa/MasterCard/Maestro), Credit Cards, Internet Banking, IMPS, Cash Cards/ Mobile Wallets)</strong></li>
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Important Dates</h3>
        <ul className="list-disc pl-6">
          <li>Starting Date for Apply Online & Payment of Fee: <strong>06-08-2024</strong></li>
          <li>Last Date to Apply Online & Payment of Fee: <strong>05-09-2024</strong></li>
          <li>Date Of Exam: <strong>To be Announced</strong></li>
          <li>Date of Downloading Call Letters for online examination: <strong>Around 10 days before examination date</strong></li>
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Age Limit (05-09-2024)</h3>
        <ul className="list-disc pl-6">
          <li>Minimum Age Limit: <strong>18 Years</strong></li>
          <li>Maximum Age Limit: <strong>35 Years</strong></li>
          <li>A candidate must have been born not earlier than 06-09-1989 and after 05-09-2006</li>
          <li>The Age Relaxation is Applicable as per rules.</li>
          <li>For More Details Refer the Notification</li>
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Qualification</h3>
        <ul className="list-disc pl-6">
          <li>Candidate Should Possess Diploma, Degree, PG (CS/IT)</li>
          <li>For More Details Refer the Notification</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>

      <table className="table-auto w-full text-center mb-4">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2">Sl No</th>
            <th className="px-4 py-2">Post Name</th>
            <th className="px-4 py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">1</td>
            <td className="px-4 py-2">Banking Assistant</td>
            <td className="px-4 py-2">79</td>
          </tr>
        </tbody>
      </table>

      <p className="text-blue-500 mb-4">
        <strong>Interested Candidates Can Read the Full Notification Before Apply Online</strong>
      </p>

      <h2 className="text-2xl font-bold mb-4">Important Links</h2>

      <table className="table-auto w-full text-center mb-4">
        <tbody>
          <tr>
            <td className="px-4 py-2" colSpan={2}>
              <span className="text-green-500 font-medium">Apply Online</span>
            </td>
            <td className="px-4 py-2">
              <a href="https://ibpsonline.ibps.in/mprs79jun24/" target="_blank" rel="nofollow" className="text-blue-500">
                <strong>Click Here</strong>
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2" colSpan={2}>
              <span className="text-green-500 font-medium">Notification</span>
            </td>
            <td className="px-4 py-2">
              <a href="https://img.freejobalert.com/uploads/2024/08/Notification-MP-Rajya-Sahakari-Bank-Banking-Assistant-2024.pdf" target="_blank" rel="nofollow" className="text-blue-500">
                <strong>Click Here</strong>
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2" colSpan={2}>
              <span className="text-green-500 font-medium">Official Website</span>
            </td>
            <td className="px-4 py-2">
              <a href="https://eg.apexbank.in/index.php" target="_blank" rel="nofollow" className="text-blue-500">
                <strong>Click Here</strong>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}