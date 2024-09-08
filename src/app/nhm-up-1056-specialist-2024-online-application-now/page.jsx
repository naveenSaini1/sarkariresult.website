export default function RecruitmentInfo() {
  // This component displays recruitment information for NHM, UP Specialist 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">NHM, UP Specialist 2024 Online Form</h1>
      <div className="flex justify-between mb-4">
        <p className="text-lg font-medium text-green-500">Name of the Post: NHM, UP Specialist 2024 Online Form</p>
        <p className="text-lg font-medium">Post Date: 13-08-2024</p>
      </div>
      <p className="text-lg font-medium text-green-500">Total Vacancy: 1056</p>
      <p className="text-lg font-medium text-red-500 mb-4">Brief Information:</p>
      <p className="text-lg">
        National Health Mission (NHM) Uttar Pradesh has published a Notification for the recruitment of Specialist (Pathologist, Paediatrician, Consultant,
        Radiologist & Other) Vacancy. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification
        & Apply Online.
      </p>
      <table className="table-auto w-full border-collapse border border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th colSpan={4} className="text-center py-2 text-lg font-medium text-red-500">
              National Health Mission (NHM) Uttar Pradesh
            </th>
          </tr>
          <tr className="bg-gray-100">
            <th colSpan={4} className="text-center py-2 text-lg font-medium text-pink-500">
              Advt No. 648/SPMU/NHM/HR/Appnt./2024-25/2591
            </th>
          </tr>
          <tr className="bg-gray-100">
            <th colSpan={4} className="text-center py-2 text-lg font-medium text-green-500">
              Specialist Vacancy 2024
            </th>
          </tr>
          <tr className="bg-gray-100">
            <th colSpan={4} className="text-center py-2 text-lg font-medium">
              <a href="https://www.freejobalert.com" target="_blank" rel="noopener" className="text-blue-500">
                
              </a>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th colSpan={4} className="text-center py-2 text-lg font-medium text-red-500">
              Important Dates
            </th>
          </tr>
          <tr>
            <td colSpan={4} className="py-2">
              <ul>
                <li className="text-lg">Starting Date for Apply Online: 05-08-2024 (02:00PM)</li>
                <li className="text-lg">Last Date to Apply Online: 05-09-2024 (12:00AM)</li>
                <li className="text-lg">Tentative Auction Date: 12-09-2024, 11:00AM to 02:00PM</li>
              </ul>
            </td>
          </tr>
          <tr>
            <th colSpan={4} className="text-center py-2 text-lg font-medium text-red-500">
              Age Limit (as on 31-03-2024)
            </th>
          </tr>
          <tr>
            <td colSpan={4} className="py-2">
              <ul>
                <li className="text-lg">Maximum Age Limit: Not Exceed 65 Years</li>
                <li className="text-lg">Age Relaxation is Applicable as per rules</li>
              </ul>
            </td>
          </tr>
          <tr>
            <th colSpan={4} className="text-center py-2 text-lg font-medium text-red-500">
              Vacancy Details
            </th>
          </tr>
          <tr>
            <th className="text-center py-2 text-lg font-medium text-pink-500">Sl No</th>
            <th className="text-center py-2 text-lg font-medium text-pink-500">Post Name</th>
            <th className="text-center py-2 text-lg font-medium text-pink-500">Total</th>
            <th className="text-center py-2 text-lg font-medium text-pink-500">Qualification</th>
          </tr>
          <tr>
            <td className="text-center py-2">1</td>
            <td className="text-center py-2">Specialist</td>
            <td className="text-center py-2">1056</td>
            <td className="text-center py-2">MD/DNB/MS/DA/PG/MBBS (Concern Speciality)</td>
          </tr>
          <tr>
            <th colSpan={4} className="text-center py-2 text-lg font-medium text-blue-500">
              Interested Candidates Can Read the Full Notification Before Apply Online
            </th>
          </tr>
          <tr>
            <th colSpan={4} className="text-center py-2 text-lg font-medium text-red-500">
              Important Links
            </th>
          </tr>
          <tr>
            <th className="text-center py-2 text-lg font-medium text-green-500">Apply Online</th>
            <th colSpan={3} className="text-center py-2 text-lg font-medium text-blue-500">
              <a href="https://nhmrect.upnrhm.gov.in/" target="_blank" rel="nofollow" className="text-blue-500">
                Click Here
              </a>
            </th>
          </tr>
          <tr>
            <th className="text-center py-2 text-lg font-medium text-green-500">Detail Notification</th>
            <th colSpan={3} className="text-center py-2 text-lg font-medium text-blue-500">
              <a href="https://upnrhm.gov.in/Uploads/Opportunities/9514420350457986.pdf" target="_blank" rel="nofollow" className="text-blue-500">
                Click Here
              </a>
            </th>
          </tr>
          <tr>
            <th className="text-center py-2 text-lg font-medium text-green-500">Short Notification</th>
            <th colSpan={3} className="text-center py-2 text-lg font-medium text-blue-500">
              <a href="https://img.freejobalert.com/uploads/2024/08/Short-Notification-NHM-UP-Specialist-2024.pdf" target="_blank" rel="nofollow" className="text-blue-500">
                Click Here
              </a>
            </th>
          </tr>
          <tr>
            <th className="text-center py-2 text-lg font-medium text-green-500">Official Website</th>
            <th colSpan={3} className="text-center py-2 text-lg font-medium text-blue-500">
              <a href="https://upnrhm.gov.in/Home/Index" target="_blank" rel="nofollow" className="text-blue-500">
                Click Here
              </a>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}