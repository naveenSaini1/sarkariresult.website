export default function UKPSCLecturerRecruitment() {
  // This component displays recruitment information for UKPSC Lecturer Vacancy 2024.
  // It includes details like post name, total vacancy, application fee, important dates, qualification, and vacancy details.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">UKPSC Lecturer Online Form 2024</h1>
      <p className="mb-4 text-center">
        <span className="font-bold text-green-500">Name of the Post:</span> UKPSC Lecturer Online Form 2024
      </p>
      <div className="flex justify-between mb-4">
        <p className="text-justify">
          <span className="font-bold text-green-500">Post Date:</span> 17-10-2024
        </p>
        <p className="text-justify">
          <span className="font-bold text-green-500">Total Vacancy:</span> 613
        </p>
      </div>
      <p className="mb-4 text-justify">
        <span className="font-bold text-red-500">Brief Information:</span> Uttarakhand Public Service Commission (UKPSC) has invited applications for the recruitment of Lecturer Vacancy. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply Online.
      </p>
      <h2 className="text-2xl font-bold mb-4">Key Highlights</h2>
      <ul className="list-disc mb-4">
        <li>
          <span className="font-bold">Application Fee:</span> Available on 18-10-2024
        </li>
        <li>
          <span className="font-bold">Age Limit:</span> Available on 18-10-2024
        </li>
        <li>
          <span className="font-bold">Qualification:</span> Available on 18-10-2024
        </li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Important Dates</h2>
      <ul className="list-disc mb-4">
        <li>
          Date of publication of advertisement and starting of online application: <span className="font-bold">18-10-2024</span>
        </li>
        <li>
          Last Date to Apply Online: <span className="font-bold">07-11-2024 (Till 11:59:59 PM)</span>
        </li>
        <li>
          Last date for submission of Application Fee through Net Banking/Debit Card/Credit Card/UPI: <span className="font-bold">07-11-2024 (Till 11:59:59 PM)</span>
        </li>
        <li>
          Starting date for making corrections in the online application form: <span className="font-bold">19-11-2024</span>
        </li>
        <li>
          Last date for making corrections in the online application form: <span className="font-bold">28-11-2024 (Till 11:59:59 PM)</span>
        </li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>
      <table className="table-auto w-full text-center mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2 font-bold text-purple-500">Post Name</th>
            <th className="px-4 py-2 font-bold text-purple-500">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">Lecturer</td>
            <td className="px-4 py-2">613</td>
          </tr>
        </tbody>
      </table>
      <p className="mb-4 text-center text-blue-500">
        Interested Candidates Can Read the Full Notification Before Apply
      </p>
      <h2 className="text-2xl font-bold mb-4">Important Links</h2>
      <table className="table-auto w-full text-center mb-4">
        <tbody>
          <tr>
            <td className="px-4 py-2">
              <span className="font-bold text-green-500">Apply Online</span>
            </td>
            <td className="px-4 py-2">Available on 18-10-2024</td>
          </tr>
          <tr>
            <td className="px-4 py-2">
              <span className="font-bold text-green-500">Detailed Notification</span>
            </td>
            <td className="px-4 py-2">Available on 18-10-2024</td>
          </tr>
          <tr>
            <td className="px-4 py-2">
              <span className="font-bold text-green-500">Short Notification</span>
            </td>
            <td className="px-4 py-2">
              <a
                href="https://img.freejobalert.com/uploads/2024/10/Short-Notifcation-UKPSC-Lecturer-Posts.pdf"
                target="_blank"
                rel="nofollow"
                className="text-blue-500"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">
              <span className="font-bold text-green-500">Official Website</span>
            </td>
            <td className="px-4 py-2">
              <a
                href="https://psc.uk.gov.in/"
                target="_blank"
                rel="nofollow"
                className="text-blue-500"
              >
                Click Here
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <p className="mb-4">
        This recruitment opportunity is open for eligible candidates to apply for the post of Lecturer.
      </p>
      <p className="text-center">
        <strong>Keywords:</strong> UKPSC, Lecturer, Recruitment, Online Form,
        Application, Uttarakhand, Vacancy, Jobs, Government Jobs
      </p>
    </div>
  );
}