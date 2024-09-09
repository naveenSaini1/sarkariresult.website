export default function RecruitmentInformation() {
  // This component displays recruitment information for JSSC JFWCE 2024, including post details, application fee, important dates, and vacancy details.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">JSSC JFWCE 2024 Online Form</h1>
      <div className="mb-4">
        <p className="mb-2"><span className="font-bold text-green-500">Name of the Post:</span> JSSC JFWCE 2024 Online Form</p>
        <p className="mb-2"><span className="font-bold text-green-500">Post Date:</span> 29-06-2024</p>
        <p className="mb-2"><span className="font-bold text-green-500">Latest Update:</span> 03-09-2024</p>
        <p className="mb-2"><span className="font-bold text-green-500">Total Vacancy:</span> 510</p>
      </div>
      <p className="mb-4">
        <span className="font-bold text-red-500">Brief Information:</span> Jharkhand Staff Selection Commission (JSSC) has given a notification to conduct Jharkhand Field Worker Competitive Examination-2024 for the recruitment of Field worker vacancy in Health, Medical Education and Family Welfare Department. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply Online.
      </p>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Jharkhand Staff Selection Commission (JSSC)</h2>
        <h3 className="text-xl font-bold mb-2">JFWCE 2024</h3>
        <p className="mb-2"><span className="text-purple-500">Advt No. 23/2024</span></p>
      </div>
      <table className="table-auto w-full border border-gray-300 mb-4">
        <tbody>
          <tr className="border-b border-gray-300">
            <td className="p-2" colSpan={2}>
              <p className="text-center font-bold text-red-500">Application Fee</p>
              <ul className="list-disc pl-5">
                <li>Application Fee: <strong>Rs. 100/-</strong></li>
                <li>For Scheduled Tribe/Scheduled Caste candidates of Jharkhand state: <strong>Rs. 50/-</strong></li>
                <li>Payment Mode: <strong>Through Online</strong></li>
              </ul>
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="p-2" colSpan={2}>
              <p className="text-center font-bold text-red-500">Important Dates</p>
              <ul className="list-disc pl-5">
                <li>Starting Date to Apply Online & Payment of Fee: <strong>01-08-2024</strong></li>
                <li>Last Date to Apply Online: <strong>31-08-2024 (<span className="inline-block px-2 py-1 text-xs font-medium text-white bg-green-500 rounded-full">on Mid Night</span>)</strong></li>
                <li>Last Date for Payment of Fee: <strong>07-09-2024 (<span className="inline-block px-2 py-1 text-xs font-medium text-white bg-green-500 rounded-full">on Mid Night</span>)</strong></li>
                <li>Last Date for Upload of Photo & Signature: <strong>09-09-2024 (<span className="inline-block px-2 py-1 text-xs font-medium text-white bg-green-500 rounded-full">on Mid Night</span>)</strong></li>
                <li>Date for Errors Correction in Application Form: <strong>11-09-2024 to 13-09-2024 till Midnight</strong></li>
              </ul>
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="p-2" colSpan={2}>
              <p className="text-center font-bold text-red-500">Age Limit (as on 01-08-2024)</p>
              <ul className="list-disc pl-5">
                <li>Minimum Age: <strong>18 Years</strong></li>
                <li>Maximum Age for UR & EWS: <strong>35 Years</strong></li>
                <li>Maximum Age for EBC/ BC (Male): <strong>37 Years</strong></li>
                <li>Maximum Age for UR/ EBC/ EWS/ BC (Female): <strong>38 Years</strong></li>
                <li>Maximum Age for SC/ ST Candidates (Male & Female): <strong>40 Years</strong></li>
                <li>Age relaxation is applicable as per rules.</li>
              </ul>
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="p-2" colSpan={2}>
              <p className="text-center font-bold text-red-500">Qualification</p>
              <ul className="list-disc pl-5">
                <li>Candidates should possess Matriculation/10th class.</li>
              </ul>
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="p-2 text-center text-purple-500">Post Name</td>
            <td className="p-2 text-center text-purple-500">Total</td>
          </tr>
          <tr>
            <td className="p-2 text-center">Jharkhand Field Worker Competitive Examination-2024</td>
            <td className="p-2 text-center">510</td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="p-2" colSpan={2}>
              <p className="text-center text-blue-500 font-bold">Interested Candidates Can Read the Full Notification Before Apply</p>
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="p-2" colSpan={2}>
              <p className="text-center font-bold text-red-500">Important Links</p>
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="p-2 text-center text-green-500">Last Date Extended for Payment of Fee (03-09-2024)</td>
            <td className="p-2 text-center"><a className="text-blue-500 underline" href="https://img.freejobalert.com/uploads/2024/09/Last-Date-Extended-for-Payment-of-Fee-JSSC-JFWCE-2024.pdf" target="_blank" rel="nofollow">Click Here</a></td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="p-2 text-center text-green-500">Apply Online (03-08-2024)</td>
            <td className="p-2 text-center"><a className="text-blue-500 underline" href="https://jsscjfwce2024.in/home" target="_blank" rel="nofollow">Click Here</a></td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="p-2 text-center text-green-500">Notification</td>
            <td className="p-2 text-center"><a className="text-blue-500 underline" href="https://img.freejobalert.com/uploads/2024/06/Notification-JSSC-JFWCE-2024.pdf" target="_blank" rel="nofollow">Click Here</a></td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="p-2 text-center text-green-500">Short Notification</td>
            <td className="p-2 text-center"><a className="text-blue-500 underline" href="https://img.freejobalert.com/uploads/2024/06/Short-Notification-JSSC-JFWCE-2024.pdf" target="_blank" rel="nofollow">Click Here</a></td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="p-2 text-center text-green-500">Official Website</td>
            <td className="p-2 text-center"><a className="text-blue-500 underline" href="http://www.jssc.nic.in/" target="_blank" rel="nofollow">Click Here</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}