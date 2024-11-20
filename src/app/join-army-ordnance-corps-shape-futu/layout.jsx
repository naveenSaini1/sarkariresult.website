import { BASE_URL } from "@/constant/ClientUrl";import SinglePageKeywords from "@/components/Keywords/SinglePageKeyword"; export const metadata = {metadataBase:new URL(BASE_URL + "/ join-army-ordnance-corps-shape-futu"),keywords:["AOC Recruitment 2024", "Indian Army Ordnance Corps", "AOC Group C Recruitment", "Tradesman Mate", "Fireman", "Material Assistant", "Indian Army Jobs", "Government Jobs", "All India Service Liability", "Online Application", "Job Vacancies", "Recruitment Details", "Eligibility Criteria", "Application Fee", "Important Dates", "Selection Process", "Vacancy Details", "Army Ordnance Corps Recruitment", "Group C Civilian Recruitment", "10th Pass Jobs"], description:" AOC Recruitment 2024 is open! Apply for 723+ Group C vacancies (Tradesman Mate, Fireman, etc.) in the Indian Army Ordnance Corps.  Online application, no fee.  Check eligibility & important dates now! ", title: { default:" Join the Army Ordnance Corps: Shape the Future (2024)| sarkariresult.website ",      template: `%s | sarkarresult.website`   },openGraph: {description: 'apply for online goverment jobs find the details of the goverment jobs', openGraphImage:{image:["/public/logo.png"]} }};export default function admitCardLayout({ children }) { return (<><section className="text-center overflow-y-scroll">{children}</section><section><SinglePageKeywords/></section> </>   );}