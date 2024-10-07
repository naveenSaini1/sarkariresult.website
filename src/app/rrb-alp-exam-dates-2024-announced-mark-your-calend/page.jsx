export default function RRBRecruitmentInformation() {
  // This component displays recruitment information for the Railway Recruitment Board (RRB) Assistant Loco Pilot (ALP) position. 
  // It includes details on exam dates, application status, eligibility criteria, selection process, and important links.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">RRB ALP Exam Information</h1>
      {/* Breadcrumbs */}
      <nav className="mb-4" aria-label="breadcrumbs">
        <ol className="flex list-none p-0">
          <li className="text-gray-500">
            <a href="https://pmsuryaghar.org.in" className="text-blue-500 hover:underline">
              
            </a>
          </li>
          <li className="text-gray-500">
            <span className="mx-2 text-gray-500">»</span>
            <a href="https://pmsuryaghar.org.in/category/admit-card/" className="text-blue-500 hover:underline">
              Admit Card
            </a>
          </li>
          <li className="text-gray-500">
            <span className="mx-2 text-gray-500">»</span>
            <span className="last">RRB ALP Exam Date 2024 - All Details Here</span>
          </li>
        </ol>
      </nav>
      {/* Post Details */}
      <div className="mb-4 flex items-center">
        <span className="text-gray-500 mr-2">Posted on:</span>
        <time dateTime="2024-10-07T14:35:35+05:30" className="text-gray-700">October 7, 2024</time>
      </div>
      {/* Brief Information */}
      <p className="mb-4">
        The Railway Recruitment Board (RRB) has announced the exam date for the Assistant Loco Pilot (ALP) recruitment. The exam will be held from 25 to 29 November 2024 in various shifts. The total number of vacancies for this recruitment is 18799.
      </p>
      {/* Overview Table */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">RRB ALP Recruitment Overview</h2>
      <table className="table-auto w-full text-left border-collapse mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 text-gray-800 font-bold">Recruitment Organization</th>
            <th className="py-2 px-4 text-gray-800 font-bold">Post Name</th>
            <th className="py-2 px-4 text-gray-800 font-bold">Advt. No.</th>
            <th className="py-2 px-4 text-gray-800 font-bold">Total Vacancies</th>
            <th className="py-2 px-4 text-gray-800 font-bold">Exam Date</th>
            <th className="py-2 px-4 text-gray-800 font-bold">Official Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4">Railway Recruitment Board (RRB)</td>
            <td className="py-2 px-4">Assistant Loco Pilot (ALP)</td>
            <td className="py-2 px-4">CEN 01/2024</td>
            <td className="py-2 px-4">18799</td>
            <td className="py-2 px-4">25-29 November 2024</td>
            <td className="py-2 px-4"><a href="https://rrbapply.gov.in" className="text-blue-500 hover:underline">rrbapply.gov.in</a></td>
          </tr>
        </tbody>
      </table>
      {/* Important Dates */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Important Dates</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Notification Release Date: 20 January 2024</li>
        <li>Online Application Period: 20 January to 19 February 2024</li>
        <li>Application Status Release Date: 24 July 2024</li>
        <li>Exam Date Announcement: 7 October 2024</li>
      </ul>
      {/* Vacancy and Eligibility */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Vacancies and Eligibility</h2>
      <p className="mb-4">
        The minimum age requirement for this position is 18 years, and the maximum age is 33 years. Age relaxation is available for reserved categories as per government rules.
      </p>
      {/* Eligibility Table */}
      <table className="table-auto w-full text-left border-collapse mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 text-gray-800 font-bold">Post Name</th>
            <th className="py-2 px-4 text-gray-800 font-bold">Vacancy</th>
            <th className="py-2 px-4 text-gray-800 font-bold">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4">Assistant Loco Pilot (ALP)</td>
            <td className="py-2 px-4">18799</td>
            <td className="py-2 px-4">ITI/ Diploma/ Degree in Related Field</td>
          </tr>
        </tbody>
      </table>
      {/* Selection Process */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Selection Process</h2>
      <p className="mb-4">
        The recruitment process for RRB ALP consists of the following stages:
      </p>
      <ol className="list-decimal list-inside mb-4">
        <li>Computer Based Test (CBT) - 1</li>
        <li>Computer Based Test (CBT) - 2</li>
        <li>Document Verification</li>
        <li>Medical Examination</li>
      </ol>
      {/* Notice Links */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Important Links</h2>
      <table className="table-auto w-full text-left border-collapse mb-4">
        <tbody>
          <tr>
            <td className="py-2 px-4">Exam Date Notice</td>
            <td className="py-2 px-4"><a href="https://pmsuryaghar.org.in/wp-content/uploads/2024/10/HaryanaJobs.in-RRB-Exam-Date-Notice.pdf" className="text-blue-500 hover:underline">Exam Date Notice</a></td>
          </tr>
          <tr>
            <td className="py-2 px-4">Important Notice</td>
            <td className="py-2 px-4"><a href="https://pmsuryaghar.org.in/wp-content/uploads/2024/07/HaryanaJobs.in-Important-Notice-for-CEN-01-2024-ALP.pdf" className="text-blue-500 hover:underline">Notice</a></td>
          </tr>
          <tr>
            <td className="py-2 px-4">Application Status/ Edit Zone</td>
            <td className="py-2 px-4"><a href="https://www.rrbapply.gov.in/#/auth/home" target="_blank" rel="noopener" className="text-blue-500 hover:underline">Login</a></td>
          </tr>
          <tr>
            <td className="py-2 px-4">Revised Vacancies</td>
            <td className="py-2 px-4"><a href="https://pmsuryaghar.org.in/wp-content/uploads/2024/07/RRB-ALP-2024-Revised-Vacancies.pdf" className="text-blue-500 hover:underline">Vacancy</a></td>
          </tr>
          <tr>
            <td className="py-2 px-4">Notification</td>
            <td className="py-2 px-4"><a href="https://pmsuryaghar.org.in/wp-content/uploads/2024/07/RRB-ALP-2024-Notification-CEN-01_2024.pdf" className="text-blue-500 hover:underline">Notification</a></td>
          </tr>
          <tr>
            <td className="py-2 px-4">Regional Websites</td>
            <td className="py-2 px-4"><a href="https://indianrailways.gov.in/railwayboard/view_section.jsp?lang=0&amp;id=0,7,1281" target="_blank" rel="noopener" className="text-blue-500 hover:underline">RRBs</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}