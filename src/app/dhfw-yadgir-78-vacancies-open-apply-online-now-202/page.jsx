export default function RecruitmentInfo() {
  // This component displays recruitment information for DHFW, Yadgir Various Vacancy 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        DHFW, Yadgir Various Vacancy 2024 Online Form
      </h1>
      <p className="text-lg mb-2">
        <span className="text-green-500 font-bold">Name of the Post:</span>{" "}
        DHFW, Yadgir Various Vacancy 2024 Online Form
      </p>
      <p className="text-lg mb-2">
        <span className="text-green-500 font-bold">Post Date: </span>
        <strong>08-10-2024</strong>
      </p>
      <p className="text-lg mb-2">
        <span className="text-green-500 font-bold">Total Vacancy: </span>
        <strong>78</strong>
      </p>
      <p className="text-lg mb-4">
        <span className="text-red-500 font-bold">Brief Information:</span>{" "}
        District Health and Family Welfare (DHFW) Yadgir has announced
        notification for the recruitment of M.B.B.S. Doctor, Nursing Officer &
        Other Vacancy on Contract Basis. Those Candidates who are interested in
        the vacancy details & completed all eligibility criteria can read the
        Notification & Apply Online.
      </p>

      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Important Dates</h2>
        <ul className="list-disc pl-5">
          <li>
            Starting Date for Apply Online: <strong>03-10-2024</strong>
          </li>
          <li>
            Last Date to Apply Online: <strong>18-10-2024</strong>
          </li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Vacancy Details</h2>
        <table className="table-auto w-full text-center border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 border border-gray-300">
                <span className="text-blue-500 font-bold">Post Name</span>
              </th>
              <th className="px-4 py-2 border border-gray-300">
                <span className="text-blue-500 font-bold">Total</span>
              </th>
              <th className="px-4 py-2 border border-gray-300">
                <span className="text-blue-500 font-bold">Age limit</span>
              </th>
              <th className="px-4 py-2 border border-gray-300">
                <span className="text-blue-500 font-bold">Qualification</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border border-gray-300">
                Obstetricians and Gynaecologist
              </td>
              <td className="px-4 py-2 border border-gray-300">02</td>
              <td className="px-4 py-2 border border-gray-300" rowSpan={4}>
                50 Years
              </td>
              <td className="px-4 py-2 border border-gray-300">
                MBBS/ PG Degree (DGO/ DNB/ MD OBG)
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Pediatrician</td>
              <td className="px-4 py-2 border border-gray-300">02</td>
              <td className="px-4 py-2 border border-gray-300">
                MBBS/ PG Degree
                <br/>
                (DM Neonatology/ Fellowship Neonatology/ MD Pediatrics/ DNB Child
                Health)/ DCH)
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">
                Acupuncturists
              </td>
              <td className="px-4 py-2 border border-gray-300">01</td>
              <td className="px-4 py-2 border border-gray-300">
                MBBS PG (Degree of Anesthesia)
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">
                ENT Specialist
              </td>
              <td className="px-4 py-2 border border-gray-300">02</td>
              <td className="px-4 py-2 border border-gray-300">
                MBBS with PG Degree (ENT Surgeon)
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">
                M.B.B.S. Doctor
              </td>
              <td className="px-4 py-2 border border-gray-300">15</td>
              <td className="px-4 py-2 border border-gray-300">40 Years</td>
              <td className="px-4 py-2 border border-gray-300" rowSpan={3}>
                MBBS Convocation/ Degree
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">
                Doctors (NCD)
              </td>
              <td className="px-4 py-2 border border-gray-300">04</td>
              <td className="px-4 py-2 border border-gray-300">50 Years</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">
                M.B.B.S. Doctors (NUHIM)
              </td>
              <td className="px-4 py-2 border border-gray-300">02</td>
              <td className="px-4 py-2 border border-gray-300" rowSpan={7}>
                40 Years
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">
                Dental Hygienist
              </td>
              <td className="px-4 py-2 border border-gray-300">01</td>
              <td className="px-4 py-2 border border-gray-300">
                Diploma (Dental Hygienist)
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">
                Dental Technician
              </td>
              <td className="px-4 py-2 border border-gray-300">01</td>
              <td className="px-4 py-2 border border-gray-300">
                Diploma (Dental Technician)
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Optometrist</td>
              <td className="px-4 py-2 border border-gray-300">01</td>
              <td className="px-4 py-2 border border-gray-300">
                Diploma/ Degree (Optometry) &amp; PG (Optometry)
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">
                M.B.B Doctor
              </td>
              <td className="px-4 py-2 border border-gray-300">03</td>
              <td className="px-4 py-2 border border-gray-300">
                MBBS Convocation/ Degree
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Nurses</td>
              <td className="px-4 py-2 border border-gray-300">03</td>
              <td className="px-4 py-2 border border-gray-300">
                Diploma/B.Sc/ Post Certified B.Sc (Nursing)
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">
                Laboratory Technician
              </td>
              <td className="px-4 py-2 border border-gray-300">03</td>
              <td className="px-4 py-2 border border-gray-300">
                SSLC/ Diploma (Trial School of Technology)/ B.Sc PUC (Science)
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">
                Audiometric assistant
              </td>
              <td className="px-4 py-2 border border-gray-300">01</td>
              <td className="px-4 py-2 border border-gray-300" rowSpan={2}>
                45 Years
              </td>
              <td className="px-4 py-2 border border-gray-300">
                Diploma in Hearing Luggage (DHLS) &amp; Certificate from RCI
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">
                Teachers of hearing impaired children
              </td>
              <td className="px-4 py-2 border border-gray-300">01</td>
              <td className="px-4 py-2 border border-gray-300">
                SSLC/ Diploma (Deaf and Hard of Hearing Youth (DTYDHH)
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">
                Junior Health Assistant
              </td>
              <td className="px-4 py-2 border border-gray-300">05</td>
              <td className="px-4 py-2 border border-gray-300">40 Years</td>
              <td className="px-4 py-2 border border-gray-300">
                SSLC/ Diploma/ B.Sc PUC (science subject)
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">
                District Microbiologist
              </td>
              <td className="px-4 py-2 border border-gray-300">01</td>
              <td className="px-4 py-2 border border-gray-300">45</td>
              <td className="px-4 py-2 border border-gray-300">
                Medical Graduate/PG Diploma/Degree/ M.Sc (Medical Microbiology)
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">
                Primary Health Safety Officers
              </td>
              <td className="px-4 py-2 border border-gray-300">03</td>
              <td className="px-4 py-2 border border-gray-300">
                40 Years
                <br/>
              </td>
              <td className="px-4 py-2 border border-gray-300">-</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">
                Nursing Officer
              </td>
              <td className="px-4 py-2 border border-gray-300">04</td>
              <td className="px-4 py-2 border border-gray-300" rowSpan={2}>
                45 Years
              </td>
              <td className="px-4 py-2 border border-gray-300">
                Diploma/B.Sc/ M.Sc (Nursing)
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Doctor</td>
              <td className="px-4 py-2 border border-gray-300">08</td>
              <td className="px-4 py-2 border border-gray-300">
                MBBS/ BAMS
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">
                Ophthalmic assistant
              </td>
              <td className="px-4 py-2 border border-gray-300">04</td>
              <td className="px-4 py-2 border border-gray-300" rowSpan={2}>
                40 Years
              </td>
              <td className="px-4 py-2 border border-gray-300">
                Diploma (Optometry/ Ophthalmic Assistant)
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">
                Nursing Officer
              </td>
              <td className="px-4 py-2 border border-gray-300">10</td>
              <td className="px-4 py-2 border border-gray-300">
                Nursing qualification
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">
                Bio Medical Engineer
              </td>
              <td className="px-4 py-2 border border-gray-300">01</td>
              <td className="px-4 py-2 border border-gray-300">45 Years</td>
              <td className="px-4 py-2 border border-gray-300">
                BE (Bio medical)
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mb-4">
        <p className="text-blue-500 font-bold">
          Interested Candidates Can Read the Full Notification Before Apply
          Online
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Important Links</h2>
        <table className="table-auto w-full text-center border-collapse border border-gray-300">
          <tbody>
            <tr>
              <td
                colSpan={3}
                className="px-4 py-2 border border-gray-300"
              >
                <span className="text-green-500 font-bold">Apply Online</span>
              </td>
              <td className="px-4 py-2 border border-gray-300">
                <a
                  className="text-blue-500 hover:underline"
                  href="https://yadgir.nic.in/en/notice_category/recruitment/"
                  target="_blank"
                  rel="nofollow"
                >
                  Click Here
                </a>
              </td>
            </tr>
            <tr>
              <td
                colSpan={3}
                className="px-4 py-2 border border-gray-300"
              >
                <span className="text-green-500 font-bold">Notification</span>
              </td>
              <td className="px-4 py-2 border border-gray-300">
                <a
                  className="text-blue-500 hover:underline"
                  href="https://img.freejobalert.com/uploads/2024/10/Notification-DHFW-Yadgir-Various-Vacancy-Posts.pdf"
                  target="_blank"
                  rel="nofollow"
                >
                  Click Here
                </a>
              </td>
            </tr>
            <tr>
              <td
                colSpan={3}
                className="px-4 py-2 border border-gray-300"
              >
                <span className="text-green-500 font-bold">
                  Official Website
                </span>
              </td>
              <td className="px-4 py-2 border border-gray-300">
                <a
                  className="text-blue-500 hover:underline"
                  href="https://yadgir.nic.in/en/"
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
    </div>
  );
}