export default function RecruitmentInfo() {
  // This component displays recruitment information for the UPSC Civil Services 2023, including post details, application fee, important dates, vacancy details, and relevant links.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">UPSC Civil Services 2023 Marks Released</h1>
      <div className="mb-4">
        <p className="text-green-500 font-bold">Name of the Post:</p>
        <p>UPSC Civil Services 2023 Marks Released</p>
      </div>
      <div className="mb-4">
        <p className="text-green-500 font-bold">Post Date:</p>
        <p>01-02-2023</p>
      </div>
      <div className="mb-4">
        <p className="text-green-500 font-bold">Latest Update:</p>
        <p>09-11-2024</p>
      </div>
      <div className="mb-4">
        <p className="text-green-500 font-bold">Total Vacancy:</p>
        <p>1105 (approximately)</p>
      </div>
      <p className="mb-4">
        <span className="text-red-500 font-bold">Brief Information:</span> Union Public Service Commission (UPSC) has given a notification for the recruitment of Civil Service (Prelims) Exam 2023. 
        Those Candidates who are Interested to the following vacancy and completed all Eligibility Criteria can read the notification & apply online.
      </p>
      <p className="mb-4">
        <span className="text-red-500 font-bold">Key Highlights:</span>
        <ul className="list-disc ml-6">
          <li>The Union Public Service Commission (UPSC) has released the marks for the Civil Service (Prelims) Exam 2023.</li>
          <li>The exam was conducted on May 28th, 2023.</li>
          <li>The final results and interview schedule have been released, along with the cut-off marks and reserve lists.</li>
        </ul>
      </p>
      <div className="mb-4">
        <p className="text-red-500 font-bold">Application Fee:</p>
        <ul className="list-disc ml-6">
          <li>General: Rs. 100/-</li>
          <li>SC/ ST/ Female & PwBD: Nil</li>
          <li>Payment Mode: Through Net Banking facility of any bank or by using Visa/Master/RuPay/Credit/Debit Card/UPI Payment</li>
        </ul>
      </div>
      <div className="mb-4">
        <p className="text-red-500 font-bold">Important Dates:</p>
        <ul className="list-disc ml-6">
          <li>Publication of Notification: 01-02-2023</li>
          <li>Last Date to Apply Online: 21-02-2023 up to 06:00 PM</li>
          <li>Date for Correction Window: 22 to 28-02-2023</li>
          <li>Date for Prelims Exam: 28-05-2023</li>
          <li>Starting Date to Apply Online (Mains DAF): 10-07-2023</li>
          <li>Last Date to Apply Online (Mains DAF): 19-07-2023 up to 06:00 PM</li>
          <li>Mains Exam Date: 15 to 17, 24 & 24-09-2023</li>
          <li>Date of Phase I Interview: 02-01-2024 to 16-02-2024</li>
          <li>Date of Phase II Interview: 19-02-2024 to 15-03-2024</li>
          <li>Date of Phase III Interview: 18-03-2024 to 09-04-2024</li>
        </ul>
      </div>
      <div className="mb-4">
        <p className="text-red-500 font-bold">Age Limit (as on 01-08-2023):</p>
        <ul className="list-disc ml-6">
          <li>Minimum Age: 21 Years</li>
          <li>Maximum Age: 32 Years</li>
          <li>i.e., the candidate must have been born not earlier than 2nd August, 1991 and not later than 1st August, 2002.</li>
          <li>Age relaxation is applicable as per rules.</li>
        </ul>
      </div>
      <div className="mb-4">
        <p className="text-red-500 font-bold">Qualification:</p>
        <ul className="list-disc ml-6">
          <li>Candidates should possess a Graduate Degree from a recognized University.</li>
        </ul>
      </div>
      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>
      <table className="table-auto w-full text-center text-gray-500 border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2 font-bold text-gray-700">Post Name</th>
            <th className="border border-gray-300 p-2 font-bold text-gray-700">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2">Civil Service (Mains) Exam 2023</td>
            <td className="border border-gray-300 p-2">1105</td>
          </tr>
        </tbody>
      </table>
      <p className="mt-4">Interested Candidates Can Read the Full Notification Before Apply Online.</p>
      <h2 className="text-2xl font-bold mb-4">Important Links</h2>
      <table className="table-auto w-full text-center text-gray-500 border border-gray-300">
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2 text-green-500 font-bold">Marks for non-recommended willing candidates (09-11-2024)</td>
            <td className="border border-gray-300 p-2"><a href="https://img.freejobalert.com/uploads/2024/11/Marks-for-non-recommended-willing-candidates-UPSC-Civil-Service-2023.pdf" target="_blank" rel="noopener" className="text-blue-500 hover:underline">Click Here</a></td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 text-green-500 font-bold">Reserve List (26-10-2024)</td>
            <td className="border border-gray-300 p-2"><a href="https://img.freejobalert.com/uploads/2024/10/Reserve-List-UPSC-Civil-Services-Mains-Exam-2023.pdf" target="_blank" rel="noopener" className="text-blue-500 hover:underline">Click Here</a></td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 text-green-500 font-bold">Cut Off Marks (17-09-2024)</td>
            <td className="border border-gray-300 p-2"><a href="https://img.freejobalert.com/uploads/2024/09/Cut-Off-Marks-UPSC-Civil-Services-2023.pdf" target="_blank" rel="noopener" className="text-blue-500 hover:underline">Click Here</a></td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 text-green-500 font-bold">Marks (20-04-2024)</td>
            <td className="border border-gray-300 p-2"><a href="https://upsc.gov.in/sites/default/files/CSM2023_Mks_RecomCandi_Eng_19042024.pdf" target="_blank" rel="noopener" className="text-blue-500 hover:underline">Click Here</a></td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 text-green-500 font-bold">Final Result (16-04-2024)</td>
            <td className="border border-gray-300 p-2"><a href="https://upsc.gov.in/sites/default/files/FR-CSM-23-engl-160424.pdf" target="_blank" rel="noopener" className="text-blue-500 hover:underline">Click Here</a></td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 text-green-500 font-bold">Phase III Interview Schedule (22-02-2024)</td>
            <td className="border border-gray-300 p-2"><a href="https://upsc.gov.in/sites/default/files/Intv-Phase-III-CSME-23-engl-160224R.pdf" target="_blank" rel="noopener" className="text-blue-500 hover:underline">Click Here</a></td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 text-green-500 font-bold">Phase II Interview Schedule (27-01-2024)</td>
            <td className="border border-gray-300 p-2"><a href="https://upsc.gov.in/sites/default/files/IntvSch-Phase-II-CSM-23-engl-250124.pdf" target="_blank" rel="noopener" className="text-blue-500 hover:underline">Click Here</a></td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 text-green-500 font-bold">Phase I Interview Schedule (20-12-2023)</td>
            <td className="border border-gray-300 p-2"><a href="https://upsc.gov.in/sites/default/files/CSM-2023_Intv_Phase1_Eng_19122023.pdf" target="_blank" rel="noopener" className="text-blue-500 hover:underline">Click Here</a></td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 text-green-500 font-bold">Mains Result (09-12-2023)</td>
            <td className="border border-gray-300 p-2"><a href="https://upsc.gov.in/sites/default/files/WR-CSM-23-engl-NameList-081223.pdf" target="_blank" rel="noopener" className="text-blue-500 hover:underline">Click Here</a></td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 text-green-500 font-bold">Mains Admit Card (01-09-2023)</td>
            <td className="border border-gray-300 p-2"><a href="https://upsconline.nic.in/eadmitcard/admitcard_csm_2023/" target="_blank" rel="noopener" className="text-blue-500 hover:underline">Click Here</a></td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 text-green-500 font-bold">Mains Exam Schedule (02-08-2023)</td>
            <td className="border border-gray-300 p-2"><a href="https://upsc.gov.in/sites/default/files/CSM2023_TT_Eng_31072023.pdf" target="_blank" rel="noopener" className="text-blue-500 hover:underline">Click Here</a></td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 text-green-500 font-bold">Mains DAF Apply Online</td>
            <td className="border border-gray-300 p-2"><a href="https://upsconline.nic.in/upsc/OTRP/" target="_blank" rel="noopener" className="text-blue-500 hover:underline">Click Here</a></td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 text-green-500 font-bold">Mains DAF Notification</td>
            <td className="border border-gray-300 p-2"><a href="https://upsc.gov.in/sites/default/files/Notice-CSM-23-DAF-I-engl-100723.pdf" target="_blank" rel="noopener" className="text-blue-500 hover:underline">Click Here</a></td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 text-green-500 font-bold">Prelims Result (12-06-2023)</td>
            <td className="border border-gray-300 p-2">
              <a href="https://upsc.gov.in/CSP_2023_WRWN_En_120623.pdf" target="_blank" rel="noopener" className="text-blue-500 hover:underline">Name Wise</a> | 
              <a href="https://upsc.gov.in/CSP2023_WR_Eng_12062023.pdf" target="_blank" rel="noopener" className="text-blue-500 hover:underline">Roll Number Wise</a>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 text-green-500 font-bold">Exam Date Notice (17-05-2023)</td>
            <td className="border border-gray-300 p-2"><a href="https://img.freejobalert.com/uploads/2023/05/Exam-Date-Notice-UPSC-Civil-Service-Exam-Posts.pdf" target="_blank" rel="noopener" className="text-blue-500 hover:underline">Click Here</a></td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 text-green-500 font-bold">Prelims Admit Card (08-05-2023)</td>
            <td className="border border-gray-300 p-2"><a href="https://upsconline.nic.in/eadmitcard/admitcard_csp_2023/instructions.php" target="_blank" rel="noopener" className="text-blue-500 hover:underline">Click Here</a></td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 text-green-500 font-bold">Apply Online</td>
            <td className="border border-gray-300 p-2"><a href="https://upsconline.nic.in/upsc/OTRP/index.php" target="_blank" rel="noopener" className="text-blue-500 hover:underline">Click Here</a></td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 text-green-500 font-bold">Notification</td>
            <td className="border border-gray-300 p-2"><a href="https://img.freejobalert.com/uploads/2023/02/Notification-UPSC-Civil-Services-Prelims-Exam-2023.pdf" target="_blank" rel="noopener" className="text-blue-500 hover:underline">Click here</a></td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 text-green-500 font-bold">Official Website</td>
            <td className="border border-gray-300 p-2"><a href="https://upsc.gov.in/" target="_blank" rel="noopener" className="text-blue-500 hover:underline">Click here</a></td>
          </tr>
        </tbody>
      </table>
      <p className="mt-4">
        <span className="text-red-500 font-bold">Keywords:</span> UPSC, Civil Services, Recruitment, Exam, 2023, Marks, Result, Cut Off, Interview, Schedule, Notification, Apply Online, Important Dates, Vacancy Details, Age Limit, Qualification.
      </p>
    </div>
  );
}