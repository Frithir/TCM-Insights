import { ReactNode } from 'react'

export interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  slug: string
  content?: ReactNode
}