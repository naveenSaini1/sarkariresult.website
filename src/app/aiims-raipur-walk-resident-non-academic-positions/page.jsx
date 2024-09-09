export default function RecruitmentInfo() {
  // This component displays recruitment information for AIIMS, Raipur Senior Resident (Non Academic) Walk In 2024.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">AIIMS, Raipur Senior Resident (Non Academic) Walk In 2024</h1>
      <p className="mb-4">
        <span className="font-bold text-green-500">Name of the Post:</span> AIIMS, Raipur Senior Resident (Non Academic) Walk In 2024
      </p>
      <p className="mb-4">
        <span className="font-bold text-green-500">Post Date:</span> 09-09-2024
      </p>
      <p className="mb-4">
        <span className="font-bold text-green-500">Total Vacancy:</span> 85
      </p>
      <p className="mb-4">
        <span className="font-bold text-red-500">Brief Information:</span> All India Institute of Medical Sciences (AIIMS), Raipur has given an employment Notification for the Recruitment of Senior Resident (Non Academic) Vacancy. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification and Attend.
      </p>

      <table className="table-auto w-full border-collapse border border-gray-300 mt-4">
        <tbody>
          <tr className="bg-gray-100">
            <td colSpan={2} className="text-center py-2">
              <p className="font-bold text-red-500">&nbsp;&nbsp;&nbsp;&nbsp; All India Institute of Medical Sciences (AIIMS), Raipur</p>
              <p className="font-bold text-pink-500">Advt No. 03/02/2024/Recruit./Acad/AIIMSRPR/1795</p>
              <p className="font-bold text-green-500">Senior Resident (Non Academic) Vacancy 2024</p>
              <p className="text-center"><a href="https://www.freejobalert.com" target="_blank" rel="noopener" className="text-blue-500"></a></p>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center py-2">
              <p className="font-bold text-red-500">Application Fee</p>
              <ul className="list-disc pl-6">
                <li>For General/ OBC/ EWS Candidates : Rs.1000/-</li>
                <li>For Women/ SC/ ST/ PwBD/ Ex-servicemen: Nil</li>
                <li>Payment Mode: Through Demand Draft</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center py-2">
              <p className="font-bold text-red-500">Important Dates</p>
              <ul className="list-disc pl-6">
                <li>Date of Walk In Interview : 12-09-2024</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center py-2">
              <p className="font-bold text-red-500">Age Limit (as on 10-09-2024)</p>
              <ul className="list-disc pl-6">
                <li>Upper Age Limit: 45 Years</li>
                <li>Age Relaxation is Applicable as per Rules.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center py-2">
              <p className="font-bold text-red-500">Qualification</p>
              <ul className="list-disc pl-6">
                <li>Candidates Should Possess Postgraduate Medical Degree (MD/MS/DNB/Diploma)</li>
              </ul>
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td colSpan={2} className="text-center py-2">
              <span className="font-bold text-red-500">Vacancy Details</span>
            </td>
          </tr>
          <tr>
            <td className="text-center py-2">
              <span className="font-bold text-pink-500">Post Name</span>
            </td>
            <td className="text-center py-2">
              <span className="font-bold text-pink-500">Total</span>
            </td>
          </tr>
          <tr>
            <td className="text-center py-2">Senior Resident (Non Academic)</td>
            <td className="text-center py-2">85</td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center py-2">
              <span className="font-bold text-blue-500">Interested Candidates Can Read the Full Notification Before Attend</span>
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td colSpan={2} className="text-center py-2">
              <span className="font-bold text-red-500">Important Links</span>
            </td>
          </tr>
          <tr>
            <td className="text-center py-2">
              <span className="font-bold text-green-500">Notification</span>
            </td>
            <td className="text-center py-2">
              <a href="https://img.freejobalert.com/uploads/2024/09/Notification-AIIMS-Raipur-Senior-Resident-Posts.pdf" target="_blank" rel="nofollow" className="text-blue-500">Click here</a>
            </td>
          </tr>
          <tr>
            <td className="text-center py-2">
              <span className="font-bold text-green-500">Official Website</span>
            </td>
            <td className="text-center py-2">
              <a title="AIIMS, Raipur" href="https://www.aiimsraipur.edu.in/" target="_blank" rel="nofollow" className="text-blue-500">Click here</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}