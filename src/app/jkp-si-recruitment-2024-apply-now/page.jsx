export default function JKPoliceRecruitment() {
  // This component displays recruitment information for JK Police Sub-Inspectors (SIs).  It includes details about the recruitment process, important dates, application fees, and vacancy details.

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">JK Police Sub-Inspector Recruitment 2024</h1>

      <p className="text-lg mb-4">The Jammu and Kashmir Services Selection Board (JKSSB) is recruiting 669 Sub-Inspectors for the Jammu and Kashmir Police Department. This is an excellent opportunity for qualified individuals seeking a permanent government position.  The application period is from December 3, 2024, to January 2, 2025. </p>


      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Key Highlights</h2>
        <ul className="list-disc list-inside">
          <li><strong>Organization:</strong> Jammu and Kashmir Services Selection Board (JKSSB)</li>
          <li><strong>Post Name:</strong> Sub-Inspector (SI)</li>
          <li><strong>Total Vacancies:</strong> 669</li>
          <li><strong>Application Deadline:</strong> January 2, 2025</li>
          <li><strong>Salary:</strong> Rs. 35700- 113100/- (Level-6)</li>
          <li><strong>Job Location:</strong> Jammu & Kashmir</li>
        </ul>
      </section>


      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Application Fee</h2>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Category</th>
              <th className="border border-gray-300 px-4 py-2">Application Fee</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border border-gray-300 px-4 py-2">General, EWS, OBC</td>
              <td className="border border-gray-300 px-4 py-2">Rs. 700/-</td>
            </tr>
            <tr className="bg-white">
              <td className="border border-gray-300 px-4 py-2">SC, ST</td>
              <td className="border border-gray-300 px-4 py-2">Rs. 600/-</td>
            </tr>
            <tr className="bg-white">
              <td className="border border-gray-300 px-4 py-2">Mode of Payment</td>
              <td className="border border-gray-300 px-4 py-2">Online</td>
            </tr>
          </tbody>
        </table>
      </section>


      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Important Dates</h2>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Event</th>
              <th className="border border-gray-300 px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border border-gray-300 px-4 py-2">Notification Release</td>
              <td className="border border-gray-300 px-4 py-2">November 22, 2024</td>
            </tr>
            <tr className="bg-white">
              <td className="border border-gray-300 px-4 py-2">Online Application Start Date</td>
              <td className="border border-gray-300 px-4 py-2">December 3, 2024</td>
            </tr>
            <tr className="bg-white">
              <td className="border border-gray-300 px-4 py-2">Online Application End Date</td>
              <td className="border border-gray-300 px-4 py-2">January 2, 2025</td>
            </tr>
            <tr className="bg-white">
              <td className="border border-gray-300 px-4 py-2">Exam Date</td>
              <td className="border border-gray-300 px-4 py-2">To be Announced</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Vacancy Details</h2>
        <p>Total Vacancies: 669</p>
        <p>Category-wise Vacancies: OM: 267, SC: 53, ST-1: 67, ST-2: 67, OBC: 54, RBA: 67, ALC/IB: 27, EWS: 67</p>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Post Name</th>
              <th className="border border-gray-300 px-4 py-2">Vacancies</th>
              <th className="border border-gray-300 px-4 py-2">Qualification</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border border-gray-300 px-4 py-2">Sub-Inspector (SI)</td>
              <td className="border border-gray-300 px-4 py-2">669</td>
              <td className="border border-gray-300 px-4 py-2">Any Graduate</td>
            </tr>
          </tbody>
        </table>
      </section>


      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Selection Process</h2>
        <ol className="list-decimal list-inside">
          <li>Written Exam</li>
          <li>Physical Standards Test (PST)</li>
          <li>Physical Efficiency Test (PET)</li>
          <li>Document Verification</li>
          <li>Medical Examination</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Further Information</h2>
        <p>For detailed information, including eligibility criteria, refer to the official JKSSB website.</p>
        <a href="https://jkssb.nic.in/Whatsnew.html" target="_blank" rel="noopener" className="text-blue-500 hover:underline">JKSSB Official Website</a>
        <br/></br>
        <a href="https://haryanajobs.org/wp-content/uploads/2024/11/JK-Police-JKP-SI-Recruitment-2024-Notification-PDF.pdf" target="_blank" rel="noopener" className="text-blue-500 hover:underline">Download Notification PDF</a>
      </section>

      <p className="text-sm mt-8 text-gray-600">Keywords: JK Police, JKP, SI, Recruitment, 2024, Jammu and Kashmir, Sub-Inspector, Government Job, Vacancy, Application, Online Application</p>

    </div>
  );
}