export default function HURLRecruitment() {
  // This component displays recruitment information for Hindustan Urvarak & Rasayan Limited (HURL) Diploma & Graduate Engineer Trainee 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Hindustan Urvarak & Rasayan Limited (HURL) Recruitment</h1>
      <h2 className="text-2xl font-bold mb-2">Diploma & Graduate Engineer Trainee Vacancy 2024</h2>
      <p className="text-gray-600 mb-4">Advt: HURL/GET-DET/2024/01</p>

      <div className="mb-4">
        <p className="font-bold text-green-500">Name of the Post:</p>
        <p className="text-gray-600">HURL Diploma & Graduate Engineer Trainee 2024 Online Form</p>
      </div>
      <div className="mb-4">
        <p className="font-bold text-green-500">Post Date:</p>
        <p className="text-gray-600">29-09-2024</p>
      </div>
      <div className="mb-4">
        <p className="font-bold text-green-500">Total Vacancy:</p>
        <p className="text-gray-600">212</p>
      </div>

      <p className="font-bold text-red-500 mb-4">Brief Information:</p>
      <p className="text-gray-600 mb-4">
        Hindustan Urvarak & Rasayan Limited (HURL) has advertised a notification for the recruitment of Diploma & Graduate Engineer Trainee Vacancies. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply Online.
      </p>

      <div className="mb-4">
        <p className="font-bold text-red-500">Application Fee</p>
        <ul className="list-disc pl-5 text-gray-600">
          <li>Candidates are required to pay a Non-Refundable fee: Rs.750/- in case of GETs and Rs. 500/- (Five hundred only) in case of DETs</li>
          <li>Payment Mode: Through Online</li>
        </ul>
      </div>

      <div className="mb-4">
        <p className="font-bold text-red-500">Important Dates</p>
        <ul className="list-disc pl-5 text-gray-600">
          <li>Starting Date for Apply Online: 01-10-2024 (01:00 P.M)</li>
          <li>Last Date for Apply Online: 21-10-2024 (5:00 P.M)</li>
          <li>Cut-off date for reckoning eligibility for all purposes: 30-09-2024</li>
        </ul>
      </div>

      <div className="mb-4">
        <p className="font-bold text-red-500">Age Limit (as on 30-09-2024)</p>
        <ul className="list-disc pl-5 text-gray-600">
          <li>Minimum age Limit: 18 Years</li>
          <li>Maximum age Limit for Graduate Engineer Trainee: 30 Years</li>
          <li>Maximum age Limit for Diploma Engineer Trainee: 27 Years</li>
        </ul>
      </div>

      <div className="mb-4">
        <p className="font-bold text-red-500">Qualification</p>
        <ul className="list-disc pl-5 text-gray-600">
          <li>Candidates Should possess Diploma/Degree (Relevant Engg)</li>
        </ul>
      </div>

      <h2 className="font-bold text-red-500 mb-4">Vacancy Details</h2>
      <table className="table-auto w-full border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 text-center font-bold text-gray-600">Post Name</th>
            <th className="px-4 py-2 text-center font-bold text-gray-600">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 text-center">Graduate Engineer Trainee</td>
            <td className="px-4 py-2 text-center">67</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center">Diploma Engineer Trainee</td>
            <td className="px-4 py-2 text-center">145</td>
          </tr>
        </tbody>
      </table>

      <p className="text-blue-500 font-bold mb-4">Interested Candidates Can Read the Full Notification Before Apply Online</p>

      <h2 className="font-bold text-red-500 mb-4">Important Links</h2>
      <table className="table-auto w-full border border-gray-300">
        <tbody>
          <tr>
            <td className="px-4 py-2 text-center font-bold text-green-500">Apply Online</td>
            <td className="px-4 py-2 text-center">Available on 01-10-2024</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center font-bold text-green-500">Notification</td>
            <td className="px-4 py-2 text-center"><a href="https://img.freejobalert.com/uploads/2024/09/Notification-HURL-Diploma-Graduate-Engineer-Trainee-Posts.pdf" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a></td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center font-bold text-green-500">Official Website</td>
            <td className="px-4 py-2 text-center"><a href="https://hurl.net.in/" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}