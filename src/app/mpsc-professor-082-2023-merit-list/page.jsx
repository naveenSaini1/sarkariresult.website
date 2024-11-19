export default function MPSCProfessorRecruitment() {
  // This component displays recruitment information for MPSC Professor positions in 2023.  It includes details about the post, important dates, application fees, vacancy details, and important links.

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">MPSC Professor 2023 Recruitment</h1>
      <p className="text-justify mb-4">
        This recruitment drive by the Maharashtra Public Service Commission (MPSC) offers various professorial positions.  The application period is now closed, but the merit list has been released.  Key details are provided below for informational purposes.
      </p>

      <section className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Key Highlights</h2>
        <ul className="list-disc list-inside">
          <li><strong>Post Name:</strong> MPSC Professor, Associate Professor, Assistant Professor</li>
          <li><strong>Total Vacancies:</strong> 114</li>
          <li><strong>Application Period:</strong> Closed (29-09-2023 to 19-10-2023)</li>
          <li><strong>Merit List Released:</strong> 19-11-2024</li>
        </ul>
      </section>


      <section className="mb-4">
        <h2 className="text-xl font-bold mb-2">Post Details</h2>
        <p className="text-justify mb-2">
          <span className="font-bold text-green-600">Name of the Post:</span> MPSC Professor 2023
        </p>
        <p className="text-justify mb-2">
          <span className="font-bold text-green-600">Post Date:</span> 29-09-2023
        </p>
        <p className="text-justify mb-2">
          <span className="font-bold text-green-600">Latest Update:</span> 19-11-2024
        </p>
        <p className="text-justify mb-2">
          <span className="font-bold text-green-600">Total Vacancy:</span> 114
        </p>
        <p className="text-justify mb-2">
          <span className="font-bold text-red-600">Brief Information:</span> The Maharashtra Public Service Commission (MPSC) is recruiting for Professor, Assistant Professor, and Associate Professor positions.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-bold mb-2">Application Fee</h2>
        <ul className="list-disc list-inside">
          <li>Professor &amp; Associate Professor: Open Category: Rs. 719/- [Backward Classes/Economically Weaker Sections/Orphans/Disabled: Rs. 449/-]</li>
          <li>Assistant Professor: Open Category: Rs. 394/- [Backward Classes/Economically Weaker Sections/Orphans/Disabled: Rs. 294/-]</li>
          <li>Payment Mode: Through Debit Card, Credit Card, Net Banking or Pay Offline through E-Challan.</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-bold mb-2">Important Dates</h2>
        <ul className="list-disc list-inside">
          <li>Starting Date for Apply Online &amp; payment of Fee: 29-09-2023 from 14:00 Hrs</li>
          <li>Last Date for Apply Online &amp; payment of Fee: 19-10-2023 up to 23:59 Hrs</li>
          <li>Date of taking Copy of Challan for payment of examination fee by challan in SBI: 22-10-2023 up to 23:59 Hrs</li>
          <li>Closing Date for Examination Fee by Currency: 23-10-2023 during bank office hours</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-bold mb-2">Vacancy Details</h2>
        <table className="w-full border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-400 p-2 text-center text-red-600">Advt No</th>
              <th className="border border-gray-400 p-2 text-center text-red-600">Post Name</th>
              <th className="border border-gray-400 p-2 text-center text-red-600">Total</th>
              <th className="border border-gray-400 p-2 text-center text-red-600">Age Limit as on (01-01-2024)</th>
              <th className="border border-gray-400 p-2 text-center text-red-600">Qualification</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="border border-gray-400 p-2 text-purple-600">071 to 082/2023</td>
              <td className="border border-gray-400 p-2">Professor</td>
              <td className="border border-gray-400 p-2">17</td>
              <td className="border border-gray-400 p-2" rowspan="2">19 to 50 Years</td>
              <td className="border border-gray-400 p-2" rowspan="3">Post-graduate degree in concerned subject</td>
            </tr>
            <tr className="text-center">
              <td className="border border-gray-400 p-2 text-purple-600">083 to 093/2023</td>
              <td className="border border-gray-400 p-2">Associate Professor</td>
              <td className="border border-gray-400 p-2">29</td>
            </tr>
            <tr className="text-center">
              <td className="border border-gray-400 p-2 text-purple-600">094 to 110/2023</td>
              <td className="border border-gray-400 p-2">Asst Professor</td>
              <td className="border border-gray-400 p-2">68</td>
              <td className="border border-gray-400 p-2">19 to 45 Years</td>
            </tr>
          </tbody>
        </table>
        <p className="text-center text-blue-600 mt-2">Interested Candidates Can Read the Full Notification Before Apply Online.</p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-bold mb-2">Important Links</h2>
        <ul className="list-disc list-inside">
          <li><span className="font-bold text-green-600">Merit List (19-11-2024):</span>  Advt No. <a href="https://img.freejobalert.com/uploads/2024/11/Merit-List-MPSC-Professor-Posts-1.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">082/2023</a> | <a href="https://img.freejobalert.com/uploads/2024/11/Notice-MPSC-Professor-Posts-1.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Notice</a></li>
          <li><span className="font-bold text-green-600">Answer Key (23-11-2023):</span> <a href="https://mpsc.gov.in/downloadFile/english/7979" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Click Here</a></li>
          <li><span className="font-bold text-green-600">Official Website:</span> <a href="https://www.mpsc.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Click Here</a></li>

        </ul>
      </section>

      <p className="text-sm text-gray-600">Keywords: MPSC, Professor, Recruitment, 2023, Maharashtra, Public Service Commission,  Application, Vacancy, Merit List</p>
    </div>
  );
}