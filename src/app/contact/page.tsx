import Link from 'next/link'
import type { Metadata } from 'next'
import { Building2, FileText, Image as ImageIcon, Mail, MapPin, Phone, Sparkles, Bookmark } from 'lucide-react'
import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { SITE_CONFIG } from '@/lib/site-config'
import { buildPageMetadata } from '@/lib/seo'
import { getFactoryState } from '@/design/factory/get-factory-state'
import { getProductKind } from '@/design/factory/get-product-kind'
import { CONTACT_PAGE_OVERRIDE_ENABLED, ContactPageOverride } from '@/overrides/contact-page'

const surface = 'rounded-[1.85rem] border border-slate-200/90 bg-white shadow-[0_22px_70px_rgba(6,18,37,0.08)]'

const fieldClass =
  'h-12 w-full rounded-2xl border border-slate-200/90 bg-white px-4 text-sm text-slate-950 shadow-[0_1px_0_rgba(6,18,37,0.04)] placeholder:text-slate-400 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0052ff]/35 focus-visible:border-[#0052ff]/40'

const textareaClass =
  'min-h-[180px] w-full rounded-2xl border border-slate-200/90 bg-white px-4 py-3 text-sm text-slate-950 shadow-[0_1px_0_rgba(6,18,37,0.04)] placeholder:text-slate-400 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0052ff]/35 focus-visible:border-[#0052ff]/40'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/contact',
    title: `Contact | ${SITE_CONFIG.name}`,
    description: `Reach ${SITE_CONFIG.name} for onboarding, partnerships, and product support—routed to the right team with clear next steps.`,
    openGraphTitle: `Contact | ${SITE_CONFIG.name}`,
    openGraphDescription: 'Send a message or explore help resources—we respond with the right lane, not a generic queue.',
  })
}

export default function ContactPage() {
  if (CONTACT_PAGE_OVERRIDE_ENABLED) {
    return <ContactPageOverride />
  }

  const { recipe } = getFactoryState()
  const productKind = getProductKind(recipe)
  const lanes =
    productKind === 'directory'
      ? [
          {
            icon: Building2,
            title: 'Business onboarding',
            body: 'Add listings, verify operational details, and bring your business surface live quickly.',
          },
          {
            icon: Phone,
            title: 'Partnership support',
            body: 'Talk through bulk publishing, local growth, and operational setup questions.',
          },
          {
            icon: MapPin,
            title: 'Coverage requests',
            body: 'Need a new geography or category lane? We can shape the directory around it.',
          },
        ]
      : productKind === 'editorial'
        ? [
            {
              icon: FileText,
              title: 'Editorial submissions',
              body: 'Pitch essays, columns, and long-form ideas that fit the publication.',
            },
            {
              icon: Mail,
              title: 'Newsletter partnerships',
              body: 'Coordinate sponsorships, collaborations, and issue-level campaigns.',
            },
            {
              icon: Sparkles,
              title: 'Contributor support',
              body: 'Get help with voice, formatting, and publication workflow questions.',
            },
          ]
        : productKind === 'visual'
          ? [
              {
                icon: ImageIcon,
                title: 'Creator collaborations',
                body: 'Discuss gallery launches, creator features, and visual campaigns.',
              },
              {
                icon: Sparkles,
                title: 'Licensing and use',
                body: 'Reach out about usage rights, commercial requests, and visual partnerships.',
              },
              {
                icon: Mail,
                title: 'Media kits',
                body: 'Request creator decks, editorial support, or visual feature placement.',
              },
            ]
          : [
              {
                icon: Bookmark,
                title: 'Collection submissions',
                body: 'Suggest resources, boards, and links that deserve a place in the library.',
              },
              {
                icon: Mail,
                title: 'Resource partnerships',
                body: 'Coordinate curation projects, reference pages, and link programs.',
              },
              {
                icon: Sparkles,
                title: 'Curator support',
                body: 'Need help organizing shelves, collections, or profile-connected boards?',
              },
            ]

  return (
    <PageShell
      eyebrow="Contact"
      title={`Talk with ${SITE_CONFIG.name}`}
      description="Tell us what you are trying to publish, fix, or launch. We route requests to the right lane—directory, gallery, or partnerships—instead of a single generic queue."
      actions={
        <>
          <Button
            variant="secondary"
            className="rounded-full border border-white/25 bg-white/10 text-white backdrop-blur hover:bg-white/20"
            asChild
          >
            <Link href="/help">Help center</Link>
          </Button>
          <Button className="rounded-full bg-white px-6 text-[#061225] shadow-lg hover:bg-slate-100" asChild>
            <Link href="/listings">Browse directory</Link>
          </Button>
        </>
      }
    >
      <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-slate-950">How we route your request</h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-600">
              Pick the lane that best matches your note—we read every message and reply with a clear owner and timeline.
            </p>
          </div>
          <div className="grid gap-4">
            {lanes.map((lane) => (
              <Card key={lane.title} className={`${surface} border-0 shadow-none transition hover:-translate-y-0.5`}>
                <CardContent className="p-6 sm:p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200/90 bg-[linear-gradient(145deg,#f4f7fc_0%,#eef2f9_100%)] text-[#0052ff]">
                    <lane.icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-slate-950">{lane.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{lane.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className={`${surface} border-0 shadow-none`}>
          <CardContent className="p-6 sm:p-8 lg:p-10">
            <Badge className="rounded-full bg-[#0052ff] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white hover:bg-[#0040cc]">
              Message
            </Badge>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">Send a message</h2>
            <p className="mt-2 text-sm text-slate-600">Include enough context that we can respond with the right next step on the first reply.</p>
            <form className="mt-6 grid gap-4">
              <input className={fieldClass} name="name" type="text" autoComplete="name" placeholder="Your name" />
              <input className={fieldClass} name="email" type="email" autoComplete="email" placeholder="Email address" />
              <input className={fieldClass} name="subject" type="text" placeholder="What do you need help with?" />
              <textarea
                className={textareaClass}
                name="message"
                placeholder="Share the full context so we can respond with the right next step."
              />
              <Button
                type="submit"
                className="h-12 rounded-full bg-[#0052ff] text-sm font-semibold text-white shadow-[0_14px_40px_rgba(0,82,255,0.28)] hover:bg-[#0040cc]"
              >
                Send message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </PageShell>
  )
}
