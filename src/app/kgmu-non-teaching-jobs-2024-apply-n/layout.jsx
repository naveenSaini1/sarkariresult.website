import { BASE_URL } from "@/constant/ClientUrl";import SinglePageKeywords from "@/components/Keywords/SinglePageKeyword"; export const metadata = {metadataBase:new URL(BASE_URL + "/ kgmu-non-teaching-jobs-2024-apply-n"),keywords:["KGMU", "Recruitment", "Non-Teaching", "Jobs", "Uttar Pradesh", "Lucknow", "King George Medical University", "Application", "Notification", "2024", "332 Vacancies", "Group B & C", "Online Application", "December 31, 2024", "Application Fee", "Age Limit", "Written Exam", "Selection Process", "Vacancy Details", "Eligibility"], description:" KGMU Lucknow is hiring for 332 Non-Teaching positions! Apply online by Dec 31, 2024.  Find details on application fees, eligibility, and the selection process.  A fantastic opportunity to join a prestigious university. Apply now! ", title: { default:" KGMU Non-Teaching Jobs 2024: Apply Now!| sarkariresult.website ",      template: `%s | sarkarresult.website`   },openGraph: {description: 'apply for online goverment jobs find the details of the goverment jobs', openGraphImage:{image:["/public/logo.png"]} }};export default function admitCardLayout({ children }) { return (<><section className="text-center overflow-y-scroll">{children}</section><section><SinglePageKeywords/></section> </>   );}