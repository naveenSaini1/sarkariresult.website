export default function RecruitmentInformation() {
  // This component displays recruitment information for Cyber Crime Wing, West Bengal.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        Cyber Crime Wing, West Bengal Recruitment 2024
      </h1>
      <p className="text-lg mb-4">
        <span className="text-green-500 font-bold">
          Name of the Post:{" "}
        </span>
        Cyber Crime Wing, WB Various Vacancy Online Form 2024
      </p>
      <div className="flex justify-between mb-4">
        <p className="text-lg font-bold">
          <span className="text-green-500 font-bold">Post Date: </span>
          28-09-2024
        </p>
        <p className="text-lg font-bold">
          <span className="text-green-500 font-bold">Total Vacancy: </span>
          54
        </p>
      </div>
      <p className="text-lg mb-4">
        <span className="text-red-500 font-bold">Brief Information: </span>
        Cyber Crime Wing, West Bengal has given an employment notification
        for the recruitment of Data Entry Operator, Software Support
        Personnel & Other Vacancy. Those Candidates who are interested in the
        vacancy details & completed all eligibility criteria can read the
        Notification & Apply online.
      </p>
      <h2 className="text-2xl font-bold mb-4">Important Dates</h2>
      <ul className="list-disc ml-4 mb-4">
        <li>Starting Date for Apply Online: 25-09-2024</li>
        <li>Last Date to Apply Online: 18-10-2024</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>
      <table className="table-auto w-full border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2 text-center">
              <span className="text-blue-500 font-bold">Post Name</span>
            </th>
            <th className="border border-gray-300 p-2 text-center">
              <span className="text-blue-500 font-bold">Total</span>
            </th>
            <th className="border border-gray-300 p-2 text-center">
              <span className="text-blue-500 font-bold">Qualification</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2 text-center">
              Data Entry Operator
            </td>
            <td className="border border-gray-300 p-2 text-center">11</td>
            <td className="border border-gray-300 p-2 text-center">
              Degree (Computer Application)
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 text-center">
              Software Support Personnel
            </td>
            <td className="border border-gray-300 p-2 text-center">25</td>
            <td className="border border-gray-300 p-2 text-center">
              B.Sc (Computer Science)/BCA/DOEACC/DBMS/PGDCA
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 text-center">
              System Administrator
            </td>
            <td className="border border-gray-300 p-2 text-center">01</td>
            <td className="border border-gray-300 p-2 text-center">
              B.E/ B.Tech/MCA/M.Sc,OEM L2 Certificate (Relevant Discipline)
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 text-center">
              Software Developer
            </td>
            <td className="border border-gray-300 p-2 text-center">07</td>
            <td
              className="border border-gray-300 p-2 text-center"
              rowSpan="3"
            >
              MCA/M.Sc/B.E/B.Tech (IT/ Computer Science)
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 text-center">
              Security and Network Administrator
            </td>
            <td className="border border-gray-300 p-2 text-center">08</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 text-center">
              Senior Software Developer
            </td>
            <td className="border border-gray-300 p-2 text-center">02</td>
          </tr>
        </tbody>
      </table>
      <p className="text-blue-500 font-bold mt-4">
        Interested Candidates Can Read the Full Notification Before Apply
        Online
      </p>
      <h2 className="text-2xl font-bold mb-4">Important Links</h2>
      <table className="table-auto w-full border border-gray-300">
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2 text-center">
              <span className="text-green-500 font-bold">Apply Online</span>
            </td>
            <td
              className="border border-gray-300 p-2 text-center"
              colSpan="2"
            >
              <a
                className="text-blue-500 hover:underline"
                href="https://wbpolice.gov.in/WBP/CCW/OnlineApplication.aspx"
                target="_blank"
                rel="noopener"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 text-center">
              <span className="text-green-500 font-bold">Notification</span>
            </td>
            <td
              className="border border-gray-300 p-2 text-center"
              colSpan="2"
            >
              <a
                className="text-blue-500 hover:underline"
                href="https://cybercrimewing.wb.gov.in/tenancy/assets/notice//tenantcybercrimewing.notice1727340602.pdf"
                target="_blank"
                rel="noopener"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2 text-center">
              <span className="text-green-500 font-bold">Official Website</span>
            </td>
            <td
              className="border border-gray-300 p-2 text-center"
              colSpan="2"
            >
              <a
                className="text-blue-500 hover:underline"
                title="West Bengal Police"
                href="http://wbpolice.gov.in/"
                target="_blank"
                rel="noopener"
              >
                Link 1
              </a>{" "}
              |{" "}
              <a
                className="text-blue-500 hover:underline"
                href="https://cybercrimewing.wb.gov.in/"
                target="_blank"
                rel="noopener"
              >
                Link 2
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}