export default function RecruitmentInformation() {
  // This component displays recruitment information for the UIIC Administrative Officer (Scale I) position. 
  // It includes details about the post, application process, eligibility criteria, and vacancy details.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">UIIC Administrative Officer (Scale I) Recruitment 2024</h1>
      <p className="text-gray-600 text-center mb-6">
        United India Insurance Company Limited (UIIC) is inviting applications for the recruitment of Administrative Officer (Scale I) - Specialist Vacancy. 
        Interested and eligible candidates can apply online.
      </p>
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Key Highlights</h2>
        <ul className="list-disc pl-6">
          <li><strong>Post Name:</strong> UIIC Administrative Officer (Scale I) – Specialist</li>
          <li><strong>Total Vacancy:</strong> 200</li>
          <li><strong>Application Start Date:</strong> 15-10-2024</li>
          <li><strong>Application End Date:</strong> 05-11-2024</li>
          <li><strong>Minimum Age:</strong> 21 Years</li>
          <li><strong>Maximum Age:</strong> 30 Years</li>
        </ul>
      </div>
      <h2 className="text-xl font-bold mb-2">Application Fee</h2>
      <ul className="list-disc pl-6">
        <li><strong>All Applicants (except SC/ST/PwBD and Permanent Employees of PSGI COMPANIES):</strong> Rs. 1000/- (Application Fee including service charges) + GST</li>
        <li><strong>SC/ST/Persons with Benchmark Disability (PwBD), Permanent Employees of PSGI COMPANIES:</strong> Rs. 250/- (service charges only) + GST</li>
        <li><strong>Payment Mode:</strong> Online through Debit Card (RuPay/Visa/MasterCard/Maestro), Credit Card, Internet Banking, IMPS, Cash Cards/ Mobile Wallets</li>
      </ul>
      <h2 className="text-xl font-bold mb-2">Important Dates</h2>
      <ul className="list-disc pl-6">
        <li><strong>Starting Date for Apply Online:</strong> 15-10-2024</li>
        <li><strong>Last Date for Apply Online &amp; Payment of Fee:</strong> 05-11-2024</li>
        <li><strong>Date for Downloading of Online Exam Call Letter:</strong> 10 days prior to the actual date of Online Test (Tentative)</li>
      </ul>
      <h2 className="text-xl font-bold mb-2">Age Limit (as on 30-09-2024)</h2>
      <ul className="list-disc pl-6">
        <li><strong>Minimum Age Limit:</strong> 21 Years</li>
        <li><strong>Maximum Age Limit:</strong> 30 Years</li>
        <li>Candidate must have been born not earlier than 01.10.1994 and not later than 30.09.2003 (both days inclusive).</li>
        <li>Age Relaxation Applicable as per Rules.</li>
        <li>For More Details Refer the Notification.</li>
      </ul>
      <h2 className="text-xl font-bold mb-2">Vacancy Details</h2>
      <table className="table-auto w-full text-center border-collapse mb-6">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 font-medium text-gray-600">Sl. No</th>
            <th className="px-4 py-2 font-medium text-gray-600">Post Name</th>
            <th className="px-4 py-2 font-medium text-gray-600">Total</th>
            <th className="px-4 py-2 font-medium text-gray-600">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">01</td>
            <td className="px-4 py-2">Risk Management</td>
            <td className="px-4 py-2">10</td>
            <td className="px-4 py-2">B.E/B.Tech or M.E/M.Tech &amp; PG/PGDM (Risk Management)</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">02</td>
            <td className="px-4 py-2">Finance and Investment</td>
            <td className="px-4 py-2">20</td>
            <td className="px-4 py-2">CA (ICAI/ ICWA) or B.Com or M.Com</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">03</td>
            <td className="px-4 py-2">Automobile Engineers</td>
            <td className="px-4 py-2">20</td>
            <td className="px-4 py-2">B.E/B.Tech or M.E/M.Tech (Automobile Engg)</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">04</td>
            <td className="px-4 py-2">Chemical Engineers / Mechatronics Engineers</td>
            <td className="px-4 py-2">10</td>
            <td className="px-4 py-2">B.Tech/ B.E or M.Tech/ ME (Mechatronics/ Chemical Engg)</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">05</td>
            <td className="px-4 py-2">Data Analytics</td>
            <td className="px-4 py-2">20</td>
            <td className="px-4 py-2">Degree/ PG (Relevant Discipline)</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">06</td>
            <td className="px-4 py-2">Legal</td>
            <td className="px-4 py-2">20</td>
            <td className="px-4 py-2">Degree/ PG (Law)</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">07</td>
            <td className="px-4 py-2">Generalist</td>
            <td className="px-4 py-2">100</td>
            <td className="px-4 py-2">Any Degree/ PG&nbsp;</td>
          </tr>
        </tbody>
      </table>
      <h2 className="text-xl font-bold mb-2">Important Links</h2>
      <ul className="list-disc pl-6">
        <li>
          <a href="https://uiic.co.in/sites/default/files/uploads/recruitment/UIIC%20AO%20GENERALISTS%20AND%20SPECIALISTS%20EMPLOYMENT%20NOTICE%20FINAL.pdf"
            target="_blank"
            rel="nofollow"
            className="text-blue-500 hover:underline"
          >
            Notification
          </a>
        </li>
        <li>
          <a href="https://uiic.co.in/" target="_blank" rel="nofollow" className="text-blue-500 hover:underline">
            Official Website
          </a>
        </li>
      </ul>
      <p className="text-gray-600 text-center mt-6">
        Interested Candidates Can Read the Full Notification Before Apply Online.
      </p>
      <p className="text-gray-600 text-center mt-6">
        <strong>Keywords:</strong> UIIC, Administrative Officer, Scale I, Specialist, Recruitment, 2024, Insurance, Application, Eligibility, Vacancy, Notification
      </p>
    </div>
  );
}