export default function GTBHRecruitment() {
  // This component displays recruitment information for the GTBH Senior Resident vacancy.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">GTBH Senior Resident Online Form 2024</h1>

      <div className="mb-4">
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Name of the Post:</span> GTBH Senior Resident Online Form 2024
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Post Date: </span>02-08-2024
        </p>
        <p className="text-lg font-medium mb-2">
          <span className="text-green-500">Total Vacancy: </span>
          <span className="text-black">98</span>
        </p>
      </div>

      <p className="mb-4">
        <span className="text-red-500 font-medium">Brief Information:</span> Guru Teg Bahadur Hospital (GTBH) has given a
        Notification for the recruitment of Senior Resident vacancy on Regular Basis. Those Candidates who are interested in
        the vacancy details & completed all eligibility criteria can read the Notification & Apply Online.
      </p>

      <table className="table-auto w-full border-collapse border border-gray-300 text-center">
        <tbody>
          <tr className="border-b border-gray-300">
            <td colSpan={2} className="py-2">
              <p className="text-red-500 font-bold">Guru Teg Bahadur Hospital (GTBH)</p>
              <p className="text-green-500 font-bold">&nbsp;Senior Resident Vacancy 2024</p>
              <p className="font-medium">
                <a href="https://www.freejobalert.com" target="_blank" rel="noopener" className="text-blue-500">
                  
                </a>
              </p>
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td colSpan={2} className="py-2">
              <p className="text-red-500 font-bold">Application Fee</p>
              <ul className="list-disc ml-8">
                <li>For Others: <strong>Rs. 500/-</strong></li>
                <li>For SC/ST/PH/EWS Candidates: <strong>Nil</strong></li>
                <li>Payment Mode: <strong>Through Demand Draft</strong></li>
              </ul>
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td colSpan={2} className="py-2">
              <p className="text-red-500 font-bold">Important Dates</p>
              <ul className="list-disc ml-8">
                <li>Starting Date for Apply Online & Payment of Fee: <strong>31-07-2024 at 10:00 am</strong></li>
                <li>Last Date for Apply Online & Payment of Fee: <strong>08-08-2024 at 10:00 am</strong></li>
                <li>Date & Registration time of Interview: <strong>09, 10, 12, 13-08-2024, 09:30 am to 10:00 am</strong></li>
              </ul>
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td colSpan={2} className="py-2">
              <p className="text-red-500 font-bold">Age Limit</p>
              <ul className="list-disc ml-8">
                <li>Upper Age Limit: <strong>45 Years (as on interview date)</strong></li>
                <li>Age relaxation is applicable as per rules.</li>
              </ul>
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td colSpan={2} className="py-2">
              <p className="text-red-500 font-bold">Qualification</p>
              <ul className="list-disc ml-8">
                <li>
                  Candidates Should Possess PG Diploma/ Degree/ DNB. In case such candidates are not available, MBBS with 3
                  years experience in relevant field may be considered for the post on ad-hoc basis.
                </li>
              </ul>
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td colSpan={2} className="py-2">
              <p className="text-red-500 font-bold">Vacancy Details</p>
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="py-2">
              <span className="text-pink-500 font-bold">Post Name</span>
            </td>
            <td className="py-2">
              <span className="text-pink-500 font-bold">Total</span>
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="py-2">Senior Resident</td>
            <td className="py-2">98</td>
          </tr>
          <tr className="border-b border-gray-300">
            <td colSpan={2} className="py-2">
              <span className="text-blue-500 font-bold">Interested Candidates Can Read the Full Notification Before Apply Online</span>
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td colSpan={2} className="py-2">
              <span className="text-red-500 font-bold">Important Links</span>
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="py-2">
              <span className="text-green-500 font-bold">Apply Online/ Google Form Link</span>
            </td>
            <td className="py-2">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf0JNpIAGQw1sQqmxeS6LNdDNlzrcfHa3goEzX3YAgC_DioRg/viewform"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 font-bold"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="py-2">
              <span className="text-green-500 font-bold">Notification</span>
            </td>
            <td className="py-2">
              <a
                href="https://img.freejobalert.com/uploads/2024/08/Notification-GTBH-Senior-Resident-Posts.pdf"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 font-bold"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="py-2">
              <span className="text-green-500 font-bold">Official Website</span>
            </td>
            <td className="py-2">
              <a href="https://gtbh.delhi.gov.in/" target="_blank" rel="nofollow" className="text-blue-500 font-bold">
                Click here
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}