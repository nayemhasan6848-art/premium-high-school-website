import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Elite Academy | Premium Education for Tomorrow\'s Leaders',
  description: 'Discover Elite Academy - a premier high school dedicated to academic excellence, innovation, and character development. Join 1500+ students on their journey to success.',
  keywords: 'high school, education, academy, admission, academics, excellence',
  metadataBase: new URL('https://eliteacademy.edu'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://eliteacademy.edu',
    title: 'Elite Academy | Premium Education for Tomorrow\'s Leaders',
    description: 'Discover Elite Academy - a premier high school dedicated to academic excellence, innovation, and character development.',
    images: [{
      url: 'https://images.unsplash.com/photo-1523050854058-7df90110b8f7?w=1200&h=630&fit=crop',
      width: 1200,
      height: 630,
      alt: 'Elite Academy Campus',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elite Academy',
    description: 'Premium high school education',
    images: ['https://images.unsplash.com/photo-1523050854058-7df90110b8f7?w=1200&h=630&fit=crop'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0F172A" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'EducationalOrganization',
              name: 'Elite Academy',
              url: 'https://eliteacademy.edu',
              logo: 'https://eliteacademy.edu/logo.png',
              description: 'Premier high school dedicated to academic excellence',
              foundingDate: '1995',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'US',
              },
              numberOfStudents: 1500,
              graduationRate: 0.98,
            })
          }}
        />
      </head>
      <body className="bg-white text-gray-900 font-poppins overflow-x-hidden">
        <Navbar />
        <main className="relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
