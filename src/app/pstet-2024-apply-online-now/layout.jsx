import { BASE_URL } from "@/constant/ClientUrl";import SinglePageKeywords from "@/components/Keywords/SinglePageKeyword"; export const metadata = {metadataBase:new URL(BASE_URL + "/ pstet-2024-apply-online-now"),keywords:["PSTET", "Punjab State Teacher Eligibility Test", "PSEB", "Teacher Eligibility Test", "Recruitment", "Application", "Eligibility", "Dates", "Online Form", "Punjab School Education Board", "Exam", "Apply Online", "Important Dates", "Age Limit", "Qualification", "Vacancy Details", "Fee Structure", "Guidelines", "Notification", "Official Website"], description:" Apply for the PSTET 2024 exam to become a teacher in Punjab! Find key dates, eligibility, application details, and important links for the Punjab State Teacher Eligibility Test.  Apply online before 04-11-2024. ", title: { default:" PSTET 2024: Apply Online Now!| sarkariresult.website ",      template: `%s | sarkarresult.website`   },openGraph: {description: 'apply for online goverment jobs find the details of the goverment jobs', openGraphImage:{image:["/public/logo.png"]} }};export default function admitCardLayout({ children }) { return (<><section className="text-center overflow-y-scroll">{children}</section><section><SinglePageKeywords/></section> </>   );}