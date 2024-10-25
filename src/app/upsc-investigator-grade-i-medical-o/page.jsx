export default function RecruitmentInfo() {
  // This component displays recruitment information for UPSC Investigator Grade-I & Medical Officer (Ayurveda) 2024.
  // It includes details such as post date, total vacancy, brief information, application fee, important dates, and vacancy details.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        UPSC Investigator Grade-I & Medical Officer (Ayurveda) 2024 Exam Date Announced
      </h1>
      <div className="flex justify-between mb-4">
        <p className="text-gray-600">
          <span className="font-bold text-green-500">Name of the Post:</span> UPSC Investigator Grade-I & Medical Officer
          (Ayurveda) 2024
        </p>
        <p className="text-gray-600">
          <span className="font-bold text-green-500">Post Date:</span> 13-04-2024
        </p>
      </div>
      <p className="text-gray-600 mb-4">
        <span className="font-bold text-green-500">Latest Update:</span> 25-10-2024
      </p>
      <p className="text-gray-600 mb-4">
        <span className="font-bold text-green-500">Total Vacancy:</span> 109
      </p>
      <p className="text-gray-600 mb-4">
        <span className="font-bold text-red-500">Brief Information: </span> Union Public Service Commission (UPSC) has
        given an employment notification for the recruitment of Specialist Grade III, Assistant Professor & Other
        vacancies. Those Candidates who are interested in the vacancy details & completed all eligibility criteria
        can read the Notification & Apply Online.
      </p>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Highlights</h2>
      <ul className="list-disc text-gray-600 mb-4">
        <li>Exam Date for Investigator Grade-I & Medical Officer (Ayurveda): 22-12-2024 (02.00 P.M TO 04.00 P.M)</li>
        <li>Starting Date for Apply Online: 13-04-2024</li>
        <li>Last Date for Apply Online: 02-05-2024 (23:59 Hrs)</li>
        <li>Last Date for Printing of Completely Submitted Online Application: 03-05-2024 (23:59 Hrs)</li>
      </ul>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Application Fee</h2>
      <ul className="list-disc text-gray-600 mb-4">
        <li>For Gen/OBC/EWS/Male candidates: Rs. 25/-</li>
        <li>For SC/ST/PwBD/Women candidates: Nil</li>
        <li>Payment Mode: Through SBI/Net banking/Visa/Master/Rupay/Credit/Debit Card/UPI payment.</li>
      </ul>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Vacancy Details</h2>
      <table className="table-auto w-full text-gray-600 mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left font-bold text-gray-800">S.No.</th>
            <th className="px-4 py-2 text-left font-bold text-gray-800">Post Name</th>
            <th className="px-4 py-2 text-left font-bold text-gray-800">Total</th>
            <th className="px-4 py-2 text-left font-bold text-gray-800">Max. Age Limit (as on 02-05-2024)</th>
            <th className="px-4 py-2 text-left font-bold text-gray-800">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 text-left">01</td>
            <td className="px-4 py-2 text-left">Scientist-B (Non Destructive)</td>
            <td className="px-4 py-2 text-left">02</td>
            <td className="px-4 py-2 text-left">
              <p>for UR: 35 years</p>
              <p>for ST: 40 years</p>
            </td>
            <td className="px-4 py-2 text-left">
              <p>B.E./B.Tech(Electrical/ Mechanical Engg./ Metallurgy)/PG (Physics )</p>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-left">02</td>
            <td className="px-4 py-2 text-left">
              Specialist Grade III
              <br/>
              Assistant Professor (Nephrology)
            </td>
            <td className="px-4 py-2 text-left">08</td>
            <td className="px-4 py-2 text-left">
              <p>for UR: 40 years</p>
              <p>for OBC: 43 years</p>
              <p>for SC/ST: 45 years</p>
            </td>
            <td className="px-4 py-2 text-left" rowspan="8">
              MBBS, PG Degree(Concern Speciality/Super-Speciality)
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-left">03</td>
            <td className="px-4 py-2 text-left">
              Specialist Grade III
              <br/>
              Assistant Professor (Nuclear Medicine)
            </td>
            <td className="px-4 py-2 text-left">03</td>
            <td className="px-4 py-2 text-left">
              <p>for UR: 40 years</p>
              <p>for OBC: 43 years</p>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-left">04</td>
            <td className="px-4 py-2 text-left">
              Specialist Grade III Assistant
              <br/>
              Professor (Orthopaedics)
            </td>
            <td className="px-4 py-2 text-left">10</td>
            <td className="px-4 py-2 text-left">
              <p>UR/EWS: 40 years</p>
              <p>for OBC : 43 years</p>
              <p>for SC : 45 years</p>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-left">05</td>
            <td className="px-4 py-2 text-left">
              Specialist Grade III Assistant
              <br/>
              Professor (Paediatric Cardiology)
            </td>
            <td className="px-4 py-2 text-left">01</td>
            <td className="px-4 py-2 text-left">for OBC: 43 years</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-left">06</td>
            <td className="px-4 py-2 text-left">
              Specialist Grade III
              <br/>
              Assistant Professor (Paediatric Surgery)
            </td>
            <td className="px-4 py-2 text-left">09</td>
            <td className="px-4 py-2 text-left">
              <p>for URs/EWS: 40 years</p>
              <p>for OBC: 43 years</p>
              <p>for SC: 45 years</p>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-left">07</td>
            <td className="px-4 py-2 text-left">
              Specialist Grade III
              <br/>
              Assistant Professor (Plastic and Reconstructive Surgery
            </td>
            <td className="px-4 py-2 text-left">03</td>
            <td className="px-4 py-2 text-left">for OBC: 43 years</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-left">08</td>
            <td className="px-4 py-2 text-left">
              Specialist Grade III
              <br/>
              Assistant Professor (Surgical Oncology)
            </td>
            <td className="px-4 py-2 text-left">02</td>
            <td className="px-4 py-2 text-left">
              <p>for UR: 40 years</p>
              <p>for OBC: 43 years</p>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-left">09</td>
            <td className="px-4 py-2 text-left">
              Specialist Grade III
              <br/>
              Assistant Professor (Urology)
            </td>
            <td className="px-4 py-2 text-left">04</td>
            <td className="px-4 py-2 text-left">
              <p>for OBC: 43 years</p>
              <p>for SC/ST: 45 years</p>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-left">10</td>
            <td className="px-4 py-2 text-left">Research Officer (Chemistry)</td>
            <td className="px-4 py-2 text-left">01</td>
            <td className="px-4 py-2 text-left">for UR: 30 years</td>
            <td className="px-4 py-2 text-left" rowspan="5">PG Degree (Relevant Subject)</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-left">11</td>
            <td className="px-4 py-2 text-left">Scientist ‘B’ (Chemistry)</td>
            <td className="px-4 py-2 text-left">01</td>
            <td className="px-4 py-2 text-left">for ST: 40 years</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-left">12</td>
            <td className="px-4 py-2 text-left">Scientist ‘B’ (Physics)</td>
            <td className="px-4 py-2 text-left">01</td>
            <td className="px-4 py-2 text-left">for EWS: 35 Years</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-left">13</td>
            <td className="px-4 py-2 text-left">Investigator Grade-I</td>
            <td className="px-4 py-2 text-left">02</td>
            <td className="px-4 py-2 text-left">
              <p>for UR: 30 years</p>
              <p>for SC: 35 years</p>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-left">14</td>
            <td className="px-4 py-2 text-left">Assistant Chemist</td>
            <td className="px-4 py-2 text-left">03</td>
            <td className="px-4 py-2 text-left">
              <p>for UR: 30 years</p>
              <p>for SC: 35 years</p>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-left">15</td>
            <td className="px-4 py-2 text-left">
              Nautical Surveyor-cum Deputy Director General (Technical)
            </td>
            <td className="px-4 py-2 text-left">06</td>
            <td className="px-4 py-2 text-left">
              <p>for UR/EWS: 50 years</p>
              <p>for SC: 55 years</p>
            </td>
            <td className="px-4 py-2 text-left">Certificate of Competency as Master of a Foreign Going Ship</td>
          </tr>
        </tbody>
      </table>
      <p className="text-gray-600 mb-4">
        For more Vacancies, Age Limit, & Qualification Details refer the Notification
      </p>
      <p className="text-gray-600 mb-4">
        Interested Candidates Can Read the Full Notification Before Apply Online
      </p>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Important Links</h2>
      <ul className="list-disc text-gray-600 mb-4">
        <li>
          <span className="font-bold text-green-500">Exam Date for Investigator Grade-I & Medical Officer (Ayurveda)
            (25-10-2024)</span>
          <a
            href="https://img.freejobalert.com/uploads/2024/10/Exam-Date-UPSC-For-Invstigator-Grade-I-Posts.pdf"
            target="_blank"
            rel="noopener"
            className="text-blue-500 hover:underline"
          >
            Link 1
          </a>{' '}
          |
          <a
            href="https://img.freejobalert.com/uploads/2024/10/Exam-Date-UPSC-For-Medical-Officer-Posts.pdf"
            target="_blank"
            rel="noopener"
            className="text-blue-500 hover:underline"
          >
            Link 2
          </a>
        </li>
        <li>
          <span className="font-bold text-green-500">Apply Online</span>
          <a
            href="https://upsconline.nic.in/ora/VacancyNoticePub.php"
            target="_blank"
            rel="noopener"
            className="text-blue-500 hover:underline"
          >
            Click here
          </a>
        </li>
        <li>
          <span className="font-bold text-green-500">Notification </span>
          <a
            href="https://upsc.gov.in/sites/default/files/Advt-No-07-2024-engli-12042024_0.pdf"
            target="_blank"
            rel="noopener"
            className="text-blue-500 hover:underline"
          >
            Click here
          </a>
        </li>
        <li>
          <span className="font-bold text-green-500">Official Website</span>
          <a href="https://upsc.gov.in/" target="_blank" rel="noopener" className="text-blue-500 hover:underline">
            Click here
          </a>
        </li>
      </ul>
      <p className="text-gray-600 mt-8">
        Keywords: UPSC, Investigator Grade-I, Medical Officer, Ayurveda, Recruitment, Exam, Notification,
        Application, Vacancy
      </p>
    </div>
  );
}