export default function JhajjarRoadwaysApprentice() {
  // This component displays recruitment information for the Jhajjar Roadways Apprentice 2024 vacancy.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">Jhajjar Roadways Apprentice Recruitment 2024</h1>
      <p className="text-lg text-gray-700 mb-4">
        Jhajjar Roadways has announced a recruitment drive for Apprentice positions. This is a great opportunity for individuals
        seeking to begin their careers in the transportation sector. 
      </p>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Key Highlights</h2>
        <ul className="list-disc ml-6">
          <li>
            <span className="font-bold">Post Name:</span> Jhajjar Roadways Apprentice
          </li>
          <li>
            <span className="font-bold">Total Vacancy:</span> 51
          </li>
          <li>
            <span className="font-bold">Last Date to Apply:</span> 16-10-2024
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>
      <table className="table-auto w-full text-center border-collapse border border-gray-300 mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-gray-300">Post Name</th>
            <th className="px-4 py-2 border border-gray-300">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Apprentice</td>
            <td className="px-4 py-2 border border-gray-300">51</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mb-4">Important Links</h2>
      <table className="table-auto w-full text-center border-collapse border border-gray-300">
        <tbody>
          <tr>
            <td className="px-4 py-2 border border-gray-300">
              <span className="font-bold">Apply Online</span>
            </td>
            <td className="px-4 py-2 border border-gray-300">
              <a href="https://www.apprenticeshipindia.gov.in/" target="_blank" rel="noopener" className="text-blue-500">
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">
              <span className="font-bold">Notification</span>
            </td>
            <td className="px-4 py-2 border border-gray-300">
              <a href="https://img.freejobalert.com/uploads/2024/10/Short-Notice-Jhajjar-Roadways-Apprentice-Posts.pdf" target="_blank" rel="noopener" className="text-blue-500">
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">
              <span className="font-bold">Official Website</span>
            </td>
            <td className="px-4 py-2 border border-gray-300">
              <a href="https://jhajjar.nic.in/" target="_blank" rel="noopener" className="text-blue-500">
                Click Here
              </a>
            </td>
          </tr>
        </tbody>
      </table>

      <p className="text-gray-600 text-center mt-4">
        For detailed information, please refer to the official notification.
      </p>

      <div className="text-center mt-6">
        <p className="text-sm text-gray-600">
          <span className="font-bold">Keywords:</span> Jhajjar Roadways, Apprentice, Recruitment, Jobs, Transportation
        </p>
      </div>
    </div>
  );
}