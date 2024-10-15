import { BASE_URL } from "@/constant/ClientUrl";import SinglePageKeywords from "@/components/Keywords/SinglePageKeyword"; export const metadata = {metadataBase:new URL(BASE_URL + "/ rsmssb-hostel-superintendent-result"),keywords:["RSMSSB", "Rajasthan", "Hostel Superintendent", "Recruitment", "Result", "Merit List", "Grade-II", "Education", "Government Jobs", "Rajasthan Jobs", "TSP Posts", "Non-TSP Posts", "RSMSSB Website", "Cut-off Scores", "Hostel Superintendent Grade-II Recruitment", "RSMSSB Hostel Superintendent Result 2024", "Hostel Superintendent Result PDF", "Education Department", "Recruitment Process", "Job Opportunities"], description:" Rajasthan Hostel Superintendent Recruitment 2024 results are out! 335 positions filled, including 314 Non-TSP & 21 TSP Posts.  Check the merit list & cut-off scores on the RSMSSB website. Get the latest updates and download the result PDF. ", title: { default:" RSMSSB Hostel Superintendent Result 2024: Check Your Score Now!| sarkariresult.website ",      template: `%s | sarkarresult.website`   },openGraph: {description: 'apply for online goverment jobs find the details of the goverment jobs', openGraphImage:{image:["/public/logo.png"]} }};export default function admitCardLayout({ children }) { return (<><section className="text-center overflow-y-scroll">{children}</section><section><SinglePageKeywords/></section> </>   );}