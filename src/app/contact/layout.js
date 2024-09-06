import { BASE_URL, clientEndPoints } from "@/constant/ClientUrl";


export const metadata = {
  metadataBase:new URL(BASE_URL+clientEndPoints.contact),
  keywords:["sarkariresult website contact us ","sarkariresult website contact detials "," contact to sarkari result"," contact"," about free job alert","haryanan Jobs","center jobs"],
  title: {
    default:"Contact Us | sarkariresult",
    template:"%s | sarkariresult"
  },
  openGraph: {
    description: 'sarkariresult.website simplifies student access to government forms and schemes, offering guidance, updated information, and secure submissions.',
    openGraphImage:{image:["/public/logo.png"]}
  }
};
  export default function ContactLayout({ children }) {
    return (
        <>
        {children}
         </>
    );
  }
  