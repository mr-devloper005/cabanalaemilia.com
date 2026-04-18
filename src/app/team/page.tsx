import Link from 'next/link'
import type { Metadata } from 'next'
import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { mockTeamMembers } from '@/data/mock-data'
import { SITE_CONFIG } from '@/lib/site-config'
import { buildPageMetadata } from '@/lib/seo'

const surface = 'rounded-[1.85rem] border border-slate-200/90 bg-white shadow-[0_22px_70px_rgba(6,18,37,0.08)]'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/team',
    title: `Team | ${SITE_CONFIG.name}`,
    description: `Meet the people shaping ${SITE_CONFIG.name}'s directory and gallery experience.`,
    openGraphTitle: `Team | ${SITE_CONFIG.name}`,
    openGraphDescription: `Leadership and product specialists behind ${SITE_CONFIG.name}.`,
  })
}

const disciplines = [
  { title: 'Product & design', detail: 'Systems for listings, media, and trust signals across breakpoints.' },
  { title: 'Engineering', detail: 'Search, caching, and resilient media delivery for global audiences.' },
  { title: 'Partner success', detail: 'Hands-on onboarding for brands adopting the directory + gallery stack.' },
]

export default function TeamPage() {
  return (
    <PageShell
      eyebrow="Company"
      title="Team"
      description={`We are a cross-functional group obsessed with pairing structured business data with expressive imagery—so ${SITE_CONFIG.name} feels premium, not patched together.`}
      actions={
        <Button className="rounded-full bg-white px-6 text-[#061225] shadow-lg hover:bg-slate-100" asChild>
          <Link href="/contact">Work with us</Link>
        </Button>
      }
    >
      <div className="grid gap-5 md:grid-cols-3">
        {disciplines.map((d) => (
          <Card key={d.title} className={`${surface} border-0 shadow-none`}>
            <CardContent className="p-6 sm:p-7">
              <h3 className="text-lg font-semibold text-slate-950">{d.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{d.detail}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div>
        <div className="mb-6">
          <Badge className="rounded-full bg-[#0052ff] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">People</Badge>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">Faces behind the platform</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {mockTeamMembers.map((member) => (
            <Card key={member.id} className={`${surface} border-0 shadow-none transition hover:-translate-y-1`}>
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <Avatar className="h-16 w-16 border border-slate-200/80 shadow-sm">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback className="bg-[#f4f7fc] text-slate-700">{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-lg font-semibold text-slate-950">{member.name}</p>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#0052ff]">{member.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{member.bio}</p>
                <p className="mt-3 text-xs text-slate-500">{member.location}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageShell>
  )
}
