export default function NTRORecruitment() {
  // This component displays recruitment information for NTRO Scientist 'B' Vacancy 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">NTRO Scientist ‘B’ Recruitment 2024</h1>
      <p className="text-gray-600 mb-4 text-center">
        The National Technical Research Organisation (NTRO) has announced an exciting opportunity for aspiring professionals to join their team as Scientists. 
        This recruitment drive is open to individuals who possess the required qualifications and experience.
      </p>

      <h2 className="text-2xl font-bold mb-4">Key Highlights</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>Post Name:</strong> NTRO Scientist ‘B’</li>
        <li><strong>Post Date:</strong> 11-10-2024</li>
        <li><strong>Total Vacancy:</strong> 75</li>
        <li><strong>Application Deadline:</strong> 08-11-2024 (05:30 PM)</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Brief Information</h2>
      <p className="text-gray-600 mb-4">
        The National Technical Research Organisation (NTRO) is seeking talented and motivated individuals to fill the Scientist ‘B’ Vacancy. 
        This is an excellent opportunity for professionals to contribute to the advancement of the organization.
      </p>

      <h2 className="text-2xl font-bold mb-4">Application Fee</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>For all other candidates: <strong>Rs. 250/-</strong></li>
        <li>For SC/ ST/ PwBD/ Female candidates: <strong>Nil</strong></li>
        <li>Payment Mode: <strong>Through online payment</strong></li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Important Dates</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Starting Date for Apply Online & Payment of Fee: <strong>10-10-2024 (10:00 AM)</strong></li>
        <li>Last Date for Apply Online & Payment of Fee: <strong>08-11-2024 (05:30 PM)</strong></li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Age Limit</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Upper Age Limit: <strong>Not exceeding 30 years</strong></li>
        <li>Age Relaxation is applicable as per rules.</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>
      <table className="table-auto w-full text-center mb-4">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2">Post Name</th>
            <th className="px-4 py-2">Total</th>
            <th className="px-4 py-2">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">Electronics & Communication</td>
            <td className="px-4 py-2">35</td>
            <td className="px-4 py-2">Degree (Engg) or PG (Relevant Discipline)</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Computer Science</td>
            <td className="px-4 py-2">30</td>
            <td className="px-4 py-2">Degree (Engg)</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Geo-Informatics and Remote Sensing</td>
            <td className="px-4 py-2">05</td>
            <td className="px-4 py-2">Degree (Engg) or PG (Relevant Discipline)</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Mathematics</td>
            <td className="px-4 py-2">05</td>
            <td className="px-4 py-2">Degree (Engg) or PG (Maths)</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mb-4">Important Links</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>
          <a href="https://recruit-ndl.nielit.gov.in/" target="_blank" rel="nofollow" className="text-blue-500 hover:underline">
            Apply Online
          </a>
        </li>
        <li>
          <a href="https://img.freejobalert.com/uploads/2024/10/Notification-NTRO-Scientist-B-Posts.pdf" target="_blank" rel="nofollow" className="text-blue-500 hover:underline">
            Notification
          </a>
        </li>
        <li>
          <a href="https://ntro.gov.in/welcome.do" target="_blank" rel="nofollow" className="text-blue-500 hover:underline">
            Official Website
          </a>
        </li>
      </ul>

      {/* SEO-friendly elements */}
      <p className="text-gray-600 mb-4">
        Interested candidates can read the full notification before applying online. This is a great opportunity for those seeking a career in research and development.
      </p>

      <div className="text-gray-600 mb-4">
        <strong>Keywords:</strong> NTRO, Scientist, Recruitment, Vacancy,  Application,  Electronics, Communication, Computer Science, Geo-Informatics, Remote Sensing, Mathematics
      </div>
    </div>
  );
}