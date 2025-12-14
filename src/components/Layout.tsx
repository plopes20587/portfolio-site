import type { ReactNode } from 'react'
import { useEffect } from 'react'
import HeaderNav from './HeaderNav'
import StarCursor from './StarCursor'
import { siteMeta } from '../siteData'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  useEffect(() => {
    document.title = siteMeta.title
    const description = document.querySelector('meta[name="description"]')
    if (description) description.setAttribute('content', siteMeta.description)
  }, [])

  return (
    <div id="top" className="relative min-h-screen bg-ink text-white">
      <StarCursor />
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 pb-20 pt-10 sm:px-10">
        <HeaderNav />
        <main className="flex-1 pb-20">{children}</main>
      </div>
    </div>
  )
}

export default Layout
