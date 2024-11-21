export default function GMRDSRecruitment() {
  // This component displays recruitment information for GMRDS Various Vacancy 2024.  It includes details about the positions, qualifications, important dates, and application process.  The information is structured for SEO and uses Tailwind CSS for styling.

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">GMRDS Various Vacancy 2024</h1>

      <p className="text-lg mb-4">
        The Gujarat Mineral Research &amp; Development Society (GMRDS) is recruiting for various positions on a contract basis.  This is a great opportunity for candidates with relevant qualifications in Mining Engineering, Geology, or Civil Engineering.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Key Highlights</h2>
        <ul className="list-disc list-inside">
          <li>Post Date: 21-11-2024</li>
          <li>Total Vacancies: 133</li>
          <li>Last Date to Apply: 05-12-2024 (10:30 to 18:10 hrs)</li>
          <li>Maximum Age Limit: 35 Years</li>
          <li>Application Fee: No Fee</li>
        </ul>
      </section>


      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Post Details</h2>
        <p className="text-justify mb-4">
          GMRDS has announced the recruitment of Royalty Inspector, Mines Supervisor &amp; Surveyor vacancies on a Contract Basis.  Interested and eligible candidates can apply.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Vacancy Details</h2>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">Post Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Total</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Qualification</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-300">
              <td className="border border-gray-300 px-4 py-2">Royalty Inspector</td>
              <td className="border border-gray-300 px-4 py-2">31</td>
              <td className="border border-gray-300 px-4 py-2">B.E/ B-Tech (Mining Engineering) / M.Sc (Geology or Applied Geology)</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="border border-gray-300 px-4 py-2">Mines Supervisor</td>
              <td className="border border-gray-300 px-4 py-2">70</td>
              <td className="border border-gray-300 px-4 py-2">B.Sc Geology/Applied Geology or Diploma/ BE/B.tech (Mining Engineering)</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="border border-gray-300 px-4 py-2">Surveyor</td>
              <td className="border border-gray-300 px-4 py-2">32</td>
              <td className="border border-gray-300 px-4 py-2">ITI (Surveyor)/ Diploma (Civil Engineering)</td>
            </tr>
          </tbody>
        </table>
        <p className="text-blue-500 text-center mt-4">Interested Candidates Can Read the Full Notification Before Apply</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Important Links</h2>
        <ul className="list-inside list-disc">
          <li>
            <a href="https://img.freejobalert.com/uploads/2024/11/Notification-GMRDS-Various-Vacancy-Posts.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
              Notification
            </a>
          </li>
          <li>
            <a href="https://gmrds.gujarat.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
              Official Website
            </a>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">FAQs</h2>
        <div>
            <p><b>1. What is the last date to apply for GMRDS Various Vacancy 2024?</b></p>
            <p><b>Ans:</b> Last Date for apply is 05-12-2024.</p>
            <p><b>2. What is the Eligibility to apply for GMRDS Various Vacancy 2024?</b></p>
            <p><b>Ans:</b> ITI/ Diploma/ Degree/ M.Sc(Relevant Discipline).</p>
            <p><b>3. How many vacancies are being recruited by GMRDS Various Vacancy 2024?</b></p>
            <p><b>Ans:</b> Total 133 Vacancies.</p>
            <p><b>4. What is the Maximum Age limit for GMRDS Various Vacancy 2024?</b></p>
            <p><b>Ans:</b> 35 Years.</p>
            <p><b>5. How much fee to pay to apply for GMRDS Various Vacancy 2024?</b></p>
            <p><b>Ans:</b> There is No Fee.</p>
          </div>
      </section>

      <p className="text-sm text-gray-500">Keywords: GMRDS, Gujarat Mineral Research &amp; Development Society, Recruitment, Jobs, Vacancy, Royalty Inspector, Mines Supervisor, Surveyor, 2024</p>
    </div>
  );
}