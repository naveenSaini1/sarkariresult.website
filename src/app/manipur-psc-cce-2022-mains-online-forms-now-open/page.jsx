export default function ManipurPSCRecruitment() {
  // This component displays recruitment information for the Manipur Public Service Commission (PSC), 
  // including post details, application fee, important dates, and vacancy details.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Manipur Public Service Commission (PSC) Recruitment</h1>

      {/* CCE (Mains) Exam 2022 */}
      <h2 className="text-2xl font-bold mb-2" id="CCE-2022">
        <a href="#CCE-2022" className="text-blue-500 hover:underline">
          Click Here for CCE (Mains) Exam 2022 Post Details – Last Date : 31-07-2024
        </a>
      </h2>
      <p className="mb-2">
        <span className="font-bold text-green-500">Name of the Post:</span> Manipur PSC CCE 2022 Mains Online Form
      </p>
      <p className="mb-2">
        <span className="font-bold text-green-500">Post Date:</span> <span className="text-black">08-12-2022</span>
      </p>
      <p className="mb-2">
        <span className="font-bold text-green-500">Latest Update:</span> 20-07-2024
      </p>
      <p className="mb-2">
        <span className="font-bold text-green-500">Total Vacancy:</span> <span className="text-black">100</span>
      </p>
      <p className="mb-4">
        <span className="font-bold text-red-500">Brief Information:</span> Manipur Public Service Commission (PSC) has given a notification for the recruitment of Civil Services Combined Competitive Exam 2022. 
        Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply online.
      </p>
      <table className="table-auto w-full border border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left font-bold">Advt No: 01/2022</th>
            <th className="px-4 py-2 text-left font-bold">Civil Services Combined Competitive Exam 2022</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-50">
            <td className="px-4 py-2 text-left">
              <p className="font-bold text-red-500">Application Fee</p>
              <p className="font-bold">Mains Fee:</p>
              <ul className="list-disc ml-4">
                <li>For GEN/ OBC: <strong className="text-black">Rs. 600/-</strong></li>
                <li>For SC/ ST: <strong className="text-black">Rs. 400</strong></li>
                <li>Payment Mode: <strong className="text-black">Through Gate Way</strong></li>
              </ul>
              <p className="font-bold">Prelims Fee:</p>
              <ul className="list-disc ml-4">
                <li>For GEN/ OBC: <strong className="text-black">Rs. 600/-</strong></li>
                <li>For SC/ ST: <strong className="text-black">Rs. 400</strong></li>
                <li>For DAP (Differently Abled Candidates): <strong className="text-black">Nil</strong></li>
                <li>Payment Mode: <strong className="text-black">Net Banking, Visa/ Master Card/ Debit Card</strong></li>
              </ul>
            </td>
            <td className="px-4 py-2 text-left">
              <p className="font-bold text-red-500">Important Dates</p>
              <p className="font-bold">Mains Dates:</p>
              <ul className="list-disc ml-4">
                <li>Starting Date for Apply Online: <strong className="text-black">10-07-2024</strong></li>
                <li>Last Date for Apply Online: <strong className="text-black">31-07-2024 up to 11:59 PM</strong></li>
              </ul>
              <p className="font-bold">Prelims Dates:</p>
              <ul className="list-disc ml-4">
                <li>Starting Date for Apply Online: <strong className="text-black">15-12-2022</strong></li>
                <li>Last Date for Apply Online: <strong className="text-black">31-01-2023 up to 11:59 PM</strong></li>
                <li>Date for Download of Admission Certificate: <strong className="text-black">From 21-02-2023 to 21-03-2023</strong></li>
                <li>Date of Prelims Exam: <strong className="text-black">30-04-2023</strong></li>
                <li>Date of Downloading Admit Card: <strong className="text-black">20-02-2023</strong></li>
              </ul>
            </td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-4 py-2 text-left" colSpan="2">
              <p className="font-bold text-red-500">Age Limit (as on 01-07-2022)</p>
              <ul className="list-disc ml-4">
                <li>Minimum Age: <strong className="text-black">21 Years</strong></li>
                <li>Maximum Age: <strong className="text-black">38 Years</strong></li>
                <li>Age relaxation is applicable for SC/ ST/ OBC/ PH candidates as per rules.</li>
              </ul>
            </td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-4 py-2 text-left" colSpan="2">
              <p className="font-bold text-red-500">Qualification</p>
              <ul className="list-disc ml-4">
                <li>Candidates should possess Degree from recognised university.</li>
              </ul>
            </td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-4 py-2 text-left" colSpan="2">
              <p className="font-bold text-red-500">Vacancy Details</p>
              <p className="font-bold">Civil Services Combined Competitive (Prelims) Exam 2022</p>
              <table className="table-auto w-full border border-gray-300 mt-2">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 text-left font-bold">Post Name</th>
                    <th className="px-4 py-2 text-left font-bold">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2 text-left">Manipur Civil Service Grade-II</td>
                    <td className="px-4 py-2 text-left">17</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2 text-left">Manipur Police Service Grade-II</td>
                    <td className="px-4 py-2 text-left">25</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2 text-left">Manipur Finance Service Grade-III</td>
                    <td className="px-4 py-2 text-left">10</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2 text-left">Sub Divisional Collector</td>
                    <td className="px-4 py-2 text-left">33</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2 text-left">Manipur Secretariat Service Category-VI</td>
                    <td className="px-4 py-2 text-left">15</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-4 py-2 text-left" colSpan="2">
              <p className="font-bold text-blue-500">Interested Candidates Can Read the Full Notification Before Apply Online</p>
            </td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-4 py-2 text-left" colSpan="2">
              <p className="font-bold text-red-500">Important Links</p>
              <table className="table-auto w-full border border-gray-300 mt-2">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 text-left font-bold">Link</th>
                    <th className="px-4 py-2 text-left font-bold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2 text-left">
                      <a href="https://empsconline.gov.in/appformsecondphases.aspx?&amp;nt=9BD9j8yIKmg%3d&amp;et=mFZI7jAjiVCld8RXYwgKkVsgF5UHXN2s&amp;nit=8EUuZqTOqnE%3d" className="text-blue-500 hover:underline">
                        Click Here
                      </a>
                    </td>
                    <td className="px-4 py-2 text-left">Mains Apply Online (20-07-2024)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2 text-left">
                      <a href="https://img.freejobalert.com/uploads/2024/07/Mains-Notification-Manipur-PSC-CCE-2022.pdf" className="text-blue-500 hover:underline">
                        Click Here
                      </a>
                    </td>
                    <td className="px-4 py-2 text-left">Mains Notification (20-07-2024)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2 text-left">
                      <a href="https://mpscmanipur.gov.in/files/2022/MCSCCE_2022/Final_Ans_Key.pdf" className="text-blue-500 hover:underline">
                        Click Here
                      </a>
                    </td>
                    <td className="px-4 py-2 text-left">Final Answer Key (01-06-2024)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2 text-left">
                      <a href="https://mpscmanipur.gov.in/files/2022/MCSCCE_2022/MCSCCE_2022_Ans_key_Claim_Notice.pdf" className="text-blue-500 hover:underline">
                        Click Here
                      </a>
                    </td>
                    <td className="px-4 py-2 text-left">Answer Key Claim Notice</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2 text-left">
                      <a href="https://mpscmanipur.gov.in/mcscce_2022.html" className="text-blue-500 hover:underline">
                        Click Here
                      </a>
                    </td>
                    <td className="px-4 py-2 text-left">Notice (12-05-2023)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2 text-left">
                      <a href="https://img.freejobalert.com/uploads/2023/05/Prelims-Answer-Key-Manipur-PSC-CCE-Exam.pdf" className="text-blue-500 hover:underline">
                        Click Here
                      </a>
                    </td>
                    <td className="px-4 py-2 text-left">Prelims Answer Key (02-05-2023)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2 text-left">
                      <a href="https://mpscmanipur.gov.in/files/2022/MCSCCE_2022/Notification_SDC.pdf" className="text-blue-500 hover:underline">
                        Click Here
                      </a>
                    </td>
                    <td className="px-4 py-2 text-left">Modified category wise Vacancy Notice (25-04-2023)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2 text-left">
                      <a href="https://mpscmanipur.gov.in/mcscce_2022.html" className="text-blue-500 hover:underline">
                        Click Here
                      </a>
                    </td>
                    <td className="px-4 py-2 text-left">Prelims Exam Date (03-03-2023)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2 text-left">
                      <a href="https://empsconline.gov.in/Notice.aspx" className="text-blue-500 hover:underline">
                        Click Here
                      </a>
                    </td>
                    <td className="px-4 py-2 text-left">Apply Online (16-12-2022)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2 text-left">
                      <a href="https://mpscmanipur.gov.in/files/2022/MCSCCE_2022/MCSCCE_2022_Advt.pdf" className="text-blue-500 hover:underline">
                        Click Here
                      </a>
                    </td>
                    <td className="px-4 py-2 text-left">Notification </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2 text-left">
                      <a href="https://mpscmanipur.gov.in/" className="text-blue-500 hover:underline">
                        Click Here
                      </a>
                    </td>
                    <td className="px-4 py-2 text-left">Official Website</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Medical Officer */}
      <h2 className="text-2xl font-bold mb-2" id="MO">
        <a href="#MO" className="text-blue-500 hover:underline">
          Click here for 300 Medical Officer Post Details – Interview Result Released
        </a>
      </h2>
      <p className="mb-2">
        <span className="font-bold text-green-500">Name of the Post:</span> Manipur PSC Medical Officer 2021 Interview Result Released
      </p>
      <p className="mb-2">
        <span className="font-bold text-green-500">Post Date:</span> <span className="text-black">04-10-2021</span>
      </p>
      <p className="mb-2">
        <span className="font-bold text-green-500">Latest Update:</span> 13-05-2024
      </p>
      <p className="mb-2">
        <span className="font-bold text-green-500">Total Vacancy:</span> <span className="text-black">300</span>
      </p>
      <p className="mb-4">
        <span className="font-bold text-red-500">Brief Information:</span> Manipur Public Service Commission (PSC) has published notification for the recruitment of Medical Officer Posts. 
        Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply online.
      </p>
      <table className="table-auto w-full border border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left font-bold">Advt No: 01/2021</th>
            <th className="px-4 py-2 text-left font-bold">Medical Officer Vacancy 2021</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-50">
            <td className="px-4 py-2 text-left" colSpan="2">
              <p className="font-bold text-red-500">Important Dates</p>
              <ul className="list-disc ml-4">
                <li>Starting Date for Online Apply: <strong className="text-black">01-10-2021</strong></li>
                <li>Last Date for Online Apply: <strong className="text-black">31-10-2021 </strong>(20-10-2021 Extended to 31-10-2021)</li>
                <li>Date for Interview : <strong className="text-black">3, 6 to 10-05-2024</strong></li>
              </ul>
            </td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-4 py-2 text-left" colSpan="2">
              <p className="font-bold text-red-500">Age Limit (as on 20-10-2021)</p>
              <ul className="list-disc ml-4">
                <li>Minimum Age: <strong className="text-black">21 Years</strong></li>
                <li>Maximum Age: <strong className="text-black">38 Years</strong></li>
                <li>Age relaxation is applicable as per rules</li>
              </ul>
            </td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-4 py-2 text-left" colSpan="2">
              <p className="font-bold text-red-500">Qualification</p>
              <ul className="list-disc ml-4">
                <li>Candidates should possess Recognised Medical Qualification included in the first & Second Schedule to the indian medical council act 1956</li>
              </ul>
            </td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-4 py-2 text-left" colSpan="2">
              <p className="font-bold text-red-500">Vacancy Details</p>
              <p className="font-bold">Medical Officer</p>
              <table className="table-auto w-full border border-gray-300 mt-2">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 text-left font-bold">Category Name</th>
                    <th className="px-4 py-2 text-left font-bold">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2 text-left">UR</td>
                    <td className="px-4 py-2 text-left">150</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2 text-left">OBC (M)</td>
                    <td className="px-4 py-2 text-left">38</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2 text-left">OBC (MP)</td>
                    <td className="px-4 py-2 text-left">12</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2 text-left">OBC (TBN)</td>
                    <td className="px-4 py-2 text-left">01</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2 text-left">SC</td>
                    <td className="px-4 py-2 text-left">06</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-2 text-left">ST</td>
                    <td className="px-4 py-2 text-left">93</td>
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