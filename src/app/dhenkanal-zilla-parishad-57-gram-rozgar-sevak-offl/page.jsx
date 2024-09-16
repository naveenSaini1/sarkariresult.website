export default function RecruitmentInformation() {
  // Displays recruitment information for Zilla Parishad, Dhenkanal Gram Rozgar Sevak Vacancy
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Zilla Parishad, Dhenkanal Gram Rozgar Sevak Vacancy 2024</h1>
      <p className="mb-4">
        <span className="font-bold text-green-500">Name of the Post:</span> Zilla Parishad, Dhenkanal Gram Rozgar Sevak Offline Form 2024
      </p>
      <p className="mb-4">
        <span className="font-bold text-green-500">Post Date:</span> 16-09-2024
      </p>
      <p className="mb-4">
        <span className="font-bold text-green-500">Total Vacancy:</span> 57
      </p>
      <p className="mb-4">
        <span className="font-bold text-red-500">Brief Information:</span> Zilla Parishad, Dhenkanal has published a notification for the recruitment of Gram Rozgar Sevak Vacancy on Contract Basis. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply.
      </p>
      <h2 className="text-2xl font-bold mb-4">Important Dates</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Starting Date for Submission of Application: 17-09-2024</li>
        <li>Last Date for receipt of Application: 17-10-2024 (05:30 PM)</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Age Limit (as on 01-09-2024)</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Minimum Age Limit: Must have 18 Years</li>
        <li>Maximum Age Limit: not be above 40 Years</li>
        <li>Age relaxation is applicable as per rules.</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Qualification</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Candidates Should Possess 10+2 or Equivalent.</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>
      <table className="table-auto w-full mb-4 border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-center text-red-500 font-bold">Post Name</th>
            <th className="px-4 py-2 text-center text-red-500 font-bold">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 text-center">Gram Rozgar Sevak</td>
            <td className="px-4 py-2 text-center">57</td>
          </tr>
        </tbody>
      </table>
      <p className="mb-4 text-blue-500">
        Interested Candidates Can Read the Full Notification Before Apply
      </p>
      <h2 className="text-2xl font-bold mb-4">Important Links</h2>
      <table className="table-auto w-full mb-4 border-collapse border border-gray-300">
        <tbody>
          <tr>
            <td className="px-4 py-2 text-center text-green-500 font-bold">Notification</td>
            <td className="px-4 py-2 text-center">
              <a href="https://img.freejobalert.com/uploads/2024/09/Notification-Zilla-Parishad-Dhenkanal-Gram-Rozgar-Sevak-Posts.pdf" target="_blank" rel="nofollow" className="text-blue-500 underline">
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center text-green-500 font-bold">Official Website</td>
            <td className="px-4 py-2 text-center">
              <a href="https://dhenkanal.odisha.gov.in/" target="_blank" rel="nofollow" className="text-blue-500 underline">
                Click Here
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}