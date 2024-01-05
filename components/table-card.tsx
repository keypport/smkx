import { Dictionary } from "lodash";

type gridColumnsType = {
  [key: number]: string;
}

const gridColumns: gridColumnsType = {
  4: "grid grid-cols-4",
  5: "grid grid-cols-5",
};

export default function TableCard({
    table,
}: {
    table: Array<Dictionary<String>>;
}) {
  const tableKeylength = Object.keys(table[0]).length;
  
  return (
    <>
    {
      table.length > 0 ?
      <div className='p-1 roudned'>
        <div className={`grid ${gridColumns[tableKeylength ?? 4]} gap-2 p-2 bg-sky-400 text-stone-50 rounded text-base md:text-lg font-bold`}>
          {
            Object.keys(table[0]).map((itemKey, itemIndex) => {
              return (
                <div key={itemIndex}>
                  {itemKey}
                </div>
              )
            })
          }
        </div>
        <div className={`grid grid-cols-${Object.keys(table[0]).length} gap-2 p-2 text-xs md:text-base`}>
          {
            table.map((item, i) => {
              return (
                <>
                  {
                    Object.keys(item).map((itemKey, itemIndex) => {
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
