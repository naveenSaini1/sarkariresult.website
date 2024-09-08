export default function RecruitmentInfo() {
  // Displays recruitment information for Cochin Shipyard Limited Ship Draftsman Trainee vacancy
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Cochin Shipyard Limited (CSL) - Ship Draftsman Trainee Vacancy 2024</h1>

      <p className="mb-4">
        <span className="text-green-500 font-bold">Name of the Post:</span>{' '}
        <span>Cochin Shipyard Ltd Ship Draftsman Trainee Online Form 2024</span>
      </p>

      <p className="mb-4 text-justify">
        <span className="text-green-500 font-bold">Post Date:</span>{' '}
        <span>17-08-2024</span>
      </p>

      <p className="mb-4 text-justify">
        <span className="text-green-500 font-bold">Total Vacancy:</span>{' '}
        <span>64</span>
      </p>

      <p className="mb-4">
        <span className="text-red-500 font-bold">Brief Information:</span>{' '}
        Cochin Shipyard Limited (CSL) has invited applications for the recruitment of Ship Draftsman Trainee vacancy.
        Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the
        Notification & Apply Online.
      </p>

      <h2 className="text-2xl font-bold mb-4">Application Details</h2>

      <div className="mb-4">
        <p className="text-red-500 font-bold text-center">Application Fee</p>
        <ul className="list-disc pl-8">
          <li>For Other Candidates: <span>Rs. 600/-</span></li>
          <li>For SC / ST Candidates: <span>Nil</span></li>
          <li>Payment Mode: <span>Through Debit Card/ Credit Card/ Internet Banking/ Wallets/ UPI</span></li>
        </ul>
      </div>

      <div className="mb-4">
        <p className="text-red-500 font-bold text-center">Important Dates</p>
        <ul className="list-disc pl-8">
          <li>Starting Date for Apply Online: <span>14-08-2024</span></li>
          <li>Last Date to Apply Online: <span>31-08-2024</span></li>
        </ul>
      </div>

      <div className="mb-4">
        <p className="text-red-500 font-bold text-center">Age Limit (as on 31-08-2024)</p>
        <ul className="list-disc pl-8">
          <li>Maximum Age Limit: <span>25 Years</span></li>
          <li>Age relaxation is applicable as per rules.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>

      <table className="table-auto w-full text-center mb-4 border-2 border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 font-bold text-red-500">Post Name</th>
            <th className="px-4 py-2 font-bold text-red-500">Total</th>
            <th className="px-4 py-2 font-bold text-red-500">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 text-blue-500">Ship Draftsman Trainee (Mechanical)</td>
            <td className="px-4 py-2">46</td>
            <td className="px-4 py-2">SSLC/ Diploma (Mechanical Engg)</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Ship Draftsman Trainee (Electrical)</td>
            <td className="px-4 py-2">18</td>
            <td className="px-4 py-2">SSLC/ Diploma (Electrical Engg)</td>
          </tr>
        </tbody>
      </table>

      <p className="mb-4 text-blue-500 text-center">
        <strong>Interested Candidates Can Read the Full Notification Before Apply Online</strong>
      </p>

      <h2 className="text-2xl font-bold mb-4">Important Links</h2>

      <table className="table-auto w-full text-center border-2 border-gray-300">
        <tbody>
          <tr>
            <td className="px-4 py-2 text-green-500 font-bold">Apply Online</td>
            <td className="px-4 py-2">
              <a href="https://cdn.digialm.com//EForms/configuredHtml/32530/88502/Registration.html" target="_blank" rel="nofollow" className="text-blue-500">
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-green-500 font-bold">Notification</td>
            <td className="px-4 py-2">
              <a href="https://img.freejobalert.com/uploads/2024/08/Notification-Cochin-shipyard-ltd-ship-Draftsman-trainee-2024.pdf" target="_blank" rel="nofollow" className="text-blue-500">
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-green-500 font-bold">Official Website</td>
            <td className="px-4 py-2">
              <a href="https://cochinshipyard.in/" target="_blank" rel="nofollow" className="text-blue-500">
                Click Here
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}