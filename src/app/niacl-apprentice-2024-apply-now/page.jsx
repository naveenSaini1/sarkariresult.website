export default function RecruitmentInformation() {
  // This component displays recruitment information for NIACL Apprentice Vacancy 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">NIACL Apprentice Vacancy 2024</h1>

      <div className="mb-4">
        <p className="text-gray-700">
          <span className="font-bold text-green-500">Name of the Post:</span> NIACL Apprentice Online Form 2024
        </p>
        <p className="text-gray-700">
          <span className="font-bold text-green-500">Post Date:</span> 16-09-2024
        </p>
        <p className="text-gray-700">
          <span className="font-bold text-green-500">Total Vacancy:</span> 325
        </p>
      </div>

      <p className="text-gray-700 mb-4">
        <span className="font-bold text-red-500">Brief Information:</span> The New India Assurance Company Ltd. (NIACL) has given an employment notification for the recruitment of Apprentice Vacancy. Those Candidates who are interested in the vacancy details &amp; completed all eligibility criteria can read the Notification &amp; Apply Online.
      </p>

      <div className="mb-4">
        <p className="font-bold text-red-500 text-center mb-2">The New India Assurance Company Ltd. (NIACL)</p>
        <p className="font-bold text-green-500 text-center mb-2">Apprentice Vacancy 2024</p>
        <p className="text-center mb-2">
          <a href="https://www.freejobalert.com" target="_blank" rel="noopener" className="text-blue-500 hover:underline">
            
          </a>
        </p>
      </div>

      <table className="table-auto w-full text-center mb-4">
        <thead>
          <tr>
            <th colSpan="2" className="font-bold text-red-500">Application Fee</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="2">Available on 21-09-2024</td>
          </tr>
        </tbody>
      </table>

      <table className="table-auto w-full text-center mb-4">
        <thead>
          <tr>
            <th colSpan="2" className="font-bold text-red-500">Important Dates</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Starting Date for Apply Online</td>
            <td>21-09-2024</td>
          </tr>
          <tr>
            <td>Last Date for Apply Online</td>
            <td>05-10-2024</td>
          </tr>
        </tbody>
      </table>

      <table className="table-auto w-full text-center mb-4">
        <thead>
          <tr>
            <th colSpan="2" className="font-bold text-red-500">Age Limit (as on 01-09-2024)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Minimum Age Limit</td>
            <td>21 years</td>
          </tr>
          <tr>
            <td>Maximum Age Limit</td>
            <td>30 years</td>
          </tr>
        </tbody>
      </table>

      <table className="table-auto w-full text-center mb-4">
        <thead>
          <tr>
            <th colSpan="2" className="font-bold text-red-500">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="2">Candidates Should posses Any Degree</td>
          </tr>
        </tbody>
      </table>

      <table className="table-auto w-full text-center mb-4">
        <thead>
          <tr>
            <th className="font-bold text-red-500">Post Name</th>
            <th className="font-bold text-red-500">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Apprentice</td>
            <td>325</td>
          </tr>
        </tbody>
      </table>

      <p className="text-blue-500 text-center mb-4">Interested Candidates Can Read the Full Notification Before Online</p>

      <table className="table-auto w-full text-center mb-4">
        <thead>
          <tr>
            <th className="font-bold text-red-500">Important Links</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Apply Online</td>
            <td>Available on 21-09-2024</td>
          </tr>
          <tr>
            <td>Detailed Notification</td>
            <td>Available on 21-09-2024</td>
          </tr>
          <tr>
            <td>Short Notification</td>
            <td>
              <a href="https://img.freejobalert.com/uploads/2024/09/Notification-NIACL-Apprentice-Posts.jpeg" target="_blank" rel="nofollow" className="text-blue-500 hover:underline">
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td>Official Website</td>
            <td>
              <a href="https://www.newindia.co.in/portal/" target="_blank" rel="nofollow" className="text-blue-500 hover:underline">
                Click Here
              </a>
            </td>
          </tr>
        </tbody>
      </table>

      <hr className="my-8 border-gray-300" />
    </div>
  );
}