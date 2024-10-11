export default function TerritorialArmyRecruitment() {
  // This component displays information about the Territorial Army recruitment for various vacancies in 2024, including post details, important dates, age limits, qualifications, vacancy details for different positions and regions, and physical standards.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Territorial Army Recruitment 2024</h1>
      <p className="text-gray-600 mb-4">
        The Territorial Army has announced recruitment for Soldier, Clerk, and other
        posts in various Battalions and Units. Candidates who meet the eligibility
        criteria can apply for this opportunity.
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Highlights</h2>
      <ul className="list-disc text-gray-600 mb-4">
        <li>
          <span className="font-bold">Post Name:</span>{' '}
          Territorial Army Various Vacancy Offline Form 2024
        </li>
        <li>
          <span className="font-bold">Post Date:</span> 10-10-2024
        </li>
        <li>
          <span className="font-bold">Total Vacancy:</span> 2847
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Brief Information</h2>
      <p className="text-gray-600 mb-4">
        The Territorial Army is recruiting for various positions, including Soldier,
        Clerk, and others. Interested candidates can review the notification and
        apply.
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Important Dates</h2>
      <table className="table-auto w-full text-gray-600 border-collapse mb-4">
        <thead>
          <tr className="bg-gray-200 text-gray-800">
            <th className="px-4 py-2 text-left">Location</th>
            <th className="px-4 py-2 text-left">Rally Date</th>
            <th className="px-4 py-2 text-left">State/ UT/ Districts</th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">Madhopur (Punjab)</td>
            <td className="px-4 py-2" rowSpan={2}>
              10 to 24-11-2024
            </td>
            <td className="px-4 py-2">Ladakh, J&K, Pathankot</td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">Ludhiana (Punjab)</td>
            <td className="px-4 py-2">
              Punjab (other than SAS Nagar and Pathankot)
            </td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">Kalka (Haryana)</td>
            <td className="px-4 py-2" rowSpan={2}>
              28-11-2024 to 12-12-2024
            </td>
            <td className="px-4 py-2">
              Himachal Pradesh, Chandigarh, Panchkula, SAS Nagar
            </td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">New Delhi</td>
            <td className="px-4 py-2">Delhi, Haryana (Except Panchkula)</td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">Pithoragarh (Uttarakhand)</td>
            <td className="px-4 py-2" rowSpan={2}>
              12 to 27-11-2024
            </td>
            <td className="px-4 py-2" rowSpan={2}>
              Odisha, Chhattisgarh, Bihar, Madhya Pradesh, Uttar Pradesh,
              Uttarakhand, Jharkhand
            </td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">Danapur (Bihar)</td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">Kolhapur (Maharashtra)</td>
            <td className="px-4 py-2" rowSpan={5}>
              04 to 16-11-2024
            </td>
            <td className="px-4 py-2" rowSpan={4}>
              Maharashtra, Telangana, Gujarat, Goa, Pondicherry, Dadar & Nagar
              Haveli, Daman & Diu, Lakshadweep, Andhra Pradesh, Tamil Nadu,
              Kerala, Karnataka,
            </td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">Coimbatore (Tamil Nadu)</td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">Belagavi (Karnataka)</td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">Devlali (Maharashtra)</td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">
              Sri Vijaya Puram (Andaman & Nocobar)
            </td>
            <td className="px-4 py-2">
              West Bengal, Andaman & Nicobar, North Eastern States
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Age Limit</h2>
      <ul className="list-disc text-gray-600 mb-4">
        <li>
          <span className="font-bold">Minimum Age Limit:</span> 18 Years
        </li>
        <li>
          <span className="font-bold">Maximum Age Limit:</span> 42 Years
        </li>
        <li>
          For more details, refer to the official notification.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Qualification</h2>
      <ul className="list-disc text-gray-600 mb-4">
        <li>
          <span className="font-bold">For Soldier (General Duty):</span>
          Candidates must have completed Class 10/Matric pass.
        </li>
        <li>
          <span className="font-bold">For Soldier (Clerk):</span> Candidates
          must have passed the 10+2/Intermediate Exam pass in any stream (Arts,
          Commerce, Science).
        </li>
        <li>
          <span className="font-bold">
            For Soldier Tradesmen (All Tradesmen except House Keeper & Mess
            Keeper):
          </span>{' '}
          Candidates must have 10th pass.
        </li>
        <li>
          <span className="font-bold">
            For Soldier Tradesmen (House Keeper & Mess Keeper):
          </span>{' '}
          Candidates must have 8th pass.
        </li>
        <li>
          For more details, refer to the official notification.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Vacancy Details</h2>
      <h3 className="text-xl font-bold text-gray-800 mb-2">
        Territorial Army Vacancy 2024 for Zone -1:
      </h3>
      <table className="table-auto w-full text-gray-600 border-collapse mb-4">
        <thead>
          <tr className="bg-gray-200 text-gray-800">
            <th className="px-4 py-2 text-left">Post Name</th>
            <th className="px-4 py-2 text-left">
              All Infantry Battalions
            </th>
            <th className="px-4 py-2 text-left">
              157 Inf Bn (TA) (H&H) SIKH
            </th>
            <th className="px-4 py-2 text-left">
              158 Inf Bn (TA) (H&H) SIKH LI
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">Soldier (GD)</td>
            <td className="px-4 py-2">515</td>
            <td className="px-4 py-2">239</td>
            <td className="px-4 py-2">260</td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">Clerk</td>
            <td className="px-4 py-2">17</td>
            <td className="px-4 py-2">05</td>
            <td className="px-4 py-2">06</td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">Chef</td>
            <td className="px-4 py-2">15</td>
            <td className="px-4 py-2">17</td>
            <td className="px-4 py-2">14</td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">Cook Mess</td>
            <td className="px-4 py-2">02</td>
            <td className="px-4 py-2">01</td>
            <td className="px-4 py-2">-</td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">Chef Special</td>
            <td className="px-4 py-2">03</td>
            <td className="px-4 py-2">01</td>
            <td className="px-4 py-2">-</td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">Steward</td>
            <td className="px-4 py-2">05</td>
            <td className="px-4 py-2">-</td>
            <td className="px-4 py-2">01</td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">Artisan Metallurgy</td>
            <td className="px-4 py-2">-</td>
            <td className="px-4 py-2">01</td>
            <td className="px-4 py-2">01</td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">Artisan Wood Work</td>
            <td className="px-4 py-2">03</td>
            <td className="px-4 py-2">-</td>
            <td className="px-4 py-2">01</td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">Dresser</td>
            <td className="px-4 py-2">10</td>
            <td className="px-4 py-2">04</td>
            <td className="px-4 py-2">07</td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">Masaichi</td>
            <td className="px-4 py-2">-</td>
            <td className="px-4 py-2">01</td>
            <td className="px-4 py-2">01</td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">House Keeper</td>
            <td className="px-4 py-2">13</td>
            <td className="px-4 py-2">08</td>
            <td className="px-4 py-2">08</td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">Washerman</td>
            <td className="px-4 py-2">10</td>
            <td className="px-4 py-2">05</td>
            <td className="px-4 py-2">08</td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">Total</td>
            <td className="px-4 py-2">594</td>
            <td className="px-4 py-2">283</td>
            <td className="px-4 py-2">309</td>
          </tr>
        </tbody>
      </table>

      <h3 className="text-xl font-bold text-gray-800 mb-2">
        Territorial Army Vacancy 2024 for Zone -2:
      </h3>
      <table className="table-auto w-full text-gray-600 border-collapse mb-4">
        <thead>
          <tr className="bg-gray-200 text-gray-800">
            <th className="px-4 py-2 text-left">Post Name</th>
            <th className="px-4 py-2 text-left">
              120th Infantry Battalion (TA) Bihar
            </th>
            <th className="px-4 py-2 text-left">
              114th Infantry Battalion (TA) JAT
            </th>
            <th className="px-4 py-2 text-left">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">Soldier (General Duty)</td>
            <td className="px-4 py-2">81</td>
            <td className="px-4 py-2">27</td>
            <td className="px-4 py-2">108</td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">Soldier (General Duty)</td>
            <td className="px-4 py-2">07</td>
            <td className="px-4 py-2">-</td>
            <td className="px-4 py-2">07</td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">Soldier (Chef)</td>
            <td className="px-4 py-2">03</td>
            <td className="px-4 py-2">02</td>
            <td className="px-4 py-2">05</td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">Soldier (Cook Mess)</td>
            <td className="px-4 py-2">01</td>
            <td className="px-4 py-2">-</td>
            <td className="px-4 py-2">01</td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">Soldier (Chef Special)</td>
            <td className="px-4 py-2">01</td>
            <td className="px-4 py-2">-</td>
            <td className="px-4 py-2">01</td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">Soldier (Hair Dresser)</td>
            <td className="px-4 py-2">04</td>
            <td className="px-4 py-2">01</td>
            <td className="px-4 py-2">05</td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">Soldier (House Keeper)</td>
            <td className="px-4 py-2">04</td>
            <td className="px-4 py-2">-</td>
            <td className="px-4 py-2">04</td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">Soldier (Artisan Metallurgy)</td>
            <td className="px-4 py-2">01</td>
            <td className="px-4 py-2">-</td>
            <td className="px-4 py-2">01</td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">Soldier (Tailor)</td>
            <td className="px-4 py-2">-</td>
            <td className="px-4 py-2">01</td>
            <td className="px-4 py-2">01</td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">Total</td>
            <td className="px-4 py-2">102</td>
            <td className="px-4 py-2">31</td>
            <td className="px-4 py-2">133</td>
          </tr>
        </tbody>
      </table>

      <h3 className="text-xl font-bold text-gray-800 mb-2">
        Territorial Army Vacancy 2024 for Zone -3:
      </h3>
      <table className="table-auto w-full text-gray-600 border-collapse mb-4">
        <thead>
          <tr className="bg-gray-200 text-gray-800">
            <th className="px-4 py-2 text-left">Post Name</th>
            <th className="px-4 py-2 text-left">
              All Infantry Battalions
            </th>
            <th className="px-4 py-2 text-left">
              64 Inf Bn (TA) (Home & Hearth) NAGA
            </th>
            <th className="px-4 py-2 text-left">
              166 Inf Bn (TA) (H&H) Assam
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">Soldier (General Duty)</td>
            <td className="px-4 py-2">328</td>
            <td className="px-4 py-2">110</td>
            <td className="px-4 py-2">180</td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">Soldier (Hair Dresser)</td>
            <td className="px-4 py-2">09</td>
            <td className="px-4 py-2">05</td>
            <td className="px-4 py-2">04</td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">Soldier (Chef)</td>
            <td className="px-4 py-2">15</td>
            <td className="px-4 py-2">07</td>
            <td className="px-4 py-2">17</td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">Soldier (House Keeper)</td>
            <td className="px-4 py-2">11</td>
            <td className="px-4 py-2">05</td>
            <td className="px-4 py-2">10</td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">Soldier (Washerman)</td>
            <td className="px-4 py-2">10</td>
            <td className="px-4 py-2">06</td>
            <td className="px-4 py-2">07</td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">Soldier (Tailor)</td>
            <td className="px-4 py-2">01</td>
            <td className="px-4 py-2">-</td>
            <td className="px-4 py-2">-</td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">Soldier (Mssaichi)</td>
            <td className="px-4 py-2">-</td>
            <td className="px-4 py-2">01</td>
            <td className="px-4 py-2">01</td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">Soldier (Cook Mess)</td>
            <td className="px-4 py-2">04</td>
            <td className="px-4 py-2">01</td>
            <td className="px-4 py-2">01</td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">Soldier (Chef Special)</td>
            <td className="px-4 py-2">01</td>
            <td className="px-4 py-2">01</td>
            <td className="px-4 py-2">-</td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">Soldier (Equipment Repairer)</td>
            <td className="px-4 py-2">02</td>
            <td className="px-4 py-2">01</td>
            <td className="px-4 py-2">-</td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">Soldier (Artisan Metallurgy)</td>
            <td className="px-4 py-2">01</td>
            <td className="px-4 py-2">-</td>
            <td className="px-4 py-2">-</td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">Soldier (Clerk)</td>
            <td className="px-4 py-2">07</td>
            <td className="px-4 py-2">03</td>
            <td className="px-4 py-2">05</td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">Total</td>
            <td className="px-4 py-2">389</td>
            <td className="px-4 py-2">140</td>
            <td className="px-4 py-2">225</td>
          </tr>
        </tbody>
      </table>

      <h3 className="text-xl font-bold text-gray-800 mb-2">
        Territorial Army Vacancy 2024 for Zone -4:
      </h3>
      <table className="table-auto w-full text-gray-600 border-collapse mb-4">
        <thead>
          <tr className="bg-gray-200 text-gray-800">
            <th className="px-4 py-2 text-left">Post Name</th>
            <th className="px-4 py-2 text-left">
              164 Inf Bn (TA) (H&H) RAJPUTANA RIFLES
            </th>
            <th className="px-4 py-2 text-left">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">Soldier (General Duty)</td>
            <td className="px-4 py-2">285</td>
            <td className="px-4 py-2">285</td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">Soldier (Clerk)</td>
            <td className="px-4 py-2">08</td>
            <td className="px-4 py-2">08</td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">Soldier (Chef)</td>
            <td className="px-4 py-2">05</td>
            <td className="px-4 py-2">05</td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">Soldier (Cook Mess)</td>
            <td className="px-4 py-2">02</td>
            <td className="px-4 py-2">02</td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">Soldier (Chef Special)</td>
            <td className="px-4 py-2">01</td>
            <td className="px-4 py-2">01</td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">Soldier (House Keeper)</td>
            <td className="px-4 py-2">06</td>
            <td className="px-4 py-2">06</td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">Soldier (Washerman)</td>
            <td className="px-4 py-2">05</td>
            <td className="px-4 py-2">05</td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">Soldier (Tailor)</td>
            <td className="px-4 py-2">02</td>
            <td className="px-4 py-2">02</td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">Soldier (Dresser)</td>
            <td className="px-4 py-2">05</td>
            <td className="px-4 py-2">05</td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">Soldier (Equipment Repairer)</td>
            <td className="px-4 py-2">03</td>
            <td className="px-4 py-2">03</td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">Soldier (Carpenter)</td>
            <td className="px-4 py-2">01</td>
            <td className="px-4 py-2">01</td>
          </tr>
          <tr className="odd:bg-gray-100">
            <td className="px-4 py-2">Total</td>
            <td className="px-4 py-2">325</td>
            <td className="px-4 py-2">325</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}