export default function RecruitmentInfo() {
  // This component displays recruitment information for HSSC TGT 2023.
  // It includes details like post name, date, vacancy, application fee,
  // important dates, qualification, and vacancy details.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        HSSC TGT 2023 Final Result & Cut Off Marks Released
      </h1>
      <p className="mb-2">
        <span className="text-green-500 font-bold">Name of the Post:</span> HSSC TGT
        2023 Final Result & Cut Off Marks Released
      </p>
      <p className="mb-2 text-justify">
        <span className="text-green-500 font-bold">
          Post Date
          <span className="text-black">
            : 21-02-2023
          </span>
        </span>
      </p>
      <p className="mb-2">
        <span className="text-green-500 font-bold">Latest Update:</span> 29-07-2024
      </p>
      <p className="mb-2 text-justify">
        <span className="text-green-500 font-bold">
          Total Vacancy
          <span className="text-black">: </span>
        </span>
        <span className="text-black">7471</span>
      </p>
      <p className="mb-4 text-justify">
        <span className="text-red-500 font-bold">Brief Information:</span> Haryana
        Staff Selection Commission (HSSC) has announced a notification for the
        recruitment of TGT (Group C Services) vacancy. Those Candidates who are
        interested in the vacancy details & completed all eligibility criteria
        can read the Notification & Apply Online.
      </p>

      <h2 className="text-2xl font-bold mb-4">Haryana Staff Selection Commission</h2>
      <table className="border-2 w-full mb-4">
        <tbody>
          <tr>
            <td colSpan={3} className="text-center">
              <p className="text-red-500 font-bold">
                Haryana Staff Selection Commission (HSSC)
              </p>
              <p className="text-pink-500 font-bold">Advt No. 02/2023</p>
              <p className="text-green-500 font-bold">TGT Vacancy 2023</p>
              <p className="text-center">
                <a
                  href="https://www.freejobalert.com"
                  target="_blank"
                  rel="noopener"
                  className="text-blue-500 underline"
                >
                  
                </a>
              </p>
            </td>
          </tr>
          <tr>
            <td colSpan={3} className="text-center">
              <p className="text-red-500 font-bold">Application Fee</p>
              <table className="border-1 w-full mb-2">
                <tbody>
                  <tr>
                    <td rowSpan={2} className="text-center">
                      <p>S.No</p>
                    </td>
                    <td rowSpan={2} className="text-center">
                      <p>Category of Post</p>
                    </td>
                    <td colSpan={2} className="text-center">
                      <p>General</p>
                    </td>
                    <td colSpan={2} className="text-center">
                      <p>SC/ BC candidates of Haryana state only</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <p>Male/ Female</p>
                    </td>
                    <td className="text-center">
                      <p>Female of Haryana Resident only</p>
                    </td>
                    <td className="text-center">
                      <p>Male</p>
                    </td>
                    <td className="text-center">
                      <p>Female</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <p>1</p>
                    </td>
                    <td className="text-center">
                      <p>Cat No. 01 to 18</p>
                    </td>
                    <td className="text-center">
                      <p>Rs. 150/-</p>
                    </td>
                    <td className="text-center">
                      <p>Rs. 75/-</p>
                    </td>
                    <td className="text-center">
                      <p>Rs. 35/-</p>
                    </td>
                    <td className="text-center">
                      <p>Rs. 18/-</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <p>2</p>
                    </td>
                    <td className="text-center">
                      <p>PwD/ Ex-Serviceman of Haryana</p>
                    </td>
                    <td colSpan={4} className="text-center">
                      <p>No charges</p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <ul className="list-disc pl-4">
                <li>Payment Mode: Through e-Challan</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={3} className="text-center">
              <p className="text-red-500 font-bold">Important Dates</p>
              <ul className="list-disc pl-4">
                <li>
                  <span className="text-black">
                    Date of Publication:{" "}
                    <strong className="text-black">21-02-2023</strong>
                  </span>
                </li>
                <li>
                  <span className="text-black">
                    Starting Date for Apply Online & Payment of Fee:{" "}
                    <strong className="text-black">23-02-2023</strong>
                  </span>
                </li>
                <li>
                  <span className="text-black">
                    Last Date to Apply Online:{" "}
                    <strong className="text-black">20-03-2023</strong>
                  </span>
                </li>
                <li>
                  <span className="text-black">
                    Last Date for deposit of fee:{" "}
                    <strong className="text-black">22-03-2023</strong>
                  </span>
                </li>
                <li>
                  Date for Correction of Particulars:{" "}
                  <strong className="text-black">
                    17-03-2023 to 20-03-2023
                  </strong>
                </li>
                <li>
                  Date of Exam:{" "}
                  <strong className="text-black">
                    29-04-2023 & 30-04-2023 (Sunday), 13-05-2023 (Saturday) &
                    14-05-2023 (Sunday)
                  </strong>
                </li>
                <li>
                  Date of Scrutiny:{" "}
                  <strong className="text-black">
                    05, 06, 07, 11 & 12-07-2023
                  </strong>
                </li>
                <li>
                  Date of Scrutiny:{" "}
                  <strong className="text-black">
                    18, 19, 20, 21 & 24, 25, 26-07-2023
                  </strong>
                </li>
                <li>
                  Date of Scrutiny for absent Candidates:{" "}
                  <strong className="text-black">24-08-2023</strong>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={3} className="text-center">
              <p className="text-red-500 font-bold">Age Limit</p>
              <ul className="list-disc pl-4">
                <li>
                  <span className="text-black">
                    Minimum Age: <strong className="text-black">18 Years</strong>
                  </span>
                </li>
                <li>
                  <span className="text-black">
                    Maximum Age: <strong className="text-black">42 Years</strong>
                  </span>
                </li>
                <li>
                  <span className="text-black">
                    Age relaxation is admissible for SC/BC candidates as per
                    rules.
                  </span>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={3} className="text-center">
              <p className="text-red-500 font-bold">Qualification</p>
              <ul className="list-disc pl-4">
                <li className={{ textAlign: "left" }}>
                  Candidates Should Possess Matriculation (Hindi/Sanskrit), Sr
                  Secondary, D.El.Ed, B.El.Ed, Degree (Relevant Discipline),
                  HTET/ STET.
                </li>
                <li>For More Qualification Details Refer the Notification.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={3} className="text-center">
              <p className="text-red-500 font-bold">Vacancy Details</p>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <span className="text-pink-500 font-bold">Cat No</span>
            </td>
            <td className="text-center">
              <span className="text-pink-500 font-bold">Post Name</span>
            </td>
            <td className="text-center">
              <span className="text-pink-500 font-bold">Total</span>
            </td>
          </tr>
          <tr>
            <td className="text-center">1</td>
            <td className="text-center">TGT – (Rest of Haryana)</td>
            <td className="text-center">6130</td>
          </tr>
          <tr>
            <td className="text-center">2</td>
            <td className="text-center">TGT – (Mewat Cadre)</td>
            <td className="text-center">1341</td>
          </tr>
          <tr>
            <td colSpan={3} className="text-center">
              <p className="text-blue-500 font-bold">
                Interested Candidates Can Read the Full Notification Before
                Apply Online
              </p>
            </td>
          </tr>
          <tr>
            <td colSpan={3} className="text-center">
              <p className="text-red-500 font-bold">Important Links</p>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center">
              <span className="text-green-500 font-bold">
                Final Result & Cut Off Marks (29-07-2024)
              </span>
            </td>
            <td className="text-center">
              <a
                href="https://img.freejobalert.com/uploads/2024/07/Final-Result-Cut-Off-Marks-HSSC-TGT-2023.pdf"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center">
              <span className="text-green-500 font-bold">
                Scrutiny Notice for Absent Candidates (18-08-2023)
              </span>
            </td>
            <td className="text-center">
              <a
                href="https://hssc.gov.in/hssccms/uploads/publicnotice/39338-absentee%20Scrutiny%20Notice%2024082023%20m.pdf"
                target="_blank"
                rel="nofollow noopener"
                className="text-blue-500 underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center">
              <span className="text-green-500 font-bold">
                Sanskrit Scrutiny Re-Schedule Notice (07-08-2023)
              </span>
            </td>
            <td className="text-center">
              <a
                href="https://hssc.gov.in/hssccms/uploads/publicnotice/73269-notice%205.8.23.pdf"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center">
              <span className="text-green-500 font-bold">
                Scrutiny Schedule (26-07-2023)
              </span>
            </td>
            <td className="text-center">
              <a
                href="https://hssc.gov.in/hssccms/uploads/publicnotice/62429-Shedule%20of%20Scrutiny%20%2028,29,1,to%204%20july%202023%20%20english%20(1).pdf"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center">
              <span className="text-green-500 font-bold">
                Scrutiny Schedule (13-07-2023)
              </span>
            </td>
            <td className="text-center">
              <a
                href="https://hssc.gov.in/hssccms/uploads/publicnotice/95161-Schedule%20for%20scrutiny%20(1).pdf"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center">
              <span className="text-green-500 font-bold">
                Scrutiny Schedule (06-07-2023)
              </span>
            </td>
            <td className="text-center">
              <a
                href="https://hssc.gov.in/hssccms/uploads/publicnotice/38644-Shedule%20of%20Scrutiny%20%2005-12%20datewise.pdf"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center">
              <span className="text-green-500 font-bold">
                Written Exam Result (03-07-2023)
              </span>
            </td>
            <td className="text-center">
              <a
                href="https://hssc.gov.in/hssccms/uploads/results/22431-22023_tgt_science_sd.pdf"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
              >
                Science
              </a>{" "}
              |{" "}
              <a
                href="https://hssc.gov.in/hssccms/uploads/results/75598-22023_tgt_math_sd.pdf"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
              >
                Mathematics
              </a>{" "}
              |{" "}
              <a
                href="https://hssc.gov.in/hssccms/uploads/results/88020-22023_tgt_social_sd.pdf"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
              >
                Social Studies
              </a>{" "}
              |{" "}
              <a
                href="https://hssc.gov.in/hssccms/uploads/results/15284-22023_tgt_hindi_sd.pdf"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
              >
                Hindi
              </a>{" "}
              |{" "}
              <a
                href="https://hssc.gov.in/hssccms/uploads/results/22431-22023_tgt_science_sd.pdf"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
              >
                TGT Science
              </a>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center">
              <span className="text-green-500 font-bold">
                Written Exam Result (27-06-2023)
              </span>
            </td>
            <td className="text-center">
              <a
                href="https://hssc.gov.in/hssccms/uploads/results/22339-22023_tgt_homescience_sd.pdf"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
              >
                Home Science
              </a>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center">
              <span className="text-green-500 font-bold">
                Written Exam Result (22-06-2023)
              </span>
            </td>
            <td className="text-center">
              <a
                href="https://hssc.gov.in/hssccms/uploads/results/22189-22023_tgt_arts_sd.pdf"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
              >
                Arts
              </a>{" "}
              |{" "}
              <a
                href="https://hssc.gov.in/hssccms/uploads/results/78642-22023_tgt_music_sd.pdf"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
              >
                Music
              </a>{" "}
              |{" "}
              <a
                href="https://hssc.gov.in/hssccms/uploads/results/5438-22023_tgt_physical_education_sd.pdf"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
              >
                Physical Education
              </a>{" "}
              |{" "}
              <a
                href="https://hssc.gov.in/hssccms/uploads/results/48386-22023_tgt_sanskrit_sd.pdf"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
              >
                Sanskrit
              </a>{" "}
              |{" "}
              <a
                href="https://hssc.gov.in/hssccms/uploads/results/48402-22023_tgt_urdu_sd.pdf"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
              >
                Urdu
              </a>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center">
              <span className="text-green-500 font-bold">
                Answer Key (18-05-2023)
              </span>
            </td>
            <td className="text-center">
              <a
                href="https://img.freejobalert.com/uploads/2023/05/Answer-Key-Notice-HSSC-TGT-Posts.pdf"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
              >
                Notice
              </a>{" "}
              |{" "}
              <a
                href="https://hssc.gov.in/publicnotice"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center">
              <span className="text-green-500 font-bold">
                Replaced Exam Center (16-05-2023)
              </span>
            </td>
            <td className="text-center">
              <a
                href="https://img.freejobalert.com/uploads/2023/05/Replaced-Exam-Center-Notice-HSSC-TGT-Posts.pdf"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center">
              <span className="text-green-500 font-bold">
                Admit Card (15-05-2023)
              </span>
            </td>
            <td className="text-center">
              <a
                href="https://hssc.gov.in/index_new.php#reloaded"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center">
              <span className="text-green-500 font-bold">
                Admit Card Notice (09-05-2023)
              </span>
            </td>
            <td className="text-center">
              <a
                href="https://hssc.gov.in/hssccms/uploads/publicnotice/48640-Notice%20to%20download%20admit%20card.pdf"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center">
              <span className="text-green-500 font-bold">
                Answer Key Released (06-05-2023)
              </span>
            </td>
            <td className="text-center">
              <a
                href="https://hssc.gov.in/publicnotice"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center">
              <span className="text-green-500 font-bold">
                Admit Card (27-04-2023)
              </span>
            </td>
            <td className="text-center">
              <a
                href="https://adv22023.hryssc.in/StaticPages/Login.aspx"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center">
              <span className="text-green-500 font-bold">
                Admit Card Notice (26-04-2023)
              </span>
            </td>
            <td className="text-center">
              <a
                href="https://hssc.gov.in/hssccms/uploads/publicnotice/91154-Notice%20for%20Admit%20Card.pdf"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center">
              <span className="text-green-500 font-bold">
                Reschedule Exam Date (12-04-2023)
              </span>
            </td>
            <td className="text-center">
              <a
                href="https://img.freejobalert.com/uploads/2023/04/Re-schedule-HaryanaJobs-HSSC-TGT.pdf"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center">
              <span className="text-green-500 font-bold">
                Written Exam Date (23-03-2023)
              </span>
            </td>
            <td className="text-center">
              <a
                href="https://img.freejobalert.com/uploads/2023/03/Exam-Date-HSSC-TGT-Posts.pdf"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center">
              <span className="text-green-500 font-bold">
                Correction Dates Notice (17-03-2023)
              </span>
            </td>
            <td className="text-center">
              <a
                href="https://www.hssc.gov.in/hssccms/uploads/publicnotice/12635-Public%20notice%20%20for%20correction%20in%20TGT%20Post.pdf"
                target="_blank"
                rel="nofollow noopener"
                className="text-blue-500 underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center">
              <span className="text-green-500 font-bold">
                Last Date Extended Notice (16-03-2023)
              </span>
            </td>
            <td className="text-center">
              <a
                href="https://img.freejobalert.com/uploads/2023/03/date-of-Extention_HSSC-TGT_.pdf"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center">
              <span className="text-green-500 font-bold">
                Syllabus Notice (15-03-2023)
              </span>
            </td>
            <td className="text-center">
              <a
                href="https://hssc.gov.in/tgt.php"
                target="_blank"
                rel="nofollow noopener"
                className="text-blue-500 underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center">
              <span className="text-green-500 font-bold">
                Apply Online (24-02-2023)
              </span>
            </td>
            <td className="text-center">
              <a
                href="https://adv22023.hryssc.in/StaticPages/HomePage.aspx"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center">
              <span className="text-green-500 font-bold">
                Notification
              </span>
            </td>
            <td className="text-center">
              <a
                href="https://img.freejobalert.com/uploads/2023/02/Notification-HSSC-TGT-Vacancy.pdf"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center">
              <span className="text-green-500 font-bold">
                Official Website
              </span>
            </td>
            <td className="text-center">
              <a
                href="http://hssc.gov.in/"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
              >
                Click Here
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}