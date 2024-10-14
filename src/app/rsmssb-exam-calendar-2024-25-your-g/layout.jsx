import { BASE_URL } from "@/constant/ClientUrl";import SinglePageKeywords from "@/components/Keywords/SinglePageKeyword"; export const metadata = {metadataBase:new URL(BASE_URL + "/ rsmssb-exam-calendar-2024-25-your-g"),keywords:["RSMSSB", "Exam Calendar", "Recruitment", "Rajasthan", "Government Jobs", "Exam Schedule", "PDF Download", "Staff Selection Board", "Key Dates", "Official Website", "Written Exams", "Recruitment Posts", "Job Opportunities", "Career", "Government Sector", "Employment", "Rajasthan Jobs", "India Jobs", "Exam Preparation", "Apply Now"], description:" Get the latest RSMSSB recruitment information, including the exam calendar and key dates for various posts. Download the official PDF and visit the website for the most up-to-date details.  #RSMSSB #Recruitment #Rajasthan #ExamCalendar #GovernmentJobs ", title: { default:" RSMSSB Exam Calendar 2024-25: Your Guide to Upcoming Recruitment Tests| sarkariresult.website ",      template: `%s | sarkarresult.website`   },openGraph: {description: 'apply for online goverment jobs find the details of the goverment jobs', openGraphImage:{image:["/public/logo.png"]} }};export default function admitCardLayout({ children }) { return (<><section className="text-center overflow-y-scroll">{children}</section><section><SinglePageKeywords/></section> </>   );}