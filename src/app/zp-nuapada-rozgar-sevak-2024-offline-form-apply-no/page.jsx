export default function RecruitmentInformation() {
  // This component displays recruitment information for ZP, Nuapada Gram Rozgar Sevak Offline Form 2024.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">
        ZP, Nuapada Gram Rozgar Sevak Offline Form 2024
      </h1>
      <div className="flex flex-col gap-4 mb-6">
        <p className="text-lg font-medium">
          <span className="text-green-500">Name of the Post:</span> ZP, Nuapada
          Gram Rozgar Sevak Offline Form 2024
        </p>
        <p className="text-lg font-medium">
          <span className="text-green-500">Post Date:</span>
          <span className="text-gray-700">23-08-2024</span>
        </p>
        <p className="text-lg font-medium">
          <span className="text-green-500">Total Vacancy:</span> 63
        </p>
        <p className="text-lg font-medium">
          <span className="text-red-500">Brief Information:</span> Zilla
          Parishad, Nuapada, Odisha has given a notification for the recruitment
          of Gram Rozgar Sevak (GRS) Vacancy on Contractual Basis. Those
          Candidates who are interested in the vacancy details & completed all
          eligibility criteria can read the Notification & Apply.
        </p>
      </div>

      <table className="w-full border-collapse border border-gray-300 text-center mb-6">
        <thead>
          <tr className="bg-gray-100">
            <th
              colSpan="2"
              className="py-2 font-medium text-left pl-4 pr-4"
            >
              Zilla Parishad, Nuapada
            </th>
          </tr>
          <tr className="bg-gray-100">
            <th colSpan="2" className="py-2 font-medium text-left pl-4 pr-4">
              Gram Rozgar Sevak Vacancy 2024
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              colSpan="2"
              className="py-2 font-medium text-left pl-4 pr-4 text-red-500"
            >
              Important Dates
            </td>
          </tr>
          <tr>
            <td className="py-2 pl-4 pr-4">
              Starting Date for Receipt of Application
            </td>
            <td className="py-2 pl-4 pr-4">22-08-2024</td>
          </tr>
          <tr>
            <td className="py-2 pl-4 pr-4">
              Last Date for Receipt of Application
            </td>
            <td className="py-2 pl-4 pr-4">23-09-2024</td>
          </tr>
          <tr>
            <td
              colSpan="2"
              className="py-2 font-medium text-left pl-4 pr-4 text-red-500"
            >
              Age limit (as on 01-08-2024)
            </td>
          </tr>
          <tr>
            <td className="py-2 pl-4 pr-4">Minimum Age limit</td>
            <td className="py-2 pl-4 pr-4">Must have 18 Years</td>
          </tr>
          <tr>
            <td className="py-2 pl-4 pr-4">Maximum Age limit</td>
            <td className="py-2 pl-4 pr-4">Must not be above 40 Years</td>
          </tr>
          <tr>
            <td className="py-2 pl-4 pr-4" colSpan="2">
              Age Relaxation is Applicable as per Rules.
            </td>
          </tr>
          <tr>
            <td
              colSpan="2"
              className="py-2 font-medium text-left pl-4 pr-4 text-red-500"
            >
              Qualification
            </td>
          </tr>
          <tr>
            <td className="py-2 pl-4 pr-4" colSpan="2">
              Candidates Should Posses 10+2 pass or its equivalent.
            </td>
          </tr>
          <tr>
            <td className="py-2 pl-4 pr-4" colSpan="2">
              Candidates shall be able to speak, read and write Odia fluently.
            </td>
          </tr>
          <tr>
            <td className="py-2 pl-4 pr-4" colSpan="2">
              For More Details Refer Notification.
            </td>
          </tr>
          <tr>
            <td
              colSpan="2"
              className="py-2 font-medium text-left pl-4 pr-4 text-red-500"
            >
              Vacancy Details
            </td>
          </tr>
          <tr>
            <td className="py-2 pl-4 pr-4 text-blue-500">Trade Name</td>
            <td className="py-2 pl-4 pr-4 text-blue-500">Total</td>
          </tr>
          <tr>
            <td className="py-2 pl-4 pr-4">Gram Rozgar Sevak (GRS)</td>
            <td className="py-2 pl-4 pr-4">63</td>
          </tr>
          <tr>
            <td
              colSpan="2"
              className="py-2 font-medium text-left pl-4 pr-4 text-blue-500"
            >
              Interested Candidates Can Read the Full Notification Before Apply
            </td>
          </tr>
          <tr>
            <td
              colSpan="2"
              className="py-2 font-medium text-left pl-4 pr-4 text-red-500"
            >
              Important Links
            </td>
          </tr>
          <tr>
            <td className="py-2 pl-4 pr-4 text-green-500">Notification</td>
            <td className="py-2 pl-4 pr-4">
              <a
                href="https://img.freejobalert.com/uploads/2024/08/Notfication-ZP-Nuapada-Gram-Rozgar-Sevak-Posts.pdf"
                className="text-blue-500"
                target="_blank"
                rel="noopener"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="py-2 pl-4 pr-4 text-green-500">Official Website</td>
            <td className="py-2 pl-4 pr-4">
              <a
                href="https://nuapada.odisha.gov.in/"
                className="text-blue-500"
                target="_blank"
                rel="noopener"
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