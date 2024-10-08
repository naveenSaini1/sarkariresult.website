export default function RecruitmentInfo() {
  // This component displays recruitment information for the Pre Primary School Accreditation Council of India. 
  // It includes details like the job title, post date, total vacancy, brief information, application fee, important dates, and vacancy details.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Pre Primary School Accreditation Council of India - Various Vacancy 2024
      </h1>

      <div className="flex flex-col mb-4">
        <p className="text-lg font-medium text-green-500">
          Name of the Post: Pre Primary School Accreditation Council of India Various Vacancy Online Form 2024
        </p>
        <p className="text-lg font-medium text-green-500">Post Date: 08-10-2024</p>
        <p className="text-lg font-medium text-green-500">
          Total Vacancy: 1509
        </p>
      </div>

      <p className="text-lg font-medium text-red-500 mb-4">
        Brief Information:
      </p>
      <p className="text-lg mb-4">
        Pre Primary School Accreditation Council of India has given a for the recruitment of Special Executive Officer, Nodal Officer, District Extension Officer, Women Advisor, Social Officer & Other vacancy on Contractual basis for each district and taluk of Maharashtra state. Those Candidates who are interested in the vacancy details &amp; completed all eligibility criteria can read the Notification &amp; Apply Online.
      </p>

      <h2 className="text-2xl font-bold mb-4 text-center">
        Application Fee
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li className="text-lg">For all candidates: Rs. 750/-</li>
        <li className="text-lg">
          Bank charges shall be additional in addition to the above examination fees.
        </li>
        <li className="text-lg">
          Payment Mode: Through online payment gateway through credit card, debit card, net banking or UPI.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-4 text-center">
        Important Dates
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li className="text-lg">
          Starting Date for Apply Online &amp; Payment of Fee: 05-10-2024
        </li>
        <li className="text-lg">
          Last Date to Apply Online &amp; Payment of Fee: 21-10-2024 till 23.55 hrs
        </li>
        <li className="text-lg">
          Date &amp; Duration of Exam: will be made available on the website
        </li>
        <li className="text-lg">
          Date and Duration of Interview: will also be intimated through the admit card of the candidates
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-4 text-center">
        Age Limit
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li className="text-lg">
          Minimum Age Limit: 18 Years
        </li>
        <li className="text-lg">
          Maximum Age Limit: 38 Years
        </li>
        <li className="text-lg">
          For More Details Refer Notification
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-4 text-center">
        Vacancy Details
      </h2>

      <table className="table-auto w-full text-center mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">
              <span className="text-purple-500 font-medium">Post Name</span>
            </th>
            <th className="px-4 py-2">
              <span className="text-purple-500 font-medium">Total</span>
            </th>
            <th className="px-4 py-2">
              <span className="text-purple-500 font-medium">Qualification</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">Special Executive Officer (Jurisdiction Whole Maharashtra)</td>
            <td className="px-4 py-2">03</td>
            <td className="px-4 py-2">Any Degree, PG</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Nodal Officer (one in each department)</td>
            <td className="px-4 py-2">09</td>
            <td className="px-4 py-2" rowSpan={2}>
              10th, 12th, Any degree
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">District Extension Officer (one in each district)</td>
            <td className="px-4 py-2">36</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Women Advisor (one in each taluk)</td>
            <td className="px-4 py-2">350</td>
            <td className="px-4 py-2">10th, 12th Class</td>
          </tr>
          <tr>
            <td className="px-4 py-2">City Extension Officer (Mumbai, Thane, Kalyan, Pune, Nagpur etc.)</td>
            <td className="px-4 py-2">25</td>
            <td className="px-4 py-2">10th, 12th, Any degree</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Taluka Extension Officer (one in each taluka)</td>
            <td className="px-4 py-2">350</td>
            <td className="px-4 py-2">10th, 12th, Any degree</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Taluka Deputy Extension Officer (One in each taluka)</td>
            <td className="px-4 py-2">350</td>
            <td className="px-4 py-2">10th, 12th Class</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Social Officer (one in each Taluk)</td>
            <td className="px-4 py-2">350</td>
            <td className="px-4 py-2">10th, 12th Class, Degree (Social Work), MSW</td>
          </tr>
          <tr>
            <td className="px-4 py-2">District Sub-Extension Officer (one in each district)</td>
            <td className="px-4 py-2">36</td>
            <td className="px-4 py-2">10th, 12th, Any degree</td>
          </tr>
        </tbody>
      </table>

      <p className="text-lg text-blue-500 font-medium mb-4">
        Interested Candidates Can Read the Full Notification Before Apply Online
      </p>

      <h2 className="text-2xl font-bold mb-4 text-center">
        Important Links
      </h2>
      <table className="table-auto w-full text-center mb-4">
        <tbody>
          <tr>
            <td className="px-4 py-2" colSpan={2}>
              <span className="text-green-500 font-medium">Apply Online</span>
            </td>
            <td className="px-4 py-2">
              <a
                href="https://www.preschoolcouncil.com/ExamForm/Registration/"
                target="_blank"
                rel="noopener"
                className="text-blue-500 hover:underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2" colSpan={2}>
              <span className="text-green-500 font-medium">Notification</span>
            </td>
            <td className="px-4 py-2">
              <a
                href="https://img.freejobalert.com/uploads/2024/10/Notification-Pre-Primary-School-Accreditation-Council-of-India-Various-Vacancy-2024.pdf"
                target="_blank"
                rel="noopener"
                className="text-blue-500 hover:underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2" colSpan={2}>
              <span className="text-green-500 font-medium">Official Website</span>
            </td>
            <td className="px-4 py-2">
              <a
                href="https://www.preschoolcouncil.com/Home"
                target="_blank"
                rel="noopener"
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