export default function GRSEApprenticeRecruitment() {
  // This component displays information about the GRSE Apprentice recruitment program, including important dates, eligibility criteria, vacancy details, and application links.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">GRSE Apprentice Recruitment 2024</h1>
      <p className="text-gray-600 mb-4">
        Garden Reach Shipbuilders &amp; Engineer Limited (GRSE Ltd) has announced the recruitment of Trade Apprentices, Graduate Apprentices, and Technician Apprentices. This is a great opportunity for aspiring candidates to join a leading shipbuilding company in India.
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mb-2">Key Highlights</h2>
      <ul className="list-disc text-gray-600 mb-4">
        <li>Post Name: Apprentice (Trade, Graduate, Technician)</li>
        <li>Total Vacancy: 230</li>
        <li>Starting Date for Apply Online: 19-10-2024</li>
        <li>Last Date for Apply Online: 17-11-2024</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-800 mb-2">Brief Information</h2>
      <p className="text-gray-600 mb-4">
        GRSE Ltd invites eligible candidates to apply for Apprentice positions. Interested candidates should review the official notification for detailed eligibility criteria and application instructions. 
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mb-2">Important Dates</h2>
      <ul className="list-disc text-gray-600 mb-4">
        <li>Starting Date for Apply Online: <strong>19-10-2024 (1400 hrs.)</strong></li>
        <li>Last Date for Apply Online: <strong>17-11-2024 (2359 hrs.)</strong></li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-800 mb-2">Age Limit</h2>
      <ul className="list-disc text-gray-600 mb-4">
        <li>Minimum Age Limit: <strong>14 Years (Candidates born on or before 01-09-2010)</strong></li>
        <li>Maximum Age Limit for Trade Apprentice (Ex-ITI): <strong>25 Years (Candidates born on or after 01-09-1999)</strong></li>
        <li>Maximum Age Limit for Trade Apprentice (Fresher): <strong>20 Years (Candidates born on or after 01-09-2004)</strong></li>
        <li>Maximum Age Limit for Graduate Apprentice: <strong>26 Years (Candidates born on or after 01-09-1998)</strong></li>
        <li>Maximum Age Limit for Technician Apprentice: <strong>26 Years (Candidates born on or after 01-09-1998)</strong></li>
        <li>Age Relaxation is Applicable As per Rules.</li>
        <li>For More details refer the Notification.</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-800 mb-2">Vacancy Details</h2>
      <table className="table-auto w-full text-gray-600 border-collapse mb-4">
        <thead>
          <tr className="bg-gray-200 text-gray-800">
            <th className="py-2 px-4 text-center">Sl. No</th>
            <th className="py-2 px-4 text-center">Post Name</th>
            <th className="py-2 px-4 text-center">Total</th>
            <th className="py-2 px-4 text-center">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-gray-200">
            <td className="py-2 px-4 text-center">1.</td>
            <td className="py-2 px-4 text-center">Trade Apprentice (Ex-ITI)</td>
            <td className="py-2 px-4 text-center">90</td>
            <td className="py-2 px-4 text-center">AITT (CTS), NTC by NCVT</td>
          </tr>
          <tr className="border-t border-gray-200">
            <td className="py-2 px-4 text-center">2.</td>
            <td className="py-2 px-4 text-center">Trade Apprentice (Fresher)</td>
            <td className="py-2 px-4 text-center">40</td>
            <td className="py-2 px-4 text-center">Class 10th standard / Madhyamik</td>
          </tr>
          <tr className="border-t border-gray-200">
            <td className="py-2 px-4 text-center">3.</td>
            <td className="py-2 px-4 text-center">Graduate Apprentice</td>
            <td className="py-2 px-4 text-center">40</td>
            <td className="py-2 px-4 text-center">Degree (Relevant Engg)</td>
          </tr>
          <tr className="border-t border-gray-200">
            <td className="py-2 px-4 text-center">4.</td>
            <td className="py-2 px-4 text-center">Technician Apprentice</td>
            <td className="py-2 px-4 text-center">60</td>
            <td className="py-2 px-4 text-center">Diploma (Relevant Engg)</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold text-gray-800 mb-2">Important Links</h2>
      <ul className="list-disc text-gray-600 mb-4">
        <li>
          <a href="https://nats.education.gov.in/" className="text-blue-500 hover:underline">
            Apprentice Registration Portal
          </a>
        </li>
        <li>
          <a href="https://jobapply.in/grse2024app/" className="text-blue-500 hover:underline">
            Apply Online
          </a>
        </li>
        <li>
          <a href="https://img.freejobalert.com/uploads/2024/10/Notification-GRSE-Ltd-Apprentice-Posts.pdf" className="text-blue-500 hover:underline">
            Notification
          </a>
        </li>
        <li>
          <a href="https://grse.in/" className="text-blue-500 hover:underline">
            Official Website
          </a>
        </li>
      </ul>

      <p className="text-gray-600 mt-4">
        Please refer to the official notification for the most up-to-date information and eligibility requirements.
      </p>
      <p className="text-gray-600 mt-4">
        Keywords: GRSE, Garden Reach Shipbuilders, Apprentice Recruitment, Trade Apprentice, Graduate Apprentice, Technician Apprentice, Shipbuilding, Engineering, India.
      </p>
    </div>
  );
}