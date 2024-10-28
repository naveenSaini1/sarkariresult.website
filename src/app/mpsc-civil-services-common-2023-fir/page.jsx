export default function MPSCRecruitment() {
  // This component displays recruitment information for the MPSC Civil Services Common 2023 exam. 
  // It includes details about the exam, application process, important dates, and vacancy details. 
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">MPSC Civil Services Common 2023</h1>
      <p className="text-gray-600 mb-4">
        The Maharashtra Public Service Commission (MPSC) has announced a notification for the recruitment of
        various positions in the General Administration Department, Public Works Department, and other departments.
        This is a great opportunity for candidates looking to join the civil services in Maharashtra.
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Highlights</h2>
      <ul className="list-disc pl-6 text-gray-600 mb-4">
        <li><strong>Name of the Post:</strong> MPSC Civil Services Common 2023</li>
        <li><strong>Post Date:</strong> 27-02-2023</li>
        <li><strong>Latest Update:</strong> 27-10-2024</li>
        <li><strong>Total Vacancy:</strong> 681</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Brief Information</h2>
      <p className="text-gray-600 mb-4">
        The MPSC is conducting the Civil Services Common Main Exam 2023 for the recruitment of various
        positions in different departments. Interested candidates can apply online and refer to the notification
        for eligibility criteria and other details.
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Application Fee</h2>
      <ul className="list-disc pl-6 text-gray-600 mb-4">
        <li>For General Category: Rs. 394/-</li>
        <li>For Reserved Category: Rs. 294/-</li>
        <li>For EXSM Category: Rs. 44/-</li>
        <li>Payment Mode: Online</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Important Dates</h2>
      <ul className="list-disc pl-6 text-gray-600 mb-4">
        <li>
          <strong>Mains Dates:</strong>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Start Date to Apply Online: 07-11-2023</li>
            <li>Last Date to Apply Online: 21-11-2023</li>
            <li>Last date to pay the application fee: 24-11-2023</li>
          </ul>
        </li>
        <li>
          <strong>Prelims Dates:</strong>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Start Date to Apply Online: 02-03-2023</li>
            <li>Last Date to Apply Online: 03-04-2023</li>
            <li>Date of Prelims Exam: 04-06 & 07, 08, 09, 14, 21, 28-10-2023</li>
          </ul>
        </li>
        <li>
          <strong>Re Open Dates:</strong>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Starting Date for Apply Online: 18-05-2023</li>
            <li>Last Date for Apply Online: 21-05-2023</li>
          </ul>
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Age Limit</h2>
      <ul className="list-disc pl-6 text-gray-600 mb-4">
        <li>Minimum Age Limit: 18/ 19 Years</li>
        <li>Maximum Age Limit for All: 38 Years</li>
        <li>Age Relaxation is Applicable as per Rules.</li>
        <li>For More Details Refer The Notification</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Qualification</h2>
      <ul className="list-disc pl-6 text-gray-600 mb-4">
        <li>Candidates Should Possess Graduate or B.Com +CA/ ICWA+MBA or Engineering Degree</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Vacancy Details</h2>
      <table className="table-auto w-full text-gray-600 mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left font-bold text-gray-800">Sl. No</th>
            <th className="px-4 py-2 text-left font-bold text-gray-800">Dept. Name</th>
            <th className="px-4 py-2 text-left font-bold text-gray-800">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">1.</td>
            <td className="px-4 py-2">General Administration Department</td>
            <td className="px-4 py-2">295</td>
          </tr>
          <tr>
            <td className="px-4 py-2">2.</td>
            <td className="px-4 py-2">
              Department of Water Supply and Sanitation, Water Resources, Soil and Water Conservation
            </td>
            <td className="px-4 py-2">130</td>
          </tr>
          <tr>
            <td className="px-4 py-2">3.</td>
            <td className="px-4 py-2">Public Works Department</td>
            <td className="px-4 py-2">15</td>
          </tr>
          <tr>
            <td className="px-4 py-2">4.</td>
            <td className="px-4 py-2">Food and Civil Department</td>
            <td className="px-4 py-2">39</td>
          </tr>
          <tr>
            <td className="px-4 py-2">5.</td>
            <td className="px-4 py-2">Department of Medical Education and Medicines</td>
            <td className="px-4 py-2">194</td>
          </tr>
          <tr>
            <td className="px-4 py-2">6.</td>
            <td className="px-4 py-2">Asst Commissioner Food, Group A</td>
            <td className="px-4 py-2">08</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Important Links</h2>
      <ul className="list-disc pl-6 text-gray-600 mb-4">
        <li>
          <a
            href="https://img.freejobalert.com/uploads/2024/10/First-Answer-Key-MPSC-Civil-Services-Common-2023.pdf"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener"
          >
            First Answer Key for Advt No 002/2023 (27-10-2024)
          </a>
        </li>
        <li>
          <a
            href="https://mpsconline.gov.in/candidate"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener"
          >
            Mains Apply Online (08-11-2023)
          </a>
        </li>
        <li>
          <a
            href="https://mpsc.gov.in/downloadFile/english/7932"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener"
          >
            Mains Notification (07-11-2023)
          </a>
        </li>
        <li>
          <a
            href="https://mpsc.gov.in/downloadFile/english/7742"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener"
          >
            Preliminary Exam Result (15-09-2023)
          </a>
        </li>
        <li>
          <a
            href="https://mpsc.gov.in/downloadFile/english/7418"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener"
          >
            Final Answer Key (19-07-2023) - Paper 1
          </a>
          {' | '}
          <a
            href="https://mpsc.gov.in/downloadFile/english/7419"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener"
          >
            Paper 2
          </a>
        </li>
        <li>
          <a
            href="https://mpsc.gov.in/downloadFile/english/7230"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener"
          >
            First Answer Key (19-07-2023) - Paper 1
          </a>
          {' | '}
          <a
            href="https://mpsc.gov.in/downloadFile/english/7229"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener"
          >
            Paper 2
          </a>
        </li>
        <li>
          <a
            href="https://mpsc.gov.in/"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener"
          >
            Admit Card
          </a>
        </li>
        <li>
          <a
            href="https://mpsconline.gov.in/candidate"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener"
          >
            Apply Online (19-05-2023)
          </a>
        </li>
        <li>
          <a
            href="https://img.freejobalert.com/uploads/2023/05/Notification-MPSC-Civil-Service-Exam-Posts.pdf"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener"
          >
            Re Open Online Form
          </a>
        </li>
        <li>
          <a
            href="https://img.freejobalert.com/uploads/2023/03/Vacancy-Increase-Notice-MPSC-Group-C-Posts.pdf"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener"
          >
            Vacancy Increased (21-03-2023)
          </a>
        </li>
        <li>
          <a
            href="https://img.freejobalert.com/uploads/2023/03/Last-Date-Extended-MPSC-Group-A-Group-B-Posts.pdf"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener"
          >
            Last Date Extended (16-03-2023)
          </a>
        </li>
        <li>
          <a
            href="https://mpsconline.gov.in/candidate"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener"
          >
            Apply Online
          </a>
        </li>
        <li>
          <a
            href="https://www.mpsc.gov.in/downloadFile/english/6785"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener"
          >
            Notification
          </a>
        </li>
        <li>
          <a
            href="https://mpsc.gov.in/"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener"
          >
            Official Website
          </a>
        </li>
      </ul>

      <p className="text-gray-600 mt-4">
        Keywords: MPSC, Maharashtra Public Service Commission, Civil Services Common, Recruitment, Exam,
        Notification, Apply Online, Important Dates, Vacancy Details, Age Limit, Qualification,
        Maharashtra.
      </p>
    </div>
  );
}