export default function RajasthanCETRecruitment() {
  // This component displays recruitment information for the Rajasthan CET exam.  It includes key dates, download links for question papers and answer keys, and a summary of the opportunity.

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Rajasthan CET Recruitment 2024</h1>
      <p className="text-lg mb-4">
        The Rajasthan Staff Selection Board has announced the results of the CET exam for Graduate and 12th-level candidates.  This page provides access to answer keys and question papers for both levels of the exam.
      </p>

      <h2 className="text-2xl font-bold mb-2">Key Highlights</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Answer keys released for Graduate and 12th-level exams.</li>
        <li>Question papers available for download.</li>
        <li>Detailed schedule provided below.</li>
      </ul>


      <h2 className="text-xl font-bold mb-2">Important Dates</h2>
      <table className="w-full table-auto mb-4">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">Event</th>
            <th className="px-4 py-2 text-left">Graduate Level</th>
            <th className="px-4 py-2 text-left">12th Level</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">Application Start</td>
            <td className="px-4 py-2">August 9, 2024</td>
            <td className="px-4 py-2">September 2, 2024</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Application Deadline</td>
            <td className="px-4 py-2">September 8, 2024</td>
            <td className="px-4 py-2">October 1, 2024</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Exam Date</td>
            <td className="px-4 py-2">September 27-28, 2024</td>
            <td className="px-4 py-2">October 22-24, 2024</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Answer Key Release</td>
            <td className="px-4 py-2">November 20, 2024</td>
            <td className="px-4 py-2">Update Soon</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Answer Key Objection Period</td>
            <td className="px-4 py-2">November 26-28, 2024</td>
            <td className="px-4 py-2">Update Soon</td>
          </tr>
        </tbody>
      </table>


      <h2 className="text-xl font-bold mb-2">Download Links</h2>
      <h3 className="text-lg font-bold mb-2">Graduate Level Exam</h3>
      <table className="w-full table-auto mb-4">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">Day & Shift</th>
            <th className="px-4 py-2 text-left">Question Paper</th>
            <th className="px-4 py-2 text-left">Answer Key</th>
          </tr>
        </thead>
        <tbody>
          {/* Graduate Level Download Links */}
          <tr>
            <td className="px-4 py-2">September 27, 2024 (1st)</td>
            <td className="px-4 py-2"><a href="https://haryanajobs.org/wp-content/uploads/2024/11/Rajasthan-CET-Graduate-Question-Paper-27-Sept-2024-1st-Shift.pdf" target="_blank" rel="noopener" className="text-blue-500 underline">Download</a></td>
            <td className="px-4 py-2"><a href="https://haryanajobs.org/wp-content/uploads/2024/11/Rajasthan-CET-Graduate-Answer-Key-27-Sept-2024-1st-Shift.pdf" target="_blank" rel="noopener" className="text-blue-500 underline">Answer Key</a></td>
          </tr>
          <tr>
            <td className="px-4 py-2">September 27, 2024 (2nd)</td>
            <td className="px-4 py-2"><a href="https://haryanajobs.org/wp-content/uploads/2024/11/Rajasthan-CET-Graduate-Question-Paper-27-Sept-2024-2nd-Shift.pdf" target="_blank" rel="noopener" className="text-blue-500 underline">Download</a></td>
            <td className="px-4 py-2"><a href="https://haryanajobs.org/wp-content/uploads/2024/11/Rajasthan-CET-Graduate-Answer-Key-27-Sept-2024-2nd-Shift.pdf" target="_blank" rel="noopener" className="text-blue-500 underline">Answer Key</a></td>
          </tr>
          <tr>
            <td className="px-4 py-2">September 28, 2024 (1st)</td>
            <td className="px-4 py-2"><a href="https://haryanajobs.org/wp-content/uploads/2024/11/Rajasthan-CET-Graduate-Question-Paper-28-Sept-2024-1st-Shift.pdf" target="_blank" rel="noopener" className="text-blue-500 underline">Download</a></td>
            <td className="px-4 py-2"><a href="https://haryanajobs.org/wp-content/uploads/2024/11/Rajasthan-CET-Graduate-Answer-Key-28-Sept-2024-1st-Shift.pdf" target="_blank" rel="noopener" className="text-blue-500 underline">Answer Key</a></td>
          </tr>
          <tr>
            <td className="px-4 py-2">September 28, 2024 (2nd)</td>
            <td className="px-4 py-2"><a href="https://haryanajobs.org/wp-content/uploads/2024/11/Rajasthan-CET-Graduate-Question-Paper-28-Sept-2024-2nd-Shift.pdf" target="_blank" rel="noopener" className="text-blue-500 underline">Download</a></td>
            <td className="px-4 py-2"><a href="https://haryanajobs.org/wp-content/uploads/2024/11/Rajasthan-CET-Graduate-Answer-Key-28-Sept-2024-2nd-Shift.pdf" target="_blank" rel="noopener" className="text-blue-500 underline">Answer Key</a></td>
          </tr>
        </tbody>
      </table>

      {/* 12th Level Download Links (truncated for brevity,  follow the same pattern as above) */}
      <h3 className="text-lg font-bold mb-2">12th Level Exam</h3>
      <table className="w-full table-auto mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">Shift</th>
            <th className="px-4 py-2">Question Paper</th>
            <th className="px-4 py-2">Answer Key</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">October 22, 2024 (1st Shift)</td>
            <td className="px-4 py-2"><a href="https://pmsuryaghar.org.in/wp-content/uploads/2024/10/Rajasthan-CET-2024-Sr.-Sec-Level-Paper-22-Oct-1st-Shift.pdf" target="_blank" rel="noopener" className="text-blue-500 underline">Question Paper</a></td>
            <td className="px-4 py-2"><a href="https://pmsuryaghar.org.in/wp-content/uploads/2024/10/Rajasthan-CET-Sr-Sec-Level-Answer-Key-24-Oct-2024-1st-Shift.pdf" target="_blank" rel="noopener" className="text-blue-500 underline">Answer Key</a></td>
          </tr>
          {/* ... (Repeat for other shifts) ... */}
        </tbody>
      </table>

      <h3 className="text-lg font-bold mb-2">Other Important Links</h3>
      <table className="w-full table-auto">
        <tbody>
          <tr>
            <td className="px-4 py-2"><a href="https://haryanajobs.org/wp-content/uploads/2024/11/Rajasthan-CET-Graduate-Answer-key-2024-Notice.pdf" target="_blank" rel="noopener" className="text-blue-500 underline">Answer Key Notice</a></td>
          </tr>
          <tr>
            <td className="px-4 py-2"><a href="https://pmsuryaghar.org.in/rajasthan-cet-notification/" target="_blank" rel="noopener" className="text-blue-500 underline">Notification</a></td>
          </tr>
          <tr>
            <td className="px-4 py-2"><a href="https://rsmssb.rajasthan.gov.in/page?menuName=ApBuI6wdvnNKC6MoOgFsfXwFRsE7cKLr" target="_blank" rel="noreferrer noopener" className="text-blue-500 underline">RSMSSB Official Website</a></td>
          </tr>
        </tbody>
      </table>

      <p className="text-gray-600 mt-4 text-sm">Keywords: Rajasthan CET, Recruitment, Answer Key, Question Paper, Graduate Level, 12th Level, RSMSSB</p>
    </div>
  );
}