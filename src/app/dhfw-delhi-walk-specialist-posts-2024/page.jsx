export default function RecruitmentInformation() {
  // Displays recruitment information for DHFW, Delhi Specialist 2024 Walk In
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">DHFW, Delhi Specialist 2024 Walk In</h1>
      <div className="mb-4">
        <p className="text-gray-700 mb-2">
          <span className="font-bold text-green-500">Name of the Post:</span> DHFW, Delhi Specialist 2024 Walk In
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-bold text-green-500">Post Date:</span> 01-10-2024
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-bold text-green-500">Total Vacancy:</span> 212
        </p>
      </div>
      <p className="text-gray-700 mb-4">
        <span className="font-bold text-red-500">Brief Information:</span> Department for Health & Family Welfare (DHFW), Delhi has invited applications for the recruitment of Specialist Vacancy on Contract Basis. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Walk In.
      </p>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Important Details</h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>
            <span className="font-bold text-red-500">Age Limit (as on 30-09-2024)</span>
            <ul className="list-disc ml-6 text-gray-700">
              <li>Maximum Age Limit: 45 Years</li>
              <li>Age relaxation is applicable as per rules.</li>
            </ul>
          </li>
          <li>
            <span className="font-bold text-red-500">Qualification</span>
            <ul className="list-disc ml-6 text-gray-700">
              <li>Candidates Should Possess MBBS Degree, PG Degree or Diploma (Concerned Speciality).</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Vacancy Details</h2>
        <table className="table-auto w-full border-collapse border border-gray-300 rounded-md">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left font-bold">Post Name</th>
              <th className="px-4 py-2 text-left font-bold">Total</th>
              <th className="px-4 py-2 text-left font-bold">Date of Interview (09:00 AM)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100">
              <td className="px-4 py-2 text-left">Anaesthesia</td>
              <td className="px-4 py-2 text-left">43</td>
              <td className="px-4 py-2 text-left">11, 14-10-2024</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="px-4 py-2 text-left">Medicine</td>
              <td className="px-4 py-2 text-left">37</td>
              <td className="px-4 py-2 text-left" rowSpan="3">09, 10-10-2024</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="px-4 py-2 text-left">Obst. & Gynae</td>
              <td className="px-4 py-2 text-left">27</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="px-4 py-2 text-left">Surgery</td>
              <td className="px-4 py-2 text-left">24</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="px-4 py-2 text-left">Radiology</td>
              <td className="px-4 py-2 text-left">21</td>
              <td className="px-4 py-2 text-left" rowSpan="2">15, 16-10-2024</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="px-4 py-2 text-left">Orthopaedics</td>
              <td className="px-4 py-2 text-left">18</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="px-4 py-2 text-left">Ophthalmology</td>
              <td className="px-4 py-2 text-left">16</td>
              <td className="px-4 py-2 text-left">18, 19-10-2024</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="px-4 py-2 text-left">Paediatrics</td>
              <td className="px-4 py-2 text-left">11</td>
              <td className="px-4 py-2 text-left">11, 14-10-2024</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="px-4 py-2 text-left">ENT</td>
              <td className="px-4 py-2 text-left">08</td>
              <td className="px-4 py-2 text-left">18, 19-10-2024</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="px-4 py-2 text-left">Pathology</td>
              <td className="px-4 py-2 text-left">07</td>
              <td className="px-4 py-2 text-left">11, 14-10-2024</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-gray-700 mb-4">
        <span className="font-bold text-blue-500">Interested Candidates Can Read the Full Notification Before Walk In</span>
      </p>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Important Links</h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>
            <span className="font-bold text-green-500">Notification</span>
            <a href="https://img.freejobalert.com/uploads/2024/10/Notification-DHFW-Delhi-Specialist-Posts.pdf" target="_blank" className="text-blue-500 underline">Click Here</a>
          </li>
          <li>
            <span className="font-bold text-green-500">Official Website</span>
            <a href="https://health.delhi.gov.in/" target="_blank" className="text-blue-500 underline">Click Here</a>
          </li>
        </ul>
      </div>
    </div>
  );
}