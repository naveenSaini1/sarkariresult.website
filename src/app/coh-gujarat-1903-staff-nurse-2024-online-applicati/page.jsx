export default function RecruitmentInformation() {
  // Displays recruitment information for COH, Gujarat Staff Nurse 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">COH, Gujarat Staff Nurse 2024</h1>
      <p className="text-lg mb-4">
        <strong className="text-green-500">Name of the Post:</strong> COH, Gujarat Staff Nurse 2024{" "}
        <strong className="text-blue-500">Online Form</strong>
      </p>
      <ul className="list-disc mb-4">
        <li>
          <strong className="text-green-500">Post Date:</strong> 07-10-2024
        </li>
        <li>
          <strong className="text-green-500">Total Vacancy:</strong> 1903
        </li>
      </ul>
      <p className="mb-4">
        <strong className="text-red-500">Brief Information:</strong> Commissioner of Health (COH), Gujarat has invites an
        application for the recruitment of Staff Nurse Vacancy. Those Candidates who are interested in the vacancy details &
        completed all eligibility criteria can read the Notification & Apply Online.
      </p>
      <div className="mb-4">
        {/* Placeholder for dynamic content */}
      </div>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <tbody>
          <tr>
            <td colSpan={2} className="text-center p-2">
              <p className="text-red-500 font-bold">Commissioner of Health (COH), Gujarat</p>
              <p className="text-pink-500 font-bold">Advt No. COH/202425/1</p>
              <p className="text-green-500 font-bold">Staff Nurse Vacancy 2024</p>
              <p className="text-center">
                <a
                  href="https://www.freejobalert.com"
                  target="_blank"
                  rel="noopener"
                  className="text-blue-500 hover:underline"
                >
                  
                </a>
              </p>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center p-2">
              <p className="text-red-500 font-bold">Application Fee</p>
              <ul className="list-disc">
                <li>For General Category Candidates: <strong className="text-black">Rs. 300/-</strong></li>
                <li>
                  For SC/ ST/SEBC/EWS/Hnadicapped & Ex-Servicemen Candidates: <strong className="text-black">Nil</strong>
                </li>
                <li>Payment Mode: <strong className="text-black">Through Online</strong></li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center p-2">
              <p className="text-red-500 font-bold">Important Dates</p>
              <ul className="list-disc">
                <li>Starting Date for Apply Online: <strong className="text-black">05-10-2024 (14:00 Hrs)</strong></li>
                <li>Last Date to Apply Online: <strong className="text-black">03-11-2024 (23:59 Hrs)</strong></li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center p-2">
              <p className="text-red-500 font-bold">Age Limit (as on 03-11-2024)</p>
              <ul className="list-disc">
                <li>Minimum Age Limit: <strong className="text-black">20 Years</strong></li>
                <li>Maximum Age Limit: <strong className="text-black">40 Years</strong></li>
                <li>Age relaxation is applicable as per rules.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center p-2">
              <p className="text-red-500 font-bold">Qualification</p>
              <ul className="list-disc">
                <li>Candidates Should Possess ANM, GNM, F.H.W or Diploma (GNM) or B.Sc Nursing.</li>
                <li>For More Details Refer the Notification.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center p-2">
              <p className="text-blue-500 font-bold">Vacancy Details</p>
            </td>
          </tr>
          <tr>
            <td className="text-center p-2">
              <p className="text-pink-500 font-bold">Post Name</p>
            </td>
            <td className="text-center p-2">
              <p className="text-pink-500 font-bold">Total</p>
            </td>
          </tr>
          <tr>
            <td className="text-center p-2">
              <p className="text-black">Staff Nurse</p>
            </td>
            <td className="text-center p-2">
              <p className="text-black">1903</p>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center p-2">
              <p className="text-blue-500 font-bold">
                Interested Candidates Can Read the Full Notification Before Apply Online
              </p>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center p-2">
              <p className="text-red-500 font-bold">Important Links</p>
            </td>
          </tr>
          <tr>
            <td className="text-center p-2">
              <p className="text-green-500 font-bold">Apply Online</p>
            </td>
            <td className="text-center p-2">
              <a
                href="https://ojas.gujarat.gov.in/AdvtList.aspx?type=lCxUjNjnTp8="
                target="_blank"
                rel="nofollow"
                className="text-blue-500 hover:underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="text-center p-2">
              <p className="text-green-500 font-bold">Notification</p>
            </td>
            <td className="text-center p-2">
              <a
                href="#"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 hover:underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="text-center p-2">
              <p className="text-green-500 font-bold">Official Website</p>
            </td>
            <td className="text-center p-2">
              <a
                href="https://ojas.gujarat.gov.in/"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 hover:underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          {/* Removed links for WhatsApp, Telegram, social media, and Play Store */}
        </tbody>
      </table>
    </div>
  );
}