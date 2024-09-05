export default function RecruitmentInformation() {
  // This component displays recruitment information for the HSSC Group C 2024 vacancy.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">HSSC Group C 2024 Online Form</h1>
      <div className="flex flex-col gap-2 mb-4">
        <p className="text-gray-800">
          <span className="font-bold text-green-500">Name of the Post:</span> HSSC Group C 2024 Online Form
        </p>
        <p className="text-gray-800">
          <span className="font-bold text-green-500">Post Date:</span>{' '}
          <span className="text-gray-600">17-08-2024</span>
        </p>
        <p className="text-gray-800">
          <span className="font-bold text-green-500">Latest Update:</span> 31-08-2024
        </p>
        <p className="text-gray-800">
          <span className="font-bold text-green-500">Total Vacancy:</span> 369
        </p>
      </div>
      <p className="text-gray-800 mb-4">
        <span className="font-bold text-red-500">Brief Information:</span> Haryana Staff Selection Commission (HSSC) has published a notification for the recruitment of
        Group C (Assistant Lineman, Deputy Ranger, Warder Male & Other) Vacancy. Those Candidates who are interested in the vacancy details &
        completed all eligibility criteria can read the Notification & Apply Online.
      </p>
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Haryana Staff Selection Commission (HSSC)</h2>
        <p className="text-center text-purple-500 font-bold">Advt No. 13/2024</p>
        <p className="text-center text-green-500 font-bold">Group C Vacancy 2024</p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-bold text-red-500 mb-2">Application Fee</h3>
        <ul className="list-disc ml-6 text-gray-800">
          <li>No Fee</li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-bold text-red-500 mb-2">Important Dates</h3>
        <ul className="list-disc ml-6 text-gray-800">
          <li>Date of Publication: 16-08-2024</li>
          <li>Starting Date for Apply Online: 24-08-2024</li>
          <li>Last Date to Apply Online: 06-09-2024 (11:59 P.M.)</li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-bold text-red-500 mb-2">Physical Measurements</h3>
        <p className="text-gray-800">
          <strong>PST:</strong>
        </p>
        <table className="table-auto w-full border border-gray-300 mb-4">
          <thead>
            <tr>
              <th className="border border-gray-300 text-center p-2">Candidate</th>
              <th className="border border-gray-300 text-center p-2">Race Distance</th>
              <th className="border border-gray-300 text-center p-2">Qualifying Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 text-center p-2">Male</td>
              <td className="border border-gray-300 text-center p-2">2.5 Kilometer</td>
              <td className="border border-gray-300 text-center p-2">12 Minutes</td>
            </tr>
            <tr>
              <td className="border border-gray-300 text-center p-2">Female</td>
              <td className="border border-gray-300 text-center p-2">1.0 Kilometer</td>
              <td className="border border-gray-300 text-center p-2">6 Minutes</td>
            </tr>
            <tr>
              <td className="border border-gray-300 text-center p-2">Ex.Serviceman</td>
              <td className="border border-gray-300 text-center p-2">1.0 Kilometer</td>
              <td className="border border-gray-300 text-center p-2">5 Minutes</td>
            </tr>
          </tbody>
        </table>
        <ul className="list-disc ml-6 text-gray-800">
          <li>For more details refer notification</li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-bold text-red-500 mb-2">Vacancy Details</h3>
        <table className="table-auto w-full border border-gray-300 mb-4">
          <thead>
            <tr>
              <th className="border border-gray-300 text-center p-2">Post Name</th>
              <th className="border border-gray-300 text-center p-2">Total</th>
              <th className="border border-gray-300 text-center p-2">Age Limit (as on 06-09-2024)</th>
              <th className="border border-gray-300 text-center p-2">Qualification</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 text-center p-2">Assistant Lineman</td>
              <td className="border border-gray-300 text-center p-2">45</td>
              <td className="border border-gray-300 text-center p-2">18-42 Years</td>
              <td className="border border-gray-300 text-center p-2">10th class, ITI (Electrician/Wireman trade)</td>
            </tr>
            <tr>
              <td className="border border-gray-300 text-center p-2">Deputy Ranger</td>
              <td className="border border-gray-300 text-center p-2">02</td>
              <td className="border border-gray-300 text-center p-2">18-42 Years</td>
              <td className="border border-gray-300 text-center p-2">10+2, Diploma (Relevant Engg)</td>
            </tr>
            <tr>
              <td className="border border-gray-300 text-center p-2">Warder (Male/Female)</td>
              <td className="border border-gray-300 text-center p-2">34</td>
              <td className="border border-gray-300 text-center p-2">18-25 Years</td>
              <td className="border border-gray-300 text-center p-2">10+2</td>
            </tr>
            <tr>
              <td className="border border-gray-300 text-center p-2">Assistant Superintendent Jail (Male)</td>
              <td className="border border-gray-300 text-center p-2">02</td>
              <td className="border border-gray-300 text-center p-2">21-27 Years</td>
              <td className="border border-gray-300 text-center p-2">Any Degree</td>
            </tr>
            <tr>
              <td className="border border-gray-300 text-center p-2">Junior Coach</td>
              <td className="border border-gray-300 text-center p-2">106</td>
              <td className="border border-gray-300 text-center p-2">18-42 Years</td>
              <td className="border border-gray-300 text-center p-2">Diploma (Coaching)/Any Degree</td>
            </tr>
            <tr>
              <td className="border border-gray-300 text-center p-2">Constable</td>
              <td className="border border-gray-300 text-center p-2">165</td>
              <td className="border border-gray-300 text-center p-2">18-25 Years</td>
              <td className="border border-gray-300 text-center p-2">10+2</td>
            </tr>
            <tr>
              <td className="border border-gray-300 text-center p-2">Sub-Inspector</td>
              <td className="border border-gray-300 text-center p-2">15</td>
              <td className="border border-gray-300 text-center p-2">21-27 Years</td>
              <td className="border border-gray-300 text-center p-2">Any Degree</td>
            </tr>
          </tbody>
        </table>
        <p className="text-blue-500 text-center">Interested Candidates Can Read the Full Notification Before Apply Online</p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-bold text-red-500 mb-2">Important Links</h3>
        <table className="table-auto w-full border border-gray-300 mb-4">
          <tbody>
            <tr>
              <td className="border border-gray-300 text-center p-2">
                <span className="font-bold text-green-500">Apply Online (31-08-2024)</span>
              </td>
              <td className="border border-gray-300 text-center p-2 col-span-3">
                <a className="text-blue-500 hover:underline" href="https://adv132024.hryssc.com/hssc/empOnboardingHomepage" target="_blank" rel="nofollow">
                  Click Here
                </a>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 text-center p-2">
                <span className="font-bold text-green-500">Notification</span>
              </td>
              <td className="border border-gray-300 text-center p-2 col-span-3">
                <a className="text-blue-500 hover:underline" href="https://img.freejobalert.com/uploads/2024/08/Notification-HSSC-Group-C-2024.pdf" target="_blank" rel="nofollow">
                  Click Here
                </a>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 text-center p-2">
                <span className="font-bold text-green-500">Official Website</span>
              </td>
              <td className="border border-gray-300 text-center p-2 col-span-3">
                <a className="text-blue-500 hover:underline" href="https://hssc.gov.in/" target="_blank" rel="nofollow">
                  Click Here
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}