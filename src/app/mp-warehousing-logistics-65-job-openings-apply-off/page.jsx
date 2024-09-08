export default function RecruitmentInformation() {
  // Displays recruitment information for MP Warehousing & Logistics Corporation
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">MP Warehousing & Logistics Corporation Various Vacancy Offline Form 2024</h1>
      <p className="mb-4">
        <span className="text-green-500 font-bold">Name of the Post:</span> MP Warehousing & Logistics Corporation Various Vacancy Offline Form 2024
      </p>
      <p className="mb-4">
        <span className="text-green-500 font-bold">Post Date:</span> <span className="font-bold">29-08-2024</span>
      </p>
      <p className="mb-4">
        <span className="text-green-500 font-bold">Total Vacancy:</span> <span className="font-bold">65</span>
      </p>
      <p className="mb-4">
        <span className="text-red-500 font-bold">Brief Information:</span> Madhya Pradesh Warehousing & Logistics Corporation, Bhopal has announced a notification for the recruitment of Sub Engineer, Asst Accountant, Stenotypist & Other Vacancy. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply.
      </p>
      <h2 className="text-2xl font-bold mb-4">Important Dates</h2>
      <ul className="list-disc ml-4 mb-4">
        <li>Last Date for Submission of Application: <span className="font-bold">10-09-2024 (06:00 PM)</span></li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Age Limit</h2>
      <ul className="list-disc ml-4 mb-4">
        <li>Minimum Age: <span className="font-bold">18 Years</span></li>
        <li>Maximum Age: <span className="font-bold">40 Years</span></li>
        <li>Age relaxation is applicable as per rules.</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>
      <table className="table-auto w-full mb-4">
        <thead>
          <tr>
            <th className="text-center text-pink-500 font-bold">Post Name</th>
            <th className="text-center text-pink-500 font-bold">Total</th>
            <th className="text-center text-pink-500 font-bold">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center">Sub Engineer</td>
            <td className="text-center">02</td>
            <td className="text-center" rowSpan={2}>Diploma (Civil Engg)</td>
          </tr>
          <tr>
            <td className="text-center">Sub Engineer Contract</td>
            <td className="text-center">01</td>
          </tr>
          <tr>
            <td className="text-center">Asst Quality Controller</td>
            <td className="text-center">05</td>
            <td className="text-center" rowSpan={2}>B.SC</td>
          </tr>
          <tr>
            <td className="text-center">Asst Quality Controller Contract</td>
            <td className="text-center">02</td>
          </tr>
          <tr>
            <td className="text-center">Asst Accountant</td>
            <td className="text-center">04</td>
            <td className="text-center">CA/BBA/M.Com/MBA/ICWA (Finance)</td>
          </tr>
          <tr>
            <td className="text-center">Jr Asst cum Data Entry Operator</td>
            <td className="text-center">02</td>
            <td className="text-center" rowSpan={2}>Any Degree</td>
          </tr>
          <tr>
            <td className="text-center">Stenotypist</td>
            <td className="text-center">01</td>
          </tr>
          <tr>
            <td className="text-center">Chowkidar cum Helper</td>
            <td className="text-center">48</td>
            <td className="text-center">12th Class</td>
          </tr>
        </tbody>
      </table>
      <p className="text-blue-500 mb-4">Interested Candidates Can Read the Full Notification Before Apply</p>
      <h2 className="text-2xl font-bold mb-4">Important Links</h2>
      <table className="table-auto w-full mb-4">
        <tbody>
          <tr>
            <td className="text-center" colSpan={2}>
              <span className="text-green-500 font-bold">Notification</span>
            </td>
            <td className="text-center">
              <a href="https://img.freejobalert.com/uploads/2024/08/Notification-MP-Warehousing-Assistant-Accountant-Sub-Engineer-Other-2024.pdf" target="_blank" rel="noopener" className="text-blue-500 font-bold">Click Here</a>
            </td>
          </tr>
          <tr>
            <td className="text-center" colSpan={2}>
              <span className="text-green-500 font-bold">Official Website</span>
            </td>
            <td className="text-center">
              <a href="http://mpwarehousing.mp.gov.in/" target="_blank" rel="noopener" className="text-blue-500 font-bold">Click Here</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}