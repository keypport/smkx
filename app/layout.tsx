import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import ImageAlertDialog from '@/components/image-alert-dialog'
import { Image } from '@/interfaces'
import NextImage from 'next/image'
import _, { Dictionary } from 'lodash'
import TableSliderAlertDialog from '@/components/table-slider-alert-dialog'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SMKX',
  description: '2024 서울 기계식 키보드 엑스포',
  icons: {
    icon: `https://i.imgur.com/PsTFWma.jpg`,
    shortcut: `https://i.imgur.com/PsTFWma.jpg`,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const gaId = 'G-J7T26EBV3J';
  const sizes = 'h-full';
  const scheduleImage: Image = require('/public/schedule-image.json');
  const scheduleLocation = 'bottom-0 right-[270px] md:right-[330px]';
  const mapImage: Image = require('/public/map-image.json');
  const mapLocation = `bottom-0 w-20 right-[190px] md:right-[230px]`;
  const prizes: Array<Dictionary<String>> = require('/public/prize.json');
  const prizeGroupByTime = _.groupBy(prizes, '시간');
  const prizeTables = Object.entries(prizeGroupByTime).map(([time, table]) => table);
  const prizeAlertLocation = 'bottom-0 right-[110px] md:right-[140px]'; 
  const products: Array<Dictionary<String>> = require('/public/product.json');
  const prdouctGroupByTime = _.groupBy(products, '시간');
  const productTables = Object.entries(prdouctGroupByTime).map(([time, table]) => table);
  const productAlertLocation = 'bottom-0 right-[20px] md:right-[40px]'
  
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
      <body className={`${inter.className} bg-stone-100`}>
        <div className="max-w-7xl mx-auto">
          <div className='flex flex-row gap-3 md:gap-4 items-center justify-center leading-8 px-0 md:px-4 py-2 md:py-4 mb-4 border-b-2 box-border border-stone-200'>
            <NextImage src="https://i.imgur.com/NCuLYSW.png" width={64} height={64} alt={"서울 기계식 키보드 엑스포 로고"} />         
            <div className='items-center justify-center grid gap-1 md:gap-3 text-center text-lg md:text-3xl font-bold text-sky-700'>
              <div>
                2024 서울 기계식 키보드 엑스포
              </div>
              <div className="text-base md:text-2xl text-sky-500">
                {'[ Seoul Mechanical Keyboard Expo ]'}
              </div>
            </div>
          </div>
          <div className='grid'>
            <div className="text-sm md:text-lg text-stone-400 font-bold justify-self-end px-2 pb-2">
              @ 2024.01.06 SETEC 1 전시실
            </div>
          </div>
          {children}
        </div>

        <ImageAlertDialog buttonName={{kr: '일정표', en: 'Schedule'}} image={scheduleImage} location={scheduleLocation} />
        <ImageAlertDialog buttonName={{kr: '배치도', en: 'Map'}} image={mapImage} location={mapLocation} />
        <TableSliderAlertDialog tables={prizeTables} sizes={sizes} buttonName={{kr: '경품', en: 'Prize'}} location={prizeAlertLocation} />
        <TableSliderAlertDialog tables={productTables} sizes={sizes} buttonName={{kr: '한정판', en: 'Raffle'}} location={productAlertLocation} />
      </body>
    </html>
  )
}
