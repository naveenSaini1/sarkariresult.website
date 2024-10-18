export default function RecruitmentInformation() {
  // This component displays recruitment information for the DSE, Assam Post Graduate Teacher position, including details about the application process, important dates, eligibility criteria, and vacancy details.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        DSE, Assam Post Graduate Teacher Online Form 2024
      </h1>
      <p className="mb-4">
        The Directorate of Secondary Education, Assam has announced recruitment for
        Post Graduate Teacher vacancies. This is an excellent opportunity for
        qualified individuals seeking a career in education in Assam.
      </p>

      <h2 className="text-2xl font-bold mb-2">Key Highlights</h2>
      <ul className="list-disc mb-4">
        <li>
          <span className="font-bold">Post Date:</span> 18-10-2024
        </li>
        <li>
          <span className="font-bold">Total Vacancy:</span> 1424
        </li>
        <li>
          <span className="font-bold">Starting Date for Application:</span>{' '}
          21-10-2024 (11:30 AM)
        </li>
        <li>
          <span className="font-bold">Last Date for Application:</span>{' '}
          15-11-2024 (midnight)
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-2">Application Fee</h2>
      <ul className="list-disc mb-4">
        <li>
          For UR Category: <strong className="text-red-500">Rs.500/-</strong>
        </li>
        <li>
          For OBC/MOBC/ST(H)/ST(P)/SC/PwD/Others:{' '}
          <strong className="text-red-500">Rs.350/-</strong>
        </li>
        <li>Payment Mode: Through Online</li>
      </ul>

      <h2 className="text-2xl font-bold mb-2">Age Limit (as on 01-01-2023)</h2>
      <ul className="list-disc mb-4">
        <li>
          Minimum Age Limit: <strong className="text-black">21 Years</strong>
        </li>
        <li>
          Maximum Age Limit for Open Category:{' '}
          <strong className="text-black">38 Years</strong>
        </li>
        <li>
          Maximum Age Limit for Ex-Servicemen: <strong className="text-black">40 Years</strong>
        </li>
        <li>
          Maximum Age Limit for OBC/ MOBC:{' '}
          <strong className="text-black">41 Years</strong>
        </li>
        <li>
          Maximum Age Limit for SC/ ST(P)/ ST(H)/ PWD:{' '}
          <strong className="text-black">43 Years</strong>
        </li>
        <li>
          Maximum Age Limit for PWD: <strong className="text-black">48 Years</strong>
        </li>
        <li>
          Age relaxation is applicable as per rules.
        </li>
        <li>
          For more details refer the notification.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-2">Qualification</h2>
      <ul className="list-disc mb-4">
        <li>Candidates should possess B.Ed, PG (Concern Subject)</li>
      </ul>

      <h2 className="text-2xl font-bold mb-2">Vacancy Details</h2>
      <table className="table-auto w-full border border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-center font-bold">Sl No</th>
            <th className="px-4 py-2 text-center font-bold">Post Name</th>
            <th className="px-4 py-2 text-center font-bold">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 text-center">1</td>
            <td className="px-4 py-2 text-center">Post Graduate Teacher</td>
            <td className="px-4 py-2 text-center">1424</td>
          </tr>
        </tbody>
      </table>

      <p className="mb-4">
        Interested candidates can read the full notification before applying
        online.
      </p>

      <h2 className="text-2xl font-bold mb-2">Important Links</h2>
      <table className="table-auto w-full border border-gray-300 mb-4">
        <tbody>
          <tr>
            <td className="px-4 py-2 text-center">
              <span className="text-green-500 font-bold">Apply Online</span>
            </td>
            <td className="px-4 py-2 text-center">
              Available on 21-10-2024
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center">
              <span className="text-green-500 font-bold">
                Addendum Notification
              </span>
            </td>
            <td className="px-4 py-2 text-center">
              <a
                href="https://img.freejobalert.com/uploads/2024/10/Addendum-Notification-DSE-Assam-PGT-Posts.jpg"
                className="text-blue-500 underline"
                target="_blank"
                rel="nofollow"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center">
              <span className="text-green-500 font-bold">Notification</span>
            </td>
            <td className="px-4 py-2 text-center">
              <a
                href="https://img.freejobalert.com/uploads/2024/10/Notification-DSE-Assam-Post-Graduate-Teacher-Posts.pdf"
                className="text-blue-500 underline"
                target="_blank"
                rel="nofollow"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center">
              <span className="text-green-500 font-bold">Official Website</span>
            </td>
            <td className="px-4 py-2 text-center">
              <a
                href="https://madhyamik.assam.gov.in/"
                className="text-blue-500 underline"
                target="_blank"
                rel="nofollow"
                title="Directorate of Secondary Education, Assam"
              >
                Click Here
              </a>
            </td>
          </tr>
        </tbody>
      </table>

      <p className="mt-4">
        Keywords: DSE, Assam, Post Graduate Teacher, Recruitment, Application,
        Vacancy, Education, Assam, Online Form
      </p>
    </div>
  );
}