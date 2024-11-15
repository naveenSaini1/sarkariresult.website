export default function BISAGNInternRecruitment() {
  // This component displays recruitment information for the BISAG-N Intern 2024 program. 
  // It includes details about the program, important dates, eligibility criteria, vacancy details, and application links.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">BISAG-N Intern Online Form 2024</h1>

      <p className="mb-4 text-center">
        Bhaskaracharya National Institute for Space Applications and Geo-informatics (BISAG-N) is inviting applications for the recruitment of Intern Vacancy.
      </p>

      <h2 className="text-2xl font-bold mb-4">Key Highlights</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>
          <span className="font-bold">Post Date:</span> 11-11-2024
        </li>
        <li>
          <span className="font-bold">Total Vacancy:</span> 200
        </li>
        <li>
          <span className="font-bold">Last Date to Apply Online:</span> 02-12-2024
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Brief Information</h2>
      <p className="mb-4">
        BISAG-N is seeking talented individuals to join their internship program. This is a great opportunity to gain practical experience in the field of space applications and geo-informatics.
      </p>

      <h2 className="text-2xl font-bold mb-4">Qualification</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Candidates should possess B.E/B.Tech (Computer/Computer Science (CS)/ IT/ Civil/ Electronics & Communications (EC)/Electronics and Instrumentation (E&I)).</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>
      <table className="table-auto w-full text-center border-collapse border border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4">Post Name</th>
            <th className="py-2 px-4">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="py-2 px-4">Software Development</td>
            <td className="py-2 px-4">90</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="py-2 px-4">Artificial Intelligence / Machine Learning / IoT</td>
            <td className="py-2 px-4">50</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="py-2 px-4">Cyber Security</td>
            <td className="py-2 px-4">20</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="py-2 px-4">Cloud, DevOps & Automation</td>
            <td className="py-2 px-4">20</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="py-2 px-4">Studio Operations & Content Development</td>
            <td className="py-2 px-4">20</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mb-4">Important Links</h2>
      <table className="table-auto w-full text-center border-collapse border border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4">Link</th>
            <th className="py-2 px-4">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="py-2 px-4">
              <a href="https://lbsn.ncog.gov.in/bisag_training/home/internship" target="_blank" rel="noopener" className="text-blue-500 hover:underline">
                Click Here
              </a>
            </td>
            <td className="py-2 px-4">Apply Online</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="py-2 px-4">
              <a href="https://img.freejobalert.com/uploads/2024/11/Notification-BISAG-N-Intern-Posts.pdf" target="_blank" rel="noopener" className="text-blue-500 hover:underline">
                Click Here
              </a>
            </td>
            <td className="py-2 px-4">Notification</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="py-2 px-4">
              <a href="https://bisag-n.gov.in/" target="_blank" rel="noopener" className="text-blue-500 hover:underline">
                Click Here
              </a>
            </td>
            <td className="py-2 px-4">Official Website</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mb-4">FAQs</h2>
      <div className="mb-4">
        <p className="mb-2 font-bold">1. What is the last date to apply online for BISAG-N Intern 2024?</p>
        <p className="mb-4">Ans: Last Date for apply online is 02-12-2024.</p>
      </div>
      <div className="mb-4">
        <p className="mb-2 font-bold">2. What is the Eligibility to apply for BISAG-N Intern 2024?</p>
        <p className="mb-4">Ans: B.E/B.Tech (Relevant Engg).</p>
      </div>
      <div className="mb-4">
        <p className="mb-2 font-bold">3. How many vacancies are being recruited by BISAG-N Intern 2024?</p>
        <p className="mb-4">Ans: Total 200 Vacancies.</p>
      </div>

      <p className="text-center mt-8">
        Keywords: BISAG-N, Internship, Intern, Space Applications, Geo-informatics, Recruitment, Vacancy, Application, Online Form, Eligibility, Qualification, Important Dates, Last Date, Apply Online, Notification, Official Website
      </p>
    </div>
  );
}