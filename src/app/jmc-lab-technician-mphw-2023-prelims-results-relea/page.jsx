export default function RecruitmentInfo() {
  // Displays recruitment information for Jamnagar Municipal Corporation (JMC) positions. 
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Jamnagar Municipal Corporation (JMC) Recruitment</h1>
      {/* First Recruitment */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2" id="Additional-Asst-Engineer">
          Additional Assistant Engineer & Jr Clerk Grade Computer Operator Vacancy
          2024
        </h2>
        <p className="mb-2">
          <span className="font-bold">Name of the Post:</span> JMC Additional
          Asst Engineer & Jr Clerk Grade Computer Operator Vacancy Online Form
          2024
        </p>
        <p className="mb-2">
          <span className="font-bold">Post Date:</span> 02-07-2024
        </p>
        <p className="mb-2">
          <span className="font-bold">Total Vacancy:</span> 144
        </p>
        <p className="mb-4">
          <span className="font-bold text-red-500">Brief Information:</span>
          Jamnagar Municipal Corporation (JMC) has given an employment
          Notification for the recruitment of Additional Assistant Engineer &
          Jr Clerk Grade Computer Operator Vacancy. Eligible Candidates who are
          interested in the Vacancy details & completed all eligibility criteria
          can read the notification & Apply Online.
        </p>

        <table className="w-full border-collapse border border-gray-300 mb-4">
          <thead>
            <tr>
              <th className="p-2 border border-gray-300 text-center">
                <span className="text-blue-500 font-bold">Advt No.</span>
              </th>
              <th className="p-2 border border-gray-300 text-center">
                <span className="text-blue-500 font-bold">Post Name</span>
              </th>
              <th className="p-2 border border-gray-300 text-center">
                <span className="text-blue-500 font-bold">Total</span>
              </th>
              <th className="p-2 border border-gray-300 text-center">
                <span className="text-blue-500 font-bold">Qualification</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border border-gray-300 text-center">
                JMC/01/2024-25
              </td>
              <td className="p-2 border border-gray-300 text-center">
                Additional Assistant Engineer (Civil)
              </td>
              <td className="p-2 border border-gray-300 text-center">70</td>
              <td
                className="p-2 border border-gray-300 text-center"
                rowSpan="3"
              >
                Diploma or Degree (Civil/ Mechanical/ Electrical)
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300 text-center">
                JMC/02/2024-25
              </td>
              <td className="p-2 border border-gray-300 text-center">
                Additional Assistant Engineer (Mechanical)
              </td>
              <td className="p-2 border border-gray-300 text-center">02</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300 text-center">
                JMC/03/2024-25
              </td>
              <td className="p-2 border border-gray-300 text-center">
                Additional Assistant Engineer (Electrical)
              </td>
              <td className="p-2 border border-gray-300 text-center">03</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300 text-center">
                JMC/04/2024-25
              </td>
              <td className="p-2 border border-gray-300 text-center">
                Junior Clerk Cum Computer Operator
              </td>
              <td className="p-2 border border-gray-300 text-center">67</td>
              <td className="p-2 border border-gray-300 text-center">
                Any Degree
              </td>
            </tr>
          </tbody>
        </table>
        <p className="mb-4">
          <span className="text-blue-500 font-bold">
            Interested Candidates Can Read the Full Notification Before Apply
          </span>
        </p>
        {/* Application Fee */}
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2 text-red-500">
            Application Fee
          </h3>
          <ul className="list-disc pl-5">
            <li>
              Fee for male candidates belonging to general, S.S.P.W and
              economically weaker section: Rs. 500/-
            </li>
            <li>
              Fee for Female candidates, Scheduled Castes, Scheduled Tribes,
              Ex-Servicemen, (other than Handicapped) Candidates: Rs. 250/-
            </li>
            <li>
              Fee for Disabled category candidates: Nil
            </li>
            <li>Payment Mode: Through Online</li>
          </ul>
        </div>
        {/* Important Dates */}
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2 text-red-500">
            Important Dates
          </h3>
          <ul className="list-disc pl-5">
            <li>
              Starting Date for Apply Online & Payment of Fee: 01-07-2024 (12:00
              noon)
            </li>
            <li>
              Last Date for Apply Online: 21-07-2024 till 23:59 hrs
            </li>
            <li>
              Last Date for Payment of Fee: 22-07-2024 till 23:59 hrs
            </li>
          </ul>
        </div>
        {/* Age Limit */}
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2 text-red-500">Age limit</h3>
          <ul className="list-disc pl-5">
            <li>Minimum Age limit: 18 Years</li>
            <li>Maximum Age limit: 35 Years</li>
            <li>Age Relaxation is Applicable as Per Rules.</li>
          </ul>
        </div>
        {/* Important Links */}
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2 text-red-500">
            Important Links
          </h3>
          <ul className="list-disc pl-5">
            <li>
              <span className="font-bold text-blue-500">
                Apply Online:
              </span>{' '}
              <a
                className="text-blue-500 underline"
                href="https://ojas.gujarat.gov.in/AdvtList.aspx?type=lCxUjNjnTp8="
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here
              </a>
            </li>
            <li>
              <span className="font-bold text-blue-500">
                Notification:
              </span>{' '}
              <a
                className="text-blue-500 underline"
                href="https://img.freejobalert.com/uploads/2024/07/Notification-JMC-Additional-Asst-Engineer-Jr-Clerk-Grade-Computer-Operator-Posts.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here
              </a>
            </li>
            <li>
              <span className="font-bold text-blue-500">
                Official Website:
              </span>{' '}
              <a
                className="text-blue-500 underline"
                href="https://www.mcjamnagar.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Second Recruitment */}
      <div>
        <h2 className="text-2xl font-bold mb-2" id="Staff-Nurse">
          JMC Lab Technician & MPHW 2023 Prelims Result Released
        </h2>
        <p className="mb-2">
          <span className="font-bold">Name of the Post:</span> JMC Lab
          Technician & MPHW 2023 Prelims Result Released
        </p>
        <p className="mb-2">
          <span className="font-bold">Post Date:</span> 21-11-2023
        </p>
        <p className="mb-2">
          <span className="font-bold">Latest Update:</span> 18-09-2024
        </p>
        <p className="mb-4">
          <span className="font-bold text-red-500">Total Vacancy:</span> 101
        </p>
        <p className="mb-4">
          <span className="font-bold text-red-500">Brief Information:</span>
          Jamnagar Municipal Corporation has published Notification for the
          recruitment of Staff Nurse, Lab Technician & Other Vacancy. Eligible
          Candidates who are interested in the Vacancy details & completed all
          eligibility criteria can read the notification & Apply Online.
        </p>
        <table className="w-full border-collapse border border-gray-300 mb-4">
          <thead>
            <tr>
              <th className="p-2 border border-gray-300 text-center">
                <span className="text-blue-500 font-bold">Sl. No</span>
              </th>
              <th className="p-2 border border-gray-300 text-center">
                <span className="text-blue-500 font-bold">Post Name</span>
              </th>
              <th className="p-2 border border-gray-300 text-center">
                <span className="text-blue-500 font-bold">Total</span>
              </th>
              <th className="p-2 border border-gray-300 text-center">
                <span className="text-blue-500 font-bold">Age Limit</span>
              </th>
              <th className="p-2 border border-gray-300 text-center">
                <span className="text-blue-500 font-bold">Qualification</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border border-gray-300 text-center">1.</td>
              <td className="p-2 border border-gray-300 text-center">
                Staff Nurse (UPHC)
              </td>
              <td className="p-2 border border-gray-300 text-center">20</td>
              <td className="p-2 border border-gray-300 text-center">
                40 Years
              </td>
              <td className="p-2 border border-gray-300 text-center">
                Diploma (Nursing), B.Sc (Nursing)
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300 text-center">2.</td>
              <td className="p-2 border border-gray-300 text-center">
                X-Ray Technician (UPHC)
              </td>
              <td className="p-2 border border-gray-300 text-center">03</td>
              <td className="p-2 border border-gray-300 text-center">
                36 Years
              </td>
              <td className="p-2 border border-gray-300 text-center">
                12th Class
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300 text-center">3</td>
              <td className="p-2 border border-gray-300 text-center">
                Laboratory Technician (UPHC)
              </td>
              <td className="p-2 border border-gray-300 text-center">03</td>
              <td className="p-2 border border-gray-300 text-center">
                36 Years
              </td>
              <td className="p-2 border border-gray-300 text-center">
                Diploma, Degree (Relevant Disciplines)
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300 text-center">4</td>
              <td className="p-2 border border-gray-300 text-center">
                Laboratory Technician (UCHC)
              </td>
              <td className="p-2 border border-gray-300 text-center">03</td>
              <td className="p-2 border border-gray-300 text-center">
                36 Years
              </td>
              <td className="p-2 border border-gray-300 text-center">
                Diploma, Degree (Relevant Disciplines)
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300 text-center">5</td>
              <td className="p-2 border border-gray-300 text-center">
                Pharmacist (UPHC)
              </td>
              <td className="p-2 border border-gray-300 text-center">02</td>
              <td className="p-2 border border-gray-300 text-center">
                35 Years
              </td>
              <td className="p-2 border border-gray-300 text-center">
                Degree (Pharmacy)
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300 text-center">6</td>
              <td className="p-2 border border-gray-300 text-center">
                Pharmacist (UCHC)
              </td>
              <td className="p-2 border border-gray-300 text-center">03</td>
              <td className="p-2 border border-gray-300 text-center">
                35 Years
              </td>
              <td className="p-2 border border-gray-300 text-center">
                Degree (Pharmacy)
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300 text-center">7</td>
              <td className="p-2 border border-gray-300 text-center">
                Female Health Worker (UPHC)
              </td>
              <td className="p-2 border border-gray-300 text-center">37</td>
              <td className="p-2 border border-gray-300 text-center">
                40 Years
              </td>
              <td className="p-2 border border-gray-300 text-center">
                Higher Secondary
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300 text-center">8</td>
              <td className="p-2 border border-gray-300 text-center">
                Multi-Purpose Health Worker (UPHC)
              </td>
              <td className="p-2 border border-gray-300 text-center">30</td>
              <td className="p-2 border border-gray-300 text-center">
                33 Years
              </td>
              <td className="p-2 border border-gray-300 text-center">
                Higher Secondary
              </td>
            </tr>
          </tbody>
        </table>
        <p className="mb-4">
          <span className="text-blue-500 font-bold">
            Interested Candidates Can Read the Full Notification Before Apply
          </span>
        </p>
        {/* Application Fee */}
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2 text-red-500">
            Application Fee
          </h3>
          <ul className="list-disc pl-5">
            <li>For Others: Rs. 500/-</li>
            <li>For SC/ ST/ Female Candidates: Rs. 250/-</li>
            <li>Payment Mode: Through Online</li>
            <li>For more fee details refer the notification</li>
          </ul>
        </div>
        {/* Important Dates */}
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2 text-red-500">
            Important Dates
          </h3>
          <ul className="list-disc pl-5">
            <li>
              Starting Date for Apply Online: 21-11-2023
            </li>
            <li>
              Last Date for Apply Online: 05-12-2023
            </li>
          </ul>
        </div>
        {/* Important Links */}
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2 text-red-500">
            Important Links
          </h3>
          <ul className="list-disc pl-5">
            <li>
              <span className="font-bold text-blue-500">
                Laboratory Technician & Multi-Purpose Health Worker (18-09-2024):
              </span>{' '}
              <a
                className="text-blue-500 underline"
                href="https://www.mcjamnagar.com/information/recruitment.aspx"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here
              </a>
            </li>
            <li>
              <span className="font-bold text-blue-500">
                Female Health Worker Prelims Final Answer Key (17-09-2024):
              </span>{' '}
              <a
                className="text-blue-500 underline"
                href="https://img.freejobalert.com/uploads/2024/09/Prelims-Final-Answer-Key-JMC-Jamnagar-Female-Health-Worker-Posts.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here
              </a>
            </li>
            <li>
              <span className="font-bold text-blue-500">
                Staff Nurse Prelims Final Answer Key (17-09-2024):
              </span>{' '}
              <a
                className="text-blue-500 underline"
                href="https://img.freejobalert.com/uploads/2024/09/Prelims-Final-Answer-Key-JMC-Jamnagar-Staff-Nurse-Posts.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here
              </a>
            </li>
            <li>
              <span className="font-bold text-blue-500">
                Prelims Call Letter (29-07-2024):
              </span>{' '}
              <a
                className="text-blue-500 underline"
                href="https://ojas.gujarat.gov.in/PrintApplForm.aspx?opt=OTMUam2FvAo="
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here
              </a>
            </li>
            <li>
              <span className="font-bold text-blue-500">
                Apply Online (21-11-2023):
              </span>{' '}
              <a
                className="text-blue-500 underline"
                href="https://ojas.gujarat.gov.in/AdvtList.aspx?type=lCxUjNjnTp8="
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here
              </a>
            </li>
            <li>
              <span className="font-bold text-blue-500">
                Notification (21-11-2023):
              </span>{' '}
              <a
                className="text-blue-500 underline"
                href="https://ojas.gujarat.gov.in/ojas1/AdvtDetailFiles/JMC_202324_1.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here
              </a>
            </li>
            <li>
              <span className="font-bold text-blue-500">
                Official Website:
              </span>{' '}
              <a
                className="text-blue-500 underline"
                href="https://www.mcjamnagar.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}