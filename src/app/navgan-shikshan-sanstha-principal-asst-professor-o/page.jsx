export default function RecruitmentInformation() {
  // This component displays recruitment information for Navgan Shikshan Sanstha, Rajuri Principal & Asst Professor Offline Form 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Navgan Shikshan Sanstha, Rajuri Principal &amp; Asst Professor Offline Form 2024
      </h1>
      <div className="mb-4">
        <p className="text-gray-600">
          <span className="font-bold text-green-500">Name of the Post:</span>{' '}
          Navgan Shikshan Sanstha, Rajuri Principal &amp; Asst Professor Offline Form 2024
        </p>
        <p className="text-gray-600">
          <span className="font-bold text-green-500">Post Date:</span>{' '}
          <span className="text-gray-800">29-08-2024</span>
        </p>
        <p className="text-gray-600">
          <span className="font-bold text-green-500">Total Vacancy:</span> 121
        </p>
        <p className="text-gray-600">
          <span className="font-bold text-red-500">Brief Information:</span> Navgan Shikshan Sanstha, Rajuri has published a Notification for the recruitment of Principal &amp; Asst Professor Vacancy. Those Candidates who are interested in the vacancy details &amp; completed all eligibility criteria can read the notification &amp; Apply.
        </p>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Important Dates</h2>
        <ul className="list-disc ml-6 text-gray-600">
          <li>
            Last Date for Receipt of Application: <strong>within 15 days from the of publication</strong>
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Qualification</h2>
        <ul className="list-disc ml-6 text-gray-600">
          <li>
            Candidates should possess as per the norms specified by University
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Vacancy Details</h2>
        <table className="w-full table-auto border border-gray-300 text-gray-600">
          <thead>
            <tr>
              <th className="p-2 border border-gray-300 text-center font-bold text-pink-500">
                Post Name
              </th>
              <th className="p-2 border border-gray-300 text-center font-bold text-pink-500">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border border-gray-300 text-center">
                Assistant Professor
              </td>
              <td className="p-2 border border-gray-300 text-center">118</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300 text-center">
                Assistant Director of Physical Education &amp; Sports
              </td>
              <td className="p-2 border border-gray-300 text-center">01</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300 text-center">
                Librarian
              </td>
              <td className="p-2 border border-gray-300 text-center">01</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300 text-center">
                Principal
              </td>
              <td className="p-2 border border-gray-300 text-center">01</td>
            </tr>
          </tbody>
        </table>
        <p className="text-gray-600">
          <span className="font-bold text-blue-500">
            Interested Candidates Can Read the Full Notification Before Apply
          </span>
        </p>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Important Links</h2>
        <table className="w-full table-auto border border-gray-300 text-gray-600">
          <tbody>
            <tr>
              <td className="p-2 border border-gray-300 text-center font-bold text-green-500">
                Notification
              </td>
              <td className="p-2 border border-gray-300 text-center">
                <a
                  href="https://img.freejobalert.com/uploads/2024/08/Notification-Navgan-Shikshan-Sanstha-Rajuri-Various-Vacancy-2024.jpg"
                  target="_blank"
                  className="text-blue-500"
                  rel="nofollow"
                >
                  Click Here
                </a>
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300 text-center font-bold text-green-500">
                Official Website
              </td>
              <td className="p-2 border border-gray-300 text-center">
                <a
                  href="https://navgancollegeparli.com/"
                  target="_blank"
                  className="text-blue-500"
                  rel="nofollow"
                >
                  Click Here
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}