export default function AirForceAgniveerRecruitment() {
  // This component displays recruitment information for the Air Force Agniveer program.
  // It includes a title, post details, brief information, application fee, important dates, and vacancy details.
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Air Force Agniveer Recruitment</h1>
      <p className="text-gray-600 mb-4">
        The Indian Air Force (IAF) has announced the Air Force Agniveer Vayu Intake
        Notification. The online application form is available from 8 July to 4
        August 2024.
      </p>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Air Force Agniveer Overview</h2>
        <table className="table-auto w-full text-left">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="text-gray-700 font-semibold px-4 py-2">
                Recruitment Organization
              </th>
              <th className="text-gray-700 font-semibold px-4 py-2">
                Post Name
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-300">
              <td className="px-4 py-2">Indian Air Force (IAF)</td>
              <td className="px-4 py-2">Air Force Agniveer Vayu</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="px-4 py-2">Advt No.</td>
              <td className="px-4 py-2">Agniveer VAYU Intake 02/2025</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="px-4 py-2">Vacancies</td>
              <td className="px-4 py-2">Around 2500</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="px-4 py-2">Salary/ Pay Scale</td>
              <td className="px-4 py-2">Rs. 30000/- per month + Allowances</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="px-4 py-2">Job Location</td>
              <td className="px-4 py-2">All India</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="px-4 py-2">Category</td>
              <td className="px-4 py-2">Air Force Agniveer Exam Date 2024</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Official Website</td>
              <td className="px-4 py-2">agnipathvayu.cdac.in</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold mb-2">Important Dates</h2>
          <table className="table-auto w-full text-left">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-gray-700 font-semibold px-4 py-2">
                  Event
                </th>
                <th className="text-gray-700 font-semibold px-4 py-2">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-2">Notification Date</td>
                <td className="px-4 py-2">10 June 2024</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-2">Apply Online Start</td>
                <td className="px-4 py-2">8 July 2024</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-2">Last Date to Apply</td>
                <td className="px-4 py-2">4 August 2024</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-2">Edit Form</td>
                <td className="px-4 py-2">13-14 Aug 2024</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Exam Date</td>
                <td className="px-4 py-2">16 November 2024</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold mb-2">Application Fees</h2>
          <ul className="list-disc ml-4">
            <li className="text-gray-600">
              All Candidates: <strong>Rs. 550/-</strong> plus GST
            </li>
            <li className="text-gray-600">
              Mode of Payment: <strong>Online</strong>
            </li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-2">
        Post Details, Eligibility & Qualification
      </h2>
      <p className="text-gray-600 mb-4">
        <strong>Age Limit</strong>: 17.5- 21 Years (Born Between 2 July 2004 and
        3 January 2008, Both Dates inclusive)
      </p>
      <table className="table-auto w-full text-left mb-6">
        <thead>
          <tr className="border-b border-gray-300">
            <th className="text-gray-700 font-semibold px-4 py-2">
              Post Name
            </th>
            <th className="text-gray-700 font-semibold px-4 py-2">
              Vacancy
            </th>
            <th className="text-gray-700 font-semibold px-4 py-2">
              Qualification
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-300">
            <td className="px-4 py-2">Air Force Agniveer</td>
            <td className="px-4 py-2">2500</td>
            <td className="px-4 py-2">
              12th/ Diploma/ 2 Yrs Vocational Course
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mb-2">
        Air Force Agniveer Selection Process
      </h2>
      <p className="text-gray-600 mb-4">
        The Selection Process of Air Force Agniveer Recruitment includes the
        following Stages:
      </p>
      <ul className="list-disc ml-4">
        <li className="text-gray-600">Written Exam</li>
        <li className="text-gray-600">CASB</li>
        <li className="text-gray-600">
          Physical Efficiency Test (PET) and Physical Measurement Test (PMT)
        </li>
        <li className="text-gray-600">Adaptability Test-I, and II</li>
        <li className="text-gray-600">Document Verification</li>
        <li className="text-gray-600">Medical Examination</li>
      </ul>
      <h2 className="text-2xl font-bold mb-2">
        Air Force Agniveer Physical Standards and Physical Fitness Test
      </h2>
      <ul className="list-disc ml-4">
        <li className="text-gray-600">Height: 152.5 cm</li>
        <li className="text-gray-600">
          Chest: Minimum expansion of 5 cm
        </li>
      </ul>
      <p className="text-gray-600 mb-4">
        <strong>Physical Fitness Test (PFT)</strong>: The test (PFT) will
        consist of a 1.6 km run, which will be completed within 06 minutes and 30
        seconds. Candidates shall also have to complete 10 Push-ups, 10 Sit-ups,
        and 20 Squats within the stipulated time to qualify for the Physical
        Fitness Test.
      </p>

      <h2 className="text-2xl font-bold mb-2">
        Air Force Agniveer Exam Pattern and Syllabus
      </h2>
      <p className="text-gray-600 mb-4">
        <strong>Science Subjects</strong>. The total duration of the online test
        shall be 60 minutes and shall comprise English, Physics, and Mathematics
        as per the 10+2 CBSE syllabus.
      </p>
      <p className="text-gray-600 mb-4">
        <strong>Other Than Science Subjects</strong>. The total duration of the
        online test shall be 45 minutes and shall comprise English as per the
        10+2 CBSE syllabus and Reasoning & General Awareness (RAGA).
      </p>
      <p className="text-gray-600 mb-4">
        <strong>Science Subjects & Other Than Science Subjects</strong>. The total
        duration of the online test shall be 85 minutes and shall comprise
        English, Physics, and Mathematics as per the 10+2 CBSE syllabus and
        Reasoning & General Awareness (RAGA).
      </p>
      <p className="text-gray-600 mb-4">Marking pattern for online test:-</p>
      <ul className="list-disc ml-4">
        <li className="text-gray-600">
          One mark for every correct answer.
        </li>
        <li className="text-gray-600">
          Nil (0) marks for an attempted question.
        </li>
        <li className="text-gray-600">
          0.25 marks shall be deducted for each wrong answer.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-2">Important Links</h2>
      <table className="table-auto w-full text-left">
        <tbody>
          <tr className="border-b border-gray-300">
            <td className="px-4 py-2">
              IAF Agniveer Exam Date Notice
            </td>
            <td className="px-4 py-2">
              <a
                href="https://pmsuryaghar.org.in/wp-content/uploads/2024/10/IAF-Agniveer-02_2025-Exam-Date-Notice.pdf"
                target="_blank"
                rel="noopener"
                className="text-blue-500 hover:underline"
              >
                Exam Date
              </a>
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="px-4 py-2">
              Agniveer Edit Application Form
            </td>
            <td className="px-4 py-2">
              <a
                href="https://agnipathvayu.cdac.in/avreg/candidate/login"
                target="_blank"
                rel="noopener"
                className="text-blue-500 hover:underline"
              >
                Edit Form
              </a>
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="px-4 py-2">
              Apply Date Extend Notice
            </td>
            <td className="px-4 py-2">
              <a
                href="https://haryanajobs.org/wp-content/uploads/2024/07/Air-Force-Agniveer-Date-Extend-Notice-28-July-2024.pdf"
                target="_blank"
                rel="noopener"
                className="text-blue-500 hover:underline"
              >
                Notice
              </a>
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="px-4 py-2">
              Air Force Agniveer Notification
            </td>
            <td className="px-4 py-2">
              <a
                href="https://haryanajobs.org/wp-content/uploads/2024/06/Air-Force-Agniveer-Intake-02_2025-Notification.pdf"
                target="_blank"
                rel="noopener"
                className="text-blue-500 hover:underline"
              >
                Notification
              </a>
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="px-4 py-2">
              Air Force Official Website
            </td>
            <td className="px-4 py-2">
              <a
                href="https://agnipathvayu.cdac.in/AV/"
                target="_blank"
                rel="noopener"
                className="text-blue-500 hover:underline"
              >
                IAF
              </a>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">Check Other Govt Jobs</td>
            <td className="px-4 py-2">
              <a
                href="https://haryanajobs.in/"
                target="_blank"
                rel="noopener"
                className="text-blue-500 hover:underline"
              >
                 Page
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}