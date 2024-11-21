export default function IBPSRecruitment() {
  // This component displays information about the IBPS PO recruitment.  It includes key dates, eligibility criteria, and vacancy details.  All styling is done with Tailwind CSS.

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">IBPS Probationary Officer (PO) Recruitment 2024</h1>
      <p className="text-lg mb-6">The Institute of Banking Personnel Selection (IBPS) has announced the results for the Prelims Exam for Probationary Officers (PO)/ Management Trainees (MT) recruitment.  This opportunity presents a chance to begin a career in banking within various institutions across India.</p>

      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Key Highlights</h2>
        <ul className="list-disc list-inside">
          <li>Recruitment Organization: Institute of Banking Personnel Selection (IBPS)</li>
          <li>Post Name: Probationary Officer/ Management Trainee (PO/MT)</li>
          <li>Vacancies: 4450+</li>
          <li>Approximate Salary: ₹50,000 per month</li>
          <li>Prelims Result Date: November 21, 2024</li>
          <li>Mains Exam Date: November 30, 2024</li>
        </ul>
      </section>


      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Important Dates</h2>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border border-gray-300 text-left">Event</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="px-4 py-2 border border-gray-300">Application Start</td>
              <td className="px-4 py-2 border border-gray-300">August 1, 2024</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-2 border border-gray-300">Application Deadline</td>
              <td className="px-4 py-2 border border-gray-300">August 28, 2024</td>
            </tr>
            <tr className="bg-white">
              <td className="px-4 py-2 border border-gray-300">Prelims Exam Date</td>
              <td className="px-4 py-2 border border-gray-300">October 19 & 20, 2024</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-2 border border-gray-300">Prelims Result Date</td>
              <td className="px-4 py-2 border border-gray-300">November 21, 2024</td>
            </tr>
            <tr className="bg-white">
              <td className="px-4 py-2 border border-gray-300">Mains Exam Date</td>
              <td className="px-4 py-2 border border-gray-300">November 30, 2024</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-2 border border-gray-300">Interview Date</td>
              <td className="px-4 py-2 border border-gray-300">January/February 2025</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Post Details and Eligibility</h2>
        <p className="mb-2">Age Limit: 20-30 years (as of August 1, 2024). Age relaxation applies as per government rules.</p>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border border-gray-300 text-left">Post Name</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Vacancies</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Qualification</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="px-4 py-2 border border-gray-300">PO/MT</td>
              <td className="px-4 py-2 border border-gray-300">4455</td>
              <td className="px-4 py-2 border border-gray-300">Graduation in any discipline</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Selection Process</h2>
        <ol className="list-decimal list-inside">
          <li>Prelims Written Exam</li>
          <li>Mains Written Exam</li>
          <li>Interview</li>
          <li>Document Verification</li>
          <li>Medical Examination</li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">Important Links</h2>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <tbody>
            <tr>
              <td className="px-4 py-2 border border-gray-300 text-left">Prelims Result</td>
              <td className="px-4 py-2 border border-gray-300"><a href="https://ibpsonline.ibps.in/crppo14jul24/res1a_nov24/login.php?appid=dbad66c45d0a300d72fa618cbb4443c8" target="_blank" rel="noopener" className="text-blue-500 underline">Prelims Result</a></td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300 text-left">Mains Admit Card</td>
              <td className="px-4 py-2 border border-gray-300"><a href="https://www.ibps.in/index.php/management-trainees-xiv/" target="_blank" rel="noopener" className="text-blue-500 underline">Mains Admit Card</a></td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300 text-left">Notification</td>
              <td className="px-4 py-2 border border-gray-300"><a href="https://pmsuryaghar.org.in/wp-content/uploads/2024/08/IBPS-PO-2024-Notification.pdf" target="_blank" rel="noopener" className="text-blue-500 underline">Notification</a></td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300 text-left">IBPS Official Website</td>
              <td className="px-4 py-2 border border-gray-300"><a href="https://ibps.in/" target="_blank" rel="noopener" className="text-blue-500 underline">IBPS</a></td>
            </tr>
          </tbody>
        </table>
      </section>

      <p className="text-sm mt-4">Keywords: IBPS PO, IBPS Recruitment, Banking Jobs, Probationary Officer, Management Trainee, Exam Results,  Important Dates</p>

    </div>
  );
}