export default function RecruitmentInfo() {
  // This component displays recruitment information for the Deputy Commissioner cum District Magistrate Office, Lohardaga Chowkidar position. 
  // It includes details like post name, dates, vacancy details, qualification, and important links.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Deputy Commissioner cum District Magistrate Office, Lohardaga Chowkidar Recruitment 2024</h1>
      <div className="mb-4">
        <p className="text-green-500 font-bold">
          Name of the Post: Deputy Commissioner cum District Magistrate Office, Lohardaga Chowkidar Offline Form 2024
        </p>
        <p className="text-green-500 font-bold">Post Date: 16-08-2024</p>
        <p className="text-green-500 font-bold">Total Vacancy: 76</p>
      </div>
      <p className="text-red-500 font-bold mb-4">Brief Information:</p>
      <p className="text-justify">
        Deputy Commissioner cum District Magistrate Office, Lohardaga has given a notification for the recruitment of Chowkidar Vacancy. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply.
      </p>
      <h2 className="text-2xl font-bold mb-4">Key Details</h2>
      <table className="table-auto w-full border border-gray-300 mb-4">
        <tbody>
          <tr>
            <td colSpan="2" className="text-center">
              <p className="text-red-500 font-bold">Deputy Commissioner cum District Magistrate Office, Lohardaga</p>
              <p className="text-pink-500 font-bold">Advt No. 01/2024</p>
              <p className="text-green-500 font-bold">Chowkidar Vacancy 2024</p>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="text-center">
              <p className="text-red-500 font-bold">Application Fee</p>
              <ul>
                <li>For Unreserved/ Backward/ Other Backward Class: <strong>Rs. 200/-</strong></li>
                <li>For Scheduled Tribe/Scheduled Caste: <strong>Rs. 100/-</strong></li>
                <li>For disabled and women candidates: <strong>Nil</strong></li>
                <li>Payment Mode: <strong>Through Indian Postal Order/Bank Draft</strong></li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="text-center">
              <p className="text-red-500 font-bold">Important Dates</p>
              <ul>
                <li>Starting Date for Receipt of Application: <strong>08-08-2024</strong></li>
                <li>Last Date for Receipt of Application: <strong>23-08-2024</strong></li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="text-center">
              <p className="text-red-500 font-bold">Age limit (as on 01-07-2024)</p>
              <ul>
                <li>Minimum Age Limit: <strong>18 Years</strong></li>
                <li>Maximum Age Limit for Unreserved/Economically Weaker Section: <strong>35 Years</strong></li>
                <li>Maximum Age Limit for Backward Class/Extremely Backward Class: <strong>37 Years</strong></li>
                <li>Maximum Age Limit for Female (Unreserved/Backward Class/Extremely Backward Class): <strong>38 Years</strong></li>
                <li>Maximum Age Limit for Scheduled Caste/Scheduled Tribe (Male/ Female): <strong>40 Years</strong></li>
                <li>Age Relaxation is Applicable as per rules.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="text-center">
              <p className="text-red-500 font-bold">Qualification</p>
              <ul>
                <li>Candidates Should Possess 10th Class.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="text-center">
              <p className="text-red-500 font-bold">Vacancy Details</p>
            </td>
          </tr>
          <tr>
            <td className="text-center text-pink-500 font-bold">Post Name</td>
            <td className="text-center text-pink-500 font-bold">Total</td>
          </tr>
          <tr>
            <td className="text-center text-pink-500 font-bold">Chowkidar</td>
            <td className="text-center text-pink-500 font-bold">76</td>
          </tr>
          <tr>
            <td colSpan="2" className="text-center">
              <p className="text-blue-500 font-bold">Interested Candidates Can Read the Full Notification Before Apply</p>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="text-center">
              <p className="text-red-500 font-bold">Important Links</p>
            </td>
          </tr>
          <tr>
            <td className="text-center text-green-500 font-bold">Notification</td>
            <td className="text-center">
              <a
                href="https://img.freejobalert.com/uploads/2024/08/Notification-Deputy-Commissioner-cum-District-Magistrate-Office-Lohardaga-Chowkidar-Posts.pdf"
                className="text-blue-500 underline"
                target="_blank"
                rel="nofollow"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="text-center text-green-500 font-bold">Official Website</td>
            <td className="text-center">
              <a
                href="https://lohardaga.nic.in/"
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