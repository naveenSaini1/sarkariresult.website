export default function RecruitmentInformation() {
  // This component displays recruitment information for the WCD, Dharwad Anganwadi Worker & Helper position
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">WCD, Dharwad Anganwadi Worker & Helper Offline Form 2024</h1>
      <p className="mb-4">
        <span className="text-green-500 font-bold">Name of the Post:</span>{' '}
        <strong>WCD, Dharwad Anganwadi Worker & Helper Offline Form 2024</strong>
      </p>
      <p className="text-justify mb-4">
        <span className="text-green-500 font-bold">Post Date: </span>
        <span className="text-black-500">06-08-2024</span>
      </p>
      <p className="text-justify mb-4">
        <span className="text-green-500 font-bold">Total Vacancy: </span>
        <span className="text-black-500">199</span>
      </p>
      <p className="text-justify mb-4">
        <span className="text-red-500 font-bold">Brief Information: </span>
        Women & Child Development, Dharwad has given a Notification for the recruitment of
        Anganwadi Worker, Anganwadi Helper Vacancy. Those Candidates who are interested in the
        vacancy details & completed all eligibility criteria can read the notification & Apply.
      </p>
      <h2 className="text-2xl font-bold mb-4">Important Details</h2>
      <table className="table-auto w-full text-center mb-4">
        <tbody>
          <tr className="border-b border-gray-300">
            <td className="py-2" colSpan="3">
              <p className="text-red-500 font-bold">Women & Child Development, Dharwad</p>
              <p className="text-green-500 font-bold">Anganwadi Worker & Helper Vacancy 2024</p>
              <p>
                <a
                  href="https://www.freejobalert.com"
                  target="_blank"
                  rel="noopener"
                  className="text-blue-500 underline"
                >
                  
                </a>
              </p>
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="py-2" colSpan="3">
              <p className="text-red-500 font-bold">Important Dates</p>
              <ul>
                <li>
                  Starting Date for Receipt of Application Form: <strong>01-08-2024</strong>
                </li>
                <li>
                  Last Date for Receipt of Application Form: <strong>02-09-2024</strong>
                </li>
              </ul>
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="py-2" colSpan="3">
              <p className="text-red-500 font-bold">Age Limit</p>
              <ul>
                <li>Minimum Age limit: <strong>19 Years</strong></li>
                <li>Maximum Age limit: <strong>35 Years</strong></li>
                <li>Age relaxation is applicable as per rules.</li>
              </ul>
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="py-2" colSpan="3">
              <p className="text-red-500 font-bold">Vacancy Details</p>
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="py-2">
              <span className="text-blue-500 font-bold">Post Name</span>
            </td>
            <td className="py-2">
              <span className="text-blue-500 font-bold">Total</span>
            </td>
            <td className="py-2">
              <span className="text-blue-500 font-bold">Qualification</span>
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="py-2">Anganwadi Worker</td>
            <td className="py-2">09</td>
            <td className="py-2">
              10th, 12th, ECCE Diploma, JOC, N.T.T. Courses from D.S.E.R.T
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="py-2">Anganwadi Helper</td>
            <td className="py-2">190</td>
            <td className="py-2">10th Class</td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="py-2" colSpan="3">
              <span className="text-blue-500 font-bold">
                Interested Candidates Can Read the Full Notification Before Apply Online
              </span>
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="py-2" colSpan="3">
              <p className="text-red-500 font-bold">Important Links</p>
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="py-2">
              <span className="text-green-500 font-bold">Application Form</span>
            </td>
            <td className="py-2" colSpan="2">
              <a
                title="WCD, Karnataka"
                href="https://karnemakaone.kar.nic.in/abcd/ApplicationForm_JA_org.aspx"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="py-2">
              <span className="text-green-500 font-bold">Notification</span>
            </td>
            <td className="py-2" colSpan="2">
              <a
                title="WCD, Karnataka"
                href="https://img.freejobalert.com/uploads/2024/08/Notification-WCD-Dharwad-Anganwadi-Worker-Anganwadi-Helper-Posts.png"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
              >
                Link 1
              </a>
              {' | '}
              <a
                title="WCD, Karnataka"
                href="https://img.freejobalert.com/uploads/2024/08/Notification-WCD-Dharwad-Anganwadi-Worker-Anganwadi-Helper-Posts.pdf"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
              >
                Link 2
              </a>
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="py-2">
              <span className="text-green-500 font-bold">Official Website</span>
            </td>
            <td className="py-2" colSpan="2">
              <a
                title="WCD, Karnataka"
                href="https://karnemakaone.kar.nic.in/"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
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