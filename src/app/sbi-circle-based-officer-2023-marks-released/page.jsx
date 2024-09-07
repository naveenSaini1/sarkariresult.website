export default function SbiRecruitmentInfo() {
  // This component displays recruitment information for the SBI Circle Based Officer 2023 position. 
  // It includes details on the post, important dates, application fee, qualifications, vacancy details, and links to relevant resources.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">SBI Circle Based Officer 2023 Recruitment</h1>

      <div className="mb-4">
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Name of the Post:</span> SBI Circle Based Officer 2023 Marks Released
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Post Date:</span> 22-11-2023
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Latest Update:</span> 06-09-2024
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Total Vacancy:</span> 5280
        </p>
        <p className="text-lg mb-2">
          <span className="text-red-500 font-bold">Brief Information:</span> State Bank of India (SBI) has given a notification for the recruitment of Circle Based Officer (CBO) Vacancy. Those Candidates who are Interested to the following vacancy and completed all Eligibility Criteria can read the notification & Apply online.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Application Fee</h2>
        <ul className="list-disc ml-4">
          <li className="mb-2">For General/ OBC/ EWS: Rs. 750/-</li>
          <li className="mb-2">For SC/ST/PWD: Nil</li>
          <li>Mode of Payment: Debit card/ Credit card/ Internet Banking</li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Important Dates</h2>
        <ul className="list-disc ml-4">
          <li className="mb-2">Starting Date for Apply Online & Payment of Fee: 22-11-2023</li>
          <li className="mb-2">Last Date to Apply Online & Payment of Fee: 17-12-2023</li>
          <li className="mb-2">Date for Downloading of Call letter for Online Test: January 2024 (Tentative)</li>
          <li className="mb-2">Date for Online Exam: 21-01-2024</li>
          <li>Date for Downloading of Interview Call letter: 06-06-2024 to 23-06-2024</li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Age Limit (as on 31-10-2023)</h2>
        <ul className="list-disc ml-4">
          <li className="mb-2">Minimum Age Limit: 21 Years</li>
          <li className="mb-2">Maximum Age Limit: 30 Years</li>
          <li className="mb-2">i.e. candidates must have been born not later than 31-10-2002 and not earlier than 01-11-1993 (both days inclusive)</li>
          <li>Age relaxation is applicable as per rules.</li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Qualification</h2>
        <ul className="list-disc ml-4">
          <li>Candidates should possess Any Degree.</li>
        </ul>
      </div>

      <h2 className="text-xl font-bold mb-2">Vacancy Details</h2>

      <table className="table-auto w-full text-center text-sm border border-gray-300">
        <thead>
          <tr>
            <th className="px-2 py-1 border border-gray-300">
              <span className="text-blue-500 font-medium">Sl No</span>
            </th>
            <th className="px-2 py-1 border border-gray-300">
              <span className="text-blue-500 font-medium">State</span>
            </th>
            <th className="px-2 py-1 border border-gray-300">
              <span className="text-blue-500 font-medium">Total</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-2 py-1 border border-gray-300">1.</td>
            <td className="px-2 py-1 border border-gray-300">Gujarat</td>
            <td className="px-2 py-1 border border-gray-300" rowSpan="3">430</td>
          </tr>
          <tr>
            <td className="px-2 py-1 border border-gray-300">2.</td>
            <td className="px-2 py-1 border border-gray-300">Dadra & Nagar Haveli</td>
          </tr>
          <tr>
            <td className="px-2 py-1 border border-gray-300">3.</td>
            <td className="px-2 py-1 border border-gray-300">Daman & Diu</td>
          </tr>
          <tr>
            <td className="px-2 py-1 border border-gray-300">4.</td>
            <td className="px-2 py-1 border border-gray-300">Andhra Pradesh.</td>
            <td className="px-2 py-1 border border-gray-300">400</td>
          </tr>
          <tr>
            <td className="px-2 py-1 border border-gray-300">5.</td>
            <td className="px-2 py-1 border border-gray-300">Karnataka</td>
            <td className="px-2 py-1 border border-gray-300">380</td>
          </tr>
          <tr>
            <td className="px-2 py-1 border border-gray-300">6.</td>
            <td className="px-2 py-1 border border-gray-300">Madhya Pradesh</td>
            <td className="px-2 py-1 border border-gray-300" rowSpan="2">450</td>
          </tr>
          <tr>
            <td className="px-2 py-1 border border-gray-300">7.</td>
            <td className="px-2 py-1 border border-gray-300">Chhattisgarh</td>
          </tr>
          <tr>
            <td className="px-2 py-1 border border-gray-300">8.</td>
            <td className="px-2 py-1 border border-gray-300">Odisha</td>
            <td className="px-2 py-1 border border-gray-300">250</td>
          </tr>
          <tr>
            <td className="px-2 py-1 border border-gray-300">9.</td>
            <td className="px-2 py-1 border border-gray-300">Jammu & Kashmir</td>
            <td className="px-2 py-1 border border-gray-300" rowSpan="5">300</td>
          </tr>
          <tr>
            <td className="px-2 py-1 border border-gray-300">10.</td>
            <td className="px-2 py-1 border border-gray-300">Ladakh</td>
          </tr>
          <tr>
            <td className="px-2 py-1 border border-gray-300">11.</td>
            <td className="px-2 py-1 border border-gray-300">Himachal Pradesh</td>
          </tr>
          <tr>
            <td className="px-2 py-1 border border-gray-300">12.</td>
            <td className="px-2 py-1 border border-gray-300">Haryana</td>
          </tr>
          <tr>
            <td className="px-2 py-1 border border-gray-300">13.</td>
            <td className="px-2 py-1 border border-gray-300">Punjab</td>
          </tr>
          <tr>
            <td className="px-2 py-1 border border-gray-300">14.</td>
            <td className="px-2 py-1 border border-gray-300">Tamil Nadu</td>
            <td className="px-2 py-1 border border-gray-300" rowSpan="2">125</td>
          </tr>
          <tr>
            <td className="px-2 py-1 border border-gray-300">15.</td>
            <td className="px-2 py-1 border border-gray-300">Pondicherry</td>
          </tr>
          <tr>
            <td className="px-2 py-1 border border-gray-300">16.</td>
            <td className="px-2 py-1 border border-gray-300">Assam</td>
            <td className="px-2 py-1 border border-gray-300" rowSpan="7">250</td>
          </tr>
          <tr>
            <td className="px-2 py-1 border border-gray-300">17.</td>
            <td className="px-2 py-1 border border-gray-300">Arunachal Pradesh</td>
          </tr>
          <tr>
            <td className="px-2 py-1 border border-gray-300">18.</td>
            <td className="px-2 py-1 border border-gray-300">Manipur</td>
          </tr>
          <tr>
            <td className="px-2 py-1 border border-gray-300">19.</td>
            <td className="px-2 py-1 border border-gray-300">Meghalaya</td>
          </tr>
          <tr>
            <td className="px-2 py-1 border border-gray-300">20.</td>
            <td className="px-2 py-1 border border-gray-300">Mizoram</td>
          </tr>
          <tr>
            <td className="px-2 py-1 border border-gray-300">21.</td>
            <td className="px-2 py-1 border border-gray-300">Nagaland</td>
          </tr>
          <tr>
            <td className="px-2 py-1 border border-gray-300">22.</td>
            <td className="px-2 py-1 border border-gray-300">Tripura</td>
          </tr>
          <tr>
            <td className="px-2 py-1 border border-gray-300">23.</td>
            <td className="px-2 py-1 border border-gray-300">Telangana</td>
            <td className="px-2 py-1 border border-gray-300">425</td>
          </tr>
          <tr>
            <td className="px-2 py-1 border border-gray-300">24.</td>
            <td className="px-2 py-1 border border-gray-300">Rajasthan</td>
            <td className="px-2 py-1 border border-gray-300">500</td>
          </tr>
          <tr>
            <td className="px-2 py-1 border border-gray-300">25.</td>
            <td className="px-2 py-1 border border-gray-300">Uttar Pradesh</td>
            <td className="px-2 py-1 border border-gray-300">600</td>
          </tr>
          <tr>
            <td className="px-2 py-1 border border-gray-300">26.</td>
            <td className="px-2 py-1 border border-gray-300">West Bengal</td>
            <td className="px-2 py-1 border border-gray-300" rowSpan="3">230</td>
          </tr>
          <tr>
            <td className="px-2 py-1 border border-gray-300">27.</td>
            <td className="px-2 py-1 border border-gray-300">A & N Islands</td>
          </tr>
          <tr>
            <td className="px-2 py-1 border border-gray-300">28.</td>
            <td className="px-2 py-1 border border-gray-300">Sikkim</td>
          </tr>
          <tr>
            <td className="px-2 py-1 border border-gray-300">29.</td>
            <td className="px-2 py-1 border border-gray-300">Maharashtra</td>
            <td className="px-2 py-1 border border-gray-300" rowSpan="2">300</td>
          </tr>
          <tr>
            <td className="px-2 py-1 border border-gray-300">30.</td>
            <td className="px-2 py-1 border border-gray-300">Goa</td>
          </tr>
          <tr>
            <td className="px-2 py-1 border border-gray-300">31.</td>
            <td className="px-2 py-1 border border-gray-300">Maharashtra</td>
            <td className="px-2 py-1 border border-gray-300">90</td>
          </tr>
          <tr>
            <td className="px-2 py-1 border border-gray-300">32.</td>
            <td className="px-2 py-1 border border-gray-300">Delhi</td>
            <td className="px-2 py-1 border border-gray-300" rowSpan="4">300</td>
          </tr>
          <tr>
            <td className="px-2 py-1 border border-gray-300">33.</td>
            <td className="px-2 py-1 border border-gray-300">Uttarakhand</td>
          </tr>
          <tr>
            <td className="px-2 py-1 border border-gray-300">34.</td>
            <td className="px-2 py-1 border border-gray-300">Haryana</td>
          </tr>
          <tr>
            <td className="px-2 py-1 border border-gray-300">35.</td>
            <td className="px-2 py-1 border border-gray-300">Uttar Pradesh</td>
          </tr>
          <tr>
            <td className="px-2 py-1 border border-gray-300">36.</td>
            <td className="px-2 py-1 border border-gray-300">Kerala</td>
            <td className="px-2 py-1 border border-gray-300" rowSpan="2">250</td>
          </tr>
          <tr>
            <td className="px-2 py-1 border border-gray-300">37.</td>
            <td className="px-2 py-1 border border-gray-300">Lakshadweep</td>
          </tr>
        </tbody>
      </table>

      <p className="text-blue-500 font-medium mt-4">Interested Candidates Can Read Full Notification Before Apply Online</p>

      <h2 className="text-xl font-bold mb-2 mt-4">Important Links</h2>
      <ul className="list-disc ml-4">
        <li className="mb-2">
          <span className="text-green-500 font-medium">Marks (06-09-2024)</span>
          <a href="https://sbi.co.in/web/careers/crpd/cbo/2023-24/18" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a>
        </li>
        <li className="mb-2">
          <span className="text-green-500 font-medium">Final Result (20-07-2024)</span>
          <a href="https://img.freejobalert.com/uploads/2024/07/Final-Result-SBI-CBO-Posts.pdf" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a>
        </li>
        <li className="mb-2">
          <span className="text-green-500 font-medium">Online Exam Result/ Interview Call Letter (07-06-2024)</span>
          <a href="https://ibpsonline.ibps.in/sbicbosep23/intcla_may24/login.php?appid=d8d654b41f36fd8f97a93d6de1607140" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a>
        </li>
        <li className="mb-2">
          <span className="text-green-500 font-medium">Notice (04-04-2024)</span>
          <a href="https://sbi.co.in/documents/77530/43947057/030424-RESULT+NOTICE+%281%29.pdf/fd839d58-3991-25b1-80b4-09341240d0aa?t=1712149592108" target="_blank" rel="nofollow noopener" className="text-blue-500">Click Here</a>
        </li>
        <li className="mb-2">
          <span className="text-green-500 font-medium">Online Call Letter (17-01-2024)</span>
          <a href="https://ibpsonline.ibps.in/sbicbosep23/oecla_jan24/login.php?appid=868cec97df22e101835c6185eb4d08b4" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a>
        </li>
        <li className="mb-2">
          <span className="text-green-500 font-medium">Online Exam Date (12-01-2024)</span>
          <a href="https://sbi.co.in/web/careers/current-openings" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a>
        </li>
        <li className="mb-2">
          <span className="text-green-500 font-medium">Last Date Extended (13-12-2023)</span>
          <a href="https://www.sbi.co.in/web/careers/current-openings" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a>
        </li>
        <li className="mb-2">
          <span className="text-green-500 font-medium">Apply Online</span>
          <a href="https://ibpsonline.ibps.in/sbicbosep23/" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a>
        </li>
        <li className="mb-2">
          <span className="text-green-500 font-medium">Notification</span>
          <a href="https://sbi.co.in/documents/77530/36548767/212223-Final+Advertisement.pdf/3a3945e6-d8ee-fc51-8992-99d0ff942541?t=1700564748917" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a>
        </li>
        <li className="mb-2">
          <span className="text-green-500 font-medium">Eligibility Criteria</span>
          <a href="https://www.freejobalert.com/state-bank-of-india-cbo-eligibility/1063990/" target="_blank" rel="noopener" className="text-blue-500">Click Here</a>
        </li>
        <li className="mb-2">
          <span className="text-green-500 font-medium">Selection Process</span>
          <a href="https://www.freejobalert.com/sbi-cbo-selection-process/1064000/" target="_blank" rel="noopener" className="text-blue-500">Click Here</a>
        </li>
        <li className="mb-2">
          <span className="text-green-500 font-medium">Exam Pattern</span>
          <a href="https://www.freejobalert.com/sbi-cbo-exam-pattern/1064022/" target="_blank" rel="noopener" className="text-blue-500">Click Here</a>
        </li>
        <li>
          <span className="text-green-500 font-medium">Syllabus</span>
          <a href="https://www.freejobalert.com/sbi-cbo-syllabus/1063992/" target="_blank" rel="noopener" className="text-blue-500">Click Here</a>
        </li>
        <li>
          <span className="text-green-500 font-medium">Official Website</span>
          <a href="https://www.sbi.co.in/" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a>
        </li>
      </ul>
    </div>
  );
}