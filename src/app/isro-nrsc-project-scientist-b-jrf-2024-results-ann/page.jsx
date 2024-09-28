export default function RecruitmentInfo() {
  // Displays recruitment information for ISRO - NRSC job openings, including details like post name, vacancy, application fee, important dates, and qualification requirements.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">
        ISRO - NRSC Recruitment Information
      </h1>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">
          <a
            href="#Research-Scientist"
            className="text-blue-500 hover:text-blue-700"
          >
            Click Here for 71 Research Scientist, Project Scientist &
            Other Post Details – Result Released
          </a>
        </h2>
        <p className="text-gray-600">
          <span className="font-bold text-green-500">Name of the Post:</span>{' '}
          ISRO – NRSC Various Vacancy 2024 Result Released
        </p>
        <p className="text-gray-600">
          <span className="font-bold text-green-500">Post Date:</span>{' '}
          <strong>26-03-2024</strong>
        </p>
        <p className="text-gray-600">
          <span className="font-bold text-green-500">Latest Update</span>:{' '}
          28-09-2024
        </p>
        <p className="text-gray-600">
          <span className="font-bold text-green-500">Total Vacancy:</span>{' '}
          <strong>71</strong>
        </p>
        <p className="text-gray-600">
          <span className="font-bold text-red-500">Brief Information:</span>{' '}
          National Remote Sensing Centre (NRSC) has published a notification for
          the recruitment of Research Scientist, Project Scientist-I , Project
          Scientist-B & Other vacancy. Those Candidates who are interested in
          the vacancy details & completed all eligibility criteria can read the
          Notification & Apply Online.
        </p>
      </div>

      <table className="w-full border-collapse border border-gray-300 mb-8">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="py-2 px-4 text-left">
              <span className="font-bold text-red-500">
                National Remote Sensing Centre (NRSC)
              </span>
            </th>
            <th className="py-2 px-4 text-left">
              <span className="font-bold text-pink-500">
                Advt No 02/2024
              </span>
            </th>
            <th className="py-2 px-4 text-left">
              <span className="font-bold text-green-500">
                Various Vacancy 2024
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-gray-600">
            <td className="py-2 px-4">
              <span className="font-bold text-red-500">Application Fee</span>
            </td>
            <td className="py-2 px-4" colSpan="2">
              <ul>
                <li>Nil</li>
              </ul>
            </td>
          </tr>
          <tr className="text-gray-600">
            <td className="py-2 px-4">
              <span className="font-bold text-red-500">Important Dates</span>
            </td>
            <td className="py-2 px-4" colSpan="2">
              <ul>
                <li>
                  Starting Date for Apply Online: <strong>18-03-2024</strong> (
                  10:00 Hours)
                </li>
                <li>
                  Last Date for Apply Online: <strong>12-04-2024</strong> (17:00
                  Hours)
                </li>
              </ul>
            </td>
          </tr>
          <tr className="text-gray-600">
            <td className="py-2 px-4">
              <span className="font-bold text-red-500">
                Age Limit (as on 08-04-2024)
              </span>
            </td>
            <td className="py-2 px-4" colSpan="2">
              <ul>
                <li>Minimum Age Limit: <strong>28 Years</strong></li>
                <li>Maximum Age Limit: <strong>40 Years</strong></li>
                <li>For more Details Refer the Notification</li>
              </ul>
            </td>
          </tr>
          <tr className="text-gray-600">
            <td className="py-2 px-4">
              <span className="font-bold text-red-500">Qualification</span>
            </td>
            <td className="py-2 px-4" colSpan="2">
              <ul>
                <li>
                  Candidates should possess Degree/ PG (Relevant Discipline)
                </li>
              </ul>
            </td>
          </tr>
          <tr className="text-gray-600">
            <td className="py-2 px-4">
              <span className="font-bold text-red-500">Vacancy Details</span>
            </td>
            <td className="py-2 px-4" colSpan="2">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100 text-gray-700">
                    <th className="py-2 px-4 text-left">
                      <span className="font-bold text-pink-500">Post Code</span>
                    </th>
                    <th className="py-2 px-4 text-left">
                      <span className="font-bold text-pink-500">
                        Post Name
                      </span>
                    </th>
                    <th className="py-2 px-4 text-left">
                      <span className="font-bold text-pink-500">Total</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-gray-600">
                    <td className="py-2 px-4">RS10 – RS16</td>
                    <td className="py-2 px-4">Research Scientist (RS)</td>
                    <td className="py-2 px-4">20</td>
                  </tr>
                  <tr className="text-gray-600">
                    <td className="py-2 px-4">PS02</td>
                    <td className="py-2 px-4">Project Scientist-I</td>
                    <td className="py-2 px-4">06</td>
                  </tr>
                  <tr className="text-gray-600">
                    <td className="py-2 px-4">PSB01</td>
                    <td className="py-2 px-4">Project Scientist-B</td>
                    <td className="py-2 px-4">04</td>
                  </tr>
                  <tr className="text-gray-600">
                    <td className="py-2 px-4">PA03</td>
                    <td className="py-2 px-4">Project Associate-I</td>
                    <td className="py-2 px-4">02</td>
                  </tr>
                  <tr className="text-gray-600">
                    <td className="py-2 px-4">PA201</td>
                    <td className="py-2 px-4">Project Associate-II</td>
                    <td className="py-2 px-4">12</td>
                  </tr>
                  <tr className="text-gray-600">
                    <td className="py-2 px-4">JRF13 – JRF24</td>
                    <td className="py-2 px-4">Junior Research Fellow (JRF)</td>
                    <td className="py-2 px-4">27</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr className="text-gray-600">
            <td className="py-2 px-4" colSpan="3">
              <span className="font-bold text-blue-500">
                Interested Candidates Can Read the Full Notification Before
                Apply Online
              </span>
            </td>
          </tr>
          <tr className="text-gray-600">
            <td className="py-2 px-4">
              <span className="font-bold text-red-500">Important Links</span>
            </td>
            <td className="py-2 px-4" colSpan="2">
              <ul>
                <li>
                  <span className="font-bold text-green-500">
                    Result for JRF & Project Scientist-B (28-09-2024)
                  </span>{' '}
                  <a
                    href="https://www.nrsc.gov.in/sites/default/files/pdf/Careers/Results_NRSC-RMT-2-2024_PSB01.pdf"
                    className="text-blue-500 hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PSB01
                  </a>{' '}
                  |{' '}
                  <a
                    href="https://www.nrsc.gov.in/sites/default/files/pdf/Careers/Results_NRSC-RMT-2-2024_JRF17.pdf"
                    className="text-blue-500 hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    JRF17
                  </a>{' '}
                  |{' '}
                  <a
                    href="https://www.nrsc.gov.in/sites/default/files/pdf/Careers/Results_NRSC-RMT-2-2024_JRF18.pdf"
                    className="text-blue-500 hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    JRF18
                  </a>{' '}
                  |{' '}
                  <a
                    href="https://www.nrsc.gov.in/sites/default/files/pdf/Careers/Results_NRSC-RMT-2-2024_JRF19.pdf"
                    className="text-blue-500 hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    JRF19
                  </a>{' '}
                  |{' '}
                  <a
                    href="https://www.nrsc.gov.in/sites/default/files/pdf/Careers/Results_NRSC-RMT-2-2024_JRF24.pdf"
                    className="text-blue-500 hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    JRF24
                  </a>
                </li>
                <li>
                  <span className="font-bold text-green-500">
                    Last Date Extended (08-04-2024)
                  </span>{' '}
                  <a
                    href="https://www.nrsc.gov.in/Career_Apply"
                    className="text-blue-500 hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click Here
                  </a>
                </li>
                <li>
                  <span className="font-bold text-green-500">Apply Online</span>{' '}
                  <a
                    href="https://apps.nrsc.gov.in/eRecruitment_NRSC/"
                    className="text-blue-500 hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click Here
                  </a>
                </li>
                <li>
                  <span className="font-bold text-green-500">Notification</span>{' '}
                  <a
                    href="https://www.nrsc.gov.in/sites/default/files/pdf/Careers/NRSC_RMT_2-2024_18032024.pdf"
                    className="text-blue-500 hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click Here
                  </a>
                </li>
                <li>
                  <span className="font-bold text-green-500">
                    Official Website
                  </span>{' '}
                  <a
                    href="https://www.nrsc.gov.in/"
                    className="text-blue-500 hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click Here
                  </a>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>

      <hr className="my-8" />

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">
          <a
            href="#Scientist"
            className="text-blue-500 hover:text-blue-700"
          >
            Click Here for 41 Scientist/Engineer, Library Assistant & Other Post
            Details – Last Date: 12-02-2024
          </a>
        </h2>
        <p className="text-gray-600">
          <span className="font-bold text-green-500">Name of the Post:</span>{' '}
          NRSC Scientist/ Engineer, Library Assistant & Other Online Form
          2024
        </p>
        <p className="text-gray-600">
          <span className="font-bold text-green-500">Post Date:</span>{' '}
          <strong>27-01-2024</strong>
        </p>
        <p className="text-gray-600">
          <span className="font-bold text-green-500">Total Vacancy:</span>{' '}
          <strong>41</strong>
        </p>
        <p className="text-gray-600">
          <span className="font-bold text-red-500">Brief Information:</span>{' '}
          National Remote Sensing Centre (NRSC) has advertised an employment
          notification for the recruitment of Scientist/ Engineer, Library
          Assistant & Other vacancy. Those Candidates who are interested in the
          vacancy details & completed all eligibility criteria can read the
          Notification & Apply Online.
        </p>
      </div>

      <table className="w-full border-collapse border border-gray-300 mb-8">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="py-2 px-4 text-left">
              <span className="font-bold text-red-500">
                National Remote Sensing Centre (NRSC)
              </span>
            </th>
            <th className="py-2 px-4 text-left">
              <span className="font-bold text-pink-500">
                Advt No 01/2024
              </span>
            </th>
            <th className="py-2 px-4 text-left">
              <span className="font-bold text-green-500">
                Various Vacancy 2024
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-gray-600">
            <td className="py-2 px-4">
              <span className="font-bold text-red-500">Application Fee</span>
            </td>
            <td className="py-2 px-4" colSpan="2">
              <ul>
                <li>Application Fee: Rs.250/-</li>
                <li>Processing Fee: Rs.750/-</li>
                <li>
                  Processing Fee For SC/ST/PWD/EX-Servicemen/Women: Nil
                </li>
                <li>
                  After deducting the Application Fee in respect of all other
                  candidates: Rs. 500/-
                </li>
                <li>For more Details Refer the Notification</li>
              </ul>
            </td>
          </tr>
          <tr className="text-gray-600">
            <td className="py-2 px-4">
              <span className="font-bold text-red-500">Important Dates</span>
            </td>
            <td className="py-2 px-4" colSpan="2">
              <ul>
                <li>
                  Starting Date for Apply Online: <strong>22-01-2024</strong> (
                  10:00 Hours)
                </li>
                <li>
                  Last Date for Apply Online: <strong>12-02-2024</strong> (17:00
                  Hours)
                </li>
              </ul>
            </td>
          </tr>
          <tr className="text-gray-600">
            <td className="py-2 px-4">
              <span className="font-bold text-red-500">
                Age Limit (as on 12-02-2024)
              </span>
            </td>
            <td className="py-2 px-4" colSpan="2">
              <ul>
                <li>Minimum Age Limit: <strong>18 Years</strong></li>
                <li>
                  Maximum Age Limit for Post Code 07,08,10,11,12:
                  <strong>28 Years</strong>
                </li>
                <li>
                  Maximum Age Limit for Post Code 06,09,13,14,15,16:
                  <strong>30 Years</strong>
                </li>
                <li>
                  Maximum Age Limit for Post Code 17,18,19:
                  <strong>35 Years</strong>
                </li>
              </ul>
            </td>
          </tr>
          <tr className="text-gray-600">
            <td className="py-2 px-4">
              <span className="font-bold text-red-500">Vacancy Details</span>
            </td>
            <td className="py-2 px-4" colSpan="2">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100 text-gray-700">
                    <th className="py-2 px-4 text-left">
                      <span className="font-bold text-pink-500">
                        Post Code
                      </span>
                    </th>
                    <th className="py-2 px-4 text-left">
                      <span className="font-bold text-pink-500">
                        Post Name
                      </span>
                    </th>
                    <th className="py-2 px-4 text-left">
                      <span className="font-bold text-pink-500">Total</span>
                    </th>
                    <th className="py-2 px-4 text-left">
                      <span className="font-bold text-pink-500">
                        Qualification
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-gray-600">
                    <td className="py-2 px-4">06 to 16</td>
                    <td className="py-2 px-4">Scientist/ Engineer</td>
                    <td className="py-2 px-4">35</td>
                    <td className="py-2 px-4">
                      Degree/ PG (Relevant Discipline)
                    </td>
                  </tr>
                  <tr className="text-gray-600">
                    <td className="py-2 px-4">17</td>
                    <td className="py-2 px-4">Medical Officer</td>
                    <td className="py-2 px-4">01</td>
                    <td className="py-2 px-4">MBBS</td>
                  </tr>
                  <tr className="text-gray-600">
                    <td className="py-2 px-4">18</td>
                    <td className="py-2 px-4">Nurse</td>
                    <td className="py-2 px-4">02</td>
                    <td className="py-2 px-4">SSLC/ SSC/ Diploma (GNM)</td>
                  </tr>
                  <tr className="text-gray-600">
                    <td className="py-2 px-4">19</td>
                    <td className="py-2 px-4">Library Assistant</td>
                    <td className="py-2 px-4">03</td>
                    <td className="py-2 px-4">
                      Degree/ PG (Relevant Discipline)
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr className="text-gray-600">
            <td className="py-2 px-4" colSpan="3">
              <span className="font-bold text-blue-500">
                Interested Candidates Can Read the Full Notification Before
                Apply Online
              </span>
            </td>
          </tr>
          <tr className="text-gray-600">
            <td className="py-2 px-4">
              <span className="font-bold text-red-500">Important Links</span>
            </td>
            <td className="py-2 px-4" colSpan="2">
              <ul>
                <li>
                  <span className="font-bold text-green-500">
                    Apply Online
                  </span>{' '}
                  <a
                    href="https://apps.nrsc.gov.in/eRecruitment_NRSC/"
                    className="text-blue-500 hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here
                  </a>
                </li>
                <li>
                  <span className="font-bold text-green-500">
                    Notification
                  </span>{' '}
                  <a
                    href="https://www.nrsc.gov.in/sites/default/files/pdf/Careers/NRSC-RMT-1-2024%20dated%2022012024.pdf"
                    className="text-blue-500 hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here
                  </a>
                </li>
                <li>
                  <span className="font-bold text-green-500">
                    Official Website
                  </span>{' '}
                  <a
                    href="https://www.nrsc.gov.in/"
                    className="text-blue-500 hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here
                  </a>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>

      <hr className="my-8" />

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">
          <a
            href="#JRF"
            className="text-blue-500 hover:text-blue-700"
          >
            Click Here for 110 JRF, Research Scientist Post Details – Last Date:
            08-05-2022
          </a>
        </h2>
        <p className="text-gray-600">
          <span className="font-bold text-green-500">Name of the Post:</span>{' '}
          NRSC Various Vacancy Online Form 2022
        </p>
        <p className="text-gray-600">
          <span className="font-bold text-green-500">Post Date:</span>{' '}
          <strong>25-04-2022</strong>
        </p>
        <p className="text-gray-600">
          <span className="font-bold text-green-500">Total Vacancy:</span>{' '}
          <strong>110</strong>
        </p>
        <p className="text-gray-600">
          <span className="font-bold text-red-500">Brief Information:</span>{' '}
          National Remote Sensing Centre (NRSC) has Announced Notification for
          the recruitment of Jr Research Fellow, Research Scientist & Other On
          Temporary Basis. Those Candidates who are interested in the vacancy
          details & completed all eligibility criteria can read the Notification
          & Apply Online.
        </p>
      </div>

      <table className="w-full border-collapse border border-gray-300 mb-8">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="py-2 px-4 text-left">
              <span className="font-bold text-red-500">
                National Remote Sensing Centre (NRSC)
              </span>
            </th>
            <th className="py-2 px-4 text-left">
              <span className="font-bold text-pink-500">
                Advt No: 01/2022
              </span>
            </th>
            <th className="py-2 px-4 text-left">
              <span className="font-bold text-green-500">
                Various Vacancy 2022
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-gray-600">
            <td className="py-2 px-4">
              <span className="font-bold text-red-500">Important Dates</span>
            </td>
            <td className="py-2 px-4" colSpan="2">
              <ul>
                <li>
                  Starting Date for Apply Online: <strong>25-04-2022</strong>
                </li>
                <li>
                  Last Date to Apply Online: <strong>08-05-2022</strong>
                </li>
              </ul>
            </td>
          </tr>
          <tr className="text-gray-600">
            <td className="py-2 px-4">
              <span className="font-bold text-red-500">
                Age Limit (as on 08-05-2022)
              </span>
            </td>
            <td className="py-2 px-4" colSpan="2">
              <ul>
                <li>Minimum Age Limit SI NO.1: <strong>28 Years</strong></li>
                <li>Maximum Age Limit SI NO.1: <strong>33 Years</strong></li>
                <li>
                  Minimum Age Limit SI NO.2&3: <strong>35 Years</strong>
                </li>
                <li>
                  Maximum Age Limit SI NO.2&3: <strong>40 Years</strong>
                </li>
              </ul>
            </td>
          </tr>
          <tr className="text-gray-600">
            <td className="py-2 px-4">
              <span className="font-bold text-red-500">Vacancy Details</span>
            </td>
            <td className="py-2 px-4" colSpan="2">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100 text-gray-700">
                    <th className="py-2 px-4 text-left">
                      <span className="font-bold text-pink-500">
                        Sl No
                      </span>
                    </th>
                    <th className="py-2 px-4 text-left">
                      <span className="font-bold text-pink-500">
                        Post Name
                      </span>
                    </th>
                    <th className="py-2 px-4 text-left">
                      <span className="font-bold text-pink-500">Total</span>
                    </th>
                    <th className="py-2 px-4 text-left">
                      <span className="font-bold text-pink-500">
                        Qualification
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-gray-600">
                    <td className="py-2 px-4">1</td>
                    <td className="py-2 px-4">Jr Research Fellow</td>
                    <td className="py-2 px-4">12</td>
                    <td className="py-2 px-4">
                      Degree/ PG/ GIS/ Remote Sensing & GIS/ Geoinformatics/
                      Geomatics/ Geospatial Technology/ Spatial Information
                      Technology
                    </td>
                  </tr>
                  <tr className="text-gray-600">
                    <td className="py-2 px-4">2</td>
                    <td className="py-2 px-4">Research Scientist</td>
                    <td className="py-2 px-4">41</td>
                    <td className="py-2 px-4">
                      Degree/ PG Degree (Relevant Discipline)
                    </td>
                  </tr>
                  <tr className="text-gray-600">
                    <td className="py-2 px-4">3</td>
                    <td className="py-2 px-4">Research Associate</td>
                    <td className="py-2 px-4">02</td>
                    <td className="py-2 px-4">
                      Degree/ PG/ Ph.D (Relevant Discipline)
                    </td>
                  </tr>
                  <tr className="text-gray-600">
                    <td className="py-2 px-4">4</td>
                    <td className="py-2 px-4">Project Wise Posts</td>
                    <td className="py-2 px-4">55</td>
                    <td className="py-2 px-4">
                      NHP/ NDEM/ LULC/ SIS-DP (Relevant Discipline)
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr className="text-gray-600">
            <td className="py-2 px-4" colSpan="3">
              <span className="font-bold text-blue-500">
                Interested Candidates Can Read the Full Notification Before
                Apply Online
              </span>
            </td>
          </tr>
          <tr className="text-gray-600">
            <td className="py-2 px-4">
              <span className="font-bold text-red-500">Important Links</span>
            </td>
            <td className="py-2 px-4" colSpan="2">
              <ul>
                <li>
                  <span className="font-bold text-green-500">
                    Apply Online
                  </span>{' '}
                  <a
                    href="https://erecruit.nrsc.gov.in/eRecruitment_NRSC/"
                    className="text-blue-500 hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click Here
                  </a>
                </li>
                <li>
                  <span className="font-bold text-green-500">
                    Notification
                  </span>{' '}
                  <a
                    href="https://img.freejobalert.com/uploads/2022/04/Notification-NRSC-Jr-Research-Fellow-Research-Scentist-Other-Posts.pdf"
                    className="text-blue-500 hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click Here
                  </a>
                </li>
                <li>
                  <span className="font-bold text-green-500">
                    Official Website
                  </span>{' '}
                  <a
                    href="https://www.nrsc.gov.in/"
                    className="text-blue-500 hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click Here
                  </a>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}