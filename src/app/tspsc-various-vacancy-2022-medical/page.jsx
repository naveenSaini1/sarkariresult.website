export default function TSPSCRecruitment() {
  // This component displays recruitment information for various vacancies advertised by the Telangana State Public Service Commission (TSPSC). 
  // It includes details like post name, total vacancies, qualification, application fee, important dates, and key links. 
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">TSPSC Recruitment 2022</h1>
      <p className="text-lg text-gray-700 mb-4">
        The Telangana State Public Service Commission (TSPSC) has announced recruitment for various vacancies including Assistant Engineer (AE), Technical Officer, Jr Technical Engineer, and Municipal Assistant Engineer. 
      </p>
      <h2 className="text-2xl font-bold mb-2">Key Highlights</h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>
          <span className="font-bold">Post Date:</span> 13-09-2022
        </li>
        <li>
          <span className="font-bold">Latest Update:</span> 01-11-2024
        </li>
        <li>
          <span className="font-bold">Total Vacancy:</span> 837
        </li>
        <li>
          <span className="font-bold">Application Deadline:</span> 21-10-2022
        </li>
      </ul>
      <h2 className="text-2xl font-bold mb-2">Brief Information</h2>
      <p className="text-gray-700 mb-4">
        TSPSC is inviting applications from eligible candidates for various technical positions. Interested candidates can read the notification and apply online.
      </p>
      <h2 className="text-2xl font-bold mb-2">Application Fee</h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>Processing Fee: Rs. 200/-</li>
        <li>Examination Fee: Rs. 80/-</li>
        <li>Fee for All Unemployed: Nil</li>
        <li>Payment Mode: Through Online Payment Gateway</li>
      </ul>
      <h2 className="text-2xl font-bold mb-2">Important Dates</h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>Starting Date to Apply Online &amp; Payment of Fee: 28-09-2022</li>
        <li>Last Date to Apply Online &amp; Payment of Fee: 21-10-2022 up to 05:00 PM</li>
        <li>Date of Detailed Notification: 23-09-2022</li>
        <li>Date of CBT: January/ February-2023</li>
        <li>Date of Written Exam: 12-02-2023 (Postponed)</li>
        <li>New Exam Date: 05-03-2023 (Cancelled)</li>
        <li>Date of Exam: 27-02-2023</li>
        <li>Date of CBRT Re-Exam: 18, 19, 20-10-2023</li>
        <li>Date for Downloading of Hall Ticket: From 14-10-2023/ 15-10-2023</li>
        <li>Date to exercise web options: 21-10-2024 to 06-11-2024</li>
        <li>Date of Medical Exam for OH Candidates: 04,05-11-2024</li>
        <li>Date of Medical Exam for HH Candidates: 11,12-11-2024</li>
        <li>Date of Medical Exam for VH Candidates: 11,12-11-2024</li>
      </ul>
      <h2 className="text-2xl font-bold mb-2">Age Limit</h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>Minimum Age Limit: 18 Years</li>
        <li>Maximum Age Limit: 44 Years</li>
        <li>Age Relaxation is Applicable as per Rules.</li>
      </ul>
      <h2 className="text-2xl font-bold mb-2">Vacancy Details</h2>
      <table className="table-auto w-full text-center text-gray-700 mb-4">
        <thead>
          <tr>
            <th className="border px-4 py-2 font-bold">Sl No</th>
            <th className="border px-4 py-2 font-bold">Post Name</th>
            <th className="border px-4 py-2 font-bold">Total</th>
            <th className="border px-4 py-2 font-bold">Qualification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">1.</td>
            <td className="border px-4 py-2">Asst Engineer (AE)</td>
            <td className="border px-4 py-2">396</td>
            <td className="border px-4 py-2">Diploma, B.E/ B.Tech (Civil Engg)</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">2.</td>
            <td className="border px-4 py-2">Municipal Asst Engineer</td>
            <td className="border px-4 py-2">29</td>
            <td className="border px-4 py-2" rowSpan={2}>Diploma (Civil Engg)</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">3.</td>
            <td className="border px-4 py-2">Technical Officer</td>
            <td className="border px-4 py-2">09</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">4.</td>
            <td className="border px-4 py-2">Jr Technical Officer (JTO)</td>
            <td className="border px-4 py-2">399</td>
            <td className="border px-4 py-2">Diploma, Degree (Civil Engg)</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">5.</td>
            <td className="border px-4 py-2">Drilling Supervisor (Mechanical)</td>
            <td className="border px-4 py-2" className={{ color: '#ff0000' }}>04</td>
            <td className="border px-4 py-2">Diploma (Mechanical Engg)</td>
          </tr>
        </tbody>
      </table>
      <h2 className="text-2xl font-bold mb-2">Important Links</h2>
      <table className="table-auto w-full text-center text-gray-700 mb-4">
        <tbody>
          <tr>
            <td className="border px-4 py-2" colSpan={3} className={{ color: '#008000' }}>
              Medical Exam Date (01-11-2024)
            </td>
            <td className="border px-4 py-2">
              <a href="https://img.freejobalert.com/uploads/2024/11/Medical-Exam-Date-TSPSC-AE-JTO-Other-Posts.pdf" target="_blank" rel="nofollow" className="underline text-blue-500">Click Here</a>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2" colSpan={3} className={{ color: '#008000' }}>
              Web Options Link (23-10-2024)
            </td>
            <td className="border px-4 py-2">
              <a href="https://websitenew.tspsc.gov.in/viewWebOptions?accessId=WEB16245113" target="_blank" rel="nofollow" className="underline text-blue-500">Click Here</a>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2" colSpan={3} className={{ color: '#008000' }}>
              Web Options Notice (18-10-2024)
            </td>
            <td className="border px-4 py-2">
              <a title="TSPSC" href="https://img.freejobalert.com/uploads/2024/10/Web-Options-Notice-TSPSC-Various-Vacancy-16_2022.pdf" target="_blank" rel="nofollow" className="underline text-blue-500">Click Here</a>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2" colSpan={3} className={{ color: '#008000' }}>
              Revised Vacancy Notice (11-05-2024)
            </td>
            <td className="border px-4 py-2">
              <a title="TSPSC" href="https://websitenew.tspsc.gov.in/preview/UFJFU1NOT1RFL0FFLUFEREVORFVNLVdFQk5PVEUyMDI0MDUwODA2NTc0MS5wZGY=r95v17a0y2d8i13v" target="_blank" rel="nofollow" className="underline text-blue-500">Click Here</a>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2" colSpan={3} className={{ color: '#008000' }}>
              CBRT General Ranking List (27-04-2024)
            </td>
            <td className="border px-4 py-2">
              <a title="TSPSC" href="https://www.tspsc.gov.in/GRL_AE7560716AE" target="_blank" rel="nofollow" className="underline text-blue-500">Result</a>{' '}
              |{' '}
              <a title="TSPSC" href="https://websitenew.tspsc.gov.in/preview/UFJFU1NOT1RFL0FFLUdSTC1XRUJOT1RFMjAyNDA0MjUyMDUyMjUucGRmr95v17a0y2d8i13v" target="_blank" rel="nofollow" className="underline text-blue-500">Notice</a>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2" colSpan={3} className={{ color: '#008000' }}>
              CBRT Final Key &amp; Response Sheet (06-04-2024)
            </td>
            <td className="border px-4 py-2">
              <a href="https://websitenew.tspsc.gov.in/downloadresponcesheet?accessId=RES1622AXYB468" target="_blank" rel="nofollow" className="underline text-blue-500">Key </a>
              |{' '}
              <a href="https://websitenew.tspsc.gov.in/preview/UFJFU1NOT1RFL0FFLTE2LTIwMjItRklOQUwtS0VZLVdFQi1OT1RFMjAyNDA0MDQxOTExNTkucGRmr95v17a0y2d8i13v" target="_blank" rel="nofollow" className="underline text-blue-500">Notice</a>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2" colSpan={3} className={{ color: '#008000' }}>
              CBRT Answer Key (03-11-2023)
            </td>
            <td className="border px-4 py-2">
              <a title="TSPSC" href="https://www.tspsc.gov.in/1622LGMDBM9e90c-85as-78qw-er30-7894vf612587" target="_blank" rel="nofollow" className="underline text-blue-500">Key</a>{' '}
              |{' '}
              <a title="TSPSC" href="https://websitenew.tspsc.gov.in/viewKeyObjections?accessId=7rw7WyAJhW8uLuA" target="_blank" rel="nofollow" className="underline text-blue-500">Objections</a>{' '}
              |{' '}
              <a title="TSPSC" href="https://websitenew.tspsc.gov.in/preview/UFJFU1NOT1RFL0FFLTE2LTIwMjIgUFJJTElNSU5BUlkgS0VZLVdFQiBOT1RFMjAyMzExMDExOTAyMjAucGRmr95v17a0y2d8i13v" target="_blank" rel="nofollow" className="underline text-blue-500">Notice</a>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2" colSpan={3} className={{ color: '#008000' }}>
              Response Sheet (03-11-2023)
            </td>
            <td className="border px-4 py-2">
              <a title="TSPSC" href="https://websitenew.tspsc.gov.in/downloadresponcesheet?accessId=dQPOb8jmRqMYwZA" target="_blank" rel="nofollow" className="underline text-blue-500">Click Here</a>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2" colSpan={3} className={{ color: '#008000' }}>
              CBRT Admit Card (17-10-2023)
            </td>
            <td className="border px-4 py-2">
              <a title="TSPSC" href="https://hallticket.tspsc.gov.in/h162022c8378cc6-99d1-4043-b540-086455ea654c" target="_blank" rel="nofollow" className="underline text-blue-500">Click Here</a>{' '}
              |{' '}
              <a title="TSPSC" href="https://websitenew.tspsc.gov.in/preview/UFJFU1NOT1RFL1dlYk5vdGUtSFQtRG93bmxvYWQtQUUtQ0lWSUwyMDIzMTAxNTExNDEyMy5wZGY=r95v17a0y2d8i13v" target="_blank" rel="nofollow" className="underline text-blue-500">Notice</a>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2" colSpan={3} className={{ color: '#008000' }}>
              Hall Ticket Date Notice (12-10-2023)
            </td>
            <td className="border px-4 py-2">
              <a title="TSPSC" href="https://websitenew.tspsc.gov.in/preview/UFJFU1NOT1RFL1dlYi1Ob3RlLUhULURvd25sb2FkMjAyMzEwMTExODIwMjkucGRmr95v17a0y2d8i13v" target="_blank" rel="nofollow" className="underline text-blue-500">Click Here</a>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2" colSpan={3} className={{ color: '#008000' }}>
              CBRT Re-Exam Date (22-07-2023)
            </td>
            <td className="border px-4 py-2">
              <a title="TSPSC" href="https://websitenew.tspsc.gov.in/preview/UFJFU1NOT1RFL0FFLVJFLUVYQU0tV0VCLU5PVEUyMDIzMDcyMDE4NDg0NC5wZGY=r95v17a0y2d8i13v" target="_blank" rel="nofollow" className="underline text-blue-500">Click Here</a>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2" colSpan={3} className={{ color: '#008000' }}>
              Exam Cancelled Notice (16-03-2023)
            </td>
            <td className="border px-4 py-2">
              <a title="TSPSC" href="https://img.freejobalert.com/uploads/2023/03/Exam-Cancelled-TSPSC-Various-Vacancy-2022.pdf" target="_blank" rel="nofollow" className="underline text-blue-500">Click Here</a>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2" colSpan={3} className={{ color: '#008000' }}>
              Admit Card (27-02-2023)
            </td>
            <td className="border px-4 py-2">
              <a title="TSPSC" href="https://hallticket.tspsc.gov.in/h162022d3139b62-e4ef-4c77-952d-4680f35decb0" target="_blank" rel="nofollow" className="underline text-blue-500">Click Here</a>{' '}
              |{' '}
              <a title="TSPSC" href="https://img.freejobalert.com/uploads/2023/02/Notice-TSPSC-Various-Vacancy-Posts.pdf" target="_blank" rel="nofollow" className="underline text-blue-500">Notice</a>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2" colSpan={3} className={{ color: '#008000' }}>
              New Exam Date (07-01-2023)
            </td>
            <td className="border px-4 py-2">
              <a title="TSPSC" href="https://img.freejobalert.com/uploads/2023/01/Exam-Date-TSPSC-Assistant-Engineer-Posts.pdf" target="_blank" rel="nofollow" className="underline text-blue-500">Click Here</a>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2" colSpan={3} className={{ color: '#008000' }}>
              Written Exam Date (21-11-2022)
            </td>
            <td className="border px-4 py-2">
              <a title="TSPSC" href="https://img.freejobalert.com/uploads/2022/11/Written-Exam-Date-TSPSC-AE-JTO-and-Other-Posts.pdf" target="_blank" rel="nofollow" className="underline text-blue-500">Click Here</a>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2" colSpan={3} className={{ color: '#008000' }}>
              Vacancy Increase Notice (30-09-2022)
            </td>
            <td className="border px-4 py-2">
              <a title="TSPSC" href="https://img.freejobalert.com/uploads/2022/09/Vacancy-Increase-Notice-TSPSC-16-2022-Various-Vacancy.pdf" target="_blank" rel="nofollow" className="underline text-blue-500">Click Here</a>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2" colSpan={3} className={{ color: '#008000' }}>
              Apply Online (28-09-2022)
            </td>
            <td className="border px-4 py-2">
              <a title="TSPSC" href="https://application.tspsc.gov.in/CandidateEntry162022" target="_blank" rel="nofollow" className="underline text-blue-500">Click Here</a>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2" colSpan={3} className={{ color: '#008000' }}>
              Detailed Notification
            </td>
            <td className="border px-4 py-2">
              <a title="TSPSC" href="https://img.freejobalert.com/uploads/2022/09/Detailed-Notification-TSPSC-AE-JTO-Other-Posts.pdf" target="_blank" rel="nofollow" className="underline text-blue-500">Click Here</a>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2" colSpan={3} className={{ color: '#008000' }}>
              Notification
            </td>
            <td className="border px-4 py-2">
              <a title="TSPSC" href="https://img.freejobalert.com/uploads/2022/09/Notification-TSPSC-Various-Vacancy-2022.pdf" target="_blank" rel="nofollow" className="underline text-blue-500">Click Here</a>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2" colSpan={3} className={{ color: '#008000' }}>
              Official Website
            </td>
            <td className="border px-4 py-2">
              <a title="TSPSC" href="https://www.tspsc.gov.in/" target="_blank" rel="nofollow" className="underline text-blue-500">Click Here</a>
            </td>
          </tr>
        </tbody>
      </table>
      <p className="text-gray-700 mt-4">
        Keywords: TSPSC, Telangana, Recruitment, Assistant Engineer, Technical Officer, Jr Technical Engineer, Municipal Assistant Engineer, Vacancies, Jobs,
        Application, Online, Notification, Important Dates, Age Limit, Qualification.
      </p>
    </div>
  );
}