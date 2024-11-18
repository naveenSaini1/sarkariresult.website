import { BASE_URL } from "@/constant/ClientUrl";import SinglePageKeywords from "@/components/Keywords/SinglePageKeyword"; export const metadata = {metadataBase:new URL(BASE_URL + "/ ukpsc-various-vacancies-2023-main-e"),keywords:["UKPSC", "Uttarakhand Public Service Commission", "Recruitment", "Agriculture", "Horticulture", "Assistant Agriculture Officer", "Horticulture Supervisor", "Horticulture Inspector", "Assistant Training Officer", "Assistant Plant Protection Officer", "Vacancy", "Jobs", "Government Jobs", "India", "Apply Online", "Exam", "Admit Card", "Result", "Notification", "Official Website"], description:" UKPSC has announced recruitment for various positions including Assistant Agriculture Officer, Horticulture Supervisor, and more! Apply online by 27-10-2023 for 645 vacancies. Get the details and important dates on the official website. ", title: { default:" UKPSC Various Vacancies 2023 Main Exam Results Announced!| sarkariresult.website ",      template: `%s | sarkarresult.website`   },openGraph: {description: 'apply for online goverment jobs find the details of the goverment jobs', openGraphImage:{image:["/public/logo.png"]} }};export default function admitCardLayout({ children }) { return (<><section className="text-center overflow-y-scroll">{children}</section><section><SinglePageKeywords/></section> </>   );}