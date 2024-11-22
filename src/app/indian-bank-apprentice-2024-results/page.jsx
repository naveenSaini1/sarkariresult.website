export default function IndianBankApprenticeRecruitment() {
  // This component displays recruitment information for the Indian Bank Apprentice 2024 vacancy.  It includes details about the post, important dates, application fees, vacancy details by state, and key highlights.  All styling is done with Tailwind CSS.

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Indian Bank Apprentice Vacancy 2024</h1>
      <p className="text-lg mb-4">
        The Indian Bank is recruiting for Apprentice positions in 2024. This
        opportunity is open to candidates who meet the eligibility criteria.  See below for details on how to apply.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Key Highlights</h2>
        <ul className="list-disc list-inside">
          <li>Post Name: Indian Bank Apprentice</li>
          <li>Total Vacancies: 1500</li>
          <li>Application Deadline: 31-07-2024</li>
          <li>Result &amp; DV Date: 22-11-2024</li>
        </ul>
      </section>


      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Post Details</h2>
        <p className="mb-2">
          <span className="font-bold text-green-600">Name of the Post:</span> Indian Bank Apprentice 2024 Result &amp; DV Date Announced
        </p>
        <p className="mb-2">
          <span className="font-bold text-green-600">Post Date:</span> 11-07-2024
        </p>
        <p className="mb-2">
          <span className="font-bold text-green-600">Latest Update:</span> 22-11-2024
        </p>
        <p className="mb-2">
          <span className="font-bold text-green-600">Total Vacancy:</span> 1500
        </p>
        <p className="mb-2">
          <span className="font-bold text-red-600">Brief Information:</span> Indian Bank has announced recruitment for Apprentice vacancies.  Interested and eligible candidates can apply online.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Application Fee</h2>
        <ul className="list-disc list-inside">
          <li>General/OBC/EWS Candidates: Rs. 500/-</li>
          <li>SC/ST/PwBD Candidates: Nil</li>
          <li>Payment Mode: Through Online</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Important Dates</h2>
        <ul className="list-disc list-inside">
          <li>Starting Date For Apply Online: 10-07-2024</li>
          <li>Last Date For Apply Online &amp; Payment of Fee: 31-07-2024</li>
          <li>Date for Downloading of Call Letter: 20-09-2024 to 28-09-2024</li>
          <li>Date of DV: 28 to 30-11-2024</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Age Limit (as on 01-07-2024)</h2>
        <ul className="list-disc list-inside">
          <li>Minimum Age Limit: 20 Years</li>
          <li>Maximum Age Limit: 28 Years</li>
          <li>Age relaxation is applicable as per rules.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Qualification</h2>
        <ul className="list-disc list-inside">
          <li>Candidates Should Possess Any Degree</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Vacancy Details</h2>
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left border border-gray-300 px-4 py-2">Sl.No</th>
              <th className="text-left border border-gray-300 px-4 py-2">State Name</th>
              <th className="text-left border border-gray-300 px-4 py-2">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">01</td>
              <td className="border border-gray-300 px-4 py-2">Andhra Pradesh</td>
              <td className="border border-gray-300 px-4 py-2">82</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">02</td>
              <td className="border border-gray-300 px-4 py-2">Arunachal Pradesh</td>
              <td className="border border-gray-300 px-4 py-2">01</td>
            </tr>
             {/* ...rest of the rows... */}
             <tr>
              <td className="border border-gray-300 px-4 py-2">31</td>
              <td className="border border-gray-300 px-4 py-2">West Bengal</td>
              <td className="border border-gray-300 px-4 py-2">152</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Important Links</h2>
        <table className="w-full table-auto border-collapse border border-gray-300">
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2 text-green-600">Result &amp; DV Date (22-11-2024)</td>
              <td className="border border-gray-300 px-4 py-2"><a href="https://img.freejobalert.com/uploads/2024/11/Result-DV-Date-Indian-Bank-Apprentice-Posts.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Click Here</a></td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 text-green-600">Online Exam Call Letter (21-09-2024)</td>
              <td className="border border-gray-300 px-4 py-2"><a href="https://ibpsonline.ibps.in/ibeappjul24/oecla_sep24/login.php?appid=4d4910233df9055e64b013c31d42e0cb" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Click Here</a></td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 text-green-600">Apply Online</td>
              <td className="border border-gray-300 px-4 py-2"><a href="https://nats.education.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Click Here</a></td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 text-green-600">Notification</td>
              <td className="border border-gray-300 px-4 py-2"><a href="https://img.freejobalert.com/uploads/2024/07/Notification-Indian-Bank-Apprentice-Posts.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Click Here</a></td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 text-green-600">Official Website</td>
              <td className="border border-gray-300 px-4 py-2"><a href="https://www.indianbank.in/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Click Here</a></td>
            </tr>
          </tbody>
        </table>
      </section>

      <p className="text-center mt-4">&#8212;&#8212;&#8212;&#8212;&#8212;</p>
      <p className="mt-4 text-sm text-gray-600">Keywords: Indian Bank, Apprentice, Recruitment, 2024, Vacancy, Application, Online, Apply</p>

    </div>
  );
}