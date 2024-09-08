export default function RecruitmentInfo() {
  // Displays recruitment information for DRDO - VRDE Apprentice Online Form 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">DRDO - VRDE Apprentice Online Form 2024</h1>
      <div className="mb-4">
        <p className="font-bold text-green-500">Name of the Post:</p> 
        <span className="font-bold">DRDO – VRDE Apprentice Online Form 2024</span>
      </div>
      <div className="mb-4">
        <p className="font-bold text-green-500">Post Date:</p>
        <span className="font-bold">16-08-2024</span>
      </div>
      <div className="mb-4">
        <p className="font-bold text-green-500">Total Vacancy:</p>
        <span className="font-bold">52</span>
      </div>
      <p className="mb-4">
        <span className="font-bold text-red-500">Brief Information:</span> Defence Research & Development Organisation (DRDO) – Vehicle Research & Development Establishment (VRDE) has invites an application for the recruitment of Apprentice vacancy. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply Online.
      </p>
      <div className="mb-4">
        <p className="text-center font-bold text-red-500">DRDO – Vehicle Research & Development Establishment (VRDE)</p>
        <p className="text-center font-bold text-pink-500">Advt No. 01/2024</p>
        <p className="text-center font-bold text-green-500">Apprentice Vacancy 2024</p>
        <p className="text-center font-bold">
          <a href="https://www.freejobalert.com" target="_blank" rel="noopener" className="text-blue-500"></a>
        </p>
      </div>
      <div className="mb-4">
        <p className="text-center font-bold text-red-500">Important Dates</p>
        <ul className="list-disc pl-6">
          <li>Starting Date for Apply Online: <span className="font-bold">12-08-2024</span></li>
          <li>Last Date to Apply Online: <span className="font-bold">31-08-2024</span></li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-center font-bold text-red-500">Vacancy Details</h3>
        <h4 className="text-center font-bold text-red-500">Apprentice</h4>
        <table className="table-auto w-full text-center border-collapse border-2">
          <thead>
            <tr>
              <th className="font-bold text-pink-500">Post Name</th>
              <th className="font-bold text-pink-500">Total</th>
              <th className="font-bold text-pink-500">Qualification</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-black">Diploma Apprentice</td>
              <td className="text-black">20</td>
              <td className="text-black">Diploma (Relevant Engg)</td>
            </tr>
            <tr>
              <td className="text-black">Graduate Apprentice</td>
              <td className="text-black">32</td>
              <td className="text-black">Degree (Relevant Discipline)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-center font-bold text-blue-500">Interested Candidates Can Read the Full Notification Before Apply Online</p>
      <div className="mb-4">
        <h3 className="text-center font-bold text-red-500">Important Links</h3>
        <table className="table-auto w-full text-center border-collapse border-2">
          <tbody>
            <tr>
              <td className="font-bold text-green-500" colSpan="2">Apply Online</td>
              <td className="text-blue-500">
                <a href="https://nats.education.gov.in/student_register.php" target="_blank" rel="nofollow">Click Here</a>
              </td>
            </tr>
            <tr>
              <td className="font-bold text-green-500" colSpan="2">Notification</td>
              <td className="text-blue-500">
                <a href="https://img.freejobalert.com/uploads/2024/08/Notification-DRDO-VRDE-Apprentice-Posts.pdf" target="_blank" rel="nofollow">Click Here</a>
              </td>
            </tr>
            <tr>
              <td className="font-bold text-green-500" colSpan="2">Official Website</td>
              <td className="text-blue-500">
                <a href="https://drdo.gov.in/drdo/" target="_blank" rel="nofollow">Click Here</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}