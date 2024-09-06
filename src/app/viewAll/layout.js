import { BASE_URL, clientEndPoints } from "@/constant/ClientUrl";


export const metadata = {
    metadataBase:new URL(BASE_URL+clientEndPoints.viewAll),
    keywords:["sarkariresult","sarkariresult website","sarkari result","goverment jobs","free job alert","haryanan Jobs"],
    title: {
      default:"View All",
      template:"%s | sarkariresult"
    },
    openGraph: {
      description: 'apply for online goverment jobs find the details of the goverment jobs',
      openGraphImage:{image:["/public/logo.png"]}
    }
  };
  
export default function SyllabusLayout({ children }) {
    return (
        <>
            {children}
        </>
    );
}
