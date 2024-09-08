export default function RecruitmentInformation() {
  // This component displays recruitment information for JSSC JITOCE 2023, including details like post name, dates, fees, eligibility, and vacancy information. 
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">JSSC JITOCE 2023</h1>
      <div className="mb-4">
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Name of the Post:</span> JSSC JITOCE 2023 Final Answer Key Released
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Post Date:</span> 05-06-2023
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Latest Update:</span> 05-09-2024
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Total Vacancy:</span> <span className="text-gray-700">930</span>
        </p>
      </div>
      <p className="text-lg mb-4">
        <span className="text-red-500 font-bold">Brief Information:</span> Jharkhand Staff Selection Commission (JSSC) has Announced notification to conduct Jharkhand Industrial Training Officer Competitive Examination (JITOCE) – 2023. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply Online.
      </p>
      <div className="mb-4">
        <table className="table-auto w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th colSpan="2" className="text-center py-2">
                <span className="text-red-500 font-bold">Jharkhand Staff Selection Commission (JSSC)</span>
              </th>
            </tr>
            <tr className="bg-gray-100">
              <th colSpan="2" className="text-center py-2">
                <span className="text-pink-500 font-bold">Advt No. 08 & 09/2023</span>
              </th>
            </tr>
            <tr className="bg-gray-100">
              <th colSpan="2" className="text-center py-2">
                <span className="text-green-500 font-bold">JITOCE Exam 2023</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-300">
              <th colSpan="2" className="text-center py-2">
                <a href="https://www.freejobalert.com" target="_blank" rel="noopener" className="text-blue-500"></a>
              </th>
            </tr>
            <tr className="border-t border-gray-300">
              <td colSpan="2" className="text-center py-2">
                <span className="text-red-500 font-bold">Application Fee</span>
              </td>
            </tr>
            <tr className="border-t border-gray-300">
              <td className="py-2" className={{ textAlign: 'left' }}>
                <span>Application Fee: <span className="font-bold">Rs. 100/-</span></span>
              </td>
              <td className="py-2" className={{ textAlign: 'left' }}>
                <span>SC/ ST Candidates of Jharkhand State: <span className="font-bold">Rs. 50/-</span></span>
              </td>
            </tr>
            <tr className="border-t border-gray-300">
              <td colSpan="2" className="py-2" className={{ textAlign: 'left' }}>
                <span>Payment Mode: <span className="font-bold">Through Online</span></span>
              </td>
            </tr>
            <tr className="border-t border-gray-300">
              <td colSpan="2" className="text-center py-2">
                <span className="text-red-500 font-bold">Important Dates</span>
              </td>
            </tr>
            <tr className="border-t border-gray-300">
              <td className="py-2" className={{ textAlign: 'left' }}>
                Starting Date to Apply Online & Payment of Fee: <span className="font-bold">10-07-2023</span>
              </td>
              <td className="py-2" className={{ textAlign: 'left' }}>
                Last Date to Apply Online: <span className="font-bold">19-08-2023 till Midnight</span>
              </td>
            </tr>
            <tr className="border-t border-gray-300">
              <td className="py-2" className={{ textAlign: 'left' }}>
                Last Date for Payment of Fee: <span className="font-bold">21-08-2023</span>
              </td>
              <td className="py-2" className={{ textAlign: 'left' }}>
                Last Date for Upload of Photo & Signature: <span className="font-bold">23-08-2023</span>
              </td>
            </tr>
            <tr className="border-t border-gray-300">
              <td className="py-2" className={{ textAlign: 'left' }}>
                Date for Errors Correction in Application Form: <span className="font-bold">25 to 27-08-2023 till Midnight</span>
              </td>
              <td className="py-2" className={{ textAlign: 'left' }}>
                Date of Exam: <span className="font-bold">27, 28, 29-11-2023</span>
              </td>
            </tr>
            <tr className="border-t border-gray-300">
              <td colSpan="2" className="text-center py-2">
                <span className="text-red-500 font-bold">Age Limit (as on 01-08-2023)</span>
              </td>
            </tr>
            <tr className="border-t border-gray-300">
              <td colSpan="2" className="py-2">
                <table className="table-auto w-full border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="text-center py-2">Sl. No</th>
                      <th className="text-center py-2">Category</th>
                      <th className="text-center py-2">Upper Age Limit</th>
                      <th className="text-center py-2">For PWD Candidates</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-gray-300">
                      <td className="text-center py-2">1</td>
                      <td className="text-center py-2">UR & Economically Weaker</td>
                      <td className="text-center py-2">35 Years</td>
                      <td className="text-center py-2">45 Years</td>
                    </tr>
                    <tr className="border-t border-gray-300">
                      <td className="text-center py-2">2</td>
                      <td className="text-center py-2">Extremely Backward Class SC-1 and Backward Class SC-2</td>
                      <td className="text-center py-2">37 Years</td>
                      <td className="text-center py-2">47 Years</td>
                    </tr>
                    <tr className="border-t border-gray-300">
                      <td className="text-center py-2">3</td>
                      <td className="text-center py-2">Women (UR/ EWS/ Extremely backward Class SC-1)</td>
                      <td className="text-center py-2">38 Years</td>
                      <td className="text-center py-2">48 Years</td>
                    </tr>
                    <tr className="border-t border-gray-300">
                      <td className="text-center py-2">4</td>
                      <td className="text-center py-2">SC/ ST (Male/Female)</td>
                      <td className="text-center py-2">40 Years</td>
                      <td className="text-center py-2">50 Years</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr className="border-t border-gray-300">
              <td colSpan="2" className="text-center py-2">
                <span className="text-red-500 font-bold">Qualification</span>
              </td>
            </tr>
            <tr className="border-t border-gray-300">
              <td colSpan="2" className="py-2" className={{ textAlign: 'left' }}>
                Candidates should possess ITI/ NCT/&nbsp; Degree/ Diploma (Engg) or equivalent from a recognised University
              </td>
            </tr>
            <tr className="border-t border-gray-300">
              <td colSpan="2" className="text-center py-2">
                <span className="text-red-500 font-bold">Vacancy Details</span>
              </td>
            </tr>
            <tr className="border-t border-gray-300">
              <td colSpan="2" className="text-center py-2">
                <span className="text-gray-700 font-bold">JITOCE Exam 2023</span>
              </td>
            </tr>
            <tr className="border-t border-gray-300">
              <td className="text-center py-2">
                <span className="text-pink-500 font-bold">Post Name</span>
              </td>
              <td className="text-center py-2">
                <span className="text-pink-500 font-bold">Total</span>
              </td>
            </tr>
            <tr className="border-t border-gray-300">
              <td className="text-center py-2">JITOCE (Regular)</td>
              <td className="text-center py-2">904</td>
            </tr>
            <tr className="border-t border-gray-300">
              <td className="text-center py-2">JITOCE (Backlog)</td>
              <td className="text-center py-2">26</td>
            </tr>
            <tr className="border-t border-gray-300">
              <td colSpan="2" className="text-center py-2">
                <span className="text-gray-700 font-bold">Interested Candidates Can Read the Full Notification Before Apply</span>
              </td>
            </tr>
            <tr className="border-t border-gray-300">
              <td colSpan="2" className="text-center py-2">
                <span className="text-red-500 font-bold">Important Links</span>
              </td>
            </tr>
            <tr className="border-t border-gray-300">
              <td className="text-center py-2">
                <span className="text-green-500 font-bold">Response Sheet (05-09-2024)</span>
              </td>
              <td className="text-center py-2">
                <a href="https://jssc.onlinereg.in/shreecandqpre24/login.aspx" target="_blank" rel="nofollow" className="text-blue-500">Link</a> | 
                <a href="https://img.freejobalert.com/uploads/2024/09/Response-Sheet-JSSC-JITOCE-2023.pdf" target="_blank" rel="nofollow" className="text-blue-500">Notice</a>
              </td>
            </tr>
            <tr className="border-t border-gray-300">
              <td className="text-center py-2">
                <span className="text-green-500 font-bold">Final Answer Key (22-08-2024)</span>
              </td>
              <td className="text-center py-2">
                <a title="JSSC" href="https://img.freejobalert.com/uploads/2024/08/Final-Answer-Key-JSSC-JITOCE-Exam-2023.pdf" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a>
              </td>
            </tr>
            <tr className="border-t border-gray-300">
              <td className="text-center py-2">
                <span className="text-green-500 font-bold">Tentative Answer Key & Objections (13-07-2024)</span>
              </td>
              <td className="text-center py-2">
                <a title="JSSC" href="https://jsscjitoce23.onlinereg.in/shreeobjre24/login.aspx" target="_blank" rel="nofollow" className="text-blue-500">Key</a> | 
                <a title="JSSC" href="https://img.freejobalert.com/uploads/2024/07/Objections-Notice-JSSC-JITOCE-2023.pdf" target="_blank" rel="nofollow" className="text-blue-500">Notice</a>
              </td>
            </tr>
            <tr className="border-t border-gray-300">
              <td className="text-center py-2">
                <span className="text-green-500 font-bold">Answer Key (26-12-2023)</span>
              </td>
              <td className="text-center py-2">
                <a title="JSSC" href="https://jsscjitoce23.onlinereg.in/shreeobj23/login.aspx" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a> | 
                <a title="JSSC" href="https://jssc.nic.in/sites/default/files/notice%20reg%20provisional%20answersheet%20and%20link%20for%20raising%20objections-JITOCE-2023.pdf" target="_blank" rel="nofollow" className="text-blue-500">Notice</a>
              </td>
            </tr>
            <tr className="border-t border-gray-300">
              <td className="text-center py-2">
                <span className="text-green-500 font-bold">Admit Card (27-11-2023)</span>
              </td>
              <td className="text-center py-2">
                <a title="JSSC" href="https://jsscjitoce23.onlinereg.in/shreeadcard23/SIU_Login/SIU_Login#" target="_blank" rel="nofollow" className="text-blue-500">Admit Card</a> | 
                <a title="JSSC" href="https://jssc.nic.in/sites/default/files/Important%20notice%20reg.%20publication%20of%20link%20for%20admit%20card-JITOCE-2023.pdf" target="_blank" rel="nofollow" className="text-blue-500">Notice</a>
              </td>
            </tr>
            <tr className="border-t border-gray-300">
              <td className="text-center py-2">
                <span className="text-green-500 font-bold">New Exam Date (10-11-2023)</span>
              </td>
              <td className="text-center py-2">
                <a href="https://jssc.nic.in/sites/default/files/Important%20Notice%20regarding%20(Examination%20Dates%20and%20Scribe%20Instructions)-%20JITOCE-2023.pdf" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a>
              </td>
            </tr>
            <tr className="border-t border-gray-300">
              <td className="text-center py-2">
                <span className="text-green-500 font-bold">Exam Date (25-09-2023)</span>
              </td>
              <td className="text-center py-2">
                <a href="https://jssc.nic.in/sites/default/files/Examination%20Calendar_%202023-2024.pdf" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a>
              </td>
            </tr>
            <tr className="border-t border-gray-300">
              <td className="text-center py-2">
                <span className="text-green-500 font-bold">Last Date Extended (11-08-2023)</span>
              </td>
              <td className="text-center py-2">
                <a title="JSSC" href="https://jssc.nic.in/sites/default/files/Important%20Notice-02_%20Regarding%20Extension%20of%20Date%20of%20online%20Application%20under%20JITOCE-2023.pdf" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a>
              </td>
            </tr>
            <tr className="border-t border-gray-300">
              <td className="text-center py-2">
                <span className="text-green-500 font-bold">Apply Online (11-07-2023)</span>
              </td>
              <td className="text-center py-2">
                <a href="https://jsscjitoce23.onlinereg.in/" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a>
              </td>
            </tr>
            <tr className="border-t border-gray-300">
              <td className="text-center py-2">
                <span className="text-green-500 font-bold">Notification</span>
              </td>
              <td className="text-center py-2">
                Advt No. 
                <a title="JSSC" href="https://img.freejobalert.com/uploads/2023/06/Notification-JSSC-JITOCE-Posts.pdf" target="_blank" rel="nofollow" className="text-blue-500">08/2023</a> | 
                <a title="JSSC" href="https://img.freejobalert.com/uploads/2023/06/Notification-JSSC-JITOCE-Various-Posts.pdf" target="_blank" rel="nofollow" className="text-blue-500">09/2023</a>
              </td>
            </tr>
            <tr className="border-t border-gray-300">
              <td className="text-center py-2">
                <span className="text-green-500 font-bold">Official Website</span>
              </td>
              <td className="text-center py-2">
                <a title="JSSC" href="http://www.jssc.nic.in/" target="_blank" rel="nofollow" className="text-blue-500">Click here</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}