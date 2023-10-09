import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'STOFFSPOT | COMMING SOON',
  description: 'StoffSpot is a online marketplace for buying and selling clothing, offering a diverse range of options to refresh your wardrobe or turn worn garments into cash.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const addJsonLd = () => {
    return {
      __html: `{
      "@context": "https://schema.org",
  "@type": "ShoppingCenter",
  "name": "Stoffspot Private Limited",
  "image": "https://stoffspot.com/Assets/lOGO-01.webp",
  "title": "STOFFSPOT | COMMING SOON Your One-Stop Exchange Marketplace Shop, Swap and Save",
  "description": "StoffSpot is a online marketplace for buying and selling clothing, offering a diverse range of options to refresh your wardrobe or turn worn garments into cash.",
  "url": "https://stoffspot.com/",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Nr Hanuman Nagar Bhandup",
    "addressLocality": "Mumbai",
    "postalCode": "400078",
    "addressCountry": "IN"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "sameAs": [
    "https://www.linkedin.com/company/stoffspot-private-limited/",
    "https://www.instagram.com/stoff_spot/?igshid=MWZjMTM2ODFkZg%3D%3D"
  ] 
      }
      `
    }

    
  }
  return (
    <html lang="en">
      <head>
      <link
            href="https://fonts.googleapis.com/css2?family=Abhaya+Libre&display=swap"
            rel="stylesheet"
          />
        <link rel='icon' href='https://stoffspot.com/Assets/lOGO-01.webp' />
        <meta name="google-site-verification" content="9V1wd7g77Y9gGLlgJlia3CCJ2qI8DOFholXrXgB6Ilw" />
        <meta property="og:title" content="STOFFSPOT | COMMING SOON" />
        <meta property="og:site_name" content="STOFFSPOT" />
        <meta property="og:url" content="https://stoffspot.com/" />
        <meta property="og:description" content="StoffSpot is a online marketplace for buying and selling clothing, offering a diverse range of options to refresh your wardrobe or turn worn garments into cash." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://stoffspot.com/Assets/lOGO-01.webp" />
        <meta property="og:image" content="https://stoffspot.com/Assets/lOGO-02.webp" />
        <meta property="og:image" content="https://stoffspot.com/Assets/lOGO-03.webp" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="STOFFSPOT | COMMING SOON" />
        <meta name="twitter:image" content="https://stoffspot.com/Assets/lOGO-01.webp" />
        <meta name="twitter:image" content="https://stoffspot.com/Assets/lOGO-02.webp" />
        <meta name="twitter:image" content="https://stoffspot.com/Assets/lOGO-03.webp" />
        <meta name="twitter:site" content="@StoffSpot" />
        <meta name="twitter:description" content="StoffSpot is a online marketplace for buying and selling clothing, offering a diverse range of options to refresh your wardrobe or turn worn garments into cash." />
        <meta name="twitter:app:country" content="India"></meta>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addJsonLd()}
          key="product-jsonld"
        />
        <link rel="canonical" href="https://stoffspot.com/" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}