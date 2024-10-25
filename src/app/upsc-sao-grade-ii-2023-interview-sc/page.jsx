export default function UPSCRecruitmentInfo() {
  // This component displays recruitment information for various UPSC exams,
  // including details like title, post date, total vacancies, brief information,
  // application fee, important dates, and vacancy details for each post.

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">UPSC Recruitment Information</h1>
      <p className="text-gray-600 mb-4">
        Find detailed information about various recruitment opportunities offered by the Union Public Service Commission (UPSC). 
        Browse through the different exam details, including application deadlines, eligibility criteria, and vacancy details.
      </p>

      <h2 className="text-2xl font-bold mb-4">Key Highlights</h2>
      <ul className="list-disc text-gray-600 mb-4">
        <li>Recruitment opportunities for various government positions</li>
        <li>Comprehensive information about each exam, including application details and important dates</li>
        <li>Detailed vacancy breakdowns for different positions and regions</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Engineering Services Examination 2025</h2>
      <p className="text-gray-600 mb-4">
        The Union Public Service Commission (UPSC) is conducting the Engineering Services Examination 2025 for Civil, Mechanical, Electrical, Electronics &amp; Telecommunication Engineering categories.
      </p>
      <div className="mb-4">
        <p className="text-gray-600 mb-2">
          <strong className="text-green-500">Post Date: </strong>18-09-2024
        </p>
        <p className="text-gray-600 mb-2">
          <strong className="text-green-500">Latest Update: </strong>22-10-2024
        </p>
        <p className="text-gray-600 mb-2">
          <strong className="text-green-500">Total Posts:</strong> <span className="text-red-500">457 (approximately)</span>
        </p>
      </div>

      <p className="text-gray-600 mb-4">
        <strong className="text-gray-700">Brief Information:</strong> Union Public Service Commission (UPSC) has given a notification for conducting of Engineering Services Examination 2025 for Civil, Mechanical, Electrical, Electronics &amp; Telecommunication Engineering categories. Those Candidates who are interested in the vacancy details &amp; completed all eligibility criteria can read the Notification &amp; Apply Online.
      </p>

      <div id="article-hrec-1"></div>

      <h3 className="text-xl font-bold mb-4">Exam Details</h3>
      <table className="table-auto w-full mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left font-semibold text-gray-700">
              <span className="text-blue-500">Post Name</span>
            </th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700">
              <span className="text-blue-500">Total</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-gray-200">
            <td className="px-4 py-2 text-left">Engineering Services Exam 2025</td>
            <td className="px-4 py-2 text-left">approximately 457</td>
          </tr>
        </tbody>
      </table>

      <h3 className="text-xl font-bold mb-4">Application Fee</h3>
      <ul className="list-disc text-gray-600 mb-4">
        <li>For all other candidates: <strong>Rs. 200/-</strong></li>
        <li>For Female/ SC/ ST/ Persons with Benchmark Disability candidates: <strong>Nil</strong></li>
      </ul>

      <h3 className="text-xl font-bold mb-4">Important Dates</h3>
      <table className="table-auto w-full mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left font-semibold text-gray-700">
              <span className="text-blue-500">Re Open Dates</span>
            </th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700">
              <span className="text-blue-500">Dates</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-gray-200">
            <td className="px-4 py-2 text-left">Starting Date for Apply Online</td>
            <td className="px-4 py-2 text-left">18-10-2024</td>
          </tr>
          <tr className="border-t border-gray-200">
            <td className="px-4 py-2 text-left">Last date for Apply Online</td>
            <td className="px-4 py-2 text-left">22-11-2024</td>
          </tr>
          <tr className="border-t border-gray-200">
            <td className="px-4 py-2 text-left">Revised Date of Correction Window</td>
            <td className="px-4 py-2 text-left">23-11-2024 to 29-11-2024</td>
          </tr>
          <tr className="border-t border-gray-200">
            <td className="px-4 py-2 text-left">Date of Preliminary Examination</td>
            <td className="px-4 py-2 text-left"><span className="text-red-500">08-06-2025</span></td>
          </tr>
          <tr className="border-t border-gray-200">
            <td className="px-4 py-2 text-left">Date of Mains Exam </td>
            <td className="px-4 py-2 text-left">10-08-2024</td>
          </tr>
          <tr className="border-t border-gray-200">
            <td className="px-4 py-2 text-left">Previous Dates</td>
            <td className="px-4 py-2 text-left">&nbsp;</td>
          </tr>
          <tr className="border-t border-gray-200">
            <td className="px-4 py-2 text-left">Date of Notification</td>
            <td className="px-4 py-2 text-left">18-09-2024</td>
          </tr>
          <tr className="border-t border-gray-200">
            <td className="px-4 py-2 text-left">Last Date to Apply Online</td>
            <td className="px-4 py-2 text-left">08-10-2024 till 06:00 PM</td>
          </tr>
          <tr className="border-t border-gray-200">
            <td className="px-4 py-2 text-left">Date for Correction Window</td>
            <td className="px-4 py-2 text-left">09-10-2024 to 15-10-2024</td>
          </tr>
          <tr className="border-t border-gray-200">
            <td className="px-4 py-2 text-left">Date of Preliminary Examination</td>
            <td className="px-4 py-2 text-left"><span className="text-red-500">09-02-2025</span></td>
          </tr>
        </tbody>
      </table>

      <h3 className="text-xl font-bold mb-4">Age Limit (as on 01-01-2025)</h3>
      <ul className="list-disc text-gray-600 mb-4">
        <li>Minimum Age Limit: <strong>21 Years</strong></li>
        <li>Maximum Age Limit: <strong>30 Years</strong></li>
        <li>i.e., he/she must have been born not earlier than 2nd January, 1995 and not later than 1st January, 2004.</li>
      </ul>

      <h3 className="text-xl font-bold mb-4">Qualification</h3>
      <ul className="list-disc text-gray-600 mb-4">
        <li>Candidates should possess Diploma/ Degree (Engg), M.Sc (Relevant Discipline).</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Combined Geo-Scientist Exam 2025</h2>
      <p className="text-gray-600 mb-4">
        The Union Public Service Commission (UPSC) is conducting the Combined Geo-Scientist Examination 2025 for recruitment in various fields related to Geology, Geophysics, Chemistry, and Hydrogeology.
      </p>
      <div className="mb-4">
        <p className="text-gray-600 mb-2">
          <strong className="text-green-500">Post Date: </strong>04-09-2024
        </p>
        <p className="text-gray-600 mb-2">
          <strong className="text-green-500">Latest Update: </strong>07-10-2024
        </p>
        <p className="text-gray-600 mb-2">
          <strong className="text-green-500">Total Vacancy: </strong>85
        </p>
      </div>
      <p className="text-gray-600 mb-4">
        <strong className="text-gray-700">Brief Information:</strong> Union Public Service Commission (UPSC) has given a notification for the recruitment of Combined Geo-Scientist Examination 2025. Those Candidates who are interested in the vacancy details &amp; completed all eligibility criteria can read the Notification &amp; Apply Online.
      </p>
      <h3 className="text-xl font-bold mb-4">Exam Details</h3>
      <table className="table-auto w-full mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left font-semibold text-gray-700">
              <span className="text-blue-500">Sl No</span>
            </th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700">
              <span className="text-blue-500">Post Name</span>
            </th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700">
              <span className="text-blue-500">Total</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-gray-200">
            <td className="px-4 py-2 text-left">1.</td>
            <td className="px-4 py-2 text-left">Geologist, Group A</td>
            <td className="px-4 py-2 text-left">16</td>
          </tr>
          <tr className="border-t border-gray-200">
            <td className="px-4 py-2 text-left">2.</td>
            <td className="px-4 py-2 text-left">Geophysicist, Group A</td>
            <td className="px-4 py-2 text-left">06</td>
          </tr>
          <tr className="border-t border-gray-200">
            <td className="px-4 py-2 text-left">3.</td>
            <td className="px-4 py-2 text-left">Chemist. Group A</td>
            <td className="px-4 py-2 text-left">02</td>
          </tr>
          <tr className="border-t border-gray-200">
            <td className="px-4 py-2 text-left">4.</td>
            <td className="px-4 py-2 text-left">Scientist ‘B’(Hydrogeology), Group ‘A’</td>
            <td className="px-4 py-2 text-left">13</td>
          </tr>
          <tr className="border-t border-gray-200">
            <td className="px-4 py-2 text-left">5.</td>
            <td className="px-4 py-2 text-left">Scientist ‘B’(Chemical ) Group ‘A’</td>
            <td className="px-4 py-2 text-left">01</td>
          </tr>
          <tr className="border-t border-gray-200">
            <td className="px-4 py-2 text-left">6.</td>
            <td className="px-4 py-2 text-left">Scientist ‘B’(Geophysics) Group ‘A’</td>
            <td className="px-4 py-2 text-left">01</td>
          </tr>
          <tr className="border-t border-gray-200">
            <td className="px-4 py-2 text-left">7.</td>
            <td className="px-4 py-2 text-left">Assistant Hydrogeologist, Group ‘B’</td>
            <td className="px-4 py-2 text-left">31</td>
          </tr>
          <tr className="border-t border-gray-200">
            <td className="px-4 py-2 text-left">8.</td>
            <td className="px-4 py-2 text-left">Assistant Chemist, Group ‘B’</td>
            <td className="px-4 py-2 text-left">04</td>
          </tr>
          <tr className="border-t border-gray-200">
            <td className="px-4 py-2 text-left">9.</td>
            <td className="px-4 py-2 text-left">Assistant Geophysicist, Group ‘B’</td>
            <td className="px-4 py-2 text-left">11</td>
          </tr>
        </tbody>
      </table>
      <h3 className="text-xl font-bold mb-4">Application Fee</h3>
      <ul className="list-disc text-gray-600 mb-4">
        <li>For all other candidates: <strong>Rs. 200/-</strong></li>
        <li>For Female/ SC/ ST/ Persons with Benchmark Disability candidates: <strong>Nil</strong></li>
      </ul>

      <h3 className="text-xl font-bold mb-4">Important Dates</h3>
      <ul className="list-disc text-gray-600 mb-4">
        <li>Date of Notification: <strong>04-09-2024</strong></li>
        <li>Last Date to Apply Online: <strong>24-09-2024 till 18.00 Hours</strong></li>
        <li>Date for Correction Window: <strong>25-09-2024 to 01-10-2024</strong></li>
        <li>Date of Preliminary Examination: <strong><span className="text-red-500">9th February, 2025</span></strong></li>
        <li>Date of Main Examination: <strong><span className="text-red-500">21st &amp; 22nd June, 2025</span></strong></li>
      </ul>

      <h3 className="text-xl font-bold mb-4">Age Limit (as on 01-01-2025)</h3>
      <ul className="list-disc text-gray-600 mb-4">
        <li>Minimum Age Limit: <strong>21 Years</strong></li>
        <li>Maximum Age Limit: <strong>32 Years</strong></li>
        <li>i.e. he/she must have been born not earlier than 2nd January, 1993 and not later than 1st January, 2004.</li>
      </ul>

      <h3 className="text-xl font-bold mb-4">Qualification</h3>
      <ul className="list-disc text-gray-600 mb-4">
        <li>Candidates Should Possess PG (Relevant Discipline).</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Dy Superintending Archaeologist &amp; Cabin Safety Inspector 2024</h2>
      <p className="text-gray-600 mb-4">
        The Union Public Service Commission (UPSC) is conducting recruitment for Dy Superintending Archaeologist &amp; Cabin Safety Inspector positions.
      </p>
      <div className="mb-4">
        <p className="text-gray-600 mb-2">
          <strong className="text-green-500">Post Date: </strong>19-08-2024
        </p>
        <p className="text-gray-600 mb-2">
          <strong className="text-green-500">Total Vacancy: </strong>82
        </p>
      </div>

      <p className="text-gray-600 mb-4">
        <strong className="text-gray-700">Brief Information:</strong> Union Public Service Commission (UPSC) has given an employment notification for the recruitment of Dy Superintending Archaeologist &amp; Cabin Safety Inspector Vacancy. Those Candidates who are interested in the vacancy details &amp; completed all eligibility criteria can read the Notification &amp; Apply Online.
      </p>

      <h3 className="text-xl font-bold mb-4">Exam Details</h3>
      <table className="table-auto w-full mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left font-semibold text-gray-700">
              <span className="text-blue-500">Post Name</span>
            </th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700">
              <span className="text-blue-500">Total</span>
            </th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700">
              <span className="text-blue-500">Qualification</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-gray-200">
            <td className="px-4 py-2 text-left">Deputy Superintending Archaeologist</td>
            <td className="px-4 py-2 text-left">67</td>
            <td className="px-4 py-2 text-left">PG Degree /PG Diploma</td>
          </tr>
          <tr className="border-t border-gray-200">
            <td className="px-4 py-2 text-left">Cabin Safety Inspector</td>
            <td className="px-4 py-2 text-left">15</td>
            <td className="px-4 py-2 text-left">10+2&nbsp;</td>
          </tr>
        </tbody>
      </table>
      <h3 className="text-xl font-bold mb-4">Application Fee</h3>
      <ul className="list-disc text-gray-600 mb-4">
        <li>Application Fee for Others: <strong>Rs. 25/-</strong></li>
        <li>Application Fee for Female/ SC/ ST &amp; PwBD Candidates: <strong>NIL</strong></li>
      </ul>
      <h3 className="text-xl font-bold mb-4">Important Dates</h3>
      <ul className="list-disc text-gray-600 mb-4">
        <li>Starting Date for Apply Online: <strong>17-08-2024</strong></li>
        <li>Last Date for Apply Online: <strong>05-09-2024 (23:59 hours)</strong></li>
        <li>Last Date for Printing for Completely Submitted Online Application : <strong>06-09-2024 (23:59 hours)</strong></li>
      </ul>
      <h3 className="text-xl font-bold mb-4">Age Limit (as on 01-08-2024)</h3>
      <ul className="list-disc text-gray-600 mb-4">
        <li>Maximum Age Limit for URs : <strong>35 Years</strong></li>
        <li>Maximum Age Limit for OBCs : <strong>38 Years</strong></li>
        <li>Maximum Age Limit&nbsp; for SCs : <strong>40 Years</strong></li>
        <li>Maximum Age Limit for PwBDs : <strong>45 Years</strong></li>
      </ul>
      <h3 className="text-xl font-bold mb-4">Age Limit (as on 01-08-2024)</h3>
      <ul className="list-disc text-gray-600 mb-4">
        <li>Maximum Age Limit for URs/EWSs : <strong>40 Years</strong></li>
        <li>Maximum Age Limit for OBCs : <strong>43 Years</strong></li>
        <li>Maximum Age Limit&nbsp; for SCs/STs : <strong>45 Years</strong></li>
        <li>Maximum Age Limit for PwBDs : <strong>50 Years</strong></li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Joint Secretary &amp; Director/Deputy Secretary level Officer 2024</h2>
      <p className="text-gray-600 mb-4">
        The Union Public Service Commission (UPSC) was conducting recruitment for Joint Secretary &amp; Director/Deputy Secretary level Officer positions. However, the notification has been cancelled. 
      </p>
      <div className="mb-4">
        <p className="text-gray-600 mb-2">
          <strong className="text-green-500">Post Date: </strong>19-08-2024
        </p>
        <p className="text-gray-600 mb-2">
          <strong className="text-green-500">Latest Update: </strong>22-08-2024
        </p>
        <p className="text-gray-600 mb-2">
          <strong className="text-green-500">Total Vacancy: </strong>45
        </p>
      </div>

      <p className="text-gray-600 mb-4">
        <strong className="text-gray-700">Brief Information:</strong> Union Public Service Commission (UPSC) has given an employment notification for the recruitment of Joint Secretary &amp; Director/Deputy Secretary level Officer Vacancy. Those Candidates who are interested in the vacancy details &amp; completed all eligibility criteria can read the Notification &amp; Apply Online.
      </p>

      <h3 className="text-xl font-bold mb-4">Exam Details</h3>
      <table className="table-auto w-full mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left font-semibold text-gray-700">
              <span className="text-blue-500">Post Name</span>
            </th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700">
              <span className="text-blue-500">Total</span>
            </th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700">
              <span className="text-blue-500">Qualification</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-gray-200">
            <td className="px-4 py-2 text-left">Joint Secretary</td>
            <td className="px-4 py-2 text-left">20</td>
            <td className="px-4 py-2 text-left">Graduation</td>
          </tr>
          <tr className="border-t border-gray-200">
            <td className="px-4 py-2 text-left">Director/Deputy Secretary</td>
            <td className="px-4 py-2 text-left">25</td>
            <td className="px-4 py-2 text-left">Post Graduation</td>
          </tr>
        </tbody>
      </table>
      <h3 className="text-xl font-bold mb-4">Application Fee</h3>
      <ul className="list-disc text-gray-600 mb-4">
        <li>Application Fee for Others: <strong>Rs. 25/-</strong></li>
        <li>Application Fee for Female/ SC/ ST &amp; PwBD Candidates: <strong>NIL</strong></li>
      </ul>
      <h3 className="text-xl font-bold mb-4">Important Dates</h3>
      <ul className="list-disc text-gray-600 mb-4">
        <li>Starting Date for Apply Online: <strong>19-08-2024</strong></li>
        <li>Last Date for Apply Online: <strong>06-09-2024 (23:59 hours)</strong></li>
        <li>Last Date for Printing for Completely Submitted Online Application : <strong>07-09-2024 (23:59 hours)</strong></li>
      </ul>
      <h3 className="text-xl font-bold mb-4">Age Limit (as on 01-08-2024)</h3>
      <ul className="list-disc text-gray-600 mb-4">
        <li>Maximum Age Limit for URs : <strong>35 Years</strong></li>
        <li>Maximum Age Limit for OBCs : <strong>38 Years</strong></li>
        <li>Maximum Age Limit&nbsp; for SCs : <strong>40 Years</strong></li>
        <li>Maximum Age Limit for PwBDs : <strong>45 Years</strong></li>
      </ul>
    </div>
  );
}