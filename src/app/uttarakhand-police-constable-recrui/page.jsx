export default function UttarakhandPoliceConstableRecruitment() {
  // This component displays information about the Uttarakhand Police Constable Recruitment 2024, including important dates, application fees, vacancy details, and eligibility criteria.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Uttarakhand Police Constable Recruitment 2024</h1>

      {/* Post Details */}
      <div className="flex items-center mb-4">
        <p className="text-gray-600 mr-2">
          Published on: <span className="font-medium">November 8, 2024</span>
        </p>
        <p className="text-gray-600">By: <span className="font-medium">Admin</span></p>
      </div>

      {/* Summary of Recruitment Information */}
      <p className="text-gray-700 mb-4">
        The Uttarakhand Subordinate Service Selection Commission (UKSSSC) has announced the recruitment of Police Constables in Uttarakhand. A total of 2000 vacancies are available, including 1600 posts for District Constables and 400 posts for PAC/IRB units.
      </p>

      {/* Key Highlights */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Highlights</h2>
      <ul className="list-disc text-gray-700 mb-4">
        <li>Notification Released: October 30, 2024</li>
        <li>Application Period: November 8 - 29, 2024</li>
        <li>Exam Date: June 15, 2025</li>
        <li>Total Vacancies: 2000</li>
        <li>Pay Scale: Rs. 21700- 69100/- (Level-3)</li>
      </ul>

      {/* Application Fee */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Application Fee</h2>
      <table className="table-auto w-full text-gray-700 mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left font-bold">Category</th>
            <th className="px-4 py-2 text-left font-bold">Application Fee</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">General, OBC</td>
            <td className="px-4 py-2">Rs. 300/-</td>
          </tr>
          <tr>
            <td className="px-4 py-2">EWS, SC, ST, PWD</td>
            <td className="px-4 py-2">Rs. 150/-</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Mode of Payment</td>
            <td className="px-4 py-2">Online</td>
          </tr>
        </tbody>
      </table>

      {/* Vacancies and Eligibility */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Vacancies and Eligibility</h2>
      <p className="text-gray-700 mb-2">
        <strong>Age Limit:</strong> 18-22 Years (as of July 1, 2024). Age relaxation is applicable as per the rules.
      </p>
      <table className="table-auto w-full text-gray-700 mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left font-bold">Post Name</th>
            <th className="px-4 py-2 text-left font-bold">Vacancy</th>
            <th className="px-4 py-2 text-left font-bold">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">Police Constable</td>
            <td className="px-4 py-2">2000</td>
            <td className="px-4 py-2">12th Pass</td>
          </tr>
        </tbody>
      </table>

      {/* Selection Process */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Selection Process</h2>
      <p className="text-gray-700 mb-4">
        The selection process for Uttarakhand Police Constable Recruitment 2024 consists of the following stages:
      </p>
      <ol className="list-decimal text-gray-700 mb-4">
        <li>Written Exam</li>
        <li>Physical Test (PET/ PST)</li>
        <li>Document Verification</li>
        <li>Medical Examination</li>
      </ol>

      {/* Notification and Apply Link */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Notification and Apply Link</h2>
      <table className="table-auto w-full text-gray-700 mb-4">
        <tbody>
          <tr>
            <td className="px-4 py-2">Notification PDF</td>
            <td className="px-4 py-2">
              <a href="https://pmsuryaghar.org.in/wp-content/uploads/2024/10/Uttarakhand-Police-Constable-2024-Notification-PDF.pdf" className="text-blue-500 underline">
                Notification
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">Online Form</td>
            <td className="px-4 py-2">
              <a href="https://uksssc.net.in/phe/exam.html#/swp" target="_blank" rel="noopener" className="text-blue-500 underline">
                Apply Online
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">UKSSSC Official Website</td>
            <td className="px-4 py-2">
              <a href="https://sssc.uk.gov.in/" target="_blank" rel="noopener" className="text-blue-500 underline">
                UKSSSC
              </a>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Keywords */}
      <p className="text-gray-600 mt-8">
        Keywords: Uttarakhand Police, Constable Recruitment, UKSSSC, Police Jobs, Government Jobs, Uttarakhand
      </p>
    </div>
  );
}