export default function RecruitmentInformation() {
  // This component displays recruitment information for National Housing Bank,
  // including job postings, application details, important dates, and vacancy details.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">National Housing Bank Recruitment</h1>
      {/* Section 1: General Manager */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2" id="General-Manager">General Manager, Asst Manager &amp; Other Posts</h2>
        <p className="mb-2">
          <strong className="font-bold text-green-500">Name of the Post:</strong> National Housing Bank Assistant Manager (Scale-I) (Generalist) 2024 Online Exam Call Letter Download
        </p>
        <p className="mb-2">
          <strong className="font-bold text-green-500">Post Date:</strong> 12-07-2024
        </p>
        <p className="mb-2">
          <strong className="font-bold text-green-500">Latest Update:</strong> 23-08-2024
        </p>
        <p className="mb-2">
          <strong className="font-bold text-green-500">Total Vacancy:</strong> 48
        </p>
        <p className="mb-4">
          <strong className="font-bold text-red-500">Brief Information:</strong> National Housing Bank has given an employment Notification for the recruitment of General Manager (Scale – VII), Assistant General Manager (Scale V), Dy. Manager (Scale – II), Assistant Manager (Scale-I) &amp; Other Vacancy. Those Candidates who are interested in the vacancy details &amp; completed all eligibility criteria can read the Notification &amp; Apply Online.
        </p>
        {/* Table 1: General Manager details */}
        <table className="w-full border-collapse border border-gray-400 mb-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left font-bold text-gray-700">Sl No</th>
              <th className="px-4 py-2 text-left font-bold text-gray-700">Post Name</th>
              <th className="px-4 py-2 text-left font-bold text-gray-700">Total</th>
              <th className="px-4 py-2 text-left font-bold text-gray-700">Age Limit (as on 01-07-2024)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 text-center">01</td>
              <td className="px-4 py-2 text-center">General Manager (Scale – VII)</td>
              <td className="px-4 py-2 text-center">01</td>
              <td className="px-4 py-2 text-center">40- 55 Years</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">02</td>
              <td className="px-4 py-2 text-center">Assistant General Manager (Scale V)</td>
              <td className="px-4 py-2 text-center">01</td>
              <td className="px-4 py-2 text-center">32- 55 Years</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">03</td>
              <td className="px-4 py-2 text-center">Dy. Manager (Scale – II)</td>
              <td className="px-4 py-2 text-center">03</td>
              <td className="px-4 py-2 text-center">23-32 Years</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">04</td>
              <td className="px-4 py-2 text-center">Assistant Manager (Scale-I) (Generalist)</td>
              <td className="px-4 py-2 text-center">18</td>
              <td className="px-4 py-2 text-center">21-30 Years</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center" colSpan="4">Contractual Posts</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">05</td>
              <td className="px-4 py-2 text-center">Chief Economist</td>
              <td className="px-4 py-2 text-center">01</td>
              <td className="px-4 py-2 text-center">62 Years</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">06</td>
              <td className="px-4 py-2 text-center">Senior Project Finance Officer</td>
              <td className="px-4 py-2 text-center">10</td>
              <td className="px-4 py-2 text-center">40-59 Years</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">07</td>
              <td className="px-4 py-2 text-center">Project Finance Officer</td>
              <td className="px-4 py-2 text-center">12</td>
              <td className="px-4 py-2 text-center">35-59 Years</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">08</td>
              <td className="px-4 py-2 text-center">Protocol Officer-Delhi</td>
              <td className="px-4 py-2 text-center">01</td>
              <td className="px-4 py-2 text-center">50-62 Years</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">09</td>
              <td className="px-4 py-2 text-center">Application Developer</td>
              <td className="px-4 py-2 text-center">01</td>
              <td className="px-4 py-2 text-center">23-32 Years</td>
            </tr>
          </tbody>
        </table>
        <p className="mb-2">For more Post, Qualification &amp; Age Details Refer the Notification</p>
        <p className="mb-2">
          <span className="text-blue-500">Interested Candidates Can Read the Full Notification Before Apply Online</span>
        </p>
        {/* Table 2: General Manager links */}
        <table className="w-full border-collapse border border-gray-400 mb-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left font-bold text-gray-700" colSpan="2">Important Links</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 text-center">
                <strong className="font-bold text-green-500">Online Exam Call Letter (23-08-2024)</strong>
              </td>
              <td className="px-4 py-2 text-center">
                <a href="https://ibpsonline.ibps.in/nhbvpjun24/oecla_aug24/login.php?appid=9bbec8d724b0b15f1c3131f687b17d8d" className="text-blue-500" target="_blank" rel="noopener noreferrer">
                  Assistant Manager (Scale-I) (Generalist)
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">
                <strong className="font-bold text-green-500">Apply Online</strong>
              </td>
              <td className="px-4 py-2 text-center">
                <a href="https://ibpsonline.ibps.in/nhbvpjun24/" className="text-blue-500" target="_blank" rel="noopener noreferrer">
                  Click Here
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">
                <strong className="font-bold text-green-500">Notification</strong>
              </td>
              <td className="px-4 py-2 text-center">
                <a href="https://img.freejobalert.com/uploads/2024/07/Notification-National-Housing-Bank-Various-Vacancy.pdf" className="text-blue-500" target="_blank" rel="noopener noreferrer">
                  Click Here
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">
                <strong className="font-bold text-green-500">Official Website</strong>
              </td>
              <td className="px-4 py-2 text-center">
                <a href="https://www.nhb.org.in/" className="text-blue-500" target="_blank" rel="noopener noreferrer">
                  Click Here
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Section 2: Assistant Manager */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2" id="Assistant-Manager">Assistant Manager &amp; Other Posts</h2>
        <p className="mb-2">
          <strong className="font-bold text-green-500">Name of the Post:</strong> National Housing Bank Various Vacancy 2023 Online Exam Admit Card Download
        </p>
        <p className="mb-2">
          <strong className="font-bold text-green-500">Post Date:</strong> 28-09-2023
        </p>
        <p className="mb-2">
          <strong className="font-bold text-green-500">Latest Update:</strong> 19-12-2023
        </p>
        <p className="mb-2">
          <strong className="font-bold text-green-500">Total Vacancy:</strong> 43
        </p>
        <p className="mb-4">
          <strong className="font-bold text-red-500">Brief Information:</strong> National Housing Bank has announced a Notification for the recruitment of Deputy General Manager, Assistant General Manager, Dy. General Manager,Dy. Manager, Assistant Manager &amp; Other Contractual Post. Those Candidates who are interested in the vacancy details &amp; completed all eligibility criteria can read the Notification &amp; Apply Online.
        </p>
        {/* Table 3: Assistant Manager details */}
        <table className="w-full border-collapse border border-gray-400 mb-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left font-bold text-gray-700">Sl No</th>
              <th className="px-4 py-2 text-left font-bold text-gray-700">Post Name</th>
              <th className="px-4 py-2 text-left font-bold text-gray-700">Total</th>
              <th className="px-4 py-2 text-left font-bold text-gray-700">Qualification (as on 01-10-2022)</th>
              <th className="px-4 py-2 text-left font-bold text-gray-700">Age Limit (as on 01-10-2022)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 text-center">1</td>
              <td className="px-4 py-2 text-center">General Manager (Scale – VII)</td>
              <td className="px-4 py-2 text-center">01</td>
              <td className="px-4 py-2 text-center">Graduate in any discipline</td>
              <td className="px-4 py-2 text-center">40-45 Years</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">2</td>
              <td className="px-4 py-2 text-center">Deputy General Manager (Scale – VI)</td>
              <td className="px-4 py-2 text-center">01</td>
              <td className="px-4 py-2 text-center">Chartered Accountant</td>
              <td className="px-4 py-2 text-center">40 – 45 Years</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">3</td>
              <td className="px-4 py-2 text-center">Assistant General Manager (Scale V)</td>
              <td className="px-4 py-2 text-center">01</td>
              <td className="px-4 py-2 text-center">Post Graduate degree in Economics. Desirable: M.Phil., Ph.D</td>
              <td className="px-4 py-2 text-center">32-50 Years</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">4</td>
              <td className="px-4 py-2 text-center">Dy. Manager (Scale – II)</td>
              <td className="px-4 py-2 text-center">04</td>
              <td className="px-4 py-2 text-center">Post Graduate degree in Economics.<br/> Desirable: M.Phil., Ph.D</td>
              <td className="px-4 py-2 text-center">23-32 Years</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">5</td>
              <td className="px-4 py-2 text-center">Assistant Manager (Scale-I)</td>
              <td className="px-4 py-2 text-center">17</td>
              <td className="px-4 py-2 text-center">Degree (Any discipline)</td>
              <td className="px-4 py-2 text-center">21-30 Years</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">6</td>
              <td className="px-4 py-2 text-center">Contractual Post</td>
              <td className="px-4 py-2 text-center">19</td>
              <td className="px-4 py-2 text-center">PG (Economics, Monetary Economics /Econometrics)</td>
              <td className="px-4 py-2 text-center">62 Years</td>
            </tr>
          </tbody>
        </table>
        <p className="mb-2">For more Post, Qualification &amp; Age Details Refer the Notification</p>
        <p className="mb-2">
          <span className="text-blue-500">Interested Candidates Can Read the Full Notification Before Apply Online</span>
        </p>
        {/* Table 4: Assistant Manager links */}
        <table className="w-full border-collapse border border-gray-400 mb-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left font-bold text-gray-700" colSpan="2">Important Links</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 text-center">
                <strong className="font-bold text-green-500">Online Exam Admit Card (19-12-2023)</strong>
              </td>
              <td className="px-4 py-2 text-center">
                <a href="https://ibpsonline.ibps.in/nhbsep23/oecla_dec23/login.php?appid=e962f8a1532c8c161569628c6c8044c7" className="text-blue-500" target="_blank" rel="noopener noreferrer">
                  Click Here
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">
                <strong className="font-bold text-green-500">Apply Online</strong>
              </td>
              <td className="px-4 py-2 text-center">
                <a href="https://ibpsonline.ibps.in/nhbsep23/" className="text-blue-500" target="_blank" rel="noopener noreferrer">
                  Click Here
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">
                <strong className="font-bold text-green-500">Notification</strong>
              </td>
              <td className="px-4 py-2 text-center">
                <a href="https://img.freejobalert.com/uploads/2023/09/Notification-NHB-various-posts.pdf" className="text-blue-500" target="_blank" rel="noopener noreferrer">
                  Click Here
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">
                <strong className="font-bold text-green-500">Official Website</strong>
              </td>
              <td className="px-4 py-2 text-center">
                <a href="https://nhb.org.in/en/" className="text-blue-500" target="_blank" rel="noopener noreferrer">
                  Click Here
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Section 3: ASST-MANGER */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2" id="ASST-MANGER">Asst Manager (Scale I)</h2>
        <p className="mb-2">
          <strong className="font-bold text-green-500">Name of the Post:</strong> National Housing Bank Asst Manager (Scale I) 2022 Online Exam Result Released
        </p>
        <p className="mb-2">
          <strong className="font-bold text-green-500">Post Date:</strong> 27-10-2022
        </p>
        <p className="mb-2">
          <strong className="font-bold text-green-500">Latest Update:</strong> 10-02-2023
        </p>
        <p className="mb-2">
          <strong className="font-bold text-green-500">Total Vacancy:</strong> 28
        </p>
        <p className="mb-4">
          <strong className="font-bold text-red-500">Brief Information:</strong> National Housing Bank has advertised a Notification for the recruitment of Chief Economist, Protocol Officer, Dy. General Manager, Assistant Manager, Regional Manager, Officers for Supervision Vacancies On Regular/ Contract Basis . Those Candidates who are interested in the vacancy details &amp; completed all eligibility criteria can read the Notification &amp; Apply Online.
        </p>
        {/* Table 5: ASST-MANGER details */}
        <table className="w-full border-collapse border border-gray-400 mb-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left font-bold text-gray-700">Sl No</th>
              <th className="px-4 py-2 text-left font-bold text-gray-700">Post Name</th>
              <th className="px-4 py-2 text-left font-bold text-gray-700">Total</th>
              <th className="px-4 py-2 text-left font-bold text-gray-700">Qualification (as on 01-10-2022)</th>
              <th className="px-4 py-2 text-left font-bold text-gray-700">Age Limit (as on 01-10-2022)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 text-center">1</td>
              <td className="px-4 py-2 text-center">Assistant Manager (Scale-I)</td>
              <td className="px-4 py-2 text-center">16</td>
              <td className="px-4 py-2 text-center">Degree (Any discipline)/CA/CMA</td>
              <td className="px-4 py-2 text-center">21 – 30 Years</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">2</td>
              <td className="px-4 py-2 text-center">Regional Manager (Scale-IV)</td>
              <td className="px-4 py-2 text-center">01</td>
              <td className="px-4 py-2 text-center">Degree (CFA/CA)/ Law)</td>
              <td className="px-4 py-2 text-center">30 – 45 Years</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">3</td>
              <td className="px-4 py-2 text-center">Dy. General Manager (Scale-VI)</td>
              <td className="px-4 py-2 text-center">01</td>
              <td className="px-4 py-2 text-center">Chartered Accountant</td>
              <td className="px-4 py-2 text-center">40 – 45 Years</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">4</td>
              <td className="px-4 py-2 text-center">Protocol Officer</td>
              <td className="px-4 py-2 text-center">02</td>
              <td className="px-4 py-2 text-center">Degree (Any discipline)</td>
              <td className="px-4 py-2 text-center">60 – 62 Years</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">5</td>
              <td className="px-4 py-2 text-center">Officers for Supervision</td>
              <td className="px-4 py-2 text-center">07</td>
              <td className="px-4 py-2 text-center">Degree (Any discipline)</td>
              <td className="px-4 py-2 text-center">57 – 63 Years</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">6</td>
              <td className="px-4 py-2 text-center">Chief Economist</td>
              <td className="px-4 py-2 text-center">01</td>
              <td className="px-4 py-2 text-center">PG (Economics, Monetary Economics /Econometrics)</td>
              <td className="px-4 py-2 text-center">62 Years</td>
            </tr>
          </tbody>
        </table>
        <p className="mb-2">
          <span className="text-blue-500">Interested Candidates Can Read the Full Notification Before Apply Online</span>
        </p>
        {/* Table 6: ASST-MANGER links */}
        <table className="w-full border-collapse border border-gray-400 mb-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left font-bold text-gray-700" colSpan="2">Important Links</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 text-center">
                <strong className="font-bold text-green-500">Asst Manager (Scale-I) Online Exam Result (10-02-2023)</strong>
              </td>
              <td className="px-4 py-2 text-center">
                <a href="https://img.freejobalert.com/uploads/2023/02/Online-Exam-Result-NHB-Asst-Manager-Scale-I-Posts.pdf" className="text-blue-500" target="_blank" rel="noopener noreferrer">
                  Result
                </a>{' '}
                |{' '}
                <a href="https://img.freejobalert.com/uploads/2023/02/Online-Exam-Result-Notice-NHB-Asst-Manager-Scale-I-Posts.pdf" className="text-blue-500" target="_blank" rel="noopener noreferrer">
                  Notice
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">
                <strong className="font-bold text-green-500">Asst Manager Admit Card</strong>
              </td>
              <td className="px-4 py-2 text-center">
                <a href="http://ibpsonline.ibps.in/nhbooct22/cloea_dec22/login.php?appid=bdca34a1aa3f67bcd4557a68d265e852" className="text-blue-500" target="_blank" rel="noopener noreferrer">
                  Click Here
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">
                <strong className="font-bold text-green-500">Apply Online</strong>
              </td>
              <td className="px-4 py-2 text-center">
                <a href="https://ibpsonline.ibps.in/nhbooct22/" className="text-blue-500" target="_blank" rel="noopener noreferrer">
                  Click Here
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">
                <strong className="font-bold text-green-500">Notification</strong>
              </td>
              <td className="px-4 py-2 text-center">
                <a href="https://img.freejobalert.com/uploads/2022/10/Notification-NHB-Various-Vacancy.pdf" className="text-blue-500" target="_blank" rel="noopener noreferrer">
                  Click Here
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">
                <strong className="font-bold text-green-500">Official Website</strong>
              </td>
              <td className="px-4 py-2 text-center">
                <a href="https://nhb.org.in/en/" className="text-blue-500" target="_blank" rel="noopener noreferrer">
                  Click Here
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}