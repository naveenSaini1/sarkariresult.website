export default function RecruitmentInfo() {
  // This component displays recruitment information for ESIC Faculty & Senior Resident Walk In 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">ESIC Faculty & Senior Resident Walk In 2024</h1>
      <div className="mb-4">
        <p className="text-gray-700 mb-1">
          <span className="font-bold text-green-500">Name of the Post:</span> ESIC Faculty & Senior Resident Walk In 2024
        </p>
        <p className="text-gray-700 mb-1">
          <span className="font-bold text-green-500">Post Date:</span> 09-09-2024
        </p>
        <p className="text-gray-700 mb-1">
          <span className="font-bold text-green-500">Total Vacancy:</span> 70
        </p>
      </div>
      <p className="text-gray-700 mb-4">
        <span className="font-bold text-red-500">Brief Information:</span> Employees State Insurance Corporation (ESIC) Medical College, Hospital Sanathnager, Hyderabad has given an employment notification for the recruitment of Faculty & Senior Resident vacancy on Contractual basis. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Attend.
      </p>
      <table className="table-auto w-full text-center border-collapse border-2 border-gray-300">
        <thead>
          <tr>
            <th colSpan={2} className="p-2 border-b-2 border-gray-300">
              <p className="font-bold text-red-500">Employees State Insurance Corporation (ESIC)</p>
              <p className="font-bold text-pink-500">Advt No 03/2024</p>
              <p className="font-bold text-green-500">Faculty & Senior Resident Vacancy 2024</p>
              <a href="https://www.freejobalert.com" target="_blank" rel="noopener" className="text-blue-500 underline"></a>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th colSpan={2} className="p-2 border-b-2 border-gray-300">
              <p className="font-bold text-red-500">Application Fee</p>
              <ul className="list-disc list-inside">
                <li className="text-gray-700">Fee for all Other Category: Rs. 500/-</li>
                <li className="text-gray-700">Fee for SC/ ST/ Female Candidates/ Ex – Servicemen & PH Candidates: Nil</li>
                <li className="text-gray-700">Mode of Payment: Through Online</li>
              </ul>
            </th>
          </tr>
          <tr>
            <th colSpan={2} className="p-2 border-b-2 border-gray-300">
              <p className="font-bold text-red-500">Important Dates</p>
              <ul className="list-disc list-inside">
                <li className="text-gray-700">Date of Walk In Interview: 19, 20,21, 23, 24, 25-09-2024</li>
              </ul>
            </th>
          </tr>
          <tr>
            <th colSpan={2} className="p-2 border-b-2 border-gray-300">
              <p className="font-bold text-red-500">Age Limit (as on 19-09-2024)</p>
              <ul className="list-disc list-inside">
                <li className="text-gray-700">Maximum Age Limit for Faculty: Not Exceeding 69 Years</li>
                <li className="text-gray-700">Maximum Age Limit for Senior Resident: Not Exceeding 45 Years</li>
                <li className="text-gray-700">Age relaxation is applicable as per rules</li>
              </ul>
            </th>
          </tr>
          <tr>
            <th colSpan={2} className="p-2 border-b-2 border-gray-300">
              <p className="font-bold text-red-500">Qualification</p>
              <ul className="list-disc list-inside">
                <li className="text-gray-700">Faculty/Sr Resident (Emergency Medicine & PMR): Candidates should possess MD/DNB (Concern Specialty)</li>
                <li className="text-gray-700">Faculty/Sr Resident: As per Teacher Eligibility Qualification in Medical Institutions Regulations.</li>
              </ul>
            </th>
          </tr>
          <tr>
            <th colSpan={2} className="p-2 border-b-2 border-gray-300">
              <p className="font-bold text-red-500">Vacancy Details</p>
            </th>
          </tr>
          <tr>
            <th className="p-2 border-b-2 border-gray-300">
              <p className="font-bold text-pink-500">Post Name</p>
            </th>
            <th className="p-2 border-b-2 border-gray-300">
              <p className="font-bold text-pink-500">Total</p>
            </th>
          </tr>
          <tr>
            <td className="p-2 border-b-2 border-gray-300">Faculty</td>
            <td className="p-2 border-b-2 border-gray-300">39</td>
          </tr>
          <tr>
            <td className="p-2 border-b-2 border-gray-300">Sr Resident/ Tutor</td>
            <td className="p-2 border-b-2 border-gray-300">31</td>
          </tr>
          <tr>
            <th colSpan={2} className="p-2 border-b-2 border-gray-300">
              <p className="font-bold text-pink-500">Interested Candidates Can Read the Full Notification Before Attend</p>
            </th>
          </tr>
          <tr>
            <th colSpan={2} className="p-2 border-b-2 border-gray-300">
              <p className="font-bold text-red-500">Important Links</p>
            </th>
          </tr>
          <tr>
            <td className="p-2 border-b-2 border-gray-300">
              <p className="font-bold text-green-500">Notification</p>
            </td>
            <td className="p-2 border-b-2 border-gray-300">
              <a href="https://mchyderabad.esic.gov.in/attachments/recruitmentfile/5a7eec4e7e9b129f15ddfe61e0e13889.pdf" target="_blank" rel="nofollow" className="text-blue-500 underline">Click Here</a>
            </td>
          </tr>
          <tr>
            <td className="p-2 border-b-2 border-gray-300">
              <p className="font-bold text-green-500">Official Website</p>
            </td>
            <td className="p-2 border-b-2 border-gray-300">
              <a href="https://www.esic.gov.in/" target="_blank" rel="nofollow" className="text-blue-500 underline">Click Here</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}