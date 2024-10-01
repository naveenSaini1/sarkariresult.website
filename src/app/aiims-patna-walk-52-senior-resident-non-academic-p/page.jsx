export default function RecruitmentInfo() {
  // Displays recruitment information for AIIMS, Patna Senior Resident (Non-Academic) position
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">AIIMS, Patna Senior Resident (Non-Academic) 2024 Walk in</h1>
      <div className="mb-4">
        <p className="text-green-500 font-bold">Name of the Post:</p>
        <p>AIIMS, Patna Senior Resident (Non-Academic) 2024 Walk in</p>
      </div>
      <div className="mb-4">
        <p className="text-green-500 font-bold">Post Date:</p>
        <p className="text-gray-600">30-09-2024</p>
      </div>
      <div className="mb-4">
        <p className="text-green-500 font-bold">Total Vacancy:</p>
        <p>52</p>
      </div>
      <p className="mb-4">
        <span className="text-red-500 font-bold">Brief Information:</span> All India Institute of Medical Sciences (AIIMS), Patna has given an
        employment notification for the recruitment of Senior Resident (Non-Academic) Vacancy on an ad-hoc Basis. Those Candidates who are
        interested in the vacancy details & completed all eligibility criteria can read the Notification & Attend.
      </p>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Application Fee</h2>
        <ul className="list-disc ml-6">
          <li>
            For General/OBC Candidates: <strong className="text-black">Rs. 1500/-</strong>
          </li>
          <li>
            For SC/ST/EWS Candidates: <strong className="text-black">Rs. 1200/-</strong>
          </li>
          <li>For Ex-servicemen/Women/PwBD: <strong className="text-black">Nil</strong></li>
          <li>Payment Mode: <strong>Through Demand Draft</strong></li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Important Dates</h2>
        <ul className="list-disc ml-6">
          <li>Publication of Advertisement: <strong>23-09-2024</strong></li>
          <li>Date of Walk in Interview: <strong>07-10-2024</strong></li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Age Limit (as on 06-10-2024)</h2>
        <ul className="list-disc ml-6">
          <li>Maximum Age Limit: <strong className="text-black">45 Years</strong></li>
          <li>Age relaxation is admissible as per rules.</li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Qualification</h2>
        <ul className="list-disc ml-6">
          <li>Candidates Should Possess Post Graduate Degree i.e. MD/MS/DNB/DM/M.Ch (Concerned Speciality).</li>
          <li>For More Details Refer Notification.</li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Vacancy Details</h2>
        <table className="table-auto w-full border-collapse border-2">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-center text-pink-500 font-bold">Post Name</th>
              <th className="px-4 py-2 text-center text-pink-500 font-bold">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-300">
              <td className="px-4 py-2 text-center">Senior Resident (Non-Academic)</td>
              <td className="px-4 py-2 text-center text-black">52</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-4">
        <span className="text-blue-500 font-bold">Interested Candidates Can Read the Full Notification Before Attend.</span>
      </p>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Important Links</h2>
        <table className="table-auto w-full border-collapse border-2">
          <tbody>
            <tr className="border-t border-gray-300">
              <td className="px-4 py-2 text-center text-green-500 font-bold">Notification</td>
              <td className="px-4 py-2 text-center">
                <a href="https://img.freejobalert.com/uploads/2024/09/Notification-AIIMS-Patna-Senior-Resident-Non-Academic-Posts.pdf" target="_blank" className="text-blue-500">
                  Click here
                </a>
              </td>
            </tr>
            <tr className="border-t border-gray-300">
              <td className="px-4 py-2 text-center text-green-500 font-bold">Official Website</td>
              <td className="px-4 py-2 text-center">
                <a href="https://aiimspatna.edu.in/advertisement/" target="_blank" className="text-blue-500">
                  Click here
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}