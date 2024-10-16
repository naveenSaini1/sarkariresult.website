import { BASE_URL } from "@/constant/ClientUrl";import SinglePageKeywords from "@/components/Keywords/SinglePageKeyword"; export const metadata = {metadataBase:new URL(BASE_URL + "/ punjab-tet-pstet-2024-notice-releas"),keywords:["PSTET", "Punjab TET", "Teacher Eligibility Test", "Punjab", "SCERT", "Education", "Jobs", "Recruitment", "Examination", "Application", "Eligibility", "Dates", "Fees", "Notification", "Apply Online", "Level I", "Level II", "Class 1-5", "Class 6-8", "Vacancy Details"], description:" Complete guide to Punjab Teacher Eligibility Test (PSTET) 2024:  Important dates, eligibility, application fees, & online application process.  Find notification & links for PSTET 2024 exam. ", title: { default:" Punjab TET (PSTET) 2024 Notice Released: Apply Now!| sarkariresult.website ",      template: `%s | sarkarresult.website`   },openGraph: {description: 'apply for online goverment jobs find the details of the goverment jobs', openGraphImage:{image:["/public/logo.png"]} }};export default function admitCardLayout({ children }) { return (<><section className="text-center overflow-y-scroll">{children}</section><section><SinglePageKeywords/></section> </>   );}