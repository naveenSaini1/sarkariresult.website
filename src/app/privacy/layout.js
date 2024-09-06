import { BASE_URL, clientEndPoints } from "@/constant/ClientUrl";


export const metadata = {
  metadataBase:new URL(BASE_URL+clientEndPoints.privacy),
  keywords:["sarkariresult privacy ","sarkariresult website privacy "," privacy sarkari result"," privacy goverment jobs"," privacy free job alert","haryanan Jobs","center jobs","all state jobs form"],
  title: {
    default:"Privacy | sarkariresult",
    template:"%s | sarkariresult"
  },
  openGraph: {
    description: 'sarkariresult.website  your privacy is our priority. Our Privacy Policy outlines how we collect, use, store, and protect your personal information. We ensure that all data is handled securely and in compliance with applicable laws. By using our website, you agree to the terms described in this policy. Your trust is important to us, and we are committed to maintaining the confidentiality and security of your information.',
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
  