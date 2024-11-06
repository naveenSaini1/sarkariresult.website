import { BASE_URL } from "@/constant/ClientUrl";import SinglePageKeywords from "@/components/Keywords/SinglePageKeyword"; export const metadata = {metadataBase:new URL(BASE_URL + "/ hpsc-assistant-professor-recruitmen"),keywords:["HPSC", "Haryana Public Service Commission", "Assistant Professor", "Recruitment", "Education Department", "Haryana Government", "Notification", "Application Form", "Apply Online", "Vacancies", "Eligibility", "Selection Process", "Important Dates", "Application Fees", "Age Limit", "Qualification", "NET", "Ph.D", "Screening Test", "Subject Knowledge Test"], description:" Haryana Public Service Commission (HPSC) is recruiting 2424 Assistant Professors! Apply online by November 12, 2024.  Find out the eligibility criteria, selection process, and important dates for this exciting opportunity in higher education. ", title: { default:" HPSC Assistant Professor Recruitment 2024: Apply Now!| sarkariresult.website ",      template: `%s | sarkarresult.website`   },openGraph: {description: 'apply for online goverment jobs find the details of the goverment jobs', openGraphImage:{image:["/public/logo.png"]} }};export default function admitCardLayout({ children }) { return (<><section className="text-center overflow-y-scroll">{children}</section><section><SinglePageKeywords/></section> </>   );}