export default function RecruitmentInformation() {
  // This component displays recruitment information for the Teacher Eligibility Test (TET). 
  // It includes details about the exam, application process, important dates, and fees.
  return (
    <div className="container mx-auto px-4 py-8">
      <nav aria-label="breadcrumbs" className="rank-math-breadcrumb">
        <p>
          <a href="https://pmsuryaghar.org.in" className="text-blue-500 hover:text-blue-700">
            
          </a>
          <span className="separator"> » </span>
          <a href="https://pmsuryaghar.org.in/category/notification/" className="text-blue-500 hover:text-blue-700">
            Notification
          </a>
          <span className="separator"> » </span>
          <span className="last">
            Teacher Eligibility Test (TET) Notification Out, Apply Online
          </span>
        </p>
      </nav>
      <h1 className="text-3xl font-bold mb-4">Teacher Eligibility Test (TET) Notification</h1>
      <div className="entry-meta mb-4">
        <span className="posted-on">
          <time className="entry-date published" dateTime="2024-09-17T17:23:03+05:30">
            September 17, 2024
          </time>
        </span>
        <span className="byline">
          by{' '}
          <span
            className="author vcard"
            itemProp="author"
            itemScope
            itemType="https://schema.org/Person"
          >
            <a
              className="url fn n text-blue-500 hover:text-blue-700"
              href="https://pmsuryaghar.org.in/author/pmsuryaghar/"
              title="View all posts by Admin"
              rel="author"
              itemProp="url"
            >
              <span className="author-name" itemProp="name">
                Admin
              </span>
            </a>
          </span>
        </span>
      </div>
      <p className="mb-4">
        The Central Board of School Education (CBSE) has released the Teacher
        Eligibility Test (TET) Notification for the December 2024 Exam. The TET
        December 2024 Notification was published on 17 September 2024, and
        online applications are accepted from 17 September to 16 October 2024.
        Applicants can apply online for the TET December 2024 exam from the
        official website of TET at ctet.nic.in.
      </p>
      <p className="mb-4">
        The CBSE will conduct the TET December 2024 exam on 1 December 2024. The
        TET Paper-II (TGT) will be held on 1 December 2024 in the morning shift
        from 09:30 am to 12:00 noon. The TET Paper-I (PRT) will be held on 1
        December 2024 will be held on 1 December 2024 in the Evening shift from
        02:30 pm to 05:00 pm.
      </p>
      <h2 className="text-2xl font-bold mb-2">Application Fee</h2>
      <p className="mb-4">
        The TET Application fee is Rs. 1000/- for only Paper-I or II and Rs.
        1200/- for both the papers [General, OBC (NCL) Category Candidates]. The
        application fee for SC, ST, and PWD is Rs. 500/- for only one paper and
        Rs. 600/- for both papers.
      </p>
      <h2 className="text-2xl font-bold mb-2">Important Dates</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Notification Release Date: September 17, 2024</li>
        <li>Online Application Start Date: September 17, 2024</li>
        <li>Online Application Last Date: October 16, 2024</li>
        <li>Exam Date: December 1, 2024</li>
      </ul>
      <h2 className="text-2xl font-bold mb-2">Important Links</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>
          <a
            href="https://pmsuryaghar.org.in/wp-content/uploads/2024/09/CTET-2024-December-Notification-PDF.pdf"
            className="text-blue-500 hover:text-blue-700"
          >
            TET December 2024 Notification
          </a>
        </li>
        <li>
          <a
            href="https://ctet.nic.in/"
            target="_blank"
            rel="noopener"
            className="text-blue-500 hover:text-blue-700"
          >
            Apply Online
          </a>
        </li>
      </ul>
    </div>
  );
}