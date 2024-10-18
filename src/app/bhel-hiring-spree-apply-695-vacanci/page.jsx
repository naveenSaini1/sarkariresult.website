export default function BHELRecruitment() {
  // This component displays recruitment information for BHEL's various vacancies.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">BHEL Recruitment 2024</h1>
      <p className="mb-4">
        Bharat Heavy Electrical Limited (BHEL) in Trichy is seeking qualified candidates for various Apprentice positions. 
        This is a fantastic opportunity to join a leading company in the power sector.
      </p>
      <h2 className="text-2xl font-bold mb-2">Key Highlights</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>
          <span className="font-bold">Post Date:</span> 18-10-2024
        </li>
        <li>
          <span className="font-bold">Total Vacancy:</span> 695
        </li>
        <li>
          <span className="font-bold">Application Period:</span> 04-09-2024 to 23-10-2024
        </li>
      </ul>
      <h2 className="text-2xl font-bold mb-2">Brief Information</h2>
      <p className="mb-4">
        BHEL Trichy is hiring for Trade, Technician, and Graduate Apprentice positions. 
        Interested candidates who meet the eligibility criteria can apply online. 
      </p>
      <h2 className="text-2xl font-bold mb-2">Age Limit (as on 01-09-2024)</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>
          <span className="font-bold">Minimum Age:</span> 18 Years
        </li>
        <li>
          <span className="font-bold">Maximum Age:</span> 27 Years
        </li>
        <li>
          <span className="font-bold">Age relaxation:</span> Applicable as per rules
        </li>
      </ul>
      <h2 className="text-2xl font-bold mb-2">Vacancy Details</h2>
      <table className="table-auto w-full mb-4">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="px-4 py-2 text-left">Post Name</th>
            <th className="px-4 py-2 text-left">Total</th>
            <th className="px-4 py-2 text-left">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-gray-200 hover:bg-gray-100">
            <td className="px-4 py-2 text-left">Trade Apprentice</td>
            <td className="px-4 py-2 text-left">430</td>
            <td className="px-4 py-2 text-left">High School Pass &amp; ITI (NCVT/ SCVT)</td>
          </tr>
          <tr className="border-t border-gray-200 hover:bg-gray-100">
            <td className="px-4 py-2 text-left">Technician Apprentice</td>
            <td className="px-4 py-2 text-left">110</td>
            <td className="px-4 py-2 text-left">High School Pass &amp; Diploma</td>
          </tr>
          <tr className="border-t border-gray-200 hover:bg-gray-100">
            <td className="px-4 py-2 text-left">Graduate Apprentice</td>
            <td className="px-4 py-2 text-left">155</td>
            <td className="px-4 py-2 text-left">10+2 &amp; Graduation (Relevant Discipline)</td>
          </tr>
        </tbody>
      </table>
      <p className="mb-4">
        Interested candidates are advised to carefully read the full notification before applying online.
      </p>
      <h2 className="text-2xl font-bold mb-2">Important Links</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>
          <span className="font-bold">Last Date Extended:</span>{' '}
          <a href="https://img.freejobalert.com/uploads/2024/10/Last-Date-Extentded-BHEL-Trade-Technician-Graduate-Apprentice-Posts.pdf" 
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="nofollow">
            Click Here
          </a>
        </li>
        <li>
          <span className="font-bold">Apply Online:</span>{' '}
          <a href="https://trichy.bhel.com/tms/app_pro/index.jsp" 
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="nofollow">
            Link 1
          </a>
          {' | '}
          <a href="https://www.apprenticeshipindia.gov.in/" 
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="nofollow">
            Link 2
          </a>
          {' | '}
          <a href="https://nats.education.gov.in/" 
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="nofollow">
            Link 3
          </a>
        </li>
        <li>
          <span className="font-bold">Notification:</span>{' '}
          <a href="https://img.freejobalert.com/uploads/2024/10/Notification-BHEL-Trade-Apprentice-Posts.pdf" 
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="nofollow">
            Trade Apprentice
          </a>
          {' | '}
          <a href="https://img.freejobalert.com/uploads/2024/10/Notification-BHEL-Technician-Apprentice-Posts.pdf" 
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="nofollow">
            Technician Apprentice
          </a>
          {' | '}
          <a href="https://img.freejobalert.com/uploads/2024/10/Notification-BHEL-Graduate-Apprentice-Posts.pdf" 
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="nofollow">
            Graduate Apprentice
          </a>
        </li>
        <li>
          <span className="font-bold">Official Website:</span>{' '}
          <a href="https://trichy.bhel.com/tms/app_pro/index.jsp" 
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="nofollow">
            Click Here
          </a>
        </li>
      </ul>
      {/*  Keywords */}
      <p className="mt-8">
        <span className="font-bold">Keywords:</span> BHEL, Bharat Heavy Electrical Limited, Trichy, Recruitment, 
        Apprentice, Trade Apprentice, Technician Apprentice, Graduate Apprentice, 
        Online Application, Important Dates, Eligibility Criteria
      </p>
    </div>
  );
}