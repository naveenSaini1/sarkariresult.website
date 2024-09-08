export default function RecruitmentInformation() {
  // Displays recruitment information for TNMVMD Apprentice 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">TNMVMD Apprentice 2024 Selection List Released</h1>
      <p className="text-gray-700 mb-4">
        <span className="font-bold text-green-500">Name of the Post:</span> TNMVMD Apprentice 2024 Selection List Released
      </p>
      <p className="text-gray-700 mb-4">
        <span className="font-bold text-green-500">Post Date: </span>
        <span className="text-gray-900">28-06-2024</span>
      </p>
      <p className="text-gray-700 mb-4">
        <span className="font-bold text-green-500">Latest Update:</span> 20-08-2024
      </p>
      <p className="text-gray-700 mb-4">
        <span className="font-bold text-green-500">Total Vacancy: </span>79
      </p>
      <p className="text-gray-700 mb-4">
        <span className="font-bold text-red-500">Brief Information:</span> Tamil Nadu Motor Vehicle Maintenance Dept, (TNMVMD) Chennai has given an Employment Notification for the Recruitment of Apprentice (Graduate & Diploma) Vacancy.
        Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply Online.
      </p>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2 text-red-500">Important Dates</h2>
        <ul className="list-disc pl-6">
          <li className="mb-2">Starting Date for Online Application: <strong>24-06-2024</strong></li>
          <li className="mb-2">Last date for applying Tamil Nadu Motor Vehicle Maintenance Department: <strong>15-07-2024</strong></li>
          <li className="mb-2">Declaration of Shortlisted List: <strong>19-07-2024</strong></li>
          <li className="mb-2">Verification of certificates for shortlisted candidates at TNMVMD, Chennai: <strong>29-07-2024 to 30-07-2024 (Tentatively)</strong></li>
          <li className="mb-2">Date of CV: <strong>31-07-2024</strong></li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2 text-red-500">Age Limit</h2>
        <ul className="list-disc pl-6">
          <li className="mb-2">Age limit will be followed as per Apprenticeship Rules.</li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2 text-red-500">Vacancy Details</h2>
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr>
              <th className="text-center text-blue-500 font-bold px-4 py-2 border border-gray-300">Post Name</th>
              <th className="text-center text-blue-500 font-bold px-4 py-2 border border-gray-300">Total</th>
              <th className="text-center text-blue-500 font-bold px-4 py-2 border border-gray-300">Qualification</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center px-4 py-2 border border-gray-300">Graduate Apprentice</td>
              <td className="text-center px-4 py-2 border border-gray-300">18</td>
              <td className="text-center px-4 py-2 border border-gray-300">Degree (Relevant Engg)</td>
            </tr>
            <tr>
              <td className="text-center px-4 py-2 border border-gray-300">Technician Apprentice</td>
              <td className="text-center px-4 py-2 border border-gray-300">61</td>
              <td className="text-center px-4 py-2 border border-gray-300">Diploma (Relevant Engg)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-gray-700 mb-4 text-blue-500">Interested Candidates Can Read the Full Notification Before Apply</p>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2 text-red-500">Important Links</h2>
        <table className="table-auto w-full border-collapse">
          <tbody>
            <tr>
              <td className="text-center text-green-500 font-bold px-4 py-2 border border-gray-300">Selection List (20-08-2024)</td>
              <td className="text-center px-4 py-2 border border-gray-300"><a href="https://img.freejobalert.com/uploads/2024/08/Selection-List-TNMVND-Apprentice-Posts.pdf" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a></td>
            </tr>
            <tr>
              <td className="text-center text-green-500 font-bold px-4 py-2 border border-gray-300">Apply Online</td>
              <td className="text-center px-4 py-2 border border-gray-300"><a href="https://nats.education.gov.in/" target="_blank" rel="nofollow" className="text-blue-500">Click here</a></td>
            </tr>
            <tr>
              <td className="text-center text-green-500 font-bold px-4 py-2 border border-gray-300">Notification</td>
              <td className="text-center px-4 py-2 border border-gray-300"><a href="https://img.freejobalert.com/uploads/2024/06/Notifcation-TNMVND-Apprentice-Posts.pdf" target="_blank" rel="nofollow" className="text-blue-500">Click here</a></td>
            </tr>
            <tr>
              <td className="text-center text-green-500 font-bold px-4 py-2 border border-gray-300">Official Website</td>
              <td className="text-center px-4 py-2 border border-gray-300"><a href="https://tnmvmd.tn.gov.in/" target="_blank" rel="nofollow" className="text-blue-500">Click here</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}