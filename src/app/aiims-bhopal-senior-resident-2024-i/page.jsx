export default function RecruitmentInformation() {
  // This component displays recruitment information for various positions at AIIMS across different locations, including Senior Resident, Junior Resident, Faculty, and other non-faculty roles. It provides details such as post date, total vacancy, application fee, important dates, and vacancy details for each position.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">AIIMS Recruitment Opportunities</h1>
      <p className="text-lg text-gray-600 mb-6">AIIMS is recruiting for various positions across different locations. Find the latest recruitment information for Senior Resident, Junior Resident, Faculty, and other non-faculty roles below.</p>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Senior Resident 2024 - AIIMS, Raebareli</h2>

      <p className="text-lg text-gray-600 mb-4">
        AIIMS Raebareli is looking for Senior Residents for various departments.
        The online application process is ongoing with the last date to apply being
        <strong>02-11-2024</strong>. There are a total of <strong>146</strong>
        vacancies available.
      </p>

      <h3 className="text-xl font-bold text-gray-800 mb-2">Key Highlights:</h3>
      <ul className="list-disc text-gray-600 mb-4">
        <li>Post Date: <strong>17-10-2024</strong></li>
        <li>Total Vacancies: <strong>146</strong></li>
        <li>Last Date to Apply: <strong>02-11-2024</strong></li>
        <li>Application Fee: 
          <ul className="list-disc ml-6">
            <li>General/OBC/EWS: Rs. 1,000/- + GST @18% (Total Rs. 1180)</li>
            <li>SC/ST: Rs. 800/- + GST @18% (Total Rs. 944)</li>
            <li>PWB: Nil</li>
          </ul>
        </li>
        <li>Payment Mode: Online Payment Gateway</li>
      </ul>

      <h3 className="text-xl font-bold text-gray-800 mb-2">Vacancy Details:</h3>
      <table className="table-auto w-full text-gray-600 mb-8">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Department</th>
            <th className="px-4 py-2">Total Vacancies</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="px-4 py-2">Anatomy</td>
            <td className="px-4 py-2">03</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Anaesthesia</td>
            <td className="px-4 py-2">02</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Biochemistry</td>
            <td className="px-4 py-2">05</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Cardiology</td>
            <td className="px-4 py-2">07</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Community Medicine</td>
            <td className="px-4 py-2">01</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">CTVS</td>
            <td className="px-4 py-2">05</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Dermatology</td>
            <td className="px-4 py-2">02</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Endocrinology</td>
            <td className="px-4 py-2">04</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Forensic Medicine</td>
            <td className="px-4 py-2">04</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Gastroenterology</td>
            <td className="px-4 py-2">05</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">General Medicine</td>
            <td className="px-4 py-2">06</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">General Surgery</td>
            <td className="px-4 py-2">06</td>
          </tr>
          <tr>
            <td className="px-4 py-2" colSpan={2}>
              <p className="text-gray-600">For more vacancy details, refer the notification.</p>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Faculty (Group - A) 2024 - AIIMS, Nagpur</h2>

      <p className="text-lg text-gray-600 mb-4">
        AIIMS Nagpur is seeking faculty members for various departments on a
        contract basis. The online application process is open until
        <strong>07-11-2024</strong>. There are a total of <strong>62</strong>
        vacancies available.
      </p>

      <h3 className="text-xl font-bold text-gray-800 mb-2">Key Highlights:</h3>
      <ul className="list-disc text-gray-600 mb-4">
        <li>Post Date: <strong>17-10-2024</strong></li>
        <li>Total Vacancies: <strong>62</strong></li>
        <li>Last Date to Apply: <strong>07-11-2024</strong></li>
        <li>Application Fee:
          <ul className="list-disc ml-6">
            <li>General/OBC/EWS: Rs. 2,000/-</li>
            <li>SC/ST: Rs. 500/-</li>
          </ul>
        </li>
        <li>Payment Mode: Through Online</li>
      </ul>

      <h3 className="text-xl font-bold text-gray-800 mb-2">Vacancy Details:</h3>
      <table className="table-auto w-full text-gray-600 mb-8">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Post Name</th>
            <th className="px-4 py-2">Total Vacancies</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="px-4 py-2">Professor</td>
            <td className="px-4 py-2">12</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Additional Professor</td>
            <td className="px-4 py-2">12</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Associate Professor</td>
            <td className="px-4 py-2">18</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Assistant Professor</td>
            <td className="px-4 py-2">20</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Faculty 2024 - AIIMS, Gorakhpur</h2>

      <p className="text-lg text-gray-600 mb-4">
        AIIMS Gorakhpur is hiring faculty members for various departments on a
        contract basis. The application process is offline with the last date to
        apply being <strong>09-11-2024</strong>. A total of <strong>64</strong>
        vacancies are available.
      </p>

      <h3 className="text-xl font-bold text-gray-800 mb-2">Key Highlights:</h3>
      <ul className="list-disc text-gray-600 mb-4">
        <li>Post Date: <strong>16-10-2024</strong></li>
        <li>Total Vacancies: <strong>64</strong></li>
        <li>Last Date to Apply: <strong>09-11-2024</strong></li>
        <li>Application Fee:
          <ul className="list-disc ml-6">
            <li>General/OBC/EWS: Rs. 3000/-</li>
            <li>SC/ST/PwBD/Women: NIL</li>
          </ul>
        </li>
        <li>Payment Mode: Through Online</li>
      </ul>

      <h3 className="text-xl font-bold text-gray-800 mb-2">Vacancy Details:</h3>
      <table className="table-auto w-full text-gray-600 mb-8">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Post Name</th>
            <th className="px-4 py-2">Total Vacancies</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="px-4 py-2">Professor</td>
            <td className="px-4 py-2">20</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Additional Professor</td>
            <td className="px-4 py-2">16</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Associate Professor</td>
            <td className="px-4 py-2">12</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Assistant Professor</td>
            <td className="px-4 py-2">16</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Junior Resident 2024 - AIIMS, Bilaspur</h2>

      <p className="text-lg text-gray-600 mb-4">
        AIIMS Bilaspur is accepting applications for Junior Resident positions in
        various departments. The online application process ends on
        <strong>19-10-2024</strong>, with a total of <strong>41</strong>
        vacancies available.
      </p>

      <h3 className="text-xl font-bold text-gray-800 mb-2">Key Highlights:</h3>
      <ul className="list-disc text-gray-600 mb-4">
        <li>Post Date: <strong>15-10-2024</strong></li>
        <li>Total Vacancies: <strong>41</strong></li>
        <li>Last Date to Apply: <strong>19-10-2024</strong></li>
        <li>Application Fee:
          <ul className="list-disc ml-6">
            <li>Other categories: Rs. 1000/- (+ GST (18%) = 1180)</li>
            <li>SC/ST: Rs. 500/- (+ GST (18%) = 590)</li>
            <li>PwBD: Nil</li>
          </ul>
        </li>
        <li>Payment Mode: Through NEFT</li>
      </ul>

      <h3 className="text-xl font-bold text-gray-800 mb-2">Vacancy Details:</h3>
      <table className="table-auto w-full text-gray-600 mb-8">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Post Name</th>
            <th className="px-4 py-2">Total Vacancies</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="px-4 py-2">Junior Resident</td>
            <td className="px-4 py-2">41</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Senior Resident (Non-Academic) 2024 - AIIMS, Deoghar
      </h2>

      <p className="text-lg text-gray-600 mb-4">
        AIIMS Deoghar is inviting applications for Senior Resident (Non-Academic)
        positions across various departments. The application process is offline,
        and the last date to apply is <strong>15 days from the publication of the
        advertisement on the AIIMS Deoghar website</strong>. There are a total of
        <strong>101</strong> vacancies available.
      </p>

      <h3 className="text-xl font-bold text-gray-800 mb-2">Key Highlights:</h3>
      <ul className="list-disc text-gray-600 mb-4">
        <li>Post Date: <strong>14-10-2024</strong></li>
        <li>Total Vacancies: <strong>101</strong></li>
        <li>Application Fee:
          <ul className="list-disc ml-6">
            <li>UR: Rs. 3000/-</li>
            <li>OBC: Rs. 1000/-</li>
            <li>SC/ST/PWD/Women: Nil</li>
          </ul>
        </li>
        <li>Payment Mode: Through Demand Draft</li>
      </ul>

      <h3 className="text-xl font-bold text-gray-800 mb-2">Vacancy Details:</h3>
      <table className="table-auto w-full text-gray-600 mb-8">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Department</th>
            <th className="px-4 py-2">Total Vacancies</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="px-4 py-2">Anesthesiology &amp; Critical Care</td>
            <td className="px-4 py-2">17</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Anatomy</td>
            <td className="px-4 py-2">01</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Biochemistry</td>
            <td className="px-4 py-2">02</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Burn &amp; Plastic Surgery</td>
            <td className="px-4 py-2">02</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Cardiology</td>
            <td className="px-4 py-2">02</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Cardiothoracic &amp; Vascular Surgery</td>
            <td className="px-4 py-2">02</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Community &amp; Family Medicine</td>
            <td className="px-4 py-2">01</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Dermatology and Venereology</td>
            <td className="px-4 py-2">01</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Endocrinology</td>
            <td className="px-4 py-2">01</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Forensic Medicine</td>
            <td className="px-4 py-2">02</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Gastroenterology</td>
            <td className="px-4 py-2">02</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Gastrointestinal Surgery</td>
            <td className="px-4 py-2">02</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">General Medicine</td>
            <td className="px-4 py-2">07</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">General Surgery</td>
            <td className="px-4 py-2">09</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Microbiology</td>
            <td className="px-4 py-2">03</td>
          </tr>
          <tr>
            <td className="px-4 py-2" colSpan={2}>
              <p className="text-gray-600">For more vacancy details, refer the notification.</p>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Senior Resident (Non-Academic) 2024 - AIIMS, Raipur
      </h2>

      <p className="text-lg text-gray-600 mb-4">
        AIIMS Raipur is hosting a walk-in interview for Senior Resident (Non-Academic)
        positions. The interview is scheduled for <strong>15-10-2024</strong>,
        with a total of <strong>83</strong> vacancies available.
      </p>

      <h3 className="text-xl font-bold text-gray-800 mb-2">Key Highlights:</h3>
      <ul className="list-disc text-gray-600 mb-4">
        <li>Post Date: <strong>08-10-2024</strong></li>
        <li>Total Vacancies: <strong>83</strong></li>
        <li>Interview Date: <strong>15-10-2024</strong></li>
      </ul>

      <h3 className="text-xl font-bold text-gray-800 mb-2">Vacancy Details:</h3>
      <table className="table-auto w-full text-gray-600 mb-8">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Department</th>
            <th className="px-4 py-2">Total Vacancies</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="px-4 py-2">Anaesthesiology</td>
            <td className="px-4 py-2">03</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Anatomy</td>
            <td className="px-4 py-2">03</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Biochemistry</td>
            <td className="px-4 py-2">02</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Burns &amp; Plastics Surgery</td>
            <td className="px-4 py-2">04</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Cardiology</td>
            <td className="px-4 py-2">01</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Cardiothoracic Surgery</td>
            <td className="px-4 py-2">02</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Clinical Hematology</td>
            <td className="px-4 py-2">02</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Community and Family Medicine</td>
            <td className="px-4 py-2">02</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Endocrinology and Metabolism</td>
            <td className="px-4 py-2">02</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Forensic Medicine and Toxicology</td>
            <td className="px-4 py-2">02</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Gastroenterology</td>
            <td className="px-4 py-2">03</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">General Medicine</td>
            <td className="px-4 py-2">03</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Medical Oncology</td>
            <td className="px-4 py-2">03</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Microbiology</td>
            <td className="px-4 py-2">01</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Neonatology</td>
            <td className="px-4 py-2">03</td>
          </tr>
          <tr>
            <td className="px-4 py-2" colSpan={2}>
              <p className="text-gray-600">For more vacancy details, refer the notification.</p>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Senior Resident 2024 - AIIMS, Gorakhpur
      </h2>

      <p className="text-lg text-gray-600 mb-4">
        AIIMS Gorakhpur is accepting applications for Senior Resident positions in various departments. The online application process will end on <strong>10-11-2024</strong>, with a total of <strong>115</strong> vacancies available. 
      </p>

      <h3 className="text-xl font-bold text-gray-800 mb-2">Key Highlights:</h3>
      <ul className="list-disc text-gray-600 mb-4">
        <li>Post Date: <strong>17-10-2024</strong></li>
        <li>Total Vacancies: <strong>115</strong></li>
        <li>Last Date to Apply: <strong>10-11-2024</strong></li>
        <li>Application Fee:
          <ul className="list-disc ml-6">
            <li>General/OBC/EWS: Rs. 1,000/- + GST (18%)</li>
            <li>SC/ST: Rs. 500/- + GST (18%)</li>
            <li>PWD: Nil</li>
          </ul>
        </li>
        <li>Payment Mode: Through Online</li>
      </ul>

      <h3 className="text-xl font-bold text-gray-800 mb-2">Vacancy Details:</h3>
      <table className="table-auto w-full text-gray-600 mb-8">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Department</th>
            <th className="px-4 py-2">Total Vacancies</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="px-4 py-2">Anesthesiology &amp; Critical Care</td>
            <td className="px-4 py-2">12</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Anatomy</td>
            <td className="px-4 py-2">04</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Biochemistry</td>
            <td className="px-4 py-2">05</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Burn &amp; Plastic Surgery</td>
            <td className="px-4 py-2">03</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Cardiology</td>
            <td className="px-4 py-2">10</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Cardiothoracic &amp; Vascular Surgery</td>
            <td className="px-4 py-2">08</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Community &amp; Family Medicine</td>
            <td className="px-4 py-2">04</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Dermatology and Venereology</td>
            <td className="px-4 py-2">03</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Endocrinology</td>
            <td className="px-4 py-2">05</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Forensic Medicine</td>
            <td className="px-4 py-2">03</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Gastroenterology</td>
            <td className="px-4 py-2">06</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Gastrointestinal Surgery</td>
            <td className="px-4 py-2">07</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">General Medicine</td>
            <td className="px-4 py-2">10</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">General Surgery</td>
            <td className="px-4 py-2">13</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2">Microbiology</td>
            <td className="px-4 py-2">04</td>
          </tr>
          <tr>
            <td className="px-4 py-2" colSpan={2}>
              <p className="text-gray-600">For more vacancy details, refer the notification.</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}