import { BASE_URL } from "@/constant/ClientUrl";import SinglePageKeywords from "@/components/Keywords/SinglePageKeyword"; export const metadata = {metadataBase:new URL(BASE_URL + "/ bhel-50-welder-recruitment-last-dat"),keywords:["BHEL", "Welder", "Recruitment", "Vacancy", "Application", "Online", "Offline", "Important Dates", "Qualification", "Age Limit", "Notification", "Apply Now", "Bharat Heavy Electrical Limited", "ITI", "NTC", "NAC", "SBI Collect", "Fixed Tenure", "Electrical Industry", "Career"], description:" BHEL Welder Recruitment 2024 is open! Apply for 50 Welder vacancies on a fixed tenure basis. Last date to apply: 15-11-2024.  Find eligibility, important dates, and apply online at the official BHEL website. ", title: { default:" BHEL 50 Welder Recruitment: Last Date Extended!| sarkariresult.website ",      template: `%s | sarkarresult.website`   },openGraph: {description: 'apply for online goverment jobs find the details of the goverment jobs', openGraphImage:{image:["/public/logo.png"]} }};export default function admitCardLayout({ children }) { return (<><section className="text-center overflow-y-scroll">{children}</section><section><SinglePageKeywords/></section> </>   );}