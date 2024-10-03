export default function TNSTCApprenticeRecruitment() {
  // This component displays recruitment information for TNSTC Graduate & Technician Apprentice 2024. 
  // It includes post details, important dates, qualifications, vacancy details, and links to relevant resources.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">
        TNSTC Apprentice Vacancy 2024
      </h1>
      <div className="mb-4">
        <p className="font-bold mb-1">
          <span className="text-green-500">Name of the Post:</span> TNSTC{' '}
          <span className="font-bold">Graduate & Technician Apprentice</span>
        </p>
        <p className="text-justify font-bold mb-1">
          <span className="text-green-500">Post Date: </span>
          <strong>03-10-2024</strong>
        </p>
        <p className="text-justify font-bold mb-1">
          <span className="text-green-500">Total Vacancy: </span>
          <strong>499</strong>
        </p>
        <p className="text-justify mb-4">
          <span className="text-red-500 font-bold">Brief Information:</span>{' '}
          Tamil Nadu State Transport Corporation Ltd (TNSTC) has published a
          notification for the recruitment of{' '}
          <span className="font-bold">
            Graduate & Diploma Apprentice, Non-Engineering Graduate Apprentice
          </span>{' '}
          Vacancy. Those Candidates who are interested in the vacancy details
          &amp; completed all eligibility criteria can read the Notification &amp;
          Apply Online.
        </p>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2 text-center">
          Important Dates
        </h2>
        <ul className="list-disc pl-6">
          <li>
            Starting Date for Apply Online: <strong>30-09-2024</strong>
          </li>
          <li>
            Last date for applying TNSTC – Villupuram Region TNSTC – Salem
            Region, TNSTC – Coimbatore Region, TNSTC – Tirunelveli Region, and
            SETC TN, Chennai: <strong>21-10-2024</strong>
          </li>
          <li>
            Date of Declaration of Shortlisted list: <strong>28-10-2024</strong>
          </li>
          <li>
            Verification of certificates for shortlisted candidates:
            <strong>13-11-2024 to 15-11-2024</strong>
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2 text-center">Age Limit</h2>
        <ul className="list-disc pl-6">
          <li>Age limit will be followed as per Apprenticeship Rules.</li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2 text-center">Qualification</h2>
        <ul className="list-disc pl-6">
          <li>
            <strong>For Graduate Apprentice:</strong> Candidates Should Possess
            Degree (Engg or Technology).
          </li>
          <li>
            <strong>For Technician (Diploma) Apprentice:</strong> Candidates
            Should Possess Diploma (Engg or technology).
          </li>
          <li>
            <strong>For Non-Engineering Graduate Apprentice:</strong> Candidates
            Should Possess Degree in Arts/ Science/ Commerce/ Humanities such as
            BA/ B.Sc/ B.Com/ BBA/ BBM/BCA (Relevant Discipline)
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2 text-center">
          Vacancy Details
        </h2>
        <table className="table-auto w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-center text-pink-500 font-bold">
                Post Name
              </th>
              <th className="px-4 py-2 text-center text-pink-500 font-bold">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td className="px-4 py-2 text-center">Graduate Apprentice</td>
              <td className="px-4 py-2 text-center">201</td>
            </tr>
            <tr className="">
              <td className="px-4 py-2 text-center">
                Technician (Diploma) Apprentice
              </td>
              <td className="px-4 py-2 text-center">140</td>
            </tr>
            <tr className="">
              <td className="px-4 py-2 text-center">
                Non-Engineering Graduate Apprentice
              </td>
              <td className="px-4 py-2 text-center">158</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-center text-blue-500 mb-4">
        <strong>
          Interested Candidates Can Read the Full Notification Before Apply
          Online
        </strong>
      </p>
      <h2 className="text-2xl font-bold mb-2 text-center">Important Links</h2>
      <table className="table-auto w-full border border-gray-300">
        <tbody>
          <tr className="">
            <td className="px-4 py-2 text-center">
              <span className="text-green-500 font-bold">Apply Online</span>
            </td>
            <td className="px-4 py-2 text-center">
              <a
                href="https://nats.education.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="">
            <td className="px-4 py-2 text-center">
              <span className="text-green-500 font-bold">Notification</span>
            </td>
            <td className="px-4 py-2 text-center">
              <a
                href="https://img.freejobalert.com/uploads/2024/10/Notification-TNSTC-Apprentice-Posts.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="">
            <td className="px-4 py-2 text-center">
              <span className="text-green-500 font-bold">Official Website</span>
            </td>
            <td className="px-4 py-2 text-center">
              <a
                href="https://www.tnstc.in/home.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
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