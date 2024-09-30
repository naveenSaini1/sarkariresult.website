export default function RecruitmentInfo() {
  // Displays recruitment information for Maharshi Devarha Baba Autonomus State Medical College (MDBMC), Deoria
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">MDBMC Various Vacancy 2024</h1>
      <div className="mb-4">
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Name of the Post:</span> MDBMC Various Vacancy Offline Form 2024
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Post Date: </span>30-09-2024
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Total Vacancy: </span>58
        </p>
      </div>
      <p className="text-lg mb-4">
        <span className="text-red-500 font-medium">Brief Information:</span> Maharshi Devarha Baba Autonomus State Medical College (MDBMC), Deoria has invited applications for the recruitment of Professor, Associate Professor & Other Vacancy on a Regular Basis. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply.
      </p>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Application Fee</h2>
        <ul className="list-disc ml-6">
          <li className="mb-1">Application Fee: <strong>Rs. 1000/-</strong></li>
          <li className="mb-1">Payment Mode: <b>Through Demand Draft</b></li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Important Dates</h2>
        <ul className="list-disc ml-6">
          <li className="mb-1">Last Date for the Receipt of Application: <strong className="font-medium">10-10-2024 (Till 05:00 PM)</strong></li>
          <li className="mb-1">Last Date for Application form along Photocopies of all certificates: <strong className="font-medium">11-10-2024 (Till 05:00 PM)</strong></li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Age Limit (as on 01-07-2024)</h2>
        <ul className="list-disc ml-6">
          <li className="mb-1">Minimum Age Limit: <strong className="font-medium">26 Years</strong></li>
          <li className="mb-1">Maximum Age Limit: <strong className="font-medium">62 Years</strong></li>
        </ul>
      </div>
      <h2 className="text-2xl font-bold mb-2">Vacancy Details</h2>
      <table className="table-auto w-full text-center border-collapse border-2 border-gray-300 mb-4">
        <thead>
          <tr>
            <th className="py-2 px-4 font-medium text-pink-500">Post Name</th>
            <th className="py-2 px-4 font-medium text-pink-500">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4">Professor</td>
            <td className="py-2 px-4">15</td>
          </tr>
          <tr>
            <td className="py-2 px-4">Associate Professor</td>
            <td className="py-2 px-4">22</td>
          </tr>
          <tr>
            <td className="py-2 px-4">Assistant Professor</td>
            <td className="py-2 px-4">21</td>
          </tr>
        </tbody>
      </table>
      <p className="text-lg font-medium text-blue-500 mb-4">Interested Candidates Can Read the Full Notification Before Apply</p>
      <h2 className="text-2xl font-bold mb-2">Important Links</h2>
      <table className="table-auto w-full text-center border-collapse border-2 border-gray-300 mb-4">
        <tbody>
          <tr>
            <td className="py-2 px-4 font-medium text-green-500">Notification</td>
            <td className="py-2 px-4"><a href="https://img.freejobalert.com/uploads/2024/09/Notification-MDBMC-Professor-Posts.png" target="_blank" rel="noopener" className="underline text-blue-500">Click Here</a></td>
          </tr>
          <tr>
            <td className="py-2 px-4 font-medium text-green-500">Official Website</td>
            <td className="py-2 px-4"><a href="https://www.mdbmc.ac.in/" target="_blank" rel="noopener" className="underline text-blue-500">Click Here</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}