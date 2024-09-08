export default function RecruitmentInfo() {
  // Displays recruitment information for ZP, Keonjhar Gram Rozgar Sevak Offline Form 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">
        ZP, Keonjhar Gram Rozgar Sevak Offline Form 2024
      </h1>
      <p className="text-lg font-medium mb-2">
        <span className="text-green-500">Name of the Post:</span> ZP, Keonjhar Gram
        Rozgar Sevak Offline Form 2024
      </p>
      <p className="text-lg font-medium mb-2">
        <span className="text-green-500">Post Date:</span>{' '}
        <span className="text-gray-600">28-08-2024</span>
      </p>
      <p className="text-lg font-medium mb-2">
        <span className="text-green-500">Total Vacancy:</span> 266
      </p>
      <p className="text-lg mb-4">
        <span className="text-red-500">Brief Information:</span> Zilla Parishad,
        Keonjhar, Odisha has given a notification for the recruitment of Gram
        Rozgar Sevak (GRS) Vacancy on Contractual Basis. Those Candidates who
        are interested in the vacancy details &amp; completed all eligibility
        criteria can read the Notification &amp; Apply.
      </p>
      <h2 className="text-2xl font-bold mb-4">Important Details</h2>
      <div className="flex flex-col gap-4 mb-8">
        <div className="bg-gray-100 rounded-md p-4">
          <h3 className="text-xl font-bold mb-2">Important Dates</h3>
          <ul className="list-disc pl-6">
            <li className="text-lg font-medium">
              Starting Date for Receipt of Application: 27-08-2024
            </li>
            <li className="text-lg font-medium">
              Last Date for Receipt of Application: 26-09-2024
            </li>
          </ul>
        </div>
        <div className="bg-gray-100 rounded-md p-4">
          <h3 className="text-xl font-bold mb-2">Age Limit (as on 01-08-2024)</h3>
          <ul className="list-disc pl-6">
            <li className="text-lg font-medium">
              Minimum Age limit: Must have 18 Years
            </li>
            <li className="text-lg font-medium">
              Maximum Age limit: Must not be above 40 Years
            </li>
            <li className="text-lg font-medium">
              Age Relaxation is Applicable as per Rules.
            </li>
          </ul>
        </div>
        <div className="bg-gray-100 rounded-md p-4">
          <h3 className="text-xl font-bold mb-2">Qualification</h3>
          <ul className="list-disc pl-6">
            <li className="text-lg font-medium">
              Candidates Should Posses 10+2 pass or its equivalent.
            </li>
            <li className="text-lg font-medium">
              Candidates shall be able to speak, read and write Odia fluently.
            </li>
            <li className="text-lg font-medium">
              For More Details Refer Notification.
            </li>
          </ul>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>
      <table className="table-auto w-full text-center border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-lg font-medium">
              <span className="text-blue-500">Trade Name</span>
            </th>
            <th className="px-4 py-2 text-lg font-medium">
              <span className="text-blue-500">Total</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-gray-300">
            <td className="px-4 py-2 text-lg">Gram Rozgar Sevak (GRS)</td>
            <td className="px-4 py-2 text-lg">266</td>
          </tr>
        </tbody>
      </table>
      <p className="text-lg font-medium mt-4">
        <span className="text-blue-500">
          Interested Candidates Can Read the Full Notification Before Apply
        </span>
      </p>
      <h2 className="text-2xl font-bold mb-4">Important Links</h2>
      <table className="table-auto w-full text-center border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-lg font-medium">
              <span className="text-green-500">Link</span>
            </th>
            <th className="px-4 py-2 text-lg font-medium">
              <span className="text-blue-500">Description</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-gray-300">
            <td className="px-4 py-2 text-lg">
              <span className="text-green-500">Detailed Notification</span>
            </td>
            <td className="px-4 py-2 text-lg">
              <a
                className="text-blue-500 hover:underline"
                href="https://img.freejobalert.com/uploads/2024/08/Detailed-Notification-Zilla-Parishad-Keonjhar-Gram-Rozgar-Sevak-Posts.pdf"
                target="_blank"
                rel="nofollow"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="border-t border-gray-300">
            <td className="px-4 py-2 text-lg">
              <span className="text-green-500">Short Notification</span>
            </td>
            <td className="px-4 py-2 text-lg">
              <a
                className="text-blue-500 hover:underline"
                href="https://img.freejobalert.com/uploads/2024/08/Short-Notification-Zilla-Parishad-Keonjhar-Gram-Rozgar-Sevak-Posts.pdf"
                target="_blank"
                rel="nofollow"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="border-t border-gray-300">
            <td className="px-4 py-2 text-lg">
              <span className="text-green-500">Official Website</span>
            </td>
            <td className="px-4 py-2 text-lg">
              <a
                className="text-blue-500 hover:underline"
                href="https://kendujhar.odisha.gov.in/"
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