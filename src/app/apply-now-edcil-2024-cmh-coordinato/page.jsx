export default function EdCILRecruitment() {
  // This component displays recruitment information for EdCIL CMH & PMU Members/Coordinators 2024.  It includes key details like post name, dates, vacancies, eligibility, and application links.  Social media links and irrelevant scripts have been removed.

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">EdCIL CMH &amp; PMU Members/Coordinators Recruitment 2024</h1>

      <p className="text-lg mb-4">
        Educational Consultants India Limited (EdCIL) is recruiting for Career and Mental Health Counsellors and PMU Members/Coordinators on a contract basis. This is a fantastic opportunity for qualified individuals seeking to contribute to EdCIL's mission.
      </p>

      <section className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Key Highlights</h2>
        <ul className="list-disc list-inside">
          <li><strong>Post Name:</strong> EdCIL CMH &amp; PMU Members/Coordinators</li>
          <li><strong>Total Vacancies:</strong> 257</li>
          <li><strong>Application Deadline:</strong> 03-12-2024</li>
          <li><strong>Age Limit (as on 30-08-2024):</strong> CMH - 35 years, PMU Members/Coordinators - 45 years</li>
          <li><strong>Application Fee:</strong> No Fee</li>
        </ul>
      </section>


      <section className="mb-4">
        <h2 className="text-xl font-bold mb-2">Post Details</h2>
        <p className="mb-2"><strong>Post Date:</strong> 22-11-2024</p>
        <p className="mb-2"><strong>Advt No:</strong> 01/2024</p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-bold mb-2">Vacancy Details</h2>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border border-gray-300 text-left">Post Name</th>
              <th className="px-4 py-2 border border-gray-300 text-center">Total</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Qualification</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-300">
              <td className="px-4 py-2 border border-gray-300">Career and Mental Health Counsellors</td>
              <td className="px-4 py-2 border border-gray-300 text-center">255</td>
              <td className="px-4 py-2 border border-gray-300">Diploma/Degree/MA/M.Sc (Psychology)</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="px-4 py-2 border border-gray-300">PMU Members/Coordinators</td>
              <td className="px-4 py-2 border border-gray-300 text-center">02</td>
              <td className="px-4 py-2 border border-gray-300">PG (Psychiatric Social Work/Guidance and Counseling)</td>
            </tr>
          </tbody>
        </table>
      </section>


      <section className="mb-4">
        <h2 className="text-xl font-bold mb-2">Important Dates</h2>
        <ul className="list-disc list-inside">
          <li>Starting Date for Apply Online: 19-11-2024</li>
          <li>Last Date to Apply Online: 03-12-2024</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-bold mb-2">Age Limit (as on 30-08-2024)</h2>
        <ul className="list-disc list-inside">
          <li>Upper Age limit for CMH: 35 Years</li>
          <li>Upper Age limit for PMU Members/Coordinators: 45 Years</li>
          <li>Age relaxation is admissible as per rules.</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-bold mb-2">Important Links</h2>
        <ul className="list-disc list-inside">
          <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSd4OkPgHR_vLxd6n8RCXRd-Ef5_y5Tpiu4ff8fSd28Y795RLw/viewform" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Apply Online</a></li>
          <li><a href="https://img.freejobalert.com/uploads/2024/11/Notification-EdCIL-Career-and-Mental-Health-Counsellors-Coordinators-Posts.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Notification</a></li>
          <li><a href="https://www.edcilindia.co.in/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Official Website</a></li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-bold mb-2">FAQs</h2>
        <dl className="list-inside">
          <dt>What is the last date to apply?</dt>
          <dd>03-12-2024</dd>
          <dt>What is the eligibility?</dt>
          <dd>Diploma/Degree/PG (Relevant Discipline)</dd>
          <dt>How many vacancies are there?</dt>
          <dd>257</dd>
          <dt>What is the upper age limit?</dt>
          <dd>CMH: 35 Years, PMU Members/Coordinators: 45 Years</dd>
          <dt>What is the age limit as on date?</dt>
          <dd>30-09-2024</dd>
          <dt>What is the application fee?</dt>
          <dd>There is No Fee.</dd>
        </dl>
      </section>

      <p className="text-sm text-gray-500">Keywords: EdCIL, Recruitment, CMH, PMU, Members, Coordinators, 2024, Jobs, Career, Vacancy, Application</p>
    </div>
  );
}