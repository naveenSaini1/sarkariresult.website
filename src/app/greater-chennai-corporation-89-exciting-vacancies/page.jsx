export default function RecruitmentInformation() {
  // This component displays recruitment information for Greater Chennai Corporation Various Vacancy 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Greater Chennai Corporation Various Vacancy 2024</h1>

      <div className="mb-4">
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Name of the Post:</span> Greater Chennai Corporation Various Vacancy Offline Form 2024
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Post Date:</span> 13-09-2024
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Total Vacancy: </span> 89
        </p>
      </div>

      <p className="text-lg font-medium mb-4">
        <span className="text-red-500">Brief Information:</span> Greater Chennai Corporation has invited an application for the recruitment of Medical Officer, Lab Technician & Other Vacancy on Contract Basis. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply.
      </p>

      <h2 className="text-2xl font-bold mb-4">Important Dates</h2>

      <ul className="list-disc ml-6">
        <li className="mb-2">Last Date for the receipt of Application: 27-09-2024 (till 05:00 PM)</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>

      <table className="table-auto w-full border border-gray-300 text-center">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">Post Name</th>
            <th className="px-4 py-2">Total</th>
            <th className="px-4 py-2">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">Medical Officer</td>
            <td className="px-4 py-2">04</td>
            <td className="px-4 py-2">MBBS</td>
          </tr>
          <tr>
            <td className="px-4 py-2">District Programme Coordinator</td>
            <td className="px-4 py-2">01</td>
            <td className="px-4 py-2">MBA/PG Diploma (Management/ Health Administration)</td>
          </tr>
          <tr>
            <td className="px-4 py-2">District DRTB- HIV Coordinator</td>
            <td className="px-4 py-2">01</td>
            <td className="px-4 py-2">Degree (Science)</td>
          </tr>
          <tr>
            <td className="px-4 py-2">District PPM Coordinator</td>
            <td className="px-4 py-2">01</td>
            <td className="px-4 py-2">MSW/M.Sc/PG (Psychology)</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Statistical Assistant Cum DEO</td>
            <td className="px-4 py-2">01</td>
            <td className="px-4 py-2">Graduate in statistics with Diploma in computer application</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Senior Tuberculosis Laboratory Supervisor</td>
            <td className="px-4 py-2">02</td>
            <td className="px-4 py-2">12th/Diploma (Medical Laboratory Technology)/Degree (Science)</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Senior Treatment Supervisor</td>
            <td className="px-4 py-2">04</td>
            <td className="px-4 py-2">Degree (Science)</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Data Entry Operator</td>
            <td className="px-4 py-2">01</td>
            <td className="px-4 py-2">10+2 with Diploma in computer Application</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Lab Technician</td>
            <td className="px-4 py-2">56</td>
            <td className="px-4 py-2">10+2 / Diploma (Medical Laboratory Technology)</td>
          </tr>
          <tr>
            <td className="px-4 py-2">TB Health Visitor</td>
            <td className="px-4 py-2">11</td>
            <td className="px-4 py-2">12th/Degree with Science/MPHW/LHV/ANM/Health worker</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Pharmacist</td>
            <td className="px-4 py-2">03</td>
            <td className="px-4 py-2">Diploma/Degree (Pharmacy)</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Counselor</td>
            <td className="px-4 py-2">04</td>
            <td className="px-4 py-2">Degree (Social Work/Sociology/Psychology)</td>
          </tr>
        </tbody>
      </table>

      <p className="text-lg font-medium mb-4">
        <span className="text-blue-500">Interested Candidates Can Read the Full Notification Before Apply</span>
      </p>

      <h2 className="text-2xl font-bold mb-4">Important Links</h2>

      <table className="table-auto w-full border border-gray-300 text-center">
        <tbody>
          <tr>
            <td className="px-4 py-2" colSpan="2">
              <span className="text-green-500">Notification</span>
            </td>
            <td className="px-4 py-2">
              <a href="https://img.freejobalert.com/uploads/2024/09/Notification-Greater-Chennai-Corporation-Medical-Officer-Lab-Technician-Other-Posts.pdf" target="_blank" rel="noopener" className="text-blue-500">Click Here</a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2" colSpan="2">
              <span className="text-green-500">Official Website</span>
            </td>
            <td className="px-4 py-2">
              <a href="https://chennaicorporation.gov.in/gcc/" target="_blank" rel="noopener" className="text-blue-500">Click Here</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}