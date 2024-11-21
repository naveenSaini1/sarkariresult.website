export default function RRCERRecruitment() {
  // This component displays recruitment information for RRC ER Sports Quota Recruitment 2024.  It provides key details like eligibility, important dates, application fees, and vacancy information.  The content is structured for SEO purposes with clear headings, paragraphs, and lists.

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">RRC ER Sports Quota Recruitment 2024</h1>
      <p className="text-lg mb-4">The Railway Recruitment Cell (RRC), Eastern Railway (ER), Kolkata is conducting recruitment for Sports Quota Posts in Group C and Group D. This is a fantastic opportunity for sports-minded individuals to join the Indian Railways. This recruitment drive offers permanent positions with varied salary scales based on post and location.  The application process is entirely online.</p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Key Highlights</h2>
        <ul className="list-disc list-inside">
          <li><strong>Organization:</strong> Railway Recruitment Cell (RRC), Eastern Railway (ER), Kolkata</li>
          <li><strong>Post Type:</strong> Group C & D</li>
          <li><strong>Total Vacancies:</strong> 60</li>
          <li><strong>Application Deadline:</strong> 14 December 2024</li>
          <li><strong>Application Method:</strong> Online at rrcer.org</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Application Fee</h2>
        <table className="table-auto w-full mb-4">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Application Fee</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">General, EWS, OBC</td>
              <td className="border px-4 py-2">Rs. 500/-</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">SC, ST, EBC, Female</td>
              <td className="border px-4 py-2">Rs. 250/-</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Mode of Payment</td>
              <td className="border px-4 py-2">Online</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Important Dates</h2>
        <table className="table-auto w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">Event</th>
              <th className="px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Notification Release</td>
              <td className="border px-4 py-2">13 November 2024</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Online Application Start</td>
              <td className="border px-4 py-2">15 November 2024</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Online Application End</td>
              <td className="border px-4 py-2">14 December 2024</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Sports Trial Date</td>
              <td className="border px-4 py-2">2nd Week of January 2025</td>
            </tr>
          </tbody>
        </table>
      </section>


      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Vacancy Details & Eligibility</h2>
        <p className="mb-2"><strong>Age Limit:</strong> 18-25 Years (as of 01.01.2025)</p>
        <table className="table-auto w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">Post Name</th>
              <th className="px-4 py-2">Vacancy</th>
              <th className="px-4 py-2">Qualification</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Various Posts</td>
              <td className="border px-4 py-2">60</td>
              <td className="border px-4 py-2">10th/ 12th/ ITI/ Diploma/ Graduate + Sportsperson</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Selection Process</h2>
        <ol className="list-decimal list-inside">
          <li>Sports Trial/ Physical Fitness Test</li>
          <li>Document Verification</li>
          <li>Medical Examination</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Links</h2>
        <table className="table-auto w-full">
          <tbody>
            <tr>
              <td className="border px-4 py-2">Notification PDF</td>
              <td className="border px-4 py-2"><a href="https://haryanajobs.org/wp-content/uploads/2024/11/RRC-ER-Sports-Quota-Recruitment-2024-Notification.pdf" target="_blank" rel="noopener" className="text-blue-500 underline">Notification</a></td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Online Application Form</td>
              <td className="border px-4 py-2"><a href="https://rrcrecruit.co.in/SportsQut2425V02apmk/" target="_blank" rel="noopener" className="text-blue-500 underline">Apply Online</a></td>
            </tr>
            <tr>
              <td className="border px-4 py-2">RRC ER Official Website</td>
              <td className="border px-4 py-2"><a href="https://www.rrcer.org/notice_board.html" target="_blank" rel="noopener" className="text-blue-500 underline">RRC ER</a></td>
            </tr>
          </tbody>
        </table>
      </section>

      <p className="text-sm text-gray-600 mt-8">Keywords: RRC ER, Sports Quota, Recruitment, Railway Jobs, Group C, Group D, Online Application, India</p>
    </div>
  );
}