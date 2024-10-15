export default function RecruitmentInformation() {
  // This component displays recruitment information for Anganwadi Worker & Helper positions in Vijayapura, Karnataka. 
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">WCD, Vijayapura Anganwadi Worker & Helper Recruitment 2024</h1>
      <p className="text-lg mb-4">
        The Women & Child Development Department in Vijayapura, Karnataka, has announced
        vacancies for Anganwadi Worker and Anganwadi Helper positions. This
        opportunity is open to eligible candidates who meet the specified criteria.
      </p>
      <h2 className="text-2xl font-bold mb-4">Key Highlights</h2>
      <ul className="list-disc ml-8 mb-4">
        <li>
          <span className="font-bold">Post Date:</span> 15-10-2024
        </li>
        <li>
          <span className="font-bold">Total Vacancies:</span> 1170
        </li>
        <li>
          <span className="font-bold">Starting Date for Application:</span> 10-10-2024
        </li>
        <li>
          <span className="font-bold">Last Date for Application:</span> 09-11-2024
        </li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Brief Information</h2>
      <p className="mb-4">
        The Women & Child Development Department, Vijayapura, is seeking
        qualified individuals to fill the Anganwadi Worker and Anganwadi Helper
        positions. Interested candidates are encouraged to review the notification
        and apply online.
      </p>
      <h2 className="text-2xl font-bold mb-4">Important Dates</h2>
      <ul className="list-disc ml-8 mb-4">
        <li>
          <span className="font-bold">Starting Date for Apply Online:</span>
          10-10-2024
        </li>
        <li>
          <span className="font-bold">Last Date for Apply Online:</span> 09-11-2024
        </li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Age Limit</h2>
      <ul className="list-disc ml-8 mb-4">
        <li>
          <span className="font-bold">Minimum Age Limit:</span> 19 Years
        </li>
        <li>
          <span className="font-bold">Maximum Age Limit:</span> 35 Years
        </li>
        <li>Age relaxation is applicable as per rules.</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>
      <table className="table-auto w-full mb-4">
        <thead>
          <tr className="bg-gray-200 text-gray-900">
            <th className="px-4 py-2 text-center">Post Name</th>
            <th className="px-4 py-2 text-center">Total</th>
            <th className="px-4 py-2 text-center">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 text-center">Anganwadi Worker</td>
            <td className="px-4 py-2 text-center">313</td>
            <td className="px-4 py-2 text-center">
              10th, 12th, ECCE Diploma, JOC, N.T.T. Courses from D.S.E.R.T
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center">Anganwadi Helper</td>
            <td className="px-4 py-2 text-center">857</td>
            <td className="px-4 py-2 text-center">10th Class</td>
          </tr>
        </tbody>
      </table>
      <p className="mb-4">
        Interested candidates are advised to read the full notification before
        applying online.
      </p>
      <h2 className="text-2xl font-bold mb-4">Important Links</h2>
      <table className="table-auto w-full mb-4">
        <thead>
          <tr className="bg-gray-200 text-gray-900">
            <th className="px-4 py-2 text-center">Link</th>
            <th className="px-4 py-2 text-center">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 text-center">
              <a
                href="https://karnemakaone.kar.nic.in/abcd/ApplicationForm_JA_org.aspx"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
              >
                Click Here
              </a>
            </td>
            <td className="px-4 py-2 text-center">Apply Online</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center">
              <a
                href="https://img.freejobalert.com/uploads/2024/09/Notification-WCD-Karnataka-Anganwadi-Worker-Helper-Posts.pdf"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
              >
                Click Here
              </a>
            </td>
            <td className="px-4 py-2 text-center">Notification</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center">
              <a
                href="https://karnemakaone.kar.nic.in/abcd/"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
              >
                Click Here
              </a>
            </td>
            <td className="px-4 py-2 text-center">Official Website</td>
          </tr>
        </tbody>
      </table>
      {/*  Add Keywords at the bottom of the component */}
      <p className="mt-4 text-gray-500">
        Keywords: Anganwadi Worker, Anganwadi Helper, WCD Vijayapura,
        Recruitment, Karnataka, Government Jobs, Online Application
      </p>
    </div>
  );
}