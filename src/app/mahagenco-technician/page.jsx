export default function MAHAGENCORecruitment() {
  // This component displays recruitment information for MAHAGENCO Technician - III vacancy.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">MAHAGENCO Technician – III Recruitment 2024</h1>
      <p className="text-gray-700 mb-4">
        Maharashtra State Power Generation Company Limited (MAHAGENCO) has announced a recruitment drive for
        Technician – III positions. Interested and eligible candidates can apply online for the
        opportunity.
      </p>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Highlights</h2>
      <ul className="list-disc text-gray-700 mb-4">
        <li><strong>Post Name:</strong> Technician – III</li>
        <li><strong>Total Vacancy:</strong> 800</li>
        <li><strong>Post Date:</strong> 14-10-2024</li>
        <li><strong>Last Date to Apply Online:</strong> 26-10-2024</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Vacancy Details</h2>
      <table className="table-auto w-full text-gray-700 mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left font-bold">Post Name</th>
            <th className="px-4 py-2 text-left font-bold">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border">Technician – III</td>
            <td className="px-4 py-2 border">800</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">Important Links</h2>
      <ul className="list-disc text-gray-700 mb-4">
        <li>
          <strong>Apply Online:</strong> Available on 26-10-2024
        </li>
        <li>
          <strong>Short Notice:</strong>{' '}
          <a
            className="text-blue-500 hover:underline"
            href="https://img.freejobalert.com/uploads/2024/10/Short-Notice-Maha-Genco-Technician-3-Posts.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click Here
          </a>
        </li>
        <li>
          <strong>Official Website:</strong>{' '}
          <a
            className="text-blue-500 hover:underline"
            href="https://www.mahagenco.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click Here
          </a>
        </li>
      </ul>

      <p className="text-gray-700 mb-4">
        Please refer to the official website for complete details on eligibility criteria, application
        process, and other important information.
      </p>
      <p className="text-gray-700 mb-4">
        This is an exciting opportunity to join MAHAGENCO and contribute to the
        development of the power sector in Maharashtra.
      </p>
      <p className="text-gray-700">
        <strong>Keywords:</strong> MAHAGENCO, Technician, Recruitment, Maharashtra, Power Generation,
        Online Application, Vacancy
      </p>
    </div>
  );
}