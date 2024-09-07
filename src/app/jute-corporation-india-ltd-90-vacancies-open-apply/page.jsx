export default function RecruitmentInfo() {
  // Displays recruitment information for JUTE Corporation of India Ltd Various Vacancy
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">JUTE Corporation of India Ltd Various Vacancy Offline Form 2024</h1>
      <p className="mb-2">
        <span className="text-green-500 font-bold">Name of the Post:</span>{' '}
        <span className="font-bold">JUTE Corporation of India Ltd Various Vacancy Offline Form 2024</span>
      </p>
      <p className="mb-2">
        <span className="text-green-500 font-bold">Post Date:</span> 05-09-2024
      </p>
      <p className="mb-2">
        <span className="text-green-500 font-bold">Total Vacancy:</span> 90
      </p>
      <p className="mb-4">
        <span className="text-red-500 font-bold">Brief Information:</span>{' '}
        JUTE Corporation of India Limited has announced notification for the recruitment of Various Vacancy on
        Regular basis. Those Candidates who are interested in the vacancy details & completed all eligibility
        criteria can read the Notification & Apply.
      </p>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Application Fee</h2>
        <ul className="list-disc pl-5">
          <li>Available Soon</li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Important Date</h2>
        <ul className="list-disc pl-5">
          <li>Last Date of receipt of Application: 27-09-2024</li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Age Limit</h2>
        <ul className="list-disc pl-5">
          <li>Available Soon</li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Qualification</h2>
        <ul className="list-disc pl-5">
          <li>Available Soon</li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Vacancy Details</h2>
        <table className="table-auto w-full text-center border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="bg-gray-100 border border-gray-300 px-4 py-2">Post Name</th>
              <th className="bg-gray-100 border border-gray-300 px-4 py-2">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border border-gray-300">
              <td className="px-4 py-2">Jr. Assistant</td>
              <td className="px-4 py-2">25</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="px-4 py-2">Accountant</td>
              <td className="px-4 py-2">23</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="px-4 py-2">Jr. Inspector</td>
              <td className="px-4 py-2">42</td>
            </tr>
          </tbody>
        </table>
        <p className="text-blue-500 font-bold mt-2">
          Interested Candidates Can Read the Full Notification Before Apply
        </p>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Important Links</h2>
        <table className="table-auto w-full text-center border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="bg-gray-100 border border-gray-300 px-4 py-2">Link</th>
              <th className="bg-gray-100 border border-gray-300 px-4 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border border-gray-300">
              <td className="px-4 py-2">
                <a
                  href="https://img.freejobalert.com/uploads/2024/09/Notification-JUTE-Corporation-Various-Vacancy-Post.pdf"
                  target="_blank"
                  rel="nofollow"
                  className="text-blue-500"
                >
                  Click Here
                </a>
              </td>
              <td className="px-4 py-2">Notification</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="px-4 py-2">
                <a
                  href="https://www.jutecorp.in/"
                  target="_blank"
                  rel="nofollow"
                  className="text-blue-500"
                >
                  Click Here
                </a>
              </td>
              <td className="px-4 py-2">Official Website</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}