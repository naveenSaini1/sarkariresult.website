export default function ECILApprenticeRecruitment() {
  // This component displays recruitment information for the ECIL Apprentice 2024 program.  It includes key details like application deadlines, eligibility criteria, vacancy information, and important links.

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">ECIL Apprentice Recruitment 2024</h1>
      <p className="text-lg mb-4">
        Electronic Corporation of India Limited (ECIL), Hyderabad is recruiting for Graduate Engineer Apprentice (GEA) & Diploma Apprentice (TA) positions.  This is a fantastic opportunity for engineering graduates and diploma holders seeking apprenticeship programs.
      </p>

      <section className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Key Highlights</h2>
        <ul className="list-disc list-inside">
          <li>Post Name: ECIL Apprentice</li>
          <li>Total Vacancies: 187</li>
          <li>Application Deadline: 01-12-2024</li>
          <li>Age Limit (as on 31-12-2024): Maximum 25 Years</li>
          <li>Qualification: Diploma/B.E/B.Tech (Relevant Engg)</li>
          <li>Application Fee: No Fee</li>
        </ul>
      </section>


      <section className="mb-4">
        <h2 className="text-xl font-bold mb-2">Post Details</h2>
        <p className="mb-2">
          <span className="font-bold text-green-600">Name of the Post:</span> ECIL Apprentice Online Form 2024
        </p>
        <p className="mb-2 text-justify">
          <span className="font-bold text-green-600">Post Date:</span> 21-11-2024
        </p>
        <p className="mb-2 text-justify">
          <span className="font-bold text-green-600">Total Vacancy:</span> 187
        </p>
        <p className="mb-2 text-justify">
          <span className="font-bold text-red-600">Brief Information:</span> Electronic Corporation Of India Limited (ECIL), Hyderabad invites applications for Graduate Engineer Apprentice (GEA) & Diploma Apprentice (TA) vacancies.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-bold mb-2">Important Dates</h2>
        <ul className="list-disc list-inside">
          <li>Date of Hosting Advt. on ECIL website: 20-11-2024 (10:30 Hrs)</li>
          <li>Last date for Submitting Online Applications: 01-12-2024 (23:59 Hrs)</li>
          <li>Date of Provisional Selection list display on ECIL Website: 04-12-2024</li>
          <li>Document Verification Date: 09-12-2024 to 11-12-2024</li>
          <li>Starting Date for Apprenticeship Training: 01-01-2025</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-bold mb-2">Age Limit (as on 31-12-2024)</h2>
        <ul className="list-disc list-inside">
          <li>Maximum Age: 25 Years</li>
          <li>Age relaxation is applicable as per rules.</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-bold mb-2">Qualification</h2>
        <ul className="list-disc list-inside">
          <li>Candidates Should Possess Diploma/B.E/B.Tech (Relevant Engg).</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-bold mb-2">Vacancy Details</h2>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left px-4 py-2 font-medium">Post Name</th>
              <th className="text-left px-4 py-2 font-medium">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="px-4 py-2">Graduate Engineer Apprentices (GEA)</td>
              <td className="px-4 py-2">150</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-4 py-2">Diploma Apprentices (TA)</td>
              <td className="px-4 py-2">37</td>
            </tr>
          </tbody>
        </table>
        <p className="text-center text-blue-600">Interested Candidates Can Read the Full Notification Before Apply Online</p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-bold mb-2">Important Links</h2>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="text-left px-4 py-2"><span className="font-bold text-green-600">Apply Online</span></td>
              <td className="text-left px-4 py-2"><a href="https://nats.education.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Click Here</a></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="text-left px-4 py-2"><span className="font-bold text-green-600">Notification</span></td>
              <td className="text-left px-4 py-2"><a href="https://img.freejobalert.com/uploads/2024/11/Notification-ECIL-Apprentice-Posts.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Click Here</a></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="text-left px-4 py-2"><span className="font-bold text-green-600">Official Website</span></td>
              <td className="text-left px-4 py-2"><a href="https://www.ecil.co.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Click Here</a></td>
            </tr>
          </tbody>
        </table>
      </section>


      <section className="mb-4">
        <h2 className="text-xl font-bold mb-2">FAQs</h2>
        <div className="mb-2">
          <p className="font-bold">1. What is the last date to apply Online for ECIL Apprentice 2024?</p>
          <p className="ml-4">Ans: Last Date for apply online is 01-12-2024.</p>
        </div>
        <div className="mb-2">
          <p className="font-bold">2. What is the Eligibility to apply for ECIL Apprentice 2024?</p>
          <p className="ml-4">Ans: Diploma/B.E/B.Tech (Relevant Engg).</p>
        </div>
        <div className="mb-2">
          <p className="font-bold">3. How many vacancies are being recruited by ECIL Apprentice 2024?</p>
          <p className="ml-4">Ans: Total 187 Vacancies.</p>
        </div>
        <div className="mb-2">
          <p className="font-bold">4. What is the Maximum Age limit for ECIL Apprentice 2024?</p>
          <p className="ml-4">Ans: 25 Years.</p>
        </div>
        <div className="mb-2">
          <p className="font-bold">5. How much fee to pay to apply for ECIL Apprentice 2024?</p>
          <p className="ml-4">Ans: There is No Fee.</p>
        </div>
      </section>

      <p className="text-sm text-gray-500">Keywords: ECIL, Apprentice, Recruitment, 2024, Graduate Engineer Apprentice, Diploma Apprentice,  Application, Jobs, India</p>
    </div>
  );
}