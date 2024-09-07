export default function RecruitmentInformation() {
  // This component displays recruitment information for the GSSSB Gujarat Subordinate Services Exam 2024.
  // It includes details such as post name, post date, total vacancy, brief information, application fee, important dates, age limit, qualification, and vacancy details.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">GSSSB Gujarat Subordinate Services Exam 2024</h1>

      <p className="text-justify mb-4">
        <span className="text-green-500 font-bold">Name of the Post: </span>
        GSSSB Gujarat Subordinate Services Exam 2024 CBRT Revised Final Key Released
      </p>

      <p className="text-justify mb-4">
        <span className="text-green-500 font-bold">Post Date: </span>
        05-01-2024
      </p>

      <p className="text-justify mb-4">
        <span className="text-green-500 font-bold">Latest Update: </span>
        04-09-2024
      </p>

      <p className="text-justify mb-4">
        <span className="text-green-500 font-bold">Total Vacancy: </span>
        <span className="text-black">4304</span>
        <span className="text-red-500">+898+352=5554</span>
      </p>

      <p className="text-justify mb-4">
        <span className="text-red-500 font-bold">Brief Information: </span>
        Gujarat Secondary Service Selection Board (GSSSB) has given a notification for
        Conducting the Gujarat Subordinate Services, Class III (Group A and Group B)
        (Combined Competitive Examination) 2024 for Recruitment of junior Clerk,
        Senior Clerk, Office Assistant, Assistant / Assistant Depot Manager & Other
        Vacancy. Those Candidates who are interested in the vacancy details &
        completed all eligibility criteria can read the Notification & Apply Online.
      </p>

      <h2 className="text-2xl font-bold mb-4">Important Details</h2>

      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Application Fee</h3>
        <ul className="list-disc pl-4">
          <li>Fee for Unreserved Category: <strong>Rs. 500/-</strong></li>
          <li>For Reserved category: <strong>Rs. 400/-</strong></li>
          <li>Payment Mode: <strong>Through Online</strong></li>
          <li>For more fee details refer the notification</li>
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Important Dates</h3>
        <ul className="list-disc pl-4">
          <li>Date of Notification: <strong>03-01-2024</strong></li>
          <li>
            Starting Date to Apply Online & Payment of Fee: <strong>
              04-01-2024 (14:00 hrs)
            </strong>
          </li>
          <li>
            <span className="line-height-19px">
              Last Date For Apply Online & Payment of Fee: <strong>
                31-01-2024 (up to 23:59 hrs)
              </strong>
            </span>
          </li>
          <li>
            Date of CBRT: <strong>
              08, 09, 11, 13, 14, 16, 17, 20-05-2024
            </strong>
          </li>
          <li>
            Date of Downloading Admit Card: <strong>
              27-03-2024 to 05-04-2024 (23:59 hrs)
            </strong>
          </li>
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Age Limit (as on 31-01-2024)</h3>
        <ul className="list-disc pl-4">
          <li>Minimum Age Limit: <strong>20 Years</strong></li>
          <li>Maximum Age Limit: <strong>35 Years</strong></li>
          <li>Age Relaxation is Applicable as per Rules.</li>
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Qualification</h3>
        <ul className="list-disc pl-4">
          <li>Candidates should possess Any Degree.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>

      <table className="table-auto w-full text-center border-collapse border-2 border-gray-300 mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2 font-bold">SI No.</th>
            <th className="px-4 py-2 font-bold">Post Name</th>
            <th className="px-4 py-2 font-bold">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-100">
            <td className="px-4 py-2" colSpan="3">
              Gujarat Subordinate Services, Class- III (Group – A and Group- B)
              Combined Exam 2024
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">1.</td>
            <td className="px-4 py-2">Junior Clerk</td>
            <td className="px-4 py-2">2018</td>
          </tr>
          <tr>
            <td className="px-4 py-2">2.</td>
            <td className="px-4 py-2">Senior Clerk</td>
            <td className="px-4 py-2">532</td>
          </tr>
          <tr>
            <td className="px-4 py-2">3.</td>
            <td className="px-4 py-2">Head Clerk</td>
            <td className="px-4 py-2">169</td>
          </tr>
          <tr>
            <td className="px-4 py-2">4.</td>
            <td className="px-4 py-2">Office Assistant</td>
            <td className="px-4 py-2">
              210
              <span className="text-red-500">+12=222</span>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">5.</td>
            <td className="px-4 py-2">Junior Clerk</td>
            <td className="px-4 py-2">590</td>
          </tr>
          <tr>
            <td className="px-4 py-2">6.</td>
            <td className="px-4 py-2">Office Superintendent Class 3</td>
            <td className="px-4 py-2">05</td>
          </tr>
          <tr>
            <td className="px-4 py-2">7.</td>
            <td className="px-4 py-2">Sub Registrar, Grade-I</td>
            <td className="px-4 py-2">45</td>
          </tr>
          <tr>
            <td className="px-4 py-2">8.</td>
            <td className="px-4 py-2">Sub Registrar, Grade-II</td>
            <td className="px-4 py-2">53</td>
          </tr>
          <tr>
            <td className="px-4 py-2">9.</td>
            <td className="px-4 py-2">Inspector of Stamps</td>
            <td className="px-4 py-2">23</td>
          </tr>
          <tr>
            <td className="px-4 py-2">10.</td>
            <td className="px-4 py-2">Social Welfare Inspector</td>
            <td className="px-4 py-2">46</td>
          </tr>
          <tr>
            <td className="px-4 py-2">11.</td>
            <td className="px-4 py-2">Assistant Social Welfare Officer</td>
            <td className="px-4 py-2">13</td>
          </tr>
          <tr>
            <td className="px-4 py-2">12.</td>
            <td className="px-4 py-2">Social Welfare Inspector</td>
            <td className="px-4 py-2">102</td>
          </tr>
          <tr>
            <td className="px-4 py-2">13.</td>
            <td className="px-4 py-2">Collector Office Clerk</td>
            <td className="px-4 py-2">160</td>
          </tr>
          <tr>
            <td className="px-4 py-2">14.</td>
            <td className="px-4 py-2">House Wife</td>
            <td className="px-4 py-2">06</td>
          </tr>
          <tr>
            <td className="px-4 py-2">15.</td>
            <td className="px-4 py-2">House Holder</td>
            <td className="px-4 py-2">14</td>
          </tr>
          <tr>
            <td className="px-4 py-2">16.</td>
            <td className="px-4 py-2">Assistant Tribal – Development Officer</td>
            <td className="px-4 py-2">65</td>
          </tr>
          <tr>
            <td className="px-4 py-2">17.</td>
            <td className="px-4 py-2">Assistant Social Welfare Officer</td>
            <td className="px-4 py-2">07</td>
          </tr>
          <tr>
            <td className="px-4 py-2">18.</td>
            <td className="px-4 py-2">Assistant / Assistant Depot Manager</td>
            <td className="px-4 py-2">372</td>
          </tr>
          <tr>
            <td className="px-4 py-2">19.</td>
            <td className="px-4 py-2">Depot Manager (Godown Manager)</td>
            <td className="px-4 py-2">26</td>
          </tr>
          <tr>
            <td className="px-4 py-2">20.</td>
            <td className="px-4 py-2">Junior Assistant</td>
            <td className="px-4 py-2">08</td>
          </tr>
          <tr>
            <td className="px-4 py-2">21.</td>
            <td className="px-4 py-2">Junior Clerk, Class-III, (Group-B)</td>
            <td className="px-4 py-2">
              <span className="text-red-500">898+340=1238</span>
            </td>
          </tr>
        </tbody>
      </table>

      <p className="text-blue-500 font-bold mb-4">
        Interested Candidates Can Read the Full Notification Before Apply Online
      </p>

      <h2 className="text-2xl font-bold mb-4">Important Links</h2>

      <table className="table-auto w-full text-center border-collapse border-2 border-gray-300">
        <tbody>
          <tr>
            <td className="px-4 py-2" colSpan="2">
              <span className="text-green-500 font-bold">
                CBRT Revised Final Answer Key (04-09-2024)
              </span>
            </td>
            <td className="px-4 py-2">
              <a
                href="https://cdn3.digialm.com/EForms/configuredHtml/32791/88319/login.html"
                target="_blank"
                rel="nofollow noopener"
                className="text-blue-500 hover:underline"
              >
                Key
              </a>
              &nbsp;|&nbsp;
              <a
                href="https://img.freejobalert.com/uploads/2024/09/Revised-Final-Key-Notice-GSSSB-Gujarat-Subordinate-Services-Exam-2024.pdf"
                target="_blank"
                rel="nofollow noopener"
                className="text-blue-500 hover:underline"
              >
                Notice
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2" colSpan="2">
              <span className="text-green-500 font-bold">
                CBRT Final Key cum Response Sheet (31-07-2024)
              </span>
            </td>
            <td className="px-4 py-2">
              <a
                href="https://cdn3.digialm.com/EForms/configuredHtml/32791/88319/login.html"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 hover:underline"
              >
                Key
              </a>
              &nbsp;|&nbsp;
              <a
                href="https://img.freejobalert.com/uploads/2024/07/CBRT-Final-Key-cum-Response-Sheet-GSSSB-Gujarat-Subordinate-Services-Exam-2024.pdf"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 hover:underline"
              >
                Notice
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2" colSpan="2">
              <span className="text-green-500 font-bold">
                Notice Regarding Fee Refund of Candidates (12-07-2024)
              </span>
            </td>
            <td className="px-4 py-2">
              <a
                href="https://img.freejobalert.com/uploads/2024/07/Notice-Regarding-Fee-Refund-of-Candidates-GSSSB-Gujarat-Subordinate-Services-2024.pdf"
                target="_blank"
                rel="nofollow noopener"
                className="text-blue-500 hover:underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2" colSpan="2">
              <span className="text-green-500 font-bold">
                CBRT Provisional Answer Key cum Response Sheet (08-06-2024)
              </span>
            </td>
            <td className="px-4 py-2">
              <a
                title="GSSSB"
                href="https://cdn3.digialm.com/EForms/configuredHtml/32791/88319/login.html"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 hover:underline"
              >
                Key
              </a>
              &nbsp;|&nbsp;
              <a
                title="GSSSB"
                href="https://gsssb.gujarat.gov.in/ViewFile?fileName=RVLYHYd8od11Szg5ygSndVPnhJaEAT9S9jOjLc%E2%9C%A4TlVyZVANPoZofXy02xYgxUCaUwAAZll66vpxgSKNdGNtqPhptlDdHH84qFwNaCHkLpunQE5FeXU%E2%9C%BFVy5LATo7sXQe%E2%9C%A4jSPDL%E2%9C%A4znBq7m8lo1GElyvg%E2%99%AC%E2%99%AC"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 hover:underline"
              >
                Notice
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2" colSpan="2">
              <span className="text-green-500 font-bold">
                Answer Key cum Response Sheet (28-05-2024)
              </span>
            </td>
            <td className="px-4 py-2">
              <a
                href="https://cdn3.digialm.com/EForms/configuredHtml/32791/88319/login.html"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 hover:underline"
              >
                Link
              </a>
              &nbsp;|&nbsp;
              <a
                title="GSSSB"
                href="https://gsssb.gujarat.gov.in/ViewFile?fileName=bPErc3KMN8g3ue9pvuiu5%E2%9C%A4SKmAszr3MPUh76OaPnPZf86eQLEsjZ6Ybx0EHDiBKftHSmJpEfWAJ2O65FENeQyMghCQeaUvTVXOf9vh4UlZgwOKT%E2%9C%BFePf0bF4urXnTdRKqVIZke60C3Gg3EiWQoEEHbw%E2%99%AC%E2%99%AC"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 hover:underline"
              >
                Notice
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2" colSpan="2">
              <span className="text-green-500 font-bold">
                Admit Card (06-05-2024)
              </span>
            </td>
            <td className="px-4 py-2">
              <a
                href="https://ojas.gujarat.gov.in/PrintApplForm.aspx?opt=OTMUam2FvAo="
                target="_blank"
                rel="nofollow noopener"
                className="text-blue-500 hover:underline"
              >
                Admit Card
              </a>
              &nbsp;|&nbsp;
              <a
                title="GSSSB"
                href="https://gsssb.gujarat.gov.in/ViewFile?fileName=1%E2%9C%A4bHK44aSg4RtrIbkSDs7Py8IxpczACq8xG4lgBMe%E2%9C%BFisVCiyiQzm9%E2%9C%BFeNflQ5XIQZr%E2%9C%A43J7xji%E2%9C%BFuy1BUZ26TwC2ZfxU%E2%9C%A4NU4pCNdZN6Vwl0o%E2%9C%A4J8mninMpbeVPUlk9AJPp5TWnTXhqk82BCgzJMILTwdTQ%E2%99%AC%E2%99%AC"
                target="_blank"
                rel="nofollow noopener"
                className="text-blue-500 hover:underline"
              >
                Notice
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2" colSpan="2">
              <span className="text-green-500 font-bold">
                New Exam Date (04-05-2024)
              </span>
            </td>
            <td className="px-4 py-2">
              <a
                href="https://gsssb.gujarat.gov.in/ViewFile?fileName=5ZzVmugN0TiBNluOINM7wcaKIboe27p1WeHt%E2%9C%A47qxzBXZqziibnhmHkmU88kzS8lw9VdF78iDpT6yOY%E2%9C%BFACQhJGt0DpBrs62hb0F4LB751x2gJwU4X3ar%E2%9C%BFlXKjZH6jetglNO%E2%9C%BFK2Vt9VpfjqvK5StXCVQ%E2%99%AC%E2%99%AC"
                target="_blank"
                rel="nofollow noopener"
                className="text-blue-500 hover:underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2" colSpan="2">
              <span className="text-green-500 font-bold">
                Exam Postponed (20-04-2024)
              </span>
            </td>
            <td className="px-4 py-2">
              <a
                href="https://gsssb.gujarat.gov.in/ViewFile?fileName=wIPp6vIXzKq9MU7pIB%E2%9C%BFHw%E2%9C%BFigS1xrTgA2x%E2%9C%A4jjdN4Jxr7opyODTOkz4wCn5lYcDQvpOjW4i%E2%9C%BFd2lch7fVufyOIN%E2%9C%BFxPRj%E2%9C%A4frH0MnRrN0PnM8R3odXAFmx%E2%9C%A4t0qs2d2rvtnCy5%E2%9C%BFsZhZx3CmvJtASjbmrm0%E2%9C%BFw%E2%99%AC%E2%99%AC"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 hover:underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2" colSpan="2">
              <span className="text-green-500 font-bold">
                Admit Card Date Notice (02-04-2024)
              </span>
            </td>
            <td className="px-4 py-2">
              <a
                href="https://gsssb.gujarat.gov.in/ViewFile?fileName=CyyzQKgp6vQbXGWTzLCph8kgmqnd1oMZEsAvY7Y2%E2%9C%A4PsPf%E2%9C%A4kd3I5ZZ31zmtfA%E2%9C%A4iTwS6SBndhRHqStAqPEoIKWojbrYf48%E2%9C%A4qIf8ToAocO2Z3KBvnU%E2%9C%A4r8hU7vd0zVuifS%E2%9C%A4jzGFKLboacIUom9h1iEcVbw%E2%99%AC%E2%99%AC"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 hover:underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2" colSpan="2">
              <span className="text-green-500 font-bold">
                Revised Exam Schedule Announced (31-03-2024)
              </span>
            </td>
            <td className="px-4 py-2">
              <a
                href="https://gsssb.gujarat.gov.in/ViewFile?fileName=CyyzQKgp6vQbXGWTzLCph8kgmqnd1oMZEsAvY7Y2%E2%9C%A4PuTW14I1%E2%9C%A4lPpEhgO5FOURkFQEBg1%E2%9C%BFSNd5QC%E2%9C%A4CkA88koY%E2%9C%BFk0A04Ox9Xu%E2%9C%BFEany%E2%9C%BFBL2Czz37NphINwd0Ej8ZmPgKMuZP0wBqsWupDeH3g5QKPoAg%E2%99%AC%E2%99%AC"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 hover:underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2" colSpan="2">
              <span className="text-green-500 font-bold">
                CBRT Call Letter (28-03-2024)
              </span>
            </td>
            <td className="px-4 py-2">
              <a
                href="https://ojas.gujarat.gov.in/ojas1/PrintApplForm.aspx?opt=OTMUam2FvAo="
                target="_blank"
                rel="nofollow"
                className="text-blue-500 hover:underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2" colSpan="2">
              <span className="text-green-500 font-bold">
                Date of Admit Card (19-03-2024)
              </span>
            </td>
            <td className="px-4 py-2">
              <a
                href="https://gsssb.gujarat.gov.in/ViewFile?fileName=CyyzQKgp6vQbXGWTzLCph8kgmqnd1oMZEsAvY7Y2%E2%9C%A4PudxF3r6W4ECqsmgICRtDAz%E2%9C%BFqzVFC375XNRtUdHSHZqUHC5oZFgiQrZlyGEmkdc51FngvcBVxWjuD3JtRStX1IJn0APcQjf9u9cGP5SZ6JAZw%E2%99%AC%E2%99%AC"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 hover:underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2" colSpan="2">
              <span className="text-green-500 font-bold">
                CBRT Exam Date (04-03-2024)
              </span>
            </td>
            <td className="px-4 py-2">
              <a
                href="https://gsssb.gujarat.gov.in/ViewFile?fileName=QrOPKYFJKrjyxy7AeFvFUdma4pT%E2%9C%BFArVOvOzymtzsrMBwZjY5E5oEJRGFvH%E2%9C%BFv9R4AlpjrvljEKg6Swe6PJNDVpIfe4acg4ZO9U5XAl1ZnLaP%E2%9C%BF8qefPYE1ZroGxX4jxyGygkX305Or6afc0LjvORW%E2%9C%BFrw%E2%99%AC%E2%99%AC"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 hover:underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2" colSpan="2">
              <span className="text-green-500 font-bold">
                Vacancy Increase (08-02-2024)
              </span>
            </td>
            <td className="px-4 py-2">
              <a
                href="https://gsssb.gujarat.gov.in/ViewFile?fileName=9Egr294DX1sGpvzS8mBPB6nypiNvtmJRtUJu57mJiyq0I2f3prRHJF5pVt89t8W%E2%9C%A42urKQCItkNflUW35AUwqg7nHB%E2%9C%BFwosu8XcmpFqZ3%E2%9C%A4egeSzR%E2%9C%A4s0Wz4k1yQsPTXy8rEpaECwuKv0QIqDDMBSaYlvw%E2%99%AC%E2%99%AC"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 hover:underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2" colSpan="2">
              <span className="text-green-500 font-bold">
                Vacancy Increase (30-01-2024)
              </span>
            </td>
            <td className="px-4 py-2">
              <a
                title="GSSSB"
                href="https://gsssb.gujarat.gov.in/ViewFile?fileName=WQUpqVsDXj9p4gXG%E2%9C%A4zk2P%E2%9C%A4RQMSMub6QJsLzgEJNIfbpRTD6OarYZEmSl5B3kN%E2%9C%A4WFueUDiYcQSVFPKab9seeR6TraJDg1Tc8knNJ%E2%9C%A4%E2%9C%BFJx6Abfi09i7RLhzX6gTY%E2%9C%BFhHTyjTNCbFVzlWEE01RUapk14j1g%E2%99%AC%E2%99%AC"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 hover:underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2" colSpan="2">
              <span className="text-green-500 font-bold">Apply Online</span>
            </td>
            <td className="px-4 py-2">
              <a
                title="GSSSB"
                href="https://ojas.gujarat.gov.in/AdvtList.aspx?type=lCxUjNjnTp8%3d"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 hover:underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2" colSpan="2">
              <span className="text-green-500 font-bold">Notification</span>
            </td>
            <td className="px-4 py-2">
              <a
                title="GSSSB"
                href="https://gsssb.gujarat.gov.in/ViewFile?fileName=7jwvtaGwThvT2VOjfXRpkDXVdr7FPqz8AcC4V7MJDOIfbJX48SYpyEDsQJ6z9VHbjUM0Lcy%E2%9C%BFbZ3UP1BeMIxlj%E2%9C%A4IObj%E2%9C%BFU0snafdtaxyiji2RAAotav84ZyA6yf3EXdx%E2%9C%BFDKLROFCHRBDsYDWpDTzhh7w%E2%99%AC%E2%99%AC"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 hover:underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2" colSpan="2">
              <span className="text-green-500 font-bold">Official Website</span>
            </td>
            <td className="px-4 py-2">
              <a
                title="GSSSB"
                href="https://gsssb.gujarat.gov.in/"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 hover:underline"
              >
                Click Here
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}