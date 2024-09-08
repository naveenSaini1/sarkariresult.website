export default function DSSSBRecruitment() {
  // This component displays information about the DSSSB Nursing Officer recruitment 2024,
  // including post details, application fee, important dates, vacancy details, and links to relevant resources. 
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">DSSSB Nursing Officer 2024 Online CBT Exam Cancelled</h1>
      <div className="mb-4">
        <p className="text-lg font-medium">
          <span className="text-green-500">Name of the Post:</span> DSSSB Nursing Officer 2024 Online CBT Exam Cancelled
        </p>
        <p className="text-lg font-medium">
          <span className="text-green-500">Post Date:</span> 13-01-2024
        </p>
        <p className="text-lg font-medium">
          <span className="text-green-500">Latest Update:</span> 24-08-2024
        </p>
        <p className="text-lg font-medium">
          <span className="text-green-500">Total Vacancy:</span> 1896
        </p>
      </div>
      <p className="text-lg mb-4">
        <span className="text-red-500 font-medium">Brief Information:</span> Delhi Subordinate Services Selection Board (DSSSB) has Announced notification for the recruitment of Cook, Pharmacist, Nursing Officer &amp; Other Vacancy. Those Candidates who are interested in the vacancy details &amp; completed all eligibility criteria can read the Notification &amp; Apply Online.
      </p>

      <h2 className="text-2xl font-bold mb-4">Recruitment Details</h2>

      <div className="mb-4">
        <table className="table-auto w-full text-center border-collapse border-gray-300 rounded-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4" colSpan={5}>
                <p className="text-xl font-bold text-red-500">Delhi Subordinate Services Selection Board (DSSSB)</p>
                <p className="text-lg font-bold text-pink-500">Advt No: 04/2024</p>
                <p className="text-lg font-bold text-green-500">Various Vacancy 2024</p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={5} className="py-2 px-4">
                <p className="text-xl font-bold text-red-500">Application Fee</p>
                <ul className="list-disc ml-6">
                  <li>Fee for All Other Candidates: <strong>Rs 100/-</strong></li>
                  <li>Fee for SC/ ST/ PWBD &amp; Ex-Serviceman &amp; Women Candidates: <strong>NIL</strong></li>
                  <li>Payment Mode: <strong>Through SBI e-pay.</strong></li>
                </ul>
              </td>
            </tr>
            <tr>
              <td colSpan={5} className="py-2 px-4">
                <p className="text-xl font-bold text-red-500">Important Dates</p>
                <ul className="list-disc ml-6">
                  <li>Starting Date to Apply Online &amp; Payment of Fee: <strong>13-02-2024</strong></li>
                  <li>Last Date to Apply Online &amp; Payment of Fee: <strong>13-03-2024 (till 11:59 PM)</strong></li>
                  <li>Date of Online Exam for Post Code 02/24: <strong>12,13,14,16,27-08-2024 &amp; 03,05,06-09-2024 <span className="text-red-500">(Cancelled)</span></strong></li>
                  <li>Date of Online Exam for Post Code 05/24: <strong>05-09-2024</strong></li>
                  <li>Date of Online Exam for Post Code 06/24: <strong>06-09-2024</strong></li>
                  <li>Date of Online Exam for Post Code 03/24: <strong>26-09-2024</strong></li>
                </ul>
              </td>
            </tr>
            <tr className="bg-gray-100">
              <td colSpan={5} className="py-2 px-4">
                <p className="text-xl font-bold text-red-500">Vacancy Details</p>
              </td>
            </tr>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 text-pink-500 font-medium">Post Code</th>
              <th className="py-2 px-4 text-pink-500 font-medium">Post Name</th>
              <th className="py-2 px-4 text-pink-500 font-medium">Total</th>
              <th className="py-2 px-4 text-pink-500 font-medium">Age Limit (as on 13-03-2024)</th>
              <th className="py-2 px-4 text-pink-500 font-medium">Qualification</th>
            </tr>
            <tr>
              <td className="py-2 px-4">01/24</td>
              <td className="py-2 px-4">Pharmacist</td>
              <td className="py-2 px-4">318</td>
              <td className="py-2 px-4">Not exceeding 27 years</td>
              <td className="py-2 px-4">B. Pharm</td>
            </tr>
            <tr>
              <td className="py-2 px-4">02/24</td>
              <td className="py-2 px-4">Nursing Officer</td>
              <td className="py-2 px-4">1507</td>
              <td className="py-2 px-4" rowSpan={2}>Not exceeding 30 years</td>
              <td className="py-2 px-4">Diploma (GNM)/ B.SC. Nursing/ Post Basic B.Sc. Nursing</td>
            </tr>
            <tr>
              <td className="py-2 px-4">03/24</td>
              <td className="py-2 px-4">Resource Center Coordinator</td>
              <td className="py-2 px-4">12</td>
              <td className="py-2 px-4">B.Ed, B.A. B.Ed, PG Diploma, (Relevant Discipline), PG</td>
            </tr>
            <tr>
              <td className="py-2 px-4">04/24</td>
              <td className="py-2 px-4">AYA</td>
              <td className="py-2 px-4">21</td>
              <td className="py-2 px-4" rowSpan={3}>18 – 27 years</td>
              <td className="py-2 px-4">10th Class</td>
            </tr>
            <tr>
              <td className="py-2 px-4">05/24</td>
              <td className="py-2 px-4">Cook (Male)</td>
              <td className="py-2 px-4">18</td>
              <td className="py-2 px-4" rowSpan={2}>10th Class, Diploma (Catering)</td>
            </tr>
            <tr>
              <td className="py-2 px-4">06/24</td>
              <td className="py-2 px-4">Cook (Female)</td>
              <td className="py-2 px-4">14</td>
            </tr>
            <tr>
              <td className="py-2 px-4">07/24</td>
              <td className="py-2 px-4">Translator (Hindi)</td>
              <td className="py-2 px-4">02</td>
              <td className="py-2 px-4">Not exceeding 30 years</td>
              <td className="py-2 px-4">PG</td>
            </tr>
            <tr>
              <td className="py-2 px-4">08/24</td>
              <td className="py-2 px-4">Section Officer (HR)</td>
              <td className="py-2 px-4">04</td>
              <td className="py-2 px-4">Not exceeding 27 years</td>
              <td className="py-2 px-4">Bachelor’s/PG (Masters) Degree in Business Administration</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-4">For More Details Refer the Notification</p>
      <p className="mb-4">Interested Candidates Can Read the Full Notification Before Apply Online</p>

      <h2 className="text-2xl font-bold mb-4">Important Links</h2>
      <div className="mb-4">
        <table className="table-auto w-full text-center border-collapse border-gray-300 rounded-md">
          <tbody>
            <tr>
              <td colSpan={3} className="py-2 px-4">
                <p className="text-lg font-medium text-green-500">Online CBT Exam Cancelled notice for post code 02/24 (24-08-2024)</p>
              </td>
              <td colSpan={2} className="py-2 px-4">
                <a className="text-blue-500 underline" href="https://img.freejobalert.com/uploads/2024/08/Online-CBT-Exam-Cancelled-notice-DSSSB-TGT-Nursing-Officer-2024.pdf" target="_blank" rel="nofollow noopener">Click Here</a>
              </td>
            </tr>
            <tr>
              <td colSpan={3} className="py-2 px-4">
                <p className="text-lg font-medium text-green-500">Online Exam Admit Card for Nursing Officer, Cook (Male/Female) &amp; Resource Center Coordinator (08-08-2024)</p>
              </td>
              <td colSpan={2} className="py-2 px-4">
                <a className="text-blue-500 underline" href="https://cdn.digialm.com//EForms/configuredHtml/1258/90314/login.html" target="_blank" rel="nofollow">Click Here</a>
              </td>
            </tr>
            <tr>
              <td colSpan={3} className="py-2 px-4">
                <p className="text-lg font-medium text-green-500">Online Exam Date for Nursing Officer, Cook (Male/Female) &amp; Resource Center Coordinator (27-07-2024)</p>
              </td>
              <td colSpan={2} className="py-2 px-4">
                <a className="text-blue-500 underline" href="https://img.freejobalert.com/uploads/2024/07/Exam-Date-DSSSB-Various-Vacancy-1.pdf" target="_blank" rel="nofollow noopener">Click Here</a>
              </td>
            </tr>
            <tr>
              <td colSpan={3} className="py-2 px-4">
                <p className="text-lg font-medium text-green-500">Revised Vacancy for 2/24 (19-04-2024)</p>
              </td>
              <td colSpan={2} className="py-2 px-4">
                <a className="text-blue-500 underline" href="https://dsssb.delhi.gov.in/sites/default/files/DSSSB/circulars-orders/scan0091.pdf" target="_blank" rel="nofollow noopener">Click Here</a>
              </td>
            </tr>
            <tr>
              <td colSpan={3} className="py-2 px-4">
                <p className="text-lg font-medium text-green-500">Apply Online (13-02-2024)</p>
              </td>
              <td colSpan={2} className="py-2 px-4">
                <a className="text-blue-500 underline" href="https://dsssbonline.nic.in/" target="_blank" rel="nofollow">Click Here</a>
              </td>
            </tr>
            <tr>
              <td colSpan={3} className="py-2 px-4">
                <p className="text-lg font-medium text-green-500">Detailed Notification (03-02-2024)</p>
              </td>
              <td colSpan={2} className="py-2 px-4">
                <a className="text-blue-500 underline" href="https://dsssb.delhi.gov.in/sites/default/files/DSSSB/circulars-orders/final_advt._no_04-2024.pdf" target="_blank" rel="nofollow noopener">Click Here</a>
              </td>
            </tr>
            <tr>
              <td colSpan={3} className="py-2 px-4">
                <p className="text-lg font-medium text-green-500">Detailed Vacancy Notice (20-01-2024)</p>
              </td>
              <td colSpan={2} className="py-2 px-4">
                <a className="text-blue-500 underline" href="https://dsssb.delhi.gov.in/sites/default/files/DSSSB/circulars-orders/short_advt._04-2024_4.pdf" target="_blank" rel="nofollow noopener">Click Here</a>
              </td>
            </tr>
            <tr>
              <td colSpan={3} className="py-2 px-4">
                <p className="text-lg font-medium text-green-500">Short Notification</p>
              </td>
              <td colSpan={2} className="py-2 px-4">
                <a className="text-blue-500 underline" href="https://img.freejobalert.com/uploads/2024/01/Notification-Various-Vacancy-Posts.pdf" target="_blank" rel="nofollow">Click Here</a>
              </td>
            </tr>
            <tr>
              <td colSpan={3} className="py-2 px-4">
                <p className="text-lg font-medium text-green-500">Official Website</p>
              </td>
              <td colSpan={2} className="py-2 px-4">
                <a className="text-blue-500 underline" href="https://dsssb.delhi.gov.in/" target="_blank" rel="nofollow noopener">Click Here</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}