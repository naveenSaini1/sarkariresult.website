export default function AOCRecruitment() {
  // This component displays information about the AOC Recruitment 2024 for various posts, including eligibility, important dates, and vacancy details.  It's designed to be SEO-friendly and uses Tailwind CSS for styling.

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">AOC Recruitment 2024</h1>
      <p className="mb-4">The Indian Army Ordnance Corps (AOC) is recruiting for various Group C positions, including Tradesman Mate, Fireman, and Material Assistant.  This is an excellent opportunity to join the Indian Army and contribute to national service.  The application process is online, and no application fee is required.</p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Key Highlights</h2>
        <ul className="list-disc list-inside">
          <li>Openings for Tradesman Mate, Fireman, Material Assistant, and other roles.</li>
          <li>Total vacancies: 723</li>
          <li>No application fee</li>
          <li>Online application process</li>
          <li>All India Service Liability (AISL)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Recruitment Details</h2>
        <div className="mb-4">
          <p className="font-bold">Recruitment Organization:</p>
          <p>Indian Army Ordnance Corps (AOC)</p>
        </div>
        <div className="mb-4">
          <p className="font-bold">Post Names:</p>
          <p>Material Assistant, Fireman, Tradesman Mate, Junior Office Assistant, Civil Motor Driver, Tele Operator Grade-II, Carpenter &amp; Joiner, Painter &amp; Decorator, Multi-Tasking Staff</p>
        </div>
        <div className="mb-4">
          <p className="font-bold">Advertisement Number:</p>
          <p>AOC Group C Civilian Recruitment 2024</p>
        </div>
        <div className="mb-4">
          <p className="font-bold">Job Location:</p>
          <p>All India Service Liability (AISL)</p>
        </div>
      </section>


      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Vacancy Details</h2>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">Post Name</th>
              <th className="px-4 py-2">Vacancy</th>
              <th className="px-4 py-2">Qualification</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-2">Tradesman Mate (TMM)</td>
              <td className="px-4 py-2">389</td>
              <td className="px-4 py-2">10th Pass</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">Fireman (FM)</td>
              <td className="px-4 py-2">247</td>
              <td className="px-4 py-2">10th Pass</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">Material Assistant (MA)</td>
              <td className="px-4 py-2">19</td>
              <td className="px-4 py-2">Graduate/ Diploma</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">Junior Office Assistant (JOA)</td>
              <td className="px-4 py-2">27</td>
              <td className="px-4 py-2">Update Soon</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">Civil Motor Driver (OG)</td>
              <td className="px-4 py-2">4</td>
              <td className="px-4 py-2">Update Soon</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">Tele Operator Grade-II</td>
              <td className="px-4 py-2">14</td>
              <td className="px-4 py-2">Update Soon</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">Carpenter &amp; Joiner</td>
              <td className="px-4 py-2">7</td>
              <td className="px-4 py-2">Update Soon</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">Painter &amp; Decorator</td>
              <td className="px-4 py-2">5</td>
              <td className="px-4 py-2">Update Soon</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">Multi-Tasking Staff (MTS)</td>
              <td className="px-4 py-2">11</td>
              <td className="px-4 py-2">10th Pass</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Application Fee</h2>
        <p>No application fee is required.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Important Dates</h2>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">Event</th>
              <th className="px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-2">Short Notice Date</td>
              <td className="px-4 py-2">November 20, 2024</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">Detailed Notification Date</td>
              <td className="px-4 py-2">Update Soon</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">Apply Online Start</td>
              <td className="px-4 py-2">Update Soon</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">Apply Last Date</td>
              <td className="px-4 py-2">Update Soon</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">Exam Date</td>
              <td className="px-4 py-2">Update Soon</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Eligibility and Qualification</h2>
        <p><strong>Age Limit:</strong>  The age limit varies depending on the post.  Age relaxation is available as per government rules.</p>
        <p>Specific qualification requirements are listed in the Vacancy Details table above.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Selection Process</h2>
        <ol className="list-decimal list-inside">
          <li>Physical Efficiency &amp; Measurement Test (PE&amp;MT)</li>
          <li>Written Exam</li>
          <li>Document Verification</li>
          <li>Medical Examination</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Important Links</h2>
        <table className="w-full table-auto border-collapse">
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-2">Short Notice</td>
              <td className="px-4 py-2"><a href="https://haryanajobs.org/wp-content/uploads/2024/11/AOC-Recruitment-2024-Short-Notice.pdf" target="_blank" rel="noopener" className="text-blue-500 underline">Short Notice</a></td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">Notification</td>
              <td className="px-4 py-2">Update Soon</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">Apply Online</td>
              <td className="px-4 py-2">Update Soon</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">Old Notification (2023)</td>
              <td className="px-4 py-2"><a href="https://haryanajobs.org/wp-content/uploads/2023/02/AOC-Fireman-and-Tradesman-Recruitment-2023-Notification.pdf" target="_blank" rel="noopener" className="text-blue-500 underline">Notification</a></td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">AOC Official Website</td>
              <td className="px-4 py-2"><a href="https://www.aocrecruitment.gov.in/" target="_blank" rel="noopener" className="text-blue-500 underline">AOC</a></td>
            </tr>
          </tbody>
        </table>
      </section>

      <p className="text-sm text-gray-500 mt-8">Keywords: AOC Recruitment, Army Ordnance Corps, Fireman, Tradesman Mate, Material Assistant, Group C, Indian Army Jobs, Government Jobs, Online Application</p>
    </div>
  );
}