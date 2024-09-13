export default function RecruitmentInfo() {
  // This component displays recruitment information for a banking exam.
  // It includes details about the exam, important dates, vacancy details,
  // and a FAQ section.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">
        IBPS Recruitment Exam Details
      </h1>

      <div className="mb-4">
        <nav aria-label="breadcrumbs" className="rank-math-breadcrumb">
          <p>
            <a
              href="https://pmsuryaghar.org.in"
              className="text-blue-500 hover:underline"
            >
              
            </a>
            <span className="separator"> » </span>
            <a
              href="https://pmsuryaghar.org.in/category/result/"
              className="text-blue-500 hover:underline"
            >
              Result
            </a>
            <span className="separator"> » </span>
            <span className="last">
              IBPS Recruitment Exam Results - Check From This Direct Link Here
            </span>
          </p>
        </nav>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">
          IBPS Recruitment Exam Overview
        </h2>
        <p>
          The Institute of Banking Personnel Selection (IBPS) conducted the
          recruitment exam for various posts in Regional Rural Banks (RRBs) on
          specified dates. The results for the exam are now available.
        </p>
        <table className="table-auto w-full text-center">
          <thead>
            <tr>
              <th className="px-4 py-2">Recruitment Organization</th>
              <th className="px-4 py-2">Post Name</th>
              <th className="px-4 py-2">Advt. No.</th>
              <th className="px-4 py-2">Total Vacancies</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2">
                Institute of Banking Personnel Selection (IBPS)
              </td>
              <td className="px-4 py-2">
                Office Assistant, Officer Scale-I, II, III
              </td>
              <td className="px-4 py-2">IBPS RRB CRP-XIII</td>
              <td className="px-4 py-2">10200+</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">
          IBPS Recruitment Exam Important Dates
        </h2>
        <p>
          The IBPS RRB recruitment notification was released on June 7th, 2024,
          and the application period ended on June 30th, 2024. The Prelims
          exams were conducted on the dates mentioned in the notification.
        </p>
        <ul className="list-disc ml-6">
          <li>
            The IBPS recruitment exam result for the Officer Scale-I (PO) was
            declared on September 13th, 2024.
          </li>
          <li>
            The IBPS recruitment exam result for the Office Assistant (Clerk)
            will be announced in the third week of September 2024.
          </li>
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">
          IBPS Recruitment Exam Vacancies and Eligibility
        </h2>
        <p>
          The recruitment exam offers various vacancies for different posts,
          each with specific eligibility criteria.
        </p>
        <table className="table-auto w-full text-center">
          <thead>
            <tr>
              <th className="px-4 py-2">Post Name</th>
              <th className="px-4 py-2">Total Post</th>
              <th className="px-4 py-2">Qualification</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2">Office Assistant (Clerk)</td>
              <td className="px-4 py-2">5800</td>
              <td className="px-4 py-2">Graduate</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Officer Scale-I (AM)</td>
              <td className="px-4 py-2">3499</td>
              <td className="px-4 py-2">Graduate</td>
            </tr>
            <tr>
              <td className="px-4 py-2">General Banking Officer (Manager)</td>
              <td className="px-4 py-2">496</td>
              <td className="px-4 py-2">
                Graduate with 50% Marks + 2 Year Experience
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">IT Officer</td>
              <td className="px-4 py-2">94</td>
              <td className="px-4 py-2">
                Bachelor's Degree in ECE / CS/ IT with 50% Minimum Marks and 1
                Year Experience
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">CA Officer</td>
              <td className="px-4 py-2">60</td>
              <td className="px-4 py-2">C.A + 1 Yr Experience</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Law Officer</td>
              <td className="px-4 py-2">28</td>
              <td className="px-4 py-2">LLB with 50% Marks + 2 Yr Experience</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Treasury Manager</td>
              <td className="px-4 py-2">21</td>
              <td className="px-4 py-2">
                CA OR MBA Finance + 1 Yr Experience
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">Marketing Officer</td>
              <td className="px-4 py-2">11</td>
              <td className="px-4 py-2">
                MBA Marketing + 1 Yr Experience
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">Agriculture Officer</td>
              <td className="px-4 py-2">70</td>
              <td className="px-4 py-2">
                Degree in Agriculture/ Horticulture/ Dairy/ Animal / Veterinary
                Science / Engineering / Pisciculture + 2Yr Experience
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">Officer Scale III (Senior Manager)</td>
              <td className="px-4 py-2">139</td>
              <td className="px-4 py-2">
                Graduate with 50% Marks + 5 Yr Experience
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">
          IBPS Recruitment Exam Selection Process
        </h2>
        <p>
          The selection process for the IBPS RRB recruitment exam involves
          multiple stages depending on the post applied for.
        </p>
        <ol className="list-decimal ml-6">
          <li>Prelims Exam (For Clerk and PO Scale-I)</li>
          <li>Mains Exam (For Clerk and PO Scale-I)</li>
          <li>Single Phase Exam (For PO Scale-II, and III)</li>
          <li>Interview (For PO Scale- I, II, and III)</li>
          <li>Document Verification</li>
          <li>Medical Examination</li>
        </ol>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">
          IBPS Recruitment Exam Results Link
        </h2>
        <p>
          The direct links to check the IBPS recruitment exam results are
          provided below.
        </p>
        <table className="table-auto w-full text-center">
          <thead>
            <tr>
              <th className="px-4 py-2">Result Link</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2">
                <a
                  href="https://ibpsonline.ibps.in/rrbxiiimay24/resta_sep24/login.php?appid=3707215ba91e9a4ad7c0221d1a24f62e"
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener"
                >
                  Officer Scale-I (PO) Result
                </a>
              </td>
              <td className="px-4 py-2">Declared</td>
            </tr>
            <tr>
              <td className="px-4 py-2">
                <a
                  href="https://telegram.me/haryana_jobs_in"
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener"
                >
                  Office Assistant (Clerk) Result
                </a>
              </td>
              <td className="px-4 py-2">To be declared</td>
            </tr>
            <tr>
              <td className="px-4 py-2">
                <a
                  href="https://pmsuryaghar.org.in/wp-content/uploads/2024/07/IBPS-RRB-2024-Notification.pdf"
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener"
                >
                  IBPS RRB CRP-XIII Notification
                </a>
              </td>
              <td className="px-4 py-2">Available</td>
            </tr>
            <tr>
              <td className="px-4 py-2">
                <a
                  href="https://www.ibps.in/"
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener"
                >
                  IBPS Official Website
                </a>
              </td>
              <td className="px-4 py-2">
                <span className="font-bold">Official Website</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">FAQs</h2>
        <div className="rank-math-list ">
          <div className="rank-math-list-item">
            <p className="rank-math-question font-bold">
              How to check the IBPS Recruitment Exam Result?
            </p>
            <div className="rank-math-answer">
              <p>
                Visit the official website of IBPS (ibps.in) and follow the
                instructions provided.
              </p>
            </div>
          </div>
          <div className="rank-math-list-item">
            <p className="rank-math-question font-bold">
              When will the IBPS Recruitment Exam result for Officer Scale-I (PO)
              be declared?
            </p>
            <div className="rank-math-answer">
              <p>
                The IBPS recruitment exam result for Officer Scale-I (PO) was
                declared on September 13th, 2024.
              </p>
            </div>
          </div>
          <div className="rank-math-list-item">
            <p className="rank-math-question font-bold">
              When will the IBPS Recruitment Exam result for Office Assistant
              (Clerk) be released?
            </p>
            <div className="rank-math-answer">
              <p>
                The IBPS recruitment exam result for Office Assistant (Clerk)
                will be announced in the third week of September 2024.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}