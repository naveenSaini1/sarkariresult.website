export default function RecruitmentInformation() {
  // This component displays recruitment information for various positions, including post details, brief information, application fees, important dates, and vacancy details.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Arunachal Pradesh Public Service Commission Recruitment</h1>

      {/* Recruitment Post Links */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Recruitment Posts</h2>
        <table className="table-auto w-full text-center">
          <tbody>
            <tr>
              <td>
                <a
                  href="#Lecturer-DIET"
                  className="text-blue-500 font-bold hover:underline"
                >
                  Click Here for Lecturer (DIET) Post Details – Last Date:
                  04-09-2024
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a
                  href="#medical-officer"
                  className="text-blue-500 font-bold hover:underline"
                >
                  Click Here for 55 General Duty Medical Officer Post Details –
                  Last Date : 01-09-2024
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a
                  href="#Jr-Specialist"
                  className="text-blue-500 font-bold hover:underline"
                >
                  Click Here for 103 Junior Specialist Post Details – Interview
                  Result Released
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a
                  title="Arunachal Pradesh PSC"
                  href="#Sub-Inspector"
                  className="text-blue-500 font-bold hover:underline"
                >
                  Click here for 13 Sub Inspector Post Details – Written Exam
                  Result Released
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a
                  title="APPSC"
                  href="#TGT"
                  className="text-blue-500 font-bold hover:underline"
                >
                  Click Here for 367 TGT Post Details – Last Date: 13-09-2022
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a
                  title="APPSC"
                  href="#Research-Assistant"
                  className="text-blue-500 font-bold hover:underline"
                >
                  Click Here for 10 Research Assistant Post Details – Last –
                  Date : 24-04-2022
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a
                  title="Arunachal Pradesh PSC"
                  href="#GraduateTeacher"
                  className="text-blue-500 font-bold hover:underline"
                >
                  Click Here For 77 <b>Post Graduate Teacher Posts Details Last
                  Date : 11-03-2022</b>
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a
                  title="Arunachal Pradesh PSC"
                  href="#CCE"
                  className="text-blue-500 font-bold hover:underline"
                >
                  Click here for Combined Competitive (Mains) Exam Details –
                  Marks Released
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a
                  title="Arunachal Pradesh PSC"
                  href="#Medical-Officer"
                  className="text-blue-500 font-bold hover:underline"
                >
                  Click here for 69 General Duty Medical Officer Post Details –
                  Interview Result Released
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Lecturer (DIET) Post Details */}
      <div id="Lecturer-DIET" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">
          Lecturer (DIET) Post Details
        </h2>
        <p className="mb-2">
          <span className="text-green-500 font-bold">Name of the Post:</span>{' '}
          Arunachal Pradesh PSC Lecturer Online Form 2024
        </p>
        <p className="mb-2">
          <span className="text-green-500 font-bold">Post Date:</span>{' '}
          <span className="text-gray-700">21-08-2024</span>
        </p>
        <p className="mb-2">
          <span className="text-green-500 font-bold">Total Vacancy:</span>{' '}
          <span className="text-gray-700">25</span>
        </p>
        <p className="mb-4">
          <span className="text-red-500 font-bold">Brief Information:</span>{' '}
          Arunachal Pradesh Public Service Commission (Arunachal Pradesh
          PSC) has announced notification for the recruitment of Lecturer
          (DIET). Those Candidates who are interested in the vacancy details &
          completed all eligibility criteria can read the Notification & Apply
          Online.
        </p>

        {/* Lecturer (DIET) Table */}
        <table className="table-auto w-full text-center border-2 border-gray-400">
          <thead>
            <tr>
              <th className="px-4 py-2" colSpan="2">
                <span className="text-red-500 font-bold">
                  Arunachal Pradesh Public Service Commission
                </span>
              </th>
            </tr>
            <tr>
              <th className="px-4 py-2" colSpan="2">
                <span className="text-green-500 font-bold">
                  Lecturer Vacancy 2024
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2" colSpan="2">
                <span className="text-red-500 font-bold">
                  Application Fee
                </span>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">
                Fee for APST candidates:
                <strong className="text-gray-700"> Rs. 150/-</strong>
              </td>
              <td className="px-4 py-2">
                Fee for All Other Applicants:
                <strong className="text-gray-700"> Rs. 200/-</strong>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2" colSpan="2">
                Payment mode:
                <strong className="text-gray-700"> Through Online</strong>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2" colSpan="2">
                <span className="text-red-500 font-bold">
                  Important Dates
                </span>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2" colSpan="2">
                Last Date to Apply Online:
                <strong className="text-gray-700">
                  &nbsp; 04-09-2024 (17: 00 Hours)
                </strong>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2" colSpan="2">
                <span className="text-red-500 font-bold">
                  Age Limit (as on 04-09-2024)
                </span>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2" colSpan="2">
                Maximum Age:
                <strong className="text-gray-700"> 35 years</strong>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2" colSpan="2">
                Age relaxation is admissible as per rules.
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2" colSpan="2">
                <span className="text-red-500 font-bold">Qualification</span>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2" colSpan="2">
                Candidates Should Possess D.EI Ed/ PG/ M.Ed/ MA (Relevant
                Subjects).
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2" colSpan="2">
                <span className="text-red-500 font-bold">
                  Vacancy Details
                </span>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">
                <span className="text-blue-500 font-bold">Post Name</span>
              </td>
              <td className="px-4 py-2">
                <span className="text-blue-500 font-bold">Total</span>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">Lecturer (DIET)</td>
              <td className="px-4 py-2">
                <span className="text-gray-700">25</span>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2" colSpan="2">
                <span className="text-blue-500 font-bold">
                  Interested Candidates Can Read the Full Notification Before
                  Apply Online
                </span>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2" colSpan="2">
                <span className="text-red-500 font-bold">Important Links</span>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">
                <span className="text-green-500 font-bold">Apply Online</span>
              </td>
              <td className="px-4 py-2">
                <a
                  title="Arunachal Pradesh PSC"
                  href="https://appsc.gov.in/Index/institute_home/ins/RECINS001"
                  className="text-blue-500 font-bold hover:underline"
                >
                  Click Here
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">
                <span className="text-green-500 font-bold">Notification</span>
              </td>
              <td className="px-4 py-2">
                <a
                  title="Arunachal Pradesh PSC"
                  href="https://img.freejobalert.com/uploads/2024/08/Notification-Arunachal-Pradesh-PSC-Lecturer-DIET-Post.pdf"
                  className="text-blue-500 font-bold hover:underline"
                >
                  Click Here
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">
                <span className="text-green-500 font-bold">Official Website</span>
              </td>
              <td className="px-4 py-2">
                <a
                  title="Arunachal Pradesh PSC"
                  href="https://appsc.gov.in/Index/institute_home/ins/RECINS001"
                  className="text-blue-500 font-bold hover:underline"
                >
                  Click Here
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* General Duty Medical Officer Post Details */}
      <div id="medical-officer" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">
          General Duty Medical Officer Post Details
        </h2>
        <p className="mb-2">
          <span className="text-green-500 font-bold">Name of the Post:</span>{' '}
          Arunachal Pradesh PSC General Duty Medical Officer 2024 Online Form
        </p>
        <p className="mb-2">
          <span className="text-green-500 font-bold">Post Date:</span>{' '}
          <span className="text-gray-700">14-08-2024</span>
        </p>
        <p className="mb-2">
          <span className="text-green-500 font-bold">Latest Update:</span>{' '}
          31-08-2024
        </p>
        <p className="mb-2">
          <span className="text-green-500 font-bold">Total Vacancy:</span>{' '}
          <span className="text-gray-700">55</span>
          <span className="text-red-500">-1=54</span>
        </p>
        <p className="mb-4">
          <span className="text-red-500 font-bold">Brief Information:</span>{' '}
          Arunachal Pradesh Public Service Commission (APPSC) has published a
          notification for the recruitment of General Duty Medical Officer
          Vacancy. Those Candidates who are interested in the vacancy details &
          completed all eligibility criteria can read the Notification & Apply
          Online.
        </p>

        {/* General Duty Medical Officer Table */}
        <table className="table-auto w-full text-center border-2 border-gray-400">
          <thead>
            <tr>
              <th className="px-4 py-2" colSpan="3">
                <span className="text-red-500 font-bold">
                  Arunachal Pradesh Public Service Commission (APPSC)
                </span>
              </th>
            </tr>
            <tr>
              <th className="px-4 py-2" colSpan="3">
                <span className="text-blue-500 font-bold">
                  Advt No. APPSC-12/15/2024
                </span>
              </th>
            </tr>
            <tr>
              <th className="px-4 py-2" colSpan="3">
                <span className="text-green-500 font-bold">
                  General Duty Medical Officer Vacancy 2024
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2" colSpan="3">
                <span className="text-red-500 font-bold">Application Fee</span>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">
                For Others:
                <strong className="text-gray-700"> Rs.200/-</strong>
              </td>
              <td className="px-4 py-2">
                For APST:
                <strong className="text-gray-700"> 150/-</strong>
              </td>
              <td className="px-4 py-2">
                Payment Mode:
                <strong className="text-gray-700"> Through Online.</strong>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2" colSpan="3">
                <span className="text-red-500 font-bold">Important Dates</span>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2" colSpan="3">
                Starting Date for Apply Online:
                <strong className="text-gray-700">
                  09-08-2024 (from 11:00 hrs)
                </strong>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2" colSpan="3">
                Last Date For Apply Online:
                <strong className="text-gray-700">
                  01-09-2024 (before 17:00 hrs)
                </strong>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2" colSpan="3">
                Tentative date of written examination:
                <strong className="text-gray-700"> 15-09-2024</strong>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2" colSpan="3">
                <span className="text-red-500 font-bold">
                  Age Limit (as on 29-08-2024)
                </span>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2" colSpan="3">
                Minimum Age Limit:
                <strong className="text-gray-700">
                  Not exceeding 35 Years
                </strong>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2" colSpan="3">
                Age relaxation is Applicable as per rules.
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2" colSpan="3">
                <span className="text-red-500 font-bold">Qualification</span>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2" colSpan="3">
                Candidate Should Possess Medical qualification (Concerned
                Speciality)
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2" colSpan="3">
                <span className="text-red-500 font-bold">
                  Vacancy Details
                </span>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">
                <span className="text-blue-500 font-bold">Sl No</span>
              </td>
              <td className="px-4 py-2">
                <span className="text-blue-500 font-bold">Post Name</span>
              </td>
              <td className="px-4 py-2">
                <span className="text-blue-500 font-bold">Total</span>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">1</td>
              <td className="px-4 py-2">GDMO (Allopathy)</td>
              <td className="px-4 py-2">40</td>
            </tr>
            <tr>
              <td className="px-4 py-2">2</td>
              <td className="px-4 py-2">GDMO (Dental Surgeon)</td>
              <td className="px-4 py-2">08</td>
            </tr>
            <tr>
              <td className="px-4 py-2">3</td>
              <td className="px-4 py-2">GDMO (Homeopathy)</td>
              <td className="px-4 py-2">06</td>
            </tr>
            <tr>
              <td className="px-4 py-2" colSpan="3">
                <strong>For More Details Refer the Notification</strong>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2" colSpan="3">
                <span className="text-blue-500 font-bold">
                  Interested Candidates Can Read the Full Notification Before
                  Apply Online
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}