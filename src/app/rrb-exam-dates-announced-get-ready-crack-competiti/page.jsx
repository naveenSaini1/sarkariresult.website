export default function RecruitmentInformation() {
  // This component displays recruitment information from Railway Recruitment Board (RRB) and Cell (RRC) including details on the post, application fee, important dates, and vacancy information.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Railway Recruitment Information</h1>

      {/* RRB NTPC (Undergraduate) 2024 */}
      <h2 className="text-2xl font-bold mb-2" id="NTPC-Undergraduate-2024">
        RRB NTPC (Undergraduate) 2024 Online Form
      </h2>
      <p className="mb-2">
        <span className="text-green-500 font-bold">Name of the Post: </span>
        <span className="text-black">RRB NTPC (Undergraduate) 2024 Online Form</span>
      </p>
      <p className="mb-2">
        <span className="text-green-500 font-bold">Post Date: </span>
        <span className="text-black font-bold">02-09-2024</span>
      </p>
      <p className="mb-2">
        <span className="text-green-500 font-bold">Latest Update: </span>
        <span className="text-black font-bold">21-09-2024</span>
      </p>
      <p className="mb-2">
        <span className="text-green-500 font-bold">Total Vacancy: </span>
        <span className="text-black font-bold">3445</span>
      </p>
      <p className="mb-4">
        <span className="text-red-500 font-bold">Brief Information: </span>
        <span className="text-black">
          Government of India, Ministry of Railways, Railway Recruitment Board
          (RRB) has given a notification for the recruitment of NTPC
          Undergraduate Vacancies in different Railway Recruitment Boards
          (RRBs). Those Candidates who are interested in the vacancy details &
          completed all eligibility criteria can read the notification & Apply
          Online.
        </span>
      </p>

      <table className="table-auto w-full text-center border-collapse border-2 border-gray-400 mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2" colSpan="8">
              <p className="text-red-500 font-bold">Railway Recruitment Board (RRB)</p>
              <p className="text-pink-500 font-bold">CEN No. 06/2024</p>
              <p className="text-green-500 font-bold">
                NTPC (Undergraduate) Vacancy 2024
              </p>
              <p className="text-blue-500">
                <a href="https://www.freejobalert.com" target="_blank" rel="noopener">
                  
                </a>
              </p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2" colSpan="8">
              <p className="text-red-500 font-bold">Application Fee</p>
              <ul>
                <li className="text-black">
                  For all candidates, Out of this fee of Rs. 500/-, an amount of
                  Rs. 400/- shall be refunded duly deducting bank charges, on
                  appearing in 1st Stage CBT:&nbsp;
                  <span className="text-black font-bold">Rs. 500/-</span>
                </li>
                <li className="text-black">
                  For candidates who belong to SC, ST, Ex-Servicemen, Female,
                  Transgender, Minorities or Economically Backward Class (EBC).
                  (Caution to Candidates: EBC should not be confused with OBC or
                  EWS). This fee of Rs. 250/- shall be refunded duly deducting
                  bank charges as applicable, on appearing 1st Stage CBT:
                  <span className="text-black font-bold">Rs. 250/-</span>
                </li>
                <li className="text-black">
                  Payment Mode:&nbsp;
                  <span className="text-black font-bold">
                    Through Online by using internet banking or debit/credit
                    cards or UPI
                  </span>
                </li>
                <li className="text-black">
                  <span className="text-black font-bold">Note: </span>Only
                  candidates who attend CBT will get a refund of their
                  examination fee as mentioned above.
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="p-2" colSpan="8">
              <p className="text-red-500 font-bold">Important Dates</p>
              <ul>
                <li className="text-black">
                  Date of Publication in RRB websites:&nbsp;
                  <span className="text-black font-bold">20-09-2024</span>
                </li>
                <li className="text-black">
                  Starting Date for Apply Online & Payment of Fee:
                  <span className="text-black font-bold">21-09-2024</span>
                </li>
                <li className="text-black">
                  Last Date for Apply Online:
                  <span className="text-black font-bold">
                    20-10-2024 at 23.59 hrs.
                  </span>
                </li>
                <li className="text-black">
                  Date for Payment of Fee:
                  <span className="text-black font-bold">
                    21-10-2024 to 22-10-2024
                  </span>
                </li>
                <li className="text-black">
                  Date for Modification window for corrections in application
                  form with payment of modification fee (Please Note: Details
                  filled in ‘Create an Account’ form and Chosen RRB cannot be
                  modified):&nbsp;
                  <span className="text-black font-bold">
                    23-10-2024 to 01-11-2024
                  </span>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="p-2" colSpan="8">
              <p className="text-red-500 font-bold">Age Limit (as on 01-01-2025)</p>
              <ul>
                <li className="text-black">
                  Minimum Age Limit:&nbsp;
                  <span className="text-black font-bold">18 Years</span>
                </li>
                <li className="text-black">
                  Maximum Age Limit:&nbsp;
                  <span className="text-black font-bold">33 Years</span>
                </li>
                <li className="text-black">
                  For UR & EWS Not earlier than 02-01-1992.
                </li>
                <li className="text-black">
                  For OBC-Non Creamy Layer Not earlier than 02-01-1989.
                </li>
                <li className="text-black">
                  For SC/ST Not earlier than 02-01-1987.
                </li>
                <li className="text-black">
                  For all community /categories Not later than 01-01-2007.
                </li>
                <li className="text-black">
                  Age Relaxation is Applicable as per Rules.
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="p-2" colSpan="8">
              <p className="text-red-500 font-bold">Qualification</p>
              <ul>
                <li className="text-black">
                  Candidates should possess 12th(+2 Stage) or its equivalent.
                </li>
                <li className="text-black">
                  For Accounts Clerk Cum Typist, Junior Clerk Cum Typist: Typing
                  proficiency in English / Hindi on Computer is essential.
                </li>
                <li className="text-black">For More Details Refer Notification.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="p-2" colSpan="8">
              <p className="text-red-500 font-bold">Vacancy Details</p>
              <ul>
                <li className="text-black">Vacancies for Undergraduate Posts:</li>
              </ul>
              <table className="table-auto w-full text-center border-collapse border-2 border-gray-400 mb-2">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-2"><span className="text-pink-500 font-bold">SI No.</span></th>
                    <th className="p-2"><span className="text-pink-500 font-bold">Post Name</span></th>
                    <th className="p-2"><span className="text-pink-500 font-bold">Total</span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2">1.</td>
                    <td className="p-2">Commercial cum Ticket Clerk</td>
                    <td className="p-2">2022</td>
                  </tr>
                  <tr>
                    <td className="p-2">2.</td>
                    <td className="p-2">Accounts Clerk cum Typist</td>
                    <td className="p-2">361</td>
                  </tr>
                  <tr>
                    <td className="p-2">3.</td>
                    <td className="p-2">Junior Clerk cum Typist</td>
                    <td className="p-2">990</td>
                  </tr>
                  <tr>
                    <td className="p-2">4.</td>
                    <td className="p-2">Trains Clerk</td>
                    <td className="p-2">72</td>
                  </tr>
                  <tr>
                    <td className="p-2"></td>
                    <td className="p-2">
                      <span className="text-black font-bold">Total</span>
                    </td>
                    <td className="p-2">
                      <span className="text-black font-bold">3445</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>&nbsp;</p>
              <table className="table-auto w-full text-center border-collapse border-2 border-gray-400 mb-4">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-2"><span className="text-pink-500 font-bold">SI No.</span></th>
                    <th className="p-2"><span className="text-pink-500 font-bold">RRB Region participating in CEN No. 06/2024</span></th>
                    <th className="p-2"><span className="text-pink-500 font-bold">Zone</span></th>
                    <th className="p-2"><span className="text-pink-500 font-bold">Commercial cum Ticket Clerk</span></th>
                    <th className="p-2"><span className="text-pink-500 font-bold">Accounts Clerk cum Typist</span></th>
                    <th className="p-2"><span className="text-pink-500 font-bold">Junior Clerk cum Typist</span></th>
                    <th className="p-2"><span className="text-pink-500 font-bold">Trains Clerk</span></th>
                    <th className="p-2"><span className="text-pink-500 font-bold">Total</span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2">1.</td>
                    <td className="p-2">RRB Ahmedabad</td>
                    <td className="p-2">WR</td>
                    <td className="p-2">155</td>
                    <td className="p-2">-</td>
                    <td className="p-2">48</td>
                    <td className="p-2">07</td>
                    <td className="p-2">
                      <span className="text-black font-bold">210</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2">2.</td>
                    <td className="p-2">RRB Ajmer</td>
                    <td className="p-2">NWR & WCR</td>
                    <td className="p-2">11</td>
                    <td className="p-2">-</td>
                    <td className="p-2">60</td>
                    <td className="p-2">-</td>
                    <td className="p-2">
                      <span className="text-black font-bold">71</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2">3.</td>
                    <td className="p-2">RRB Bangalore</td>
                    <td className="p-2">SWR</td>
                    <td className="p-2">48</td>
                    <td className="p-2">05</td>
                    <td className="p-2">07</td>
                    <td className="p-2">-</td>
                    <td className="p-2">
                      <span className="text-black font-bold">60</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2">4.</td>
                    <td className="p-2">RRB Bhopal</td>
                    <td className="p-2">WCR & WR</td>
                    <td className="p-2">14</td>
                    <td className="p-2">-</td>
                    <td className="p-2">36</td>
                    <td className="p-2">08</td>
                    <td className="p-2">
                      <span className="text-black font-bold">58</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2">5.</td>
                    <td className="p-2">RRB Bhubaneswar</td>
                    <td className="p-2">ECoR</td>
                    <td className="p-2">09</td>
                    <td className="p-2">28</td>
                    <td className="p-2">19</td>
                    <td className="p-2">-</td>
                    <td className="p-2">
                      <span className="text-black font-bold">56</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2">6.</td>
                    <td className="p-2">RRB Bilaspur</td>
                    <td className="p-2">CR & SECR</td>
                    <td className="p-2">115</td>
                    <td className="p-2">15</td>
                    <td className="p-2">22</td>
                    <td className="p-2">-</td>
                    <td className="p-2">
                      <span className="text-black font-bold">152</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2">7.</td>
                    <td className="p-2">RRB chandigarh</td>
                    <td className="p-2">NR</td>
                    <td className="p-2">91</td>
                    <td className="p-2">22</td>
                    <td className="p-2">125</td>
                    <td className="p-2">09</td>
                    <td className="p-2">
                      <span className="text-black font-bold">247</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2">8.</td>
                    <td className="p-2">RRB Chennai</td>
                    <td className="p-2">SR</td>
                    <td className="p-2">39</td>
                    <td className="p-2">28</td>
                    <td className="p-2">126</td>
                    <td className="p-2">01</td>
                    <td className="p-2">
                      <span className="text-black font-bold">194</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2">9.</td>
                    <td className="p-2">RRB Guwahati</td>
                    <td className="p-2">NFR</td>
                    <td className="p-2">82</td>
                    <td className="p-2">31</td>
                    <td className="p-2">59</td>
                    <td className="p-2">03</td>
                    <td className="p-2">
                      <span className="text-black font-bold">175</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2">10.</td>
                    <td className="p-2">RRB Goarkhpur</td>
                    <td className="p-2">NER</td>
                    <td className="p-2">107</td>
                    <td className="p-2">-</td>
                    <td className="p-2">08</td>
                    <td className="p-2">05</td>
                    <td className="p-2">
                      <span className="text-black font-bold">120</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2">11.</td>
                    <td className="p-2">RRB Jammu & Srinagar</td>
                    <td className="p-2">NR</td>
                    <td className="p-2">92</td>
                    <td className="p-2">04</td>
                    <td className="p-2">47</td>
                    <td className="p-2">04</td>
                    <td className="p-2">
                      <span className="text-black font-bold">147</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2">12.</td>
                    <td className="p-2">RRB Kolkata</td>
                    <td className="p-2">ER, METRO & SER</td>
                    <td className="p-2">118</td>
                    <td className="p-2">132</td>
                    <td className="p-2">187</td>
                    <td className="p-2">15</td>
                    <td className="p-2">
                      <span className="text-black font-bold">452</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2">13.</td>
                    <td className="p-2">RRB Malda</td>
                    <td className="p-2">ER & SER</td>
                    <td className="p-2">-</td>
                    <td className="p-2">-</td>
                    <td className="p-2">12</td>
                    <td className="p-2">-</td>
                    <td className="p-2">
                      <span className="text-black font-bold">12</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2">14.</td>
                    <td className="p-2">RRB Mumbai</td>
                    <td className="p-2">CR</td>
                    <td className="p-2">234</td>
                    <td className="p-2">28</td>
                    <td className="p-2">202</td>
                    <td className="p-2">03</td>
                    <td className="p-2">
                      <span className="text-black font-bold">467</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2">15.</td>
                    <td className="p-2">RRB Muzaffarpur</td>
                    <td className="p-2">ECR</td>
                    <td className="p-2">14</td>
                    <td className="p-2">-</td>
                    <td className="p-2">30</td>
                    <td className="p-2">01</td>
                    <td className="p-2">
                      <span className="text-black font-bold">45</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2">16.</td>
                    <td className="p-2">RRB Patna</td>
                    <td className="p-2">ECR</td>
                    <td className="p-2">38</td>
                    <td className="p-2">02</td>
                    <td className="p-2">54</td>
                    <td className="p-2">-</td>
                    <td className="p-2">
                      <span className="text-black font-bold">94</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2">17.</td>
                    <td className="p-2">RRB Ranchi</td>
                    <td className="p-2">ECR & SER</td>
                    <td className="p-2">33</td>
                    <td className="p-2">-</td>
                    <td className="p-2">28</td>
                    <td className="p-2">01</td>
                    <td className="p-2">
                      <span className="text-black font-bold">62</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2">18.</td>
                    <td className="p-2">RRB Secunderabad</td>
                    <td className="p-2">SCR</td>
                    <td className="p-2">66</td>
                    <td className="p-2">13</td>
                    <td className="p-2">84</td>
                    <td className="p-2">02</td>
                    <td className="p-2">
                      <span className="text-black font-bold">165</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2">19.</td>
                    <td className="p-2">RRB Siliguri</td>
                    <td className="p-2">NFR</td>
                    <td className="p-2">13</td>
                    <td className="p-2">03</td>
                    <td className="p-2">10</td>
                    <td className="p-2">-</td>
                    <td className="p-2">
                      <span className="text-black font-bold">26</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2">20.</td>
                    <td className="p-2">RRB Thiruvananthapuram</td>
                    <td className="p-2">SR</td>
                    <td className="p-2">31</td>
                    <td className="p-2">11</td>
                    <td className="p-2">38</td>
                    <td className="p-2">-</td>
                    <td className="p-2">
                      <span className="text-black font-bold">80</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2">21.</td>
                    <td className="p-2">RRB Vadodara</td>
                    <td className="p-2">WR</td>
                    <td className="p-2">82</td>
                    <td className="p-2">-</td>
                    <td className="p-2">116</td>
                    <td className="p-2">10</td>
                    <td className="p-2">
                      <span className="text-black font-bold">208</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2"></td>
                    <td className="p-2">
                      <span className="text-black font-bold">Total</span>
                    </td>
                    <td className="p-2"></td>
                    <td className="p-2">
                      <span className="text-black font-bold">2022</span>
                    </td>
                    <td className="p-2">
                      <span className="text-black font-bold">361</span>
                    </td>
                    <td className="p-2">
                      <span className="text-black font-bold">990</span>
                    </td>
                    <td className="p-2">
                      <span className="text-black font-bold">72</span>
                    </td>
                    <td className="p-2">
                      <span className="text-black font-bold">3445</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}