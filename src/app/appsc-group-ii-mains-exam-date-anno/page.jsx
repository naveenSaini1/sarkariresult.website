export default function AppscGroup2Recruitment() {
  // This component displays recruitment information for APPSC Group II Services 2023. 
  // It includes details about the post, important dates, application fees, vacancy details, and relevant links.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">APPSC Group II Services 2023 Recruitment</h1>
      <p className="mb-4">The Andhra Pradesh Public Service Commission (APPSC) has announced recruitment for Group II Services in 2023. This is a great opportunity for candidates seeking government jobs in Andhra Pradesh. </p>

      <h2 className="text-2xl font-bold mb-4">Key Highlights</h2>
      <ul className="list-disc ml-4 mb-4">
        <li><strong>Post Name:</strong> APPSC Group II Services</li>
        <li><strong>Total Vacancies:</strong> 905</li>
        <li><strong>Last Date to Apply:</strong> 17-01-2024</li>
        <li><strong>Mains Written Exam Date:</strong> 05-01-2025</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Brief Information</h2>
      <p className="mb-4">The Andhra Pradesh Public Service Commission (APPSC) has issued a notification for the recruitment of Group II Service Exam 2023. Eligible candidates can apply online through the official website.</p>

      <h2 className="text-2xl font-bold mb-4">Application Fee</h2>
      <ul className="list-disc ml-4 mb-4">
        <li>For All other Candidates: <strong>Rs. 250/- (Application Fee) + 80/- (Examination Fee)</strong></li>
        <li>For SC/ ST/ BC/ PBDs &amp; Ex-Service Men/ Families having household supply white card issued by Civil Supplies Dept/ Un-employed youth: <strong>Rs. 250/- (Application Fee Only)</strong></li>
        <li>In case of corrections Rs.100/- per correction will be charged</li>
        <li>Payment Mode: <strong>Through Net Banking/ Credit Card/ Debit Card</strong></li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Important Dates</h2>
      <ul className="list-disc ml-4 mb-4">
        <li>Starting Date for Apply Online &amp; Payment of Fee: <strong>21-12-2023</strong></li>
        <li>Last Date for Apply Online &amp; Payment of Fee: <strong>17-01-2024 up to 11:59 midnight</strong></li>
        <li>Date of Screening Test (Preliminary Exam): <span className={{ color: '#000000' }}><strong>25-02-2024</strong></span></li>
        <li>Date for Downloading Screening Test Hall Ticket:&nbsp;<strong>14-02-2024</strong></li>
        <li>Date of Mains Written Exam: <span className={{ color: '#ff0000' }}><b><span className={{ color: '#000000' }}>28-07-2024 FN &amp; AN</span> (Exam Postponed)</b></span></li>
        <li>Date for submit their post and zonal/district preferences along with exam center preferences:&nbsp;<strong>05-06-2024 to 18-06-2024</strong></li>
        <li>Date of Mains Written Exam <span className={{ color: '#ff0000' }}><strong>: 05-01-2025</strong></span></li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Age Limit (as on 01-07-2023)</h2>
      <ul className="list-disc ml-4 mb-4">
        <li>For the Post of Prohibition &amp; Excise Sub-Inspector:&nbsp;<strong>18-30 Years</strong></li>
        <li>For the Post of Sub-Registrar Grade-II:&nbsp;<strong>20-42 Years</strong></li>
        <li>For all other Posts:&nbsp;<strong>18-42 Years</strong></li>
        <li>Age Relaxation is Applicable as per Rules.</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Physical Standards</h2>
      <p className="mb-4"><span className={{ color: '#ff00ff' }}><strong>Physical Requirements for the Post Code: 07</strong></span></p>
      <ul className="list-disc ml-4 mb-4">
        <li><strong>FOR MEN:</strong><br/>
          i) Must not be less than 165 Cms in height.<br/>
          ii) Must not be less than 81 Cms round the Chest on full expiration with a minimumexpansion of 5 Cms.
        </li>
        <li>Provided that in the case of candidates belonging to STs where they required quota cannot be fully utilized for want of sufficient candidates possessing the requisite height, it may be relaxed by 5 Cms so that it shall not be less than 160 Cms.</li>
        <li>Provided further that members of the Andhra Pradesh Ministerial Service working in the Prohibition &amp; Excise Department, Drivers and Attenders shall possess a minimum height of 163 Cms, if they are otherwise qualified</li>
        <li><strong>FOR WOMEN:</strong><br/>
          i) Must not be less than 152.5 Cms in height.<br/>
          ii) Must not be less than 45.5 Kgs in weight.
        </li>
        <li><strong>VISION STANDARDS:</strong><br/>
          i) Right Eye: Near Vision: 0.5 (Snellen) Distant: 6/6<br/>
          ii) Left Eye: Near Vision: 0.5 (Snellen) Distant: 6/6
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>

      {/* Table for Vacancy Details */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-gray-800">
              <th className="px-4 py-2 text-center">Post Code</th>
              <th className="px-4 py-2 text-center">Post Name</th>
              <th className="px-4 py-2 text-center">Total</th>
              <th className="px-4 py-2 text-center">Qualification</th>
            </tr>
          </thead>
          <tbody>
            {/* Carried Forward Vacancies */}
            <tr className="bg-gray-100">
              <td colspan="4" className="px-4 py-2 text-center font-bold text-red-500">CARRIED FORWARD (CF) VACANCIES</td>
            </tr>
            <tr className="bg-gray-100">
              <td colspan="4" className="px-4 py-2 text-center font-bold">Executive Posts - 08</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">05</td>
              <td className="px-4 py-2 text-center">Assistant Registrar in A.P. Cooperative Subordinate Service</td>
              <td className="px-4 py-2 text-center">02</td>
              <td className="px-4 py-2 text-center" rowspan="3">Any Degree</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">06</td>
              <td className="px-4 py-2 text-center">Extension Officer in PR &amp; RD in A.P. Panchayat Raj &amp; Rural Development Service</td>
              <td className="px-4 py-2 text-center">02</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">07</td>
              <td className="px-4 py-2 text-center">Prohibition &amp; Excise Sub-Inspector in A.P. Prohibition &amp; Excise Sub-Service</td>
              <td className="px-4 py-2 text-center">03</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">08</td>
              <td className="px-4 py-2 text-center">Assistant Development Officer in A.P. Handlooms and Textiles Subordinate Service</td>
              <td className="px-4 py-2 text-center">01</td>
              <td className="px-4 py-2 text-center">Diploma (Textile/ Handloom Technology) or Any Degree</td>
            </tr>
            <tr>
              <td colspan="4" className="px-4 py-2 text-center font-bold">Non Executive Posts - 53</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">09</td>
              <td className="px-4 py-2 text-center">Assistant Section Officer (GAD) in A.P. Secretariat Sub-Service</td>
              <td className="px-4 py-2 text-center">07</td>
              <td className="px-4 py-2 text-center">Any Degree</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">10</td>
              <td className="px-4 py-2 text-center">Assistant Section Officer (Law Dept.) in A.P. Secretariat Sub-Service</td>
              <td className="px-4 py-2 text-center">03</td>
              <td className="px-4 py-2 text-center">Degree (Law)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">11</td>
              <td className="px-4 py-2 text-center">Assistant Section Officer (Legislature) in A.P. Legislature Secretariat Sub Service</td>
              <td className="px-4 py-2 text-center">01</td>
              <td className="px-4 py-2 text-center">Any Degree</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">13</td>
              <td className="px-4 py-2 text-center">Senior Auditor in A.P. State Audit Subordinate Service</td>
              <td className="px-4 py-2 text-center">03</td>
              <td className="px-4 py-2 text-center">Any Degree</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">15</td>
              <td className="px-4 py-2 text-center">Senior Accountant in A.P. Treasuries and Accounts Sub-Service (HODs)</td>
              <td className="px-4 py-2 text-center">01</td>
              <td className="px-4 py-2 text-center">Degree (Relevant Discipline)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">16</td>
              <td className="px-4 py-2 text-center">Senior Accountant in A.P. Treasuries and Accounts Sub-Service (Districts)</td>
              <td className="px-4 py-2 text-center">02</td>
              <td className="px-4 py-2 text-center">Degree (Relevant Discipline)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">17</td>
              <td className="px-4 py-2 text-center">Senior Accountant in A.P. Works &amp; Accounts (Zone wise) Sub Service.</td>
              <td className="px-4 py-2 text-center">02</td>
              <td className="px-4 py-2 text-center">Any Degree</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">18</td>
              <td className="px-4 py-2 text-center">Junior Accountant in various Departments in A.P. Treasuries and Accounts Sub-Service</td>
              <td className="px-4 py-2 text-center">02</td>
              <td className="px-4 py-2 text-center">Degree (Relevant Discipline)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">19</td>
              <td className="px-4 py-2 text-center">Junior Assistant in A.P. Public Service Commission</td>
              <td className="px-4 py-2 text-center">02</td>
              <td className="px-4 py-2 text-center" rowspan="11">Any Degree</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">20</td>
              <td className="px-4 py-2 text-center">Junior Assistant in Economics and Statistics</td>
              <td className="px-4 py-2 text-center">01</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">21</td>
              <td className="px-4 py-2 text-center">Junior Assistant in Social Welfare</td>
              <td className="px-4 py-2 text-center">01</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">53</td>
              <td className="px-4 py-2 text-center">Junior Assistant in Engineering Research Labs</td>
              <td className="px-4 py-2 text-center">01</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">54</td>
              <td className="px-4 py-2 text-center">Junior Assistant in Preventive Medicine</td>
              <td className="px-4 py-2 text-center">01</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">55</td>
              <td className="px-4 py-2 text-center">Junior Assistant in Government Text book Press</td>
              <td className="px-4 py-2 text-center">01</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">56</td>
              <td className="px-4 py-2 text-center">Junior Assistant in Commissioner of Industries</td>
              <td className="px-4 py-2 text-center">05</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">57</td>
              <td className="px-4 py-2 text-center">Junior Assistant in Conservator of Forest Services</td>
              <td className="px-4 py-2 text-center">02</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">57</td>
              <td className="px-4 py-2 text-center">Junior Assistant in Principal Chief Conservator of Forests</td>
              <td className="px-4 py-2 text-center"><span className={{ color: '#ff0000' }}>08</span></td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">58</td>
              <td className="px-4 py-2 text-center">Junior Assistant in Technical Education</td>
              <td className="px-4 py-2 text-center">09</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">59</td>
              <td className="px-4 py-2 text-center">Junior Assistant in RWS &amp; S</td>
              <td className="px-4 py-2 text-center">01</td>
            </tr>
            {/* Fresh Vacancies */}
            <tr className="bg-gray-100">
              <td colspan="4" className="px-4 py-2 text-center font-bold text-red-500">FRESH VACANCIES</td>
            </tr>
            <tr className="bg-gray-100">
              <td colspan="4" className="px-4 py-2 text-center font-bold">Executive Posts - 325</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">01</td>
              <td className="px-4 py-2 text-center">Municipal Commissioner Grade-III in A.P. Municipal Commissioners Subordinate Service</td>
              <td className="px-4 py-2 text-center">04</td>
              <td className="px-4 py-2 text-center" rowspan="6">Any Degree</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">02</td>
              <td className="px-4 py-2 text-center">Sub-Registrar Grade-II in Registration and Stamps Subordinate Service</td>
              <td className="px-4 py-2 text-center">16</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">03</td>
              <td className="px-4 py-2 text-center">Deputy Tahsildar in A.P. Revenue Subordinate Service</td>
              <td className="px-4 py-2 text-center">114</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">04</td>
              <td className="px-4 py-2 text-center">Assistant Labour Officer in A.P. Labour Subordinate Service</td>
              <td className="px-4 py-2 text-center">28</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">05</td>
              <td className="px-4 py-2 text-center">Assistant Registrar in A.P. Co-operative Societies</td>
              <td className="px-4 py-2 text-center">14</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">07</td>
              <td className="px-4 py-2 text-center">Prohibition &amp; Excise Sub-Inspector in A.P. Prohibition &amp; Excise Sub Service</td>
              <td className="px-4 py-2 text-center">149</td>
            </tr>
            <tr className="bg-gray-100">
              <td colspan="4" className="px-4 py-2 text-center font-bold">Non – Executive Posts - 521</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">09</td>
              <td className="px-4 py-2 text-center">Assistant Section Officer (GAD) in A.P. Secretariat Sub-Service</td>
              <td className="px-4 py-2 text-center">211</td>
              <td className="px-4 py-2 text-center">Any Degree</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">10</td>
              <td className="px-4 py-2 text-center">Assistant Section Officer (Law Dept.) in A.P. Secretariat Sub Service</td>
              <td className="px-4 py-2 text-center">12</td>
              <td className="px-4 py-2 text-center">Degree (Law)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">11</td>
              <td className="px-4 py-2 text-center">Assistant Section Officer (Legislature) in A.P. Legislature Secretariat Sub-Service</td>
              <td className="px-4 py-2 text-center">14</td>
              <td className="px-4 py-2 text-center">Any Degree</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">12</td>
              <td className="px-4 py-2 text-center">Assistant Section Officer (Finance Dept.) in A.P. Secretariat Sub Service</td>
              <td className="px-4 py-2 text-center">23</td>
              <td className="px-4 py-2 text-center">Degree (Economics or<br/>
                Commerce or Mathematics)
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">13</td>
              <td className="px-4 py-2 text-center">Senior Auditor in A.P. State Audit Subordinate Service</td>
              <td className="px-4 py-2 text-center">05</td>
              <td className="px-4 py-2 text-center">Any Degree</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">14</td>
              <td className="px-4 py-2 text-center">Auditor in Pay &amp; Account Subordinate Service</td>
              <td className="px-4 py-2 text-center">10</td>
              <td className="px-4 py-2 text-center">Any Degree</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">16</td>
              <td className="px-4 py-2 text-center">Senior Accountant in A.P. Treasuries and Accounts Sub Service (Districts)</td>
              <td className="px-4 py-2 text-center">10</td>
              <td className="px-4 py-2 text-center">Degree (Relevant Discipline)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">18</td>
              <td className="px-4 py-2 text-center">Junior Accountant in various Departments in A.P. Treasuries and Accounts Sub-Service</td>
              <td className="px-4 py-2 text-center">05</td>
              <td className="px-4 py-2 text-center">Degree (Relevant Discipline)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">19</td>
              <td className="px-4 py-2 text-center">Junior Assistant in A.P. Public Service Commission</td>
              <td className="px-4 py-2 text-center">02</td>
              <td className="px-4 py-2 text-center" rowspan="9">Any Degree</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">20</td>
              <td className="px-4 py-2 text-center">Junior Assistant in Economics and Statistics</td>
              <td className="px-4 py-2 text-center">02</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">21</td>
              <td className="px-4 py-2 text-center">Junior Assistant in Social Welfare</td>
              <td className="px-4 py-2 text-center">03</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">53</td>
              <td className="px-4 py-2 text-center">Junior Assistant in Engineering Research Labs</td>
              <td className="px-4 py-2 text-center">01</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">54</td>
              <td className="px-4 py-2 text-center">Junior Assistant in Preventive Medicine</td>
              <td className="px-4 py-2 text-center">02</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">55</td>
              <td className="px-4 py-2 text-center">Junior Assistant in Government Text book Press</td>
              <td className="px-4 py-2 text-center">03</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">56</td>
              <td className="px-4 py-2 text-center">Junior Assistant in Commissioner of Industries</td>
              <td className="px-4 py-2 text-center">01</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">57</td>
              <td className="px-4 py-2 text-center">Junior Assistant in Conservator of Forest Services</td>
              <td className="px-4 py-2 text-center">01</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">58</td>
              <td className="px-4 py-2 text-center">Junior Assistant in Technical Education</td>
              <td className="px-4 py-2 text-center">01</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">59</td>
              <td className="px-4 py-2 text-center">Junior Assistant in RWS &amp; S</td>
              <td className="px-4 py-2 text-center">01</td>
              <td className="px-4 py-2 text-center">Degree (Civil/Mechanical)</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/*  Add additional sections if needed: 
          - Eligibility Criteria
          - Selection Process
          - How to Apply 
          - Important Links
      */}
    </div>
  );
}