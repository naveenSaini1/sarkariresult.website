import { BASE_URL } from "@/constant/ClientUrl";import SinglePageKeywords from "@/components/Keywords/SinglePageKeyword"; export const metadata = {metadataBase:new URL(BASE_URL + "/ ossc-60-jr-stenographer-jr-grade-ty"),keywords:["OSSC", "Odisha Staff Selection Commission", "Jr Stenographer", "Jr Grade Typist", "Recruitment", "2024", "Vacancy", "Application", "Online", "Important Dates", "Eligibility", "Age Limit", "Qualification", "Apply Online", "Notification", "Board of Revenue", "EIC", "Water Resources", "Commissioner of Endowment", "State Transport Authority"], description:" Odisha Staff Selection Commission (OSSC) is recruiting Jr Stenographer & Jr Grade Typist in 2024! Apply online from 13-11-2024 to 15-12-2024 for 60 vacancies.  Find eligibility, important dates, and FAQs.  Apply now and start your career with OSSC! ", title: { default:" OSSC 60 Jr Stenographer & Jr Grade Typist 2024: Apply Now!| sarkariresult.website ",      template: `%s | sarkarresult.website`   },openGraph: {description: 'apply for online goverment jobs find the details of the goverment jobs', openGraphImage:{image:["/public/logo.png"]} }};export default function admitCardLayout({ children }) { return (<><section className="text-center overflow-y-scroll">{children}</section><section><SinglePageKeywords/></section> </>   );}