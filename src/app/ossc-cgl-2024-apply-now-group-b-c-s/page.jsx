export default function OSSCRecruitment() {
  // This component displays recruitment information for OSSC CGL (Group – B & C Specialist Posts) 2024.  It includes key details like application dates, eligibility criteria, vacancy information, and FAQs.  Social media links and irrelevant scripts have been removed.

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">OSSC CGL (Group – B &amp; C Specialist Posts) 2024 Recruitment</h1>

      <p className="mb-4 text-justify">
        The Odisha Staff Selection Commission (OSSC) has announced recruitment for Combined Graduate Level Exam (Group B &amp; C Specialist Posts).  This is a fantastic opportunity for eligible candidates seeking government employment in Odisha.  The application process is online, and interested individuals are encouraged to review the notification and apply.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Key Highlights</h2>
        <ul className="list-disc list-inside">
          <li><strong>Post Name:</strong> OSSC CGL (Group – B &amp; C Specialist Posts)</li>
          <li><strong>Total Vacancies:</strong> 173</li>
          <li><strong>Application Start Date:</strong> 29-11-2024</li>
          <li><strong>Application End Date:</strong> 31-12-2024</li>
          <li><strong>Minimum Age:</strong> 21 Years</li>
          <li><strong>Maximum Age:</strong> 38 Years (as on 01-01-2024)</li>
          <li><strong>Qualification:</strong> Any Degree/PG</li>
          <li><strong>Application Fee:</strong> Nil</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Important Dates</h2>
        <ul className="list-disc list-inside">
          <li>Starting Date for Online Registration: 29-11-2024</li>
          <li>Last Date for Online Registration: 28-12-2024</li>
          <li>Starting Date for Submission of Online Application: 29-11-2024</li>
          <li>Last Date for Submission of Online Application: 31-12-2024</li>
          <li>Date of Editing of Online Application: 29-11-2024 to 02-01-2025</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Vacancy Details</h2>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">Post Name</th>
              <th className="border border-gray-300 px-4 py-2 text-center">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-300">
              <td className="border border-gray-300 px-4 py-2">Assistant Statistical Officer</td>
              <td className="border border-gray-300 px-4 py-2 text-center">169</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="border border-gray-300 px-4 py-2">Statistical Assistant</td>
              <td className="border border-gray-300 px-4 py-2 text-center">04</td>
            </tr>
          </tbody>
        </table>
      </section>


      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Important Links</h2>
        <ul className="list-disc list-inside">
          <li><span className="font-bold">Notification:</span> <a href="https://img.freejobalert.com/uploads/2024/11/Notification-OSSC-CGL-Exam-2024.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Click Here</a></li>
          <li><span className="font-bold">Official Website:</span> <a href="https://www.ossc.gov.in/Public/OSSC/Default.aspx" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Click Here</a></li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">FAQs</h2>
        <ul className="list-disc list-inside">
          <li><strong>What is the starting date to apply online?</strong> 29-11-2024</li>
          <li><strong>What is the last date to apply online?</strong> 31-12-2024</li>
          <li><strong>What is the Eligibility to apply?</strong> Any Degree/PG</li>
          <li><strong>What is the Minimum Age Limit?</strong> 21 Years</li>
          <li><strong>On what basis is the age limit calculated?</strong> Age will be calculated as on 01-01-2024.</li>
          <li><strong>How many vacancies are there?</strong> Total 173 Vacancies.</li>
          <li><strong>How much fee to pay to apply?</strong> Nil</li>
        </ul>
      </section>

      <p className="text-sm text-gray-500">Keywords: OSSC, CGL, Group B, Group C, Specialist Posts, Odisha, Recruitment, Government Jobs, Application, Online Form, Vacancy</p>
    </div>
  );
}