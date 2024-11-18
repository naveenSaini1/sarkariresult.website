export default function ECHSRecruitment() {
  // This component displays recruitment information for ECHS, Danapur's various vacancies.  It includes details about the post, important dates, vacancy details, and FAQs.  Social media links and irrelevant script tags have been removed.

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">ECHS, Danapur Various Vacancies - 2024</h1>
      <p className="text-justify mb-4">
        This recruitment drive by the Ex-Servicemen Contributory Health Scheme (ECHS), Danapur, offers various contract positions.  Eligible candidates are encouraged to review the notification and apply.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Key Highlights</h2>
        <ul className="list-disc list-inside">
          <li>Post Date: 18-11-2024</li>
          <li>Last Date to Apply: 30-11-2024</li>
          <li>Total Vacancies: 92</li>
          <li>Application Fee: Not Mentioned</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Vacancy Details</h2>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border border-gray-300 text-left">Post Name</th>
              <th className="px-4 py-2 border border-gray-300 text-center">Total</th>
              <th className="px-4 py-2 border border-gray-300 text-left">Qualification</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border border-gray-300">OIC Polyclinic</td>
              <td className="px-4 py-2 border border-gray-300 text-center">09</td>
              <td className="px-4 py-2 border border-gray-300">ESM Officer, Graduate, Computer working knowledge</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border border-gray-300">Medical Specialist</td>
              <td className="px-4 py-2 border border-gray-300 text-center">02</td>
              <td className="px-4 py-2 border border-gray-300">MD/MS (Medicine)</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border border-gray-300">Gynaecologist</td>
              <td className="px-4 py-2 border border-gray-300 text-center">01</td>
              <td className="px-4 py-2 border border-gray-300">MD/MS in Specialty concerned/DNB</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border border-gray-300">Medical Officer</td>
              <td className="px-4 py-2 border border-gray-300 text-center">11</td>
              <td className="px-4 py-2 border border-gray-300">MBBS, Computer working knowledge</td>
            </tr>
            {/* Add remaining rows similarly */}
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border border-gray-300">Dental Officer</td>
              <td className="px-4 py-2 border border-gray-300 text-center">06</td>
              <td className="px-4 py-2 border border-gray-300">BDS, Computer working knowledge</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border border-gray-300">Laboratory Assistant</td>
              <td className="px-4 py-2 border border-gray-300 text-center">01</td>
              <td className="px-4 py-2 border border-gray-300">DMLT/Class I Laboratory Tech Course (Armed Forces)</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border border-gray-300">Laboratory Technician</td>
              <td className="px-4 py-2 border border-gray-300 text-center">07</td>
              <td className="px-4 py-2 border border-gray-300">B.Sc.(Medical Lab Technology) Or Diploma in Medical Lab Technology, Computer working knowledge</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border border-gray-300">Physiotherapist</td>
              <td className="px-4 py-2 border border-gray-300 text-center">02</td>
              <td className="px-4 py-2 border border-gray-300">Diploma/ Class1 Physiotherapy Course (Armed Forces), Computer working knowledge</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border border-gray-300">Pharmacist</td>
              <td className="px-4 py-2 border border-gray-300 text-center">08</td>
              <td className="px-4 py-2 border border-gray-300">B Pharmacy &amp; Diploma in Pharmacy, Computer working knowledge</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border border-gray-300">Nursing Assistant</td>
              <td className="px-4 py-2 border border-gray-300 text-center">05</td>
              <td className="px-4 py-2 border border-gray-300">GNM Diploma/ Class I Nursing Assistants Course (Armed Forces) Or B.Sc Nursing, Computer working knowledge</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border border-gray-300">Dental Hygienist/Assistant/Technician</td>
              <td className="px-4 py-2 border border-gray-300 text-center">06</td>
              <td className="px-4 py-2 border border-gray-300">Diploma Holder in Dental Hyg/Class-1 DH/DORA Course (Armed Forces) Or Diploma in Dental Hygienist/Dental Mechanic Course, Computer working knowledge</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border border-gray-300">Driver</td>
              <td className="px-4 py-2 border border-gray-300 text-center">07</td>
              <td className="px-4 py-2 border border-gray-300">Education –8 Class Class I MT driver (Armed Forces) Posses a civil driving licence, Computer working knowledge</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border border-gray-300">Peon</td>
              <td className="px-4 py-2 border border-gray-300 text-center">01</td>
              <td className="px-4 py-2 border border-gray-300">Education – Class 8 GD trade (Armed Forces)</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border border-gray-300">Chowkidar</td>
              <td className="px-4 py-2 border border-gray-300 text-center">04</td>
              <td className="px-4 py-2 border border-gray-300">Education – Class 8th or GD trade for Armed Forces personnel</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border border-gray-300">Female Attendant</td>
              <td className="px-4 py-2 border border-gray-300 text-center">02</td>
              <td className="px-4 py-2 border border-gray-300">Literate, Computer working knowledge</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border border-gray-300">Safaiwala</td>
              <td className="px-4 py-2 border border-gray-300 text-center">04</td>
              <td className="px-4 py-2 border border-gray-300">Literate</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border border-gray-300">Clerk</td>
              <td className="px-4 py-2 border border-gray-300 text-center">12</td>
              <td className="px-4 py-2 border border-gray-300">Graduate/Class I Clerical tradeb (Armed Forces), Computer working knowledge</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border border-gray-300">Data Entry Operator</td>
              <td className="px-4 py-2 border border-gray-300 text-center">03</td>
              <td className="px-4 py-2 border border-gray-300">-</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border border-gray-300">IT Network Technician</td>
              <td className="px-4 py-2 border border-gray-300 text-center">01</td>
              <td className="px-4 py-2 border border-gray-300">Diploma/Certificate /Equivalent in IT Networking Computer Application</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Important Links</h2>
        <ul className="list-disc list-inside">
          <li>
            <a href="https://img.freejobalert.com/uploads/2024/11/Application-Form-ECHS-Danapur-Clerk-Medical-Officer-Other-Posts.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Application Form</a>
          </li>
          <li>
            <a href="https://img.freejobalert.com/uploads/2024/11/Notification-ECHS-Danapur-Clerk-Medical-Officer-Posts.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Notification</a>
          </li>
          <li>
            <a href="https://www.echs.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Official Website</a>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">FAQs</h2>
        <ul className="list-disc list-inside">
          <li>
            <p className="font-bold">What is the last date for ECHS MO, Clerk &amp; Other 2024?</p>
            <p>Ans: 30-11-2024</p>
          </li>
          <li>
            <p className="font-bold">How much of a fee to pay for ECHS MO, Clerk &amp; Other 2024?</p>
            <p>Ans: Not Mentioned</p>
          </li>
          <li>
            <p className="font-bold">What is the age limit for ECHS MO, Clerk &amp; Other 2024?</p>
            <p>Ans: Not Mentioned</p>
          </li>
          <li>
            <p className="font-bold">How many vacancies are recruiting through ECHS MO, Clerk &amp; Other 2024?</p>
            <p>Ans: Total 92 Vacancies</p>
          </li>
          <li>
            <p className="font-bold">What is the minimum qualification for ECHS MO, Clerk &amp; Other 2024?</p>
            <p>Ans: 8th/GNM/Diploma/Degree/PG (Relevant Discipline)</p>
          </li>
        </ul>
      </section>
      <p className="text-gray-500 text-sm">Keywords: ECHS, Danapur, Recruitment, Vacancies, Medical Officer, Clerk, Pharmacist, Driver, Jobs, 2024</p>

    </div>
  );
}