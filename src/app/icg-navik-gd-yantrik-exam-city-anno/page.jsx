export default function CoastGuardRecruitment() {
  // This component displays information about the Indian Coast Guard (ICG) Navik (GD) and Yantrik recruitment for 2024-2025. 
  // It includes key details like application deadlines, eligibility criteria, selection process, and important links.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Indian Coast Guard Recruitment 2024-2025
      </h1>

      <p className="text-gray-600 mb-4">
        The Indian Coast Guard (ICG) has announced recruitment for the positions of
        Navik (General Duty) and Yantrik for the 2024-2025 batch. Interested
        candidates can apply online and check their exam city intimation on the
        official website. This recruitment offers exciting opportunities to
        serve in the Indian Coast Guard, a vital force responsible for
        safeguarding India's maritime interests.
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Highlights</h2>
      <ul className="list-disc text-gray-600 mb-4">
        <li>Recruitment Organization: Indian Coast Guard (ICG)</li>
        <li>Post Name: Navik (General Duty) and Yantrik</li>
        <li>Total Vacancies: 320</li>
        <li>Job Location: All India</li>
        <li>Official Website: joinindiancoastguard.cdac.in</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Important Dates</h2>
      <table className="table-auto w-full text-gray-600 mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left font-bold text-gray-800">
              Event
            </th>
            <th className="px-4 py-2 text-left font-bold text-gray-800">
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">Application Start Date</td>
            <td className="px-4 py-2">13 June 2024</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Application Last Date</td>
            <td className="px-4 py-2">10 July 2024</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Exam City Intimation</td>
            <td className="px-4 py-2">12 November 2024</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Exam Date</td>
            <td className="px-4 py-2">November 2024</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Application Fees</h2>
      <table className="table-auto w-full text-gray-600 mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left font-bold text-gray-800">
              Category
            </th>
            <th className="px-4 py-2 text-left font-bold text-gray-800">
              Fee
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">General/ OBC/ EWS</td>
            <td className="px-4 py-2">Rs. 300/-</td>
          </tr>
          <tr>
            <td className="px-4 py-2">SC/ ST</td>
            <td className="px-4 py-2">Rs. 0/-</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Vacancy Details and Eligibility Criteria
      </h2>

      <p className="text-gray-600 mb-4">
        <strong>Age Limit:</strong> The age limit for this recruitment is 18-22
        years. The candidate should have been born between 1 March 2003 and 28
        February 2007 (both dates inclusive). Age relaxation may be granted as
        per government rules.
      </p>

      <table className="table-auto w-full text-gray-600 mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left font-bold text-gray-800">
              Post Name
            </th>
            <th className="px-4 py-2 text-left font-bold text-gray-800">
              Vacancies
            </th>
            <th className="px-4 py-2 text-left font-bold text-gray-800">
              Qualification
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">Navik (GD)</td>
            <td className="px-4 py-2">260</td>
            <td className="px-4 py-2">12th Pass with Maths and Physics</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Yantrik</td>
            <td className="px-4 py-2">60</td>
            <td className="px-4 py-2">Diploma in Relevant Field</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Selection Process
      </h2>
      <p className="text-gray-600 mb-4">
        The selection process for this recruitment will be conducted in
        multiple stages:
      </p>
      <ul className="list-disc text-gray-600 mb-4">
        <li>Stage 1: Computer Based Written Exam (CBE)</li>
        <li>Stage 2: Physical Fitness and Adaptability Tests</li>
        <li>Stage 3: Document Verification</li>
        <li>Stage 4: Medical Examination</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Important Links</h2>
      <table className="table-auto w-full text-gray-600 mb-4">
        <tbody>
          <tr>
            <td className="px-4 py-2">
              Exam City/ Admit Card Link (Login Required)
            </td>
            <td className="px-4 py-2">
              <a
                href="https://cgept.cdac.in/icgreg/candidate/login"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener"
              >
                Login
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">Official Notification</td>
            <td className="px-4 py-2">
              <a
                href="https://haryanajobs.org/wp-content/uploads/2024/06/HaryanaJobs.in-ICG-Navik-GD-Yantrik-01_2025-Notification-PDF.pdf"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener"
              >
                Notification
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">Indian Coast Guard Official Website</td>
            <td className="px-4 py-2">
              <a
                href="https://joinindiancoastguard.cdac.in/cgept/"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener"
              >
                ICG
              </a>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="mt-8">
        <p className="text-gray-600 mb-4">
          Keywords: Indian Coast Guard, ICG, Navik, Yantrik, Recruitment,
          Exam, Application, Eligibility, Selection Process, Admit Card,
          Notification
        </p>
      </div>
    </div>
  );
}