export default function RecruitmentInformation() {
  // This component displays recruitment information for BECIL Nursing Officer Vacancy 2024.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">BECIL Nursing Officer Offline Form 2024</h1>
      <div className="mb-4">
        <p className="mb-1">
          <span className="text-green-500 font-bold">Name of the Post:</span>{' '}
          <strong className="font-bold">BECIL Nursing Officer Offline Form 2024</strong>
        </p>
        <p className="mb-1">
          <span className="text-green-500 font-bold">Post Date: </span>
          <strong className="font-bold">04-09-2024</strong>
        </p>
        <p className="mb-1">
          <span className="text-green-500 font-bold">Total Vacancy: </span>
          <strong className="font-bold">100</strong>
        </p>
      </div>
      <p className="mb-4">
        <span className="text-red-500 font-bold">Brief Information:</span>{' '}
        Broadcast Engineering Consultants India Limited (BECIL), has announced
        notification for the recruitment of Nursing Officer Vacancy on Contract
        basis. Those Candidates who are interested in the vacancy details &
        completed all eligibility criteria can read the Notification & Apply.
      </p>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Application Details</h2>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left font-bold">Details</th>
              <th className="px-4 py-2 text-left font-bold">Information</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2">Application Fee</td>
              <td className="px-4 py-2">
                <ul className="list-disc pl-6">
                  <li className="mb-1">
                    General/ OBC/ Ex-Serviceman/ Women Candidates: Rs. 590/-
                  </li>
                  <li className="mb-1">
                    SC/ ST/ EWS/ PH Candidates: Rs. 295/-
                  </li>
                  <li>Mode of Payment: Demand Draft</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">Important Dates</td>
              <td className="px-4 py-2">
                <ul className="list-disc pl-6">
                  <li className="mb-1">
                    Start Date to Apply Offline: <strong>02-09-2024</strong>
                  </li>
                  <li>
                    Last Date to Apply Offline: <strong>17-09-2024</strong>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">Age Limit (as on 01-01-2024)</td>
              <td className="px-4 py-2">
                <ul className="list-disc pl-6">
                  <li>Maximum Age limit: <strong>30 Years</strong></li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">Qualification</td>
              <td className="px-4 py-2">
                <ul className="list-disc pl-6">
                  <li>
                    Candidates Should Possess Diploma (GNM)/ B.Sc Nursing/ Post
                    Basic B.Sc Nursing.
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">Vacancy Details</td>
              <td className="px-4 py-2">
                <table className="table-auto w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-4 py-2 text-left font-bold">
                        Post Name
                      </th>
                      <th className="px-4 py-2 text-left font-bold">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2">Nursing Officer</td>
                      <td className="px-4 py-2">100</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-4">
        <span className="text-blue-500 font-bold">
          Interested Candidates Can Read the Full Notification Before Apply
        </span>
      </p>
      <h2 className="text-2xl font-bold mb-2">Important Links</h2>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <tbody>
          <tr>
            <td className="px-4 py-2">Notification</td>
            <td className="px-4 py-2">
              <a
                href="https://img.freejobalert.com/uploads/2024/09/Notification-BECIL-Nursing-Officer-Post.pdf"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">Official Website</td>
            <td className="px-4 py-2">
              <a
                href="https://www.becil.com/"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener"
              >
                Click Here
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}