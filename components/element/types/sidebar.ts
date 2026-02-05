// types/sidebar.ts
import { LucideIcon } from 'lucide-react'

export interface SubMenuItem {
  key: string
  label: string
  href: string
}

export interface MenuItem {
  key: string
  label: string
  href?: string
  icon: LucideIcon
  subItems?: SubMenuItem[]
}
