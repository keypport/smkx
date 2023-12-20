import _ from 'lodash';
import Card from '@/components/card';
import { Company } from '@/interfaces';

export default function Home() {
  const data: Array<Company> = require('/public/data.json');
  const companyGroups = _.groupBy(data, (company) => company['부스 위치'][0]);
  const zones = Object.keys(companyGroups);

  return (
    <div className='grid gap-4 md:gap-8 lg:gap-12 justify-center'>
      {
        zones.map((zone, zoneIndex) => {
          return (
            <div key={zoneIndex} className={`grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}>
              {
                companyGroups[zone].map((comapny, index) => {
                  return (
                    <Card key={index} company={comapny} />
                  )
                })
              }
            </div>
          )
        })
      }
    </div>
  )
}
