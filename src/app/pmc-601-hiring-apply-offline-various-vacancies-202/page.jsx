export default function RecruitmentInformation() {
  // This component displays recruitment information for Pune Municipal Corporation (PMC)
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">
        PMC Various Vacancy Offline Form 2024
      </h1>
      <div className="flex flex-col gap-4">
        <p className="text-lg font-medium">
          <span className="text-green-500">Name of the Post:</span> PMC Various
          Vacancy Offline Form 2024
        </p>
        <p className="text-lg font-medium">
          <span className="text-green-500">Post Date:</span> 04-09-2024
        </p>
        <p className="text-lg font-medium">
          <span className="text-green-500">Total Vacancy:</span> 601
        </p>
        <p className="text-lg">
          <span className="text-red-500">Brief Information:</span> Pune Municipal
          Corporation (PMC) has invited an application for the recruitment of
          Welder, Painter, Carpenter, Turner & Other Vacancy. Those Candidates
          who are interested in the vacancy details & completed all eligibility
          criteria can read the Notification & Apply.
        </p>
      </div>
      <div className="mt-8">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-center">
              <th
                colSpan={3}
                className="px-4 py-2 text-xl font-bold text-red-500"
              >
                Pune Municipal Corporation (PMC)
              </th>
            </tr>
            <tr className="bg-gray-100 text-center">
              <th
                colSpan={3}
                className="px-4 py-2 text-xl font-bold text-green-500"
              >
                Various Vacancy 2024
              </th>
            </tr>
            <tr className="bg-gray-100 text-center">
              <th
                colSpan={3}
                className="px-4 py-2 text-xl font-bold text-red-500"
              >
                <a
                  href="https://www.freejobalert.com"
                  target="_blank"
                  rel="noopener"
                  className="underline text-blue-500"
                >
                  
                </a>
              </th>
            </tr>
            <tr className="bg-gray-100 text-center">
              <th
                colSpan={3}
                className="px-4 py-2 text-xl font-bold text-red-500"
              >
                Important Dates
              </th>
            </tr>
            <tr>
              <td colSpan={3} className="px-4 py-2">
                <ul>
                  <li>
                    Last Date to Apply (Offline):
                    <strong className="font-medium">30-09-2024</strong>
                  </li>
                </ul>
              </td>
            </tr>
            <tr className="bg-gray-100 text-center">
              <th
                colSpan={3}
                className="px-4 py-2 text-xl font-bold text-red-500"
              >
                Age Limit
              </th>
            </tr>
            <tr>
              <td colSpan={3} className="px-4 py-2">
                <ul>
                  <li>
                    Minimum Age:
                    <strong className="font-medium">18 Years</strong>
                  </li>
                  <li>
                    Maximum Age:
                    <strong className="font-medium">35 Years</strong>
                  </li>
                </ul>
              </td>
            </tr>
            <tr className="bg-gray-100 text-center">
              <th colSpan={3} className="px-4 py-2 text-xl font-bold text-red-500">
                Vacancy Details
              </th>
            </tr>
            <tr className="bg-gray-100 text-center">
              <th className="px-4 py-2 text-xl font-bold text-pink-500">
                Post Name
              </th>
              <th className="px-4 py-2 text-xl font-bold text-pink-500">
                Total
              </th>
              <th className="px-4 py-2 text-xl font-bold text-pink-500">
                Qualification
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="px-4 py-2">
                Running/Jeep car (Mechanic)
              </td>
              <td className="px-4 py-2">15</td>
              <td className="px-4 py-2">ITI (Diesel Mechanic/Motor Mechanic)</td>
            </tr>
            <tr className="text-center">
              <td className="px-4 py-2">Auto Electrician</td>
              <td className="px-4 py-2">06</td>
              <td className="px-4 py-2">
                ITI (Auto Electric/Electronics/Mechatronics)
              </td>
            </tr>
            <tr className="text-center">
              <td className="px-4 py-2">Welder</td>
              <td className="px-4 py-2">10</td>
              <td className="px-4 py-2">ITI welder (GMAW/GTAW)</td>
            </tr>
            <tr className="text-center">
              <td className="px-4 py-2">Painter</td>
              <td className="px-4 py-2">02</td>
              <td className="px-4 py-2">ITI (Painter)</td>
            </tr>
            <tr className="text-center">
              <td className="px-4 py-2">Carpenter</td>
              <td className="px-4 py-2">03</td>
              <td className="px-4 py-2">ITI (Carpenter)</td>
            </tr>
            <tr className="text-center">
              <td className="px-4 py-2">Turner</td>
              <td className="px-4 py-2">01</td>
              <td className="px-4 py-2">ITI (Turner)</td>
            </tr>
            <tr className="text-center">
              <td className="px-4 py-2">Black Smith</td>
              <td className="px-4 py-2">01</td>
              <td className="px-4 py-2">ITI (Black Smith)</td>
            </tr>
            <tr className="text-center">
              <td className="px-4 py-2">Department of Computers</td>
              <td className="px-4 py-2">02</td>
              <td className="px-4 py-2">
                ITI (Computer Operator and Programming)
              </td>
            </tr>
            <tr className="text-center">
              <td className="px-4 py-2">Sheet Metal Work</td>
              <td className="px-4 py-2">02</td>
              <td className="px-4 py-2">ITI (Sheet Metal Work)</td>
            </tr>
            <tr className="text-center">
              <td className="px-4 py-2">Pump Operator Cum Mechanic</td>
              <td className="px-4 py-2">02</td>
              <td className="px-4 py-2">ITI (Pump Operator Cum Mechanic)</td>
            </tr>
            <tr className="text-center">
              <td className="px-4 py-2">Mechanic Machine Tools</td>
              <td className="px-4 py-2">02</td>
              <td className="px-4 py-2">
                ITI (Mechanic Machine Tools and Maintenance)
              </td>
            </tr>
            <tr className="text-center">
              <td className="px-4 py-2">Aaya</td>
              <td className="px-4 py-2">20</td>
              <td className="px-4 py-2">12th Pass</td>
            </tr>
            <tr className="text-center">
              <td className="px-4 py-2">Junior Engineer (Civil)</td>
              <td className="px-4 py-2">10</td>
              <td className="px-4 py-2">Diploma or Degree (Civil Engg)</td>
            </tr>
            <tr className="text-center">
              <td className="px-4 py-2">Junior Engineer (Mechanical)</td>
              <td className="px-4 py-2">10</td>
              <td className="px-4 py-2">Diploma or Degree (Mechanical Engg)</td>
            </tr>
            <tr className="text-center">
              <td className="px-4 py-2">junior Engineer (Electrical)</td>
              <td className="px-4 py-2">05</td>
              <td className="px-4 py-2">Diploma or Degree (Electrical Engg)</td>
            </tr>
            <tr className="text-center">
              <td className="px-4 py-2">Health Inspector</td>
              <td className="px-4 py-2">30</td>
              <td className="px-4 py-2">SSC Pass</td>
            </tr>
            <tr className="text-center">
              <td className="px-4 py-2">Computer Operator</td>
              <td className="px-4 py-2">15</td>
              <td className="px-4 py-2">12th Pass</td>
            </tr>
            <tr className="text-center">
              <td colSpan={3} className="px-4 py-2">
                <span className="text-blue-500 font-medium">
                  For More Vacancy Details Refer the Notification
                </span>
              </td>
            </tr>
            <tr className="text-center">
              <td colSpan={3} className="px-4 py-2">
                <span className="text-blue-500 font-medium">
                  Interested Candidates Can Read the Full Notification Before
                  Apply
                </span>
              </td>
            </tr>
            <tr className="bg-gray-100 text-center">
              <th colSpan={3} className="px-4 py-2 text-xl font-bold text-red-500">
                Important Links
              </th>
            </tr>
            <tr className="text-center">
              <td colSpan={2} className="px-4 py-2">
                <span className="text-green-500 font-medium">Notification</span>
              </td>
              <td className="px-4 py-2">
                <a
                  href="https://img.freejobalert.com/uploads/2024/09/Notification-PMC-Junior-Engineer-Health-Inspector-and-Other-Posts-2024.pdf"
                  target="_blank"
                  rel="nofollow"
                  className="underline text-blue-500"
                >
                  Click here
                </a>
              </td>
            </tr>
            <tr className="text-center">
              <td colSpan={2} className="px-4 py-2">
                <span className="text-green-500 font-medium">Official Website</span>
              </td>
              <td className="px-4 py-2">
                <a
                  href="https://pmc.gov.in/mr/?main=true"
                  target="_blank"
                  rel="nofollow"
                  className="underline text-blue-500"
                >
                  Click here
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}