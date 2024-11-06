import { BASE_URL } from "@/constant/ClientUrl";import SinglePageKeywords from "@/components/Keywords/SinglePageKeyword"; export const metadata = {metadataBase:new URL(BASE_URL + "/ rrc-nr-sports-quota-recruitment-ope"),keywords:["Railway Recruitment", "RRC", "Northern Railway", "Sports Quota", "Recruitment 2024", "Sportsperson", "Jobs", "Government Jobs", "Indian Railways", "RRC NR Delhi", "Sports Quota Vacancy", "Sports Trial", "Medical Examination", "Age Limit", "Qualification", "Application Fee", "Online Application", "Notification PDF", "Apply Online", "Official Website"], description:" Apply for Railway Recruitment Cell (RRC) Northern Railway (NR) Sports Quota Recruitment 2024! 21 vacancies for Sportsperson. Apply online from November 11th to December 11th, 2024. Check eligibility criteria, important dates, and selection process. ", title: { default:" RRC NR Sports Quota Recruitment: Openings for 2024| sarkariresult.website ",      template: `%s | sarkarresult.website`   },openGraph: {description: 'apply for online goverment jobs find the details of the goverment jobs', openGraphImage:{image:["/public/logo.png"]} }};export default function admitCardLayout({ children }) { return (<><section className="text-center overflow-y-scroll">{children}</section><section><SinglePageKeywords/></section> </>   );}