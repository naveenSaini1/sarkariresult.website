export default function MeghalayaPoliceRecruitment() {
  // This component displays recruitment information for Meghalaya Police Various Vacancy 2024. 
  // It includes details like post name, important dates, application fee, vacancy details, and important links.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">Meghalaya Police Recruitment 2024</h1>
      <p className="text-lg mb-4 text-center">
        The Meghalaya Police has announced recruitment for various positions including UB Sub Inspector, Constable, Fireman, and other vacancies. This is a great opportunity for individuals interested in a career in law enforcement.
      </p>

      <h2 className="text-2xl font-bold mb-2">Key Highlights</h2>
      <ul className="list-disc pl-5 mb-4">
        <li><strong>Post Name:</strong> Meghalaya Police Various Vacancy 2024</li>
        <li><strong>Total Vacancy:</strong> 2968</li>
        <li><strong>Application Fee:</strong> Rs. 150/-</li>
        <li><strong>Application Dates:</strong> 08-04-2024 to 31-05-2024</li>
        <li><strong>PET Exam Date:</strong> 18-11-2024</li>
      </ul>

      <h2 className="text-2xl font-bold mb-2">Brief Information</h2>
      <p className="mb-4">
        The Office of the Addl. Director General of Police (TAP) and Chairman Central Recruitment Board, Meghalaya has announced recruitment for various positions. Candidates meeting the eligibility criteria can apply online.
      </p>

      <h2 className="text-2xl font-bold mb-2">Vacancy Details</h2>
      <table className="table-auto w-full text-center mb-4">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2">Post Name</th>
            <th className="px-4 py-2">Total</th>
            <th className="px-4 py-2">Age Limit (as on 01-01-2024)</th>
            <th className="px-4 py-2">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">UB Sub Inspector</td>
            <td className="px-4 py-2">76</td>
            <td className="px-4 py-2">21-27 years</td>
            <td className="px-4 py-2">Any Degree</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Un-armed Branch Constable</td>
            <td className="px-4 py-2">720</td>
            <td className="px-4 py-2" rowSpan="6">18-21 Years</td>
            <td className="px-4 py-2" rowSpan="6">10+2</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Fireman (Male)</td>
            <td className="px-4 py-2">195</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Driver Firemen (Male)</td>
            <td className="px-4 py-2">53</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Fireman Mechanic/ Mechanic</td>
            <td className="px-4 py-2">26</td>
          </tr>
          <tr>
            <td className="px-4 py-2">MPRO Operator</td>
            <td className="px-4 py-2">205</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Signal/ BN Operator</td>
            <td className="px-4 py-2">56</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Armed Branch Constable/ Battalion Constable/ MPRO GD/ Constable Handyman</td>
            <td className="px-4 py-2">1494</td>
            <td className="px-4 py-2">18-21 Years</td>
            <td className="px-4 py-2">9th Class</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Driver Constable</td>
            <td className="px-4 py-2">143</td>
            <td className="px-4 py-2">18-21 Years</td>
            <td className="px-4 py-2">9th Class</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mb-2">Important Links</h2>
      <ul className="list-disc pl-5 mb-4">
        <li>
          <a href="https://crb2024.apply-gov.in/" target="_blank" rel="noopener" className="text-blue-500 underline">
            PET Admit Card (15-11-2024)
          </a>
        </li>
        <li>
          <a href="https://megpolice.gov.in/sites/default/files/1-list-invalid-applications-2024.pdf" target="_blank" rel="noopener" className="text-blue-500 underline">
            List of Invalid Applications with reason of rejection (05-10-2024)
          </a>
        </li>
        <li>
          <a href="https://crb2024.apply-gov.in/" target="_blank" rel="noopener" className="text-blue-500 underline">
            Apply Online (02-05-2024)
          </a>
        </li>
        <li>
          <a href="https://megpolice.gov.in/sites/default/files/notice-regd.online-application-dt.09.04.2024.pdf" target="_blank" rel="noopener" className="text-blue-500 underline">
            Online Application Postponed (09-04-2024) - Notice
          </a>
        </li>
        <li>
          <a href="https://megpolice.gov.in/" target="_blank" rel="noopener" className="text-blue-500 underline">
            Last Date Extended Notice
          </a>
        </li>
        <li>
          <a href="https://megpolice.gov.in/advertisement-various-posts-meghalaya-police" target="_blank" rel="noopener" className="text-blue-500 underline">
            Notification
          </a>
        </li>
        <li>
          <a href="http://megpolice.gov.in/" target="_blank" rel="noopener" className="text-blue-500 underline">
            Official Website
          </a>
        </li>
      </ul>

      <p className="text-center mt-4">
        <span className="font-bold">Keywords:</span> Meghalaya Police, Recruitment, Vacancy, UB Sub Inspector, Constable, Fireman, Driver, MPRO Operator, Signal, Battalion Constable,  Apply Online, Important Dates, Eligibility Criteria, Application Fee
      </p>
    </div>
  );
}