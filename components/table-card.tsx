import { Dictionary } from "lodash";

type gridColumnsType = {
  [key: number]: string;
}

const gridColumns: gridColumnsType = {
  3: "grid grid-cols-3",
  4: "grid grid-cols-4",
};

export default function TableCard({
    table,
}: {
    table: Array<Dictionary<String>>;
}) {
  const keys = Object.keys(table[0]).slice(1);
  return (
    <>
    {
      table.length > 0 ?
      <div className='p-1 roudned'>
        <div className="grid w-full">
          <div className="p-1 md:p-2 text-base md:text-xl text-stone-500 font-bold justify-self-center">추첨 및 당첨자 발표 : {table[0]['시간']}</div>
        </div>
        <div className={`grid ${gridColumns[keys.length ?? 3]} gap-2 p-2 bg-sky-400 text-stone-50 text-base md:text-lg font-bold rounded`}>
          {
            keys.map((itemKey, itemIndex) => {
              return (
                <div key={itemIndex}>
                  {itemKey}
                </div>
              )
            })
          }
        </div>
        <div className={`grid grid-cols-${keys.length} gap-2 p-2 text-xs md:text-base`}>
          {
            table.map((item, i) => {
              return (
                <>
                  {
                    keys.map((itemKey, itemIndex) => {
                      return (
                        <div key={itemIndex}>{item[itemKey]}</div>
                      )
                    })
                  }
                </>
              )
            })
          }
        </div>
      </div>
      : <></>
    }
    </>
  );
};
