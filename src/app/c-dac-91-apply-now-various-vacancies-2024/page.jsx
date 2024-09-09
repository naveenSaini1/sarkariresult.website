export default function RecruitmentInfo() {
  // This component displays recruitment information for C-DAC Various Vacancy Online Form 2024.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">C-DAC Various Vacancy Online Form 2024</h1>
      <div className="mb-4">
        <p className="text-green-500 font-bold mb-1">Name of the Post:</p>
        <p>C-DAC Various Vacancy Online Form 2024</p>
      </div>
      <div className="mb-4">
        <p className="text-green-500 font-bold mb-1">Post Date:</p>
        <p>26-07-2024</p>
      </div>
      <div className="mb-4">
        <p className="text-green-500 font-bold mb-1">Total Vacancy:</p>
        <p>91</p>
      </div>
      <div className="mb-4">
        <p className="text-red-500 font-bold mb-1">Brief Information:</p>
        <p>Centre for Development of Advanced Computing (C-DAC) has given a notification for the recruitment of Project Assistant, Project Associate, Project Engineer, Project Technician & Other Vacancy on Contractual Basis. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply Online.</p>
      </div>
      <h2 className="text-2xl font-bold mb-4">Important Details</h2>
      <div className="mb-4">
        <p className="text-red-500 font-bold mb-1">Application Fee</p>
        <ul className="list-disc ml-6">
          <li>Nil</li>
        </ul>
      </div>
      <div className="mb-4">
        <p className="text-red-500 font-bold mb-1">Important Dates</p>
        <ul className="list-disc ml-6">
          <li>Starting Date for Apply Online: 20-07-2024, 11:00 hrs</li>
          <li>Last Date for Apply Online: 16-08-2024, 18:00 hrs</li>
          <li>Date for Interview: Will be Communicated by email only</li>
        </ul>
      </div>
      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>
      <table className="table-auto w-full border border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-center text-gray-700 font-bold">Post Name</th>
            <th className="px-4 py-2 text-center text-gray-700 font-bold">Total</th>
            <th className="px-4 py-2 text-center text-gray-700 font-bold">Age limit (as on 16-08-2024)</th>
            <th className="px-4 py-2 text-center text-gray-700 font-bold">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-200">
            <td className="px-4 py-2 text-center">Project Assistant</td>
            <td className="px-4 py-2 text-center">03</td>
            <td className="px-4 py-2 text-center">35 Years</td>
            <td className="px-4 py-2 text-center">Diploma (Engg), Degree (Comouter Sci/IT/Computer Applications/Electronics or relevant domain)</td>
          </tr>
          <tr className="hover:bg-gray-200">
            <td className="px-4 py-2 text-center">Project Associate (PA)</td>
            <td className="px-4 py-2 text-center">02</td>
            <td className="px-4 py-2 text-center">30 Years</td>
            <td className="px-4 py-2 text-center">BE/Btech or Equivalent</td>
          </tr>
          <tr className="hover:bg-gray-200">
            <td className="px-4 py-2 text-center">Project Engineer-Experienced-01</td>
            <td className="px-4 py-2 text-center">15</td>
            <td className="px-4 py-2 text-center" rowSpan={2}>35 Years</td>
            <td className="px-4 py-2 text-center" rowSpan={2}>BE/Btech, ME/Mtech, PG (Science/Computer Application)</td>
          </tr>
          <tr className="hover:bg-gray-200">
            <td className="px-4 py-2 text-center">Project Engineer-Experienced-02</td>
            <td className="px-4 py-2 text-center">02</td>
          </tr>
          <tr className="hover:bg-gray-200">
            <td className="px-4 py-2 text-center">Project Engineer-Fresher</td>
            <td className="px-4 py-2 text-center">61</td>
            <td className="px-4 py-2 text-center">35 Years</td>
            <td className="px-4 py-2 text-center">BE/Btech, ME/Mtech, PG (Science/Computer Application), Ph. D (Relevant Discipline)</td>
          </tr>
          <tr className="hover:bg-gray-200">
            <td className="px-4 py-2 text-center">Project Technician</td>
            <td className="px-4 py-2 text-center">01</td>
            <td className="px-4 py-2 text-center">30 Years</td>
            <td className="px-4 py-2 text-center">ITI (Relevant Trade), Diploma (Engg), Degree (Computer Sci/IT/Computer Applications/Electronics or relevant domain)</td>
          </tr>
          <tr className="hover:bg-gray-200">
            <td className="px-4 py-2 text-center">Senior Project Engineer / Module Lead / Project Leader</td>
            <td className="px-4 py-2 text-center">07</td>
            <td className="px-4 py-2 text-center">40 Years</td>
            <td className="px-4 py-2 text-center">BE/Btech, ME/Mtech, PG (Science/Computer Application), Ph. D (Relevant Discipline)</td>
          </tr>
        </tbody>
      </table>
      <p className="text-blue-500 mb-4">Interested Candidates Can Read the Full Notification Before Apply Online</p>
      <h2 className="text-2xl font-bold mb-4">Important Links</h2>
      <table className="table-auto w-full border border-gray-300 mb-4">
        <tbody>
          <tr className="hover:bg-gray-200">
            <td className="px-4 py-2 text-center text-green-500 font-bold">Apply Online</td>
            <td className="px-4 py-2 text-center" colSpan={3}><a href="https://careers.cdac.in/advt-details/TR-1772024-XW4T5" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a></td>
          </tr>
          <tr className="hover:bg-gray-200">
            <td className="px-4 py-2 text-center text-green-500 font-bold">Notification</td>
            <td className="px-4 py-2 text-center" colSpan={3}><a href="https://careers.cdac.in/advt-details/TR-1772024-XW4T5" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a></td>
          </tr>
          <tr className="hover:bg-gray-200">
            <td className="px-4 py-2 text-center text-green-500 font-bold">Official Website</td>
            <td className="px-4 py-2 text-center" colSpan={3}><a href="https://www.cdac.in/" target="_blank" rel="nofollow" className="text-blue-500">Click Here</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}