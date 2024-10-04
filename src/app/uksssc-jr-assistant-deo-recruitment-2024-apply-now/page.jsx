export default function RecruitmentInformation() {
  // This component displays recruitment information for the UKSSSC Junior Assistant and DEO position.
  // It includes information on important dates, application fees, vacancies, and the selection process.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">UKSSSC Junior Assistant and DEO Recruitment</h1>
      <div className="mb-4">
        <p className="text-gray-600">
          The Uttarakhand Subordinate Service Selection Commission (UKSSSC) has released the notification for the recruitment of
          various posts at the intermediate level (12th class) including the Data Entry Operator (DEO), Computer Assistant,
          Junior Assistant, Mate, etc.
        </p>
      </div>
      <div className="mb-4">
        <p className="text-gray-600">
          The UKSSSC Junior Assistant and DEO Recruitment Notification has been released on{' '}
          <span className="font-bold">October 4, 2024</span>, and the online applications will be accepted from{' '}
          <span className="font-bold">October 11</span> to <span className="font-bold">November 1, 2024</span>.
        </p>
      </div>
      <h2 className="text-2xl font-bold mb-4">Important Dates</h2>
      <table className="w-full table-auto text-left mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Event</th>
            <th className="px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Notification Date</td>
            <td className="px-4 py-2">October 4, 2024</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Apply Online Start</td>
            <td className="px-4 py-2">October 11, 2024</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Apply Last Date</td>
            <td className="px-4 py-2">November 1, 2024</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Edit Application Form</td>
            <td className="px-4 py-2">November 5-8, 2024</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Exam Date</td>
            <td className="px-4 py-2">January 19, 2025</td>
          </tr>
        </tbody>
      </table>
      <h2 className="text-2xl font-bold mb-4">Application Fee</h2>
      <table className="w-full table-auto text-left mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2">Fees</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">General, Other Backward Classes (OBC)</td>
            <td className="px-4 py-2">Rs. 300/-</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Scheduled Castes (SC), Scheduled Tribes (ST), Economically Weaker Section (EWS), Persons with Disabilities (PWD)</td>
            <td className="px-4 py-2">Rs. 150/-</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Orphan</td>
            <td className="px-4 py-2">Rs. 0/-</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Mode of Payment</td>
            <td className="px-4 py-2">Online</td>
          </tr>
        </tbody>
      </table>
      <h2 className="text-2xl font-bold mb-4">Vacancies and Qualification</h2>
      <p className="text-gray-600 mb-2">
        Age Limit: The age limit to apply for the UKSSSC Junior Assistant and DEO Recruitment is 18-42 Years. The cutoff date
        for calculating the age limit is July 1, 2024. The age relaxation will be given as per the rules.
      </p>
      <table className="w-full table-auto text-left mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Post Name</th>
            <th className="px-4 py-2">Vacancy</th>
            <th className="px-4 py-2">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Data Entry Operator (DEO)</td>
            <td className="px-4 py-2">3</td>
            <td className="px-4 py-2">12th Pass + Typing</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Computer Assistant/ Receptionist</td>
            <td className="px-4 py-2">3</td>
            <td className="px-4 py-2">12th Pass + Typing</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Junior Assistant</td>
            <td className="px-4 py-2">465</td>
            <td className="px-4 py-2">12th Pass + Typing</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Receptionist</td>
            <td className="px-4 py-2">5</td>
            <td className="px-4 py-2">12th Pass</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Housing Inspector</td>
            <td className="px-4 py-2">1</td>
            <td className="px-4 py-2">12th Pass</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Mate</td>
            <td className="px-4 py-2">268</td>
            <td className="px-4 py-2">12th Pass</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Supervisor</td>
            <td className="px-4 py-2">6</td>
            <td className="px-4 py-2">12th Pass</td>
          </tr>
        </tbody>
      </table>
      <h2 className="text-2xl font-bold mb-4">Selection Process</h2>
      <p className="text-gray-600 mb-2">
        The selection process for the UKSSSC Junior Assistant and DEO Recruitment includes the following stages.
      </p>
      <ol className="list-decimal list-inside mb-4">
        <li>Written Exam</li>
        <li>Skill Test (as per post requirement)</li>
        <li>Document Verification</li>
        <li>Medical Examination</li>
      </ol>
      <h2 className="text-2xl font-bold mb-4">Notification and Apply Link</h2>
      <table className="w-full table-auto text-left mb-4">
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">UKSSSC Junior Assistant and DEO Notification</td>
            <td className="px-4 py-2">
              <a href="#" className="text-blue-500 hover:underline">
                Notification
              </a>
            </td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">UKSSSC Junior Assistant and DEO Online Form (From October 11, 2024)</td>
            <td className="px-4 py-2">
              <a href="#" className="text-blue-500 hover:underline" target="_blank" rel="noopener">
                Apply Online
              </a>
            </td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">UKSSSC Official Website</td>
            <td className="px-4 py-2">
              <a href="#" className="text-blue-500 hover:underline" target="_blank" rel="noopener">
                UKSSSC
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}