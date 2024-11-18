export default function RITESRecruitment() {
  // This component displays recruitment information for various vacancies at RITES Ltd. 
  // It includes details about the post, application fee, important dates, and vacancy details.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">RITES Ltd Recruitment 2024</h1>

      <p className="text-gray-600 mb-4">
        Rail India Technical and Economic Services Limited (RITES) is hiring for various vacancies on a contract basis,
        including Assistant Highway Engineer, Assistant Bridge/Structural Engineer, and Quality Control Engineer.
        This is a great opportunity to work with a leading company in the infrastructure sector.
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Highlights</h2>

      <ul className="list-disc text-gray-600 mb-4">
        <li><strong>Post Date:</strong> 15-11-2024</li>
        <li><strong>Total Vacancy:</strong> 60</li>
        <li><strong>Application Fee:</strong> Nil for all candidates</li>
        <li><strong>Starting Date to Apply Online:</strong> 14-11-2024</li>
        <li><strong>Last Date to Apply Online:</strong> 06-12-2024</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Vacancy Details</h2>

      <table className="table-auto w-full text-center text-gray-600 border-collapse border border-gray-300 mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-gray-100 border border-gray-300">VC No.</th>
            <th className="px-4 py-2 bg-gray-100 border border-gray-300">Post Name</th>
            <th className="px-4 py-2 bg-gray-100 border border-gray-300">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border border-gray-300">200/24</td>
            <td className="px-4 py-2 border border-gray-300">Assistant Highway Engineer</td>
            <td className="px-4 py-2 border border-gray-300">34</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">201/24</td>
            <td className="px-4 py-2 border border-gray-300">Assistant Bridge/Structural Engineer</td>
            <td className="px-4 py-2 border border-gray-300">06</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">202/24</td>
            <td className="px-4 py-2 border border-gray-300">Quality Control Engineer</td>
            <td className="px-4 py-2 border border-gray-300">20</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Important Links</h2>

      <ul className="list-disc text-gray-600 mb-4">
        <li>
          <a
            href="https://recruit.rites.com/frmRegistration.aspx"
            target="_blank"
            rel="noopener"
            className="text-blue-500 hover:underline"
          >
            Apply Online
          </a>
        </li>
        <li>
          <a
            href="https://img.freejobalert.com/uploads/2024/11/Notification-RITES-LTD-Assistant-Highway-Engineer-Quality-Control-Engineer-Other.pdf"
            target="_blank"
            rel="noopener"
            className="text-blue-500 hover:underline"
          >
            Notification
          </a>
        </li>
        <li>
          <a
            href="https://www.rites.com/"
            target="_blank"
            rel="noopener"
            className="text-blue-500 hover:underline"
          >
            Official Website
          </a>
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Eligibility Criteria</h2>

      <ul className="list-disc text-gray-600 mb-4">
        <li>Candidates should possess Diploma/Degree/PG (Civil Engg).</li>
        <li>Maximum Age Limit: 40 Years (as on 06-12-2024)</li>
        <li>Age relaxation is applicable as per rules.</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>

      <ul className="list-disc text-gray-600 mb-4">
        <li>
          <strong>What is the starting date to apply online for RITES Ltd Assistant Highway Engineer, Quality Control Engineer & Other 2024?</strong>
          <br/>
          <strong>Ans:</strong> Starting Date to apply online is 14-11-2024.
        </li>
        <li>
          <strong>What is the last date to apply for RITES Ltd Assistant Highway Engineer, Quality Control Engineer & Other 2024?</strong>
          <br/>
          <strong>Ans:</strong> Last Date for apply online is 06-12-2024.
        </li>
        <li>
          <strong>What is the Eligibility to apply for RITES Ltd Assistant Highway Engineer, Quality Control Engineer & Other 2024?</strong>
          <br/>
          <strong>Ans:</strong> Diploma/Degree/PG (Civil Engg).
        </li>
        <li>
          <strong>What is the Maximum Age Limit to apply for RITES Ltd Assistant Highway Engineer, Quality Control Engineer & Other 2024?</strong>
          <br/>
          <strong>Ans:</strong> 40 Years.
        </li>
        <li>
          <strong>On what basis age limit is calculated for RITES Ltd Assistant Highway Engineer, Quality Control Engineer & Other 2024?</strong>
          <br/>
          <strong>Ans:</strong> Age Will be Calculated as on 06-12-2024.
        </li>
        <li>
          <strong>How many vacancies are being recruited by RITES Ltd Assistant Highway Engineer, Quality Control Engineer & Other 2024?</strong>
          <br/>
          <strong>Ans:</strong> Total 60 Vacancies.
        </li>
        <li>
          <strong>How much fee to pay to apply for RITES Ltd Assistant Highway Engineer, Quality Control Engineer & Other 2024?</strong>
          <br/>
          <strong>Ans:</strong> Application Fee: Nil
        </li>
      </ul>

      <div className="text-gray-600 mt-4">
        <p className="mb-2">
          <strong>Keywords:</strong> RITES, recruitment, vacancies, Assistant Highway Engineer, Assistant Bridge/Structural Engineer,
          Quality Control Engineer, job opportunities, infrastructure, application fee, important dates, eligibility criteria, FAQs.
        </p>
      </div>
    </div>
  );
}