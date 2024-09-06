import { BASE_URL } from "@/constant/ClientUrl";


export const generateMetadata = ({params}) => {
  const pageTitle = `${params.query} | Sarkari Result`;
  const pageDescription = `Find the latest ${params.query} jobs  Access exams. Stay updated with the latest notifications and guidelines.`;

  return {
    metadataBase: new URL(BASE_URL+"/"+params.query),
    keywords: ["state job", "Center government jobs", "Hall tickets", "Admit card", "answer keys", "all India jobs", params.query],
    title: {
      default: `${params.query} | Sarkari Result`,
      template: "%s | Sarkari Result",
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      openGraphImage: { image: ["/public/logo.png"] },
    }
  };
};
  export default function SearchPageLayout({ children }) {
    return (
        <>
              {children}
        </>
    );
  }
  