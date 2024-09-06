import Script from "next/script";

export default function GoogleAnalytics() {
    return (
        <>
            <Script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-FWZB6M2TLS">
            </Script>
            <Script>

                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-FWZB6M2TLS');
            
            `}
            </Script>
        </>
    )
}
