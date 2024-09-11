export default function RecruitmentInfo() {
  // This component displays recruitment information for Women & Child Development, Kadapa
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">
        <span className="text-green-500">Name of the Post:</span> WCD, Kadapa Various Vacancy Offline Form 2024
      </h2>
      <p className="text-justify mb-4">
        <span className="text-green-500">Post Date: </span>
        <strong>11-09-2024</strong>
      </p>
      <p className="text-justify mb-4">
        <span className="text-green-500">Total Vacancy: </span>
        <strong>74</strong>
      </p>
      <p className="text-justify mb-4">
        <span className="text-red-500">Brief Information:</span> Women & Child Development, Kadapa has invites an application for the recruitment of Anganwadi Worker, Anganwadi Helper &amp; Mini Anganwadi Worker Vacancy. Those Candidates who are interested in the vacancy details &amp; completed all eligibility criteria can read the Notification &amp; Apply.
      </p>

      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Women &amp; Child Development, Kadapa</h3>
        <p className="text-center mb-2">
          <span className="text-pink-500">Advt No. 01/2024</span>
        </p>
        <p className="text-center mb-2">
          <span className="text-green-500">Various Vacancy</span> 2024
        </p>
        <p className="text-center">
          <a href="https://www.freejobalert.com" target="_blank" rel="noopener" className="text-blue-500">
            
          </a>
        </p>
      </div>

      <table className="table-auto border-collapse w-full mb-4">
        <tbody>
          <tr>
            <td colSpan="3" className="text-center">
              <p className="text-red-500 font-bold">Important Dates</p>
              <ul className="list-disc pl-5">
                <li>Last Date for receipt of Application: <strong>17-09-2024</strong></li>
                <li>Date of Interview: <strong>28-09-2024</strong></li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan="3" className="text-center">
              <p className="text-red-500 font-bold">Age Limit (as on 01-07-2024)</p>
              <ul className="list-disc pl-5">
                <li>Minimum Age Limit: <strong>21 Years</strong></li>
                <li>Maximum Age Limit: <strong>35 Years</strong></li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan="3" className="text-center">
              <p className="text-red-500 font-bold">Vacancy Details</p>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <span className="text-pink-500 font-bold">Post Name</span>
            </td>
            <td className="text-center">
              <span className="text-pink-500 font-bold">Total</span>
            </td>
            <td className="text-center">
              <span className="text-pink-500 font-bold">Qualification</span>
            </td>
          </tr>
          <tr>
            <td className="text-center">Anganwadi Worker</td>
            <td className="text-center">11</td>
            <td className="text-center">10th Class</td>
          </tr>
          <tr>
            <td className="text-center">Anganwadi Helper</td>
            <td className="text-center">59</td>
            <td className="text-center" rowSpan="2">
              7th Class
              <br/>
            </td>
          </tr>
          <tr>
            <td className="text-center">Mini Anganwadi Worker</td>
            <td className="text-center">04</td>
          </tr>
          <tr>
            <td colSpan="3" className="text-center">
              <span className="text-pink-500 font-bold">Interested Candidates Can Read the Full Notification Before Apply</span>
            </td>
          </tr>
          <tr>
            <td colSpan="3" className="text-center">
              <p className="text-red-500 font-bold">Important Links</p>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="text-center">
              <span className="text-green-500 font-bold">Notification</span>
              <br/>
            </td>
            <td className="text-center">
              <a href="https://img.freejobalert.com/uploads/2024/09/Notification-WCD-Kadapa-Anganwadi-Worker-Anganwadi-Helper-Other.pdf" target="_blank" rel="nofollow" className="text-blue-500">
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="text-center">
              <span className="text-green-500 font-bold">Official Website</span>
              <br/>
            </td>
            <td className="text-center">
              <a href="https://kadapa.ap.gov.in/" target="_blank" rel="nofollow" className="text-blue-500">
                Click Here
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}