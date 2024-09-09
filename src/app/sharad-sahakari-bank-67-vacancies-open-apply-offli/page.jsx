export default function RecruitmentInformation() {
  // This component displays recruitment information for Sharad Sahakari Bank Ltd, Solapur.
  // It includes details about the post, important dates, vacancy details, and links to the notification and official website. 
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Sharad Sahakari Bank Ltd, Solapur - Various Vacancy 2024</h1>
      <p className="text-lg mb-4">
        <span className="font-bold text-green-500">Name of the Post:</span>{' '}
        Sharad Sahakari Bank Ltd, Solapur Various Vacancy Offline Form 2024
      </p>
      <p className="text-lg mb-4">
        <span className="font-bold text-green-500">Post Date: </span> 09-09-2024
      </p>
      <p className="text-lg mb-4">
        <span className="font-bold text-green-500">Total Vacancy: </span> 67
      </p>
      <p className="text-lg mb-4">
        <span className="font-bold text-red-500">Brief Information:</span> Sharad Sahakari Bank Ltd, Solapur has published a notification for the recruitment of Sr. Officer, Sr. Officer (Legal), Sr. Officer (Marketing), Jr. Officer, Clerk &amp; Peon Vacancy. Those Candidates who are interested in the vacancy details &amp; completed all eligibility criteria can read the Notification &amp; Apply.
      </p>

      <h2 className="text-2xl font-bold mb-4">Important Dates</h2>
      <ul className="list-disc ml-6">
        <li>Last Date for Receipt of Application: 27-09-2024</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-center font-bold text-blue-500">
              Post Name
            </th>
            <th className="px-4 py-2 text-center font-bold text-blue-500">
              Total
            </th>
            <th className="px-4 py-2 text-center font-bold text-blue-500">
              Age Limit (as on 01-01-2024)
            </th>
            <th className="px-4 py-2 text-center font-bold text-blue-500">
              Qualification
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-gray-300">
            <td className="px-4 py-2 text-center">Sr. Officer</td>
            <td className="px-4 py-2 text-center">03</td>
            <td className="px-4 py-2 text-center">30 to 45 Years</td>
            <td className="px-4 py-2 text-center">Any Degree, PG, MS-CIT</td>
          </tr>
          <tr className="border-t border-gray-300">
            <td className="px-4 py-2 text-center">Sr. Officer (Legal)</td>
            <td className="px-4 py-2 text-center">01</td>
            <td className="px-4 py-2 text-center">35 to 45 Years</td>
            <td className="px-4 py-2 text-center">PG (LAW)</td>
          </tr>
          <tr className="border-t border-gray-300">
            <td className="px-4 py-2 text-center">Sr. Officer (Marketing)</td>
            <td className="px-4 py-2 text-center">03</td>
            <td className="px-4 py-2 text-center">35 to 45 Years</td>
            <td className="px-4 py-2 text-center">Degree (LAW), PG , MBA (Finance/Marketing)</td>
          </tr>
          <tr className="border-t border-gray-300">
            <td className="px-4 py-2 text-center">Jr. Officer</td>
            <td className="px-4 py-2 text-center">03</td>
            <td className="px-4 py-2 text-center">25 to 33 Years</td>
            <td className="px-4 py-2 text-center">Any Degree, PG, MS-CIT</td>
          </tr>
          <tr className="border-t border-gray-300">
            <td className="px-4 py-2 text-center">Clerk</td>
            <td className="px-4 py-2 text-center">40</td>
            <td className="px-4 py-2 text-center">21 to 30 Years</td>
            <td className="px-4 py-2 text-center">Any Degree, PG, MS-CIT</td>
          </tr>
          <tr className="border-t border-gray-300">
            <td className="px-4 py-2 text-center">Peon</td>
            <td className="px-4 py-2 text-center">17</td>
            <td className="px-4 py-2 text-center">21 to 30 Years</td>
            <td className="px-4 py-2 text-center">12th Class</td>
          </tr>
        </tbody>
      </table>

      <p className="text-lg text-blue-500 mt-4">
        Interested Candidates Can Read the Full Notification Before Apply
      </p>

      <h2 className="text-2xl font-bold mb-4">Important Links</h2>
      <table className="w-full table-auto border-collapse border border-gray-300">
        <tbody>
          <tr className="border-t border-gray-300">
            <td className="px-4 py-2 text-center font-bold text-green-500">
              Notification
            </td>
            <td className="px-4 py-2 text-center">
              <a
                href="https://img.freejobalert.com/uploads/2024/09/Notification-Sharad-Sahakari-Bank-Ltd-Solapur-Various-Vacancy-Posts.png"
                target="_blank"
                rel="nofollow"
                className="text-blue-500"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="border-t border-gray-300">
            <td className="px-4 py-2 text-center font-bold text-green-500">
              Official Website
            </td>
            <td className="px-4 py-2 text-center">
              <a
                href="http://sharadbank.in/"
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