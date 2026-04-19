import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { SITE_CONFIG } from '@/lib/site-config'

const surface = 'rounded-[1.85rem] border border-slate-200/90 bg-white shadow-[0_22px_70px_rgba(6,18,37,0.08)]'

const sections = [
  {
    title: 'Acceptable use',
    body:
      'You agree not to misuse the platform—no unlawful content, harassment, malware distribution, or attempts to scrape the service beyond documented APIs. Automated access must respect rate limits.',
  },
  {
    title: 'Accounts & security',
    body:
      'You are responsible for safeguarding credentials and promptly notifying us of unauthorized access. We may suspend accounts that present risk to other customers or infrastructure.',
  },
  {
    title: 'Content ownership',
    body:
      'You retain ownership of listings, imagery, and text you submit. You grant us a license to host, display, adapt formats, and promote the content solely to operate and improve the product.',
  },
  {
    title: 'Service changes',
    body:
      'We may update features to reflect roadmap priorities. When changes materially affect paid plans, we will provide notice according to your agreement or invoice terms.',
  },
  {
    title: 'Disclaimers',
    body:
      'The service is provided on an "as is" basis to the maximum extent permitted by law. We do not warrant uninterrupted availability but commit to transparent status communication.',
  },
]

export default function TermsPage() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Terms of Service"
      description={`The rules for using ${SITE_CONFIG.name}, including business directory listings, gallery publishing, and related support channels—styled consistently with our marketing shell.`}
    >
      <Card className={`${surface} border-0 shadow-none`}>
        <CardContent className="space-y-6 p-6 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Last updated · March 16, 2026</p>
          <p className="text-sm leading-relaxed text-slate-600">
            By accessing {SITE_CONFIG.name}, you agree to these terms and our Privacy Policy. If you are using the product on behalf of an organization, you represent that you have authority to bind that organization.
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
