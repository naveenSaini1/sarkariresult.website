export default function RecruitmentInformation() {
  // This component displays recruitment information for the OSSC CGL (Group- B & C) 2024 vacancy.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">OSSC CGL (Group- B &amp; C) 2024</h1>
      <p className="mb-4">
        <strong className="text-green-500">Name of the Post:</strong>{' '}
        <strong className="text-justify">
          OSSC CGL (Group- B &amp; C) 2024 Rescheduled Preliminary Exam Date
          Announced
        </strong>
      </p>
      <p className="text-justify mb-4">
        <strong className="text-green-500">Post Date: </strong>
        <span className="text-black">16-03-2024</span>
      </p>
      <p className="mb-4">
        <strong className="text-green-500">Latest Update: </strong>
        06-09-2024
      </p>
      <p className="text-justify mb-4">
        <strong className="text-green-500">Total Vacancy: </strong>
        <span className="text-black">595</span>
      </p>
      <p className="text-justify mb-4">
        <strong className="text-red-500">Brief Information:</strong>{' '}
        Odisha Staff Selection Commission (OSSC) has published a notification for
        the recruitment of Combined Graduate Level (Group B&amp;C) Vacancy.
        Those Candidates who are interested in the vacancy details &amp;
        completed all eligibility criteria can read the Notification &amp; Apply
        online.
      </p>

      <h2 className="text-2xl font-bold mb-4">Important Details</h2>
      <div className="mb-4">
        <table className="border-collapse w-full text-center">
          <thead>
            <tr className="bg-gray-200 text-gray-800">
              <th className="py-2 px-4">Important Dates</th>
              <th className="py-2 px-4">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-100">
              <td className="py-2 px-4">Starting Date For Apply Online</td>
              <td className="py-2 px-4">05-04-2024</td>
            </tr>
            <tr className="border-b hover:bg-gray-100">
              <td className="py-2 px-4">Last Date for Apply Online</td>
              <td className="py-2 px-4">02-05-2024</td>
            </tr>
            <tr className="border-b hover:bg-gray-100">
              <td className="py-2 px-4">
                Starting Date for Submission of Online Application
              </td>
              <td className="py-2 px-4">05-04-2024</td>
            </tr>
            <tr className="border-b hover:bg-gray-100">
              <td className="py-2 px-4">
                Last Date for Submission of Online Application
              </td>
              <td className="py-2 px-4">05-05-2024</td>
            </tr>
            <tr className="border-b hover:bg-gray-100">
              <td className="py-2 px-4">Date of Edit Option Dates</td>
              <td className="py-2 px-4">05-04-2024 to 17-05-2024</td>
            </tr>
            <tr className="border-b hover:bg-gray-100">
              <td className="py-2 px-4">Date of Exam</td>
              <td className="py-2 px-4">February – April 2024</td>
            </tr>
            <tr className="border-b hover:bg-gray-100">
              <td className="py-2 px-4">Date of Preliminary Exam</td>
              <td className="py-2 px-4">06-10-2024</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4">Date of Rescheduled Preliminary Exam</td>
              <td className="py-2 px-4 text-red-500">20-10-2024</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mb-4">Age Limit (As on 01-01-2024)</h2>
      <ul className="list-disc pl-5 mb-4">
        <li>
          <span className="text-black">Minimum Age Limit:</span> 21 Years
        </li>
        <li>
          <span className="text-black">Maximum Age Limit:</span> 38 Years
        </li>
        <li>
          For must not have been earlier than 02-01-1986 &amp; not later than
          01-01-2003
        </li>
        <li>
          <span className="text-black">Age Relaxation is applicable as per rules.</span>
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Qualification</h2>
      <ul className="list-disc pl-5 mb-4">
        <li>
          <span className="text-black">Candidates should possess Any Degree</span>
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>
      <table className="border-collapse w-full text-center mb-4">
        <thead>
          <tr className="bg-gray-200 text-gray-800">
            <th className="py-2 px-4">Post Name</th>
            <th className="py-2 px-4">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b hover:bg-gray-100">
            <td className="py-2 px-4">Inspector of Endowments</td>
            <td className="py-2 px-4">21</td>
          </tr>
          <tr className="border-b hover:bg-gray-100">
            <td className="py-2 px-4">Assistant CT &amp; GST Officer</td>
            <td className="py-2 px-4">61</td>
          </tr>
          <tr className="border-b hover:bg-gray-100">
            <td className="py-2 px-4">Auditor</td>
            <td className="py-2 px-4">03</td>
          </tr>
          <tr className="border-b hover:bg-gray-100">
            <td className="py-2 px-4">Auditor</td>
            <td className="py-2 px-4">06</td>
          </tr>
          <tr className="border-b hover:bg-gray-100">
            <td className="py-2 px-4">Inspector of Coopertive Socities</td>
            <td className="py-2 px-4">15</td>
          </tr>
          <tr className="border-b hover:bg-gray-100">
            <td className="py-2 px-4">Junior Assistant (HOD)</td>
            <td className="py-2 px-4">20</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="py-2 px-4">
              Junior Assistant (District Offices Under the Department of Water
              Resources)
            </td>
            <td className="py-2 px-4">469</td>
          </tr>
        </tbody>
      </table>

      <p className="text-blue-500 mb-4">
        Interested Candidates Can Read the Full Notification Before Apply Online
      </p>

      <h2 className="text-2xl font-bold mb-4">Important Links</h2>
      <table className="border-collapse w-full text-center mb-4">
        <thead>
          <tr className="bg-gray-200 text-gray-800">
            <th className="py-2 px-4">Link Description</th>
            <th className="py-2 px-4">Link</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b hover:bg-gray-100">
            <td className="py-2 px-4">
              Rescheduled Preliminary Exam Date (06-09-2024)
            </td>
            <td className="py-2 px-4">
              <a
                href="https://img.freejobalert.com/uploads/2024/09/Rescheduled-Preliminary-Exam-Date-OSSC-CGL-Group-B-C-2024.pdf"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="border-b hover:bg-gray-100">
            <td className="py-2 px-4">
              Preliminary Exam Date (20-07-2024)
            </td>
            <td className="py-2 px-4">
              <a
                href="https://img.freejobalert.com/uploads/2024/07/Prelims-Exam-Date-OSSC-CGL-2024.pdf"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="border-b hover:bg-gray-100">
            <td className="py-2 px-4">Apply Online (05-04-2024)</td>
            <td className="py-2 px-4">
              <a
                href="https://www.ossc.gov.in/Public/Pages/Post_detail_information.aspx"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="border-b hover:bg-gray-100">
            <td className="py-2 px-4">Exam Date (19-03-2024)</td>
            <td className="py-2 px-4">
              <a
                href="https://img.freejobalert.com/uploads/2024/03/Notice-OSSC-CGL-Prelims-Exam-Date.pdf"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="border-b hover:bg-gray-100">
            <td className="py-2 px-4">Notification</td>
            <td className="py-2 px-4">
              <a
                href="https://img.freejobalert.com/uploads/2024/03/Notification-OSSC-CGL-2024-Post.pdf"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="border-b hover:bg-gray-100">
            <td className="py-2 px-4">Important Dates</td>
            <td className="py-2 px-4">
              <a
                href="https://img.freejobalert.com/uploads/2024/03/Important-Dates-OSSC-CGL-2024.pdf"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="py-2 px-4">Official Website</td>
            <td className="py-2 px-4">
              <a
                href="http://www.ossc.gov.in"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener"
              >
                Click Here
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}