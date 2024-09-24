export default function RecruitmentInfo() {
  // This component displays recruitment information for BSPHCL, including various job postings, their details, application fees, important dates, and vacancy information.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">BSPHCL Recruitment Information</h1>
      {/* Job Postings Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Job Postings</h2>
        <table className="table-auto border border-gray-400 mb-4">
          <tbody>
            <tr>
              <td className="px-4 py-2">
                <a
                  href="#Technician-Grade-III"
                  className="text-blue-500 hover:underline"
                >
                  <strong>
                    Click Here for 2156 Technician Grade III Post Details – Last
                    Date: 15-10-2024
                  </strong>
                </a>
                <br/>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">
                <a
                  href="#Jr-Accounts-Clerk"
                  className="text-blue-500 hover:underline"
                >
                  <strong>
                    Click Here for 740 Junior Accounts Clerk Post Details – Last
                    Date: 15-10-2024
                  </strong>
                </a>
                <br/>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">
                <a href="#Clerk" className="text-blue-500 hover:underline">
                  <strong>
                    Click Here for 921 Correspondence Clerk &amp; Store Keeper
                    Post Details – Last Date: 15-10-2024
                  </strong>
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">
                <a
                  href="#Junior-Electrical"
                  className="text-blue-500 hover:underline"
                >
                  <strong>
                    Click Here for 40 Junior Electrical Engineer – GTO Post
                    Details – Last Date: 19-07-2024
                  </strong>
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">
                <a href="#AEE" className="text-blue-500 hover:underline">
                  <strong>
                    Click Here for 40 Asst Executive Engineer – GTO Post
                    Details – Last Date: 19-07-2024
                  </strong>
                </a>
                <br/>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">
                <a
                  href="#Asst-Electrical-Engineer"
                  className="text-blue-500 hover:underline"
                >
                  <strong>
                    Click Here for 460 Asst Electrical Engineer, Asst
                    Executive Engineer &amp; Other Post Details – Last Date:
                    30-04-2024
                  </strong>
                </a>
                <br/>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2">
                <a
                  href="#Jr-Electrical-Engineer"
                  className="text-blue-500 hover:underline"
                >
                  <strong>
                    Click Here for 185 Jr Electrical Engineer Post Details -
                    Model Key Released
                  </strong>
                </a>
                <span className="text-red-500 font-bold">
                  <strong>(Cancelled)</strong>
                </span>
                <br/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Asst Electrical Engineer Section */}
      <div className="mb-8">
        <h2 id="Asst-Electrical-Engineer" className="text-2xl font-bold mb-4">
          <span className="text-green-500">
            <strong>Name of the Post: </strong>
          </span>
          BSPHCL Various Vacancy Online Form 2024
        </h2>
        <p className="text-justify mb-2">
          <span className="text-green-500">
            <strong>Post Date: </strong>
          </span>
          <span className="text-gray-700">02-04-2024</span>
        </p>
        <p className="text-justify mb-2">
          <span className="text-green-500">
            <strong>Total Vacancy: </strong>
          </span>
          <span className="text-gray-700">460</span>
        </p>
        <p className="text-justify mb-2">
          <span className="text-red-500">
            <strong>Brief Information:&nbsp;</strong>
          </span>
          Bihar State Power Holding Company Limited (BSPHCL) has given an
          employment notification for the recruitment of Asst Electrical
          Engineer, Assistant&nbsp; Executive Engineer &amp; Other&nbsp;
          Vacancy. Those Candidates who are interested in the vacancy details
          &amp; completed all eligibility criteria can read the Notification &amp;
          Apply Online.
        </p>
      </div>

      {/* Application Fee Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Application Fee</h2>
        <table className="table-auto border border-gray-400 mb-4">
          <tbody>
            <tr>
              <td colspan="3" className="px-4 py-2 text-center">
                <span className="text-red-500 font-bold">
                  <strong>Bihar State Power Holding Company Limited (BSPHCL)</strong>
                </span>
              </td>
            </tr>
            <tr>
              <td colspan="3" className="px-4 py-2 text-center">
                <span className="text-pink-500 font-bold">
                  <strong>Advt No. 06/2024</strong>
                </span>
              </td>
            </tr>
            <tr>
              <td colspan="3" className="px-4 py-2 text-center">
                <span className="text-green-500 font-bold">
                  <strong>Various&nbsp; Vacancy 2024</strong>
                </span>
              </td>
            </tr>
            <tr>
              <td
                colSpan="3"
                className="px-4 py-2 text-center font-bold"
              >
                <span className="text-blue-500 hover:underline">
                  <strong></strong>
                </span>
              </td>
            </tr>
            <tr>
              <td colspan="3" className="px-4 py-2 text-center">
                <p>
                  <span className="text-pink-500 font-bold">
                    <strong>Download Mobile App</strong>
                  </span>
                </p>
              </td>
            </tr>
            <tr>
              <td colspan="3" className="px-4 py-2 text-center">
                <p className="text-red-500 font-bold">
                  <strong>Application Fee</strong>
                </p>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2" className={{ textAlign: 'left' }}>
                For UR/ EBC/ BC Candidates: <strong>Rs. 1000/-</strong>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2" className={{ textAlign: 'left' }}>
                For SC/ ST/Female of Bihar domicile/ Divyang Candidates:
                <strong>Rs. 250/-</strong>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2" className={{ textAlign: 'left' }}>
                Payment Mode: <strong>Through Online</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Important Dates Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Important Dates</h2>
        <table className="table-auto border border-gray-400 mb-4">
          <tbody>
            <tr>
              <td colspan="3" className="px-4 py-2 text-center">
                <p className="text-red-500 font-bold">
                  <strong>Important Dates</strong>
                </p>
              </td>
            </tr>
            <tr>
              <td
                className="px-4 py-2"
                className={{ textAlign: 'left' }}
              >
                Starting Date for Apply Online &amp; Payment of Fee:
                <strong>01-04-2024</strong>
              </td>
            </tr>
            <tr>
              <td
                className="px-4 py-2"
                className={{ textAlign: 'left' }}
              >
                Last Date for Apply Online &amp; Payment of Fee:
                <strong> 30-04-2024</strong>
              </td>
            </tr>
            <tr>
              <td
                className="px-4 py-2"
                className={{ textAlign: 'left' }}
              >
                Tentative Date of Online Exam: <strong>May/ June 2024</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Age Limit Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Age Limit</h2>
        <table className="table-auto border border-gray-400 mb-4">
          <tbody>
            <tr>
              <td colspan="3" className="px-4 py-2 text-center">
                <p className="text-red-500 font-bold">
                  <strong>Age Limit (as on 31-03-2024)</strong>
                </p>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2" className={{ textAlign: 'left' }}>
                Minimum Age limit <strong>: 21 Years</strong>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2" className={{ textAlign: 'left' }}>
                Maximum Age limit <strong>: 50 Years</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Vacancy Details Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>
        <table className="table-auto border border-gray-400 mb-4">
          <tbody>
            <tr>
              <td className="px-4 py-2 text-center">
                <span className="text-pink-500 font-bold">
                  <strong>Post Name</strong>
                </span>
              </td>
              <td className="px-4 py-2 text-center">
                <span className="text-pink-500 font-bold">
                  <strong>Total</strong>
                </span>
              </td>
              <td className="px-4 py-2 text-center">
                <span className="text-pink-500 font-bold">
                  <strong>Qualification</strong>
                </span>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">
                Asst Electrical Engineer (General)
              </td>
              <td className="px-4 py-2 text-center">30</td>
              <td className="px-4 py-2 text-center">
                BE/ B.Tech/ B.Sc (Electrical /Electronics Engg)
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">
                Assistant&nbsp; Executive Engineer (GTO)
              </td>
              <td className="px-4 py-2 text-center">21</td>
              <td className="px-4 py-2 text-center">
                BE/ B.Tech/ B.Sc (Electrical /Electronics/Mechanical&nbsp;
                Engg)
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">
                Assistant&nbsp; Engineer (Civil)
              </td>
              <td className="px-4 py-2 text-center">07</td>
              <td className="px-4 py-2 text-center">
                BE/ B.Tech/ B.Sc (Civil Engg/Construction Engg)
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">Accounts Officer</td>
              <td className="px-4 py-2 text-center">10</td>
              <td className="px-4 py-2 text-center">CA/ CMA/ ICWA</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">Revenue Officer</td>
              <td className="px-4 py-2 text-center">02</td>
              <td className="px-4 py-2 text-center">
                BE/ B.Tech/ B.Sc (Electrical /Electronics/Power Engg MBA/
                PGDMA)
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">Assistant IT Manager&nbsp;</td>
              <td className="px-4 py-2 text-center">27</td>
              <td className="px-4 py-2 text-center">
                BE/ B.Tech (CSC/IT/MCA)
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">
                Jr Electrical Engineer (General)
              </td>
              <td className="px-4 py-2 text-center">109</td>
              <td className="px-4 py-2 text-center">
                Diploma( Electrical/ Engineer)
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">
                Jr Electrical Engineer (GTO)
              </td>
              <td className="px-4 py-2 text-center">89</td>
              <td className="px-4 py-2 text-center">
                Diploma (Electrical/Mechanical)
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">Jr Engineer (Civil)</td>
              <td className="px-4 py-2 text-center">16</td>
              <td className="px-4 py-2 text-center">Diploma (Civil Engg)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">Assistant Law Officer</td>
              <td className="px-4 py-2 text-center">06</td>
              <td className="px-4 py-2 text-center">LLB/BALLB/BBALLB</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">Assistant&nbsp;</td>
              <td className="px-4 py-2 text-center">10</td>
              <td className="px-4 py-2 text-center">Any Degree</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">Correspondence Clerk</td>
              <td className="px-4 py-2 text-center">150</td>
              <td className="px-4 py-2 text-center">Any Degree</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">Store Assistant</td>
              <td className="px-4 py-2 text-center">35</td>
              <td className="px-4 py-2 text-center">Any Degree</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">Junior Account Clerk</td>
              <td className="px-4 py-2 text-center">38</td>
              <td className="px-4 py-2 text-center">Degree (Commerce)</td>
            </tr>
            <tr>
              <td
                colSpan="3"
                className="px-4 py-2 text-center font-bold"
              >
                <span className="text-blue-500 hover:underline">
                  <strong>
                    Interested Candidates Can Read the Full Notification
                    Before Apply Online.
                  </strong>
                </span>
              </td>
            </tr>
            <tr>
              <td colspan="3" className="px-4 py-2 text-center">
                <span className="text-red-500 font-bold">
                  <strong>Important Links </strong>
                </span>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">
                <span className="text-green-500 font-bold">
                  <strong>Apply Online</strong>
                </span>
              </td>
              <td
                colSpan="2"
                className="px-4 py-2 text-center font-bold"
              >
                <strong>Available on 01-04-2024</strong>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">
                <span className="text-green-500 font-bold">
                  <strong>Online Link Interrupted Notice (02-04-2024)</strong>
                  <br/>
                </span>
              </td>
              <td
                colSpan="2"
                className="px-4 py-2 text-center font-bold"
              >
                <a
                  href="https://www.bsphcl.co.in/Docs/Recruitment/RN-03-01-04-2024.pdf"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                  rel="nofollow"
                >
                  <strong>Click Here</strong>
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">
                <span className="text-green-500 font-bold">
                  <strong>Notification </strong>
                </span>
              </td>
              <td
                colSpan="2"
                className="px-4 py-2 text-center font-bold"
              >
                <a
                  href="https://www.bsphcl.co.in/Docs/Recruitment/RN-08-06-03-2024.pdf"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                  rel="nofollow"
                >
                  <strong>Click Here</strong>
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-center">
                <span className="text-green-500 font-bold">
                  <strong>Official Website</strong>
                </span>
              </td>
              <td
                colSpan="2"
                className="px-4 py-2 text-center font-bold"
              >
                <a
                  href="https://www.bsphcl.co.in"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                  rel="nofollow"
                >
                  <strong>Click Here</strong>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}