'use client'

import Link from 'next/link'
import { menuItems } from './data/sidebarMenu'
import clsx from 'clsx'

interface SideBarProps {
  activeKey: string
}

const SideBar = ({ activeKey }: SideBarProps) => {
  return (
    <aside className="w-full bg-white border rounded-md shadow-sm text-xs">
      <ul className="divide-y divide-gray-100">
        {menuItems.map((item) => {
          const isActive = item.key === activeKey

          return (
            <li key={item.key} className="relative group">
              {/* Main Item */}
              {item.href ? (
                <Link href={item.href}>
                  <div
                    className={clsx(
                      'flex items-center gap-4 p-3 cursor-pointer transition',
                      isActive
                        ? 'bg-pink-100 text-pink-700 font-medium'
                        : 'hover:bg-pink-50'
                    )}
                  >
                    <item.icon
                      className={clsx(
                        'w-8 h-8 border-l px-1',
                        isActive
                          ? 'text-pink-600 border-pink-300'
                          : 'text-gray-600 border-gray-200'
                      )}
                    />
                    {item.label}
                  </div>
                </Link>
              ) : (
                <div
                  className={clsx(
                    'flex items-center gap-4 p-3 cursor-pointer',
                    isActive
                      ? 'bg-pink-100 text-pink-700 font-medium'
                      : 'hover:bg-pink-50'
                  )}
                >
                  <item.icon
                    className={clsx(
                      'w-8 h-8 border-l px-1',
                      isActive
                        ? 'text-pink-600 border-pink-300'
                        : 'text-gray-600 border-gray-200'
                    )}
                  />
                  {item.label}
                </div>
              )}

              {/* Sub Menu */}
              {item.subItems && (
                <ul className="absolute left-full top-0 hidden group-hover:block bg-pink-100 text-pink-700 w-48 rounded-md shadow-md">
                  {item.subItems.map((sub) => (
                    <li
                      key={sub.key}
                      className="px-4 py-2 hover:bg-pink-50"
                    >
                      <Link href={sub.href}>{sub.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default SideBar
