export default function RecruitmentInformation() {
  // This component displays recruitment information for AIIMS, Nagpur Senior Resident Offline Form 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">AIIMS, Nagpur Senior Resident Offline Form 2024</h1>
      <p className="mb-4">
        <span className="text-green-500 font-bold">Name of the Post:</span> AIIMS, Nagpur Senior Resident Offline Form 2024
      </p>
      <p className="mb-4">
        <span className="text-green-500 font-bold">Post Date: </span>
        <span className="text-gray-800">25-08-2024</span>
      </p>
      <p className="mb-4">
        <span className="text-green-500 font-bold">Total Vacancy: </span> 60
      </p>
      <p className="mb-4">
        <span className="text-red-500 font-bold">Brief Information: </span> All India Institute of Medical Sciences (AIIMS), Nagpur has advertised a Notification for the Recruitment of Senior Resident Vacancy. Those Candidates who are interested in the vacancy details &amp; completed all eligibility criteria can read the Notification Apply.
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Recruitment Details</h2>
      <table className="table-auto w-full text-center border-collapse border border-gray-300">
        <tbody>
          <tr>
            <td colSpan="2" className="p-2 border border-gray-300">
              <p className="text-red-500 font-bold text-center">All India Institute of Medical Sciences (AIIMS), Nagpur</p>
              <p className="text-pink-500 font-bold text-center">Advt No. Admin-1/SR/24/06</p>
              <p className="text-green-500 font-bold text-center">Senior Resident Vacancy 2024</p>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="p-2 border border-gray-300">
              <p className="text-red-500 font-bold text-center">Application Fee</p>
              <ul className="list-disc pl-6">
                <li>For General/OBC/EWS Candidates: <strong className="text-gray-800">Rs. 500/-</strong></li>
                <li>For SC/ ST Candidates: <strong className="text-gray-800">Rs. 250/-</strong></li>
                <li>For PWD Candidates: <strong className="text-gray-800">Nil</strong></li>
                <li>Mode of Payment: <strong className="text-gray-800">Through NEFT</strong></li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="p-2 border border-gray-300">
              <p className="text-red-500 font-bold text-center">Important Dates</p>
              <ul className="list-disc pl-6">
                <li>Last Date for receipt of application: <strong className="text-gray-800">09-09-2024</strong></li>
                <li>Date of interview: <strong className="text-gray-800">11-09-2024</strong></li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="p-2 border border-gray-300">
              <p className="text-red-500 font-bold text-center">Age Limit (as on 09-09-2024)</p>
              <ul className="list-disc pl-6">
                <li>Upper Age Limit: <strong className="text-gray-800">45 Years</strong></li>
                <li>Age Relaxation is Applicable As Per Rules.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="p-2 border border-gray-300">
              <p className="text-red-500 font-bold text-center">Qualification</p>
              <ul className="list-disc pl-6">
                <li>Candidates Should Possess Postgraduate Medical Degree (Concern Specialty)/DMC/DDC/MCI/DCI.</li>
                <li>For More Details Refer Notification.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="p-2 border border-gray-300">
              <p className="text-red-500 font-bold text-center">Vacancy Details</p>
            </td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-300 text-pink-500 font-bold">Post Name</td>
            <td className="p-2 border border-gray-300 text-pink-500 font-bold">Total</td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-300">Senior Resident</td>
            <td className="p-2 border border-gray-300">60</td>
          </tr>
          <tr>
            <td colSpan="2" className="p-2 border border-gray-300">
              <p className="text-blue-500 font-bold text-center">Interested Candidates Can Read the Full Notification Before Apply</p>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="p-2 border border-gray-300">
              <p className="text-red-500 font-bold text-center">Important Links</p>
            </td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-300 text-green-500 font-bold">Application Form</td>
            <td className="p-2 border border-gray-300"><a href="https://docs.google.com/forms/d/e/1FAIpQLSdXF13haZoH5cX3wCX0u5M-SuIE2sIkxrZXi5bUY6eCqLPpXw/closedform" target="_blank" className="text-blue-500">Click Here</a></td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-300 text-green-500 font-bold">Notification</td>
            <td className="p-2 border border-gray-300"><a href="https://img.freejobalert.com/uploads/2024/08/Notification-AIIMS-Nagpur-Senior-Resident-Posts-1.pdf" target="_blank" className="text-blue-500">Click Here</a></td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-300 text-green-500 font-bold">Official Website</td>
            <td className="p-2 border border-gray-300"><a href="https://aiimsnagpur.edu.in/" target="_blank" className="text-blue-500">Click Here</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}