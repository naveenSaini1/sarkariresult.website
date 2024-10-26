export default function RecruitmentInformation() {
  // This component displays recruitment information for KSC Apex Bank Ltd Bank Assistant 2024.
  // It includes details such as post date, latest update, vacancy count, application fee,
  // important dates, age limit, qualification, and vacancy details.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">KSC Apex Bank Ltd Bank Assistant 2024 Recruitment</h1>
      <p className="text-lg mb-4">
        Karnataka State Co-Operative Apex Bank Ltd has announced the recruitment of Bank Assistants.
        This is a fantastic opportunity for individuals seeking a career in the banking sector.
      </p>

      <h2 className="text-2xl font-bold mb-2">Key Highlights</h2>
      <ul className="list-disc ml-4">
        <li>
          <span className="font-bold">Post Name:</span> KSC Apex Bank Ltd Bank Assistant
        </li>
        <li>
          <span className="font-bold">Total Vacancy:</span> 93
        </li>
        <li>
          <span className="font-bold">Post Date:</span> 15-03-2024
        </li>
        <li>
          <span className="font-bold">Latest Update:</span> 26-10-2024
        </li>
        <li>
          <span className="font-bold">Result Announced:</span> Yes (26-10-2024)
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-2">Application Fee</h2>
      <ul className="list-disc ml-4">
        <li>
          For Category-2A, 2B, 3A, 3B, General Candidates: Rs. 1000/- + GST
        </li>
        <li>
          For SC, ST, Category-1 Candidates: Rs. 500/- + GST
        </li>
        <li>
          Payment Mode: Through Online Mode
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-2">Important Dates</h2>
      <ul className="list-disc ml-4">
        <li>
          Starting Date for Apply Online: 07-03-2024
        </li>
        <li>
          Last Date for Apply Online: 06-04-2024 (till 5:30 PM)
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-2">Age Limit (as of 06-04-2024)</h2>
      <ul className="list-disc ml-4">
        <li>Minimum Age Limit: 18 Years</li>
        <li>Maximum Age Limit for General Candidates: 35 Years</li>
        <li>Maximum Age for OBC/EBC (Cat- 2A, 2B, 3A, 3B): 38 years</li>
        <li>For SC/ ST/ Category – I: 40 Years</li>
        <li>Age relaxation is applicable as per rules</li>
      </ul>

      <h2 className="text-2xl font-bold mb-2">Qualification</h2>
      <ul className="list-disc ml-4">
        <li>Candidates Should Possess Any Degree</li>
      </ul>

      <h2 className="text-2xl font-bold mb-2">Vacancy Details</h2>
      <table className="table-auto w-full text-center border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">
              <span className="font-bold">Post Name</span>
            </th>
            <th className="border border-gray-300 px-4 py-2">
              <span className="font-bold">Total</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Bank Assistant</td>
            <td className="border border-gray-300 px-4 py-2">93</td>
          </tr>
        </tbody>
      </table>

      <p className="text-lg mb-4">
        For more details and to apply online, please refer to the official notification.
      </p>

      <h2 className="text-2xl font-bold mb-2">Important Links</h2>
      <table className="table-auto w-full text-center border border-gray-300">
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">
              <span className="font-bold">Result (26-10-2024)</span>
            </td>
            <td className="border border-gray-300 px-4 py-2">
              <a
                href="https://karnatakaapex.com/new/images/2024/Apex-Bank-Result.pdf"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 hover:underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">
              <span className="font-bold">Apply Online</span>
            </td>
            <td className="border border-gray-300 px-4 py-2">
              <a
                href="https://www.emsecure.in/ApexBankApplication/index.html"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 hover:underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">
              <span className="font-bold">Notification</span>
            </td>
            <td className="border border-gray-300 px-4 py-2">
              <a
                href="https://www.emsecure.in/ApexBankApplication/Content/pdf/Apex_Notification.pdf"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 hover:underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">
              <span className="font-bold">Official Website</span>
            </td>
            <td className="border border-gray-300 px-4 py-2">
              <a
                href="https://karnatakaapex.com/new/index.php/en/"
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

      <p className="text-lg mt-4">
        This recruitment drive presents a valuable opportunity to join a reputable
        organization. Ensure you meet all eligibility criteria and submit your application
        before the deadline.
      </p>

      <h2 className="text-xl font-bold mt-4">Keywords</h2>
      <p className="text-lg">
        KSC Apex Bank, Bank Assistant, Recruitment, Karnataka, Banking, Jobs,
        Career, Apply Online, Notification, Result, Important Dates, Qualification
      </p>
    </div>
  );
}