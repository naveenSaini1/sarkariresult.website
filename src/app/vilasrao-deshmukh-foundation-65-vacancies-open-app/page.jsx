export default function RecruitmentInformation() {
  // Displays recruitment information for Vilasrao Deshmukh Foundation Group of Institutions, Latur
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        Vilasrao Deshmukh Foundation Group of Institutions, Latur - Various Vacancy 2024
      </h1>
      <p className="mb-4">
        <span className="text-green-500 font-bold">Name of the Post:</span>{' '}
        Vilasrao Deshmukh Foundation Group of Institutions, Latur Various Vacancy Offline Form 2024
      </p>
      <div className="flex justify-between mb-4">
        <p className="text-gray-600">
          <span className="text-green-500 font-bold">Post Date:</span> 05-09-2024
        </p>
        <p className="text-gray-600">
          <span className="text-green-500 font-bold">Total Vacancy:</span> 65
        </p>
      </div>
      <p className="mb-4">
        <span className="text-red-500 font-bold">Brief Information:</span> Vilasrao
        Deshmukh Foundation Group of Institutions, Latur has given a Notification
        for the recruitment of Professor, Associate Professor, Assistant
        Professor &amp; Other Vacancy. Those Candidates who are interested in the
        vacancy details &amp; completed all eligibility criteria can read the
        Notification &amp; Apply.
      </p>
      <h2 className="text-2xl font-bold mb-4">Important Dates</h2>
      <ul className="list-disc pl-6 mb-4">
        <li className="text-gray-600">
          Date of Notification: <strong>04-09-2024</strong>
        </li>
        <li className="text-gray-600">
          Last Date for Receipt of Application: <strong>within 21 days from the
          date of publication of this advertisement.</strong>
        </li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Qualification</h2>
      <ul className="list-disc pl-6 mb-4">
        <li className="text-gray-600">
          as per norms specified by AICTE/PCI/COA, Govt. Of Maharashtra &amp; Dr
          Babasaheb Ambedkar Technological University, Lonere.
        </li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>
      <table className="table-auto w-full border-collapse border border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left font-bold text-purple-500">
              Sl No
            </th>
            <th className="px-4 py-2 text-left font-bold text-purple-500">
              Post Name
            </th>
            <th className="px-4 py-2 text-left font-bold text-purple-500">
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 text-center">1.</td>
            <td className="px-4 py-2 text-center">Professor</td>
            <td className="px-4 py-2 text-center">06</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 text-center">2.</td>
            <td className="px-4 py-2 text-center">Associate Professor</td>
            <td className="px-4 py-2 text-center">11</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 text-center">3.</td>
            <td className="px-4 py-2 text-center">Assistant Professor</td>
            <td className="px-4 py-2 text-center">45</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 text-center">4.</td>
            <td className="px-4 py-2 text-center">Workshop Superintendent</td>
            <td className="px-4 py-2 text-center">01</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 text-center">5.</td>
            <td className="px-4 py-2 text-center">Physical Director</td>
            <td className="px-4 py-2 text-center">01</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 text-center">6.</td>
            <td className="px-4 py-2 text-center">Librarian</td>
            <td className="px-4 py-2 text-center">01</td>
          </tr>
        </tbody>
      </table>
      <p className="text-blue-500 mb-4">
        <strong>Interested Candidates Can Read the Full Notification Before Apply</strong>
      </p>
      <h2 className="text-2xl font-bold mb-4">Important Links</h2>
      <table className="table-auto w-full border-collapse border border-gray-300 mb-4">
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 text-left font-bold text-green-500">
              Notification
            </td>
            <td className="px-4 py-2 text-center">
              <a
                href="https://img.freejobalert.com/uploads/2024/09/Notification-Vilasrao-Deshmukh-Foundation-Group-of-Institutions-Latur-Professor-Posts.jpg"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="nofollow"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 text-left font-bold text-green-500">
              Official Website
            </td>
            <td className="px-4 py-2 text-center">
              <a
                href="https://www.vdfengineering.co.in/"
                className="text-blue-500 hover:underline"
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