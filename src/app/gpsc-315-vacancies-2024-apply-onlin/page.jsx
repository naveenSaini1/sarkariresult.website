export default function GPSCRecruitment() {
  // This component displays recruitment information for various vacancies announced by the Gujarat Public Service Commission (GPSC). 
  // It includes details like post name, total vacancies, age limit, qualification, important dates, and application fee. 
  // It also presents a table summarizing the vacancy details for different positions and regions.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">GPSC Various Vacancy Online Form 2024</h1>
      <p className="text-center mb-4">
        <span className="text-green-500 font-bold">Name of the Post:</span> GPSC Various Vacancy Online Form 2024
      </p>
      <p className="text-center mb-4">
        <span className="text-green-500 font-bold">Post Date:</span> 16-10-2024
      </p>
      <p className="text-center mb-4">
        <span className="text-green-500 font-bold">Total Vacancy:</span> 315
      </p>
      <p className="mb-4">
        <span className="text-red-500 font-bold">Brief Information:</span> Gujarat Public Service Commission (GPSC) has issued an employment notification for the recruitment of Assistant Inspector, Deputy Executive Engineer (Civil), Class-II & Associate Professor & Other Vacancy. Interested and eligible candidates can read the notification and apply online.
      </p>

      <p className="mb-4 font-bold text-center">Key Highlights</p>
      <ul className="list-disc ml-6 text-center">
        <li>Gujarat Public Service Commission (GPSC) is recruiting for various positions.</li>
        <li>The application period is from 15-10-2024 to 30-10-2024.</li>
        <li>Total vacancies: 315</li>
        <li>Visit the GPSC official website for more details.</li>
      </ul>

      <p className="mb-4 font-bold text-center">Application Fee</p>
      <ul className="list-disc ml-6 text-center">
        <li>Available on 15-10-2024</li>
      </ul>

      <p className="mb-4 font-bold text-center">Important Dates</p>
      <ul className="list-disc ml-6 text-center">
        <li>Starting Date for Apply Online & Payment of Fee: 15-10-2024 at 13:00 hrs</li>
        <li>Last Date for Apply Online & Payment of Fee: 30-10-2024 till 23:59 hrs</li>
      </ul>

      <h2 className="text-2xl font-bold text-center mb-4">Vacancy Details</h2>
      <table className="table-auto w-full text-center border-collapse border border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border border-gray-300">Advt No</th>
            <th className="py-2 px-4 border border-gray-300">Post Name</th>
            <th className="py-2 px-4 border border-gray-300">Total</th>
            <th className="py-2 px-4 border border-gray-300">Age Limit (as on 30-10-2024)</th>
            <th className="py-2 px-4 border border-gray-300">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border border-gray-300">47/2024-25</td>
            <td className="py-2 px-4 border border-gray-300">Deputy Executive Engineer (Mechanical), Class-II</td>
            <td className="py-2 px-4 border border-gray-300">34</td>
            <td className="py-2 px-4 border border-gray-300">21-35 Years</td>
            <td className="py-2 px-4 border border-gray-300">B.E/ B.Tech (Mechanical)</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border border-gray-300">48/2024-25</td>
            <td className="py-2 px-4 border border-gray-300">Scientific Officer (Physics Group), Class-II</td>
            <td className="py-2 px-4 border border-gray-300">21</td>
            <td className="py-2 px-4 border border-gray-300">21-37 Years</td>
            <td className="py-2 px-4 border border-gray-300" rowSpan={2}>Degree/PG</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border border-gray-300">49/2024-25</td>
            <td className="py-2 px-4 border border-gray-300">Assistant Director, Horticulture, Class-II</td>
            <td className="py-2 px-4 border border-gray-300">01</td>
            <td className="py-2 px-4 border border-gray-300">21-39 Years</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border border-gray-300">50/2024-25</td>
            <td className="py-2 px-4 border border-gray-300">Assistant Controller of Legal Metrology and Assistant Consumer Affairs Officer, GSS, Class-II</td>
            <td className="py-2 px-4 border border-gray-300">03</td>
            <td className="py-2 px-4 border border-gray-300">21-35 Years</td>
            <td className="py-2 px-4 border border-gray-300">Degree/PG</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border border-gray-300" colSpan={5}>
              <span className="font-bold">Advt No. 51/2024-25, Gujarat Engineering Service, Class-I &amp; Class-II, Narmada, Water Resources, Water Supply &amp; Kalpsar Department, Government of Gujarat (No. P.P. &amp; K.V.)</span>
            </td>
          </tr>
          <tr>
            <td className="py-2 px-4 border border-gray-300">51/2024-25</td>
            <td className="py-2 px-4 border border-gray-300">Gujarat Engineering Service (Civil), Class-I and Class-II, Narmada and Water Resources, Water Supply and Kalpsar Department</td>
            <td className="py-2 px-4 border border-gray-300">17</td>
            <td className="py-2 px-4 border border-gray-300">20-35 Years</td>
            <td className="py-2 px-4 border border-gray-300">B.E/ B.Tech (Civil)</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border border-gray-300">52/2024-25</td>
            <td className="py-2 px-4 border border-gray-300">Assistant Inspector of Motor Vehicle, Class-III</td>
            <td className="py-2 px-4 border border-gray-300">153</td>
            <td className="py-2 px-4 border border-gray-300">19-35 Years</td>
            <td className="py-2 px-4 border border-gray-300">Diploma/B.E/ B.Tech (ME/AME)</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border border-gray-300" colSpan={5}>
              <span className="font-bold">Advt No. 53/2024-25 of Gujarat Water Resources Development Corporation Limited (GWRDC)</span>
            </td>
          </tr>
          <tr>
            <td className="py-2 px-4 border border-gray-300">53/2024-25</td>
            <td className="py-2 px-4 border border-gray-300">Stenographer, Grade-I (Gujarati), Class-II, GWRDC</td>
            <td className="py-2 px-4 border border-gray-300">01</td>
            <td className="py-2 px-4 border border-gray-300">21-35 Years</td>
            <td className="py-2 px-4 border border-gray-300">-</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border border-gray-300" colSpan={5}>
              <span className="font-bold">Advt No. 54/2024-25 to 56/2024-25 of Gandhinagar Municipal Corporation (GMC)</span>
            </td>
          </tr>
          <tr>
            <td className="py-2 px-4 border border-gray-300">54/2024-25</td>
            <td className="py-2 px-4 border border-gray-300">Deputy Executive Engineer (Civil), Class-II</td>
            <td className="py-2 px-4 border border-gray-300">09</td>
            <td className="py-2 px-4 border border-gray-300">18-38 Years</td>
            <td className="py-2 px-4 border border-gray-300">B.E/ B.Tech (Civil)</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border border-gray-300">55/2024-25</td>
            <td className="py-2 px-4 border border-gray-300">Additional Assistant Engineer (Civil), Class-III</td>
            <td className="py-2 px-4 border border-gray-300">23</td>
            <td className="py-2 px-4 border border-gray-300">18-35 Years</td>
            <td className="py-2 px-4 border border-gray-300">Diploma/B.E/ B.Tech (Civil)</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border border-gray-300">56/2024-25</td>
            <td className="py-2 px-4 border border-gray-300">Additional Assistant Engineer (Electrical), Class-III</td>
            <td className="py-2 px-4 border border-gray-300">12</td>
            <td className="py-2 px-4 border border-gray-300">18-35 Years</td>
            <td className="py-2 px-4 border border-gray-300">Diploma/B.E/ B.Tech (Electrical)</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border border-gray-300" colSpan={5}>
              <span className="font-bold">Advt No. 57/2024-25 &amp; 58/2024-25 is for Assistant Professor (Dental Corps), Class-I, General State Service</span>
            </td>
          </tr>
          <tr>
            <td className="py-2 px-4 border border-gray-300">57/2024-25</td>
            <td className="py-2 px-4 border border-gray-300">Assistant Professor, Paedodontics (Paediatric) and Preventive Dentistry, Class-I (Dental)</td>
            <td className="py-2 px-4 border border-gray-300">03</td>
            <td className="py-2 px-4 border border-gray-300" rowSpan={2}>21-40 Years</td>
            <td className="py-2 px-4 border border-gray-300" rowSpan={2}>MDS/DNB</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border border-gray-300">58/2024-25</td>
            <td className="py-2 px-4 border border-gray-300">Assistant Professor, Oral Medicine and Radiology, Class-I (Dental)</td>
            <td className="py-2 px-4 border border-gray-300">03</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border border-gray-300" colSpan={5}>
              <span className="font-bold">Advt No. 59/2024-25 to 66/2024-25 is for Associate Professor (Dental Corps), Class-I, General State Service</span>
            </td>
          </tr>
          <tr>
            <td className="py-2 px-4 border border-gray-300">59/2024-25</td>
            <td className="py-2 px-4 border border-gray-300">Associate Professor, Prosthodontics and Crown and Bridge, Class-I (Dental)</td>
            <td className="py-2 px-4 border border-gray-300">03</td>
            <td className="py-2 px-4 border border-gray-300" rowSpan={8}>21-41 Years</td>
            <td className="py-2 px-4 border border-gray-300" rowSpan={8}>MDS/DNB</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border border-gray-300">60/2024-25</td>
            <td className="py-2 px-4 border border-gray-300">Associate Professor, Conservative Dentistry and Endodontics, Class-I (Dental)</td>
            <td className="py-2 px-4 border border-gray-300">05</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border border-gray-300">61/2024-25</td>
            <td className="py-2 px-4 border border-gray-300">Associate Professor, Paedodontics (Paediatric) and Preventive Dentistry, Class- I (Dental)</td>
            <td className="py-2 px-4 border border-gray-300">01</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border border-gray-300">62/2024-25</td>
            <td className="py-2 px-4 border border-gray-300">Associate Professor, Oral and Maxillofacial Surgery, Class-I (Dental)</td>
            <td className="py-2 px-4 border border-gray-300">04</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border border-gray-300">63/2024-25</td>
            <td className="py-2 px-4 border border-gray-300">Associate Professor, Orthodontics and DentoFacial Orthopaedics, Class-1 (Dental)</td>
            <td className="py-2 px-4 border border-gray-300">02</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border border-gray-300">64/2024-25</td>
            <td className="py-2 px-4 border border-gray-300">Associate Professor, Periodontology, Class-I (Dental)</td>
            <td className="py-2 px-4 border border-gray-300">04</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border border-gray-300">65/2024-25</td>
            <td className="py-2 px-4 border border-gray-300">Associate Professor, Oral Pathology and Microbiology, Class-I (Dental)</td>
            <td className="py-2 px-4 border border-gray-300">03</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border border-gray-300">66/2024-25</td>
            <td className="py-2 px-4 border border-gray-300">Associate Professor, Public Health Dentistry, Class-I (Dental)</td>
            <td className="py-2 px-4 border border-gray-300">01</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border border-gray-300">67/2024-25</td>
            <td className="py-2 px-4 border border-gray-300">Deputy Section Officer (Legal Side), Class-III</td>
            <td className="py-2 px-4 border border-gray-300">40</td>
            <td className="py-2 px-4 border border-gray-300">20-38 Years</td>
            <td className="py-2 px-4 border border-gray-300">Degree (Law)</td>
          </tr>
        </tbody>
      </table>
      <p className="text-center mb-4">
        <span className="text-gray-600">For More Details Refer Notification</span>
      </p>
      <p className="text-center mb-4">
        <span className="text-blue-500">Interested Candidates Can Read the Full Notification Before Apply Online</span>
      </p>
      <h2 className="text-2xl font-bold text-center mb-4">Important Links</h2>
      <table className="table-auto w-full text-center border-collapse border border-gray-300 mb-4">
        <tbody>
          <tr>
            <td className="py-2 px-4 border border-gray-300" colSpan={2}>
              <span className="text-green-500 font-bold">Apply Online</span>
            </td>
            <td className="py-2 px-4 border border-gray-300" colSpan={3}>
              Available on 15-10-2024
            </td>
          </tr>
          <tr>
            <td className="py-2 px-4 border border-gray-300" colSpan={2}>
              <span className="text-green-500 font-bold">Detailed Notification</span>
            </td>
            <td className="py-2 px-4 border border-gray-300" colSpan={3}>
              Available on 15-10-2024
            </td>
          </tr>
          <tr>
            <td className="py-2 px-4 border border-gray-300" colSpan={2}>
              <span className="text-green-500 font-bold">Short Notification</span>
            </td>
            <td className="py-2 px-4 border border-gray-300" colSpan={3}>
              <a href="https://img.freejobalert.com/uploads/2024/10/Notification-GPSC-Asst-Inspector-Deputy-Executive-Engineer-Other-Posts.pdf" target="_blank" className="text-blue-500">Click Here</a>
            </td>
          </tr>
          <tr>
            <td className="py-2 px-4 border border-gray-300" colSpan={2}>
              <span className="text-green-500 font-bold">Official Website</span>
            </td>
            <td className="py-2 px-4 border border-gray-300" colSpan={3}>
              <a href="https://gpsc.gujarat.gov.in/" target="_blank" className="text-blue-500">Click Here</a>
            </td>
          </tr>
        </tbody>
      </table>
      <p className="text-center mt-4">
        <span className="font-bold">Keywords:</span> GPSC, Gujarat Public Service Commission, recruitment, vacancy, online form, Assistant Inspector, Deputy Executive Engineer, Associate Professor,  Government of Gujarat,  important dates, application fee, eligibility criteria,  apply online.
      </p>
    </div>
  );
}