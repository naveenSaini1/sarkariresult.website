export default function APSRTCApprenticeRecruitment() {
  // This component displays recruitment information for the APSRTC Apprentice 2024 vacancy.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">
        APSRTC Apprentice Recruitment 2024
      </h1>
      <p className="text-gray-600 text-center mb-4">
        The Andhra Pradesh State Road Transport Corporation (APSRTC) has announced
        vacancies for Apprentice positions. This is a great opportunity for
        individuals with ITI (NCVT) qualifications to join the APSRTC.
      </p>
      <div className="bg-gray-100 rounded-md p-4 mb-4">
        <h2 className="text-xl font-bold mb-2">Key Highlights</h2>
        <ul className="list-disc pl-6">
          <li>
            <span className="font-bold">Post Name:</span> APSRTC Apprentice
          </li>
          <li>
            <span className="font-bold">Total Vacancies:</span> 295
          </li>
          <li>
            <span className="font-bold">Last Date to Apply:</span> 19-11-2024
          </li>
          <li>
            <span className="font-bold">Application Fee:</span> Rs. 118/- (100 +
            18 GST)
          </li>
          <li>
            <span className="font-bold">Qualification:</span> ITI (NCVT)
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold mb-4">Post Details</h2>
      <p className="text-gray-600 mb-4">
        APSRTC is seeking qualified individuals for Apprentice positions in
        various districts across Andhra Pradesh.
      </p>

      <h2 className="text-2xl font-bold mb-4">Application Fee</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>
          <span className="font-bold">Processing Fee:</span> Rs. 118/- (100 + 18
          GST)
        </li>
        <li>
          <span className="font-bold">Payment Mode:</span> Through Demand Draft
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Important Dates</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>
          <span className="font-bold">Starting Date for Apply Online:</span>
          05-11-2024
        </li>
        <li>
          <span className="font-bold">Last Date for Apply Online:</span>
          19-11-2024
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Qualification</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>
          <span className="font-bold">Candidate Should Possess:</span> ITI
          (NCVT)
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Vacancy Details</h2>
      <table className="table-auto w-full text-center mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2" colSpan={2}>
              <span className="font-bold text-red-500">District Name</span>
            </th>
            <th className="px-4 py-2">
              <span className="font-bold text-red-500">Total</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2" colSpan={2}>
              Kurnool
            </td>
            <td className="px-4 py-2">47</td>
          </tr>
          <tr>
            <td className="px-4 py-2" colSpan={2}>
              Nandyala
            </td>
            <td className="px-4 py-2">45</td>
          </tr>
          <tr>
            <td className="px-4 py-2" colSpan={2}>
              Anantapur
            </td>
            <td className="px-4 py-2">53</td>
          </tr>
          <tr>
            <td className="px-4 py-2" colSpan={2}>
              Sri Sathya Sai
            </td>
            <td className="px-4 py-2">37</td>
          </tr>
          <tr>
            <td className="px-4 py-2" colSpan={2}>
              Kadapa
            </td>
            <td className="px-4 py-2">65</td>
          </tr>
          <tr>
            <td className="px-4 py-2" colSpan={2}>
              Annamayya
            </td>
            <td className="px-4 py-2">48</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mb-4">Important Links</h2>
      <table className="table-auto w-full text-center mb-4">
        <tbody>
          <tr>
            <td className="px-4 py-2" colSpan={2}>
              <span className="font-bold text-green-500">Apply Online</span>
            </td>
            <td className="px-4 py-2">
              <a
                href="https://www.apprenticeshipindia.gov.in/"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2" colSpan={2}>
              <span className="font-bold text-green-500">Notification</span>
            </td>
            <td className="px-4 py-2">
              <a
                href="https://img.freejobalert.com/uploads/2024/11/Notification-APSRTC-Apprentices-Posts.pdf"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
              >
                Click Here
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2" colSpan={2}>
              <span className="font-bold text-green-500">Official Website</span>
            </td>
            <td className="px-4 py-2">
              <a
                href="https://www.apsrtc.ap.gov.in/"
                target="_blank"
                rel="nofollow"
                className="text-blue-500 underline"
              >
                Click Here
              </a>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mb-4">FAQs</h2>
      <div className="mb-4">
        <p className="font-bold">
          1. What is the last date to apply for APSRTC Apprentice 2024?
        </p>
        <p className="text-gray-600">
          Ans: Last date for Apply Online is 19-11-2024.
        </p>
      </div>
      <div className="mb-4">
        <p className="font-bold">
          2. What is the Eligibility to apply for APSRTC Apprentice 2024?
        </p>
        <p className="text-gray-600">Ans: ITI (NCVT).</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">
          3. How many vacancies are released for APSRTC Apprentice 2024?
        </p>
        <p className="text-gray-600">Ans: Total 295 Vacancies.</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">
          4. How much of fee pay for APSRTC Apprentice 2024?
        </p>
        <p className="text-gray-600">
          Ans: Processing Fee Rs. 118/- (100 + 18 GST)
        </p>
      </div>
      <div className="mb-4">
        <p className="font-bold">
          5. How to pay fee to apply for APSRTC Apprentice 2024?
        </p>
        <p className="text-gray-600">Ans: Through Demand Draft</p>
      </div>

      {/* Keywords for SEO */}
      <div className="text-sm text-gray-500 mt-4">
        <p>
          Keywords: APSRTC, Apprentice, Recruitment, 2024, Andhra Pradesh,
          Vacancies, ITI, NCVT, Application, Fee, Important Dates,
          Qualifications, Apply Online, Notification, Official Website.
        </p>
      </div>
    </div>
  );
}