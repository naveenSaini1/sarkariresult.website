export default function RecruitmentInformation() {
  // This component displays recruitment information for various positions advertised by HPSC, including details like post name, total vacancy, important dates, application fee, qualification, and important links. 
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Haryana Public Service Commission (HPSC) Recruitment</h1>

      <h2 className="text-2xl font-bold mb-2">Assistant Professor</h2>
      <p className="mb-2">
        <span className="font-bold text-gray-600">Name of the Post:</span> HPSC Assistant Professor Online Form 2024
      </p>
      <p className="mb-2">
        <span className="font-bold text-gray-600">Post Date:</span> 03-08-2024
      </p>
      <p className="mb-2">
        <span className="font-bold text-gray-600">Latest Update:</span> 28-08-2024
      </p>
      <p className="mb-2">
        <span className="font-bold text-gray-600">Total Vacancy:</span> 2424
      </p>
      <p className="mb-4">
        <span className="font-bold text-gray-600">Brief Information:</span> Haryana Public Service Commission (HPSC) has given an employment Notification for the recruitment of Assistant Professor Vacancy. Those Candidates who are interested in the vacancy details &amp; completed all eligibility criteria can read the Notification &amp; Apply Online.
      </p>

      <table className="w-full table-auto mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left font-bold text-gray-600">Category of Candidates</th>
            <th className="px-4 py-2 text-left font-bold text-gray-600">Fee</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">
              <ul className="list-disc pl-5">
                <li>For Male candidates of General calegory including Dependent Son of Ex-Serviceman of Haryana: </li>
                <li>For Male candidates of Backward Clas,ses belonging to Creamy Layer : </li>
                <li>For Male candidates of all categories of other States : </li>
              </ul>
            </td>
            <td className="px-4 py-2">Rs.1000/-</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">
              <ul className="list-disc pl-5">
                <li>For all Female candidates of General category including Female Dependent of ESM of Haryana only : </li>
                <li>For Female candidates of all categories of other States : </li>
              </ul>
            </td>
            <td className="px-4 py-2">Rs.250/-</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">
              <ul className="list-disc pl-5">
                <li>For Male &amp; Female candidates of SC / BC -A (Non Creamy Layer)/ BC -B (Non Creamy Layer) ESM categories of Haryana only : </li>
                <li>Economically Weaker Sections (EWS) : </li>
                <li>For all Persons with Disabilities category candidates (with at least 40% disability) of Haryana only : </li>
              </ul>
            </td>
            <td className="px-4 py-2">Rs.250/-</td>
          </tr>
        </tbody>
      </table>

      <p className="mb-2">
        <span className="font-bold text-gray-600">Payment Mode:</span> Through Net Banking, Debit Card and Credit Card
      </p>

      <table className="w-full table-auto mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left font-bold text-gray-600">Date</th>
            <th className="px-4 py-2 text-left font-bold text-gray-600">Event</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">02-08-2024</td>
            <td className="px-4 py-2">Date of Publication</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">07-08-2024</td>
            <td className="px-4 py-2">Starting Date to Apply Online</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">02-09-2024</td>
            <td className="px-4 py-2">Last Date for Apply Online &amp; Payment of Fee</td>
          </tr>
        </tbody>
      </table>

      <table className="w-full table-auto mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left font-bold text-gray-600">Minimum Age</th>
            <th className="px-4 py-2 text-left font-bold text-gray-600">Maximum Age</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Should not be less than 21 Years</td>
            <td className="px-4 py-2">Not more than 42 Years</td>
          </tr>
        </tbody>
      </table>

      <p className="mb-2">
        <span className="font-bold text-gray-600">Age relaxation</span> is applicable as per rules.
      </p>

      <p className="mb-2">
        <span className="font-bold text-gray-600">Qualification:</span>
      </p>
      <ul className="list-disc pl-5 mb-4">
        <li>Candidates Should Posses Master’s Degree (Relevant Subject) With NET/SLET/SET</li>
        <li>Knowledge of Hindi/Sanskrit up to Matric standard or in Higher Education</li>
      </ul>

      <table className="w-full table-auto mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left font-bold text-gray-600">Post Name</th>
            <th className="px-4 py-2 text-left font-bold text-gray-600">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Assistant Professor</td>
            <td className="px-4 py-2">2424</td>
          </tr>
        </tbody>
      </table>

      <p className="mb-4">
        <span className="font-bold text-gray-600">Interested Candidates</span> Can Read the Full Notification Before Apply Online
      </p>

      <table className="w-full table-auto mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left font-bold text-gray-600">Event</th>
            <th className="px-4 py-2 text-left font-bold text-gray-600">Link</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Last Date Extended (28-08-2024)</td>
            <td className="px-4 py-2"><a href="https://img.freejobalert.com/uploads/2024/08/Last-Date-Extended-HPSC-Assistant-Professor-Posts.pdf" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a></td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Apply Online (08-08-2024)</td>
            <td className="px-4 py-2"><a href="https://regn.hpsc.gov.in/asstprof/" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a></td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Notification </td>
            <td className="px-4 py-2"><a href="https://img.freejobalert.com/uploads/2024/08/Notification-HPSC-Assistant-Professor-Posts.pdf" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a></td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Official Website</td>
            <td className="px-4 py-2"><a href="http://hpsc.gov.in/" target="_blank" rel="nofollow" className="text-blue-500">Click here</a></td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mb-2">Motor Vehicle Officer</h2>
      <p className="mb-2">
        <span className="font-bold text-gray-600">Name of the Post:</span> HPSC Motor Vehicle Officer 2024 Screening Test &amp; Admit Card Date Announced
      </p>
      <p className="mb-2">
        <span className="font-bold text-gray-600">Post Date:</span> 02-08-2024
      </p>
      <p className="mb-2">
        <span className="font-bold text-gray-600">Latest Update:</span> 31-08-2024
      </p>
      <p className="mb-2">
        <span className="font-bold text-gray-600">Total Vacancy:</span> 23
      </p>
      <p className="mb-4">
        <span className="font-bold text-gray-600">Brief Information:</span> Haryana Public Service Commission (HPSC) has announced notification for the recruitment of Motor Vehicle Officer vacancy. Those Candidates who are interested in the vacancy details &amp; completed all eligibility criteria can read the Notification &amp; Apply Online.
      </p>

      <table className="w-full table-auto mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left font-bold text-gray-600">Category of Candidates</th>
            <th className="px-4 py-2 text-left font-bold text-gray-600">Fee</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">
              <ul className="list-disc pl-5">
                <li>For Male candidates Of General category including Dependent Son Of Ex- Serviceman of Haryana/ Backward Classes Belonging to Creamy Layer/all categories Of other States</li>
                <li>For all Female candidates of General category including Female Dependent of ESM of Haryana Only&nbsp;&nbsp; /Backward Classes belonging to Creamy Layer/all categories of other States</li>
                <li>For Male &amp; Female candidates of SC / BC-A (Non Creamy Layer)/ BC-B(Non Creamy Layer)/ ESM categories of Haryana only/EWS</li>
                <li>For all Persons with Disabilities category candidates (with atleast 40% disability) of Haryana only</li>
              </ul>
            </td>
            <td className="px-4 py-2">1000/-</td>
          </tr>
        </tbody>
      </table>

      <p className="mb-2">
        <span className="font-bold text-gray-600">Payment Mode:</span> Through Online
      </p>

      <table className="w-full table-auto mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left font-bold text-gray-600">Date</th>
            <th className="px-4 py-2 text-left font-bold text-gray-600">Event</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">02-08-2024</td>
            <td className="px-4 py-2">Date of Publication</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">02-08-2024</td>
            <td className="px-4 py-2">Opening Date for Submission of Online Application</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">22-08-2024</td>
            <td className="px-4 py-2">Closing Date of Submission of Online Applicattion</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">08-09-2024</td>
            <td className="px-4 py-2">Date of Screening Test</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">01-09-2024</td>
            <td className="px-4 py-2">Date of Downloading Admit Card</td>
          </tr>
        </tbody>
      </table>

      <table className="w-full table-auto mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left font-bold text-gray-600">Minimum Age Limit</th>
            <th className="px-4 py-2 text-left font-bold text-gray-600">Maximum Age Limit</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Less than 18 Years</td>
            <td className="px-4 py-2">Not more than 42 Years</td>
          </tr>
        </tbody>
      </table>

      <p className="mb-2">
        <span className="font-bold text-gray-600">Age relaxation</span> is admissible as per rules.
      </p>

      <p className="mb-2">
        <span className="font-bold text-gray-600">Qualification:</span>
      </p>
      <ul className="list-disc pl-5 mb-4">
        <li>Candidates Should Possess Degree (Mechanical/Automobile Engg) / Computer Knowledge</li>
      </ul>

      <table className="w-full table-auto mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left font-bold text-gray-600">Post Name</th>
            <th className="px-4 py-2 text-left font-bold text-gray-600">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Motor Vehicle Officer</td>
            <td className="px-4 py-2">23</td>
          </tr>
        </tbody>
      </table>

      <p className="mb-4">
        <span className="font-bold text-gray-600">Interested Candidates</span> Can Read the Full Notification Before Apply Online
      </p>

      <table className="w-full table-auto mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left font-bold text-gray-600">Event</th>
            <th className="px-4 py-2 text-left font-bold text-gray-600">Link</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Screening Test &amp; Admit Card Date (31-08-2024)</td>
            <td className="px-4 py-2"><a href="https://hpsc.gov.in/Portals/0/hpsc_ann1.pdf" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a></td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Apply Online</td>
            <td className="px-4 py-2"><a href="https://hpsc.gov.in/en-us/Notifications/Announcements" target="_blank" rel="nofollow" className="text-blue-500">Click here</a></td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Notification </td>
            <td className="px-4 py-2"><a href="https://img.freejobalert.com/uploads/2024/08/Notification-HPSC-Motor-Vehicle-Officer.pdf" target="_blank" rel="nofollow" className="text-blue-500">Click here</a></td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Official Website</td>
            <td className="px-4 py-2"><a href="https://hpsc.gov.in/en-us/" target="_blank" rel="nofollow" className="text-blue-500">Click here</a></td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mb-2">Post Graduate Teacher</h2>
      <p className="mb-2">
        <span className="font-bold text-gray-600">Name of the Post:</span> HPSC PGT 2024 Skill Test Admit Card Download
      </p>
      <p className="mb-2">
        <span className="font-bold text-gray-600">Post Date:</span> 24-07-2024
      </p>
      <p className="mb-2">
        <span className="font-bold text-gray-600">Latest Update:</span> 05-09-2024
      </p>
      <p className="mb-2">
        <span className="font-bold text-gray-600">Total Vacancy:</span> 3069
      </p>
      <p className="mb-4">
        <span className="font-bold text-gray-600">Brief Information:</span> Haryana Public Service Commission (HPSC) has given an employment Notification for the recruitment of Post Graduate Teacher Vacancy. Those Candidates who are interested in the vacancy details &amp; completed all eligibility criteria can read the Notification &amp; Apply Online.
      </p>

      <table className="w-full table-auto mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left font-bold text-gray-600">Category of Candidates</th>
            <th className="px-4 py-2 text-left font-bold text-gray-600">Fee</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">
              <ul className="list-disc pl-5">
                <li>For Male candidates of General category including Dependent Son of Ex-Serviceman of Haryana’: </li>
                <li>For Male candidates of Backu’ard Classes belonging to Creamy Layer : </li>
                <li>For Male candidates of all categories of other States : </li>
              </ul>
            </td>
            <td className="px-4 py-2">Rs.1000/-</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">
              <ul className="list-disc pl-5">
                <li>For all Female candidates of General category including Female Dependent of ESM of Haryana only : </li>
                <li>For Female candidates ofall categories ofother States : </li>
              </ul>
            </td>
            <td className="px-4 py-2">Rs.250/-</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">
              <ul className="list-disc pl-5">
                <li>For Male &amp; Female candidates of SC / BC-A / BC-B /ESM categories of Haryana only </li>
                <li>Economically Weaker Sections (EWS) </li>
                <li>For all Persons with Disabilities category candidates (with at least 40Yo disability) of Haryana only </li>
              </ul>
            </td>
            <td className="px-4 py-2">Rs.250/-</td>
          </tr>
        </tbody>
      </table>

      <p className="mb-2">
        <span className="font-bold text-gray-600">Payment Mode:</span> Through Net Banking, Debit Card and Credit Card
      </p>

      <table className="w-full table-auto mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left font-bold text-gray-600">Date</th>
            <th className="px-4 py-2 text-left font-bold text-gray-600">Event</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">24-07-2024</td>
            <td className="px-4 py-2">Date of Publication</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">29-07-2024</td>
            <td className="px-4 py-2">Starting Date for Submission of Online Application</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">18-08-2024</td>
            <td className="px-4 py-2">Last Date for Submission of Online Application &amp; Fee</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">02-09-2024</td>
            <td className="px-4 py-2">Date of Skill Test</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">29-08-2024</td>
            <td className="px-4 py-2">Date of Downloading Admit Card</td>
          </tr>
        </tbody>
      </table>

      <table className="w-full table-auto mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left font-bold text-gray-600">Minimum Age</th>
            <th className="px-4 py-2 text-left font-bold text-gray-600">Maximum Age</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Should not be less than 18 Years</td>
            <td className="px-4 py-2">Not more than 42 Years</td>
          </tr>
        </tbody>
      </table>

      <p className="mb-2">
        <span className="font-bold text-gray-600">Age relaxation</span> is applicable as per rules.
      </p>

      <p className="mb-2">
        <span className="font-bold text-gray-600">Qualification:</span>
      </p>
      <ul className="list-disc pl-5 mb-4">
        <li>Candidates Should Posses Master’s Degree in Relevant Subject with NET/SLET/SET</li>
        <li>Knowledge of Hindi/Sanskrit up to Matric standard or in Higher Education</li>
      </ul>

      <table className="w-full table-auto mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left font-bold text-gray-600">Post Name</th>
            <th className="px-4 py-2 text-left font-bold text-gray-600">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Post Graduate Teacher</td>
            <td className="px-4 py-2">3069</td>
          </tr>
        </tbody>
      </table>

      <p className="mb-4">
        <span className="font-bold text-gray-600">Interested Candidates</span> Can Read the Full Notification Before Apply Online
      </p>

      <table className="w-full table-auto mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left font-bold text-gray-600">Event</th>
            <th className="px-4 py-2 text-left font-bold text-gray-600">Link</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Skill Test Admit Card Date (05-09-2024)</td>
            <td className="px-4 py-2"><a href="https://hpsc.gov.in/en-us/Notifications/Announcements" target="_blank" rel="nofollow" className="text-blue-500">Click here</a></td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Apply Online</td>
            <td className="px-4 py-2"><a href="https://hpsc.gov.in/en-us/Notifications/Announcements" target="_blank" rel="nofollow" className="text-blue-500">Click here</a></td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Notification </td>
            <td className="px-4 py-2"><a href="https://hpsc.gov.in/en-us/Notifications/Announcements" target="_blank" rel="nofollow" className="text-blue-500">Click here</a></td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Official Website</td>
            <td className="px-4 py-2"><a href="http://hpsc.gov.in/" target="_blank" rel="nofollow" className="text-blue-500">Click here</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}