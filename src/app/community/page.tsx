import Link from 'next/link'
import type { Metadata } from 'next'
import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { mockCommunityEvents, mockCommunityGroups } from '@/data/mock-data'
import { SITE_CONFIG } from '@/lib/site-config'
import { buildPageMetadata } from '@/lib/seo'

const surface = 'rounded-[1.85rem] border border-slate-200/90 bg-white shadow-[0_22px_70px_rgba(6,18,37,0.08)]'

const eventNarrative: Record<string, string> = {
  'event-1': 'Live teardowns of new listing layouts and gallery treatments shipping to production.',
  'event-2': 'Workshop: auditing imagery, metadata, and accessibility across large brand rollouts.',
  'event-3': 'AMA with partner success on migrating multi-location media into the gallery stack.',
}

const groupNarrative: Record<string, string> = {
  'group-1': 'Operators balancing brand governance with fast-moving gallery campaigns.',
  'group-2': 'Designers aligning tokens, motion, and cards with the navy + electric blue system.',
  'group-3': 'Frontend engineers tuning media performance and resilient search.',
  'group-4': 'Distributed teams sharing rituals for shipping directory updates weekly.',
}

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/community',
    title: `Community | ${SITE_CONFIG.name}`,
    description: 'Programs, office hours, and peer groups for teams publishing listings and gallery-grade visuals.',
    openGraphTitle: `Community | ${SITE_CONFIG.name}`,
    openGraphDescription: 'Connect with peers building directory and visual discovery experiences.',
  })
}

export default function CommunityPage() {
  return (
    <PageShell
      eyebrow="Resources"
      title="Community"
      description="Programs for operators, designers, and engineers who care about trustworthy listings and expressive imagery—hosted with the same visual language as the rest of the product."
      actions={
        <Button className="rounded-full bg-white px-6 text-[#061225] shadow-lg hover:bg-slate-100" asChild>
          <Link href="/register">Join the hub</Link>
        </Button>
      }
    >
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <h2 className="text-xl font-semibold text-slate-950">Live sessions</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Drop in for structured critiques and AMAs—we rotate topics between directory integrity, gallery craft, and launch readiness.
          </p>
          <div className="mt-6 space-y-4">
            {mockCommunityEvents.map((event) => (
              <Card key={event.id} className={`${surface} border-0 shadow-none transition hover:-translate-y-0.5`}>
                <CardContent className="p-6 sm:p-7">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge className="rounded-full bg-[#0052ff] px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">{event.tag}</Badge>
                    <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">{event.date}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-slate-950">{event.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{eventNarrative[event.id] || event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-slate-950">Peer groups</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Lightweight cohorts you can join without leaving your workflow—each group maps to how teams actually ship here.
          </p>
          <div className="mt-6 grid gap-4">
            {mockCommunityGroups.map((group) => (
              <Card key={group.id} className={`${surface} border-0 shadow-none`}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-semibold text-slate-950">{group.name}</h3>
                      <p className="mt-2 text-sm text-slate-600">{groupNarrative[group.id] || group.focus}</p>
                    </div>
                    <span className="rounded-full bg-[#f4f7fc] px-3 py-1 text-xs font-semibold text-slate-700">{group.members.toLocaleString()} members</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  )
}
