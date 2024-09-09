export default function RecruitmentInfo() {
  // This component displays recruitment information for C-DAC Various Vacancy 2024. 
  // It includes the post name, dates, eligibility criteria, vacancy details, and important links.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">C-DAC Various Vacancy Online Form 2024</h1>
      <div className="mb-4">
        <p className="text-gray-600">
          <span className="font-bold text-green-500">Name of the Post:</span>{' '}
          C-DAC Various Vacancy Online Form 2024
        </p>
        <p className="text-gray-600">
          <span className="font-bold text-green-500">Post Date:</span>{' '}
          <span className="text-black">22-07-2024</span>
        </p>
        <p className="text-gray-600">
          <span className="font-bold text-green-500">Total Vacancy:</span>{' '}
          <span className="text-black">83</span>
        </p>
      </div>
      <p className="text-gray-600 mb-4">
        <span className="font-bold text-red-500">Brief Information:</span>{' '}
        Centre for Development of Advanced Computing (C-DAC) has advertised a
        Notification for the recruitment of Project Engineer,&nbsp; Project
        Manager &amp; Sr Project Engineer Other Vacancy on. Those Candidates who
        are interested in the vacancy details &amp; completed all eligibility
        criteria can read the Notification &amp; Apply Online.
      </p>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Important Dates</h2>
        <ul className="list-disc pl-5">
          <li className="text-gray-600">
            Starting Date for Apply Online: <strong className="text-black">20-07-2024</strong>
          </li>
          <li className="text-gray-600">
            Last Date for Apply Online: <strong className="text-black">16-08-2024</strong>
          </li>
          <li className="text-gray-600">
            Written test/Interview date: Will be communicated later by email only.
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Age Limit</h2>
        <ul className="list-disc pl-5">
          <li className="text-gray-600">
            Upper Age Limit for Project Engineer &amp; Project Officer &amp;
            Project Service and Support (Linguist): <strong className="text-black">35 Years</strong>
          </li>
          <li className="text-gray-600">
            Upper Age Limit for Senior Project Engineer / Project Lead / Module
            Lead: <strong className="text-black">40 Years</strong>
          </li>
          <li className="text-gray-600">
            Upper Age Limit for Project&nbsp; Manager / Prog Manager/ Prog Del.
            Manager / Knowledge Partner: <strong className="text-black">50 Years</strong>
          </li>
          <li className="text-gray-600">
            Age Relaxation is Applicable as per Rules.
          </li>
          <li className="text-gray-600">
            For More Details Refer the Notification
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Qualification</h2>
        <ul className="list-disc pl-5">
          <li className="text-gray-600">
            Candidate Should Posses from B.E/ B.Tech/M.E/ M.Tech/PG/Ph. D (Relevant
            Discipline).
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Vacancy Details</h2>
        <table className="table-auto w-full text-gray-600 border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 text-center border border-gray-300">
                <span className="text-purple-500 font-bold">Sl No</span>
              </th>
              <th className="px-4 py-2 text-center border border-gray-300">
                <span className="text-purple-500 font-bold">Post Name</span>
              </th>
              <th className="px-4 py-2 text-center border border-gray-300">
                <span className="text-purple-500 font-bold">Total</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 text-center border border-gray-300">1</td>
              <td className="px-4 py-2 text-center border border-gray-300">
                Project Engineer
              </td>
              <td className="px-4 py-2 text-center border border-gray-300">40</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center border border-gray-300">2</td>
              <td className="px-4 py-2 text-center border border-gray-300">
                Senior Project Engineer / Project Lead / Module Lead
              </td>
              <td className="px-4 py-2 text-center border border-gray-300">30</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center border border-gray-300">3</td>
              <td className="px-4 py-2 text-center border border-gray-300">
                Project Manager / Prog Manager/ Prog Del. Manager / Knowledge
                Partner
              </td>
              <td className="px-4 py-2 text-center border border-gray-300">05</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center border border-gray-300">4</td>
              <td className="px-4 py-2 text-center border border-gray-300">
                Project Officer
              </td>
              <td className="px-4 py-2 text-center border border-gray-300">03</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center border border-gray-300">5</td>
              <td className="px-4 py-2 text-center border border-gray-300">
                Project Service and Support (Linguist)
              </td>
              <td className="px-4 py-2 text-center border border-gray-300">05</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mb-4">
        <p className="text-blue-500 font-bold text-center">
          Interested Candidates Can Read the Full Notification Before Apply
          Online
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-2">Important Links</h2>
        <table className="table-auto w-full text-gray-600 border border-gray-300">
          <tbody>
            <tr>
              <td className="px-4 py-2 text-center border border-gray-300">
                <span className="text-green-500 font-bold">Apply Online</span>
              </td>
              <td className="px-4 py-2 text-center border border-gray-300">
                <a
                  className="text-blue-500 underline"
                  href="https://careers.cdac.in/advt-details/BLK-1172024-M2EH2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click Here
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center border border-gray-300">
                <span className="text-green-500 font-bold">Notification</span>
              </td>
              <td className="px-4 py-2 text-center border border-gray-300">
                <a
                  className="text-blue-500 underline"
                  href="https://careers.cdac.in/advt-details/BLK-1172024-M2EH2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click Here
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center border border-gray-300">
                <span className="text-green-500 font-bold">Official Website</span>
              </td>
              <td className="px-4 py-2 text-center border border-gray-300">
                <a
                  className="text-blue-500 underline"
                  href="https://www.cdac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click Here
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-gray-600 mt-4">——————————————————————————-</p>
    </div>
  );
}