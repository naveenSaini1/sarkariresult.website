export default function RecruitmentInformation() {
  // This component displays recruitment information for Senior Resident Vacancy in the Directorate of Medical Education, AP.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">DME, AP Senior Resident 2024 Provisional Merit list Released</h1>
      <div className="flex justify-between mb-4">
        <p className="text-gray-600">
          <span className="font-bold">Name of the Post:</span> DME, AP Senior Resident 2024 Provisional Merit list Released
        </p>
        <p className="text-gray-600">
          <span className="font-bold">Post Date:</span> 21-08-2024
        </p>
      </div>
      <p className="text-gray-600 mb-4">
        <span className="font-bold">Latest Update:</span> 03-09-2024
      </p>
      <p className="text-gray-600 mb-4">
        <span className="font-bold">Total Vacancy:</span> 997
      </p>
      <p className="text-gray-600 mb-4">
        <span className="font-bold">Brief Information:</span> Govt of Andhra Pradesh, Directorate of Medical Education, Andhra Pradesh has advertised a notification for the recruitment of Senior Resident Vacancy. Eligible Candidates who are interested in the Vacancy details & completed all eligibility criteria can read the notification & Apply Online.
      </p>

      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Directorate of Medical Education, AP</h2>
        <p className="text-gray-600 mb-2">Advt No 02/2024</p>
        <p className="text-gray-600 mb-2">
          <span className="font-bold">Senior Resident Vacancy</span> 2024
        </p>
        <p className="text-gray-600 mb-2">
          <a href="https://www.freejobalert.com" target="_blank" rel="noopener" className="text-blue-500 underline">
            
          </a>
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Application Fee</h3>
        <ul className="list-disc pl-4">
          <li className="text-gray-600">Fee for OCs candidates: Rs 1000/-</li>
          <li className="text-gray-600">Fee for BC,SC and ST candidates: Rs 500/-</li>
          <li className="text-gray-600">Payment Mode: Through Online</li>
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Important Dates</h3>
        <ul className="list-disc pl-4">
          <li className="text-gray-600">Starting date for online application: 20-08-2024</li>
          <li className="text-gray-600">Last date for online application: 27-08-2024</li>
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Age Limit (as on 19-08-2024)</h3>
        <ul className="list-disc pl-4">
          <li className="text-gray-600">Upper Age Limit: 44 Years</li>
          <li className="text-gray-600">Must not cross the age of 44 years as on date of notification.</li>
          <li className="text-gray-600">Age Relaxation is Applicable as Per Rules</li>
          <li className="text-gray-600">For More Details Refer the Notification</li>
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Qualification</h3>
        <ul className="list-disc pl-4">
          <li className="text-gray-600">Candidate Should Possess Post Graduate Medical degree (MD/MS/DNB/MDS)</li>
        </ul>
      </div>

      <table className="table-auto w-full mb-4">
        <thead>
          <tr>
            <th colSpan={2} className="text-center font-bold text-gray-700">Post Name</th>
            <th className="text-center font-bold text-gray-700">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={2} className="text-center">Senior Resident</td>
            <td className="text-center">997</td>
          </tr>
        </tbody>
      </table>

      <p className="text-gray-600 mb-4">
        Interested Candidates Can Read the Full Notification Before Attend
      </p>

      <h3 className="text-xl font-bold mb-2">Important Links</h3>
      <table className="table-auto w-full mb-4">
        <tbody>
          <tr>
            <td colSpan={2} className="text-center font-bold text-gray-700">Provisional Merit list (03-09-2024)</td>
            <td className="text-center">
              <a
                href="https://dme.ap.nic.in/planning/2024/ProMerit_2_24_03092024.pdf"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center font-bold text-gray-700">Apply Online</td>
            <td className="text-center">
              <a
                href="https://dmeaponline.com/"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center font-bold text-gray-700">Notification</td>
            <td className="text-center">
              <a
                href="https://img.freejobalert.com/uploads/2024/08/Notification-DME-AP-Senior-Resident-Posts.pdf"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
              >
                Click here
              </a>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center font-bold text-gray-700">Official Website</td>
            <td className="text-center">
              <a
                title="Directorate of Medical Education, AP"
                href="https://dme.ap.nic.in/"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
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