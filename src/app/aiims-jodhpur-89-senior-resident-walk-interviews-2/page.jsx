export default function RecruitmentInformation() {
  // Displays recruitment information for AIIMS Jodhpur Senior Resident Walk In 2024.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        AIIMS, Jodhpur Senior Resident Walk In 2024
      </h1>
      <div className="mb-4">
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Name of the Post:</span>{' '}
          <span className="font-bold">AIIMS, Jodhpur Senior Resident Walk In 2024</span>
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Post Date: </span>
          <span>12-09-2024</span>
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Total Vacancy: </span>
          <span>89</span>
        </p>
      </div>
      <p className="text-lg mb-4">
        <span className="text-red-500 font-medium">Brief Information:</span>{' '}
        All India Institute of Medical Sciences (AIIMS), Jodhpur has invited
        applications for the recruitment of Senior Resident Vacancy. Those
        Candidates who are interested in the vacancy details & completed all
        eligibility criteria can read the Notification & Walk in.
      </p>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Important Dates</h2>
        <ul className="list-disc pl-5">
          <li className="mb-1">
            <span className="font-medium">Date of Walk in Interview:</span>{' '}
            <span>18-09-2024 (10:00 AM)</span>
          </li>
          <li>Reporting Time: 09:00 AM to 12:00 Noon</li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Age Limit (as on 18-09-2024)</h2>
        <ul className="list-disc pl-5">
          <li className="mb-1">
            <span className="text-gray-900">Maximum Age Limit:</span>{' '}
            <span>45 Years</span>
          </li>
          <li className="text-gray-900">
            Age relaxation is admissible as per rules.
          </li>
        </ul>
      </div>
      <h2 className="text-2xl font-bold mb-2">Vacancy Details</h2>
      <table className="table-auto w-full text-center mb-4">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2">Department Name</th>
            <th className="px-4 py-2">Total</th>
            <th className="px-4 py-2">Qualification</th>
          </tr>
        </thead>
        <tbody>
          {/* Super Speciality Department */}
          <tr>
            <td className="px-4 py-2">Burns and Plastic Surgery</td>
            <td className="px-4 py-2">06</td>
            <td className="px-4 py-2">
              MS/DNB (General Surgery) OR M.Ch. (Burns &amp; Plastic Surgery)
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">Cardiology</td>
            <td className="px-4 py-2">05</td>
            <td className="px-4 py-2">
              MD/DNB (General Medicine/Paediatrics) OR DM/DNB (Cardiology)
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">
              Cardiothoracic &amp; Vascular Surgery
            </td>
            <td className="px-4 py-2">07</td>
            <td className="px-4 py-2">
              MS/DNB (General Surgery) OR M.Ch./DNB(CTVS)
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">
              Endocrinology and Metabolism
            </td>
            <td className="px-4 py-2">04</td>
            <td className="px-4 py-2">
              MD/DNB (General Medicine / Pediatrics) OR DM (Endocrinology and
              Metabolism)
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">Gastroenterology</td>
            <td className="px-4 py-2">02</td>
            <td className="px-4 py-2">
              MD/DNB (General Medicine) OR DM/DNB (Gastroenterology/Hepatology)
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">
              Medical Oncology/Haematology
            </td>
            <td className="px-4 py-2">04</td>
            <td className="px-4 py-2">
              MD/DNB (General Medicine/ Paediatrics) OR DM/DNB (Medical
              Oncology/Haematology)
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">Nephrology</td>
            <td className="px-4 py-2">01</td>
            <td className="px-4 py-2">
              MD/DNB (General Medicine/Pediatrics) OR DM (Nephrology)
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">Neurology</td>
            <td className="px-4 py-2">01</td>
            <td className="px-4 py-2">
              MD/DNB (General Medicine/Pediatrics) OR DM (Neurology)
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">Paediatric Surgery</td>
            <td className="px-4 py-2">01</td>
            <td className="px-4 py-2">
              MS/DNB (General Surgery) OR MCh./DNB (Paediatric Surgery)
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">Pulmonary Medicine</td>
            <td className="px-4 py-2">01</td>
            <td className="px-4 py-2">
              MD/DNB (General Medicine/Pulmonary medicine/Chest
              Medicine/Respiratory Medicine OR DM/DNB (Pulmonary Medicine)
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">Trauma &amp; Emergency (Surgery) </td>
            <td className="px-4 py-2">04</td>
            <td className="px-4 py-2">
              MS/DNB (General Surgery) OR M.Ch (Trauma Surgery and Critical
              Care)
            </td>
          </tr>
          {/* Speciality Department */}
          <tr>
            <td className="px-4 py-2">
              Anaesthesiology and Critical Care
            </td>
            <td className="px-4 py-2">07</td>
            <td className="px-4 py-2">MD/DNB (Anaesthesiology)</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Biochemistry</td>
            <td className="px-4 py-2">02</td>
            <td className="px-4 py-2">
              MD/DNB (Biochemistry) OR M.Sc. (Biochemistry) with Ph.D
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">Community Medicine</td>
            <td className="px-4 py-2">01</td>
            <td className="px-4 py-2">
              MD/DNB (Community Medicine / PSM)
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">
              Dermatology, Venereology and Leprology
            </td>
            <td className="px-4 py-2">01</td>
            <td className="px-4 py-2">
              DNB/MD (Dermatology, Venereology and Leprology)
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">
              Diagnostic and Interventional Radiology
            </td>
            <td className="px-4 py-2">05</td>
            <td className="px-4 py-2">MD/DNB (Radiology)</td>
          </tr>
          <tr>
            <td className="px-4 py-2">ENT</td>
            <td className="px-4 py-2">01</td>
            <td className="px-4 py-2">MS/DNB (Otorhinolaryngology)</td>
          </tr>
          <tr>
            <td className="px-4 py-2">General Medicine</td>
            <td className="px-4 py-2">13</td>
            <td className="px-4 py-2">MD/DNB (General Medicine)</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Hospital Administration</td>
            <td className="px-4 py-2">01</td>
            <td className="px-4 py-2">MD/DNB (Hospital Administration)</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Nuclear Medicine</td>
            <td className="px-4 py-2">02</td>
            <td className="px-4 py-2">DNB/MD (Nuclear Medicine)</td>
          </tr>
          <tr>
            <td className="px-4 py-2">
              Obstetrics &amp; Gynaecology
            </td>
            <td className="px-4 py-2">01</td>
            <td className="px-4 py-2">MS/DNB (Obstetrics &amp; Gynaecology)</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Orthopaedics</td>
            <td className="px-4 py-2">02</td>
            <td className="px-4 py-2">MS/DNB (Orthopaedics) </td>
          </tr>
          <tr>
            <td className="px-4 py-2">Paediatrics</td>
            <td className="px-4 py-2">03</td>
            <td className="px-4 py-2">MD/DNB (Paediatrics)</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Pharmacology</td>
            <td className="px-4 py-2">03</td>
            <td className="px-4 py-2">MD/DNB (Pharmacology)</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Psychiatry</td>
            <td className="px-4 py-2">02</td>
            <td className="px-4 py-2">MD/DNB (Psychiatry)</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Radiation Oncology</td>
            <td className="px-4 py-2">08</td>
            <td className="px-4 py-2">
              MD/DNB (Radiation Oncology/ Radio Therapy)
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">
              Transfusion Medicine &amp; Blood Bank
            </td>
            <td className="px-4 py-2">01</td>
            <td className="px-4 py-2">
              MD/DNB (Transfusion Medicine/Pathology)
            </td>
          </tr>
        </tbody>
      </table>
      <p className="text-blue-500 font-medium mb-4">
        Interested Candidates Can Read the Full Notification Before Walk in
      </p>
      <h2 className="text-2xl font-bold mb-2">Important Links</h2>
      <table className="table-auto w-full text-center mb-4">
        <tbody>
          <tr>
            <td className="px-4 py-2" colSpan={2}>
              <span className="text-green-500 font-medium">Notification</span>
            </td>
            <td className="px-4 py-2">
              <a
                href="https://img.freejobalert.com/uploads/2024/09/Notification-AIIMS-Jodhpur-Senior-Resident-Posts.pdf"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2" colSpan={2}>
              <span className="text-green-500 font-medium">Official Website</span>
            </td>
            <td className="px-4 py-2">
              <a
                href="https://www.aiimsjodhpur.edu.in/"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2" colSpan={2}>
              <span className="text-blue-500 font-medium">
                Download Mobile App
              </span>
            </td>
            <td className="px-4 py-2">
              <a
                href="https://play.google.com/store/apps/details?id=com.freejobalert"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
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