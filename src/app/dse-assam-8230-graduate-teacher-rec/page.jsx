export default function AssamGraduateTeacherRecruitment() {
  // This component displays recruitment information for the DSE, Assam Graduate Teacher Online Form 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">
        DSE, Assam Graduate Teacher Online Form 2024
      </h1>
      <p className="text-center mb-4">
        <span className="text-green-500 font-bold">Name of the Post:</span>{' '}
        DSE, Assam Graduate Teacher Online Form 2024
      </p>

      <div className="flex justify-between mb-4">
        <p className="text-green-500 font-bold">Post Date:</p>
        <p>18-10-2024</p>
      </div>

      <div className="flex justify-between mb-4">
        <p className="text-green-500 font-bold">Total Vacancy:</p>
        <p>8230</p>
      </div>

      <p className="mb-4">
        <span className="text-red-500 font-bold">Brief Information:</span>{' '}
        Directorate of Secondary Education, Assam has given an employment
        notification for the recruitment of Graduate Teacher (Arts, Science,
        Hindi &amp; Sanskrit) Vacancy. Those Candidates who are interested in
        the vacancy details &amp; completed all eligibility criteria can read
        the Notification &amp; Apply Online.
      </p>

      <p className="text-center font-bold mb-4">Key Highlights</p>
      <ul className="list-disc list-inside">
        <li>
          <span className="font-bold">Starting Date for Apply Online &amp; Payment of Fee:</span>{' '}
          21-10-2024 (11:30 AM)
        </li>
        <li>
          <span className="font-bold">Last Date to Apply Online &amp; Payment of Fee:</span>{' '}
          15-11-2024 (Mid Night)
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-center mb-4">
        Directorate of Secondary Education, Assam
      </h2>
      <p className="text-center font-bold mb-4">Graduate Teacher Vacancy 2024</p>

      <h3 className="text-xl font-bold text-center mb-4">Application Fee</h3>
      <ul className="list-disc list-inside mb-4">
        <li>For UR Category: Rs.500/-</li>
        <li>
          For OBC/ MOBC/ ST(H)/ ST(P)/ SC/ PwD/ Tea Tribes/ Adivasi/ Others Category:{' '}
          Rs.350/-
        </li>
        <li>Payment Mode: Through Online</li>
      </ul>

      <h3 className="text-xl font-bold text-center mb-4">Important Dates</h3>
      <ul className="list-disc list-inside mb-4">
        <li>
          <span className="font-bold">Starting Date for Apply Online &amp; Payment of Fee:</span>{' '}
          21-10-2024 (11:30 AM)
        </li>
        <li>
          <span className="font-bold">Last Date to Apply Online &amp; Payment of Fee:</span>{' '}
          15-11-2024 (Mid Night)
        </li>
      </ul>

      <h3 className="text-xl font-bold text-center mb-4">Age Limit (as on 01-01-2023)</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Minimum Age: 18 Years</li>
        <li>Maximum Age for UR Category: 40 Years</li>
        <li>Maximum Age for Ex-Servicemen: 42 Years</li>
        <li>Maximum Age for OBC/ MOBC: 43 Years</li>
        <li>Maximum Age for SC/ ST(P)/ ST(H): 45 Years</li>
        <li>Maximum Age for PWD Candidates: 50 Years</li>
        <li>
          Age relaxation is admissible for SC/ST/OBC/ PH/ Ex-servicemen
          candidates as per rules.
        </li>
        <li>For More Details Refer the Notification</li>
      </ul>

      <h3 className="text-xl font-bold text-center mb-4">Qualification</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Candidates Should Possess Degree/ B.T/ B.Ed/ PG (Relevant Subject)</li>
      </ul>

      <h3 className="text-xl font-bold text-center mb-4">Vacancy Details</h3>

      {/* Vacancy Details Table - Government Secondary Schools */}
      <table className="table-auto w-full text-center mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2 font-bold">Post Name</th>
            <th className="px-4 py-2 font-bold">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">Graduate Teacher (Science)</td>
            <td className="px-4 py-2">56</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Graduate Teacher (Mathematics)</td>
            <td className="px-4 py-2">29</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Graduate Teacher (Arts)</td>
            <td className="px-4 py-2">126</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Graduate Teacher (Hindi)</td>
            <td className="px-4 py-2">12</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Graduate Teacher (Sanskrit)</td>
            <td className="px-4 py-2">03</td>
          </tr>
        </tbody>
      </table>

      {/* Vacancy Details Table - Government Provincialized Schools */}
      <table className="table-auto w-full text-center mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2 font-bold">Post Name</th>
            <th className="px-4 py-2 font-bold">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">Graduate Teacher (Science)</td>
            <td className="px-4 py-2">2111</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Graduate Teacher (Mathematics)</td>
            <td className="px-4 py-2">1737</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Graduate Teacher (Arts)</td>
            <td className="px-4 py-2">3300</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Graduate Teacher (Hindi)</td>
            <td className="px-4 py-2">630</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Graduate Teacher (Sanskrit)</td>
            <td className="px-4 py-2">8004</td>
          </tr>
        </tbody>
      </table>

      <p className="text-center font-bold mb-4">Important Links</p>
      <table className="table-auto w-full text-center mb-4">
        <tbody>
          <tr>
            <td className="px-4 py-2 font-bold">Apply Online</td>
            <td className="px-4 py-2">Available on 21-10-2024</td>
          </tr>
          <tr>
            <td className="px-4 py-2 font-bold">Notification</td>
            <td className="px-4 py-2">
              <a
                href="https://img.freejobalert.com/uploads/2024/10/Notification-DSE-Assam-Graduate-Teacher-Posts.jpeg"
                className="underline text-blue-500"
                target="_blank"
                rel="nofollow"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 font-bold">Official Website</td>
            <td className="px-4 py-2">
              <a
                href="https://madhyamik.assam.gov.in/"
                className="underline text-blue-500"
                target="_blank"
                rel="nofollow"
              >
                Click Here
              </a>
            </td>
          </tr>
        </tbody>
      </table>

      <p className="text-center mb-4">
        Interested Candidates Can Read the Full Notification Before Apply Online.
      </p>

      <p className="text-center mb-4">
        This recruitment opportunity is open to all eligible candidates.
      </p>

      <p className="text-center font-bold mb-4">
        Keywords: DSE, Assam, Graduate Teacher, Recruitment, Online Form, 2024
      </p>
    </div>
  );
}