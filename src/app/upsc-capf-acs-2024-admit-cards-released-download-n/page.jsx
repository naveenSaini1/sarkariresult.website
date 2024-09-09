export default function RecruitmentInformation() {
  // This component displays recruitment information for the UPSC CAPF (ACs) Exam 2024, including details on the post, important dates, application fee, qualifications, and vacancy details.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">UPSC CAPF (ACs) Exam 2024</h1>
      <div className="mb-4">
        <p className="mb-2">
          <span className="text-green-500 font-bold">Name of the Post:</span> UPSC CAPF (ACs)
          <strong className="text-blue-500">2024 Admit Card Download</strong>
        </p>
        <p className="mb-2">
          <span className="text-green-500 font-bold">Post Date: </span>
          24-<span className="text-green-500">04-2024</span>
        </p>
        <p>
          <span className="text-green-500 font-bold">Latest Update:</span> 31-07-2024
        </p>
        <p className="mb-2">
          <span className="text-green-500 font-bold">Total Vacancy: </span>
          <span className="text-green-500">506</span>
        </p>
      </div>
      <p className="mb-4">
        <span className="text-red-500 font-bold">Brief Information:</span> Union Public Service
        Commission (UPSC) has published a notification to conduct Central Armed Police
        Forces (Assistant Commandants) Exam 2024. Those Candidates who are interested in
        the vacancy details & completed all eligibility criteria can read the
        Notification & Apply Online.
      </p>
      <div className="mb-4">
        <table className="table-auto w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-center font-bold" colSpan={2}>
                <span className="text-red-500 font-bold">Union Public Service Commission (UPSC)</span>
              </th>
            </tr>
            <tr>
              <th className="px-4 py-2 text-center font-bold" colSpan={2}>
                <span className="text-purple-500 font-bold">Advt No: 09/2024-CPF</span>
              </th>
            </tr>
            <tr>
              <th className="px-4 py-2 text-center font-bold" colSpan={2}>
                <span className="text-green-500 font-bold">Central Armed Police Forces (ACs) Exam 2024</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-center font-bold" colSpan={2}>
                <span className="text-red-500 font-bold">Application Fee</span>
              </th>
            </tr>
            <tr>
              <td className="px-4 py-2" colSpan={2}>
                <ul>
                  <li className="text-left">
                    For General: <strong className="text-blue-500">Rs. 200/-</strong>
                  </li>
                  <li className="text-left">
                    For SC/ ST/ Female: <strong className="text-blue-500">NIL</strong>
                  </li>
                  <li className="text-left">
                    Payment Mode (Online): <strong className="text-blue-500">SBI by cash/ Net banking facility of State Bank of India/ Visa/ Master/ RuPay Credit/ Debit Card.</strong>
                  </li>
                </ul>
              </td>
            </tr>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-center font-bold" colSpan={2}>
                <span className="text-red-500 font-bold">Important Dates</span>
              </th>
            </tr>
            <tr>
              <td className="px-4 py-2" colSpan={2}>
                <ul>
                  <li className="text-left">
                    Starting Date to Apply Online: <strong className="text-blue-500">24-04-2024</strong>
                  </li>
                  <li className="text-left">
                    Last Date to Apply Online: <strong className="text-blue-500">14-05-2024 till 18.00 Hours</strong>
                  </li>
                  <li className="text-left">
                    Date for Correction Window: <strong className="text-blue-500">15-05-2024 to 21-05-2024</strong>
                  </li>
                  <li className="text-left">
                    Last Date for Payment of Fee (“Pay by cash” mode): <strong className="text-blue-500">13-05-2024</strong>
                  </li>
                  <li className="text-left">
                    Last Date for Fee Payment (Online Mode): <strong className="text-blue-500">14-05-2024 till 18:00 Hrs</strong>
                  </li>
                  <li className="text-left">
                    Date of Examination Paper – I (Code No. 01): <strong className="text-blue-500">04-08-2024 (10:00 AM to 12:00 PM)</strong>
                  </li>
                  <li className="text-left">
                    Date of Examination Paper – II (Code No. 02): <strong className="text-blue-500">04-08-2024 (02:00 PM to 05:00 PM)</strong>
                  </li>
                </ul>
              </td>
            </tr>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-center font-bold" colSpan={2}>
                <span className="text-red-500 font-bold">Age Limit (as on 01-08-2024)</span>
              </th>
            </tr>
            <tr>
              <td className="px-4 py-2" colSpan={2}>
                <ul>
                  <li className="text-left">
                    Minimum Age Limit : <strong className="text-blue-500">20 Years</strong>
                  </li>
                  <li className="text-left">
                    Maximum Age Limit : <strong className="text-blue-500">25 Years</strong>
                  </li>
                  <li className="text-left">
                    i.e. he/she must have been born not earlier than 2nd August, 1999 and not
                    later than 1st August, 2004
                  </li>
                  <li className="text-left">
                    Age relaxation is applicable as per rules.
                  </li>
                </ul>
              </td>
            </tr>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-center font-bold" colSpan={2}>
                <span className="text-red-500 font-bold">Qualification</span>
              </th>
            </tr>
            <tr>
              <td className="px-4 py-2" colSpan={2}>
                <ul>
                  <li className="text-left">
                    Candidate should possess Bachelors Degree of a University.
                  </li>
                </ul>
              </td>
            </tr>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-center font-bold" colSpan={2}>
                <span className="text-red-500 font-bold">Vacancy Details</span>
              </th>
            </tr>
            <tr>
              <th className="px-4 py-2 text-center font-bold">
                <span className="text-purple-500 font-bold">Post Name</span>
              </th>
              <th className="px-4 py-2 text-center font-bold">
                <span className="text-purple-500 font-bold">Total</span>
              </th>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">BSF</td>
              <td className="px-4 py-2 text-center">186</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">CRPF</td>
              <td className="px-4 py-2 text-center">120</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">CISF</td>
              <td className="px-4 py-2 text-center">100</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">ITBP</td>
              <td className="px-4 py-2 text-center">58</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">SSB</td>
              <td className="px-4 py-2 text-center">42</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="px-4 py-2 text-center" colSpan={2}>
                <span className="text-blue-500 font-bold">Interested Candidates Can Read the Full Notification Before Apply Online</span>
              </td>
            </tr>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-center font-bold" colSpan={2}>
                <span className="text-red-500 font-bold">Important Links</span>
              </th>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">
                <span className="text-green-500 font-bold">Exam Notice (31-07-2024)</span>
              </td>
              <td className="px-4 py-2 text-center">
                <a href="https://img.freejobalert.com/uploads/2024/07/Exam-Notice-UPSC-CAPF-ACs-2024.pdf" className="text-blue-500">Click Here</a>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">
                <span className="text-green-500 font-bold">Admit Card (26-07-2024)</span>
              </td>
              <td className="px-4 py-2 text-center">
                <a href="https://upsconline.nic.in/eadmitcard/admitcard_capf_2024/admit_card.php#hhh1" className="text-blue-500">Click Here</a>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">
                <span className="text-green-500 font-bold">Exam Time Table (25-06-2024)</span>
              </td>
              <td className="px-4 py-2 text-center">
                <a href="https://upsc.gov.in/sites/default/files/TT-CAPF-24-engl-250624.pdf" className="text-blue-500">Click Here</a>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">
                <span className="text-green-500 font-bold">Fictitious Fee Notice (04-06-2024)</span>
              </td>
              <td className="px-4 py-2 text-center">
                <a href="https://upsc.gov.in/sites/default/files/CAPF_AC_2024_FictFee_Eng_30052024.pdf" className="text-blue-500">Click Here</a>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">
                <span className="text-green-500 font-bold">Apply Online</span>
              </td>
              <td className="px-4 py-2 text-center">
                <a href="https://upsconline.nic.in/upsc/OTRP/" className="text-blue-500">Click Here</a>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">
                <span className="text-green-500 font-bold">Notification</span>
              </td>
              <td className="px-4 py-2 text-center">
                <a href="https://upsc.gov.in/sites/default/files/CAPF_AC_Exam_2024_ExamNotif_Eng_24042024.pdf" className="text-blue-500">Click Here</a>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">
                <span className="text-green-500 font-bold">Official Website</span>
              </td>
              <td className="px-4 py-2 text-center">
                <a href="http://www.upsc.gov.in/" className="text-blue-500">Click Here</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}