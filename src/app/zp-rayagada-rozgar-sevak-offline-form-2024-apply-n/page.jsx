export default function RecruitmentInfo() {
  // This component displays recruitment information for ZP, Rayagada Gram Rozgar Sevak Offline Form 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        ZP, Rayagada Gram Rozgar Sevak Offline Form 2024
      </h1>
      <div className="mb-4">
        <p className="text-lg font-medium text-green-500 mb-2">Name of the Post:</p>
        <p className="text-lg">ZP, Rayagada Gram Rozgar Sevak Offline Form 2024</p>
      </div>
      <div className="mb-4">
        <p className="text-lg font-medium text-green-500 mb-2">Post Date:</p>
        <p className="text-lg">05-09-2024</p>
      </div>
      <div className="mb-4">
        <p className="text-lg font-medium text-green-500 mb-2">Total Vacancy:</p>
        <p className="text-lg">130</p>
      </div>
      <p className="text-lg mb-4">
        <span className="text-red-500 font-medium">Brief Information:</span> Zilla
        Parishad, Rayagada, Odisha has invites an application for the
        recruitment of Gram Rozgar Sevak Vacancy. Those Candidates who are
        interested in the vacancy details &amp; completed all eligibility
        criteria can read the Notification &amp; Apply.
      </p>
      <h2 className="text-2xl font-bold mb-4">Important Information</h2>
      <div className="mb-4">
        <p className="text-lg font-medium text-red-500 mb-2">
          Important Dates
        </p>
        <ul className="list-disc ml-6">
          <li className="mb-2">
            Starting Date for Apply (Offline): <strong>30-08-2024</strong>
          </li>
          <li>
            Last Date to Apply (Offline): <strong>30-09-2024 (Before 05:30 PM)</strong>
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <p className="text-lg font-medium text-red-500 mb-2">
          Age Limit (as on 01-08-2024)
        </p>
        <ul className="list-disc ml-6">
          <li className="mb-2">
            Minimum Age: <strong>18 Years</strong>
          </li>
          <li>
            Maximum Age: <strong>40 Years</strong>
          </li>
          <li>
            Age relaxation is applicable as per rules.
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <p className="text-lg font-medium text-red-500 mb-2">Qualification</p>
        <ul className="list-disc ml-6">
          <li className="mb-2">
            Candidates Should Possess 10+2 Pass or equivalent.
          </li>
          <li className="mb-2">
            Candidates shall be able to speak, read and write Odia fluently.
          </li>
          <li>For More Details Refer Notification.</li>
        </ul>
      </div>
      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-center text-blue-500 font-medium">
              Post Name
            </th>
            <th className="px-4 py-2 text-center text-blue-500 font-medium">
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 text-center">Gram Rozgar Sevak</td>
            <td className="px-4 py-2 text-center">130</td>
          </tr>
        </tbody>
      </table>
      <p className="text-lg text-blue-500 font-medium mt-4">
        Interested Candidates Can Read the Full Notification Before Apply
      </p>
      <h2 className="text-2xl font-bold mb-4">Important Links</h2>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <tbody>
          <tr>
            <td className="px-4 py-2 text-center text-green-500 font-medium">
              Notification
            </td>
            <td className="px-4 py-2 text-center">
              <a
                href="https://rayagada.odisha.gov.in/sites/default/files/2024-09/9069%20-GRS.pdf"
                className="text-blue-500 underline"
                rel="nofollow"
                target="_blank"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center text-green-500 font-medium">
              Official Website
            </td>
            <td className="px-4 py-2 text-center">
              <a
                href="https://rayagada.odisha.gov.in/"
                className="text-blue-500 underline"
                rel="nofollow"
                target="_blank"
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