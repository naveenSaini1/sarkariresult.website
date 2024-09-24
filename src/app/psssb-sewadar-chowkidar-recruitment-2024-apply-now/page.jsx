export default function RecruitmentInfo() {
  // This component displays information about the Punjab Subordinate Services Selection Board (PSSSB) Sewadar and Sewadar cum Chowkidar Recruitment 2024.
  // It includes details like the recruitment organization, important dates, application fees, vacancies, and the selection process. 
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">PSSSB Sewadar and Sewadar cum Chowkidar Recruitment 2024</h1>
      <div className="flex flex-col items-center mb-4">
        <p className="text-gray-500 mb-2">
          <span className="font-bold"></span>{' '}
          <span className="text-gray-500"> » </span>{' '}
          <span className="font-bold">Notification</span>{' '}
          <span className="text-gray-500"> » </span>{' '}
          <span className="font-bold">
            PSSSB Sewadar and Sewadar cum Chowkidar Recruitment 2024
          </span>
        </p>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Recruitment Overview</h2>
        <table className="w-full table-auto border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b border-gray-300 text-left font-bold">
                Details
              </th>
              <th className="px-4 py-2 border-b border-gray-300 text-left font-bold">
                Information
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border-b border-gray-300 text-left">
                Recruitment Organization
              </td>
              <td className="px-4 py-2 border-b border-gray-300 text-left">
                Punjab Subordinate Services Selection Board (PSSSB)
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-300 text-left">
                Advertisement Number
              </td>
              <td className="px-4 py-2 border-b border-gray-300 text-left">
                10 of 2024
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-300 text-left">
                Post Name
              </td>
              <td className="px-4 py-2 border-b border-gray-300 text-left">
                Sewadar and Sewadar cum Chowkidar
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-300 text-left">
                Total Vacancies
              </td>
              <td className="px-4 py-2 border-b border-gray-300 text-left">
                172
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-300 text-left">
                Salary
              </td>
              <td className="px-4 py-2 border-b border-gray-300 text-left">
                Rs. 18000/- per month
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-300 text-left">
                Last Date to Apply
              </td>
              <td className="px-4 py-2 border-b border-gray-300 text-left">
                24 September 2024
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-300 text-left">
                Official Website
              </td>
              <td className="px-4 py-2 border-b border-gray-300 text-left">
                <a
                  href="https://sssb.punjab.gov.in/"
                  className="underline text-blue-500"
                >
                  sssb.punjab.gov.in
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Important Dates</h2>
        <p className="text-gray-700">
          The PSSSB Sewadar and Sewadar cum Chowkidar Recruitment 2024
          Notification was released on 16 August 2024. Online applications
          were accepted from 26 August to 24 September 2024, up to 05:00 pm.
          The last date to pay the application fee was 27 September 2024.
        </p>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Application Fees</h2>
        <p className="text-gray-700">
          The application fee to apply for the PSSSB Sewadar and Sewadar cum
          Chowkidar Recruitment 2024 was:
        </p>
        <ul className="list-disc ml-6">
          <li>Rs. 1000/- for General, Freedom Fighters, and Sportspersons.</li>
          <li>Rs. 250/- for SC, BC, and EWS.</li>
          <li>Rs. 200/- for ESM and Dependents.</li>
          <li>Rs. 500/- for the Physically Handicapped.</li>
        </ul>
        <p className="text-gray-700">
          The application fee had to be paid in online mode.
        </p>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">
          Vacancies, Eligibility, and Selection Process
        </h2>
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">Age Limit</h3>
          <p className="text-gray-700">
            The age limit for the PSSSB Sewadar and Sewadar cum Chowkidar
            Recruitment 2024 was 16-35 Years. The cutoff date for the
            calculation of the age limit was 1.1.2024. Relaxation in the age
            limit was given as per the rules.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">Note</h3>
          <p className="text-gray-700">
            Candidates should have passed 8th Class with Punjabi as one of the
            subjects.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">Vacancies and Qualification</h3>
          <table className="w-full table-auto border border-gray-300">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b border-gray-300 text-left font-bold">
                  Post Name
                </th>
                <th className="px-4 py-2 border-b border-gray-300 text-left font-bold">
                  Vacancy
                </th>
                <th className="px-4 py-2 border-b border-gray-300 text-left font-bold">
                  Qualification
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-b border-gray-300 text-left">
                  Sewadar
                </td>
                <td className="px-4 py-2 border-b border-gray-300 text-left">
                  150
                </td>
                <td className="px-4 py-2 border-b border-gray-300 text-left">
                  8th Pass
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-gray-300 text-left">
                  Chowkidar
                </td>
                <td className="px-4 py-2 border-b border-gray-300 text-left">
                  22
                </td>
                <td className="px-4 py-2 border-b border-gray-300 text-left">
                  8th Pass
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">Selection Process</h3>
          <p className="text-gray-700">
            The PSSSB Sewadar and Sewadar cum Chowkidar Recruitment 2024
            selection process included the written exam followed by the
            Document Verification and Medical Examination.
          </p>
          <ol className="list-decimal ml-6">
            <li>Written Exam</li>
            <li>Document Verification</li>
            <li>Medical Examination</li>
          </ol>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">How to Apply</h2>
        <p className="text-gray-700">
          To apply for the PSSSB Sewadar and Sewadar cum Chowkidar Recruitment
          2024, follow these steps:
        </p>
        <ol className="list-decimal ml-6">
          <li>Visit the website sssb.punjab.gov.in.</li>
          <li>Click on the Online Applications in the Menu Bar.</li>
          <li>
            Click on the Advt. No. 10/2024 Chowkidar and Sewadar Vacnacy 2024.
          </li>
          <li>Duly fill up the online application form and pay the fee.</li>
          <li>
            Submit the PSSSB Sewadar and Sewadar cum Chowkidar Recruitment 2024
            Application Form and take a printout.
          </li>
        </ol>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">
          Notification and Apply Link
        </h2>
        <table className="w-full table-auto border border-gray-300">
          <tbody>
            <tr>
              <td className="px-4 py-2 border-b border-gray-300 text-left">
                PSSSB Sewadar and Sewadar cum Chowkidar Notification PDF
              </td>
              <td className="px-4 py-2 border-b border-gray-300 text-left">
                <a
                  href="https://pmsuryaghar.org.in/wp-content/uploads/2024/08/PSSSB-Sewadar-Chowkidar-Notification-PDF-2024.pdf"
                  className="underline text-blue-500"
                >
                  Notification
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-300 text-left">
                PSSSB Sewadar and Sewadar cum Chowkidar Online Form
              </td>
              <td className="px-4 py-2 border-b border-gray-300 text-left">
                <a
                  href="http://97.74.80.25:8081/2410"
                  className="underline text-blue-500"
                  target="_blank"
                >
                  Apply Online
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-300 text-left">
                PSSSB Official Website
              </td>
              <td className="px-4 py-2 border-b border-gray-300 text-left">
                <a
                  href="https://sssb.punjab.gov.in/index.html"
                  className="underline text-blue-500"
                  target="_blank"
                  rel="noopener"
                >
                  PSSSB
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">FAQs</h2>
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">
            How to apply for PSSSB Sewadar and Sewadar cum Chowkidar Recruitment
            2024?
          </h3>
          <p className="text-gray-700">
            Apply Online from the website sssb.punjab.gov.in.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">
            What is the last date to apply for PSSSB Sewadar and Sewadar cum
            Chowkidar Vacancy 2024?
          </h3>
          <p className="text-gray-700">24 September 2024.</p>
        </div>
      </div>
    </div>
  );
}