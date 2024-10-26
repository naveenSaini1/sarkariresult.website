export default function ChhattisgarhPSCRecruitment() {
  // This component displays recruitment information for various positions at the Chhattisgarh Public Service Commission (CGPSC). It includes details like post name, date, total vacancies, application fee, important dates, and vacancy details for different positions.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Chhattisgarh Public Service Commission (CGPSC) Recruitment</h1>
      <p className="mb-4">
        The Chhattisgarh Public Service Commission (CGPSC) is currently recruiting for various positions across different departments. This page provides detailed information on open positions, application deadlines, and eligibility requirements.
      </p>
      <h2 className="text-2xl font-bold mb-4">Key Highlights</h2>
      <ul className="list-disc mb-4">
        <li>Chhattisgarh Public Service Commission (CGPSC) is actively recruiting for various positions.</li>
        <li>Find information on open positions, application deadlines, and eligibility requirements.</li>
        <li>Apply for the desired position by following the links provided below.</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Open Positions</h2>
      {/* CGPSC Subedar, SI & Platoon Commander Online Form 2024 */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-2">
          <a href="#SI-2024" className="text-blue-500">CGPSC Subedar, SI & Platoon Commander Online Form 2024</a>
        </h3>
        <p className="mb-2">Post Date: 23-10-2024</p>
        <p className="mb-2">Total Vacancy: 341</p>
        <p className="mb-2">
          <strong>Brief Information:</strong> The Chhattisgarh Public Service Commission (CGPSC) has announced a notification for the recruitment of Subedar, Sub Inspector &amp; Platoon Commander vacancies on Direct Recruitment under Home (Police) Department.
        </p>
        <h4 className="text-lg font-bold mb-2">Application Fee</h4>
        <ul className="list-disc mb-2">
          <li>No examination fee will be charged from applicants who are local residents of Chhattisgarh state.</li>
          <li>All candidates will have to pay portal fee and GST for online application.</li>
          <li>Fee for paid error correction: Rs. 500/-</li>
        </ul>
        <h4 className="text-lg font-bold mb-2">Important Dates</h4>
        <ul className="list-disc mb-2">
          <li>Starting Date for Apply Online: 23-10-2024 (12:00 noon)</li>
          <li>Last Date to Apply Online: 21-11-2024 (11:59 pm)</li>
          <li>Date for correction of errors in online application: from 22-11-2024 at 12:00 noon to 24-11-2024 at 11:59 pm</li>
          <li>Date for paid error correction: from 25-11-2024 at 12:00 noon to 27-11-2024 at 11:59 pm</li>
        </ul>
        <h4 className="text-lg font-bold mb-2">Age Limit (as on 01-01-2024)</h4>
        <ul className="list-disc mb-2">
          <li>Minimum Age Limit: 21 Years</li>
          <li>Maximum Age Limit: 28 Years</li>
          <li>Age Relaxation is Applicable as per rules.</li>
        </ul>
        <h4 className="text-lg font-bold mb-2">Physical Standards</h4>
        <ul className="list-disc mb-2">
          <li>Height: 168 cms or more (for male candidates) 153 cms or more (for women only)</li>
          <li>Chest: 81 cms without expansion, 86 cms when expanded.</li>
          <li>Female candidates will be exempted from this physical qualification.</li>
          <li>The candidate should not be physically handicapped.</li>
        </ul>
        <h4 className="text-lg font-bold mb-2">Vacancy Details</h4>
        <table className="table-auto w-full text-center mb-4">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Sl No</th>
              <th className="px-4 py-2 border">Post Name</th>
              <th className="px-4 py-2 border">Total</th>
              <th className="px-4 py-2 border">Qualification</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border">1.</td>
              <td className="px-4 py-2 border">Subedar</td>
              <td className="px-4 py-2 border">19</td>
              <td className="px-4 py-2 border" rowspan="4">Any Degree</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">2.</td>
              <td className="px-4 py-2 border">Sub Inspector</td>
              <td className="px-4 py-2 border">278</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">3.</td>
              <td className="px-4 py-2 border">Sub Inspector (Special Branch)</td>
              <td className="px-4 py-2 border">11</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">4.</td>
              <td className="px-4 py-2 border">Platoon Commander</td>
              <td className="px-4 py-2 border">14</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">5.</td>
              <td className="px-4 py-2 border">Sub Inspector (Angul Chinh)</td>
              <td className="px-4 py-2 border">04</td>
              <td className="px-4 py-2 border" rowspan="2">Degree (Mathematics, Physics and Chemistry)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">6.</td>
              <td className="px-4 py-2 border">Sub Inspector (document under question)</td>
              <td className="px-4 py-2 border">01</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">7.</td>
              <td className="px-4 py-2 border">Sub Inspector (Computer)</td>
              <td className="px-4 py-2 border">05</td>
              <td className="px-4 py-2 border" rowspan="2">BCA/ B.Sc. (Computer)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">8.</td>
              <td className="px-4 py-2 border">Sub Inspector (Cyber Crime)</td>
              <td className="px-4 py-2 border">09</td>
            </tr>
          </tbody>
        </table>
        <p className="mb-2">
          <strong>Interested Candidates Can Read the Full Notification Before Apply Online</strong>
        </p>
        <p className="mb-2">
          <strong>Important Links:</strong>
        </p>
        <ul className="list-disc mb-2">
          <li>
            <a href="http://www.psc.cg.gov.in/" className="text-blue-500">
              Apply Online
            </a>
          </li>
          <li>
            <a
              href="https://img.freejobalert.com/uploads/2024/10/Notification-CGPSC-Subedar-SI-and-Platoon-Commander-Posts.pdf"
              className="text-blue-500"
            >
              Notification
            </a>
          </li>
          <li>
            <a href="http://www.psc.cg.gov.in/" className="text-blue-500">
              Official Website
            </a>
          </li>
        </ul>
      </div>

      {/* CGPSC State Service Exam 2023 Interview Date Postponed */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-2">
          <a href="#SSE-2023" className="text-blue-500">
            CGPSC State Service Exam 2023 Interview Date Postponed
          </a>
        </h3>
        <p className="mb-2">Post Date: 28-11-2023</p>
        <p className="mb-2">Latest Update: 15-10-2024</p>
        <p className="mb-2">Total Vacancy: 242</p>
        <p className="mb-2">
          <strong>Brief Information:</strong> The Chhattisgarh Public Service Commission (CGPSC) has published notification to conduct State Service Exam 2023 for the recruitment of State Tax Inspector, Cooperative Inspector &amp; Other.
        </p>
        <h4 className="text-lg font-bold mb-2">Application Fee</h4>
        <ul className="list-disc mb-2">
          <li>For Other candidates out of Chhattisgarh: Rs. 400/-</li>
          <li>Portal fee + GST fee will be payable for all Candidates.</li>
          <li>Payment Mode: Through Online</li>
        </ul>
        <h4 className="text-lg font-bold mb-2">Important Dates</h4>
        <ul className="list-disc mb-2">
          <li>Starting Date to Apply Online (Re Open Dates): 08-05-2024 (12:00 noon)</li>
          <li>Last Date to Apply Online (Re Open Dates): 09-05-2024 (11:59 pm)</li>
          <li>Date of Interview: 15-10-2024 to 05-11-2024 (Postponed)</li>
          <li>Starting Date to Apply Online (Mains Date): 02-04-2024</li>
          <li>Last Date to Apply Online (Mains Date): 02-05-2024</li>
          <li>Date for Correction of Errors in Online Applications (Mains Date): 03-05-2024 to 07-05-2024</li>
          <li>Date for Mains Exam: 24 to 27-06-2024</li>
          <li>Starting Date to Apply Online (Prelims Date): 01-12-2023</li>
          <li>Last Date to Apply Online (Prelims Date): 30-12-2023</li>
          <li>Date of Prelims Exam: 11-02-2024</li>
          <li>Date for Mains Exam (Prelims Date): 13 to 16-06-2024</li>
        </ul>
        <h4 className="text-lg font-bold mb-2">Age Limit (as on 30-12-2023)</h4>
        <ul className="list-disc mb-2">
          <li>Minimum Age: 18 Years</li>
          <li>Maximum Age: 45 Years (For more details refer notification)</li>
          <li>Age relaxation is applicable as per rules</li>
        </ul>
        <h4 className="text-lg font-bold mb-2">Qualification</h4>
        <ul className="list-disc mb-2">
          <li>Candidates should possess Bachelors Degree from a recognized university/ Institution.</li>
        </ul>
        <h4 className="text-lg font-bold mb-2">Vacancy Details</h4>
        <table className="table-auto w-full text-center mb-4">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Sl No</th>
              <th className="px-4 py-2 border">Name of Post &amp; Department</th>
              <th className="px-4 py-2 border">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border">1</td>
              <td className="px-4 py-2 border">State Administrative Service</td>
              <td className="px-4 py-2 border">08</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">2</td>
              <td className="px-4 py-2 border">Chhattisgarh State Finance Service Officer</td>
              <td className="px-4 py-2 border">06</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">3</td>
              <td className="px-4 py-2 border">Principal Officer/ Assistant Director</td>
              <td className="px-4 py-2 border">03</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">4</td>
              <td className="px-4 py-2 border">District Excise Officer Commercial Tax</td>
              <td className="px-4 py-2 border">11</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">5</td>
              <td className="px-4 py-2 border">Assistant Director/ District Women Child Development Officer</td>
              <td className="px-4 py-2 border">06</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">6</td>
              <td className="px-4 py-2 border">District Registrar</td>
              <td className="px-4 py-2 border">01</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">7</td>
              <td className="px-4 py-2 border">State Tax Asst Commissioner</td>
              <td className="px-4 py-2 border">06</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">8</td>
              <td className="px-4 py-2 border">Superintendent District Jail</td>
              <td className="px-4 py-2 border">06</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">9</td>
              <td className="px-4 py-2 border">Assistant Director</td>
              <td className="px-4 py-2 border">10</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">10</td>
              <td className="px-4 py-2 border">Assistant Registrar</td>
              <td className="px-4 py-2 border">14</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">11</td>
              <td className="px-4 py-2 border">District Commander</td>
              <td className="px-4 py-2 border">11</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">12</td>
              <td className="px-4 py-2 border">Chief Executive Officer</td>
              <td className="px-4 py-2 border">10</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">13</td>
              <td className="px-4 py-2 border">Child Development Project Officer</td>
              <td className="px-4 py-2 border">07</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">14</td>
              <td className="px-4 py-2 border">Subordinate Account Service Officer</td>
              <td className="px-4 py-2 border">23</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">15</td>
              <td className="px-4 py-2 border">Nayab Tehasildar</td>
              <td className="px-4 py-2 border">42</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">16</td>
              <td className="px-4 py-2 border">State Tax Inspector</td>
              <td className="px-4 py-2 border">34</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">17</td>
              <td className="px-4 py-2 border">Cooperative Inspector/ Cooperative Extension Officer</td>
              <td className="px-4 py-2 border">44</td>
            </tr>
          </tbody>
        </table>
        <p className="mb-2">
          <strong>Interested Candidates Can Read the Full Notification Before Apply Online</strong>
        </p>
        <p className="mb-2">
          <strong>Important Links:</strong>
        </p>
        <ul className="list-disc mb-2">
          <li>
            <a
              href="https://img.freejobalert.com/uploads/2024/10/Interview-Schedule-Postponed-CGPSC-State-Service-Exam-2023.pdf"
              className="text-blue-500"
            >
              Interview Date Postponed (15-10-2024)
            </a>
          </li>
          <li>
            <a
              href="https://img.freejobalert.com/uploads/2024/10/Interview-Schedule-CGPSC-State-Service-Exam-2023.pdf"
              className="text-blue-500"
            >
              Interview Schedule (04-10-2024)
            </a>
          </li>
          <li>
            <a
              href="https://img.freejobalert.com/uploads/2024/09/Mains-Result-CGPSC-State-Services-Exam-2023.pdf"
              className="text-blue-500"
            >
              Mains Result (30-09-2024)
            </a>
          </li>
          <li>
            <a
              href="https://online.ecgpsconline.in/"
              className="text-blue-500"
            >
              Mains Admit Card (19-06-2024)
            </a>
          </li>
          <li>
            <a
              href="https://psc.cg.gov.in/pdf/NOTIFICATIONS/Suchana_SSME_2023_10062024.PDF"
              className="text-blue-500"
            >
              Mains Exam Date (12-06-2024)
            </a>
          </li>
          <li>
            <a
              href="https://psc.cg.gov.in/pdf/Advertisement/Corrigendum_SSE2023_27052024.PDF"
              className="text-blue-500"
            >
              Corrigendum (30-05-2024)
            </a>
          </li>
          <li>
            <a
              href="https://online.ecgpsconline.in/"
              className="text-blue-500"
            >
              Mains Apply Online (08-05-2024)
            </a>
          </li>
          <li>
            <a
              href="https://psc.cg.gov.in/pdf/NOTIFICATIONS/NOTI_SSME_2023_OA_EXTEND_06052024.PDF"
              className="text-blue-500"
            >
              Mains Re Open Dates (08-05-2024)
            </a>
          </li>
          <li>
            <a
              href="https://psc.cg.gov.in/"
              className="text-blue-500"
            >
              Mains Edit Online Dates (04-05-2024)
            </a>
          </li>
          <li>
            <a
              href="https://psc.cg.gov.in/pdf/NOTIFICATIONS/NOTI_SCRIBE_SSME_2023_12042024.PDF"
              className="text-blue-500"
            >
              Mains Exam Date Notice (13-04-2024)
            </a>
          </li>
          <li>
            <a
              href="https://psc.cg.gov.in/pdf/NOTIFICATIONS/Exam_Schedule_SSME_2023_04042024.PDF"
              className="text-blue-500"
            >
              Mains Exam Schedule (05-04-2024)
            </a>
          </li>
          <li>
            <a
              href="https://psc.cg.gov.in/index.htm"
              className="text-blue-500"
            >
              Mains Apply Online (02-04-2024)
            </a>
          </li>
          <li>
            <a
              href="https://psc.cg.gov.in/pdf/NOTIFICATIONS/Noti_SSME_2023_01042023.PDF"
              className="text-blue-500"
            >
              Mains Notification (02-04-2024)
            </a>
          </li>
          <li>
            <a
              href="https://psc.cg.gov.in/pdf/result/WER_SSPE_2023_21032024.PDF"
              className="text-blue-500"
            >
              Prelims Result (23-03-2024)
            </a>
          </li>
          <li>
            <a
              href="https://psc.cg.gov.in/pdf/Model_Answer/AMA_SSPE_2023_11032024.pdf"
              className="text-blue-500"
            >
              Prelims Amended Model Answer Key (12-03-2024)
            </a>
          </li>
          <li>
            <a
              href="https://psc.cg.gov.in/pdf/Model_Answer/MA_SSP_2023_05032024.pdf"
              className="text-blue-500"
            >
              Prelims Model Answer Key (06-03-2024)
            </a>
          </li>
          <li>
            <a
              href="https://online.ecgpsconline.in/"
              className="text-blue-500"
            >
              Prelims Admit Card (08-02-2024)
            </a>
          </li>
          <li>
            <a
              href="https://psc.cg.gov.in/pdf/NOTIFICATIONS/NOTI_SSPE_2023_18012024.PDF"
              className="text-blue-500"
            >
              Prelims Exam Date Notice (20-01-2024)
            </a>
          </li>
          <li>
            <a
              href="https://psc.cg.gov.in/pdf/NOTIFICATIONS/Exam_Schedule_SSPE_2023_13122023.PDF"
              className="text-blue-500"
            >
              Prelims Exam Schedule (15-12-2023)
            </a>
          </li>
          <li>
            <a
              href="https://psc.cg.gov.in/pdf/NOTIFICATIONS/NOTI_SSPE_2023_01122023.PDF"
              className="text-blue-500"
            >
              Prelims Notification (02-12-2023)
            </a>
          </li>
          <li>
            <a
              href="https://psc.cg.gov.in/pdf/Advertisement/Corrigendum_SSME_2023_29112023.PDF"
              className="text-blue-500"
            >
              Corrigendum (01-12-2023)
            </a>
          </li>
          <li>
            <a
              href="https://psc.cg.gov.in/pdf/NOTIFICATIONS/NOTI_SSPE_2023_12112023.PDF"
              className="text-blue-500"
            >
              Prelims Exam Date Notice (14-11-2023)
            </a>
          </li>
          <li>
            <a
              href="https://psc.cg.gov.in/pdf/NOTIFICATIONS/NOTI_SSPE_2023_07112023.PDF"
              className="text-blue-500"
            >
              Prelims Notification (08-11-2023)
            </a>
          </li>
          <li>
            <a
              href="https://psc.cg.gov.in/pdf/Advertisement/Corrigendum_SSME_2023_29102023.PDF"
              className="text-blue-500"
            >
              Corrigendum (30-10-2023)
            </a>
          </li>
          <li>
            <a
              href="https://psc.cg.gov.in/pdf/Advertisement/Corrigendum_SSME_2023_23102023.PDF"
              className="text-blue-500"
            >
              Corrigendum (24-10-2023)
            </a>
          </li>
          <li>
            <a
              href="https://psc.cg.gov.in/pdf/NOTIFICATIONS/NOTI_SSPE_2023_27092023.PDF"
              className="text-blue-500"
            >
              Prelims Exam Date Notice (29-09-2023)
            </a>
          </li>
          <li>
            <a
              href="https://psc.cg.gov.in/pdf/NOTIFICATIONS/NOTI_SSPE_2023_19092023.PDF"
              className="text-blue-500"
            >
              Prelims Notification (20-09-2023)
            </a>
          </li>
          <li>
            <a
              href="https://psc.cg.gov.in/"
              className="text-blue-500"
            >
              Apply Online (Re-Open)
            </a>
          </li>
          <li>
            <a
              href="https://psc.cg.gov.in/pdf/NOTIFICATIONS/NOTI_SSME_2023_OA_EXTEND_08052024.PDF"
              className="text-blue-500"
            >
              Apply Online (Re Open Dates)
            </a>
          </li>
          <li>
            <a
              href="https://psc.cg.gov.in/pdf/NOTIFICATIONS/NOTI_SSME_2023_OA_EXTEND_08052024.PDF"
              className="text-blue-500"
            >
              Apply Online (Re Open Dates)
            </a>
          </li>
          <li>
            <a
              href="https://psc.cg.gov.in/pdf/NOTIFICATIONS/NOTI_SSME_2023_OA_EXTEND_22042024.PDF"
              className="text-blue-500"
            >
              Apply Online (Re Open Dates)
            </a>
          </li>
          <li>
            <a
              href="https://psc.cg.gov.in/pdf/NOTIFICATIONS/NOTI_SSME_2023_OA_EXTEND_22042024.PDF"
              className="text-blue-500"
            >
              Apply Online (Re Open Dates)
            </a>
          </li>
          <li>
            <a
              href="https://psc.cg.gov.in/pdf/NOTIFICATIONS/NOTI_SSME_2023_OA_EXTEND_22042024.PDF"
              className="text-blue-500"
            >
              Apply Online (Re Open Dates)
            </a>
          </li>
          <li>
            <a
              href="https://psc.cg.gov.in/pdf/NOTIFICATIONS/NOTI_SSME_2023_09042024.PDF"
              className="text-blue-500"
            >
              Apply Online (Re Open Dates)
            </a>
          </li>
          <li>
            <a
              href="https://psc.cg.gov.in/pdf/NOTIFICATIONS/NOTI_SSME_2023_09042024.PDF"
              className="text-blue-500"
            >
              Apply Online (Re Open Dates)
            </a>
          </li>
          <li>
            <a
              href="https://psc.cg.gov.in/pdf/NOTIFICATIONS/NOTI_SSME_2023_09042024.PDF"
              className="text-blue-500"
            >
              Apply Online (Re Open Dates)
            </a>
          </li>
          <li>
            <a
              href="https://psc.cg.gov.in/pdf/NOTIFICATIONS/NOTI_SSME_2023_09042024.PDF"
              className="text-blue-500"
            >
              Apply Online (Re Open Dates)
            </a>
          </li>
          <li>
            <a
              href="https://psc.cg.gov.in/pdf/NOTIFICATIONS/NOTI_SSME_2023_09042024.PDF"
              className="text-blue-500"
            >
              Apply Online (Re Open Dates)
            </a>
          </li>
          <li>
            <a
              href="https://psc.cg.gov.in/pdf/NOTIFICATIONS/NOTI_SSME_2023_09042024.PDF"
              className="text-blue-500"
            >
              Apply Online (Re Open Dates)
            </a>
          </li>
          <li>
            <a
              href="https://psc.cg.gov.in/pdf/NOTIFICATIONS/NOTI_SSME_2023_09042024.PDF"
              className="text-blue-500"
            >
              Apply Online (Re Open Dates)
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}