export default function UttarakhandConstableRecruitment() {
  // This component displays recruitment information for the Uttarakhand Subordinate Service Selection Commission (UKSSSC) Constable position.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        UKSSSC Constable Recruitment 2024
      </h1>

      {/* Post Details */}
      <div className="mb-4">
        <p className="text-gray-700">
          <span className="font-bold text-green-500">Name of the Post:</span>{' '}
          UKSSSC Constable Online Form 2024
        </p>
        <p className="text-gray-700">
          <span className="font-bold text-green-500">Post Date:</span> 31-10-2024
        </p>
        <p className="text-gray-700">
          <span className="font-bold text-green-500">Total Vacancy:</span> 2000
        </p>
      </div>

      {/* Brief Information */}
      <div className="mb-4">
        <p className="text-gray-700">
          <span className="font-bold text-red-500">Brief Information:</span>{' '}
          The Uttarakhand Subordinate Service Selection Commission (UKSSSC) has
          announced recruitment for Constable District Police (Male) of Group C &
          Constable PAC/IRB (Male) vacancies. Interested and eligible
          candidates can read the notification and apply online.
        </p>
      </div>

      {/* Key Highlights */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Key Highlights</h2>
        <ul className="list-disc pl-5 text-gray-700">
          <li>
            <span className="font-bold">Application Fee:</span>
            <ul className="list-none pl-5">
              <li>
                For Unreserved/ Uttarakhand OBC Candidates: Rs. 300/-
              </li>
              <li>
                For Uttarakhand SC/ ST/ EWS/ Candidates: Rs. 150/-
              </li>
            </ul>
          </li>
          <li>
            <span className="font-bold">Important Dates:</span>
            <ul className="list-none pl-5">
              <li>
                Date of Advertisement: 30-10-2024
              </li>
              <li>
                Starting Date to Apply Online: 08-11-2024
              </li>
              <li>
                Last Date to Apply Online: 29-11-2024
              </li>
              <li>
                Tentative Date of Written Exam: 15 June, 2025
              </li>
            </ul>
          </li>
          <li>
            <span className="font-bold">Age Limit (as on 01-07-2024):</span>
            <ul className="list-none pl-5">
              <li>
                Minimum Age Limit: 18 Years
              </li>
              <li>
                Maximum Age Limit for Constable: 22 Years
              </li>
              <li>
                Age relaxation is applicable as per rules.
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Physical Standards */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Physical Standards
        </h2>
        <div className="text-gray-700">
          <p className="font-bold">Height:</p>
          <ul className="list-none pl-5">
            <li>
              General/ OBC/ SC: 165 Cms
            </li>
            <li>
              For candidates from Hilly Areas: 160 Cm
            </li>
            <li>
              For ST: 157.5 Cm
            </li>
          </ul>
          <p className="font-bold">Chest:</p>
          <ul className="list-none pl-5">
            <li>
              General/ OBC/ SC: Normal 78.8 Cm, Expanded 83.8 Cm
            </li>
            <li>
              For candidates from Hilly Areas, ST: Normal 76.3 Cm, Expanded 81.3
              Cm
            </li>
          </ul>
        </div>
      </div>

      {/* Qualification */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Qualification</h2>
        <p className="text-gray-700">
          Candidates should possess Intermediate.
        </p>
      </div>

      {/* Vacancy Details Table */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Vacancy Details
        </h2>
        <table className="table-auto w-full text-gray-700">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left font-bold">Post Name</th>
              <th className="px-4 py-2 text-left font-bold">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2">Constable District Police (Male)</td>
              <td className="px-4 py-2">1600</td>
            </tr>
            <tr>
              <td className="px-4 py-2">
                Constable PAC/IRB (Male)
              </td>
              <td className="px-4 py-2">400</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Important Links */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Important Links
        </h2>
        <table className="table-auto w-full text-gray-700">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left font-bold">Link</th>
              <th className="px-4 py-2 text-left font-bold">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2">
                <span className="font-bold text-green-500">Apply Online</span>
              </td>
              <td className="px-4 py-2">Available on 08-11-2024</td>
            </tr>
            <tr>
              <td className="px-4 py-2">
                <span className="font-bold text-green-500">Notification</span>
              </td>
              <td className="px-4 py-2">
                <a
                  href="https://img.freejobalert.com/uploads/2024/11/Notification-UKSSSC-Constable-Posts.pdf"
                  className="text-blue-500 underline"
                  rel="nofollow"
                  target="_blank"
                >
                  Click Here
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">
                <span className="font-bold text-green-500">
                  Official Website
                </span>
              </td>
              <td className="px-4 py-2">
                <a
                  title="UKSSSC"
                  href="http://sssc.uk.gov.in/"
                  className="text-blue-500 underline"
                  rel="nofollow"
                  target="_blank"
                >
                  Click Here
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* FAQs */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          FAQs regarding UKSSSC Constable 2024
        </h2>
        <div className="text-gray-700">
          <p className="font-bold">
            1. What is the last date to apply for UKSSSC Constable 2024?
          </p>
          <p>Ans: Last date for Apply Online is 29-11-2024.</p>

          <p className="font-bold">
            2. What is the Eligibility to apply for UKSSSC Constable 2024?
          </p>
          <p>Ans: Intermediate.</p>

          <p className="font-bold">
            3. What is the Age Limit to apply for UKSSSC Constable 2024?
          </p>
          <p>Ans: 18-22 Years</p>

          <p className="font-bold">
            4. How many vacancies are released for UKSSSC Constable 2024?
          </p>
          <p>Ans: Total 2000 Vacancies.</p>

          <p className="font-bold">
            5. How much of fee pay for UKSSSC Constable 2024?
          </p>
          <p>
            Ans: Unreserved/ Uttarakhand OBC Candidates: Rs. 300/- &
            Uttarakhand SC/ ST/ EWS/ Candidates: Rs. 150/-
          </p>
        </div>
      </div>

      {/* Keywords */}
      <div className="mt-8">
        <p className="text-gray-700">
          Keywords: UKSSSC, Constable, Recruitment, Uttarakhand, Police,
          Vacancies, Application, Form, Eligibility, Age Limit, Important Dates,
          Notification, Apply Online, Official Website.
        </p>
      </div>
    </div>
  );
}