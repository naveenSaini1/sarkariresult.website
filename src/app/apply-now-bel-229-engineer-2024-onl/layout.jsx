import { BASE_URL } from "@/constant/ClientUrl";import SinglePageKeywords from "@/components/Keywords/SinglePageKeyword"; export const metadata = {metadataBase:new URL(BASE_URL + "/ apply-now-bel-229-engineer-2024-onl"),keywords:["BEL", "Bharat Electronics Limited", "Engineer", "Recruitment", "2024", "Jobs", "Application", "Vacancy", "Online Form", "BE/B.Tech/B.Sc", "Electronics", "Mechanical", "Computer Science", "Electrical", "Fixed Tenure", "Application Fee", "Important Dates", "Age Limit", "Eligibility Criteria", "Online Application"], description:" BEL Engineer Recruitment 2024 is open! Apply by 10-12-2024 for 229 vacancies.  BE/B.Tech/B.Sc required.  Details on application process, fees, eligibility, and important dates are available. Apply now! ", title: { default:" Apply Now: BEL 229 Engineer 2024 Online Application| sarkariresult.website ",      template: `%s | sarkarresult.website`   },openGraph: {description: 'apply for online goverment jobs find the details of the goverment jobs', openGraphImage:{image:["/public/logo.png"]} }};export default function admitCardLayout({ children }) { return (<><section className="text-center overflow-y-scroll">{children}</section><section><SinglePageKeywords/></section> </>   );}