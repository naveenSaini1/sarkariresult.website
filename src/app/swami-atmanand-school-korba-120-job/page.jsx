export default function RecruitmentInformation() {
  // This component displays recruitment information for Swami Atmanand School, Korba. It includes details about the position, application process, important dates, age limits, vacancy details, and FAQs.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Swami Atmanand School, Korba Recruitment 2024</h1>
      <p className="text-lg mb-4 text-center">
        Swami Atmanand Utkrisht English Medium School, Korba is hiring for various teaching and administrative positions on a contract basis.
      </p>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Key Highlights</h2>
        <ul className="list-disc pl-5">
          <li>
            <span className="font-bold">Post Name:</span> Various Vacancy
          </li>
          <li>
            <span className="font-bold">Total Vacancy:</span> 120
          </li>
          <li>
            <span className="font-bold">Starting Date to Apply:</span> 12-11-2024
          </li>
          <li>
            <span className="font-bold">Last Date to Apply:</span> 26-11-2024 (11:59 PM)
          </li>
          <li>
            <span className="font-bold">Application Fee:</span> Nil
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold mb-2">Brief Information</h2>
      <p className="mb-4">
        Swami Atmanand Utkrisht English Medium School, Korba has announced the recruitment of Lecturers, Teachers, and other staff on a contract basis. Individuals who meet the eligibility criteria are encouraged to apply online.
      </p>

      <h2 className="text-2xl font-bold mb-2">Important Dates</h2>
      <ul className="list-disc pl-5 mb-4">
        <li>
          <span className="font-bold">Starting Date to Apply Online:</span> 12-11-2024
        </li>
        <li>
          <span className="font-bold">Last Date to Apply Online:</span> 26-11-2024 (11:59 PM)
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-2">Age Limit</h2>
      <ul className="list-disc pl-5 mb-4">
        <li>
          <span className="font-bold">Minimum Age Limit:</span> Not be less than 21 Years
        </li>
        <li>
          <span className="font-bold">Maximum Age Limit:</span> Not more than 40 Years
        </li>
        <li>Age relaxation is applicable as per rules.</li>
      </ul>

      <h2 className="text-2xl font-bold mb-2">Vacancy Details</h2>
      <table className="table-auto w-full text-center mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2 font-bold border border-gray-300">Post Name</th>
            <th className="px-4 py-2 font-bold border border-gray-300">Total</th>
            <th className="px-4 py-2 font-bold border border-gray-300">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Lecturer</td>
            <td className="px-4 py-2 border border-gray-300">23</td>
            <td className="px-4 py-2 border border-gray-300">B.Ed, PG (Relevant Subject)</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Teacher</td>
            <td className="px-4 py-2 border border-gray-300">33</td>
            <td className="px-4 py-2 border border-gray-300">B.Ed, PG (Relevant Subject), TET</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Computer Teacher</td>
            <td className="px-4 py-2 border border-gray-300">02</td>
            <td className="px-4 py-2 border border-gray-300">
              BCA/B.Sc/B.E/B.Tech (Computer Science/Information Technology)
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Head Teacher</td>
            <td className="px-4 py-2 border border-gray-300">01</td>
            <td className="px-4 py-2 border border-gray-300">B.Ed</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Head Master</td>
            <td className="px-4 py-2 border border-gray-300">02</td>
            <td className="px-4 py-2 border border-gray-300">Higher Secondary, D.Ed</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Exercise Teacher</td>
            <td className="px-4 py-2 border border-gray-300">01</td>
            <td className="px-4 py-2 border border-gray-300">
              Higher Secondary, D.P.Ed. or B.P.Ed
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Librarian</td>
            <td className="px-4 py-2 border border-gray-300">04</td>
            <td className="px-4 py-2 border border-gray-300">Higher Secondary, B.Lib</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Assistant Teacher</td>
            <td className="px-4 py-2 border border-gray-300">32</td>
            <td className="px-4 py-2 border border-gray-300">
              Higher Secondary, D.Ed/ D.L.Ed, TET
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">
              Assistant Teacher Science/Laboratory Assistant
            </td>
            <td className="px-4 py-2 border border-gray-300">13</td>
            <td className="px-4 py-2 border border-gray-300">
              Higher Secondary, D.Ed (Relevant Subject), TET
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Assistant Grade-02</td>
            <td className="px-4 py-2 border border-gray-300">05</td>
            <td className="px-4 py-2 border border-gray-300">
              Higher Secondary/Diploma/Certificate in Computer Qualification
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Assistant Grade-03</td>
            <td className="px-4 py-2 border border-gray-300">04</td>
            <td className="px-4 py-2 border border-gray-300">
              Higher Secondary/Diploma/Certificate in Computer Qualification
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mb-2">Important Links</h2>
      <ul className="list-disc pl-5 mb-4">
        <li>
          <span className="font-bold">Apply Online:</span>{' '}
          <a
            href="https://korba.gov.in/en/notice_category/recruitment/"
            target="_blank"
            rel="noopener"
            className="underline text-blue-500"
          >
            Click Here
          </a>
        </li>
        <li>
          <span className="font-bold">Notification:</span>{' '}
          <a
            href="https://img.freejobalert.com/uploads/2024/11/Notification-Swami-Atmanand-School-Korba-Lecturer-Teacher-Other-Posts.pdf"
            target="_blank"
            rel="noopener"
            className="underline text-blue-500"
          >
            Click Here
          </a>
        </li>
        <li>
          <span className="font-bold">Official Website:</span>{' '}
          <a
            href="https://korba.gov.in/en/"
            target="_blank"
            rel="noopener"
            className="underline text-blue-500"
          >
            Click Here
          </a>
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-2">FAQs</h2>
      <div className="mb-4">
        <p className="font-bold mb-2">
          1. What is the starting date to apply online for Swami Atmanand School,
          Korba Lecturer, Teacher &amp; Other 2024?
        </p>
        <p>Ans: Starting Date to apply online is 12-11-2024.</p>
      </div>
      <div className="mb-4">
        <p className="font-bold mb-2">
          2. What is the last date to apply online for Swami Atmanand School,
          Korba Lecturer, Teacher &amp; Other 2024?
        </p>
        <p>Ans: Last Date for apply online is 26-11-2024.</p>
      </div>
      <div className="mb-4">
        <p className="font-bold mb-2">
          3. What is the Eligibility to apply for Swami Atmanand School, Korba
          Lecturer, Teacher &amp; Other 2024?
        </p>
        <p>Ans: 10+2/Degree/B.Ed/PG (Relevant Subject),TET.</p>
      </div>
      <div className="mb-4">
        <p className="font-bold mb-2">
          4. What is the Minimum Age Limit to apply for Swami Atmanand School,
          Korba Lecturer, Teacher &amp; Other 2024?
        </p>
        <p>Ans: 21 Years</p>
      </div>
      <div className="mb-4">
        <p className="font-bold mb-2">
          5. On what basis age limit is calculated for Swami Atmanand School,
          Korba Lecturer, Teacher &amp; Other 2024?
        </p>
        <p>Ans: Age Will be Calculated as on 01-11-2024.</p>
      </div>
      <div className="mb-4">
        <p className="font-bold mb-2">
          6. How many vacancies are being recruited by Swami Atmanand School,
          Korba Lecturer, Teacher &amp; Other 2024?
        </p>
        <p>Ans: Total 120 Vacancies.</p>
      </div>
      <div className="mb-4">
        <p className="font-bold mb-2">
          7. How much fee to pay to apply for Swami Atmanand School, Korba
          Lecturer, Teacher &amp; Other 2024?
        </p>
        <p>Ans: Nil.</p>
      </div>
      <p className="text-center text-gray-600">
        Keywords: Swami Atmanand School, Korba, Recruitment, Lecturer, Teacher,
        Vacancy, Application, Eligibility, Age Limit, Important Dates,
        Notification, Apply Online.
      </p>
    </div>
  );
}