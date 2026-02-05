import React from 'react'
import Link from 'next/link'
import { BreadcrumbItem } from './types/breadcrumb'

type Props = {
  items: BreadcrumbItem[]
}

const Breadcrumb = ({ items }: Props) => {
  return (
    <div className="shadow-sm h-12 w-full flex items-center bg-white mb-2 text-[10px]">
      {items.map((item, index) => {
        const isLast = index === items.length - 1

        return (
          <React.Fragment key={index}>
            {item.href && !isLast ? (
              <Link href={item.href} className="px-4 text-gray-600 hover:text-black">
                {item.title}
              </Link>
            ) : (
              <span className="px-4 text-gray-800 font-medium">
                {item.title}
              </span>
            )}

            {!isLast && <span className="px-2 text-gray-400">›</span>}
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default Breadcrumb
