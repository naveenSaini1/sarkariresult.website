export default function JkssbRecruitment() {
  // This component displays recruitment information for various vacancies advertised by the J&K Services Selection Board (JKSSB). 
  // It includes details such as post name, total vacancies, qualifications, important dates, application fee, and key highlights.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">J&K Services Selection Board Recruitment</h1>
      <p className="text-gray-600 mb-4">
        The J&K Services Selection Board (JKSSB) has announced recruitment for
        various vacancies in different departments. Interested candidates can
        apply online for positions such as Junior Assistant, Library Assistant,
        Laboratory Assistant, and others. 
      </p>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Key Highlights</h2>
      <ul className="list-disc ml-6 text-gray-600 mb-4">
        <li><strong>Post Date:</strong> 30-12-2020</li>
        <li><strong>Latest Update:</strong> 22-10-2024</li>
        <li><strong>Total Vacancies:</strong> 232</li>
        <li><strong>Application Fee:</strong> Rs. 350/- (only online)</li>
      </ul>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Important Dates</h2>
      <ul className="list-disc ml-6 text-gray-600 mb-4">
        <li>
          Starting date to apply Online: <strong>18-01-2021</strong> (Changed
          from 10-01-2021 to 18-01-2021)
        </li>
        <li>
          Last Date for Submission of Online Applications:
          <strong>27-02-2021</strong> (Extended from 31-01-2021 to 10-02-2021
          Again Extended to 17-02-2021 Extended to 27-02-2021)
        </li>
        <li>
          Dates for Activity of Edit Option: <strong>From 01-03-2021 to 07-03-2021</strong>
        </li>
        <li>
          Date of DV: <strong>23 &amp; 24-10-2024</strong>
        </li>
      </ul>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Age Limit</h2>
      <ul className="list-disc ml-6 text-gray-600 mb-4">
        <li>For OM: <strong>40 Years</strong></li>
        <li>For SC/ ST/ RBA/ ALC/ IB/ EWS/ PSP/ OSC: <strong>43 Years</strong></li>
        <li>For Physically Challenged Person: <strong>42 Years</strong></li>
        <li>For Ex-Servicemen: <strong>48 Years</strong></li>
        <li>
          For Government Service/Contractual Employment: <strong>40 Years</strong>
        </li>
      </ul>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Vacancy Details</h2>
      <table className="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400 mb-4">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Post Name
            </th>
            <th scope="col" className="px-6 py-3">
              Total
            </th>
            <th scope="col" className="px-6 py-3">
              Qualification
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Junior Assistant
            </th>
            <td className="px-6 py-4">84</td>
            <td className="px-6 py-4">Graduation with Typing Knowledge</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Educator-cum Studio <br/> Assistant
            </th>
            <td className="px-6 py-4">02</td>
            <td className="px-6 py-4">
              Graduate in Mass Communication <br/> or Graduate with diploma in
              film <br/> editing/film studio
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Tabla Assistant
            </th>
            <td className="px-6 py-4">01</td>
            <td className="px-6 py-4">
              Bachelor’s Degree in Music with <br/> specialization in Tabla
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Junior Laboratory Technician
            </th>
            <td className="px-6 py-4">03</td>
            <td className="px-6 py-4">Diploma in Relevant Disciplines</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Junior Stenographer
            </th>
            <td className="px-6 py-4">03</td>
            <td className="px-6 py-4">Graduation with Shorthand Speed</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Technical Assistant EduSat
            </th>
            <td className="px-6 py-4">02</td>
            <td className="px-6 py-4">B.E/B.Tech. Degree</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              EduSat Assistant
            </th>
            <td className="px-6 py-4">02</td>
            <td className="px-6 py-4">
              Bachelors Degree (Relevant Disciplines)
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Computer Assistant
            </th>
            <td className="px-6 py-4">09</td>
            <td className="px-6 py-4">
              Bachelor or Graduation in Computer Application <br/> or
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Assistant PTI
            </th>
            <td className="px-6 py-4">05</td>
            <td className="px-6 py-4">B.P.E or Graduate with B.P.Ed</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Library Assistant
            </th>
            <td className="px-6 py-4">42</td>
            <td className="px-6 py-4">Bachelor’s of Library Sciences</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Plumber-II
            </th>
            <td className="px-6 py-4">01</td>
            <td className="px-6 py-4">
              Matriculation with National Trade <br/> Test/ITI
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Workshop Instructor
            </th>
            <td className="px-6 py-4">02</td>
            <td className="px-6 py-4">Matriculate with 3 years Diploma</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Carpenter-II
            </th>
            <td className="px-6 py-4">01</td>
            <td className="px-6 py-4">
              Matriculation with National Trade <br/> Test/ITI
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Maintenance <br/> Assistant
            </th>
            <td className="px-6 py-4">01</td>
            <td className="px-6 py-4">
              Matriculate having National Trade <br/> certificate
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Workshop Assistant
            </th>
            <td className="px-6 py-4">02</td>
            <td className="px-6 py-4">
              Matriculation with Trade Certificate
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Data Entry Operator
            </th>
            <td className="px-6 py-4">01</td>
            <td className="px-6 py-4">
              Bachelors Degree in Computer <br/> Application or Graduation
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Upholester
            </th>
            <td className="px-6 py-4">01</td>
            <td className="px-6 py-4">
              Matric with ITI Diploma in identical <br/> Trade
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Telephone Operator
            </th>
            <td className="px-6 py-4">02</td>
            <td className="px-6 py-4" rowspan="5">
              Matric
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Table Boy
            </th>
            <td className="px-6 py-4">03</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Driver
            </th>
            <td className="px-6 py-4">06</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Waiter (For Delhi)
            </th>
            <td className="px-6 py-4">01</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Room Bearer (For Delhi)
            </th>
            <td className="px-6 py-4">01</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Storekeeper (For Delhi)
            </th>
            <td className="px-6 py-4">01</td>
            <td className="px-6 py-4">
              Graduation with computer <br/> application Certificate Course
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Assistant Secretary
            </th>
            <td className="px-6 py-4">01</td>
            <td className="px-6 py-4">&nbsp;</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Head Assistant
            </th>
            <td className="px-6 py-4">01</td>
            <td className="px-6 py-4">Graduation</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Welfare Organizer
            </th>
            <td className="px-6 py-4">08</td>
            <td className="px-6 py-4">Graduation,</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Laboratory Assistant
            </th>
            <td className="px-6 py-4">19</td>
            <td className="px-6 py-4">
              Bachelors Degree (Forensic/ Medical Subjects)
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Assistant Labour Procurement Officer
            </th>
            <td className="px-6 py-4">01</td>
            <td className="px-6 py-4">Graduation,</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Laboratory <br/> Attendant
            </th>
            <td className="px-6 py-4">21</td>
            <td className="px-6 py-4">
              10+2 with Science <br/> Subject having Math/Biology
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Orderly
            </th>
            <td className="px-6 py-4">04</td>
            <td className="px-6 py-4" rowspan="2">
              Minimum Matric Pass &amp; Maximum <br/> 10+2.
            </td>
          </tr>
          <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Chowkidar
            </th>
            <td className="px-6 py-4">01</td>
          </tr>
        </tbody>
      </table>
      <p className="text-gray-600 mb-4">
        For detailed information on each position, eligibility criteria, and
        how to apply, please refer to the official notification on the JKSSB
        website: <a href="http://jkssb.nic.in/" className="underline text-blue-500">http://jkssb.nic.in/</a>
      </p>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Important Links &amp; Resources
      </h2>
      <table className="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400 mb-4">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Resource
            </th>
            <th scope="col" className="px-6 py-3">
              Link
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              DV Schedule (22-10-2024)
            </th>
            <td className="px-6 py-4">
              <a href="https://img.freejobalert.com/uploads/2024/10/DV-Schedule-JKSSB-Computer-Assistant-Storekeeper-Other-Posts.pdf" className="underline text-blue-500">
                Click Here
              </a>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              JKSSB Official Website
            </th>
            <td className="px-6 py-4">
              <a href="http://jkssb.nic.in/" className="underline text-blue-500">
                http://jkssb.nic.in/
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}