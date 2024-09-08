export default function RecruitmentInfo() {
  // Displays recruitment information for GIPMER Senior Resident vacancy
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">GIPMER Senior Resident Vacancy 2024</h1>
      <p className="text-gray-700 mb-4">
        Govind Ballabh Pant Institute of Postgraduate Medical Education and Research (GIPMER) has announced
        recruitment for Senior Resident positions. Interested and eligible candidates can read the
        notification and apply.
      </p>

      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Post Details</h2>
        <ul className="list-disc pl-5">
          <li className="mb-2">
            <span className="font-bold">Name of the Post:</span> GIPMER Senior Resident 2024 Offline Form
          </li>
          <li className="mb-2">
            <span className="font-bold">Post Date:</span> 13-08-2024
          </li>
          <li className="mb-2">
            <span className="font-bold">Total Vacancy:</span> 125
          </li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Application Fee</h2>
        <ul className="list-disc pl-5">
          <li className="mb-2">
            For All Candidates: <span className="font-bold">Rs.300/-</span>
          </li>
          <li className="mb-2">
            Payment Mode: <span className="font-bold">Demand Draft</span>
          </li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Important Dates</h2>
        <ul className="list-disc pl-5">
          <li className="mb-2">
            Last Date to Receipt of Application: <span className="font-bold">14-08-2024 (upto 04.00 PM)</span>
          </li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Age Limit (as on 14-08-2024)</h2>
        <ul className="list-disc pl-5">
          <li className="mb-2">
            Maximum Age Limit: <span className="font-bold">45 Years</span>
          </li>
          <li className="mb-2">Age relaxation is admissible as per rules.</li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Qualification</h2>
        <ul className="list-disc pl-5">
          <li className="mb-2">
            Candidates Should Possess MBBS, Post Graduation Degree/ Diploma/ DNB (Concerned Specialty).
          </li>
          <li className="mb-2">For More Details Refer Notification.</li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Vacancy Details</h2>
        <table className="table-auto w-full text-center">
          <thead>
            <tr>
              <th className="px-4 py-2">Post Name</th>
              <th className="px-4 py-2">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2">Senior Resident</td>
              <td className="px-4 py-2">125</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mb-4">
        <p className="text-blue-500">
          Interested Candidates Can Read the Full Notification Before Apply
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Important Links</h2>
        <table className="table-auto w-full text-center">
          <tbody>
            <tr>
              <td className="px-4 py-2">Notification</td>
              <td className="px-4 py-2">
                <a
                  href="https://img.freejobalert.com/uploads/2024/08/Notification-GIPMER-Senior-Resident-2024.pdf"
                  className="text-blue-500"
                  target="_blank"
                  rel="nofollow"
                >
                  Click here
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">Official Website</td>
              <td className="px-4 py-2">
                <a
                  href="http://gbpant.delhigovt.nic.in/"
                  className="text-blue-500"
                  target="_blank"
                  rel="nofollow"
                >
                  Click here
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}