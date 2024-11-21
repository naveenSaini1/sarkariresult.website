export default function AOCRecruitment() {
  // This component displays recruitment information for AOC Group C vacancies in 2024.  It includes details about the post, vacancies, application fee (currently unavailable), important dates (also unavailable), and a table summarizing the vacancy details for different positions.  Social media links and scripts have been removed.

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">AOC Group C Recruitment 2024</h1>

      <p className="text-justify mb-4">
        This recruitment drive by the Army Ordnance Corps Centre (AOC) offers numerous opportunities for Group C positions, including Tradesman Mate, Fireman, and other roles.  Interested and eligible candidates are encouraged to review the notification and apply online.
      </p>

      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Key Highlights</h2>
        <ul className="list-disc list-inside">
          <li><strong>Post Name:</strong> AOC Group C Online Form 2024</li>
          <li><strong>Total Vacancies:</strong> 723</li>
          <li><strong>Post Date:</strong> November 21, 2024</li>
          <li>Application Fee: Available Soon</li>
          <li>Important Dates: Available Soon</li>
        </ul>
      </div>

      <h2 className="text-xl font-bold mb-2">Post Details</h2>
      <p className="text-justify mb-4">
        <strong>Name of the Post:</strong> AOC Group C Online Form 2024
      </p>
      <p className="text-justify mb-4">
        <strong>Post Date:</strong> November 21, 2024
      </p>
      <p className="text-justify mb-4">
        <strong>Total Vacancy:</strong> 723
      </p>
      <p className="text-justify mb-4">
        <strong>Brief Information:</strong> Army Ordnance Corps Centre (AOC) is recruiting for Group C positions (Tradesman Mate, Fireman &amp; Other).  Interested candidates who meet the eligibility criteria should review the notification and apply online.
      </p>


      <h2 className="text-xl font-bold mb-2">Vacancy Details</h2>
      <table className="table-auto w-full border-collapse border border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">Post Name</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white">
            <td className="border border-gray-300 px-4 py-2">Material Assistant (MA)</td>
            <td className="border border-gray-300 px-4 py-2">19</td>
          </tr>
          <tr className="bg-white">
            <td className="border border-gray-300 px-4 py-2">Junior Office Assistant (JOA)</td>
            <td className="border border-gray-300 px-4 py-2">27</td>
          </tr>
          <tr className="bg-white">
            <td className="border border-gray-300 px-4 py-2">Civil Motor Driver (OG)</td>
            <td className="border border-gray-300 px-4 py-2">4</td>
          </tr>
          <tr className="bg-white">
            <td className="border border-gray-300 px-4 py-2">Tele Operator Grade-II</td>
            <td className="border border-gray-300 px-4 py-2">14</td>
          </tr>
          <tr className="bg-white">
            <td className="border border-gray-300 px-4 py-2">Fireman</td>
            <td className="border border-gray-300 px-4 py-2">247</td>
          </tr>
          <tr className="bg-white">
            <td className="border border-gray-300 px-4 py-2">Carpenter &amp; Joiner</td>
            <td className="border border-gray-300 px-4 py-2">7</td>
          </tr>
          <tr className="bg-white">
            <td className="border border-gray-300 px-4 py-2">Painter &amp; Decorator</td>
            <td className="border border-gray-300 px-4 py-2">5</td>
          </tr>
          <tr className="bg-white">
            <td className="border border-gray-300 px-4 py-2">MTS</td>
            <td className="border border-gray-300 px-4 py-2">11</td>
          </tr>
          <tr className="bg-white">
            <td className="border border-gray-300 px-4 py-2">Tradesman Mate</td>
            <td className="border border-gray-300 px-4 py-2">389</td>
          </tr>
        </tbody>
      </table>

      <p className="text-center mb-4">Interested Candidates Can Read the Full Notification Before Apply Online</p>

      <h2 className="text-xl font-bold mb-2">Important Links</h2>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <tbody>
          <tr className="bg-white">
            <td className="border border-gray-300 px-4 py-2 text-left">Apply Online</td>
            <td className="border border-gray-300 px-4 py-2 text-center">Available Soon</td>
          </tr>
          <tr className="bg-white">
            <td className="border border-gray-300 px-4 py-2 text-left">Detailed Notification</td>
            <td className="border border-gray-300 px-4 py-2 text-center">Available Soon</td>
          </tr>
          <tr className="bg-white">
            <td className="border border-gray-300 px-4 py-2 text-left">Short Notification</td>
            <td className="border border-gray-300 px-4 py-2 text-center"><a href="https://img.freejobalert.com/uploads/2024/11/Short-Notice-AOC-Group-C-Posts.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Click Here</a></td>
          </tr>
          <tr className="bg-white">
            <td className="border border-gray-300 px-4 py-2 text-left">Official Website</td>
            <td className="border border-gray-300 px-4 py-2 text-center"><a href="https://aocrecruitment.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Click Here</a></td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-xl font-bold mt-4 mb-2">FAQs</h2>
      <p><strong>1. How many vacancies are being recruited by AOC Tradesman Mate, Fireman &amp; Other 2024?</strong></p>
      <p><strong>Ans:</strong> Total 723 Vacancies.</p>

      <p className="mt-4 text-sm text-gray-500">Keywords: AOC, Army Ordnance Corps, Group C Recruitment, Tradesman Mate, Fireman, Vacancies, 2024, Application, Jobs, India</p>
    </div>
  );
}