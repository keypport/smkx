import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import MapAlertDialog from '@/components/map-alert-dialog'

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
          <div className='grid gap-1 md:gap-3 text-center text-xl md:text-3xl font-bold leading-8 p-2 md:p-4 mb-4 text-sky-800 border-b-2 box-border'>
            2024 서울 기계식 키보드 엑스포
            <div className="text-lg md:text-2xl">
              {`[ Seoul Mechanical Keyboard Expo ]`}
            </div>
          </div>
          {children}
        </div>
        <MapAlertDialog />
      </body>
    </html>
  )
}
