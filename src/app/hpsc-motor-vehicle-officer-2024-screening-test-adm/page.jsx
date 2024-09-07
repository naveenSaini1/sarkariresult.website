export default function RecruitmentInformation() {
  // This component displays recruitment information for various HPSC posts, including details like title, post date, brief information, application fee, important dates, and vacancy details.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">HPSC Recruitment Information</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2" id="Assistant-Professor">HPSC Assistant Professor Online Form 2024</h2>
          <p className="text-gray-700 mb-2">
            <span className="font-bold">Post Date:</span>{' '}
            <span className="text-gray-900">03-08-2024</span>
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-bold">Latest Update:</span>{' '}
            <span className="text-gray-900">28-08-2024</span>
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-bold">Total Vacancy:</span>{' '}
            <span className="text-gray-900">2424</span>
          </p>
          <p className="text-gray-700 mb-4">
            <span className="font-bold">Brief Information:</span> Haryana Public Service
            Commission (HPSC) has given an employment Notification for the
            recruitment of Assistant Professor Vacancy. Those Candidates who are
            interested in the vacancy details &amp; completed all eligibility
            criteria can read the Notification &amp; Apply Online.
          </p>
          <table className="table-auto w-full text-gray-700">
            <thead>
              <tr className="bg-gray-200">
                <th colSpan="2" className="text-center py-2 font-bold text-gray-800">
                  <span className="text-red-500">Haryana Public Service Commission (HPSC)</span>
                </th>
              </tr>
              <tr className="bg-gray-200">
                <th colSpan="2" className="text-center py-2 font-bold text-gray-800">
                  <span className="text-blue-500">Advt No. 42 to 67 of 2024</span>
                </th>
              </tr>
              <tr className="bg-gray-200">
                <th colSpan="2" className="text-center py-2 font-bold text-gray-800">
                  <span className="text-green-500">Assistant Professor Vacancy 2024</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-300">
                <th colSpan="2" className="text-center py-2 font-bold text-gray-800">
                  <span className="text-red-500">Application Fee</span>
                </th>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="py-2">
                  For Male candidates of General category including Dependent Son
                  of Ex-Serviceman of Haryana: <strong>Rs.1000/-</strong>
                </td>
                <td className="py-2">
                  For Male candidates of Backward Classes belonging to Creamy
                  Layer: <strong>Rs.1000/-</strong>
                </td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="py-2">
                  For Male candidates of all categories of other States: <strong>Rs.1000/-</strong>
                </td>
                <td className="py-2">
                  For all Female candidates of General category including Female
                  Dependent of ESM of Haryana only: <strong>Rs.250/-</strong>
                </td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="py-2">
                  For Female candidates of all categories of other States: <strong>Rs.250/-</strong>
                </td>
                <td className="py-2">
                  For Male &amp; Female candidates of SC / BC -A (Non Creamy
                  Layer)/ BC -B (Non Creamy Layer) ESM categories of Haryana
                  only: <strong>Rs.250/-</strong>
                </td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="py-2">Economically Weaker Sections (EWS): <strong>Rs.250/-</strong></td>
                <td className="py-2">
                  For all Persons with Disabilities category candidates (with at
                  least 40% disability) of Haryana only: <strong>Nil</strong>
                </td>
              </tr>
              <tr className="border-t border-gray-300">
                <td colSpan="2" className="py-2">
                  Payment Mode: <strong>Through Net Banking, Debit Card and Credit Card</strong>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="table-auto w-full text-gray-700">
            <thead>
              <tr className="bg-gray-200">
                <th colSpan="2" className="text-center py-2 font-bold text-gray-800">
                  <span className="text-red-500">Important Dates</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-300">
                <td className="py-2">Date of Publication: <strong>02-08-2024</strong></td>
                <td className="py-2">
                  Starting Date to Apply Online: <strong>07-08-2024</strong>
                </td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="py-2">
                  Last Date for Apply Online &amp; Payment of Fee: <strong>02-09-2024</strong>
                </td>
                <td className="py-2"></td>
              </tr>
            </tbody>
          </table>
          <table className="table-auto w-full text-gray-700">
            <thead>
              <tr className="bg-gray-200">
                <th colSpan="2" className="text-center py-2 font-bold text-gray-800">
                  <span className="text-red-500">Age Limit (as on 15-07-2024)</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-300">
                <td className="py-2">Minimum Age: <strong>Should not be less than 21 Years</strong></td>
                <td className="py-2">Maximum Age: <strong>Not more than 42 Years</strong></td>
              </tr>
              <tr className="border-t border-gray-300">
                <td colSpan="2" className="py-2">
                  Age relaxation is applicable as per rules.
                </td>
              </tr>
            </tbody>
          </table>
          <table className="table-auto w-full text-gray-700">
            <thead>
              <tr className="bg-gray-200">
                <th colSpan="2" className="text-center py-2 font-bold text-gray-800">
                  <span className="text-red-500">Qualification</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-300">
                <td className="py-2">
                  Candidates Should Posses Master’s Degree (Relevant Subject) With
                  NET/SLET/SET
                </td>
                <td className="py-2">
                  Knowledge of Hindi/Sanskrit up to Matric standard or in Higher
                  Education
                </td>
              </tr>
            </tbody>
          </table>
          <table className="table-auto w-full text-gray-700">
            <thead>
              <tr className="bg-gray-200">
                <th colSpan="2" className="text-center py-2 font-bold text-gray-800">
                  <span className="text-red-500">Vacancy Details</span>
                </th>
              </tr>
              <tr className="bg-gray-200">
                <th className="text-center py-2 font-bold text-gray-800">
                  <span className="text-blue-500">Post Name</span>
                </th>
                <th className="text-center py-2 font-bold text-gray-800">
                  <span className="text-blue-500">Total</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-300">
                <td className="text-center py-2">Assistant Professor</td>
                <td className="text-center py-2">2424</td>
              </tr>
            </tbody>
          </table>
          <p className="text-blue-500 text-center py-2 font-bold text-gray-800">
            <strong>Interested Candidates Can Read the Full Notification Before Apply Online</strong>
          </p>
          <table className="table-auto w-full text-gray-700">
              <tr className="bg-gray-200">
                <th colSpan="2" className="text-center py-2 font-bold text-gray-800">
                  <span className="text-red-500">Important Links</span>
                </th>
              </tr>
              <tr className="bg-gray-200">
                <th className="text-center py-2 font-bold text-gray-800">
                  <span className="text-green-500">Last Date Extended (28-08-2024)</span>
                </th>
                <th className="text-center py-2 font-bold text-gray-800">
                  <a
                    href="https://img.freejobalert.com/uploads/2024/08/Last-Date-Extended-HPSC-Assistant-Professor-Posts.pdf"
                    target="_blank"
                    rel="nofollow"
                    className="text-blue-500"
                  >
                    <strong>Click Here</strong>
                  </a>
                </th>
              </tr>
              <tr className="bg-gray-200">
                <th className="text-center py-2 font-bold text-gray-800">
                  <span className="text-green-500">Apply Online (08-08-2024)</span>
                </th>
                <th className="text-center py-2 font-bold text-gray-800">
                  <a
                    href="https://regn.hpsc.gov.in/asstprof/"
                    target="_blank"
                    rel="nofollow"
                    className="text-blue-500"
                  >
                    <strong>Click Here</strong>
                  </a>
                </th>
              </tr>
              <tr className="bg-gray-200">
                <th className="text-center py-2 font-bold text-gray-800">
                  <span className="text-green-500">Notification</span>
                </th>
                <th className="text-center py-2 font-bold text-gray-800">
                  <a
                    href="https://img.freejobalert.com/uploads/2024/08/Notification-HPSC-Assistant-Professor-Posts.pdf"
                    target="_blank"
                    rel="nofollow"
                    className="text-blue-500"
                  >
                    <strong>Click Here</strong>
                  </a>
                </th>
              </tr>
              <tr className="bg-gray-200">
                <th className="text-center py-2 font-bold text-gray-800">
                  <span className="text-green-500">Official Website</span>
                </th>
                <th className="text-center py-2 font-bold text-gray-800">
                  <a
                    href="http://hpsc.gov.in/"
                    target="_blank"
                    rel="nofollow"
                    className="text-blue-500"
                  >
                    <strong>Click here</strong>
                  </a>
                </th>
              </tr>
                     </table>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2" id="Motor-vehicle-Officer">
            HPSC Motor Vehicle Officer 2024 Screening Test Admit Card Download
          </h2>
          <p className="text-gray-700 mb-2">
            <span className="font-bold">Post Date:</span>{' '}
            <span className="text-gray-900">02-08-2024</span>
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-bold">Latest Update :</span>{' '}
            <span className="text-gray-900">06-09-2024</span>
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-bold">Total Vacancy:</span>{' '}
            <span className="text-gray-900">23</span>
          </p>
          <p className="text-gray-700 mb-4">
            <span className="font-bold">Brief Information:</span> Haryana Public
            Service Commission (HPSC) has announced notification for the
            recruitment of Motor Vehicle Officer vacancy. Those Candidates who
            are interested in the vacancy details &amp; completed all eligibility
            criteria can read the Notification &amp; Apply Online.
          </p>
          <table className="table-auto w-full text-gray-700">
            <thead>
              <tr className="bg-gray-200">
                <th colSpan="2" className="text-center py-2 font-bold text-gray-800">
                  <span className="text-red-500">Haryana Public Service Commission (HPSC)</span>
                </th>
              </tr>
              <tr className="bg-gray-200">
                <th colSpan="2" className="text-center py-2 font-bold text-gray-800">
                  <span className="text-blue-500">Advt.No.41/2024</span>
                </th>
              </tr>
              <tr className="bg-gray-200">
                <th colSpan="2" className="text-center py-2 font-bold text-gray-800">
                  <span className="text-green-500">Motor Vehicle Officer Vacancy 2024</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-300">
                <th colSpan="2" className="text-center py-2 font-bold text-gray-800">
                  <span className="text-red-500">Application Fee</span>
                </th>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="py-2">
                  For Male candidates Of General category including Dependent Son
                  Of Ex- Serviceman of Haryana/ Backward Classes Belonging to
                  Creamy Layer/all categories Of other States: <strong>1000/-</strong>
                </td>
                <td className="py-2">
                  For all Female candidates of General category including Female
                  Dependent of ESM of Haryana Only&nbsp;&nbsp; /Backward Classes
                  belonging to Creamy Layer/all categories of other States:
                  <strong>250/-</strong>
                </td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="py-2">
                  For Male &amp; Female candidates of SC / BC-A (Non Creamy
                  Layer)/ BC-B(Non Creamy Layer)/ ESM categories of Haryana
                  only/EWS: <strong>250/-</strong>
                </td>
                <td className="py-2">
                  For all Persons with Disabilities category candidates (with
                  atleast 40% disability) of Haryana only: <strong>Nil</strong>
                </td>
              </tr>
              <tr className="border-t border-gray-300">
                <td colSpan="2" className="py-2">
                  Payment Mode: <strong>Through Online</strong>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="table-auto w-full text-gray-700">
            <thead>
              <tr className="bg-gray-200">
                <th colSpan="2" className="text-center py-2 font-bold text-gray-800">
                  <span className="text-red-500">Important Dates</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-300">
                <td className="py-2">Date of Publication: <strong>02-08-2024</strong></td>
                <td className="py-2">
                  Opening Date for Submission of Online Application: <strong>02-08-2024</strong>
                </td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="py-2">
                  Closing Date of Submission of Online Applicattion: <strong>22-08-2024</strong>
                </td>
                <td className="py-2">Date of Screening Test: <strong>08-09-2024</strong></td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="py-2">
                  Date of Downloading Admit Card: <strong>01-09-2024</strong>
                </td>
                <td className="py-2"></td>
              </tr>
            </tbody>
          </table>
          <table className="table-auto w-full text-gray-700">
            <thead>
              <tr className="bg-gray-200">
                <th colSpan="2" className="text-center py-2 font-bold text-gray-800">
                  <span className="text-red-500">Age Limit (as on 22-08-2024)</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-300">
                <td className="py-2">Minimum Age Limit: <strong>Less than 18 Years</strong></td>
                <td className="py-2">Maximum Age Limit: <strong>Not more than 42 Years</strong></td>
              </tr>
              <tr className="border-t border-gray-300">
                <td colSpan="2" className="py-2">
                  Age relaxation is admissible as per rules.
                </td>
              </tr>
            </tbody>
          </table>
          <table className="table-auto w-full text-gray-700">
            <thead>
              <tr className="bg-gray-200">
                <th colSpan="2" className="text-center py-2 font-bold text-gray-800">
                  <span className="text-red-500">Qualification</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-300">
                <td className="py-2">
                  Candidates should possess a Bachelor's Degree in Engineering (Civil, Mechanical, Electrical) with at least 60% marks or equivalent CGPA. 
                </td>
                <td className="py-2">
                  Candidates must have a valid driving license for at least 3 years.
                </td>
              </tr>
            </tbody>
          </table>
          <table className="table-auto w-full text-gray-700">
            <thead>
              <tr className="bg-gray-200">
                <th colSpan="2" className="text-center py-2 font-bold text-gray-800">
                  <span className="text-red-500">Vacancy Details</span>
                </th>
              </tr>
              <tr className="bg-gray-200">
                <th className="text-center py-2 font-bold text-gray-800">
                  <span className="text-blue-500">Post Name</span>
                </th>
                <th className="text-center py-2 font-bold text-gray-800">
                  <span className="text-blue-500">Total</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-300">
                <td className="text-center py-2">Motor Vehicle Officer</td>
                <td className="text-center py-2">23</td>
              </tr>
            </tbody>
          </table>
          <p className="text-blue-500 text-center py-2 font-bold text-gray-800">
            <strong>Interested Candidates Can Read the Full Notification Before Apply Online</strong>
          </p>
          <table className="table-auto w-full text-gray-700">
            <thead>
              <tr className="bg-gray-200">
                <th colSpan="2" className="text-center py-2 font-bold text-gray-800">
                  <span className="text-red-500">Important Links</span>
                </th>
              </tr>
              <tr className="bg-gray-200">
                <th className="text-center py-2 font-bold text-gray-800">
                  <span className="text-green-500">Admit Card Download (01-09-2024)</span>
                </th>
                <th className="text-center py-2 font-bold text-gray-800">
                  <a
                    href="https://hpsc.gov.in/admitcard/mvo/"
                    target="_blank"
                    rel="nofollow"
                    className="text-blue-500"
                  >
                    <strong>Click Here</strong>
                  </a>
                </th>
              </tr>
              <tr className="bg-gray-200">
                <th className="text-center py-2 font-bold text-gray-800">
                  <span className="text-green-500">Apply Online (02-08-2024)</span>
                </th>
                <th className="text-center py-2 font-bold text-gray-800">
                  <a
                    href="https://hpsc.gov.in/apply/mvo/"
                    target="_blank"
                    rel="nofollow"
                    className="text-blue-500"
                  >
                    <strong>Click Here</strong>
                  </a>
                </th>
              </tr>
              <tr className="bg-gray-200">
                <th className="text-center py-2 font-bold text-gray-800">
                  <span className="text-green-500">Notification</span>
                </th>
                <th className="text-center py-2 font-bold text-gray-800">
                  <a
                    href="https://img.freejobalert.com/uploads/2024/08/Notification-HPSC-Motor-Vehicle-Officer-Posts.pdf"
                    target="_blank"
                    rel="nofollow"
                    className="text-blue-500"
                  >
                    <strong>Click Here</strong>
                  </a>
                </th>
              </tr>
              <tr className="bg-gray-200">
                <th className="text-center py-2 font-bold text-gray-800">
                  <span className="text-green-500">Official Website</span>
                </th>
                <th className="text-center py-2 font-bold text-gray-800">
                  <a
                    href="http://hpsc.gov.in/"
                    target="_blank"
                    rel="nofollow"
                    className="text-blue-500"
                  >
                    <strong>Click here</strong>
                  </a>
                </th>
              </tr>
              </thead>
            
            </table>
            
        </div>
      </div>
    </div>
  );
}