export default function RecruitmentInfo() {
  // Displays recruitment information for SAMEER Various Vacancy Online Form 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">SAMEER Various Vacancy Online Form 2024</h1>

      <div className="mb-4">
        <p className="text-gray-600 mb-2">
          <span className="font-bold text-green-500">Name of the Post:</span> SAMEER Various Vacancy Online Form 2024
        </p>
        <p className="text-gray-600 mb-2">
          <span className="font-bold text-green-500">Post Date:</span> 27-07-2024
        </p>
        <p className="text-gray-600 mb-2">
          <span className="font-bold text-green-500">Total Vacancy:</span> 101
        </p>
      </div>

      <p className="text-gray-600 mb-4">
        <span className="font-bold text-red-500">Brief Information:</span> Society for Applied Microwave Electronics Engineering & Research (SAMEER) has advertised a notification for the recruitment of Project Asst, Sr Research Scientist & Other Vacancy on a contractual basis. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply Online.
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Important Dates</h2>
      <ul className="list-disc text-gray-600 mb-4">
        <li>Start Date to Apply Online: 27-07-2024</li>
        <li>Last Date to Apply Online: 12-08-2024</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Vacancy Details</h2>
      <table className="table-auto w-full text-gray-600 mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left">Post Name</th>
            <th className="px-4 py-2 text-center">Total</th>
            <th className="px-4 py-2 text-left">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 text-left">Project Assistant</td>
            <td className="px-4 py-2 text-center">34</td>
            <td className="px-4 py-2 text-left">Diploma (Electronics/Medical Electronics)</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-left">Project Technician</td>
            <td className="px-4 py-2 text-center">29</td>
            <td className="px-4 py-2 text-left">ITI/ (NCTVT)(Relevant Trade)</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-left">Senior Research Scientist</td>
            <td className="px-4 py-2 text-center">04</td>
            <td className="px-4 py-2 text-left">B.E/ B.Tech/ PG (Relevant Engg)</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-left">Research Scientist</td>
            <td className="px-4 py-2 text-center">34</td>
            <td className="px-4 py-2 text-left">B.E/ B.Tech/ PG (Relevant Engg)</td>
          </tr>
        </tbody>
      </table>

      <p className="text-gray-600 mb-4">Interested Candidates Can Read the Full Notification Before Apply</p>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Important Links</h2>
      <table className="table-auto w-full text-gray-600 mb-4">
        <tbody>
          <tr>
            <td className="px-4 py-2 text-left font-bold text-green-500">Apply Online</td>
            <td className="px-4 py-2 text-left"><a className="text-blue-500 underline" href="https://recruit.sameer.gov.in/" target="_blank" rel="nofollow">Click here</a></td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-left font-bold text-green-500">Notification</td>
            <td className="px-4 py-2 text-left"><a className="text-blue-500 underline" href="https://sameer.gov.in/storage/recruitment/lwDvXzUX22ZfstBXRQvulTHRSDnY0RM9PRTVNbdz.pdf" target="_blank" rel="nofollow">Click here</a></td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-left font-bold text-green-500">Official Website</td>
            <td className="px-4 py-2 text-left"><a className="text-blue-500 underline" href="https://sameer.gov.in/" target="_blank" rel="nofollow">Click here</a></td>
          </tr>
        </tbody>
      </table>

      <hr className="my-8" />
    </div>
  );
}