export default function RecruitmentInfo() {
  // This component displays recruitment information for Mula Education Society, Sonai Assistant Professor Walk in 2024.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">
        Mula Education Society, Sonai Assistant Professor Walk in 2024
      </h1>
      <div className="mb-4">
        <p className="text-lg font-medium text-green-500 mb-1">Name of the Post:</p>
        <p className="text-lg">
          Mula Education Society, Sonai Assistant Professor Walk in 2024
        </p>
      </div>
      <div className="mb-4">
        <p className="text-lg font-medium text-green-500 mb-1">Post Date:</p>
        <p className="text-lg">13-08-2024</p>
      </div>
      <div className="mb-4">
        <p className="text-lg font-medium text-green-500 mb-1">
          Total Vacancy:
        </p>
        <p className="text-lg">57</p>
      </div>
      <p className="text-lg font-medium text-red-500 mb-4">
        Brief Information:
      </p>
      <p className="text-lg">
        Mula Education Society, Sonai has given a Notification for the
        recruitment of Assistant Professor Vacancy on C.H.B. &amp; Permanent
        Non Grant basis. Those Candidates who are interested in the vacancy
        details &amp; completed all eligibility criteria can read the
        Notification &amp; Attend the Interview.
      </p>
      <table className="table-auto w-full text-center border-collapse border border-gray-300 mb-4">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2 font-medium text-red-500">
              Important Dates
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">
              Date of Walk in Interview:&nbsp;
              <b>17-08-2024 (Saturday) at 10:00 am</b>
            </td>
          </tr>
        </tbody>
      </table>
      <table className="table-auto w-full text-center border-collapse border border-gray-300 mb-4">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2 font-medium text-red-500">
              Vacancy Details
            </th>
          </tr>
          <tr>
            <th className="border border-gray-300 px-4 py-2 font-medium text-pink-500">
              Post Name
            </th>
            <th className="border border-gray-300 px-4 py-2 font-medium text-pink-500">
              Total
            </th>
            <th className="border border-gray-300 px-4 py-2 font-medium text-pink-500">
              Qualification
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Assistant Professor</td>
            <td className="border border-gray-300 px-4 py-2">57</td>
            <td className="border border-gray-300 px-4 py-2">
              <div dir="ltr">
                as per UGC, Govt of Maharashtra &amp; SPPU Pune University norms
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <p className="text-lg font-medium text-blue-500 mb-4">
        Interested Candidates Can Read the Full Notification &amp; Attend the
        Interview
      </p>
      <table className="table-auto w-full text-center border-collapse border border-gray-300 mb-4">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2 font-medium text-red-500">
              Important Links
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2 font-medium text-green-500">
              Notification
            </td>
            <td className="border border-gray-300 px-4 py-2">
              <a
                href="https://img.freejobalert.com/uploads/2024/08/Notification-Mula-Education-Society-Sonai-Assistant-Professor-Posts.jpg"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 hover:underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 font-medium text-green-500">
              Official Website
            </td>
            <td className="border border-gray-300 px-4 py-2">
              <a
                href="http://www.mulaeducation.com/education/index.html"
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