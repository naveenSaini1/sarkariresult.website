export default function RecruitmentInfo() {
  // Displays recruitment information for Shri Chhatrapati Shivajiraje College of Engineering, Pune
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Shri Chhatrapati Shivajiraje College of Engineering, Pune
      </h1>
      <p className="text-gray-600 mb-4">
        <span className="font-bold text-green-500">Name of the Post:</span>{' '}
        Various Vacancy Offline Form 2024
      </p>
      <p className="text-gray-600 mb-4">
        <span className="font-bold text-green-500">Post Date:</span>{' '}
        <span className="text-gray-800">30-08-2024</span>
      </p>
      <p className="text-gray-600 mb-4">
        <span className="font-bold text-green-500">Total Vacancy: </span>
        57
      </p>
      <p className="text-gray-600 mb-4">
        <span className="font-bold text-red-500">Brief Information:</span> Shri
        Chhatrapati Shivajiraje College of Engineering, Pune has published a
        Notification for the recruitment of Professor, Associate Professor &
        Asst Professor Vacancy. Those Candidates who are interested in the
        vacancy details & completed all eligibility criteria can read the
        notification & Apply.
      </p>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Important Dates</h2>
      <ul className="list-disc ml-4 text-gray-600">
        <li>
          Last Date for Receipt of Application: <strong>within 15 days from the of publication </strong>
        </li>
      </ul>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Qualification</h2>
      <ul className="list-disc ml-4 text-gray-600">
        <li>
          Candidates should possess as per the AICTE/Savitribai Phule Pune
          University/Govt of Maharashtra norms
        </li>
      </ul>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Vacancy Details
      </h2>
      <table className="table-auto w-full text-gray-600 mb-4">
        <thead>
          <tr>
            <th className="text-center font-bold text-red-500">
              Post Name
            </th>
            <th className="text-center font-bold text-red-500">
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center">Professor</td>
            <td className="text-center">07</td>
          </tr>
          <tr>
            <td className="text-center">Associate Professor</td>
            <td className="text-center">12</td>
          </tr>
          <tr>
            <td className="text-center">Assistant Professor</td>
            <td className="text-center">38</td>
          </tr>
        </tbody>
      </table>
      <p className="text-gray-600 mb-4">
        <strong>Interested Candidates Can Read the Full Notification Before Apply</strong>
      </p>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Important Links
      </h2>
      <table className="table-auto w-full text-gray-600 mb-4">
        <tbody>
          <tr>
            <td className="text-center font-bold text-green-500">
              Notification
            </td>
            <td className="text-center">
              <a
                href="https://img.freejobalert.com/uploads/2024/08/Notification-Shri-Chhatrapati-Shivajiraje-College-of-Engineering-Pune-Various-Vacancy-2024.jpg"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 hover:underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="text-center font-bold text-green-500">
              Official Website
            </td>
            <td className="text-center">
              <a
                href="https://www.rajgad.edu.in/tpo.php"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 hover:underline"
              >
                Click Here
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}