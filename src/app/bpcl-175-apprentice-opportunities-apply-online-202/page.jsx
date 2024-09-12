export default function BPCLApprenticeRecruitment() {
  // This component displays recruitment information for BPCL Apprentice 2024.
  // It includes details about the post, important dates, age limit, qualifications, vacancy details, and links to apply online and view the notification.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">BPCL Apprentice 2024 Online Form</h1>
      <p className="mb-4">
        <span className="text-green-500 font-bold">Name of the Post:</span>{' '}
        <strong className="font-bold">BPCL Apprentice 2024 Online Form</strong>
      </p>
      <p className="mb-4">
        <span className="text-green-500 font-bold">Post Date:</span>{' '}
        <span className="text-gray-700">12-09-2024</span>
      </p>
      <p className="mb-4">
        <span className="text-green-500 font-bold">Total Vacancy: </span>
        175
      </p>
      <p className="mb-4">
        <span className="text-red-500 font-bold">Brief Information:</span>{' '}
        Bharat Petroleum Corporation Limited (BPCL) has published a notification for the recruitment of Graduate & Technician (Diploma)/Non Engineering Graduate Apprentice Vacancy. Those Candidates who are interested in the vacancy details & completed all eligibility criteria can read the Notification & Apply Online.
      </p>
      <h2 className="text-2xl font-bold mb-4">Important Details</h2>
      <table className="table-auto w-full mb-4">
        <tbody>
          <tr className="border-b border-gray-200">
            <td
              colSpan={2}
              className="text-center py-2 font-bold text-red-500"
            >
              Bharat Petroleum Corporation Limited (BPCL)
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td
              colSpan={2}
              className="text-center py-2 font-bold text-green-500"
            >
              Apprentice Vacancy 2024
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td colSpan={2} className="text-center py-2">
              <a
                href="https://www.freejobalert.com"
                target="_blank"
                rel="noopener"
                className="text-blue-500"
              >
                
              </a>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td colSpan={2} className="text-center py-2">
              <span className="text-pink-500 font-bold">
                Download Mobile App
              </span>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td colSpan={2} className="text-center py-2 font-bold text-red-500">
              Important Dates
            </td>
          </tr>
          <tr>
            <td className="py-2" className={{ textAlign: 'left' }}>
              <span className={{ lineHeight: '19px' }}>
                Starting Date to Apply Online: <strong className="font-bold">14-08-2024</strong>
              </span>
            </td>
          </tr>
          <tr>
            <td className="py-2" className={{ textAlign: 'left' }}>
              <span className={{ lineHeight: '19px' }}>
                Last date to Apply Online: <strong className="font-bold">30-09-2024</strong>
              </span>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td colSpan={2} className="text-center py-2 font-bold text-red-500">
              Age Limit (14-08-2024)
            </td>
          </tr>
          <tr>
            <td className="py-2" className={{ textAlign: 'left' }}>
              <span className={{ lineHeight: '19px' }}>
                Minimum Age: <strong className="font-bold">18 Years</strong>
              </span>
            </td>
          </tr>
          <tr>
            <td className="py-2" className={{ textAlign: 'left' }}>
              <span className={{ lineHeight: '19px' }}>
                Maximum Age: <strong className="font-bold">27 Years</strong>
              </span>
            </td>
          </tr>
          <tr>
            <td className="py-2" className={{ textAlign: 'left' }}>
              <span className={{ lineHeight: '19px' }}>
                Candidates should born between 14-08-1997 to 14-08-2006
              </span>
            </td>
          </tr>
          <tr>
            <td className="py-2" className={{ textAlign: 'left' }}>
              <span className={{ lineHeight: '19px' }}>
                Age relaxation is applicable as per rules.
              </span>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td colSpan={2} className="text-center py-2 font-bold text-red-500">
              Qualification
            </td>
          </tr>
          <tr>
            <td className="py-2" className={{ textAlign: 'left' }}>
              For Graduate Apprentice: Candidate should possess Degree (Relevant eng)
            </td>
          </tr>
          <tr>
            <td className="py-2" className={{ textAlign: 'left' }}>
              For Technician (Diploma)/Non Engineering Graduate Apprentice: Candidate should possess Diploma (Relevant eng)
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td colSpan={2} className="text-center py-2 font-bold text-red-500">
              Vacancy Details
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="text-center py-2 font-bold text-pink-500">
              Post Name
            </td>
            <td className="text-center py-2 font-bold text-pink-500">
              Total
            </td>
          </tr>
          <tr>
            <td className="text-center py-2">Graduate Apprentice</td>
            <td className="text-center py-2">96</td>
          </tr>
          <tr>
            <td className="text-center py-2">
              Technician (Diploma)/Non Engineering Graduate Apprentice
            </td>
            <td className="text-center py-2">79</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td colSpan={2} className="text-center py-2">
              <span className="text-blue-500 font-bold">
                Interested Candidates Can Read the Full Notification Before Apply Online
              </span>
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td colSpan={2} className="text-center py-2 font-bold text-red-500">
              Important Links
            </td>
          </tr>
          <tr>
            <td className="text-center py-2">
              <span className="text-green-500 font-bold">
                Apply Online
              </span>
            </td>
            <td className="text-center py-2">
              <a
                href="https://nats.education.gov.in/"
                target="_blank"
                rel="nofollow"
                className="text-blue-500"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="text-center py-2">
              <span className="text-green-500 font-bold">Notification </span>
            </td>
            <td className="text-center py-2">
              <a
                href="https://img.freejobalert.com/uploads/2024/09/Notification-BPCL-Apprentice-Posts.pdf"
                target="_blank"
                rel="nofollow"
                className="text-blue-500"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="text-center py-2">
              <span className="text-green-500 font-bold">
                Official Website
              </span>
            </td>
            <td className="text-center py-2">
              <a
                title="BPCL"
                href="https://www.bharatpetroleum.com/"
                target="_blank"
                rel="nofollow"
                className="text-blue-500"
              >
                Click Here
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}