import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SMKX',
  description: '2024 서울 기계식 키보드 엑스포',
  icons: {
    icon: `/smkx/favicon.ico`,
    shortcut: `/smkx/favicon.ico`,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const gaId = 'G-J7T26EBV3J';
  return (
    <html lang="en">
      <head>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${gaId}');
          `}
        </Script>
      </head>
      <body className={`${inter.className} bg-stone-50`}>
        <div className="max-w-7xl mx-auto">
          <div className='text-center text-3xl font-semibold leading-8 p-4 md:p-12'>
            2024 서울 기계식 키보드 엑스포
          </div>
          {children}
        </div>;
      </body>
    </html>
  )
}
