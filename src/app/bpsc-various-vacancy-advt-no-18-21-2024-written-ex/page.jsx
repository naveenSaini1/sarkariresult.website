export default function RecruitmentInformation() {
  // Displays recruitment information for Bihar Public Service Commission (BPSC) Various Vacancy 2024.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">BPSC Various Vacancy 2024 Written Exam Result Released</h1>
      <div className="mb-4">
        <p className="text-green-500 font-bold mb-1">
          Name of the Post:
          <span className="font-bold">
            BPSC Various Vacancy 2024 Written Exam Result Released
          </span>
        </p>
        <p className="text-justify mb-1">
          <span className="text-green-500 font-bold">Post Date:</span>
          <span className="font-bold">11-01-2024</span>
        </p>
        <p className="mb-1">
          <span className="text-green-500 font-bold">Latest Update:</span>
          <span className="font-bold">28-09-2024</span>
        </p>
        <p className="text-justify mb-2">
          <span className="text-green-500 font-bold">Total Vacancy:</span>
          <span className="font-bold">1051</span>
        </p>
      </div>

      <p className="text-justify mb-4">
        <span className="text-red-500 font-bold">Brief Information:</span>{' '}
        Bihar Public Service Commission (BPSC) has given a Notification for the
        Recruitment of Assistant Director, Block Agriculture Officer & Other
        Vacancy. Those Candidates who are interested in the vacancy details &
        completed all eligibility criteria can read the Notification & Apply
        online.
      </p>

      <h2 className="text-2xl font-bold mb-4">Important Details</h2>
      <div className="mb-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">Application Fee</h3>
          <ul className="list-disc pl-6">
            <li>
              For General Candidates:
              <span className="font-bold">Rs. 750/-</span>
            </li>
            <li>
              For Scheduled Caste/Scheduled Tribe:
              <span className="font-bold">Rs. 200/-</span>
            </li>
            <li>
              For all reserved/unreserved category female candidates:
              <span className="font-bold">Rs. 200/-</span>
            </li>
            <li>
              For handicapped candidates:
              <span className="font-bold">Rs. 200/-</span>
            </li>
            <li>
              For all other candidates:
              <span className="font-bold">Rs. 750/-</span>
            </li>
            <li>Payment Mode: <span className="font-bold">Through Online</span></li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">Important Dates</h3>
          <ul className="list-disc pl-6">
            <li>
              Starting Date for Apply Online & Payment of Fee:
              <span className="font-bold">15-01-2024</span>
            </li>
            <li>
              Last Date for Apply Online & Payment of Fee:
              <span className="font-bold">28-01-2024</span>
            </li>
            <li>
              Date of Examination for 18 to 21/2024:
              <span className="font-bold">01-03-2024 to 04-03-2024</span>
            </li>
            <li>
              Date of DV for Advt No. 18, 19, 20/2024:
              <span className="font-bold">15-06-2024</span>
            </li>
            <li>
              Date of DV for Advt No. 21/2024:
              <span className="font-bold">05-06-2024 to 15-06-2024</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-2">Age Limit (as on 01-08-2023)</h3>
          <ul className="list-disc pl-6">
            <li>
              Minimum Age Limit:
              <span className="font-bold">21 Years</span>
            </li>
            <li>
              Maximum Age Limit for Unreserved (Male):
              <span className="font-bold">37 Years</span>
            </li>
            <li>
              Maximum Age Limit for Backward Class/ Extremely Backward Class (Male
              and Female) & Unreserved Female:
              <span className="font-bold">40 Years</span>
            </li>
            <li>
              Maximum Age Limit for Scheduled Caste and Scheduled Tribe (Male and
              Female):
              <span className="font-bold">42 Years</span>
            </li>
            <li>Age Relaxation is applicable as per Rules.</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>
      <table className="table-auto w-full mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b border-gray-200 text-left text-sm font-medium text-gray-900" colSpan={3}>
              <span className="text-blue-500 font-bold">Post Name</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-2 text-center">
              <span className="text-blue-500 font-bold">Post Name</span>
            </td>
            <td className="px-4 py-2 text-center">
              <span className="text-blue-500 font-bold">Total</span>
            </td>
            <td className="px-4 py-2 text-center">
              <span className="text-blue-500 font-bold">Qualification</span>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-2 text-center">
              Sub-Divisional Agriculture Officer, Deputy Project Director
              (Aatma) / Assistant Director (Crops) and equivalent
            </td>
            <td className="px-4 py-2 text-center">155</td>
            <td className="px-4 py-2 text-center">B.Sc (Agriculture)</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-2 text-center">
              Assistant Director (Agricultural Engineering)
            </td>
            <td className="px-4 py-2 text-center">19</td>
            <td className="px-4 py-2 text-center">Degree (Agricultural Engg)</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-2 text-center">
              Assistant Director (Plant Protection)
            </td>
            <td className="px-4 py-2 text-center">11</td>
            <td className="px-4 py-2 text-center">
              Degree (Elective Plant Protection)
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-2 text-center">
              Block Agriculture Officer and equivalent
            </td>
            <td className="px-4 py-2 text-center">866</td>
            <td className="px-4 py-2 text-center">B.Sc (Agriculture)</td>
          </tr>
        </tbody>
      </table>

      <p className="text-blue-500 font-bold mb-4">
        Interested Candidates Can Read the Full Notification Before Apply Online
      </p>

      <h2 className="text-2xl font-bold mb-4">Important Links</h2>
      <table className="table-auto w-full mb-4">
        <tbody>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-2 text-center">
              <span className="text-green-500 font-bold">
                Written Exam Result (28-09-2024)
              </span>
            </td>
            <td className="px-4 py-2 text-center" colSpan={2}>
              <a
                className="text-blue-500 hover:underline"
                href="https://www.bpsc.bih.nic.in/Notices/NB-2024-09-27-02.pdf"
                target="_blank"
                rel="noopener"
              >
                Advt No. 18/2024
              </a>{' '}
              |{' '}
              <a
                className="text-blue-500 hover:underline"
                href="https://www.bpsc.bih.nic.in/Notices/NB-2024-09-27-03.pdf"
                target="_blank"
                rel="noopener"
              >
                19/2024
              </a>{' '}
              |{' '}
              <a
                className="text-blue-500 hover:underline"
                href="https://www.bpsc.bih.nic.in/Notices/NB-2024-09-27-04.pdf"
                target="_blank"
                rel="noopener"
              >
                20/2024
              </a>{' '}
              |{' '}
              <a
                className="text-blue-500 hover:underline"
                href="https://www.bpsc.bih.nic.in/Notices/NB-2024-09-27-05.pdf"
                target="_blank"
                rel="noopener"
              >
                21/2024
              </a>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-2 text-center">
              <span className="text-green-500 font-bold">
                Notice (22-08-2024)
              </span>
            </td>
            <td className="px-4 py-2 text-center" colSpan={2}>
              <a
                className="text-blue-500 hover:underline"
                href="https://img.freejobalert.com/uploads/2024/08/Notice-BPSC-Assistant-Director-Block-Agriculture-Officer-Other-Posts.pdf"
                target="_blank"
                rel="noopener"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-2 text-center">
              <span className="text-green-500 font-bold">
                Interview Date Postponed (27-06-2024)
              </span>
            </td>
            <td className="px-4 py-2 text-center" colSpan={2}>
              <a
                className="text-blue-500 hover:underline"
                href="https://img.freejobalert.com/uploads/2024/07/Interview-Date-Postponed-Notice-BPSC-Various-Vacancy-2024.pdf"
                target="_blank"
                rel="noopener"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-2 text-center">
              <span className="text-green-500 font-bold">
                Ineligible candidates list (17-07-2024)
              </span>
            </td>
            <td className="px-4 py-2 text-center" colSpan={2}>
              <a
                className="text-blue-500 hover:underline"
                href="https://img.freejobalert.com/uploads/2024/07/Ineligible-candidates-list-BPSC-Assistant-Director-Block-Agriculture-Officer-Other-Posts.pdf"
                target="_blank"
                rel="noopener"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-2 text-center">
              <span className="text-green-500 font-bold">
                Ineligible candidates list (09-07-2024)
              </span>
            </td>
            <td className="px-4 py-2 text-center" colSpan={2}>
              <a
                className="text-blue-500 hover:underline"
                href="https://img.freejobalert.com/uploads/2024/07/Ineligible-candidates-BPSC-Various-Vacancy.pdf"
                target="_blank"
                rel="noopener"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-2 text-center">
              <span className="text-green-500 font-bold">
                Interview Letter (27-06-2024)
              </span>
            </td>
            <td className="px-4 py-2 text-center" colSpan={2}>
              <a
                className="text-blue-500 hover:underline"
                href="https://www.bpsc.bih.nic.in/FindCard.asp"
                target="_blank"
                rel="noopener"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-2 text-center">
              <span className="text-green-500 font-bold">
                Exam Notice (20-06-2024)
              </span>
            </td>
            <td className="px-4 py-2 text-center" colSpan={2}>
              <a
                className="text-blue-500 hover:underline"
                href="https://www.bpsc.bih.nic.in/Notices/NB-2024-06-12-02.pdf"
                target="_blank"
                rel="noopener"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-2 text-center">
              <span className="text-green-500 font-bold">
                Detailed DV Schedule (31-05-2024)
              </span>
            </td>
            <td className="px-4 py-2 text-center" colSpan={2}>
              <a
                className="text-blue-500 hover:underline"
                href="https://www.bpsc.bih.nic.in/Notices/NB-2024-05-28-02.pdf"
                target="_blank"
                rel="noopener"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-2 text-center">
              <span className="text-green-500 font-bold">
                DV Date (29-05-2024)
              </span>
            </td>
            <td className="px-4 py-2 text-center" colSpan={2}>
              <a
                className="text-blue-500 hover:underline"
                href="https://www.bpsc.bih.nic.in/Notices/NB-2024-05-28-01.pdf"
                target="_blank"
                rel="noopener"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-2 text-center">
              <span className="text-green-500 font-bold">
                Written Exam Result (18-05-2024)
              </span>
            </td>
            <td className="px-4 py-2 text-center" colSpan={2}>
              <a
                className="text-blue-500 hover:underline"
                href="https://www.bpsc.bih.nic.in/Notices/NB-2024-05-17-01.pdf"
                target="_blank"
                rel="noopener"
              >
                Advt No. 18/2024
              </a>{' '}
              |{' '}
              <a
                className="text-blue-500 hover:underline"
                href="https://www.bpsc.bih.nic.in/Notices/NB-2024-05-17-02.pdf"
                target="_blank"
                rel="noopener"
              >
                19/2024
              </a>{' '}
              |{' '}
              <a
                className="text-blue-500 hover:underline"
                href="https://www.bpsc.bih.nic.in/Notices/NB-2024-05-17-03.pdf"
                target="_blank"
                rel="noopener"
              >
                20/2024
              </a>{' '}
              |{' '}
              <a
                className="text-blue-500 hover:underline"
                href="https://www.bpsc.bih.nic.in/Notices/NB-2024-05-17-04.pdf"
                target="_blank"
                rel="noopener"
              >
                21/2024
              </a>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-2 text-center">
              <span className="text-green-500 font-bold">
                Written Exam Revised Final Answer Key for{' '}
                <span>Agronomy, Paper-I</span> (14-05-2024)
              </span>
            </td>
            <td className="px-4 py-2 text-center" colSpan={2}>
              <a
                className="text-blue-500 hover:underline"
                href="https://www.bpsc.bih.nic.in/Notices/NB-2024-05-13-02.pdf"
                target="_blank"
                rel="noopener"
              >
                Key
              </a>{' '}
              |{' '}
              <a
                className="text-blue-500 hover:underline"
                href="https://www.bpsc.bih.nic.in/Notices/NB-2024-05-13-01.pdf"
                target="_blank"
                rel="noopener"
              >
                Notice
              </a>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-2 text-center">
              <span className="text-green-500 font-bold">
                Written Exam Final Answer Key for Agricultural Engineering
                (03-05-2024)
              </span>
            </td>
            <td className="px-4 py-2 text-center" colSpan={2}>
              <a
                className="text-blue-500 hover:underline"
                href="https://www.bpsc.bih.nic.in/Notices/NB-2024-04-28-06.pdf"
                target="_blank"
                rel="noopener"
              >
                Key
              </a>{' '}
              |{' '}
              <a
                className="text-blue-500 hover:underline"
                href="https://www.bpsc.bih.nic.in/Notices/NB-2024-04-28-01.pdf"
                target="_blank"
                rel="noopener"
              >
                Notice
              </a>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-2 text-center">
              <span className="text-green-500 font-bold">
                Objection Notice (29-04-2024)
              </span>
            </td>
            <td className="px-4 py-2 text-center" colSpan={2}>
              <a
                className="text-blue-500 hover:underline"
                href="https://www.bpsc.bih.nic.in/Notices/NB-2024-04-28-01.pdf"
                target="_blank"
                rel="noopener"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-2 text-center">
              <span className="text-green-500 font-bold">
                Notice (25-04-2024)
              </span>
            </td>
            <td className="px-4 py-2 text-center" colSpan={2}>
              <a
                className="text-blue-500 hover:underline"
                href="https://www.bpsc.bih.nic.in/Notices/NB-2024-04-24-01.pdf"
                target="_blank"
                rel="noopener"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-2 text-center">
              <span className="text-green-500 font-bold">
                Written Exam 2nd Provisional Answer Key (23-04-2024)
              </span>
            </td>
            <td className="px-4 py-2 text-center" colSpan={2}>
              <a
                className="text-blue-500 hover:underline"
                href="https://www.bpsc.bih.nic.in/"
                target="_blank"
                rel="noopener"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-2 text-center">
              <span className="text-green-500 font-bold">
                OMR Sheet (16-04-2024)
              </span>
            </td>
            <td className="px-4 py-2 text-center" colSpan={2}>
              <a
                className="text-blue-500 hover:underline"
                href="https://onlinebpsc.bihar.gov.in/main/home"
                target="_blank"
                rel="noopener"
              >
                Link
              </a>{' '}
              |{' '}
              <a
                className="text-blue-500 hover:underline"
                href="https://www.bpsc.bih.nic.in/Notices/NB-2024-04-15-02.pdf"
                target="_blank"
                rel="noopener"
              >
                Notice
              </a>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-2 text-center">
              <span className="text-green-500 font-bold">
                Written Exam Provisional Answer Key (16-04-2024)
              </span>
            </td>
            <td className="px-4 py-2 text-center" colSpan={2}>
              <a
                className="text-blue-500 hover:underline"
                href="https://www.bpsc.bih.nic.in/"
                target="_blank"
                rel="noopener"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-2 text-center">
              <span className="text-green-500 font-bold">
                Notice Regarding Written Exam Result (13-04-2024)
              </span>
            </td>
            <td className="px-4 py-2 text-center" colSpan={2}>
              <a
                className="text-blue-500 hover:underline"
                href="https://www.bpsc.bih.nic.in/Notices/NB-2024-04-11-01.pdf"
                target="_blank"
                rel="noopener"
              >
                Notice
              </a>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-2 text-center">
              <span className="text-green-500 font-bold">
                Written Exam Admit Card (26-02-2024)
              </span>
            </td>
            <td className="px-4 py-2 text-center" colSpan={2}>
              <a
                className="text-blue-500 hover:underline"
                href="https://onlinebpsc.bihar.gov.in/main/home"
                target="_blank"
                rel="noopener"
              >
                Admit Card
              </a>{' '}
              | Notice –{' '}
              <a
                className="text-blue-500 hover:underline"
                href="https://www.bpsc.bih.nic.in/Notices/NB-2024-02-22-02.pdf"
                target="_blank"
                rel="noopener"
              >
                1
              </a>{' '}
              |{' '}
              <a
                className="text-blue-500 hover:underline"
                href="https://www.bpsc.bih.nic.in/Notices/NB-2024-02-22-04.pdf"
                target="_blank"
                rel="noopener"
              >
                2
              </a>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-2 text-center">
              <span className="text-green-500 font-bold">
                Written Exam Schedule (09-02-2024)
              </span>
            </td>
            <td className="px-4 py-2 text-center" colSpan={2}>
              <a
                className="text-blue-500 hover:underline"
                href="https://www.bpsc.bih.nic.in/Notices/NB-2024-02-07-01.pdf"
                target="_blank"
                rel="noopener"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-2 text-center">
              <span className="text-green-500 font-bold">
                Apply Online (16-01-2024)
              </span>
            </td>
            <td className="px-4 py-2 text-center" colSpan={2}>
              <a
                className="text-blue-500 hover:underline"
                href="https://onlinebpsc.bihar.gov.in/main/home"
                target="_blank"
                rel="noopener"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-2 text-center">
              <span className="text-green-500 font-bold">Notification</span>
            </td>
            <td className="px-4 py-2 text-center" colSpan={2}>
              <a
                className="text-blue-500 hover:underline"
                href="https://www.bpsc.bih.nic.in/Notices/NB-2024-01-10-05.pdf"
                target="_blank"
                rel="noopener"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-2 text-center">
              <span className="text-green-500 font-bold">Short Notice</span>
            </td>
            <td className="px-4 py-2 text-center" colSpan={2}>
              <a
                className="text-blue-500 hover:underline"
                href="https://www.bpsc.bih.nic.in/Notices/NB-2024-01-10-04.pdf"
                target="_blank"
                rel="noopener"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-2 text-center">
              <span className="text-green-500 font-bold">Official Website</span>
            </td>
            <td className="px-4 py-2 text-center" colSpan={2}>
              <a
                className="text-blue-500 hover:underline"
                href="https://www.bpsc.bih.nic.in/"
                target="_blank"
                rel="noopener"
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