import { BASE_URL } from "@/constant/ClientUrl";import SinglePageKeywords from "@/components/Keywords/SinglePageKeyword"; export const metadata = {metadataBase:new URL(BASE_URL + "/ tripura-125-school-librarian-posts"),keywords:["TRB", "Tripura", "School Librarian", "Recruitment", "2024", "Vacancy", "Application", "Eligibility", "Age Limit", "Qualification", "Important Dates", "Online Application", "Last Date", "Apply", "Exam Fee", "Payment Mode", "Notification", "Post Details", "Vacancy Details", "FAQs"], description:" TRB Tripura School Librarian Recruitment 2024 is open! Apply by 06-12-2024 for 125 vacancies.  Eligibility: Diploma/Degree (Library Science).  Age Limit: Up to 40 years.  Get detailed information, application link, important dates, and FAQs here. ", title: { default:" Tripura 125 School Librarian Posts: Apply Online Now (TRB 2024)| sarkariresult.website ",      template: `%s | sarkarresult.website`   },openGraph: {description: 'apply for online goverment jobs find the details of the goverment jobs', openGraphImage:{image:["/public/logo.png"]} }};export default function admitCardLayout({ children }) { return (<><section className="text-center overflow-y-scroll">{children}</section><section><SinglePageKeywords/></section> </>   );}