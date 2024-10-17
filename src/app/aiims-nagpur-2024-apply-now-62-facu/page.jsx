export default function AIIMSRecruitment() {
  // This component displays recruitment information for AIIMS, Nagpur Faculty (Group-A) 2024. It includes details such as post name, total vacancy, application fee, important dates, age limit, qualification, and vacancy details for different positions.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">AIIMS, Nagpur Faculty (Group-A) 2024 Recruitment</h1>

      <p className="text-lg mb-4">
        All India Institute of Medical Sciences (AIIMS), Nagpur has announced
        notification for the recruitment of Faculty (Group-A) Vacancy on Contract
        basis. This is an excellent opportunity for qualified medical
        professionals to contribute to the esteemed AIIMS institution.
      </p>

      <h2 className="text-2xl font-bold mb-2">Key Highlights</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>
          <span className="font-bold">Post Name:</span> AIIMS, Nagpur Faculty
          (Group-A) 2024
        </li>
        <li>
          <span className="font-bold">Total Vacancy:</span> 62
        </li>
        <li>
          <span className="font-bold">Application Fee:</span>
          <ul className="list-disc ml-6">
            <li>General/OBC/EWS: Rs. 2,000/-</li>
            <li>SC/ST: Rs. 500/-</li>
            <li>Payment Mode: Through Online</li>
          </ul>
        </li>
        <li>
          <span className="font-bold">Important Dates:</span>
          <ul className="list-disc ml-6">
            <li>Starting Date for Apply Online: 09-10-2024</li>
            <li>Last Date to Apply Online: 07-11-2024</li>
          </ul>
        </li>
        <li>
          <span className="font-bold">Age Limit (as on 07-11-2024):</span>
          <ul className="list-disc ml-6">
            <li>
              Professor/Additional Professor: 58 Years (Upper Age Limit)
            </li>
            <li>
              Associate Professor/Assistant Professor: 50 Years (Upper Age
              Limit)
            </li>
            <li>Age relaxation is applicable as per rules</li>
          </ul>
        </li>
        <li>
          <span className="font-bold">Qualification:</span> Candidates Should
          Possess MBBS/ Medical Qualification/ D.M/ M.Ch/ MD/ PG (Relevant
          Subject).
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-2">Vacancy Details</h2>
      <table className="table-auto w-full text-center border border-gray-400 mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-gray-100 font-medium">Post Name</th>
            <th className="px-4 py-2 bg-gray-100 font-medium">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border-b border-gray-400">Professor</td>
            <td className="px-4 py-2 border-b border-gray-400">12</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b border-gray-400">
              Additional Professor
            </td>
            <td className="px-4 py-2 border-b border-gray-400">12</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b border-gray-400">
              Associate Professor
            </td>
            <td className="px-4 py-2 border-b border-gray-400">18</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b border-gray-400">
              Assistant Professor
            </td>
            <td className="px-4 py-2 border-b border-gray-400">20</td>
          </tr>
        </tbody>
      </table>

      <p className="mb-4">
        Interested Candidates Can Read the Full Notification Before Apply
        Online.
      </p>

      <h2 className="text-2xl font-bold mb-2">Important Links</h2>
      <table className="table-auto w-full text-center border border-gray-400">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-gray-100 font-medium">Link</th>
            <th className="px-4 py-2 bg-gray-100 font-medium">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border-b border-gray-400">
              <a
                href="https://aiimsnagpur.edu.in/pages/vacancies#"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here
              </a>
            </td>
            <td className="px-4 py-2 border-b border-gray-400">Apply Online</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b border-gray-400">
              <a
                href="https://img.freejobalert.com/uploads/2024/10/Notification-AIIMSNagpur-Faculty-Group-A-Posts.pdf"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here
              </a>
            </td>
            <td className="px-4 py-2 border-b border-gray-400">Notification</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b border-gray-400">
              <a
                href="https://aiimsnagpur.edu.in/"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here
              </a>
            </td>
            <td className="px-4 py-2 border-b border-gray-400">
              Official Website
            </td>
          </tr>
        </tbody>
      </table>

      <p className="text-sm mt-4">
        Keywords: AIIMS, Nagpur, Faculty, Group-A, Recruitment, 2024,
        Professor, Additional Professor, Associate Professor, Assistant
        Professor, Medical, Contract, Vacancy, Job, Opportunity, Apply Online,
        Notification, Official Website
      </p>
    </div>
  );
}