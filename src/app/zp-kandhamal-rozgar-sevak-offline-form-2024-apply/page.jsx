export default function RecruitmentInfo() {
  // Displays recruitment information for the ZP, Kandhamal Gram Rozgar Sevak Offline Form 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">
        ZP, Kandhamal Gram Rozgar Sevak Offline Form 2024
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="font-bold mb-2">
            <span className="text-green-500">Name of the Post:</span>{' '}
            ZP, Kandhamal Gram Rozgar Sevak Offline Form 2024
          </p>
          <p className="font-bold mb-2">
            <span className="text-green-500">Post Date:</span>{' '}
            <span className="text-gray-600">27-09-2024</span>
          </p>
          <p className="font-bold mb-2">
            <span className="text-green-500">Total Vacancy:</span> 125
          </p>
          <p className="text-justify mb-4">
            <span className="text-red-500 font-bold">Brief Information:</span>{' '}
            Zilla Parishad, Kandhamal, Odisha has given a notification for the
            recruitment of Gram Rozgar Sevak (GRS) Vacancy on Contractual
            Basis. Those Candidates who are interested in the vacancy details &
            completed all eligibility criteria can read the Notification & Apply.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-center mb-4">Important Details</h2>

      <table className="w-full text-center border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-300">
              <span className="text-red-500 font-bold">Important Dates</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b border-gray-300">
              Starting Date for Receipt of Application:
              <span className="font-bold">25-09-2024</span>
            </td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b border-gray-300">
              Last Date for Receipt of Application:
              <span className="font-bold">24-10-2024</span>
            </td>
          </tr>
        </tbody>
      </table>

      <table className="w-full text-center border-collapse border border-gray-300 mt-4">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-300">
              <span className="text-red-500 font-bold">Age limit (as on 01-08-2024)</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b border-gray-300">
              Minimum Age limit:
              <span className="font-bold">Must have 18 Years</span>
            </td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b border-gray-300">
              Maximum Age limit:
              <span className="font-bold">Must not be above 40 Years</span>
            </td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b border-gray-300">
              Age Relaxation is Applicable as per Rules.
            </td>
          </tr>
        </tbody>
      </table>

      <table className="w-full text-center border-collapse border border-gray-300 mt-4">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-300">
              <span className="text-red-500 font-bold">Qualification</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b border-gray-300">
              Candidates Should Posses 10+2 pass or its equivalent.
            </td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b border-gray-300">
              Candidates shall be able to speak, read and write Odia fluently.
            </td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b border-gray-300">
              For More Details Refer Notification.
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold text-center mb-4 mt-4">Vacancy Details</h2>

      <table className="w-full text-center border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-300">
              <span className="text-pink-500 font-bold">Trade Name</span>
            </th>
            <th className="py-2 px-4 border-b border-gray-300">
              <span className="text-pink-500 font-bold">Total</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b border-gray-300">
              Gram Rozgar Sevak (GRS)
            </td>
            <td className="py-2 px-4 border-b border-gray-300">125</td>
          </tr>
        </tbody>
      </table>

      <p className="text-blue-500 font-bold text-center mt-4">
        Interested Candidates Can Read the Full Notification Before Apply
      </p>

      <h2 className="text-2xl font-bold text-center mb-4 mt-4">
        Important Links
      </h2>

      <table className="w-full text-center border-collapse border border-gray-300">
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b border-gray-300">
              <span className="text-green-500 font-bold">Notification</span>
            </td>
            <td className="py-2 px-4 border-b border-gray-300">
              <a
                className="text-blue-500 hover:underline"
                href="https://img.freejobalert.com/uploads/2024/09/Notification-Zill-Parishad-Kandhamal-GRS-Posts.pdf"
                target="_blank"
                rel="noopener"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b border-gray-300">
              <span className="text-green-500 font-bold">Official Website</span>
            </td>
            <td className="py-2 px-4 border-b border-gray-300">
              <a
                className="text-blue-500 hover:underline"
                href="https://kandhamal.odisha.gov.in/"
                target="_blank"
                rel="noopener"
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