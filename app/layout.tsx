import "./globals.css";
import Script from 'next/script'

export const metadata = {
  title: "David Light | Beyond Anxious Thoughts - Coaching for Lasting Peace",
  description: ".",
};

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'AW-17286433267';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {/* Only load in production */}
        {process.env.NODE_ENV === 'production' && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}');
              `}
            </Script>
          </>
        )}
        {children}
      </body>
    </html>
  );
}
