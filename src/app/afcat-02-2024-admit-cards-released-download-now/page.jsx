export default function RecruitmentInformation() {
  // Displays recruitment information for Indian Air Force AFCAT 02/2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Indian Air Force AFCAT 02/2024</h1>
      <p className="text-lg mb-4">
        <strong className="text-green-500">Name</strong>
        <strong className="text-justify text-green-500">&nbsp;of the Post:</strong> Indian Air Force AFCAT 02/2024 Admit Card Download
      </p>
      <p className="text-lg mb-4 text-justify">
        <strong className="text-green-500">Post Date: </strong> 20-05-2024
      </p>
      <p className="text-lg mb-4">
        <strong className="text-green-500">Latest Update:</strong> 25-07-2024
      </p>
      <p className="text-lg mb-4">
        <strong className="text-green-500">Total Vacancy:</strong> 304
      </p>
      <p className="text-lg mb-4 text-justify">
        <strong className="text-red-500">Brief Information:</strong> Indian Air Force&nbsp;
        has published a notification for the recruitment of AFCAT (02/2024) for Flying &amp; Ground Duty (Technical and Non-Technical)
        Branches/ NCC Special Entry for Courses Commencing in July 2025. Those Candidates who are interested in the vacancy details &amp;
        completed all eligibility criteria can read the Notification &amp; Apply Online.
      </p>
      <h2 className="text-2xl font-bold mb-4 mt-8">Application Fee</h2>
      <ul className="list-disc pl-5 mb-4">
        <li className="text-lg">For AFCAT entry:&nbsp;<strong>Rs. 550/-</strong></li>
        <li className="text-lg">For NCC Special Entry:&nbsp;<strong>Nil</strong></li>
        <li className="text-lg">Payment Mode:<strong>&nbsp;Through Credit/Debit Cards/Net banking</strong></li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Important Dates</h2>
      <ul className="list-disc pl-5 mb-4">
        <li className="text-lg">Starting Date to Apply Online: <strong>30-05-2024 (11:00 AM)</strong></li>
        <li className="text-lg">Closing Date to Apply Online: <strong>28-06-2024 (11:00 PM)</strong></li>
        <li className="text-lg">Date of Exam: <strong>09, 10 &amp; 11-08-2024</strong></li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Age Limit (as on 01-07-2025)</h2>
      <div className="mb-4">
        <strong className="text-lg">For Flying Branch through AFCAT and NCC Special Entry:</strong>
      </div>
      <ul className="list-disc pl-5 mb-4">
        <li className="text-lg">Minimum Age Limit: <strong>20 Years</strong></li>
        <li className="text-lg">Maximum Age Limit: <strong>24 Years</strong></li>
        <li className="text-lg">Candidates born between 02 July 1999 to 01 July 2005 (both dates inclusive)</li>
      </ul>
      <div className="mb-4">
        <strong className="text-lg">For&nbsp;Ground Duty (Technical &amp; Non-Technical) Branch:</strong>
      </div>
      <ul className="list-disc pl-5 mb-4">
        <li className="text-lg">Minimum Age Limit: <strong>20 Years</strong></li>
        <li className="text-lg">Maximum Age Limit: <strong>26 Years</strong></li>
        <li className="text-lg">Candidates born between 02 July 1999 to 01 July 2005 (both dates inclusive).</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Qualification</h2>
      <ul className="list-disc pl-5 mb-4">
        <li className="text-lg">
          Candidates should have passed with a minimum of 50% marks each in Maths and Physics at 10+2 level and
        </li>
        <li className="text-lg">
          Graduation (any Disciplines) or&nbsp;BE/B Tech degree or&nbsp;Candidates who have cleared Section A &amp; B examination of
          Associate Membership of Institution of Engineers (India) or Aeronautical Society of India in relevant Engg disciplines
        </li>
        <li className="text-lg">Degree or PG Degree (Relevant Subjects)</li>
        <li className="text-lg">For More Details Refer Notification</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>
      <table className="table-auto border-collapse w-full mb-4">
        <thead>
          <tr>
            <th className="text-center text-lg font-bold text-pink-500 border border-gray-300 px-4 py-2">Post Name</th>
            <th className="text-center text-lg font-bold text-pink-500 border border-gray-300 px-4 py-2">Branch</th>
            <th className="text-center text-lg font-bold text-pink-500 border border-gray-300 px-4 py-2">
              Total Vacancy (Men (SSC))
            </th>
            <th className="text-center text-lg font-bold text-pink-500 border border-gray-300 px-4 py-2">
              Total Vacancy (Women (SSC))
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center text-lg border border-gray-300 px-4 py-2" rowSpan={3}>
              AFCAT Entry
            </td>
            <td className="text-center text-lg border border-gray-300 px-4 py-2">Flying</td>
            <td className="text-center text-lg border border-gray-300 px-4 py-2">18</td>
            <td className="text-center text-lg border border-gray-300 px-4 py-2">11</td>
          </tr>
          <tr>
            <td className="text-center text-lg border border-gray-300 px-4 py-2">Ground Duty (Technical)</td>
            <td className="text-center text-lg border border-gray-300 px-4 py-2">124</td>
            <td className="text-center text-lg border border-gray-300 px-4 py-2">32</td>
          </tr>
          <tr>
            <td className="text-center text-lg border border-gray-300 px-4 py-2">Ground Duty (Non-Technical)</td>
            <td className="text-center text-lg border border-gray-300 px-4 py-2">95</td>
            <td className="text-center text-lg border border-gray-300 px-4 py-2">24</td>
          </tr>
          <tr>
            <td className="text-center text-lg border border-gray-300 px-4 py-2">NCC Special Entry</td>
            <td className="text-center text-lg border border-gray-300 px-4 py-2">Flying</td>
            <td className="text-center text-lg border border-gray-300 px-4 py-2" colSpan={2}>
              10% of seats
            </td>
          </tr>
        </tbody>
      </table>
      <p className="text-lg text-blue-500 font-bold mb-4">
        Interested Candidates Can Read the Full Notification Before Apply online
      </p>
      <h2 className="text-2xl font-bold mb-4">Important Links</h2>
      <table className="table-auto border-collapse w-full mb-4">
        <tbody>
          <tr>
            <td className="text-center text-lg font-bold text-green-500 border border-gray-300 px-4 py-2" colSpan={3}>
              Admit Card (25-07-2024)
            </td>
            <td className="text-center text-lg font-bold border border-gray-300 px-4 py-2">
              <a
                href="https://afcat.cdac.in/afcatreg/candidate/login"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-500"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="text-center text-lg font-bold text-green-500 border border-gray-300 px-4 py-2" colSpan={3}>
              Apply Online (30-05-2024)
            </td>
            <td className="text-center text-lg font-bold border border-gray-300 px-4 py-2">
              <a
                href="https://afcat.cdac.in/afcatreg/candidate/login"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-500"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="text-center text-lg font-bold text-green-500 border border-gray-300 px-4 py-2" colSpan={3}>
              Detailed Notification (30-05-2024)
            </td>
            <td className="text-center text-lg font-bold border border-gray-300 px-4 py-2">
              <a
                href="https://afcat.cdac.in/AFCAT/assets/images/news/AFCAT_02_2024/English_Notification_AFCAT_02-2024.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-500"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="text-center text-lg font-bold text-green-500 border border-gray-300 px-4 py-2" colSpan={3}>
              Notification
            </td>
            <td className="text-center text-lg font-bold border border-gray-300 px-4 py-2">
              <a
                href="https://afcat.cdac.in/AFCAT/assets/images/news/AFCAT_02_2024/Advertisement_AFCAT_02-2024.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-500"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="text-center text-lg font-bold text-green-500 border border-gray-300 px-4 py-2" colSpan={3}>
              Official Website
            </td>
            <td className="text-center text-lg font-bold border border-gray-300 px-4 py-2">
              <a
                href="https://afcat.cdac.in/AFCAT/"
                target="_blank"
                rel="noopener noreferrer"
                title="Indian Air Force"
                className="underline text-blue-500"
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