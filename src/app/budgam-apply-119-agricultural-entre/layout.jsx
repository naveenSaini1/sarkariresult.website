import { BASE_URL } from "@/constant/ClientUrl";import SinglePageKeywords from "@/components/Keywords/SinglePageKeyword"; export const metadata = {metadataBase:new URL(BASE_URL + "/ budgam-apply-119-agricultural-entre"),keywords:["Krishi Udyami", "Agricultural Entrepreneur", "Office of the Dy Commissioner", "Budgam", "Recruitment", "Jobs", "Vacancies", "Application", "Eligibility", "Age Limit", "Qualification", "Last Date", "Diploma", "B.Sc", "BVSc", "PG", "Science Agri", "Allied", "Notification", "Official Website"], description:" The Office of the Dy Commissioner, Budgam is hiring 119 Krishi Udyami/Agricultural Entrepreneurs. Apply by 26-11-2024 if you have a Diploma, Degree, or PG in relevant fields.  Learn about eligibility, age limits, and other details in this comprehensive guide. ", title: { default:" Budgam: Apply for 119 Agricultural Entrepreneur Scheme (Offline Forms)| sarkariresult.website ",      template: `%s | sarkarresult.website`   },openGraph: {description: 'apply for online goverment jobs find the details of the goverment jobs', openGraphImage:{image:["/public/logo.png"]} }};export default function admitCardLayout({ children }) { return (<><section className="text-center overflow-y-scroll">{children}</section><section><SinglePageKeywords/></section> </>   );}