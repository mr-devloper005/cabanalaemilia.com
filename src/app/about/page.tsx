import Link from 'next/link'
import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { SITE_CONFIG } from '@/lib/site-config'

const surface = 'rounded-[1.85rem] border border-slate-200/90 bg-white shadow-[0_22px_70px_rgba(6,18,37,0.08)]'

const highlights = [
  { label: 'Directory profiles live', value: '4.2k+' },
  { label: 'Gallery assets hosted', value: '120k' },
  { label: 'Avg. profile completeness', value: '94%' },
]

const pillars = [
  {
    title: 'Trust-first discovery',
    description:
      'Structured listings, verified fields, and consistent imagery so visitors can compare businesses without wading through noisy feeds.',
  },
  {
    title: 'Visual storytelling',
    description:
      'Gallery-grade layouts keep photography and brand moments legible on every device, from first glance to full-screen detail.',
  },
  {
    title: 'Operator-friendly workflows',
    description:
      'Teams update copy, media, and categories in one rhythm—fewer handoffs between marketing, ops, and local managers.',
  },
]

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="Company"
      title={`About ${SITE_CONFIG.name}`}
      description={`${SITE_CONFIG.name} pairs a modern business directory with a dedicated image gallery—built for operators who need both proof and presence in a single destination.`}
      actions={
        <>
          <Button
            variant="secondary"
            className="rounded-full border border-white/25 bg-white/10 text-white backdrop-blur hover:bg-white/20"
            asChild
          >
            <Link href="/team">Meet the team</Link>
          </Button>
          <Button className="rounded-full bg-white px-6 text-[#061225] shadow-lg hover:bg-slate-100" asChild>
            <Link href="/contact">Partner with us</Link>
          </Button>
        </>
      }
    >
      <div className="grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-start">
        <Card className={`${surface} border-0 shadow-none`}>
          <CardContent className="space-y-6 p-8 sm:p-10">
            <Badge className="rounded-full bg-[#0052ff] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white hover:bg-[#0040cc]">
              Mission
            </Badge>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              Make local and digital brands legible at a glance—and beautiful on second look.
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              We focus on two lanes only: structured business pages and immersive visual publishing. That focus keeps search fast,
              cards consistent, and creative teams aligned on what “done” looks like.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-200/80 bg-[#f4f7fc] px-4 py-4">
                  <div className="text-2xl font-semibold tracking-tight text-[#0052ff]">{item.value}</div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">{item.label}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <div className="grid gap-4">
          {pillars.map((pillar) => (
            <Card key={pillar.title} className={`${surface} border-0 shadow-none transition hover:-translate-y-0.5`}>
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-slate-950">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{pillar.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageShell>
  )
}
