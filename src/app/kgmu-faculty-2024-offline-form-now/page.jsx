export default function KGMUFacultyRecruitment() {
  // This component displays recruitment information for KGMU Faculty positions. 
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">KGMU Faculty Recruitment 2024</h1>

      <p className="mb-4 text-center">
        King George’s Medical University (KGMU), Lucknow is inviting applications for the recruitment of Faculty
        positions (Professor, Assistant Professor &amp; Other) on a Contract Basis.
      </p>

      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Key Highlights</h2>
        <ul className="list-disc ml-6">
          <li>
            <span className="font-bold">Name of the Post:</span> KGMU Faculty Offline Form 2024
          </li>
          <li>
            <span className="font-bold">Post Date:</span> 05-11-2024
          </li>
          <li>
            <span className="font-bold">Total Vacancy:</span> 81
          </li>
          <li>
            <span className="font-bold">Last Date to Apply:</span> 08-11-2024
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold mb-2">Application Fee</h2>
      <ul className="list-disc ml-6">
        <li>
          <span className="font-bold">For UR/OBC Category Candidates:</span> Rs. 7080/- (Fee - Rs. 6,000/- + 18% GST)
        </li>
        <li>
          <span className="font-bold">For SC/ ST Category Candidates:</span> Rs. 4130/- (Fee - Rs. 3,500/- + 18% GST)
        </li>
        <li>
          <span className="font-bold">Payment Mode:</span> Through Demand Draft/Banker’s Cheque
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-2">Vacancy Details</h2>
      <table className="table-auto w-full mt-4 border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left font-bold">Post Name</th>
            <th className="px-4 py-2 text-center font-bold">Total</th>
            <th className="px-4 py-2 text-left font-bold">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Professor</td>
            <td className="px-4 py-2 text-center">01</td>
            <td className="px-4 py-2">
              MD (Sports Medicine)/ MD (PMR) MS<br/>
              (Orthopaedics)/MD (Physiology)
            </td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Additional Professor</td>
            <td className="px-4 py-2 text-center">02</td>
            <td className="px-4 py-2">
              MD/M.Ch/DNB (Emergency Medicine/Paediatric Orthopaedics)
            </td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Associate Professor</td>
            <td className="px-4 py-2 text-center">05</td>
            <td className="px-4 py-2">
              MD/MS/DM/DNB (Concerned Speciality)
            </td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Assistant Professor</td>
            <td className="px-4 py-2 text-center">73</td>
            <td className="px-4 py-2">
              MD/MS/M.Ch/DM/DNB/MDS (Concerned Speciality)
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mb-2">Important Links</h2>
      <ul className="list-disc ml-6">
        <li>
          <span className="font-bold">Application Form:</span>{' '}
          <a href="https://img.freejobalert.com/uploads/2024/11/Application-Form-KGMU-Faculty-Posts.pdf" target="_blank" rel="noopener" className="text-blue-500 underline">
            Click Here
          </a>
        </li>
        <li>
          <span className="font-bold">Notification:</span>{' '}
          <a href="https://img.freejobalert.com/uploads/2024/11/Notification-KGMU-Faculty-Posts.pdf" target="_blank" rel="noopener" className="text-blue-500 underline">
            Click Here
          </a>
        </li>
        <li>
          <span className="font-bold">Official Website:</span>{' '}
          <a href="https://www.kgmu.org/" target="_blank" rel="noopener" className="text-blue-500 underline">
            Click Here
          </a>
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-2">FAQs</h2>
      <ul className="list-disc ml-6">
        <li>
          <span className="font-bold">What is the last date to apply for KGMU Faculty 2024?</span>
          <br/>
          <span className="font-bold">Ans:</span> Last date for Apply is 08-11-2024.
        </li>
        <li>
          <span className="font-bold">What is the Eligibility to apply for KGMU Faculty 2024?</span>
          <br/>
          <span className="font-bold">Ans:</span> M.D/M.S/M.Ch/D.M/D.N.B/M.D.S (Concerned Speciality).
        </li>
        <li>
          <span className="font-bold">How many vacancies are released for KGMU Faculty 2024?</span>
          <br/>
          <span className="font-bold">Ans:</span> Total 81 Vacancies.
        </li>
        <li>
          <span className="font-bold">How much of fee pay for KGMU Faculty 2024?</span>
          <br/>
          <span className="font-bold">Ans:</span> For UR/OBC: Rs. 7080/- &amp; SC/ST: Rs. 4130/-
        </li>
        <li>
          <span className="font-bold">How to pay fee to apply for KGMU Faculty 2024?</span>
          <br/>
          <span className="font-bold">Ans:</span> Through Demand Draft/Banker’s Cheque.
        </li>
      </ul>

      <p className="mt-4 text-center">
        <span className="font-bold">Keywords:</span> KGMU, Faculty, Recruitment, Professor, Assistant Professor,
        Application, Form, Notification, Last Date, Fee, Vacancy, Eligibility,
        Qualification, Important Links, FAQs.
      </p>
    </div>
  );
}