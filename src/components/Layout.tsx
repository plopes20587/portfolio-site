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
      {/* Full-width layout - sections handle their own max-width constraints */}
      <div className="relative flex min-h-screen w-full flex-col">
        <HeaderNav />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
}

export default Layout
