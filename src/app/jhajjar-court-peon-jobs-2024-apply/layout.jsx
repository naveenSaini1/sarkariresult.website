import { BASE_URL } from "@/constant/ClientUrl";import SinglePageKeywords from "@/components/Keywords/SinglePageKeyword"; export const metadata = {metadataBase:new URL(BASE_URL + "/ jhajjar-court-peon-jobs-2024-apply"),keywords:["Jhajjar Court", "Recruitment 2024", "Peon", "Haryana Jobs", "Government Jobs", "Application Form", "District and Sessions Judge", "Jhajjar", "Vacancy", "Offline Application", "Employment", "Temporary Basis", "10 Vacancies", "November 2024", "December 2024", "8th Pass", "Age Limit", "Selection Process", "Interview", "Haryana"], description:" Jhajjar Court announces 10 Peon vacancies! Apply by Dec 12, 2024.  8th pass required. Offline application.  Find details, dates & application form at [link to application].  Haryana Govt job. ", title: { default:" Jhajjar Court Peon Jobs 2024: Apply Now!| sarkariresult.website ",      template: `%s | sarkarresult.website`   },openGraph: {description: 'apply for online goverment jobs find the details of the goverment jobs', openGraphImage:{image:["/public/logo.png"]} }};export default function admitCardLayout({ children }) { return (<><section className="text-center overflow-y-scroll">{children}</section><section><SinglePageKeywords/></section> </>   );}