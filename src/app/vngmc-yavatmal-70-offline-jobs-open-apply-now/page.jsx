export default function RecruitmentInformation() {
  // This component displays recruitment information for VNGMC, Yavatmal, including post details, important dates, and vacancy details.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">VNGMC, Yavatmal Various Vacancy Offline Form 2024</h1>
      <p className="text-lg mb-4">
        <span className="text-green-500 font-bold">Name of the Post:</span>
        {' '}
        <strong>VNGMC, Yavatmal Various Vacancy Offline Form 2024</strong>
      </p>
      <p className="text-lg mb-4">
        <span className="text-green-500 font-bold">Post Date:</span>
        {' '}
        26-08-2024
      </p>
      <p className="text-lg mb-4">
        <span className="text-green-500 font-bold">Total Vacancy:</span>
        {' '}
        70
      </p>
      <p className="text-lg mb-4">
        <span className="text-red-500 font-bold">Brief Information:</span>
        {' '}
        Shri Vasantrao Naik Government Medical College, Yavatmal has published a Notification for the recruitment of Laboratory Technician, Clerk, Room Attendant & Cleaner Vacancy. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply.
      </p>

      <h2 className="text-2xl font-bold text-center mt-8 mb-4">Important Information</h2>
      <table className="table-auto w-full text-center border-collapse mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-gray-300 font-bold">Important Dates</th>
            <th className="px-4 py-2 border border-gray-300 font-bold">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Last Date for Receipt of Application:</td>
            <td className="px-4 py-2 border border-gray-300">28-08-2024 (till 06:00PM)</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold text-center mt-8 mb-4">Vacancy Details</h2>
      <table className="table-auto w-full text-center border-collapse mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-gray-300 font-bold">Post Name</th>
            <th className="px-4 py-2 border border-gray-300 font-bold">Total</th>
            <th className="px-4 py-2 border border-gray-300 font-bold">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Laboratory Technician</td>
            <td className="px-4 py-2 border border-gray-300">15</td>
            <td className="px-4 py-2 border border-gray-300">B.P.M.T.( Laboratory Sience / Blood transfusion / Radiography / Emergency medicine)</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Clerk</td>
            <td className="px-4 py-2 border border-gray-300">15</td>
            <td className="px-4 py-2 border border-gray-300">Any Degree</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Room Attendant</td>
            <td className="px-4 py-2 border border-gray-300">25</td>
            <td className="px-4 py-2 border border-gray-300">12th Pass</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Cleaner</td>
            <td className="px-4 py-2 border border-gray-300">15</td>
            <td className="px-4 py-2 border border-gray-300">12th Pass</td>
          </tr>
        </tbody>
      </table>

      <p className="text-lg mb-4">
        <span className="text-blue-500 font-bold">Interested Candidates Can Read the Full Notification Before Apply</span>
      </p>

      <h2 className="text-2xl font-bold text-center mt-8 mb-4">Important Links</h2>
      <table className="table-auto w-full text-center border-collapse mb-4">
        <tbody>
          <tr>
            <td className="px-4 py-2 border border-gray-300" colSpan="2">
              <span className="text-green-500 font-bold">Notification</span>
            </td>
            <td className="px-4 py-2 border border-gray-300">
              <a href="https://img.freejobalert.com/uploads/2024/08/Notification-VNGMC-Yavatmal-Laboratory-Technician-Clerk-Other-Posts.pdf" className="text-blue-500" target="_blank" rel="nofollow">
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300" colSpan="2">
              <span className="text-green-500 font-bold">Official Website</span>
            </td>
            <td className="px-4 py-2 border border-gray-300">
              <a href="https://www.vngmcytl.ac.in/" className="text-blue-500" target="_blank" rel="nofollow">
                Click Here
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}