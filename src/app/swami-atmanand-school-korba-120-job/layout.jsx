import { BASE_URL } from "@/constant/ClientUrl";import SinglePageKeywords from "@/components/Keywords/SinglePageKeyword"; export const metadata = {metadataBase:new URL(BASE_URL + "/ swami-atmanand-school-korba-120-job"),keywords:["Swami Atmanand School", "Korba", "Recruitment", "Lecturer", "Teacher", "Vacancy", "Application", "Eligibility", "Age Limit", "Important Dates", "Notification", "Apply Online", "Contract Basis", "Teaching Positions", "Administrative Positions", "Educational Institute", "Government School", "English Medium", "Utkrisht", "Online Application"], description:" Swami Atmanand School, Korba is hiring! Apply for 120 Lecturer, Teacher & other positions.  Apply online from 12-11-2024 to 26-11-2024.  Find vacancy details, eligibility criteria, and important dates here. ", title: { default:" Swami Atmanand School, Korba: 120+ Jobs Open - Apply Online Now (2024)| sarkariresult.website ",      template: `%s | sarkarresult.website`   },openGraph: {description: 'apply for online goverment jobs find the details of the goverment jobs', openGraphImage:{image:["/public/logo.png"]} }};export default function admitCardLayout({ children }) { return (<><section className="text-center overflow-y-scroll">{children}</section><section><SinglePageKeywords/></section> </>   );}