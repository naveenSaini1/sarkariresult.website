export default function RecruitmentInfo() {
  // This component displays recruitment information for Union Bank of India Apprentice Vacancy 2024, including post details, brief information, application fee, important dates, age limit, qualification, and vacancy details.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Union Bank of India Apprentice Vacancy 2024</h1>
      <p className="text-gray-600 mb-4">
        <span className="font-bold text-green-500">Name of the Post:</span> Union Bank of India Apprentice Online Form 2024
      </p>
      <p className="text-gray-600 mb-4">
        <span className="font-bold text-green-500">Post Date:</span> 28-08-2024
      </p>
      <p className="text-gray-600 mb-4">
        <span className="font-bold text-green-500">Total Vacancy:</span> 500
      </p>
      <p className="text-gray-600 mb-4">
        <span className="font-bold text-red-500">Brief Information:</span> Union Bank of India has given a notification for the recruitment of Apprentice Vacancy under Apprentices Act 1961. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply Online.
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Application Details</h2>
      <div className="bg-gray-100 p-4 rounded-md mb-4">
        <p className="font-bold text-red-500 mb-2">Application Fee</p>
        <ul className="list-disc ml-6">
          <li>Fee for General/ OBC candidates: <strong>Rs. 800.00 + GST</strong></li>
          <li>Fee for All Females: <strong>Rs. 600.00 + GST</strong></li>
          <li>Fee for SC/ST Candidates: <strong>Rs. 600.00 + GST</strong></li>
          <li>Fee for PWBD Candidates: <strong>Rs. 400.00 + GST</strong></li>
          <li>Payment Mode: <strong>Through debit card/credit card /internet banking/UPI</strong></li>
        </ul>
      </div>

      <div className="bg-gray-100 p-4 rounded-md mb-4">
        <p className="font-bold text-red-500 mb-2">Important Dates</p>
        <ul className="list-disc ml-6">
          <li>Start Date for Apply Online & Payment of Fee: <strong>28-08-2024</strong></li>
          <li>Last Date for Apply Online & Payment of Fee: <strong>17-09-2024</strong></li>
        </ul>
      </div>

      <div className="bg-gray-100 p-4 rounded-md mb-4">
        <p className="font-bold text-red-500 mb-2">Age Limit (as on 01-08-2024)</p>
        <ul className="list-disc ml-6">
          <li>Minimum Age Limit: <strong>20 Years</strong></li>
          <li>Maximum Age Limit: <strong>28 Years</strong></li>
          <li>i.e. candidates having DoB between 02-08-1996 and 01-08-2004 (both dates inclusive).</li>
          <li>Age Relaxation is applicable as per rules.</li>
        </ul>
      </div>

      <div className="bg-gray-100 p-4 rounded-md mb-4">
        <p className="font-bold text-red-500 mb-2">Qualification</p>
        <ul className="list-disc ml-6">
          <li>Candidates Should Possess Any Degree.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Vacancy Details</h2>
      <table className="w-full text-center border-collapse rounded-md mb-4">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 font-bold text-gray-800">Post Name</th>
            <th className="px-4 py-2 font-bold text-gray-800">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border-t border-gray-300">Apprentice</td>
            <td className="px-4 py-2 border-t border-gray-300">500</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-gray-300">Andhra Pradesh</td>
            <td className="px-4 py-2 border-t border-gray-300">50</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-gray-300">Arunachal Pradesh</td>
            <td className="px-4 py-2 border-t border-gray-300">01</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-gray-300">Assam</td>
            <td className="px-4 py-2 border-t border-gray-300">04</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-gray-300">Bihar</td>
            <td className="px-4 py-2 border-t border-gray-300">05</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-gray-300">Chandigarh</td>
            <td className="px-4 py-2 border-t border-gray-300">03</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-gray-300">Chhattisgarh</td>
            <td className="px-4 py-2 border-t border-gray-300">04</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-gray-300">Goa</td>
            <td className="px-4 py-2 border-t border-gray-300">04</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-gray-300">Gujarat</td>
            <td className="px-4 py-2 border-t border-gray-300">56</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-gray-300">Haryana</td>
            <td className="px-4 py-2 border-t border-gray-300">07</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-gray-300">Himachal Pradesh</td>
            <td className="px-4 py-2 border-t border-gray-300">01</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-gray-300">Jammu Kashmir</td>
            <td className="px-4 py-2 border-t border-gray-300">01</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-gray-300">Jharkhand</td>
            <td className="px-4 py-2 border-t border-gray-300">05</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-gray-300">Karnataka</td>
            <td className="px-4 py-2 border-t border-gray-300">40</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-gray-300">Kerala</td>
            <td className="px-4 py-2 border-t border-gray-300">22</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-gray-300">Madhya Pradesh</td>
            <td className="px-4 py-2 border-t border-gray-300">16</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-gray-300">Maharashtra</td>
            <td className="px-4 py-2 border-t border-gray-300">56</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-gray-300">Delhi</td>
            <td className="px-4 py-2 border-t border-gray-300">17</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-gray-300">Odisha</td>
            <td className="px-4 py-2 border-t border-gray-300">12</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-gray-300">Punjab</td>
            <td className="px-4 py-2 border-t border-gray-300">10</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-gray-300">Rajasthan</td>
            <td className="px-4 py-2 border-t border-gray-300">09</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-gray-300">Tamil Nadu</td>
            <td className="px-4 py-2 border-t border-gray-300">55</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-gray-300">Telangana</td>
            <td className="px-4 py-2 border-t border-gray-300">42</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-gray-300">Uttarakhand</td>
            <td className="px-4 py-2 border-t border-gray-300">03</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-gray-300">Uttar Pradesh</td>
            <td className="px-4 py-2 border-t border-gray-300">61</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-gray-300">West Bengal</td>
            <td className="px-4 py-2 border-t border-gray-300">16</td>
          </tr>
        </tbody>
      </table>

      <p className="text-gray-600 mb-4">
        <span className="font-bold text-blue-500">Interested Candidates Can Read the Full Notification Before Apply Online</span>
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Important Links</h2>
      <table className="w-full text-center border-collapse rounded-md mb-4">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 font-bold text-gray-800">Link</th>
            <th className="px-4 py-2 font-bold text-gray-800">URL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border-t border-gray-300">
              <span className="font-bold text-green-500">Apply Online</span>
            </td>
            <td className="px-4 py-2 border-t border-gray-300">
              <a href="https://www.apprenticeshipindia.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                NAPS
              </a>{' '}
              |{' '}
              <a href="https://nats.education.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                NATS
              </a>{' '}
              |{' '}
              <a href="https://bfsissc.com/UBI.php" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                BFSISSC
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-gray-300">
              <span className="font-bold text-green-500">Detailed Notification</span>
            </td>
            <td className="px-4 py-2 border-t border-gray-300">
              <a href="https://img.freejobalert.com/uploads/2024/08/Notification-Union-Bank-of-India-Apprentice-Posts.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-gray-300">
              <span className="font-bold text-green-500">Short Notification</span>
            </td>
            <td className="px-4 py-2 border-t border-gray-300">
              <a href="https://img.freejobalert.com/uploads/2024/08/Short-Notification-Union-Bank-of-India-Apprentice-Posts.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-t border-gray-300">
              <span className="font-bold text-green-500">Official Website</span>
            </td>
            <td className="px-4 py-2 border-t border-gray-300">
              <a href="https://www.unionbankofindia.co.in/english/home.aspx" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                Click Here
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}