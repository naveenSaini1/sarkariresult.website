export default function RecruitmentInformation() {
  // Displays recruitment information for AIASL Various Vacancy 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">AIASL Various Vacancy 2024</h1>
      <div className="mb-4">
        <p className="text-lg font-medium mb-1">
          <span className="text-green-500">Name of the Post:</span> AIASL Various Vacancy 2024 Offline Form
        </p>
        <p className="text-lg font-medium mb-1">
          <span className="text-green-500">Post Date:&nbsp;</span> 23-09-2024
        </p>
        <p className="text-lg font-medium mb-1">
          <span className="text-green-500">Total Vacancy:&nbsp;</span> 208
        </p>
      </div>
      <p className="text-lg mb-4">
        <span className="text-red-500 font-bold">Brief Information:</span> Air India Air Transport Services Limited (AIATSL) has
        announced notification for the recruitment of Handyman, Ramp Service Executive &amp; Other Vacancy on Contract basis.
        Those Candidates who are interested in the vacancy details &amp; completed all eligibility criteria can read the
        Notification &amp; Apply.
      </p>
      <h2 className="text-2xl font-bold mb-4">Application Details</h2>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Application Fee</h3>
        <ul className="list-disc pl-5">
          <li>Fee for All Categories: <strong>Rs. 500/-</strong></li>
          <li>Fee for Ex- servicemen/ SC/ ST: <strong>Nil</strong></li>
          <li>Payment mode: <strong>Through Demand Draft</strong></li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Important Dates</h3>
        <ul className="list-disc pl-5">
          <li>
            Date of Walk in Interview for Ramp Service Executive &amp; Utility Agent cum Ramp
            <br/>
            Driver: <strong>05-10-2024 (09:00 to 12:00)</strong>
          </li>
          <li>
            Date of Walk in Interview for Handyman / Handy Women: <strong>07-10-2024 (09:00 to 12:00)</strong>
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Age Limit (as on 01-10-2024)</h3>
        <ul className="list-disc pl-5">
          <li>Maximum Age: <strong>28 Years</strong></li>
          <li>Age relaxation is admissible as per rules.</li>
        </ul>
      </div>
      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>
      <table className="table-auto w-full text-center border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-gray-100 border border-gray-300 text-blue-500 font-medium">
              Post Name
            </th>
            <th className="px-4 py-2 bg-gray-100 border border-gray-300 text-blue-500 font-medium">
              Total
            </th>
            <th className="px-4 py-2 bg-gray-100 border border-gray-300 text-blue-500 font-medium">
              Qualification
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Ramp Service Executive</td>
            <td className="px-4 py-2 border border-gray-300">03</td>
            <td className="px-4 py-2 border border-gray-300">
              ITI (NCTVT) / Diploma (Mechanical/Electrical/
              <br/>
              Production / Electronics/ Automobile)/ Valid HMV Driving License
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Utility Agent Cum Ramp Driver</td>
            <td className="px-4 py-2 border border-gray-300">04</td>
            <td className="px-4 py-2 border border-gray-300">10th Class, Valid HMV Driving License</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Handyman / Handywomen</td>
            <td className="px-4 py-2 border border-gray-300">201</td>
            <td className="px-4 py-2 border border-gray-300">10th Class</td>
          </tr>
        </tbody>
      </table>
      <p className="text-blue-500 font-medium mt-4">
        Interested Candidates Can Read the Full Notification Before Apply
      </p>
      <h2 className="text-2xl font-bold mb-4">Important Links</h2>
      <table className="table-auto w-full text-center border-collapse border border-gray-300">
        <tbody>
          <tr>
            <td className="px-4 py-2 bg-gray-100 border border-gray-300 text-green-500 font-medium">
              Notification
            </td>
            <td className="px-4 py-2 border border-gray-300">
              <a
                className="text-blue-500 hover:underline"
                href="https://img.freejobalert.com/uploads/2024/09/Notification-AIASL-Handyman-Ramp-Service-Executive-Other-Posts.pdf"
                target="_blank"
                rel="noopener"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 bg-gray-100 border border-gray-300 text-green-500 font-medium">
              Official Website
            </td>
            <td className="px-4 py-2 border border-gray-300">
              <a
                className="text-blue-500 hover:underline"
                href="https://www.aiasl.in/index"
                target="_blank"
                rel="noopener"
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