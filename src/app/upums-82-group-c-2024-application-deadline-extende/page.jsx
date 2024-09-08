export default function RecruitmentInfo() {
  // This component displays recruitment information for UPUMS Group C Vacancy 2024,
  // including post details, application fee, important dates, and vacancy details.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        UPUMS Group C Online Form 2024
      </h1>
      <div className="mb-4">
        <p className="text-gray-700 mb-2">
          <span className="font-bold text-green-500">Name of the Post:</span>{' '}
          UPUMS Group C Online Form 2024
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-bold text-green-500">Post Date:</span>{' '}
          <span className="text-gray-600">03-07-2024</span>
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-bold text-green-500">Latest Update:</span>{' '}
          <span className="text-gray-900">23-08-2024</span>
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-bold text-green-500">Total Vacancy:</span>{' '}
          <span className="text-gray-900">82</span>
        </p>
      </div>
      <p className="text-gray-700 mb-4">
        <span className="font-bold text-red-500">Brief Information:</span> Uttar
        Pradesh University of Medical Sciences (UPUMS) has given an employment
        notification for the recruitment of Group C (Sr. Admin. Assistant,
        Stenographer, Pharmacist Grade-II &amp; Other) Vacancy. Those Candidates
        who are interested in the vacancy details &amp; completed all eligibility
        criteria can read the Notification &amp; Apply Online.
      </p>
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Uttar Pradesh University of Medical Sciences (UPUMS)
        </h2>
        <h3 className="text-xl font-bold text-green-500 mb-2">
          Group C Vacancy 2024
        </h3>
        <p className="text-gray-700 mb-2">
          <a
            href="https://www.freejobalert.com"
            target="_blank"
            rel="noopener"
            className="text-blue-500 hover:underline"
          >
            
          </a>
        </p>
      </div>
      <table className="table-auto w-full border-collapse border border-gray-300 mb-4">
        <tbody>
          <tr>
            <td colSpan={3} className="p-2 text-center font-bold text-red-500">
              Application Fee
            </td>
          </tr>
          <tr>
            <td colSpan={3} className="p-2">
              <ul className="list-disc pl-6">
                <li className="text-gray-700">
                  For Unreserved/OBC/EWS Candidates:
                  <strong>
                    {' '}
                    Rs. 2360/- (Application Fee: Rs. 2000/- + GST @ 18%:{' '}
                    Rs. 360/-)
                    <br/>
                  </strong>
                </li>
                <li className="text-gray-700">
                  For SC/ ST Candidates :
                  <strong> Rs. 1416/-(Application Fee: Rs. 1200/- + GST @ 18%:{' '}
                  Rs. 216/-)</strong>
                </li>
                <li className="text-gray-700">
                  Mode of Payment: <strong>Online</strong>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={3} className="p-2 text-center font-bold text-red-500">
              Important Dates
            </td>
          </tr>
          <tr>
            <td colSpan={3} className="p-2">
              <ul className="list-disc pl-6">
                <li className="text-gray-700">
                  Starting Date for Apply Online &amp; Payment of Fee:
                  <strong> 03-08-2024</strong>
                </li>
                <li className="text-gray-700">
                  Last Date for Apply Online &amp; Payment of Fee:
                  <strong> 04-09-2024</strong>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={3} className="p-2 text-center font-bold text-red-500">
              Age Limit (01-07-2024)
            </td>
          </tr>
          <tr>
            <td colSpan={3} className="p-2">
              <ul className="list-disc pl-6">
                <li className="text-gray-700">
                  Minimum Age Limit:
                  <strong> Must have 18 Years</strong>
                </li>
                <li className="text-gray-700">
                  Maximum Age Limit:
                  <strong> Should not be older than 40 Years</strong>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={3} className="p-2 text-center font-bold text-red-500">
              Vacancy Details
            </td>
          </tr>
          <tr>
            <td colSpan={3} className="p-2 text-center">
              <span className="text-gray-600">Group C</span>
              <span className="text-red-500">
                <br/>
              </span>
            </td>
          </tr>
          <tr>
            <th className="p-2 text-center font-bold text-pink-500">
              Post Name
            </th>
            <th className="p-2 text-center font-bold text-pink-500">Total</th>
            <th className="p-2 text-center font-bold text-pink-500">
              Qualification
            </th>
          </tr>
          <tr>
            <td className="p-2 text-center">
              Senior Administrative Assistant
            </td>
            <td className="p-2 text-center text-gray-900">30</td>
            <td className="p-2 text-center">
              Degree /Typing Speed 25 w.p.m (Hindi) or 30 w.p.m (English)
            </td>
          </tr>
          <tr>
            <td className="p-2 text-center">Stenographer</td>
            <td className="p-2 text-center text-gray-900">30</td>
            <td className="p-2 text-center">
              Degree /Stenography Speed 80 w.p.m (Hindi) or (English)/Typing
              Speed 25 w.p.m (Hindi) or 30 w.p.m (English)
            </td>
          </tr>
          <tr>
            <td className="p-2 text-center">
              Junior&nbsp; Medical Record Officer
            </td>
            <td className="p-2 text-center text-gray-900">03</td>
            <td className="p-2 text-center">12th Class</td>
          </tr>
          <tr>
            <td className="p-2 text-center">Pharmacist Grade-II</td>
            <td className="p-2 text-center text-gray-900">10</td>
            <td className="p-2 text-center">B.Pharma/D.Pharma</td>
          </tr>
          <tr>
            <td className="p-2 text-center">Junior Physiotherapist</td>
            <td className="p-2 text-center text-gray-900">05</td>
            <td className="p-2 text-center">
              Intermediate With Science/PG (Physiotherapist) (MPT/MPHT)
            </td>
          </tr>
          <tr>
            <td className="p-2 text-center">Junior Occupational Therapist</td>
            <td className="p-2 text-center text-gray-900">04</td>
            <td className="p-2 text-center">
              Intermediate With Science/PG (Occupational Therapy)
            </td>
          </tr>
          <tr>
            <td colSpan={3} className="p-2 text-center text-blue-500">
              <strong>
                Interested Candidates Can Read the Full Notification Before
                Apply Online
              </strong>
            </td>
          </tr>
          <tr>
            <td colSpan={3} className="p-2 text-center font-bold text-red-500">
              Important Links
            </td>
          </tr>
          <tr>
            <td className="p-2 text-center text-green-500">
              <strong>Last Date Extended (23-08-2024)</strong>
            </td>
            <td colSpan={2} className="p-2 text-center">
              <a
                title="UPUMS"
                href="https://img.freejobalert.com/uploads/2024/08/Last-Date-Extended-UPUMS-Group-C-Posts.pdf"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 hover:underline"
              >
                <strong>Click Here</strong>
              </a>
            </td>
          </tr>
          <tr>
            <td className="p-2 text-center text-green-500">
              <strong>Apply Online (07-08-2024)</strong>
            </td>
            <td colSpan={2} className="p-2 text-center">
              <a
                href="https://cdn3.digialm.com/per/g26/pub/31636/ASM/WebPortal/19/index.html"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 hover:underline"
              >
                <strong>Click Here</strong>
              </a>
            </td>
          </tr>
          <tr>
            <td className="p-2 text-center text-green-500">
              <strong>Online Apply Dates (07-08-2024)<br/></strong>
            </td>
            <td colSpan={2} className="p-2 text-center">
              <a
                href="https://img.freejobalert.com/uploads/2024/08/Online-Apply-Dates-UPUMS-Group-C-Posts.pdf"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 hover:underline"
              >
                <strong>Click Here</strong>
              </a>
            </td>
          </tr>
          <tr>
            <td className="p-2 text-center text-green-500">
              <strong>Notification </strong>
            </td>
            <td colSpan={2} className="p-2 text-center">
              <a
                href="https://upums.ac.in/assets/pdf/Recruitment/Advt.%2038%20Computer%20Based%20Examination%20Through%20Online%20Medium%202024-25.pdf"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 hover:underline"
              >
                <span className="text-blue-500">
                  <strong>Click here</strong>
                </span>
              </a>
            </td>
          </tr>
          <tr>
            <td className="p-2 text-center text-green-500">
              <strong>Official Website</strong>
            </td>
            <td colSpan={2} className="p-2 text-center">
              <span className="text-blue-500">
                <a
                  href="https://www.upums.ac.in/"
                  target="_blank"
                  rel="nofollow"
                  className="text-blue-500 hover:underline"
                >
                  <strong>Click here</strong>
                </a>
              </span>
            </td>
          </tr>
          <tr>
            <td className="p-2 text-center text-pink-500">
              <strong>Buy Current Affairs Book (ENGLISH MEDIUM)</strong>
            </td>
            <td colSpan={2} className="p-2 text-center">
              <span className="text-blue-500">
                <strong>
                  <a
                    href="https://www.amazon.in/dp/B0DBQW76SJ/?smid=A5G76JX0GL72Y"
                    target="_blank"
                    rel="nofollow"
                    className="text-blue-500 hover:underline"
                  >
                    Click Here
                  </a>
                </strong>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}