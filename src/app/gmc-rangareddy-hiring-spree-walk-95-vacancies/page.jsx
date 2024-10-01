export default function RecruitmentInformation() {
  // This component displays recruitment information for Government Medical College (GMC), Rangareddy
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">GMC, Rangareddy Various Vacancy Walk in 2024</h1>
      <div className="mb-4">
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Name of the Post:</span> GMC, Rangareddy Various Vacancy Walk in 2024
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Post Date:</span> 30-09-2024
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Total Vacancy:</span> 95
        </p>
      </div>
      <p className="text-lg mb-4">
        <span className="text-red-500">Brief Information:</span> Government Medical College (GMC), Rangareddy has given an employment for the recruitment of Professor, Asst Professor, Sr Resident & Other Vacancy on Contract Basis. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Attend.
      </p>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Important Dates</h2>
        <ul className="list-disc pl-5">
          <li className="mb-2">Date of walk-in Interview: <span className="font-bold">04-10-2024 (10:00 AM to 4:00 PM)</span></li>
          <li className="mb-2">Date of Provisional list: <span className="font-bold">07-10-2024</span></li>
          <li className="mb-2">Date of Objections will be taken up: <span className="font-bold">08-10-2024 (upto 4 PM)</span></li>
          <li className="mb-2">Date of Final list: <span className="font-bold">09-10-2024</span></li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Age Limit (as on 24-08-2024)</h2>
        <ul className="list-disc pl-5">
          <li className="mb-2">Maximum Age: <span className="font-bold">Should be below 69 Years</span></li>
          <li>Age relaxation is admissible as per rules.</li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Qualification</h2>
        <ul className="list-disc pl-5">
          <li>Candidates Should Posses MD/MS/DNB (Concerned Subject)</li>
        </ul>
      </div>
      <h2 className="text-2xl font-bold mb-2">Vacancy Details</h2>
      <table className="table-auto w-full mb-4">
        <thead>
          <tr className="text-pink-500 font-bold">
            <th className="text-center">Post Name</th>
            <th className="text-center">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td>Professor</td>
            <td>04</td>
          </tr>
          <tr className="text-center">
            <td>Associate Professor</td>
            <td>08</td>
          </tr>
          <tr className="text-center">
            <td>Assistant Professor</td>
            <td>39</td>
          </tr>
          <tr className="text-center">
            <td>Senior Resident</td>
            <td>44</td>
          </tr>
        </tbody>
      </table>
      <p className="text-lg font-medium mb-4">
        <span className="text-blue-500">Interested Candidates Can Read the Full Notification Before Attend</span>
      </p>
      <h2 className="text-2xl font-bold mb-2">Important Links</h2>
      <table className="table-auto w-full">
        <tbody>
          <tr className="text-center">
            <td className="text-green-500 font-bold">Notification</td>
            <td className="text-center"><a href="https://img.freejobalert.com/uploads/2024/09/Notification-GMC-Rangareddy-Professor-Asst-Professor-Other-Posts.pdf" target="_blank" rel="nofollow" className="text-blue-500 font-bold">Click Here</a></td>
          </tr>
          <tr className="text-center">
            <td className="text-green-500 font-bold">Official Website</td>
            <td className="text-center"><a href="https://rangareddy.telangana.gov.in/" target="_blank" rel="nofollow" className="text-blue-500 font-bold">Click Here</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}