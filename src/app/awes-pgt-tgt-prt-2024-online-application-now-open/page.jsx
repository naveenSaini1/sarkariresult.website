export default function RecruitmentInformation() {
  // This component displays recruitment information for AWES PGT, TGT & PRT 2024.
  // It includes details like post name, dates, eligibility, and application process.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">AWES PGT, TGT & PRT 2024 Online Form</h1>
      <div className="mb-4">
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Name of the Post:</span> AWES PGT, TGT & PRT 2024 Online Form
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Post Date:</span> 09-09-2024
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Latest Update:</span> 11-09-2024
        </p>
      </div>
      <p className="text-lg mb-4">
        <span className="text-red-500 font-bold">Brief Information:</span> Army Welfare Education Society (AWES) has published a notification for the recruitment of PGT, TGT & PRT vacancy. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply Online.
      </p>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Application Fee</h2>
        <ul className="list-disc pl-5">
          <li className="mb-2">Exam Fee: Rs.385/-</li>
          <li>Payment Mode: Through UPI/Debit/Credit Cards/ Net banking</li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Important Dates</h2>
        <ul className="list-disc pl-5">
          <li className="mb-2">Starting Date for Apply Online: 09-09-2024</li>
          <li className="mb-2">Last Date to Apply Online: 25-10-2024</li>
          <li className="mb-2">Date for Downloading of Admit Card: 12-11-2024</li>
          <li className="mb-2">Date for Exam: 23 & 24-11-2024</li>
          <li>Date of Reserve: 25-11-2024</li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Age Limit</h2>
        <ul className="list-disc pl-5">
          <li className="mb-2">Minimum Age limit for Army Spouses: Below 40</li>
          <li className="mb-2">Maximum Age limit for Army Spouses: Below 57</li>
          <li className="mb-2">Minimum Age limit for Others: Below 40</li>
          <li>Maximum Age limit for Others: Below 57</li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Vacancy Details</h2>
        <table className="table-auto w-full border border-gray-300 mb-4">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-300 px-4 py-2">Post Name</th>
              <th className="border border-gray-300 px-4 py-2">Qualification</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-left">
              <td className="border border-gray-300 px-4 py-2">PRT</td>
              <td className="border border-gray-300 px-4 py-2">B. Ed/ PG</td>
            </tr>
            <tr className="text-left">
              <td className="border border-gray-300 px-4 py-2">TGT</td>
              <td className="border border-gray-300 px-4 py-2">Degree/ B. Ed/</td>
            </tr>
            <tr className="text-left">
              <td className="border border-gray-300 px-4 py-2">PGT</td>
              <td className="border border-gray-300 px-4 py-2">Degree/D.El.Ed./B.El.Ed. or B.Ed</td>
            </tr>
          </tbody>
        </table>
        <p className="text-blue-500 text-center font-medium mb-4">Interested Candidates Can Read the Full Notification Before Apply Online</p>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Important Links</h2>
        <table className="table-auto w-full border border-gray-300 mb-4">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border border-gray-300 px-4 py-2">Link</th>
              <th className="border border-gray-300 px-4 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-left">
              <td className="border border-gray-300 px-4 py-2"><a className="text-blue-500" href="https://awes.register.smartexams.in/home" target="_blank" rel="nofollow">Click Here</a></td>
              <td className="border border-gray-300 px-4 py-2">Apply Online (11-09-2024)</td>
            </tr>
            <tr className="text-left">
              <td className="border border-gray-300 px-4 py-2"><a className="text-blue-500" href="https://img.freejobalert.com/uploads/2024/09/Notification-AWES-PGT-TGT-PRT-Posts.pdf" target="_blank" rel="nofollow">Click Here</a></td>
              <td className="border border-gray-300 px-4 py-2">Detail Notification (11-09-2024)</td>
            </tr>
            <tr className="text-left">
              <td className="border border-gray-300 px-4 py-2"><a className="text-blue-500" href="https://img.freejobalert.com/uploads/2024/09/Short-Notice-AWES-PGT-PRT-TGT-Posts.jpeg" target="_blank" rel="nofollow">Click Here</a></td>
              <td className="border border-gray-300 px-4 py-2">Short Notification</td>
            </tr>
            <tr className="text-left">
              <td className="border border-gray-300 px-4 py-2"><a className="text-blue-500" title="Army Public School" href="https://awesindia.com/" target="_blank" rel="nofollow">Click Here</a></td>
              <td className="border border-gray-300 px-4 py-2">Official Website</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}