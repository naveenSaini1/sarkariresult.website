export default function BHELTradeApprentice() {
  // This component displays recruitment information for BHEL, Ranipet Trade Apprentice positions.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        BHEL, Ranipet Trade Apprentice Recruitment 2024
      </h1>
      <p className="mb-4">
        Bharat Heavy Electrical Limited (BHEL), Ranipet has announced
        recruitment for Trade Apprentice positions for the year 2025-26 under the
        Apprentices Act, 1961.
      </p>

      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Key Highlights</h2>
        <ul className="list-disc ml-6">
          <li>
            <span className="font-bold">Post Name:</span> BHEL, Ranipet Trade
            Apprentice
          </li>
          <li>
            <span className="font-bold">Post Date:</span> 19-10-2024
          </li>
          <li>
            <span className="font-bold">Total Vacancy:</span> 263
          </li>
          <li>
            <span className="font-bold">Last Date to Apply:</span> 08-11-2024
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold mb-2">Vacancy Details</h2>
      <table className="table-auto w-full text-center mb-4">
        <thead>
          <tr>
            <th className="border px-4 py-2">Sl No</th>
            <th className="border px-4 py-2">Post Name</th>
            <th className="border px-4 py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="border px-4 py-2" colSpan="3">
              <span className="font-bold">Trade Apprentice</span>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">1.</td>
            <td className="border px-4 py-2">Fitter</td>
            <td className="border px-4 py-2">120</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">2.</td>
            <td className="border px-4 py-2">Welder</td>
            <td className="border px-4 py-2">62</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">3.</td>
            <td className="border px-4 py-2">Electrician</td>
            <td className="border px-4 py-2">34</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">4.</td>
            <td className="border px-4 py-2">Turner</td>
            <td className="border px-4 py-2">20</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">5.</td>
            <td className="border px-4 py-2">Machinist</td>
            <td className="border px-4 py-2">12</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">6.</td>
            <td className="border px-4 py-2">Motor Mechanic Vehicle</td>
            <td className="border px-4 py-2">03</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">7.</td>
            <td className="border px-4 py-2">AC &amp; Refrigeration Mechanic</td>
            <td className="border px-4 py-2">02</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">8.</td>
            <td className="border px-4 py-2">Instrument Mechanic</td>
            <td className="border px-4 py-2">04</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">9.</td>
            <td className="border px-4 py-2">Plumber</td>
            <td className="border px-4 py-2">03</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">10.</td>
            <td className="border px-4 py-2">Carpenter</td>
            <td className="border px-4 py-2">03</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mb-2">Important Links</h2>
      <table className="table-auto w-full text-center mb-4">
        <tbody>
          <tr>
            <td className="border px-4 py-2" colSpan="2">
              <span className="font-bold">Apprentice Registration Portal</span>
            </td>
            <td className="border px-4 py-2">
              <a
                href="https://www.apprenticeshipindia.gov.in/"
                target="_blank"
                rel="nofollow"
                className="text-blue-500"
              >
                <b>Click Here</b>
              </a>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2" colSpan="2">
              <span className="font-bold">Notification</span>
            </td>
            <td className="border px-4 py-2">
              <a
                href="https://img.freejobalert.com/uploads/2024/10/Notification-BHEL-Ranipet-Trade-Apprentice-Posts.jpg"
                target="_blank"
                rel="nofollow"
                className="text-blue-500"
              >
                <b>Click Here</b>
              </a>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2" colSpan="2">
              <span className="font-bold">Official Website</span>
            </td>
            <td className="border px-4 py-2">
              <a
                href="https://bap.bhel.com/index.html"
                target="_blank"
                rel="nofollow"
                className="text-blue-500"
              >
                <strong>Click Here</strong>
              </a>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Keywords for SEO */}
      <p className="text-sm mt-8">
        Keywords: BHEL, Ranipet, Trade Apprentice, Recruitment, 2024,
        Apprenticeship, Vacancy, Apply Online
      </p>
    </div>
  );
}