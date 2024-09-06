import { BASE_URL, clientEndPoints } from "@/constant/ClientUrl";


export const metadata = {
  metadataBase:new URL(BASE_URL+clientEndPoints.admitCard),
  keywords:["sarkariresult Admit card ","goverment jobs Admit Card "," Hall tickets"," Admit card"," new jobs admit card","all india jobs"],
  title: {
    default:"Admit-Card | sarkariresult",
    template:"%s | sarkariresult"
  },
  openGraph: {
    description: 'Easily access and download your admit card or hall ticket for exams. Stay updated with the latest notifications and guidelines.',
    openGraphImage:{image:["/public/logo.png"]}
  }
};
  export default function admitCardLayout({ children }) {
    return (
        <>
              {children}
        </>
    );
  }
  