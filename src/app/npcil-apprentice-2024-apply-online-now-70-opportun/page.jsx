export default function RecruitmentInfo() {
  // Displays recruitment information for NPCIL Apprentice 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">NPCIL Apprentice 2024 Online Form</h1>

      <div className="mb-4">
        <p className="text-green-500 font-bold inline">Name of the Post:</p> 
        <span className="font-bold">NPCIL Apprentice 2024 Online Form</span>
      </div>

      <div className="mb-4">
        <p className="text-green-500 font-bold inline">Post Date:</p> 
        <span className="font-bold">13-09-2024</span>
      </div>

      <div className="mb-4">
        <p className="text-green-500 font-bold inline">Total Vacancy:</p> 
        <span className="font-bold">70</span>
      </div>

      <p className="mb-4">
        <span className="text-red-500 font-bold inline">Brief Information:</span> 
        Nuclear Power Corporation of India Ltd (NPCIL) has advertised a notification for the recruitment of Trade Apprentice, Diploma Apprentice, Graduate Apprentice Vacancy. 
        Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply Online.
      </p>

      <h2 className="text-2xl font-bold text-center mb-4">Important Information</h2>

      <table className="w-full table-auto mb-4">
        <thead>
          <tr>
            <th colSpan={5} className="text-center text-red-500 font-bold p-2 border-b">Important Dates</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={5} className="text-left p-2 border-b">
              Starting Date to Apply Online: <strong className="text-black">13-09-2024 at 10:00 Hrs.</strong>
            </td>
          </tr>
          <tr>
            <td colSpan={5} className="text-left p-2 border-b">Last Date to Apply Online: <strong className="text-black">03-10-2024 (16:00 Hrs.)</strong></td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold text-center mb-4">Vacancy Details</h2>

      <table className="w-full table-auto mb-4">
        <thead>
          <tr>
            <th className="text-center text-pink-500 font-bold p-2 border-b">Post Name</th>
            <th className="text-center text-pink-500 font-bold p-2 border-b">Total</th>
            <th className="text-center text-pink-500 font-bold p-2 border-b">Age Limit (as on 03-10-2024)</th>
            <th colSpan={2} className="text-center text-pink-500 font-bold p-2 border-b">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center p-2 border-b">Trade Apprentice</td>
            <td className="text-center p-2 border-b">50</td>
            <td className="text-center p-2 border-b">18-24 Years</td>
            <td colSpan={2} className="text-center p-2 border-b">ITI (Fitter/Electrician/Electronics Mechanic)</td>
          </tr>
          <tr>
            <td className="text-center p-2 border-b">Diploma Apprentice</td>
            <td className="text-center p-2 border-b">10</td>
            <td className="text-center p-2 border-b">18-25 Years</td>
            <td colSpan={2} className="text-center p-2 border-b">Diploma (Mechanical/Electrical/Electronics)</td>
          </tr>
          <tr>
            <td className="text-center p-2 border-b">Graduate Apprentice</td>
            <td className="text-center p-2 border-b">10</td>
            <td className="text-center p-2 border-b">18-26 Years</td>
            <td colSpan={2} className="text-center p-2 border-b">Degree (Mechanical/Electrical/Civil)</td>
          </tr>
        </tbody>
      </table>

      <p className="text-blue-500 font-bold text-center mb-4">Interested Candidates Can Read the Full Notification Before Apply Online</p>

      <h2 className="text-2xl font-bold text-center mb-4">Important Links</h2>

      <table className="w-full table-auto mb-4">
        <tbody>
          <tr>
            <td className="text-center text-green-500 font-bold p-2 border-b">Apply Online</td>
            <td className="text-center p-2 border-b"><a href="https://www.apprenticeshipindia.gov.in/" target="_blank" rel="noopener" className="text-blue-500 font-bold">Click Here</a></td>
          </tr>
          <tr>
            <td className="text-center text-green-500 font-bold p-2 border-b">Notification</td>
            <td className="text-center p-2 border-b"><a href="https://img.freejobalert.com/uploads/2024/09/Notification-NPCIL-Apprentice-Posts.pdf" target="_blank" rel="noopener" className="text-blue-500 font-bold">Click here</a></td>
          </tr>
          <tr>
            <td className="text-center text-green-500 font-bold p-2 border-b">Official Website</td>
            <td className="text-center p-2 border-b"><a href="https://npcilcareers.co.in/MainSite/default.aspx" target="_blank" rel="noopener" className="text-blue-500 font-bold">Click here</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}