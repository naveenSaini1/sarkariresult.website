import { BASE_URL } from "@/constant/ClientUrl";import SinglePageKeywords from "@/components/Keywords/SinglePageKeyword"; export const metadata = {metadataBase:new URL(BASE_URL + "/ rims-adilabad-hiring-spree-79-walk"),keywords:["RIMS Adilabad", "Walk in Interview", "Recruitment", "Professor", "Assistant Professor", "Associate Professor", "Medical", "Vacancy", "Telangana", "Regional Institute of Medical Sciences", "Adilabad", "Job Opportunity", "Healthcare", "Walk in", "2024", "Career", "Employment", "Education", "Health", "Government Jobs"], description:" Find details for RIMS, Adilabad's walk-in interview for Professor, Assistant Professor, Associate Professor, and other positions. 79 vacancies are available. Apply now! ", title: { default:" RIMS, Adilabad Hiring Spree: 79 Walk-In Vacancies for 2024| sarkariresult.website ",      template: `%s | sarkarresult.website`   },openGraph: {description: 'apply for online goverment jobs find the details of the goverment jobs', openGraphImage:{image:["/public/logo.png"]} }};export default function admitCardLayout({ children }) { return (<><section className="text-center overflow-y-scroll">{children}</section><section><SinglePageKeywords/></section> </>   );}