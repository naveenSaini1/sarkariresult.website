export default function SuratMPHWRecruitment() {
  // This component displays information about the Surat Municipal Corporation MPHW (Male) recruitment for 2024.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        Surat Municipal Corporation MPHW (Male) Recruitment 2024
      </h1>

      <p className="mb-4">
        The Surat Municipal Corporation (SMC) has announced recruitment for MPHW
        (Male) positions on a contract basis. Interested candidates can apply
        online.
      </p>

      <h2 className="text-2xl font-bold mb-4">Key Highlights</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>
          <span className="font-bold">Post Date:</span> 22-10-2024
        </li>
        <li>
          <span className="font-bold">Total Vacancy:</span> 59
        </li>
        <li>
          <span className="font-bold">Starting Date for Apply Online:</span>{' '}
          21-10-2024
        </li>
        <li>
          <span className="font-bold">Last Date for Apply Online:</span>{' '}
          30-10-2024 (23:59 hrs)
        </li>
        <li>
          <span className="font-bold">Maximum Age Limit:</span> 45 Years
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Brief Information</h2>
      <p className="mb-4">
        Surat Municipal Corporation (SMC) is hiring MPHW (Male) on a contract
        basis. Eligible candidates are encouraged to review the notification and
        apply online.
      </p>

      <h2 className="text-2xl font-bold mb-4">Qualification</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Candidates should possess 12th Class, MPHW basic course.</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>
      <table className="table-auto w-full text-center mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Post Name</th>
            <th className="px-4 py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="px-4 py-2">MPHW (Male)</td>
            <td className="px-4 py-2">59</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mb-4">Important Links</h2>
      <table className="table-auto w-full text-center mb-4">
        <tbody>
          <tr className="border-b">
            <td className="px-4 py-2">
              <span className="font-bold">Apply Online</span>
            </td>
            <td className="px-4 py-2">
              <a
                href="https://arogyasathi.gujarat.gov.in/applyGuidLine.aspx"
                target="_blank"
                rel="noopener"
                className="text-blue-500 hover:underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">
              <span className="font-bold">Notification</span>
            </td>
            <td className="px-4 py-2">
              <a
                href="https://img.freejobalert.com/uploads/2024/10/Notification-Surat-Municipal-Corporation-MPHW-Male-Posts.pdf"
                target="_blank"
                rel="noopener"
                className="text-blue-500 hover:underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">
              <span className="font-bold">Official Website</span>
            </td>
            <td className="px-4 py-2">
              <a
                href="https://www.suratmunicipal.gov.in/"
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

      <p className="mt-4 text-center">
        Interested candidates are advised to read the full notification before
        applying online.
      </p>

      <p className="mt-4 text-center font-bold">
        Keywords: Surat Municipal Corporation, SMC, MPHW, Recruitment, 2024,
        Gujarat, Contract Basis, Apply Online, Notification, Vacancy Details,
        Important Dates, Age Limit, Qualification
      </p>
    </div>
  );
}