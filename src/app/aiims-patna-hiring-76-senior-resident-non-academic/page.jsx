export default function RecruitmentInformation() {
  // This component displays recruitment information for Senior Resident (Non-Academic) position at AIIMS, Patna
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">AIIMS, Patna Senior Resident (Non-Academic) Online Form 2024</h1>

      <div className="mb-4">
        <p className="text-lg font-medium text-green-500">Name of the Post:</p>
        <p className="text-lg">AIIMS, Patna Senior Resident (Non-Academic) Online Form 2024</p>
      </div>

      <div className="mb-4">
        <p className="text-lg font-medium text-green-500">Post Date:</p>
        <p className="text-lg text-gray-600">05-08-2024</p>
      </div>

      <p className="text-lg font-medium text-green-500 mb-2">Total Vacancy:</p>
      <p className="text-lg">76</p>

      <p className="text-lg font-medium text-red-500 mb-2">Brief Information:</p>
      <p className="text-lg">All India Institute of Medical Sciences (AIIMS), Patna has given an employment notification for the recruitment of Senior Resident (Non-Academic) Vacancy. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply Online.</p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Application Details</h2>

      <table className="w-full border-collapse border border-gray-300 mb-4">
        <tbody>
          <tr className="border-b border-gray-300">
            <td colSpan="2" className="text-center py-2 font-bold text-red-500">Application Fee</td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="py-2">For General/OBC Candidates:</td>
            <td className="py-2">Rs. 1500/- +(Transaction charges)</td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="py-2">For SC/ST/EWS Candidates:</td>
            <td className="py-2">Rs. 1200/- +(Transaction charges)</td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="py-2">For Ex-servicemen/Women/PwBD:</td>
            <td className="py-2">Nil</td>
          </tr>
          <tr>
            <td className="py-2">Payment Mode:</td>
            <td className="py-2">Through Online</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mt-8 mb-4">Important Dates</h2>

      <ul className="list-disc ml-6 mb-4">
        <li>Publication of Advertisement: 01-08-2024</li>
        <li>Starting Date for Apply Online & Payment of Fee: 02-08-2024</li>
        <li>Last Date for Apply Online & Payment of Fee: 23-08-2024 at 12:00 midnight</li>
        <li>Date of Scrutiny & Review of Applications: 24-08-2024 & 26-08-2024</li>
        <li>Date of Publication of provisional eligibility list on AIIMS Patna website: 27-08-2024</li>
        <li>Date of Submission of grievance/objections on AIIMS Patna website: 28-08-2024 & 29-08-2024</li>
        <li>Date of Publication of final eligibility list on AIIMS Patna website: 30-08-2024</li>
        <li>Date for Downloading of Admit Card: 31-08-2024</li>
        <li>Date of Examination: 02-09-2024 (08:30 AM – 09:00 AM)</li>
        <li>Date of Declaration of result of written Examination on AIIMS Patna website: 02-09-2024</li>
        <li>Date of Interview: 03-09-2024 & 04-09-2024</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">Eligibility Criteria</h2>

      <h3 className="text-xl font-bold mb-2">Age Limit (as on 23-08-2024)</h3>

      <ul className="list-disc ml-6 mb-4">
        <li>Maximum Age Limit: 45 Years</li>
        <li>Age relaxation is admissible as per rules.</li>
      </ul>

      <h3 className="text-xl font-bold mb-2">Qualification</h3>

      <ul className="list-disc ml-6 mb-4">
        <li>Candidates Should Possess Post Graduate Degree i.e. MD/MS/DNB/DM/M.Ch (Concerned Speciality).</li>
        <li>For More Details Refer Notification.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">Vacancy Details</h2>

      <table className="w-full border-collapse border border-gray-300 mb-4">
        <thead>
          <tr className="border-b border-gray-300">
            <th className="text-center py-2 font-bold text-pink-500">Post Name</th>
            <th className="text-center py-2 font-bold text-pink-500">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-300">
            <td className="text-center py-2">Senior Resident (Non-Academic)</td>
            <td className="text-center py-2">76</td>
          </tr>
        </tbody>
      </table>

      <p className="text-lg font-medium text-blue-500 mb-4">Interested Candidates Can Read the Full Notification Before Apply & Attend the Interview.</p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Important Links</h2>

      <table className="w-full border-collapse border border-gray-300 mb-4">
        <tbody>
          <tr className="border-b border-gray-300">
            <td className="text-center py-2 font-bold text-green-500">Apply Online</td>
            <td className="text-center py-2"><a href="https://recruitment.aiimspatna.edu.in/sr_rec_aug_2024/" target="_blank" rel="nofollow" className="text-blue-500 underline">Click Here</a></td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="text-center py-2 font-bold text-green-500">Notification</td>
            <td className="text-center py-2"><a href="https://img.freejobalert.com/uploads/2024/08/Notification-AIIMS-Patna-Senior-Resident-2024.pdf" target="_blank" rel="nofollow" className="text-blue-500 underline">Click here</a></td>
          </tr>
          <tr>
            <td className="text-center py-2 font-bold text-green-500">Official Website</td>
            <td className="text-center py-2"><a title="AIIMS-Patna" href="https://aiimspatna.edu.in/advertisement/" target="_blank" rel="nofollow" className="text-blue-500 underline">Click here</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}