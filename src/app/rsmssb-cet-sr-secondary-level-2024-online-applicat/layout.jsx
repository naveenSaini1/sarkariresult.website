import { BASE_URL } from "@/constant/ClientUrl";export const metadata = {metadataBase:new URL(BASE_URL + "/ rsmssb-cet-sr-secondary-level-2024-online-applicat"),keywords:["sarkariresult","sarkariresult website","sarkari result","goverment jobs","free job alert","haryanan Jobs"], title: { default:" RSMSSB CET (Sr Secondary Level) 2024 Online Application Now Open!| sarkariresult.website ",      template: `%s | sarkarresult.website`   },openGraph: {description: 'apply for online goverment jobs find the details of the goverment jobs', openGraphImage:{image:["/public/logo.png"]} }};export default function admitCardLayout({ children }) { return (<><section className="text-center overflow-y-scroll">{children}</section> </>   );}