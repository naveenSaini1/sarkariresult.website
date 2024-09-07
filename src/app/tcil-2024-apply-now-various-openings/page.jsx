export default function RecruitmentInformation() {
  // Displays recruitment information for TCIL Various Vacancy 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        TCIL Various Vacancy Online Form 2024
      </h1>
      <p className="mb-4">
        <span className="text-green-500 font-bold">Name of the Post:</span>{' '}
        TCIL Various Vacancy Online Form 2024
      </p>
      <p className="mb-4 text-justify">
        <span className="text-green-500 font-bold">Post Date:</span>{' '}
        31-08-2024
      </p>
      <p className="mb-4">
        <span className="text-green-500 font-bold">Latest Update:</span>{' '}
        02-09-2024
      </p>
      <p className="mb-4 text-justify">
        <span className="text-green-500 font-bold">Total Vacancy:</span> 204
      </p>
      <p className="mb-4 text-justify">
        <span className="text-red-500 font-bold">Brief Information: </span>
        Telecommunications Consultants India Limited (TCIL) has announced
        notification for the recruitment of Nursing Officer, Pharmacist & Other
        Vacancy on Contract basis. Those Candidates who are interested in the
        vacancy details & completed all eligibility criteria can read the
        Notification & Apply Online.
      </p>
      <h2 className="text-2xl font-bold mb-4">Application Fee</h2>
      <ul className="list-disc pl-8 mb-4">
        <li>
          General Candidates: <strong className="text-gray-800">Rs. 2000/-</strong>
        </li>
        <li>
          SC/ ST/ EWS/ PwBD Candidates: <strong className="text-gray-800">Nil</strong>
        </li>
        <li>
          Mode of Payment: <strong className="text-gray-800">Through Online/ Demand Draft</strong>
        </li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Important Dates</h2>
      <ul className="list-disc pl-8 mb-4">
        <li>
          Start Date to Apply Online: <strong className="text-gray-800">02-09-2024</strong>
        </li>
        <li>
          Last Date to Apply Online: <strong className="text-gray-800">13-09-2024</strong>
        </li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>
      <table className="table-auto w-full text-center border-collapse border-2 border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 font-bold text-red-500">Post Name</th>
            <th className="py-2 font-bold text-red-500">Total</th>
            <th className="py-2 font-bold text-red-500">Age</th>
            <th className="py-2 font-bold text-red-500">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="py-2 text-blue-500">Nursing Officer</td>
            <td className="py-2">152</td>
            <td className="py-2">30 Years</td>
            <td className="py-2" rowSpan={2}>
              Diploma, B.Sc
            </td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="py-2 text-blue-500">Lab Technician</td>
            <td className="py-2">04</td>
            <td className="py-2" rowSpan={5}>
              27 Years
            </td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="py-2 text-blue-500">Lab Assistant</td>
            <td className="py-2">01</td>
            <td className="py-2">10th, 12th, Diploma</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="py-2 text-blue-500">Pharmacist</td>
            <td className="py-2">11</td>
            <td className="py-2">Degree, B.Pharma</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="py-2 text-blue-500">Junior Radiographer</td>
            <td className="py-2">05</td>
            <td className="py-2">12th</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="py-2 text-blue-500">ECG Technician</td>
            <td className="py-2">03</td>
            <td className="py-2">10th, ITI</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="py-2 text-blue-500">Refractionist</td>
            <td className="py-2">02</td>
            <td className="py-2" rowSpan={3}>
              32 Years
            </td>
            <td className="py-2">12th, Diploma</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="py-2 text-blue-500">Audiometry Assistant</td>
            <td className="py-2">01</td>
            <td className="py-2">12th</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="py-2 text-blue-500">Physiotherapist</td>
            <td className="py-2">02</td>
            <td className="py-2">Diploma, B.Sc</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="py-2 text-blue-500">OT Technician</td>
            <td className="py-2">04</td>
            <td className="py-2" rowSpan={2}>
              27 Years
            </td>
            <td className="py-2" rowSpan={2}>
              10th, 12th
            </td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="py-2 text-blue-500">OT Assistant</td>
            <td className="py-2">05</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="py-2 text-blue-500">Occupational Therapist</td>
            <td className="py-2">02</td>
            <td className="py-2" rowSpan={3}>
              32 Years
            </td>
            <td className="py-2">12th, Diploma, B.Sc</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="py-2 text-blue-500">Assistant Dietician</td>
            <td className="py-2">01</td>
            <td className="py-2">B.Sc, Post Graduation Diploma</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="py-2 text-blue-500">Post-Mortem Technician</td>
            <td className="py-2">02</td>
            <td className="py-2" rowSpan={4}>
              10th
            </td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="py-2 text-blue-500">Mortuary Assistant</td>
            <td className="py-2">01</td>
            <td className="py-2" rowSpan={3}>
              27 Years
            </td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="py-2 text-blue-500">Dresser</td>
            <td className="py-2">04</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="py-2 text-blue-500">Plaster Room Assistant</td>
            <td className="py-2">04</td>
          </tr>
        </tbody>
      </table>
      <p className="mb-4 text-blue-500 font-bold">
        Interested Candidates Can Read the Full Notification Before Apply Online
      </p>
      <h2 className="text-2xl font-bold mb-4">Important Links</h2>
      <table className="table-auto w-full text-center border-collapse border-2 border-gray-300 mb-4">
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="py-2" colSpan={2}>
              <span className="text-green-500 font-bold">
                Apply Online (02-09-2024)
              </span>
            </td>
            <td className="py-2" colSpan={2}>
              <a
                href="https://www.tcil.net.in/current_opening.php"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 hover:underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="py-2" colSpan={2}>
              <span className="text-green-500 font-bold">Notification</span>
            </td>
            <td className="py-2" colSpan={2}>
              <a
                href="https://img.freejobalert.com/uploads/2024/08/Notification-TCIL-Nursing-Officer-Pharmacist-Other-Posts.pdf"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 hover:underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="py-2" colSpan={2}>
              <span className="text-green-500 font-bold">Official Website</span>
            </td>
            <td className="py-2" colSpan={2}>
              <a
                href="https://www.tcil.net.in/index.php"
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