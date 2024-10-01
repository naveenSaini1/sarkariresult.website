export default function RecruitmentInformation() {
  // This component displays recruitment information for the Rajasthan CET 2024 Exam.
  // It includes information on important dates, eligibility, application fees, and vacancy details.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Rajasthan Common Eligibility Test (CET) 2024
      </h1>

      <div className="mb-6">
        <p className="text-gray-600">
          The Rajasthan Staff Selection Board (RSSB) announced the{" "}
          <strong>Rajasthan CET 2024 Notification</strong> for both
          Graduation and 12th Level on August 6th, 2024. The exam is a
          qualifying test for various Group B and C posts in the Rajasthan
          Government.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Important Dates</h2>
        <table className="table-auto w-full text-left">
          <thead>
            <tr>
              <th className="px-4 py-2 text-gray-600 font-bold">Event</th>
              <th className="px-4 py-2 text-gray-600 font-bold">
                Graduation Level
              </th>
              <th className="px-4 py-2 text-gray-600 font-bold">
                12th Level
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2">Application Start Date</td>
              <td className="px-4 py-2">August 9th, 2024</td>
              <td className="px-4 py-2">September 2nd, 2024</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Application Last Date</td>
              <td className="px-4 py-2">September 8th, 2024</td>
              <td className="px-4 py-2">October 1st, 2024</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Exam Date</td>
              <td className="px-4 py-2">September 27th-28th, 2024</td>
              <td className="px-4 py-2">October 22nd-24th, 2024</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Eligibility</h2>
        <div className="mb-4">
          <p className="text-gray-600">
            <strong>Age Limit:</strong> The age limit for the Rajasthan CET
            2024 is 18-40 years. The cutoff date for calculating age is
            January 1st, 2025. Age relaxations are available as per
            government rules.
          </p>
        </div>
        <div className="mb-4">
          <p className="text-gray-600">
            <strong>Educational Qualifications:</strong>
          </p>
          <table className="table-auto w-full text-left">
            <thead>
              <tr>
                <th className="px-4 py-2 text-gray-600 font-bold">Exam</th>
                <th className="px-4 py-2 text-gray-600 font-bold">
                  Eligibility
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2">CET (12th Level)</td>
                <td className="px-4 py-2">12th Class Pass</td>
              </tr>
              <tr>
                <td className="px-4 py-2">CET (Graduation Level)</td>
                <td className="px-4 py-2">Graduation in any stream</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Application Fee</h2>
        <p className="text-gray-600">
          The application fee for the Rajasthan CET 2024 is:
        </p>
        <ul className="list-disc pl-6">
          <li className="text-gray-600">
            Rs. 600/- for General, OBC, and EBC (CL) categories
          </li>
          <li className="text-gray-600">
            Rs. 400/- for BC/ EBC, EWS categories
          </li>
          <li className="text-gray-600">
            Rs. 400/- for SC, and ST categories
          </li>
        </ul>
        <p className="text-gray-600">
          Candidates can pay the application fee online.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Vacancy Details</h2>
        <p className="text-gray-600">
          The RSSB will announce vacancies for various posts based on the
          Rajasthan CET score. The exam is a qualifying test for a variety of
          Group B and C positions in the Rajasthan Government.
        </p>
        <div className="mb-4">
          <p className="text-gray-600">
            <strong>Graduation Level Posts:</strong>
          </p>
          <ul className="list-disc pl-6">
            <li className="text-gray-600">Platoon Commander</li>
            <li className="text-gray-600">Ziledar</li>
            <li className="text-gray-600">Patwari</li>
            <li className="text-gray-600">Junior Accountant</li>
            <li className="text-gray-600">Teshsil Revenue Accountant</li>
            <li className="text-gray-600">Supervisor</li>
            <li className="text-gray-600">Sub-Jailor</li>
            <li className="text-gray-600">Hostel Superintendent</li>
            <li className="text-gray-600">Village Development Officer (VDO)</li>
            <li className="text-gray-600">Junior Accountant</li>
            <li className="text-gray-600">And other related posts</li>
          </ul>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">How to Apply</h2>
        <p className="text-gray-600">
          Follow these steps to apply for the Rajasthan CET 2024:
        </p>
        <ol className="list-decimal pl-6">
          <li className="text-gray-600">
            Visit the RSSB official website:{" "}
            <a
              href="https://rsmssb.rajasthan.gov.in/page?menuName=ApBuI6wdvnNKC6MoOgFsfXwFRsE7cKLr"
              className="text-blue-500 underline"
              target="_blank"
              rel="noopener"
            >
              rsmssb.rajasthan.gov.in
            </a>
          </li>
          <li className="text-gray-600">
            Click on the "Apply Online" link for Rajasthan CET.
          </li>
          <li className="text-gray-600">
            Complete the registration process and fill out the application form.
          </li>
          <li className="text-gray-600">
            Upload the required documents and pay the application fee.
          </li>
          <li className="text-gray-600">
            Submit the application form and take a printout.
          </li>
        </ol>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">
          Rajasthan CET 2024 Notification and Apply Link
        </h2>
        <table className="table-auto w-full text-left">
          <tbody>
            <tr>
              <td className="px-4 py-2">Rajasthan CET Admit Card 2024</td>
              <td className="px-4 py-2">
                <a
                  href="https://pmsuryaghar.org.in/rajasthan-cet-admit-card/"
                  className="text-blue-500 underline"
                  target="_blank"
                  rel="noopener"
                >
                  Admit Card
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">
                CET Graduate Level New Exam Date
              </td>
              <td className="px-4 py-2">
                <a
                  href="https://pmsuryaghar.org.in/wp-content/uploads/2024/09/Rajasthan-CET-Graduate-Level-New-Exam-Date-Notice-9-Sept-2024.jpg"
                  className="text-blue-500 underline"
                  target="_blank"
                  rel="noopener"
                >
                  Exam Date
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">
                Rajasthan CET -Ve Marking Removal Notice
              </td>
              <td className="px-4 py-2">
                <a
                  href="https://pmsuryaghar.org.in/wp-content/uploads/2024/08/Rajasthan-CET-Amendment-Notice-23-Aug-2024.pdf"
                  className="text-blue-500 underline"
                  target="_blank"
                  rel="noopener"
                >
                  Notice
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">
                Rajasthan CET Notification PDF (Graduation Level)
              </td>
              <td className="px-4 py-2">
                <a
                  href="https://pmsuryaghar.org.in/wp-content/uploads/2024/08/HaryanaJobs.in-Adv_CET_Graduation_2024_06082024.pdf"
                  className="text-blue-500 underline"
                  target="_blank"
                  rel="noopener"
                >
                  Notification
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">
                Rajasthan CET Notification PDF (12th Level)
              </td>
              <td className="px-4 py-2">
                <a
                  href="https://pmsuryaghar.org.in/wp-content/uploads/2024/08/Rajasthan-CET-12th-Level-Notification-2024.pdf"
                  className="text-blue-500 underline"
                  target="_blank"
                  rel="noopener"
                >
                  Notification
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">Rajasthan CET 2024 Apply Online</td>
              <td className="px-4 py-2">
                <a
                  href="https://sso.rajasthan.gov.in/signin"
                  className="text-blue-500 underline"
                  target="_blank"
                  rel="noopener"
                >
                  Apply Online
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">FAQs</h2>
        <ul className="list-disc pl-6">
          <li className="text-gray-600">
            <strong>How to apply for the Rajasthan CET Exam 2024?</strong>
            <p className="ml-4 text-gray-600">
              Apply online from the website{" "}
              <a
                href="https://rsmssb.rajasthan.gov.in/page?menuName=ApBuI6wdvnNKC6MoOgFsfXwFRsE7cKLr"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener"
              >
                rsmssb.rajasthan.gov.in
              </a>
            </p>
          </li>
          <li className="text-gray-600">
            <strong>When was the Rajasthan CET 2024 Notification released?</strong>
            <p className="ml-4 text-gray-600">
              The Rajasthan CET 2024 Graduate Level Notification was released on
              August 6th, 2024, and the 12th Level Notification was released on
              August 29th, 2024.
            </p>
          </li>
          <li className="text-gray-600">
            <strong>
              What are the exam dates for the Rajasthan CET 2024?
            </strong>
            <p className="ml-4 text-gray-600">
              The Rajasthan CET 2024 exam for Graduation Level will be held on
              September 27th and 28th, 2024, and for the Sr. Sec. Level will be
              held on October 22nd, 23rd, and 24th, 2024.
            </p>
          </li>
          <li className="text-gray-600">
            <strong>
              Is the Rajasthan CET Qualifying in Nature?
            </strong>
            <p className="ml-4 text-gray-600">
              Yes, the government has made the Rajasthan CET Qualifying. The
              qualifying marks for the Rajasthan CET are 35% for SC, ST, and
              40% for other categories.
            </p>
          </li>
          <li className="text-gray-600">
            <strong>
              What is the last date to apply for the RSMSSB CET 2024?
            </strong>
            <p className="ml-4 text-gray-600">
              The last date to apply is September 8th, 2024, for the Graduate
              Level and October 1st, 2024, for the 12th Level.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}