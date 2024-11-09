import { BASE_URL } from "@/constant/ClientUrl";import SinglePageKeywords from "@/components/Keywords/SinglePageKeyword"; export const metadata = {metadataBase:new URL(BASE_URL + "/ upsc-civil-services-2023-marks-see"),keywords:["UPSC", "Civil Services", "Recruitment", "Exam", "2023", "Marks", "Result", "Cut Off", "Interview", "Schedule", "Notification", "Apply Online", "Important Dates", "Vacancy Details", "Age Limit", "Qualification", "Prelims", "Mains", "Phase", "Reserve List"], description:" Get the latest updates on the UPSC Civil Services 2023 recruitment! Explore post details, application fee, important dates, vacancy details, marks, results, and interview schedule. Find all relevant links and apply online now. ", title: { default:" **UPSC Civil Services 2023 Marks: See Who Topped the Exam!**| sarkariresult.website ",      template: `%s | sarkarresult.website`   },openGraph: {description: 'apply for online goverment jobs find the details of the goverment jobs', openGraphImage:{image:["/public/logo.png"]} }};export default function admitCardLayout({ children }) { return (<><section className="text-center overflow-y-scroll">{children}</section><section><SinglePageKeywords/></section> </>   );}