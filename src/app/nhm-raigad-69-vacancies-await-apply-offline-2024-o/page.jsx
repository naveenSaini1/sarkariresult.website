export default function RecruitmentInfo() {
  // Displays recruitment information for NHM Various Vacancy Offline Form 2024
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">NHM Various Vacancy Offline Form 2024</h1>

      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="md:w-1/2">
          <p className="font-bold mb-2">
            <span className="text-green-500">Name of the Post:</span> NHM Various Vacancy Offline Form 2024
          </p>
          <p className="mb-2">
            <span className="text-green-500">Post Date:&nbsp;</span> 02-09-2024
          </p>
          <p className="mb-2">
            <span className="text-green-500">Total Vacancy:&nbsp;</span>
            <strong>69</strong>
          </p>
          <p className="mb-4">
            <span className="text-red-500">Brief Information:</span>{' '}
            National Health Mission (NHM) Raigad Bharti has announced notification for the recruitment of
            Anaesthetist, Medical Officer &amp; Other Vacancy on Contract basis. Those Candidates who are
            interested in the vacancy details &amp; completed all eligibility criteria can read the
            Notification &amp; Apply.
          </p>
        </div>
        <div className="md:w-1/2">
          <table className="table-auto w-full mt-4 border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-center px-4 py-2">Important Dates</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center px-4 py-2">
                  Date of Walk in Interview: <strong>15-09-2024 &amp; 30-09-2024</strong>
                </td>
              </tr>
            </tbody>
          </table>

          <table className="table-auto w-full mt-4 border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-center px-4 py-2">Age Limit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center px-4 py-2">
                  Maximum Age limit: <strong>70 Years</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-center mt-8 mb-4">Vacancy Details</h2>

      <table className="table-auto w-full mt-4 border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-center px-4 py-2">Post Name</th>
            <th className="text-center px-4 py-2">Total</th>
            <th className="text-center px-4 py-2">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center px-4 py-2">Anaesthetist</td>
            <td className="text-center px-4 py-2">08</td>
            <td className="text-center px-4 py-2">MD Anesthesia/ DA/DNB</td>
          </tr>
          <tr>
            <td className="text-center px-4 py-2">Gynaecologist</td>
            <td className="text-center px-4 py-2">05</td>
            <td className="text-center px-4 py-2">MD./MS Gyn/ DGO /DNB</td>
          </tr>
          <tr>
            <td className="text-center px-4 py-2">Paediatrician</td>
            <td className="text-center px-4 py-2">05</td>
            <td className="text-center px-4 py-2">M.D. Paed/ DCH/DNB</td>
          </tr>
          <tr>
            <td className="text-center px-4 py-2">Orthopaedics surgeon</td>
            <td className="text-center px-4 py-2">03</td>
            <td className="text-center px-4 py-2">MS Ortho/ D Ortho</td>
          </tr>
          <tr>
            <td className="text-center px-4 py-2">Surgeon</td>
            <td className="text-center px-4 py-2">01</td>
            <td className="text-center px-4 py-2">M.S.(Gen.)</td>
          </tr>
          <tr>
            <td className="text-center px-4 py-2">Physician</td>
            <td className="text-center px-4 py-2">04</td>
            <td className="text-center px-4 py-2">M.D. Medicine/ DNB</td>
          </tr>
          <tr>
            <td className="text-center px-4 py-2">Consultant Medicine</td>
            <td className="text-center px-4 py-2">03</td>
            <td className="text-center px-4 py-2">M.D. Medicine/ DNB</td>
          </tr>
          <tr>
            <td className="text-center px-4 py-2">Radiologist</td>
            <td className="text-center px-4 py-2">02</td>
            <td className="text-center px-4 py-2">M.D.(Rad.)/ DMRD</td>
          </tr>
          <tr>
            <td className="text-center px-4 py-2">Ophthalmologist</td>
            <td className="text-center px-4 py-2">01</td>
            <td className="text-center px-4 py-2">MS Ophthalmology/DOMS</td>
          </tr>
          <tr>
            <td className="text-center px-4 py-2">Medical Officer</td>
            <td className="text-center px-4 py-2">37</td>
            <td className="text-center px-4 py-2">MBBS</td>
          </tr>
        </tbody>
      </table>

      <p className="text-center mt-4 text-blue-500">
        <strong>Interested Candidates Can Read the Full Notification Before Apply</strong>
      </p>

      <h2 className="text-2xl font-bold text-center mt-8 mb-4">Important Links</h2>

      <table className="table-auto w-full mt-4 border border-gray-300">
        <tbody>
          <tr>
            <td className="text-center px-4 py-2">
              <span className="text-green-500">Notification </span>
            </td>
            <td className="text-center px-4 py-2" colSpan={2}>
              <a
                href="https://zpraigad.in/Npdf/84333Advertise..pdf"
                target="_blank"
                rel="nofollow"
                className="text-blue-500"
              >
                <strong>Click Here</strong>
              </a>
            </td>
          </tr>
          <tr>
            <td className="text-center px-4 py-2">
              <span className="text-green-500">Official Website</span>
            </td>
            <td className="text-center px-4 py-2" colSpan={2}>
              <a
                href="https://zpraigad.in/"
                target="_blank"
                rel="nofollow"
                className="text-blue-500"
              >
                <strong>Click Here</strong>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}