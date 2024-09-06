import { BASE_URL, clientEndPoints } from "@/constant/ClientUrl";


export const metadata = {
  metadataBase:new URL(BASE_URL+clientEndPoints.answerKey),
  keywords:["Answer key ","sarkari examps answer key "," ssc cgl goverments exam answer key"," all exam answer keys"," new jobs answer key","all india jobs"],
  title: {
    default:"Answer Key | sarkariresult",
    template:"%s | sarkariresult"
  },
  openGraph: {
    description: 'Find and download the latest answer keys for your exams. Verify your answers and assess your performance accurately.',
    openGraphImage:{image:["/public/logo.png"]}
  }
};
  export default function AnswerKeyLayout({ children }) {
    return (
        <>
              {children}
        </>
    );
  }
  