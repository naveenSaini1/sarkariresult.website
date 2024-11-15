export default function MMMUTRecruitment() {
  // This component displays recruitment information for MMMUT, Gorakhpur.
  // It includes details like the job title, application dates, and vacancy information.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        MMMUT Various Vacancy 2024
      </h1>
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-gray-600">
            <span className="font-bold">Post Date:</span> 05-11-2024
          </p>
          <p className="text-gray-600">
            <span className="font-bold">Latest Update:</span> 13-11-2024
          </p>
        </div>
        <div>
          <p className="text-gray-600">
            <span className="font-bold">Total Vacancy:</span> 61
          </p>
        </div>
      </div>

      <p className="text-gray-700 mb-4">
        Madan Mohan Malaviya University of Technology (MMMUT), Gorakhpur has
        given an employment notification for the recruitment of Professor, Asst
        Professor & Other vacancy on Contract basis. Those Candidates who are
        interested in the vacancy details & completed all eligibility criteria
        can read the Notification & Apply Online.
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Highlights</h2>
      <ul className="list-disc text-gray-700 mb-4">
        <li>
          <span className="font-bold">Job Title:</span> Professor, Asst
          Professor &amp; Other
        </li>
        <li>
          <span className="font-bold">Employment Type:</span> Contract
        </li>
        <li>
          <span className="font-bold">Location:</span> Gorakhpur
        </li>
        <li>
          <span className="font-bold">Total Vacancies:</span> 61
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Application Fee</h2>
      <ul className="list-disc text-gray-700 mb-4">
        <li>
          <span className="font-bold">General, OBC & EWS Candidates:</span> Rs.
          2500/-
        </li>
        <li>
          <span className="font-bold">SC/ST & PwD Candidates:</span> Rs. 1250/-
        </li>
        <li>
          <span className="font-bold">Mode of Payment:</span> Through Online
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Important Dates</h2>
      <ul className="list-disc text-gray-700 mb-4">
        <li>
          <span className="font-bold">Starting Date for Apply Online:</span>{' '}
          08-10-2024
        </li>
        <li>
          <span className="font-bold">Last Date for Apply Online:</span> 08-11-2024
        </li>
        <li>
          <span className="font-bold">Written Exam Date for Assistant Professor:</span>{' '}
          29 &amp; 30-11-2024 (10:00 AM to 12:30 PM &amp; 02:30 PM to 05:00 PM)
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Age Limit</h2>
      <p className="text-gray-700 mb-4">AS per UGC Regulation</p>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Vacancy Details</h2>
      <table className="table-auto w-full mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left font-bold text-gray-800">
              Post Name
            </th>
            <th className="px-4 py-2 text-center font-bold text-gray-800">
              Total
            </th>
            <th className="px-4 py-2 text-left font-bold text-gray-800">
              Qualification
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 text-left">Professor</td>
            <td className="px-4 py-2 text-center">09</td>
            <td className="px-4 py-2 text-left" rowSpan={2}>
              Degree/PG/Ph.D (Relevant Subject)
              <br/>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-left">Associate Professor</td>
            <td className="px-4 py-2 text-center">16</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-left">Assistant Professor</td>
            <td className="px-4 py-2 text-center">36</td>
            <td className="px-4 py-2 text-left">
              B.E./ B.Tech./ B.S./ M.E./ M.Tech./ M.S. or Integrated M.Tech.
              <br/>
              (Relevant Branch)
            </td>
          </tr>
        </tbody>
      </table>

      <p className="text-gray-700 mb-4">
        Interested Candidates Can Read the Full Notification Before Apply Online
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Important Links</h2>
      <ul className="list-disc text-gray-700 mb-4">
        <li>
          <span className="font-bold">
            Written Exam Date for Assistant Professor (13-11-2024)
          </span>
          <a
            href="https://img.freejobalert.com/uploads/2024/11/Exam-Date-MMMUT-Assistant-Professor-Posts.pdf"
            target="_blank"
            rel="nofollow"
            className="text-blue-500 hover:underline"
          >
            Click Here
          </a>
        </li>
        <li>
          <span className="font-bold">Apply Online</span>
          <a
            href="https://mmmutnt.samarth.edu.in/index.php/site/login"
            target="_blank"
            rel="nofollow"
            className="text-blue-500 hover:underline"
          >
            Click here
          </a>
        </li>
        <li>
          <span className="font-bold">Notification</span>
          <a
            href="https://img.freejobalert.com/uploads/2024/11/Notification-MMMUT-Various-Vacancy.pdf"
            target="_blank"
            rel="nofollow"
            className="text-blue-500 hover:underline"
          >
            Click here
          </a>
        </li>
        <li>
          <span className="font-bold">Official Website</span>
          <a
            href="http://www.mmmut.ac.in/"
            target="_blank"
            rel="nofollow"
            className="text-blue-500 hover:underline"
          >
            Click here
          </a>
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">FAQs</h2>
      <ul className="list-disc text-gray-700 mb-4">
        <li>
          <span className="font-bold">
            What is the last date to apply for Professor, Asst Professor &amp;
            Other 2024?
          </span>
          <br/>
          <span className="font-bold">Ans:</span> Last date for Apply is
          08-11-2024.
        </li>
        <li>
          <span className="font-bold">
            What is the Eligibility to apply for Professor, Asst Professor &amp;
            Other 2024?
          </span>
          <br/>
          <span className="font-bold">Ans:</span> Degree/PG/Ph.D (Relevant
          Subject).
        </li>
        <li>
          <span className="font-bold">
            What is the age to apply for Professor, Asst Professor &amp; Other
            2024?
          </span>
          <br/>
          <span className="font-bold">Ans:</span> AS per UGC Regulations
        </li>
        <li>
          <span className="font-bold">
            How many vacancies are released for Professor, Asst Professor &amp;
            Other 2024?
          </span>
          <br/>
          <span className="font-bold">Ans:</span> Total 61 Vacancies.
        </li>
        <li>
          <span className="font-bold">
            How much of fee pay for Professor, Asst Professor &amp; Other 2024?
          </span>
          <br/>
          <span className="font-bold">Ans:</span> For General, OBC &amp; EWS
          Category : Rs. 2500/- &amp; SC/ST/PwBD Category : Rs. 1250/-
        </li>
        <li>
          <span className="font-bold">
            How to pay fee to apply for Professor, Asst Professor &amp; Other
            2024?
          </span>
          <br/>
          <span className="font-bold">Ans:</span> Through Online.
        </li>
      </ul>

      <p className="text-gray-700 mt-4">
        **Keywords:** MMMUT, Recruitment, Professor, Assistant Professor,
        Vacancy, Gorakhpur, Application, Online, Eligibility, Age Limit, Fee,
        Important Dates
      </p>
    </div>
  );
}