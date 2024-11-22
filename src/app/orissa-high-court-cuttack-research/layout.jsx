import { BASE_URL } from "@/constant/ClientUrl";import SinglePageKeywords from "@/components/Keywords/SinglePageKeyword"; export const metadata = {metadataBase:new URL(BASE_URL + "/ orissa-high-court-cuttack-research"),keywords:["Orissa High Court", "Recruitment", "District Judge", "Junior Grade Typist", "Data Entry Operator", "Research Assistant", "Jobs", "Odisha", "India", "High Court Jobs", "Government Jobs", "Legal Jobs", "Court Recruitment", "Online Application", "Application Fee", "Vacancy", "Important Dates", "Orissa High Court Recruitment 2024", "Job Opportunities", "Career"], description:" Orissa High Court recruitment 2024 is open!  Apply for District Judge, Junior Grade Typist, Research Assistant & more.  Find details on application deadlines, fees & vacancies.  Limited seats available! Apply now. ", title: { default:" Orissa High Court, Cuttack: Research Assistant Provisional Selection List (2024)| sarkariresult.website ",      template: `%s | sarkarresult.website`   },openGraph: {description: 'apply for online goverment jobs find the details of the goverment jobs', openGraphImage:{image:["/public/logo.png"]} }};export default function admitCardLayout({ children }) { return (<><section className="text-center overflow-y-scroll">{children}</section><section><SinglePageKeywords/></section> </>   );}