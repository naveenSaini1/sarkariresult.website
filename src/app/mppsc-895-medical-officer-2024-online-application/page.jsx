export default function RecruitmentInformation() {
  // Displays recruitment information for MPPSC Medical Officer 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">MPPSC Medical Officer Recruitment 2024</h1>
      <div className="mb-4">
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Name of the Post:</span> MPPSC Medical Officer 2024 Online Form
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Post Date:</span> <span className="font-bold">10-08-2024</span>
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Latest Update:</span> 04-09-2024
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Total Vacancy:</span> <span className="font-bold">895</span>
        </p>
      </div>
      <p className="text-lg mb-4">
        <span className="text-red-500 font-bold">Brief Information:</span> Madhya Pradesh Public Service Commission (MPPSC) has given a Notification for the recruitment of Medical Officer Vacancy. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply Online.
      </p>
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Application Fee</h2>
        <ul className="list-disc pl-5">
          <li>For All Others & candidates resident outside of MP State: <span className="font-bold">Rs. 500/-</span></li>
          <li>For SC, ST, OBC (non-creamy layer), EWS & PwD Candidates of MP State: <span className="font-bold">Rs. 250/-</span></li>
          <li>Portal Fee: <span className="font-bold">Rs. 40/-</span></li>
          <li>Payment mode: <span className="font-bold">Through Online</span></li>
          <li>For More Details regarding fee refer the notification</li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Important Dates</h2>
        <ul className="list-disc pl-5">
          <li>Date of Notification: <span className="font-bold">08-08-2024</span></li>
          <li>Starting Date to Apply Online & Payment of Fee: <span className="font-bold">30-08-2024 (12:00 Noon)</span></li>
          <li>Last Date to Apply Online & Payment of Fee: <span className="font-bold">29-09-2024 (12:00 Noon)</span></li>
          <li>Last Date for Receipt of Hard Copy: <span className="font-bold">04-10-2024</span></li>
          <li>Dates for Error Corrections in Applications (Rs.50/-): <span className="font-bold">03-09-2024 to 01-10-2024 (12:00 Noon)</span></li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Age Limit (as on 01-01-2025)</h2>
        <ul className="list-disc pl-5">
          <li>Minimum Age Limit: <span className="font-bold">21 Years</span></li>
          <li>Maximum Age Limit: <span className="font-bold">40 Years</span></li>
          <li>Age Relaxation Applicable as per Rules.</li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Educational Qualification</h2>
        <ul className="list-disc pl-5">
          <li><span className="text-red-500">Candidates should posses M.B.B.S.</span></li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Vacancy Details</h2>
        <table className="table-auto w-full text-center mb-4">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-blue-500 font-bold">Post Name</th>
              <th className="border border-gray-300 px-4 py-2 text-blue-500 font-bold">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Medical Officer</td>
              <td className="border border-gray-300 px-4 py-2">895</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-lg mb-4">
        <span className="text-blue-500 font-bold">Interested Candidates Can Read the Full Notification Before Apply Online</span>
      </p>
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Important Links</h2>
        <table className="table-auto w-full text-center mb-4">
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2 text-green-500 font-bold">Online Apply Dates (04-09-2024)</td>
              <td className="border border-gray-300 px-4 py-2"><a href="https://mppsc.mp.gov.in/advertisement/view/ZGVQcVdnVTRIOEdYbkQ1WElvOFlYUT09" className="text-blue-500 underline" target="_blank" rel="nofollow">Click Here</a></td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 text-green-500 font-bold">Apply Online (04-09-2024)</td>
              <td className="border border-gray-300 px-4 py-2"><a href="https://www.mponline.gov.in/Portal/Examinations/MPPSC/Attestation/Home/Home.aspx" className="text-blue-500 underline" target="_blank" rel="nofollow">Click Here</a></td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 text-green-500 font-bold">Notification</td>
              <td className="border border-gray-300 px-4 py-2"><a href="https://img.freejobalert.com/uploads/2024/08/Notification-MPPSC-Medical-Officer-Posts.pdf" className="text-blue-500 underline" target="_blank" rel="nofollow">Click Here</a></td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 text-green-500 font-bold">Official Website</td>
              <td className="border border-gray-300 px-4 py-2"><a href="https://mppsc.mp.gov.in/" className="text-blue-500 underline" target="_blank" rel="nofollow">Click Here</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}