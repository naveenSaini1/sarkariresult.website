export default function RecruitmentInformation() {
  // Displays recruitment information for UGC NET exam, including key dates, answer key details, and official website links. 
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        UGC NET Examination Information
      </h1>
      <div className="mb-6">
        <p className="text-gray-600 mb-2">
          The National Testing Agency (NTA) has released the UGC NET Answer Key.
        </p>
        <p className="text-gray-600 mb-2">
          The National Eligibility Test (NET) exam was held from August 21st to
          September 5th, 2024.
        </p>
        <p className="text-gray-600">
          Candidates can download the Answer Key, Question Paper PDF, and OMR
          Response Sheet from the official website.
        </p>
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Important Dates
      </h2>
      <ul className="list-disc pl-6 text-gray-600">
        <li>Online application period: April 20th to May 19th, 2024</li>
        <li>Exam date: August 21st to September 5th, 2024</li>
        <li>Answer Key Release Date: September 7th, 2024</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Key Information
      </h2>
      <table className="table-auto w-full text-gray-600">
        <thead>
          <tr>
            <th className="px-4 py-2 font-bold text-left">Category</th>
            <th className="px-4 py-2 font-bold text-left">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">Organization Name</td>
            <td className="px-4 py-2">National Testing Agency (NTA)</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Exam Name</td>
            <td className="px-4 py-2">National Eligibility Test (NET)</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Advertisement Number</td>
            <td className="px-4 py-2">UGC NET June 2024 (Rescheduled)</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Official Website</td>
            <td className="px-4 py-2">
              <a
                href="https://ugcnet.nta.ac.in/"
                className="text-blue-500 hover:underline"
              >
                ugcnet.nta.ac.in
              </a>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        How to Check the UGC NET Answer Key
      </h2>
      <ul className="list-disc pl-6 text-gray-600">
        <li>
          Visit the official website:
          <a
            href="https://ugcnet.nta.ac.in/"
            className="text-blue-500 hover:underline"
          >
            ugcnet.nta.ac.in
          </a>
        </li>
        <li>Click on the UGC NET Answer Key Link.</li>
        <li>Login and download the OMR Response Sheet and Answer Key.</li>
        <li>
          Candidates can also file objections to the Answer Key by logging into
          their accounts.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Answer Key Download Links
      </h2>
      <table className="table-auto w-full text-gray-600">
        <thead>
          <tr>
            <th className="px-4 py-2 font-bold text-left">Resource</th>
            <th className="px-4 py-2 font-bold text-left">Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">Answer Key Notice</td>
            <td className="px-4 py-2">
              <a
                href="https://pmsuryaghar.org.in/wp-content/uploads/2024/09/UGC-NET-Answer-Key-Notice-11-Sep-2024.pdf"
                className="text-blue-500 hover:underline"
              >
                Notice
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">Answer Key Link</td>
            <td className="px-4 py-2">
              <a
                href="https://ugcnet.ntaonline.in/frontend/web/answer-key-challenge/login-ugcanswer"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener"
              >
                Answer Key
              </a>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Frequently Asked Questions
      </h2>
      <div className="border rounded-md p-4">
        <dl className="text-gray-600">
          <dt className="font-bold">How to check the UGC NET Answer Key?</dt>
          <dd>
            You can check the UGC NET Answer Key on the official website
            ugcnet.nta.ac.in.
          </dd>

          <dt className="font-bold">When was the UGC NET Answer Key released?</dt>
          <dd>The UGC NET Answer Key was released on September 7th, 2024.</dd>
        </dl>
      </div>
    </div>
  );
}