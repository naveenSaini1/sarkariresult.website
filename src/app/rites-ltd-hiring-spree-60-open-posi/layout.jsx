import { BASE_URL } from "@/constant/ClientUrl";import SinglePageKeywords from "@/components/Keywords/SinglePageKeyword"; export const metadata = {metadataBase:new URL(BASE_URL + "/ rites-ltd-hiring-spree-60-open-posi"),keywords:["RITES", "Recruitment", "Vacancies", "Assistant Highway Engineer", "Assistant Bridge/Structural Engineer", "Quality Control Engineer", "Job Opportunities", "Infrastructure", "Application Fee", "Important Dates", "Eligibility Criteria", "FAQs", "RITES Ltd", "2024", "Contract Basis", "Leading Company", "Diploma", "Degree", "PG", "Civil Engg"], description:" RITES Ltd is hiring for 60+ vacancies including Assistant Highway Engineer, Assistant Bridge/Structural Engineer, and Quality Control Engineer. Apply by 06-12-2024 for a chance to work with a leading infrastructure company. Learn more about eligibility, application process, and key dates. ", title: { default:" RITES Ltd. Hiring Spree: 60+ Open Positions - Apply Now!| sarkariresult.website ",      template: `%s | sarkarresult.website`   },openGraph: {description: 'apply for online goverment jobs find the details of the goverment jobs', openGraphImage:{image:["/public/logo.png"]} }};export default function admitCardLayout({ children }) { return (<><section className="text-center overflow-y-scroll">{children}</section><section><SinglePageKeywords/></section> </>   );}