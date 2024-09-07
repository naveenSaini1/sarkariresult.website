export default function UPSCRecruitmentInfo() {
  // This component displays recruitment information from the UPSC, including title, post details, brief information, application fee, important dates, and vacancy details.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">UPSC Recruitment Information</h1>

      {/* CGS-2025 Recruitment Information */}
      <h2 className="text-2xl font-bold mb-2" id="CGS-2025">
        Combined Geo-Scientist Exam 2025
      </h2>
      <p className="text-gray-600 mb-4">
        <span className="font-medium">Name of the Post:</span> UPSC Combined
        Geo-Scientist Exam 2025 Online Form
      </p>
      <p className="text-gray-600 mb-4">
        <span className="font-medium">Post Date: </span>04-09-2024
      </p>
      <p className="text-gray-600 mb-4">
        <span className="font-medium">Total Vacancy: </span>85
      </p>
      <p className="text-gray-600 mb-4">
        <span className="font-medium">Brief Information:</span> Union Public
        Service Commission (UPSC) has given a notification for the recruitment of
        Combined Geo-Scientist Examination 2025. Those Candidates who are
        interested in the vacancy details &amp; completed all eligibility criteria
        can read the Notification &amp; Apply Online.
      </p>
      <table className="w-full table-auto mb-4">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left font-medium text-gray-500">
              SI No
            </th>
            <th className="px-4 py-2 text-left font-medium text-gray-500">
              Post Name
            </th>
            <th className="px-4 py-2 text-left font-medium text-gray-500">
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2 text-gray-500">1.</td>
            <td className="border px-4 py-2 text-gray-500">
              Geologist, Group A
            </td>
            <td className="border px-4 py-2 text-gray-500">16</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 text-gray-500">2.</td>
            <td className="border px-4 py-2 text-gray-500">
              Geophysicist, Group A
            </td>
            <td className="border px-4 py-2 text-gray-500">06</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 text-gray-500">3.</td>
            <td className="border px-4 py-2 text-gray-500">
              Chemist. Group A
            </td>
            <td className="border px-4 py-2 text-gray-500">02</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 text-gray-500">4.</td>
            <td className="border px-4 py-2 text-gray-500">
              Scientist ‘B’(Hydrogeology), Group ‘A’
            </td>
            <td className="border px-4 py-2 text-gray-500">13</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 text-gray-500">5.</td>
            <td className="border px-4 py-2 text-gray-500">
              Scientist ‘B’(Chemical ) Group ‘A’
            </td>
            <td className="border px-4 py-2 text-gray-500">01</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 text-gray-500">6.</td>
            <td className="border px-4 py-2 text-gray-500">
              Scientist ‘B’(Geophysics) Group ‘A’
            </td>
            <td className="border px-4 py-2 text-gray-500">01</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 text-gray-500">7.</td>
            <td className="border px-4 py-2 text-gray-500">
              Assistant Hydrogeologist, Group ‘B’
            </td>
            <td className="border px-4 py-2 text-gray-500">31</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 text-gray-500">8.</td>
            <td className="border px-4 py-2 text-gray-500">
              Assistant Chemist, Group ‘B’
            </td>
            <td className="border px-4 py-2 text-gray-500">04</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 text-gray-500">9.</td>
            <td className="border px-4 py-2 text-gray-500">
              Assistant Geophysicist, Group ‘B’
            </td>
            <td className="border px-4 py-2 text-gray-500">11</td>
          </tr>
        </tbody>
      </table>

      <table className="w-full table-auto mb-4">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left font-medium text-gray-500">
              Application Fee
            </th>
            <th className="px-4 py-2 text-left font-medium text-gray-500">
              Important Dates
            </th>
            <th className="px-4 py-2 text-left font-medium text-gray-500">
              Age Limit (as on 01-01-2025)
            </th>
            <th className="px-4 py-2 text-left font-medium text-gray-500">
              Qualification
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2 text-gray-500">
              For all other candidates: <strong>Rs. 200/-</strong> <br/> For
              Female/ SC/ ST/ Persons with Benchmark Disability candidates:
              <strong>Nil</strong>
            </td>
            <td className="border px-4 py-2 text-gray-500">
              Date of Notification: <strong>04-09-2024</strong> <br/> Last Date to
              Apply Online:&nbsp;<strong>24-09-2024 till 18.00 Hours</strong> <br/>
              Date for Correction Window:
              <strong>25-09-2024 to 01-10-2024</strong> <br/> Date of
              Preliminary Examination: <strong><span className="text-red-500">
                9th February, 2025
              </span>
              </strong>
              <br/> Date of Main Examination:
              <strong><span className="text-red-500">
                21st &amp; 22nd June, 2025
              </span>
              </strong>
            </td>
            <td className="border px-4 py-2 text-gray-500">
              Minimum Age Limit: <strong>21 Years</strong> <br/> Maximum Age
              Limit: <strong>32 Years</strong> <br/> i.e. he/she must have been
              born not earlier than 2nd January, 1993 and not later than 1st
              January, 2004. <br/> Age Relaxation is Applicable as per rules.
            </td>
            <td className="border px-4 py-2 text-gray-500">
              Candidates Should Possess PG (Relevant Discipline).
            </td>
          </tr>
        </tbody>
      </table>

      {/* Cabin-Safety-Inspector Recruitment Information */}
      <h2 className="text-2xl font-bold mb-2" id="Cabin-Safety-Inspector">
        Dy Superintending Archaeologist &amp; Cabin Safety Inspector 2024
      </h2>
      <p className="text-gray-600 mb-4">
        <span className="font-medium">Name of the Post:</span> UPSC Dy
        Superintending Archaeologist &amp; Cabin Safety Inspector 2024 Online Form
      </p>
      <p className="text-gray-600 mb-4">
        <span className="font-medium">Post Date: </span>19-08-2024
      </p>
      <p className="text-gray-600 mb-4">
        <span className="font-medium">Total Vacancy: </span>82
      </p>
      <p className="text-gray-600 mb-4">
        <span className="font-medium">Brief Information:</span> Union Public
        Service Commission (UPSC) has given an employment notification for the
        recruitment of Dy Superintending Archaeologist &amp; Cabin Safety
        Inspector Vacancy. Those Candidates who are interested in the vacancy
        details &amp; completed all eligibility criteria can read the Notification
        &amp; Apply Online.
      </p>
      <table className="w-full table-auto mb-4">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left font-medium text-gray-500">
              Post Name
            </th>
            <th className="px-4 py-2 text-left font-medium text-gray-500">
              Total
            </th>
            <th className="px-4 py-2 text-left font-medium text-gray-500">
              Qualification
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2 text-gray-500">
              Deputy Superintending Archaeologist
            </td>
            <td className="border px-4 py-2 text-gray-500">67</td>
            <td className="border px-4 py-2 text-gray-500">
              PG Degree /PG Diploma
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2 text-gray-500">
              Cabin Safety Inspector
            </td>
            <td className="border px-4 py-2 text-gray-500">15</td>
            <td className="border px-4 py-2 text-gray-500">10+2&nbsp;</td>
          </tr>
        </tbody>
      </table>

      <table className="w-full table-auto mb-4">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left font-medium text-gray-500">
              Application Fee
            </th>
            <th className="px-4 py-2 text-left font-medium text-gray-500">
              Important Dates
            </th>
            <th className="px-4 py-2 text-left font-medium text-gray-500">
              Age Limit (as on 01-08-2024)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2 text-gray-500">
              Application Fee for Others: <strong>Rs. 25/-</strong> <br/>
              Application Fee for Female/ SC/ ST &amp; PwBD Candidates:
              <strong>NIL</strong>
            </td>
            <td className="border px-4 py-2 text-gray-500">
              Starting Date for Apply Online: <strong>17-08-2024</strong> <br/>
              Last Date for Apply Online: <strong>05-09-2024 (23:59 hours)</strong>
              <br/> Last Date for Printing for Completely Submitted Online
              Application: <strong>06-09-2024 (23:59 hours)</strong>
            </td>
            <td className="border px-4 py-2 text-gray-500">
              <strong>Age Limit for Deputy Superintending Archaeologist Posts:</strong>
              <br/>
              Maximum Age Limit for URs: <strong>35 Years</strong> <br/> Maximum
              Age Limit for OBCs: <strong>38 Years</strong> <br/> Maximum Age Limit
              for SCs: <strong>40 Years</strong> <br/> Maximum Age Limit for
              PwBDs: <strong>45 Years</strong> <br/>
              <strong>Age Limit for Cabin Safety Inspector Posts:</strong>
              <br/>
              Maximum Age Limit for URs/EWSs: <strong>40 Years</strong> <br/>
              Maximum Age Limit for OBCs: <strong>43 Years</strong> <br/> Maximum
              Age Limit for SCs/STs: <strong>45 Years</strong> <br/> Maximum Age
              Limit for PwBDs: <strong>50 Years</strong>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Joint-Secretary Recruitment Information */}
      <h2 className="text-2xl font-bold mb-2" id="Joint-Secretary">
        Joint Secretary &amp; Director/Deputy Secretary level Officer 2024
      </h2>
      <p className="text-gray-600 mb-4">
        <span className="font-medium">Name of the Post:</span> UPSC Joint
        Secretary &amp; Director/Deputy Secretary level Officer 2024
        Notification Cancelled
      </p>
      <p className="text-gray-600 mb-4">
        <span className="font-medium">Post Date: </span>19-08-2024
      </p>
      <p className="text-gray-600 mb-4">
        <span className="font-medium">Latest Update :</span> 22-08-2024
      </p>
      <p className="text-gray-600 mb-4">
        <span className="font-medium">Total Vacancy: </span>45
      </p>
      <p className="text-gray-600 mb-4">
        <span className="font-medium">Brief Information:</span> Union Public
        Service Commission (UPSC) has given an employment notification for the
        recruitment of Joint Secretary &amp; Director/Deputy Secretary level
        Officer Vacancy. Those Candidates who are interested in the vacancy
        details &amp; completed all eligibility criteria can read the Notification
        &amp; Apply Online.
      </p>
      <table className="w-full table-auto mb-4">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left font-medium text-gray-500">
              Post Name
            </th>
            <th className="px-4 py-2 text-left font-medium text-gray-500">
              Total
            </th>
            <th className="px-4 py-2 text-left font-medium text-gray-500">
              Qualification
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2 text-gray-500">Joint Secretary</td>
            <td className="border px-4 py-2 text-gray-500">10</td>
            <td className="border px-4 py-2 text-gray-500">
              Degree, BE/ B.Tech, PG Degree, M.Sc, MBA, PGDM, Masters Degree,
              ME/ M.Tech
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2 text-gray-500">
              Director/ Deputy Secretary
            </td>
            <td className="border px-4 py-2 text-gray-500">35</td>
            <td className="border px-4 py-2 text-gray-500">
              CA, CS, ICWA, CMA, LLB, Degree, BE/ B.Tech, Masters Degree, M.Sc,
              M.Phil, Ph.D
            </td>
          </tr>
        </tbody>
      </table>

      <table className="w-full table-auto mb-4">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left font-medium text-gray-500">
              Important Dates
            </th>
            <th className="px-4 py-2 text-left font-medium text-gray-500">
              Age Limit (as on 01-08-2024)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2 text-gray-500">
              Starting Date for Apply Online: <strong>17-08-2024</strong> <br/>
              Last Date for Apply Online: <strong>17-09-2024 (23:59 hours)</strong>
              <br/> Last Date for Printing for Completely Submitted Online
              Application: <strong>18-09-2024 (23:59 hours)</strong>
            </td>
            <td className="border px-4 py-2 text-gray-500">
              Minimum Age Limit for Joint Secretary level Post:
              <strong>40 Years</strong> <br/> Maximum Age Limit for Joint
              Secretary level Post: <strong>55 Years</strong> <br/> Minimum Age
              Limit for Director level Post: <strong>35 Years</strong> <br/>
              Maximum Age Limit for Director level Post: <strong>45 Years</strong>
              <br/> Minimum Age Limit for Joint Secretary level Post:
              <strong>40 Years</strong> <br/> Maximum Age Limit for Joint
              Secretary level Post: <strong>55 Years</strong> <br/> Minimum Age
              Limit for Director Secretary level Post: <strong>32 Years</strong>
              <br/> Maximum Age Limit for Director Secretary level Post:
              <strong>40 Years</strong> <br/> The crucial date for determining
              the age limit shall be the closing date for submission of online
              application
            </td>
          </tr>
        </tbody>
      </table>

      {/* Asst-Director-Grade-II Recruitment Information */}
      <h2 className="text-2xl font-bold mb-2" id="Asst-Director-Grade-II">
        Various Vacancy 2024
      </h2>
      <p className="text-gray-600 mb-4">
        <span className="font-medium">Name of the Post:</span> UPSC Various
        Vacancy 2024 Online Form
      </p>
      <p className="text-gray-600 mb-4">
        <span className="font-medium">Post Date: </span>25-05-2024
      </p>
      <p className="text-gray-600 mb-4">
        <span className="font-medium">Latest Update :</span> 05-06-2024
      </p>
      <p className="text-gray-600 mb-4">
        <span className="font-medium">Total Vacancy: </span>312
      </p>
      <p className="text-gray-600 mb-4">
        <span className="font-medium">Brief Information:</span> Union Public
        Service Commission (UPSC) has published a notification for the
        recruitment of Specialist Grade III, Assistant Director Grade-II,
        Assistant Professor &amp; Other Vacancy. Those Candidates who are
        interested in the vacancy details &amp; completed all eligibility criteria
        can read the Notification &amp; Apply Online.
      </p>

      <table className="w-full table-auto mb-4">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left font-medium text-gray-500">
              Post Name
            </th>
            <th className="px-4 py-2 text-left font-medium text-gray-500">
              Total
            </th>
            <th className="px-4 py-2 text-left font-medium text-gray-500">
              Qualification
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2 text-gray-500">
              Deputy Superintending Archaeological Chemist in Archaeological
            </td>
            <td className="border px-4 py-2 text-gray-500">04</td>
            <td className="border px-4 py-2 text-gray-500">
              Degree/PG (Chemistry)
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2 text-gray-500">
              Deputy Superintending Archaeologist in Archaeological
            </td>
            <td className="border px-4 py-2 text-gray-500">67</td>
            <td className="border px-4 py-2 text-gray-500">
              PG (Archaeology/Indian History)
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}