import { BASE_URL } from "@/constant/ClientUrl";export const metadata = {metadataBase:new URL(BASE_URL + "/ nlc-india-ltd-505-apprentice-opportunities-graduat"),keywords:["sarkariresult","sarkariresult website","sarkari result","goverment jobs","free job alert","haryanan Jobs"], title: { default:" **NLC India Ltd: 505 Apprentice Opportunities (Graduate & Diploma) - Apply Now!**| sarkariresult.website ",      template: `%s | sarkarresult.website`   },openGraph: {description: 'apply for online goverment jobs find the details of the goverment jobs', openGraphImage:{image:["/public/logo.png"]} }};export default function admitCardLayout({ children }) { return (<><section className="text-center overflow-y-scroll">{children}</section> </>   );}