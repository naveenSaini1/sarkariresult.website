import { BASE_URL } from "@/constant/ClientUrl";export const metadata = {metadataBase:new URL(BASE_URL + "/ indian-bank-300-local-bank-officer-posts-open-appl"),keywords:["sarkariresult","sarkariresult website","sarkari result","goverment jobs","free job alert","haryanan Jobs"], title: { default:" Indian Bank: 300 Local Bank Officer Posts Open - Apply Online Now!| sarkariresult.website ",      template: `%s | sarkarresult.website`   },openGraph: {description: 'apply for online goverment jobs find the details of the goverment jobs', openGraphImage:{image:["/public/logo.png"]} }};export default function admitCardLayout({ children }) { return (<><section className="text-center overflow-y-scroll">{children}</section> </>   );}