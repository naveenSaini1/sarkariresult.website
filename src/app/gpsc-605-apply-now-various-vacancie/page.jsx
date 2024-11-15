export default function GPSCRecruitment() {
  // This component displays recruitment information for various GPSC vacancies in 2024, 
  // including post details, important dates, application fees, and vacancy details with qualifications.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">GPSC Recruitment 2024</h1>

      <p className="text-lg mb-4">
        The Gujarat Public Service Commission (GPSC) has announced recruitment for various
        vacancies, including Assistant Engineer (Civil), District Malaria Officer,
        Assistant Environment Engineer, Executive Engineer (Civil), and others.
      </p>

      <h2 className="text-2xl font-bold mb-2">Key Highlights</h2>
      <ul className="list-disc pl-8 mb-4">
        <li>Total Vacancies: 605</li>
        <li>Application Start Date: 14-11-2024</li>
        <li>Application Last Date: 30-11-2024</li>
        <li>
          Age Limit (as on 30-11-2024): Available on 14-11-2024, at 13:00
        </li>
        <li>
          Application Fee: Available on 14-11-2024, at 13:00
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-2">Brief Information</h2>
      <p className="mb-4">
        The GPSC is inviting applications from eligible candidates for various
        positions. Candidates interested in these vacancies and meeting the
        eligibility criteria can read the notification and apply online.
      </p>

      <h2 className="text-2xl font-bold mb-2">Important Dates</h2>
      <ul className="list-disc pl-8 mb-4">
        <li>
          Starting Date for Apply Online &amp; Payment of Fee:
          <strong>14-11-2024 at 13:00 hrs</strong>
        </li>
        <li>
          Last Date for Apply Online &amp; Payment of Fee:
          <strong>30-11-2024 till 23:59 hrs</strong>
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-2">Vacancy Details</h2>
      <table className="table-auto w-full text-center border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 border">Advt No</th>
            <th className="px-4 py-2 border">Post Name</th>
            <th className="px-4 py-2 border">Total</th>
            <th className="px-4 py-2 border">Age Limit (as on 30-11-2024)</th>
            <th className="px-4 py-2 border">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border">
            <td className="px-4 py-2 border">68/2024-25</td>
            <td className="px-4 py-2 border">
              District Maleria Officer, Class-2, Gujarat Public Health Service
            </td>
            <td className="px-4 py-2 border">47</td>
            <td className="px-4 py-2 border" rowSpan="14">
              Available on 14-11-2024, at 13:00
            </td>
            <td className="px-4 py-2 border">Degree, PG (Relevant Discipline)</td>
          </tr>
          <tr className="border">
            <td className="px-4 py-2 border">69/2024-25</td>
            <td className="px-4 py-2 border">
              Assistant Director (Homoeopathy), Class-1,General State Service
            </td>
            <td className="px-4 py-2 border">01</td>
            <td className="px-4 py-2 border">PG</td>
          </tr>
          <tr className="border">
            <td className="px-4 py-2 border">70/2024-25</td>
            <td className="px-4 py-2 border">
              Administrative Officer, Class-2, Health and Family Welfare
              Department
            </td>
            <td className="px-4 py-2 border">06</td>
            <td className="px-4 py-2 border">Any Degree</td>
          </tr>
          <tr className="border">
            <td className="px-4 py-2 border">71/2024-25</td>
            <td className="px-4 py-2 border">
              Motor Vehicle Prosecutor, Class-2, Ports and Transport Department
            </td>
            <td className="px-4 py-2 border">03</td>
            <td className="px-4 py-2 border">Degree (Law)</td>
          </tr>
          <tr className="border">
            <td className="px-4 py-2 border">72/2024-25</td>
            <td className="px-4 py-2 border">
              Office Superintendent, Class-2, Narmada, Water Resources, Water
              Supply &amp; Kalpasar Department
            </td>
            <td className="px-4 py-2 border">07</td>
            <td className="px-4 py-2 border">Any Degree</td>
          </tr>
          <tr className="border">
            <td className="px-4 py-2 border">73/2024-25</td>
            <td className="px-4 py-2 border">
              Assistant Engineer (Civil), Class-2, Road and Building Department
            </td>
            <td className="px-4 py-2 border">96</td>
            <td className="px-4 py-2 border">B.E/ B.Tech (Civil Engg)</td>
          </tr>
          <tr className="border">
            <td className="px-4 py-2 border">74/2024-25</td>
            <td className="px-4 py-2 border">
              Deputy Director, Class-1, Gujarat Statistical Service
            </td>
            <td className="px-4 py-2 border">01</td>
            <td className="px-4 py-2 border">PG/ Ph. D</td>
          </tr>
          <tr className="border">
            <td className="px-4 py-2 border">75/2024-25</td>
            <td className="px-4 py-2 border">
              Assistant Research Officer, Class-2,Narmada, Water Resources, Water
              Supply &amp; Kalpasar Department
            </td>
            <td className="px-4 py-2 border">04</td>
            <td className="px-4 py-2 border">M.E/ M.Tech</td>
          </tr>
          <tr className="border">
            <td className="px-4 py-2 border">76/2024-25</td>
            <td className="px-4 py-2 border">
              Principal, Government Ideal Residential Schools, (Directorate of
              Developing Castes Welfare), Class-2
            </td>
            <td className="px-4 py-2 border">02</td>
            <td className="px-4 py-2 border">B.Ed &amp; PG</td>
          </tr>
          <tr className="border">
            <td className="px-4 py-2 border">77/2024-25</td>
            <td className="px-4 py-2 border">
              Gujarat Water Supply and Sewerage Board Engineering Service
              (Civil)-Executive Engineer (Civil), Class-1 and Deputy Executive
              Engineer (Civil), Class-2 (GWSSB)
            </td>
            <td className="px-4 py-2 border">33</td>
            <td className="px-4 py-2 border">B.E/ B.Tech (Civil Engg)</td>
          </tr>
          <tr className="border">
            <td className="px-4 py-2 border">78/2024-25</td>
            <td className="px-4 py-2 border">
              Gujarat Water Supply and Sewerage Board Engineering Service
              (Mechanical)-Executive Engineer (Mechanical), Class-1 and Deputy
              Executive Engineer (Mechanical), Class-2 (GWSSB)
            </td>
            <td className="px-4 py-2 border">08</td>
            <td className="px-4 py-2 border">B.E/ B.Tech (Mechanical Engg)</td>
          </tr>
          <tr className="border">
            <td className="px-4 py-2 border">79/2024-25</td>
            <td className="px-4 py-2 border">
              Assistant Environment Engineer, Class-2 (GPCB)
            </td>
            <td className="px-4 py-2 border">144</td>
            <td className="px-4 py-2 border">
              B.E/ B.Tech (Civil/ Environment/ Chemical)
            </td>
          </tr>
          <tr className="border">
            <td className="px-4 py-2 border">80/2024-25</td>
            <td className="px-4 py-2 border">
              Assistant Law Officer, Class-2 (GPCB)
            </td>
            <td className="px-4 py-2 border">03</td>
            <td className="px-4 py-2 border">Degree of L.L.B</td>
          </tr>
          <tr className="border">
            <td className="px-4 py-2 border">81/2024-25</td>
            <td className="px-4 py-2 border">
              Assistant Engineer (Civil), Class-2, Narmada Water Resources,
              Water Supply and Kalpsar Department
            </td>
            <td className="px-4 py-2 border">250</td>
            <td className="px-4 py-2 border">B.E/ B.Tech (Civil Engg)</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mb-2">Important Links</h2>
      <ul className="list-disc pl-8 mb-4">
        <li>
          <a
            href="https://gpsc.gujarat.gov.in/"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Official Website
          </a>
        </li>
        <li>
          <a
            href="https://img.freejobalert.com/uploads/2024/11/Short-Notification-GPSC-Various-Vacancy-2024.pdf"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="nofollow noopener"
          >
            Short Notification
          </a>
        </li>
        <li>
          <span className="text-gray-500">Apply Online:</span> Available on
          14-11-2024, at 13:00
        </li>
        <li>
          <span className="text-gray-500">Detailed Notification:</span> Available
          on 14-11-2024, at 13:00
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-2">FAQs</h2>
      <ul className="list-disc pl-8 mb-4">
        <li>
          <strong>What is the starting date to apply online for GPSC AE, AEE,
          Executive Engineer &amp; Other 2024?</strong>
          <br/>
          <strong>Ans:</strong> Starting Date to apply online is 14-11-2024.
        </li>
        <li>
          <strong>What is the last date to apply online for GPSC AE, AEE,
          Executive Engineer &amp; Other 2024?</strong>
          <br/>
          <strong>Ans:</strong> Last Date for apply online is 30-11-2024.
        </li>
        <li>
          <strong>What is the Eligibility to apply for GPSC AE, AEE, Executive
          Engineer &amp; Other 2024?</strong>
          <br/>
          <strong>Ans:</strong> Degree, B.Ed, PG, Ph. D.
        </li>
        <li>
          <strong>What is the Minimum Age Limit to apply for GPSC AE, AEE,
          Executive Engineer &amp; Other 2024?</strong>
          <br/>
          <strong>Ans:</strong> 20 Years.
        </li>
        <li>
          <strong>On what basis age limit is calculated for GPSC AE, AEE,
          Executive Engineer &amp; Other 2024?</strong>
          <br/>
          <strong>Ans:</strong> Age Will be Calculated as on 30-11-2024.
        </li>
        <li>
          <strong>How many vacancies are being recruited by GPSC AE, AEE,
          Executive Engineer &amp; Other 2024?</strong>
          <br/>
          <strong>Ans:</strong> Total 605 Vacancies.
        </li>
        <li>
          <strong>How to pay fee to apply for GPSC AE, AEE, Executive
          Engineer &amp; Other 2024?</strong>
          <br/>
          <strong>Ans:</strong> Through Online.
        </li>
      </ul>

      <p className="text-center mt-4 text-gray-500">
        Keywords: GPSC, Recruitment, 2024, Assistant Engineer, AEE, Executive
        Engineer, Vacancy, Gujarat, Jobs
      </p>
    </div>
  );
}