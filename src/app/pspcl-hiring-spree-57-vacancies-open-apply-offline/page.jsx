export default function RecruitmentInfo() {
  // Displays recruitment information for PSPCL Various Vacancy Offline Form 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">PSPCL Various Vacancy Offline Form 2024</h1>
      <p className="text-gray-700 mb-4">
        <span className="font-bold text-green-500">Name of the Post:</span> PSPCL Various Vacancy Offline Form 2024
      </p>
      <p className="text-gray-700 mb-4">
        <span className="font-bold text-green-500">Post Date:</span>{' '}
        <span className="text-gray-900">05-08-2024</span>
      </p>
      <p className="text-gray-700 mb-4">
        <span className="font-bold text-green-500">Total Vacancy:</span>{' '}
        <span className="text-gray-900">57</span>
      </p>
      <p className="text-gray-700 mb-4">
        <span className="font-bold text-red-500">Brief Information:</span> Punjab State Power Corporation Limited (PSPCL) has given a notification for the recruitment of
        Manager, Assistant Manager, Overman, Mining Sirdar &amp; Other Vacancy on Purely on Contractual basis. Those Candidates who are interested in the vacancy details
        &amp; completed all eligibility criteria can read the Notification &amp; Apply Online.
      </p>

      <h2 className="text-2xl font-bold mb-4">Important Details</h2>
      <table className="table-auto w-full text-center border border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">Important Dates</th>
            <th className="px-4 py-2">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">Last Date for Receipt of Application:</td>
            <td className="px-4 py-2">16-08-2024</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Date of Document Checking for Manager, Assistant Manager or Assistant Manager /under Manager and Surveyor:</td>
            <td className="px-4 py-2">20-08-2024</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Date of Document Checking for Overman:</td>
            <td className="px-4 py-2">21-08-2024</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Date of Document Checking for Mining Sirdar:</td>
            <td className="px-4 py-2">22-08-2024</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>
      <table className="table-auto w-full text-center border border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">Post Name</th>
            <th className="px-4 py-2">Total</th>
            <th className="px-4 py-2">Max Age Limit (as on 01-01-2024)</th>
            <th className="px-4 py-2">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">Manager</td>
            <td className="px-4 py-2">01</td>
            <td className="px-4 py-2">55 years</td>
            <td className="px-4 py-2">Diploma or Degree/ AMIE (Mining Engg)</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Assistant Manager</td>
            <td className="px-4 py-2">09</td>
            <td className="px-4 py-2" rowSpan={4}>
              40 years and 45 years
            </td>
            <td className="px-4 py-2" rowSpan={2}>
              10th or Diploma or Degree/ AMIE (Mining Engg)
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">Assistant Manager / Under Manager</td>
            <td className="px-4 py-2">01</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Surveyor</td>
            <td className="px-4 py-2">01</td>
            <td className="px-4 py-2">10th or Diploma (Survey Engg)</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Overman</td>
            <td className="px-4 py-2">22</td>
            <td className="px-4 py-2">10th or Diploma (Mining Engg)</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Mining Sirdar</td>
            <td className="px-4 py-2">23</td>
            <td className="px-4 py-2">40 years</td>
            <td className="px-4 py-2">10th with Diploma (Mining Engg)</td>
          </tr>
        </tbody>
      </table>

      <p className="text-blue-500 mb-4">
        <strong>Interested Candidates Can Read the Full Notification Before Apply Online</strong>
      </p>

      <h2 className="text-2xl font-bold mb-4">Important Links</h2>
      <table className="table-auto w-full text-center border border-gray-300 mb-4">
        <tbody>
          <tr>
            <td className="px-4 py-2">
              <span className="font-bold text-green-500">Notification</span>
            </td>
            <td className="px-4 py-2" colSpan={3}>
              <a href="https://img.freejobalert.com/uploads/2024/08/Notification-PSPCL-Various-Vacancy-2024.pdf" target="_blank" rel="nofollow" className="text-blue-500">
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">
              <span className="font-bold text-green-500">Official Website</span>
            </td>
            <td className="px-4 py-2" colSpan={3}>
              <a href="https://pspcl.in/" target="_blank" rel="nofollow noopener" className="text-blue-500">
                Click Here
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}