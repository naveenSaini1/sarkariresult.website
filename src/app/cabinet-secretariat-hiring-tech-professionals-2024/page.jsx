export default function RecruitmentInformation() {
  // This component displays recruitment information for a government position, including details like job title, application process, eligibility criteria, important dates, and frequently asked questions.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        Government Job Opportunity for Technical Professionals
      </h1>
      <nav className="mb-4" aria-label="breadcrumbs">
        <ol className="flex items-center space-x-2">
          <li>
            <a
              href="https://pmsuryaghar.org.in"
              className="text-blue-500 hover:underline"
            >
              
            </a>
          </li>
          <li>
            <span className="text-gray-500"> » </span>
          </li>
          <li>
            <a
              href="https://pmsuryaghar.org.in/category/notification/"
              className="text-blue-500 hover:underline"
            >
              Notification
            </a>
          </li>
          <li>
            <span className="text-gray-500"> » </span>
          </li>
          <li>
            <span className="font-medium text-gray-900">
              Government Department Technical Recruitment
            </span>
          </li>
        </ol>
      </nav>
      <div className="mb-4">
        <img
          src="https://pmsuryaghar.org.in/wp-content/uploads/2024/09/Cabinet-Secretariat-DFO-Tech-Recruitment.jpg"
          alt="Government Department Technical Recruitment"
          className="w-full rounded-md"
        />
      </div>
      <div className="mb-4">
        <p className="text-lg">
          The Government of India, Government Department has announced the
          recruitment of 160 Group B positions for Technical Officers. The
          application process is open from September 21st to October 21st,
          2024.
        </p>
        <p className="text-lg">
          Interested and eligible candidates can apply offline by sending the
          completed application form to the designated address.
        </p>
      </div>
      <h2 className="text-2xl font-bold mb-4">Recruitment Overview</h2>
      <table className="table-auto w-full border border-gray-300 text-center">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-gray-300 font-medium">
              Details
            </th>
            <th className="px-4 py-2 border border-gray-300 font-medium">
              Information
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border border-gray-300">
              Recruitment Organization
            </td>
            <td className="px-4 py-2 border border-gray-300">
              Government of India, Government Department
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Post Name</td>
            <td className="px-4 py-2 border border-gray-300">
              Technical Officer
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Advt No.</td>
            <td className="px-4 py-2 border border-gray-300">
              Government Department Technical Recruitment 01/2024
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Vacancies</td>
            <td className="px-4 py-2 border border-gray-300">160</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Salary/ Pay Scale</td>
            <td className="px-4 py-2 border border-gray-300">
              Rs. 95000/- (Level-7)
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Job Location</td>
            <td className="px-4 py-2 border border-gray-300">All India</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">
              Last Date to Apply
            </td>
            <td className="px-4 py-2 border border-gray-300">October 21, 2024</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Mode of Apply</td>
            <td className="px-4 py-2 border border-gray-300">Offline</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Category</td>
            <td className="px-4 py-2 border border-gray-300">
              Government Department Technical Vacancy 2024
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">
              Official Website
            </td>
            <td className="px-4 py-2 border border-gray-300">
              <a
                href="https://cabsec.gov.in/"
                className="text-blue-500 hover:underline"
              >
                Government Department
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <h2 className="text-2xl font-bold mb-4">Important Dates</h2>
      <table className="table-auto w-full border border-gray-300 text-center">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-gray-300 font-medium">
              Event
            </th>
            <th className="px-4 py-2 border border-gray-300 font-medium">
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Apply start</td>
            <td className="px-4 py-2 border border-gray-300">
              September 21, 2024
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">
              Apply Last Date
            </td>
            <td className="px-4 py-2 border border-gray-300">
              October 21, 2024
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Interview Date</td>
            <td className="px-4 py-2 border border-gray-300">Notify Later</td>
          </tr>
        </tbody>
      </table>
      <h2 className="text-2xl font-bold mb-4">Application Fees</h2>
      <table className="table-auto w-full border border-gray-300 text-center">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-gray-300 font-medium">
              Category
            </th>
            <th className="px-4 py-2 border border-gray-300 font-medium">
              Fee
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border border-gray-300">
              General/ OBC/ EWS
            </td>
            <td className="px-4 py-2 border border-gray-300">Rs. 0/-</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">SC/ ST/ PWD</td>
            <td className="px-4 py-2 border border-gray-300">Rs. 0/-</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">
              Mode of Payment
            </td>
            <td className="px-4 py-2 border border-gray-300">Online</td>
          </tr>
        </tbody>
      </table>
      <h2 className="text-2xl font-bold mb-4">
        Post Details, Eligibility & Qualification
      </h2>
      <p className="mb-4">
        <strong>Age Limit:</strong> The age limit for this recruitment is 18-30
        Years. The crucial date for the calculation of the age is 21.10.2024.
        Age Relaxation will be given as per the Rules of the Government.
      </p>
      <p className="mb-4">
        <strong>Vacancies:</strong> 160 (CS- 80, EC- 80)
      </p>
      <table className="table-auto w-full border border-gray-300 text-center">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-gray-300 font-medium">
              Post Name
            </th>
            <th className="px-4 py-2 border border-gray-300 font-medium">
              Vacancy
            </th>
            <th className="px-4 py-2 border border-gray-300 font-medium">
              Qualification
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border border-gray-300">
              Technical Officer
            </td>
            <td className="px-4 py-2 border border-gray-300">160</td>
            <td className="px-4 py-2 border border-gray-300">
              B.Tech or M.Sc. + GATE Score
            </td>
          </tr>
        </tbody>
      </table>
      <h3 className="text-xl font-bold mb-4">
        Government Department Technical Recruitment Selection Process
      </h3>
      <ul className="list-disc ml-4 mb-4">
        <li>Shortlisting of candidates based on GATE Score</li>
        <li>Personal Interview</li>
        <li>Document Verification</li>
        <li>Medical Examination</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">
        How to Apply for Government Department Technical Recruitment
      </h2>
      <ul className="list-disc ml-4 mb-4">
        <li>
          Check the eligibility from the Government Department Technical
          Recruitment 2024 Notification.
        </li>
        <li>
          Download the application form and take a printout of it.
        </li>
        <li>
          Duly Fill up the application form and attach the required documents.
        </li>
        <li>
          Send the application form to the address “Post Bag No. 001, Lodhi
          Road Head Post Office, New Delhi-110003. Last Date for Receipt of
          Application Form is ………. ” through the ORDINARY Post.
        </li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Important Links</h2>
      <blockquote className="border border-gray-300 rounded-md p-4 mb-4">
        <p className="text-gray-700">
          <strong>Note:</strong> The Offline Application Form will start on
          September 21, 2024, Dont apply before 21.09.2024.
        </p>
      </blockquote>
      <table className="table-auto w-full border border-gray-300 text-center">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-gray-300 font-medium">
              Document
            </th>
            <th className="px-4 py-2 border border-gray-300 font-medium">
              Link
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border border-gray-300">
              Government Department Technical Recruitment 2024 Notification and
              Offline Form
            </td>
            <td className="px-4 py-2 border border-gray-300">
              <a
                href="https://pmsuryaghar.org.in/wp-content/uploads/2024/09/Cabinet-Secretariat-DFO-Tech-Recruitment-2024-Notification.pdf"
                className="text-blue-500 hover:underline"
              >
                Notification
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">
              Government Department Official Website
            </td>
            <td className="px-4 py-2 border border-gray-300">
              <a
                href="https://cabsec.gov.in/"
                className="text-blue-500 hover:underline"
              >
                Government Department
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <h2 className="text-2xl font-bold mb-4">FAQs</h2>
      <div className="mb-4">
        <div className="mb-2">
          <p className="font-bold">
            How to apply for Government Department Technical Recruitment 2024?
          </p>
          <p>
            Apply offline by sending the duly filled application form to the
            address given in this article.
          </p>
        </div>
        <div className="mb-2">
          <p className="font-bold">
            What is the last date to apply for Government Department Technical
            Recruitment 2024?
          </p>
          <p>October 21, 2024</p>
        </div>
      </div>
    </div>
  );
}