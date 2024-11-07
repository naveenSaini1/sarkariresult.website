import { BASE_URL } from "@/constant/ClientUrl";import SinglePageKeywords from "@/components/Keywords/SinglePageKeyword"; export const metadata = {metadataBase:new URL(BASE_URL + "/ idbi-bank-hiring-1000-executives-ap"),keywords:["IDBI Bank", "Executive", "Sales", "Operations", "ESO", "Recruitment", "Job", "Vacancy", "Application", "Online", "Form", "2024", "Eligibility", "Qualification", "Age Limit", "Important Dates", "Apply Online", "Notification", "Official Website", "FAQs"], description:" IDBI Bank is hiring for Executive – Sales and Operations (ESO)! Apply now for 1000+ vacancies. Learn about eligibility, age limits, important dates, and how to apply.  Don't miss this opportunity to join IDBI Bank! ", title: { default:" IDBI Bank Hiring 1000 Executives: Apply Online Now for 2024!| sarkariresult.website ",      template: `%s | sarkarresult.website`   },openGraph: {description: 'apply for online goverment jobs find the details of the goverment jobs', openGraphImage:{image:["/public/logo.png"]} }};export default function admitCardLayout({ children }) { return (<><section className="text-center overflow-y-scroll">{children}</section><section><SinglePageKeywords/></section> </>   );}