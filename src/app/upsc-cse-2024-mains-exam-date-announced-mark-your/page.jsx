export default function RecruitmentInformation() {
  // This component displays recruitment information for UPSC CSE 2024, including post details, application fee, important dates, and vacancy details. 
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">UPSC CSE 2024 Mains Exam Date Announced</h1>

      <div className="mb-4">
        <p className="text-green-500 font-bold">Name of the Post:</p>
        <p>UPSC CSE 2024 Mains Exam Date Announced</p>
      </div>

      <div className="mb-4">
        <p className="text-green-500 font-bold">Post Date:</p>
        <p>14-02-2024</p>
      </div>

      <div className="mb-4">
        <p className="text-green-500 font-bold">Latest Update:</p>
        <p>09-08-2024</p>
      </div>

      <div className="mb-4">
        <p className="text-green-500 font-bold">Total Vacancy:</p>
        <p>1056 (approximately)</p>
      </div>

      <p className="text-red-500 font-bold mb-4">Brief Information:</p>
      <p>Union Public Service Commission (UPSC) has given a notification for the recruitment of Civil Services Exam 2024. Those Candidates who are Interested to the following vacancy and completed all Eligibility Criteria can read the notification & apply online.</p>

      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Union Public Service Commission (UPSC)</h2>
        <p className="text-purple-500 font-bold mb-2">Advt No. 05/2024-CSP</p>
        <p className="text-green-500 font-bold mb-2">Civil Services Exam 2024</p>
        <p className="mb-2"><a href="https://www.freejobalert.com" target="_blank" rel="noopener" className="text-blue-500 underline"></a></p>
      </div>

      <div className="mb-4">
        <h3 className="text-red-500 font-bold mb-2">Application Fee</h3>
        <ul className="list-disc ml-4">
          <li>For all Other Candidates: <strong>Rs. 100/-</strong></li>
          <li>for SC/ ST/ Female & PwBD: <strong>Nil</strong></li>
          <li>Payment Mode: <strong>Through Net Banking facility of any bank or by using Visa/Master/RuPay/Credit/Debit Card/UPI Payment.</strong></li>
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="text-red-500 font-bold mb-2">Important Dates</h3>
        <div className="mb-2">
          <p className="font-bold">Mains (DAF-I) Dates:</p>
          <ul className="list-disc ml-4">
            <li>Starting Date to Apply Online: <strong>03-07-2024</strong></li>
            <li>Last Date to Apply Online: <strong>12-07-2024 Till 06:00 PM</strong></li>
            <li>Date of Mains Exam: <strong>20,21,22-09-2024 & 28, 29-09-2024</strong></li>
          </ul>
        </div>
        <div>
          <p className="font-bold">Prelims Dates:</p>
          <ul className="list-disc ml-4">
            <li>Date of Notification: <strong>14-02-2024</strong></li>
            <li>Last Date to Apply Online: <strong>06-03-2024 up to 06:00 PM</strong></li>
            <li>Date for Correction Window: <strong>07-03-2024 to 13-03-2024</strong></li>
            <li>Re-Scheduled Preliminary Exam Date: <strong>16-06-2024</strong></li>
          </ul>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-red-500 font-bold mb-2">Age Limit (as on 01-08-2024)</h3>
        <ul className="list-disc ml-4">
          <li>Minimum Age: <strong>21 Years</strong></li>
          <li>Maximum Age: <strong>32 Years</strong></li>
          <li>i.e., the candidate must have been born not earlier than 2nd August, 1992 and not later than 1st August, 2003.</li>
          <li>Age relaxation is applicable as per rules.</li>
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="text-red-500 font-bold mb-2">Qualification</h3>
        <ul className="list-disc ml-4">
          <li>Candidates should posses Any Degree from a recognized University.</li>
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="text-red-500 font-bold mb-2">Vacancy Details</h3>
        <table className="table-auto w-full text-center">
          <thead>
            <tr>
              <th className="border px-4 py-2 text-purple-500 font-bold">Post Name</th>
              <th className="border px-4 py-2 text-purple-500 font-bold">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Civil Services Exam 2024</td>
              <td className="border px-4 py-2">1056</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-blue-500 font-bold mb-4">Interested Candidates Can Read the Full Notification Before Apply Online.</p>

      <div className="mb-4">
        <h3 className="text-red-500 font-bold mb-2">Important Links</h3>
        <table className="table-auto w-full text-center">
          <thead>
            <tr>
              <th className="border px-4 py-2 text-green-500 font-bold">Link</th>
              <th className="border px-4 py-2 text-green-500 font-bold">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2"><a href="https://img.freejobalert.com/uploads/2024/08/Mains-Exam-Date-UPSC-CSE-2024.pdf" target="_blank" rel="nofollow" className="text-blue-500 underline">Click Here</a></td>
              <td className="border px-4 py-2">Mains Exam Date (09-08-2024)</td>
            </tr>
            <tr>
              <td className="border px-4 py-2"><a href="https://img.freejobalert.com/uploads/2024/07/Preliminary-Exam-Result-UPSC-CSE-2024.pdf" target="_blank" rel="nofollow" className="text-blue-500 underline">Click Here</a></td>
              <td className="border px-4 py-2">Preliminary Exam Result (Name Wise) (19-07-2024)</td>
            </tr>
            <tr>
              <td className="border px-4 py-2"><a href="https://upsconline.nic.in/upsc/OTRP/" target="_blank" rel="nofollow" className="text-blue-500 underline">Click Here</a></td>
              <td className="border px-4 py-2">Mains (DAF-I) Apply Online (04-07-2024)</td>
            </tr>
            <tr>
              <td className="border px-4 py-2"><a href="https://img.freejobalert.com/uploads/2024/07/Mains-DAF-I-Notification-UPSC-Civil-Services-Exam-2024.pdf" target="_blank" rel="nofollow" className="text-blue-500 underline">Click Here</a></td>
              <td className="border px-4 py-2">Mains (DAF-I) Notification (04-07-2024)</td>
            </tr>
            <tr>
              <td className="border px-4 py-2"><a href="https://img.freejobalert.com/uploads/2024/07/Preliminary-Exam-Result-UPSC-Civil-Services-Exam-2024.pdf" target="_blank" rel="nofollow" className="text-blue-500 underline">Click Here</a></td>
              <td className="border px-4 py-2">Preliminary Exam Result (01-07-2024)</td>
            </tr>
            <tr>
              <td className="border px-4 py-2"><a href="https://upsc.gov.in/sites/default/files/PressNote-CSP-24-engli-070624.pdf" target="_blank" rel="nofollow noopener" className="text-blue-500 underline">Click Here</a></td>
              <td className="border px-4 py-2">Detail Exam Notice (08-06-2024)</td>
            </tr>
            <tr>
              <td className="border px-4 py-2"><a href="https://upsconline.nic.in/eadmitcard/admitcard_csp_2024/admit_card.php#hhh1" target="_blank" rel="nofollow" className="text-blue-500 underline">Link 1</a> | <a href="https://upsconline.nic.in/eadmitcard/admitcard_csp_2024/" target="_blank" rel="nofollow" className="text-blue-500 underline">Link 2</a></td>
              <td className="border px-4 py-2">Preliminary Exam Admit Card (07-06-2024)</td>
            </tr>
            <tr>
              <td className="border px-4 py-2"><a href="https://upsc.gov.in/sites/default/files/FictFee-CSP-24-English-080424.pdf" target="_blank" rel="nofollow noopener" className="text-blue-500 underline">Click Here</a></td>
              <td className="border px-4 py-2">Fictitious Fee Notice (13-04-2024)</td>
            </tr>
            <tr>
              <td className="border px-4 py-2"><a href="https://upsc.gov.in/content/re-scheduling-csp-ifosp-examination-2024" target="_blank" rel="nofollow" className="text-blue-500 underline">Click Here</a></td>
              <td className="border px-4 py-2">Re-Scheduled Preliminary Exam Date (20-03-2024)</td>
            </tr>
            <tr>
              <td className="border px-4 py-2"><a href="https://upsconline.nic.in/upsc/OTRP/index.php" target="_blank" rel="nofollow" className="text-blue-500 underline">Link</a> | <a href="https://upsc.gov.in/content/correction-window-cs-p-ifos-p-exam-2024" target="_blank" rel="nofollow" className="text-blue-500 underline">Notice</a></td>
              <td className="border px-4 py-2">Correction Window Dates (09-03-2024)</td>
            </tr>
            <tr>
              <td className="border px-4 py-2"><a href="https://upsc.gov.in/content/last-date-submission-csp-ifosp-2024-has-been-extended-till-06-03-2024-0600-pm-0" target="_blank" rel="nofollow" className="text-blue-500 underline">Click Here</a></td>
              <td className="border px-4 py-2">Last Date Extended (06-03-2024)</td>
            </tr>
            <tr>
              <td className="border px-4 py-2"><a href="https://upsconline.nic.in/upsc/OTRP/index.php" target="_blank" rel="nofollow" className="text-blue-500 underline">Click Here</a></td>
              <td className="border px-4 py-2">Apply Online</td>
            </tr>
            <tr>
              <td className="border px-4 py-2"><a href="https://upsc.gov.in/sites/default/files/Notif-CSP-24-engl-140224.pdf" target="_blank" rel="nofollow" className="text-blue-500 underline">Click Here</a></td>
              <td className="border px-4 py-2">Notification</td>
            </tr>
            <tr>
              <td className="border px-4 py-2"><a href="https://upsc.gov.in/" target="_blank" rel="nofollow" className="text-blue-500 underline">Click Here</a></td>
              <td className="border px-4 py-2">Official Website</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}