import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const surface = 'rounded-[1.85rem] border border-slate-200/90 bg-white shadow-[0_22px_70px_rgba(6,18,37,0.08)]'

const licenses = [
  { name: 'Next.js', description: 'MIT License — App Router, streaming, and image optimization.' },
  { name: 'React', description: 'MIT License — UI composition and concurrent features.' },
  { name: 'Tailwind CSS', description: 'MIT License — utility styling system powering our layout tokens.' },
  { name: 'Radix UI', description: 'MIT License — accessible primitives for dialogs, accordions, and navigation.' },
  { name: 'Lucide Icons', description: 'ISC License — iconography used across marketing and product shells.' },
]

export default function LicensesPage() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Licenses"
      description="Open source acknowledgements for the libraries that help us ship a fast directory and gallery experience—presented with the same electric-blue accents as the homepage."
    >
      <Card className={`${surface} border-0 shadow-none`}>
        <CardContent className="space-y-6 p-6 sm:p-10">
          <p className="text-sm leading-relaxed text-slate-600">
            We are grateful to the maintainers behind these projects. Unless noted, dependencies follow the licenses referenced in our shipped lockfile. Contact legal@example.com for additional attribution requests.
          </p>
          <div className="space-y-3">
            {licenses.map((license) => (
              <div key={license.name} className="flex flex-col gap-2 rounded-2xl border border-slate-200/80 bg-[#f4f7fc] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-slate-950">{license.name}</h3>
                  <p className="mt-1 text-sm text-slate-600">{license.description}</p>
                </div>
                <Badge variant="outline" className="w-fit rounded-full border-slate-200 text-slate-600">
                  Open source
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </PageShell>
  )
}
