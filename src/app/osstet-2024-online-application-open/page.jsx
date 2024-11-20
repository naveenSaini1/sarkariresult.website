export default function OSSTETRecruitment() {
  // This component displays recruitment information for the OSSTET 2024 exam.  It includes details about the application process, fees, important dates, and vacancy details.  The information is presented in a clear and structured format using Tailwind CSS for styling.

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">OSSTET 2024 Online Form</h1>
      <p className="text-lg mb-4">
        The Board of Secondary Education (BSE), Odisha invites applications for the Odisha Secondary School Teacher Eligibility Test (OSSTET) 2024.
      </p>

      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Key Highlights</h2>
        <ul className="list-disc list-inside">
          <li>Post Date: 20-11-2024</li>
          <li>Application Start Date: 19-11-2024</li>
          <li>Application Deadline: 30-11-2024</li>
          <li>Online Form Submission Deadline: 01-12-2024 (11:59 PM)</li>
        </ul>
      </div>


      <h2 className="text-2xl font-bold mb-2">Post Details</h2>
      <p className="mb-4">
        <strong>Name of the Post:</strong> OSSTET 2024 Online Form
      </p>
      <p className="mb-4">
        <strong>Post Date:</strong> 20-11-2024
      </p>
      <p className="mb-4">
        <strong>Brief Information:</strong> The Board of Secondary Education (BSE), Odisha has invited applications for the recruitment of Odisha Secondary School Teacher Eligibility Test (OSSTET) 2024 vacancies.
      </p>

      <h2 className="text-2xl font-bold mb-2">Application Fee</h2>
      <ul className="list-disc list-inside mb-4">
        <li>General & SEBC Candidates: Rs.900/-</li>
        <li>SC/ST Candidates: Rs.600/-</li>
        <li>Payment Mode: Through Online</li>
      </ul>

      <h2 className="text-2xl font-bold mb-2">Important Dates</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Starting Date for Apply Online & Payment of Fee: 19-11-2024</li>
        <li>Last Date to Apply Online: 30-11-2024</li>
        <li>Last Date for Payment of Fee: 30-11-2024</li>
        <li>Last Date for Submission of Online Forms: 01-12-2024 (11:59 PM)</li>
      </ul>

      <h2 className="text-2xl font-bold mb-2">Vacancy Details</h2>
      <table className="table-auto w-full border-collapse border border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">Subject Name</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-50">
            <td className="border border-gray-300 px-4 py-2">Trained Graduate Arts</td>
            <td className="border border-gray-300 px-4 py-2">Degree (Arts/ Commerce)/ Shastri (Sanskrit) or B.Ed, B.Ed – M.Ed/B.A.B.Ed</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-gray-300 px-4 py-2">Trained Graduate Science (PCM/ CBZ)</td>
            <td className="border border-gray-300 px-4 py-2">Degree (Science)/ B.Tech/ BE and B.Ed, B.Ed – M.Ed, B.Sc.B.Ed</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border border-gray-300 px-4 py-2">Hindi Teacher</td>
            <td className="border border-gray-300 px-4 py-2">Degree, B.Ed, B.H.Ed (Hindi)</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-gray-300 px-4 py-2">Classical Teacher (Sanskrit)</td>
            <td className="border border-gray-300 px-4 py-2">Degree (Sanskrit), Shikshya Shastri (Sanskrit)/B.Ed</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border border-gray-300 px-4 py-2">Classical Teacher (Urdu)</td>
            <td className="border border-gray-300 px-4 py-2">B.Ed/ Urdu B.Ed or BA (Persian)</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-gray-300 px-4 py-2">Classical Teacher (Telgu)</td>
            <td className="border border-gray-300 px-4 py-2">Degree (Arts), Telgu B.Ed</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border border-gray-300 px-4 py-2">Physical Education Teacher</td>
            <td className="border border-gray-300 px-4 py-2">10+2, C.P.Ed/B.P.Ed/ M.P.Ed/ D.P.Ed</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mb-2">Important Links</h2>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <tbody>
          <tr className="bg-gray-50">
            <td className="border border-gray-300 px-4 py-2 text-left">Apply Online</td>
            <td className="border border-gray-300 px-4 py-2 text-left"><a href="https://onlineapps.bseodisha.ac.in/osstet2024/" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Click Here</a></td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-gray-300 px-4 py-2 text-left">Syllabus</td>
            <td className="border border-gray-300 px-4 py-2 text-left"><a href="https://img.freejobalert.com/uploads/2024/11/Detail-Syllabus-BSE-Odisha-OSSTET.pdf" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Click Here</a></td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border border-gray-300 px-4 py-2 text-left">Fee Details</td>
            <td className="border border-gray-300 px-4 py-2 text-left"><a href="https://img.freejobalert.com/uploads/2024/11/Fee-Details-BSE-Odisha-OSSTET.pdf" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Click Here</a></td>
          </tr>
          <tr className="bg-gray-100">
            <td className="border border-gray-300 px-4 py-2 text-left">Guidelines</td>
            <td className="border border-gray-300 px-4 py-2 text-left"><a href="https://img.freejobalert.com/uploads/2024/11/Guidelines-BSE-Odisha-OSSTET.pdf" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Click Here</a></td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border border-gray-300 px-4 py-2 text-left">Official Website</td>
            <td className="border border-gray-300 px-4 py-2 text-left"><a href="https://www.bseodisha.ac.in/" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Click Here</a></td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mb-2">FAQs</h2>
      <dl className="mb-4">
        <dt className="font-bold">What is the starting date to apply online for BSE, Odisha OSSTET 2024?</dt>
        <dd>Starting Date to apply online is 19-11-2024.</dd>
        <dt className="font-bold">What is the last date to apply online for BSE, Odisha OSSTET 2024?</dt>
        <dd>Last Date for apply online is 30-11-2024.</dd>
        <dt className="font-bold">What is the Eligibility to apply for BSE, Odisha OSSTET 2024?</dt>
        <dd>10+2, Degree, PG (Relevant Discipline).</dd>
        <dt className="font-bold">How much fee to pay to apply for BSE, Odisha OSSTET 2024?</dt>
        <dd>For General & SEBC Candidates: Rs.900/- &amp; For SC/ ST Candidates: Rs.600/-</dd>
        <dt className="font-bold">What is the Payment Mode for BSE, Odisha OSSTET 2024?</dt>
        <dd>Through Online</dd>
      </dl>

      <p className="text-sm text-gray-500">Keywords: OSSTET, OSSTET 2024, Odisha Secondary School Teacher Eligibility Test, BSE Odisha, Teacher Recruitment, Odisha, Application Form, Online Application</p>
    </div>
  );
}