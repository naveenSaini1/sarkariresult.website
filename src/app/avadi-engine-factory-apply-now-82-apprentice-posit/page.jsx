export default function RecruitmentInformation() {
  // This component displays recruitment information for Engine Factory, Avadi Apprentice Vacancy 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        Engine Factory, Avadi Apprentice Vacancy 2024
      </h1>
      <div className="mb-4">
        <p className="text-gray-600">
          <span className="font-bold text-green-500">Name of the Post:</span>{' '}
          Engine Factory, Avadi Apprentice Online Form 2024
        </p>
        <p className="text-gray-600">
          <span className="font-bold text-green-500">Post Date:</span>{' '}
          07-08-2024
        </p>
        <p className="text-gray-600">
          <span className="font-bold text-green-500">Latest Update:</span>{' '}
          10-08-2024
        </p>
        <p className="text-gray-600">
          <span className="font-bold text-green-500">Total Vacancy:</span> 82
        </p>
      </div>
      <p className="text-gray-600 mb-4">
        <span className="font-bold text-red-500">Brief Information:</span> Engine
        Factory, Avadi, Chennai has given an employment notification for the
        recruitment of Apprentice Vacancy Under Apprenticeship (Amendment) Act
        1973. Those Candidates who are interested in the vacancy details &
        completed all eligibility criteria can read the Notification & Apply
        Online.
      </p>
      <h2 className="text-2xl font-bold mb-4">Important Dates</h2>
      <ul className="list-disc pl-5 mb-4">
        <li>
          Starting Date to Apply Online & Payment of Fee:
          <b>09-08-2024</b>
        </li>
        <li>
          Closing Date to Apply Online & Payment of Fee:
          <b>31-08-2024</b>
        </li>
        <li>Date of Declaration of Shortlisted list: <strong>06-09-2024</strong></li>
        <li>
          Date of Verification of certificates for shortlisted candidates:
          <strong>18-09-2024 & 20-09-2024</strong>
        </li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Age Limit</h2>
      <ul className="list-disc pl-5 mb-4">
        <li>Age limit will be followed as per Apprenticeship Rules.</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>
      <table className="table-auto w-full mb-4">
        <thead>
          <tr>
            <th className="text-center text-red-500 font-bold px-4 py-2">
              Trade Name
            </th>
            <th className="text-center text-red-500 font-bold px-4 py-2">
              Total
            </th>
            <th className="text-center text-red-500 font-bold px-4 py-2">
              Qualification
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              colSpan={3}
              className="text-center font-bold px-4 py-2 border-b"
            >
              Graduate Apprentice
            </td>
          </tr>
          <tr>
            <td className="text-center px-4 py-2 border-b">
              Mechanical Engineering
            </td>
            <td className="text-center px-4 py-2 border-b">20</td>
            <td
              rowSpan={8}
              className="text-center px-4 py-2 border-b"
            >
              Degree (Engineering /Technology)
            </td>
          </tr>
          <tr>
            <td className="text-center px-4 py-2 border-b">
              Automobile Engineering
            </td>
            <td className="text-center px-4 py-2 border-b">20</td>
          </tr>
          <tr>
            <td className="text-center px-4 py-2 border-b">
              Electronics and Communication Engineering
            </td>
            <td className="text-center px-4 py-2 border-b">02</td>
          </tr>
          <tr>
            <td className="text-center px-4 py-2 border-b">
              Electrical and Electronics Engineering
            </td>
            <td className="text-center px-4 py-2 border-b">02</td>
          </tr>
          <tr>
            <td className="text-center px-4 py-2 border-b">
              Civil Engineering
            </td>
            <td className="text-center px-4 py-2 border-b">02</td>
          </tr>
          <tr>
            <td className="text-center px-4 py-2 border-b">
              Computer Science and Engineering /Information Technology
            </td>
            <td className="text-center px-4 py-2 border-b">01</td>
          </tr>
          <tr>
            <td className="text-center px-4 py-2 border-b">Mechatronics</td>
            <td className="text-center px-4 py-2 border-b">02</td>
          </tr>
          <tr>
            <td className="text-center px-4 py-2 border-b">
              Production Engineering
            </td>
            <td className="text-center px-4 py-2 border-b">01</td>
          </tr>
          <tr>
            <td
              colSpan={3}
              className="text-center font-bold px-4 py-2 border-b"
            >
              Technician (Diploma) Apprentice
            </td>
          </tr>
          <tr>
            <td className="text-center px-4 py-2 border-b">
              Mechanical Engineering
            </td>
            <td className="text-center px-4 py-2 border-b">05</td>
            <td
              rowSpan={8}
              className="text-center px-4 py-2 border-b"
            >
              Diploma (Engineering/ Technology)
            </td>
          </tr>
          <tr>
            <td className="text-center px-4 py-2 border-b">
              Automobile Engineering
            </td>
            <td className="text-center px-4 py-2 border-b">05</td>
          </tr>
          <tr>
            <td className="text-center px-4 py-2 border-b">
              Electronics and Communication Engineering
            </td>
            <td className="text-center px-4 py-2 border-b">02</td>
          </tr>
          <tr>
            <td className="text-center px-4 py-2 border-b">
              Electrical and Electronics Engineering
            </td>
            <td className="text-center px-4 py-2 border-b">02</td>
          </tr>
          <tr>
            <td className="text-center px-4 py-2 border-b">
              Civil Engineering
            </td>
            <td className="text-center px-4 py-2 border-b">02</td>
          </tr>
          <tr>
            <td className="text-center px-4 py-2 border-b">
              Computer Engineering /Information Technology
            </td>
            <td className="text-center px-4 py-2 border-b">01</td>
          </tr>
          <tr>
            <td className="text-center px-4 py-2 border-b">Mechatronics</td>
            <td className="text-center px-4 py-2 border-b">02</td>
          </tr>
          <tr>
            <td className="text-center px-4 py-2 border-b">
              Production Engineering
            </td>
            <td className="text-center px-4 py-2 border-b">01</td>
          </tr>
          <tr>
            <td className="text-center px-4 py-2 border-b">
              Non-Engineering Graduate Apprentice
            </td>
            <td className="text-center px-4 py-2 border-b">12</td>
            <td className="text-center px-4 py-2 border-b">
              Degree (Arts /Science/ Commerce/ Humanities such as BA/
              <br/>
              B.Sc/ B.Com/BBA /.B BM / BCA)
            </td>
          </tr>
        </tbody>
      </table>
      <p className="text-blue-500 mb-4">
        <strong>Interested Candidates Can Read the Full Notification Before Apply Online</strong>
      </p>
      <h2 className="text-2xl font-bold mb-4">Important Links</h2>
      <table className="table-auto w-full mb-4">
        <tbody>
          <tr>
            <td className="text-center text-green-500 font-bold px-4 py-2">
              Apply Online (10-08-2024)
            </td>
            <td className="text-center px-4 py-2" colSpan={2}>
              <a
                href="https://nats.education.gov.in/"
                target="_blank"
                rel="nofollow"
                className="underline"
              >
                <b>Click Here</b>
              </a>
            </td>
          </tr>
          <tr>
            <td className="text-center text-green-500 font-bold px-4 py-2">
              Notification
            </td>
            <td className="text-center px-4 py-2" colSpan={2}>
              <a
                href="https://img.freejobalert.com/uploads/2024/08/Notification-Engine-Factory-AvadiChennai-Apprentice-2024.pdf"
                target="_blank"
                rel="nofollow"
                className="underline"
              >
                <strong>Click Here</strong>
              </a>
            </td>
          </tr>
          <tr>
            <td className="text-center text-green-500 font-bold px-4 py-2">
              Official Website
            </td>
            <td className="text-center px-4 py-2" colSpan={2}>
              <a
                href="https://ddpdoo.gov.in/units/EFA"
                target="_blank"
                rel="nofollow"
                className="underline"
              >
                <strong>Click Here</strong>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}