export default function RecruitmentInfo() {
  // This component displays recruitment information for RIMS, Adilabad Various Vacancy Walk In 2024.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        RIMS, Adilabad Various Vacancy Walk In 2024
      </h1>
      <p className="text-gray-600 mb-4">
        Regional Institute of Medical Sciences (RIMS), Adilabad has announced
        vacancies for Professor, Assistant Professor, Associate Professor, and
        other positions. Interested candidates can find the details below.
      </p>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Post Details</h2>
        <ul className="list-disc ml-6">
          <li className="mb-2">
            <span className="font-bold">Name of the Post:</span> RIMS, Adilabad
            Various Vacancy Walk In 2024
          </li>
          <li className="mb-2">
            <span className="font-bold">Post Date:</span> 26-10-2024
          </li>
          <li className="mb-2">
            <span className="font-bold">Total Vacancy:</span> 79
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Brief Information</h2>
        <p className="text-gray-600 mb-4">
          Regional Institute of Medical sciences (RIMS), Adilabad has advertised
          a Notification for the recruitment of Professor, Assistant Professor,
          Associate Professor, & Other Vacancy. Those Candidates who are
          interested in the vacancy details & completed all eligibility criteria
          can read the Notification & Attend.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Key Highlights</h2>
        <ul className="list-disc ml-6">
          <li className="mb-2">
            <span className="font-bold">Important Dates:</span> Date of Walk in
            Interview: 29-10-2024 from 10:30 AM to 04:00 PM
          </li>
          <li className="mb-2">
            <span className="font-bold">Age Limit (as on 19-10-2024):</span>{' '}
            Maximum Age Limit: Below 64 Years. Age relaxation is admissible as
            per rules.
          </li>
          <li className="mb-2">
            <span className="font-bold">Qualification:</span> Candidates Should
            Possess MBBS /MD/ MS/ DM/DNB/ M.Ch (Concerned Subject)
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Vacancy Details</h2>
        <table className="table-auto w-full text-center border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2">Post Name</th>
              <th className="border px-4 py-2">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Professor</td>
              <td className="border px-4 py-2">06</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Associate Professor</td>
              <td className="border px-4 py-2">10</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Assistant Professor</td>
              <td className="border px-4 py-2">22</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Super Specialty</td>
              <td className="border px-4 py-2">27</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Tutor</td>
              <td className="border px-4 py-2">10</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">CMO</td>
              <td className="border px-4 py-2">03</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">CAS</td>
              <td className="border px-4 py-2">01</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Important Links</h2>
        <table className="table-auto w-full text-center border-collapse">
          <tbody>
            <tr>
              <td className="border px-4 py-2">
                <span className="font-bold">Notification</span>
              </td>
              <td className="border px-4 py-2">
                <a
                  href="https://rimsadilabad.org/wp-content/uploads/2024/10/RIMS-Adilabad-Walk-In-Interview-Notification-Oct-2024-in-pdf.pdf"
                  className="text-blue-500 underline"
                  target="_blank"
                  rel="nofollow"
                >
                  Click Here
                </a>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">
                <span className="font-bold">Official Website</span>
              </td>
              <td className="border px-4 py-2">
                <a
                  href="https://adilabad.telangana.gov.in/"
                  className="text-blue-500 underline"
                  target="_blank"
                  rel="nofollow"
                >
                  Click here
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Keywords for SEO */}
      <p className="text-gray-600">
        Keywords: RIMS Adilabad, Walk in Interview, Recruitment, Professor,
        Assistant Professor, Associate Professor, Medical, Vacancy, Telangana
      </p>
    </div>
  );
}