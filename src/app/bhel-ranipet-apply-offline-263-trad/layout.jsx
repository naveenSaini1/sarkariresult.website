import { BASE_URL } from "@/constant/ClientUrl";import SinglePageKeywords from "@/components/Keywords/SinglePageKeyword"; export const metadata = {metadataBase:new URL(BASE_URL + "/ bhel-ranipet-apply-offline-263-trad"),keywords:["BHEL", "Ranipet", "Trade Apprentice", "Recruitment", "2024", "Apprenticeship", "Vacancy", "Apply Online", "Fitter", "Welder", "Electrician", "Turner", "Machinist", "Motor Mechanic", "AC & Refrigeration Mechanic", "Instrument Mechanic", "Plumber", "Carpenter", "Apprenticeship India", "BHEL Ranipet"], description:" BHEL Ranipet is hiring Trade Apprentices for 2025-26! Apply by November 8th for 263 vacancies in various trades. Find notification, application link and official website details here. ", title: { default:" BHEL Ranipet: Apply Offline for 263 Trade Apprentice Posts in 2024| sarkariresult.website ",      template: `%s | sarkarresult.website`   },openGraph: {description: 'apply for online goverment jobs find the details of the goverment jobs', openGraphImage:{image:["/public/logo.png"]} }};export default function admitCardLayout({ children }) { return (<><section className="text-center overflow-y-scroll">{children}</section><section><SinglePageKeywords/></section> </>   );}