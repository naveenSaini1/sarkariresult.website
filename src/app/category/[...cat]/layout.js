import { BASE_URL } from "@/constant/ClientUrl";


export const generateMetadata = ({params}) => {
  const pageTitle = `${params.cat} | Sarkari Result`;
  const pageDescription = `Find the latest ${params.cat} jobs  Access exams. Stay updated with the latest notifications and guidelines.`;

  return {
    metadataBase: new URL(BASE_URL+"/"+params.cat),
    keywords: ["state job", "Center government jobs", "Hall tickets", "Admit card", "answer keys", "all India jobs", params.cat],
    title: {
      default: `${params.cat} | Sarkari Result`,
      template: "%s | Sarkari Result",
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      openGraphImage: { image: ["/public/logo.png"] },
    }
  };
};
  export default function admitCardLayout({ children }) {
    return (
        <>
              {children}
        </>
    );
  }
  