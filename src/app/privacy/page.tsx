import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'

const surface = 'rounded-[1.85rem] border border-slate-200/90 bg-white shadow-[0_22px_70px_rgba(6,18,37,0.08)]'

const sections = [
  {
    title: 'What we collect',
    body:
      'We collect account details (name, email, organization), content you publish to the business directory and gallery, usage telemetry needed to operate the service, and support conversations you initiate with our team.',
  },
  {
    title: 'How we use information',
    body:
      'Data powers authentication, personalization of your workspace, abuse prevention, search quality, billing, and product analytics in aggregate form. We do not sell personal data or use it for unrelated ad targeting.',
  },
  {
    title: 'Media & listings',
    body:
      'Imagery you upload may be processed for resizing, moderation, and accessibility features. Listing metadata may be surfaced publicly according to your publishing settings.',
  },
  {
    title: 'Retention & deletion',
    body:
      'We retain content while your account is active and for a limited grace period after closure to prevent accidental loss. You may request deletion of personal data subject to legal holds.',
  },
  {
    title: 'Your controls',
    body:
      'Manage marketing emails from your account settings, export structured copies of your listings, and contact privacy@example.com for data subject requests.',
  },
]

export default function PrivacyPage() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Privacy Policy"
      description="How we collect, use, and protect information across the directory and gallery experiences—presented with the same calm navy hero and spacious white cards as the rest of the marketing site."
    >
      <Card className={`${surface} border-0 shadow-none`}>
        <CardContent className="space-y-6 p-6 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Last updated · March 16, 2026</p>
          <p className="text-sm leading-relaxed text-slate-600">
            This policy explains the categories of data involved when you operate business listings, publish gallery posts, or interact with support channels. Capitalized terms match those in our Terms of Service.
          </p>
          <div className="space-y-4">
            {sections.map((section) => (
              <div key={section.title} className="rounded-2xl border border-slate-200/80 bg-[#f4f7fc] px-5 py-5">
                <h3 className="text-base font-semibold text-slate-950">{section.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{section.body}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </PageShell>
  )
}
