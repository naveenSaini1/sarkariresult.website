export default function RecruitmentInformation() {
  // This component displays recruitment information for Anganwadi Worker vacancies in Jaipur, Rajasthan.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">
        WCD, Jaipur Anganwadi Worker Offline Form 2024
      </h1>
      <div className="flex justify-between items-center mb-4">
        <p className="text-lg font-medium">
          <span className="text-green-500 font-bold">Name of the Post:</span>{' '}
          WCD, Jaipur Anganwadi Worker Offline Form 2024
        </p>
        <p className="text-lg font-medium">
          <span className="text-green-500 font-bold">Post Date:</span>{' '}
          03-09-2024
        </p>
      </div>
      <p className="text-lg font-medium mb-4">
        <span className="text-green-500 font-bold">Total Vacancy:</span> 71
      </p>
      <p className="mb-4">
        <span className="text-red-500 font-bold">Brief Information:</span> Women
        &amp; Child Development, Jaipur has published a Notification for the
        recruitment of Anganwadi Worker Vacancy. Those Candidates who are
        interested in the vacancy details &amp; completed all eligibility
        criteria can read the notification &amp; Apply.
      </p>
      <h2 className="text-2xl font-bold text-center mb-4">
        Women &amp; Child Development, Jaipur
      </h2>
      <h3 className="text-xl font-bold text-center mb-4">
        Anganwadi Worker Vacancy 2024
      </h3>
      <p className="text-center mb-4">
        <a
          href="https://www.freejobalert.com"
          className="text-blue-500 underline"
          target="_blank"
          rel="noopener"
        >
          
        </a>
      </p>
      <table className="table-auto w-full mb-4">
        <tbody>
          <tr>
            <td colSpan="2" className="text-center">
              <p className="text-red-500 font-bold">Important Dates</p>
              <ul className="list-disc pl-6">
                <li>
                  Last Date for Receipt of Application Form:
                  <strong>18-09-2024 (up to 05:00 PM)</strong>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="text-center">
              <p className="text-red-500 font-bold">Age Limit (16-08-2024)</p>
              <ul className="list-disc pl-6">
                <li>Minimum Age limit: <strong>18 Years</strong></li>
                <li>Maximum Age limit: <strong>35 Years</strong></li>
                <li>
                  Maximum Age Limit for SC/ST/Widow/divorcee/ maturity &amp;
                  specially able person: <strong>40 Years</strong>
                </li>
                <li>Age relaxation is applicable as per rules.</li>
                <li>For More Details Refer Notification</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="text-center">
              <p className="text-red-500 font-bold">Qualification</p>
              <ul className="list-disc pl-6">
                <li>Candidates should possess 12th Class</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="text-center">
              <p className="text-red-500 font-bold">Vacancy Details</p>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <span className="text-pink-500 font-bold">Post Name</span>
            </td>
            <td className="text-center">
              <span className="text-pink-500 font-bold">Total</span>
            </td>
          </tr>
          <tr>
            <td className="text-center">Anganwadi Worker</td>
            <td className="text-center">71</td>
          </tr>
          <tr>
            <td colSpan="2" className="text-center">
              <p className="text-blue-500 font-bold">
                Interested Candidates Can Read the Full Notification Before
                Apply
              </p>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="text-center">
              <p className="text-red-500 font-bold">Important Links</p>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <span className="text-green-500 font-bold">Notification</span>
            </td>
            <td className="text-center">
              <a
                href="https://img.freejobalert.com/uploads/2024/09/Notification-WCD-Jaipur-Rural-Anganwadi-Posts.pdf"
                className="text-blue-500 underline"
                target="_blank"
                rel="nofollow"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              <span className="text-green-500 font-bold">Official Website</span>
            </td>
            <td className="text-center">
              <a
                href="https://wcd.rajasthan.gov.in/home"
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