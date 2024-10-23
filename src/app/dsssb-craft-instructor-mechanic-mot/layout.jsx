import { BASE_URL } from "@/constant/ClientUrl";import SinglePageKeywords from "@/components/Keywords/SinglePageKeyword"; export const metadata = {metadataBase:new URL(BASE_URL + "/ dsssb-craft-instructor-mechanic-mot"),keywords:["DSSSB", "Craft Instructor", "Mechanic", "Motor Vehicle", "Recruitment", "Delhi", "Online Exam", "Tier-I", "Result", "Notification", "Vacancy", "Application Fee", "Important Dates", "Qualification", "Age Limit", "Apply Online", "Official Website", "Maintenance Mechanic", "Technical Assistant", "Instructor Millwright"], description:" DSSSB Craft Instructor Mechanic Motor Vehicle (06/23) Recruitment: Latest updates, exam results, and application details. Apply now for 258 vacancies! Check eligibility, age limit, and important dates. Click to learn more. ", title: { default:" DSSSB Craft Instructor Mechanic Motor Vehicle (06/23) Tier-I Exam Results Out!| sarkariresult.website ",      template: `%s | sarkarresult.website`   },openGraph: {description: 'apply for online goverment jobs find the details of the goverment jobs', openGraphImage:{image:["/public/logo.png"]} }};export default function admitCardLayout({ children }) { return (<><section className="text-center overflow-y-scroll">{children}</section><section><SinglePageKeywords/></section> </>   );}