export default function RecruitmentInfo() {
  // This component displays recruitment information for the CDPO Office, Raniganj Anganwadi Helper position. 
  // It includes details like job title, vacancy count, important dates, age limits, qualifications, and application links.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">CDPO Office, Raniganj Anganwadi Helper Recruitment 2024</h1>
      <div className="mb-4">
        <p className="text-green-500 font-bold mb-1">Name of the Post:</p>
        <p className="font-bold">CDPO Office, Raniganj Anganwadi Helper Online Form 2024</p>
      </div>
      <div className="mb-4">
        <p className="text-green-500 font-bold mb-1">Post Date:</p>
        <p className="font-bold">27-08-2024</p>
      </div>
      <div className="mb-4">
        <p className="text-green-500 font-bold mb-1">Total Vacancy:</p>
        <p className="font-bold">54</p>
      </div>
      <div className="mb-4">
        <p className="text-red-500 font-bold mb-1">Brief Information:</p>
        <p className="text-justify">
          Office of the Child Development Project Officer (CDPO Office), Raniganj has published a Notification for the recruitment of Anganwadi Helper Vacancy Under the (ICDS) Project. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply online.
        </p>
      </div>
      <h2 className="text-2xl font-bold mb-4">Important Details</h2>
      <table className="table-auto w-full mb-4">
        <tbody>
          <tr>
            <td colSpan={3} className="text-center text-red-500 font-bold">Office of the Child Development Project Officer (CDPO Office), Raniganj</td>
          </tr>
          <tr>
            <td colSpan={3} className="text-center text-green-500 font-bold">Anganwadi Helper Vacancy 2024</td>
          </tr>
          <tr>
            <td colSpan={3} className="text-center"><a href="https://www.freejobalert.com" target="_blank" rel="noopener" className="text-blue-500"></a></td>
          </tr>
          <tr>
            <td colSpan={3} className="text-center text-red-500 font-bold">Important Dates</td>
          </tr>
          <tr>
            <td className="text-left">Starting Date for Apply Online:</td>
            <td colSpan={2} className="text-left font-bold">21-08-2024 (11:00AM)</td>
          </tr>
          <tr>
            <td className="text-left">Last Date for Apply Online:</td>
            <td colSpan={2} className="text-left font-bold">18-09-2024 (up to 11:59PM)</td>
          </tr>
          <tr>
            <td colSpan={3} className="text-center text-red-500 font-bold">Age Limit (as on 21-08-2024)</td>
          </tr>
          <tr>
            <td className="text-left">Maximum Age Limit:</td>
            <td colSpan={2} className="text-left font-bold">18 Years</td>
          </tr>
          <tr>
            <td className="text-left">Maximum Age Limit:</td>
            <td colSpan={2} className="text-left font-bold">35 Years</td>
          </tr>
          <tr>
            <td className="text-left">Age relaxation is applicable as per rules</td>
            <td colSpan={2} className="text-left"></td>
          </tr>
          <tr>
            <td colSpan={3} className="text-center text-red-500 font-bold">Qualification</td>
          </tr>
          <tr>
            <td className="text-left">Candidates Should Possess 12th Class</td>
            <td colSpan={2} className="text-left"></td>
          </tr>
          <tr>
            <td colSpan={3} className="text-center text-red-500 font-bold">Vacancy Details</td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center text-pink-500 font-bold">Post Name</td>
            <td className="text-center text-pink-500 font-bold">Total</td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center">Anganwadi Helper</td>
            <td className="text-center">54</td>
          </tr>
          <tr>
            <td colSpan={3} className="text-center text-blue-500 font-bold">Interested Candidates Can Read the Full Notification Before Apply Online</td>
          </tr>
          <tr>
            <td colSpan={3} className="text-center text-red-500 font-bold">Important Links</td>
          </tr>
          <tr>
            <td className="text-center text-green-500 font-bold">Apply Online</td>
            <td colSpan={2} className="text-center"><a href="https://icdspsbdn.in/" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a></td>
          </tr>
          <tr>
            <td className="text-center text-green-500 font-bold">Notification</td>
            <td colSpan={2} className="text-center"><a href="https://img.freejobalert.com/uploads/2024/08/Notification-CDPO-Office-Raniganj-Anganwadi-Helper-Posts.pdf" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a></td>
          </tr>
          <tr>
            <td className="text-center text-green-500 font-bold">Official Website</td>
            <td colSpan={2} className="text-center"><a href="https://icdspsbdn.in/" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}