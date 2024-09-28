export default function RecruitmentInformation() {
  // This component displays recruitment information for various posts in Arunachal Pradesh Public Service Commission (APPSC).
  // It includes details like post name, application fee, important dates, vacancy details, and links to relevant resources.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Arunachal Pradesh Public Service Commission Recruitment</h1>

      {/* Lecturer (DIET) */}
      <h2 className="text-2xl font-bold mb-2" id="Lecturer-DIET">
        Lecturer (DIET) 2024
      </h2>
      <p className="mb-2">
        <span className="font-bold">Post Date:</span> 21-08-2024
      </p>
      <p className="mb-2">
        <span className="font-bold">Latest Update:</span> 28-09-2024
      </p>
      <p className="mb-2">
        <span className="font-bold">Total Vacancy:</span> 25
      </p>
      <p className="mb-4">
        <span className="font-bold">Brief Information:</span> Arunachal Pradesh
        Public Service Commission (Arunachal Pradesh PSC) has announced
        notification for the recruitment of Lecturer (DIET). Those Candidates
        who are interested in the vacancy details &amp; completed all eligibility
        criteria can read the Notification &amp; Apply Online.
      </p>
      <table className="w-full border-collapse border border-gray-400 mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-left font-bold">Post Name</th>
            <th className="px-4 py-2 text-left font-bold">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Lecturer (DIET)</td>
            <td className="px-4 py-2">25</td>
          </tr>
        </tbody>
      </table>
      <table className="w-full border-collapse border border-gray-400 mb-4">
        <tbody>
          <tr>
            <td className="px-4 py-2" colSpan={2}>
              <p className="text-center font-bold text-red-500">
                Arunachal Pradesh Public Service Commission
              </p>
              <p className="text-center font-bold text-green-500">
                Lecturer Vacancy 2024
              </p>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2" colSpan={2}>
              <p className="text-center font-bold text-red-500">
                Application Fee
              </p>
              <ul>
                <li className="mb-1">
                  Fee for APST candidates: <strong>Rs. 150/-</strong>
                </li>
                <li className="mb-1">
                  Fee for All Other Applicants: <strong>Rs. 200/-</strong>
                </li>
                <li>Payment mode: <strong>Through Online</strong></li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2" colSpan={2}>
              <p className="text-center font-bold text-red-500">
                Important Dates
              </p>
              <ul>
                <li className="mb-1">
                  Last Date to Apply Online: <strong>04-09-2024</strong>
                </li>
                <li>Date of Exam: <strong>29-09-2024</strong></li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2" colSpan={2}>
              <p className="text-center font-bold text-red-500">
                Age Limit (as on 04-09-2024)
              </p>
              <ul>
                <li className="mb-1">
                  Maximum Age: <strong>35 years</strong>
                </li>
                <li>Age relaxation is admissible as per rules.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2" colSpan={2}>
              <p className="text-center font-bold text-red-500">
                Qualification
              </p>
              <ul>
                <li>Candidates Should Possess D.EI Ed/ PG/ M.Ed/ MA (Relevant Subjects).</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2" colSpan={2}>
              <p className="text-center font-bold text-red-500">
                Important Links
              </p>
              <ul>
                <li className="mb-1">
                  <span className="font-bold text-green-500">
                    Syllabus (28-09-2024)
                  </span>
                  <a
                    href="https://img.freejobalert.com/uploads/2024/09/Syllabus-Arunachal-Pradesh-PSC-Lecturer-Posts.pdf"
                    target="_blank"
                    rel="nofollow"
                    className="text-blue-500 underline"
                  >
                    Click Here
                  </a>
                </li>
                <li className="mb-1">
                  <span className="font-bold text-green-500">
                    Exam Date (14-09-2024)
                  </span>
                  <a
                    href="https://img.freejobalert.com/uploads/2024/09/Arunachal-Pradesh-PSC-Exam-Calendar-2024.pdf"
                    target="_blank"
                    rel="nofollow"
                    className="text-blue-500 underline"
                  >
                    Click Here
                  </a>
                </li>
                <li>
                  <span className="font-bold text-green-500">
                    Apply Online
                  </span>
                  <a
                    title="Arunachal Pradesh PSC"
                    href="https://appsc.gov.in/Index/institute_home/ins/RECINS001"
                    target="_blank"
                    rel="nofollow"
                    className="text-blue-500 underline"
                  >
                    Click Here
                  </a>
                </li>
                <li>
                  <span className="font-bold text-green-500">
                    Notification
                  </span>
                  <a
                    title="Arunachal Pradesh PSC"
                    href="https://img.freejobalert.com/uploads/2024/08/Notification-Arunachal-Pradesh-PSC-Lecturer-DIET-Post.pdf"
                    target="_blank"
                    rel="nofollow"
                    className="text-blue-500 underline"
                  >
                    Click Here
                  </a>
                </li>
                <li>
                  <span className="font-bold text-green-500">
                    Official Website
                  </span>
                  <a
                    title="Arunachal Pradesh PSC"
                    href="https://appsc.gov.in/Index/institute_home/ins/RECINS001"
                    target="_blank"
                    rel="nofollow"
                    className="text-blue-500 underline"
                  >
                    Click Here
                  </a>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>

      {/* General Duty Medical Officer */}
      <h2 className="text-2xl font-bold mb-2" id="medical-officer">
        General Duty Medical Officer 2024
      </h2>
      <p className="mb-2">
        <span className="font-bold">Post Date:</span> 14-08-2024
      </p>
      <p className="mb-2">
        <span className="font-bold">Latest Update:</span> 29-09-2024
      </p>
      <p className="mb-2">
        <span className="font-bold">Total Vacancy:</span> 54
      </p>
      <p className="mb-4">
        <span className="font-bold">Brief Information:</span> Arunachal Pradesh
        Public Service Commission (APPSC) has published a notification for the
        recruitment of General Duty Medical Officer Vacancy. Those Candidates
        who are interested in the vacancy details &amp; completed all eligibility
        criteria can read the Notification &amp; Apply Online.
      </p>
      <table className="w-full border-collapse border border-gray-400 mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-left font-bold">Sl No</th>
            <th className="px-4 py-2 text-left font-bold">Post Name</th>
            <th className="px-4 py-2 text-left font-bold">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">1</td>
            <td className="px-4 py-2">GDMO (Allopathy)</td>
            <td className="px-4 py-2">40</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">2</td>
            <td className="px-4 py-2">GDMO (Dental Surgeon)</td>
            <td className="px-4 py-2">08</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">3</td>
            <td className="px-4 py-2">GDMO (Homeopathy)</td>
            <td className="px-4 py-2">06</td>
          </tr>
        </tbody>
      </table>
      <table className="w-full border-collapse border border-gray-400 mb-4">
        <tbody>
          <tr>
            <td className="px-4 py-2" colSpan={3}>
              <p className="text-center font-bold text-red-500">
                Arunachal Pradesh Public Service Commission (APPSC)
              </p>
              <p className="text-center font-bold text-blue-500">
                Advt No. APPSC-12/15/2024
              </p>
              <p className="text-center font-bold text-green-500">
                General Duty Medical Officer Vacancy 2024
              </p>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2" colSpan={3}>
              <p className="text-center font-bold text-red-500">
                Application Fee
              </p>
              <ul>
                <li className="mb-1">For Others: <strong>Rs.200/-</strong></li>
                <li className="mb-1">For APST : <strong>150/-</strong></li>
                <li>Payment Mode : <strong>Through Online</strong></li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2" colSpan={3}>
              <p className="text-center font-bold text-red-500">
                Important Dates
              </p>
              <ul>
                <li className="mb-1">
                  Starting Date for Apply Online : <strong>09-08-2024</strong>
                </li>
                <li className="mb-1">
                  Last Date For Apply Online: <strong>01-09-2024</strong>
                </li>
                <li className="mb-1">
                  Tentative date of written examination: <strong>15-09-2024</strong>
                </li>
                <li>
                  Date of Interview Viva-voce Date Announced : <strong>07-10-2024 to 09-10-2024</strong>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2" colSpan={3}>
              <p className="text-center font-bold text-red-500">
                Age Limit (as on 29-08-2024)
              </p>
              <ul>
                <li className="mb-1">
                  Minimum Age Limit : <strong>Not exceeding 35 Years</strong>
                </li>
                <li>Age relaxation is Applicable as per rules.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2" colSpan={3}>
              <p className="text-center font-bold text-red-500">
                Qualification
              </p>
              <ul>
                <li>
                  Candidate Should Possess Medical qualification (Concerned
                  Speciality)
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2" colSpan={3}>
              <p className="text-center font-bold text-red-500">
                Important Links
              </p>
              <ul>
                <li className="mb-1">
                  <span className="font-bold text-green-500">
                    Interview Viva-voce Date (29-09-2024)
                  </span>
                  <a
                    href="https://img.freejobalert.com/uploads/2024/09/Interview-Schedule-Arunachal-Pradesh-PSC-General-Duty-Medical-Officer-2024.pdf"
                    target="_blank"
                    rel="nofollow"
                    className="text-blue-500 underline"
                  >
                    Click Here
                  </a>
                </li>
                <li className="mb-1">
                  <span className="font-bold text-green-500">
                    Notice (20-09-2024)
                  </span>
                  <a
                    href="https://img.freejobalert.com/uploads/2024/09/Notice-Arunachal-Pradesh-PSC-General-Duty-Medical-Officer-Post.pdf"
                    target="_blank"
                    rel="nofollow"
                    className="text-blue-500 underline"
                  >
                    Click Here
                  </a>
                </li>
                <li className="mb-1">
                  <span className="font-bold text-green-500">
                    Written Exam Result (17-09-2024)
                  </span>
                  <a
                    href="https://img.freejobalert.com/uploads/2024/09/Written-Exam-Result-Arunachal-Pradesh-PSC-General-Duty-Medical-Officer-2024.pdf"
                    target="_blank"
                    rel="nofollow"
                    className="text-blue-500 underline"
                  >
                    Click Here
                  </a>
                </li>
                <li className="mb-1">
                  <span className="font-bold text-green-500">
                    Candidates List for Written Exam (13-09-2024)
                  </span>
                  <a
                    href="https://img.freejobalert.com/uploads/2024/09/Candidates-List-Arunachal-Pradesh-PSC-General-Duty-Medical-Officer-2024.pdf"
                    target="_blank"
                    rel="nofollow"
                    className="text-blue-500 underline"
                  >
                    Link
                  </a>
                  |
                  <a
                    href="https://img.freejobalert.com/uploads/2024/09/Candidates-List-Arunachal-Pradesh-PSC-General-Duty-Medical-Officer-Posts.pdf"
                    target="_blank"
                    rel="nofollow"
                    className="text-blue-500 underline"
                  >
                    Link 2
                  </a>
                </li>
                <li className="mb-1">
                  <span className="font-bold text-green-500">
                    Written Exam Admit Card (12-09-2024)
                  </span>
                  <a
                    title="Arunachal Pradesh PSC"
                    href="https://appsc.gov.in/Index/institute_home/ins/RECINS001#"
                    target="_blank"
                    rel="nofollow"
                    className="text-blue-500 underline"
                  >
                    Click Here
                  </a>
                </li>
                <li className="mb-1">
                  <span className="font-bold text-green-500">
                    Last Date Extended (31-08-2024)
                  </span>
                  <a
                    href="https://appsc.gov.in/Index/institute_home/ins/RECINS001"
                    target="_blank"
                    rel="nofollow"
                    className="text-blue-500 underline"
                  >
                    Click Here
                  </a>
                </li>
                <li className="mb-1">
                  <span className="font-bold text-green-500">
                    Vacancy Notice (29-08-2024)
                  </span>
                  <a
                    href="https://img.freejobalert.com/uploads/2024/08/Notice-APPSC-General-Duty-Medical-Officer-Posts.pdf"
                    target="_blank"
                    rel="nofollow"
                    className="text-blue-500 underline"
                  >
                    Click Here
                  </a>
                </li>
                <li>
                  <span className="font-bold text-green-500">
                    Apply Online
                  </span>
                  <a
                    href="https://appsc.gov.in/Index/institute_home/ins/RECINS001"
                    target="_blank"
                    rel="nofollow"
                    className="text-blue-500 underline"
                  >
                    Click Here
                  </a>
                </li>
                <li>
                  <span className="font-bold text-green-500">
                    Notification
                  </span>
                  <a
                    href="https://img.freejobalert.com/uploads/2024/08/Notification-APPSC-General-Duty-Medical-Officer-posts.pdf"
                    target="_blank"
                    rel="nofollow"
                    className="text-blue-500 underline"
                  >
                    Click Here
                  </a>
                </li>
                <li>
                  <span className="font-bold text-green-500">
                    Official Website
                  </span>
                  <a
                    title="APPSC"
                    href="https://appsc.gov.in/Index/institute_home/ins/RECINS001"
                    target="_blank"
                    rel="nofollow"
                    className="text-blue-500 underline"
                  >
                    Click Here
                  </a>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Junior Specialist */}
      <h2 className="text-2xl font-bold mb-2" id="junior-specialist">
        Junior Specialist 2024
      </h2>
      <p className="mb-2">
        <span className="font-bold">Post Date:</span> 01-09-2024
      </p>
      <p className="mb-2">
        <span className="font-bold">Latest Update:</span> 29-09-2024
      </p>
      <p className="mb-2">
        <span className="font-bold">Total Vacancy:</span> 30
      </p>
      <p className="mb-4">
        <span className="font-bold">Brief Information:</span> The Arunachal
        Pradesh Public Service Commission (APPSC) has released an
        announcement for the recruitment of Junior Specialist vacancies.
        Candidates who are interested in the vacancy details and fulfill all
        eligibility requirements can review the Notification and Apply Online.
      </p>
      <table className="w-full border-collapse border border-gray-400 mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-left font-bold">Post Name</th>
            <th className="px-4 py-2 text-left font-bold">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Junior Specialist (Agriculture)</td>
            <td className="px-4 py-2">10</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Junior Specialist (Horticulture)</td>
            <td className="px-4 py-2">10</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-4 py-2">Junior Specialist (Animal Husbandry)</td>
            <td className="px-4 py-2">10</td>
          </tr>
        </tbody>
      </table>
      <table className="w-full border-collapse border border-gray-400 mb-4">
        <tbody>
          <tr>
            <td className="px-4 py-2" colSpan={2}>
              <p className="text-center font-bold text-red-500">
                Arunachal Pradesh Public Service Commission
              </p>
              <p className="text-center font-bold text-green-500">
                Junior Specialist Vacancy 2024
              </p>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2" colSpan={2}>
              <p className="text-center font-bold text-red-500">
                Application Fee
              </p>
              <ul>
                <li className="mb-1">
                  Fee for APST candidates: <strong>Rs. 150/-</strong>
                </li>
                <li className="mb-1">
                  Fee for All Other Applicants: <strong>Rs. 200/-</strong>
                </li>
                <li>Payment mode: <strong>Through Online</strong></li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2" colSpan={2}>
              <p className="text-center font-bold text-red-500">
                Important Dates
              </p>
              <ul>
                <li className="mb-1">
                  Last Date to Apply Online: <strong>10-09-2024</strong>
                </li>
                <li>Date of Exam: <strong>15-10-2024</strong></li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2" colSpan={2}>
              <p className="text-center font-bold text-red-500">
                Age Limit (as on 10-09-2024)
              </p>
              <ul>
                <li className="mb-1">
                  Maximum Age: <strong>35 years</strong>
                </li>
                <li>Age relaxation is admissible as per rules.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2" colSpan={2}>
              <p className="text-center font-bold text-red-500">
                Qualification
              </p>
              <ul>
                <li>
                  Candidates should possess a Master's Degree in the respective
                  subject (Agriculture, Horticulture, Animal Husbandry).
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2" colSpan={2}>
              <p className="text-center font-bold text-red-500">
                Important Links
              </p>
              <ul>
                <li className="mb-1">
                  <span className="font-bold text-green-500">
                    Syllabus (20-09-2024)
                  </span>
                  <a
                    href="https://img.freejobalert.com/uploads/2024/09/Syllabus-Arunachal-Pradesh-PSC-Junior-Specialist-Posts.pdf"
                    target="_blank"
                    rel="nofollow"
                    className="text-blue-500 underline"
                  >
                    Click Here
                  </a>
                </li>
                <li className="mb-1">
                  <span className="font-bold text-green-500">
                    Admit Card (10-10-2024)
                  </span>
                  <a
                    href="https://appsc.gov.in/Index/institute_home/ins/RECINS001#"
                    target="_blank"
                    rel="nofollow"
                    className="text-blue-500 underline"
                  >
                    Click Here
                  </a>
                </li>
                <li>
                  <span className="font-bold text-green-500">
                    Apply Online
                  </span>
                  <a
                    href="https://appsc.gov.in/Index/institute_home/ins/RECINS001"
                    target="_blank"
                    rel="nofollow"
                    className="text-blue-500 underline"
                  >
                    Click Here
                  </a>
                </li>
                <li>
                  <span className="font-bold text-green-500">
                    Notification
                  </span>
                  <a
                    href="https://img.freejobalert.com/uploads/2024/09/Notification-Arunachal-Pradesh-PSC-Junior-Specialist-Post.pdf"
                    target="_blank"
                    rel="nofollow"
                    className="text-blue-500 underline"
                  >
                    Click Here
                  </a>
                </li>
                <li>
                  <span className="font-bold text-green-500">
                    Official Website
                  </span>
                  <a
                    title="Arunachal Pradesh PSC"
                    href="https://appsc.gov.in/Index/institute_home/ins/RECINS001"
                    target="_blank"
                    rel="nofollow"
                    className="text-blue-500 underline"
                  >
                    Click Here
                  </a>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}