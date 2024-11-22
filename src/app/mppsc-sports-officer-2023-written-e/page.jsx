export default function MPPSCSportsOfficerRecruitment() {
  // This component displays recruitment information for the MPPSC Sports Officer position.  It includes details about the post, application process, important dates, and vacancy information.  All styling is done using Tailwind CSS.

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">MPPSC Sports Officer Recruitment 2023</h1>

      <p className="mb-4">
        The Madhya Pradesh Public Service Commission (MPPSC) has announced recruitment for Sports Officer positions.  This is a great opportunity for qualified candidates interested in a career in sports administration within Madhya Pradesh.  Key details regarding eligibility, application deadlines, and exam dates are provided below.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Key Highlights</h2>
        <ul className="list-disc list-inside">
          <li>Post Name: Sports Officer</li>
          <li>Total Vacancies: 129</li>
          <li>Application Deadline: 30-04-2024 (with late fee)</li>
          <li>Exam Date: 09-06-2024</li>
          <li>Minimum Age: 21 Years</li>
          <li>Maximum Age: 40 Years</li>
          <li>Educational Qualification: PG (Physical Education, Sports and Science)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Post Details</h2>
        <p className="mb-2">
          <span className="font-bold text-green-600">Name of the Post:</span> MPPSC Sports Officer 2023
        </p>
        <p className="mb-2">
          <span className="font-bold text-green-600">Post Date:</span> 31-12-2022
        </p>
        <p className="mb-2">
          <span className="font-bold text-green-600">Latest Update:</span> 22-11-2024
        </p>
        <p className="mb-2">
          <span className="font-bold text-green-600">Total Vacancy:</span> 129
        </p>
        <p className="mb-2">
          <span className="font-bold text-red-600">Brief Information:</span> Madhya Pradesh Public Service Commission (MPPSC) has advertised a Notification for the recruitment of Sports Officer Vacancy.
        </p>
      </section>


      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Application Fee</h2>
        <ul className="list-disc list-inside">
          <li>For All Candidates of Madhya Pradesh: Rs.500/-</li>
          <li>For SC/ST, OBC, &amp; PwD Candidates: Rs.250/-</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Important Dates</h2>
        <h3 className="text-lg font-medium mb-2">New Online Dates:</h3>
        <ul className="list-disc list-inside">
          <li>Starting Date for Apply Online &amp; Payment of Fee: 05-04-2024</li>
          <li>Last Date for Apply Online &amp; Payment of Fee: 13-04-2024 (12:00 noon)</li>
          <li>Starting Date for Edit Option: 08-04-2024</li>
          <li>Last Date for Edit Option: 15-04-2024 (12:00 noon)</li>
          {/* ...other dates removed for brevity... */}
        </ul>
        <h3 className="text-lg font-medium mb-2">Re Open Dates:</h3>
        <ul className="list-disc list-inside">
          <li>Starting Date for Apply Online &amp; Payment of Fee: 30-11-2023</li>
          <li>Last Date for Apply Online &amp; Payment of Fee: 15-12-2023</li>
          {/* ...other dates removed for brevity... */}
        </ul>
        <h3 className="text-lg font-medium mb-2">Old Dates:</h3>
        <ul className="list-disc list-inside">
          <li>Starting Date to Apply Online: 28-04-2023 at 12:00 PM</li>
          <li>Last Date to Apply Online: 30-10-2023</li>
          {/* ...other dates removed for brevity... */}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Vacancy Details</h2>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left px-4 py-2 border border-gray-300">Post Name</th>
              <th className="text-left px-4 py-2 border border-gray-300">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border border-gray-300">
              <td className="text-left px-4 py-2 border border-gray-300">Sports Officer</td>
              <td className="text-left px-4 py-2 border border-gray-300">129</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Important Links</h2>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <tbody>
            <tr className="border border-gray-300">
              <td className="text-left px-4 py-2 border border-gray-300">Written Exam Result (22-11-2024)</td>
              <td className="text-left px-4 py-2 border border-gray-300">
                <a href="https://img.freejobalert.com/uploads/2024/11/Written-Exam-Result-MPPSC-Sport-Officer-Posts.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Click Here</a> |{" "}
                <a href="https://img.freejobalert.com/uploads/2024/11/Notice-MPPSC-Sports-Officer-Posts.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Notice</a>
              </td>
            </tr>
            {/* ...other links removed for brevity... */}
          </tbody>
        </table>
      </section>

      <p className="text-sm text-gray-600 mt-4">Keywords: MPPSC, Sports Officer, Recruitment, Madhya Pradesh, Government Jobs, India</p>

    </div>
  );
}