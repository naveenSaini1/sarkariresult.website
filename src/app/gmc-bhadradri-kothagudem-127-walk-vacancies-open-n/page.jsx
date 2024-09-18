export default function RecruitmentInfo() {
  // Recruitment information for GMC, Bhadradri Kothagudem Various Vacancy Walk In 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        <span className="text-green-500">Name of the Post:</span> GMC, Bhadradri Kothagudem Various Vacancy Walk In 2024
      </h1>
      <div className="mb-4">
        <p className="text-gray-700">
          <span className="text-green-500">Post Date:</span> 18-09-2024
        </p>
        <p className="text-gray-700">
          <span className="text-green-500">Total Vacancy:</span> 127
        </p>
      </div>
      <p className="text-gray-700 mb-4">
        <span className="text-red-500">Brief Information:</span> Government Medical College (GMC), Bhadradri Kothagudem has invited applications for the recruitment of Various Vacancy on Contract Basis. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Walk In.
      </p>
      <h2 className="text-2xl font-bold mb-4">Important Dates</h2>
      <ul className="list-disc ml-6">
        <li className="text-gray-700">Date of Walk In Interview: 18-09-2024 (10:30 AM to 03:00 PM)</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>
      <table className="table-auto w-full text-center border-collapse mb-4">
        <thead>
          <tr>
            <th className="border px-4 py-2 bg-gray-100">
              <span className="text-blue-500">Post Name</span>
            </th>
            <th className="border px-4 py-2 bg-gray-100">
              <span className="text-blue-500">Total</span>
            </th>
            <th className="border px-4 py-2 bg-gray-100">
              <span className="text-blue-500">Qualification</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Professor</td>
            <td className="border px-4 py-2">09</td>
            <td className="border px-4 py-2" rowspan="4">MD/MS/DNB (Concerned Subject) <br/></td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Associate Professor</td>
            <td className="border px-4 py-2">35</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Assistant Professor</td>
            <td className="border px-4 py-2">14</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Senior Resident</td>
            <td className="border px-4 py-2">52</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Tutor</td>
            <td className="border px-4 py-2">17</td>
            <td className="border px-4 py-2">MBBS</td>
          </tr>
        </tbody>
      </table>
      <p className="text-gray-700 mb-4">
        <span className="text-blue-500">Interested Candidates Can Read the Full Notification Before Walk In</span>
      </p>
      <h2 className="text-2xl font-bold mb-4">Important Links</h2>
      <table className="table-auto w-full text-center border-collapse mb-4">
        <tbody>
          <tr>
            <td className="border px-4 py-2" colspan="2">
              <span className="text-green-500">Notification</span> <br/>
            </td>
            <td className="border px-4 py-2">
              <a href="https://img.freejobalert.com/uploads/2024/09/Notification-GMC-Badradri-Kothagudem-Professor-Sr-Resident-Other-Posts.pdf" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2" colspan="2">
              <span className="text-green-500">Official Website</span> <br/>
            </td>
            <td className="border px-4 py-2">
              <a href="https://kothagudem.telangana.gov.in/" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}