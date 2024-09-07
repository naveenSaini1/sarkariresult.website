export default function MPSCRecruitment() {
  // Displays MPSC recruitment information with title, post details, brief information, application fee, important dates, and vacancy details
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">MPSC Recruitment Information</h1>

      {/* Maharashtra Civil Services Exam 2024 */}
      <h2 className="text-2xl font-bold mb-2" id="Civil-Services-2024">
        MPSC Maharashtra Civil Services 2024 New Preliminary Exam Date Announced
      </h2>
      <p className="mb-2">Post Date: 30-12-2023</p>
      <p className="mb-2">Latest Update: 23-08-2024</p>
      <p className="mb-2">Total Vacancy: <span className="text-red-500">524</span></p>
      <p className="mb-4">
        <span className="font-bold text-red-500">Brief Information:</span> Maharashtra Public Service Commission
        (MPSC) has given a Notification for Conducting of Maharashtra Gazetted Civil Services Common Preliminary
        Examination-2024. Those Candidates who are interested in the vacancy details &amp; completed all
        eligibility criteria can read the Notification &amp; Apply Online.
      </p>
      <table className="w-full table-auto mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">
              <span className="text-red-500 font-bold">Maharashtra Public Service Commission (MPSC)</span>
            </th>
          </tr>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">
              <span className="text-blue-500 font-bold">Advt No. 414/2023</span>
            </th>
          </tr>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">
              <span className="text-green-500 font-bold">Maharashtra Gazetted Civil Services Common Preliminary Examination-2024</span>
            </th>
          </tr>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">
              <span className="text-blue-500 font-bold"></span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border">
              <span className="text-red-500 font-bold">Application Fee</span>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">
              <ul className="list-disc ml-4">
                <li>For Open Category: <span className="font-bold">Rs. 544/-</span></li>
                <li>
                  For Backward Classes/Economically Weaker Sections/Orphans/Disabled: <span className="font-bold">Rs. 344/-</span>
                </li>
                <li>
                  Payment Mode: <span className="font-bold">Through Debit Card, Credit Card, Net Banking or Pay Offline through E-Challan.</span>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">
              <span className="text-red-500 font-bold">Important Dates</span>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">
              <p><strong>Reopen Dates:</strong></p>
              <ul className="list-disc ml-4">
                <li>Starting Date For Apply Online &amp; Payment of Fee: <span className="font-bold">31-05-2024 at 14:00 hrs</span></li>
                <li>Last Date For Apply Online &amp; Payment: <span className="font-bold">07-06-2024 to 23:59 hrs</span></li>
                <li>Date of taking copy of challan for Payment of Examination fee by Challan in SBI:&nbsp;<span className="font-bold">09-06-2024 up to 23:59 hrs</span></li>
                <li>Last Date For Payment of Examination fee by Currency: <span className="font-bold">10-06-2024 During bank Office hours</span></li>
                <li>Revised Date of Maharashtra Gazetted Civil Services Joint Prelims Exam-2024: <span className="text-red-500 font-bold">21-07-2024 (Postponed)</span></li>
                <li>New Date of Maharashtra Gazetted Civil Services Joint Prelims Exam-2024: <span className="text-red-500 font-bold">25-08-2024</span></li>
              </ul>
              <p><strong>Old Dates:</strong></p>
              <ul className="list-disc ml-4">
                <li>Starting Date For Apply Online &amp; Payment of Fee: <span className="font-bold">05-01-2024&nbsp;at 14:00 hrs</span></li>
                <li>Last Date For Apply Online &amp; Payment: <span className="font-bold">24-01-2024 to 23:59 hrs</span></li>
                <li>Date of taking copy of challan for Payment of Examination fee by Challan in SBI:&nbsp;<span className="font-bold">25-01-2024 up to 23:59 hrs</span></li>
                <li>Last Date For Payment of Examination fee by Currency: <span className="font-bold">28-01-2024 During bank Office hours</span></li>
                <li>Date of Maharashtra Gazetted Civil Services Joint Prelims Exam-2024:&nbsp;<span className="text-red-500 font-bold">28-04-2024 (Postponed)</span></li>
                <li>Date of State Service Main Examination-2024:&nbsp;<span className="font-bold">14 to 16-12-2024</span></li>
                <li>Date of Maharashtra Architectural Engineering Service, Main Exam-2024:&nbsp;<span className="font-bold">23-11-2024</span></li>
                <li>Date of Maharashtra Forest Service Main Exam-2024:&nbsp;<span className="font-bold">28 to 31-12-2024</span></li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">
              <span className="text-red-500 font-bold"> Age Limit (as on 01-04-2024)</span>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">
              <ul className="list-disc ml-4">
                <li>Minimum Age Limit: <span className="font-bold">18/19 Years</span></li>
                <li>Maximum Age Limit: <span className="font-bold">38 Years</span></li>
                <li>Age Relaxation is Applicable as per Rules.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">
              <span className="text-red-500 font-bold">Qualification</span>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">
              <ul className="list-disc ml-4">
                <li className={{ textAlign: 'left' }}>
                  <strong>State Services Examination:</strong> CA/ICWA, Degree or Engineering Degree, PG
                </li>
                <li className={{ textAlign: 'left' }}>
                  <strong>Civil Engineering Services Examination:</strong> Civil Engineering Degree.
                </li>
                <li className={{ textAlign: 'left' }}>
                  <strong>Maharashtra Forest Service Examination:</strong> Degree or Engineering Degree
                </li>
                <li className={{ textAlign: 'left' }}>
                  <strong>For More Information Regarding Qualification Details Refer Notification</strong>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">
              <span className="text-red-500 font-bold">Vacancy Details </span>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">
              <span className="text-blue-500 font-bold">Maharashtra Gazetted Civil Services Common Preliminary Examination-2024</span>
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="px-4 py-2 border">
              <span className="text-blue-500 font-bold">Sl. No</span>
            </td>
            <td className="px-4 py-2 border">
              <span className="text-blue-500 font-bold">Dept. Name</span>
            </td>
            <td className="px-4 py-2 border">
              <span className="text-blue-500 font-bold">Cadre</span>
            </td>
            <td className="px-4 py-2 border">
              <span className="text-blue-500 font-bold">Total</span>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">
              <span className="font-bold">1.</span>
            </td>
            <td className="px-4 py-2 border">
              <span className="font-bold">General Administration Department</span>
            </td>
            <td className="px-4 py-2 border">
              <span className="font-bold">State Services Group-A and Group-B</span>
            </td>
            <td className="px-4 py-2 border">
              <span className="font-bold">205</span>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">
              <span className="font-bold">2.</span>
            </td>
            <td className="px-4 py-2 border">
              <span className="font-bold">Department of Soil and Water Conservation</span>
            </td>
            <td className="px-4 py-2 border">
              <span className="font-bold">Maharashtra Civil Engineering Services Group-A and Group-B</span>
            </td>
            <td className="px-4 py-2 border">
              <span className="font-bold">26</span>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">
              <span className="font-bold">3.</span>
            </td>
            <td className="px-4 py-2 border">
              <span className="font-bold">Revenue and Forest Department</span>
            </td>
            <td className="px-4 py-2 border">
              <span className="font-bold">Maharashtra Forest Service, Group-A and Group-B</span>
            </td>
            <td className="px-4 py-2 border">
              <span className="font-bold">43</span>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border" colSpan={4}>
              <span className="text-blue-500 font-bold">
                Interested Candidates Can Read the Full Notification Before Apply Online
              </span>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border" colSpan={4}>
              <span className="text-red-500 font-bold">Important Links </span>
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="px-4 py-2 border" colSpan={3}>
              <span className="text-green-500 font-bold">New Preliminary Exam Date (23-08-2024)</span>
            </td>
            <td className="px-4 py-2 border">
              <a href="https://img.freejobalert.com/uploads/2024/08/New-Exam-Date-Maharashtra-Gazetted-Civil-Services-Exam.pdf" className="text-blue-500 font-bold" rel="nofollow">
                Click Here
              </a>
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="px-4 py-2 border" colSpan={3}>
              <span className="text-green-500 font-bold">Demand Letter Notice (21-08-2024)</span>
            </td>
            <td className="px-4 py-2 border">
              <a href="https://img.freejobalert.com/uploads/2024/08/Demand-Letter-Notice-MPSC-Maharashtra-Gazetted-Civil-Services-Common-Preliminary-Exam-2024.pdf" className="text-blue-500 font-bold" rel="nofollow">
                Click Here
              </a>
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="px-4 py-2 border" colSpan={3}>
              <span className="text-green-500 font-bold">Preliminary Exam Admit Card (12-07-2024)</span>
            </td>
            <td className="px-4 py-2 border">
              <a href="https://mpsconline.gov.in/candidate" className="text-blue-500 font-bold" rel="nofollow">
                Click Here
              </a>
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="px-4 py-2 border" colSpan={3}>
              <span className="text-green-500 font-bold">Preliminary Exam Date Notice (11-07-2024)</span>
            </td>
            <td className="px-4 py-2 border">
              <a href="https://img.freejobalert.com/uploads/2024/07/Preliminary-Exam-Date-Notice-Maharashtra-Gazetted-Civil-Services-Common-Preliminary-Examination-2024.pdf" className="text-blue-500 font-bold" rel="nofollow">
                Click Here
              </a>
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="px-4 py-2 border" colSpan={3}>
              <span className="text-green-500 font-bold">Apply Online (01-06-2024)</span>
            </td>
            <td className="px-4 py-2 border">
              <a href="https://mpsconline.gov.in/candidate" className="text-blue-500 font-bold" rel="nofollow">
                Click Here
              </a>
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="px-4 py-2 border" colSpan={3}>
              <span className="text-green-500 font-bold">Reopen Dates (01-06-2024)</span>
            </td>
            <td className="px-4 py-2 border">
              <a href="https://mpsc.gov.in/downloadFile/english/8930" className="text-blue-500 font-bold" rel="nofollow">
                Click Here
              </a>
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="px-4 py-2 border" colSpan={3}>
              <span className="text-green-500 font-bold">Reopen Dates (13-05-2024)</span>
            </td>
            <td className="px-4 py-2 border">
              <a href="https://mpsc.gov.in/downloadFile/english/8887" className="text-blue-500 font-bold" rel="nofollow">
                Click Here
              </a>
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="px-4 py-2 border" colSpan={3}>
              <span className="text-green-500 font-bold">Prelims Exam Date Postponed (25-03-2024)</span>
            </td>
            <td className="px-4 py-2 border">
              <a href="https://mpsc.gov.in/downloadFile/english/8769" className="text-blue-500 font-bold" rel="nofollow">
                Click Here
              </a>
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="px-4 py-2 border" colSpan={3}>
              <span className="text-green-500 font-bold">Apply Online (05-01-2024)</span>
            </td>
            <td className="px-4 py-2 border">
              <a href="https://mpsconline.gov.in/candidate" className="text-blue-500 font-bold" rel="nofollow">
                Click Here
              </a>
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="px-4 py-2 border" colSpan={3}>
              <span className="text-green-500 font-bold">Notification </span>
            </td>
            <td className="px-4 py-2 border">
              <a href="https://mpsc.gov.in/downloadFile/english/8123" className="text-blue-500 font-bold" rel="nofollow">
                Click Here
              </a>
            </td>
          </tr>
          <tr className="bg-gray-100">
            <td className="px-4 py-2 border" colSpan={3}>
              <span className="text-green-500 font-bold">Official Website</span>
            </td>
            <td className="px-4 py-2 border">
              <a href="https://mpsc.gov.in/" className="text-blue-500 font-bold" rel="nofollow">
                Click Here
              </a>
            </td>
          </tr>
        </tbody>
      </table>

      {/* MPSC Professor 2023 */}
      <h2 className="text-2xl font-bold mb-2" id="Professor">
        MPSC Professor 2023 Interview Result Released
      </h2>
      <p className="mb-2">Post Date: 20-12-2023</p>
      <p className="mb-2">Latest Update: 17-05-2024</p>
      <p className="mb-2">Total Vacancy: 71</p>
      <p className="mb-4">
        <span className="font-bold text-red-500">Brief Information:</span> Maharashtra Public Service Commission
        (MPSC) has given a notification recruitment of Professor Vacancy. Those Candidates who are interested in the
        vacancy details &amp; completed all eligibility criteria can read the Notification &amp; Apply Online.
      </p>
      <table className="w-full table-auto mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">
              <span className="text-red-500 font-bold">Maharashtra Public Service Commission (MPSC)</span>
            </th>
          </tr>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">
              <span className="text-blue-500 font-bold">Advt No. 332 to 394/2023</span>
            </th>
          </tr>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">
              <span className="text-green-500 font-bold">Associate Professor Vacancy 2023</span>
            </th>
          </tr>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">
              <span className="text-blue-500 font-bold"></span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border" colSpan={3}>
              <span className="text-red-500 font-bold">Application Fee</span>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border" colSpan={3}>
              <ul className="list-disc ml-4">
                <li>For Open Category: <span className="font-bold">Rs. 719/-</span></li>
                <li>
                  For Backward Classes/Economically Weaker Sections/Orphans/Disabled: <span className="font-bold">Rs. 449/-</span>
                </li>
                <li>
                  Payment Mode: <span className="font-bold">Through Debit Card, Credit Card, Net Banking or Pay Offline through E-Challan.</span>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}