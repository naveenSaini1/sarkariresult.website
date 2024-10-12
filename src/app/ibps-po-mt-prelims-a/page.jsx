export default function IBPSRecruitmentInfo() {
  // This component displays information about the IBPS Probationary Officer/Management Trainee (PO/MT) recruitment process.
  // It includes details on eligibility, important dates, selection process, exam pattern, and vacancy information.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        IBPS Probationary Officer Recruitment 2024
      </h1>
      <p className="text-gray-600 mb-6">
        The Institute of Banking Personnel Selection (IBPS) has announced the
        recruitment of Probationary Officers/ Management Trainees (PO/MT) for
        the year 2024. This is a great opportunity for graduates seeking a
        career in the banking sector. 
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Key Highlights
      </h2>
      <ul className="list-disc text-gray-600 mb-6">
        <li>Total Vacancies: 4455</li>
        <li>Application Period: August 1 to August 28, 2024</li>
        <li>Prelims Exam Date: October 19 and 20, 2024</li>
        <li>Mains Exam Date: November 30, 2024</li>
        <li>Interview Dates: January/February 2025</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Eligibility</h2>
      <p className="text-gray-600 mb-4">
        Candidates must have a graduate degree in any discipline to be
        eligible. The age limit for the recruitment is between 20 and 30 years
        as of August 1, 2024. Age relaxations are available for reserved
        categories.
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Selection Process
      </h2>
      <ol className="list-decimal text-gray-600 mb-6">
        <li>Prelims Written Exam</li>
        <li>Mains Written Exam</li>
        <li>Interview</li>
        <li>Document Verification</li>
        <li>Medical Examination</li>
      </ol>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Exam Pattern
      </h2>
      <p className="text-gray-600 mb-4">
        The Prelims and Mains Exams are objective-type, computer-based exams.
        The detailed exam pattern is available on the IBPS website.
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Vacancies</h2>
      <table className="table-auto w-full text-gray-600 mb-6">
        <thead>
          <tr>
            <th className="px-4 py-2">Post Name</th>
            <th className="px-4 py-2">Vacancy</th>
            <th className="px-4 py-2">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">PO/MT</td>
            <td className="px-4 py-2">4455</td>
            <td className="px-4 py-2">Graduation in any discipline</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        How to Apply
      </h2>
      <ol className="list-decimal text-gray-600 mb-6">
        <li>
          Visit the official IBPS website: <a href="https://www.ibps.in/" target="_blank" rel="noopener" className="text-blue-500 underline">ibps.in</a>
        </li>
        <li>
          Click on the link for the PO/MT recruitment notification.
        </li>
        <li>
          Read the notification carefully and ensure your eligibility.
        </li>
        <li>
          Click on the "Apply Online" link.
        </li>
        <li>
          Register and fill out the online application form.
        </li>
        <li>
          Upload the required documents and pay the application fee.
        </li>
        <li>Submit your application form.
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Important Links
      </h2>
      <table className="table-auto w-full text-gray-600 mb-6">
        <thead>
          <tr>
            <th className="px-4 py-2">Link</th>
            <th className="px-4 py-2">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">
              <a href="https://ibpsonline.ibps.in/crppo14jul24/oecla_oct24/login.php?appid=7e686c37e1e6f343280900967154be60" target="_blank" rel="noopener" className="text-blue-500 underline">
                Admit Card
              </a>
            </td>
            <td className="px-4 py-2">
              Download your Admit Card for the Prelims Exam.
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">
              <a href="https://www.ibps.in/index.php/management-trainees-xiv/" target="_blank" rel="noopener" className="text-blue-500 underline">
                Admit Card
              </a>
            </td>
            <td className="px-4 py-2">
              Another link to download your Admit Card.
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">
              <a href="https://pmsuryaghar.org.in/wp-content/uploads/2024/08/IBPS-PO-2024-Notification.pdf" target="_blank" rel="noopener" className="text-blue-500 underline">
                Notification
              </a>
            </td>
            <td className="px-4 py-2">
              Download the official recruitment notification.
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">
              <a href="https://ibpsonline.ibps.in/crppo14jul24/" target="_blank" rel="noopener" className="text-blue-500 underline">
                Apply Online
              </a>
            </td>
            <td className="px-4 py-2">
              Direct link to the online application portal.
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">
              <a href="https://www.ibps.in/" target="_blank" rel="noopener" className="text-blue-500 underline">
                IBPS
              </a>
            </td>
            <td className="px-4 py-2">
              Official IBPS Website.
            </td>
          </tr>
        </tbody>
      </table>

      <p className="text-gray-600 mt-6">
        For more details, please visit the official IBPS website.
      </p>

      <p className="text-gray-600 mt-6">
        **Keywords:** IBPS, PO, Probationary Officer, Management Trainee,
        Recruitment, Banking, Exam, 2024, Online Application, Admit Card,
        Notification.
      </p>
    </div>
  );
}