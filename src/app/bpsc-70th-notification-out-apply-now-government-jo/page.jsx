export default function RecruitmentInformation() {
  // This component displays recruitment information for a public service commission exam. It includes details like important dates, application fees, vacancy details, and FAQs.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Bihar Public Service Commission Exam 2024</h1>
      <div className="flex mb-4">
        <time className="text-gray-600 mr-2">September 23, 2024</time>
        <span className="text-gray-600">by Admin</span>
      </div>
      <p className="text-gray-700 mb-4">
        The Bihar Public Service Commission (BPSC) has announced the notification for the 70th Combined (Preliminary) Competitive
        Examination for a total of 1957 posts.
      </p>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Overview</h2>
      <table className="table-auto w-full text-gray-700 mb-4">
        <tbody>
          <tr>
            <th className="px-4 py-2 text-left font-bold">Recruitment Organization</th>
            <td className="px-4 py-2">Bihar Public Service Commission (BPSC)</td>
          </tr>
          <tr>
            <th className="px-4 py-2 text-left font-bold">Post Name</th>
            <td className="px-4 py-2">Civil Service Various Posts</td>
          </tr>
          <tr>
            <th className="px-4 py-2 text-left font-bold">Advt No.</th>
            <td className="px-4 py-2">BPSC Civil Service 70th Prelims Exam 2024</td>
          </tr>
          <tr>
            <th className="px-4 py-2 text-left font-bold">Vacancies</th>
            <td className="px-4 py-2">1957</td>
          </tr>
          <tr>
            <th className="px-4 py-2 text-left font-bold">Pay Scale/ Salary</th>
            <td className="px-4 py-2">Varies Post Wise</td>
          </tr>
          <tr>
            <th className="px-4 py-2 text-left font-bold">Job Location</th>
            <td className="px-4 py-2">Bihar</td>
          </tr>
          <tr>
            <th className="px-4 py-2 text-left font-bold">Category</th>
            <td className="px-4 py-2">BPSC Prelims 70th Notificaiton 2024</td>
          </tr>
          <tr>
            <th className="px-4 py-2 text-left font-bold">Official Website</th>
            <td className="px-4 py-2">
              <a href="https://www.bpsc.bih.nic.in/" className="text-blue-500 hover:underline">
                BPSC
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Important Dates</h2>
      <table className="table-auto w-full text-gray-700 mb-4">
        <tbody>
          <tr>
            <th className="px-4 py-2 text-left font-bold">Apply Start</th>
            <td className="px-4 py-2">September 28, 2024</td>
          </tr>
          <tr>
            <th className="px-4 py-2 text-left font-bold">Apply Last Date</th>
            <td className="px-4 py-2">October 18, 2024</td>
          </tr>
          <tr>
            <th className="px-4 py-2 text-left font-bold">Exam Date</th>
            <td className="px-4 py-2">To be Announced</td>
          </tr>
        </tbody>
      </table>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Application Fees</h2>
      <table className="table-auto w-full text-gray-700 mb-4">
        <tbody>
          <tr>
            <th className="px-4 py-2 text-left font-bold">General/ OBC/ EWS/ Other State</th>
            <td className="px-4 py-2">Rs. 600/-</td>
          </tr>
          <tr>
            <th className="px-4 py-2 text-left font-bold">SC/ ST/ PWD</th>
            <td className="px-4 py-2">Rs. 150/-</td>
          </tr>
          <tr>
            <th className="px-4 py-2 text-left font-bold">Mode of Payment</th>
            <td className="px-4 py-2">Online</td>
          </tr>
        </tbody>
      </table>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Vacancy Details and Qualifications</h2>
      <p className="text-gray-700 mb-4">
        <strong>Age Limit:</strong> The age limit for the BPSC 70th 2024 exam is 20-37 years. The crucial date for the calculation of the
        age limit is 1.8.2024. Age relaxation will be given as per the rules.
      </p>
      <table className="table-auto w-full text-gray-700 mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left font-bold">Exam Name</th>
            <th className="px-4 py-2 text-left font-bold">Vacancy</th>
            <th className="px-4 py-2 text-left font-bold">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">BPSC 70th Prelims</td>
            <td className="px-4 py-2">1957</td>
            <td className="px-4 py-2">Any Graduate</td>
          </tr>
        </tbody>
      </table>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Selection Process</h2>
      <p className="text-gray-700 mb-4">The selection process for the BPSC 70th Exam 2024 includes the following stages:</p>
      <ul className="list-disc pl-6 text-gray-700 mb-4">
        <li>Preliminary Written Exam</li>
        <li>Mains Written Exam</li>
        <li>Interview</li>
        <li>Document Verification</li>
        <li>Medical Examination</li>
      </ul>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">How to Apply</h2>
      <p className="text-gray-700 mb-4">Follow these steps to apply for the BPSC 70th Prelims 2024:</p>
      <ul className="list-disc pl-6 text-gray-700 mb-4">
        <li>Check your qualification from the BPSC 70th Prelims 2024 Notification PDF given below.</li>
        <li>Click on the "Apply Online" link given below or visit the website onlinebpsc.bihar.gov.in.</li>
        <li>Fill out the online application form.</li>
        <li>Upload the required documents.</li>
        <li>Pay the required application fees.</li>
        <li>Print the application form.</li>
      </ul>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Important Links</h2>
      <table className="table-auto w-full text-gray-700 mb-4">
        <tbody>
          <tr>
            <th className="px-4 py-2 text-left font-bold">Notice</th>
            <td className="px-4 py-2">
              <a href="https://pmsuryaghar.org.in/wp-content/uploads/2024/09/BPSC-70th-Notice-2024.pdf" className="text-blue-500 hover:underline">
                Notice
              </a>
            </td>
          </tr>
          <tr>
            <th className="px-4 py-2 text-left font-bold">Notification PDF</th>
            <td className="px-4 py-2">
              <a href="https://pmsuryaghar.org.in/wp-content/uploads/2024/09/BPSC-70th-Notification-2024.pdf" className="text-blue-500 hover:underline">
                Download
              </a>
            </td>
          </tr>
          <tr>
            <th className="px-4 py-2 text-left font-bold">Apply Online</th>
            <td className="px-4 py-2">
              <a href="https://onlinebpsc.bihar.gov.in/" className="text-blue-500 hover:underline" target="_blank" rel="noopener">
                Apply Online
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">FAQs</h2>
      <div className="text-gray-700 mb-4">
        <p className="font-bold">How to apply for the BPSC 70th Prelims 2024?</p>
        <p>Apply Online from the website bpsconline.bihar.gov.in.</p>
      </div>
      <div className="text-gray-700 mb-4">
        <p className="font-bold">What is the last date to apply for BPSC 70th Prelims 2024?</p>
        <p>October 18, 2024</p>
      </div>
    </div>
  );
}