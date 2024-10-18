import { BASE_URL } from "@/constant/ClientUrl";import SinglePageKeywords from "@/components/Keywords/SinglePageKeyword"; export const metadata = {metadataBase:new URL(BASE_URL + "/ aiims-bhopal-senior-resident-2024-i"),keywords:["AIIMS Recruitment", "AIIMS Jobs", "Senior Resident", "Junior Resident", "Faculty", "AIIMS Raebareli", "AIIMS Nagpur", "AIIMS Gorakhpur", "AIIMS Bilaspur", "AIIMS Deoghar", "AIIMS Raipur", "Medical Jobs", "Healthcare Jobs", "Application Fee", "Important Dates", "Vacancy Details", "Online Application", "Offline Application", "Walk-in Interview", "Job Opportunities"], description:" Discover the latest AIIMS recruitment opportunities for Senior Resident, Junior Resident, Faculty and more across different locations. Find post dates, vacancies, application fees, important dates and vacancy details for each position. ", title: { default:" AIIMS Bhopal Senior Resident 2024 Interview Results: Find Out If You Made the Cut| sarkariresult.website ",      template: `%s | sarkarresult.website`   },openGraph: {description: 'apply for online goverment jobs find the details of the goverment jobs', openGraphImage:{image:["/public/logo.png"]} }};export default function admitCardLayout({ children }) { return (<><section className="text-center overflow-y-scroll">{children}</section><section><SinglePageKeywords/></section> </>   );}