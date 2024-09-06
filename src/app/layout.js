import WebsiteTitile from "@/components/mainHeadner/WebsiteTitile";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";
import LogoHeaderSection from "@/components/logoHeaderSection/LogoHeaderSection";
import Footer from "@/components/Footer/Footer";
import { BASE_URL } from "@/constant/ClientUrl";
import GoogleAnalytics from "@/components/GoogleAnalytics/GoogleAnalytics";


export const metadata = {
  metadataBase: new URL(BASE_URL),
  keywords: ["sarkariresult", "sarkariresult website", "sarkari result", "goverment jobs", "free job alert", "haryanan Jobs"],
  title: {
    default: "Home | sarkariresult",
    template: "%s | sarkariresult"
  },
  openGraph: {
    description: 'apply for online goverment jobs find the details of the goverment jobs',
    openGraphImage: { image: ["/public/logo.png"] }
  }
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
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
