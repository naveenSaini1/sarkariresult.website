export default function ESICLudhianaRecruitment() {
  // This component displays recruitment information for ESIC Ludhiana Various Vacancy 2024.  It includes key details like post date, total vacancies, brief information, important dates, vacancy details, and FAQs.  Styling is done using Tailwind CSS.

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">ESIC Ludhiana Various Vacancy 2024</h1>

      <p className="mb-4">
        The Employees State Insurance Corporation (ESIC), Ludhiana has announced a recruitment drive for various positions on a contract basis. This includes Super Specialists, Specialists, Senior Residents, and other vacancies.  Interested and eligible candidates are encouraged to review the notification and attend the walk-in interview.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Key Highlights</h2>
        <ul className="list-disc list-inside">
          <li><strong>Post Date:</strong> 22-11-2024</li>
          <li><strong>Walk-in Interview Date:</strong> 27-11-2024</li>
          <li><strong>Total Vacancies:</strong> 59</li>
          <li><strong>Application Fee:</strong> No Fee</li>
        </ul>
      </section>


      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Brief Information</h2>
        <p>Employees State Insurance Corporation (ESIC), Ludhiana is recruiting for Super Specialists, Specialists, Senior Residents, and other vacancies on a contract basis.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Vacancy Details</h2>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">Post Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Age Limit (as on 27-11-2024)</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Total</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Qualification</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-300">
              <td className="border border-gray-300 px-4 py-2">Super Specialist</td>
              <td className="border border-gray-300 px-4 py-2">69 Years</td>
              <td className="border border-gray-300 px-4 py-2">04</td>
              <td className="border border-gray-300 px-4 py-2">Degree (DM/ MCh/ DNB)</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="border border-gray-300 px-4 py-2">Specialist</td>
              <td className="border border-gray-300 px-4 py-2">69 Years</td>
              <td className="border border-gray-300 px-4 py-2">05</td>
              <td className="border border-gray-300 px-4 py-2">Diploma /PG Degree (concerned speciality)</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="border border-gray-300 px-4 py-2">Dental Surgeon</td>
              <td className="border border-gray-300 px-4 py-2">45 Years</td>
              <td className="border border-gray-300 px-4 py-2">01</td>
              <td className="border border-gray-300 px-4 py-2">BDS (diploma or PG degree holders will be preferred)</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="border border-gray-300 px-4 py-2">Senior Resident</td>
              <td className="border border-gray-300 px-4 py-2">45 Years</td>
              <td className="border border-gray-300 px-4 py-2">49</td>
              <td className="border border-gray-300 px-4 py-2">MBBS/ PG Diploma/ PG Degree (Concerned Speciality)</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Important Links</h2>
        <ul className="list-disc list-inside">
          <li>
            <a href="https://img.freejobalert.com/uploads/2024/11/Notification-ESIC-Various-Vacancy-Posts.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
              Notification
            </a>
          </li>
          <li>
            <a href="https://www.esic.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
              Official Website
            </a>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">FAQs</h2>
        <dl className="list-inside">
          <dt className="font-bold">What is the Date of Walk in Interview for ESIC Ludhiana Various Vacancy Walk in 2024?</dt>
          <dd>Date of Walk in Interview is 27-11-2024</dd>
          <dt className="font-bold">What is the Eligibility to apply for ESIC Ludhiana Various Vacancy Walk in 2024?</dt>
          <dd>Diploma/ Degree/ MBBS/ PG Diploma/Degree (Concerned Specialty).</dd>
          <dt className="font-bold">How many vacancies are being recruited by ESIC Ludhiana Various Vacancy Walk in 2024?</dt>
          <dd>Total 257 Vacancies.</dd>
          <dt className="font-bold">What is the Upper Age limit for ESIC Ludhiana Various Vacancy Walk in 2024?</dt>
          <dd>For Super Specialist/Specialist: 69 Years, For Dental Surgeon/ Sr Resident: 45 Years</dd>
          <dt className="font-bold">What is the as on date of Age limit for ESIC Ludhiana Various Vacancy Walk in 2024?</dt>
          <dd>27-11-2024</dd>
          <dt className="font-bold">How much fee to pay to apply for ESIC Ludhiana Various Vacancy Walk in 2024?</dt>
          <dd>There is No Fee.</dd>
        </dl>
      </section>

      <p className="text-sm text-gray-500">Keywords: ESIC, Ludhiana, Recruitment, Vacancy, Jobs, 2024, Walk-in Interview, Super Specialist, Specialist, Senior Resident, Dental Surgeon</p>
    </div>
  );
}