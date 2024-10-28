export default function JEEInformation() {
  // This component displays detailed information about the JEE Mains entrance exam, including important dates, eligibility criteria, and application details.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">JEE Mains Entrance Exam</h1>
      <p className="text-gray-600 mb-4">
        The Joint Entrance Examination (JEE) Mains is a national-level entrance
        examination for admission to various undergraduate engineering programs in
        India. This component provides comprehensive information about the JEE
        Mains entrance exam, including key dates, eligibility criteria, application
        details, and exam pattern.
      </p>
      <h2 className="text-2xl font-bold mb-4">Key Highlights</h2>
      <ul className="list-disc text-gray-700 mb-4 pl-6">
        <li>The National Testing Agency (NTA) administers the JEE Mains.</li>
        <li>The exam is conducted twice a year, in January and April.</li>
        <li>The JEE Mains score is used for admission to various engineering
          colleges across India, including the prestigious Indian Institutes of
          Technology (IITs).</li>
        <li>Candidates must meet the eligibility criteria to apply for the JEE
          Mains.</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Important Dates</h2>
      <table className="table-auto w-full text-gray-700 mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2 font-medium text-left">Event/ Date</th>
            <th className="px-4 py-2 font-medium text-left">Session-I</th>
            <th className="px-4 py-2 font-medium text-left">Session-II</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">Notification Date</td>
            <td className="px-4 py-2">28 October 2024</td>
            <td className="px-4 py-2">31 January 2025</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Apply Online Start Date</td>
            <td className="px-4 py-2">28 October 2024</td>
            <td className="px-4 py-2">31 January 2025</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Apply Online Last Date</td>
            <td className="px-4 py-2">22 November 2024</td>
            <td className="px-4 py-2">24 February 2025</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Exam City Release Date</td>
            <td className="px-4 py-2">1st Week of January 2025</td>
            <td className="px-4 py-2">2nd Week of March 2025</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Admit Card Release Date</td>
            <td className="px-4 py-2">3 Days Before the Exam</td>
            <td className="px-4 py-2">3 Days Before Exam</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Exam Date</td>
            <td className="px-4 py-2">22- 31 January 2025</td>
            <td className="px-4 py-2">1-8 April 2025</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Result Date</td>
            <td className="px-4 py-2">12 February 2025</td>
            <td className="px-4 py-2">27 April 2025</td>
          </tr>
        </tbody>
      </table>
      <h2 className="text-2xl font-bold mb-4">Application Fee</h2>
      <p className="text-gray-600 mb-4">
        The application fee for JEE Mains 2025 is as follows:
      </p>
      {/* <img
        className="w-full max-w-lg rounded-lg"
        src="https://haryanajobs.in/wp-content/uploads/2024/10/NTA-JEE-Mains-2025-Application-Fee-Details.jpg"
        alt="JEE Mains Application Fee Details"
      /> */}
      <h2 className="text-2xl font-bold mb-4">Eligibility Criteria</h2>
      <ul className="list-disc text-gray-700 mb-4 pl-6">
        <li>
          <strong>For B.E/ B.Tech:</strong> Passed qualifying examination with
          Physics and Mathematics as compulsory subjects along with one of the
          Chemistry/ Biotechnology/ Biology/ Technical Vocational subjects.
        </li>
        <li>
          <strong>For B.Arch:</strong> 12th Pass with Mathematics, Physics,
          Chemistry
        </li>
        <li>
          <strong>For B.Planning:</strong> 12th Pass with Mathematics
        </li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Exam Pattern</h2>
      {/* <img
        className="w-full max-w-lg rounded-lg"
        src="https://haryanajobs.in/wp-content/uploads/2024/10/NTA-JEE-Mains-2025-Exam-Pattern.jpg"
        alt="JEE Mains Exam Pattern"
      /> */}
      <h2 className="text-2xl font-bold mb-4">Notification and Apply Link</h2>
      <table className="table-auto w-full text-gray-700 mb-4">
        <tbody>
          <tr>
            <td className="px-4 py-2">JEE Mains 2025 Notice</td>
            <td className="px-4 py-2">
              <a
                href="https://haryanajobs.org/wp-content/uploads/2024/10/NTA-JEE-Mains-2025-Notice.pdf"
                target="_blank"
                rel="noopener"
                className="text-blue-500 underline"
              >
                Notice
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">JEE Mains 2025 Notification</td>
            <td className="px-4 py-2">
              <a
                href="https://haryanajobs.org/wp-content/uploads/2024/10/JEE-Mains-2025-Notificaiton.pdf"
                target="_blank"
                rel="noopener"
                className="text-blue-500 underline"
              >
                Notification
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">JEE Mains 2025 Online Form/ Registration</td>
            <td className="px-4 py-2">
              <a
                href="https://jeemain.nta.nic.in/"
                target="_blank"
                rel="noopener"
                className="text-blue-500 underline"
              >
                Apply Online
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">JEE Mains 2025 Syllaubs PDF</td>
            <td className="px-4 py-2">
              <a
                href="https://haryanajobs.org/wp-content/uploads/2024/10/NTA-JEE-Mains-2025-Syllabus.pdf"
                target="_blank"
                rel="noopener"
                className="text-blue-500 underline"
              >
                Syllabus
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">JEE Mains 2025 Official Website</td>
            <td className="px-4 py-2">
              <a
                href="https://jeemain.nta.nic.in/"
                target="_blank"
                rel="noopener"
                className="text-blue-500 underline"
              >
                JEE Mains
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <h2 className="text-2xl font-bold mb-4">Keywords</h2>
      <p className="text-gray-600 mb-4">
        JEE Mains, Engineering Entrance Exam, NTA, IIT, JEE Advanced,
        Undergraduate Engineering, Application Form, Eligibility Criteria, Exam
        Pattern, Important Dates
      </p>
    </div>
  );
}