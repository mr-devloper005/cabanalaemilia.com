import Link from 'next/link'
import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const surface = 'rounded-[1.85rem] border border-slate-200/90 bg-white shadow-[0_22px_70px_rgba(6,18,37,0.08)]'

const services = [
  { name: 'Directory API', status: 'Operational', detail: 'Search, filters, and listing mutations within SLO.' },
  { name: 'Gallery CDN', status: 'Operational', detail: 'Image transforms, responsive renditions, and edge caching healthy.' },
  { name: 'Auth & sessions', status: 'Operational', detail: 'Sign-in, refresh tokens, and device sync nominal.' },
]

const incidents = [
  { date: 'Mar 12, 2026', title: 'Delayed gallery notifications', status: 'Resolved', detail: 'Webhook retries normalized after provider maintenance.' },
  { date: 'Feb 22, 2026', title: 'Directory search indexing lag', status: 'Resolved', detail: 'Indexer backlog cleared; monitoring widened.' },
]

export default function StatusPage() {
  return (
    <PageShell
      eyebrow="Resources"
      title="System status"
      description="Live posture for the services powering business listings and gallery delivery—mirroring the homepage’s navy gradient and crisp white stat cards."
      actions={
        <Button className="rounded-full bg-white px-6 text-[#061225] shadow-lg hover:bg-slate-100" asChild>
          <Link href="/contact">Report an issue</Link>
        </Button>
      }
    >
      <div className="grid gap-5 md:grid-cols-3">
        {services.map((service) => (
          <Card key={service.name} className={`${surface} border-0 shadow-none`}>
            <CardContent className="p-6 sm:p-7">
              <h2 className="text-lg font-semibold text-slate-950">{service.name}</h2>
              <Badge className="mt-4 rounded-full bg-emerald-500/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-800">
                {service.status}
              </Badge>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.detail}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card className={`${surface} border-0 shadow-none`}>
        <CardContent className="p-6 sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-lg font-semibold text-slate-950">Incident history</h3>
            <Badge variant="outline" className="w-fit rounded-full border-slate-200 text-slate-600">
              Last 90 days
            </Badge>
          </div>
          <div className="mt-6 space-y-4">
            {incidents.map((incident) => (
              <div key={incident.title} className="rounded-2xl border border-slate-200/80 bg-[#f4f7fc] px-4 py-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">{incident.date}</div>
                <div className="mt-1 text-sm font-semibold text-slate-950">{incident.title}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#0052ff]">{incident.status}</div>
                <p className="mt-2 text-sm text-slate-600">{incident.detail}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </PageShell>
  )
}
