export default function RecruitmentInformation() {
  // This component displays recruitment information for HPSC Assistant Engineer 2023.
  // It includes details about the post, important dates, application fee, vacancy details, and important links.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">HPSC Assistant Engineer 2023 Screening Test Admit Card Download</h1>
      <p className="mb-2">
        <span className="text-green-500 font-bold">Name of the Post</span>: HPSC Assistant Engineer 2023 Screening Test Admit Card Download
      </p>
      <p className="mb-2">
        <span className="text-green-500 font-bold">Post Date</span>: 01-12-2023
      </p>
      <p className="mb-2">
        <span className="text-green-500 font-bold">Latest Update:</span> 06-09-2024
      </p>
      <p className="mb-2">
        <span className="text-green-500 font-bold">Total Vacancy</span>: 120
      </p>
      <p className="mb-4">
        <span className="text-green-500 font-bold">Brief Information</span>: Haryana Public Service Commission (HPSC) has Published a notification for the recruitment of Assistant Engineer vacancy. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply Online.
      </p>

      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Haryana Public Service Commission (HPSC)</h2>
        <p className="text-lg text-purple-500 font-bold mb-2 text-center">Adv No: 59/2023</p>
        <p className="text-lg text-green-500 font-bold mb-2 text-center">Assistant Engineer Vacancy 2023</p>
      </div>

      <table className="table-auto w-full border-collapse border border-gray-300 mb-4">
        <thead>
          <tr>
            <th className="p-2 text-center border border-gray-300" colSpan="4">
              <p className="text-red-500 font-bold text-center">Application Fee</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 text-center border border-gray-300" colSpan="4">
              <ul>
                <li>For General Male Candidates: <strong className="font-bold">Rs. 1000/-</strong></li>
                <li>For Female / EWS /Female & Male of SC/BC Candidates: <strong className="font-bold">Rs. 250/-</strong></li>
                <li>For PWD Candidates: <strong className="font-bold">Nil</strong></li>
                <li>Payment mode: <strong className="font-bold">Net Banking/Credit Card/Debit Card</strong></li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>

      <table className="table-auto w-full border-collapse border border-gray-300 mb-4">
        <thead>
          <tr>
            <th className="p-2 text-center border border-gray-300" colSpan="4">
              <p className="text-red-500 font-bold text-center">Important Dates</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 text-center border border-gray-300" colSpan="4">
              <ul>
                <li>Starting Date for Apply Online: <strong className="font-bold">01-12-2023</strong></li>
                <li>Last Date to Apply Online & Payment of fee: <strong className="font-bold">21-12-2023</strong></li>
                <li>Date of Screening Test: <strong className="font-bold">08-09-2024</strong></li>
                <li>Date of Downloading Admit Card: <strong className="font-bold">01-09-2024</strong></li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>

      <table className="table-auto w-full border-collapse border border-gray-300 mb-4">
        <thead>
          <tr>
            <th className="p-2 text-center border border-gray-300" colSpan="4">
              <p className="text-red-500 font-bold text-center">Age Limit (as on 21-12-2023)</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 text-center border border-gray-300" colSpan="4">
              <ul>
                <li>Minimum Age Limit: <strong className="font-bold">18 Years</strong></li>
                <li>Maximum Age Limit: <strong className="font-bold">42 Years</strong></li>
                <li>Age relaxation is admissible as per rules.</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>

      <table className="table-auto w-full border-collapse border border-gray-300 mb-4">
        <thead>
          <tr>
            <th className="p-2 text-center border border-gray-300"><span className="text-purple-500 font-bold">S.No.</span></th>
            <th className="p-2 text-center border border-gray-300"><span className="text-purple-500 font-bold">Post Name</span></th>
            <th className="p-2 text-center border border-gray-300"><span className="text-purple-500 font-bold">Total</span></th>
            <th className="p-2 text-center border border-gray-300"><span className="text-purple-500 font-bold">Qualification</span></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 text-center border border-gray-300">1.</td>
            <td className="p-2 text-center border border-gray-300">Assistant Engineer(Civil)</td>
            <td className="p-2 text-center border border-gray-300">49</td>
            <td className="p-2 text-center border border-gray-300">B.E/B.Tech (Civil)</td>
          </tr>
          <tr>
            <td className="p-2 text-center border border-gray-300">2.</td>
            <td className="p-2 text-center border border-gray-300">Assistant Engineer(Mechanical)</td>
            <td className="p-2 text-center border border-gray-300">05</td>
            <td className="p-2 text-center border border-gray-300">B.E/B.Tech (Mechanical)</td>
          </tr>
          <tr>
            <td className="p-2 text-center border border-gray-300">3.</td>
            <td className="p-2 text-center border border-gray-300">Assistant Engineer(Electrical)</td>
            <td className="p-2 text-center border border-gray-300">03</td>
            <td className="p-2 text-center border border-gray-300">B.E/B.Tech (Electrical)</td>
          </tr>
        </tbody>
      </table>

      <p className="text-blue-500 font-bold mb-4 text-center">Interested Candidates Can Read the Full Notification Before Apply Online</p>

      <table className="table-auto w-full border-collapse border border-gray-300 mb-4">
        <thead>
          <tr>
            <th className="p-2 text-center border border-gray-300" colSpan="4">
              <p className="text-red-500 font-bold text-center">Important Links</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 text-center border border-gray-300" colSpan="2">
              <span className="text-green-500 font-bold">Screening Test Admit Card (06-09-2024)</span>
            </td>
            <td className="p-2 text-center border border-gray-300" colSpan="2">
              <a href="https://apply.registernow.in/HPSC/AssistantEngineer2023/Account/Login" target="_blank" rel="noopener" className="text-blue-500">Civil/ Mechanical</a> | 
              <a href="https://hpscelectrical.onlineapplications.co.in/" target="_blank" rel="noopener" className="text-blue-500">Electrical</a>
            </td>
          </tr>
          <tr>
            <td className="p-2 text-center border border-gray-300" colSpan="2">
              <span className="text-green-500 font-bold">Admit Card Date (31-08-2024)</span>
            </td>
            <td className="p-2 text-center border border-gray-300" colSpan="2">
              <a href="https://hpsc.gov.in/Portals/0/hpsc_ann1.pdf" target="_blank" rel="noopener" className="text-blue-500">Click Here</a>
            </td>
          </tr>
          <tr>
            <td className="p-2 text-center border border-gray-300" colSpan="2">
              <span className="text-green-500 font-bold">Screening Test Date (10-07-2024)</span>
            </td>
            <td className="p-2 text-center border border-gray-300" colSpan="2">
              <a href="https://img.freejobalert.com/uploads/2024/07/Exam-Date-HPSC-Various-Vacancy.pdf" target="_blank" rel="noopener" className="text-blue-500">Click Here</a>
            </td>
          </tr>
          <tr>
            <td className="p-2 text-center border border-gray-300" colSpan="2">
              <span className="text-green-500 font-bold">Syllabus (09-07-2024)</span>
            </td>
            <td className="p-2 text-center border border-gray-300" colSpan="2">
              <a href="https://img.freejobalert.com/uploads/2024/07/Syllabus-HPSC-Assistant-Engineer-Posts.pdf" target="_blank" rel="noopener" className="text-blue-500">Click here</a>
            </td>
          </tr>
          <tr>
            <td className="p-2 text-center border border-gray-300" colSpan="2">
              <span className="text-green-500 font-bold">Apply Online (05-12-2023)</span>
            </td>
            <td className="p-2 text-center border border-gray-300" colSpan="2">
              <a href="https://apply.registernow.in/HPSC/AssistantEngineer2023/" target="_blank" rel="noopener" className="text-blue-500">Click Here</a>
            </td>
          </tr>
          <tr>
            <td className="p-2 text-center border border-gray-300" colSpan="2">
              <span className="text-green-500 font-bold">Notification</span>
            </td>
            <td className="p-2 text-center border border-gray-300" colSpan="2">
              <a href="https://hpsc.gov.in/Portals/0/Advt_59_2023_Assistant_Engineer_C_M_E_30_11_2023.pdf" target="_blank" rel="noopener" className="text-blue-500">Click Here</a>
            </td>
          </tr>
          <tr>
            <td className="p-2 text-center border border-gray-300" colSpan="2">
              <span className="text-green-500 font-bold">Official Website</span>
            </td>
            <td className="p-2 text-center border border-gray-300" colSpan="2">
              <a href="https://hpsc.gov.in/en-us/" target="_blank" rel="noopener" className="text-blue-500">Click here</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}