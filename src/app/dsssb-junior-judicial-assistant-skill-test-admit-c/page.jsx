export default function RecruitmentInfo() {
  // This component displays recruitment information for DSSSB Junior Judicial Assistant 2024 Skill Test Admit Card Download. 
  // It includes details such as post name, post date, total vacancy, brief information, application fee, important dates, age limit, qualification, and vacancy details.
  // It also includes links to relevant resources such as the official notification and admit card download page.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">DSSSB Junior Judicial Assistant 2024 Skill Test Admit Card Download</h1>

      <div className="mb-4">
        <p className="text-gray-600">
          <span className="font-bold text-green-500">Name of the Post:</span> DSSSB Junior Judicial Assistant 2024 Skill Test Admit Card Download
        </p>
        <p className="text-gray-600">
          <span className="font-bold text-green-500">Post Date:</span> 13-01-2024
        </p>
        <p className="text-gray-600">
          <span className="font-bold text-green-500">Latest Update:</span> 02-09-2024
        </p>
        <p className="text-gray-600">
          <span className="font-bold text-green-500">Total Vacancy:</span> 990
        </p>
        <p className="text-gray-600">
          <span className="font-bold text-red-500">Brief Information:</span> Delhi Subordinate Services Selection Board (DSSSB) has given a notification for the recruitment of Senior Personal Assistant, Personal Assistant & Junior Judicial Assistant Vacancy. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply Online.
        </p>
      </div>

      <div className="mb-4">
        <table className="w-full table-auto border border-gray-300">
          <tbody>
            <tr>
              <td colSpan="3" className="p-2 text-center">
                <p className="font-bold text-red-500">Delhi Subordinate Services Selection Board (DSSSB)</p>
                <p className="font-bold text-pink-500">Advt No: 01/2024</p>
                <p className="font-bold text-green-500">Various Vacancy 2024</p>
                <p className="text-center">
                  <a href="https://www.freejobalert.com" target="_blank" rel="noopener" className="text-blue-500"></a>
                </p>
              </td>
            </tr>
            <tr>
              <td colSpan="3" className="p-2 text-center">
                <p className="font-bold text-red-500">Application Fee</p>
                <ul className="list-disc pl-6">
                  <li className="text-gray-600">Fee for All Other Candidates: Rs 100/-</li>
                  <li className="text-gray-600">Fee for SC/ ST/ PWBD & Ex-Serviceman Candidates: NIL</li>
                  <li className="text-gray-600">Payment Mode: Through SBI, E-Pay & Other</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td colSpan="3" className="p-2 text-center">
                <p className="font-bold text-red-500">Important Dates</p>
                <ul className="list-disc pl-6">
                  <li className="text-gray-600">Starting Date to Apply Online & Payment Fee: 18-01-2024</li>
                  <li className="text-gray-600">Last Date to Apply Online & Payment Fee: 08-02-2024 till 11:59 PM</li>
                  <li className="text-gray-600">Date of Online Exam for Junior Judicial Assistant (802/24): 03, 09, 10, 16, 17, 18, 30, 31-03-2024</li>
                  <li className="text-gray-600">Date of Online Exam for Personal Assistant & Sr Personal Assistant (801/24): 08, 17, 18, 23, 31-03-2024</li>
                  <li className="text-gray-600">Date of Online Exam (Tier-II) for Personal Assistant & Sr Personal Assistant (801/24): 01-06-2024</li>
                  <li className="text-gray-600">Date of Online Exam (Tier-II) for Junior Judicial Assistant (802/24): 01 & 02-06-2024</li>
                  <li className="text-gray-600">Date of Skill Test for Senior Personal Assistant: 04 & 10-08-2024</li>
                  <li className="text-gray-600">Date of Skill Test for Personal Assistant: 11, 17, 18, 24, 25, 31-08-2024, 01-09-2024</li>
                  <li className="text-gray-600">Date for Downloading of Skill Test Admit Card: 29-07-2024 to 02-08-2024 up to 11:59 pm</li>
                  <li className="text-gray-600">Date of Skill Test for Junior Judicial Assistant Posts: 07, 08, 14, 15, 21, 22, 28-09-2024</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td colSpan="3" className="p-2 text-center">
                <p className="font-bold text-red-500">Age Limit</p>
                <ul className="list-disc pl-6">
                  <li className="text-gray-600">Minimum Age Limit: 18 Years</li>
                  <li className="text-gray-600">Maximum Age Limit: 27 Years</li>
                  <li className="text-gray-600">Age Relaxation is Applicable as per Rules</li>
                  <li className="text-gray-600">For More Details Refer the Notification</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td colSpan="3" className="p-2 text-center">
                <p className="font-bold text-red-500">Qualification</p>
                <ul className="list-disc pl-6">
                  <li className="text-gray-600">Candidates Should Possess Any Degree</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td colSpan="3" className="p-2 text-center">
                <p className="font-bold text-red-500">Vacancy Details</p>
              </td>
            </tr>
            <tr>
              <td className="p-2 text-center font-bold text-pink-500">Post Code</td>
              <td className="p-2 text-center font-bold text-pink-500">Post Name</td>
              <td className="p-2 text-center font-bold text-pink-500">Total</td>
            </tr>
            <tr>
              <td className="p-2 text-center" rowSpan="3">801/24</td>
              <td className="p-2 text-center">Senior Personal Assistant</td>
              <td className="p-2 text-center">41</td>
            </tr>
            <tr>
              <td className="p-2 text-center">Personal Assistant</td>
              <td className="p-2 text-center">367</td>
            </tr>
            <tr>
              <td className="p-2 text-center">Personal Assistant</td>
              <td className="p-2 text-center">16</td>
            </tr>
            <tr>
              <td className="p-2 text-center" rowSpan="2">802/24</td>
              <td className="p-2 text-center">Junior Judicial Assistant</td>
              <td className="p-2 text-center">546</td>
            </tr>
            <tr>
              <td className="p-2 text-center">Junior Judicial Assistant</td>
              <td className="p-2 text-center">20</td>
            </tr>
            <tr>
              <td colSpan="3" className="p-2 text-center font-bold text-blue-500">Interested Candidates Can Read the Full Notification Before Apply Online</td>
            </tr>
            <tr>
              <td colSpan="3" className="p-2 text-center">
                <p className="font-bold text-red-500">Important Links</p>
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="p-2 text-center font-bold text-green-500">Skill Test Admit Card for Junior Judicial Assistant (02-09-2024)</td>
              <td className="p-2 text-center">
                <a title="DSSSB" href="https://cdn.digialm.com//EForms/configuredHtml/1258/90314/login.html" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a>
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="p-2 text-center font-bold text-green-500">Skill Test Schedule for Junior Judicial Assistant (26-08-2024)</td>
              <td className="p-2 text-center">
                <a href="https://img.freejobalert.com/uploads/2024/08/Skill-Test-Schedule-DSSSB-Junior-Judicial-Assistant-Posts.pdf" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a>
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="p-2 text-center font-bold text-green-500">Online Test (Tier-II) Marks for Junior Judicial Assistant (23-08-2024)</td>
              <td className="p-2 text-center">
                <a title="DSSSB" href="https://img.freejobalert.com/uploads/2024/08/Online-Test-Tier-II-Marks-DSSSB-Junior-Judicial-Assistant-Posts.pdf" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a>
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="p-2 text-center font-bold text-green-500">Skill Test Admit Card (801/24) (31-07-2024)</td>
              <td className="p-2 text-center">
                <a href="https://dsssbonline.nic.in/AdmitCardEntry.aspx" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a>
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="p-2 text-center font-bold text-green-500">Skill Test Schedule for Senior Personal Assistant, Personal Assistant (20-07-2024)</td>
              <td className="p-2 text-center">
                <a title="DSSSB" href="https://img.freejobalert.com/uploads/2024/07/Skill-Test-Schedule-DSSSB-Senior-Personal-Assistant-and-Personal-Assistant-Posts.pdf" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a>
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="p-2 text-center font-bold text-green-500">Skill Test Instructions (19-07-2024)</td>
              <td className="p-2 text-center">
                <a href="https://img.freejobalert.com/uploads/2024/07/Skill-Test-Notice-DSSSB-Personal-Assistant-Posts.pdf" target="_blank" rel="nofollow noopener" className="text-blue-500">Click Here</a>
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="p-2 text-center font-bold text-green-500">Online Test (Tier-II) Marks for Senior Personal Assistant, Personal Assistant (15-07-2024)</td>
              <td className="p-2 text-center">
                <a href="http://dsssbonline.nic.in/" target="_blank" rel="nofollow noopener" className="text-blue-500">Click Here</a> |
                <a href="https://img.freejobalert.com/uploads/2024/07/Online-Test-Tier-II-Marks-DSSSB-Sr-Personal-Asst-Personal-Asst-JJA-2024.pdf" target="_blank" rel="nofollow noopener" className="text-blue-500">Notice</a>
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="p-2 text-center font-bold text-green-500">Online Test (Tier-II) Admit Card (29-05-2024)</td>
              <td className="p-2 text-center">
                <a href="https://cdn.digialm.com//EForms/configuredHtml/1258/89118/login.html" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a>
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="p-2 text-center font-bold text-green-500">Online Test (Tier-II) Date (16-05-2024)</td>
              <td className="p-2 text-center">
                <a href="https://dsssb.delhi.gov.in/sites/default/files/DSSSB/circulars-orders/scan20240515_0012_1.pdf" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a>
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="p-2 text-center font-bold text-green-500">Online Test (Tier-1) Result & Cut off Marks (15-05-2024)</td>
              <td className="p-2 text-center">
                <a title="DSSSB" href="https://dsssb.delhi.gov.in/sites/default/files/DSSSB/universal-tab/scan20240515_0006.pdf" target="_blank" rel="nofollow" className="text-blue-500">Link 1</a> |
                <a title="DSSSB" href="https://dsssb.delhi.gov.in/sites/default/files/DSSSB/universal-tab/notice_2024_5_15_12_45_36_25565.pdf" target="_blank" rel="nofollow" className="text-blue-500">Link 2</a>
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="p-2 text-center font-bold text-green-500">Online Test Answer Key (06-04-2024)</td>
              <td className="p-2 text-center">
                <a href="https://cdn.digialm.com/EForms/configuredHtml/1258/88054/login.html" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a>
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="p-2 text-center font-bold text-green-500">Online Test Schedule (20-02-2024)</td>
              <td className="p-2 text-center">
                <a title="DSSSB" href="https://dsssb.delhi.gov.in/sites/default/files/DSSSB/circulars-orders/scan20240214_0015.pdf" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a>
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="p-2 text-center font-bold text-green-500">Apply Online (20-01-2024)</td>
              <td className="p-2 text-center">
                <a title="DSSSB" href="https://dsssbonline.nic.in/" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a>
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="p-2 text-center font-bold text-green-500">Detailed Notification</td>
              <td className="p-2 text-center">
                <a title="DSSSB" href="https://img.freejobalert.com/uploads/2024/01/Detail-Notification-DSSSB-Various-Vacancy-Posts.pdf" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a>
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="p-2 text-center font-bold text-green-500">Short Notification</td>
              <td className="p-2 text-center">
                <a title="DSSSB" href="https://img.freejobalert.com/uploads/2024/01/Short-Notification-DSSSB-SPA-PA-JJA-Posts.pdf" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a>
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="p-2 text-center font-bold text-green-500">Official Website</td>
              <td className="p-2 text-center">
                <a title="DSSSB" href="https://dsssb.delhi.gov.in/" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}