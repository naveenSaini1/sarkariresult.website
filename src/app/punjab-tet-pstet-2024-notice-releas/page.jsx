export default function PunjabTET() {
  // This component displays information about the Punjab State Teacher Eligibility Test (PSTET) 2024.
  // It includes important dates, eligibility criteria, application fees, and vacancy details.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Punjab Teacher Eligibility Test (PSTET) 2024</h1>
      <p className="text-lg mb-4">The Punjab State Educational Research and Training Council (SCERT) is conducting the PSTET 2024, a crucial exam for aspiring teachers in Punjab. This comprehensive guide covers all the essential details including application process, important dates, eligibility criteria, and application fees.</p>

      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Key Highlights</h2>
        <ul className="list-disc pl-6">
          <li>The PSTET 2024 exam will be held on December 1st, 2024.</li>
          <li>Applications are open from October 16th, 2024 to November 4th, 2024.</li>
          <li>Applicants can apply online through the official PSTET website.</li>
          <li>The test is conducted for two levels - Level I (Class 1-5) and Level II (Class 6-8).</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold mb-2">Application Fees</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Category</th>
              <th scope="col" className="px-6 py-3">Only Paper I or II</th>
              <th scope="col" className="px-6 py-3">Both Paper I & II</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">General, OBC</th>
              <td className="px-6 py-4">Rs. 600/-</td>
              <td className="px-6 py-4">Rs. 1200/-</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">SC, ST, PH</th>
              <td className="px-6 py-4">Rs. 300/-</td>
              <td className="px-6 py-4">Rs. 600/-</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Mode of Payment</th>
              <td className="px-6 py-4">Online</td>
              <td className="px-6 py-4">Online</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mb-2">Important Dates</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Event</th>
              <th scope="col" className="px-6 py-3">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Notification Date</th>
              <td className="px-6 py-4">October 16th, 2024</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Apply Online Start Date</th>
              <td className="px-6 py-4">October 16th, 2024</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Apply Last Date</th>
              <td className="px-6 py-4">November 4th, 2024</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Exam Date</th>
              <td className="px-6 py-4">December 1st, 2024</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mb-2">Eligibility Criteria</h2>
      <p className="mb-4">There is no age restriction for applying to the PSTET 2024. However, age limits might apply when applying for teaching jobs based on PSTET eligibility.</p>
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Post Name</th>
              <th scope="col" className="px-6 py-3">Qualification</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Level I (Class 1-5)</th>
              <td className="px-6 py-4">Graduate + D.Ed./ D.El.Ed/ JBT/ Diploma in Education</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Level II (Class 6-8)</th>
              <td className="px-6 py-4">Graduate + B.Ed./ B.El.Ed./ Degree in Education</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mb-2">Notification and Application Link</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Link</th>
              <th scope="col" className="px-6 py-3">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4">
                <a href="https://pmsuryaghar.org.in/wp-content/uploads/2024/10/PSTET-2024-Short-Notice.jpg" className="text-blue-500 hover:underline">
                  PSTET 2024 Short Notice
                </a>
              </td>
              <td className="px-6 py-4">Notice</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4">
                <a href="https://pstet.pseb.ac.in/" target="_blank" rel="noopener" className="text-blue-500 hover:underline">
                  PSTET 2024 Notification
                </a>
              </td>
              <td className="px-6 py-4">Notification PDF (Soon)</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4">
                <a href="https://pstet.pseb.ac.in/" target="_blank" rel="noopener" className="text-blue-500 hover:underline">
                  Apply Online
                </a>
              </td>
              <td className="px-6 py-4">Online Form (From 16.10.2024)</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4">
                <a href="https://pstet.pseb.ac.in/" target="_blank" rel="noopener" className="text-blue-500 hover:underline">
                  PSTET
                </a>
              </td>
              <td className="px-6 py-4">PSTET Official Website</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-gray-500">
        <span className="font-bold">Keywords:</span> PSTET, Punjab TET, Punjab Teacher Eligibility Test, Teacher Eligibility Test, Punjab, SCERT, Education, Jobs, Recruitment, Examination, Application, Eligibility, Dates, Fees, Notification, Apply Online
      </p>
    </div>
  );
}