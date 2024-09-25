export default function RecruitmentInfo() {
  // This component displays recruitment information for Hindustan Urvarak & Rasayan Limited (HURL)
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Hindustan Urvarak & Rasayan Limited (HURL) Recruitment</h1>
      <div className="flex flex-col gap-4">
        <p className="text-gray-600">
          <span className="font-bold text-green-500">Name of the Post:</span> HURL Various Vacancy 2024 Provisionally Selected Candidates List Released
        </p>
        <p className="text-gray-600">
          <span className="font-bold text-green-500">Post Date:</span> 23-04-2024
        </p>
        <p className="text-gray-600">
          <span className="font-bold text-green-500">Latest Update:</span> 25-09-2024
        </p>
        <p className="text-gray-600">
          <span className="font-bold text-green-500">Total Vacancy:</span> 80
        </p>
      </div>
      <p className="text-gray-600 mb-4">
        <span className="font-bold text-red-500">Brief Information:</span> Hindustan Urvarak & Rasayan Limited (HURL) has published a notification for the recruitment of Manager, Engineer, Officer & Other Vacancies. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply Online.
      </p>
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Important Dates</h2>
        <ul className="list-disc ml-4 text-gray-600">
          <li>Starting Date for Apply Online: <strong>21-04-2024 (01:00 PM)</strong></li>
          <li>Last Date for Apply Online: <strong>20-05-2024 (05:00 PM)</strong></li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Qualification</h2>
        <ul className="list-disc ml-4 text-gray-600">
          <li>Candidates Should possess CA,CMA,Degree,PG Diploma/PG (Relevant Discipline)</li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Vacancy Details</h2>
        <table className="table-auto w-full text-gray-600">
          <thead>
            <tr>
              <th className="text-left font-bold text-red-500">Post Name</th>
              <th className="text-center font-bold text-red-500">Total</th>
              <th className="text-center font-bold text-red-500">Upper Age Limit (as on 20-05-2024)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-left">Manager/ (L2)</td>
              <td className="text-center">20</td>
              <td className="text-center">40 Years</td>
            </tr>
            <tr>
              <td className="text-left">Engineer/ (L-1)</td>
              <td className="text-center">34</td>
              <td className="text-center">30 Years</td>
            </tr>
            <tr>
              <td className="text-left">Officer/ (L1)</td>
              <td className="text-center">14</td>
              <td className="text-center">30 Years</td>
            </tr>
            <tr>
              <td className="text-left">Chief Manager- (L3)</td>
              <td className="text-center">02</td>
              <td className="text-center">47 Years</td>
            </tr>
            <tr>
              <td className="text-left">Assistant Manager/(L1) FTC</td>
              <td className="text-center">07</td>
              <td className="text-center">45 Years</td>
            </tr>
            <tr>
              <td className="text-left">Officer/ (L1) FTC</td>
              <td className="text-center">03</td>
              <td className="text-center">35 Years</td>
            </tr>
          </tbody>
        </table>
        <p className="text-gray-600">For More Details Refer the Notification</p>
        <p className="text-gray-600">Interested Candidates Can Read the Full Notification Before Apply Online</p>
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Important Links</h2>
      <div className="mb-4">
        <p className="text-gray-600">
          <span className="font-bold text-green-500">Provisionally Selected Candidates List (25-09-2024):</span>{' '}
          <a href="https://hurl.net.in/results" target="_blank" rel="noopener" className="text-blue-500">
            Click Here
          </a>
        </p>
        <p className="text-gray-600">
          <span className="font-bold text-green-500">Apply Online:</span>{' '}
          <a href="https://jobs.hurl.net.in/" target="_blank" rel="noopener" className="text-blue-500">
            Click Here
          </a>
        </p>
        <p className="text-gray-600">
          <span className="font-bold text-green-500">Notification:</span>{' '}
          <a href="https://jobs.hurl.net.in/others/E%2002%202024.pdf" target="_blank" rel="noopener" className="text-blue-500">
            Click Here
          </a>
        </p>
        <p className="text-gray-600">
          <span className="font-bold text-green-500">Official Website:</span>{' '}
          <a href="https://hurl.net.in/" target="_blank" rel="noopener" className="text-blue-500">
            Click Here
          </a>
        </p>
      </div>
    </div>
  );
}