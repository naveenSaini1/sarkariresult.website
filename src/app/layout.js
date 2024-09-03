import WebsiteTitile from "@/components/mainHeadner/WebsiteTitile";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";
import LogoHeaderSection from "@/components/logoHeaderSection/LogoHeaderSection";
import Footer from "@/components/Footer/Footer";


export const metadata = {
  title: "mysarkarijobs - Home",
  description: "find the lates news here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>
      <WebsiteTitile/>
      <NavBar/>
      <LogoHeaderSection/>
        {children}
        <Footer/>
        </body>

    </html>
  );
}
