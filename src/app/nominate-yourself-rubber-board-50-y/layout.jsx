import { BASE_URL } from "@/constant/ClientUrl";import SinglePageKeywords from "@/components/Keywords/SinglePageKeyword"; export const metadata = {metadataBase:new URL(BASE_URL + "/ nominate-yourself-rubber-board-50-y"),keywords:["Rubber Board", "Young Professional", "Recruitment", "2024", "Extension Services", "Contract Basis", "Eligibility Criteria", "Vacancy Details", "Application Dates", "Apply Online", "Notification", "Official Website", "Agartala", "Guwahati", "Mangalore", "Age Limit", "Qualification", "Agriculture", "Horticulture", "Forestry"], description:" The Rubber Board is recruiting Young Professionals for Extension Services! Apply online by 13-11-2024 for 50 vacancies.  Learn about eligibility, application process, and key details. Click to explore the opportunity! ", title: { default:" Nominate Yourself: The Rubber Board 50 Young Professionals 2024| sarkariresult.website ",      template: `%s | sarkarresult.website`   },openGraph: {description: 'apply for online goverment jobs find the details of the goverment jobs', openGraphImage:{image:["/public/logo.png"]} }};export default function admitCardLayout({ children }) { return (<><section className="text-center overflow-y-scroll">{children}</section><section><SinglePageKeywords/></section> </>   );}