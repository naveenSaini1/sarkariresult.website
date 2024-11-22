import { BASE_URL } from "@/constant/ClientUrl";import SinglePageKeywords from "@/components/Keywords/SinglePageKeyword"; export const metadata = {metadataBase:new URL(BASE_URL + "/ rrb-paramedical-cen-04-2024-applica"),keywords:["RRB Paramedical", "Recruitment 2024", "Application Status", "CEN 04/2024", "Railway Jobs", "Paramedical Staff", "Vacancies", "India", "Railway Recruitment Board", "RRB Apply", "Nursing Superintendent", "Pharmacist", "Health Inspector", "Lab Technician", "Radiographer", "Dietician", "Physiotherapist", "Important Dates", "Selection Process", "Application Link"], description:" Railway Recruitment Board (RRB) announces Paramedical Staff recruitment (CEN 04/2024)! 1376 vacancies available. Application status released on Nov 22, 2024. Check your status & key dates now!  Apply at rrbapply.gov.in ", title: { default:" RRB Paramedical CEN 04/2024 Application Status Released| sarkariresult.website ",      template: `%s | sarkarresult.website`   },openGraph: {description: 'apply for online goverment jobs find the details of the goverment jobs', openGraphImage:{image:["/public/logo.png"]} }};export default function admitCardLayout({ children }) { return (<><section className="text-center overflow-y-scroll">{children}</section><section><SinglePageKeywords/></section> </>   );}