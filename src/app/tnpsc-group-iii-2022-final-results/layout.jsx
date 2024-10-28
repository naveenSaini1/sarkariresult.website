import { BASE_URL } from "@/constant/ClientUrl";import SinglePageKeywords from "@/components/Keywords/SinglePageKeyword"; export const metadata = {metadataBase:new URL(BASE_URL + "/ tnpsc-group-iii-2022-final-results"),keywords:["TNPSC", "Tamil Nadu Public Service Commission", "Recruitment", "Jobs", "Vacancies", "Government Jobs", "Assistant Public Prosecutor", "Combined Technical Service Exam", "Assistant Engineer", "Civil Engineering", "Mechanical Engineering", "Electrical Engineering", "Electronics Engineering", "Diploma Engineering", "Exam Schedule", "Application Form", "Online Application", "Eligibility Criteria", "Important Dates", "Tamil Nadu"], description:" Explore TNPSC recruitment opportunities, including Assistant Public Prosecutor, Grade-II and Combined Technical Service Exams, with detailed information on eligibility, vacancies, and application deadlines. Find key highlights and discover various positions offered by the Tamil Nadu Public Service Commission. ", title: { default:" **TNPSC Group III 2022 Final Results: Find Out if You Made the Cut!**| sarkariresult.website ",      template: `%s | sarkarresult.website`   },openGraph: {description: 'apply for online goverment jobs find the details of the goverment jobs', openGraphImage:{image:["/public/logo.png"]} }};export default function admitCardLayout({ children }) { return (<><section className="text-center overflow-y-scroll">{children}</section><section><SinglePageKeywords/></section> </>   );}