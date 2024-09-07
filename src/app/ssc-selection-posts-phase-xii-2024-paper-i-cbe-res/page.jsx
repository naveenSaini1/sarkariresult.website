export default function RecruitmentInfo() {
  // This component displays recruitment information for SSC Selection Posts (Phase-XII/2024)
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">SSC Selection Posts (Phase-XII/2024)</h1>
      <p className="mb-2">
        <span className="text-green-500 font-bold">Name of the Post:</span>{' '}
        <strong className="font-bold">
          SSC Selection Posts (Phase-XII/2024) Paper-I (CBE) Result Released
        </strong>
      </p>
      <p className="mb-2 text-justify">
        <span className="text-green-500 font-bold">Post Date:</span>{' '}
        <span className="text-gray-900">27-02-2024</span>
      </p>
      <p className="mb-2">
        <span className="text-gray-900 font-bold">
          <span className="text-green-500 font-bold">Latest Update:</span>{' '}
          <span className="text-gray-900">31-08-2024</span>
        </span>
      </p>
      <p className="mb-2">
        <span className="text-green-500 font-bold">Total Vacancy:</span>{' '}
        <span className="text-gray-900">2049</span>
      </p>
      <p className="mb-4 text-justify">
        <span className="text-red-500 font-bold">Brief Information:</span>{' '}
        Staff Selection Commission (SSC) has given a Notification for the
        recruitment of Selection Posts (Phase-XII/2024). Those Candidates
        who are interested in the vacancy details &amp; completed all eligibility
        criteria can read the Notification &amp; Apply Online.
      </p>
      <h2 className="text-2xl font-bold mb-4">Important Details</h2>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Application Fee</h3>
        <ul className="list-disc pl-6">
          <li className="mb-1">Fee: <strong>Rs. 100/-</strong></li>
          <li className="mb-1">
            For Women/ SC/ ST/ PWD/ Ex Serviceman Candidates: <strong>Nil</strong>
          </li>
          <li>
            Payment Mode: <strong>
              Online Through BHIM UPI, Net Banking, by using Visa, Master card,
              Maestro, RuPay Credit or Debit cards.
            </strong>
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Important Dates</h3>
        <ul className="list-disc pl-6">
          <li className="mb-1">
            Starting Date to Apply Online: <strong>26-02-2024</strong>
          </li>
          <li className="mb-1">
            Last Date to Apply Online: <strong>26-03-2024 upto 23:00 Hrs</strong>
          </li>
          <li className="mb-1">
            Last Date for Payment of Fee: <strong>27-03-2024 upto 23:00 Hrs</strong>
          </li>
          <li className="mb-1">
            Dates of Window for Application Form Correction including online
            payment: <strong>30-03-2024 to 01-04-2024 up to 23:00 Hrs</strong>
          </li>
          <li>
            Revised Exam Date of Computer-Based Examination (Paper-I): <strong>
              <span className="text-red-500">
                20th, 21st, 24th, 25th and 26th June 2024
              </span>
            </strong>
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Age Limit (as on 01-01-2024)</h3>
        <ul className="list-disc pl-6">
          <li className="mb-1">Minimum Age Limit: <strong>18 Years</strong></li>
          <li className="mb-1">
            Maximum Age Limit: <strong>42 Years</strong>
          </li>
          <li>
            For Post Wise Age Limit Details Refer Notification.
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Qualification</h3>
        <ul className="list-disc pl-6">
          <li className="mb-1">
            <strong>For Matric level:</strong> Candidates Should Possess 10th
            Class.
          </li>
          <li className="mb-1">
            <strong>For Intermediate Level:</strong> Candidates Should Possess
            10+2.
          </li>
          <li className="mb-1">
            <strong>For Graduation &amp; Above:</strong> Candidates Should
            Possess Any degree
          </li>
          <li>
            For More Details Regarding Age Limit Refer Notification
          </li>
        </ul>
      </div>
      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>
      <table className="table-auto w-full text-center mb-4">
        <thead>
          <tr>
            <th className="border border-gray-300 py-2">
              <span className="text-blue-500 font-bold">Post Name</span>
            </th>
            <th className="border border-gray-300 py-2">
              <span className="text-blue-500 font-bold">Total</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              colSpan={2}
              className="border border-gray-300 py-2 font-bold"
            >
              Selection Posts (Phase-XII) Vacancy 2024
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 py-2">Lab Attendant</td>
            <td
              rowSpan={10}
              className="border border-gray-300 py-2 font-bold"
            >
              2049
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 py-2">
              Lady Medical Attendant
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 py-2">Medical Attendant</td>
          </tr>
          <tr>
            <td className="border border-gray-300 py-2">Nursing Officer</td>
          </tr>
          <tr>
            <td className="border border-gray-300 py-2">Pharmacist</td>
          </tr>
          <tr>
            <td className="border border-gray-300 py-2">Fieldman</td>
          </tr>
          <tr>
            <td className="border border-gray-300 py-2">Deputy Ranger</td>
          </tr>
          <tr>
            <td className="border border-gray-300 py-2">
              Junior Technical Assistant
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 py-2">Accountant</td>
          </tr>
          <tr>
            <td className="border border-gray-300 py-2">
              Assistant Plant Protection Officer
            </td>
          </tr>
          <tr>
            <td
              colSpan={2}
              className="border border-gray-300 py-2 font-bold"
            >
              For remaining vacancies please refer Notification
            </td>
          </tr>
          <tr>
            <td
              colSpan={2}
              className="border border-gray-300 py-2 font-bold"
            >
              <span className="text-blue-500">
                Interested Candidates Can Read the Full Notification Before Apply
                Online
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <h2 className="text-2xl font-bold mb-4">Important Links</h2>
      <table className="table-auto w-full text-center mb-4">
        <thead>
          <tr>
            <th className="border border-gray-300 py-2">
              <span className="text-green-500 font-bold">
                Links
              </span>
            </th>
            <th className="border border-gray-300 py-2">
              <span className="text-gray-900 font-bold">
                Details
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 py-2">
              <span className="text-green-500 font-bold">
                Paper- I (CBE) Result (31-08-2024)
              </span>
            </td>
            <td className="border border-gray-300 py-2">
              <span className="text-gray-900 font-bold">
                Graduation &amp; above Level –{' '}
                <a
                  href="https://img.freejobalert.com/uploads/2024/08/Paper-I-CBE-Result-for-Graduation-and-Above-Level-Posts-SSC-Selection-Posts-Phase-XII-2024.pdf"
                  target="_blank"
                  className="text-blue-500"
                  rel="nofollow"
                >
                  Result
                </a>
                &nbsp;&amp;&nbsp;
                <a
                  href="https://img.freejobalert.com/uploads/2024/08/Paper-I-CBE-Result-Notice-for-Graduation-and-Above-Level-Posts-SSC-Selection-Posts-Phase-XII-2024.pdf"
                  target="_blank"
                  className="text-blue-500"
                  rel="nofollow"
                >
                  Notice
                </a>
                {' | '}Higher Secondary (10+2) Level –{' '}
                <a
                  href="https://img.freejobalert.com/uploads/2024/08/Paper-I-CBE-Result-for-Higher-Secondary102-Level-Posts-SSC-Selection-Posts-Phase-XII-2024.pdf"
                  target="_blank"
                  className="text-blue-500"
                  rel="nofollow"
                >
                  Result
                </a>
                &nbsp;&amp;&nbsp;
                <a
                  href="https://img.freejobalert.com/uploads/2024/08/Paper-I-CBE-Result-Notice-for-Higher-Secondary102-Level-Posts-SSC-Selection-Posts-Phase-XII-2024.pdf"
                  target="_blank"
                  className="text-blue-500"
                  rel="nofollow"
                >
                  Notice
                </a>
                {' | '}Matriculation Level –{' '}
                <a
                  href="https://img.freejobalert.com/uploads/2024/08/Paper-I-CBE-Result-for-Matriculation-Level-Posts-SSC-Selection-Posts-Phase-XII-2024.pdf"
                  target="_blank"
                  className="text-blue-500"
                  rel="nofollow"
                >
                  Result
                </a>
                &nbsp;&amp;&nbsp;
                <a
                  href="https://img.freejobalert.com/uploads/2024/08/Paper-I-CBE-Result-Notice-for-Matriculation-Level-Posts-SSC-Selection-Posts-Phase-XII-2024.pdf"
                  target="_blank"
                  className="text-blue-500"
                  rel="nofollow"
                >
                  Notice
                </a>
              </span>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 py-2">
              <span className="text-green-500 font-bold">
                Cancellation Notice of Category (24-08-2024)
              </span>
            </td>
            <td className="border border-gray-300 py-2">
              <span className="text-gray-900 font-bold">
                <a
                  href="https://img.freejobalert.com/uploads/2024/08/Cancellation-Notice-of-Category-No.-CR14724-SSC-Selection-Posts-Phase-XII-2024.pdf"
                  target="_blank"
                  className="text-blue-500"
                  rel="nofollow"
                >
                  CR14724
                </a>
                {' | '}
                <span className="text-blue-500">
                  <a
                    href="https://img.freejobalert.com/uploads/2024/08/Cancellation-Notice-SSC-Selection-Posts-Phase-XII-2024.pdf"
                    target="_blank"
                    className="text-blue-500"
                    rel="nofollow"
                  >
                    NR22224
                  </a>
                </span>
              </span>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 py-2">
              <span className="text-green-500 font-bold">
                Paper- I (CBE) Tentative Answer Key (02-07-2024)
              </span>
            </td>
            <td className="border border-gray-300 py-2">
              <span className="text-gray-900 font-bold">
                <a
                  href="https://ssc.digialm.com/EForms/configuredHtml/32874/89487/login.html"
                  target="_blank"
                  className="text-blue-500"
                  rel="nofollow"
                >
                  Key
                </a>
                {' | '}
                <a
                  href="https://img.freejobalert.com/uploads/2024/07/Paper-I-CBE-Tentative-Answer-Key-Notice-SSC-Selection-Posts-Phase-XII-2024.pdf"
                  target="_blank"
                  className="text-blue-500"
                  rel="nofollow"
                >
                  Notice
                </a>
              </span>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 py-2">
              <span className="text-green-500 font-bold">
                Paper- I (CBE) Admit Card (18-06-2024)
              </span>
            </td>
            <td className="border border-gray-300 py-2">
              <span className="text-gray-900 font-bold">
                <a
                  href="https://www.ssc-cr.org/sel_post_2024_phase_12_0522.php?proceed=yes"
                  target="_blank"
                  className="text-blue-500"
                  rel="nofollow"
                >
                  SSCCR
                </a>
                {' | '}
                <a
                  href="https://www.sscnwr.org/sel_post_2024_phase_12_0138.php"
                  target="_blank"
                  className="text-blue-500"
                  rel="nofollow"
                >
                  SSCNWR
                </a>
                {' | '}
                <a
                  href="https://sscnr.nic.in/newlook/site/Selection_Post_Exams_2024_reg.html"
                  target="_blank"
                  className="text-blue-500"
                  rel="nofollow"
                >
                  SSCNR
                </a>
                {' | '}
                <a
                  href="https://sscsr.gov.in/SEL-POSTS-PHASE-12-2024-EXAMINATION-MATRIC-LEVEL-CBE-e-AC-GET.htm"
                  target="_blank"
                  className="text-blue-500"
                  rel="nofollow"
                >
                  SSCSR-Matriculation Level
                </a>
                {' | '}
                <a
                  href="https://sscsr.gov.in/SEL-POSTS-PHASE-12-2024-EXAMINATION-HSL-LEVEL-CBE-e-AC-GET.htm"
                  target="_blank"
                  className="text-blue-500"
                  rel="nofollow"
                >
                  SSCSR-Higher Secondary Level
                </a>
                {' | '}
                <a
                  href="https://sscsr.gov.in/SEL-POSTS-PHASE-12-2024-EXAMINATION-GRADUATION-LEVEL-CBE-e-AC-GET.htm"
                  target="_blank"
                  className="text-blue-500"
                  rel="nofollow"
                >
                  SSCSR-Graduation and Abovel Level
                </a>
                {' | '}
                <a
                  href="https://www.sscwr.net/sel_post_2024_phase_12_0844.php"
                  target="_blank"
                  className="text-blue-500"
                  rel="nofollow"
                >
                  SSCWR
                </a>
                {' | '}
                <a
                  href="https://ssckkr.kar.nic.in/sschallticket/sp12_matric_login.aspx"
                  target="_blank"
                  className="text-blue-500"
                  rel="nofollow"
                >
                  SSCKKR-Matric Level
                </a>
                {' | '}
                <a
                  href="https://ssckkr.kar.nic.in/sschallticket/sp12_hsc_login.aspx"
                  target="_blank"
                  className="text-blue-500"
                  rel="nofollow"
                >
                  SSCKKR-Higher Secondary Level
                </a>
                {' | '}
                <a
                  href="https://ssckkr.kar.nic.in/sschallticket/sp12_grad_login.aspx"
                  target="_blank"
                  className="text-blue-500"
                  rel="nofollow"
                >
                  SSCKKR-Graduation Level
                </a>
                {' | '}
                <a
                  href="https://www.sscmpr.org/index.php?Page=sel_post_2024_phase_12_0329"
                  target="_blank"
                  className="text-blue-500"
                  rel="nofollow"
                >
                  SSCMPR
                </a>
                {' | '}
                <a
                  href="https://www.sscner.org.in/en/admin/Admit/2024/SELECTION_POST_12/matriculation/"
                  target="_blank"
                  className="text-blue-500"
                  rel="nofollow"
                >
                  SSCNER-Matric Level
                </a>
                {' | '}
                <a
                  href="https://www.sscner.org.in/en/admin/Admit/2024/SELECTION_POST_12/higher_secondary/"
                  target="_blank"
                  className="text-blue-500"
                  rel="nofollow"
                >
                  SSCNER-Higher Secondary Level
                </a>
                {' | '}
                <a
                  href="https://www.sscner.org.in/en/admin/Admit/2024/SELECTION_POST_12/graduation/"
                  target="_blank"
                  className="text-blue-500"
                  rel="nofollow"
                >
                  SSCNER-Graduation Level
                </a>
                {' | '}
                <a
                  href="http://www.sscer.org/"
                  target="_blank"
                  className="text-blue-500"
                  rel="nofollow"
                >
                  SSCER
                </a>
              </span>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 py-2">
              <span className="text-green-500 font-bold">
                Paper- I (CBE) Application Status (14-06-2024)
              </span>
            </td>
            <td className="border border-gray-300 py-2">
              <span className="text-gray-900 font-bold">
                <a
                  href="https://ssckkr.kar.nic.in/sschallticket/sp12m_appstatus.aspx"
                  target="_blank"
                  className="text-blue-500"
                  rel="nofollow"
                >
                  SSCKKR-Matric Level
                </a>
                {' | '}
                <a
                  href="https://ssckkr.kar.nic.in/sschallticket/sp12h_appstatus.aspx"
                  target="_blank"
                  className="text-blue-500"
                  rel="nofollow"
                >
                  SSCKKR-Higher Secondary Level
                </a>
                {' | '}
                <a
                  href="https://ssckkr.kar.nic.in/sschallticket/sp12g_appstatus.aspx"
                  target="_blank"
                  className="text-blue-500"
                  rel="nofollow"
                >
                  SSCKKR-Graduation Level
                </a>
                {' | '}
                <a
                  href="https://www.sscer.org/ac/sp2024kyr24106/KYR/kyr"
                  target="_blank"
                  className="text-blue-500"
                  rel="nofollow"
                >
                  SSCER
                </a>
                {' | '}
                <a
                  href="https://sscnr.nic.in/newlook/site/selectionpostexamxii.html"
                  target="_blank"
                  className="text-blue-500"
                  rel="nofollow"
                >
                  SSCNR
                </a>
                {' | '}
                <a
                  href="https://sscsr.gov.in/SELECTION-POSTS-PHASE-12-2024-EXAMINATION-MATRICULATION-LEVEL-APPLICATION-STATUS-GET.htm"
                  target="_blank"
                  className="text-blue-500"
                  rel="nofollow"
                >
                  SSCSR-Matriculation Level
                </a>
                {' | '}
                <a
                  href="https://sscsr.gov.in/SELECTION-POSTS-PHASE-12-2024-EXAMINATION-HSL-LEVEL-APPLICATION-STATUS-GET.htm"
                  target="_blank"
                  className="text-blue-500"
                  rel="nofollow"
                >
                  SSCSR-Higher Secondary Level
                </a>
                {' | '}
                <a
                  href="https://sscsr.gov.in/SELECTION-POSTS-PHASE-12-2024-EXAMINATION-GRADUATION-LEVEL-APPLICATION-STATUS-GET.htm"
                  target="_blank"
                  className="text-blue-500"
                  rel="nofollow"
                >
                  SSCSR-Graduation and Above Level
                </a>
                {' | '}
                <a
                  href="https://www.sscnwr.org/sel_post_2024_phase_12_0138.php"
                  target="_blank"
                  className="text-blue-500"
                  rel="nofollow"
                >
                  SSCNWR
                </a>
              </span>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 py-2">
              <span className="text-green-500 font-bold">
                Paper- I (CBE) Revised Exam Date (08-06-2024)
              </span>
            </td>
            <td className="border border-gray-300 py-2">
              <span className="text-gray-900 font-bold">
                <a
                  href="https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/20240607_Reschedule%20of%20Examinations.pdf"
                  target="_blank"
                  className="text-blue-500"
                  rel="nofollow noopener"
                >
                  Click Here
                </a>
              </span>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 py-2">
              <span className="text-green-500 font-bold">
                Corrigendum (11-05-2024)
              </span>
            </td>
            <td className="border border-gray-300 py-2">
              <span className="text-gray-900 font-bold">
                <a
                  href="https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Corrigendum.pdf"
                  target="_blank"
                  className="text-blue-500"
                  rel="nofollow"
                >
                  Click Here
                </a>
              </span>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 py-2">
              <span className="text-green-500 font-bold">
                Revised Exam Date (08-04-2024)
              </span>
            </td>
            <td className="border border-gray-300 py-2">
              <span className="text-gray-900 font-bold">
                <a
                  href="https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/schedule%20exam%2008.04.2024.pdf"
                  target="_blank"
                  className="text-blue-500"
                  rel="nofollow noopener"
                >
                  Click Here
                </a>
              </span>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 py-2">
              <span className="text-green-500 font-bold">
                Last Date Extended (19-03-2024)
              </span>
            </td>
            <td className="border border-gray-300 py-2">
              <span className="text-gray-900 font-bold">
                <a
                  href="https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_RHQ_2024.pdf"
                  target="_blank"
                  className="text-blue-500"
                  rel="nofollow"
                >
                  Click here
                </a>
              </span>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 py-2">
              <span className="text-green-500 font-bold">
                Apply Online
              </span>
            </td>
            <td className="border border-gray-300 py-2">
              <span className="text-gray-900 font-bold">
                <a
                  href="https://ssc.gov.in/login"
                  target="_blank"
                  className="text-blue-500"
                  rel="nofollow"
                >
                  Click here
                </a>
              </span>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 py-2">
              <span className="text-green-500 font-bold">
                Notification
              </span>
            </td>
            <td className="border border-gray-300 py-2">
              <span className="text-gray-900 font-bold">
                <a
                  href="https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Phase-XII_Notification_2024_26022024.pdf"
                  target="_blank"
                  className="text-blue-500"
                  rel="nofollow"
                >
                  Click here
                </a>
              </span>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 py-2">
              <span className="text-green-500 font-bold">
                Official Website
              </span>
            </td>
            <td className="border border-gray-300 py-2">
              <span className="text-gray-900 font-bold">
                <a
                  href="https://ssc.gov.in/"
                  target="_blank"
                  className="text-blue-500"
                  rel="nofollow"
                >
                  Click here
                </a>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}