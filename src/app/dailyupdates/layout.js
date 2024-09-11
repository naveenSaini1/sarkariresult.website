import { BASE_URL, clientEndPoints } from "@/constant/ClientUrl";


export const metadata = {
  metadataBase:new URL(BASE_URL+clientEndPoints.contact),
  keywords:["sarkari result website ","sarkariresult website daily updates "," dayly updates of goverment exams"," contact"," get current notfication of jobs","all state and center notification jobs","daily job updates"],
  title: {
    default:"Daily Update | sarkariresult",
    template:"%s | sarkariresult"
  },
  openGraph: {
    description: 'get the latest notification and update everyday for new goverment job opening and their notification ,',
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
  