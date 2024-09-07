export default function RecruitmentInformation() {
  // This component displays recruitment information for PCMC Various Vacancy Walk In 2024.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">PCMC Various Vacancy Walk In 2024</h1>
      <p className="mb-2">
        <span className="text-green-500 font-bold">Name of the Post:</span> PCMC Various Vacancy Walk In 2024
      </p>
      <p className="text-justify mb-2">
        <span className="text-green-500 font-bold">Post Date: </span>
        <strong>02-09-2024</strong>
      </p>
      <p className="text-justify mb-2">
        <span className="text-green-500 font-bold">Total Vacancy: </span>
        <strong>59</strong>
      </p>
      <p className="text-justify mb-4">
        <span className="text-red-500 font-bold">Brief Information:</span>{' '}
        Pimpri Chinchwad Municipal Corporation (PCMC) has invites an application for the recruitment of Consultant, Registrar and Houseman Vacancy on Contract Basis. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Walk in.
      </p>
      <h2 className="text-2xl font-bold mb-4">Important Dates</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Date of Walk in Interview: <strong>Every Monday from 02-09-2024</strong></li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>
      <table className="w-full border-collapse mb-4">
        <thead>
          <tr className="bg-gray-200 text-gray-800">
            <th className="text-center py-2 px-4" colSpan={2}>
              <span className="text-blue-500 font-bold">Vacancy Details</span>
            </th>
          </tr>
          <tr className="bg-gray-200 text-gray-800">
            <th className="text-center py-2 px-4">
              <span className="text-blue-500 font-bold">Post Name</span>
            </th>
            <th className="text-center py-2 px-4">
              <span className="text-blue-500 font-bold">Total</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center py-2 px-4">Consultant</td>
            <td className="text-center py-2 px-4">11</td>
          </tr>
          <tr>
            <td className="text-center py-2 px-4">Registrar</td>
            <td className="text-center py-2 px-4">29</td>
          </tr>
          <tr>
            <td className="text-center py-2 px-4">Houseman</td>
            <td className="text-center py-2 px-4">19</td>
          </tr>
        </tbody>
      </table>
      <p className="mb-4">
        <span className="text-blue-500 font-bold">Interested Candidates Can Read the Full Notification Before Walk in</span>
      </p>
      <h2 className="text-2xl font-bold mb-4">Important Links</h2>
      <table className="w-full border-collapse mb-4">
        <tbody>
          <tr>
            <td className="text-center py-2 px-4">
              <span className="text-green-500 font-bold">Notification</span>
            </td>
            <td className="text-center py-2 px-4">
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
            <td className="text-center py-2 px-4">
              <span className="text-green-500 font-bold">Official Website</span>
            </td>
            <td className="text-center py-2 px-4">
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