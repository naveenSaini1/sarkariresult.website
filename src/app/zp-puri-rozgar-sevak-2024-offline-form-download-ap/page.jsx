export default function RecruitmentInfo() {
  // This component displays recruitment information for ZP Puri Gram Rozgar Sevak Offline Form 2024. 
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">ZP Puri Gram Rozgar Sevak Offline Form 2024</h1>
      <div className="mb-4">
        <p className="font-bold text-green-500">Name of the Post:</p>
        <p>ZP, Puri Gram Rozgar Sevak Offline Form 2024</p>
      </div>
      <div className="mb-4">
        <p className="font-bold text-green-500">Post Date:</p>
        <p>23-09-2024</p>
      </div>
      <div className="mb-4">
        <p className="font-bold text-green-500">Total Vacancy:</p>
        <p>182</p>
      </div>
      <p className="mb-4">
        <span className="font-bold text-red-500">Brief Information:</span> Zilla Parishad, Puri has announced notification for the recruitment of Gram Rozgar Sevak (GRS) Vacancy on Contractual Basis. 
        Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply.
      </p>
      <h2 className="text-2xl font-bold mb-4">Important Details</h2>
      <table className="table-auto w-full text-center mb-4">
        <thead>
          <tr>
            <th colSpan={2} className="text-red-500 font-bold">Zilla Parishad, Puri</th>
          </tr>
          <tr>
            <th colSpan={2} className="text-green-500 font-bold">Gram Rozgar Sevak Vacancy 2024</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={2}>
              <p className="text-center">
                <a href="https://www.freejobalert.com" target="_blank" rel="noopener" className="text-blue-500 underline"></a>
              </p>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <p className="font-bold text-red-500">Important Dates</p>
              <ul>
                <li>Starting Date for Receipt of Application: 23-09-2024</li>
                <li>Last Date for Receipt of Application: 23-10-2024</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <p className="font-bold text-red-500">Age limit (as on 01-09-2024)</p>
              <ul>
                <li>Minimum Age limit: 18 Years</li>
                <li>Maximum Age limit: 40 Years</li>
                <li>Age Relaxation is Applicable as per Rules.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <p className="font-bold text-red-500">Qualification</p>
              <ul>
                <li>Candidates Should Posses 10+2 pass or its equivalent.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <p className="font-bold text-red-500">Vacancy Details</p>
            </td>
          </tr>
          <tr>
            <td className="text-center text-pink-500 font-bold">Trade Name</td>
            <td className="text-center text-pink-500 font-bold">Total</td>
          </tr>
          <tr>
            <td className="text-center">Gram Rozgar Sevak (GRS)</td>
            <td className="text-center">182</td>
          </tr>
          <tr>
            <td colSpan={2} className="text-blue-500">Interested Candidates Can Read the Full Notification Before Apply</td>
          </tr>
          <tr>
            <td colSpan={2} className="font-bold text-red-500">Important Links</td>
          </tr>
          <tr>
            <td className="text-center text-green-500 font-bold">Notification</td>
            <td className="text-center">
              <a href="https://img.freejobalert.com/uploads/2024/09/Notification-ZP-Puri-Gram-Rozgar-Sevak-Posts.pdf" 
                 target="_blank" 
                 rel="nofollow" 
                 className="text-blue-500 underline"
              >Click Here</a>
            </td>
          </tr>
          <tr>
            <td className="text-center text-green-500 font-bold">Official Website</td>
            <td className="text-center">
              <a href="https://puri.odisha.gov.in/" target="_blank" rel="nofollow" className="text-blue-500 underline">Click Here</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}