import { BASE_URL, clientEndPoints } from "@/constant/ClientUrl";





export const metadata = {
  metadataBase:new URL(BASE_URL+clientEndPoints.about),
  keywords:["sarkariresult about ","sarkariresult website about "," about sarkari result"," about goverment jobs"," about free job alert","haryanan Jobs"],
  title: {
    default:"About | sarkariresult",
    template:"%s | sarkariresult"
  },
  openGraph: {
    description: 'sarkariresult.website simplifies student access to government forms and schemes, offering guidance, updated information, and secure submissions.',
    openGraphImage:{image:["/public/logo.png"]}
  }
};
  
  export default function AboutLayout({ children }) {
    return (
        <>
        {children}
         </>
    );
  }
  