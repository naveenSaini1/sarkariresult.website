export default function HKRNRecruitment() {
  // This component displays recruitment information for Haryana Kaushal Rojgar Nigam Limited (HKRNL). It includes details like vacancy overview, application process, eligibility criteria, and important dates.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Haryana Skill Development and Employment Corporation Recruitment</h1>
      <p className="text-gray-600 mb-6">
        The Haryana Skill Development and Employment Corporation (HSDEC) is an organization established by the Haryana government to provide employment opportunities for skilled workers. 
        HSDEC offers various contractual job roles across diverse government departments, boards, and agencies. 
        This page provides comprehensive information on HSDEC recruitment, including current vacancies, eligibility criteria, application procedures, and important dates.
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Highlights</h2>
      <ul className="list-disc text-gray-600 mb-6">
        <li>Recruitment Organization: Haryana Skill Development and Employment Corporation (HSDEC)</li>
        <li>Job Type: Contractual</li>
        <li>Official Website: hkrnl.itiharyana.gov.in</li>
        <li>Application Fee: INR 236/-</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Recruitment Process</h2>
      <p className="text-gray-600 mb-4">
        HSDEC follows a streamlined recruitment process to select qualified candidates for various job roles. 
        The process typically involves online applications, shortlisting based on eligibility, and subsequent selection procedures. 
        The selection criteria often include education qualifications, relevant work experience, Haryana Parivar Pehchan Patra (PPP)/Family ID, and age limit.
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Current Vacancies</h2>
      <p className="text-gray-600 mb-4">
        The HSDEC currently offers a range of job opportunities for skilled individuals. 
        The following table provides details on available vacancies, eligibility criteria, and application deadlines.
      </p>

      <div className="overflow-x-auto">
        <table className="table-auto w-full text-gray-600">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left font-bold text-gray-800">Job Role</th>
              <th className="px-4 py-2 text-center font-bold text-gray-800">Vacancies</th>
              <th className="px-4 py-2 text-center font-bold text-gray-800">Last Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2">Cleaning Staff</td>
              <td className="px-4 py-2 text-center">5000+</td>
              <td className="px-4 py-2 text-center">Upcoming</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Specialized Categories (Salary Higher than INR 30,000)</td>
              <td className="px-4 py-2 text-center">No Active Job</td>
              <td className="px-4 py-2 text-center">-</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Vacant Jobs Under Enterprises</td>
              <td className="px-4 py-2 text-center">No Active Job</td>
              <td className="px-4 py-2 text-center">-</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Overseas Jobs</td>
              <td className="px-4 py-2 text-center">Not Disclosed</td>
              <td className="px-4 py-2 text-center">15.11.2024</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Application Procedures</h2>
      <ol className="list-decimal text-gray-600 mb-6">
        <li>Visit the HSDEC official website: hkrnl.itiharyana.gov.in</li>
        <li>Click on the "Job Advertisements" section in the menu.</li>
        <li>Browse available job postings and check your eligibility.</li>
        <li>Click on the "Apply" link corresponding to your desired job role.</li>
        <li>To apply, you must possess a Haryana Parivar Pehchan Patra (PPP)/Family ID.</li>
        <li>Enter your Family ID, click on the "Display Members" button, select your name, and click on "Get OTP."</li>
        <li>Enter the OTP received on your registered mobile number and click on "Verify OTP." Then click on "Login."</li>
        <li>Verify and update your personal and communication details.</li>
        <li>Proceed to the next step and provide your educational qualifications, skills, HSSC CET qualified/non-qualified status, etc.</li>
        <li>Click on the "Next Page" and select your socioeconomic criteria.</li>
        <li>Click on "Next" and enter your government and private work experience details.</li>
        <li>Check the checkbox "I have carefully read and understand the conditions at 1-4 above."</li>
        <li>Click on the "Make Payment" button and pay the application fee of INR 236/- online.</li>
        <li>After payment, select the job you wish to apply for and submit the application form.</li>
      </ol>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Important Links</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-gray-600">
          <tbody>
            <tr>
              <td className="px-4 py-2 text-left">HSDEC Japan Recruitment Notification</td>
              <td className="px-4 py-2 text-center"><a href="https://pmsuryaghar.org.in/wp-content/uploads/2024/11/HKRN-Japan-Recruitment-2024-Notice-6-November.pdf" className="text-blue-500 underline">Notification</a></td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-left">HSDEC Online Application Form</td>
              <td className="px-4 py-2 text-center"><a href="https://hkrnl.itiharyana.gov.in/VacantJobs" target="_blank" rel="noopener" className="text-blue-500 underline">Apply Online</a></td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-left">HSDEC Official Website</td>
              <td className="px-4 py-2 text-center"><a href="https://hkrnl.itiharyana.gov.in/index" target="_blank" rel="noopener" className="text-blue-500 underline">HSDEC</a></td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-left">HSDEC Cleaning Staff Registration</td>
              <td className="px-4 py-2 text-center"><a href="https://hkrnl.itiharyana.gov.in/SafaiKaramchari_Reg_Pub" target="_blank" rel="noopener" className="text-blue-500 underline">Safai Reg.</a></td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-left">HSDEC Marks (Score Calculator) Link</td>
              <td className="px-4 py-2 text-center"><a href="https://hkrnl.itiharyana.gov.in/scorecalculator" target="_blank" rel="noopener" className="text-blue-500 underline">Marks</a></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
      <div className="text-gray-600">
        <p><strong>How to Apply for HSDEC Recruitment?</strong></p>
        <p>Apply online through the HSDEC portal: hkrnl.itiharyana.gov.in</p>

        <p><strong>Is HSDEC Recruitment a permanent government job?</strong></p>
        <p>No, HSDEC recruitment is for contractual roles. They are not permanent government positions.</p>

        <p><strong>Can candidates from other states apply for HSDEC Recruitment?</strong></p>
        <p>No, only Haryana residents are eligible to apply for HSDEC vacancies as a Haryana Family ID is mandatory.</p>

        <p><strong>Is there a written exam for HSDEC Recruitment?</strong></p>
        <p>No, the merit list for HSDEC recruitment is prepared based on qualifying exam marks, HSSC CET score, age limit, experience, and socioeconomic status.</p>

        <p><strong>What is the age limit for applying to HSDEC Recruitment?</strong></p>
        <p>The age limit to apply for HSDEC recruitment is typically between 18 and 42 years. Refer to the specific job notification for details.</p>

        <p><strong>What is the application fee for HSDEC Recruitment?</strong></p>
        <p>The application fee for HSDEC recruitment is INR 236/- for general category candidates.</p>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Keywords</h2>
      <p className="text-gray-600">
        HSDEC, Haryana Skill Development and Employment Corporation, recruitment, employment, contractual jobs, government jobs, online application, Haryana, vacancies, eligibility, application process, important dates, job roles, Haryana Parivar Pehchan Patra, PPP, Family ID, age limit, experience, socioeconomic status, application fee.
      </p>
    </div>
  );
}