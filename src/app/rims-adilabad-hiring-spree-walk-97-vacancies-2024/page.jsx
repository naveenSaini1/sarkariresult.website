export default function RecruitmentInformation() {
  // This component displays recruitment information for RIMS, Adilabad.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        RIMS, Adilabad Various Vacancy Walk In 2024
      </h1>
      <p className="mb-2">
        <span className="text-green-500 font-bold">Name of the Post:</span>{' '}
        RIMS, Adilabad Various Vacancy Walk In 2024
      </p>
      <p className="mb-2 text-justify">
        <span className="text-green-500 font-bold">Post Date:</span>{' '}
        <span className="text-black-500">31-08-2024</span>
      </p>
      <p className="mb-2 text-justify">
        <span className="text-green-500 font-bold">Total Vacancy:</span>{' '}
        <strong>97</strong>
      </p>
      <p className="mb-4 text-justify">
        <span className="text-red-500 font-bold">Brief Information:</span>{' '}
        Regional Institute of Medical sciences (RIMS), Adilabad has given an
        employment Notification for the recruitment of Professor, Assistant
        Professor, Associate Professor, &amp; Other Vacancy. Those Candidates
        who are interested in the vacancy details &amp; completed all eligibility
        criteria can read the Notification &amp; Attend.
      </p>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2 text-red-500">Important Dates</h2>
        <ul className="list-disc pl-5">
          <li>
            Date of Walk in Interview: 04-09-2024 from 10:30 AM to 04:00 PM
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2 text-red-500">
          Age Limit (as on 28-08-2024)
        </h2>
        <ul className="list-disc pl-5">
          <li>
            <span className="text-black-500">Maximum Age Limit:</span>{' '}
            <strong>Below 64 Years</strong>
          </li>
          <li>
            <span className="text-black-500">Age relaxation is admissible as per rules</span>.
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2 text-red-500">Qualification</h2>
        <ul className="list-disc pl-5">
          <li>
            Candidates Should Possess MBBS /MD/ MS/ DM/DNB/ M.Ch (Concerned
            Subject)
          </li>
        </ul>
      </div>
      <h2 className="text-2xl font-bold mb-2 text-red-500">
        Vacancy Details
      </h2>
      <table className="table-auto w-full text-center mb-4">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2">
              <span className="text-pink-500 font-bold">Post Name</span>
            </th>
            <th className="px-4 py-2">
              <span className="text-pink-500 font-bold">Total</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">Professor</td>
            <td className="px-4 py-2">06</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Associate Professor</td>
            <td className="px-4 py-2">27</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Assistant Professor</td>
            <td className="px-4 py-2">20</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Super Specialty</td>
            <td className="px-4 py-2">44</td>
          </tr>
        </tbody>
      </table>
      <p className="mb-2 text-blue-500">
        <strong>Interested Candidates Can Read the Full Notification Before Attend</strong>
      </p>
      <h2 className="text-2xl font-bold mb-2 text-red-500">Important Links</h2>
      <table className="table-auto w-full text-center">
        <tbody>
          <tr>
            <td className="px-4 py-2">
              <span className="text-green-500 font-bold">Notification</span>
            </td>
            <td className="px-4 py-2">
              <a
                href="https://img.freejobalert.com/uploads/2024/08/Notification-RIMS-Adilabad-Various-Vacancy.pdf"
                target="_blank"
                rel="nofollow"
                className="underline text-blue-500"
              >
                <strong>Click Here</strong>
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">
              <span className="text-green-500 font-bold">Official Website</span>
            </td>
            <td className="px-4 py-2">
              <a
                href="https://adilabad.telangana.gov.in/"
                target="_blank"
                rel="nofollow"
                className="underline text-blue-500"
              >
                <strong>Click here</strong>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}