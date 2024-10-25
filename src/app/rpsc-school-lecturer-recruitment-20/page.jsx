export default function RajasthanSchoolLecturerRecruitment() {
  // This component displays information about the Rajasthan Public Service Commission (RPSC) School Lecturer recruitment for 2024.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Rajasthan School Lecturer Recruitment 2024
      </h1>
      <p className="text-gray-600 mb-6">
        The Rajasthan Public Service Commission (RPSC) has announced the recruitment of
        School Lecturers in the Education Department of the Rajasthan government.
        This is a great opportunity for qualified individuals to contribute to the
        educational landscape of Rajasthan.
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Highlights</h2>
      <ul className="list-disc text-gray-600 mb-6">
        <li>Total Vacancies: 2202</li>
        <li>Application Period: November 5, 2024 to December 4, 2024</li>
        <li>
          Eligibility: Post Graduate (PG) in the Related Subject + B.Ed (Degree in
          Education)
        </li>
        <li>Age Limit: 21-40 Years</li>
        <li>Selection Process: Written Exam, Document Verification, Medical Exam</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Application Fee
      </h2>
      <table className="table-auto w-full text-gray-600 mb-6">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left font-bold">Category</th>
            <th className="px-4 py-2 text-left font-bold">Application Fee</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">General, EWS, OBC</td>
            <td className="px-4 py-2">Rs. 600/-</td>
          </tr>
          <tr>
            <td className="px-4 py-2">SC, ST, PWD</td>
            <td className="px-4 py-2">Rs. 400/-</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Mode of Payment</td>
            <td className="px-4 py-2">Online</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Important Dates
      </h2>
      <table className="table-auto w-full text-gray-600 mb-6">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left font-bold">Event</th>
            <th className="px-4 py-2 text-left font-bold">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">Notification Release Date</td>
            <td className="px-4 py-2">October 25, 2024</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Application Start Date</td>
            <td className="px-4 py-2">November 5, 2024</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Application Last Date</td>
            <td className="px-4 py-2">December 4, 2024</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Exam Date</td>
            <td className="px-4 py-2">To be Announced</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Vacancy Details</h2>
      <table className="table-auto w-full text-gray-600 mb-6">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left font-bold">Post Name</th>
            <th className="px-4 py-2 text-left font-bold">Vacancies</th>
            <th className="px-4 py-2 text-left font-bold">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">School Lecturer</td>
            <td className="px-4 py-2">2202</td>
            <td className="px-4 py-2">
              Post Graduate (PG) in the Related Subject + B.Ed (Degree in
              Education)
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Selection Process
      </h2>
      <ol className="list-decimal text-gray-600 mb-6">
        <li>Written Examination</li>
        <li>Document Verification</li>
        <li>Medical Examination</li>
      </ol>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Notification and Application Link
      </h2>
      <table className="table-auto w-full text-gray-600 mb-6">
        <tbody>
          <tr>
            <td className="px-4 py-2">
              RPSC School Lecturer Recruitment 2024 Notification
            </td>
            <td className="px-4 py-2">
              <a
                href="https://pmsuryaghar.org.in/wp-content/uploads/2024/10/RPSC-School-Lecturer-Recruitment-2024-Notification-PDF.pdf"
                className="text-blue-500 hover:underline"
              >
                Download Notification
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">RPSC School Lecturer Online Form</td>
            <td className="px-4 py-2">
              <a
                href="https://sso.rajasthan.gov.in/"
                target="_blank"
                rel="noopener"
                className="text-blue-500 hover:underline"
              >
                Apply Online
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">RPSC Official Website</td>
            <td className="px-4 py-2">
              <a
                href="https://rpsc.rajasthan.gov.in/"
                target="_blank"
                rel="noopener"
                className="text-blue-500 hover:underline"
              >
                Visit Website
              </a>
            </td>
          </tr>
        </tbody>
      </table>

      <p className="text-gray-600 mt-6">
        Keywords: RPSC, Rajasthan Public Service Commission, School Lecturer,
        Recruitment, Education Department, Rajasthan, Government Jobs,
        Lecturer Vacancy, Apply Online
      </p>
    </div>
  );
}