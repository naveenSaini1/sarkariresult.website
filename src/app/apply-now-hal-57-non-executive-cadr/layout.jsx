import { BASE_URL } from "@/constant/ClientUrl";import SinglePageKeywords from "@/components/Keywords/SinglePageKeyword"; export const metadata = {metadataBase:new URL(BASE_URL + "/ apply-now-hal-57-non-executive-cadr"),keywords:["HAL", "Hindustan Aeronautics Limited", "Non Executive Cadre", "Recruitment", "2024", "Diploma Technician", "Operator", "Aerospace", "Defense", "India", "Job Opportunity", "Vacancies", "Application", "Eligibility", "Age Limit", "Fee", "Important Dates", "Links", "FAQs", "Career"], description:" Hindustan Aeronautics Limited (HAL) is recruiting for Non-Executive Cadre positions (Diploma Technician & Operator) on a tenure basis. Apply online by 24-11-2024 for 57 vacancies!  Find eligibility, important dates, application fee, and more.  Click for details and apply now! ", title: { default:" Apply Now: HAL 57 Non-Executive Cadre 2024 Online Form Open| sarkariresult.website ",      template: `%s | sarkarresult.website`   },openGraph: {description: 'apply for online goverment jobs find the details of the goverment jobs', openGraphImage:{image:["/public/logo.png"]} }};export default function admitCardLayout({ children }) { return (<><section className="text-center overflow-y-scroll">{children}</section><section><SinglePageKeywords/></section> </>   );}