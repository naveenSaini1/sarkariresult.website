export default function RecruitmentInformation() {
  // This component displays recruitment information for AESCET, Satara
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        AESCET, Satara - Various Vacancy 2024
      </h1>
      <p className="text-lg mb-4">
        <span className="font-bold text-green-500">Name of the Post:</span>{' '}
        AESCET, Satara Various Vacancy Offline Form 2024
      </p>
      <p className="text-lg mb-4">
        <span className="font-bold text-green-500">Post Date:</span>{' '}
        06-08-2024
      </p>
      <p className="text-lg mb-4">
        <span className="font-bold text-green-500">Total Vacancy:</span>{' '}
        <span className="font-bold text-black">84</span>
      </p>
      <p className="text-lg mb-4">
        <span className="font-bold text-red-500">Brief Information:</span>{' '}
        Abhinav Education Society College of Engineering, Satara (AESCET,
        Satara) has given a Notification for the recruitment of Associate
        Professor, Assistant Professor, Professor & Other Vacancy. Those
        Candidates who are interested in the vacancy details & completed all
        eligibility criteria can read the Notification & Apply.
      </p>
      <h2 className="text-2xl font-bold mb-4">Important Dates</h2>
      <ul className="list-disc pl-8 mb-4">
        <li className="mb-2">
          Last Date for Receipt of Application:
          <span className="font-bold">15 days from the date of this advertisement</span>
        </li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>
      <table className="table-auto w-full text-center mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2 font-bold text-blue-500">Post Name</th>
            <th className="px-4 py-2 font-bold text-blue-500">Total</th>
            <th className="px-4 py-2 font-bold text-blue-500">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">Professor</td>
            <td className="px-4 py-2">05</td>
            <td className="px-4 py-2" rowspan="3">
              as per the norms specified by AICTE, DTE & DBATU Norms
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">Assistant Professor</td>
            <td className="px-4 py-2">37</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Associate Professor</td>
            <td className="px-4 py-2">09</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Office Superintendent</td>
            <td className="px-4 py-2">02</td>
            <td className="px-4 py-2">Any PG</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Clerk</td>
            <td className="px-4 py-2">05</td>
            <td className="px-4 py-2" rowspan="3">Any Degree</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Store Keeper</td>
            <td className="px-4 py-2">02</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Rector (Boys & Girls-Hostel)</td>
            <td className="px-4 py-2">02</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Gardening</td>
            <td className="px-4 py-2">02</td>
            <td className="px-4 py-2">10th</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Peon</td>
            <td className="px-4 py-2">10</td>
            <td className="px-4 py-2">10th/ 12th</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Electrician</td>
            <td className="px-4 py-2">02</td>
            <td className="px-4 py-2" rowspan="3">ITI</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Carpenter</td>
            <td className="px-4 py-2">02</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Welder</td>
            <td className="px-4 py-2">02</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Lab Technician</td>
            <td className="px-4 py-2">02</td>
            <td className="px-4 py-2">
              Diploma in Computer & Hardware Courses, Hardware & Networking
              Knowledge
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">Sweeper (Toilet Cleaner)</td>
            <td className="px-4 py-2">02</td>
            <td className="px-4 py-2">7th</td>
          </tr>
        </tbody>
      </table>
      <p className="text-lg mb-4 font-bold text-blue-500">
        Interested Candidates Can Read the Full Notification Before Apply
      </p>
      <h2 className="text-2xl font-bold mb-4">Important Links</h2>
      <table className="table-auto w-full text-center mb-4">
        <tbody>
          <tr>
            <td className="px-4 py-2" colspan="2">
              <span className="font-bold text-green-500">Notification</span>
            </td>
            <td className="px-4 py-2">
              <a
                href="https://img.freejobalert.com/uploads/2024/08/Notification-AESCET-Satara-Various-Vacancy-2024.png"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2" colspan="2">
              <span className="font-bold text-green-500">Official Website</span>
            </td>
            <td className="px-4 py-2">
              <a
                href="https://aesengg.org/"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
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