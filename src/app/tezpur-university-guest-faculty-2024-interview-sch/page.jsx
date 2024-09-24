export default function RecruitmentInformation() {
  // This component displays recruitment information for Tezpur University, 
  // including job postings for Guest Faculty, Professor, and Technical Officer positions.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">Tezpur University Recruitment</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Guest Faculty Post */}
        <div>
          <h2 className="text-2xl font-bold mb-2" id="Guest-Faculty">
            Guest Faculty - Interview Schedule Announced
          </h2>
          <p className="text-gray-600 mb-2">
            <span className="font-bold">Post Date:</span> 05-09-2024
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-bold">Latest Update:</span> 24-09-2024
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-bold">Total Vacancy:</span> 21
          </p>
          <p className="text-gray-600 mb-4">
            <span className="font-bold">Brief Information:</span> Tezpur University has
            announced notification for the recruitment of Guest Faculty Vacancy.
            Those Candidates who are interested in the vacancy details &
            completed all eligibility criteria can read the Notification & Apply.
          </p>
          <table className="table-auto w-full text-center border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-2 py-1">
                  <span className="text-red-500 font-bold">Important Dates</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-2 py-1">
                  Last Date of Submission of Application: 05-09-2024
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-1">
                  Date of Interview: 27-09-2024 (10:00 AM)
                </td>
              </tr>
            </tbody>
          </table>
          <table className="table-auto w-full text-center border border-gray-300 mt-4">
            <thead>
              <tr>
                <th className="border border-gray-300 px-2 py-1">
                  <span className="text-red-500 font-bold">
                    Qualification
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-2 py-1">
                  Candidates Should Possess Diploma/ Degree/ PG/ P.hD (Relevant
                  Subject).
                </td>
              </tr>
            </tbody>
          </table>
          <table className="table-auto w-full text-center border border-gray-300 mt-4">
            <thead>
              <tr>
                <th className="border border-gray-300 px-2 py-1">
                  <span className="text-red-500 font-bold">
                    Vacancy Details
                  </span>
                </th>
              </tr>
              <tr>
                <th className="border border-gray-300 px-2 py-1">
                  <span className="text-blue-500 font-bold">Post Name</span>
                </th>
                <th className="border border-gray-300 px-2 py-1">
                  <span className="text-blue-500 font-bold">Total</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-2 py-1">Physics</td>
                <td className="border border-gray-300 px-2 py-1">02</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-1">
                  Applied Sciences Mathematics
                </td>
                <td className="border border-gray-300 px-2 py-1">01</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-1">
                  Mass Communication & Journalism
                </td>
                <td className="border border-gray-300 px-2 py-1">02</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-1">
                  Chandraprabha Saikiani Centre for Women’s Studies
                </td>
                <td className="border border-gray-300 px-2 py-1">02</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-1">
                  School of Engineering
                </td>
                <td className="border border-gray-300 px-2 py-1">04</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-1">
                  Civil Engineering
                </td>
                <td className="border border-gray-300 px-2 py-1">01</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-1">Design</td>
                <td className="border border-gray-300 px-2 py-1">01</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-1">
                  Electrical Engineering
                </td>
                <td className="border border-gray-300 px-2 py-1">04</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-1">Education</td>
                <td className="border border-gray-300 px-2 py-1">04</td>
              </tr>
            </tbody>
          </table>
          <p className="text-blue-500 font-bold mt-4">
            Interested Candidates Can Read the Full Notification Before Apply
          </p>
          <table className="table-auto w-full text-center border border-gray-300 mt-4">
            <thead>
              <tr>
                <th className="border border-gray-300 px-2 py-1">
                  <span className="text-red-500 font-bold">
                    Important Links
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-2 py-1">
                  <span className="font-bold">Interview Schedule (24-09-2024)</span>
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  <a
                    href="https://img.freejobalert.com/uploads/2024/09/Interview-Date-Tezpur-University-Guest-Faculty-Posts.pdf"
                    target="_blank"
                    className="text-blue-500"
                    rel="nofollow"
                  >
                    Click Here
                  </a>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-1">
                  <span className="font-bold">Notification</span>
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  <a
                    href="https://img.freejobalert.com/uploads/2024/09/Notification-Tezpur-University-Guest-Faculty-Post.pdf"
                    target="_blank"
                    className="text-blue-500"
                    rel="nofollow"
                  >
                    Click Here
                  </a>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-1">
                  <span className="font-bold">Official Website</span>
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  <a
                    href="http://www.tezu.ernet.in/"
                    target="_blank"
                    className="text-blue-500"
                    rel="nofollow"
                  >
                    Click Here
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Professor Post */}
        <div>
          <h2 className="text-2xl font-bold mb-2" id="Professor">
            Professor, Asst Professor & Other Posts
          </h2>
          <p className="text-gray-600 mb-2">
            <span className="font-bold">Post Date:</span> 03-06-2024
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-bold">Total Vacancy:</span> 40
          </p>
          <p className="text-gray-600 mb-4">
            <span className="font-bold">Brief Information:</span> Tezpur
            University has given an employment notification for the recruitment of
            Professor, Asst Professor, Associate Professor Vacancy. Eligible
            Candidates who are interested in the Vacancy details & completed all
            eligibility criteria can read the notification & Apply Online.
          </p>
          <table className="table-auto w-full text-center border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-2 py-1">
                  <span className="text-red-500 font-bold">
                    Important Dates
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-2 py-1">
                  Last Date to Apply Online: 15-06-2024 (Till 11.59 PM)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-1">
                  Last Date for Submission of hard copy of the application:
                  25-06-2024
                </td>
              </tr>
            </tbody>
          </table>
          <table className="table-auto w-full text-center border border-gray-300 mt-4">
            <thead>
              <tr>
                <th className="border border-gray-300 px-2 py-1">
                  <span className="text-red-500 font-bold">
                    Vacancy Details
                  </span>
                </th>
              </tr>
              <tr>
                <th className="border border-gray-300 px-2 py-1">
                  <span className="text-blue-500 font-bold">Post Name</span>
                </th>
                <th className="border border-gray-300 px-2 py-1">
                  <span className="text-blue-500 font-bold">Total</span>
                </th>
                <th className="border border-gray-300 px-2 py-1">
                  <span className="text-blue-500 font-bold">Qualification</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-2 py-1">Professor</td>
                <td className="border border-gray-300 px-2 py-1">22</td>
                <td className="border border-gray-300 px-2 py-1">
                  B.Ed/M.A/M.Ed/PG/Ph.D (Concerned Subject)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-1">
                  Associate Professor
                </td>
                <td className="border border-gray-300 px-2 py-1">13</td>
                <td className="border border-gray-300 px-2 py-1">
                  B.Ed/M.A/M.Ed/PG/Ph.D (Concerned Subject)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-1">
                  Assistant Professor
                </td>
                <td className="border border-gray-300 px-2 py-1">05</td>
                <td className="border border-gray-300 px-2 py-1">
                  M.Ed/PG/Ph.D (Concerned Subject) Must have cleared the
                  National Eligibility Test (NET)
                </td>
              </tr>
            </tbody>
          </table>
          <p className="text-blue-500 font-bold mt-4">
            Interested Candidates Can Read the Full Notification Before Apply
            Online
          </p>
          <table className="table-auto w-full text-center border border-gray-300 mt-4">
            <thead>
              <tr>
                <th className="border border-gray-300 px-2 py-1">
                  <span className="text-red-500 font-bold">
                    Important Links
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-2 py-1">
                  <span className="font-bold">Last Date Extended</span>
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  <a
                    href="https://www.tezu.ernet.in/Admin/Extension-Advt_No_04_05_06_2024.pdf"
                    target="_blank"
                    className="text-blue-500"
                    rel="nofollow"
                  >
                    Click Here
                  </a>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-1">
                  <span className="font-bold">Apply Online</span>
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  <a
                    href="https://curec.samarth.ac.in/index.php/search/site/post?code=8bdc2b4abd41012560c1215a06221523d44d8ce4dfe692f6bba8846e48ba0f4d04%2F2024&amp;id=a25b776221f75e91b745892b82e063c1dab3efdc3c25249e3b0b8cd876fa98e82"
                    target="_blank"
                    className="text-blue-500"
                    rel="nofollow"
                  >
                    Click Here
                  </a>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-1">
                  <span className="font-bold">Notification</span>
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  <a
                    href="https://www.tezu.ernet.in/Admin/Advt_No_04-_2024_Faculty_Final_Detailed.pdf"
                    target="_blank"
                    className="text-blue-500"
                    rel="nofollow"
                  >
                    Click Here
                  </a>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-1">
                  <span className="font-bold">Official Website</span>
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  <a
                    href="http://www.tezu.ernet.in/"
                    target="_blank"
                    className="text-blue-500"
                    rel="nofollow"
                  >
                    Click Here
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Technical Officer Post */}
        <div>
          <h2 className="text-2xl font-bold mb-2" id="Technical-Officer">
            Technical Officer - Online Form
          </h2>
          <p className="text-gray-600 mb-2">
            <span className="font-bold">Post Date:</span> 26-06-2020
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-bold">Total Vacancy:</span> 96
          </p>
          <p className="text-gray-600 mb-4">
            <span className="font-bold">Brief Information:</span> Tezpur
            University has advertised a notification for the recruitment of
            Technical Officer Vacancy from the Candidates of Domicile of Assam.
            Eligible Candidates who are interested in the Vacancy details &
            completed all eligibility criteria can read the notification & Apply
            Online.
          </p>
          <table className="table-auto w-full text-center border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-2 py-1">
                  <span className="text-red-500 font-bold">
                    Important Dates
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-2 py-1">
                  Last Date to Apply Online: 05-07-2020
                </td>
              </tr>
            </tbody>
          </table>
          <table className="table-auto w-full text-center border border-gray-300 mt-4">
            <thead>
              <tr>
                <th className="border border-gray-300 px-2 py-1">
                  <span className="text-red-500 font-bold">
                    Age Limit (as on 01-01-2020)
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-2 py-1">
                  Age Limit: Not more than 35 Years
                </td>
              </tr>
            </tbody>
          </table>
          <table className="table-auto w-full text-center border border-gray-300 mt-4">
            <thead>
              <tr>
                <th className="border border-gray-300 px-2 py-1">
                  <span className="text-red-500 font-bold">Qualification</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-2 py-1">
                  Candidate Should posses B.E/ B.Tech (Civil/ Mechanical
                  Engineering)
                </td>
              </tr>
            </tbody>
          </table>
          <table className="table-auto w-full text-center border border-gray-300 mt-4">
            <thead>
              <tr>
                <th className="border border-gray-300 px-2 py-1">
                  <span className="text-red-500 font-bold">
                    Vacancy Details
                  </span>
                </th>
              </tr>
              <tr>
                <th className="border border-gray-300 px-2 py-1">
                  <span className="text-blue-500 font-bold">Post Name</span>
                </th>
                <th className="border border-gray-300 px-2 py-1">
                  <span className="text-blue-500 font-bold">Total</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-2 py-1">
                  Technical Officer
                </td>
                <td className="border border-gray-300 px-2 py-1">96</td>
              </tr>
            </tbody>
          </table>
          <p className="text-blue-500 font-bold mt-4">
            Interested Candidates Can Read the Full Notification Before Apply
          </p>
          <table className="table-auto w-full text-center border border-gray-300 mt-4">
            <thead>
              <tr>
                <th className="border border-gray-300 px-2 py-1">
                  <span className="text-red-500 font-bold">
                    Important Links
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-2 py-1">
                  <span className="font-bold">Apply Online</span>
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  <a
                    href="https://docs.google.com/forms/d/1dxgobetE9iTpIlqjPsBkfWbwzDeKQl5DpQjYXN764CE/closedform"
                    target="_blank"
                    className="text-blue-500"
                    rel="nofollow"
                  >
                    Click Here
                  </a>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-1">
                  <span className="font-bold">Notification</span>
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  <a
                    href="https://img.freejobalert.com/uploads/2020/06/Notification-Tezpur-University-Technical-Officer-Posts.pdf"
                    target="_blank"
                    className="text-blue-500"
                    rel="nofollow"
                  >
                    Click Here
                  </a>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-1">
                  <span className="font-bold">Official Website</span>
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  <a
                    href="http://www.tezu.ernet.in/"
                    target="_blank"
                    className="text-blue-500"
                    rel="nofollow"
                  >
                    Click Here
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}