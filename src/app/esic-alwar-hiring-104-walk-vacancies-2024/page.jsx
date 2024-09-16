export default function RecruitmentInfo() {
  // This component displays recruitment information for ESIC, Alwar, including job details, application fees, important dates, vacancy details, and links to the official notification and website.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">ESIC, Alwar Various Vacancy Walk in 2024</h1>

      <div className="mb-4">
        <p className="font-bold text-green-500">Name of the Post:</p>
        <p>ESIC, Alwar Various Vacancy Walk in 2024</p>
      </div>

      <div className="mb-4">
        <p className="font-bold text-green-500">Post Date:</p>
        <p>16-09-2024</p>
      </div>

      <div className="mb-4">
        <p className="font-bold text-green-500">Total Vacancy:</p>
        <p>104</p>
      </div>

      <div className="mb-4">
        <p className="font-bold text-red-500">Brief Information:</p>
        <p>
          Employees State Insurance Corporation (ESIC) has invited an application for
          the recruitment of Professor, Senior Resident & Other Vacancy on
          Contract basis. Those Candidates who are interested in the vacancy
          details & completed all eligibility criteria can read the Notification &
          Walk in.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Application Fee</h2>
        <ul className="list-disc ml-6">
          <li>
            Fee for All Other Category Candidates: <strong className="text-black">Rs. 225/-</strong>
          </li>
          <li>
            Fee for SC/ST/ESIC (Regular Employees)/Female Candidates/EX-Servicemen & PH Candidates: <strong className="text-black">Nil</strong>
          </li>
          <li>
            Payment mode: <strong className="text-black">Through Demand Draft</strong>
          </li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Important Dates</h2>
        <ul className="list-disc ml-6">
          <li>Date of Walk in Interview: <strong className="text-black">24-09-2024</strong></li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Age Limit (as on 24-09-2024)</h2>
        <ul className="list-disc ml-6">
          <li>Maximum Age limit for Senior Resident: <strong className="text-black">45 Years</strong></li>
          <li>Maximum Age limit for Faculty: <strong className="text-black">69 years</strong></li>
          <li>Maximum Age limit for Super Specialists: <strong className="text-black">67 Years</strong></li>
          <li>Age Relaxation is Applicable as per rules</li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Qualification</h2>
        <ul className="list-disc ml-6">
          <li>
            Candidates Should Possess MBBS / PG Degree (Concerned Speciality).
          </li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Vacancy Details</h2>
        <table className="table-auto w-full text-center border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 border border-gray-300 font-bold text-pink-500">Post Name</th>
              <th className="px-4 py-2 border border-gray-300 font-bold text-pink-500">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Professor</td>
              <td className="px-4 py-2 border border-gray-300">09</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Associate Professor</td>
              <td className="px-4 py-2 border border-gray-300">21</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Assistant Professor</td>
              <td className="px-4 py-2 border border-gray-300">25</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Senior Resident</td>
              <td className="px-4 py-2 border border-gray-300">34</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Senior Resident (GDMO)</td>
              <td className="px-4 py-2 border border-gray-300">15</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mb-4">
        <p className="font-bold text-blue-500">Interested Candidates Can Read the Full Notification Before Walk in</p>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Important Links</h2>
        <table className="table-auto w-full text-center border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 border border-gray-300 font-bold text-green-500">Link</th>
              <th className="px-4 py-2 border border-gray-300 font-bold text-green-500">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Notification</td>
              <td className="px-4 py-2 border border-gray-300">
                <a href="https://img.freejobalert.com/uploads/2024/09/Notification-ESIC-Alwar-Professor-Senior-Resident-Other-Posts.pdf" className="text-blue-500 underline" target="_blank" rel="nofollow">Click Here</a>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Official Website</td>
              <td className="px-4 py-2 border border-gray-300">
                <a href="https://www.esic.gov.in/" className="text-blue-500 underline" target="_blank" rel="nofollow">Click Here</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}