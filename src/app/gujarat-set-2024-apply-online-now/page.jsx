export default function RecruitmentInformation() {
  // This component displays recruitment information for the Gujarat SET 2024 exam.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">Gujarat SET 2024 Online Form</h1>
      <div className="mb-4">
        <p className="text-green-500 font-bold">Name of the Post:</p>
        <strong className="text-black">Gujarat SET 2024 Online Form</strong>
      </div>
      <p className="text-justify mb-4">
        <span className="text-green-500 font-bold">Post Date: </span>
        <span className="text-black">21-08-2024</span>
      </p>
      <p className="mb-4">
        <span className="text-green-500 font-bold">Latest Update:</span> 27-08-2024
      </p>
      <p className="text-justify mb-4">
        <strong className="text-red-500">Brief Information:</strong> The Maharaja Sayajirao University of Baroda, Vadodara has published a Notification for conducting The 18th Gujarat State Eligibility Test 2024 (Gujarat SET-2024) for recruitment of Assistant Professor Vacancy. Those Candidates who are interested in the vacancy details &amp; completed all eligibility criteria can read the notification &amp; Apply Online.
      </p>
      {/* Table for Application Fee */}
      <table className="table-auto w-full border-collapse border-2 border-gray-300 text-center mb-4">
        <thead>
          <tr>
            <th colSpan={2} className="bg-red-500 text-white py-2">Application Fee</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2">
              <span className="text-black">General/ Gen-EWS/ SEBC (Non-creamy layer) Candidates:</span>
              <strong className="text-black">Rs. 900/- + Bank Charges</strong>
            </td>
          </tr>
          <tr>
            <td className="py-2">
              <span className="text-black">SC/ ST/ Third gender Candidates:</span>
              <strong className="text-black">Rs. 700/-+ Bank Charges</strong>
            </td>
          </tr>
          <tr>
            <td className="py-2">
              <span className="text-black">For PWD (PH/ VH) Candidates:</span>
              <strong className="text-black">Rs. 100/- + Bank Charges</strong>
            </td>
          </tr>
          <tr>
            <td className="py-2">Payment Mode: <strong>Through online mode by Credit Card/ Debit Card/ Net Banking.</strong></td>
          </tr>
        </tbody>
      </table>
      {/* Table for Important Dates */}
      <table className="table-auto w-full border-collapse border-2 border-gray-300 text-center mb-4">
        <thead>
          <tr>
            <th colSpan={2} className="bg-red-500 text-white py-2">&nbsp;Important Dates</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2">Starting Date for Apply Online &amp; Payment of Fee: <strong>21-08-2024</strong></td>
          </tr>
          <tr>
            <td className="py-2">Last Date for Apply Online &amp; Payment of Fee: <strong>16-09-2024</strong></td>
          </tr>
          <tr>
            <td className="py-2">Date of Exam: <span className="text-black"><strong>01-12-2024 (Sunday) in 33 Subjects</strong></span></td>
          </tr>
        </tbody>
      </table>
      {/* Table for Age Limit */}
      <table className="table-auto w-full border-collapse border-2 border-gray-300 text-center mb-4">
        <thead>
          <tr>
            <th colSpan={2} className="bg-red-500 text-white py-2">Age Limit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2" className={{ textAlign: 'left' }}>There is no upper age limit applying in GSET for eligibility of Assistant Professor.</td>
          </tr>
        </tbody>
      </table>
      {/* Table for Qualification */}
      <table className="table-auto w-full border-collapse border-2 border-gray-300 text-center mb-4">
        <thead>
          <tr>
            <th colSpan={2} className="bg-red-500 text-white py-2">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2">Candidates should possess Master’s Degree <strong>or</strong> equivalent exam.</td>
          </tr>
        </tbody>
      </table>
      {/* Table for Vacancy Details */}
      <table className="table-auto w-full border-collapse border-2 border-gray-300 text-center mb-4">
        <thead>
          <tr>
            <th colSpan={2} className="bg-red-500 text-white py-2">Vacancy Details</th>
          </tr>
          <tr>
            <th className="bg-pink-500 text-white py-2">Post Name</th>
            <th className="bg-pink-500 text-white py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2"><span className="text-black">Gujarat SET 2024 (Assistant Professor)</span></td>
            <td className="py-2"><span className="text-black">–</span></td>
          </tr>
        </tbody>
      </table>
      <p className="text-blue-500 text-center mb-4">
        <strong>Interested Candidates Can Read the Full Notification Before Apply Online</strong>
      </p>
      {/* Table for Important Links */}
      <table className="table-auto w-full border-collapse border-2 border-gray-300 text-center mb-4">
        <thead>
          <tr>
            <th colSpan={2} className="bg-red-500 text-white py-2">Important Links</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2"><span className="text-green-500 font-bold">Syllabus (27-08-2024)</span></td>
            <td className="py-2"><a href="https://gujaratset.ac.in/en/syll" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a></td>
          </tr>
          <tr>
            <td className="py-2"><span className="text-green-500 font-bold">Apply Online</span></td>
            <td className="py-2"><a href="https://www.gujaratset.ac.in/en/" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a></td>
          </tr>
          <tr>
            <td className="py-2"><span className="text-green-500 font-bold">Information Bulletin</span></td>
            <td className="py-2"><a href="https://img.freejobalert.com/uploads/2024/08/Information-Bulletin-Gujarat-SET-2024.pdf" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a></td>
          </tr>
          <tr>
            <td className="py-2"><span className="text-green-500 font-bold">Short Notification</span></td>
            <td className="py-2"><a href="https://www.gujaratset.ac.in/en/" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a></td>
          </tr>
          <tr>
            <td className="py-2"><span className="text-green-500 font-bold">Official Website</span></td>
            <td className="py-2"><a href="https://www.gujaratset.ac.in/en/" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a></td>
          </tr>
          <tr>
            <td className="py-2"><span className="text-pink-500 font-bold">Buy Current Affairs Book (ENGLISH MEDIUM)</span></td>
            <td className="py-2"><a href="https://www.amazon.in/dp/B0DBQW76SJ/?smid=A5G76JX0GL72Y" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}