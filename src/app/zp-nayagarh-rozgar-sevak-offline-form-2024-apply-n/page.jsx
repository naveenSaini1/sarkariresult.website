export default function RecruitmentInfo() {
  // Displays recruitment information for ZP, Nayagarh Gram Rozgar Sevak Offline Form 2024.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">
        ZP, Nayagarh Gram Rozgar Sevak Offline Form 2024
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-2xl font-bold mb-2">Post Details</h2>
          <p className="mb-2">
            <span className="font-bold text-green-500">Name of the Post:</span>{" "}
            ZP, Nayagarh Gram Rozgar Sevak Offline Form 2024
          </p>
          <p className="mb-2">
            <span className="font-bold text-green-500">Post Date:</span>{" "}
            <span className="text-gray-700">22-08-2024</span>
          </p>
          <p className="mb-2">
            <span className="font-bold text-green-500">Total Vacancy:</span>{" "}
            156
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">Brief Information</h2>
          <p className="mb-2">
            Zilla Parishad, Nayagarh, Odisha has published a notification for
            the recruitment of Gram Rozgar Sevak (GRS) Vacancy on Contract
            Basis. Those Candidates who are interested in the vacancy details &
            completed all eligibility criteria can read the Notification & Apply.
          </p>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-2 mt-8">Important Dates</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Starting Date for Receipt of Application: 22-08-2024</li>
        <li>Last Date for Receipt of Application: 23-09-2024</li>
      </ul>
      <h2 className="text-2xl font-bold mb-2">Age Limit (as on 01-08-2024)</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Minimum Age limit: Must have 18 Years</li>
        <li>Maximum Age limit: Must not be above 40 Years</li>
        <li>Age Relaxation is Applicable as per Rules.</li>
      </ul>
      <h2 className="text-2xl font-bold mb-2">Qualification</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Candidates Should Posses 10+2 or Its Equivalent</li>
        <li>Candidates Shell be able to speak, read and Write Odia fluently</li>
        <li>For More Details Refer the Notification</li>
      </ul>
      <h2 className="text-2xl font-bold mb-2">Vacancy Details</h2>
      <table className="table-auto w-full mt-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-left">
              <span className="font-bold text-pink-500">Trade Name</span>
            </th>
            <th className="px-4 py-2 text-left">
              <span className="font-bold text-pink-500">Total</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">Gram Rozgar Sevak (GRS)</td>
            <td className="px-4 py-2">156</td>
          </tr>
        </tbody>
      </table>
      <p className="text-blue-500 mt-4">
        Interested Candidates Can Read the Full Notification Before Apply
      </p>
      <h2 className="text-2xl font-bold mb-2 mt-8">Important Links</h2>
      <table className="table-auto w-full mt-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-left">
              <span className="font-bold text-green-500">Link</span>
            </th>
            <th className="px-4 py-2 text-left">
              <span className="font-bold text-green-500">Description</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                href="https://img.freejobalert.com/uploads/2024/08/Notification-ZP-Nayagarh-Gram-Rozgar-Sevak-Posts.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here
              </a>
            </td>
            <td className="px-4 py-2">Notification</td>
          </tr>
          <tr>
            <td className="px-4 py-2">
              <a
                className="text-blue-500 hover:underline"
                href="https://nayagarh.odisha.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here
              </a>
            </td>
            <td className="px-4 py-2">Official Website</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}