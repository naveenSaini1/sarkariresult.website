export default function JipmerRecruitment() {
  // This component displays recruitment information for JIPMER,
  // including details about the organization, important dates,
  // application fees, vacancy details, and selection process.

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">JIPMER Recruitment 2024</h1>
      <p className="text-lg mb-4">
        The Jawaharlal Institute of Postgraduate Medical Education and Research
        (JIPMER) in Puducherry has announced recruitment for various positions.
        This is a great opportunity for individuals seeking to contribute to the
        healthcare sector and join a renowned institute.
      </p>

      <h2 className="text-2xl font-bold mb-4">Key Highlights</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Organization: Jawaharlal Institute of Postgraduate Medical Education and Research (JIPMER)</li>
        <li>Location: Puducherry</li>
        <li>Positions: Group B and C (Various)</li>
        <li>Total Vacancies: 209</li>
        <li>Application Period: July 19th to August 19th, 2024</li>
        <li>Exam Date: September 14th, 2024</li>
        <li>Result Date: October 16th, 2024</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Application Fees</h2>
      <p className="text-lg mb-4">
        The application fee is Rs. 1500/- for General, OBC, and EWS
        candidates. The fee for SC and ST candidates is Rs. 1200/-.
        Persons with Disabilities (PWD) candidates are exempt from the
        application fee. The fee must be paid online.
      </p>

      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>
      <table className="table-auto w-full text-left mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Position</th>
            <th className="px-4 py-2">Vacancies</th>
            <th className="px-4 py-2">Qualifications</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Various Posts (Group B, C)</td>
            <td className="px-4 py-2">209</td>
            <td className="px-4 py-2">
              Please refer to the official notification for detailed
              qualifications.
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mb-4">Selection Process</h2>
      <p className="text-lg mb-4">
        The selection process for JIPMER recruitment consists of the
        following stages:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Written Exam</li>
        <li>Document Verification</li>
        <li>Medical Examination</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Important Links</h2>
      <table className="table-auto w-full text-left mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Document</th>
            <th className="px-4 py-2">Link</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Result Notice</td>
            <td className="px-4 py-2">
              <a
                href="https://pmsuryaghar.org.in/wp-content/uploads/2024/10/JIPMER-Group-B-C-Posts-Result-Notice-16-Oct-2024.pdf"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Notice
              </a>
            </td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Result Link</td>
            <td className="px-4 py-2">
              <a
                href="https://jipmer.edu.in/announcement/result-computer-based-test-various-group-b-c-posts-jipmer-puducherry-held-14092024"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Result
              </a>
            </td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Notification</td>
            <td className="px-4 py-2">
              <a
                href="https://pmsuryaghar.org.in/wp-content/uploads/2024/07/JIPMER-Group-B-C-Recruitment-2024-Notification.pdf"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Notification
              </a>
            </td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Apply Portal</td>
            <td className="px-4 py-2">
              <a
                href="https://cdn.digialm.com/EForms/configuredHtml/827/89979/Registration.html"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply Portal
              </a>
            </td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">JIPMER Website</td>
            <td className="px-4 py-2">
              <a
                href="https://jipmer.edu.in/announcement/jobs"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                JIPMER
              </a>
            </td>
          </tr>
        </tbody>
      </table>

      <p className="text-lg mb-4">
        For more information about the JIPMER recruitment 2024, please visit
        the official website.
      </p>

      <p className="text-lg mt-8">
        **Keywords:** JIPMER Recruitment, JIPMER Jobs, JIPMER Vacancies,
        JIPMER Group B, JIPMER Group C, Healthcare Jobs, Puducherry Jobs,
        Government Jobs, JIPMER Notification
      </p>
    </div>
  );
}