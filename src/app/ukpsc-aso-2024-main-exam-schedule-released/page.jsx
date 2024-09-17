export default function RecruitmentInfo() {
  // This component displays recruitment information for UKPSC ASO 2024 Main Exam. 
  // It includes post details, brief information, application fee, important dates, 
  // and vacancy details.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">UKPSC ASO 2024 Main Exam Schedule Announced</h1>
      <div className="mb-4">
        <p className="text-lg font-medium text-green-500 mb-2">Name of the Post:</p>
        <p>UKPSC ASO 2024 Main Exam Schedule Announced</p>
      </div>
      <div className="mb-4">
        <p className="text-lg font-medium text-green-500 mb-2">Post Date:</p>
        <p>08-02-2024</p>
      </div>
      <div className="mb-4">
        <p className="text-lg font-medium text-green-500 mb-2">Latest Update:</p>
        <p>17-09-2024</p>
      </div>
      <div className="mb-4">
        <p className="text-lg font-medium text-green-500 mb-2">Total Vacancy:</p>
        <p>223</p>
      </div>
      <div className="mb-4">
        <p className="text-lg font-medium text-red-500 mb-2">Brief Information:</p>
        <p>Uttarakhand Public Service Commission (UKPSC) has Published a notification for the recruitment of Assistant Statistical Officer, Investigator and Computer & Statistical Assistant Vacancy. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply Online.</p>
      </div>
      <div className="mb-8">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th colSpan={3} className="text-center py-2 text-red-500 font-bold">Uttarakhand Public Service Commission (UKPSC)</th>
            </tr>
            <tr className="bg-gray-200">
              <th colSpan={3} className="text-center py-2 text-pink-500 font-bold">A-1/E-1/DR(ICC/ASO)/2023-24</th>
            </tr>
            <tr className="bg-gray-200">
              <th colSpan={3} className="text-center py-2 text-green-500 font-bold">Various Vacancy 2024</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-300">
              <td colSpan={3} className="text-center py-2">
                <a href="https://www.freejobalert.com" target="_blank" rel="noopener" className="text-blue-500 hover:underline"></a>
              </td>
            </tr>
            <tr className="border-t border-gray-300">
              <td colSpan={3} className="text-center py-2">
                <p className="text-center text-pink-500 font-bold">Application Fee</p>
                <ul className="list-disc pl-8">
                  <li className="mb-2">For UR/ OBC/EWS : <strong>Rs. 172/- (Application Fee+Processing Fee with Tax)</strong></li>
                  <li className="mb-2">For SC/ ST: <strong>Rs. 82/- (Application Fee+Processing Fee with Tax)</strong></li>
                  <li className="mb-2">For PHC/Divyang: <strong>Rs. 22.30/- (Only Processing Fee with Tax)</strong></li>
                  <li>For Orphan: <strong>Nil</strong></li>
                  <li>Payment Mode: <strong>Through Net Banking/Debit Card/ Credit Card</strong></li>
                </ul>
              </td>
            </tr>
            <tr className="border-t border-gray-300">
              <td colSpan={3} className="text-center py-2">
                <p className="text-center text-red-500 font-bold">Important Dates</p>
                <ul className="list-disc pl-8">
                  <li className="mb-2">Starting Date for Apply Online : <strong>07-02-2024</strong></li>
                  <li className="mb-2">Last Date for Apply Online & Payment of Fee : <strong>28-02-2024 (11:59 PM)</strong></li>
                  <li className="mb-2">Date of making amendments/ changes in Online Application Forrm : <strong>07-03-2024 to 16-03-2024 (11:59 PM)</strong></li>
                  <li className="mb-2">Date of Main Exam: <strong>06-10-2024 to 08-10-2024</strong></li>
                  <li>Date of Admit Card Download: <strong>20-09-2024</strong></li>
                </ul>
              </td>
            </tr>
            <tr className="border-t border-gray-300">
              <td colSpan={3} className="text-center py-2">
                <p className="text-center text-red-500 font-bold">Age Limit (as on 19-03-2018)</p>
                <ul className="list-disc pl-8">
                  <li className="mb-2">Minimum Age limit : <strong>21 Years</strong></li>
                  <li className="mb-2">Maximum Age limit : <strong>42 Years</strong></li>
                  <li>Age relaxation is applicable as per rules.</li>
                </ul>
              </td>
            </tr>
            <tr className="border-t border-gray-300">
              <td colSpan={3} className="text-center py-2 text-red-500 font-bold">Vacancy Details</td>
            </tr>
            <tr className="border-t border-gray-300 bg-gray-200">
              <th className="text-center py-2 text-pink-500 font-bold">Post Name</th>
              <th className="text-center py-2 text-pink-500 font-bold">Total</th>
              <th className="text-center py-2 text-pink-500 font-bold">Qualification</th>
            </tr>
            <tr className="border-t border-gray-300">
              <td className="text-center py-2">Assistant Statistical Officer/ Assistant Research Officer</td>
              <td className="text-center py-2">125</td>
              <td className="text-center py-2">Diploma (Computer Science/Computer Application)/PG (Relevant Subject)</td>
            </tr>
            <tr className="border-t border-gray-300">
              <td className="text-center py-2">Assistant Statistical Officer</td>
              <td className="text-center py-2">22</td>
              <td className="text-center py-2">PG Degree (Relevant Subject)</td>
            </tr>
            <tr className="border-t border-gray-300">
              <td className="text-center py-2">Assistant Statistical Officer Grade-II</td>
              <td className="text-center py-2">38</td>
              <td className="text-center py-2">‘O’ Level Diploma (Computer) / PG Degree (Relevant Subject)</td>
            </tr>
            <tr className="border-t border-gray-300">
              <td className="text-center py-2">Assistant Statistical Officer</td>
              <td className="text-center py-2">01</td>
              <td className="text-center py-2">‘O’ Level Diploma (Computer) / PG Degree (Relevant Subject)</td>
            </tr>
            <tr className="border-t border-gray-300">
              <td className="text-center py-2">Assistant Statistics Officer (Statistics and Planning Branch)</td>
              <td className="text-center py-2">13</td>
              <td className="text-center py-2">BA/B.Sc with Statistics/Mathematical Statistics</td>
            </tr>
            <tr className="border-t border-gray-300">
              <td className="text-center py-2">Investigator and Computer</td>
              <td className="text-center py-2">02</td>
              <td className="text-center py-2">Diploma (Relevant Subject)/Degree (Mathematics/ Statistics)</td>
            </tr>
            <tr className="border-t border-gray-300">
              <td className="text-center py-2">Investigator and Computer</td>
              <td className="text-center py-2">03</td>
              <td className="text-center py-2">B.Sc (Mathematics/ Statistics)</td>
            </tr>
            <tr className="border-t border-gray-300">
              <td className="text-center py-2">Statistical Assistant</td>
              <td className="text-center py-2">11</td>
              <td className="text-center py-2">Degree (Mathematics/ Statistics)</td>
            </tr>
            <tr className="border-t border-gray-300">
              <td className="text-center py-2">Investigator and Computer</td>
              <td className="text-center py-2">08</td>
              <td className="text-center py-2">Degree (Mathematics/ Statistics)</td>
            </tr>
            <tr className="border-t border-gray-300">
              <td colSpan={3} className="text-center py-2 text-blue-500 font-bold">Interested Can didates Can Read the Full Notification Before Apply online</td>
            </tr>
            <tr className="border-t border-gray-300">
              <td colSpan={3} className="text-center py-2 text-red-500 font-bold">Important Links</td>
            </tr>
            <tr className="border-t border-gray-300">
              <td className="text-center py-2 text-green-500 font-bold">Main Exam Schedule for ASO (17-09-2024)</td>
              <td colSpan={2} className="text-center py-2">
                <a href="https://img.freejobalert.com/uploads/2024/09/Main-Exam-Schedule-UKPSC-ASO-Posts.pdf" target="_blank" rel="nofollow" className="text-blue-500 hover:underline">Click Here</a>
              </td>
            </tr>
            <tr className="border-t border-gray-300">
              <td className="text-center py-2 text-green-500 font-bold">Corrigendum (Regarding Skilled Player) (14-09-2024)</td>
              <td colSpan={2} className="text-center py-2">
                <a href="https://img.freejobalert.com/uploads/2024/09/Corrigendum-UKPSC-various-Vacancy.pdf" target="_blank" rel="nofollow" className="text-blue-500 hover:underline">Click Here</a>
              </td>
            </tr>
            <tr className="border-t border-gray-300">
              <td className="text-center py-2 text-green-500 font-bold">Main Exam Date (27-04-2024)</td>
              <td colSpan={2} className="text-center py-2">
                <a href="https://psc.uk.gov.in/public/uploads/pdf/1714154668.pdf" target="_blank" rel="nofollow" className="text-blue-500 hover:underline">Click Here</a>
              </td>
            </tr>
            <tr className="border-t border-gray-300">
              <td className="text-center py-2 text-green-500 font-bold">Apply Online</td>
              <td colSpan={2} className="text-center py-2">
                <a href="https://ukpscnet.in/aso/exam.html#/tfl/how-to-apply" target="_blank" rel="nofollow" className="text-blue-500 hover:underline">Click Here</a>
              </td>
            </tr>
            <tr className="border-t border-gray-300">
              <td className="text-center py-2 text-green-500 font-bold">Notification</td>
              <td colSpan={2} className="text-center py-2">
                <a href="https://psc.uk.gov.in/public/uploads/recruitment/1888799916.pdf" target="_blank" rel="nofollow" className="text-blue-500 hover:underline">Click Here</a>
              </td>
            </tr>
            <tr className="border-t border-gray-300">
              <td className="text-center py-2 text-green-500 font-bold">Official Website</td>
              <td colSpan={2} className="text-center py-2">
                <a href="https://psc.uk.gov.in/" target="_blank" rel="nofollow" className="text-blue-500 hover:underline">Click Here</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}