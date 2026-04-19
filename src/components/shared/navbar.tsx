'use client'

import { useMemo, useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search, Menu, X, User, FileText, Building2, LayoutGrid, Tag, Image as ImageIcon, ChevronRight, Sparkles, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/lib/auth-context'
import { SITE_CONFIG, type TaskKey } from '@/lib/site-config'
import { cn } from '@/lib/utils'
import { siteContent } from '@/config/site.content'
import { getFactoryState } from '@/design/factory/get-factory-state'
import { NAVBAR_OVERRIDE_ENABLED, NavbarOverride } from '@/overrides/navbar'

const NavbarAuthControls = dynamic(() => import('@/components/shared/navbar-auth-controls').then((mod) => mod.NavbarAuthControls), {
  ssr: false,
  loading: () => null,
})

const taskIcons: Record<TaskKey, any> = {
  article: FileText,
  listing: Building2,
  sbm: LayoutGrid,
  classified: Tag,
  image: ImageIcon,
  profile: User,
  social: LayoutGrid,
  pdf: FileText,
  org: Building2,
  comment: FileText,
}

const variantClasses = {
  'compact-bar': {
    shell: 'border-b border-slate-200/90 bg-white/95 text-slate-950 shadow-[0_8px_32px_rgba(6,18,37,0.06)] backdrop-blur-xl',
    logo: 'rounded-2xl border border-slate-200/90 bg-gradient-to-br from-white to-slate-50 shadow-sm ring-1 ring-slate-200/40',
    active: 'bg-[#0052ff]/12 text-[#0052ff] ring-1 ring-[#0052ff]/20',
    idle: 'text-slate-600 hover:bg-slate-100 hover:text-slate-950',
    cta: 'rounded-full bg-[#0052ff] text-white shadow-[0_12px_36px_rgba(0,82,255,0.25)] hover:bg-[#0040cc]',
    mobile: 'border-t border-slate-200/90 bg-white shadow-[0_-8px_40px_rgba(6,18,37,0.06)] backdrop-blur-lg',
  },
  'editorial-bar': {
    shell: 'border-b border-[#d7c4b3] bg-[#fff7ee]/90 text-[#2f1d16] backdrop-blur-xl',
    logo: 'rounded-full border border-[#dbc6b6] bg-white shadow-sm',
    active: 'bg-[#2f1d16] text-[#fff4e4]',
    idle: 'text-[#72594a] hover:bg-[#f2e5d4] hover:text-[#2f1d16]',
    cta: 'rounded-full bg-[#2f1d16] text-[#fff4e4] hover:bg-[#452920]',
    mobile: 'border-t border-[#dbc6b6] bg-[#fff7ee]',
  },
  'floating-bar': {
    shell: 'border-b border-transparent bg-transparent text-white',
    logo: 'rounded-[1.35rem] border border-white/12 bg-white/8 shadow-[0_16px_48px_rgba(15,23,42,0.22)] backdrop-blur',
    active: 'bg-[#8df0c8] text-[#07111f]',
    idle: 'text-slate-200 hover:bg-white/10 hover:text-white',
    cta: 'rounded-full bg-[#8df0c8] text-[#07111f] hover:bg-[#77dfb8]',
    mobile: 'border-t border-white/10 bg-[#09101d]/96',
  },
  'utility-bar': {
    shell: 'border-b border-[#d7deca] bg-[#f4f6ef]/94 text-[#1f2617] backdrop-blur-xl',
    logo: 'rounded-xl border border-[#d7deca] bg-white shadow-sm',
    active: 'bg-[#1f2617] text-[#edf5dc]',
    idle: 'text-[#56604b] hover:bg-[#e7edd9] hover:text-[#1f2617]',
    cta: 'rounded-lg bg-[#1f2617] text-[#edf5dc] hover:bg-[#2f3a24]',
    mobile: 'border-t border-[#d7deca] bg-[#f4f6ef]',
  },
} as const

const directoryPalette = {
  'directory-clean': {
    shell: 'border-b border-slate-200/90 bg-white/95 text-slate-950 shadow-[0_8px_32px_rgba(6,18,37,0.07)] backdrop-blur-xl supports-[backdrop-filter]:bg-white/90',
    logo: 'rounded-2xl border border-slate-200/90 bg-gradient-to-br from-white to-slate-50 shadow-sm ring-1 ring-slate-200/40',
    navIdle: 'text-slate-600 hover:bg-slate-100 hover:text-slate-950',
    navActive: 'bg-[#0052ff]/12 text-[#0052ff] shadow-sm ring-1 ring-[#0052ff]/20',
    search: 'border border-slate-200/90 bg-slate-50/90 text-slate-600 shadow-inner transition hover:border-[#0052ff]/35 hover:bg-white hover:shadow-md',
    cta: 'bg-[#0052ff] text-white shadow-[0_12px_40px_rgba(0,82,255,0.25)] hover:bg-[#0040cc]',
    post: 'border border-slate-200/90 bg-white text-slate-950 hover:border-[#0052ff]/35 hover:bg-slate-50/80',
    mobile: 'border-t border-slate-200/90 bg-white shadow-[0_-8px_40px_rgba(6,18,37,0.06)] backdrop-blur-lg',
  },
  'market-utility': {
    shell: 'border-b border-[#d7deca] bg-[#f4f6ef]/96 text-[#1f2617] shadow-[0_1px_0_rgba(64,76,34,0.06)] backdrop-blur-xl',
    logo: 'rounded-xl border border-[#d7deca] bg-white',
    navIdle: 'text-[#56604b] hover:bg-[#e7edd9] hover:text-[#1f2617]',
    navActive: 'bg-[#1f2617]/12 text-[#1f2617] ring-1 ring-[#1f2617]/15',
    search: 'border border-[#d7deca] bg-white text-[#56604b] hover:border-[#1f2617]/25',
    cta: 'bg-[#1f2617] text-[#edf5dc] hover:bg-[#2f3a24]',
    post: 'border border-[#d7deca] bg-white text-[#1f2617] hover:bg-[#eef2e4]',
    mobile: 'border-t border-[#d7deca] bg-[#f4f6ef]',
  },
} as const

export function Navbar() {
  if (NAVBAR_OVERRIDE_ENABLED) {
    return <NavbarOverride />
  }

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { isAuthenticated } = useAuth()
  const { recipe } = getFactoryState()

  const navigation = useMemo(() => SITE_CONFIG.tasks.filter((task) => task.enabled && task.key !== 'profile'), [])
  const primaryNavigation = navigation.slice(0, 5)
  const mobileNavigation = navigation.map((task) => ({
    name: task.label,
    href: task.route,
    icon: taskIcons[task.key] || LayoutGrid,
  }))
  const primaryTask = SITE_CONFIG.tasks.find((task) => task.key === recipe.primaryTask && task.enabled) || primaryNavigation[0]
  const isDirectoryProduct = recipe.homeLayout === 'listing-home' || recipe.homeLayout === 'classified-home'

  if (isDirectoryProduct) {
    const palette = directoryPalette[(recipe.brandPack === 'market-utility' ? 'market-utility' : 'directory-clean') as keyof typeof directoryPalette]
    const navActiveClass = palette.navActive
    const navIdleClass = palette.navIdle

    return (
      <header className={cn('sticky top-0 z-50 w-full', palette.shell)}>
        <nav
          className="mx-auto flex h-[4.25rem] max-w-7xl items-center gap-2 px-4 sm:h-20 sm:gap-3 sm:px-6 lg:grid lg:h-20 lg:grid-cols-[minmax(0,auto)_minmax(0,1fr)_minmax(0,auto)] lg:items-center lg:gap-4 lg:px-8"
          aria-label="Main navigation"
        >
          {/* Brand + primary links — no flex-1: avoids squeezing search + auth */}
          <div className="flex min-w-0 shrink-0 items-center gap-2 sm:gap-4 lg:gap-6">
            <Link href="/" className="flex min-w-0 shrink-0 items-center gap-2.5 sm:gap-3">
              <div className={cn('flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden p-1.5 sm:h-11 sm:w-11', palette.logo)}>
                <img src="/favicon.png?v=20260401" alt={`${SITE_CONFIG.name} logo`} width="44" height="44" className="h-full w-full object-contain" />
              </div>
              <div className="min-w-0">
                <span className="block truncate text-base font-semibold tracking-tight sm:text-lg">{SITE_CONFIG.name}</span>
                <span className="hidden truncate text-[10px] font-medium uppercase tracking-[0.22em] text-slate-500 sm:block">
                  {siteContent.navbar.tagline}
                </span>
              </div>
            </Link>

            <div className="hidden items-center gap-1 lg:flex">
              {primaryNavigation.map((task) => {
                const Icon = taskIcons[task.key] || LayoutGrid
                const isActive = pathname === task.route || pathname.startsWith(`${task.route}/`)
                return (
                  <Link
                    key={task.key}
                    href={task.route}
                    className={cn(
                      'inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-semibold transition-colors',
                      isActive ? navActiveClass : navIdleClass,
                    )}
                  >
                    <Icon className="h-4 w-4 shrink-0 opacity-80" aria-hidden />
                    <span className="whitespace-nowrap">{task.label}</span>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Search — desktop pill (grid column 2 so it never overlaps auth) */}
          <div className="hidden min-w-0 justify-self-stretch px-1 lg:block lg:min-w-0">
            <Link
              href="/search"
              className={cn('mx-auto flex w-full max-w-xl items-center gap-2 rounded-full py-2 pl-3 pr-2.5 xl:max-w-2xl', palette.search)}
            >
              <Search className="h-4 w-4 shrink-0 text-slate-400" aria-hidden />
              <span className="min-w-0 flex-1 truncate text-left text-sm text-slate-600">Search listings, gallery…</span>
            </Link>
          </div>

          {/* Actions — own grid column; wraps if needed */}
          <div className="flex min-w-0 shrink-0 flex-wrap items-center justify-end gap-1.5 sm:gap-2">
            <Button variant="ghost" size="icon" asChild className="rounded-full text-slate-600 hover:bg-slate-100 hover:text-[#0052ff] lg:hidden">
              <Link href="/search" aria-label="Open search">
                <Search className="h-5 w-5" />
              </Link>
            </Button>

            {isAuthenticated ? (
              <NavbarAuthControls variant="directory" />
            ) : (
              <div className="hidden items-center gap-2 md:flex">
                <Button variant="ghost" size="sm" asChild className="rounded-full px-4 text-slate-700 hover:bg-slate-100 hover:text-slate-950">
                  <Link href="/login">Sign in</Link>
                </Button>
                <Button size="sm" asChild className={cn('h-9 rounded-full px-4 font-semibold shadow-sm sm:h-10 sm:px-5', palette.cta)}>
                  <Link href="/register">
                    <Plus className="mr-1 h-4 w-4" aria-hidden />
                    Join free
                  </Link>
                </Button>
              </div>
            )}

            <Button
              variant="ghost"
              size="icon"
              className="rounded-full text-slate-700 hover:bg-slate-100 lg:hidden"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav-directory"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">{isMobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
            </Button>
          </div>
        </nav>

        {isMobileMenuOpen ? (
          <>
            <button
              type="button"
              className="fixed inset-0 top-[4.25rem] z-40 bg-slate-950/35 backdrop-blur-[2px] sm:top-20 lg:hidden"
              aria-label="Close menu"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div
              id="mobile-nav-directory"
              className={cn('fixed inset-x-0 bottom-0 top-[4.25rem] z-50 overflow-y-auto sm:top-20 lg:hidden', palette.mobile)}
            >
              <div className="mx-auto max-w-7xl space-y-2 px-4 py-4 pb-8">
                <Link
                  href="/search"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn('flex items-center gap-3 rounded-2xl px-4 py-3.5 text-sm font-semibold transition', palette.search)}
                >
                  <Search className="h-4 w-4 shrink-0" aria-hidden />
                  <span>Search directory &amp; gallery</span>
                  <ChevronRight className="ml-auto h-4 w-4 shrink-0 opacity-50" aria-hidden />
                </Link>
                {mobileNavigation.map((item) => {
                  const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        'flex items-center gap-3 rounded-2xl px-4 py-3.5 text-sm font-semibold transition-colors',
                        isActive ? navActiveClass : palette.post,
                      )}
                    >
                      <item.icon className="h-5 w-5 shrink-0 opacity-90" aria-hidden />
                      {item.name}
                    </Link>
                  )
                })}
                {!isAuthenticated ? (
                  <div className="mt-4 grid gap-2 border-t border-slate-200/80 pt-4 md:hidden">
                    <Button variant="outline" className="h-11 w-full rounded-2xl border-slate-200" asChild>
                      <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                        Sign in
                      </Link>
                    </Button>
                    <Button className={cn('h-11 w-full rounded-2xl font-semibold', palette.cta)} asChild>
                      <Link href="/register" onClick={() => setIsMobileMenuOpen(false)}>
                        Join free
                      </Link>
                    </Button>
                  </div>
                ) : null}
              </div>
            </div>
          </>
        ) : null}
      </header>
    )
  }

  const style = variantClasses[recipe.navbar]
  const isFloating = recipe.navbar === 'floating-bar'
  const isEditorial = recipe.navbar === 'editorial-bar'
  const isUtility = recipe.navbar === 'utility-bar'

  return (
    <header className={cn('sticky top-0 z-50 w-full', style.shell)}>
      <nav className={cn('mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8', isFloating ? 'h-24 pt-4' : 'h-20')}>
        <div className="flex min-w-0 flex-1 items-center gap-4 lg:gap-7">
          <Link href="/" className="flex shrink-0 items-center gap-3 whitespace-nowrap pr-2">
            <div className={cn('flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden p-1.5', style.logo)}>
              <img src="/favicon.png?v=20260401" alt={`${SITE_CONFIG.name} logo`} width="48" height="48" className="h-full w-full object-contain" />
            </div>
            <div className="min-w-0 hidden sm:block">
              <span className="block truncate text-xl font-semibold">{SITE_CONFIG.name}</span>
              <span className="hidden text-[10px] uppercase tracking-[0.28em] opacity-70 sm:block">{siteContent.navbar.tagline}</span>
            </div>
          </Link>

          {isEditorial ? (
            <div className="hidden min-w-0 flex-1 items-center gap-4 lg:flex">
              <div className="h-px flex-1 bg-[#d8c8bb]" />
              {primaryNavigation.map((task) => {
                const isActive = pathname === task.route || pathname.startsWith(`${task.route}/`)
                return (
                  <Link key={task.key} href={task.route} className={cn('text-sm font-semibold uppercase tracking-[0.18em] transition-colors', isActive ? 'text-[#2f1d16]' : 'text-[#7b6254] hover:text-[#2f1d16]')}>
                    {task.label}
                  </Link>
                )
              })}
              <div className="h-px flex-1 bg-[#d8c8bb]" />
            </div>
          ) : isFloating ? (
            <div className="hidden min-w-0 flex-1 items-center gap-2 lg:flex">
              {primaryNavigation.map((task) => {
                const Icon = taskIcons[task.key] || LayoutGrid
                const isActive = pathname === task.route || pathname.startsWith(`${task.route}/`)
                return (
                  <Link key={task.key} href={task.route} className={cn('flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors', isActive ? style.active : style.idle)}>
                    <Icon className="h-4 w-4" />
                    <span>{task.label}</span>
                  </Link>
                )
              })}
            </div>
          ) : isUtility ? (
            <div className="hidden min-w-0 flex-1 items-center gap-2 lg:flex">
              {primaryNavigation.map((task) => {
                const isActive = pathname === task.route || pathname.startsWith(`${task.route}/`)
                return (
                  <Link key={task.key} href={task.route} className={cn('rounded-lg px-3 py-2 text-sm font-semibold transition-colors', isActive ? style.active : style.idle)}>
                    {task.label}
                  </Link>
                )
              })}
            </div>
          ) : (
            <div className="hidden min-w-0 flex-1 items-center gap-1 overflow-hidden lg:flex">
              {primaryNavigation.map((task) => {
                const Icon = taskIcons[task.key] || LayoutGrid
                const isActive = pathname === task.route || pathname.startsWith(`${task.route}/`)
                return (
                  <Link key={task.key} href={task.route} className={cn('flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold transition-colors whitespace-nowrap', isActive ? style.active : style.idle)}>
                    <Icon className="h-4 w-4" />
                    <span>{task.label}</span>
                  </Link>
                )
              })}
            </div>
          )}
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          {primaryTask && (recipe.navbar === 'utility-bar' || recipe.navbar === 'floating-bar') ? (
            <Link href={primaryTask.route} className="hidden items-center gap-2 rounded-full border border-current/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] opacity-80 md:inline-flex">
              <Sparkles className="h-3.5 w-3.5" />
              {primaryTask.label}
            </Link>
          ) : null}

          <Button variant="ghost" size="icon" asChild className="hidden rounded-full md:flex">
            <Link href="/search">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Link>
          </Button>

          {isAuthenticated ? (
            <NavbarAuthControls />
          ) : (
            <div className="hidden items-center gap-2 md:flex">
              <Button variant="ghost" size="sm" asChild className="rounded-full px-4">
                <Link href="/login">Sign In</Link>
              </Button>
              <Button size="sm" asChild className={style.cta}>
                <Link href="/register">{isEditorial ? 'Subscribe' : isUtility ? 'Post Now' : 'Get Started'}</Link>
              </Button>
            </div>
          )}

          <Button variant="ghost" size="icon" className="rounded-full lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {isFloating && primaryTask ? (
        <div className="mx-auto hidden max-w-7xl px-4 pb-3 sm:px-6 lg:block lg:px-8">
          <Link href={primaryTask.route} className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-200 backdrop-blur hover:bg-white/12">
            Featured surface
            <span>{primaryTask.label}</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      ) : null}

      {isMobileMenuOpen && (
        <div className={style.mobile}>
          <div className="space-y-2 px-4 py-4">
            <Link href="/search" onClick={() => setIsMobileMenuOpen(false)} className="mb-3 flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 text-sm font-semibold text-muted-foreground">
              <Search className="h-4 w-4" />
              Search the site
            </Link>
            {mobileNavigation.map((item) => {
              const isActive = pathname.startsWith(item.href)
              return (
                <Link key={item.name} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className={cn('flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition-colors', isActive ? style.active : style.idle)}>
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </header>
  )
}
