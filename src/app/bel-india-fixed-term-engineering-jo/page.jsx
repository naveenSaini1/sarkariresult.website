export default function BELRecruitment() {
  // Summary: This component displays recruitment information for Bharat Electronics Limited (BEL)'s Fixed Tenure Engineer positions.  It includes key details such as application deadlines, eligibility criteria, salary, and application process.

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">BEL India Recruitment 2024 for Fixed Tenure Engineers</h1>
      <p className="text-lg mb-4">Bharat Electronics Limited (BEL), a Government of India undertaking, is seeking talented engineers for Fixed Tenure positions.  This is an excellent opportunity to contribute to a leading PSU and advance your career.</p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Key Highlights</h2>
        <ul className="list-disc list-inside">
          <li><strong>Organization:</strong> Bharat Electronics Limited (BEL)</li>
          <li><strong>Position:</strong> Fixed Tenure Engineer</li>
          <li><strong>Vacancies:</strong> 229</li>
          <li><strong>Salary:</strong> Rs. 12 Lac CTC per Year</li>
          <li><strong>Location:</strong> All India</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Important Dates</h2>
        <ul className="list-disc list-inside">
          <li>Application Start Date: 20.11.2024</li>
          <li>Application Deadline: 10.12.2024</li>
          <li>Exam Date: To be announced</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Application Fee</h2>
        <ul className="list-disc list-inside">
          <li>General, OBC, EWS: ₹ 472/-</li>
          <li>SC/ST/PWD: ₹ 0/-</li>
          <li>Payment Mode: Online (SBI Collect)</li>
        </ul>
      </section>


      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Vacancy Details</h2>
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left">Position</th>
              <th className="px-4 py-2 text-left">Vacancies</th>
              <th className="px-4 py-2 text-left">Qualification</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border">Fixed Tenure Engineer</td>
              <td className="px-4 py-2 border">229</td>
              <td className="px-4 py-2 border">B.E./B.Tech/B.Sc. Engg. (4 Years) in Related Field</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Eligibility and Qualifications</h2>
        <p className="mb-2">Age Limit: 18-28 years (as of 1.11.2024). Age relaxation as per rules.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Selection Process</h2>
        <ul className="list-disc list-inside">
          <li>Written Test: 85% weightage</li>
          <li>Interview: 15% weightage</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">How to Apply</h2>
        <ol className="list-decimal list-inside">
          <li>Check eligibility criteria in the official notification.</li>
          <li>Visit the BEL India careers website to apply online.</li>
          <li>Complete the online application form.</li>
          <li>Upload necessary documents.</li>
          <li>Pay the application fee.</li>
          <li>Print your application form for your records.</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Important Links</h2>
        <table className="table-auto w-full border-collapse">
          <tbody>
            <tr>
              <td className="px-4 py-2 text-left">Notification</td>
              <td className="px-4 py-2 text-left"><a href="https://bel-india.in/wp-content/uploads/2024/11/FTE-Adv-2024-25-English.pdf" target="_blank" rel="noopener" className="text-blue-500 underline">Notification PDF</a></td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-left">Apply Online</td>
              <td className="px-4 py-2 text-left"><a href="https://jobapply.in/BEL2024BNGEngineerFTE/Default.aspx" target="_blank" rel="noopener" className="text-blue-500 underline">Apply Online</a></td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-left">Fee Payment</td>
              <td className="px-4 py-2 text-left"><a href="https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?corpID=14842" target="_blank" rel="noopener" className="text-blue-500 underline">Fee Payment</a></td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-left">BEL India Website</td>
              <td className="px-4 py-2 text-left"><a href="https://bel-india.in/job-notifications/" target="_blank" rel="noopener" className="text-blue-500 underline">BEL India</a></td>
            </tr>
          </tbody>
        </table>
      </section>

      <p className="text-sm text-gray-600 mt-8">Keywords: BEL, Bharat Electronics Limited, Recruitment, Jobs, Engineer, Fixed Tenure, Application, India, PSU</p>
    </div>
  );
}