export default function IndianNavyRecruitment() {
  // This component displays information about the Indian Navy's civilian recruitment drive for various positions. 
  // It includes details like the application process, important dates, eligibility criteria, exam pattern, and vacancy details.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">Indian Navy Civilian Recruitment</h1>
      <p className="text-gray-600 text-center mb-6">
        The Indian Navy is hiring civilians for various roles! This recruitment drive offers a fantastic opportunity to
        join the esteemed Indian Navy.
      </p>
      <h2 className="text-2xl font-bold mb-4">Key Highlights</h2>
      <ul className="list-disc text-gray-600 mb-6">
        <li>Applications were accepted from 20 July to 2 August 2024.</li>
        <li>The written exam is now scheduled for the last week of November 2024.</li>
        <li>Vacancies are available for Chargeman, Scientific Assistant, Fireman, and more.</li>
        <li>The application fee is Rs. 295/- for General, EWS, and OBC candidates.</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>
      <ul className="list-disc text-gray-600 mb-6">
        <li>Chargeman (Ammunition Workshop)- 1 Post</li>
        <li>Chargeman (Factory)- 10 Post</li>
        <li>Chargeman (Mechanic)- 18 Post</li>
        <li>Scientific Assistant- 4 Post</li>
        <li>Fireman- 444 Post</li>
        <li>Fire Engine Driver- 58 Post</li>
        <li>Tradesman Mate- 161 Post</li>
        <li>Pest Control Worker- 18 Post</li>
        <li>Cook- 9 Post</li>
        <li>Multi-Tasking Staff (MTS)- 16 Post</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Important Dates</h2>
      <p className="text-gray-600 mb-4">
        The online applications were invited from 20 July to 2 August 2024. The written exam was initially scheduled
        for 10 to 14 September 2024 but has been postponed. The new exam date is the last week of November 2024.
      </p>

      <h2 className="text-2xl font-bold mb-4">Application Fee</h2>
      <p className="text-gray-600 mb-4">
        General, EWS, and OBC candidates are required to pay an application fee of Rs. 295/-. Candidates belonging
        to SC, ST, PWD, ESM category, and Female candidates are exempted from paying the application fee.
      </p>

      <h2 className="text-2xl font-bold mb-4">Age Limit</h2>
      <p className="text-gray-600 mb-4">
        The age limit for the post of Chargeman (Mechanic) and Scientific Assistant is 18-30 Years. The age limit
        for Fireman and Fire Engine Driver Posts is 18-27 Years. The age limit for other posts (Fireman, Tradesman
        Mate, MTS, Cook, etc.) is 18-25 Years. The crucial date for the calculation of the age limit is 2.8.2024.
        Age relaxation will be provided as per the rules.
      </p>

      <h2 className="text-2xl font-bold mb-4">Qualification</h2>
      <p className="text-gray-600 mb-4">
        The post-wise education qualification for each post is detailed in the Indian Navy Civilian Recruitment 2024
        Notification PDF. For specific details on education qualification, experience, and physical standards,
        refer to the notification PDF below.
      </p>

      <h2 className="text-2xl font-bold mb-4">Selection Process</h2>
      <p className="text-gray-600 mb-4">
        The selection process for this recruitment drive involves a written exam, followed by a Physical Standard
        Test (PST) and a skill test (depending on the post). Subsequently, shortlisted candidates will be called
        for document verification and a medical examination.
      </p>

      <h2 className="text-2xl font-bold mb-4">Exam Pattern</h2>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Subject
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Questions
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Marks
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">General Intelligence</td>
              <td className="px-6 py-4 whitespace-nowrap">25</td>
              <td className="px-6 py-4 whitespace-nowrap">25</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">General Awareness</td>
              <td className="px-6 py-4 whitespace-nowrap">25</td>
              <td className="px-6 py-4 whitespace-nowrap">25</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Quantitative Aptitude</td>
              <td className="px-6 py-4 whitespace-nowrap">25</td>
              <td className="px-6 py-4 whitespace-nowrap">25</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">English Language</td>
              <td className="px-6 py-4 whitespace-nowrap">25</td>
              <td className="px-6 py-4 whitespace-nowrap">25</td>
            </tr>
          </tbody>
          <tfoot className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Total
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                100
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                100
              </th>
            </tr>
          </tfoot>
        </table>
      </div>

      <h2 className="text-2xl font-bold mb-4">Important Links</h2>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full divide-y divide-gray-200">
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">New Exam Date Notice</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <a
                  href="https://pmsuryaghar.org.in/wp-content/uploads/2024/11/INCET-Exam-Date-Notice-8-Nov-2024.png"
                  className="text-blue-500 hover:underline"
                >
                  Notice
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Exam Cancel Notice</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <a
                  href="https://pmsuryaghar.org.in/wp-content/uploads/2024/09/INCET-Exam-Cancel-Notice-2024.jpg"
                  className="text-blue-500 hover:underline"
                >
                  Notice
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                INCET 01/2024 MTS Vacancy Increase Notice
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <a
                  href="https://pmsuryaghar.org.in/wp-content/uploads/2024/09/INCET-1_2024-MTS-Vacancy-Increase-Notice.pdf"
                  className="text-blue-500 hover:underline"
                >
                  MTS Notice
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">INCET 01/2024 Admit Card (Soon)</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <a
                  href="https://incet.cbt-exam.in/incetcycle2/login/user"
                  target="_blank"
                  rel="noopener"
                  className="text-blue-500 hover:underline"
                >
                  Admit Card
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                Indian Navy Civilian Recruitment 2024 Notification PDF
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <a
                  href="https://pmsuryaghar.org.in/wp-content/uploads/2024/07/Indian-Navy-Civilian-Recruitment-2024-Notifiation-HaryanaJobs.in_.pdf"
                  className="text-blue-500 hover:underline"
                >
                  Notification
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Indian Navy Official Website</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <a
                  href="https://www.joinindiannavy.gov.in/en/page/civilian.html"
                  target="_blank"
                  rel="noopener"
                  className="text-blue-500 hover:underline"
                >
                  Indian Navy
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mb-4">FAQs</h2>
      <div className="mb-6">
        <div className="mb-4">
          <p className="font-bold">How to download the Indian Navy Civilian Admit Card 2024?</p>
          <p>Download the INCET 01/2024 Admit Card from the website incet.cbt-exam.in.</p>
        </div>
        <div>
          <p className="font-bold">What is the exam date for Indian Navy Civilian Recruitment 2024?</p>
          <p>The exam will be held in the last week of November 2024.</p>
        </div>
      </div>

      {/* Keywords  */}
      <p className="text-gray-500 text-center mt-6">
        Keywords: Indian Navy, Civilian Recruitment, INCET, Exam Date, Admit Card, Notification, Vacancy,
        Selection Process, Eligibility Criteria, Application Fee
      </p>
    </div>
  );
}