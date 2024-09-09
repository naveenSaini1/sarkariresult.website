export default function RecruitmentInfo() {
  // Displays recruitment information for Prasar Bharati House, New Delhi Technical Assistant Vacancy 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Prasar Bharati House, New Delhi Technical Assistant Vacancy 2024</h1>
      <p className="mb-4">
        <span className="text-green-500 font-bold">Name of the Post:</span> Prasar Bharati House, New Delhi Technical Assistant Online Form 2024
      </p>
      <div className="mb-4">
        <p className="text-justify font-bold">
          <span className="text-green-500 font-bold">Post Date: </span>
          <strong>09-09-2024</strong>
        </p>
        <p className="text-justify font-bold">
          <span className="text-green-500 font-bold">Total Vacancy: </span>
          <strong>70</strong>
        </p>
      </div>
      <p className="mb-4">
        <span className="text-red-500 font-bold">Brief Information:</span>{' '}
        Prasar Bharati House, Delhi has invites an application for the recruitment of Technical Assistant Vacancy on Contract Basis. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply Online.
      </p>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Important Dates</h2>
        <ul className="list-disc pl-5">
          <li>Date of Publication: <strong>29-08-2024</strong></li>
          <li>Last Date to Apply Online: <strong>Within 15 days from the date of Publication</strong></li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Age Limit (as on 29-08-2024)</h2>
        <ul className="list-disc pl-5">
          <li>
            <span className="text-gray-900 font-bold">Maximum Age:</span>
            <strong> Below 35 Years</strong>
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Qualification</h2>
        <ul className="list-disc pl-5">
          <li>Candidates Should Possess Diploma/Degree (Relevant Discipline)</li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Vacancy Details</h2>
        <table className="table-auto w-full text-center border-2">
          <thead>
            <tr>
              <th className="text-red-500 font-bold">Post Name</th>
              <th className="text-red-500 font-bold">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-gray-900">Technical Assistant</td>
              <td className="text-gray-900">70</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-blue-500 font-bold mb-4">
        Interested Candidates Can Read the Full Notification Before Apply Online
      </p>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Important Links</h2>
        <table className="table-auto w-full text-center border-2">
          <tbody>
            <tr>
              <td className="text-green-500 font-bold">Apply Online</td>
              <td className="text-blue-500">
                <a href="https://applications.prasarbharati.org/" target="_blank" rel="nofollow">
                  Click Here
                </a>
              </td>
            </tr>
            <tr>
              <td className="text-green-500 font-bold">Notification</td>
              <td className="text-blue-500">
                <a href="https://img.freejobalert.com/uploads/2024/09/Notification-Prasat-Bharati-Technical-Assistant-Posts.pdf" target="_blank" rel="nofollow">
                  Click Here
                </a>
              </td>
            </tr>
            <tr>
              <td className="text-green-500 font-bold">Official Website</td>
              <td className="text-blue-500">
                <a href="https://prasarbharati.gov.in/" target="_blank" rel="nofollow">
                  Click Here
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}