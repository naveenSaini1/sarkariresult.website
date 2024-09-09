export default function BRORecruitment() {
  // This component displays recruitment information for the Border Roads Organization (BRO)
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">BRO Various Vacancy Offline Form 2024</h1>

      <div className="mb-4">
        <p className="text-green-500 font-bold">Name of the Post:</p>
        <p className="font-bold">BRO Various Vacancy Offline Form 2024</p>
      </div>

      <div className="mb-4">
        <p className="text-green-500 font-bold">Post Date:</p>
        <p className="font-bold">07-08-2024</p>
      </div>

      <div className="mb-4">
        <p className="text-green-500 font-bold">Total Vacancy:</p>
        <p className="font-bold">466</p>
      </div>

      <p className="mb-4">
        <span className="text-red-500 font-bold">Brief Information:</span>
        <span>Border Roads Organization (BRO) has advertised a notification for the recruitment of Driver Mechanical Transport, Turner, Draughtsman & Other Vacancy in General Reserve Engineer Force from Indian National (Males Only). Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply.</span>
      </p>

      <h2 className="text-2xl font-bold mb-4">Border Roads Organization (BRO)</h2>

      <div className="mb-4">
        <p className="text-red-500 font-bold text-center">Application Fee</p>
        <ul className="list-disc pl-6">
          <li>Available soon</li>
        </ul>
      </div>

      <div className="mb-4">
        <p className="text-red-500 font-bold text-center">Important Dates</p>
        <ul className="list-disc pl-6">
          <li>Available soon</li>
        </ul>
      </div>

      <div className="mb-4">
        <p className="text-red-500 font-bold text-center">Age Limit</p>
        <ul className="list-disc pl-6">
          <li>Available soon</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>

      <table className="table-auto w-full text-center border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-blue-500 font-bold">Sl No</th>
            <th className="px-4 py-2 text-blue-500 font-bold">Post Name</th>
            <th className="px-4 py-2 text-blue-500 font-bold" colSpan={2}>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">1</td>
            <td className="px-4 py-2">Draughtsman</td>
            <td className="px-4 py-2" colSpan={2}>16</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">2</td>
            <td className="px-4 py-2">Supervisor (Administration)</td>
            <td className="px-4 py-2" colSpan={2}>02</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">3</td>
            <td className="px-4 py-2">Turner</td>
            <td className="px-4 py-2" colSpan={2}>10</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">4</td>
            <td className="px-4 py-2">Machinist</td>
            <td className="px-4 py-2" colSpan={2}>01</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">5</td>
            <td className="px-4 py-2">Driver Mechanical Transport (OG)</td>
            <td className="px-4 py-2" colSpan={2}>417</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">6</td>
            <td className="px-4 py-2">Driver Road Roller (OG)</td>
            <td className="px-4 py-2" colSpan={2}>02</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">7</td>
            <td className="px-4 py-2">Operator Excavating Machinery (OG)</td>
            <td className="px-4 py-2" colSpan={2}>18</td>
          </tr>
        </tbody>
      </table>

      <p className="text-blue-500 font-bold text-center mb-4">Interested Candidates Can Read the Full Notification Before Apply.</p>

      <h2 className="text-2xl font-bold mb-4">Important Links</h2>

      <table className="table-auto w-full text-center border-collapse border border-gray-300">
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 text-green-500 font-bold" colSpan={3}>Detail Notification</td>
            <td className="px-4 py-2">Available soon</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 text-green-500 font-bold" colSpan={3}>Short Notification</td>
            <td className="px-4 py-2"><a href="https://img.freejobalert.com/uploads/2024/08/Short-Notification-BRO-Driver-Mechanical-Transport-and-Other-Posts.jpeg" target="_blank" rel="nofollow" className="text-blue-500 underline">Click Here</a></td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 text-green-500 font-bold" colSpan={3}>Official Website</td>
            <td className="px-4 py-2"><a href="http://www.bro.gov.in/" target="_blank" rel="nofollow" className="text-blue-500 underline">Click here</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}