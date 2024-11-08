import { BASE_URL } from "@/constant/ClientUrl";import SinglePageKeywords from "@/components/Keywords/SinglePageKeyword"; export const metadata = {metadataBase:new URL(BASE_URL + "/ rpsc-school-lecturer-2024-exam-date"),keywords:["RPSC Recruitment", "Rajasthan Public Service Commission", "RPSC Notifications", "Government Jobs in Rajasthan", "RPSC Exam", "School Lecturer", "Asst Agriculture Officer", "Group Instructor", "Surveyor", "Asst Apprenticeship Advisor", "RPSC Online Form", "RPSC Vacancy", "RPSC Eligibility", "Application Fee", "Important Dates", "Age Limit", "Qualification", "Latest Update", "Competitive Exams", "Rajasthan Government"], description:" Find latest Rajasthan Public Service Commission (RPSC) recruitment notifications for various posts like School Lecturer, Asst Agriculture Officer, Group Instructor, Surveyor, and more. Get details on eligibility, application process, and important dates.  Apply now! ", title: { default:" RPSC School Lecturer 2024 Exam Date Announced: Mark Your Calendars!| sarkariresult.website ",      template: `%s | sarkarresult.website`   },openGraph: {description: 'apply for online goverment jobs find the details of the goverment jobs', openGraphImage:{image:["/public/logo.png"]} }};export default function admitCardLayout({ children }) { return (<><section className="text-center overflow-y-scroll">{children}</section><section><SinglePageKeywords/></section> </>   );}