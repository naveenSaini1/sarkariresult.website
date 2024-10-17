export default function WesternCoalfieldsRecruitment() {
  // This component displays recruitment information for Western Coalfields Ltd Graduate & Technician Apprentice 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">Western Coalfields Ltd Graduate & Technician Apprentice 2024</h1>

      {/* Post Details */}
      <div className="mb-4">
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Name of the Post:</span> Western Coalfields Ltd Graduate & Technician Apprentice 2024
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Post Date:</span> 16-10-2024
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Total Vacancy:</span> 316
        </p>
      </div>

      {/* Brief Information */}
      <div className="mb-4">
        <p className="text-lg font-medium mb-2">
          <span className="text-purple-500">Brief Information:</span> Western Coalfields Ltd has published a notification for the recruitment of Graduate & Technician Apprentice vacancy under the Apprentice Act 1961. Candidates interested in the vacancy details and who meet all eligibility criteria can read the Notification & Apply Online.
        </p>
      </div>

      {/* Key Highlights */}
      <h2 className="text-2xl font-bold mb-4">Key Highlights</h2>
      <ul className="list-disc ml-6">
        <li className="mb-2">Minimum Age Limit: 18 Years (as on 28-10-2024)</li>
        <li className="mb-2">Starting Date for Apply Online: 15-10-2024 (10:00 AM)</li>
        <li className="mb-2">Last Date to Apply Online: 28-10-2024 (05:00 PM)</li>
      </ul>

      {/* Vacancy Details */}
      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>
      <table className="table-auto w-full text-center mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Post Name</th>
            <th className="px-4 py-2">Total</th>
            <th className="px-4 py-2">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Graduate Apprentice</td>
            <td className="px-4 py-2">101</td>
            <td className="px-4 py-2">Degree Course (BE/ B.Tech/ AMIE) in Mining Engg</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Technician Apprentice</td>
            <td className="px-4 py-2">215</td>
            <td className="px-4 py-2">Diploma (Mining Engg or Mining & Mine Surveying or Mine Surveying)</td>
          </tr>
        </tbody>
      </table>

      {/* Important Links */}
      <h2 className="text-2xl font-bold mb-4">Important Links</h2>
      <ul className="list-disc ml-6">
        <li className="mb-2">
          <span className="text-green-500">Apprentice Registration Portal:</span>{' '}
          <a href="https://nats.education.gov.in/" target="_blank" rel="nofollow" className="text-blue-500">
            Click Here
          </a>
        </li>
        <li className="mb-2">
          <span className="text-green-500">Apply Online:</span>{' '}
          <a href="http://103.59.142.228:8081/Apprenticeship1/" target="_blank" rel="nofollow" className="text-blue-500">
            Click Here
          </a>
        </li>
        <li className="mb-2">
          <span className="text-green-500">Notification:</span>{' '}
          <a
            href="https://img.freejobalert.com/uploads/2024/10/Notification-Western-Coalfields-Ltd-Graduate-Technician-Apprentice-Posts.pdf"
            target="_blank"
            rel="nofollow"
            className="text-blue-500"
          >
            Click Here
          </a>
        </li>
        <li className="mb-2">
          <span className="text-green-500">Official Website:</span>{' '}
          <a href="http://www.westerncoal.in/" target="_blank" rel="nofollow" className="text-blue-500">
            Click Here
          </a>
        </li>
      </ul>

      {/* Keywords */}
      <p className="text-gray-500 text-sm mt-4">
        Keywords: Western Coalfields, Graduate Apprentice, Technician Apprentice, Mining Engineering, Apprenticeship, Recruitment, Jobs,
        Apply Online.
      </p>
    </div>
  );
}