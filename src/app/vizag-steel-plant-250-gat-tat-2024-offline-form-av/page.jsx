export default function RecruitmentInformation() {
  // This component displays recruitment information for Vizag Steel Plant GAT & TAT 2024. 
  // It includes post details, important dates, qualifications, vacancy details, and application links.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Vizag Steel Plant GAT &amp; TAT Offline Form 2024</h1>
      <p className="text-gray-700 mb-4">
        <span className="font-bold text-green-500">Name of the Post:</span> Vizag Steel Plant GAT &amp; TAT Offline Form 2024
      </p>
      <p className="text-gray-700 mb-4">
        <span className="font-bold text-green-500">Post Date: </span>10-09-2024
      </p>
      <p className="text-gray-700 mb-4">
        <span className="font-bold text-green-500">Total Vacancy: </span>250
      </p>
      <p className="text-gray-700 mb-4">
        <span className="font-bold text-red-500">Brief Information:</span> Vizag Steel Plant has invited applications for the recruitment of Graduate Apprentice Trainee (GAT), Technician Apprentice Trainee (TAT) Vacancy. Those Candidates who are interested in the vacancy details &amp; completed all eligibility criteria can read the Notification &amp; Apply.
      </p>
      <table className="table-auto w-full border border-gray-300 mt-4">
        <thead>
          <tr>
            <th colSpan="2" className="text-center text-red-500 font-bold py-2">
              Vizag Steel Plant
            </th>
          </tr>
          <tr>
            <th colSpan="2" className="text-center text-green-500 font-bold py-2">
              GAT &amp; TAT Vacancy 2024
            </th>
          </tr>
          <tr>
            <th colSpan="2" className="text-center py-2">
              <a href="https://www.freejobalert.com" target="_blank" rel="noopener" className="text-blue-500"></a>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="2" className="text-center py-2">
              <strong className="text-red-500">Important Dates</strong>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="py-2">
              <ul>
                <li>Last date of submission of Google form: <strong className="font-inherit">30-09-2024</strong></li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="text-center py-2">
              <strong className="text-red-500">Qualification</strong>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="py-2">
              <ul>
                <li>
                  <strong className="font-inherit">For Graduate(Engineering) Apprentice: </strong>Candidates Should Possess Degree (Engg/ Technology)
                </li>
                <li>
                  <strong className="font-inherit">For Technician (Diploma) Apprentice: </strong>Candidates Should Possess Diploma (Engg/ Technology)
                </li>
              </ul>
              <p>
                <strong>Note:</strong> Engineering / Diploma passed out (in the years 2021/2022/2023/2024 only) and who have registered in MHRD NATS Portal (www.mhrdnats.gov.in), which is mandatory
              </p>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="text-center py-2">
              <strong className="text-red-500">Vacancy Details</strong>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="text-center py-2">
              <strong>GAT &amp; TAT</strong>
            </td>
          </tr>
          <tr>
            <td className="text-center py-2">
              <span className="text-pink-500 font-bold">Branch Name</span>
            </td>
            <td className="text-center py-2">
              <span className="text-pink-500 font-bold">Total</span>
            </td>
          </tr>
          <tr>
            <td className="text-center py-2">
              <span className="text-gray-900">B.E/B.Tech</span>
            </td>
            <td className="text-center py-2">
              <span className="text-gray-900">200</span>
            </td>
          </tr>
          <tr>
            <td className="text-center py-2">
              <span className="text-gray-900">Diploma</span>
            </td>
            <td className="text-center py-2">
              <span className="text-gray-900">50</span>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="text-center py-2">
              <span className="text-blue-500 font-bold">Interested Candidates Can Read the Full Notification Before Apply</span>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="text-center py-2">
              <strong className="text-red-500">Important Links </strong>
            </td>
          </tr>
          <tr>
            <td className="text-center py-2">
              <span className="text-green-500 font-bold">Google Form</span>
            </td>
            <td className="text-center py-2">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScMtBlEBfNrYri2KnTbvmOAzO2loVNKboX_ciWIhOSVGJlI0w/viewform?usp=send_form" target="_blank" rel="nofollow" className="text-blue-500">
                <strong>Click Here</strong>
              </a>
            </td>
          </tr>
          <tr>
            <td className="text-center py-2">
              <span className="text-green-500 font-bold">Notification </span>
            </td>
            <td className="text-center py-2">
              <a href="https://img.freejobalert.com/uploads/2024/09/Notification-Vizag-Steel-Plant-GAT-TAT-Posts.pdf" target="_blank" rel="nofollow" className="text-blue-500">
                <strong>Click Here</strong>
              </a>
            </td>
          </tr>
          <tr>
            <td className="text-center py-2">
              <span className="text-green-500 font-bold">Official Website</span>
            </td>
            <td className="text-center py-2">
              <a href="https://www.vizagsteel.com/index.asp" target="_blank" rel="nofollow" className="text-blue-500">
                <strong>Click Here</strong>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}