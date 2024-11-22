export default function OrissaHighCourtRecruitment() {
  // This component displays recruitment information for various positions at the Orissa High Court.  It includes details about each position, application fees, important dates, and vacancy details.  The information is presented in a clear and SEO-friendly manner using Tailwind CSS for styling.

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Orissa High Court Recruitment</h1>
      <p className="text-lg mb-4">
        The Orissa High Court is currently recruiting for various positions.  This page provides a summary of the available opportunities, including key details and application information.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Key Highlights</h2>
        <ul className="list-disc list-inside">
          <li>Multiple positions available across various departments.</li>
          <li>Application deadlines vary depending on the position.</li>
          <li>Detailed information and application links provided for each role.</li>
        </ul>
      </section>


      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">District Judge</h2>
        <p className="text-lg mb-2">Orissa High Court District Judge 2024 Online Form</p>
        <p className="text-lg mb-2">Post Date: 11-11-2024</p>
        <p className="text-lg mb-2">Total Vacancy: 31</p>
        <p className="text-lg mb-4">
          Orissa High Court has announced recruitment for District Judge vacancies. Interested and eligible candidates can find details in the notification.  This posting has been cancelled. See below for details.
        </p>
        <table className="table-auto w-full mb-4 border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Post Name</th>
              <th className="px-4 py-2 text-left">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-300">
              <td className="px-4 py-2">District Judge</td>
              <td className="px-4 py-2">31</td>
            </tr>
          </tbody>
        </table>

        <table className="table-auto w-full border-collapse border border-gray-300">
          <tbody>
            <tr className="bg-gray-100">
              <td className="px-4 py-2 text-left" colSpan={2}>
                <p className="text-center font-bold text-red-500">Application Fee</p>
              </td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="px-4 py-2">For Other Category</td>
              <td className="px-4 py-2">Rs.750/-</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="px-4 py-2">For SC/ST/Persons with Disabilities</td>
              <td className="px-4 py-2">Nil</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="px-4 py-2 text-left" colSpan={2}>
                <p className="text-center font-bold text-red-500">Important Dates</p>
              </td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="px-4 py-2">Starting Date for Online Application</td>
              <td className="px-4 py-2">06-11-2024</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="px-4 py-2">Last Date Online Application</td>
              <td className="px-4 py-2">22-11-2024</td>
            </tr>
          </tbody>
        </table>

        <p className="text-red-500 font-bold mt-4">Notification Cancelled (07-11-2024)</p>
        <a href="https://img.freejobalert.com/uploads/2024/11/Notification-Cancelled-Orissa-High-Court-District-Judge-Posts.pdf" className="text-blue-500 underline">Click Here</a>

      </section>

      {/* Repeat similar structure for other positions */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Junior Grade Typist / Data Entry Operator</h2>
        {/* ... (Add content for Junior Grade Typist similar to District Judge section) */}
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Research Assistant</h2>
        {/* ... (Add content for Research Assistant similar to District Judge section) */}
      </section>
      {/* ... (Add sections for other positions as needed) */}

      <p className="text-sm mt-8">Keywords: Orissa High Court, Recruitment, District Judge, Junior Grade Typist, Data Entry Operator, Research Assistant, Jobs, Odisha, India.</p>
    </div>
  );
}