export default function GPSCRecruitment() {
  // This component displays recruitment information for GPSC Various Vacancy Online Form 2024.  It includes details about the post, important dates, application fees, and vacancy details in a tabular format.  The component is classNamed using Tailwind CSS and is optimized for SEO.

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">GPSC Various Vacancy Online Form 2024</h1>

      <p className="text-justify mb-4">
        This recruitment drive by the Gujarat Public Service Commission (GPSC) offers various positions, including General Surgeon, Physician, Gynaecologist, and more.  Eligible candidates can apply online.
      </p>

      <section className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Key Highlights</h2>
        <ul className="list-disc list-inside">
          <li>Post Date: 22-11-2024</li>
          <li>Total Vacancies: 2804</li>
          <li>Application Deadline: 10-12-2024</li>
          <li>Application Starts: 21-11-2024</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Post Details</h2>
        <p className="text-justify mb-2">
          <span className="font-bold text-green-600">Name of the Post:</span> GPSC Various Vacancy Online Form 2024
        </p>
        <p className="text-justify mb-2">
          <span className="font-bold text-green-600">Post Date:</span> 22-11-2024
        </p>
        <p className="text-justify mb-2">
          <span className="font-bold text-green-600">Total Vacancy:</span> 2804
        </p>
        <p className="text-justify mb-2">
          <span className="font-bold text-red-600">Brief Information:</span> Gujarat Public Service Commission (GPSC) has announced recruitment for various positions including General Surgeon, Physician, Gynaecologist, Orthopaedic Surgeon, Dermatologist, and others.
        </p>
      </section>


      <section className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Application Fee</h2>
        <ul className="list-disc list-inside">
          <li>General (Unreserved): Rs. 100/- + applicable postal charges</li>
          <li>Reserved Categories (Gujarat State): Nil</li>
          <li>Payment Mode: Online</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Important Dates</h2>
        <ul className="list-disc list-inside">
          <li>Starting Date for Apply Online & Payment of Fee: 21-11-2024 at 13:00 hrs</li>
          <li>Last Date for Apply Online & Payment of Fee: 10-12-2024 till 23:59 hrs</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Vacancy Details</h2>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2 text-center text-purple-600">Advt No</th>
              <th className="border border-gray-300 p-2 text-center text-purple-600">Post Name</th>
              <th className="border border-gray-300 p-2 text-center text-purple-600">Total</th>
              <th className="border border-gray-300 p-2 text-center text-purple-600">Age Limit (as on 10-12-2024)</th>
              <th className="border border-gray-300 p-2 text-center text-purple-600">Qualification</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2 text-center">82/2024-25</td>
              <td className="border border-gray-300 p-2 text-center">Gujarat Medical Service, Class-2, Medical Officer Class-2, Insurance Medical Officer(Allopathy), Class-2 and Tutor of Various Subject, Class-2</td>
              <td className="border border-gray-300 p-2 text-center">1868</td>
              <td className="border border-gray-300 p-2 text-center">20 – 35 Years</td>
              <td className="border border-gray-300 p-2 text-center">MBBS</td>
            </tr>
            {/* Add remaining rows similarly */}
             <tr>
              <td className="border border-gray-300 p-2 text-center">83/2024-25</td>
              <td className="border border-gray-300 p-2 text-center">General Surgeon(Specialist Service), Class-1, Gujarat Health and Medical Service, Health and Family Welfare Department</td>
              <td className="border border-gray-300 p-2 text-center">200</td>
              <td className="border border-gray-300 p-2 text-center">21 – 40 Years</td>
              <td className="border border-gray-300 p-2 text-center">MS/DNB</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center">84/2024-25</td>
              <td className="border border-gray-300 p-2 text-center">Physician (Specialist Service), Class-1, Gujarat Health and Medical Service, Health and Family Welfare Department</td>
              <td className="border border-gray-300 p-2 text-center">227</td>
              <td className="border border-gray-300 p-2 text-center">21 – 40 Years</td>
              <td className="border border-gray-300 p-2 text-center">MD/DNB</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center">85/2024-25</td>
              <td className="border border-gray-300 p-2 text-center">Gynaecologist (Specialist Service), Class-1, Gujarat Health and Medical Service, Health and Family Welfare Department</td>
              <td className="border border-gray-300 p-2 text-center">273</td>
              <td className="border border-gray-300 p-2 text-center">21 – 40 Years</td>
              <td className="border border-gray-300 p-2 text-center">MD/MS/DNB/PG Diploma</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center">86/2024-25</td>
              <td className="border border-gray-300 p-2 text-center">Orthopaedic Surgeon (Specialist Service), Class-1, Gujarat Health and Medical Service, Health and Family Welfare</td>
              <td className="border border-gray-300 p-2 text-center">31</td>
              <td className="border border-gray-300 p-2 text-center">21 – 40 Years</td>
              <td className="border border-gray-300 p-2 text-center">MD/DNB/PG Diploma</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center">87/2024-25</td>
              <td className="border border-gray-300 p-2 text-center">Dermatologist (Specialist Service), Class-1, Gujarat Health and Medical Service, Health and Family Welfare Department</td>
              <td className="border border-gray-300 p-2 text-center">09</td>
              <td className="border border-gray-300 p-2 text-center">21 – 40 Years</td>
              <td className="border border-gray-300 p-2 text-center">MD/DNB/PG Diploma</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center">88/2024-25</td>
              <td className="border border-gray-300 p-2 text-center">Radiologist (Specialist Service), Class 1, Gujarat Health and Medical Services, Health and Family Welfare Department</td>
              <td className="border border-gray-300 p-2 text-center">47</td>
              <td className="border border-gray-300 p-2 text-center">21 – 40 Years</td>
              <td className="border border-gray-300 p-2 text-center">MD/DNB/PG Diploma</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center">89/2024-25</td>
              <td className="border border-gray-300 p-2 text-center">Anesthetist (Specialist Service), Class-1, Gujarat Health and Medical Service, Health and Family Welfare Department</td>
              <td className="border border-gray-300 p-2 text-center">106</td>
              <td className="border border-gray-300 p-2 text-center">21 – 40 Years</td>
              <td className="border border-gray-300 p-2 text-center">MD/DNB/PG Diploma</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center">90/2024-25</td>
              <td className="border border-gray-300 p-2 text-center">Professor, Immuno Haematology and Blood Transfusion (I.H.B.T), General State Service, Class-1</td>
              <td className="border border-gray-300 p-2 text-center">01</td>
              <td className="border border-gray-300 p-2 text-center">21 – 45 Years</td>
              <td className="border border-gray-300 p-2 text-center">DM/MD/DNB</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center">91/2024-25</td>
              <td className="border border-gray-300 p-2 text-center">Professor, Cardiology, General State Service, Class-1</td>
              <td className="border border-gray-300 p-2 text-center">06</td>
              <td className="border border-gray-300 p-2 text-center">21 – 45 Years</td>
              <td className="border border-gray-300 p-2 text-center">DM/DNB</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center">92/2024-25</td>
              <td className="border border-gray-300 p-2 text-center">Professor, Medical Gastroenterology, General State Service, Class-1</td>
              <td className="border border-gray-300 p-2 text-center">01</td>
              <td className="border border-gray-300 p-2 text-center">21 – 45 Years</td>
              <td className="border border-gray-300 p-2 text-center">DM/MD/DNB</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center">93/2024-25</td>
              <td className="border border-gray-300 p-2 text-center">Professor, C. T. Surgery, General State Service, Class-1</td>
              <td className="border border-gray-300 p-2 text-center">03</td>
              <td className="border border-gray-300 p-2 text-center">21 – 45 Years</td>
              <td className="border border-gray-300 p-2 text-center">M.CH/DNB</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center">94/2024-25</td>
              <td className="border border-gray-300 p-2 text-center">Associate Professor, Cardiology, General State Service, Class-1</td>
              <td className="border border-gray-300 p-2 text-center">06</td>
              <td className="border border-gray-300 p-2 text-center">21 – 43 Years</td>
              <td className="border border-gray-300 p-2 text-center">DM/DNB</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center">95/2024-25</td>
              <td className="border border-gray-300 p-2 text-center">Associate Professor, Neuro Surgery, General State Service, Class-1</td>
              <td className="border border-gray-300 p-2 text-center">06</td>
              <td className="border border-gray-300 p-2 text-center">21 – 43 Years</td>
              <td className="border border-gray-300 p-2 text-center">M.CH/DNB</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center">96/2024-25</td>
              <td className="border border-gray-300 p-2 text-center">Associate Professor, Surgical Gastroenterology, General State Service, Class-1</td>
              <td className="border border-gray-300 p-2 text-center">01</td>
              <td className="border border-gray-300 p-2 text-center">21 – 43 Years</td>
              <td className="border border-gray-300 p-2 text-center">M.CH/MS/DNB</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center">97/2024-25</td>
              <td className="border border-gray-300 p-2 text-center">Physician, Class-1, Employees State Insurance Scheme</td>
              <td className="border border-gray-300 p-2 text-center">05</td>
              <td className="border border-gray-300 p-2 text-center">21 – 45 Years</td>
              <td className="border border-gray-300 p-2 text-center">MD/DNB</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center">98/2024-25</td>
              <td className="border border-gray-300 p-2 text-center">Gynaecologist, Class-1, Employees State Insurance Scheme</td>
              <td className="border border-gray-300 p-2 text-center">03</td>
              <td className="border border-gray-300 p-2 text-center">21 – 45 Years</td>
              <td className="border border-gray-300 p-2 text-center">MD/MS/DNB/PG Diploma</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center">99/2024-25</td>
              <td className="border border-gray-300 p-2 text-center">Orthopaedic Surgeon, Class-1, Employees State Insurance Scheme</td>
              <td className="border border-gray-300 p-2 text-center">04</td>
              <td className="border border-gray-300 p-2 text-center">21 – 45 Years</td>
              <td className="border border-gray-300 p-2 text-center">MS/DNB</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center">100/2024-25</td>
              <td className="border border-gray-300 p-2 text-center">Radiologist, Class-1, Employees State Insurance Scheme</td>
              <td className="border border-gray-300 p-2 text-center">02</td>
              <td className="border border-gray-300 p-2 text-center">21 – 45 Years</td>
              <td className="border border-gray-300 p-2 text-center">MD/DNB/PG Diploma</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center">101/2024-25</td>
              <td className="border border-gray-300 p-2 text-center">Principal, Gujarat Nursing Service, Class-1, Health &amp; Family Welfare Department</td>
              <td className="border border-gray-300 p-2 text-center">05</td>
              <td className="border border-gray-300 p-2 text-center">21 – 47 Years</td>
              <td className="border border-gray-300 p-2 text-center">PG (Nursing)</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Important Links</h2>
        <ul className="list-disc list-inside">
          <li>
            <a href="https://gpsc.gujarat.gov.in/RecruitmentOpen" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Apply Online
            </a>
          </li>
          <li>
            <a href="https://gpsc.gujarat.gov.in/newseventlist" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Detailed Notification
            </a>
          </li>
          <li>
            <a href="https://img.freejobalert.com/uploads/2024/11/Short-Notification-GPSC-Various-Vacancy-82-to-101_2024-25.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Short Notification
            </a>
          </li>
          <li>
            <a href="https://gpsc.gujarat.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Official Website
            </a>
          </li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-bold mb-2">FAQs</h2>
        <dl className="list-inside">
          <dt className="font-bold">What is the starting date to apply online?</dt>
          <dd>Starting Date to apply online is 21-11-2024.</dd>
          <dt className="font-bold">What is the last date to apply online?</dt>
          <dd>Last Date for apply online is 10-12-2024.</dd>
          <dt className="font-bold">What is the Eligibility to apply?</dt>
          <dd>MBBS, PG Diploma/ Degree</dd>
          <dt className="font-bold">What is the Minimum Age Limit?</dt>
          <dd>20 Years.</dd>
          <dt className="font-bold">On what basis age limit is calculated?</dt>
          <dd>Age Will be Calculated as on 10-12-2024.</dd>
          <dt className="font-bold">How many vacancies are being recruited?</dt>
          <dd>Total 2804 Vacancies.</dd>
          <dt className="font-bold">How to pay fee to apply?</dt>
          <dd>Through Online.</dd>
        </dl>
      </section>

      <p className="text-sm text-gray-500">Keywords: GPSC, Gujarat Public Service Commission, Recruitment, Medical Officer, Surgeon, Physician, Gynaecologist, Jobs, Vacancies, 2024</p>
    </div>
  );
}