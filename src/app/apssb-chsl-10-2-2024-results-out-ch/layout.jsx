import { BASE_URL } from "@/constant/ClientUrl";import SinglePageKeywords from "@/components/Keywords/SinglePageKeyword"; export const metadata = {metadataBase:new URL(BASE_URL + "/ apssb-chsl-10-2-2024-results-out-ch"),keywords:["APSSB Recruitment", "Arunachal Pradesh Staff Selection Board", "APSSB Jobs", "Government Jobs", "Arunachal Pradesh", "Recruitment Notices", "APSSB Exam", "Online Application", "Combined Secondary Level Exam", "CSLE", "Non-Ministerial Technical Exam", "Assistant Technician", "Field Publicity Assistant", "Publicity Assistant", "Constable Driver", "H/C Driver", "Driver", "Health Assistant Jr", "Dental Technician", "Laboratory Assistant"], description:" Find latest recruitment information for Arunachal Pradesh Staff Selection Board (APSSB). Explore open positions, application deadlines, eligibility criteria, and vacancy details for various posts. ", title: { default:" APSSB CHSL (10+2) 2024 Results Out: Check Now!| sarkariresult.website ",      template: `%s | sarkarresult.website`   },openGraph: {description: 'apply for online goverment jobs find the details of the goverment jobs', openGraphImage:{image:["/public/logo.png"]} }};export default function admitCardLayout({ children }) { return (<><section className="text-center overflow-y-scroll">{children}</section><section><SinglePageKeywords/></section> </>   );}