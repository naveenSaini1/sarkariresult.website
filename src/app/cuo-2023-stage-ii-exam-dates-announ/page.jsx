export default function CUORecruitmentInfo() {
  // This component displays recruitment information for Central University of Odisha (CUO). 
  // It includes details about non-teaching/academic and various vacancy positions, 
  // application fees, important dates, and vacancy details.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Central University of Odisha (CUO) Recruitment</h1>

      {/* Summary of recruitment information */}
      <p className="text-lg mb-4 text-gray-600">
        Central University of Odisha (CUO) is recruiting for several positions, including
        Non-Teaching/Academic and Various Vacancies. Candidates interested in these positions should 
        review the application details, eligibility criteria, and important dates outlined below.
      </p>

      <h2 className="text-2xl font-bold mb-4 text-gray-800">Key Highlights</h2>
      <ul className="list-disc ml-6 text-gray-600">
        <li><strong>Application Deadline:</strong> 19-01-2024 for Non-Teaching/Academic Positions and 10-02-2023 for Various Vacancies.</li>
        <li><strong>Exam Date:</strong> Stage II Exam for Various Vacancies is scheduled from 15-11-2024 to 18-11-2024.</li>
        <li><strong>Application Fee:</strong> Varies based on the position and category. Refer to the detailed breakdown below.</li>
      </ul>

      {/* Non-Teaching/Academic Vacancy */}
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Non-Teaching/Academic Vacancy (Notification Cancelled)</h2>
      <p className="text-lg mb-4 text-gray-600">
        This recruitment notification has been cancelled.
      </p>
      <div className="mb-4">
        <strong className="text-gray-800">Post Date:</strong> <span className="text-gray-600">04-01-2024</span>
      </div>
      <div className="mb-4">
        <strong className="text-gray-800">Total Vacancy:</strong> <span className="text-gray-600">97</span>
      </div>
      <p className="text-gray-600">
        Central University of Odisha (CUO), Koraput was recruiting for Non-Teaching/Academic Vacancies on a Direct/Deputation Recruitment Basis. 
      </p>

      {/* Application Fee */}
      <h3 className="text-xl font-bold mb-4 text-gray-800">Application Fee</h3>
      <table className="table-auto w-full text-gray-600">
        <thead>
          <tr>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2">Fee (Rs.)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">Group –A (All) General and OBC Category</td>
            <td className="px-4 py-2">1000/-</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Group –B (All) General and OBC Category</td>
            <td className="px-4 py-2">750/-</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Group –C (All) General and OBC Category</td>
            <td className="px-4 py-2">500/-</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Female, SC/ST and PwBD Category</td>
            <td className="px-4 py-2">Nil</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Payment Mode</td>
            <td className="px-4 py-2">Through Net Banking/ Credit Card/ Debit Card</td>
          </tr>
        </tbody>
      </table>

      {/* Important Dates */}
      <h3 className="text-xl font-bold mb-4 text-gray-800">Important Dates</h3>
      <table className="table-auto w-full text-gray-600">
        <thead>
          <tr>
            <th className="px-4 py-2">Event</th>
            <th className="px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">Date of Notification</td>
            <td className="px-4 py-2">20-12-2023</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Last Date for Apply Online & Payment of Fee</td>
            <td className="px-4 py-2">19-01-2024 at 23:59 hrs</td>
          </tr>
        </tbody>
      </table>

      {/* Vacancy Details */}
      <h3 className="text-xl font-bold mb-4 text-gray-800">Vacancy Details</h3>
      <table className="table-auto w-full text-gray-600">
        <thead>
          <tr>
            <th className="px-4 py-2">Post Name</th>
            <th className="px-4 py-2">Total</th>
            <th className="px-4 py-2">Upper Age Limit (as on 19-01-2024)</th>
            <th className="px-4 py-2">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2" colSpan="4"><strong>Advt No. 06/2023</strong></td>
          </tr>
          <tr>
            <td className="px-4 py-2">System Analyst</td>
            <td className="px-4 py-2">01</td>
            <td className="px-4 py-2" rowSpan="5">40 Years</td>
            <td className="px-4 py-2">Degree/ PG (Relevant Discipline)</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Hindi Officer</td>
            <td className="px-4 py-2">01</td>
            <td className="px-4 py-2">PG</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Information Scientist</td>
            <td className="px-4 py-2">01</td>
            <td className="px-4 py-2">Degree/ PG & PG Diploma (Relevant Discipline)</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Assistant Registrar</td>
            <td className="px-4 py-2">02</td>
            <td className="px-4 py-2">PG</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Medical Officer</td>
            <td className="px-4 py-2">01</td>
            <td className="px-4 py-2">MBBS Degree</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Private Secretary</td>
            <td className="px-4 py-2">03</td>
            <td className="px-4 py-2" rowSpan="5">35 Years</td>
            <td className="px-4 py-2" rowSpan="2">Any Degree</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Section Officer</td>
            <td className="px-4 py-2">02</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Hindi Translator</td>
            <td className="px-4 py-2">01</td>
            <td className="px-4 py-2">PG</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Junior Engineer (Civil/Electrical)</td>
            <td className="px-4 py-2">02</td>
            <td className="px-4 py-2">Diploma, Degree (Relevant Engg)</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Assistant</td>
            <td className="px-4 py-2">04</td>
            <td className="px-4 py-2">Any Degree</td>
          </tr>
          <tr>
            <td className="px-4 py-2" colSpan="4"><strong>Advt No. 07/2023</strong></td>
          </tr>
          <tr>
            <td className="px-4 py-2">Finance Officer</td>
            <td className="px-4 py-2">01</td>
            <td className="px-4 py-2" rowSpan="2">57 Years</td>
            <td className="px-4 py-2">PG</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Librarian</td>
            <td className="px-4 py-2">01</td>
            <td className="px-4 py-2" rowSpan="3">PG (Library Science/ Information Science/ Documentation Science), Ph.D</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Deputy Librarian</td>
            <td className="px-4 py-2">01</td>
            <td className="px-4 py-2">50 Years</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Assistant Librarian</td>
            <td className="px-4 py-2">01</td>
            <td className="px-4 py-2">40 Years</td>
          </tr>
          <tr>
            <td className="px-4 py-2" colSpan="4"><strong>For More Vacancy Details Refer the Notification</strong></td>
          </tr>
        </tbody>
      </table>

      {/* Various Vacancy */}
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Various Vacancy (Stage II Exam Date Announced)</h2>
      <p className="text-lg mb-4 text-gray-600">
        Central University of Orissa (CUO) is recruiting for various positions through direct recruitment. Candidates can find more details and apply online.
      </p>
      <div className="mb-4">
        <strong className="text-gray-800">Post Date:</strong> <span className="text-gray-600">14-02-2023</span>
      </div>
      <div className="mb-4">
        <strong className="text-gray-800">Total Vacancy:</strong> <span className="text-gray-600">89</span>
      </div>
      <p className="text-gray-600">
        The recruitment is for positions like System Analyst, Information Scientist, Assistant Registrar, and others. 
      </p>

      {/* Application Fee */}
      <h3 className="text-xl font-bold mb-4 text-gray-800">Application Fee</h3>
      <table className="table-auto w-full text-gray-600">
        <thead>
          <tr>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2">Fee (Rs.)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">Group –A (All) GEN/ OBC</td>
            <td className="px-4 py-2">1000/-</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Group –B (All) GEN/ OBC</td>
            <td className="px-4 py-2">750/-</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Group –C (All) GEN/ OBC</td>
            <td className="px-4 py-2">500/-</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Female, SC/ST and PwBD Category</td>
            <td className="px-4 py-2">Nil</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Payment Mode</td>
            <td className="px-4 py-2">SBI e-challan & Internet Banking/ Credit Card/ Debit Card</td>
          </tr>
        </tbody>
      </table>

      {/* Important Dates */}
      <h3 className="text-xl font-bold mb-4 text-gray-800">Important Dates</h3>
      <table className="table-auto w-full text-gray-600">
        <thead>
          <tr>
            <th className="px-4 py-2">Event</th>
            <th className="px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">Last Date to Apply Online & Payment of Fee</td>
            <td className="px-4 py-2">10-02-2023</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Date of Exam</td>
            <td className="px-4 py-2">15-11-2024 to 18-11-2024</td>
          </tr>
        </tbody>
      </table>

      {/* Age Limit */}
      <h3 className="text-xl font-bold mb-4 text-gray-800">Age Limit (as on 01-01-2023)</h3>
      <table className="table-auto w-full text-gray-600">
        <thead>
          <tr>
            <th className="px-4 py-2">Group</th>
            <th className="px-4 py-2">Maximum Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">Group- A (All)</td>
            <td className="px-4 py-2">40 Years</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Group- B (All)</td>
            <td className="px-4 py-2">40 Years</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Group- C (All)</td>
            <td className="px-4 py-2">32 Years</td>
          </tr>
          <tr>
            <td className="px-4 py-2" colSpan="2">Age relaxation is applicable as per rules.</td>
          </tr>
        </tbody>
      </table>

      {/* Qualification */}
      <h3 className="text-xl font-bold mb-4 text-gray-800">Qualification</h3>
      <ul className="list-disc ml-6 text-gray-600">
        <li>Candidates should possess B.E/ B.Tech, M.E/ M.Tech, M.Sc, MCA, Diploma/ Degree/ PG (Relevant Discipline), Ph.D, MBBS.</li>
        <li>For More Qualification Details Refer the Notification</li>
      </ul>

      {/* Vacancy Details */}
      <h3 className="text-xl font-bold mb-4 text-gray-800">Vacancy Details</h3>
      <table className="table-auto w-full text-gray-600">
        <thead>
          <tr>
            <th className="px-4 py-2">Post Name</th>
            <th className="px-4 py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">DEPUTY LIBRARIAN</td>
            <td className="px-4 py-2">01</td>
          </tr>
          <tr>
            <td className="px-4 py-2">System Analyst</td>
            <td className="px-4 py-2">01</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Information Scientist</td>
            <td className="px-4 py-2">01</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Assistant Registrar</td>
            <td className="px-4 py-2">02</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Assistant Librarian</td>
            <td className="px-4 py-2">01</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Medical Officer (Female)</td>
            <td className="px-4 py-2">01</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Private Secretary</td>
            <td className="px-4 py-2">05</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Section Officer</td>
            <td className="px-4 py-2">03</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Hindi Translator</td>
            <td className="px-4 py-2">01</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Assistant</td>
            <td className="px-4 py-2">06</td>
          </tr>
          <tr>
            <td className="px-4 py-2" colSpan="2"><strong>For More Vacancy Details Refer the Notification</strong></td>
          </tr>
        </tbody>
      </table>

      {/* Important Links */}
      <h3 className="text-xl font-bold mb-4 text-gray-800">Important Links</h3>
      <table className="table-auto w-full text-gray-600">
        <thead>
          <tr>
            <th className="px-4 py-2">Link</th>
            <th className="px-4 py-2">Description</th>
          </tr>
        </thead>
        <tbody>
          {/* Non-Teaching/Academic Vacancy */}
          <tr>
            <td className="px-4 py-2">
              <a href="https://img.freejobalert.com/uploads/2024/08/Notification-Cancelled-Central-University-of-Odisha-Non-Teaching-Academic-Vacancy-2023.pdf" 
                target="_blank" 
                className="text-blue-500 hover:underline"
              >
                Notification (Cancelled)
              </a>
            </td>
            <td className="px-4 py-2">Advt No. 06/2023</td>
          </tr>
          <tr>
            <td className="px-4 py-2">
              <a href="https://cuont.samarth.edu.in/index.php/site/login" 
                target="_blank" 
                className="text-blue-500 hover:underline"
              >
                Apply Online
              </a>
            </td>
            <td className="px-4 py-2"></td>
          </tr>
          <tr>
            <td className="px-4 py-2">
              <a href="https://cuo.ac.in/Recruitment/2023/Advertisement-No-06.pdf" 
                target="_blank" 
                className="text-blue-500 hover:underline"
              >
                Notification
              </a>
            </td>
            <td className="px-4 py-2">Advt No. 06/2023</td>
          </tr>
          <tr>
            <td className="px-4 py-2">
              <a href="https://cuo.ac.in/Recruitment/2023/Advertisement-No-07.pdf" 
                target="_blank" 
                className="text-blue-500 hover:underline"
              >
                Notification
              </a>
            </td>
            <td className="px-4 py-2">Advt No. 07/2023</td>
          </tr>
          <tr>
            <td className="px-4 py-2">
              <a href="http://cuo.ac.in/" 
                target="_blank" 
                className="text-blue-500 hover:underline"
              >
                Official Website
              </a>
            </td>
            <td className="px-4 py-2"></td>
          </tr>

          {/* Various Vacancy */}
          <tr>
            <td className="px-4 py-2">
              <a href="https://img.freejobalert.com/uploads/2024/11/Stage-II-Exam-Date-Notice-CUO-Various-Vacancy-Posts.pdf" 
                target="_blank" 
                className="text-blue-500 hover:underline"
              >
                Exam Date
              </a>
            </td>
            <td className="px-4 py-2"></td>
          </tr>
          <tr>
            <td className="px-4 py-2">
              <a href="http://cuo.ac.in/notification_Recruitment.asp?pgid=8&subid=7" 
                target="_blank" 
                className="text-blue-500 hover:underline"
              >
                Apply Online
              </a>
            </td>
            <td className="px-4 py-2"></td>
          </tr>
          <tr>
            <td className="px-4 py-2">
              <a href="https://img.freejobalert.com/uploads/2023/02/Notification-Central-University-of-Orrissa-Various-Vacancy.pdf" 
                target="_blank" 
                className="text-blue-500 hover:underline"
              >
                Notification
              </a>
            </td>
            <td className="px-4 py-2">Advt No. 04/2023</td>
          </tr>
          <tr>
            <td className="px-4 py-2">
              <a href="http://cuo.ac.in/" 
                target="_blank" 
                className="text-blue-500 hover:underline"
              >
                Official Website
              </a>
            </td>
            <td className="px-4 py-2"></td>
          </tr>
        </tbody>
      </table>

      {/* Keywords */}
      <p className="mt-8 text-gray-600">
        Keywords: Central University of Odisha, CUO, Recruitment, Non-Teaching, Academic, Vacancy, Various, System Analyst, Information Scientist, Assistant Registrar,
        Librarian, Medical Officer, Private Secretary, Section Officer, Hindi Translator, Assistant, Exam Date, Apply Online, Notification, Job Alert.
      </p>
    </div>
  );
}