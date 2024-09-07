export default function RecruitmentInformation() {
  // Displays recruitment information for ZP, Kalahandi Gram Rozgar Sevak Offline Form 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">
        ZP, Kalahandi Gram Rozgar Sevak Offline Form 2024
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <h2 className="text-xl font-bold mb-2">Post Details</h2>
          <ul className="list-disc pl-5">
            <li className="mb-2">
              <span className="font-bold">Name of the Post:</span>{' '}
              ZP, Kalahandi Gram Rozgar Sevak
            </li>
            <li className="mb-2">
              <span className="font-bold">Post Date:</span> 06-09-2024
            </li>
            <li className="mb-2">
              <span className="font-bold">Total Vacancy:</span> 234
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Brief Information</h2>
          <p>
            Zilla Parishad, Kalahandi has announced notification for the
            recruitment of Gram Rozgar Sevak Vacancy. Those Candidates who are
            interested in the vacancy details &amp; completed all eligibility
            criteria can read the Notification &amp; Apply.
          </p>
        </div>
      </div>
      <h2 className="text-xl font-bold mb-4">Important Dates</h2>
      <ul className="list-disc pl-5">
        <li className="mb-2">
          <span className="font-bold">Starting Date for Apply Offline:</span>{' '}
          06-09-2024
        </li>
        <li className="mb-2">
          <span className="font-bold">Last Date to Apply Offline:</span>{' '}
          05-10-2024
        </li>
      </ul>
      <h2 className="text-xl font-bold mb-4">Age Limit (as on 01-09-2024)</h2>
      <ul className="list-disc pl-5">
        <li className="mb-2">
          <span className="font-bold">Minimum Age:</span> 18 Years
        </li>
        <li className="mb-2">
          <span className="font-bold">Maximum Age:</span> 40 Years
        </li>
        <li>Age relaxation is applicable as per rules.</li>
      </ul>
      <h2 className="text-xl font-bold mb-4">Qualification</h2>
      <ul className="list-disc pl-5">
        <li>Candidates Should Possess 10+2 or its Equivalent.</li>
      </ul>
      <h2 className="text-xl font-bold mb-4">Vacancy Details</h2>
      <table className="table-auto w-full text-center border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2 font-bold">Post Name</th>
            <th className="border px-4 py-2 font-bold">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Gram Rozgar Sevak</td>
            <td className="border px-4 py-2">234</td>
          </tr>
        </tbody>
      </table>
      <p className="text-center mt-4">
        Interested Candidates Can Read the Full Notification Before Apply
      </p>
      <h2 className="text-xl font-bold mb-4">Important Links</h2>
      <table className="table-auto w-full text-center border-collapse">
        <tbody>
          <tr>
            <td className="border px-4 py-2 font-bold">Notification</td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 underline"
                href="https://img.freejobalert.com/uploads/2024/09/Notification-ZP-Kalahandi-Gram-Rozgar-Sevak.pdf"
                target="_blank"
                rel="nofollow"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-bold">Official Website</td>
            <td className="border px-4 py-2">
              <a
                className="text-blue-500 underline"
                href="https://kalahandi.odisha.gov.in/"
                target="_blank"
                rel="nofollow"
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