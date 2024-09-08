export default function RecruitmentInfo() {
  // This component displays recruitment information for Greater Chennai Corporation Various Vacancy 2024.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        <span className="text-green-500">Name of the Post:</span> Greater Chennai Corporation Various Vacancy 2024
      </h1>
      <p className="text-justify mb-4">
        <span className="text-green-500 font-bold">Post Date:</span> 24-08-2024
      </p>
      <p className="text-justify mb-4">
        <span className="text-green-500 font-bold">Total Vacancy:</span> <strong>140</strong>
      </p>
      <p className="text-justify mb-4">
        <span className="text-red-500 font-bold">Brief Information:</span>{' '}
        Greater Chennai Corporation has invites an application for the recruitment of Medical Officer, Staff Nurse & Other vacancy on Contract Basis. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply.
      </p>
      <h2 className="text-2xl font-bold mb-4">Important Dates</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Last Date for the receipt of Application: <strong>06-09-2024 (Till 05:00 PM)</strong></li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>
      <table className="table-auto w-full text-center border-collapse border-2">
        <thead>
          <tr>
            <th className="py-2 border-2"><span className="text-pink-500 font-bold">Post Name</span></th>
            <th className="py-2 border-2"><span className="text-pink-500 font-bold">Total</span></th>
            <th className="py-2 border-2"><span className="text-pink-500 font-bold">Age Limit</span></th>
            <th className="py-2 border-2"><span className="text-pink-500 font-bold">Qualification</span></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 border-2"><span className="text-black">Medical Officer</span></td>
            <td className="py-2 border-2"><span className="text-black">30</span></td>
            <td className="py-2 border-2">Below 40 Years</td>
            <td className="py-2 border-2"><span className="text-black">MBBS Degree</span></td>
          </tr>
          <tr>
            <td className="py-2 border-2"><span className="text-black">Staff Nurse</span></td>
            <td className="py-2 border-2"><span className="text-black">32</span></td>
            <td className="py-2 border-2" rowSpan={3}>
              <span className="text-black">Below 50 Years</span>
              <br/>
              <br/>
            </td>
            <td className="py-2 border-2"><span className="text-black">Diploma (GNM)/ B.Sc Nursing</span></td>
          </tr>
          <tr>
            <td className="py-2 border-2"><span className="text-black">Multi Purpose Health Worker</span></td>
            <td className="py-2 border-2"><span className="text-black">12</span></td>
            <td className="py-2 border-2"><span className="text-black">SSLC</span></td>
          </tr>
          <tr>
            <td className="py-2 border-2"><span className="text-black">Support Staff</span></td>
            <td className="py-2 border-2"><span className="text-black">66</span></td>
            <td className="py-2 border-2"><span className="text-black">8th Standard</span></td>
          </tr>
        </tbody>
      </table>
      <p className="text-center mt-4 mb-4">
        <span className="text-blue-500 font-bold">Interested Candidates Can Read the Full Notification Before Apply</span>
      </p>
      <h2 className="text-2xl font-bold mb-4">Important Links</h2>
      <table className="table-auto w-full text-center border-collapse border-2">
        <tbody>
          <tr>
            <td className="py-2 border-2" colSpan={3}>
              <span className="text-green-500 font-bold">Notification</span>
              <br/>
            </td>
            <td className="py-2 border-2">
              <a className="text-blue-500" href="https://img.freejobalert.com/uploads/2024/08/Notification-Chennai-Corporation-staff-Nurse-Medical-Officer-Other-2024.pdf" target="_blank" rel="nofollow">
                <strong>Click here</strong>
              </a>
            </td>
          </tr>
          <tr>
            <td className="py-2 border-2" colSpan={3}>
              <span className="text-green-500 font-bold">Official Website</span>
              <br/>
            </td>
            <td className="py-2 border-2">
              <a className="text-blue-500" href="https://chennaicorporation.gov.in/gcc/" target="_blank" rel="nofollow">
                <strong>Click here</strong>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}