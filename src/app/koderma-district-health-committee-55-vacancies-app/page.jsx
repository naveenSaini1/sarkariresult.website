export default function RecruitmentInfo() {
  // This component displays recruitment information for the District Health Committee, Koderma.
  // It includes details about the post, application process, important dates, and vacancy details.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">District Health Committee, Koderma Recruitment 2024</h1>
      <p className="mb-4">
        <strong className="text-green-500">Name of the Post:</strong>
        <span>District Health Committee, Koderma Various Vacancy Offline Form 2024</span>
      </p>
      <p className="mb-4">
        <strong className="text-green-500">Post Date:</strong>
        <span>03-09-2024</span>
      </p>
      <p className="mb-4">
        <strong className="text-green-500">Total Vacancy:</strong>
        <span>5</span>
      </p>
      <p className="mb-4">
        <strong className="text-red-500">Brief Information:</strong>
        District Health Committee, <span>Koderma</span> has given an employment notification for the recruitment of Staff Nurse, Pharmacist, Lab Technician, ANM &amp; Other Vacancy.
        Those candidates who are interested in the vacancy details &amp; completed all eligibility criteria can read the notification &amp; Apply.
      </p>
      <h2 className="text-2xl font-bold mb-4">Important Details</h2>
      <table className="table-auto w-full border-collapse border border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-center text-gray-600 font-bold">Application Fee</th>
            <th className="px-4 py-2 text-center text-gray-600 font-bold">Important Dates</th>
            <th className="px-4 py-2 text-center text-gray-600 font-bold">Age Limit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 text-center">
              <ul className="list-disc">
                <li>Fee for General Category/Backward Class/Extremely Backward Class Candidates: <strong>Rs. 400/-</strong></li>
                <li>Fee for SC/ST Category: <strong>Rs. 200/-</strong></li>
                <li>Payment Mode: <strong>Through Demand Draft</strong></li>
              </ul>
            </td>
            <td className="px-4 py-2 text-center">
              <ul className="list-disc">
                <li>Last Date for Receipt of Application: <strong>18-09-2024 till 05:00 pm</strong></li>
              </ul>
            </td>
            <td className="px-4 py-2 text-center">
              <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 text-center text-gray-600 font-bold">Si No.</th>
                    <th className="px-4 py-2 text-center text-gray-600 font-bold">Category Name</th>
                    <th className="px-4 py-2 text-center text-gray-600 font-bold">Minimum Age Limit</th>
                    <th className="px-4 py-2 text-center text-gray-600 font-bold">Maximum Age Limit</th>
                    <th className="px-4 py-2 text-center text-gray-600 font-bold">Maximum age limit for persons with Disabilities</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 text-center">1.</td>
                    <td className="px-4 py-2 text-center">General</td>
                    <td className="px-4 py-2 text-center" rowSpan={4}>21</td>
                    <td className="px-4 py-2 text-center">35 Years</td>
                    <td className="px-4 py-2 text-center">40 Years</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-center">2.</td>
                    <td className="px-4 py-2 text-center">Backward Class and Extremely Backward Class</td>
                    <td className="px-4 py-2 text-center">37 Years</td>
                    <td className="px-4 py-2 text-center">42 Years</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-center">3.</td>
                    <td className="px-4 py-2 text-center">Scheduled Caste and Scheduled Tribe – Male and Female</td>
                    <td className="px-4 py-2 text-center">40 Years</td>
                    <td className="px-4 py-2 text-center">45 Years</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-center">4.</td>
                    <td className="px-4 py-2 text-center">Female -General Class, Backward Class and Extremely Backward Class</td>
                    <td className="px-4 py-2 text-center">38 Years</td>
                    <td className="px-4 py-2 text-center">43 Years</td>
                  </tr>
                </tbody>
              </table>
              <ul className="list-disc mt-2">
                <li>For More Details Refer Notification.</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>
      <table className="table-auto w-full border-collapse border border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-center text-gray-600 font-bold">Sl No</th>
            <th className="px-4 py-2 text-center text-gray-600 font-bold">Post Name</th>
            <th className="px-4 py-2 text-center text-gray-600 font-bold">Total</th>
            <th className="px-4 py-2 text-center text-gray-600 font-bold">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 text-center">01</td>
            <td className="px-4 py-2 text-center">Staff Nurse (S.N.C.U)</td>
            <td className="px-4 py-2 text-center">26</td>
            <td className="px-4 py-2 text-center">10+2 or intermediate with GNM Course</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center">02</td>
            <td className="px-4 py-2 text-center">Nutritional Counsellors (M.T.C)</td>
            <td className="px-4 py-2 text-center">02</td>
            <td className="px-4 py-2 text-center">Degree/ PG (Food and Nutrition/Home Science)</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center">03</td>
            <td className="px-4 py-2 text-center">ANM (RBSK)</td>
            <td className="px-4 py-2 text-center">02</td>
            <td className="px-4 py-2 text-center" rowSpan={2}>10+2 or intermediate with ANM Course</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center">04</td>
            <td className="px-4 py-2 text-center">ANM (MTC)</td>
            <td className="px-4 py-2 text-center">03</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center">05</td>
            <td className="px-4 py-2 text-center">Psychiatric Nurse (N.M.H.P)</td>
            <td className="px-4 py-2 text-center">01</td>
            <td className="px-4 py-2 text-center">PG (Concerned Specialty)</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center">06</td>
            <td className="px-4 py-2 text-center">Staff Nurse (N.U.H.M))</td>
            <td className="px-4 py-2 text-center">01</td>
            <td className="px-4 py-2 text-center">10+2 or intermediate with GNM Course</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center">07.</td>
            <td className="px-4 py-2 text-center">Pharmacist (R.B.S.K)</td>
            <td className="px-4 py-2 text-center">01</td>
            <td className="px-4 py-2 text-center">Diploma (Pharmacy)</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center">08</td>
            <td className="px-4 py-2 text-center">Lab Technician (Dist. NCD Clinic)</td>
            <td className="px-4 py-2 text-center">01</td>
            <td className="px-4 py-2 text-center">10+2, DMLT</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center">09</td>
            <td className="px-4 py-2 text-center">Senior Treatment Supervisor</td>
            <td className="px-4 py-2 text-center">05</td>
            <td className="px-4 py-2 text-center">Degree</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center">10</td>
            <td className="px-4 py-2 text-center">Senior TB Lab Supervision</td>
            <td className="px-4 py-2 text-center">02</td>
            <td className="px-4 py-2 text-center">Degree/ DMLT</td>
          </tr>
          <tr>
            <td colSpan={4} className="px-4 py-2 text-center">For More Vacancy &amp; Qualification Details Refer Notification.</td>
          </tr>
          <tr>
            <td colSpan={4} className="px-4 py-2 text-center">Interested Candidates Can Read the Full Notification Before Apply</td>
          </tr>
        </tbody>
      </table>
      <h2 className="text-2xl font-bold mb-4">Important Links</h2>
      <table className="table-auto w-full border-collapse border border-gray-300 mb-4">
        <tbody>
          <tr>
            <td className="px-4 py-2 text-center">
              <strong className="text-green-500">Notification</strong>
            </td>
            <td className="px-4 py-2 text-center">
              <a href="https://img.freejobalert.com/uploads/2024/09/Notification-District-Health-Committee-Koderma-Various-Vacancy.pdf" target="_blank" rel="nofollow" className="text-blue-500 hover:underline">
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center">
              <strong className="text-green-500">Official Website</strong>
            </td>
            <td className="px-4 py-2 text-center">
              <a href="https://koderma.nic.in/" target="_blank" rel="nofollow" className="text-blue-500 hover:underline">
                Click Here
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}