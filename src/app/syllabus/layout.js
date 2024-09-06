import { BASE_URL, clientEndPoints } from "@/constant/ClientUrl";


export const metadata = {
    metadataBase:new URL(BASE_URL+clientEndPoints.syllabus),
    keywords:["exams syllabus ","sarkari examps syllabus "," ssc cgl goverments exam syllabus"," all exam syllabus"," new jobs syllabus","all india jobs"],
    title: {
      default:"ASyllabus | sarkariresult",
      template:"%s | sarkariresult"
    },
    openGraph: {
      description: 'Find and download the latest syllabus for your exams. Verify your syllabus and assess your performance accurately.',
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
