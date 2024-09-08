export default function RecruitmentInfo() {
  // Displays recruitment information for ESIC Senior Resident vacancy in Indore. 
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        <span className="text-green-500">Name of the Post:</span> ESIC, Indore Senior Resident 2024 Walk in
      </h1>
      <div className="mb-4">
        <p className="font-bold">
          <span className="text-green-500">Post Date</span>: 11-08-2024
        </p>
        <p className="font-bold">
          <span className="text-green-500">Total Vacancy</span>: 51
        </p>
      </div>
      <p className="mb-4">
        <span className="text-red-500 font-bold">Brief Information </span>: Employees’ State Insurance Corporation (ESIC), Indore has given an employment notification for the recruitment of Senior Resident Vacancy. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Attend
      </p>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">
          <span className="text-red-500">Important Date</span>
        </h2>
        <ul className="list-disc ml-6">
          <li>Date of Interview: 14-08-2024</li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">
          <span className="text-red-500">Age Limit (as on 14-08-2024)</span>
        </h2>
        <ul className="list-disc ml-6">
          <li>Maximum Age Limit: Not exceeding 45 years</li>
          <li>Age Relaxation is Applicable as Per Rules</li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">
          <span className="text-red-500">Qualification</span>
        </h2>
        <ul className="list-disc ml-6">
          <li>Candidates Should Possess MBBS/PG Diploma or Degree (Concerned Speciality)</li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">
          <span className="text-red-500">Vacancy Details</span>
        </h2>
        <table className="table-auto w-full text-center border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">
                <span className="text-blue-500 font-bold">S.No.</span>
              </th>
              <th className="px-4 py-2 col-span-3">
                <span className="text-blue-500 font-bold">Post Name</span>
              </th>
              <th className="px-4 py-2">
                <span className="text-blue-500 font-bold">Total</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2">1.</td>
              <td className="px-4 py-2 col-span-3">Senior Resident</td>
              <td className="px-4 py-2">51</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mb-4">
        <p className="text-blue-500 font-bold">Interested Candidates Can Read the Full Notification Before Attend</p>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">
          <span className="text-red-500">Important Links</span>
        </h2>
        <table className="table-auto w-full text-center border-collapse border border-gray-300">
          <tbody>
            <tr>
              <td className="px-4 py-2 col-span-4">
                <span className="text-green-500 font-bold">Notification</span>
              </td>
              <td className="px-4 py-2">
                <a href="https://img.freejobalert.com/uploads/2024/08/Notification-ESIC-Indore-Senior-Resident-2024.pdf" target="_blank" rel="nofollow" className="text-blue-500 font-bold">
                  Click Here
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 col-span-4">
                <span className="text-green-500 font-bold">Official Website</span>
              </td>
              <td className="px-4 py-2">
                <a href="https://www.esic.gov.in/" target="_blank" rel="nofollow" className="text-blue-500 font-bold">
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