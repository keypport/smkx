import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SMKX',
  description: '2024 서울 기계식 키보드 엑스포',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
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
