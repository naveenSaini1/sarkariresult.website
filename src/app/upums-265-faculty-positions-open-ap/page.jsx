export default function RecruitmentInfo() {
  // This component displays recruitment information for Uttar Pradesh University of Medical Sciences (UPUMS) for Professor, Associate & Asst Professor positions. 
  // It includes details such as post date, total vacancy, brief information, application fee, important dates, age limit, qualifications, and vacancy details.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Uttar Pradesh University of Medical Sciences (UPUMS) Recruitment 2024</h1>

      <p className="text-lg mb-4">
        Uttar Pradesh University of Medical Sciences (UPUMS) has announced recruitment for Professor, Associate & Asst Professor vacancies. 
        Interested candidates who meet the eligibility criteria can apply for these positions.
      </p>

      <h2 className="text-2xl font-bold mb-2">Key Highlights</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>Post Name:</strong> UPUMS Professor, Associate & Asst Professor 2024</li>
        <li><strong>Post Date:</strong> 18-10-2024</li>
        <li><strong>Total Vacancy:</strong> 265</li>
      </ul>

      <h2 className="text-2xl font-bold mb-2">Application Fee</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>For Unreserved/EWS/OBC Category: Rs. 1000/-</li>
        <li>For SC/ ST Category: Rs. 500/-</li>
        <li>Mode of Payment: Demand Draft</li>
      </ul>

      <h2 className="text-2xl font-bold mb-2">Important Dates</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Last Date for receipt of applications is for First Cycle: 25-10-2024</li>
        <li>Last Date for receipt of applications is for Second Cycle: 31-12-2024</li>
        <li>Last Date for receipt of applications is for Third Cycle: 31-03-2025</li>
        <li>Last Date for receipt of applications is for Fourth Cycle: 30-06-2025</li>
      </ul>

      <h2 className="text-2xl font-bold mb-2">Age Limit (as on 01-07-2024)</h2>
      <p className="mb-4">Upper Age Limit for Regular Appointment:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>For Professor: No upper age limit however retirement age is 65 years.</li>
        <li>For Associate & Asst Professor: 50 Years</li>
      </ul>
      <p className="mb-4">Upper Age Limit for Contractual Appointment:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>For Professor: No upper age limit, the candidate can work up to 70 years.</li>
        <li>For Associate & Asst Professor: 60 Years</li>
        <li>Age Relaxation is Applicable as per Rules.</li>
        <li>For More Details Refer Notification.</li>
      </ul>

      <h2 className="text-2xl font-bold mb-2">Qualification</h2>
      <p className="mb-4">Broad Specialities</p>
      <ul className="list-disc pl-6 mb-4">
        <li>For Professor, Associate & Asst Professor Posts: Candidates Should Possess M.S/M.D/DNB</li>
      </ul>
      <p className="mb-4">Super Specialities</p>
      <ul className="list-disc pl-6 mb-4">
        <li>For Professor, Associate & Asst Professor Posts: Candidates Should Possess D.M./Mch or equivalent qualification as per NMC or erstwhile MCI.</li>
      </ul>
      <p className="mb-4">Department of Oral Maxillofacial Surgeon</p>
      <ul className="list-disc pl-6 mb-4">
        <li>For Assistant Professor Posts: Candidates Should Possess MDS/DNB (Oral Maxillofacial Surgery) duly recognised by DIC/NDC</li>
        <li>For More Details Refer Notification.</li>
      </ul>

      <h2 className="text-2xl font-bold mb-2">Vacancy Details</h2>
      <table className="table-auto w-full text-center mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Sl No</th>
            <th className="px-4 py-2">Post Name</th>
            <th className="px-4 py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="px-4 py-2">01.</td>
            <td className="px-4 py-2">Professor</td>
            <td className="px-4 py-2">34</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">02.</td>
            <td className="px-4 py-2">Associate Professor</td>
            <td className="px-4 py-2">89</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">03.</td>
            <td className="px-4 py-2">Assistant Professor</td>
            <td className="px-4 py-2">142</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mb-2">Important Links</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>
          <strong>Notification:</strong>{' '}
          <a
            href="https://img.freejobalert.com/uploads/2024/10/Notification-UPUMS-Professor-Associate-Asst-Professor-Posts.pdf"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="nofollow"
          >
            Click here
          </a>
        </li>
        <li>
          <strong>Official Website:</strong>{' '}
          <a
            href="https://www.upums.ac.in/"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="nofollow"
          >
            Click here
          </a>
        </li>
      </ul>

      <p className="text-center text-gray-500">
        For more information and to apply, please visit the official website of Uttar Pradesh University of Medical Sciences (UPUMS).
      </p>

      <h2 className="text-2xl font-bold mb-2 mt-8">Keywords</h2>
      <p className="text-gray-500">
        UPUMS, Uttar Pradesh University of Medical Sciences, Professor, Associate Professor, Assistant Professor, Recruitment,
        Vacancy, Application, Fee, Important Dates, Age Limit, Qualification, Notification, Official Website
      </p>
    </div>
  );
}