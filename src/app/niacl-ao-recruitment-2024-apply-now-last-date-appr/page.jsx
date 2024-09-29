export default function NIACLRecuitment() {
  // This component displays recruitment information for NIACL AO positions. 
  // It includes details about important dates, application fees, vacancy details, and eligibility criteria.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">NIACL Administrative Officer Recruitment 2024</h1>

      <div className="flex flex-col md:flex-row mb-8">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Key Details</h2>
          <div className="flex flex-col mb-4">
            <p className="font-bold">Recruitment Organization:</p>
            <p>The New India Assurance Company Limited (NIACL)</p>
          </div>
          <div className="flex flex-col mb-4">
            <p className="font-bold">Post Name:</p>
            <p>Administrative Officer (AO)</p>
          </div>
          <div className="flex flex-col mb-4">
            <p className="font-bold">Advertisement Number:</p>
            <p>CORP. HRM/ AO/ 2024</p>
          </div>
          <div className="flex flex-col mb-4">
            <p className="font-bold">Total Vacancies:</p>
            <p>170</p>
          </div>
          <div className="flex flex-col mb-4">
            <p className="font-bold">Salary:</p>
            <p>Rs. 88000/- per month</p>
          </div>
          <div className="flex flex-col mb-4">
            <p className="font-bold">Apply Last Date:</p>
            <p>29 September 2024</p>
          </div>
          <div className="flex flex-col mb-4">
            <p className="font-bold">Official Website:</p>
            <a href="https://www.newindia.co.in/recruitment/list" className="underline text-blue-500">NIACL</a>
          </div>
        </div>
        <div className="md:w-1/2 md:ml-8">
          <img src="/NIACL-AO-Recruitment-2024.jpg" alt="NIACL AO Recruitment 2024" className="w-full rounded-md" />
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4">Important Dates</h2>
      <table className="table-auto w-full text-center mb-8">
        <thead>
          <tr>
            <th className="px-4 py-2">Event</th>
            <th className="px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">Application Start Date</td>
            <td className="px-4 py-2">10 September 2024</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Application Last Date</td>
            <td className="px-4 py-2">29 September 2024</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Phase-I Exam Date</td>
            <td className="px-4 py-2">13 October 2024</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Phase-II Exam Date</td>
            <td className="px-4 py-2">17 November 2024</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mb-4">Application Fees</h2>
      <table className="table-auto w-full text-center mb-8">
        <thead>
          <tr>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2">Fee</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">General/ OBC/ EWS</td>
            <td className="px-4 py-2">Rs. 850/-</td>
          </tr>
          <tr>
            <td className="px-4 py-2">SC/ ST/ PWD</td>
            <td className="px-4 py-2">Rs. 100/-</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mb-4">Vacancy Details and Qualification</h2>
      <p className="mb-4">The age limit for NIACL AO Recruitment 2024 is 21-30 years. The crucial date for calculating the age limit is 1.9.2024. Age relaxation will be provided as per the rules.</p>
      <table className="table-auto w-full text-center mb-8">
        <thead>
          <tr>
            <th className="px-4 py-2">Post Name</th>
            <th className="px-4 py-2">Vacancy</th>
            <th className="px-4 py-2">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">AO (Generalist)</td>
            <td className="px-4 py-2">120</td>
            <td className="px-4 py-2">Any Graduate</td>
          </tr>
          <tr>
            <td className="px-4 py-2">AO (Accounts)</td>
            <td className="px-4 py-2">50</td>
            <td className="px-4 py-2">CA/ MBA/ M.Com</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mb-4">Selection Process</h2>
      <ul className="list-disc ml-8 mb-8">
        <li>Online Prelims Written Exam</li>
        <li>Online Mains Written Exam</li>
        <li>Interview</li>
        <li>Document Verification</li>
        <li>Medical Examination</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">How to Apply</h2>
      <ol className="list-decimal ml-8 mb-8">
        <li>Review the NIACL AO Recruitment 2024 Notification PDF to confirm your eligibility.</li>
        <li>Click on the "Apply Online" link below or visit the official NIACL website.</li>
        <li>Complete the online application form.</li>
        <li>Upload the required documents.</li>
        <li>Pay the application fee.</li>
        <li>Print the completed application form for your records.</li>
      </ol>

      <h2 className="text-2xl font-bold mb-4">Important Links</h2>
      <table className="table-auto w-full text-center mb-8">
        <tbody>
          <tr>
            <td className="px-4 py-2">Notification PDF</td>
            <td className="px-4 py-2"><a href="https://pmsuryaghar.org.in/wp-content/uploads/2024/09/NIACL-AO-Recruitment-2024-Notification.pdf" className="underline text-blue-500">Download</a></td>
          </tr>
          <tr>
            <td className="px-4 py-2">Apply Online</td>
            <td className="px-4 py-2"><a href="https://ibpsonline.ibps.in/niaclaug24/" className="underline text-blue-500">Apply Online</a></td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mb-4">FAQs</h2>
      <div className="mb-8">
        <div className="mb-4">
          <h3 className="font-bold">How to apply for NIACL AO Recruitment 2024?</h3>
          <p>Apply Online from the website newindia.co.in.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-bold">What is the last date to apply for NIACL AO Recruitment 2024?</h3>
          <p>29 September 2024</p>
        </div>
      </div>
    </div>
  );
}