export default function RecruitmentInfo() {
  // This component displays recruitment information for Ahmednagar District Central Co-Operative Bank (Ahmednagar DCCB).
  // It includes details like post name, vacancy details, application fee, important dates, and application links.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Ahmednagar DCCB Various Vacancy 2024</h1>
      <p className="mb-4">
        <span className="text-green-500 font-bold">Name of the Post:</span>{' '}
        <span className="text-black">Ahmednagar</span>
      </p>
      <p className="mb-4">
        <span className="text-green-500 font-bold">Post Date:</span>{' '}
        <span className="text-black">13-09-2024</span>
      </p>
      <p className="mb-4">
        <span className="text-green-500 font-bold">Total Vacancy:</span>{' '}
        <span className="text-black">696</span>
      </p>
      <p className="mb-4">
        <span className="text-red-500 font-bold">Brief Information:</span>{' '}
        <span className="text-black">
          Ahmednagar District Central Co-Operative Bank (Ahmednagar DCCB) has
          given an employment notification for the recruitment of Clerical,
          Driver & Security Guard Vacancy. Those Candidates who are interested in
          the vacancy details & completed all eligibility criteria can read the
          Notification & Apply Online.
        </span>
      </p>

      <h2 className="text-2xl font-bold mb-4">Application Fee</h2>
      <div className="mb-4">
        <p className="font-bold">Clerical Post:</p>
        <ul className="list-disc ml-4">
          <li>For All Candidates: Rs. 749/-</li>
        </ul>
      </div>
      <div className="mb-4">
        <p className="font-bold">Driver, Security Guard Post:</p>
        <ul className="list-disc ml-4">
          <li>For All Candidates: Rs. 696/-</li>
          <li>Payment Mode: Through Online</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold mb-4">Important Dates</h2>
      <ul className="list-disc ml-4 mb-4">
        <li>
          Starting Date for Apply Online & Payment of Fee: <strong>13-09-2024</strong>
        </li>
        <li>
          Last Date to Apply Online & Payment of Fee: <strong>27-09-2024</strong>
        </li>
        <li>
          Date of Online Exam: It will be published separately on the website
          of the bank
        </li>
        <li>
          Date of Downloading Admit Card: It will be published separately on
          the website of the bank
        </li>
        <li>
          Date of DV & Interview: It will be published separately on the
          website of the bank
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Age Limit (as on 12-09-2024)</h2>
      <ul className="list-disc ml-4 mb-4">
        <li>
          Minimum Age Limit for Clerk, Driver & Security Guard: <strong>21 Years</strong>
        </li>
        <li>
          Maximum Age Limit for Clerk, Driver Posts: <strong>40 Years</strong>
        </li>
        <li>
          Maximum Age Limit for Security Guard Posts: <strong>45 Years</strong>
        </li>
        <li>Age Relaxation is Applicable as per Rules</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>
      <table className="table-auto w-full mb-4 border border-gray-300 text-center">
        <thead>
          <tr>
            <th className="px-4 py-2 font-bold">SI No</th>
            <th className="px-4 py-2 font-bold">Post Name</th>
            <th className="px-4 py-2 font-bold">Total</th>
            <th className="px-4 py-2 font-bold">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">1.</td>
            <td className="px-4 py-2">Clerical</td>
            <td className="px-4 py-2">687</td>
            <td className="px-4 py-2">Any Degree</td>
          </tr>
          <tr>
            <td className="px-4 py-2">2.</td>
            <td className="px-4 py-2">Driver</td>
            <td className="px-4 py-2">04</td>
            <td className="px-4 py-2">10th Class/12th Pass</td>
          </tr>
          <tr>
            <td className="px-4 py-2">3.</td>
            <td className="px-4 py-2">Security Guard</td>
            <td className="px-4 py-2">05</td>
            <td className="px-4 py-2">Any Degree</td>
          </tr>
        </tbody>
      </table>
      <p className="mb-4 text-blue-500">
        <strong>Interested Candidates Can Read the Full Notification Before Apply Online</strong>
      </p>

      <h2 className="text-2xl font-bold mb-4">Important Links</h2>
      <table className="table-auto w-full mb-4 border border-gray-300 text-center">
        <tbody>
          <tr>
            <td className="px-4 py-2">
              <span className="text-green-500 font-bold">Apply Online</span>
            </td>
            <td className="px-4 py-2">
              <a
                href="https://www.adccbanknagar.in/"
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
              <span className="text-green-500 font-bold">Notification</span>
            </td>
            <td className="px-4 py-2">
              <a
                href="https://img.freejobalert.com/uploads/2024/09/Notification-Ahmednagar-DCCB-Various-Vacancy.pdf"
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
              <span className="text-green-500 font-bold">Official Website</span>
            </td>
            <td className="px-4 py-2">
              <a
                href="https://www.adccbanknagar.in/"
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