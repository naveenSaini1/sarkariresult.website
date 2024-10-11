export default function RecruitmentInfo() {
  // This component displays recruitment information for Social Justice & Special Assistance Department, Maharashtra. It includes details about the positions, eligibility criteria, application process, important dates, and key highlights.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">
        SJSA, Maharashtra Various Vacancy Online Form 2024
      </h1>
      <p className="text-lg mb-4">
        <span className="font-bold text-green-500">Name of the Post:</span>{" "}
        SJSA, Maharashtra Various Vacancy Online Form 2024
      </p>
      <p className="text-lg mb-4">
        <span className="font-bold text-green-500">Post Date:</span>{" "}
        11-10-2024
      </p>
      <p className="text-lg mb-4">
        <span className="font-bold text-green-500">Total Vacancy:</span>{" "}
        219
      </p>
      <p className="text-lg mb-4">
        <span className="font-bold text-red-500">Brief Information:</span>{" "}
        Social Justice &amp; Special Assistance Department, Maharashtra has given a
        Notification for the recruitment of Senior Social Welfare Inspector, Social
        Welfare Inspector, Warden &amp; Other Vacancy. Those Candidates who are
        interested in the vacancy details &amp; completed all eligibility criteria
        can read the Notification &amp; Apply Online.
      </p>
      <h2 className="text-2xl font-bold mb-4 text-center">Key Highlights</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>
          <span className="font-bold">Starting Date to Apply Online:</span>{" "}
          10-10-2024
        </li>
        <li>
          <span className="font-bold">Last Date to Apply Online:</span>{" "}
          11-11-2024
        </li>
        <li>
          <span className="font-bold">Minimum Age Limit:</span> 18 Years
        </li>
        <li>
          <span className="font-bold">Maximum Age Limit:</span> 38 Years
        </li>
        <li>
          <span className="font-bold">Application Fee:</span> Rs. 1000/- for
          Open Category, Rs. 900/- for Backward category, Nil for Ex-servicemen
        </li>
      </ul>
      <h2 className="text-2xl font-bold mb-4 text-center">Vacancy Details</h2>
      <table className="table-auto w-full text-center border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Post Name</th>
            <th className="px-4 py-2">Total</th>
            <th className="px-4 py-2">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="px-4 py-2">Senior Social Welfare Inspector</td>
            <td className="px-4 py-2">05</td>
            <td className="px-4 py-2" rowspan="4">
              Any Degree, Passed M.S.C.I.T Computer Aptitude Test
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Social Welfare Inspector</td>
            <td className="px-4 py-2">39</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Warden (Female)</td>
            <td className="px-4 py-2">92</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Warden (General)</td>
            <td className="px-4 py-2">61</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Higher Grade Steno</td>
            <td className="px-4 py-2">10</td>
            <td className="px-4 py-2" rowspan="2">
              SSC, Passed M.S.C.I.T Computer Aptitude Test, Typing (English) 40
              WPM or Typing (Marathi) 30 WPM
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Lower Grade Steno</td>
            <td className="px-4 py-2">03</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Steno Typist</td>
            <td className="px-4 py-2">09</td>
            <td className="px-4 py-2">
              SSC, Typing (English) 40 WPM or Typing (Marathi) 30 WPM, shorthand
              speed at least 80 WPM
            </td>
          </tr>
        </tbody>
      </table>
      <p className="text-lg mb-4 text-blue-500">
        Interested Candidates Can Read the Full Notification Before Apply Online
      </p>
      <h2 className="text-2xl font-bold mb-4 text-center">Important Links</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>
          <span className="font-bold text-green-500">Apply Online:</span>{" "}
          <a
            className="underline text-blue-500"
            href="https://cdn.digialm.com/EForms/configuredHtml/32813/87992/Index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click Here
          </a>
        </li>
        <li>
          <span className="font-bold text-green-500">Notification:</span>{" "}
          <a
            className="underline text-blue-500"
            href="https://img.freejobalert.com/uploads/2024/10/Notification-SJSA-Maharashtra-Various-Vacancy-2024.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click Here
          </a>
        </li>
        <li>
          <span className="font-bold text-green-500">Official Website:</span>{" "}
          <a
            className="underline text-blue-500"
            href="https://sjsa.maharashtra.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click Here
          </a>
        </li>
      </ul>
      <p className="text-center mt-4">
        <span className="font-bold">Keywords:</span> SJSA, Maharashtra,
        Recruitment, Vacancy, Online Form, 2024, Senior Social Welfare
        Inspector, Social Welfare Inspector, Warden, Steno, Application,
        Eligibility, Important Dates, Notification, Apply
      </p>
    </div>
  );
}