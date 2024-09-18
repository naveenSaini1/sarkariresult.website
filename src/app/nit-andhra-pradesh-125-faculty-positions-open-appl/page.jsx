export default function RecruitmentInfo() {
  // This component displays recruitment information for NIT, Andhra Pradesh Faculty 2024. 
  // It includes details like post name, vacancy, important dates, qualification, and application process.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">NIT, Andhra Pradesh Faculty 2024 Online Form</h1>

      <div className="mb-4">
        <p className="mb-1"><span className="text-green-500 font-bold">Name of the Post:</span> NIT, Andhra Pradesh Faculty 2024 Online Form</p>
        <p className="mb-1"><span className="text-green-500 font-bold">Post Date:</span> 18-09-2024</p>
        <p className="mb-1"><span className="text-green-500 font-bold">Total Vacancy:</span> 125</p>
      </div>

      <p className="text-justify mb-4">
        <span className="text-red-500 font-bold">Brief Information:</span> National Institute of Technology (NIT), Andhra Pradesh has announced
        Notification for the recruitment of Faculty Vacancy on Contract basis. Those Candidates who are interested in the vacancy details & completed
        all eligibility criteria can read the Notification & Apply Online.
      </p>

      <h2 className="text-2xl font-bold text-center mb-4">Important Details</h2>

      <table className="table-auto w-full text-center mb-4">
        <tbody>
          <tr className="border-b">
            <td colSpan="3" className="p-2 border-b">
              <p className="text-red-500 font-bold">National Institute of Technology (NIT), Andhra Pradesh</p>
              <p className="text-green-500 font-bold">Faculty Vacancy 2024</p>
              <p><a href="https://www.freejobalert.com" target="_blank" rel="noopener" className="text-blue-500 hover:underline"></a></p>
            </td>
          </tr>
          <tr className="border-b">
            <td colSpan="3" className="p-2 border-b">
              <p className="text-red-500 font-bold">Application Fee</p>
              <ul>
                <li>Fee for General, OBC & EWS candidates: <strong>Rs. 1000/</strong></li>
                <li>Fee payable by Indian Nationals applying from abroad per all Categories: <strong>Rs. 5000/-</strong></li>
                <li>Fee for SC/ST/PWD candidates: <strong>Nil</strong></li>
                <li>Payment mode: <strong>Through Online</strong></li>
              </ul>
            </td>
          </tr>
          <tr className="border-b">
            <td colSpan="3" className="p-2 border-b">
              <p className="text-red-500 font-bold">Important Dates</p>
              <ul>
                <li>Starting Date for Apply Online: 19-09-2024</li>
                <li>Last Date to Apply Online: 10-10-2024 (05:00 PM)</li>
              </ul>
            </td>
          </tr>
          <tr className="border-b">
            <td colSpan="3" className="p-2 border-b">
              <p className="text-red-500 font-bold">Qualification</p>
              <ul>
                <li>Candidates Should Possess BE/ B.Tech/ ME/ M.Tech/ PhD (Relevant Subjects).</li>
              </ul>
            </td>
          </tr>
          <tr className="border-b">
            <td colSpan="3" className="p-2 border-b">
              <p className="text-red-500 font-bold">Vacancy Details</p>
            </td>
          </tr>
          <tr className="border-b">
            <th className="p-2 border-b"><span className="text-pink-500 font-bold">Post Name</span></th>
            <th className="p-2 border-b"><span className="text-pink-500 font-bold">Total</span></th>
            <th className="p-2 border-b"><span className="text-pink-500 font-bold">Age</span></th>
          </tr>
          <tr className="border-b">
            <td className="p-2 border-b">Assistant Professor Grade-II<br/>(On contract)</td>
            <td className="p-2 border-b">48</td>
            <td className="p-2 border-b" rowSpan="3">35 Years</td>
          </tr>
          <tr className="border-b">
            <td className="p-2 border-b">Assistant Professor Grade-II<br/>(On contract)</td>
            <td className="p-2 border-b">20</td>
          </tr>
          <tr className="border-b">
            <td className="p-2 border-b">Assistant Professor Grade-I</td>
            <td className="p-2 border-b">20</td>
          </tr>
          <tr className="border-b">
            <td className="p-2 border-b">Associate Professor</td>
            <td className="p-2 border-b">30</td>
            <td className="p-2 border-b">45 Years</td>
          </tr>
          <tr className="border-b">
            <td className="p-2 border-b">Professor</td>
            <td className="p-2 border-b">07</td>
            <td className="p-2 border-b">55 Years</td>
          </tr>
          <tr className="border-b">
            <td colSpan="3" className="p-2 border-b">
              <p className="text-blue-500 font-bold">Interested Candidates Can Read the Full Notification Before Apply Online</p>
            </td>
          </tr>
          <tr className="border-b">
            <td colSpan="3" className="p-2 border-b">
              <p className="text-red-500 font-bold">Important Links</p>
            </td>
          </tr>
          <tr className="border-b">
            <td className="p-2 border-b"><span className="text-green-500 font-bold">Apply Online</span></td>
            <td colSpan="2" className="p-2 border-b">Available on 19-09-2024</td>
          </tr>
          <tr className="border-b">
            <td className="p-2 border-b"><span className="text-green-500 font-bold">Notification</span></td>
            <td colSpan="2" className="p-2 border-b">
              <a title="NIT AP" href="https://img.freejobalert.com/uploads/2024/09/Notification-NIT-AP-Faculty-Posts.pdf" target="_blank" rel="nofollow" className="text-blue-500 hover:underline">
                Click Here
              </a>
            </td>
          </tr>
          <tr className="border-b">
            <td className="p-2 border-b"><span className="text-green-500 font-bold">Official Website</span></td>
            <td colSpan="2" className="p-2 border-b">
              <a title="NIT, Andhra Pradesh" href="https://www.nitandhra.ac.in/main/" target="_blank" rel="nofollow" className="text-blue-500 hover:underline">
                Click Here
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}