export default function BSFRecruitmentInfo() {
  // Summary of BSF recruitment information with updated selection process.  This component displays details about various BSF recruitments, highlighting the change in selection process (Physical Test before Written Exam), and providing a list of open positions and the updated selection procedure.

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">BSF Recruitment 2024: Selection Process Updated</h1>
      <p className="mb-4">
        The Border Security Force (BSF) has announced changes to its selection process for various recruitments, effective November 20, 2024.  The Physical Test will now be conducted before the Written Exam. This update applies to several key positions within the BSF.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Key Highlights</h2>
        <ul className="list-disc list-inside">
          <li>Updated selection process: Physical Test precedes Written Exam.</li>
          <li>Multiple recruitment opportunities across various BSF departments.</li>
          <li>Corrigendum notice released on November 20, 2024.</li>
          <li>Details available in the official corrigendum notice (link provided below).</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Recruitment Openings</h2>
        <ul className="list-disc list-inside">
          <li>BSF Inspector (Librarian) Recruitment 2024</li>
          <li>BSF SMT Workshop Recruitment 2024</li>
          <li>BSF Veterinary Staff Recruitment 2024</li>
          <li>BSF Paramedical Staff Recruitment 2024</li>
          <li>BSF Air Wing Recruitment 2024</li>
          <li>BSF Water Wing Recruitment 2024 (Group A, B, C Posts)</li>
          <li>BSF Engineering Setup Recruitment 2024 (Group A, B, C Posts)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Updated Selection Process</h2>
        <ol className="list-decimal list-inside">
          <li>Physical Standards Test (PST)</li>
          <li>Physical Efficiency Test (PET)</li>
          <li>Written Exam</li>
          <li>Interview/ Skill Test/ Trade Test (as per post requirement)</li>
          <li>Document Verification</li>
          <li>Medical Examination</li>
        </ol>
      </section>


      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Important Link</h2>
        <a href="https://haryanajobs.org/wp-content/uploads/2024/11/BSF-Recruitment-2024-Corrigendum-Notice.pdf" target="_blank" rel="noopener" className="text-blue-500 underline">
          BSF Corrigendum Notice- I (dated 20.11.2024)
        </a>
      </section>

      <p className="text-sm text-gray-600">
        {/*Keywords for SEO*/} Keywords: BSF Recruitment, BSF Jobs, BSF 2024, Border Security Force, Recruitment 2024, Corrigendum, Selection Process, Physical Test, Written Exam, Inspector, Librarian, Workshop, Veterinary Staff, Paramedical Staff, Air Wing, Water Wing, Engineering.
      </p>
    </div>
  );
}