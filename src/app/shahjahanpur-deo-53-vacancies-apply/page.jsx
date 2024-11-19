export default function ShahjahanpurRecruitment() {
  // This component displays recruitment information for various positions at the District Basic Education Office, Shahjahanpur.  It includes details about the application deadline, age limits, vacancy details, and FAQs.

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">District Basic Education Office, Shahjahanpur - Various Vacancies 2024</h1>

      <p className="text-justify mb-4">
        The District Basic Education Office, Shahjahanpur is recruiting for various full-time and part-time teaching positions, along with other roles such as Assistant Cook, Accountant, Peon, and Watchman. This is a great opportunity for those interested in contributing to education in the Shahjahanpur district.
      </p>

      <h2 className="text-2xl font-bold mb-2">Key Highlights</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Post Date: 19-11-2024</li>
        <li>Total Vacancies: 53</li>
        <li>Last Date to Apply: 02-12-2024 (05:00 PM)</li>
        <li>Minimum Age: 25 Years</li>
        <li>Maximum Age: 45 Years (as on 01-04-2024)</li>
      </ul>


      <h2 className="text-xl font-bold mb-4">Vacancy Details</h2>
      <table className="table-auto w-full mb-4 border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left text-gray-600 font-medium border border-gray-300">Post Name</th>
            <th className="px-4 py-2 text-center text-gray-600 font-medium border border-gray-300">Total</th>
            <th className="px-4 py-2 text-left text-gray-600 font-medium border border-gray-300">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border border-gray-300">
            <td className="px-4 py-2 border border-gray-300">Full time Teacher Social Subjects</td>
            <td className="px-4 py-2 text-center border border-gray-300">03</td>
            <td className="px-4 py-2 border border-gray-300" rowspan="5">Degree (Relevant Discipline), Upper Primary Level TET</td>
          </tr>
          <tr className="border border-gray-300">
            <td className="px-4 py-2 border border-gray-300">Full time Teacher English</td>
            <td className="px-4 py-2 text-center border border-gray-300">01</td>
          </tr>
          <tr className="border border-gray-300">
            <td className="px-4 py-2 border border-gray-300">Full time Teacher Mathematics</td>
            <td className="px-4 py-2 text-center border border-gray-300">07</td>
          </tr>
          <tr className="border border-gray-300">
            <td className="px-4 py-2 border border-gray-300">Full time Teacher Science</td>
            <td className="px-4 py-2 text-center border border-gray-300">03</td>
          </tr>
          <tr className="border border-gray-300">
            <td className="px-4 py-2 border border-gray-300">Full time Teacher Hindi</td>
            <td className="px-4 py-2 text-center border border-gray-300">02</td>
          </tr>
          {/* Add remaining rows similarly */}
          <tr className="border border-gray-300">
            <td className="px-4 py-2 border border-gray-300">Part Time Teacher Art/Craft Music</td>
            <td className="px-4 py-2 text-center border border-gray-300">01</td>
            <td className="px-4 py-2 border border-gray-300">Degree (Arts, Crafts &amp; Music/Home Crafts), B.Ed</td>
          </tr>
          {/* Add the rest of the rows for other positions */}
           <tr className="border border-gray-300">
            <td className="px-4 py-2 border border-gray-300">Part Time Teacher Computer</td>
            <td className="px-4 py-2 text-center border border-gray-300">09</td>
            <td className="px-4 py-2 border border-gray-300">Diploma from DOE ACC/Any Degree/PGDCA</td>
          </tr>
          <tr className="border border-gray-300">
            <td className="px-4 py-2 border border-gray-300">Part Time Teacher Physical Education</td>
            <td className="px-4 py-2 text-center border border-gray-300">03</td>
            <td className="px-4 py-2 border border-gray-300">D.P.Ed/C.P.Ed/B.P.Ed</td>
          </tr>
          <tr className="border border-gray-300">
            <td className="px-4 py-2 border border-gray-300">Urdu teacher</td>
            <td className="px-4 py-2 text-center border border-gray-300">04</td>
            <td className="px-4 py-2 border border-gray-300">Diploma in education or teaching or B.A with Urdu Subject and LT or BT or B.Ed</td>
          </tr>
          <tr className="border border-gray-300">
            <td className="px-4 py-2 border border-gray-300">Accountant</td>
            <td className="px-4 py-2 text-center border border-gray-300">03</td>
            <td className="px-4 py-2 border border-gray-300">Diploma in Computer from DOEACC, Knowledge of Commerce &amp; MS Office</td>
          </tr>
          <tr className="border border-gray-300">
            <td className="px-4 py-2 border border-gray-300">Head Cook</td>
            <td className="px-4 py-2 text-center border border-gray-300">03</td>
            <td className="px-4 py-2 border border-gray-300" rowspan="4">8th Class Pass</td>
          </tr>
          <tr className="border border-gray-300">
            <td className="px-4 py-2 border border-gray-300">Assistant Cook</td>
            <td className="px-4 py-2 text-center border border-gray-300">08</td>
          </tr>
          <tr className="border border-gray-300">
            <td className="px-4 py-2 border border-gray-300">Peon</td>
            <td className="px-4 py-2 text-center border border-gray-300">03</td>
          </tr>
          <tr className="border border-gray-300">
            <td className="px-4 py-2 border border-gray-300">Watchman</td>
            <td className="px-4 py-2 text-center border border-gray-300">03</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-xl font-bold mb-4">Important Dates</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Last Date for Application: 02-12-2024 (05:00 PM)</li>
      </ul>

      <h2 className="text-xl font-bold mb-4">Age Limit (as on 01-04-2024)</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Minimum Age: 25 Years</li>
        <li>Maximum Age: 45 Years</li>
      </ul>

      <h2 className="text-xl font-bold mb-4">Application Fee</h2>
      <p className="mb-4">Not Mentioned</p>

      <h2 className="text-xl font-bold mb-4">Important Links</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <a
            href="https://img.freejobalert.com/uploads/2024/11/Notification-UP-KGBV-Various-Vacancy.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Notification
          </a>
        </li>
        <li>
          <a
            href="https://shahjahanpur.nic.in/education/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Official Website
          </a>
        </li>
      </ul>

      <h2 className="text-xl font-bold mb-4">FAQs</h2>
      <dl className="mb-4">
        <dt className="font-bold">What is the last date to apply?</dt>
        <dd>02-12-2024</dd>
        <dt className="font-bold">What is the eligibility?</dt>
        <dd>8th/Diploma/Degree/B.Ed/PG (Relevant Discipline)</dd>
        <dt className="font-bold">How many vacancies are there?</dt>
        <dd>53</dd>
        <dt className="font-bold">What is the application fee?</dt>
        <dd>Not Mentioned</dd>
        <dt className="font-bold">What is the minimum age limit?</dt>
        <dd>25 Years</dd>
        <dt className="font-bold">What is the maximum age limit?</dt>
        <dd>45 Years</dd>
      </dl>

      <p className="text-gray-600 text-sm">Keywords: Shahjahanpur, District Basic Education Office, Recruitment, Teacher, Vacancy,  Application, 2024,  Jobs, Employment</p>
    </div>
  );
}