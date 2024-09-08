export default function RecruitmentInformation() {
  // Displays recruitment information for Zilla Parishad, Satara Yoga Instructor vacancy.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">
        Zilla Parishad, Satara Yoga Instructor Online Form 2024
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <p className="font-bold mb-1">
            <span className="text-green-500">Name of the Post:</span>{' '}
            Zilla Parishad, Satara Yoga Instructor Online Form 2024
          </p>
          <p className="font-bold mb-1">
            <span className="text-green-500">Post Date:</span> 19-08-2024
          </p>
          <p className="font-bold mb-1">
            <span className="text-green-500">Total Vacancy:</span> 92
          </p>
        </div>
        <div>
          <p className="font-bold text-red-500 mb-2">Brief Information:</p>
          <p>
            Zilla Parishad, Satara has given an employment notification for the
            recruitment of Yoga Instructor Vacancy. Those Candidates who are
            interested in the vacancy details & completed all eligibility
            criteria can read the Notification & Apply Online.
          </p>
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold text-center mb-2">
          Zilla Parishad Satara
        </h2>
        <h3 className="text-xl font-bold text-green-500 text-center mb-2">
          Yoga Instructor Vacancy 2024
        </h3>
        <p className="text-center">
          <a
            href="https://www.freejobalert.com"
            target="_blank"
            rel="noopener"
            className="underline text-blue-500"
          >
            
          </a>
        </p>
      </div>

      <table className="table-auto w-full border-collapse mb-4">
        <tbody>
          <tr>
            <td colSpan={2} className="text-center">
              <p className="font-bold text-red-500">Application Fee</p>
              <ul>
                <li>Application Fee: Rs.500/-</li>
                <li>Payment Mode: Through Online</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center">
              <p className="font-bold text-red-500">Important Dates</p>
              <ul>
                <li>
                  Last Date for Apply Online: <strong>23-08-2024</strong>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center">
              <p className="font-bold text-red-500">Qualification</p>
              <ul>
                <li>Candidates Should Possess Diploma/Degree (Yoga)</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center font-bold text-red-500">
              Vacancy Details
            </td>
          </tr>
          <tr>
            <td className="text-center font-bold text-blue-500">Post Name</td>
            <td className="text-center font-bold text-blue-500">Total</td>
          </tr>
          <tr>
            <td className="text-center">Yoga Instructor</td>
            <td className="text-center">92</td>
          </tr>
          <tr>
            <td colSpan={2} className="text-blue-500">
              Interested Candidates Can Read the Full Notification Before Apply
              Online
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center font-bold text-red-500">
              Important Links
            </td>
          </tr>
          <tr>
            <td className="text-center font-bold text-green-500">
              Apply Online
            </td>
            <td className="text-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSciPX8LDTTEi8MD-rt0G9BqTyzleEQEZe6ipFOkDGH9JeJVNw/viewform"
                target="_blank"
                rel="nofollow"
                className="underline text-blue-500"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="text-center font-bold text-green-500">
              Notification
            </td>
            <td className="text-center">
              <a
                href="https://img.freejobalert.com/uploads/2024/08/Notification-Zilla-Parishad-Satara-Yoga-Instructor-Posts.pdf"
                target="_blank"
                rel="nofollow"
                className="underline text-blue-500"
              >
                Click here
              </a>
            </td>
          </tr>
          <tr>
            <td className="text-center font-bold text-green-500">
              Official Website
            </td>
            <td className="text-center">
              <a
                title="Zilla Parishad, Satara"
                href="https://www.zpsatara.gov.in/"
                target="_blank"
                rel="nofollow"
                className="underline text-blue-500"
              >
                Click here
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}