'use client'

import type { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { cn } from '@/lib/utils'

export function PageShell({
  eyebrow,
  title,
  description,
  actions,
  children,
}: {
  eyebrow?: string
  title: string
  description?: string
  actions?: ReactNode
  children?: ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#eef2f9] text-slate-950">
      <NavbarShell />
      <main>
        <section className="relative overflow-hidden bg-[linear-gradient(125deg,#030914_0%,#0a1f3d_48%,#071f4d_100%)]">
          <div
            className="pointer-events-none absolute -right-24 top-1/2 h-[min(520px,90vw)] w-[min(520px,90vw)] -translate-y-1/2 rounded-full bg-[#0052ff]/20 blur-[110px]"
            aria-hidden
          />
          <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                {eyebrow ? (
                  <span className="inline-flex items-center rounded-full bg-[#0052ff] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white shadow-[0_14px_40px_rgba(0,82,255,0.35)]">
                    {eyebrow}
                  </span>
                ) : null}
                <h1
                  className={cn(
                    'text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl',
                    eyebrow ? 'mt-6' : 'mt-0',
                  )}
                >
                  {title}
                </h1>
                {description ? <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">{description}</p> : null}
              </div>
              {actions ? (
                <div className="flex flex-shrink-0 flex-wrap items-center gap-3">{actions}</div>
              ) : null}
            </div>
            <div className="mt-10 flex flex-wrap gap-4 text-sm font-medium text-slate-300">
              <Link href="/listings" className="inline-flex items-center gap-2 transition hover:text-white">
                Business Directory
                <ArrowRight className="h-4 w-4 text-[#7eb6ff]" />
              </Link>
              <span className="text-white/25">·</span>
              <Link href="/images" className="inline-flex items-center gap-2 transition hover:text-white">
                Image Gallery
                <ArrowRight className="h-4 w-4 text-[#7eb6ff]" />
              </Link>
              <span className="text-white/25">·</span>
              <Link href="/contact" className="inline-flex items-center gap-2 transition hover:text-white">
                Contact
                <ArrowRight className="h-4 w-4 text-[#7eb6ff]" />
              </Link>
            </div>
          </div>
        </section>
        <section className="relative mx-auto max-w-7xl -mt-8 px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
          <div className="space-y-10">{children}</div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
