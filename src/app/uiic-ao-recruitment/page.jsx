export default function UIICRecruitment() {
  // This component displays information about the UIIC Administrative Officer (AO) recruitment for 2024, including important dates, application fees, eligibility criteria, selection process, and exam pattern.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        United India Insurance Company Limited (UIIC) AO Recruitment 2024
      </h1>
      <p className="text-gray-600 mb-4">
        The United India Insurance Company Limited (UIIC) has announced the recruitment of Administrative Officers (AO)
        Scale-I (Generalist and Specialists) in various offices across India. The notification was released on October
        14, 2024, and the online application process is open from October 15, 2024, to November 5, 2024.
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Highlights</h2>
      <ul className="list-disc text-gray-600 mb-4">
        <li>Total Vacancies: 200</li>
        <li>Application Period: October 15, 2024, to November 5, 2024</li>
        <li>Exam Date: December 14, 2024</li>
        <li>Selection Process: Written Exam, Descriptive Test, Interview</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Important Dates</h2>
      <div className="overflow-x-auto mb-4">
        <table className="table-auto w-full text-gray-600">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-4 py-2 text-left font-bold">Event</th>
              <th className="px-4 py-2 text-left font-bold">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="px-4 py-2">Notification Release Date</td>
              <td className="px-4 py-2">October 14, 2024</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-4 py-2">Online Application Start Date</td>
              <td className="px-4 py-2">October 15, 2024</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-4 py-2">Application Deadline</td>
              <td className="px-4 py-2">November 5, 2024</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-4 py-2">Admit Card Release Date</td>
              <td className="px-4 py-2">December 4, 2024</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-4 py-2">Exam Date</td>
              <td className="px-4 py-2">December 14, 2024</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Application Fees</h2>
      <div className="overflow-x-auto mb-4">
        <table className="table-auto w-full text-gray-600">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-4 py-2 text-left font-bold">Category</th>
              <th className="px-4 py-2 text-left font-bold">Application Fee</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="px-4 py-2">SC/ ST/ PWD/ PSGI Companies Permanent Employees</td>
              <td className="px-4 py-2">Rs. 250/-</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-4 py-2">All Other Applicants</td>
              <td className="px-4 py-2">Rs. 1000/-</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-4 py-2">Mode of Payment</td>
              <td className="px-4 py-2">Online</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Vacancies and Eligibility</h2>
      <p className="text-gray-600 mb-4">
        The age limit to apply for the UIIC AO recruitment is between 21 and 30 years. The cutoff date for age
        calculation is September 30, 2024. Candidates must have been born between October 1, 1994, and September
        30, 2003 (both days inclusive). Age relaxation is available as per the rules.
      </p>
      <div className="overflow-x-auto mb-4">
        <table className="table-auto w-full text-gray-600">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-4 py-2 text-left font-bold">Post Name</th>
              <th className="px-4 py-2 text-left font-bold">Vacancy</th>
              <th className="px-4 py-2 text-left font-bold">Qualification</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="px-4 py-2">AO (Generalist)</td>
              <td className="px-4 py-2">100</td>
              <td className="px-4 py-2">
                Graduation/ PG in Any Field with 60% Marks (55% for SC/ ST)
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-4 py-2">AO (Specialist)</td>
              <td className="px-4 py-2">100</td>
              <td className="px-4 py-2">
                Degree in the Related Field (B.Tech/ M.Tech/ CA/ B.Com/ M.Com/ MCA/ LLB)
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Selection Process</h2>
      <p className="text-gray-600 mb-4">
        The UIIC AO recruitment process involves the following stages, with a weightage of 75:25 for the
        written exam and interview, respectively.
      </p>
      <ol className="list-decimal text-gray-600 mb-4">
        <li>Written Exam (Objective) - 250 Marks (75% Weightage)</li>
        <li>
          Subjective English Language (Essay - 20 Marks &amp; Letter - 10 Marks) - Qualifying
        </li>
        <li>Interview (25% Weightage)</li>
        <li>Document Verification</li>
        <li>Medical Examination</li>
      </ol>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Exam Pattern</h2>
      <p className="text-gray-600 mb-4">
        The descriptive test of 30 minutes duration with 30 marks will be a test of the English Language
        (Letter Writing - 10 marks &amp; Essay - 20 marks). The descriptive test will be in English and will be
        conducted through online mode. Each candidate will be required to obtain a minimum score for each
        section of the objective test separately for shortlisting for the descriptive test evaluation.
      </p>
      <p className="text-gray-600 mb-4">
        The descriptive answer script would be evaluated only for those candidates who qualify the objective
        test. Depending on the number of vacancies available, cut-offs will be decided for Descriptive paper
        evaluation. Each candidate will be required to obtain a minimum total score (to be decided by the
        Company) in the objective test (written examination) and qualify in the descriptive test for
        shortlisting for the Interview. Qualifying marks in the descriptive test shall be decided by the
        company.
      </p>
      <p className="text-gray-600 mb-4">
        Note: A candidate shall be required to qualify in the descriptive test, but the marks in the
        descriptive test will not be counted towards shortlisting for interview or final selection.
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Notification and Online Form Link</h2>
      <div className="overflow-x-auto mb-4">
        <table className="table-auto w-full text-gray-600">
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="px-4 py-2">UIIC AO Recruitment 2024 Notification PDF</td>
              <td className="px-4 py-2">
                <a
                  href="https://pmsuryaghar.org.in/wp-content/uploads/2024/10/UIIC-AO-Recruitment-2024-Notification-PDF.pdf"
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Notification
                </a>
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-4 py-2">UIIC AO Recruitment 2024 Online Form</td>
              <td className="px-4 py-2">
                <a
                  href="https://ibpsonline.ibps.in/uiiclsep24"
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply Online
                </a>
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-4 py-2">UIICL Official Website</td>
              <td className="px-4 py-2">
                <a
                  href="https://uiic.co.in/careers/recruitment"
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  UIIC
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-gray-600 mt-4">
        Keywords: UIIC, AO, Recruitment, 2024, Insurance, Administrative Officer, Scale-I, Generalist,
        Specialist, Notification, Application, Online Form, Exam Pattern, Selection Process, Eligibility,
        Important Dates, Vacancies.
      </p>
    </div>
  );
}