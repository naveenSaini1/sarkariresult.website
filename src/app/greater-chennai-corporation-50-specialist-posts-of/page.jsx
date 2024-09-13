export default function RecruitmentInfo() {
  // This component displays recruitment information for Greater Chennai Corporation Specialist Vacancy 2024.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Greater Chennai Corporation Specialist Vacancy 2024</h1>
      <div className="mb-4">
        <p className="mb-2">
          <span className="font-bold text-green-500">Name of the Post:</span> Greater Chennai Corporation Specialist Offline Form 2024
        </p>
        <p className="mb-2">
          <span className="font-bold text-green-500">Post Date:</span> 13-09-2024
        </p>
        <p className="mb-2">
          <span className="font-bold text-green-500">Total Vacancy:</span> 50
        </p>
      </div>
      <p className="mb-4">
        <span className="font-bold text-red-500">Brief Information:</span> Greater Chennai Corporation has announced notification for the recruitment of Specialist Vacancy on Contract basis. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply.
      </p>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Important Dates</h2>
        <ul className="list-disc pl-5">
          <li>Last Date to Apply Offline: 27-09-2024</li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Qualification</h2>
        <ul className="list-disc pl-5">
          <li>Candidates Should Possess MBBS (Concerned Specialty).</li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Vacancy Details</h2>
        <table className="table-auto w-full text-center border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Post Name</th>
              <th className="border border-gray-300 px-4 py-2">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border border-gray-300">
              <td className="border border-gray-300 px-4 py-2">Obstetrician / Gynecologist</td>
              <td className="border border-gray-300 px-4 py-2">15</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="border border-gray-300 px-4 py-2">Pediatrician</td>
              <td className="border border-gray-300 px-4 py-2">10</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="border border-gray-300 px-4 py-2">General Surgeon</td>
              <td className="border border-gray-300 px-4 py-2">15</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="border border-gray-300 px-4 py-2">Anaesthetist</td>
              <td className="border border-gray-300 px-4 py-2">09</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="border border-gray-300 px-4 py-2">Orthopedic Surgeon</td>
              <td className="border border-gray-300 px-4 py-2">01</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-4 text-blue-500">Interested Candidates Can Read the Full Notification Before Apply</p>
      <h2 className="text-2xl font-bold mb-2">Important Links</h2>
      <table className="table-auto w-full text-center border-collapse border border-gray-300">
        <tbody>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 px-4 py-2">Notification</td>
            <td className="border border-gray-300 px-4 py-2"><a href="https://img.freejobalert.com/uploads/2024/09/Notification-Greater-Chennia-Corporation-Specailist-Posts.pdf" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a></td>
          </tr>
          <tr className="border border-gray-300">
            <td className="border border-gray-300 px-4 py-2">Official Website</td>
            <td className="border border-gray-300 px-4 py-2"><a href="https://chennaicorporation.gov.in/gcc/" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}