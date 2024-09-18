export default function UttarakhandTETRecruitment() {
  // This component displays recruitment information for the Uttarakhand Teacher Eligibility Test (UKTET) 2024.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Uttarakhand Teacher Eligibility Test (UKTET) 2024</h1>

      <div className="mb-4">
        <p className="text-gray-600">
          The Uttarakhand Teacher Eligibility Test (UKTET) 2024 Notification was released on July 20, 2024. Online applications were accepted from July 23 to August 17, 2024.
        </p>
        <p className="text-gray-600">
          The UKTET 2024 exam will be held on October 24, 2024, in place of October 26, 2024. The new exam date is October 24, 2024.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Important Dates</h2>

      <ul className="list-disc text-gray-600">
        <li>Notification Release Date: July 20, 2024</li>
        <li>Application Period: July 23 to August 17, 2024</li>
        <li>Application Fee Deadline: August 19, 2024</li>
        <li>Application Correction Period: August 20 to August 22, 2024</li>
        <li>Exam Date: October 24, 2024</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Eligibility</h2>

      <div className="mb-4">
        <p className="text-gray-600">
          The UKTET exam is conducted in two levels: Level-1 (UKTET-I) for aspiring teachers for classes I-V and Level-II (UKTET-II) for candidates for classes VI-VIII.
        </p>
        <p className="text-gray-600">
          The qualification for UKTET-I is 12th class pass and a diploma in education (D.El.Ed/ D.Ed./ B.T.C).
        </p>
        <p className="text-gray-600">
          The education qualification for UKTET-II is a Graduation Pass and a Degree in Education (B.Ed./ B.El.Ed/ L.T./ B.A. B.Ed/ B.Sc. B.Ed/ B.Com. B.Ed).
        </p>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Exam Pattern</h2>

      <div className="mb-4">
        <p className="text-gray-600">
          The UKTET 2024 Exam pattern for the UKTET-I and UKTET-II is outlined below.
        </p>
        {/* You can use an image or table to display the exam pattern here */}
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Exam Date and Admit Card Link</h2>

      <div className="mb-4">
        <p className="text-gray-600">
          The UKTET 2024 Admit Card Download Direct link will be provided here.
        </p>
        <table className="table-auto w-full text-gray-600 mb-4">
          <thead>
            <tr>
              <th className="px-4 py-2">Document</th>
              <th className="px-4 py-2">Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2">Exam Date Notice</td>
              <td className="px-4 py-2">
                <a href="https://pmsuryaghar.org.in/wp-content/uploads/2024/09/UKTET-2024-Exam-Date-Notice.pdf" className="text-blue-500 hover:underline">Exam Date</a>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">Notification PDF</td>
              <td className="px-4 py-2">
                <a href="https://pmsuryaghar.org.in/wp-content/uploads/2024/07/UTET-2024-Notification-PDF.pdf" className="text-blue-500 hover:underline">Notification</a>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">Apply Online Link</td>
              <td className="px-4 py-2">
                <a href="https://ukutet.com/" target="_blank" rel="noopener" className="text-blue-500 hover:underline">Apply Portal</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">FAQs</h2>

      <div className="mb-4">
        <p className="text-gray-600">
          <strong>How to download the UKTET Admit Card 2024?</strong>
        </p>
        <p className="text-gray-600">
          Download the UKTET Admit Card from the website ukutet.com.
        </p>
        <p className="text-gray-600">
          <strong>What is the exam date of UKTET 2024?</strong>
        </p>
        <p className="text-gray-600">
          The UKTET 2024 exam will be held on October 24, 2024.
        </p>
      </div>
    </div>
  );
}