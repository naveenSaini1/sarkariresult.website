export default function RecruitmentInfo() {
  // Displays recruitment information for Mangaldeep Group of Institutions, Chhatrapati Sambhajinagar
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Mangaldeep Group of Institutions, Chhatrapati Sambhajinagar</h1>
      <p className="text-lg mb-2">
        <span className="text-green-500 font-bold">Name of the Post:</span>{' '}
        <span className="font-bold">Mangaldeep Group of Institutions, Chhatrapati Sambhajinagar Various Vacancy Walk in 2024</span>
      </p>
      <p className="text-lg mb-2">
        <span className="text-green-500 font-bold">Post Date:</span> 14-08-2024
      </p>
      <p className="text-lg mb-2">
        <span className="text-green-500 font-bold">Total Vacancy:</span> 60
      </p>
      <p className="text-lg mb-4">
        <span className="text-red-500 font-bold">Brief Information:</span> Mangaldeep Group of Institutions, Chhatrapati Sambhajinagar has given a Notification for the recruitment of Principal, Professor, Assistant Professor & Other Posts. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Attend the Interview.
      </p>

      <table className="table-auto w-full text-center border-collapse border border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 font-bold text-blue-500">Post Name</th>
            <th className="px-4 py-2 font-bold text-blue-500">Total</th>
            <th className="px-4 py-2 font-bold text-blue-500">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-gray-200">
            <td className="px-4 py-2">Principal</td>
            <td className="px-4 py-2">04</td>
            <td className="px-4 py-2">BE (Any Branch), PG, Ph.D</td>
          </tr>
          <tr className="border-t border-gray-200">
            <td className="px-4 py-2">Professor</td>
            <td className="px-4 py-2">03</td>
            <td className="px-4 py-2">M.Pharm, Ph.D</td>
          </tr>
          <tr className="border-t border-gray-200">
            <td className="px-4 py-2">Associate Professor</td>
            <td className="px-4 py-2">03</td>
            <td className="px-4 py-2">M.Pharm</td>
          </tr>
          <tr className="border-t border-gray-200">
            <td className="px-4 py-2">Assistant Professor</td>
            <td className="px-4 py-2">41</td>
            <td className="px-4 py-2">PG (Relevant Discipline), Ph.D, NET/SET</td>
          </tr>
          <tr className="border-t border-gray-200">
            <td className="px-4 py-2">Librarian</td>
            <td className="px-4 py-2">02</td>
            <td className="px-4 py-2">M.Lib</td>
          </tr>
          <tr className="border-t border-gray-200">
            <td className="px-4 py-2">Group Instructor</td>
            <td className="px-4 py-2">02</td>
            <td className="px-4 py-2" rowSpan={2}>
              ITI-CITS/Diploma/BE
            </td>
          </tr>
          <tr className="border-t border-gray-200">
            <td className="px-4 py-2">Instructor</td>
            <td className="px-4 py-2">04</td>
          </tr>
          <tr className="border-t border-gray-200">
            <td className="px-4 py-2">Training Officer</td>
            <td className="px-4 py-2">01</td>
            <td className="px-4 py-2">Any Degree</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mb-2">Important Dates</h2>
      <ul className="list-disc pl-5">
        <li className="mb-2">Date of Walk in Interview: <b>18-08-2024 at 10:30 pm Onwards</b></li>
      </ul>

      <h2 className="text-2xl font-bold mb-2">Important Links</h2>
      <ul className="list-disc pl-5">
        <li className="mb-2">
          <span className="text-green-500 font-bold">Notification:</span>{' '}
          <a
            href="https://img.freejobalert.com/uploads/2024/08/Mangaldeep-Group-of-Institutions-Chhatrapathi-Sambhajinagar-Various-Vacancy-2024.jpg"
            target="_blank"
            rel="nofollow"
            className="text-blue-500"
          >
            Click Here
          </a>
        </li>
        <li className="mb-2">
          <span className="text-green-500 font-bold">Official Website:</span>{' '}
          <a
            href="https://mangaldeep.org/"
            target="_blank"
            rel="nofollow"
            className="text-blue-500"
          >
            Click Here
          </a>
        </li>
      </ul>
    </div>
  );
}