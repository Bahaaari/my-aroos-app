import React from 'react'

const BillSummary = () => {
    const dataSummary = [
        { title: "جمع کل", value: "780000 تومان" },
        { title: "مالیات بر ارزش افزوده", value: "70200 تومان" },
        { title: "تخفیف", value: "0 تومان" },
        { title: "مبلغ قابل پرداخت", value: "850200 تومان", highlight: true }
    ]
  return (
    <div>
        <div className='flex items-center justify-center'>
            <table className='w-200 border border-gray-300 text-sm font-semibold'>
              <tbody>
                {dataSummary.map((row, index) => (
                    <tr
                      key={index}
                      className={`border-b border-gray-300 ${
                        row.highlight
                          ? "bg-pink-100"
                          : index % 2 === 0
                          ? "bg-gray-100"
                          : "bg-white"
                      }`}
                    >
                        <td className='px-4 py-3'>{row.title}</td>
                        <td className='px-4 py-3 text-left'>{row.value}</td>
                    </tr>
                ))}
             </tbody>
          </table>
        </div>
    </div>
  )
}

export default BillSummary