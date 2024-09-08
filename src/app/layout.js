import WebsiteTitile from "@/components/mainHeadner/WebsiteTitile";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";
import LogoHeaderSection from "@/components/logoHeaderSection/LogoHeaderSection";
import Footer from "@/components/Footer/Footer";
import { BASE_URL } from "@/constant/ClientUrl";
import GoogleAnalytics from "@/components/GoogleAnalytics/GoogleAnalytics";
import Social from "@/components/SocialMedaiAccounts/Social";


export const metadata = {
  metadataBase: new URL(BASE_URL),
  keywords: ["sarkariresult","Sarkari Result Website","Sarkari Jobs","Government Jobs in India", "sarkariresult website", "sarkari result", "goverment jobs", "free job alert", "haryanan Jobs"],
  title: {
    default: "Home | sarkariresult",
    template: "%s | sarkariresult"
  },
  openGraph: {
    description: 'arkari Result website offers essential resources for government jobs in India. Explore detailed job listings and exam information for Sarkari Naukri.',
    openGraphImage: { image: ["/public/logo.png"] }
  }
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">



      <body>
        <Social/>
        <WebsiteTitile />
        <NavBar />
        <LogoHeaderSection />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics />

    </html>
  );
}
