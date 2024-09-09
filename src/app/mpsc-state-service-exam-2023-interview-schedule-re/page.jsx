export default function RecruitmentInfo() {
  // Displays recruitment information from MPSC, including title, post details, brief information, application fee, important dates, and vacancy details.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">MPSC Recruitment Information</h1>

      {/* MPSC Maharashtra Civil Services 2024 */}
      <h2 className="text-2xl font-bold mb-2" id="Civil-Services-2024">MPSC Maharashtra Civil Services 2024 - New Preliminary Exam Date Announced</h2>
      <p className="mb-4"><strong>Post Date:</strong> 30-12-2023</p>
      <p className="mb-4"><strong>Latest Update:</strong> 23-08-2024</p>
      <p className="mb-4"><strong>Total Vacancy: </strong><span className="text-red-500">524</span></p>
      <p className="mb-4"><strong>Brief Information:</strong> Maharashtra Public Service Commission (MPSC) has given a Notification for Conducting of Maharashtra Gazetted Civil Services Common Preliminary Examination-2024. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply Online.</p>
      <div className="mb-4">
        <table className="w-full border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-200 text-gray-800">
              <th colSpan="5" className="text-center py-2">
                <p className="text-red-500 font-bold">Maharashtra Public Service Commission (MPSC)</p>
                <p className="text-pink-500 font-bold">Advt No. 414/2023</p>
                <p className="text-green-500 font-bold">Maharashtra Gazetted Civil Services Common Preliminary Examination-2024</p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-gray-800">
              <th colSpan="5" className="text-center py-2 font-bold text-red-500">Application Fee</th>
            </tr>
            <tr>
              <td colSpan="5" className="px-4 py-2">
                <ul>
                  <li>For Open Category: <strong>Rs. 544/-</strong></li>
                  <li>For Backward Classes/Economically Weaker Sections/Orphans/Disabled: <strong>Rs. 344/-</strong></li>
                  <li>Payment Mode: <strong>Through Debit Card, Credit Card, Net Banking or Pay Offline through E-Challan.</strong></li>
                </ul>
              </td>
            </tr>
            <tr className="text-gray-800">
              <th colSpan="5" className="text-center py-2 font-bold text-red-500">Important Dates</th>
            </tr>
            <tr className="text-gray-800">
              <td colSpan="5" className="px-4 py-2">
                <p className="font-bold">Reopen Dates:</p>
                <ul>
                  <li>Starting Date For Apply Online &amp; Payment of Fee: <strong>31-05-2024 at 14:00 hrs</strong></li>
                  <li>Last Date For Apply Online &amp; Payment: <strong>07-06-2024 to 23:59 hrs</strong></li>
                  <li>Date of taking copy of challan for Payment of Examination fee by Challan in SBI: <strong>09-06-2024 up to 23:59 hrs</strong></li>
                  <li>Last Date For Payment of Examination fee by Currency: <strong>10-06-2024 During bank Office hours</strong></li>
                  <li>Revised Date of Maharashtra Gazetted Civil Services Joint Prelims Exam-2024: <span className="text-red-500"><strong>21-07-2024 (Postponed)</strong></span></li>
                  <li>New Date of Maharashtra Gazetted Civil Services Joint Prelims Exam-2024: <span className="text-red-500"><strong>25-08-2024</strong></span></li>
                </ul>
                <p className="font-bold">Old Dates:</p>
                <ul>
                  <li>Starting Date For Apply Online &amp; Payment of Fee: <strong>05-01-2024&nbsp;at 14:00 hrs</strong></li>
                  <li>Last Date For Apply Online &amp; Payment: <strong>24-01-2024 to 23:59 hrs</strong></li>
                  <li>Date of taking copy of challan for Payment of Examination fee by Challan in SBI: <strong>25-01-2024 up to 23:59 hrs</strong></li>
                  <li>Last Date For Payment of Examination fee by Currency: <strong>28-01-2024 During bank Office hours</strong></li>
                  <li>Date of Maharashtra Gazetted Civil Services Joint Prelims Exam-2024: <strong>28-04-2024 <span className="text-red-500">(Postponed)</span></strong></li>
                  <li>Date of State Service Main Examination-2024: <strong>14 to 16-12-2024</strong></li>
                  <li>Date of Maharashtra Architectural Engineering Service, Main Exam-2024: <strong>23-11-2024</strong></li>
                  <li>Date of Maharashtra Forest Service Main Exam-2024: <strong>28 to 31-12-2024</strong></li>
                </ul>
              </td>
            </tr>
            <tr className="text-gray-800">
              <th colSpan="5" className="text-center py-2 font-bold text-red-500">Age Limit (as on 01-04-2024)</th>
            </tr>
            <tr>
              <td colSpan="5" className="px-4 py-2">
                <ul>
                  <li>Minimum Age Limit: <strong>18/19 Years</strong></li>
                  <li>Maximum Age Limit: <strong>38 Years</strong></li>
                  <li>Age Relaxation is Applicable as per Rules.</li>
                </ul>
              </td>
            </tr>
            <tr className="text-gray-800">
              <th colSpan="5" className="text-center py-2 font-bold text-red-500">Qualification</th>
            </tr>
            <tr>
              <td colSpan="5" className="px-4 py-2">
                <ul>
                  <li>State Services Examination: CA/ICWA, Degree or Engineering Degree, PG</li>
                  <li>Civil Engineering Services Examination: Civil Engineering Degree.</li>
                  <li>Maharashtra Forest Service Examination: Degree or Engineering Degree</li>
                  <li>For More Information Regarding Qualification Details Refer Notification</li>
                </ul>
              </td>
            </tr>
            <tr className="text-gray-800">
              <th colSpan="5" className="text-center py-2 font-bold text-red-500">Vacancy Details</th>
            </tr>
            <tr className="text-gray-800">
              <th colSpan="5" className="text-center py-2 font-bold">Maharashtra Gazetted Civil Services Common Preliminary Examination-2024</th>
            </tr>
            <tr className="bg-gray-200 text-gray-800">
              <th className="text-center py-2 font-bold text-blue-500">Sl. No</th>
              <th colSpan="2" className="text-center py-2 font-bold text-blue-500">Dept. Name</th>
              <th className="text-center py-2 font-bold text-blue-500">Cadre</th>
              <th className="text-center py-2 font-bold text-blue-500">Total</th>
            </tr>
            <tr className="text-gray-800">
              <td className="text-center py-2">1.</td>
              <td colSpan="2" className="text-center py-2">General Administration Department</td>
              <td className="text-center py-2">State Services Group-A and Group-B</td>
              <td className="text-center py-2">205</td>
            </tr>
            <tr className="text-gray-800">
              <td className="text-center py-2">2.</td>
              <td colSpan="2" className="text-center py-2">Department of Soil and Water Conservation</td>
              <td className="text-center py-2">Maharashtra Civil Engineering Services Group-A and Group-B</td>
              <td className="text-center py-2">26</td>
            </tr>
            <tr className="text-gray-800">
              <td className="text-center py-2">3.</td>
              <td colSpan="2" className="text-center py-2">Revenue and Forest Department</td>
              <td className="text-center py-2">Maharashtra Forest Service, Group-A and Group-B</td>
              <td className="text-center py-2">43</td>
            </tr>
            <tr className="text-gray-800">
              <td colSpan="5" className="text-center py-2 font-bold text-blue-500">Interested Candidates Can Read the Full Notification Before Apply Online</td>
            </tr>
            <tr className="text-gray-800">
              <td colSpan="5" className="text-center py-2 font-bold text-red-500">Important Links </td>
            </tr>
            <tr>
              <td colSpan="3" className="text-center py-2 font-bold text-green-500">New Preliminary Exam Date (23-08-2024)</td>
              <td colSpan="2" className="text-center py-2"><a href="https://img.freejobalert.com/uploads/2024/08/New-Exam-Date-Maharashtra-Gazetted-Civil-Services-Exam.pdf" target="_blank" rel="nofollow" className="text-blue-500 font-bold">Click Here</a></td>
            </tr>
            <tr>
              <td colSpan="3" className="text-center py-2 font-bold text-green-500">Demand Letter Notice (21-08-2024)</td>
              <td colSpan="2" className="text-center py-2"><a href="https://img.freejobalert.com/uploads/2024/08/Demand-Letter-Notice-MPSC-Maharashtra-Gazetted-Civil-Services-Common-Preliminary-Exam-2024.pdf" target="_blank" rel="nofollow" className="text-blue-500 font-bold">Click Here</a></td>
            </tr>
            <tr>
              <td colSpan="3" className="text-center py-2 font-bold text-green-500">Preliminary Exam Admit Card (12-07-2024)</td>
              <td colSpan="2" className="text-center py-2"><a href="https://mpsconline.gov.in/candidate" target="_blank" rel="nofollow" className="text-blue-500 font-bold">Click Here</a></td>
            </tr>
            <tr>
              <td colSpan="3" className="text-center py-2 font-bold text-green-500">Preliminary Exam Date Notice (11-07-2024)</td>
              <td colSpan="2" className="text-center py-2"><a href="https://img.freejobalert.com/uploads/2024/07/Preliminary-Exam-Date-Notice-Maharashtra-Gazetted-Civil-Services-Common-Preliminary-Examination-2024.pdf" target="_blank" rel="nofollow" className="text-blue-500 font-bold">Click Here</a></td>
            </tr>
            <tr>
              <td colSpan="3" className="text-center py-2 font-bold text-green-500">Apply Online (01-06-2024)</td>
              <td colSpan="2" className="text-center py-2"><a href="https://mpsconline.gov.in/candidate" target="_blank" rel="nofollow" className="text-blue-500 font-bold">Click Here</a></td>
            </tr>
            <tr>
              <td colSpan="3" className="text-center py-2 font-bold text-green-500">Reopen Dates (01-06-2024)</td>
              <td colSpan="2" className="text-center py-2"><a href="https://mpsc.gov.in/downloadFile/english/8930" target="_blank" rel="nofollow" className="text-blue-500 font-bold">Click Here</a></td>
            </tr>
            <tr>
              <td colSpan="3" className="text-center py-2 font-bold text-green-500">Reopen Dates (13-05-2024)</td>
              <td colSpan="2" className="text-center py-2"><a href="https://mpsc.gov.in/downloadFile/english/8887" target="_blank" rel="nofollow" className="text-blue-500 font-bold">Click Here</a></td>
            </tr>
            <tr>
              <td colSpan="3" className="text-center py-2 font-bold text-green-500">Prelims Exam Date Postponed (25-03-2024)</td>
              <td colSpan="2" className="text-center py-2"><a href="https://mpsc.gov.in/downloadFile/english/8769" target="_blank" rel="nofollow" className="text-blue-500 font-bold">Click Here</a></td>
            </tr>
            <tr>
              <td colSpan="3" className="text-center py-2 font-bold text-green-500">Apply Online (05-01-2024)</td>
              <td colSpan="2" className="text-center py-2"><a href="https://mpsconline.gov.in/candidate" target="_blank" rel="nofollow" className="text-blue-500 font-bold">Click Here</a></td>
            </tr>
            <tr>
              <td colSpan="3" className="text-center py-2 font-bold text-green-500">Notification </td>
              <td colSpan="2" className="text-center py-2"><a href="https://mpsc.gov.in/downloadFile/english/8123" target="_blank" rel="nofollow" className="text-blue-500 font-bold">Click Here</a></td>
            </tr>
            <tr>
              <td colSpan="3" className="text-center py-2 font-bold text-green-500">Official Website</td>
              <td colSpan="2" className="text-center py-2"><a href="https://mpsc.gov.in/" target="_blank" rel="nofollow" className="text-blue-500 font-bold">Click Here</a></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* MPSC Professor 2023 */}
      <h2 className="text-2xl font-bold mb-2" id="Professor">MPSC Professor 2023 Interview Result Released</h2>
      <p className="mb-4"><strong>Post Date:</strong> 20-12-2023</p>
      <p className="mb-4"><strong>Latest Update:</strong> 17-05-2024</p>
      <p className="mb-4"><strong>Total Vacancy:</strong> 71</p>
      <p className="mb-4"><strong>Brief Information:</strong> Maharashtra Public Service Commission (MPSC) has given a notification recruitment of Professor Vacancy. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply Online.</p>
      <div className="mb-4">
        <table className="w-full border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-200 text-gray-800">
              <th colSpan="3" className="text-center py-2">
                <p className="text-red-500 font-bold">Maharashtra Public Service Commission (MPSC)</p>
                <p className="text-pink-500 font-bold">Advt No. 332 to 394/2023</p>
                <p className="text-green-500 font-bold">Associate Professor Vacancy 2023</p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-gray-800">
              <th colSpan="3" className="text-center py-2 font-bold text-red-500">Application Fee</th>
            </tr>
            <tr>
              <td colSpan="3" className="px-4 py-2">
                <ul>
                  <li>For Open Category: <strong>Rs. 719/-</strong></li>
                  <li>For Backward Classes/Economically Weaker Sections/Orphans/Disabled: <strong>Rs. 449/-</strong></li>
                  <li>Payment Mode: <strong>Through Debit Card, Credit Card, Net Banking or Pay Offline through E-Challan.</strong></li>
                </ul>
              </td>
            </tr>
            <tr className="text-gray-800">
              <th colSpan="3" className="text-center py-2 font-bold text-red-500">Important Dates</th>
            </tr>
            <tr>
              <td colSpan="3" className="px-4 py-2">
                <ul>
                  <li>Starting Date For Apply Online &amp; Payment of Fee: <strong>20-12-20233 at 14:00 hrs</strong></li>
                  <li>Last Date For Apply Online &amp; Payment: <strong>09-01-2024 to 23:59 hrs</strong></li>
                  <li>Date of taking copy of challan for Payment of Examination fee by Challan in SBI: <strong>11-01-2024 up to 23:59 hrs</strong></li>
                  <li>Last Date For Payment of Examination fee by Currency: <strong>12-01-2024 During bank Office hours</strong></li>
                  <li>Date of Interview: <strong>07-05-2024&nbsp;</strong></li>
                </ul>
              </td>
            </tr>
            <tr className="text-gray-800">
              <th colSpan="3" className="text-center py-2 font-bold text-red-500">Age Limit (as on 01-04-2024)</th>
            </tr>
            <tr>
              <td colSpan="3" className="px-4 py-2">
                <ul>
                  <li>Minimum Age: <strong>19 Years</strong></li>
                  <li>Maximum Age: <strong>50 Years</strong></li>
                  <li>Age relaxation is applicable as per rules.</li>
                </ul>
              </td>
            </tr>
            <tr className="text-gray-800">
              <th colSpan="3" className="text-center py-2 font-bold text-red-500">Educational Qualification</th>
            </tr>
            <tr>
              <td colSpan="3" className="px-4 py-2">
                <ul>
                  <li>Candidates should possess M.S./M.D/DM/M.Ch (Concerned Specialty)</li>
                  <li>For More Information Regarding Qualification Details Refer Notification.</li>
                </ul>
              </td>
            </tr>
            <tr className="text-gray-800">
              <th colSpan="3" className="text-center py-2 font-bold text-red-500">Vacancy Details</th>
            </tr>
            <tr className="bg-gray-200 text-gray-800">
              <th className="text-center py-2 font-bold text-blue-500">Sl No</th>
              <th className="text-center py-2 font-bold text-blue-500">Post Name</th>
              <th className="text-center py-2 font-bold text-blue-500">Total</th>
            </tr>
            <tr className="text-gray-800">
              <td className="text-center py-2">1.</td>
              <td className="text-center py-2">Professor in Various Disciplines, Maharashtra Medical Education and Research Service, Group-A</td>
              <td className="text-center py-2">71</td>
            </tr>
            <tr className="text-gray-800">
              <td colSpan="3" className="text-center py-2 font-bold text-blue-500">Interested Candidates Can Read the Full Notification Before Apply Online</td>
            </tr>
            <tr className="text-gray-800">
              <td colSpan="3" className="text-center py-2 font-bold text-red-500">Important Links </td>
            </tr>
            <tr>
              <td colSpan="2" className="text-center py-2 font-bold text-green-500">Interview Result (17-05-2024)</td>
              <td className="text-center py-2"><a href="https://mpsc.gov.in/downloadFile/english/8904" target="_blank" rel="nofollow" className="text-blue-500 font-bold">Click Here</a></td>
            </tr>
            <tr>
              <td colSpan="2" className="text-center py-2 font-bold text-green-500">Notification (20-12-2023)</td>
              <td className="text-center py-2"><a href="https://mpsc.gov.in/downloadFile/english/8362" target="_blank" rel="nofollow" className="text-blue-500 font-bold">Click Here</a></td>
            </tr>
            <tr>
              <td colSpan="2" className="text-center py-2 font-bold text-green-500">Apply Online (20-12-2023)</td>
              <td className="text-center py-2"><a href="https://mpsconline.gov.in/candidate" target="_blank" rel="nofollow" className="text-blue-500 font-bold">Click Here</a></td>
            </tr>
            <tr>
              <td colSpan="2" className="text-center py-2 font-bold text-green-500">Official Website</td>
              <td className="text-center py-2"><a href="https://mpsc.gov.in/" target="_blank" rel="nofollow" className="text-blue-500 font-bold">Click Here</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}