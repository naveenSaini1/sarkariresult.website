import { BASE_URL } from "@/constant/ClientUrl";import SinglePageKeywords from "@/components/Keywords/SinglePageKeyword"; export const metadata = {metadataBase:new URL(BASE_URL + "/ nrsc-medical-officer-2024-interview"),keywords:["NRSC", "ISRO", "Recruitment", "Research Scientist", "Project Scientist", "JRF", "Junior Research Fellow", "Vacancy", "Application", "Online Form", "Eligibility", "Important Dates", "Age Limit", "Qualification", "India", "Scientist", "Engineer", "Library Assistant", "Medical Officer", "Post Details"], description:" NRSC is hiring! Apply for Research Scientist, Project Scientist, JRF, and more positions. Find detailed information about eligibility, application process, and important dates. Apply by 12-04-2024. Visit NRSC website for details. ", title: { default:" NRSC Medical Officer 2024: Interview Candidates & Dates Announced| sarkariresult.website ",      template: `%s | sarkarresult.website`   },openGraph: {description: 'apply for online goverment jobs find the details of the goverment jobs', openGraphImage:{image:["/public/logo.png"]} }};export default function admitCardLayout({ children }) { return (<><section className="text-center overflow-y-scroll">{children}</section><section><SinglePageKeywords/></section> </>   );}