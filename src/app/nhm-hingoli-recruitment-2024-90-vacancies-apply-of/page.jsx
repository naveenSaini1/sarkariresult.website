export default function RecruitmentInfo() {
  // Displays recruitment information for NHM, Hingoli Various Vacancy 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">NHM, Hingoli Various Vacancy 2024</h1>
      <p className="mb-4">
        <span className="text-green-500 font-bold">Name of the Post:</span> NHM, Hingoli Various Vacancy 2024 Offline Form
      </p>
      <p className="text-justify mb-4">
        <span className="text-green-500 font-bold">Post Date:</span> <span className="text-black-500">14-08-2024</span>
      </p>
      <p className="text-justify mb-4">
        <span className="text-green-500 font-bold">Total Vacancy:</span> <span className="text-black-500">90</span>
      </p>
      <p className="mb-4">
        <span className="text-red-500 font-bold">Brief Information: </span>
        <span className="text-red-500">National Health Mission (NHM),</span>
        Hingoli has published a Notification for the recruitment of Staff Nurse, Medical Officer, Pediatrician, Dermatologist &amp; Other Vacancy. Those Candidates who are interested in the vacancy details &amp; completed all eligibility criteria can read the Notification &amp; Apply.
      </p>
      <div className="mb-4">
        {/* No need for the div with id "article-hrec-1" as it's related to the script */}
      </div>
      <table className="w-full border-collapse border border-gray-400 mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th colSpan={3} className="text-center font-bold p-2">
              <p className="text-red-500 font-bold">National Health Mission (NHM), Hingoli</p>
              <p className="text-pink-500 font-bold">Advt.No. 02/2024</p>
              <p className="text-green-500 font-bold">Various Vacancy 2024</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td colSpan={3}>
              <p className="text-red-500 font-bold">Application Fee</p>
              <ul>
                <li>
                  <span className="text-red-500">Fee for Open Category </span>
                  <strong className="text-black-500">: Rs. 150/-</strong>
                </li>
                <li>Fee for Reserved Category : <strong className="text-black-500">Rs. 100/-</strong></li>
                <li>Payment Mode : <strong className="text-black-500">Through Offline</strong></li>
              </ul>
            </td>
          </tr>
          <tr className="text-center">
            <td colSpan={3}>
              <p className="text-red-500 font-bold">Important Dates</p>
              <ul>
                <li>Starting Date for receipt of Application: <strong className="text-black-500">12-08-2024</strong></li>
                <li>Last Date for receipt of Application: <strong className="text-black-500">27-08-2024</strong></li>
              </ul>
            </td>
          </tr>
          <tr className="text-center">
            <td colSpan={3}>
              <p className="text-red-500 font-bold">Age Limit</p>
              <ul>
                <li>
                  <span className="text-red-500">Maximum Age limit for Paramedical and Medical Officers, Specialists : </span>
                  <strong className="text-black-500">70 Years</strong>
                </li>
                <li>
                  <span className="text-black-500">For more details refer the notification</span>
                </li>
              </ul>
            </td>
          </tr>
          <tr className="text-center">
            <td colSpan={3}>
              <p className="text-red-500 font-bold">Vacancy Details</p>
            </td>
          </tr>
          <tr className="bg-gray-100 text-center">
            <th className="p-2 font-bold">Post Name</th>
            <th className="p-2 font-bold">Total</th>
            <th className="p-2 font-bold">Qualification</th>
          </tr>
          <tr className="text-center">
            <td className="p-2">Physician (Medicine) Polyclinic UPLIC Basmath</td>
            <td className="p-2">01</td>
            <td className="p-2">MD Medicine,DNB</td>
          </tr>
          <tr className="text-center">
            <td className="p-2">Obstetrics &amp; Gynecologist (Polyclinic UPHС Basmath)</td>
            <td className="p-2">01</td>
            <td className="p-2">MD, MS (Gynecology)/ DGO/ DNB</td>
          </tr>
          <tr className="text-center">
            <td className="p-2">Pediatrician (Polyclinic UPHC Basmath)</td>
            <td className="p-2">01</td>
            <td className="p-2">MD (Pediatrician)/DCH/DNB</td>
          </tr>
          <tr className="text-center">
            <td className="p-2">Ophthalmologist (Polyclinic UPHC Basmath)</td>
            <td className="p-2">01</td>
            <td className="p-2">MD (Ophthalmology)/DOMS</td>
          </tr>
          <tr className="text-center">
            <td className="p-2">Dermatologist (Polyclinic UPHC Basmath)</td>
            <td className="p-2">01</td>
            <td className="p-2">MD (Skin)/DVD/DNB</td>
          </tr>
          <tr className="text-center">
            <td className="p-2">Psychiatrist (Polyclinic UPHC Basmath)</td>
            <td className="p-2">01</td>
            <td className="p-2">MS (Psychiatry)/ DPM/ DNB</td>
          </tr>
          <tr className="text-center">
            <td className="p-2">ENT Specialist (Polyclinic UPHC Basmath)</td>
            <td className="p-2">01</td>
            <td className="p-2">MS (ENT)/ DORL/ DNB</td>
          </tr>
          <tr className="text-center">
            <td className="p-2">Radiologist</td>
            <td className="p-2">01</td>
            <td className="p-2">MD (Radiologist)</td>
          </tr>
          <tr className="text-center">
            <td className="p-2">Ophthalmic Surgeon</td>
            <td className="p-2">01</td>
            <td className="p-2">MS (Ophthalm)/DOMS</td>
          </tr>
          <tr className="text-center">
            <td className="p-2">Medical Officer (15th FC -UHWC)</td>
            <td className="p-2">11</td>
            <td className="p-2">MBBS,BAMS</td>
          </tr>
          <tr className="text-center">
            <td className="p-2">Staff Nurse (15th FC-UHWC)/</td>
            <td className="p-2">27</td>
            <td className="p-2">GNM, B.Sc Nursing</td>
          </tr>
          <tr className="text-center">
            <td className="p-2">MPW (15th FC-UHWC)</td>
            <td className="p-2">08</td>
            <td className="p-2">12th Pass</td>
          </tr>
          <tr className="text-center">
            <td colSpan={3}>
              <p className="text-blue-500">For More Vacancy Details refer the Notification</p>
            </td>
          </tr>
          <tr className="text-center">
            <td colSpan={3}>
              <p className="text-blue-500">Interested Candidates Can Read the Full Notification Before Apply</p>
            </td>
          </tr>
          <tr className="text-center">
            <td colSpan={3}>
              <p className="text-red-500 font-bold">Important Links</p>
            </td>
          </tr>
          <tr className="text-center">
            <td className="p-2">
              <span className="text-green-500 font-bold">Notification</span>
            </td>
            <td colSpan={2} className="p-2">
              <a href="https://img.freejobalert.com/uploads/2024/08/Notification-NHM-Hingoli-Staff-Nurse-Medical-Officer-Other-Posts.pdf" className="text-blue-500" target="_blank" rel="nofollow">
                Click Here
              </a>
            </td>
          </tr>
          <tr className="text-center">
            <td className="p-2">
              <span className="text-green-500 font-bold">Official Website</span>
            </td>
            <td colSpan={2} className="p-2">
              <a href="https://hingoli.nic.in/" className="text-blue-500" target="_blank" rel="nofollow">
                Click Here
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}