export default function DSSSBWarderRecruitment() {
  // This component displays information about the DSSSB Warder recruitment.  It summarizes key details like eligibility, important dates, and vacancy information.  Social media links and ads have been removed for clarity.

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">DSSSB Warder & Matron Recruitment 2024</h1>
      <p className="mb-4 text-lg">
        The Delhi Subordinate Services Selection Board (DSSSB) announced a recruitment drive for Jail Warder (Male) and Matron (Female) positions in 2024.  The Matron results were released on November 21, 2024, with the Warder results to follow shortly. This opportunity offers a rewarding career in public service with a competitive salary.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Key Highlights</h2>
        <ul className="list-disc list-inside">
          <li><strong>Organization:</strong> Delhi Subordinate Services Selection Board (DSSSB)</li>
          <li><strong>Post Names:</strong> Jail Warder (Male), Matron (Female)</li>
          <li><strong>Advertisement Number:</strong> 03/2023</li>
          <li><strong>Warder Vacancies:</strong> 271</li>
          <li><strong>Salary:</strong> Rs. 21700-69100/- (Level-3)</li>
          <li><strong>Matron Result Date:</strong> November 21, 2024</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Important Dates</h2>
        <table className="table-auto w-full mb-4">
          <thead className="bg-gray-100">
            <tr className="text-left">
              <th className="px-4 py-2">Event</th>
              <th className="px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-2">Application Start</td>
              <td className="px-4 py-2">November 21, 2023</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">Application Deadline</td>
              <td className="px-4 py-2">December 20, 2023</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">Exam Date</td>
              <td className="px-4 py-2">June 10-22, 2024</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">Matron Result Date</td>
              <td className="px-4 py-2">November 21, 2024</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">Warder Result Date</td>
              <td className="px-4 py-2">Soon</td>
            </tr>
          </tbody>
        </table>
      </section>


      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>
        <table className="table-auto w-full">
          <thead className="bg-gray-100">
            <tr className="text-left">
              <th className="px-4 py-2">Post Name</th>
              <th className="px-4 py-2">Vacancy</th>
              <th className="px-4 py-2">Qualification</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-2">Jail Warder (Male)</td>
              <td className="px-4 py-2">271 (UR-164, OBC-21, SC-18, ST-26, EWS-42)</td>
              <td className="px-4 py-2">12th Pass</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Eligibility and Qualification</h2>
        <p className="mb-2"><strong>Age Limit:</strong> 18-27 years (as of December 20, 2023)</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Selection Process</h2>
        <ul className="list-disc list-inside">
          <li>Written Exam (Computer Based Test)</li>
          <li>Physical Standard Test (PST) and Physical Efficiency Test (PET)</li>
          <li>Document Verification (DV)</li>
          <li>Medical Examination</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Important Links</h2>
        <table className="table-auto w-full">
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-2">Matron Result Notice and Cutoff</td>
              <td className="px-4 py-2"><a href="https://haryanajobs.org/wp-content/uploads/2024/11/DSSSB-Matron-Result-2024-PDF-Notice.pdf" target="_blank" rel="noopener" className="text-blue-500 underline">Notice</a></td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">Matron Result/ Marks Check Link</td>
              <td className="px-4 py-2"><a href="https://dsssbonline.nic.in/" target="_blank" rel="noopener" className="text-blue-500 underline">Result</a></td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">Jail Warder Recruitment Notification</td>
              <td className="px-4 py-2"><a href="https://haryanajobs.in/wp-content/uploads/2023/12/final_03-2023_dsssb_advt_1-HaryanaJobs.in_.pdf" className="text-blue-500 underline">Notification PDF</a></td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">DSSSB Official Website</td>
              <td className="px-4 py-2"><a href="https://dsssb.delhi.gov.in/" target="_blank" rel="noopener" className="text-blue-500 underline">DSSSB</a></td>
            </tr>
          </tbody>
        </table>
      </section>

      <p className="text-sm mt-8">Keywords: DSSSB, Delhi Subordinate Services Selection Board, Warder, Matron, Recruitment, Result, 2024,  Job, Delhi, India</p>

    </div>
  );
}