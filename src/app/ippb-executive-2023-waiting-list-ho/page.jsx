export default function IPPBRecruitment() {
  // This component displays recruitment information for the IPPB Executive 2023 vacancy. It includes key details such as post name, vacancy details, application fee, important dates, and educational qualifications. 
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">IPPB Executive 2023 Recruitment</h1>

      <p className="mb-4">
        The Indian Post Payment Bank (IPPB) has announced recruitment for Executive
        vacancies on a contract basis. Interested candidates who meet the
        eligibility criteria can apply online.
      </p>

      <h2 className="text-2xl font-bold mb-4">Key Highlights</h2>

      <ul className="list-disc mb-4">
        <li>
          <span className="font-bold">Post Name:</span> IPPB Executive
        </li>
        <li>
          <span className="font-bold">Total Vacancy:</span> 132
        </li>
        <li>
          <span className="font-bold">Application Fee:</span> Rs. 100/- (For
          all others) and Rs. 100/- (For SC/ST/PWD candidates)
        </li>
        <li>
          <span className="font-bold">Important Dates:</span>
          <ul className="list-disc ml-6">
            <li>
              Opening Date for Online Registration: 26-07-2023 (10:00 am)
            </li>
            <li>Last Date of Online Application: 16-08-2023 (11:59 pm)</li>
            <li>Online Exam Date: 01-10-2023</li>
          </ul>
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Educational Qualification</h2>

      <p className="mb-4">
        Candidates must possess a Graduate degree (Any discipline).
      </p>

      <h2 className="text-2xl font-bold mb-4">Age Limit</h2>

      <p className="mb-4">
        As on 01-06-2023, the minimum age is 21 years, and the maximum age is
        35 years. Age relaxation is applicable as per rules.
      </p>

      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>

      <table className="table-auto w-full text-center mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">Region</th>
            <th className="px-4 py-2">Total Vacancy</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Assam</td>
            <td className="px-4 py-2">26</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Chhattisgarh</td>
            <td className="px-4 py-2">27</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Himachal Pradesh</td>
            <td className="px-4 py-2">12</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Jammu And Kashmir</td>
            <td className="px-4 py-2">07</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Ladakh</td>
            <td className="px-4 py-2">01</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Arunachal Pradesh</td>
            <td className="px-4 py-2">10</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Manipur</td>
            <td className="px-4 py-2">09</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Meghalaya</td>
            <td className="px-4 py-2">08</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Mizoram</td>
            <td className="px-4 py-2">06</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Nagaland</td>
            <td className="px-4 py-2">09</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Tripura</td>
            <td className="px-4 py-2">05</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Uttarakhand</td>
            <td className="px-4 py-2">12</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mb-4">Important Links</h2>

      <table className="table-auto w-full text-center mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">Link</th>
            <th className="px-4 py-2">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">
              <a
                href="https://www.ippbonline.com/web/ippb/current-openings"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener"
              >
                Click Here
              </a>
            </td>
            <td className="px-4 py-2">Waiting List (02-11-2024)</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">
              <a
                href="https://ibpsonline.ibps.in/ippbemay23/oecla_sep23/login.php?appid=f8e5e05f6839d26e6a552ffb68a4a728"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener"
              >
                Click Here
              </a>
            </td>
            <td className="px-4 py-2">Online Exam Admit Card (26-09-2023)</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">
              <a
                href="https://img.freejobalert.com/uploads/2023/09/Online-Exam-Date-IPPB-Various-Posts.pdf"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener"
              >
                Click Here
              </a>
            </td>
            <td className="px-4 py-2">Online Exam Date (25-09-2023)</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">
              <a
                href="https://ibpsonline.ibps.in/ippbemay23/"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener"
              >
                Click Here
              </a>
            </td>
            <td className="px-4 py-2">Apply Online</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">
              <a
                href="https://www.ippbonline.com/documents/31498/132994/1690280273565.07.2023.pdf"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener"
              >
                Click Here
              </a>
            </td>
            <td className="px-4 py-2">Notification</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">
              <a
                href="https://www.ippbonline.com/"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener"
              >
                Click Here
              </a>
            </td>
            <td className="px-4 py-2">Official Website</td>
          </tr>
        </tbody>
      </table>

      <p className="mt-4">
        For more information about the recruitment process, please visit the
        IPPB's official website.
      </p>

      <p className="mt-4 text-gray-500">
        Keywords: IPPB, Indian Post Payment Bank, Executive, Recruitment,
        Vacancy, Application, Online, Important Dates, Age Limit, Qualification,
        Job, Career
      </p>
    </div>
  );
}