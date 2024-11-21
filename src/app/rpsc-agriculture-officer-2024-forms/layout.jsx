import { BASE_URL } from "@/constant/ClientUrl";import SinglePageKeywords from "@/components/Keywords/SinglePageKeyword"; export const metadata = {metadataBase:new URL(BASE_URL + "/ rpsc-agriculture-officer-2024-forms"),keywords:["RPSC", "Agriculture Officer", "Recruitment", "Rajasthan", "2024", "Jobs", "Application", "Vacancy", "52 Vacancies", "M.Sc Agriculture", "M.Sc Horticulture", "December 13, 2024", "Application Fee", "Online Application", "Age Limit", "Qualification", "Important Dates", "Government Jobs", "Rajasthan Public Service Commission", "Horticulture"], description:" Apply now for RPSC Agriculture Officer Recruitment 2024! 52 vacancies available. Deadline: December 13, 2024.  M.Sc (Agriculture/Horticulture) required.  Check details & apply online! ", title: { default:" RPSC Agriculture Officer 2024: Forms Reopened!| sarkariresult.website ",      template: `%s | sarkarresult.website`   },openGraph: {description: 'apply for online goverment jobs find the details of the goverment jobs', openGraphImage:{image:["/public/logo.png"]} }};export default function admitCardLayout({ children }) { return (<><section className="text-center overflow-y-scroll">{children}</section><section><SinglePageKeywords/></section> </>   );}