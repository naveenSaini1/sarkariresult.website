import { BASE_URL } from "@/constant/ClientUrl";import SinglePageKeywords from "@/components/Keywords/SinglePageKeyword"; export const metadata = {metadataBase:new URL(BASE_URL + "/ uppsc-ro-aro-2023-prelims-exam-new"),keywords:["UPPSC", "RO", "ARO", "Recruitment", "Exam", "Uttar Pradesh", "Public Service Commission", "Review Officer", "Assistant Review Officer", "Notification", "Apply Online", "Important Dates", "Vacancy", "Eligibility", "Qualification", "Application Fee", "Age Limit", "Prelims Exam", "Admit Card", "Official Website"], description:" Get all the details about the UPPSC RO/ARO 2023 recruitment exam including key dates, application fees, qualifications, and vacancy details. Apply online now before the deadline!  #UPPSC #RO #ARO #Recruitment ", title: { default:" UPPSC RO/ARO 2023 Prelims Exam: New Date Announced!| sarkariresult.website ",      template: `%s | sarkarresult.website`   },openGraph: {description: 'apply for online goverment jobs find the details of the goverment jobs', openGraphImage:{image:["/public/logo.png"]} }};export default function admitCardLayout({ children }) { return (<><section className="text-center overflow-y-scroll">{children}</section><section><SinglePageKeywords/></section> </>   );}