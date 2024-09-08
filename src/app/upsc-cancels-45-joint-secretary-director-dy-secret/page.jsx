export default function RecruitmentInfo() {
  // This component displays recruitment information for various UPSC exams. 
  // It includes a title, post details, brief information, application fee, important dates, and vacancy details. 
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">UPSC Recruitment Information</h1>
      {/* Recruitment Information Section 1 */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2" id="CGS-2025">Combined Geo Scientist Exam 2025</h2>
        <p className="mb-1">
          <strong className="text-green-500">Name of the Post:</strong> UPSC Combined Geo-Scientist Exam 2025 Online Form
        </p>
        <p className="mb-1">
          <strong className="text-green-500">Post Date:</strong> 04-09-2024
        </p>
        <p className="mb-1">
          <strong className="text-green-500">Total Vacancy: </strong> 85
        </p>
        <p className="mb-2">
          <strong className="text-red-500">Brief Information:</strong> Union Public Service Commission (UPSC) has given a notification for the recruitment of Combined Geo-Scientist Examination 2025. Those Candidates who are interested in the vacancy details &amp; completed all eligibility criteria can read the Notification &amp; Apply Online.
        </p>
        {/* Table */}
        <table className="w-full text-center border border-gray-400 mb-4">
          <thead>
            <tr>
              <th className="border border-gray-400 p-2" colSpan="3">
                <span className="text-red-500 font-bold">Union Public Service Commission (UPSC)</span>
              </th>
            </tr>
            <tr>
              <th className="border border-gray-400 p-2" colSpan="3">
                <span className="text-pink-500 font-bold">Advt No. 01/2025 GEOL</span>
              </th>
            </tr>
            <tr>
              <th className="border border-gray-400 p-2" colSpan="3">
                <strong className="text-green-500">Combined Geo-Scientist Exam 2025</strong>
              </th>
            </tr>
            <tr>
              <th className="border border-gray-400 p-2">
                <span className="text-pink-500 font-bold">SI No</span>
              </th>
              <th className="border border-gray-400 p-2">
                <span className="text-pink-500 font-bold">Post Name</span>
              </th>
              <th className="border border-gray-400 p-2">
                <span className="text-pink-500 font-bold">Total</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 p-2">1.</td>
              <td className="border border-gray-400 p-2">Geologist, Group A</td>
              <td className="border border-gray-400 p-2">16</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">2.</td>
              <td className="border border-gray-400 p-2">Geophysicist, Group A</td>
              <td className="border border-gray-400 p-2">06</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">3.</td>
              <td className="border border-gray-400 p-2">Chemist. Group A</td>
              <td className="border border-gray-400 p-2">02</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">4.</td>
              <td className="border border-gray-400 p-2">Scientist ‘B’(Hydrogeology), Group ‘A’</td>
              <td className="border border-gray-400 p-2">13</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">5.</td>
              <td className="border border-gray-400 p-2">Scientist ‘B’(Chemical ) Group ‘A’</td>
              <td className="border border-gray-400 p-2">01</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">6.</td>
              <td className="border border-gray-400 p-2">Scientist ‘B’(Geophysics) Group ‘A’</td>
              <td className="border border-gray-400 p-2">01</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">7.</td>
              <td className="border border-gray-400 p-2">Assistant Hydrogeologist, Group ‘B’</td>
              <td className="border border-gray-400 p-2">31</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">8.</td>
              <td className="border border-gray-400 p-2">Assistant Chemist, Group ‘B’</td>
              <td className="border border-gray-400 p-2">04</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">9.</td>
              <td className="border border-gray-400 p-2">Assistant Geophysicist, Group ‘B’</td>
              <td className="border border-gray-400 p-2">11</td>
            </tr>
          </tbody>
        </table>
        <p className="text-blue-500 font-bold mb-2">
          Interested Candidates Can Read the Full Notification Before Apply Online
        </p>
        <p className="text-red-500 font-bold mb-2">
          Important Links
        </p>
        <ul className="mb-4">
          <li>
            <strong className="text-green-500">Apply Online</strong>
            <a href="https://upsconline.nic.in/upsc/OTRP/index.php" className="text-blue-500">Click Here</a>
          </li>
          <li>
            <strong className="text-green-500">Notification </strong>
            <a href="https://img.freejobalert.com/uploads/2024/09/Notification-UPSC-CGS-2025.pdf" className="text-blue-500">Click Here</a>
          </li>
          <li>
            <strong className="text-green-500">Selection Process</strong>
            <a href="https://www.freejobalert.com/upsc-geologists-exam-selection-process/25603/" className="text-blue-500">Click Here</a>
          </li>
          <li>
            <strong className="text-green-500">Eligibility</strong>
            <a href="https://www.freejobalert.com/upsc-geologist-exam-eligibility/25594/" className="text-blue-500">Click Here</a>
          </li>
          <li>
            <strong className="text-green-500">Exam Pattern</strong>
            <a href="https://www.freejobalert.com/upsc-geologists-exam-pattern/5194/" className="text-blue-500">Click Here</a>
          </li>
          <li>
            <strong className="text-green-500">Syllabus</strong>
            <a href="https://www.freejobalert.com/upsc-geologist-exam-syllabus/25598/" className="text-blue-500">Click Here</a>
          </li>
          <li>
            <strong className="text-green-500"> Official Website</strong>
            <a href="https://upsc.gov.in/" className="text-blue-500">Click Here</a>
          </li>
        </ul>
        {/* Table */}
        <table className="w-full text-center border border-gray-400 mb-4">
          <thead>
            <tr>
              <th className="border border-gray-400 p-2" colSpan="3">
                <span className="text-red-500 font-bold">Union Public Service Commission (UPSC)</span>
              </th>
            </tr>
            <tr>
              <th className="border border-gray-400 p-2" colSpan="3">
                <span className="text-pink-500 font-bold">Advt No. 11/2024 <br/></span>
              </th>
            </tr>
            <tr>
              <th className="border border-gray-400 p-2" colSpan="3">
                <strong className="text-green-500">Various Vacancy 2024</strong>
              </th>
            </tr>
            <tr>
              <th className="border border-gray-400 p-2">
                <span className="text-pink-500 font-bold">Post Name</span>
              </th>
              <th className="border border-gray-400 p-2">
                <span className="text-pink-500 font-bold">Total</span>
              </th>
              <th className="border border-gray-400 p-2">
                <span className="text-pink-500 font-bold">Qualification</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 p-2">Deputy<br/>
                Superintending Archaeologist
              </td>
              <td className="border border-gray-400 p-2">67</td>
              <td className="border border-gray-400 p-2">PG Degree /PG Diploma</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">Cabin Safety Inspector</td>
              <td className="border border-gray-400 p-2">15</td>
              <td className="border border-gray-400 p-2">10+2&nbsp;</td>
            </tr>
          </tbody>
        </table>
        <p className="text-blue-500 font-bold mb-2">
          Interested Candidates Can Read the Full Notification Before Apply Online
        </p>
        <p className="text-red-500 font-bold mb-2">
          Important Links
        </p>
        <ul className="mb-4">
          <li>
            <strong className="text-green-500">Apply Online</strong>
            <a href="https://upsconline.nic.in/ora/VacancyNoticePub.php" className="text-blue-500">Click Here</a>
          </li>
          <li>
            <strong className="text-green-500">Notification </strong>
            <a href="https://img.freejobalert.com/uploads/2024/08/Notifiucation-UPSC-Joint-Secretary-and-Deputy-Secretary-level-Officer-Posts-1.pdf" className="text-blue-500">Click Here</a>
          </li>
          <li>
            <strong className="text-green-500"> Official Website</strong>
            <a href="https://upsc.gov.in/" className="text-blue-500">Click Here</a>
          </li>
        </ul>
      </div>
      {/* Recruitment Information Section 2 */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2" id="Joint-Secretary">Joint Secretary &amp; Director/Deputy Secretary level Officer 2024</h2>
        <p className="mb-1">
          <strong className="text-green-500">Name of the Post:</strong> UPSC Joint Secretary &amp; Director/Deputy Secretary level Officer 2024 Notification Cancelled&nbsp; <br/>
        </p>
        <p className="mb-1">
          <strong className="text-green-500">Post Date: </strong> 19-08-2024
        </p>
        <p className="mb-1">
          <strong className="text-green-500">Latest Update:</strong> 22-08-2024
        </p>
        <p className="mb-1">
          <strong className="text-green-500">Total Vacancy: </strong> 45
        </p>
        <p className="mb-2">
          <strong className="text-red-500">Brief Information:</strong> Union Public Service Commission (UPSC) has given an employment notification for the recruitment of Joint Secretary &amp; Director/Deputy Secretary level Officer Vacancy. Those Candidates who are interested in the vacancy details &amp; completed all eligibility criteria can read the Notification &amp; Apply Online.
        </p>
        {/* Table */}
        <table className="w-full text-center border border-gray-400 mb-4">
          <thead>
            <tr>
              <th className="border border-gray-400 p-2" colSpan="3">
                <span className="text-red-500 font-bold">&nbsp;Union Public Service Commission (UPSC)</span>
              </th>
            </tr>
            <tr>
              <th className="border border-gray-400 p-2" colSpan="3">
                <span className="text-pink-500 font-bold">Advt No. 54/2024 <br/></span>
              </th>
            </tr>
            <tr>
              <th className="border border-gray-400 p-2" colSpan="3">
                <strong className="text-green-500">Various Vacancy 2024</strong>
              </th>
            </tr>
            <tr>
              <th className="border border-gray-400 p-2">
                <span className="text-pink-500 font-bold">Post Name</span>
              </th>
              <th className="border border-gray-400 p-2">
                <span className="text-pink-500 font-bold">Total</span>
              </th>
              <th className="border border-gray-400 p-2">
                <span className="text-pink-500 font-bold">Qualification</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 p-2">Joint Secretary</td>
              <td className="border border-gray-400 p-2">10</td>
              <td className="border border-gray-400 p-2">Degree, BE/ B.Tech, PG Degree, M.Sc, MBA, PGDM, Masters Degree, ME/ M.Tech</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">Director/ Deputy Secretary</td>
              <td className="border border-gray-400 p-2">35</td>
              <td className="border border-gray-400 p-2">CA, CS, ICWA, CMA, LLB, Degree, BE/ B.Tech, Masters Degree, M.Sc, M.Phil, Ph.D</td>
            </tr>
          </tbody>
        </table>
        <p className="text-blue-500 font-bold mb-2">
          Interested Candidates Can Read the Full Notification Before Apply Online
        </p>
        <p className="text-red-500 font-bold mb-2">
          Important Links
        </p>
        <ul className="mb-4">
          <li>
            <strong className="text-green-500">Notification Cancelled&nbsp; (22-08-2024)<br/></strong>
            <a href="https://img.freejobalert.com/uploads/2024/08/Cancellation-Notice-UPSC-Joint-Secretary-Director-Deputy-Secretary-level-Officer-2024.pdf" className="text-blue-500">Click Here</a><br/>
          </li>
          <li>
            <strong className="text-green-500">Apply Online</strong>
            <a href="https://upsconline.nic.in/oralateral/VacancyNoticePub.php" className="text-blue-500">Click Here</a>
          </li>
          <li>
            <strong className="text-green-500">Notification </strong>
            <a href="https://upsc.gov.in/" className="text-blue-500">Click Here</a>
          </li>
          <li>
            <strong className="text-green-500"> Official Website</strong>
            <a href="https://upsc.gov.in/" className="text-blue-500">Click Here</a>
          </li>
        </ul>
      </div>
      {/* Recruitment Information Section 3 */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2" id="Asst-Director-Grade-II">Various Vacancy 2024</h2>
        <p className="mb-1">
          <strong className="text-green-500">Name of the Post:</strong> UPSC Various Vacancy 2024 Online Form <br/>
        </p>
        <p className="mb-1">
          <strong className="text-green-500">Post Date: </strong> 25-05-2024
        </p>
        <p className="mb-1">
          <strong className="text-green-500">Latest Update:</strong> 05-06-2024
        </p>
        <p className="mb-1">
          <strong className="text-green-500">Total Vacancy: </strong> 312
        </p>
        <p className="mb-2">
          <strong className="text-red-500">Brief Information:</strong> Union Public Service Commission (UPSC) has published a notification for the recruitment of Specialist Grade III, Assistant Director Grade-II, Assistant Professor &amp; Other Vacancy. Those Candidates who are interested in the vacancy details &amp; completed all eligibility criteria can read the Notification &amp; Apply Online.
        </p>
        {/* Table */}
        <table className="w-full text-center border border-gray-400 mb-4">
          <thead>
            <tr>
              <th className="border border-gray-400 p-2" colSpan="3">
                <span className="text-red-500 font-bold">&nbsp;Union Public Service Commission (UPSC)</span>
              </th>
            </tr>
            <tr>
              <th className="border border-gray-400 p-2" colSpan="3">
                <span className="text-pink-500 font-bold">Advt No. 10/2024 <br/></span>
              </th>
            </tr>
            <tr>
              <th className="border border-gray-400 p-2" colSpan="3">
                <strong className="text-green-500">Various Vacancy 2024</strong>
              </th>
            </tr>
            <tr>
              <th className="border border-gray-400 p-2">
                <span className="text-pink-500 font-bold">Post Name</span>
              </th>
              <th className="border border-gray-400 p-2">
                <span className="text-pink-500 font-bold">Total</span>
              </th>
              <th className="border border-gray-400 p-2">
                <span className="text-pink-500 font-bold">Qualification</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 p-2">Deputy Superintending Archaeological Chemist in Archaeological</td>
              <td className="border border-gray-400 p-2">04</td>
              <td className="border border-gray-400 p-2">Degree/PG (Chemistry)</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">Deputy Superintending Archaeologist in Archaeological</td>
              <td className="border border-gray-400 p-2">67</td>
              <td className="border border-gray-400 p-2">PG (Archaeology/Indian History)</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">Civil Hydrographic officer, Integrated Headquarters (Navy), Directorate of Civilian Personnel</td>
              <td className="border border-gray-400 p-2">04</td>
              <td className="border border-gray-400 p-2">Degree/PG(Relevant Engg)</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">Specialist Grade III Assistant Professor (Forensic Medicine)</td>
              <td className="border border-gray-400 p-2">06</td>
              <td className="border border-gray-400 p-2">MBBS</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">Specialist Grade III Assistant Professor (General Medicine)</td>
              <td className="border border-gray-400 p-2">06</td>
              <td className="border border-gray-400 p-2">MBBS</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">Specialist Grade III Assistant Professor (Paediatrics)</td>
              <td className="border border-gray-400 p-2">04</td>
              <td className="border border-gray-400 p-2">MBBS, MD/DCH</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">Specialist Grade III Assistant Professor (Anesthesia)</td>
              <td className="border border-gray-400 p-2">02</td>
              <td className="border border-gray-400 p-2">MBBS, MD/DNB (Anesthesia)</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">Specialist Grade III Assistant Professor (Radiodiagnosis)</td>
              <td className="border border-gray-400 p-2">04</td>
              <td className="border border-gray-400 p-2">MBBS, MD/DNB (Radiodiagnosis)</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">Specialist Grade III Assistant Professor (Surgery)</td>
              <td className="border border-gray-400 p-2">04</td>
              <td className="border border-gray-400 p-2">MBBS, MS/DNB (General Surgery)</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">Specialist Grade III Assistant Professor (Ophthalmology)</td>
              <td className="border border-gray-400 p-2">04</td>
              <td className="border border-gray-400 p-2">MBBS, MS/DNB (Ophthalmology)</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">Specialist Grade III Assistant Professor (ENT)</td>
              <td className="border border-gray-400 p-2">04</td>
              <td className="border border-gray-400 p-2">MBBS, MS/DNB (ENT)</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">Specialist Grade III Assistant Professor (Gynecology)</td>
              <td className="border border-gray-400 p-2">04</td>
              <td className="border border-gray-400 p-2">MBBS, MS/DNB (Obstetrics & Gynecology)</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">Specialist Grade III Assistant Professor (Dermatology)</td>
              <td className="border border-gray-400 p-2">02</td>
              <td className="border border-gray-400 p-2">MBBS, MD/DNB (Dermatology)</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">Assistant Director Grade-II (Librarian)</td>
              <td className="border border-gray-400 p-2">08</td>
              <td className="border border-gray-400 p-2">Master’s Degree in Library Science/Documentation Science</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">Assistant Director Grade-II (Psychology)</td>
              <td className="border border-gray-400 p-2">10</td>
              <td className="border border-gray-400 p-2">Masters/Ph.D (Psychology)</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">Assistant Director Grade-II (Sociology)</td>
              <td className="border border-gray-400 p-2">12</td>
              <td className="border border-gray-400 p-2">Masters/Ph.D (Sociology)</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">Assistant Director Grade-II (Economics)</td>
              <td className="border border-gray-400 p-2">08</td>
              <td className="border border-gray-400 p-2">Masters/Ph.D (Economics)</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">Assistant Director Grade-II (Geography)</td>
              <td className="border border-gray-400 p-2">12</td>
              <td className="border border-gray-400 p-2">Masters/Ph.D (Geography)</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">Assistant Director Grade-II (Political Science)</td>
              <td className="border border-gray-400 p-2">10</td>
              <td className="border border-gray-400 p-2">Masters/Ph.D (Political Science)</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">Assistant Director Grade-II (History)</td>
              <td className="border border-gray-400 p-2">10</td>
              <td className="border border-gray-400 p-2">Masters/Ph.D (History)</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">Assistant Director Grade-II (Hindi)</td>
              <td className="border border-gray-400 p-2">06</td>
              <td className="border border-gray-400 p-2">Masters/Ph.D (Hindi)</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">Assistant Director Grade-II (English)</td>
              <td className="border border-gray-400 p-2">08</td>
              <td className="border border-gray-400 p-2">Masters/Ph.D (English)</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">Assistant Director Grade-II (Anthropology)</td>
              <td className="border border-gray-400 p-2">12</td>
              <td className="border border-gray-400 p-2">Masters/Ph.D (Anthropology)</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">Assistant Director Grade-II (Statistics)</td>
              <td className="border border-gray-400 p-2">12</td>
              <td className="border border-gray-400 p-2">Masters/Ph.D (Statistics)</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">Assistant Director Grade-II (Mathematics)</td>
              <td className="border border-gray-400 p-2">08</td>
              <td className="border border-gray-400 p-2">Masters/Ph.D (Mathematics)</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">Assistant Director Grade-II (Computer Science)</td>
              <td className="border border-gray-400 p-2">12</td>
              <td className="border border-gray-400 p-2">Masters/Ph.D (Computer Science)</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">Assistant Director Grade-II (Law)</td>
              <td className="border border-gray-400 p-2">08</td>
              <td className="border border-gray-400 p-2">LLB</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">Assistant Director Grade-II (Finance)</td>
              <td className="border border-gray-400 p-2">12</td>
              <td className="border border-gray-400 p-2">CA/ICWA/CMA</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">Assistant Director Grade-II (Public Administration)</td>
              <td className="border border-gray-400 p-2">10</td>
              <td className="border border-gray-400 p-2">Masters/Ph.D (Public Administration)</td>
            </tr>
          </tbody>
        </table>
        <p className="text-blue-500 font-bold mb-2">
          Interested Candidates Can Read the Full Notification Before Apply Online
        </p>
        <p className="text-red-500 font-bold mb-2">
          Important Links
        </p>
        <ul className="mb-4">
          <li>
            <strong className="text-green-500">Apply Online</strong>
            <a href="https://upsconline.nic.in/oralateral/VacancyNoticePub.php" className="text-blue-500">Click Here</a>
          </li>
          <li>
            <strong className="text-green-500">Notification </strong>
            <a href="https://img.freejobalert.com/uploads/2024/05/Notification-UPSC-Specialist-Grade-III-Assistant-Professor-and-Other-Vacancy-2024.pdf" className="text-blue-500">Click Here</a>
          </li>
          <li>
            <strong className="text-green-500"> Official Website</strong>
            <a href="https://upsc.gov.in/" className="text-blue-500">Click Here</a>
          </li>
        </ul>
      </div>
    </div>
  );
}