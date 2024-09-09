export default function RecruitmentInformation() {
  // Displays recruitment information for Government Medical College (GMC), Warangal
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">
        GMC, Warangal - Various Vacancy Walk In 2024
      </h1>
      <div className="flex flex-col gap-4 mb-6">
        <p className="flex items-center gap-2">
          <span className="font-bold text-green-500">Name of the Post:</span>
          GMC, Warangal Various Vacancy Walk In 2024
        </p>
        <p className="flex items-center gap-2">
          <span className="font-bold text-green-500">Post Date:</span>
          25-06-2024
        </p>
        <p className="flex items-center gap-2">
          <span className="font-bold text-green-500">Total Vacancy:</span>
          <span className="text-gray-600">72</span>
        </p>
      </div>
      <p className="mb-4">
        <span className="font-bold text-red-500">Brief Information:</span>{' '}
        Government Medical College (GMC) Narsampet, Warangal, Telangana has given
        an employment notification for the recruitment of Assistant Professor,
        Associate Professor &amp; Professor Demonstrator Vacancy on Temporary
        Basis. Those Candidates who are interested in the vacancy details &amp;
        completed all eligibility criteria can read the Notification &amp; Attend.
      </p>
      <div className="mb-4">
        <h2 className="text-xl font-bold text-red-500 mb-2">Important Dates</h2>
        <ul className="list-disc pl-6">
          <li>
            Date of Walk In: 25-07-2024 to 31-07-2024 (09:00 am to 04:00 pm)
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold text-red-500 mb-2">Qualification</h2>
        <ul className="list-disc pl-6">
          <li>Candidates Should Possess MD/MS/DNB/MDS (Concerned Subject)</li>
        </ul>
      </div>
      <h2 className="text-xl font-bold text-red-500 mb-2">Vacancy Details</h2>
      <table className="w-full table-auto border-collapse mb-4">
        <thead>
          <tr className="bg-gray-100 text-center">
            <th className="py-2 text-blue-500 font-bold">Post Name</th>
            <th className="py-2 text-blue-500 font-bold">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td className="py-2">Professor</td>
            <td className="py-2">10</td>
          </tr>
          <tr className="text-center">
            <td className="py-2">Assistant Professor</td>
            <td className="py-2">54</td>
          </tr>
          <tr className="text-center">
            <td className="py-2">Associate Professor</td>
            <td className="py-2">08</td>
          </tr>
        </tbody>
      </table>
      <p className="text-blue-500 mb-4">
        Interested Candidates Can Read the Full Notification Before Attend
      </p>
      <h2 className="text-xl font-bold text-red-500 mb-2">Important Links</h2>
      <table className="w-full table-auto border-collapse">
        <tbody>
          <tr className="text-center">
            <td className="py-2 text-green-500 font-bold">Notification</td>
            <td className="py-2">
              <a
                href="https://img.freejobalert.com/uploads/2024/07/Notification-GMC-Telangana-Various-Vacancy-2024.pdf"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="text-center">
            <td className="py-2 text-green-500 font-bold">Official Website</td>
            <td className="py-2">
              <a
                href="https://www.gmcnarsampet.com/"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
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