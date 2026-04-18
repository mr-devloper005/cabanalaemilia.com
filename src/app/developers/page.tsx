import Link from 'next/link'
import type { Metadata } from 'next'
import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SITE_CONFIG } from '@/lib/site-config'
import { buildPageMetadata } from '@/lib/seo'

const surface = 'rounded-[1.85rem] border border-slate-200/90 bg-white shadow-[0_22px_70px_rgba(6,18,37,0.08)]'

const endpoints = [
  { method: 'GET', path: '/api/v1/listings', scope: 'listings:read', detail: 'Paginated directory feed with filters for category, geo, and freshness.' },
  { method: 'POST', path: '/api/v1/listings', scope: 'listings:write', detail: 'Create or update structured business profiles with media attachments.' },
  { method: 'GET', path: '/api/v1/gallery', scope: 'media:read', detail: 'Retrieve gallery posts with responsive renditions and blur placeholders.' },
  { method: 'POST', path: '/api/v1/gallery', scope: 'media:write', detail: 'Upload visual posts with metadata mapped to linked listings.' },
]

const sdks = [
  { name: 'JavaScript / TypeScript', note: 'Browser + Node helpers for auth headers, signed URLs, and batch uploads.' },
  { name: 'CLI', note: 'Ship assets from CI with checksum validation and environment-aware configuration.' },
  { name: 'Webhooks', note: 'Subscribe to listing verification, gallery moderation, and search indexing events.' },
]

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/developers',
    title: `Developers | ${SITE_CONFIG.name}`,
    description: 'Reference layouts, API patterns, and integration notes for teams connecting to the directory and gallery stack.',
    openGraphTitle: `Developers | ${SITE_CONFIG.name}`,
    openGraphDescription: 'Build on top of listings and gallery experiences with clear contracts.',
  })
}

export default function DevelopersPage() {
  return (
    <PageShell
      eyebrow="Resources"
      title="Developers"
      description="Blueprint pages, rate-limit guidance, and integration patterns for teams extending the directory and gallery—styled consistently with the rest of the marketing site."
      actions={
        <>
          <Button
            variant="secondary"
            className="rounded-full border border-white/25 bg-white/10 text-white backdrop-blur hover:bg-white/20"
            asChild
          >
            <Link href="/status">System status</Link>
          </Button>
          <Button className="rounded-full bg-white px-6 text-[#061225] shadow-lg hover:bg-slate-100" asChild>
            <Link href="/contact">Request sandbox</Link>
          </Button>
        </>
      }
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className={`${surface} border-0 shadow-none`}>
          <CardContent className="space-y-4 p-6 sm:p-8">
            <Badge className="rounded-full bg-[#061225] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">HTTP surface</Badge>
            <h2 className="text-xl font-semibold text-slate-950">Representative endpoints</h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Contracts stay predictable: JSON bodies for structured listings, multipart routes for gallery uploads, and scoped tokens for automation.
            </p>
            <div className="space-y-3">
              {endpoints.map((row) => (
                <div key={`${row.method}:${row.path}`} className="rounded-2xl border border-slate-200/80 bg-[#f4f7fc] px-4 py-4">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide">
                    <span className="rounded-full bg-[#0052ff] px-2 py-0.5 text-white">{row.method}</span>
                    <code className="text-slate-800">{row.path}</code>
                  </div>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">{row.scope}</p>
                  <p className="mt-2 text-sm text-slate-700">{row.detail}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <div className="space-y-4">
          <Card className={`${surface} border-0 shadow-none`}>
            <CardContent className="p-6 sm:p-8">
              <Badge className="rounded-full bg-[#0052ff] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">Tooling</Badge>
              <h3 className="mt-4 text-lg font-semibold text-slate-950">SDKs & automation</h3>
              <ul className="mt-4 space-y-3">
                {sdks.map((sdk) => (
                  <li key={sdk.name} className="rounded-2xl border border-slate-200/80 bg-white px-4 py-3">
                    <p className="font-semibold text-slate-950">{sdk.name}</p>
                    <p className="mt-1 text-sm text-slate-600">{sdk.note}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className={`${surface} border-0 shadow-none`}>
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-slate-950">Need a partner review?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Share your architecture diagram—we respond with integration notes within three business days.
              </p>
              <Button className="mt-4 rounded-full bg-[#0052ff] text-white hover:bg-[#0040cc]" asChild>
                <Link href="/contact">Book architecture office hours</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageShell>
  )
}
