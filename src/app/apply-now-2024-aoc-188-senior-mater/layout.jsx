import { BASE_URL } from "@/constant/ClientUrl";import SinglePageKeywords from "@/components/Keywords/SinglePageKeyword"; export const metadata = {metadataBase:new URL(BASE_URL + "/ apply-now-2024-aoc-188-senior-mater"),keywords:["AOC", "Senior Material Assistant", "Recruitment", "2024", "Vacancy", "Application", "Eligibility", "Last Date", "Important Dates", "Army Ordnance Corps Centre", "Government Job", "Diploma", "Degree", "PG", "Economics", "Commerce", "Statistics", "Business Studies", "Public Administration", "Official Website"], description:" Apply now for AOC Senior Material Assistant! 188 vacancies available!  Find out the eligibility, important dates, and application process. Learn about the exciting role at the Army Ordnance Corps Centre and secure your future with this rewarding career. Visit the official website for details. ", title: { default:" Apply Now for the 2024 AOC 188 Senior Material Assistant Position!| sarkariresult.website ",      template: `%s | sarkarresult.website`   },openGraph: {description: 'apply for online goverment jobs find the details of the goverment jobs', openGraphImage:{image:["/public/logo.png"]} }};export default function admitCardLayout({ children }) { return (<><section className="text-center overflow-y-scroll">{children}</section><section><SinglePageKeywords/></section> </>   );}