import Link from 'next/link'
import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { SITE_CONFIG } from '@/lib/site-config'

const surface = 'rounded-[1.85rem] border border-slate-200/90 bg-white shadow-[0_22px_70px_rgba(6,18,37,0.08)]'

const roles = [
  {
    title: 'Senior Product Designer',
    location: 'Remote · Americas',
    type: 'Full-time',
    level: 'Senior',
    focus: 'Directory UX, gallery systems, and design QA with engineering.',
  },
  {
    title: 'Full-stack Engineer',
    location: 'Hybrid · NYC',
    type: 'Full-time',
    level: 'Mid',
    focus: 'Performance, media pipelines, and resilient listing search.',
  },
  {
    title: 'Partner Success Lead',
    location: 'Remote',
    type: 'Full-time',
    level: 'Lead',
    focus: 'Onboarding multi-location brands and creative studios.',
  },
]

const benefits = [
  'Remote-first with quarterly in-person design reviews',
  'Medical, dental, and vision for you and dependents',
  '$2k annual learning budget + conference passes',
  'Dedicated Fridays for polish, docs, and community support',
]

export default function CareersPage() {
  return (
    <PageShell
      eyebrow="Company"
      title="Careers"
      description={`Join ${SITE_CONFIG.name} as we raise the bar for how businesses publish listings and gallery-grade media in one cohesive experience.`}
      actions={
        <>
          <Button
            variant="secondary"
            className="rounded-full border border-white/25 bg-white/10 text-white backdrop-blur hover:bg-white/20"
            asChild
          >
            <Link href="/about">Our story</Link>
          </Button>
          <Button className="rounded-full bg-white px-6 text-[#061225] shadow-lg hover:bg-slate-100" asChild>
            <Link href="/contact">Apply now</Link>
          </Button>
        </>
      }
    >
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-5">
          {roles.map((role) => (
            <Card key={role.title} className={`${surface} border-0 shadow-none transition hover:-translate-y-0.5`}>
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className="rounded-full bg-[#061225] px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
                    {role.level}
                  </Badge>
                  <Badge variant="outline" className="rounded-full border-slate-200/90 text-slate-600">
                    {role.type}
                  </Badge>
                </div>
                <h2 className="mt-4 text-xl font-semibold text-slate-950">{role.title}</h2>
                <p className="mt-1 text-sm font-medium text-slate-500">{role.location}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{role.focus}</p>
                <Button variant="outline" className="mt-5 rounded-full border-slate-200 text-slate-950 hover:border-[#0052ff]/40 hover:text-[#0052ff]" asChild>
                  <Link href="/contact">Discuss this role</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className={`${surface} h-fit border-0 shadow-none`}>
          <CardContent className="space-y-5 p-6 sm:p-8">
            <Badge className="rounded-full bg-[#0052ff] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">Why join</Badge>
            <h3 className="text-xl font-semibold text-slate-950">Build the surface operators trust every day</h3>
            <p className="text-sm leading-relaxed text-slate-600">
              We obsess over clarity: metadata that scans fast, imagery that feels premium, and motion that stays out of the way.
            </p>
            <ul className="space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="rounded-2xl border border-slate-200/80 bg-[#f4f7fc] px-4 py-3 text-sm text-slate-700">
                  {benefit}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </PageShell>
  )
}
