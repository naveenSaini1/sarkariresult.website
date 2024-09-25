export default function RecruitmentInformation() {
  // Displays recruitment information for Pune Police Various Vacancy 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Pune Police Various Vacancy 2024</h1>
      <p className="text-lg mb-4">
        <span className="font-bold text-green-500">Name of the Post:</span> Pune Police Various Vacancy Offline Form 2024
      </p>
      <ul className="list-disc mb-4">
        <li>
          <span className="font-bold text-green-500">Post Date:</span>{' '}
          <span className="text-gray-700">24-09-2024</span>
        </li>
        <li>
          <span className="font-bold text-green-500">Total Vacancy:</span>{' '}
          <span className="text-gray-700">152</span>
        </li>
      </ul>
      <p className="text-lg mb-4">
        <span className="font-bold text-red-500">Brief Information:</span> Pune Police or Commissioner of Police, Pune City has given a
        notification for the recruitment of Cleaner, Office Attendant, Head Chef, Assistant Chef & Catering Staff Vacancies under Group D
        Cadre posts. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the
        Notification & Apply.
      </p>
      <h2 className="text-2xl font-bold mb-4">Important Dates</h2>
      <ul className="list-disc mb-4">
        <li>
          <span className="font-bold">Starting Date Receipt of Application:</span> 24-09-2024
        </li>
        <li>
          <span className="font-bold">Last Date for Receipt of Application:</span> 03-10-2024 at 06:00 pm
        </li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>
      <table className="table-auto w-full border-collapse border border-gray-300 mb-4">
        <thead>
          <tr>
            <th className="text-left p-2 border border-gray-300">Post Name</th>
            <th className="text-left p-2 border border-gray-300">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="text-left p-2 border border-gray-300">Cleaner</td>
            <td className="text-left p-2 border border-gray-300">102</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="text-left p-2 border border-gray-300">Office Attendant</td>
            <td className="text-left p-2 border border-gray-300">33</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="text-left p-2 border border-gray-300">Head Chef</td>
            <td className="text-left p-2 border border-gray-300">01</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="text-left p-2 border border-gray-300">Assistant Chef</td>
            <td className="text-left p-2 border border-gray-300">07</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="text-left p-2 border border-gray-300">Catering Staff</td>
            <td className="text-left p-2 border border-gray-300">09</td>
          </tr>
        </tbody>
      </table>
      <p className="text-blue-500 font-bold mb-4">
        Interested Candidates Can Read the Full Notification Before Apply
      </p>
      <h2 className="text-2xl font-bold mb-4">Important Links</h2>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="text-left p-2 border border-gray-300">
              <span className="font-bold text-green-500">Notification</span>
            </td>
            <td className="text-left p-2 border border-gray-300">
              <a
                href="https://img.freejobalert.com/uploads/2024/09/Notification-Pune-Police-Various-Vacancy.jpg"
                target="_blank"
                className="text-blue-500 underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="text-left p-2 border border-gray-300">
              <span className="font-bold text-green-500">Official Website</span>
            </td>
            <td className="text-left p-2 border border-gray-300">
              <a href="https://punepolice.gov.in/" target="_blank" className="text-blue-500 underline">
                Click Here
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}