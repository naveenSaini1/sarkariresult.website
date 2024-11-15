export default function RecruitmentInformation() {
  // This component displays information about the Railway Recruitment Cell (RRC) North Western Railway (NWR) Apprentice Recruitment 2024.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        RRC NWR Apprentice Recruitment 2024
      </h1>
      <p className="text-gray-600 mb-4">
        The Railway Recruitment Cell (RRC) North Western Railway (NWR), Jaipur has
        announced the recruitment of Apprentices at various Workshops/ Units
        under the jurisdiction of North Western Railway (NWR), Jaipur. This is a
        great opportunity for individuals seeking a career in the Indian Railways.
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Highlights</h2>
      <ul className="list-disc pl-6 text-gray-600 mb-4">
        <li>
          <strong>Total Vacancies:</strong> 1791
        </li>
        <li>
          <strong>Application Deadline:</strong> December 10, 2024
        </li>
        <li>
          <strong>Stipend:</strong> Rs. 9100/- per month
        </li>
        <li>
          <strong>Job Location:</strong> North Western Railway Region
        </li>
        <li>
          <strong>Eligibility:</strong> 10th Pass + ITI in Related Trade
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Application Fee</h2>
      <table className="table-auto w-full text-gray-600 mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left">Category</th>
            <th className="px-4 py-2 text-left">Application Fee</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">General, EWS, OBC</td>
            <td className="px-4 py-2">Rs. 100/-</td>
          </tr>
          <tr>
            <td className="px-4 py-2">SC, ST, PWD, Female</td>
            <td className="px-4 py-2">Rs. 0/-</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Important Dates</h2>
      <table className="table-auto w-full text-gray-600 mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left">Event</th>
            <th className="px-4 py-2 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">Notification Release Date</td>
            <td className="px-4 py-2">November 10, 2024</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Online Application Start Date</td>
            <td className="px-4 py-2">November 10, 2024</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Online Application Last Date</td>
            <td className="px-4 py-2">December 10, 2024</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Result Date</td>
            <td className="px-4 py-2">To be notified later</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Vacancies</h2>
      <table className="table-auto w-full text-gray-600 mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left">Post Name</th>
            <th className="px-4 py-2 text-left">Vacancy</th>
            <th className="px-4 py-2 text-left">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">Apprentice</td>
            <td className="px-4 py-2">1791</td>
            <td className="px-4 py-2">10th Pass + ITI in Related Trade</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Selection Process</h2>
      <ol className="list-decimal pl-6 text-gray-600 mb-4">
        <li>Merit List Based on 10th Class and ITI Marks</li>
        <li>Document Verification</li>
        <li>Medical Examination</li>
      </ol>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Important Links and Resources
      </h2>
      <table className="table-auto w-full text-gray-600 mb-4">
        <tbody>
          <tr>
            <td className="px-4 py-2">
              RRC NWR Apprentice Recruitment 2024 Notification
            </td>
            <td className="px-4 py-2">
              <a
                href="https://pmsuryaghar.org.in/wp-content/uploads/2024/11/RRC-NWR-Apprentice-Recruitment-2024-Notification-PDF.pdf"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener"
              >
                Notification
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">
              RRC NWR Apprentice Recruitment 2024 Online Application
            </td>
            <td className="px-4 py-2">
              <a
                href="https://rrcactapp.in/"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener"
              >
                Apply Online
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">RRC NWR Official Website</td>
            <td className="px-4 py-2">
              <a
                href="https://rrcjaipur.in/"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener"
              >
                RRC Jaipur
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <p className="text-gray-600 mb-4">
        For more information and updates, please visit the official RRC NWR
        website.
      </p>

      <p className="text-gray-600 mt-4">
        <strong>Keywords:</strong> RRC NWR, Apprentice Recruitment, Railway
        Jobs, Apprentice Vacancies, North Western Railway, ITI, Jaipur
      </p>
    </div>
  );
}