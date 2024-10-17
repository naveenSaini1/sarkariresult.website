import { BASE_URL } from "@/constant/ClientUrl";import SinglePageKeywords from "@/components/Keywords/SinglePageKeyword"; export const metadata = {metadataBase:new URL(BASE_URL + "/ western-coalfields-ltd-apply-now-31"),keywords:["Western Coalfields", "Graduate Apprentice", "Technician Apprentice", "Mining Engineering", "Apprenticeship", "Recruitment", "Jobs", "Apply Online", "Western Coalfields Ltd", "2024", "Apprentice Act 1961", "Notification", "Eligibility Criteria", "Vacancy Details", "Important Links", "Age Limit", "Starting Date", "Last Date", "Official Website", "Freejobalert"], description:" Western Coalfields Ltd is hiring Graduate & Technician Apprentices! Apply now for 316 vacancies.  Deadline: 28-10-2024.  Find eligibility criteria, important links & apply online.  #WesternCoalfields #Apprenticeship #MiningJobs ", title: { default:" Western Coalfields Ltd: Apply Now for 316 Graduate & Technician Apprenticeships (2024)| sarkariresult.website ",      template: `%s | sarkarresult.website`   },openGraph: {description: 'apply for online goverment jobs find the details of the goverment jobs', openGraphImage:{image:["/public/logo.png"]} }};export default function admitCardLayout({ children }) { return (<><section className="text-center overflow-y-scroll">{children}</section><section><SinglePageKeywords/></section> </>   );}