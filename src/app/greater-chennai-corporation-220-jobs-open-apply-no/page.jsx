export default function RecruitmentInformation() {
  // This component displays recruitment information for Greater Chennai Corporation Various Vacancy 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">Greater Chennai Corporation Various Vacancy 2024</h1>

      <div className="mb-4">
        <p className="text-lg font-medium text-green-500 mb-1">Name of the Post:</p>
        <p className="text-lg font-bold mb-2">Greater Chennai Corporation Various Vacancy Offline Form 2024</p>
        <p className="text-lg font-medium text-green-500 mb-1">Post Date:</p>
        <p className="text-lg font-normal mb-2">26-07-2024</p>
        <p className="text-lg font-medium text-green-500 mb-1">Total Vacancy:</p>
        <p className="text-lg font-normal mb-2">220</p>
      </div>

      <p className="text-lg font-medium text-red-500 mb-4">Brief Information:</p>
      <p className="text-lg mb-4">Greater Chennai Corporation has Given an employment Notification for the recruitment of ANM, Pharmacist, Lab Technician & Other on Contract basis. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply.</p>

      <h2 className="text-2xl font-bold text-center mb-4">Important Dates</h2>
      <ul className="list-disc pl-8 mb-4">
        <li className="text-lg font-normal">Last Date For Receipt Of Application: 09-08-2024 (Till 05:00 PM)</li>
      </ul>

      <h2 className="text-2xl font-bold text-center mb-4">Vacancy Details</h2>
      <table className="table-auto w-full border-collapse border border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-100 text-center">
            <th className="px-4 py-2 text-lg font-bold text-blue-500 border border-gray-300">Post Name</th>
            <th className="px-4 py-2 text-lg font-bold text-blue-500 border border-gray-300">Total</th>
            <th className="px-4 py-2 text-lg font-bold text-blue-500 border border-gray-300">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td className="px-4 py-2 border border-gray-300">Epidemiologist</td>
            <td className="px-4 py-2 border border-gray-300">01</td>
            <td className="px-4 py-2 border border-gray-300">Medical Graduate with Post Graduate Diploma/Degree (Concerned Specialty)</td>
          </tr>
          <tr className="text-center">
            <td className="px-4 py-2 border border-gray-300">Medical Officer</td>
            <td className="px-4 py-2 border border-gray-300">28</td>
            <td className="px-4 py-2 border border-gray-300">MBBS Degree</td>
          </tr>
          <tr className="text-center">
            <td className="px-4 py-2 border border-gray-300">Staff Nurse</td>
            <td className="px-4 py-2 border border-gray-300">71</td>
            <td className="px-4 py-2 border border-gray-300">HSE+Diploma (Nursing)/GNM/B.Sc. (Nursing)</td>
          </tr>
          <tr className="text-center">
            <td className="px-4 py-2 border border-gray-300">Lab Technician</td>
            <td className="px-4 py-2 border border-gray-300">33</td>
            <td className="px-4 py-2 border border-gray-300">HSE + Diploma (Lab Technician)</td>
          </tr>
          <tr className="text-center">
            <td className="px-4 py-2 border border-gray-300">Pharmacist</td>
            <td className="px-4 py-2 border border-gray-300">07</td>
            <td className="px-4 py-2 border border-gray-300">HSE + Diploma (Pharmacy)</td>
          </tr>
          <tr className="text-center">
            <td className="px-4 py-2 border border-gray-300">X-Ray Technician</td>
            <td className="px-4 py-2 border border-gray-300">05</td>
            <td className="px-4 py-2 border border-gray-300">X-Ray Technician Course</td>
          </tr>
          <tr className="text-center">
            <td className="px-4 py-2 border border-gray-300">Auxiliary Nurse and Midwife (ANM)</td>
            <td className="px-4 py-2 border border-gray-300">70</td>
            <td className="px-4 py-2 border border-gray-300">HSE + ANM Course</td>
          </tr>
          <tr className="text-center">
            <td className="px-4 py-2 border border-gray-300">Operation Theatre Assistant</td>
            <td className="px-4 py-2 border border-gray-300">03</td>
            <td className="px-4 py-2 border border-gray-300">Diploma (Operation Theatre Technology)</td>
          </tr>
          <tr className="text-center">
            <td className="px-4 py-2 border border-gray-300">Accounts Assistant</td>
            <td className="px-4 py-2 border border-gray-300">01</td>
            <td className="px-4 py-2 border border-gray-300">B.Com or M.Com</td>
          </tr>
        </tbody>
      </table>

      <p className="text-lg font-medium text-blue-500 text-center mb-4">Interested Candidates Can Read the Full Notification Before Apply</p>

      <h2 className="text-2xl font-bold text-center mb-4">Important Links</h2>

      <table className="table-auto w-full border-collapse border border-gray-300 mb-4">
        <tbody>
          <tr className="text-center">
            <td className="px-4 py-2 text-lg font-medium text-green-500 border border-gray-300">Notification</td>
            <td className="px-4 py-2 border border-gray-300" colSpan="2">
              <a href="https://img.freejobalert.com/uploads/2024/07/Notification-Greater-Chennai-Corporation-Various-Vacancy-2024.pdf" target="_blank" rel="noopener" className="underline text-blue-500">Click here</a>
            </td>
          </tr>
          <tr className="text-center">
            <td className="px-4 py-2 text-lg font-medium text-green-500 border border-gray-300">Official Website</td>
            <td className="px-4 py-2 border border-gray-300" colSpan="2">
              <a href="https://chennaicorporation.gov.in/gcc/" target="_blank" rel="noopener" className="underline text-blue-500">Click here</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}