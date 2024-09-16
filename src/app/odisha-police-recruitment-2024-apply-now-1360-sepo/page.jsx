export default function RecruitmentInfo() {
  // This component displays recruitment information for the Odisha Police Sepoy/Constable 2024 recruitment.
  // It includes details like post name, dates, fees, qualifications, and vacancy details.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Odisha Police Sepoy/Constable 2024 Recruitment</h1>
      <p className="text-lg mb-4">
        <span className="font-bold text-green-500">Name of the Post:</span> Odisha Police Sepoy/ Constable 2024 Online Form
      </p>
      <p className="text-lg mb-4">
        <span className="font-bold text-green-500">Post Date:</span> 15-09-2024
      </p>
      <p className="text-lg mb-4">
        <span className="font-bold text-green-500">Total Vacancy:</span> 1360
      </p>
      <p className="text-lg mb-4">
        <span className="font-bold text-red-500">Brief Information:</span> Odisha Police has published a Notification for the recruitment of Sepoy/ Constable in different OSAP / IR / SIR / SS Battalions Vacancy in Odisha Police. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply Online.
      </p>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Odisha Police</h2>
        <p className="text-lg mb-2 text-red-500 font-bold text-center">Advt No. 01/SSB</p>
        <p className="text-lg mb-2 text-green-500 font-bold text-center">Sepoy/Constable Vacancy 2024</p>
        <p className="text-lg mb-2 text-center">
          <a href="https://www.freejobalert.com" target="_blank" rel="noopener" className="text-blue-500"></a>
        </p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2 text-red-500">Application Fee</h3>
        <ul className="list-disc ml-6">
          <li>Available on 23-09-2024</li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2 text-red-500">Important Dates</h3>
        <ul className="list-disc ml-6">
          <li>Available on 23-09-2024 (10:00AM)</li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2 text-red-500">Age Limit</h3>
        <ul className="list-disc ml-6">
          <li>Available on 23-09-2024</li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2 text-red-500">Qualification</h3>
        <ul className="list-disc ml-6">
          <li>Available on 23-09-2024</li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2 text-red-500">Vacancy Details</h3>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="text-center text-blue-500 font-bold border border-gray-300 p-2">Post Name</th>
              <th className="text-center text-blue-500 font-bold border border-gray-300 p-2">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center border border-gray-300 p-2">Sepoy/ Constable</td>
              <td className="text-center border border-gray-300 p-2">1360</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-lg mb-4 text-blue-500 font-bold text-center">
        Interested Candidates Can Read the Full Notification Before Apply Online
      </p>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2 text-red-500">Important Links</h3>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <tbody>
            <tr>
              <td className="text-center text-green-500 font-bold border border-gray-300 p-2">Apply Online</td>
              <td className="text-center border border-gray-300 p-2">Available on 23-09-2024</td>
            </tr>
            <tr>
              <td className="text-center text-green-500 font-bold border border-gray-300 p-2">Detail Notification</td>
              <td className="text-center border border-gray-300 p-2">Available on 23-09-2024</td>
            </tr>
            <tr>
              <td className="text-center text-green-500 font-bold border border-gray-300 p-2">Short Notification</td>
              <td className="text-center border border-gray-300 p-2">
                <a href="https://img.freejobalert.com/uploads/2024/09/Short-Notification-Odisha-Police-Sepoy-Constable-Posts.pdf" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a>
              </td>
            </tr>
            <tr>
              <td className="text-center text-green-500 font-bold border border-gray-300 p-2">Official Website</td>
              <td className="text-center border border-gray-300 p-2">
                <a href="https://odishapolice.gov.in/" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}