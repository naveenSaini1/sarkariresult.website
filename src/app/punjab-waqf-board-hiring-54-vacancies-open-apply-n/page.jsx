export default function RecruitmentInformation() {
  // This component displays recruitment information for V I T A L- For Competitive Exam in Chennai,
  // providing details about the institute, coaching offered, contact information, and address.
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">V I T A L- For Competitive Exam - Chennai</h2>
      <p className="mb-4">
        V I T A L- For Competitive Exam is located in Chennai and provides coaching for All Civil Services Exams.
      </p>

      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">Institute Details</h3>
        <table className="table-auto w-full border border-gray-300 text-gray-700">
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2 font-bold">Institute Name</td>
              <td className="border border-gray-300 p-2">:</td>
              <td className="border border-gray-300 p-2">V I T A L- For Competitive Exam</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 font-bold">Coaching For</td>
              <td className="border border-gray-300 p-2">:</td>
              <td className="border border-gray-300 p-2">All Civil Services Exams</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 font-bold">Contact Numbers</td>
              <td className="border border-gray-300 p-2">:</td>
              <td className="border border-gray-300 p-2">9884182030 / 9940069435</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 font-bold">Address</td>
              <td className="border border-gray-300 p-2">:</td>
              <td className="border border-gray-300 p-2">
                5A, 8th block, Kences enclave, No.1, Ramakrishna street, T.Nagar.
                <br/>
                Chennai
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}