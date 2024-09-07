export default function RecruitmentInfo() {
  // This component displays recruitment information for the MPPKVVCL Graduate & Technical Apprentice Offline Form 2024.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">
        MPPKVVCL Graduate & Technical Apprentice Offline Form 2024
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div>
          <h2 className="text-xl font-bold mb-2">Post Details</h2>
          <p className="mb-2">
            <span className="font-bold text-green-500">Name of the Post:</span>{' '}
            MPPKVVCL Graduate & Technical Apprentice Offline Form 2024
          </p>
          <p className="mb-2">
            <span className="font-bold text-green-500">Post Date:</span>{' '}
            <strong>31-08-2024</strong>
          </p>
          <p className="mb-2">
            <span className="font-bold text-green-500">Total Vacancy:</span>{' '}
            <strong>175</strong>
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Brief Information</h2>
          <p>
            Madhya Pradesh Poorv Kshetra Vidyut Vitaran Company Limited
            (MPPKVVCL) has given an employment notification for the
            recruitment of Graduate & Technical Apprentice vacancy. Those
            Candidates who are interested in the vacancy details & completed
            all eligibility criteria can read the Notification & Apply.
          </p>
        </div>
      </div>
      <h2 className="text-xl font-bold mb-4">Important Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div>
          <h3 className="text-lg font-bold mb-2">Important Dates</h3>
          <ul className="list-disc pl-5">
            <li>Last Date for Receipt of Applications: 21-09-2024</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Age Limit (as on 01-07-2024)</h3>
          <ul className="list-disc pl-5">
            <li>
              <span className="text-black">Minimum Age Limit:</span>{' '}
              <strong>18 Years</strong>
            </li>
            <li>
              <span className="text-black">Maximum Age Limit for General Category:</span>{' '}
              <strong>30 Years</strong>
            </li>
            <li>For More Details refer the Notification</li>
            <li>
              <span className="text-black">Age relaxation is admissible as per rules</span>
              .
            </li>
          </ul>
        </div>
      </div>
      <h3 className="text-lg font-bold mb-2">Qualification</h3>
      <ul className="list-disc pl-5 mb-4">
        <li>
          Candidates Should Possess Diploma (Electrical/ Civil)/B.E/B.TECH
          (Electrical /Civil)/B.Com/BBA/Bachelor of Social Work
        </li>
      </ul>
      <h2 className="text-xl font-bold mb-4">Vacancy Details</h2>
      <table className="table-auto w-full text-center border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-gray-300 font-bold text-red-500">
              Post Name
            </th>
            <th className="px-4 py-2 border border-gray-300 font-bold text-red-500">
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border border-gray-300">
              Graduate Electrical
            </td>
            <td className="px-4 py-2 border border-gray-300">
              <span className="text-black">31</span>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">
              Graduate Civil
            </td>
            <td className="px-4 py-2 border border-gray-300">21</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">
              Faculty of Commerce and Accountancy
            </td>
            <td className="px-4 py-2 border border-gray-300">39</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">
              Graduate Human Resources Branch
            </td>
            <td className="px-4 py-2 border border-gray-300">32</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">
              Technical (Diploma) Electrical
            </td>
            <td className="px-4 py-2 border border-gray-300">31</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">
              Technical (Diploma) Civil
            </td>
            <td className="px-4 py-2 border border-gray-300">21</td>
          </tr>
        </tbody>
      </table>
      <p className="text-blue-500 text-center mt-4">
        Interested Candidates Can Read the Full Notification Before Apply
      </p>
      <h2 className="text-xl font-bold mb-4 mt-8">Important Links</h2>
      <table className="table-auto w-full text-center border-collapse">
        <tbody>
          <tr>
            <td className="px-4 py-2 border border-gray-300 font-bold text-green-500">
              Apply
            </td>
            <td className="px-4 py-2 border border-gray-300">
              <a
                href="https://www.apprenticeshipindia.gov.in/"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 hover:underline"
              >
                Click here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300 font-bold text-green-500">
              Notification
            </td>
            <td className="px-4 py-2 border border-gray-300">
              <a
                href="https://img.freejobalert.com/uploads/2024/08/Notification-MPPKVVCL-Graduate-and-Technical-Apprentice-2024.pdf"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 hover:underline"
              >
                Click here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300 font-bold text-green-500">
              Official Website
            </td>
            <td className="px-4 py-2 border border-gray-300">
              <a
                href="https://portal.mpcz.in/web/"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 hover:underline"
              >
                Click here
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}