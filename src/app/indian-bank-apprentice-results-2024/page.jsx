export default function IndianBankApprenticeRecruitment() {
  // This component displays information about the Indian Bank Apprentice Recruitment 2024.  It includes key dates, fees, vacancy details, and qualifications.

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Indian Bank Apprentice Recruitment 2024</h1>

      <p className="mb-4">
        Indian Bank is pleased to announce the results for its Apprentice recruitment drive. This program offers 1500 apprenticeship positions under the Apprentices Act of 1961 for the financial year 2024-25. The written examination was conducted on September 28, 2024, and results were declared on November 21, 2024.  This opportunity provides valuable experience and training in the banking sector.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Key Highlights</h2>
        <ul className="list-disc list-inside">
          <li><strong>Positions Available:</strong> 1500 Apprentice positions</li>
          <li><strong>Application Deadline:</strong> July 31, 2024</li>
          <li><strong>Written Exam Date:</strong> September 28, 2024</li>
          <li><strong>Results Announced:</strong> November 21, 2024</li>
          <li><strong>Document Verification:</strong> November 28-30, 2024</li>
          <li><strong>Stipend:</strong> Rs. 12000-15000/- per month</li>
        </ul>
      </section>


      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Application Fees</h2>
        <table className="table-auto w-full mb-4">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Category</th>
              <th className="px-4 py-2 text-left">Fee</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Gen/ OBC/ EWS</td>
              <td className="border px-4 py-2">Rs. 500/-</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">SC/ ST/ PWD</td>
              <td className="border px-4 py-2">Rs. 0/-</td>
            </tr>
          </tbody>
        </table>
        <p>Payment Method: Online</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Vacancy Details and Eligibility</h2>
        <p className="mb-2"><strong>Age Limit:</strong> 20-28 years (as of July 1, 2024). Age relaxations apply as per regulations.</p>
        <table className="table-auto w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Post Name</th>
              <th className="px-4 py-2 text-left">Vacancies</th>
              <th className="px-4 py-2 text-left">Qualification</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Apprentice</td>
              <td className="border px-4 py-2">1500</td>
              <td className="border px-4 py-2">Graduate</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Selection Process</h2>
        <ol className="list-decimal list-inside">
          <li>Written Examination</li>
          <li>Document Verification</li>
          <li>Medical Examination</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Important Links</h2>
        <table className="table-auto w-full">
          <tbody>
            <tr>
              <td className="px-4 py-2 text-left">Result/ Merit List PDF</td>
              <td className="px-4 py-2"><a href="https://haryanajobs.org/wp-content/uploads/2024/11/Indian-Bank-Apprentice-Result-2024.pdf" target="_blank" rel="noopener" className="text-blue-500 underline">Result</a></td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-left">Notification PDF</td>
              <td className="px-4 py-2"><a href="https://haryanajobs.org/wp-content/uploads/2024/07/Indian-Bank-Apprentice-2024-Notification.pdf" target="_blank" rel="noopener" className="text-blue-500 underline">Download</a></td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-left">Official Website</td>
              <td className="px-4 py-2"><a href="https://www.indianbank.in/career/" target="_blank" rel="noopener" className="text-blue-500 underline">Indian Bank</a></td>
            </tr>
          </tbody>
        </table>
      </section>

      <p className="text-sm text-gray-500 mt-8">Keywords: Indian Bank, Apprentice, Recruitment, 2024, Results, Merit List,  Application, Vacancy, Jobs, Banking</p>
    </div>
  );
}