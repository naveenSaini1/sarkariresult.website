import { BASE_URL } from "@/constant/ClientUrl";import SinglePageKeywords from "@/components/Keywords/SinglePageKeyword"; export const metadata = {metadataBase:new URL(BASE_URL + "/ ordnance-factory-bhandara-94-danger"),keywords:["Ordnance Factory Bhandara", "Danger Building Worker", "Recruitment", "2024", "Vacancies", "Application", "Eligibility", "Age Limit", "Qualification", "ITI", "NCTVT", "Tenure Basis", "Important Dates", "Last Date", "Notification", "Official Website", "ddpdoo.gov.in", "Free Job Alert", "FAQs", "Keywords"], description:" Ordnance Factory Bhandara is hiring Danger Building Workers! Apply by 23-11-2024 for 94 vacancies. ITI (NCTVT) required. Learn about eligibility, application process, and important dates. ", title: { default:" Ordnance Factory Bhandara: 94 Danger Building Worker 2024 Offline Form Available| sarkariresult.website ",      template: `%s | sarkarresult.website`   },openGraph: {description: 'apply for online goverment jobs find the details of the goverment jobs', openGraphImage:{image:["/public/logo.png"]} }};export default function admitCardLayout({ children }) { return (<><section className="text-center overflow-y-scroll">{children}</section><section><SinglePageKeywords/></section> </>   );}