export default function RecruitmentInfo() {
  // Displays recruitment information for SAIL, Rourkela Trainee Online Form 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        SAIL, Rourkela Trainee Online Form 2024
      </h1>
      <p className="text-gray-700 mb-4">
        <span className="font-bold text-green-500">Name of the Post:</span> SAIL,
        Rourkela Trainee Online Form 2024
      </p>
      <p className="text-gray-700 mb-4">
        <span className="font-bold text-green-500">Post Date:</span>
        <span className="text-gray-900">03-09-2024</span>
      </p>
      <p className="text-gray-700 mb-4">
        <span className="font-bold text-green-500">Total Vacancy:</span>
        <span className="text-gray-900">202</span>
      </p>
      <p className="text-gray-700 mb-4">
        <span className="font-bold text-red-500">Brief Information:</span> Steel
        Authority of India Limited (SAIL), Rourkela Steel Plant has announced
        notification for the recruitment of Trainee Vacancy on Stipend basis.
        Those Candidates who are interested in the vacancy details & completed
        all eligibility criteria can read the Notification & Apply Online.
      </p>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Important Dates</h2>
      <ul className="list-disc text-gray-700 mb-4">
        <li>
          Starting Date for submitting online application:
          <strong>25-08-2024</strong>
        </li>
        <li>
          Closing Date for submitting online application:
          <strong>10-09-2024</strong>
        </li>
      </ul>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Age Limit</h2>
      <ul className="list-disc text-gray-700 mb-4">
        <li>
          <span className="text-gray-900">Minimum Age:</span>
          <strong>18 Years</strong>
        </li>
        <li>
          <span className="text-gray-900">Maximum Age:</span>
          <strong>35 Years</strong>
        </li>
      </ul>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Vacancy Details</h2>
      <table className="table-auto w-full text-gray-700 mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2 text-center font-bold">Post Name</th>
            <th className="px-4 py-2 text-center font-bold">Total</th>
            <th className="px-4 py-2 text-center font-bold">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 text-center">
              Medical Attendant Training
            </td>
            <td className="px-4 py-2 text-center">100</td>
            <td className="px-4 py-2 text-center">Minimum Matric or equivalent</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center">
              Critical Care Nursing Training
            </td>
            <td className="px-4 py-2 text-center">20</td>
            <td className="px-4 py-2 text-center">Diploma (GNM)/ B.Sc Nursing</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center">
              Advanced Specialized Nursing Training (ASNT)
            </td>
            <td className="px-4 py-2 text-center">40</td>
            <td className="px-4 py-2 text-center">Diploma (GNM)/ B.Sc Nursing</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center">
              Data Entry Operator/ Medical Transcription Training
            </td>
            <td className="px-4 py-2 text-center">10</td>
            <td className="px-4 py-2 text-center">10+2 (PGDCA)</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center">
              Medical Lab Technician Training
            </td>
            <td className="px-4 py-2 text-center">10</td>
            <td className="px-4 py-2 text-center">
              Diploma (Medical Laboratory Technology)
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center">
              Hospital Administration Training
            </td>
            <td className="px-4 py-2 text-center">07</td>
            <td className="px-4 py-2 text-center">
              BA/BBA/PG Diploma (Hospital Management / Hospital Administration
              / HR / Marketing / Finance)
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center">
              OT/ Anesthesia Assistant Training
            </td>
            <td className="px-4 py-2 text-center">05</td>
            <td className="px-4 py-2 text-center">
              Inter (Hospital Attendant/ Anesthesia Attendant Training
              programme)
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center">
              Advanced Physiotherapy Training
            </td>
            <td className="px-4 py-2 text-center">02</td>
            <td className="px-4 py-2 text-center">BPT</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center">Radiographer Training</td>
            <td className="px-4 py-2 text-center">05</td>
            <td className="px-4 py-2 text-center">
              Diploma (Medical Radiation Technology)
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center">Pharmacist Training</td>
            <td className="px-4 py-2 text-center">03</td>
            <td className="px-4 py-2 text-center">
              Diploma (Pharmacy)/ B.Pharmacy
            </td>
          </tr>
        </tbody>
      </table>
      <p className="text-gray-700 mb-4">
        Interested Candidates Can Read the Full Notification Before Apply
        Online
      </p>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Important Links</h2>
      <table className="table-auto w-full text-gray-700 mb-4">
        <tbody>
          <tr>
            <td className="px-4 py-2 text-center font-bold text-green-500">
              Apply Online
            </td>
            <td className="px-4 py-2 text-center" colSpan={2}>
              <a
                href="https://sampark.sailrsp.co.in/ighcst/"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center font-bold text-green-500">
              Notification
            </td>
            <td className="px-4 py-2 text-center" colSpan={2}>
              <a
                href="https://img.freejobalert.com/uploads/2024/09/Notification-SAIL-Rourkela-Trainee-Post.pdf"
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-center font-bold text-green-500">
              Official Website
            </td>
            <td className="px-4 py-2 text-center" colSpan={2}>
              <a
                href="https://www.sail.co.in/plants/about-rourkela-steel-plant"
                className="text-blue-500 underline"
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