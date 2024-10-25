export default function RecruitmentInfo() {
  // This component displays recruitment information for the UPSC NDA & NA (I) 2024 exam. 
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">
        UPSC NDA & NA (I) 2024 Final Result Released
      </h1>
      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-600">
          <span className="font-bold">Post Date:</span> 20-12-2023
        </p>
        <p className="text-gray-600">
          <span className="font-bold">Latest Update:</span> 24-10-2024
        </p>
      </div>
      <p className="text-gray-600 mb-4">
        <span className="font-bold">Total Vacancy:</span> 400
      </p>
      <h2 className="text-2xl font-bold mb-4">Brief Information</h2>
      <p className="text-gray-600 mb-4">
        Union Public Service Commission (UPSC) has announced the notification for
        the National Defence Academy and Naval Academy Examination I 2024.
        Interested candidates who meet all eligibility criteria can read the
        notification and apply online.
      </p>
      <h2 className="text-2xl font-bold mb-4">Key Highlights</h2>
      <ul className="list-disc pl-5 text-gray-600 mb-4">
        <li>
          <span className="font-bold">Application Fee:</span> Rs. 100/- for
          others, NIL for female/SC/ST candidates
        </li>
        <li>
          <span className="font-bold">Starting Date for Apply Online:</span>{' '}
          20-12-2023
        </li>
        <li>
          <span className="font-bold">Last Date to Apply Online:</span> 09-01-2024
        </li>
        <li>
          <span className="font-bold">Date of Exam:</span> 21-04-2024
        </li>
        <li>
          <span className="font-bold">Minimum Age Limit:</span> Not earlier
          than 02-07-2005
        </li>
        <li>
          <span className="font-bold">Maximum Age Limit:</span> Not later than
          01-07-2008
        </li>
        <li>
          <span className="font-bold">Qualification:</span> 12th Class pass
          with Physics, Chemistry, and Mathematics
        </li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>
      <table className="table-auto w-full text-gray-600 border-collapse">
        <thead>
          <tr>
            <th className="p-2 border-b border-gray-300 text-left font-bold">
              Post Name
            </th>
            <th className="p-2 border-b border-gray-300 text-left font-bold">
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border-b border-gray-300 text-left">
              National Defence Academy
            </td>
            <td className="p-2 border-b border-gray-300 text-left">370</td>
          </tr>
          <tr>
            <td className="p-2 border-b border-gray-300 text-left">
              Naval Academy Exam
            </td>
            <td className="p-2 border-b border-gray-300 text-left">30</td>
          </tr>
        </tbody>
      </table>
      <p className="text-gray-600 mb-4">
        Interested candidates can read the full notification before applying
        online.
      </p>
      <h2 className="text-2xl font-bold mb-4">Important Links</h2>
      <table className="table-auto w-full text-gray-600 border-collapse">
        <thead>
          <tr>
            <th className="p-2 border-b border-gray-300 text-left font-bold">
              Link
            </th>
            <th className="p-2 border-b border-gray-300 text-left font-bold">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border-b border-gray-300 text-left">
              <a
                href="https://img.freejobalert.com/uploads/2024/10/Final-Result-UPSC-NDA-NA-I-2024.pdf"
                className="underline text-blue-500"
                target="_blank"
                rel="noopener"
              >
                Final Result (24-10-2024)
              </a>
            </td>
            <td className="p-2 border-b border-gray-300 text-left">
              Click Here
            </td>
          </tr>
          <tr>
            <td className="p-2 border-b border-gray-300 text-left">
              <a
                href="https://upsc.gov.in/sites/default/files/WR-NDA-I-24-NameList-engl-220524.pdf"
                className="underline text-blue-500"
                target="_blank"
                rel="noopener"
              >
                Written Exam Result (24-05-2024)
              </a>
            </td>
            <td className="p-2 border-b border-gray-300 text-left">
              Name Wise
            </td>
          </tr>
          <tr>
            <td className="p-2 border-b border-gray-300 text-left">
              <a
                href="https://upsc.gov.in/sites/default/files/WR-NDA-NA-I-2024-engl-090524.pdf"
                className="underline text-blue-500"
                target="_blank"
                rel="noopener"
              >
                Written Exam Result (10-05-2024)
              </a>
            </td>
            <td className="p-2 border-b border-gray-300 text-left">
              Roll Number Wise
            </td>
          </tr>
          <tr>
            <td className="p-2 border-b border-gray-300 text-left">
              <a
                href="https://upsc.gov.in/sites/default/files/PressNote-NDA-NA-I-24-engl-120424.pdf"
                className="underline text-blue-500"
                target="_blank"
                rel="noopener"
              >
                Exam Date Notice (13-04-2024)
              </a>
            </td>
            <td className="p-2 border-b border-gray-300 text-left">
              Click Here
            </td>
          </tr>
          <tr>
            <td className="p-2 border-b border-gray-300 text-left">
              <a
                href="https://upsconline.nic.in/eadmitcard/admitcard_NDAI_2024/autologout.php"
                className="underline text-blue-500"
                target="_blank"
                rel="noopener"
              >
                Admit Card (12-04-2024)
              </a>
            </td>
            <td className="p-2 border-b border-gray-300 text-left">
              Click Here
            </td>
          </tr>
          <tr>
            <td className="p-2 border-b border-gray-300 text-left">
              <a
                href="https://upsc.gov.in/sites/default/files/Corrigendum-NDA-NA-I-2024-Engl-300124.pdf"
                className="underline text-blue-500"
                target="_blank"
                rel="noopener"
              >
                Corrigendum (07-02-2024)
              </a>
            </td>
            <td className="p-2 border-b border-gray-300 text-left">
              Click Here
            </td>
          </tr>
          <tr>
            <td className="p-2 border-b border-gray-300 text-left">
              <a
                href="https://upsconline.nic.in/upsc/OTRP/"
                className="underline text-blue-500"
                target="_blank"
                rel="noopener"
              >
                Apply Online
              </a>
            </td>
            <td className="p-2 border-b border-gray-300 text-left">
              Click Here
            </td>
          </tr>
          <tr>
            <td className="p-2 border-b border-gray-300 text-left">
              <a
                href="https://upsc.gov.in/sites/default/files/Notif-NDA-NA-I-2024-Eng-20122023.pdf"
                className="underline text-blue-500"
                target="_blank"
                rel="noopener"
              >
                Notification
              </a>
            </td>
            <td className="p-2 border-b border-gray-300 text-left">
              Click here
            </td>
          </tr>
          <tr>
            <td className="p-2 border-b border-gray-300 text-left">
              <a
                href="https://www.freejobalert.com/nda-exam-pattern/25711/"
                className="underline text-blue-500"
                target="_blank"
                rel="noopener"
              >
                Exam Pattern
              </a>
            </td>
            <td className="p-2 border-b border-gray-300 text-left">
              Click Here
            </td>
          </tr>
          <tr>
            <td className="p-2 border-b border-gray-300 text-left">
              <a
                href="https://www.freejobalert.com/nda-selection-procedure/25714/"
                className="underline text-blue-500"
                target="_blank"
                rel="noopener"
              >
                Selection Process
              </a>
            </td>
            <td className="p-2 border-b border-gray-300 text-left">
              Click Here
            </td>
          </tr>
          <tr>
            <td className="p-2 border-b border-gray-300 text-left">
              <a
                href="https://www.freejobalert.com/nda-eligibility/25709/"
                className="underline text-blue-500"
                target="_blank"
                rel="noopener"
              >
                Eligibility Criteria
              </a>
            </td>
            <td className="p-2 border-b border-gray-300 text-left">
              Click Here
            </td>
          </tr>
          <tr>
            <td className="p-2 border-b border-gray-300 text-left">
              <a
                href="https://www.freejobalert.com/nda-syllabus/25716/"
                className="underline text-blue-500"
                target="_blank"
                rel="noopener"
              >
                Syllabus
              </a>
            </td>
            <td className="p-2 border-b border-gray-300 text-left">
              Click Here
            </td>
          </tr>
          <tr>
            <td className="p-2 border-b border-gray-300 text-left">
              <a
                href="http://www.upsc.gov.in/"
                className="underline text-blue-500"
                target="_blank"
                rel="noopener"
              >
                Official Website
              </a>
            </td>
            <td className="p-2 border-b border-gray-300 text-left">
              Click here
            </td>
          </tr>
        </tbody>
      </table>
      {/* Keywords for SEO */}
      <p className="text-gray-600 mt-4">
        Keywords: UPSC NDA, NDA Exam, NA Exam, Defence Jobs, UPSC
        Recruitment, National Defence Academy, Naval Academy
      </p>
    </div>
  );
}