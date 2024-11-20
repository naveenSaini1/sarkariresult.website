export default function IndianNavyRecruitment() {
  // This component displays recruitment information for Indian Navy Civilian posts.  It includes key details like application deadlines, fees, vacancy information, and the selection process.  All styling is done using Tailwind CSS.

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Indian Navy Civilian Recruitment 2024</h1>

      <p className="mb-4">The Indian Navy is recruiting for various Group B and C civilian positions.  This is a fantastic opportunity to join a prestigious organization and contribute to national service.  The application process is open, and the examination is scheduled for late November 2024.</p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Key Highlights</h2>
        <ul className="list-disc list-inside">
          <li>Total Vacancies: 741</li>
          <li>Admit Card Release Date: November 20, 2024</li>
          <li>Exam Date: November 27-29, 2024</li>
          <li>Application Deadline: August 2, 2024</li>
        </ul>
      </section>


      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Application Fee</h2>
        <table className="table-auto w-full mb-4">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Fee</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Gen/OBC/EWS</td>
              <td className="border px-4 py-2">Rs. 295/-</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">SC/ST/PWD/ESM/Female</td>
              <td className="border px-4 py-2">Rs. 0/-</td>
            </tr>
          </tbody>
        </table>
        <p>Mode of Payment: Online</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Important Dates</h2>
        <table className="table-auto w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2">Event</th>
              <th className="px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Application Start Date</td>
              <td className="border px-4 py-2">July 20, 2024</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Application Last Date</td>
              <td className="border px-4 py-2">August 2, 2024</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Exam Date</td>
              <td className="border px-4 py-2">November 27-29, 2024</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Vacancy Details and Qualifications</h2>
        <table className="table-auto w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2">Post Name</th>
              <th className="px-4 py-2">Vacancy</th>
              <th className="px-4 py-2">Qualification</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Chargeman (Ammunition Workshop)</td>
              <td className="border px-4 py-2">1</td>
              <td className="border px-4 py-2">B.Sc./Diploma in Chem. Engg.</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Chargeman (Factory)</td>
              <td className="border px-4 py-2">10</td>
              <td className="border px-4 py-2">B.Sc. or Diploma in EE/ECE/ME/CE</td>
            </tr>
            {/* ...rest of the vacancy details... */}
            <tr>
              <td className="border px-4 py-2">MTS (Ministerial)</td>
              <td className="border px-4 py-2">16</td>
              <td className="border px-4 py-2">10th Pass/ITI</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Selection Process</h2>
        <ul className="list-disc list-inside">
          <li>Written Exam</li>
          <li>Physical Test (For Fireman &amp; Fire Engine Driver Only)</li>
          <li>Document Verification</li>
          <li>Medical Examination</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Exam Pattern</h2>
        <table className="table-auto w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2">Subject</th>
              <th className="px-4 py-2">Questions</th>
              <th className="px-4 py-2">Marks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">General Intelligence</td>
              <td className="border px-4 py-2">25</td>
              <td className="border px-4 py-2">25</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">General Awareness</td>
              <td className="border px-4 py-2">25</td>
              <td className="border px-4 py-2">25</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Quantitative Aptitude</td>
              <td className="border px-4 py-2">25</td>
              <td className="border px-4 py-2">25</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">English Language</td>
              <td className="border px-4 py-2">25</td>
              <td className="border px-4 py-2">25</td>
            </tr>
            <tr className="bg-gray-200">
              <td className="border px-4 py-2 font-bold">Total</td>
              <td className="border px-4 py-2 font-bold">100</td>
              <td className="border px-4 py-2 font-bold">100</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Important Links</h2>
        <table className="table-auto w-full">
          <tbody>
            <tr>
              <td className="border px-4 py-2 text-center">Admit Card/Exam City</td>
              <td className="border px-4 py-2 text-center"><a href="https://incet.cbt-exam.in/incetcycle2/login/user" target="_blank" rel="noopener" className="text-blue-500 underline">Admit Card</a></td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-center">Notification PDF</td>
              <td className="border px-4 py-2 text-center"><a href="https://haryanajobs.org/wp-content/uploads/2024/07/Indian-Navy-Civilian-Recruitment-2024-Notifiation-HaryanaJobs.in_.pdf" target="_blank" rel="noopener" className="text-blue-500 underline">Download</a></td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-center">Official Website</td>
              <td className="border px-4 py-2 text-center"><a href="https://www.joinindiannavy.gov.in/en/page/civilian.html" target="_blank" rel="noopener" className="text-blue-500 underline">Indian Navy</a></td>
            </tr>
          </tbody>
        </table>
      </section>

      <p className="text-sm text-gray-600 mt-4">Keywords: Indian Navy, Civilian Recruitment, INCET, Admit Card, 2024, Jobs, Vacancies,  Application</p>
    </div>
  );
}