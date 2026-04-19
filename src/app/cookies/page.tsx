import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'

const surface = 'rounded-[1.85rem] border border-slate-200/90 bg-white shadow-[0_22px_70px_rgba(6,18,37,0.08)]'

const sections = [
  {
    title: 'Essential cookies',
    body:
      'Required for authentication, session continuity, security monitoring, and anti-abuse signals. These cookies cannot be disabled if you wish to use signed-in experiences.',
  },
  {
    title: 'Preference cookies',
    body:
      'Remember UI choices such as collapsed navigation, filter defaults on directory pages, and gallery layout preferences on supported browsers.',
  },
  {
    title: 'Analytics cookies',
    body:
      'Help us understand aggregate usage—for example, which listing templates load fastest or where gallery uploads stall—so we can prioritize engineering work responsibly.',
  },
  {
    title: 'Managing cookies',
    body:
      'Use your browser controls to block categories where allowed. Note that blocking essential cookies may prevent sign-in or cause intermittent errors during uploads.',
  },
]

export default function CookiesPage() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Cookie Policy"
      description="Transparent detail on the cookies powering authentication, gallery uploads, and analytics—matching the homepage’s navy hero and airy content rhythm."
    >
      <Card className={`${surface} border-0 shadow-none`}>
        <CardContent className="space-y-6 p-6 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Last updated · March 16, 2026</p>
          <p className="text-sm leading-relaxed text-slate-600">
            Cookies are small text files stored on your device. We minimize their use, document each category below, and review vendors regularly for alignment with this policy.
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
