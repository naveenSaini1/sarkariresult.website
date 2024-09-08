export default function RecruitmentInformation() {
  // This component displays recruitment information for the JSSC JGGLCCE 2023 exam. 
  // It includes details such as exam name, post date, total vacancies, brief information, application fee, important dates, and vacancy details.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">JSSC JGGLCCE 2023 Recruitment</h1>
      <p className="mb-4">
        <strong className="text-justify">
          <span className="text-green-500">Name of the Post:</span> JSSC JGGLCCE 2023 New Exam Date Announced
        </strong>
      </p>
      <p className="text-justify mb-4">
        <strong>
          <span className="text-green-500">Post Date: </span>
          <strong>09-06-2023</strong>
        </strong>
      </p>
      <p className="mb-4">
        <strong>
          <span className="text-green-500">Latest Update:</span> 05-09-2024
        </strong>
      </p>
      <p className="text-justify mb-4">
        <strong>
          <span className="text-green-500">Total Vacancy: </span>
          <span className="text-black">2025</span>
        </strong>
      </p>
      <p className="text-justify mb-4">
        <strong>
          <span className="text-red-500">Brief Information:</span>
        </strong>{' '}
        Jharkhand Staff Selection Commission (JSSC) has given a notification to conduct Jharkhand General Graduate level combined competitive Examination (JGGLCCE)– 2023 for the recruitment of Assistant Branch Officer, Jr Secretariat Asst &amp; Other vacancy. Those Candidates who are interested in the vacancy details &amp; completed all eligibility criteria can read the Notification &amp; Apply Online.
      </p>

      <table className="table-auto border-2 w-full mb-4">
        <tbody>
          <tr className="border-2">
            <td colSpan={2} className="text-center border-2">
              <p className="text-center">
                <strong className="text-red-500">Jharkhand Staff Selection Commission (JSSC)</strong>
              </p>
              <p className="text-center">
                <strong className="text-pink-500">Advt No. 10 &amp; 11/2023</strong>
              </p>
              <p className="text-center">
                <strong className="text-green-500">JGGLCCE Exam 2023</strong>
              </p>
              <p className="text-center">
                <a
                  href="https://www.freejobalert.com"
                  target="_blank"
                  rel="noopener"
                  className="underline text-blue-500"
                >
                  
                </a>
              </p>
            </td>
          </tr>
          <tr className="border-2">
            <td colSpan={2} className="text-center border-2">
              <p>
                <strong className="text-red-500">Application Fee</strong>
              </p>
              <ul className="list-disc pl-6">
                <li>
                  <span>Application Fee: <strong>Rs. 100/-</strong></span>
                </li>
                <li>
                  <span>
                    SC/ ST Candidates of Jharkhand State:
                    <strong> Rs. 50/- </strong>
                  </span>
                </li>
                <li>
                  <span>Payment Mode: <strong>Through Online</strong></span>
                </li>
              </ul>
            </td>
          </tr>
          <tr className="border-2">
            <td colSpan={2} className="text-center border-2">
              <p>
                <strong className="text-red-500">Important Dates</strong>
              </p>
              <p className="text-left">
                <strong>Re Open Dates:</strong>
              </p>
              <ul className="list-disc pl-6">
                <li>
                  <span>
                    Starting Date to Apply Online &amp; Payment of Fee:
                    <strong> 11-08-2023</strong>
                  </span>
                </li>
                <li>
                  <span>
                    Last Date to Apply Online:
                    <strong> 15-08-2023 till Midnight</strong>
                  </span>
                </li>
                <li>
                  <span>
                    Last Date for Payment of Fee:
                    <strong> 17-08-2023</strong>
                  </span>
                </li>
                <li>
                  <span>
                    Last Date for Upload of Photo &amp; Signature:
                    <strong> 19-08-2023</strong>
                  </span>
                </li>
                <li>
                  <span>
                    Date for Errors Correction in Application Form:
                    <strong> 21-08-2023 to 23-08-2023 till Midnight</strong>
                  </span>
                </li>
                <li>
                  <span>
                    Date of Exam
                    <strong>: <span className="text-red-500">16 &amp; 17-12-2023 (Postponed)</span></strong>
                  </span>
                </li>
                <li>
                  <span>
                    Date of New Exam:
                    <strong> 21-01-2024 &amp; 28-01-2024 <span className="text-red-500">(Exam Cancelled)</span></strong>
                  </span>
                </li>
                <li>
                  <span>
                    Date of New Examination:
                    <strong> 28-01-2024 &amp; 04-02-2024 <span className="text-red-500">(Exam Cancelled)</span></strong>
                  </span>
                </li>
                <li>
                  <span>
                    Date of New Exam:
                    <strong> 21-09-2024 &amp; 22-09-2024</strong>
                  </span>
                </li>
                <li>
                  <span>
                    Date for Downloading of Admit Card:
                    <strong> 17-09-2024</strong>
                  </span>
                </li>
              </ul>
              <p className="text-left">
                <strong>Old Dates:</strong>
              </p>
              <ul className="list-disc pl-6">
                <li>
                  <span>
                    Starting Date to Apply Online &amp; Payment of Fee:
                    <strong> 20-06-2023</strong>
                  </span>
                </li>
                <li>
                  <span>
                    Last Date to Apply Online:
                    <strong> 03-08-2023 till Midnight</strong>
                  </span>
                </li>
                <li>
                  <span>
                    Last Date for Payment of Fee:
                    <strong> 05-08-2023</strong>
                  </span>
                </li>
                <li>
                  <span>
                    Last Date for Upload of Photo &amp; Signature:
                    <strong> 07-08-2023</strong>
                  </span>
                </li>
                <li>
                  <span>
                    Date for Errors Correction in Application Form:
                    <strong> 08-08-2023 to 09-08-2023 till Midnight</strong>
                  </span>
                </li>
                <li>
                  <span>
                    Date of Exam
                    <strong>: 14-10-2023 &amp; 15-10-2023</strong>
                  </span>
                </li>
              </ul>
            </td>
          </tr>
          <tr className="border-2">
            <td colSpan={2} className="text-center border-2">
              <p>
                <strong className="text-red-500">Age Limit (as on 01-08-2023)</strong>
              </p>
              <ul className="list-disc pl-6">
                <li>
                  <span>Minimum Age: <strong>21 Years</strong></span>
                </li>
                <li>
                  <span>
                    Maximum Age for UR/ OBC:
                    <strong>3</strong>
                    <strong className="">5 Years</strong>
                  </span>
                </li>
                <li>
                  <span>
                    Maximum Age for MBC (schedule-1) &amp; BC (Schedule-2) (Male):
                    <strong className=""> 37 Years</strong>
                  </span>
                </li>
                <li>
                  <span>
                    Maximum Age for UR/ OBC/ EBC (Female):
                    <strong className=""> 38 Years</strong>
                  </span>
                </li>
                <li>
                  <span>
                    Maximum Age for SC/ ST Candidates (Male &amp; Female):
                    <strong className=""> 40 Years</strong>
                  </span>
                </li>
                <li>
                  <span>Age relaxation is applicable as per rules.</span>
                </li>
              </ul>
            </td>
          </tr>
          <tr className="border-2">
            <td colSpan={2} className="text-center border-2">
              <p>
                <strong className="text-red-500">Qualification</strong>
              </p>
              <ul className="list-disc pl-6">
                <li>
                  <span>
                    Candidates should possess Any Degree or equivalent from a recognised University.
                  </span>
                </li>
              </ul>
            </td>
          </tr>
          <tr className="border-2">
            <td colSpan={2} className="text-center border-2">
              <span className="text-red-500">Vacancy Details</span>
            </td>
          </tr>
          <tr className="border-2">
            <td colSpan={2} className="text-center border-2">
              <span className="text-black">JGGLCCE Exam 2023</span>
            </td>
          </tr>
          <tr className="border-2">
            <td className="text-center border-2">
              <span className="text-pink-500">Post Name</span>
            </td>
            <td className="text-center border-2">
              <span className="text-pink-500">Total</span>
            </td>
          </tr>
          <tr className="border-2">
            <td className="text-center border-2">Assistant Branch Officer</td>
            <td className="text-center border-2">863</td>
          </tr>
          <tr className="border-2">
            <td className="text-center border-2">Junior Secretariat Assistant</td>
            <td className="text-center border-2">343</td>
          </tr>
          <tr className="border-2">
            <td className="text-center border-2">Labor Enforcement Officer</td>
            <td className="text-center border-2">182</td>
          </tr>
          <tr className="border-2">
            <td className="text-center border-2">Planning Assistant</td>
            <td className="text-center border-2">05</td>
          </tr>
          <tr className="border-2">
            <td className="text-center border-2">Block Welfare Officer</td>
            <td className="text-center border-2">195</td>
          </tr>
          <tr className="border-2">
            <td className="text-center border-2">Block Supply Officer</td>
            <td className="text-center border-2">252</td>
          </tr>
          <tr className="border-2">
            <td className="text-center border-2">Circle Inspector</td>
            <td className="text-center border-2">185</td>
          </tr>
          <tr className="border-2">
            <td colSpan={2} className="text-center border-2">
              <span className="text-blue-500">
                <strong>Interested Candidates Can Read the Full Notification Before Apply Online</strong>
              </span>
            </td>
          </tr>
          <tr className="border-2">
            <td colSpan={2} className="text-center border-2">
              <span className="text-red-500">Important Links</span>
            </td>
          </tr>
          <tr className="border-2">
            <td className="text-center border-2">
              <span className="text-green-500">
                <strong>Exam Date &amp; Admit Card Date Notice (05-09-2024)</strong>
              </span>
            </td>
            <td className="text-center border-2">
              <a
                title="JSSC"
                href="https://img.freejobalert.com/uploads/2024/09/Exam-Date-Admit-Card-Date-Notice-JSSC-JGGLCCE-Exam-2023.pdf"
                target="_blank"
                rel="nofollow"
                className="underline text-blue-500"
              >
                <strong>Click Here</strong>
              </a>
            </td>
          </tr>
          <tr className="border-2">
            <td className="text-center border-2">
              <span className="text-green-500">
                <strong>New Exam Date (14-08-2024)</strong>
              </span>
            </td>
            <td className="text-center border-2">
              <a
                title="JSSC"
                href="http://www.jssc.nic.in/"
                target="_blank"
                rel="nofollow noopener"
                className="underline text-blue-500"
              >
                <strong>Click here</strong>
              </a>
            </td>
          </tr>
          <tr className="border-2">
            <td className="text-center border-2">
              <span className="text-green-500">
                <strong>Exam Date Cancelled (02-02-2024)</strong>
              </span>
            </td>
            <td className="text-center border-2">
              <b>
                <a
                  title="JSSC"
                  href="https://jssc.nic.in/sites/default/files/Notice%2028-01-2024.pdf"
                  target="_blank"
                  rel="nofollow"
                  className="underline text-blue-500"
                >
                  Link 1
                </a>{' '}
                |{' '}
                <a
                  title="JSSC"
                  href="https://jssc.nic.in/sites/default/files/notice-17_JGGLCCE-2023_31.01.2024.pdf"
                  target="_blank"
                  rel="nofollow"
                  className="underline text-blue-500"
                >
                  Link 2
                </a>
              </b>
            </td>
          </tr>
          <tr className="border-2">
            <td className="text-center border-2">
              <span className="text-green-500">
                <strong>Admit Card (22-01-2024)</strong>
              </span>
            </td>
            <td className="text-center border-2">
              <b>
                <a
                  title="JSSC"
                  href="https://jssc.nic.in/admitcard/link-download-admit-card-jgglcce-2023"
                  target="_blank"
                  rel="nofollow"
                  className="underline text-blue-500"
                >
                  Click Here
                </a>{' '}
                |{' '}
                <a
                  title="JSSC"
                  href="https://jssc.nic.in/notices/important-notice-regarding-admit-card-jgglcce-2023"
                  target="_blank"
                  rel="nofollow"
                  className="underline text-blue-500"
                >
                  Notice
                </a>
              </b>
            </td>
          </tr>
          <tr className="border-2">
            <td className="text-center border-2">
              <span className="text-green-500">
                <strong>New Exam Date (10-01-2024)</strong>
              </span>
            </td>
            <td className="text-center border-2">
              <b>
                <a
                  title="JGGLCCE"
                  href="https://jssc.nic.in/sites/default/files/Important%20Notice%20Regarding%20JGGLCCE-2023.pdf"
                  target="_blank"
                  rel="nofollow"
                  className="underline text-blue-500"
                >
                  Click Here
                </a>
              </b>
            </td>
          </tr>
          <tr className="border-2">
            <td className="text-center border-2">
              <span className="text-green-500">
                <strong>Candidature Rejection List (30-12-2023)</strong>
              </span>
            </td>
            <td className="text-center border-2">
              <b>
                <a
                  title="JSSC"
                  href="https://jssc.nic.in/sites/default/files/notice-11_15.12.2023%20-%20JGGLCCE-2023.pdf"
                  target="_blank"
                  rel="nofollow"
                  className="underline text-blue-500"
                >
                  Click Here
                </a>
              </b>
            </td>
          </tr>
          <tr className="border-2">
            <td className="text-center border-2">
              <span className="text-green-500">
                <strong>New Exam Date (13-12-2023)</strong>
              </span>
            </td>
            <td className="text-center border-2">
              <b>
                <a
                  title="JSSC"
                  href="https://jssc.nic.in/sites/default/files/Notice-10-12.12.2023.pdf"
                  target="_blank"
                  rel="nofollow"
                  className="underline text-blue-500"
                >
                  Click Here
                </a>
              </b>
            </td>
          </tr>
          <tr className="border-2">
            <td className="text-center border-2">
              <span className="text-green-500">
                <strong>Exam Postponed (12-12-2023)</strong>
              </span>
            </td>
            <td className="text-center border-2">
              <b>
                <a
                  title="JSSC"
                  href="https://jssc.nic.in/sites/default/files/notice-09_JGGLCCE-2023.pdf"
                  target="_blank"
                  rel="nofollow"
                  className="underline text-blue-500"
                >
                  Click Here
                </a>
              </b>
            </td>
          </tr>
          <tr className="border-2">
            <td className="text-center border-2">
              <span className="text-green-500">
                <strong>New Exam Date (27-09-2023)</strong>
              </span>
            </td>
            <td className="text-center border-2">
              <b>
                <a
                  title="JSSC"
                  href="https://jssc.nic.in/sites/default/files/Important%20Notice%20of%20JGGLCCE-2023.pdf"
                  target="_blank"
                  rel="nofollow"
                  className="underline text-blue-500"
                >
                  Click Here
                </a>
              </b>
            </td>
          </tr>
          <tr className="border-2">
            <td className="text-center border-2">
              <span className="text-green-500">
                <strong>Incomplete Candidates List (14-09-2023)</strong>
              </span>
            </td>
            <td className="text-center border-2">
              <b>
                <a
                  title="JSSC"
                  href="https://jssc.nic.in/notices/important-notice-regarding-incomplete-application-form-various-candidates-under-jgglcce-2023"
                  target="_blank"
                  rel="nofollow"
                  className="underline text-blue-500"
                >
                  Click Here
                </a>
              </b>
            </td>
          </tr>
          <tr className="border-2">
            <td className="text-center border-2">
              <span className="text-green-500">
                <strong>Online Apply Editing Dates (16-08-2023)</strong>
              </span>
            </td>
            <td className="text-center border-2">
              <b>
                <a
                  href="https://jssc.nic.in/sites/default/files/Notice-03_09.08.2023.pdf"
                  target="_blank"
                  rel="nofollow"
                  className="underline text-blue-500"
                >
                  Click Here
                </a>
              </b>
            </td>
          </tr>
          <tr className="border-2">
            <td className="text-center border-2">
              <span className="text-green-500">
                <strong>Apply Online (11-08-2023</strong>
              </span>
            </td>
            <td className="text-center border-2">
              <a
                href="https://jsscjgglcce23.onlinereg.in/"
                target="_blank"
                rel="nofollow"
                className="underline text-blue-500"
              >
                <b>Click Here</b>
              </a>
            </td>
          </tr>
          <tr className="border-2">
            <td className="text-center border-2">
              <span className="text-green-500">
                <strong>Re Open Dates (10-08-2023)</strong>
              </span>
            </td>
            <td className="text-center border-2">
              <b>
                <a
                  href="https://jssc.nic.in/sites/default/files/Notice-04_10.08.2023.pdf"
                  target="_blank"
                  rel="nofollow"
                  className="underline text-blue-500"
                >
                  Click Here
                </a>
              </b>
            </td>
          </tr>
          <tr className="border-2">
            <td className="text-center border-2">
              <span className="text-green-500">
                <strong>Last Date Extended (19-07-2023)</strong>
              </span>
            </td>
            <td className="text-center border-2">
              <b>
                <a
                  href="https://jssc.nic.in/sites/default/files/Notice-02_18.07.2022.pdf"
                  target="_blank"
                  rel="nofollow"
                  className="underline text-blue-500"
                >
                  Click Here
                </a>
              </b>
            </td>
          </tr>
          <tr className="border-2">
            <td className="text-center border-2">
              <span className="text-green-500">
                <strong>Exam Date (14-07-2023)</strong>
              </span>
            </td>
            <td className="text-center border-2">
              <a
                href="https://jssc.nic.in/sites/default/files/other%20notice_13-07-2023.pdf"
                target="_blank"
                rel="nofollow"
                className="underline text-blue-500"
              >
                <b>Click Here</b>
              </a>
            </td>
          </tr>
          <tr className="border-2">
            <td className="text-center border-2">
              <span className="text-green-500">
                <strong>Age Details Notice (12-07-2023)</strong>
              </span>
            </td>
            <td className="text-center border-2">
              <b>
                <a
                  title="JSSC"
                  href="https://jssc.nic.in/sites/default/files/Important%20Notice%20-01_For%20JGGLCCE-2023.pdf"
                  target="_blank"
                  rel="nofollow"
                  className="underline text-blue-500"
                >
                  Click Here
                </a>
              </b>
            </td>
          </tr>
          <tr className="border-2">
            <td className="text-center border-2">
              <span className="text-green-500">
                <strong>Apply Online (21-06-2023)</strong>
              </span>
            </td>
            <td className="text-center border-2">
              <a
                href="https://jsscjgglcce23.onlinereg.in/"
                target="_blank"
                rel="nofollow"
                className="underline text-blue-500"
              >
                <b>Click Here</b>
              </a>
            </td>
          </tr>
          <tr className="border-2">
            <td className="text-center border-2">
              <span className="text-green-500">
                <strong>Notification </strong>
              </span>
            </td>
            <td className="text-center border-2">
              <strong>
                Advt No.{' '}
                <a
                  title="JSSC"
                  href="https://img.freejobalert.com/uploads/2023/06/Notification-JSSC-JGGLCCE-10-2023.pdf"
                  target="_blank"
                  rel="nofollow"
                  className="underline text-blue-500"
                >
                  10/2023
                </a>{' '}
                |{' '}
                <a
                  title="JSSC"
                  href="https://img.freejobalert.com/uploads/2023/06/Notification-JSSC-JGGLCCE-11-2023.pdf"
                  target="_blank"
                  rel="nofollow"
                  className="underline text-blue-500"
                >
                  11/2023
                </a>
              </strong>
            </td>
          </tr>
          <tr className="border-2">
            <td className="text-center border-2">
              <span className="text-green-500">
                <strong>Official Website</strong>
              </span>
            </td>
            <td className="text-center border-2">
              <a
                title="JSSC"
                href="http://www.jssc.nic.in/"
                target="_blank"
                rel="nofollow"
                className="underline text-blue-500"
              >
                <strong>Click here</strong>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}