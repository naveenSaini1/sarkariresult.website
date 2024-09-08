export default function RecruitmentInfo() {
  // This component displays recruitment information for the HSSC TGT 2023 vacancy.
  // It includes details about the post, important dates, application fees, qualification requirements, and vacancy details.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">HSSC TGT 2023 Final Result Released</h1>

      <div className="mb-4">
        <p className="text-green-500 font-bold">Name of the Post: HSSC TGT 2023 Final Result Released</p>
        <p className="text-gray-600">Post Date: 13-09-2023</p>
        <p className="text-gray-600">Latest Update: 14-08-2024</p>
        <p className="text-gray-600">Total Vacancy: 104</p>
      </div>

      <p className="text-red-500 font-bold mb-4">Brief Information:</p>
      <p className="text-gray-600 mb-4">Haryana Staff Selection Commission (HSSC) has Announced notification for TGT Vacancy. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply Online.</p>

      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Haryana Staff Selection Commission (HSSC)</h2>
        <h3 className="text-lg font-bold mb-2">TGT Vacancy 2023</h3>
        <p className="text-center"><a href="https://www.freejobalert.com" target="_blank" rel="noopener" className="text-blue-500 underline"></a></p>
      </div>

      <table className="table-auto w-full border-collapse border border-gray-300 mb-4">
        <tbody>
          <tr className="bg-gray-100">
            <td colSpan="2" className="text-center py-2">
              <p className="text-red-500 font-bold">Application Fee</p>
            </td>
          </tr>
          <tr>
            <td className="py-2">For General Candidates: <strong className="text-gray-800">Rs 150/-</strong></td>
            <td className="py-2">For Female (Haryana Resident) Candidates: <strong className="text-gray-800">Rs. 75/-</strong></td>
          </tr>
          <tr>
            <td className="py-2">For SC/BC/EWS Candidates of Haryana State: <strong className="text-gray-800">Rs. 35/-</strong></td>
            <td className="py-2">For Female (SC/BC/EWS) Candidates of Haryana State: <strong className="text-gray-800">Rs. 18/-</strong></td>
          </tr>
          <tr>
            <td className="py-2" colSpan="2">For PWD/ Ex-Servicemen of Haryana Candidates: <strong className="text-gray-800">Nil</strong></td>
          </tr>
          <tr>
            <td className="py-2" colSpan="2">Payment Mode: <strong className="text-gray-800">Through Online Mode</strong></td>
          </tr>
        </tbody>
      </table>

      <table className="table-auto w-full border-collapse border border-gray-300 mb-4">
        <tbody>
          <tr className="bg-gray-100">
            <td colSpan="2" className="text-center py-2">
              <p className="text-red-500 font-bold">Important Dates</p>
            </td>
          </tr>
          <tr>
            <td className="py-2">Starting Date For Apply Online & Payment of Fee: <strong className="text-gray-800">18-09-2023</strong></td>
            <td className="py-2">Last Date for Apply Online: <strong className="text-gray-800">09-10-2023</strong></td>
          </tr>
          <tr>
            <td className="py-2">Closing date for Payment of Fee: <strong className="text-gray-800">12-10-2023</strong></td>
            <td className="py-2">Date of Examination: <strong className="text-gray-800">19-11-2023</strong></td>
          </tr>
        </tbody>
      </table>

      <table className="table-auto w-full border-collapse border border-gray-300 mb-4">
        <tbody>
          <tr className="bg-gray-100">
            <td colSpan="2" className="text-center py-2">
              <p className="text-red-500 font-bold">Age Limit</p>
            </td>
          </tr>
          <tr>
            <td className="py-2">Minimum Age Limit: <strong className="text-gray-800">18 Years</strong></td>
            <td className="py-2">Maximum Age Limit: <strong className="text-gray-800">42 Years</strong></td>
          </tr>
          <tr>
            <td className="py-2" colSpan="2">Age Relaxation is Applicable for as per Rules.</td>
          </tr>
        </tbody>
      </table>

      <table className="table-auto w-full border-collapse border border-gray-300 mb-4">
        <tbody>
          <tr className="bg-gray-100">
            <td colSpan="2" className="text-center py-2">
              <p className="text-red-500 font-bold">Qualification</p>
            </td>
          </tr>
          <tr>
            <td className="py-2" colSpan="2">Candidates Should Possess 10th, D.Ed, D.El.Ed, Degree in Punjabi, B.El.Ed, B.Ed</td>
          </tr>
          <tr>
            <td className="py-2" colSpan="2">For More Details Refer the Notification</td>
          </tr>
        </tbody>
      </table>

      <table className="table-auto w-full border-collapse border border-gray-300 mb-4">
        <tbody>
          <tr className="bg-gray-100">
            <td colSpan="2" className="text-center py-2">
              <p className="text-red-500 font-bold">Vacancy Details</p>
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="text-center py-2"><span className="text-pink-500 font-bold">Post Name</span></td>
            <td className="text-center py-2"><span className="text-pink-500 font-bold">Total</span></td>
          </tr>
          <tr>
            <td className="text-center py-2">TGT</td>
            <td className="text-center py-2">104</td>
          </tr>
          <tr>
            <td className="text-center py-2" colSpan="2"><span className="text-blue-500 font-bold">Interested Candidates Can Read the Full Notification Before Apply Online</span></td>
          </tr>
        </tbody>
      </table>

      <table className="table-auto w-full border-collapse border border-gray-300 mb-4">
        <tbody>
          <tr className="bg-gray-100">
            <td colSpan="2" className="text-center py-2">
              <p className="text-red-500 font-bold">Important Links</p>
            </td>
          </tr>
          <tr>
            <td className="text-center py-2"><span className="text-green-500 font-bold">Final Result (14-08-2024)<br/></span></td>
            <td className="text-center py-2"><a href="https://img.freejobalert.com/uploads/2024/08/Final-Result-HSSC-TGT-2023.pdf" target="_blank" rel="nofollow" className="text-blue-500 underline">Click Here</a><br/></td>
          </tr>
          <tr>
            <td className="text-center py-2"><span className="text-green-500 font-bold">Result (24-02-2024)</span></td>
            <td className="text-center py-2"><a href="https://hssc.gov.in/hssccms/uploads/results/39047-Notice%20to%20shortlisted%20candidates%20for%20Scrutiny%20of%20Documents%20for%20the%20post%20of%20TGT%20Punjabi%20(Rest%20of%20Haryana)%20against%20Advt.%20No.%2004-2023,%20Category%20No.%2001%20of%20Elementary%20Education,%20Haryana.pdf" target="_blank" rel="nofollow noopener" className="text-blue-500 underline">Click Here</a><br/></td>
          </tr>
          <tr>
            <td className="text-center py-2"><span className="text-green-500 font-bold">Admit Card (17-11-2023)<br/></span></td>
            <td className="text-center py-2"><a title="HSSC" href="https://adv42023.hryssc.in/StaticPages/Login.aspx" target="_blank" rel="nofollow" className="text-blue-500 underline">Click Here</a><br/></td>
          </tr>
          <tr>
            <td className="text-center py-2"><span className="text-green-500 font-bold">Exam Date (31-10-2023)<br/></span></td>
            <td className="text-center py-2"><a title="HSSC" href="https://hssc.gov.in/" target="_blank" rel="nofollow" className="text-blue-500 underline">Click Here</a><br/></td>
          </tr>
          <tr>
            <td className="text-center py-2"><span className="text-green-500 font-bold">Apply Online (19-09-2023)</span></td>
            <td className="text-center py-2"><a title="HSSC" href="https://adv42023.hryssc.in/StaticPages/HomePage.aspx" target="_blank" rel="nofollow" className="text-blue-500 underline">Click Here</a></td>
          </tr>
          <tr>
            <td className="text-center py-2"><span className="text-green-500 font-bold">Notification </span></td>
            <td className="text-center py-2"><a title="HSSC" href="https://img.freejobalert.com/uploads/2023/09/Notification-HSSC-Teacher-Posts.pdf" target="_blank" rel="nofollow" className="text-blue-500 underline">Click Here</a></td>
          </tr>
          <tr>
            <td className="text-center py-2"><span className="text-green-500 font-bold">Official Website</span></td>
            <td className="text-center py-2"><a title="HSSC" href="https://hssc.gov.in/" target="_blank" rel="nofollow" className="text-blue-500 underline">Click Here</a></td>
          </tr>
          {/* Removed content related to social media, Play Store, and Telegram  */}
        </tbody>
      </table>
    </div>
  );
}