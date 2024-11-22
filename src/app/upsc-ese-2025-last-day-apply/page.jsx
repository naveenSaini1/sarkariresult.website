export default function UPSCRecruitment() {
  // Summary of recruitment information for the UPSC Engineering Services Examination (ESE) 2025, including important dates, application fees, and vacancy details.  This component provides a concise and SEO-friendly overview of the recruitment opportunity.

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">UPSC Engineering Services (ESE) 2025</h1>
      <p className="mb-4">
        The Union Public Service Commission (UPSC) has announced the Engineering Services Examination (ESE) 2025, including the Indian Railway Management Service (IRMS).  This is a significant opportunity for engineering graduates seeking a career in public service.  The application process is now open.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Key Highlights</h2>
        <ul className="list-disc list-inside">
          <li>Open for Engineering Graduates</li>
          <li>Includes Indian Railway Management Service (IRMS)</li>
          <li>Application Deadline: November 22, 2024</li>
          <li>Preliminary Exam: February 9, 2025</li>
          <li>Total Vacancies: 457</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Application Fee</h2>
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Fee</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-2">General/ OBC/ EWS</td>
              <td className="px-4 py-2">Rs. 200/-</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">SC/ ST/ PwD/ Female</td>
              <td className="px-4 py-2">Rs. 0/-</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">Mode of Payment</td>
              <td className="px-4 py-2">Online</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Important Dates</h2>
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">Event</th>
              <th className="px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-2">Apply Online Start</td>
              <td className="px-4 py-2">October 18, 2024</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">Apply Last Date</td>
              <td className="px-4 py-2">November 22, 2024, up to 06:00 pm</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">Form Correction Window</td>
              <td className="px-4 py-2">November 23-29, 2024</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">Prelims Exam Date</td>
              <td className="px-4 py-2">February 9, 2025</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Vacancy Details</h2>
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">Exam Name</th>
              <th className="px-4 py-2">Vacancy</th>
              <th className="px-4 py-2">Qualification</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-2">Engineering Services (Including IRMS)</td>
              <td className="px-4 py-2">457</td>
              <td className="px-4 py-2">Degree in Engineering (B.Tech/ B.E.)</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Important Links</h2>
        <ul className="list-disc list-inside">
          <li>
            <a
              href="https://pmsuryaghar.org.in/wp-content/uploads/2024/10/UPSC-Engg-Services-2025-Reopen-Notice-18-Oct-2024.pdf"
              target="_blank"
              rel="noopener"
              className="text-blue-500 underline"
            >
              Reopen Notice and Revised Vacancy Details
            </a>
          </li>
          <li>
            <a
              href="https://pmsuryaghar.org.in/wp-content/uploads/2024/09/UPSC-ESE-2025-Notification.pdf"
              target="_blank"
              rel="noopener"
              className="text-blue-500 underline"
            >
              Notification PDF
            </a>
          </li>
          <li>
            <a
              href="https://upsconline.nic.in/upsc/OTRP/index.php"
              target="_blank"
              rel="noopener"
              className="text-blue-500 underline"
            >
              Apply Online
            </a>
          </li>
          <li>
            <a
              href="https://upsc.gov.in/"
              target="_blank"
              rel="noopener"
              className="text-blue-500 underline"
            >
              UPSC Official Website
            </a>
          </li>
        </ul>
      </section>

      <p className="text-gray-600 text-sm">Keywords: UPSC, ESE, Engineering Services Examination, IRMS, Indian Railway Management Service, 2025, Recruitment, Jobs, Application, Notification</p>
    </div>
  );
}