import { BASE_URL } from "@/constant/ClientUrl";export const metadata = {metadataBase:new URL(BASE_URL + "/ rrb-ntpc-2024-online-applications-open-undergradua"),keywords:["sarkariresult","sarkariresult website","sarkari result","goverment jobs","free job alert","haryanan Jobs"], title: { default:" RRB NTPC 2024: Online Applications Open for Undergraduate Candidates| sarkariresult.website ",      template: `%s | sarkarresult.website`   },openGraph: {description: 'apply for online goverment jobs find the details of the goverment jobs', openGraphImage:{image:["/public/logo.png"]} }};export default function admitCardLayout({ children }) { return (<><section className="text-center overflow-y-scroll">{children}</section> </>   );}