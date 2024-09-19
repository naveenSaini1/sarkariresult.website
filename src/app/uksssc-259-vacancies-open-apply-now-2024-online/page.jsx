export default function RecruitmentInformation() {
  // Displays recruitment information for UKSSSC Various Vacancy 2024
  return (

    <div className="container mx-auto px-4 py-8">

      <h1 className="text-3xl font-bold mb-4">UKSSSC Various Vacancy 2024</h1>

      <div className="mb-4">
        <p className="font-bold text-green-500">Name of the Post:</p>
        <p>UKSSSC Various Vacancy Online Form 2024</p>
      </div>

      <div className="mb-4">
        <p className="font-bold text-green-500">Post Date:</p>
        <p>19-09-2024</p>
      </div>

      <div className="mb-4">
        <p className="font-bold text-green-500">Total Vacancy:</p>
        <p>259</p>
      </div>

      <div className="mb-4">
        <p className="font-bold text-red-500">Brief Information:</p>
        <p>Uttarakhand Subordinate Service Selection Commission (UKSSSC) has invited applications for the recruitment of Additional Private Secretary, Personal Assistant & Other. Those Candidates who are interested in the vacancy details &amp; completed all eligibility criteria can read the Notification &amp; Apply.</p>
      </div>

      <h2 className="text-2xl font-bold mb-4">Uttarakhand Subordinate Service Selection Commission (UKSSSC)</h2>

      <div className="mb-4">
        <p className="font-bold text-red-500 text-center">Application Fee</p>
        <ul className="list-disc ml-6">
          <li>For Unreserved/OBC Category Candidates: <strong>Rs. 300/-</strong></li>
          <li>For SC/ST/EWS Category Candidates: <strong>Rs. 150/-</strong></li>
          <li>For Divyang Candidates: <strong>Rs. 150/-</strong></li>
          <li>For Orphan Candidates: <strong>Nil</strong></li>
          <li>Payment Mode: <strong>Through Credit Card/ Debit Card / Net Banking / UPI</strong></li>
        </ul>
      </div>

      <div className="mb-4">
        <p className="font-bold text-red-500 text-center">Important Dates</p>
        <ul className="list-disc ml-6">
          <li>Date Of Publication Of Advertisement: <strong>17-09-2024</strong></li>
          <li>Starting Date for Apply Online: <strong>24-09-2024</strong></li>
          <li>Last Date to Apply Online: <strong>14-10-2024</strong></li>
          <li>Date/Duration for making corrections in Online Application Form: <strong>18-10-2024 to 21-10-2024</strong></li>
          <li>Tentative Date of Written Examination: <strong>08-12-2024</strong></li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>
      <table className="table-auto w-full mb-4">
        <thead>
          <tr>
            <th className="text-center text-purple-500">Post Name</th>
            <th className="text-center text-purple-500">Total</th>
            <th className="text-center text-purple-500">Age Limit (as on 01-07-2024)</th>
            <th className="text-center text-purple-500">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center">Additional Private Secretary</td>
            <td className="text-center">03</td>
            <td className="text-center">21 – 42 Years</td>
            <td className="text-center">Any Degree (Typing Speed of 80 words per minute in Stenography both in Hindi and English and minimum 4000 Key depressions per hour in English/Hindi typing on Computer)</td>
          </tr>
          <tr>
            <td className="text-center">Personnel Assistant</td>
            <td className="text-center">236</td>
            <td className="text-center">18 – 42 Years</td>
            <td className="text-center">Inter/Any Degree</td>
          </tr>
          <tr>
            <td className="text-center">Stenographer/Personnel Assistant</td>
            <td className="text-center">15</td>
            <td className="text-center">21 – 42 Years</td>
            <td className="text-center">Any Degree</td>
          </tr>
          <tr>
            <td className="text-center">Stenographer cum Data Entry Operator</td>
            <td className="text-center">03</td>
            <td className="text-center">18 – 42 Years</td>
            <td className="text-center" rowSpan="2">Inter<br/>
            </td>
          </tr>
          <tr>
            <td className="text-center">Personnel Assistant/Stenographer Grade II</td>
            <td className="text-center">02</td>
            <td className="text-center">21 – 42 Years</td>
          </tr>
        </tbody>
      </table>

      <p className="text-center text-purple-500 font-bold mb-4">Interested Candidates Can Read the Full Notification Before Apply Online</p>

      <h2 className="text-2xl font-bold mb-4">Important Links</h2>

      <table className="table-auto w-full">
        <tbody>
          <tr>
            <td className="text-center" colSpan="3">
              <p className="font-bold text-green-500">Apply Online</p>
            </td>
            <td className="text-center">Available on 24-09-2024</td>
          </tr>
          <tr>
            <td className="text-center" colSpan="3">
              <p className="font-bold text-green-500">Notification</p>
            </td>
            <td className="text-center">
              <a href="https://sssc.uk.gov.in/files/stenoadd17.pdf" target="_blank" rel="nofollow" className="text-blue-500">Click here</a>
            </td>
          </tr>
          <tr>
            <td className="text-center" colSpan="3">
              <p className="font-bold text-green-500">Official Website</p>
            </td>
            <td className="text-center">
              <a href="https://sssc.uk.gov.in/" target="_blank" rel="nofollow" className="text-blue-500">Click here</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}