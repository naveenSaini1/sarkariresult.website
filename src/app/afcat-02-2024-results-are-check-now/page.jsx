export default function AFCATRecruitment() {
  // This component displays recruitment information for the Air Force Common Admission Test (AFCAT). 
  // It includes details like exam dates, eligibility criteria, selection process, and important links.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">AFCAT Recruitment</h1>
      <div className="mb-4">
        <p className="text-gray-600">
          The Indian Air Force (IAF) has released the AFCAT Result for the written exam on September 30, 2024. 
          The written exam was conducted on August 9, 10, and 11, 2024. 
          Candidates can check their results on the official website.
        </p>
      </div>
      <h2 className="text-2xl font-bold mb-2">Important Dates</h2>
      <ul className="list-disc list-inside text-gray-600">
        <li>Notification Release Date: May 30, 2024</li>
        <li>Application Deadline: June 28, 2024</li>
        <li>Application Editing Period: July 5-8, 2024</li>
        <li>Written Exam Dates: August 9-11, 2024</li>
        <li>Result Declaration: September 30, 2024</li>
      </ul>
      <h2 className="text-2xl font-bold mb-2">Vacancy Details</h2>
      <table className="table-auto w-full text-gray-600">
        <thead>
          <tr>
            <th className="px-4 py-2">Post Name</th>
            <th className="px-4 py-2">Vacancy</th>
            <th className="px-4 py-2">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">Flying Branch</td>
            <td className="px-4 py-2">29</td>
            <td className="px-4 py-2">12th with 50% Marks each in Physics and Maths + Graduation (with 60% marks)</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Ground Duty (Technical)</td>
            <td className="px-4 py-2">156</td>
            <td className="px-4 py-2">12th with 50% Marks each in Physics and Maths + B.Tech (with 60% marks)</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Ground Duty (Non-Technical)</td>
            <td className="px-4 py-2">119</td>
            <td className="px-4 py-2">Graduate (with 60% marks)</td>
          </tr>
          <tr>
            <td className="px-4 py-2">NCC Special Entry</td>
            <td className="px-4 py-2">10%</td>
            <td className="px-4 py-2">Graduate + NCC ‘C’ Certificate</td>
          </tr>
        </tbody>
      </table>
      <h2 className="text-2xl font-bold mb-2">Selection Process</h2>
      <p className="text-gray-600">
        The selection process consists of a written exam, followed by the Air Force Selection Board (AFSB), Document Verification, and Medical examination.
      </p>
      <h3 className="text-xl font-bold mb-2">Exam Pattern</h3>
      <table className="table-auto w-full text-gray-600">
        <thead>
          <tr>
            <th className="px-4 py-2">Subject</th>
            <th className="px-4 py-2">Questions</th>
            <th className="px-4 py-2">Marks</th>
            <th className="px-4 py-2">Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">General Awareness, Verbal Ability in English, Numerical Ability and Reasoning, and Military Aptitude Test</td>
            <td className="px-4 py-2">100</td>
            <td className="px-4 py-2">300</td>
            <td className="px-4 py-2">2 Hours</td>
          </tr>
        </tbody>
      </table>
      <h2 className="text-2xl font-bold mb-2">How to Check the AFCAT Result</h2>
      <ul className="list-disc list-inside text-gray-600">
        <li>Visit the official website: afcat.cdac.in</li>
        <li>Click on the AFCAT Result link</li>
        <li>Login using your email ID and password</li>
        <li>Check your result and scorecard</li>
      </ul>
      <h2 className="text-2xl font-bold mb-2">AFCAT Result Download Link</h2>
      <table className="table-auto w-full text-gray-600">
        <tbody>
          <tr>
            <td className="px-4 py-2">AFCAT Result Link</td>
            <td className="px-4 py-2"><a href="https://afcat.cdac.in/afcatreg/candidate/login" target="_blank" rel="noopener" className="text-blue-500">Result</a></td>
          </tr>
          <tr>
            <td className="px-4 py-2">AFCAT Notification PDF</td>
            <td className="px-4 py-2"><a href="https://pmsuryaghar.org.in/wp-content/uploads/2024/07/HaryanaJobs.in-AFCAT-2_2024-Notification.pdf" target="_blank" rel="noopener" className="text-blue-500">Notification</a></td>
          </tr>
          <tr>
            <td className="px-4 py-2">AFCAT Official Website</td>
            <td className="px-4 py-2"><a href="https://afcat.cdac.in/AFCAT/" target="_blank" rel="noopener" className="text-blue-500">AFCAT</a></td>
          </tr>
        </tbody>
      </table>
      <h2 className="text-2xl font-bold mb-2">FAQs</h2>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">How to check the AFCAT Result?</h3>
        <p className="text-gray-600">You can check the AFCAT Result from the website afcat.cdac.in</p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">When will the written result of AFCAT be released?</h3>
        <p className="text-gray-600">The AFCAT Result has been released on September 30, 2024.</p>
      </div>
    </div>
  );
}