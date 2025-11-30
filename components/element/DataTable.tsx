import React from "react";

interface TableProps<T> {
  headers: string[];
  data: T[];
  renderRow: (item: T, index: number) => React.ReactNode;
}

function DataTable<T>({ headers, data, renderRow }: TableProps<T>) {
  return (
    <div className="flex  text-xs place-self-center">
      <table className="w-full border-separate border-spacing-0">
        <thead className="border-b-1 border-gray-200">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-8 py-2 font-medium text-start text-[10px]  border-0"
              >
                {header}
              </th>
            ))}
          </tr>
          <tr>
      <td colSpan={headers.length}>
        <div className="border-b-2 border-gray-100"></div>
      </td>
    </tr>

    {/* فاصله بین خط و اولین ردیف بدنه */}
    <tr>
      <td colSpan={headers.length} className="h-1"></td>
    </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-gray-100" : "bg-white"
              }`}
            >
              {renderRow(item, index)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
