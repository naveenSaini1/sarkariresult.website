import { BASE_URL } from "@/constant/ClientUrl";import SinglePageKeywords from "@/components/Keywords/SinglePageKeyword"; export const metadata = {metadataBase:new URL(BASE_URL + "/ ssb-odisha-non-teaching-exam-2024-d"),keywords:["SSB Odisha","Odisha Recruitment","Non-Teaching Jobs","Odisha Government Jobs","Junior Assistant","Physical Education Teacher","Laboratory Assistant","Government Degree Colleges","SSB Odisha Recruitment 2024","Odisha Non-Teaching Posts","2024 Recruitment","Government Jobs Odisha","Odisha Vacancies","Junior Assistant Jobs","PET Jobs","Laboratory Assistant Jobs","Apply Online","Age Limit","Odisha Non-Teaching 2024","Recruitment Notification"], description:" SSB Odisha announces Non-Teaching recruitment (Junior Assistant, PET, Lab Assistant) for 2024!  Apply by April 15th. 101 vacancies.  Find details on eligibility, application process, & important dates here. Apply now! ", title: { default:" SSB Odisha Non-Teaching Exam 2024 Date Announced| sarkariresult.website ",      template: `%s | sarkarresult.website`   },openGraph: {description: 'apply for online goverment jobs find the details of the goverment jobs', openGraphImage:{image:["/public/logo.png"]} }};export default function admitCardLayout({ children }) { return (<><section className="text-center overflow-y-scroll">{children}</section><section><SinglePageKeywords/></section> </>   );}