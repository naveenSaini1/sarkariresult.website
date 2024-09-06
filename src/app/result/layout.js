import { BASE_URL, clientEndPoints } from "@/constant/ClientUrl";


export const metadata = {
  metadataBase:new URL(BASE_URL+clientEndPoints.result),
  keywords:["sarkariresult result ","sarkariresult website result "," result sarkari result"," result goverment jobs"," result free job alert","haryanan Jobs","center jobs results","all state jobs results"],
  title: {
    default:"Result | sarkariresult",
    template:"%s | sarkariresult"
  },
  openGraph: {
    description: 'sarkariresult.website Get The your latest released result of govrment exams and state jobs result and the center job results',
    openGraphImage:{image:["/public/logo.png"]}
  }
};
  export default function ResultLayout({ children }) {
    return (
        <>
        {children}
         </>
    );
  }
  