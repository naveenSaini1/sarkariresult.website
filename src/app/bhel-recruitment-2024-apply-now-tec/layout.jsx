import { BASE_URL } from "@/constant/ClientUrl";import SinglePageKeywords from "@/components/Keywords/SinglePageKeyword"; export const metadata = {metadataBase:new URL(BASE_URL + "/ bhel-recruitment-2024-apply-now-tec"),keywords:["BHEL", "Technician", "Graduate Apprentice", "Recruitment", "2024", "Pudukkottai", "India", "Application", "Online", "Vacancy", "Job", "Opportunity", "Power Sector", "Apprenticeship", "Bharat Heavy Electrical Limited", "Diploma", "Degree", "B.Sc", "BA", "Last Date"], description:" BHEL Pudukkottai is hiring Technicians & Graduate Apprentices for 2024! Apply online by November 4th for a chance to join a leading power sector organization. Limited vacancies available, so don't miss out! ", title: { default:" BHEL Recruitment 2024: Apply Now for Technician & Graduate Apprentice Roles| sarkariresult.website ",      template: `%s | sarkarresult.website`   },openGraph: {description: 'apply for online goverment jobs find the details of the goverment jobs', openGraphImage:{image:["/public/logo.png"]} }};export default function admitCardLayout({ children }) { return (<><section className="text-center overflow-y-scroll">{children}</section><section><SinglePageKeywords/></section> </>   );}