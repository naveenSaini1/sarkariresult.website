import { BASE_URL } from "@/constant/ClientUrl";import SinglePageKeywords from "@/components/Keywords/SinglePageKeyword"; export const metadata = {metadataBase:new URL(BASE_URL + "/ cg-police-constable-2023-pmt-pet-da"),keywords:["Chhattisgarh Police", "Constable", "Recruitment", "2023", "Vacancy", "Job", "Police", "Application", "Apply", "Online", "Eligibility", "Criteria", "Important Dates", "Notification", "Website", "PMT", "PET", "CG Police", "Constable Recruitment", "Law Enforcement"], description:" Chhattisgarh Police Constable Recruitment 2023 is open! Apply now for 5967 vacancies.  Key dates, eligibility, and application details.  Find important links, notification, and official website. Don't miss this opportunity! ", title: { default:" CG Police Constable 2023 PMT/PET Dates Announced!| sarkariresult.website ",      template: `%s | sarkarresult.website`   },openGraph: {description: 'apply for online goverment jobs find the details of the goverment jobs', openGraphImage:{image:["/public/logo.png"]} }};export default function admitCardLayout({ children }) { return (<><section className="text-center overflow-y-scroll">{children}</section><section><SinglePageKeywords/></section> </>   );}