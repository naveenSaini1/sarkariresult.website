export default function RecruitmentInformation() {
  // Displays recruitment information for various TSPSC and TNPSC posts. Includes details like title, post date, latest update, total vacancies, brief information, application fee, important dates, and vacancy details.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Recruitment Information</h1>

      {/* TSPSC Group I Services 2024 */}
      <h2 className="text-2xl font-bold mb-2" id="Group-1-2024">TSPSC Group I Services 2024</h2>
      <p className="mb-2">
        <span className="font-bold">Name of the Post:</span> TSPSC Group I Services 2024 Mains Exam
        Schedule Announced
      </p>
      <p className="mb-2">
        <span className="font-bold">Post Date:</span> 20-02-2024
      </p>
      <p className="mb-2">
        <span className="font-bold">Latest Update:</span> 21-08-2024
      </p>
      <p className="mb-2">
        <span className="font-bold">Total Vacancy:</span> 563
      </p>
      <p className="mb-4">
        <span className="font-bold">Brief Information:</span> Telangana State Public Service Commission
        (TSPSC) has given a notification for Conducting of Group I Services Exam 2024 for
        recruitment of Deputy Collector, Deputy Superintendent of Police, Commercial Tax Officer,
        Municipal Commissioner &amp; Other Vacancies. Those Candidates who are interested in the
        vacancy details &amp; completed all eligibility criteria can read the Notification &amp;
        Apply Online
      </p>
      <div id="article-hrec-1"></div>

      {/* TSPSC Group I Services 2024 Details Table */}
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mb-6">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Post Code
            </th>
            <th scope="col" className="px-6 py-3">
              Post Name
            </th>
            <th scope="col" className="px-6 py-3">
              Total
            </th>
            <th scope="col" className="px-6 py-3">
              Qualification
            </th>
            <th scope="col" className="px-6 py-3">
              Age Limit as on 01-07-2024
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">01</td>
            <td className="px-6 py-4">
              Deputy Collector [Civil Services, (Executive Branch)]
            </td>
            <td className="px-6 py-4">45</td>
            <td className="px-6 py-4" rowspan="3">
              Any Degree
            </td>
            <td className="px-6 py-4">18-46 Years</td>
          </tr>
          <tr className="bg-gray-50 border-b dark:bg-gray-900 dark:border-gray-800">
            <td className="px-6 py-4">02</td>
            <td className="px-6 py-4">
              Deputy Superintendent of Police Category – II (Police Service)
            </td>
            <td className="px-6 py-4">115</td>
            <td className="px-6 py-4">21-35 Years</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">03</td>
            <td className="px-6 py-4">
              Commercial Tax Officer (Commercial Tax Services)
            </td>
            <td className="px-6 py-4">48</td>
            <td className="px-6 py-4">18-46 Years</td>
          </tr>
          <tr className="bg-gray-50 border-b dark:bg-gray-900 dark:border-gray-800">
            <td className="px-6 py-4">04</td>
            <td className="px-6 py-4">
              Regional Transport Officer (Transport Service)
            </td>
            <td className="px-6 py-4">04</td>
            <td className="px-6 py-4">Degree (Mechanical/ Automobile Engg)</td>
            <td className="px-6 py-4">21-46 Years</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">05</td>
            <td className="px-6 py-4">
              District Panchayat Officer (Panchayat Services)
            </td>
            <td className="px-6 py-4">07</td>
            <td className="px-6 py-4" rowspan="11">
              Any Degree
            </td>
            <td className="px-6 py-4">18-46 Years</td>
          </tr>
          <tr className="bg-gray-50 border-b dark:bg-gray-900 dark:border-gray-800">
            <td className="px-6 py-4">06</td>
            <td className="px-6 py-4">
              District Registrar (Registration Services)
            </td>
            <td className="px-6 py-4">06</td>
            <td className="px-6 py-4">18-46 Years</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">07</td>
            <td className="px-6 py-4">
              Deputy Superintendent of Jails (Men) (Jails Service)
            </td>
            <td className="px-6 py-4">05</td>
            <td className="px-6 py-4">18-35 Years</td>
          </tr>
          <tr className="bg-gray-50 border-b dark:bg-gray-900 dark:border-gray-800">
            <td className="px-6 py-4">08</td>
            <td className="px-6 py-4">
              Assistant Commissioner of Labour (Labour Service)
            </td>
            <td className="px-6 py-4">08</td>
            <td className="px-6 py-4">18-46 Years</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">09</td>
            <td className="px-6 py-4">
              Assistant Excise Superintendent (Excise Service)
            </td>
            <td className="px-6 py-4">30</td>
            <td className="px-6 py-4">21-35 Years</td>
          </tr>
          <tr className="bg-gray-50 border-b dark:bg-gray-900 dark:border-gray-800">
            <td className="px-6 py-4">10</td>
            <td className="px-6 py-4">
              Municipal Commissioner – Grade-II (Municipal Administrative Service)
            </td>
            <td className="px-6 py-4">41</td>
            <td className="px-6 py-4" rowspan="9">
              18-46 Years
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">11</td>
            <td className="px-6 py-4">
              District Social Welfare Officer / District Scheduled Caste Development Officer (Social
              Welfare Service)
            </td>
            <td className="px-6 py-4">03</td>
          </tr>
          <tr className="bg-gray-50 border-b dark:bg-gray-900 dark:border-gray-800">
            <td className="px-6 py-4">12</td>
            <td className="px-6 py-4">
              District Backward Classes Welfare Officer including Assistant Director (District
              Backward Classes Development Officer) (Backward Classes Welfare Service)
            </td>
            <td className="px-6 py-4">05</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">13</td>
            <td className="px-6 py-4">
              District Tribal Welfare Officer (Tribal Welfare Service)
            </td>
            <td className="px-6 py-4">02</td>
          </tr>
          <tr className="bg-gray-50 border-b dark:bg-gray-900 dark:border-gray-800">
            <td className="px-6 py-4">14</td>
            <td className="px-6 py-4">
              District Employment Officer (Employment Service)
            </td>
            <td className="px-6 py-4">05</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">15</td>
            <td className="px-6 py-4">
              Administrative Officer including Lay Secretary &amp; Treasurer Grade II (Medical &amp;
              Health Services)
            </td>
            <td className="px-6 py-4">20</td>
          </tr>
          <tr className="bg-gray-50 border-b dark:bg-gray-900 dark:border-gray-800">
            <td className="px-6 py-4">16</td>
            <td className="px-6 py-4">
              Assistant Treasury Officer / Assistant Accounts Officer / Assistant Lecturer in the
              Training College and School (Treasuries and Accounts Service)
            </td>
            <td className="px-6 py-4">38</td>
            <td className="px-6 py-4">
              Degree (Commerce/ Economics/ Mathematics)
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">17</td>
            <td className="px-6 py-4">
              Assistant Audit Officer (State Audit Service)
            </td>
            <td className="px-6 py-4">41</td>
            <td className="px-6 py-4" rowspan="2">
              Any Degree
            </td>
          </tr>
          <tr className="bg-gray-50 border-b dark:bg-gray-900 dark:border-gray-800">
            <td className="px-6 py-4">18</td>
            <td className="px-6 py-4">
              Mandal Parishad Development Officer (Panchayat Raj &amp; Rural Development Service)
            </td>
            <td className="px-6 py-4">140</td>
          </tr>
        </tbody>
      </table>

      {/* TSPSC Various Vacancy (33/2022) */}
      <h2 className="text-2xl font-bold mb-2" id="Asst-Professor">
        TSPSC Various Vacancy (33/2022)
      </h2>
      <p className="mb-2">
        <span className="font-bold">Name of the Post:</span> TSPSC Various Vacancy (33/2022)
        Notification Postponed
      </p>
      <p className="mb-2">
        <span className="font-bold">Post Date:</span> 02-01-2023
      </p>
      <p className="mb-2">
        <span className="font-bold">Latest Update:</span> 20-03-2023
      </p>
      <p className="mb-2">
        <span className="font-bold">Total Vacancy:</span> 544
      </p>
      <p className="mb-4">
        <span className="font-bold">Brief Information:</span> Telangana State Public Service
        Commission (TSPSC) has given a notification for the recruitment of Assistant Professor
        (Lecturers), Physical Director &amp; Librarian on General recruitment basis. Those
        Candidates who are interested in the vacancy details &amp; completed all eligibility
        criteria can read the Notification &amp; Apply Online.
      </p>

      {/* TSPSC Various Vacancy (33/2022) Details Table */}
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mb-6">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Post Name
            </th>
            <th scope="col" className="px-6 py-3">
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">Assistant Professor (Lecturer)</td>
            <td className="px-6 py-4">491</td>
          </tr>
          <tr className="bg-gray-50 border-b dark:bg-gray-900 dark:border-gray-800">
            <td className="px-6 py-4">Physical Director</td>
            <td className="px-6 py-4">29</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">Librarian</td>
            <td className="px-6 py-4">24</td>
          </tr>
        </tbody>
      </table>

      {/* TSPSC AO, JAO, Sr Accountant (32/2022) */}
      <h2 className="text-2xl font-bold mb-2" id="SeniorAccountant">
        TSPSC AO, JAO, Sr Accountant (32/2022)
      </h2>
      <p className="mb-2">
        <span className="font-bold">Name of the Post:</span> TSPSC AO, JAO, Sr Accountant (32/2022)
        Provisional Selection List Released
      </p>
      <p className="mb-2">
        <span className="font-bold">Post Date:</span> 02-01-2023
      </p>
      <p className="mb-2">
        <span className="font-bold">Latest Update:</span> 24-06-2024
      </p>
      <p className="mb-2">
        <span className="font-bold">Total Vacancy:</span> 77
      </p>
      <p className="mb-4">
        <span className="font-bold">Brief Information:</span> Telangana State Public Service
        Commission (TSPSC) has advertised a notification for the recruitment of Accounts
        Officer, Junior Accounts Officer, Senior Accountant Vacancy. Those Candidates who are
        interested in the vacancy details &amp; completed all eligibility criteria can read the
        Notification &amp; Apply Online.
      </p>

      {/* TSPSC AO, JAO, Sr Accountant (32/2022) Details Table */}
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mb-6">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Post Name
            </th>
            <th scope="col" className="px-6 py-3">
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">Accounts Officer (ULB)</td>
            <td className="px-6 py-4">01</td>
          </tr>
          <tr className="bg-gray-50 border-b dark:bg-gray-900 dark:border-gray-800">
            <td className="px-6 py-4">Junior Accounts Officer (ULB)</td>
            <td className="px-6 py-4">13</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">Senior Accountant (ULB)</td>
            <td className="px-6 py-4">64</td>
          </tr>
        </tbody>
      </table>

      {/* TSPSC Assistant Motor Vehicle Inspector 2023 */}
      <h2 className="text-2xl font-bold mb-2" id="AMVI">
        TSPSC Assistant Motor Vehicle Inspector 2023
      </h2>
      <p className="mb-2">
        <span className="font-bold">Name of the Post:</span> TSPSC Assistant Motor Vehicle
        Inspector 2023 CV Date Announced
      </p>
      <p className="mb-2">
        <span className="font-bold">Post Date:</span> 02-01-2023
      </p>
      <p className="mb-2">
        <span className="font-bold">Latest Update:</span> 27-08-2024
      </p>
      <p className="mb-2">
        <span className="font-bold">Total Vacancy:</span> 113
      </p>
      <p className="mb-4">
        <span className="font-bold">Brief Information:</span> Telangana State Public Service
        Commission (TSPSC) has given a notification for the recruitment of Assistant Motor
        Vehicle Inspector on General recruitment basis. Those Candidates who are interested in the
        vacancy details &amp; completed all eligibility criteria can read the Notification &amp;
        Apply Online.
      </p>

      {/* TSPSC Assistant Motor Vehicle Inspector 2023 Details Table */}
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mb-6">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Post Name
            </th>
            <th scope="col" className="px-6 py-3">
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">Assistant Motor Vehicle Inspector</td>
            <td className="px-6 py-4">113</td>
          </tr>
        </tbody>
      </table>

      {/* TSPSC Librarian 2023 */}
      <h2 className="text-2xl font-bold mb-2" id="Librarian">
        TSPSC Librarian 2023
      </h2>
      <p className="mb-2">
        <span className="font-bold">Name of the Post:</span> TSPSC Librarian 2023 CBRT General
        Ranking List Released
      </p>
      <p className="mb-2">
        <span className="font-bold">Post Date:</span> 02-01-2023
      </p>
      <p className="mb-2">
        <span className="font-bold">Latest Update:</span> 02-09-2024
      </p>
      <p className="mb-2">
        <span className="font-bold">Total Vacancy:</span> 71
      </p>
      <p className="mb-4">
        <span className="font-bold">Brief Information:</span> Telangana State Public Service
        Commission (TSPSC) has advertised a Notification for the recruitment of Librarian
        Vacancy. Those Candidates who are interested in the vacancy details &amp; completed all
        eligibility criteria can read the Notification &amp; Apply Online.
      </p>

      {/* TSPSC Librarian 2023 Details Table */}
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mb-6">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Sl No
            </th>
            <th scope="col" className="px-6 py-3">
              Post Name
            </th>
            <th scope="col" className="px-6 py-3">
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">1</td>
            <td className="px-6 py-4">Librarian in Intermediate Education</td>
            <td className="px-6 py-4">40</td>
          </tr>
          <tr className="bg-gray-50 border-b dark:bg-gray-900 dark:border-gray-800">
            <td className="px-6 py-4">2</td>
            <td className="px-6 py-4">Librarian in Degree College Education</td>
            <td className="px-6 py-4">31</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}