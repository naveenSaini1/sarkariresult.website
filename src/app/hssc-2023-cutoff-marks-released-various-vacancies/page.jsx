export default function RecruitmentInformation() {
  // Displays recruitment information for various HSSC posts, including details like post name, date, vacancy, application fee, important dates, and qualification requirements.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">HSSC Recruitment Information</h1>
      <div className="grid grid-cols-1 gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold mb-2" id="Group-C">HSSC Group C 2024 Online Form</h2>
          <p className="mb-1">
            <span className="font-bold">Post Date:</span>{' '}
            <span className="text-gray-700">17-08-2024</span>
          </p>
          <p className="mb-1">
            <span className="font-bold">Latest Update:</span>{' '}
            <span className="text-gray-700">31-08-2024</span>
          </p>
          <p className="mb-1">
            <span className="font-bold">Total Vacancy:</span>{' '}
            <span className="text-gray-700">369</span>
          </p>
          <p>
            <span className="font-bold">Brief Information:</span> Haryana Staff
            Selection Commission (HSSC) has published a notification for the
            recruitment of Group C (Assistant Lineman, Deputy Ranger, Warder Male
            &amp; Other) Vacancy. Those Candidates who are interested in the
            vacancy details &amp; completed all eligibility criteria can read the
            Notification &amp; Apply Online.
          </p>
        </div>
        <table className="table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th
                colSpan="4"
                className="text-center px-4 py-2 font-bold text-gray-700"
              >
                Haryana Staff Selection Commission (HSSC)
              </th>
            </tr>
            <tr className="bg-gray-100">
              <th
                colSpan="4"
                className="text-center px-4 py-2 font-bold text-gray-700"
              >
                Advt No. 13/2024
              </th>
            </tr>
            <tr className="bg-gray-100">
              <th
                colSpan="4"
                className="text-center px-4 py-2 font-bold text-gray-700"
              >
                Group C Vacancy 2024
              </th>
            </tr>
            <tr className="bg-gray-100">
              <th
                colSpan="4"
                className="text-center px-4 py-2 font-bold text-gray-700"
              >
                <a
                  href="https://www.freejobalert.com"
                  target="_blank"
                  rel="noopener"
                  className="underline text-blue-500"
                >
                  
                </a>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100">
              <th
                colSpan="4"
                className="text-center px-4 py-2 font-bold text-gray-700"
              >
                Application Fee
              </th>
            </tr>
            <tr>
              <td
                colSpan="4"
                className="text-center px-4 py-2 font-bold text-gray-700"
              >
                No Fee
              </td>
            </tr>
            <tr className="bg-gray-100">
              <th
                colSpan="4"
                className="text-center px-4 py-2 font-bold text-gray-700"
              >
                Important Dates
              </th>
            </tr>
            <tr>
              <td className="text-center px-4 py-2">Date of Publication</td>
              <td className="text-center px-4 py-2">16-08-2024</td>
              <td className="text-center px-4 py-2">Starting Date for Apply Online</td>
              <td className="text-center px-4 py-2">24-08-2024</td>
            </tr>
            <tr>
              <td className="text-center px-4 py-2">Last Date to Apply Online</td>
              <td className="text-center px-4 py-2">06-09-2024 (11:59 P.M.)</td>
              <td className="text-center px-4 py-2"></td>
              <td className="text-center px-4 py-2"></td>
            </tr>
            <tr className="bg-gray-100">
              <th
                colSpan="4"
                className="text-center px-4 py-2 font-bold text-gray-700"
              >
                Physical Measurements
              </th>
            </tr>
            <tr>
              <td className="text-center px-4 py-2">Candidate</td>
              <td className="text-center px-4 py-2">Race distance</td>
              <td className="text-center px-4 py-2">Qualifying Time</td>
              <td className="text-center px-4 py-2"></td>
            </tr>
            <tr>
              <td className="text-center px-4 py-2">Male</td>
              <td className="text-center px-4 py-2">2.5 Kilometer</td>
              <td className="text-center px-4 py-2">12 Minutes</td>
              <td className="text-center px-4 py-2"></td>
            </tr>
            <tr>
              <td className="text-center px-4 py-2">Female</td>
              <td className="text-center px-4 py-2">1.0 Kilometer</td>
              <td className="text-center px-4 py-2">6 Minutes</td>
              <td className="text-center px-4 py-2"></td>
            </tr>
            <tr>
              <td className="text-center px-4 py-2">Ex.Serviceman</td>
              <td className="text-center px-4 py-2">1.0 Kilometer</td>
              <td className="text-center px-4 py-2">5 Minutes</td>
              <td className="text-center px-4 py-2"></td>
            </tr>
            <tr className="bg-gray-100">
              <th
                colSpan="4"
                className="text-center px-4 py-2 font-bold text-gray-700"
              >
                Vacancy Details
              </th>
            </tr>
            <tr className="bg-gray-100">
              <th className="text-center px-4 py-2">Post Name</th>
              <th className="text-center px-4 py-2">Total</th>
              <th className="text-center px-4 py-2">Age Limit (as on 06-09-2024)</th>
              <th className="text-center px-4 py-2">Qualification</th>
            </tr>
            <tr>
              <td className="text-center px-4 py-2">Assistant Lineman</td>
              <td className="text-center px-4 py-2">45</td>
              <td className="text-center px-4 py-2">18-42 Years</td>
              <td className="text-center px-4 py-2">
                10th class, ITI (Electrician/Wireman trade)
              </td>
            </tr>
            <tr>
              <td className="text-center px-4 py-2">Deputy Ranger</td>
              <td className="text-center px-4 py-2">02</td>
              <td className="text-center px-4 py-2">18-42 Years</td>
              <td className="text-center px-4 py-2">
                10+2, Diploma (Relevant Engg)
              </td>
            </tr>
            <tr>
              <td className="text-center px-4 py-2">
                Warder (Male/Female)
              </td>
              <td className="text-center px-4 py-2">34</td>
              <td className="text-center px-4 py-2">18-25 Years</td>
              <td className="text-center px-4 py-2">10+2</td>
            </tr>
            <tr>
              <td className="text-center px-4 py-2">
                Assistant Superintendent Jail (Male)
              </td>
              <td className="text-center px-4 py-2">02</td>
              <td className="text-center px-4 py-2">21-27 Years</td>
              <td className="text-center px-4 py-2">Any Degree</td>
            </tr>
            <tr>
              <td className="text-center px-4 py-2">Junior Coach</td>
              <td className="text-center px-4 py-2">106</td>
              <td className="text-center px-4 py-2">18-42 Years</td>
              <td className="text-center px-4 py-2">
                Diploma (Coaching)/Any Degree
              </td>
            </tr>
            <tr>
              <td className="text-center px-4 py-2">Constable</td>
              <td className="text-center px-4 py-2">165</td>
              <td className="text-center px-4 py-2">18-25 Years</td>
              <td className="text-center px-4 py-2">10+ 2</td>
            </tr>
            <tr>
              <td className="text-center px-4 py-2">Sub-Inspector</td>
              <td className="text-center px-4 py-2">15</td>
              <td className="text-center px-4 py-2">21-27 Years</td>
              <td className="text-center px-4 py-2">Any Degree</td>
            </tr>
            <tr>
              <td colSpan="4" className="text-center px-4 py-2">
                <span className="font-bold">Important Links</span>
              </td>
            </tr>
            <tr>
              <td className="text-center px-4 py-2">
                Apply Online (31-08-2024)
              </td>
              <td colSpan="3" className="text-center px-4 py-2">
                <a
                  href="https://adv132024.hryssc.com/hssc/empOnboardingHomepage"
                  target="_blank"
                  rel="nofollow"
                  className="underline text-blue-500"
                >
                  Click Here
                </a>
              </td>
            </tr>
            <tr>
              <td className="text-center px-4 py-2">Notification</td>
              <td colSpan="3" className="text-center px-4 py-2">
                <a
                  href="https://img.freejobalert.com/uploads/2024/08/Notification-HSSC-Group-C-2024.pdf"
                  target="_blank"
                  rel="nofollow"
                  className="underline text-blue-500"
                >
                  Click Here
                </a>
              </td>
            </tr>
            <tr>
              <td className="text-center px-4 py-2">Official Website</td>
              <td colSpan="3" className="text-center px-4 py-2">
                <a
                  href="https://hssc.gov.in/"
                  target="_blank"
                  rel="nofollow"
                  className="underline text-blue-500"
                >
                  Click Here
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="grid grid-cols-1 gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold mb-2" id="trained_graduate_teacher">
            HSSC TGT 2024 Online Form
          </h2>
          <p className="mb-1">
            <span className="font-bold">Post Date:</span>{' '}
            <span className="text-gray-700">17-08-2024</span>
          </p>
          <p className="mb-1">
            <span className="font-bold">Latest Update:</span>{' '}
            <span className="text-gray-700">31-08-2024</span>
          </p>
          <p className="mb-1">
            <span className="font-bold">Total Vacancy:</span>{' '}
            <span className="text-gray-700">76</span>
          </p>
          <p>
            <span className="font-bold">Brief Information:</span> Haryana Staff
            Selection Commission (HSSC) has published a notification for TGT
            Vacancy. Those Candidates who are interested in the vacancy details
            &amp; completed all eligibility criteria can read the Notification &amp;
            Apply Online.
          </p>
        </div>
        <table className="table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th
                colSpan="2"
                className="text-center px-4 py-2 font-bold text-gray-700"
              >
                Haryana Staff Selection Commission (HSSC)
              </th>
            </tr>
            <tr className="bg-gray-100">
              <th
                colSpan="2"
                className="text-center px-4 py-2 font-bold text-gray-700"
              >
                Advt No. 12/2024
              </th>
            </tr>
            <tr className="bg-gray-100">
              <th
                colSpan="2"
                className="text-center px-4 py-2 font-bold text-gray-700"
              >
                TGT Vacancy 2024
              </th>
            </tr>
            <tr className="bg-gray-100">
              <th
                colSpan="2"
                className="text-center px-4 py-2 font-bold text-gray-700"
              >
                <a
                  href="https://www.freejobalert.com"
                  target="_blank"
                  rel="noopener"
                  className="underline text-blue-500"
                >
                  
                </a>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100">
              <th
                colSpan="2"
                className="text-center px-4 py-2 font-bold text-gray-700"
              >
                Application Fee
              </th>
            </tr>
            <tr>
              <td className="text-center px-4 py-2">
                For General (Male/Female) Candidates
              </td>
              <td className="text-center px-4 py-2">Rs 150/-</td>
            </tr>
            <tr>
              <td className="text-center px-4 py-2">
                For Female (Haryana Resident) Candidates
              </td>
              <td className="text-center px-4 py-2">Rs. 75/-</td>
            </tr>
            <tr>
              <td className="text-center px-4 py-2">
                For Male SC/BC/EWS Candidates of Haryana State
              </td>
              <td className="text-center px-4 py-2">Rs. 35/-</td>
            </tr>
            <tr>
              <td className="text-center px-4 py-2">
                For Female (SC/BC/EWS) Candidates of Haryana State
              </td>
              <td className="text-center px-4 py-2">Rs. 18/-</td>
            </tr>
            <tr>
              <td className="text-center px-4 py-2">
                For PWD/ Ex-Servicemen of Haryana Candidates
              </td>
              <td className="text-center px-4 py-2">Nil</td>
            </tr>
            <tr className="bg-gray-100">
              <th
                colSpan="2"
                className="text-center px-4 py-2 font-bold text-gray-700"
              >
                Important Dates
              </th>
            </tr>
            <tr>
              <td className="text-center px-4 py-2">Date of Publication</td>
              <td className="text-center px-4 py-2">16-08-2024</td>
            </tr>
            <tr>
              <td className="text-center px-4 py-2">
                Starting Date For Apply Online &amp; Payment of Fee
              </td>
              <td className="text-center px-4 py-2">24-08-2024</td>
            </tr>
            <tr>
              <td className="text-center px-4 py-2">Last Date for Apply Online</td>
              <td className="text-center px-4 py-2">06-09-2024</td>
            </tr>
            <tr>
              <td className="text-center px-4 py-2">
                Closing date for Payment of Fee
              </td>
              <td className="text-center px-4 py-2">08-09-2024</td>
            </tr>
            <tr className="bg-gray-100">
              <th
                colSpan="2"
                className="text-center px-4 py-2 font-bold text-gray-700"
              >
                Age Limit
              </th>
            </tr>
            <tr>
              <td className="text-center px-4 py-2">Minimum Age Limit</td>
              <td className="text-center px-4 py-2">18 Years</td>
            </tr>
            <tr>
              <td className="text-center px-4 py-2">Maximum Age Limit</td>
              <td className="text-center px-4 py-2">42 Years</td>
            </tr>
            <tr className="bg-gray-100">
              <th
                colSpan="2"
                className="text-center px-4 py-2 font-bold text-gray-700"
              >
                Qualification
              </th>
            </tr>
            <tr>
              <td className="text-center px-4 py-2" colSpan="2">
                Candidates Should Possess Degree with B.P.Ed, D.P.Ed
                <br/>
                Certificate of having qualified Haryana Teacher Eligibility
                Test (HTET)/ School Teachers Eligibility Test (STET) in Physical
                Education Subject
                <br/>
                Hindi or Sanskrit as one of the subject in Matric or Hindi as
                one of the subject in Higher Education
              </td>
            </tr>
            <tr className="bg-gray-100">
              <th
                colSpan="2"
                className="text-center px-4 py-2 font-bold text-gray-700"
              >
                Vacancy Details
              </th>
            </tr>
            <tr className="bg-gray-100">
              <th className="text-center px-4 py-2">Post Name</th>
              <th className="text-center px-4 py-2">Total</th>
            </tr>
            <tr>
              <td className="text-center px-4 py-2">
                TGT (Physical Education) Rest of Haryana (Male)
              </td>
              <td className="text-center px-4 py-2">49</td>
            </tr>
            <tr>
              <td className="text-center px-4 py-2">
                TGT (Physical Education) Rest of Haryana (Female)
              </td>
              <td className="text-center px-4 py-2">24</td>
            </tr>
            <tr>
              <td className="text-center px-4 py-2">
                TGT (Physical Education) Mewat Cadre (Male)
              </td>
              <td className="text-center px-4 py-2">02</td>
            </tr>
            <tr>
              <td className="text-center px-4 py-2">
                TGT (Physical Education) Mewat Cadre (Female)
              </td>
              <td className="text-center px-4 py-2">01</td>
            </tr>
            <tr>
              <td colSpan="2" className="text-center px-4 py-2">
                <span className="font-bold">Important Links</span>
              </td>
            </tr>
            <tr>
              <td className="text-center px-4 py-2">
                Apply Online (31-08-2024)
              </td>
              <td className="text-center px-4 py-2">
                <a
                  href="https://adv122024.hryssc.com/hssc/empOnboardingHomepage"
                  target="_blank"
                  rel="nofollow"
                  className="underline text-blue-500"
                >
                  Click Here
                </a>
              </td>
            </tr>
            <tr>
              <td className="text-center px-4 py-2">Notification</td>
              <td className="text-center px-4 py-2">
                <a
                  href="https://img.freejobalert.com/uploads/2024/08/Notification-HSSC-TGT-2024.pdf"
                  target="_blank"
                  rel="nofollow"
                  className="underline text-blue-500"
                >
                  Click Here
                </a>
              </td>
            </tr>
            <tr>
              <td className="text-center px-4 py-2">Official Website</td>
              <td className="text-center px-4 py-2">
                <a
                  href="https://hssc.gov.in/"
                  target="_blank"
                  rel="nofollow"
                  className="underline text-blue-500"
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