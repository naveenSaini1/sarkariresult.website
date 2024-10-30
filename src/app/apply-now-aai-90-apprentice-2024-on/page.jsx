export default function AaiRecruitmentInfo() {
  // This component displays recruitment information for AAI Graduate, Diploma & Trade Apprentice 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">AAI Graduate, Diploma & Trade Apprentice 2024</h1>
      <p className="text-gray-600 text-center mb-4">
        Airports Authority of India (AAI) has announced an employment notification for the recruitment of Graduate, Diploma & Trade Apprentice Vacancies.
      </p>
      <h2 className="text-2xl font-bold mb-2">Key Highlights</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <span className="font-bold">Post Date:</span> 29-10-2024
        </li>
        <li>
          <span className="font-bold">Total Vacancy:</span> 90
        </li>
        <li>
          <span className="font-bold">Last Date to Apply:</span> 20-11-2024
        </li>
        <li>
          <span className="font-bold">Application Fee:</span> Nil
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-2">Important Dates</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Last Date to Apply Online: 20-11-2024</li>
      </ul>

      <h2 className="text-2xl font-bold mb-2">Age Limit (as on 20-11-2024)</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Minimum Age Limit: 18 Years</li>
        <li>Maximum Age Limit: 26 Years</li>
        <li>Age relaxation is applicable as per rules.</li>
      </ul>

      <h2 className="text-2xl font-bold mb-2">Qualification</h2>
      <div className="mb-4">
        <p className="font-bold">For Graduate/Diploma Apprentice:</p>
        <ul className="list-disc list-inside">
          <li>Candidates Should Possess Diploma/Degree (Relevant Engg).</li>
        </ul>
      </div>
      <div className="mb-4">
        <p className="font-bold">For ITI Trade Apprentice:</p>
        <ul className="list-disc list-inside">
          <li>Candidates Should Possess ITI/NCVT (Relevant Trade).</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold mb-2">Vacancy Details</h2>
      <table className="table-auto w-full text-center mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2">Post Name</th>
            <th className="px-4 py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">Graduate Apprentice</td>
            <td className="px-4 py-2">30</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Diploma Apprentice</td>
            <td className="px-4 py-2">30</td>
          </tr>
          <tr>
            <td className="px-4 py-2">ITI Trade Apprentice</td>
            <td className="px-4 py-2">30</td>
          </tr>
        </tbody>
      </table>

      <p className="text-center mb-4">
        Interested Candidates Can Read the Full Notification Before Apply Online.
      </p>

      <h2 className="text-2xl font-bold mb-2">Important Links</h2>
      <table className="table-auto w-full text-center mb-4">
        <tbody>
          <tr>
            <td className="px-4 py-2">Apply Online</td>
            <td className="px-4 py-2">
              <a
                href="https://www.apprenticeshipindia.gov.in/"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
              >
                Link 1
              </a>{' '}
              |
              <a
                href="https://www.nats.education.gov.in/"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
              >
                Link 2
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">Notification</td>
            <td className="px-4 py-2">
              <a
                href="https://img.freejobalert.com/uploads/2024/10/Notifcation-AAI-Graduate-Diploma-Trade-Apprentice-Posts.pdf"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">Official Website</td>
            <td className="px-4 py-2">
              <a
                href="https://www.aai.aero/"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
              >
                Click Here
              </a>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mb-2">FAQs</h2>
      <div className="mb-4">
        <p className="font-bold">
          1. What is the last date to apply for AAI Graduate, Diploma & Trade
          Apprentice 2024?
        </p>
        <p className="mb-2">Ans: Last date for Apply Online is 20-11-2024.</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">
          2. What is the Eligibility to apply for AAI Graduate, Diploma & Trade
          Apprentice 2024?
        </p>
        <p className="mb-2">Ans: ITI, Diploma, Degree (Relevant Discipline).</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">
          3. What is the Upper Age Limit to apply for AAI Graduate, Diploma &
          Trade Apprentice 2024?
        </p>
        <p className="mb-2">Ans: 18-26 Years</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">
          4. How many vacancies are released for AAI Graduate, Diploma & Trade
          Apprentice 2024?
        </p>
        <p className="mb-2">Ans: Total 90 Vacancies.</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">
          5. How much of fee pay for AAI Graduate, Diploma & Trade Apprentice
          2024?
        </p>
        <p className="mb-2">Ans: Nil.</p>
      </div>

      <p className="text-gray-500 text-center mt-4">
        Keywords: AAI, Apprentice, Graduate, Diploma, Trade, Recruitment,
        Application, Notification, Eligibility, Age Limit, Vacancy, Important
        Dates.
      </p>
    </div>
  );
}