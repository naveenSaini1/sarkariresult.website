export default function RecruitmentInformation() {
  // This component displays recruitment information for various positions advertised by the Tripura Public Service Commission (TPSC). 
  // It includes details like post name, application fee, important dates, qualification, and vacancy details.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Tripura Public Service Commission (TPSC) Recruitment</h1>

      {/* General Duty Medical Officer */}
      <h2 className="text-2xl font-bold mb-2" id="General-Duty-Medical-Officer">TPSC General Duty Medical Officer 2024</h2>
      <p className="mb-2">
        <span className="font-bold">Post Date: </span>
        <span>05-09-2024</span>
      </p>
      <p className="mb-2">
        <span className="font-bold">Latest Update: </span>
        <span>14-09-2024</span>
      </p>
      <p className="mb-2">
        <span className="font-bold">Total Vacancy: </span>
        <span>224</span>
      </p>
      <p className="mb-4">
        <span className="font-bold">Brief Information: </span>
        Tripura Public Service Commission (TPSC) invites applications for the recruitment of General Duty Medical Officer Vacancy.
        Candidates interested in the vacancy details and meeting all eligibility criteria can read the Notification and Apply
        Online.
      </p>
      <table className="w-full border-2 border-gray-300 mb-4">
        <tbody>
          <tr>
            <td colSpan={2} className="p-2 text-center font-bold">
              <span className="text-red-500">Tripura Public Service Commission (TPSC)</span>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="p-2 text-center font-bold">
              <span className="text-purple-500">Advt No. 07/2024</span>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="p-2 text-center font-bold">
              <span className="text-green-500">General Duty Medical Officer Vacancy 2024</span>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="p-2 text-center font-bold">
              <a
                className="text-blue-500 underline"
                href="https://www.freejobalert.com"
                target="_blank"
                rel="noopener"
              >
                
              </a>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="p-2 text-center font-bold">
              <span className="text-purple-500">Application Fee</span>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="p-2">
              <ul>
                <li>For General Category Candidates: <span className="font-bold">Rs. 400/-</span></li>
                <li>For SC/ ST/BPL Card Holders/ Physically Handicapped Candidates: <span className="font-bold">Rs. 350/-</span></li>
                <li>Payment Mode: <span className="font-bold">Through Online</span></li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="p-2 text-center font-bold">
              <span className="text-red-500">Important Dates</span>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="p-2">
              <ul>
                <li>Starting Date for Apply Online: <span className="font-bold">10-09-2024</span></li>
                <li>Last Date to Apply Online: <span className="font-bold">19-10-2024</span></li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="p-2 text-center font-bold">
              <span className="text-red-500">Age Limit (as on 19-10-2024)</span>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="p-2">
              <ul>
                <li>Maximum Age Limit: <span className="font-bold">40 Years</span></li>
                <li>Age relaxation is applicable as per rules.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="p-2 text-center font-bold">
              <span className="text-red-500">Qualification</span>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="p-2">
              <ul>
                <li>Candidates Should Possess Medical Qualification.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="p-2 text-center font-bold">
              <span className="text-red-500">Vacancy Details</span>
            </td>
          </tr>
          <tr>
            <td className="p-2 text-center font-bold">
              <span className="text-purple-500">Post Name</span>
            </td>
            <td className="p-2 text-center font-bold">
              <span className="text-purple-500">Total</span>
            </td>
          </tr>
          <tr>
            <td className="p-2 text-center">General Duty Medical Officer</td>
            <td className="p-2 text-center">224</td>
          </tr>
          <tr>
            <td colSpan={2} className="p-2 text-center font-bold">
              <span className="text-blue-500">Interested Candidates Can Read the Full Notification Before Apply Online</span>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="p-2 text-center font-bold">
              <span className="text-red-500">Important Links</span>
            </td>
          </tr>
          <tr>
            <td className="p-2 text-center">
              <span className="text-green-500">Apply Online (14-09-2024)</span>
            </td>
            <td className="p-2 text-center">
              <a
                className="text-blue-500 underline"
                href="https://tpsconline.in/registration/basic-details?guid=f46117a4-6c0e-11ef-90f4-0242f7328348"
                target="_blank"
                rel="nofollow"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="p-2 text-center">
              <span className="text-green-500">Notification</span>
            </td>
            <td className="p-2 text-center">
              <a
                className="text-blue-500 underline"
                href="https://img.freejobalert.com/uploads/2024/09/Notification-TPSC-GDMO-Posts.pdf"
                target="_blank"
                rel="nofollow"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="p-2 text-center">
              <span className="text-green-500">Official Website</span>
            </td>
            <td className="p-2 text-center">
              <a
                className="text-blue-500 underline"
                href="https://tpsc.tripura.gov.in/"
                target="_blank"
                rel="nofollow"
              >
                Click Here
              </a>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Food Safety Officer */}
      <h2 className="text-2xl font-bold mb-2" id="Food-Safety-Officer">
        TPSC Food Safety Officer 2024 Notification Cancelled
      </h2>
      <p className="mb-2">
        <span className="font-bold">Post Date: </span>
        <span>12-08-2024</span>
      </p>
      <p className="mb-2">
        <span className="font-bold">Latest Update: </span>
        <span>22-08-2024</span>
      </p>
      <p className="mb-2">
        <span className="font-bold">Total Vacancy: </span>
        <span>15</span>
      </p>
      <p className="mb-4">
        <span className="font-bold">Brief Information: </span>
        Tripura Public Service Commission (TPSC) invites applications for the recruitment of Food Safety Officer vacancy.
        Candidates interested in the vacancy details and meeting all eligibility criteria can read the Notification and Apply
        Online.
      </p>
      <table className="w-full border-2 border-gray-300 mb-4">
        <tbody>
          <tr>
            <td colSpan={2} className="p-2 text-center font-bold">
              <span className="text-red-500">Tripura Public Service commission (TPSC)</span>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="p-2 text-center font-bold">
              <span className="text-purple-500">Advt No. 06/2024</span>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="p-2 text-center font-bold">
              <span className="text-green-500">Food Safety officer Vacancy 2024</span>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="p-2 text-center font-bold">
              <a
                className="text-blue-500 underline"
                href="https://www.freejobalert.com"
                target="_blank"
                rel="noopener"
              >
                
              </a>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="p-2 text-center font-bold">
              <span className="text-purple-500">Application Fee</span>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="p-2">
              <ul>
                <li>For General Candidates: <span className="font-bold">Rs. 350/-</span></li>
                <li>
                  For SC/ ST/ BPL Card Holders/ Physically Handicapped Candidates: <span className="font-bold">Rs. 250/-</span>
                </li>
                <li>Payment Mode: <span className="font-bold">Through Online</span></li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="p-2 text-center font-bold">
              <span className="text-red-500">Important Dates</span>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="p-2">
              <ul>
                <li>Starting Date for Apply Online: <span className="font-bold">14-08-2024</span></li>
                <li>Last Date to Apply Online: <span className="font-bold">18-09-2024</span></li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="p-2 text-center font-bold">
              <span className="text-red-500">Age Limit (as on 18-09-2024)</span>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="p-2">
              <ul>
                <li>Minimum Age: <span className="font-bold">18 Years</span></li>
                <li>Maximum Age: <span className="font-bold">40 Years</span></li>
                <li>Age relaxation is applicable as per rules.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="p-2 text-center font-bold">
              <span className="text-red-500">Qualification</span>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="p-2">
              <ul>
                <li>Candidates Should Possess Degree/ PG Degree (Relevant Discipline)</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="p-2 text-center font-bold">
              <span className="text-red-500">Vacancy Details</span>
            </td>
          </tr>
          <tr>
            <td className="p-2 text-center font-bold">
              <span className="text-purple-500">Post Name</span>
            </td>
            <td className="p-2 text-center font-bold">
              <span className="text-purple-500">Total</span>
            </td>
          </tr>
          <tr>
            <td className="p-2 text-center">Food Safety Officer</td>
            <td className="p-2 text-center">15</td>
          </tr>
          <tr>
            <td colSpan={2} className="p-2 text-center font-bold">
              <span className="text-blue-500">Interested Candidates Can Read the Full Notification Before Apply Online</span>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="p-2 text-center font-bold">
              <span className="text-red-500">Important Links</span>
            </td>
          </tr>
          <tr>
            <td className="p-2 text-center">
              <span className="text-green-500">Cancelled Notice (22-08-2024)</span>
            </td>
            <td className="p-2 text-center">
              <a
                className="text-blue-500 underline"
                href="https://img.freejobalert.com/uploads/2024/08/Cancelled-Notice-TPSC-Food-Safety-Officer-Posts.pdf"
                target="_blank"
                rel="nofollow"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="p-2 text-center">
              <span className="text-green-500">Apply Online</span>
            </td>
            <td className="p-2 text-center">
              <a
                className="text-blue-500 underline"
                href="https://tpsc.tripura.gov.in/"
                target="_blank"
                rel="nofollow"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="p-2 text-center">
              <span className="text-green-500">Notification</span>
            </td>
            <td className="p-2 text-center">
              <a
                className="text-blue-500 underline"
                href="https://img.freejobalert.com/uploads/2024/08/Notification-TPSC-Food-Safety-Officer-2024.pdf"
                target="_blank"
                rel="nofollow"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="p-2 text-center">
              <span className="text-green-500">Official Website</span>
            </td>
            <td className="p-2 text-center">
              <a
                className="text-blue-500 underline"
                href="https://tpsc.tripura.gov.in/"
                target="_blank"
                rel="nofollow"
              >
                Click Here
              </a>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Asst Professor */}
      <h2 className="text-2xl font-bold mb-2" id="Asst-Professor">
        TPSC Asst Professor 2023 Result Released
      </h2>
      <p className="mb-2">
        <span className="font-bold">Post Date: </span>
        <span>27-12-2023</span>
      </p>
      <p className="mb-2">
        <span className="font-bold">Latest Update: </span>
        <span>05-07-2024</span>
      </p>
      <p className="mb-2">
        <span className="font-bold">Total Vacancy: </span>
        <span>12</span>
      </p>
      <p className="mb-4">
        <span className="font-bold">Brief Information: </span>
        Tripura Public Service Commission (TPSC) has published a notification for the recruitment of Asst Professor (Cardiology,
        Neurology, Neuro – Surgery, Urology, Plastic Surgery &amp; Other) Vacancies. Candidates interested in the vacancy details
        and meeting all eligibility criteria can read the Notification and Apply Online.
      </p>
      <table className="w-full border-2 border-gray-300 mb-4">
        <tbody>
          <tr>
            <td colSpan={2} className="p-2 text-center font-bold">
              <span className="text-red-500">Tripura Public Service Commission (TPSC)</span>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="p-2 text-center font-bold">
              <span className="text-purple-500">Advt No. 15/2023</span>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="p-2 text-center font-bold">
              <span className="text-green-500">Asst Professor Vacancy 2023</span>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="p-2 text-center font-bold">
              <a
                className="text-blue-500 underline"
                href="https://www.freejobalert.com"
                target="_blank"
                rel="noopener"
              >
                
              </a>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="p-2 text-center font-bold">
              <span className="text-purple-500">Application Fee</span>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="p-2">
              <ul>
                <li>Fee for Group ‘A’ Posts (For General Candidates): <span className="font-bold">Rs.400/-</span></li>
                <li>
                  Fee for Group ‘A’ Posts (For ST/SC/BPL Card Holders/Physically Handicapped Candidates): <span className="font-bold">Rs.350/-</span>
                </li>
                <li>Payment Mode: <span className="font-bold">Through Online</span></li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="p-2 text-center font-bold">
              <span className="text-red-500">Important Dates</span>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="p-2">
              <ul>
                <li>Starting Date for Apply Online: <span className="font-bold">27-12-2023</span></li>
                <li>Last Date for Apply Online: <span className="font-bold">29-01-2024</span></li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="p-2 text-center font-bold">
              <span className="text-red-500">Age Limit (as on 29-01-2024)</span>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="p-2">
              <ul>
                <li>Upper Age limit: <span className="font-bold">40 Years</span></li>
                <li>Age relaxation is applicable as per rules.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="p-2 text-center font-bold">
              <span className="text-red-500">Qualification</span>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="p-2">
              <ul>
                <li>Candidates should possess a Post Graduate Degree (Relevant Discipline)</li>
                <li>Candidates should have passed the National Eligibility cum Entrance Test (NEET) conducted by the National Board of Examinations (NBE) or any other equivalent examination recognized by the Medical Council of India (MCI).</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="p-2 text-center font-bold">
              <span className="text-red-500">Vacancy Details</span>
            </td>
          </tr>
          <tr>
            <td className="p-2 text-center font-bold">
              <span className="text-purple-500">Post Name</span>
            </td>
            <td className="p-2 text-center font-bold">
              <span className="text-purple-500">Total</span>
            </td>
          </tr>
          <tr>
            <td className="p-2 text-center">Asst Professor (Cardiology)</td>
            <td className="p-2 text-center">1</td>
          </tr>
          <tr>
            <td className="p-2 text-center">Asst Professor (Neurology)</td>
            <td className="p-2 text-center">1</td>
          </tr>
          <tr>
            <td className="p-2 text-center">Asst Professor (Neuro - Surgery)</td>
            <td className="p-2 text-center">1</td>
          </tr>
          <tr>
            <td className="p-2 text-center">Asst Professor (Urology)</td>
            <td className="p-2 text-center">1</td>
          </tr>
          <tr>
            <td className="p-2 text-center">Asst Professor (Plastic Surgery)</td>
            <td className="p-2 text-center">1</td>
          </tr>
          <tr>
            <td className="p-2 text-center">Asst Professor (Other)</td>
            <td className="p-2 text-center">7</td>
          </tr>
          <tr>
            <td colSpan={2} className="p-2 text-center font-bold">
              <span className="text-blue-500">Interested Candidates Can Read the Full Notification Before Apply Online</span>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="p-2 text-center font-bold">
              <span className="text-red-500">Important Links</span>
            </td>
          </tr>
          <tr>
            <td className="p-2 text-center">
              <span className="text-green-500">Result (05-07-2024)</span>
            </td>
            <td className="p-2 text-center">
              <a
                className="text-blue-500 underline"
                href="https://img.freejobalert.com/uploads/2024/07/Result-TPSC-Asst-Professor-Posts.pdf"
                target="_blank"
                rel="nofollow"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="p-2 text-center">
              <span className="text-green-500">Apply Online</span>
            </td>
            <td className="p-2 text-center">
              <a
                className="text-blue-500 underline"
                href="https://tpsc.tripura.gov.in/"
                target="_blank"
                rel="nofollow"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="p-2 text-center">
              <span className="text-green-500">Notification</span>
            </td>
            <td className="p-2 text-center">
              <a
                className="text-blue-500 underline"
                href="https://img.freejobalert.com/uploads/2023/12/Notification-TPSC-Asst-Professor-2023.pdf"
                target="_blank"
                rel="nofollow"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="p-2 text-center">
              <span className="text-green-500">Official Website</span>
            </td>
            <td className="p-2 text-center">
              <a
                className="text-blue-500 underline"
                href="https://tpsc.tripura.gov.in/"
                target="_blank"
                rel="nofollow"
              >
                Click Here
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}