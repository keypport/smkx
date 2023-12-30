import { Company } from '@/interfaces';
import Image from 'next/image';
import Link from 'next/link';

export default function Card({
    company
}: {
    company: Company
}) {

  const displayProducts = company['전시 제품'].split(',');
  const saleProducts = company['판매 제품'].split(',');
  const giveaways = company['경품'].split(',');
  const events = company['부스 이벤트'].split(',');

  let bgColor = 'bg-cyan-400';
  switch(company['카테고리']) {
    case '키보드': {
      bgColor = 'bg-cyan-400';
      break;
    }
    case '아티산': {
      bgColor = 'bg-teal-400';
      break;
    }
    default: {
      bgColor = 'bg-slate-400';
    }
  }

  return (
    <div className="max-w-lg text-black">
      <div className={`shadow-xl rounded-lg py-3 bg-white`}>
        <div className={`photo-wrapper pt-2`}>
          <Image className="rounded-full mx-auto" width={128} height={128} src={company['썸네일']} alt="업체" />
        </div>
        <div className="p-6 md:p-8 pt-2 md:pt-4">
          <h3 className={`text-center text-base md:text-base font-semibold leading-8`}>
            {company.업체}
          </h3>
          <h3 className="text-center text-base md:text-base leading-8 pt-0 pb-4 md:pt-2 md:pb-6">
            <Link href={`${company.링크}`} target="_blank">
              <button className={`${bgColor} hover:bg-blue-700 text-xs text-white font-bold py-2 px-4 rounded`}>
                링크 (Link)
              </button>
            </Link>
          </h3>
          <div className="grid gap-2 md:gap-4 text-xs md:text-sm">
            <div className="flex flex-row gap-2 md:gap-4">
                <div className='flex-none w-20 font-semibold'>부스 위치 (Booth)</div>
                <div className='flex-auto'>{company['부스 위치']}</div>
            </div>
            <div className="flex flex-row gap-2 md:gap-4">
                <div className='flex-none w-20 font-semibold'>전시 제품 (Exhibition)</div>
                <div className='flex-auto grid gap-1'>
                  { displayProducts.map((product, index) => {
                    return (
                      <div key={index}>{product}</div>
                    )
                  })}
                </div>
            </div>
            <div className="flex flex-row gap-2 md:gap-4">
                <div className='flex-none w-20 font-semibold'>판매 제품 (Sale)</div>
                <div className='flex-auto grid gap-1'>
                    {
                      saleProducts.map((product, index) => {
                        return (
                          <div key={index}>{product}</div>
                        )
                      })
                    }
                </div>
            </div>
            <div className="flex flex-row gap-2 md:gap-4">
                <div className='flex-none w-20 font-semibold'>경품<br/>(Prize)</div>
                <div className='flex-auto grid gap-1'>
                  {
                    giveaways.map((giveaway, index) => {
                      return (
                        <div key={index}>{giveaway}</div>
                      )
                    })
                  }
                </div>
            </div>
            <div className="flex flex-row gap-2 md:gap-4">
                <div className='flex-none w-20 font-semibold'>이벤트<br/>(Event)</div>
                <div className='flex-auto grid gap-1'>
                  {
                    events.map((event, index) => {
                      return (
                        <div key={index}>{event}</div>
                      )
                    })
                  }
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
