export default function RecruitmentInfo() {
  // Displays recruitment information for Railway Recruitment Board (RRB)
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">Railway Recruitment Board (RRB)</h1>
      <p className="text-center mb-4">
        <span className="text-green-500 font-bold">Name of the Post:</span>{' '}
        <span>RRB Various Vacancy Online Form 2024</span>
      </p>
      <div className="flex justify-between mb-4">
        <p>
          <span className="text-green-500 font-bold">Post Date:</span>{' '}
          <span className="font-bold">22-07-2024</span>
        </p>
        <p>
          <span className="text-green-500 font-bold">Latest Update:</span>{' '}
          <span>30-07-2024</span>
        </p>
      </div>
      <p className="text-justify mb-4">
        <span className="text-green-500 font-bold">Total Vacancy:</span>{' '}
        <span>7951 </span>
      </p>
      <p className="text-justify mb-4">
        <span className="text-red-500 font-bold">Brief Information:</span>{' '}
        <span>
          Government of India, Ministry of Railways, Railway Recruitment Board
          (RRB) has advertised a notification for the recruitment of Junior
          Engineer (JE), Depot Material Superintendent (DMS), Chemical &
          Metallurgical Assistant (CMA), Chemical Supervisor (Research) and
          Metallurgical Supervisor (Research) Vacancies in different Railway
          Recruitment Boards (RRBs). Those Candidates who are interested in the
          vacancy details & completed all eligibility criteria can read the
          notification & Apply Online.
        </span>
      </p>

      <h2 className="text-2xl font-bold text-center mb-4">CEN No. 03/2024</h2>

      <h3 className="text-xl font-bold text-center mb-4">Application Fee</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>
          For all candidates, Out of this fee of Rs. 500/-, an amount of Rs.
          400/- shall be refunded duly deducting bank charges, on appearing in 1st
          stage CBT: <span className="font-bold">Rs. 500/-</span>
        </li>
        <li>
          For candidates who belong to SC, ST, Ex-Servicemen, Female,
          Transgender, Minorities or Economically Backward Class (EBC). (Caution
          to Candidates: EBC should not be confused with OBC or EWS). This fee of
          Rs. 250/- shall be refunded duly deducting bank charges as applicable,
          on appearing in 1st stage CBT:
          <span className="font-bold"> Rs. 250/-</span>
        </li>
        <li>
          Payment Mode:
          <span className="font-bold">
            Through Online by using internet banking, debit/credit cards or UPI
            will be accepted.
          </span>
        </li>
        <li>
          <span className="font-bold">Note:</span> Only candidates who attend 1st
          stage CBT will get a refund of their examination fee as mentioned
          above.
        </li>
      </ul>

      <h3 className="text-xl font-bold text-center mb-4">Important Dates</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>
          Starting Date for Apply Online & Payment of Fee:
          <span className="font-bold"> 30-07-2024</span>
        </li>
        <li>
          Last Date for Apply Online & Payment of Fee:
          <span className="font-bold"> 29-08-2024 (23:59 hours)</span>
        </li>
        <li>
          Dates for Modification window for corrections in application form with
          payment of modification fee (Please Note: Details filled in ‘Create an
          Account’ form and ‘Chosen RRB’ cannot be modified):
          <span className="font-bold"> 30-08-2024 to 08-09-2024</span>
        </li>
      </ul>

      <h3 className="text-xl font-bold text-center mb-4">Age Limit</h3>
      <div className="mb-4">
        <strong className="font-bold">
          Prescribed age in normal course (as on 01-01-2025):
        </strong>
        <ul className="list-disc ml-6">
          <li>Minimum Age Limit: <span className="font-bold">18 Years</span></li>
          <li>Maximum Age Limit: <span className="font-bold">33 Years</span></li>
        </ul>
      </div>
      <div className="mb-4">
        <strong className="font-bold">
          Age applicable to this CEN (as on 01-01-2025):
        </strong>
        <ul className="list-disc ml-6">
          <li>Minimum Age Limit: <span className="font-bold">18 Years</span></li>
          <li>Maximum Age Limit: <span className="font-bold">36 Years</span></li>
          <li>Age Relaxation is Applicable as per Rules.</li>
        </ul>
      </div>

      <h3 className="text-xl font-bold text-center mb-4">Qualification</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>
          <b>For Chemical Supervisor/Research:</b> Candidates Should Possess
          Degree (Chemical Technology).
        </li>
        <li>
          <strong>For Metallurgical Supervisor/Research:</strong> Candidates
          Should Possess Degree (Metallurgical Engineering)
        </li>
        <li>
          <strong>For Junior Engineer:</strong> Candidates Should Possess Diploma
          or Degree (Relevant Engg)
        </li>
        <li>
          <strong>For Chemical and Metallurgical Assistant:</strong> Candidates
          Should Possess B.Sc. Science (Physics and Chemistry)
        </li>
        <li>
          <strong>For Depot Material Superintendent:</strong> Candidates Should
          Possess Diploma (Engg)
        </li>
        <li>For More Details Refer Notification.</li>
      </ul>

      <h3 className="text-xl font-bold text-center mb-4">Vacancy Details</h3>
      <div className="mb-4">
        <table className="table-auto w-full border-2 border-collapse border-gray-300 mb-4">
          <thead>
            <tr>
              <th className="text-center text-purple-500 font-bold">SI No.</th>
              <th className="text-purple-500 font-bold">Post Name</th>
              <th className="text-center text-purple-500 font-bold">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">1.</td>
              <td>
                Chemical Supervisor /Research and Metallurgical Supervisor
                /Research
              </td>
              <td className="text-center">17 (RRB Gorakhpur only)</td>
            </tr>
            <tr>
              <td className="text-center">2.</td>
              <td>
                Junior Engineer, Depot Material Superintendent and Chemical &
                Metallurgical Assistant
              </td>
              <td className="text-center">7934</td>
            </tr>
            <tr>
              <td></td>
              <td className="font-bold">Total</td>
              <td className="text-center font-bold">7951</td>
            </tr>
          </tbody>
        </table>
      </div>
      <table className="table-auto w-full border-2 border-collapse border-gray-300">
        <thead>
          <tr>
            <th className="text-center text-purple-500 font-bold">SI No.</th>
            <th className="text-center text-purple-500 font-bold">
              RRB Region participating in CEN No. 03/2024
            </th>
            <th className="text-center text-purple-500 font-bold">Zone</th>
            <th className="text-center text-purple-500 font-bold">JE</th>
            <th className="text-center text-purple-500 font-bold">
              Chemical Supervisor
            </th>
            <th className="text-center text-purple-500 font-bold">
              Metallurgical Supervisor
            </th>
            <th className="text-center text-purple-500 font-bold">DMS</th>
            <th className="text-center text-purple-500 font-bold">CMA</th>
            <th className="text-center text-purple-500 font-bold">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center">1.</td>
            <td className="text-center">RRB Ahmedabad</td>
            <td className="text-center">WR</td>
            <td className="text-center">360</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center">06</td>
            <td className="text-center">16</td>
            <td className="text-center font-bold">382</td>
          </tr>
          <tr>
            <td className="text-center">2.</td>
            <td className="text-center">RRB Ajmer</td>
            <td className="text-center">NWR & WCR</td>
            <td className="text-center">506</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center">23</td>
            <td className="text-center">-</td>
            <td className="text-center font-bold">529</td>
          </tr>
          <tr>
            <td className="text-center">3.</td>
            <td className="text-center">RRB Bangalore</td>
            <td className="text-center">SWR</td>
            <td className="text-center">384</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center">13</td>
            <td className="text-center">-</td>
            <td className="text-center font-bold">397</td>
          </tr>
          <tr>
            <td className="text-center">4.</td>
            <td className="text-center">RRB Bhopal</td>
            <td className="text-center">WCR & WR</td>
            <td className="text-center">472</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center">06</td>
            <td className="text-center">07</td>
            <td className="text-center font-bold">485</td>
          </tr>
          <tr>
            <td className="text-center">5.</td>
            <td className="text-center">RRB Bhubaneswar</td>
            <td className="text-center">ECoR</td>
            <td className="text-center">175</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center font-bold">175</td>
          </tr>
          <tr>
            <td className="text-center">6.</td>
            <td className="text-center">RRB Bilaspur</td>
            <td className="text-center">CR & SECR</td>
            <td className="text-center">472</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center font-bold">472</td>
          </tr>
          <tr>
            <td className="text-center">7.</td>
            <td className="text-center">RRB chandigarh</td>
            <td className="text-center">NR</td>
            <td className="text-center">329</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center">27</td>
            <td className="text-center">-</td>
            <td className="text-center font-bold">356</td>
          </tr>
          <tr>
            <td className="text-center">8.</td>
            <td className="text-center">RRB Chennai</td>
            <td className="text-center">SR</td>
            <td className="text-center">606</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center">16</td>
            <td className="text-center">30</td>
            <td className="text-center font-bold">652</td>
          </tr>
          <tr>
            <td className="text-center">9.</td>
            <td className="text-center">RRB Guwahati</td>
            <td className="text-center">NFR</td>
            <td className="text-center">196</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center">22</td>
            <td className="text-center">07</td>
            <td className="text-center font-bold">225</td>
          </tr>
          <tr>
            <td className="text-center">10.</td>
            <td className="text-center">RRB Goarkhpur</td>
            <td className="text-center">NER</td>
            <td className="text-center">224</td>
            <td className="text-center">05</td>
            <td className="text-center">12</td>
            <td className="text-center">10</td>
            <td className="text-center">08</td>
            <td className="text-center font-bold">259</td>
          </tr>
          <tr>
            <td className="text-center">11.</td>
            <td className="text-center">RRB Jammu & Srinagar</td>
            <td className="text-center">NR</td>
            <td className="text-center">212</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center">17</td>
            <td className="text-center">22</td>
            <td className="text-center font-bold">251</td>
          </tr>
          <tr>
            <td className="text-center">12.</td>
            <td className="text-center">RRB Kolkata</td>
            <td className="text-center">ER, METRO & SER</td>
            <td className="text-center">554</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center">106</td>
            <td className="text-center">-</td>
            <td className="text-center font-bold">660</td>
          </tr>
          <tr>
            <td className="text-center">13.</td>
            <td className="text-center">RRB Malda</td>
            <td className="text-center">ER & SER</td>
            <td className="text-center">163</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center font-bold">163</td>
          </tr>
          <tr>
            <td className="text-center">14.</td>
            <td className="text-center">RRB Mumbai</td>
            <td className="text-center">SCR, WR & CR</td>
            <td className="text-center">1198</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center">127</td>
            <td className="text-center">52</td>
            <td className="text-center font-bold">1377</td>
          </tr>
          <tr>
            <td className="text-center">15.</td>
            <td className="text-center">RRB Muzaffarpur</td>
            <td className="text-center">ECR</td>
            <td className="text-center">11</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center font-bold">11</td>
          </tr>
          <tr>
            <td className="text-center">16.</td>
            <td className="text-center">RRB Patna</td>
            <td className="text-center">ECR</td>
            <td className="text-center">244</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center">02</td>
            <td className="text-center">01</td>
            <td className="text-center font-bold">247</td>
          </tr>
          <tr>
            <td className="text-center">17.</td>
            <td className="text-center">RRB Prayagraj</td>
            <td className="text-center">NCR & NR</td>
            <td className="text-center">395</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center">04</td>
            <td className="text-center">05</td>
            <td className="text-center font-bold">404</td>
          </tr>
          <tr>
            <td className="text-center">18.</td>
            <td className="text-center">RRB Ranchi</td>
            <td className="text-center">SER & ECR</td>
            <td className="text-center">167</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center font-bold">167</td>
          </tr>
          <tr>
            <td className="text-center">19.</td>
            <td className="text-center">RRB Secunderabad</td>
            <td className="text-center">ECoR & SCR</td>
            <td className="text-center">569</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center">19</td>
            <td className="text-center">02</td>
            <td className="text-center font-bold">590</td>
          </tr>
          <tr>
            <td className="text-center">20.</td>
            <td className="text-center">RRB Siliguri</td>
            <td className="text-center">NFR</td>
            <td className="text-center">28</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center font-bold">28</td>
          </tr>
          <tr>
            <td className="text-center">21.</td>
            <td className="text-center">RRB Thiruvananthapuram</td>
            <td className="text-center">SR</td>
            <td className="text-center">121</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center">-</td>
            <td className="text-center font-bold">121</td>
          </tr>
          <tr>
            <td className="text-center" colSpan="3">
              <span className="text-purple-500 font-bold">Total</span>
            </td>
            <td className="text-center">
              <span className="text-purple-500 font-bold">7386</span>
            </td>
            <td className="text-center">
              <span className="text-purple-500 font-bold">05</span>
            </td>
            <td className="text-center">
              <span className="text-purple-500 font-bold">12</span>
            </td>
            <td className="text-center">
              <span className="text-purple-500 font-bold">398</span>
            </td>
            <td className="text-center">
              <span className="text-purple-500 font-bold">150</span>
            </td>
            <td className="text-center">
              <span className="text-purple-500 font-bold">7951</span>
            </td>
          </tr>
        </tbody>
      </table>
      <p className="text-blue-500 text-center font-bold mb-4">
        Interested Candidates Can Read the Full Notification & Apply Online
      </p>
      <h3 className="text-xl font-bold text-center mb-4">Important Links</h3>
      <div className="flex flex-col gap-2 mb-4">
        <a
          href="https://www.rrbapply.gov.in/#"
          target="_blank"
          className="text-blue-500 underline"
        >
          Apply Online (30-07-2024)
        </a>
        <a
          href="https://img.freejobalert.com/uploads/2024/07/Detailed-Notification-RRB-JE-Other-Posts-2024.pdf"
          target="_blank"
          className="text-blue-500 underline"
        >
          Detailed Notification (27-07-2024)
        </a>
        <a
          href="https://indianrailways.gov.in/railwayboard/view_section.jsp?lang=0&id=0,7,1281"
          target="_blank"
          className="text-blue-500 underline"
        >
          Short Notification
        </a>
        <a
          href="https://www.freejobalert.com/rrb-je-exam-pattern/1103894/"
          target="_blank"
          className="text-blue-500 underline"
        >
          Exam Pattern
        </a>
        <a
          href="https://www.freejobalert.com/rrb-je-sse-selection-procedure/346759/"
          target="_blank"
          className="text-blue-500 underline"
        >
          Selection Procedure
        </a>
        <a
          href="https://www.freejobalert.com/rrb-je-sse-eligibility/346721/"
          target="_blank"
          className="text-blue-500 underline"
        >
          Eligibility Details
        </a>
        <a
          href="https://www.freejobalert.com/rrb-je-sse-syllabus/346747/"
          target="_blank"
          className="text-blue-500 underline"
        >
          Syllabus
        </a>
        <a
          href="https://indianrailways.gov.in/railwayboard/view_section.jsp?lang=0&id=0,7,1281"
          target="_blank"
          className="text-blue-500 underline"
        >
          Official Website
        </a>
      </div>
    </div>
  );
}