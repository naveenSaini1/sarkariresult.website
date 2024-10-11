export default function AAIApprenticeRecruitment() {
  // This component displays recruitment information for AAI Apprentice positions. 
  // It includes details like post name, important dates, age limit, qualification, vacancy details, and important links.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">AAI Apprentice Online Form 2024</h1>

      <div className="mb-4">
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Name of the Post:</span> AAI Apprentice Online Form 2024
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Post Date:</span> 11-10-2024
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Total Vacancy: </span> 135
        </p>
        <p className="text-lg mb-2">
          <span className="text-red-500">Brief Information:</span> Airports Authority of India (AAI) is inviting applications for the recruitment of Graduate, Diploma & ITI Apprentice Vacancy. Candidates interested in the vacancy details and who meet all eligibility criteria can read the Notification and Apply Online. 
        </p>
      </div>

      <h2 className="text-2xl font-bold mb-4">Key Highlights</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Last Date to Apply Online: 31-10-2024</li>
        <li>Maximum Age Limit: 26 Years (as on 31-07-2024)</li>
        <li>Age relaxation is applicable as per rules.</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Qualification</h2>
      <div className="mb-4">
        <h3 className="text-xl font-medium mb-2">For Graduate/Diploma Apprentice:</h3>
        <ul className="list-disc list-inside">
          <li>Candidates should possess a Diploma/Degree (Relevant Engg).</li>
        </ul>
        <h3 className="text-xl font-medium mb-2">For ITI Apprentice:</h3>
        <ul className="list-disc list-inside">
          <li>Candidates should possess ITI/NCVT (Relevant Trade).</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>
      <table className="table-auto w-full mb-4">
        <thead>
          <tr className="bg-gray-200 text-gray-800">
            <th className="text-center py-2 px-4">Post Name</th>
            <th className="text-center py-2 px-4">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-gray-700">
            <td className="text-center py-2 px-4">Graduate Apprentice</td>
            <td className="text-center py-2 px-4">45</td>
          </tr>
          <tr className="text-gray-700">
            <td className="text-center py-2 px-4">Diploma Apprentice</td>
            <td className="text-center py-2 px-4">50</td>
          </tr>
          <tr className="text-gray-700">
            <td className="text-center py-2 px-4">ITI Trade Apprentice</td>
            <td className="text-center py-2 px-4">40</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mb-4">Important Links</h2>
      <table className="table-auto w-full mb-4">
        <tbody>
          <tr className="text-gray-700">
            <td className="text-center py-2 px-4">
              <span className="text-green-500">Apply Online</span>
            </td>
            <td className="text-center py-2 px-4">
              <a href="https://nats.education.gov.in/" target="_blank" rel="noopener" className="text-blue-500 hover:underline">
                Link 1
              </a>
              {' | '}
              <a href="https://www.apprenticeshipindia.gov.in/" target="_blank" rel="noopener" className="text-blue-500 hover:underline">
                Link 2
              </a>
            </td>
          </tr>
          <tr className="text-gray-700">
            <td className="text-center py-2 px-4">
              <span className="text-green-500">Notification</span>
            </td>
            <td className="text-center py-2 px-4">
              <a href="https://img.freejobalert.com/uploads/2024/10/Notification-AAI-Graduate-Apprentice-Diploma-Apprentice-Other-Posts.pdf" target="_blank" rel="noopener" className="text-blue-500 hover:underline">
                Click Here
              </a>
            </td>
          </tr>
          <tr className="text-gray-700">
            <td className="text-center py-2 px-4">
              <span className="text-green-500">Official Website</span>
            </td>
            <td className="text-center py-2 px-4">
              <a href="https://www.aai.aero/" target="_blank" rel="noopener" className="text-blue-500 hover:underline">
                Click Here
              </a>
            </td>
          </tr>
        </tbody>
      </table>

      <p className="text-gray-700 mt-4">
        Interested Candidates Can Read the Full Notification Before Applying Online.
      </p>
      
      <p className="text-gray-700 mt-4">
        Keywords: AAI, Apprentice, Recruitment, Graduate, Diploma, ITI, Online Form, Application, Vacancy, Notification, Apply Online, Important Dates, Qualification, Age Limit, Important Links
      </p>
    </div>
  );
}