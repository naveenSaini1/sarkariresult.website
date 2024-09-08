export default function RecruitmentInformation() {
  // This component displays recruitment information for HESCOM Apprentice 2024.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">HESCOM Apprentice 2024 Online Form</h1>
      <div className="mb-4">
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Name of the Post:</span> HESCOM Apprentice 2024 Online Form
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Post Date: </span>
          <strong>12-08-2024</strong>
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Total Vacancy: </span>
          <strong>338</strong>
        </p>
      </div>
      <p className="mb-4">
        <span className="text-red-500 font-bold">Brief Information:</span> Hubli Electricity Supply Company Limited
        (HESCOM) has published a notification for the recruitment of Apprentice vacancies under the Apprenticeship
        Act 1961. Those Candidates who are interested in the vacancy details &amp; completed all eligibility
        criteria can read the Notification &amp; Apply Online.
      </p>
      <h2 className="text-2xl font-bold mb-4">Important Details</h2>
      <table className="table-auto border-collapse w-full mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-left text-gray-700 font-semibold">Important Dates</th>
            <th className="px-4 py-2 text-left text-gray-700 font-semibold">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">Starting Date for Apply Online</td>
            <td className="px-4 py-2">05-08-2024</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Last date for applying “Hubli Electricity Supply Company Limited”</td>
            <td className="px-4 py-2">20-08-2024</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Declaration of Shortlisted Candidates list by BoAT (SR), Chennai</td>
            <td className="px-4 py-2">27-08-2024</td>
          </tr>
          <tr>
            <td className="px-4 py-2">
              Physical appearance for verification of documents of shortlisted candidates at the O/o. Executive
              Engineer (Ele.), ITI, HESCOM, Karwar Road, Vidyut Nagar, Hubballi
            </td>
            <td className="px-4 py-2">09-09-2024</td>
          </tr>
        </tbody>
      </table>
      <h2 className="text-2xl font-bold mb-4">Age Limit</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Age limit will be followed as per Apprenticeship Rules.</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Qualification</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Graduates:</strong> Should have passed with a B.E. / B.Tech degree from a recognized University /
          Institution (recognised by AICTE or State Govt. / Central Govt.) in electrical/Electronics engineering.
        </li>
        <li>
          <strong>Diploma holders:</strong> Should have 3 years Diploma from a polytechnic college / institution
          <br/>
          recognized by the State Govt. / Central Govt. in electrical/Electronics engineering.
        </li>
        <li>For More Details Refer Notification.</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>
      <table className="table-auto border-collapse w-full mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-left text-gray-700 font-semibold">Post Name</th>
            <th className="px-4 py-2 text-left text-gray-700 font-semibold">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">B.E Graduate in Electrical &amp; Electronics Engineering</td>
            <td className="px-4 py-2">200</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Diploma holder in Electrical &amp; Electronics Engineering</td>
            <td className="px-4 py-2">138</td>
          </tr>
        </tbody>
      </table>
      <p className="mb-4 text-blue-500">
        <strong>Interested Candidates Can Read the Full Notification Before Apply Online</strong>
      </p>
      <h2 className="text-2xl font-bold mb-4">Important Links</h2>
      <table className="table-auto border-collapse w-full mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-left text-gray-700 font-semibold">Links</th>
            <th className="px-4 py-2 text-left text-gray-700 font-semibold">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">Apply Online</td>
            <td className="px-4 py-2">
              <a
                href="https://nats.education.gov.in/"
                target="_blank"
                rel="nofollow"
                className="text-blue-500"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">Notification</td>
            <td className="px-4 py-2">
              <a
                href="https://img.freejobalert.com/uploads/2024/08/Notication-HESCOM-Apprentice-2024.pdf"
                target="_blank"
                rel="nofollow"
                className="text-blue-500"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">Official Website</td>
            <td className="px-4 py-2">
              <a
                href="https://hescom.karnataka.gov.in/english"
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
    </div>
  );
}