export default function RecruitmentInfo() {
  // Displays recruitment information for AIIMS Kalyani Sr Resident (Non Academic) 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">AIIMS Kalyani Sr Resident (Non Academic) 2024</h1>
      <div className="mb-4">
        <p className="text-gray-600 mb-2">
          <span className="font-bold">Name of the Post:</span> AIIMS Kalyani Sr Resident (Non Academic) 2024 Online Form
        </p>
        <p className="text-gray-600 mb-2">
          <span className="font-bold">Post Date:</span> 24-09-2024
        </p>
        <p className="text-gray-600 mb-2">
          <span className="font-bold">Total Vacancy:</span> 94
        </p>
      </div>
      <p className="text-gray-600 mb-4">
        <span className="font-bold text-red-500">Brief Information:</span> All India Institute of Medical Sciences (AIIMS) Kalyani has announced notification for the recruitment of Sr Resident (Non Academic) on Tenure Basis. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply Online.
      </p>
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Application Details</h2>
        <div className="bg-gray-100 p-4 rounded-md">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Application Fee</h3>
          <ul className="list-disc pl-6">
            <li className="text-gray-600">Fee For Unreserved/OBC/EWS candidates: <strong>Rs.1000/-</strong></li>
            <li className="text-gray-600">Fee For SC/ ST Candidates: <strong>Nil</strong></li>
            <li className="text-gray-600">Payment mode: <strong>Through NEFT</strong></li>
          </ul>
        </div>
        <div className="bg-gray-100 p-4 rounded-md mt-4">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Important Dates</h3>
          <ul className="list-disc pl-6">
            <li className="text-gray-600">Last Date of Apply Online & Payment of fee: <strong>28-09-2024 (05:00 PM)</strong></li>
            <li className="text-gray-600">Date of Interview: <strong>07-10-2024 to 08-10-2024 (09:30 Hrs Onward)</strong></li>
          </ul>
        </div>
        <div className="bg-gray-100 p-4 rounded-md mt-4">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Age Limit (as on 20-09-2024)</h3>
          <ul className="list-disc pl-6">
            <li className="text-gray-600">Maximum Age: <strong>45 Years</strong></li>
            <li className="text-gray-600">Age relaxation is applicable as per rules.</li>
          </ul>
        </div>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Qualification</h2>
        <ul className="list-disc pl-6">
          <li className="text-gray-600">
            <strong>For Sr Resident:</strong> Candidates Should Possess PG Medical Degree (MD/ MS/ DM/ MCh/ DNB) (respective discipline).
          </li>
          <li className="text-gray-600">
            <strong>For Sr Demonstrator:</strong> Candidates Should Possess M.Sc./ M. biotech Degree & PhD (Concerned Subject).
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Vacancy Details</h2>
        <table className="table-auto w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left px-4 py-2 font-bold">Post Name</th>
              <th className="text-center px-4 py-2 font-bold">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100">
              <td className="text-left px-4 py-2">Senior Resident (Non Academic)</td>
              <td className="text-center px-4 py-2">94</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mb-4">
        <p className="text-gray-600">
          <strong>Interested Candidates Can Read the Full Notification Before Apply Online</strong>
        </p>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Important Links</h2>
        <table className="table-auto w-full border border-gray-300">
          <tbody>
            <tr>
              <td className="text-left px-4 py-2">
                <span className="font-bold">Apply Online</span>
              </td>
              <td className="text-center px-4 py-2">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdPuDGR-tuBFLuOVhD9fSL5blXuDZKQlbStnX3hQtcCNUbq2w/closedform" target="_blank" rel="noopener" className="text-blue-500 hover:underline">
                  Click Here
                </a>
              </td>
            </tr>
            <tr>
              <td className="text-left px-4 py-2">
                <span className="font-bold">Notification</span>
              </td>
              <td className="text-center px-4 py-2">
                <a href="https://img.freejobalert.com/uploads/2024/09/Notification-AIIMS-Kalyani-Sr-Resident-Posts-1.pdf" target="_blank" rel="noopener" className="text-blue-500 hover:underline">
                  Click Here
                </a>
              </td>
            </tr>
            <tr>
              <td className="text-left px-4 py-2">
                <span className="font-bold">Official Website</span>
              </td>
              <td className="text-center px-4 py-2">
                <a href="https://aiimskalyani.edu.in/" target="_blank" rel="noopener" className="text-blue-500 hover:underline">
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