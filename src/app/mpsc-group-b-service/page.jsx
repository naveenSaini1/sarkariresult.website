export default function RecruitmentInformation() {
  // This component displays recruitment information for the MPSC Group B Services Exam 2024. 
  // It includes details like post name, application fee, important dates, age limits, qualification, and vacancy details.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">MPSC Group B Services Exam 2024</h1>
      <p className="text-lg text-gray-600 mb-4">
        The Maharashtra Public Service Commission (MPSC) has announced the recruitment for various Group B (Non-Gazzetted) Services through a combined preliminary exam in 2024.  This exam is for the recruitment of Assistant Section Officer, State Tax Inspector, and Sub-Inspector of Police vacancies. 
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Highlights</h2>
      <ul className="list-disc ml-6 text-gray-600">
        <li><strong>Post Name:</strong> MPSC Group B Services Exam 2024</li>
        <li><strong>Post Date:</strong> 11-10-2024</li>
        <li><strong>Total Vacancy:</strong> 480</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Application Fee</h2>
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Prelims Exam:</h3>
        <ul className="list-disc ml-6 text-gray-600">
          <li>For Open Category: Rs. 394/-</li>
          <li>For Backward Classes/Economically Weaker Sections/Orphans/Disabled: Rs. 294/-</li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Mains Exam:</h3>
        <ul className="list-disc ml-6 text-gray-600">
          <li>For Open Category: Rs. 544/-</li>
          <li>For Backward Classes/Economically Weaker Sections/Orphans/Disabled: Rs. 344/-</li>
          <li>Payment Mode: Through Debit Card, Credit Card, Net Banking or Pay Offline through E-Challan.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Important Dates</h2>
      <ul className="list-disc ml-6 text-gray-600">
        <li>Start Date to Apply Online & Payment of Fee: 14-10-2024 (14:00 hrs)</li>
        <li>Last Date to Apply Online & Payment of Fee: 04-11-2024 (23:59 hrs)</li>
        <li>Date of taking copy of challan for Payment of Examination fee by Challan in SBI: 06-11-2024 (23:59 hrs)</li>
        <li>Last Date For Payment of Examination fee by Currency: 07-11-2024 During bank Office hours</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Age Limit (as on 01-02-2025)</h2>
      <ul className="list-disc ml-6 text-gray-600">
        <li>Minimum Age Limit for Assistant Section Officer, State Tax Inspector: 18 Years</li>
        <li>Minimum Age Limit for Sub-Inspector of Police: 19 Years</li>
        <li>Maximum Age Limit for Assistant Section Officer, State Tax Inspector: 38 Years</li>
        <li>Maximum Age Limit for Sub-Inspector of Police: 31 Years</li>
        <li>Age Relaxation is Applicable as per Rules.</li>
        <li>For More Details Refer The Notification</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Qualification</h2>
      <ul className="list-disc ml-6 text-gray-600">
        <li>Candidates Should Possess Any Degree</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Physical Standards</h2>
      <p className="text-gray-600 mb-2">For Sub-Inspector of Police:</p>
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Height:</h3>
        <ul className="list-disc ml-6 text-gray-600">
          <li>For Male/Tertiary candidates who self-identify as Male: 165 cm (Barefoot) (Minimum)</li>
          <li>For Women / Third Party Candidates who self-identify as Female / Third Party: 157 cm (barefoot) (minimum)</li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Chest:</h3>
        <ul className="list-disc ml-6 text-gray-600">
          <li>For Male/Tertiary candidates who self-identify as Male: Uninflated 79 cm Inflate capacity of at least 5 cm necessary</li>
          <li>For More Details Refer The Notification</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Vacancy Details</h2>
      <table className="table-auto w-full text-gray-600">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="px-4 py-2">Sl. No</th>
            <th className="px-4 py-2">Post Name</th>
            <th className="px-4 py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">1.</td>
            <td className="px-4 py-2">Assistant Section Officer, Group B</td>
            <td className="px-4 py-2">55</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">2.</td>
            <td className="px-4 py-2">State Tax Inspector, Group B</td>
            <td className="px-4 py-2">209</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">3.</td>
            <td className="px-4 py-2">Sub Inspector of Police, Group B</td>
            <td className="px-4 py-2">216</td>
          </tr>
        </tbody>
      </table>
      <p className="text-gray-600 mb-4">Interested Candidates Can Read the Full Notification Before Apply Online</p>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Important Links</h2>
      <table className="table-auto w-full text-gray-600">
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Apply Online</td>
            <td className="px-4 py-2">Available on 14-10-2024</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Notification</td>
            <td className="px-4 py-2"><a href="https://mpsc.gov.in/home" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a></td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Official Website</td>
            <td className="px-4 py-2"><a href="https://mpsc.gov.in/home" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a></td>
          </tr>
        </tbody>
      </table>

      <p className="text-gray-600">Keywords: MPSC, Group B Services, Maharashtra Public Service Commission, Assistant Section Officer, State Tax Inspector, Sub-Inspector of Police, Recruitment, Exam, Application Fee, Important Dates, Age Limit, Qualification, Vacancy Details</p>
    </div>
  );
}