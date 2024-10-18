export default function HaryanaStateTransportApprentice() {
  // This component displays recruitment information for the Haryana State Transport Charkhi Dadri Apprentice program, including important dates, qualifications, vacancy details, and application links. 
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Haryana State Transport Charkhi Dadri Apprentice Recruitment 2024</h1>
      <p className="mb-4">Haryana State Transport Charkhi Dadri is recruiting Apprentices in various trades, including Diesel Mechanic, Motor Mechanic, Fitter, and more. This is an excellent opportunity for individuals seeking apprenticeship training and a career in the transportation industry.</p>

      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Key Highlights</h2>
        <ul className="list-disc pl-6">
          <li><strong>Post Date:</strong> 18-10-2024</li>
          <li><strong>Last Date to Apply:</strong> 21-10-2024</li>
          <li><strong>Total Vacancy:</strong> 54</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold mb-2">Qualification</h2>
      <p className="mb-4">Candidates should possess a 10th Class certificate and an ITI in a relevant discipline.</p>

      <h2 className="text-2xl font-bold mb-2">Vacancy Details</h2>
      <table className="table-auto w-full border-collapse border border-gray-400 text-center">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border-b border-gray-400 text-left">Department Name</th>
            <th className="px-4 py-2 border-b border-gray-400">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border-b border-gray-400 text-left">Diesel Mechanic</td>
            <td className="px-4 py-2 border-b border-gray-400">11</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b border-gray-400 text-left">Motor Mechanic</td>
            <td className="px-4 py-2 border-b border-gray-400">14</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b border-gray-400 text-left">Fitter</td>
            <td className="px-4 py-2 border-b border-gray-400">07</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b border-gray-400 text-left">Welder</td>
            <td className="px-4 py-2 border-b border-gray-400">03</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b border-gray-400 text-left">Cup</td>
            <td className="px-4 py-2 border-b border-gray-400">02</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b border-gray-400 text-left">Painter</td>
            <td className="px-4 py-2 border-b border-gray-400">02</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b border-gray-400 text-left">Carpenter</td>
            <td className="px-4 py-2 border-b border-gray-400">03</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b border-gray-400 text-left">Turner</td>
            <td className="px-4 py-2 border-b border-gray-400">01</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b border-gray-400 text-left">Electrician</td>
            <td className="px-4 py-2 border-b border-gray-400">07</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b border-gray-400 text-left">Seat Mantel</td>
            <td className="px-4 py-2 border-b border-gray-400">04</td>
          </tr>
        </tbody>
      </table>

      <p className="mb-4">Interested candidates are encouraged to read the full notification before applying online.</p>

      <h2 className="text-2xl font-bold mb-2">Important Links</h2>
      <ul className="list-disc pl-6">
        <li><a href="https://www.apprenticeshipindia.gov.in/" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Apply Online</a></li>
        <li><a href="https://img.freejobalert.com/uploads/2024/10/Notification-Charkhi-Dadri-Roadways-Apprentice-Posts.pdf" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Notification</a></li>
        <li><a href="https://charkhidadri.gov.in/" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Official Website</a></li>
      </ul>

      <p className="text-gray-500 mt-8">Keywords: Haryana State Transport, Charkhi Dadri, Apprentice, Recruitment, Diesel Mechanic, Motor Mechanic, Fitter, Welder, Electrician, Transportation, Apprenticeship, India</p>
    </div>
  );
}