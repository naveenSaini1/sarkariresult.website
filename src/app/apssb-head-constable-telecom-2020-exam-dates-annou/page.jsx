export default function RecruitmentInformation() {
  // This component displays recruitment information for various positions in the Arunachal Pradesh Staff Selection Board (APSSB).
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">APSSB Recruitment Information</h1>

      {/* CSLE-2024 */}
      <h2 id="CSLE-2024" className="text-2xl font-bold text-gray-800 mb-2">
        APSSB Combined Secondary Level Exam 2024
      </h2>
      <p className="text-gray-600 mb-2">
        <span className="font-bold">Post Date:</span> 12-08-2024
      </p>
      <p className="text-gray-600 mb-2">
        <span className="font-bold">Latest Update:</span> 20-08-2024
      </p>
      <p className="text-gray-600 mb-2">
        <span className="font-bold">Total Vacancy:</span> 452
      </p>
      <p className="text-gray-600 mb-4">
        <span className="font-bold">Brief Information:</span> Arunachal Pradesh Staff Selection Board (APSSB) has
        published a notification for the recruitment of Combined Secondary Level Exam 2024. Those Candidates who are
        interested in the vacancy details &amp; completed all eligibility criteria can read the Notification &amp; Apply
        Online.
      </p>
      <table className="table-auto border-collapse w-full mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-left text-gray-800 font-bold">Post Code</th>
            <th className="px-4 py-2 text-left text-gray-800 font-bold">Post Name</th>
            <th className="px-4 py-2 text-left text-gray-800 font-bold">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 text-gray-800">35/24</td>
            <td className="px-4 py-2 text-gray-800">Forest Guard</td>
            <td className="px-4 py-2 text-gray-800">27</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 text-gray-800">36/24</td>
            <td className="px-4 py-2 text-gray-800">Fireman</td>
            <td className="px-4 py-2 text-gray-800">42</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 text-gray-800">37/24</td>
            <td className="px-4 py-2 text-gray-800">Constable</td>
            <td className="px-4 py-2 text-gray-800">170</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 text-gray-800">38/24</td>
            <td className="px-4 py-2 text-gray-800">Lady Constable</td>
            <td className="px-4 py-2 text-gray-800">21</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 text-gray-800">39/24</td>
            <td className="px-4 py-2 text-gray-800">Laboratory Attendant</td>
            <td className="px-4 py-2 text-gray-800">04</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 text-gray-800">40/24</td>
            <td className="px-4 py-2 text-gray-800">MTS</td>
            <td className="px-4 py-2 text-gray-800">188</td>
          </tr>
        </tbody>
      </table>
      <p className="text-gray-600 mb-2">
        <span className="font-bold">Application Fee:</span>
        <ul className="list-disc pl-5">
          <li className="text-gray-600">For General Candidates: Rs. 200/-</li>
          <li className="text-gray-600">For APST Candidates: Rs. 150/-</li>
          <li className="text-gray-600">For PWD Candidates: Nil</li>
          <li className="text-gray-600">Payment mode: Through Online</li>
        </ul>
      </p>
      <p className="text-gray-600 mb-2">
        <span className="font-bold">Important Dates:</span>
        <ul className="list-disc pl-5">
          <li className="text-gray-600">
            Starting Date for Apply Online &amp; Payment of fee: 19-08-2024 (10:00 AM)
          </li>
          <li className="text-gray-600">
            Last Date to Apply Online &amp; Payment of fee: 09-09-2024 (03:00 PM)
          </li>
          <li className="text-gray-600">Date of Written Examination: 10-11-2024 (Sunday) (Tentative)</li>
          <li className="text-gray-600">
            Date of PET/PST for Post Codes 35/24, 36/24, 37 /24 &amp; 38/24: 26-11-2024 (Tentative)
          </li>
        </ul>
      </p>
      <p className="text-gray-600 mb-2">
        <span className="font-bold">Age Limit (as on 09-09-2024):</span>
        <ul className="list-disc pl-5">
          <li className="text-gray-600">Minimum Age Limit: 18 Years</li>
          <li className="text-gray-600">Maximum Age Limit Post Code 35 &amp; 36/24: 32 Years</li>
          <li className="text-gray-600">Maximum Age Limit Post Code 37 &amp; 38/24: 22 Years</li>
          <li className="text-gray-600">Maximum Age Limit Post Code 39 &amp; 40/24: 35 Years</li>
          <li className="text-gray-600">Age relaxation is admissible as per rules.</li>
        </ul>
      </p>
      <p className="text-gray-600 mb-2">
        <span className="font-bold">Qualification:</span> Candidates Should Possess 10th Class/ ITI (Relevant Discipline).
      </p>
      <div className="mb-4">
        <a
          href="https://apssb.nic.in/Index/institute_index/ins/RECINS001"
          target="_blank"
          rel="nofollow"
          className="text-blue-500 hover:underline"
        >
          Apply Online
        </a>
        <a
          href="https://img.freejobalert.com/uploads/2024/08/Notification-APSSB-Combined-Secondary-Level-Exam-2024.pdf"
          target="_blank"
          rel="nofollow"
          className="text-blue-500 hover:underline"
        >
          Notification
        </a>
        <a
          href="https://apssb.nic.in/Index/institute_home/ins/RECINS001"
          target="_blank"
          rel="nofollow"
          className="text-blue-500 hover:underline"
        >
          Official Website
        </a>
      </div>

      {/* Non-Ministerial-Technical-Exam */}
      <h2 id="Non-Ministerial-Technical-Exam" className="text-2xl font-bold text-gray-800 mb-2">
        APSSB Non-Ministerial (Technical) Exam 2024
      </h2>
      <p className="text-gray-600 mb-2">
        <span className="font-bold">Post Date:</span> 19-07-2024
      </p>
      <p className="text-gray-600 mb-2">
        <span className="font-bold">Latest Update:</span> 29-08-2024
      </p>
      <p className="text-gray-600 mb-2">
        <span className="font-bold">Total Vacancy:</span> 309
      </p>
      <p className="text-gray-600 mb-4">
        <span className="font-bold">Brief Information:</span> Government of Arunachal Pradesh, Arunachal Pradesh Staff
        Selection Board (APSSB) has given an employment notification for the recruitment of Non-Ministerial
        (Technical) Exam 2024. Those Candidates who are interested in the vacancy details &amp; completed all
        eligibility criteria can read the Notification &amp; Apply Online.
      </p>
      <table className="table-auto border-collapse w-full mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-left text-gray-800 font-bold">Post. Code</th>
            <th className="px-4 py-2 text-left text-gray-800 font-bold">Post Name</th>
            <th className="px-4 py-2 text-left text-gray-800 font-bold">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 text-gray-800">10/24</td>
            <td className="px-4 py-2 text-gray-800">Assistant Technician</td>
            <td className="px-4 py-2 text-gray-800">02</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 text-gray-800">11/24</td>
            <td className="px-4 py-2 text-gray-800">Field Publicity Assistant</td>
            <td className="px-4 py-2 text-gray-800">07</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 text-gray-800">12/24</td>
            <td className="px-4 py-2 text-gray-800">Publicity Assistant</td>
            <td className="px-4 py-2 text-gray-800">08</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 text-gray-800">13/24</td>
            <td className="px-4 py-2 text-gray-800">Constable Driver</td>
            <td className="px-4 py-2 text-gray-800">98</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 text-gray-800">14/24</td>
            <td className="px-4 py-2 text-gray-800">H/C Driver</td>
            <td className="px-4 py-2 text-gray-800">14</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 text-gray-800">15/24</td>
            <td className="px-4 py-2 text-gray-800">Driver (HMV)</td>
            <td className="px-4 py-2 text-gray-800">01</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 text-gray-800">16/24</td>
            <td className="px-4 py-2 text-gray-800">Driver (LMV/HMV)</td>
            <td className="px-4 py-2 text-gray-800">34</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 text-gray-800">17/24</td>
            <td className="px-4 py-2 text-gray-800">Driver (LMV)</td>
            <td className="px-4 py-2 text-gray-800">14</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 text-gray-800">18/24</td>
            <td className="px-4 py-2 text-gray-800">Junior Librarian</td>
            <td className="px-4 py-2 text-gray-800">09</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 text-gray-800">19/24</td>
            <td className="px-4 py-2 text-gray-800">Health Assistant Jr</td>
            <td className="px-4 py-2 text-gray-800">18</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 text-gray-800">20/24</td>
            <td className="px-4 py-2 text-gray-800">Dental Technician</td>
            <td className="px-4 py-2 text-gray-800">29</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 text-gray-800">21/24</td>
            <td className="px-4 py-2 text-gray-800">Laboratory Assistant</td>
            <td className="px-4 py-2 text-gray-800">08</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 text-gray-800">22/24</td>
            <td className="px-4 py-2 text-gray-800">ECG Technician</td>
            <td className="px-4 py-2 text-gray-800">12</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 text-gray-800">23/24</td>
            <td className="px-4 py-2 text-gray-800">Operation Theatre (OT) Technician</td>
            <td className="px-4 py-2 text-gray-800">24</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 text-gray-800">24/24</td>
            <td className="px-4 py-2 text-gray-800">Pharmacist</td>
            <td className="px-4 py-2 text-gray-800">28</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 text-gray-800">25/24</td>
            <td className="px-4 py-2 text-gray-800">Surveyor</td>
            <td className="px-4 py-2 text-gray-800">03</td>
          </tr>
        </tbody>
      </table>
      <p className="text-gray-600 mb-2">
        <span className="font-bold">Application Fee:</span>
        <ul className="list-disc pl-5">
          <li className="text-gray-600">For APST Candidates: Rs. 150/-</li>
          <li className="text-gray-600">For General Candidates: Rs. 200/-</li>
          <li className="text-gray-600">For PWD Candidates: Nil</li>
          <li className="text-gray-600">Payment Mode: Through Online.</li>
        </ul>
      </p>
      <p className="text-gray-600 mb-2">
        <span className="font-bold">Important Dates:</span>
        <ul className="list-disc pl-5">
          <li className="text-gray-600">Starting Date to Apply Online: 13-09-2024</li>
          <li className="text-gray-600">Last Date to Apply Online: 03-10-2024 (03:00 PM)</li>
          <li className="text-gray-600">Tentative Date for Written Exam: 08-12-2024</li>
          <li className="text-gray-600">Tentative Date of PET/PST: 09-01-2025</li>
        </ul>
      </p>
      <p className="text-gray-600 mb-2">
        <span className="font-bold">Age Limit (as on 03-10-2024):</span>
        <ul className="list-disc pl-5">
          <li className="text-gray-600">Minimum age limit for: 18 Years</li>
          <li className="text-gray-600">
            Maximum age limit for Post Code 10/24 , 11/24, 12/24, 15/24, 16/24, 17/24, 18/24, 19/24, 20/24,
            21/24, 22/24, 23/24, 24/24 &amp; 25/24: 35 Years
          </li>
          <li className="text-gray-600">Maximum age limit for Post Code 13/24: 22 Years</li>
          <li className="text-gray-600">Maximum age limit for Post Code 14/24: 22 Years</li>
          <li className="text-gray-600">Age relaxation is applicable as per rules.</li>
        </ul>
      </p>
      <p className="text-gray-600 mb-2">
        <span className="font-bold">Qualification:</span>
        Candidates should possess 10th Class, 12th Class , ITI, Diploma, Degree (Relevant Discipline)
      </p>
      <div className="mb-4">
        <a
          href="https://apssb.nic.in/upload/RECINS001/Advt_(Technical_2024).pdf"
          target="_blank"
          rel="nofollow"
          className="text-blue-500 hover:underline"
        >
          Notification
        </a>
        <a
          href="https://apssb.nic.in/Index/institute_home/ins/RECINS001"
          target="_blank"
          rel="nofollow"
          className="text-blue-500 hover:underline"
        >
          Official Website
        </a>
      </div>

      {/* CHSL-2024 */}
      <h2 id="CHSL-2024" className="text-2xl font-bold text-gray-800 mb-2">
        APSSB CHSL (10+2) 2024
      </h2>
      <p className="text-gray-600 mb-2">
        <span className="font-bold">Post Date:</span> 18-07-2024
      </p>
      <p className="text-gray-600 mb-2">
        <span className="font-bold">Latest Update:</span> 23-07-2024
      </p>
      <p className="text-gray-600 mb-2">
        <span className="font-bold">Total Vacancy:</span> 53
      </p>
      <p className="text-gray-600 mb-4">
        <span className="font-bold">Brief Information:</span> Government of Arunachal Pradesh, Arunachal Pradesh Staff
        Selection Board (APSSB) has published a notification for the recruitment of Combined Higher Secondary Level
        (10+2) Exam 2024. Those Candidates who are interested in the vacancy details &amp; completed all eligibility
        criteria can read the Notification &amp; Apply Online.
      </p>
      <table className="table-auto border-collapse w-full mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-left text-gray-800 font-bold">Post. Code</th>
            <th className="px-4 py-2 text-left text-gray-800 font-bold">Post Name</th>
            <th className="px-4 py-2 text-left text-gray-800 font-bold">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 text-gray-800">27/24</td>
            <td className="px-4 py-2 text-gray-800">Compositor (Grade – II)</td>
            <td className="px-4 py-2 text-gray-800">04</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 text-gray-800">28/24</td>
            <td className="px-4 py-2 text-gray-800">Copy Holder</td>
            <td className="px-4 py-2 text-gray-800">01</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 text-gray-800">29/24</td>
            <td className="px-4 py-2 text-gray-800">Proof Reader</td>
            <td className="px-4 py-2 text-gray-800">01</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 text-gray-800">30/24</td>
            <td className="px-4 py-2 text-gray-800">Dissection Hall Attendant</td>
            <td className="px-4 py-2 text-gray-800">01</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 text-gray-800">31/24</td>
            <td className="px-4 py-2 text-gray-800">Forester</td>
            <td className="px-4 py-2 text-gray-800">20</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 text-gray-800">32/24</td>
            <td className="px-4 py-2 text-gray-800">Record Keeper/ Record Clerk/ Computer Operator</td>
            <td className="px-4 py-2 text-gray-800">01</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 text-gray-800">33/24</td>
            <td className="px-4 py-2 text-gray-800">Lower Division Clerk (LDC)</td>
            <td className="px-4 py-2 text-gray-800">25</td>
          </tr>
        </tbody>
      </table>
      <p className="text-gray-600 mb-2">
        <span className="font-bold">Application Fee:</span>
        <ul className="list-disc pl-5">
          <li className="text-gray-600">For APST Candidates: Rs. 150/-</li>
          <li className="text-gray-600">For General Candidates: Rs. 200/-</li>
          <li className="text-gray-600">For PWD Candidates: Nil</li>
          <li className="text-gray-600">Payment Mode: Through Online.</li>
        </ul>
      </p>
      <p className="text-gray-600 mb-2">
        <span className="font-bold">Important Dates:</span>
        <ul className="list-disc pl-5">
          <li className="text-gray-600">Starting Date to Apply Online: 13-09-2024</li>
          <li className="text-gray-600">Last Date to Apply Online: 03-10-2024 (03:00 PM)</li>
          <li className="text-gray-600">Tentative Date for Written Exam: 08-12-2024</li>
          <li className="text-gray-600">Tentative Date of PET/PST: 09-01-2025</li>
        </ul>
      </p>
      <p className="text-gray-600 mb-2">
        <span className="font-bold">Age Limit (as on 03-10-2024):</span>
        <ul className="list-disc pl-5">
          <li className="text-gray-600">Minimum age limit for: 18 Years</li>
          <li className="text-gray-600">
            Maximum age limit for Post Code 10/24 , 11/24, 12/24, 15/24, 16/24, 17/24, 18/24, 19/24, 20/24,
            21/24, 22/24, 23/24, 24/24 &amp; 25/24: 35 Years
          </li>
          <li className="text-gray-600">Maximum age limit for Post Code 13/24: 22 Years</li>
          <li className="text-gray-600">Maximum age limit for Post Code 14/24: 22 Years</li>
          <li className="text-gray-600">Age relaxation is applicable as per rules.</li>
        </ul>
      </p>
      <p className="text-gray-600 mb-2">
        <span className="font-bold">Qualification:</span>
        Candidates should possess 10th Class, 12th Class , ITI, Diploma, Degree (Relevant Discipline)
      </p>
      <div className="mb-4">
        <a
          href="https://apssb.nic.in/upload/RECINS001/Advt_(Technical_2024).pdf"
          target="_blank"
          rel="nofollow"
          className="text-blue-500 hover:underline"
        >
          Notification
        </a>
        <a
          href="https://apssb.nic.in/Index/institute_home/ins/RECINS001"
          target="_blank"
          rel="nofollow"
          className="text-blue-500 hover:underline"
        >
          Official Website
        </a>
      </div>
    </div>
  );
}