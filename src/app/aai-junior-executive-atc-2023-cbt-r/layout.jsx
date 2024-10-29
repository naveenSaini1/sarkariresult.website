import { BASE_URL } from "@/constant/ClientUrl";import SinglePageKeywords from "@/components/Keywords/SinglePageKeyword"; export const metadata = {metadataBase:new URL(BASE_URL + "/ aai-junior-executive-atc-2023-cbt-r"),keywords:["AAI", "Airports Authority of India", "Junior Executive", "Air Traffic Control", "Recruitment", "Notification", "Application", "Eligibility", "Online", "Vacancy", "Exam", "Result", "Admit Card", "Syllabus", "CBT", "Revised Result", "Important Dates", "Age Limit", "Qualification", "Vacancy Details"], description:" Find the latest updates on the AAI Junior Executive (Air Traffic Control) 2023 recruitment!  The CBT revised result has been released.  Learn about application process, important dates, eligibility, and more.  Click here to access the notification and apply now! ", title: { default:" AAI Junior Executive (ATC) 2023 CBT Revised Results Announced| sarkariresult.website ",      template: `%s | sarkarresult.website`   },openGraph: {description: 'apply for online goverment jobs find the details of the goverment jobs', openGraphImage:{image:["/public/logo.png"]} }};export default function admitCardLayout({ children }) { return (<><section className="text-center overflow-y-scroll">{children}</section><section><SinglePageKeywords/></section> </>   );}