export default function MPPGCLApprenticeRecruitment() {
  // This component displays recruitment information for MPPGCL Apprentice vacancies.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">MPPGCL Apprentice Online Form 2024</h1>

      <div className="mb-4">
        <p className="font-bold text-green-500">Name of the Post:</p>
        <p>MPPGCL Apprentice Online Form 2024</p>
      </div>

      <div className="mb-4">
        <p className="font-bold text-green-500">Post Date:</p>
        <p>06-08-2024</p>
      </div>

      <div className="mb-4">
        <p className="font-bold text-green-500">Total Vacancy:</p>
        <p>170</p>
      </div>

      <div className="mb-4">
        <p className="font-bold text-red-500">Brief Information:</p>
        <p>Madhya Pradesh Power Generating Company Limited (MPPGCL) has given an employment Notification for the recruitment of Apprentice vacancy. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply Online.</p>
      </div>

      <h2 className="text-2xl font-bold mb-4">Madhya Pradesh Power Generating Company Limited (MPPGCL)</h2>

      <h3 className="text-xl font-bold mb-4">Apprentice Vacancy 2024</h3>

      <div className="mb-4">
        <p className="font-bold text-red-500">Important Dates</p>
        <ul className="list-disc ml-6">
          <li>Last Date to Apply Online: 23-08-2024</li>
        </ul>
      </div>

      <div className="mb-4">
        <p className="font-bold text-red-500">Age Limit (as on 23-08-2024)</p>
        <ul className="list-disc ml-6">
          <li>Minimum Age: 18 Years</li>
          <li>Age relaxation is applicable as per rules.</li>
        </ul>
      </div>

      <h3 className="text-xl font-bold mb-4">Vacancy Details</h3>

      <table className="table-auto w-full border-collapse border border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-center py-2 px-4 font-bold text-blue-500">Sl No</th>
            <th className="text-center py-2 px-4 font-bold text-blue-500">Post Name</th>
            <th className="text-center py-2 px-4 font-bold text-blue-500">Total</th>
            <th className="text-center py-2 px-4 font-bold text-blue-500">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center py-2 px-4">1</td>
            <td className="text-center py-2 px-4">Graduate Apprentice</td>
            <td className="text-center py-2 px-4">11</td>
            <td className="text-center py-2 px-4">Degree (Relevant Engg)/ B.A/B.Sc/ B.Com</td>
          </tr>
          <tr>
            <td className="text-center py-2 px-4">2</td>
            <td className="text-center py-2 px-4">Diploma Apprentice</td>
            <td className="text-center py-2 px-4">08</td>
            <td className="text-center py-2 px-4">Diploma (Relevant Engg)</td>
          </tr>
          <tr>
            <td className="text-center py-2 px-4">3</td>
            <td className="text-center py-2 px-4">ITI Apprentice</td>
            <td className="text-center py-2 px-4">170</td>
            <td className="text-center py-2 px-4">ITI (SCVT/NCVT)</td>
          </tr>
        </tbody>
      </table>

      <p className="text-blue-500">Interested Candidates Can Read the Full Notification Before Apply Online</p>

      <h3 className="text-xl font-bold mb-4">Important Links</h3>

      <div className="mb-4">
        <p className="font-bold text-green-500">Apply Online</p>
        <a href="https://www.apprenticeshipindia.gov.in/login" target="_blank" className="text-blue-500 hover:underline">Click Here</a>
      </div>

      <div className="mb-4">
        <p className="font-bold text-green-500">Notification</p>
        <a href="https://img.freejobalert.com/uploads/2024/08/Notification-MPPGCL-Apprentice-Posts.pdf" target="_blank" className="text-blue-500 hover:underline">Click Here</a>
      </div>

      <div className="mb-4">
        <p className="font-bold text-green-500">Official Website</p>
        <a href="https://www.mppgcl.mp.gov.in/" target="_blank" className="text-blue-500 hover:underline">Click Here</a>
      </div>
    </div>
  );
}