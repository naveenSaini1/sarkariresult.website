export default function RecruitmentInfo() {
  // Displays recruitment information for PCMC Various Vacancy Walk In 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">
        PCMC Various Vacancy Walk In 2024
      </h1>
      <p className="text-lg mb-4">
        <span className="font-bold text-green-500">Name of the Post:</span>{' '}
        PCMC Various Vacancy Walk In 2024
      </p>
      <p className="text-lg mb-4">
        <span className="font-bold text-green-500">Post Date:</span> 02-09-2024
      </p>
      <p className="text-lg mb-4">
        <span className="font-bold text-green-500">Total Vacancy:</span> 59
      </p>
      <p className="text-lg mb-4">
        <span className="font-bold text-red-500">Brief Information:</span> Pimpri
        Chinchwad Municipal Corporation (PCMC) has invites an application for
        the recruitment of Consultant, Registrar and Houseman Vacancy on
        Contract Basis. Those Candidates who are interested in the vacancy
        details & completed all eligibility criteria can read the Notification &
        Walk in.
      </p>
      <h2 className="text-2xl font-bold text-center mb-4">
        Important Dates
      </h2>
      <ul className="list-disc ml-8 mb-4">
        <li>Date of Walk in Interview: Every Monday from 02-09-2024</li>
      </ul>
      <h2 className="text-2xl font-bold text-center mb-4">
        Vacancy Details
      </h2>
      <table className="table-auto w-full border border-gray-400 mb-4">
        <thead>
          <tr>
            <th className="text-center py-2 px-4 border border-gray-400">
              <span className="font-bold text-blue-500">Post Name</span>
            </th>
            <th className="text-center py-2 px-4 border border-gray-400">
              <span className="font-bold text-blue-500">Total</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center py-2 px-4 border border-gray-400">
              Consultant
            </td>
            <td className="text-center py-2 px-4 border border-gray-400">
              11
            </td>
          </tr>
          <tr>
            <td className="text-center py-2 px-4 border border-gray-400">
              Registrar
            </td>
            <td className="text-center py-2 px-4 border border-gray-400">
              29
            </td>
          </tr>
          <tr>
            <td className="text-center py-2 px-4 border border-gray-400">
              Houseman
            </td>
            <td className="text-center py-2 px-4 border border-gray-400">
              19
            </td>
          </tr>
        </tbody>
      </table>
      <p className="text-lg mb-4 text-blue-500">
        Interested Candidates Can Read the Full Notification Before Walk in
      </p>
      <h2 className="text-2xl font-bold text-center mb-4">
        Important Links
      </h2>
      <table className="table-auto w-full border border-gray-400 mb-4">
        <tbody>
          <tr>
            <td className="text-center py-2 px-4 border border-gray-400">
              <span className="font-bold text-green-500">Notification</span>
            </td>
            <td className="text-center py-2 px-4 border border-gray-400">
              <a
                href="https://img.freejobalert.com/uploads/2024/09/PCMC-Consultant-Registrar-and-Other-Posts-2024.pdf"
                className="text-blue-500 underline"
                target="_blank"
                rel="nofollow"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="text-center py-2 px-4 border border-gray-400">
              <span className="font-bold text-green-500">Official Website</span>
            </td>
            <td className="text-center py-2 px-4 border border-gray-400">
              <a
                href="https://www.pcmcindia.gov.in/marathi/"
                className="text-blue-500 underline"
                target="_blank"
                rel="nofollow"
              >
                Click Here
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}